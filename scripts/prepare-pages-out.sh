#!/usr/bin/env bash
# Assemble GitHub Pages artifact from public/ (source of truth).
# Gap-fill only the money/hub dual-path pages — do not walk the whole repo
# and do not touch field-services country leaves.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
rm -rf out
python3 scripts/export-public-pages.py public out
# Generate FinOps scenario pages and promotion blocks into out/
node scripts/render-finops-scenario.cjs out/
# public/sitemap-0.xml + sitemap.xml (index → sitemap-0) + robots.txt ship as-is.

# Validate every legacy fallback source before copy. The checkout must remain quiescent.
# A regular file under a symlink directory could otherwise alias excluded ops documents.
copy_public_file() {
  local source="$1"
  local destination="$2"
  local ancestor="$source"
  case "$source" in
    ""|/*|..|../*|*/../*|*/..)
      echo "ERROR: invalid fallback source path" >&2
      return 1
      ;;
  esac
  while :; do
    if [ -L "$ancestor" ]; then
      echo "ERROR: fallback source links are not permitted" >&2
      return 1
    fi
    case "$ancestor" in
      */*) ancestor="${ancestor%/*}" ;;
      *) break ;;
    esac
  done
  if [ ! -f "$source" ]; then
    echo "ERROR: fallback source must be a regular file" >&2
    return 1
  fi
  cp -a "$source" "$destination"
}

# Dual-path gap-fill (public wins). Hubs only — never copy country leaves.
for d in field-services field-services-brazil plans discovery enterprise about solutions blog managed-it-services ai-consulting-services finops-consulting autonomous-ai-agents healthcare-it-hipaa fintech-it-ai; do
  if [ -f "$d/index.html" ] && [ ! -f "out/$d/index.html" ]; then
    mkdir -p "out/$d"
    copy_public_file "$d/index.html" "out/$d/index.html"
  fi
done
if [ -f field-services/brazil/index.html ] && [ ! -f out/field-services/brazil/index.html ]; then
  mkdir -p out/field-services/brazil
  copy_public_file field-services/brazil/index.html out/field-services/brazil/index.html
fi

# Dual-path blog posts (public wins). Slug hubs only — never walk the whole repo.
if [ -d blog ]; then
  for f in blog/*/index.html; do
    [ -f "$f" ] || continue
    rel="${f#blog/}"
    if [ ! -f "out/blog/$rel" ]; then
      mkdir -p "out/blog/$(dirname "$rel")"
      copy_public_file "$f" "out/blog/$rel"
    fi
  done
fi

# Family A chrome assets
for f in assets/css/site.css assets/js/zion-shell.js css/site.css; do
  if [ -f "public/$f" ] && [ ! -f "out/$f" ]; then
    mkdir -p "out/$(dirname "$f")"
    copy_public_file "public/$f" "out/$f"
  elif [ -f "$f" ] && [ ! -f "out/$f" ]; then
    mkdir -p "out/$(dirname "$f")"
    copy_public_file "$f" "out/$f"
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
    # Reconcile once from source of truth (public/) or repo root before failing.
    # public/ is the source of truth for Pages; a transient copy gap must not
    # publish a Pay RED, but a genuinely absent page must still fail closed.
    if [ -f "public/$rel" ]; then
      mkdir -p "out/$(dirname "$rel")"
      copy_public_file "public/$rel" "$f"
      echo "RECOVERED out/$rel from public/$rel" >&2
    elif [ -f "$rel" ]; then
      mkdir -p "out/$(dirname "$rel")"
      copy_public_file "$rel" "$f"
      echo "RECOVERED out/$rel from $rel" >&2
    fi
  fi
  if [ ! -f "$f" ]; then
    echo "ERROR: missing money path out/$rel" >&2
    echo "ERROR: source public/$rel present=$([ -f "public/$rel" ] && echo yes || echo no)" >&2
    echo "ERROR: out/$(dirname "$rel") listing: $(ls "out/$(dirname "$rel")" 2>/dev/null | head -8 | tr '\n' ' ')" >&2
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

python3 scripts/assert-no-private-ops.py out

echo "Prepared out ($(find out -type f | wc -l) files)"
