#!/usr/bin/env python3
import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]

totalRuns = len(records)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
candidates = []
potentialClients_latest = 0
scanned_latest = 0

for r in records:
    ev = r.get('event', '')
    if ev in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            candidates.append(ts)
    src = r.get('summary', r)
    sendsAttempted += src.get('sent', src.get('emailsSentCount', 0))
    duplicatesSuppressed += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
    if 'No auth for gmail' in err_text or 'timed out' in err_text:
        authFailures += 1
    hotFollowups += src.get('hotFollowups', 0)
    if ev == 'complete':
        potentialClients_latest = src.get('potentialClients', 0)
        scanned_latest = src.get('scanned', 0)

if candidates:
    latestComplete = max(candidates)

print(f'totalRuns={totalRuns}')
print(f'sendsAttempted={sendsAttempted}')
print(f'duplicatesSuppressed={duplicatesSuppressed}')
print(f'authFailures={authFailures}')
print(f'hotFollowups={hotFollowups}')
print(f'latestComplete={latestComplete}')
print(f'latestPotentialClients={potentialClients_latest}')
print(f'latestScanned={scanned_latest}')
print(f'completeEvents={sum(1 for r in records if r.get("event") == "complete")}')
print(f'authMissingEvents={sum(1 for r in records if r.get("event") == "auth_missing")}')
print(f'startEvents={sum(1 for r in records if r.get("event") == "start")}')
print(f'legacySendEvents={sum(1 for r in records if r.get("event") == "send")}')
print(f'sendDisabledAnalysisEvents={sum(1 for r in records if r.get("event") == "send_disabled_analysis")}')
