#!/usr/bin/env bash
# Zion Agent Swarm Coordinator — Proactive Delegation v3.0
# Runs every 15 min. Performs real-time health checks + delegates tasks.
set -euo pipefail

REPO="/Users/klebergarciaalcatrao/zion-support.github.io"
DELEGATOR="/Users/klebergarciaalcatrao/.hermes/scripts/agent-task-delegator.py"
JOBS_JSON="/Users/klebergarciaalcatrao/.hermes/cron/jobs.json"
COORD_DOC="/Users/klebergarciaalcatrao/.hermes/multi-agent-coordination.md"
TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "[$TS] Swarm Coordinator v3.0 — cron run START"

# --- 1. Site uptime ---
SITE_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://ziontechgroup.com 2>/dev/null || echo "000")
SITE_STATUS="DOWN"
[ "$SITE_CODE" = "200" ] && SITE_STATUS="UP"
echo "Site: $SITE_CODE ($SITE_STATUS)"

# --- 2. Git log ---
GIT_SHA=$(git -C "$REPO" log --oneline -1 --format="%h %s" 2>/dev/null || echo "unknown")
UNCOMMITTED=$(git -C "$REPO" status --porcelain 2>/dev/null | wc -l | tr -d ' ')
echo "Git: $GIT_SHA | Uncommitted: $UNCOMMITTED"

# --- 3. Service + page counts ---
SERVICE_DIRS=$(ls -d "$REPO/app/services"/*/ 2>/dev/null | wc -l | tr -d ' ') || true
SITEMAP_URLS=$(grep -c '<loc>' "$REPO/public/sitemap.xml" 2>/dev/null || echo "0")
echo "Pages: $SERVICE_DIRS | Sitemap URLs: $SITEMAP_URLS"

# --- 4. Run agent-task-delegator.py (full state scan) ---
echo "--- Delegator scan ---"
python3 "$DELEGATOR" 2>&1 || echo "DELEGATOR FAILED"

# --- 5. Parse cron jobs.json for errors ---
echo "--- Cron job scan ---"
python3 -c "
import json, sys
with open('$JOBS_JSON') as f:
    data = json.load(f)
jobs = data.get('jobs', [])
ok = 0
err = 0
for j in jobs:
    if isinstance(j, dict):
        e = j.get('last_error')
        s = j.get('failure_streak', j.get('streak', 0))
        if e or s > 0:
            err += 1
            print(f'  ERROR: {j.get(\"id\",\"\")[:8]} {j.get(\"name\",\"\")} streak={s} err={str(e)[:100]}')
        else:
            ok += 1
print(f'Cron: {ok} ok / {err} err / {len(jobs)} total')
" 2>&1

# --- 6. Cross-check against coordination doc ---
DOC_LAST_UPDATED=$(grep "Last updated:" "$COORD_DOC" 2>/dev/null | tail -1 | sed -E 's/.*[Ll]ast updated: ([0-9T:+-]+Z?).*/\1/' || echo "UNKNOWN")
echo "Coord doc last updated: $DOC_LAST_UPDATED"

echo "[$TS] Swarm Coordinator v3.0 — cron run COMPLETE"
