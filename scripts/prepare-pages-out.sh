#!/usr/bin/env bash
# Assemble GitHub Pages artifact from public/ (source of truth).
# Gap-fill only the money/hub dual-path pages — do not walk the whole repo
# and do not touch field-services country leaves.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
rm -rf out
mkdir -p out

if [ -d public ]; then
  cp -a public/. out/
fi
# Override public/_redirects (may be a stale 37MB next-build auto-gen monster
# with 550K+ service-slug rules and NO entries for canonical doc routes) with the
# curated root _redirects that has explicit 200 rules for all money-path doc pages.
if [ -f _redirects ]; then
  cp _redirects out/_redirects
fi
# public/sitemap-0.xml + sitemap.xml (index → sitemap-0) + robots.txt ship as-is.

# Dual-path gap-fill (public wins). Hubs only — never copy country leaves.
for d in field-services field-services-brazil plans discovery enterprise about solutions blog managed-it-services ai-consulting-services finops-consulting autonomous-ai-agents healthcare-it-hipaa fintech-it-ai; do
  if [ -f "$d/index.html" ] && [ ! -f "out/$d/index.html" ]; then
    mkdir -p "out/$d"
    cp -a "$d/index.html" "out/$d/index.html"
  fi
done
if [ -f field-services/brazil/index.html ] && [ ! -f out/field-services/brazil/index.html ]; then
  mkdir -p out/field-services/brazil
  cp -a field-services/brazil/index.html out/field-services/brazil/index.html
fi

# Nested doc pages: docs/<parent>/<slug>/index.html (standalone HTML, no _next dep).
# These are NOT covered by the top-level gap-fill above (which only checks docs/<d>/index.html).
for sub in solutions/healthcare industries/financial-services tools/phishing-analyzer; do
  if [ -d "docs/$sub" ] && [ ! -d "out/$sub" ]; then
    parent="${sub%/*}"
    # If out/<parent> already exists as a file (stale standalone index.html from a
    # previous top-level gap-fill), move it out of the way so the directory from docs/
    # can be created underneath it without cp -a failing on the name collision.
    if [ -f "out/$parent" ] && [ ! -d "out/$parent" ]; then
      mv "out/$parent" "out/$parent.stale.bak"
    fi
    # Ensure the parent dir exists (may have just been created from a file move, or
    # may still be missing if public/<parent>/ was never populated for this sub).
    if [ ! -d "out/$parent" ]; then
      mkdir -p "out/$parent"
    fi
    cp -a "docs/$sub" "out/$parent/"
  fi
done

# Dual-path blog posts (public wins). Slug hubs only — never walk the whole repo.
if [ -d blog ]; then
  for f in blog/*/index.html; do
    [ -f "$f" ] || continue
    rel="${f#blog/}"
    if [ ! -f "out/blog/$rel" ]; then
      mkdir -p "out/blog/$(dirname "$rel")"
      cp -a "$f" "out/blog/$rel"
    fi
  done
fi

# Family A chrome assets
for f in assets/css/site.css assets/js/zion-shell.js css/site.css; do
  if [ -f "public/$f" ] && [ ! -f "out/$f" ]; then
    mkdir -p "out/$(dirname "$f")"
    cp -a "public/$f" "out/$f"
  elif [ -f "$f" ] && [ ! -f "out/$f" ]; then
    mkdir -p "out/$(dirname "$f")"
    cp -a "$f" "out/$f"
  fi
done

touch out/.nojekyll

# DURABLE GUARD: reject stub / placeholder money paths before Pages publish.
# Prevents Pay RED when a thin meta-refresh stub overwrites live ai-automation
# (e.g. hero-carousel workflow_dispatch publishing stub out/).
# FIELD-SERVICES LOCK: this gate does not touch field-services country leaves.
assert_money_path() {
  local rel="$1"
  local f="out/$rel"
  if [ ! -f "$f" ]; then
    echo "ERROR: missing money path out/$rel" >&2
    exit 1
  fi
  local sz
  sz=$(wc -c < "$f" | tr -d ' ')
  if [ "$sz" -lt 5120 ]; then
    echo "ERROR: out/$rel is stub-sized (${sz}B < 5KB)" >&2
    exit 1
  fi
  if ! grep -Fq '7sY00k7JScFV99Bf044ZG06' "$f"; then
    echo "ERROR: out/$rel lacks live Starter Pay link 7sY00k7JScFV99Bf044ZG06" >&2
    exit 1
  fi
  if grep -Fi 'http-equiv="refresh"' "$f" >/dev/null \
    || grep -Fi "http-equiv='refresh'" "$f" >/dev/null \
    || grep -Fq 'PLACEHOLDER' "$f"; then
    echo "ERROR: out/$rel looks like a meta-refresh / PLACEHOLDER stub redirect" >&2
    exit 1
  fi
  echo "OK money path out/$rel (${sz}B)"
}

assert_money_path services/ai-automation/index.html
assert_money_path plans/index.html
assert_money_path discovery/index.html

# P0 2026-09-21: reject the broken Next.js homepage shell and require sealed
# commercial markers before any Pages publish. Does not touch field-services.
assert_family_a_home() {
  local f="out/index.html"
  if [ ! -f "$f" ]; then
    echo "ERROR: missing out/index.html" >&2
    exit 1
  fi
  local sz
  sz=$(wc -c < "$f" | tr -d ' ')
  if [ "$sz" -gt 80000 ]; then
    echo "ERROR: out/index.html is ${sz}B — Next.js shell, not Family A static" >&2
    exit 1
  fi
  if grep -Fq '/_next/' "$f"; then
    echo "ERROR: out/index.html contains /_next/ (broken Next shell)" >&2
    exit 1
  fi
  # Discovery is ALWAYS free & online (policy 2026-10-04): require a link to the
  # free Discovery questionnaire instead of the retired "$99" marker.
  if ! grep -Fq '/discovery/' "$f"; then
    echo "ERROR: out/index.html missing free Discovery link /discovery/" >&2
    exit 1
  fi
  if ! grep -Fq '/assets/css/site.css' "$f"; then
    echo "ERROR: out/index.html missing /assets/css/site.css" >&2
    exit 1
  fi
  echo "OK Family A homepage (${sz}B)"
}

assert_mit_fgv() {
  local f="out/managed-it-services/index.html"
  if [ ! -f "$f" ]; then
    echo "ERROR: missing out/managed-it-services/index.html" >&2
    exit 1
  fi
  if ! grep -Fq 'proof-fgv' "$f"; then
    echo "ERROR: out/managed-it-services/index.html missing #proof-fgv" >&2
    exit 1
  fi
  if ! grep -Fq 'SDCOMPRASTIC-6963' "$f"; then
    echo "ERROR: out/managed-it-services/index.html missing SDCOMPRASTIC-6963" >&2
    exit 1
  fi
  echo "OK MIT FGV proof"
}

assert_aaa_official_ladder() {
  local f="out/autonomous-ai-agents/index.html"
  if [ ! -f "$f" ]; then
    echo "ERROR: missing out/autonomous-ai-agents/index.html" >&2
    exit 1
  fi
  if grep -Fq '$6,500' "$f"; then
    echo "ERROR: out/autonomous-ai-agents/index.html contains invented \$6,500 SKU" >&2
    exit 1
  fi
  echo "OK AAA official ladder"
}

assert_family_a_home
assert_mit_fgv
assert_aaa_official_ladder

assert_discovery_network_integrity() {
  local required=(
    "apps/index.html"
    "apps/network.html"
    "apps/start-here.html"
    "apps/discovery-to-action.html"
    "apps/discovery-app-paths.html"
    "apps/discovery-report-workbench.html"
    "global-fe-dispatch/index.html"
  )
  local rel
  for rel in "${required[@]}"; do
    if [ ! -f "out/$rel" ]; then
      echo "ERROR: missing Discovery/App Network path out/$rel" >&2
      exit 1
    fi
  done

  local d="out/discovery/index.html"
  if ! grep -Fq 'commercial@ziontechgroup.com' "$d"; then
    echo "ERROR: Discovery missing Commercial delivery address" >&2
    exit 1
  fi
  # Verify the assembled form's behavior, not one JavaScript spelling.
  # The current implementation computes cc from the validated client address
  # and Carlos. Reuse the offline contract tests: their fetch is mocked, so
  # this gate never sends real email or requires credentials/network access.
  local contract="scripts/test-discovery-delivery-contract.cjs"
  if [ ! -f "$contract" ]; then
    echo "ERROR: missing Discovery delivery contract tests ($contract)" >&2
    exit 1
  fi
  if ! command -v node >/dev/null 2>&1; then
    echo "ERROR: Node.js is required for the Discovery delivery contract" >&2
    exit 1
  fi
  if ! DISCOVERY_HTML="$ROOT/$d" node --test "$contract"; then
    echo "ERROR: assembled Discovery failed delivery/safety contract tests" >&2
    exit 1
  fi
  if ! grep -Fq 'formsubmit.co/ajax/commercial@ziontechgroup.com' "$d"; then
    echo "ERROR: Discovery missing automatic submission endpoint" >&2
    exit 1
  fi
  if ! grep -Fq 'Discovery stays free' "$d" && ! grep -Fq 'Discovery is always free' "$d"; then
    echo "ERROR: Discovery free-policy marker missing" >&2
    exit 1
  fi
  echo "OK Discovery/App Network integrity"
}

assert_discovery_network_integrity

assert_locale_journeys() {
  local required=(
    "en/index.html"
    "es/index.html"
    "fr/index.html"
    "de/index.html"
    "pt/discovery/index.html"
    "es/discovery/index.html"
    "fr/discovery/index.html"
    "de/discovery/index.html"
    "en/plans/index.html"
    "es/plans/index.html"
    "fr/plans/index.html"
    "de/plans/index.html"
  )
  local rel
  for rel in "${required[@]}"; do
    if [ ! -f "out/$rel" ]; then
      echo "ERROR: missing localized journey out/$rel" >&2
      exit 1
    fi
  done
  if grep -Fq '/en/discovery/' out/en/index.html; then
    echo "ERROR: English homepage links to nonexistent /en/discovery/" >&2
    exit 1
  fi
  if ! grep -Fq '/es/plans/' out/es/index.html; then
    echo "ERROR: Spanish homepage missing localized plans link" >&2
    exit 1
  fi
  if ! grep -Fq '/fr/plans/' out/fr/index.html; then
    echo "ERROR: French homepage missing localized plans link" >&2
    exit 1
  fi
  if ! grep -Fq '/de/plans/' out/de/index.html; then
    echo "ERROR: German homepage missing localized plans link" >&2
    exit 1
  fi
  echo "OK localized journeys"
}

assert_locale_journeys


assert_batch98_routes() {
  local required=(
    "apps/october-2026-batch98.html"
    "fraud-transaction-monitor/index.html"
    "claims-automation-ai/index.html"
    "underwriting-copilot-ai/index.html"
    "aml-screening-ai/index.html"
    "cash-flow-forecaster/index.html"
    "ar-collections-copilot/index.html"
    "policy-comparison-ai/index.html"
  )
  local rel
  for rel in "${required[@]}"; do
    if [ ! -f "out/$rel" ]; then
      echo "ERROR: missing Batch 98 route out/$rel" >&2
      exit 1
    fi
  done
  echo "OK Batch 98 routes"
}

assert_batch98_routes


assert_batch121_routes() {
  local required=(
    "apps/october-2026-batch24.html"
    "portfolio-insight-ai/index.html"
    "kyc-onboarding-copilot/index.html"
    "trade-surveillance-ai/index.html"
    "wealth-advisor-copilot/index.html"
    "credit-memo-generator/index.html"
    "liquidity-forecaster-ai/index.html"
    "regulatory-filing-copilot/index.html"
  )
  local rel
  for rel in "${required[@]}"; do
    if [ ! -f "out/$rel" ]; then
      echo "ERROR: missing Batch 121 route out/$rel" >&2
      exit 1
    fi
  done
  if grep -Fqi 'Discovery $99' out/apps/index.html; then
    echo "ERROR: retired paid Discovery language reappeared in out/apps/index.html" >&2
    exit 1
  fi
  if ! grep -Fq '/discovery/' out/apps/october-2026-batch24.html; then
    echo "ERROR: Batch 121 missing Free Discovery path" >&2
    exit 1
  fi
  echo "OK Batch 121 routes and free-Discovery policy"
}

assert_batch121_routes

echo "Prepared out ($(find out -type f | wc -l) files)"
