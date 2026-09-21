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

echo "Prepared out ($(find out -type f | wc -l) files)"
