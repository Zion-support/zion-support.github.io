#!/usr/bin/env bash
# Assemble GitHub Pages artifact from public/ (source of truth).
# Gap-fill only the money/hub dual-path pages — do not walk the whole repo
# and do not touch field-services country leaves.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
python3 -m unittest -q scripts/test-private-ops-guard.py
python3 scripts/assert-no-private-ops.py public
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

# Discovery is the canonical free entry point. Guard it as a substantial
# static page with the approved free/no-card contract, not as a paid money path.
assert_free_discovery_path() {
  local f="out/discovery/index.html"
  if [ ! -f "$f" ]; then
    echo "ERROR: missing free Discovery path out/discovery/index.html" >&2
    exit 1
  fi
  local sz
  sz=$(wc -c < "$f" | tr -d ' ')
  if [ "$sz" -lt 5120 ]; then
    echo "ERROR: out/discovery/index.html is stub-sized (${sz}B < 5KB)" >&2
    exit 1
  fi
  if ! grep -Fq 'Free AI & Automation Discovery' "$f" \
    || ! grep -Fq 'No payment or meeting is required.' "$f" \
    || ! grep -Fq 'Discovery remains free.' "$f"; then
    echo "ERROR: out/discovery/index.html missing approved Free Discovery contract" >&2
    exit 1
  fi
  if grep -Fi 'http-equiv="refresh"' "$f" >/dev/null \
    || grep -Fi "http-equiv='refresh'" "$f" >/dev/null \
    || grep -Fq 'PLACEHOLDER' "$f"; then
    echo "ERROR: out/discovery/index.html looks like a meta-refresh / PLACEHOLDER stub redirect" >&2
    exit 1
  fi
  echo "OK free Discovery path (${sz}B)"
}
assert_free_discovery_path

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
  # Approved policy reconciliation: Discovery remains free; all other guards stay.
  python3 scripts/test-free-discovery-home.py
  python3 scripts/assert-free-discovery-home.py "$f"
  if ! grep -Fq '/assets/css/site.css' "$f"; then
    echo "ERROR: out/index.html missing /assets/css/site.css" >&2
    exit 1
  fi
  echo "OK Family A homepage (${sz}B)"
}

assert_managed_it_public() {
  local f="out/managed-it-services/index.html"
  if [ ! -s "$f" ]; then
    echo "ERROR: missing or empty managed IT page" >&2
    exit 1
  fi
  python3 scripts/assert-free-discovery-home.py "$f"
  echo "OK managed IT free Discovery entry point"
}

# Inspect the three public entry pages after assembly. This is a scoped
# content/structure guard, not a general PII scanner or proof of email delivery.
# Use synthetic examples in its tests; never copy customer records into fixtures.
assert_public_entry_content() {
  python3 - <<'PY_PUBLIC_ENTRY'
from collections import Counter
from decimal import Decimal, InvalidOperation
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import runpy
from urllib.parse import urlsplit

policy = runpy.run_path('scripts/assert-free-discovery-home.py')
currency = re.compile(policy['CURRENCY'], re.I)
procurement = re.compile(
    r'\b(?:PO|RFQ|RFP|purchase[ -]+order|pedido de compra|contract (?:id|number|reference))'
    r'\s*(?:[:#-]\s*)?(?:[A-Z][A-Z0-9]*[-/])?\d[A-Z0-9/-]*\b'
    r'|\b[A-Z]*COMPR[A-Z]*[-/]\d+\b', re.I)
named_record = re.compile(
    r'\b(?:client|customer|cliente|institution|institui[çc][aã]o)\s*:\s*'
    r'(?!anonym|anonim|confidential|confidencial|not disclosed|n[aã]o divulgado)[A-Z]', re.I)
anonymous = re.compile(r'\banonymi[sz]|\banonimi[sz]', re.I)
case_claim = re.compile(r'\b(?:renewed|renewal|renovou|renova[çc][aã]o)\b', re.I)

def nonzero(amount):
    return any(c in '123456789' for c in amount)

class Entry(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = Counter()
        self.text, self.metadata, self.scripts, self.styles = [], [], [], []
        self.links, self.anchor, self.json_blocks, self.json_open = [], None, [], None
        self.form_open, self.controls = False, set()
        self.rows, self.row, self.cell = [], None, None
        self.section_depth, self.proofs, self.proof_open = 0, [], []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids[(tag, a['id'])] += 1
            if a['id'].startswith('proof-'):
                assert a['id'] in {'proof-h', 'proof-anonymized', 'proof-managed-it', 'proof-maintenance'}, 'Customer-specific proof anchor'
        if tag == 'meta':
            self.metadata.append(a.get('content', ''))
        if tag == 'script':
            self.scripts.append(urlsplit(a.get('src', '')).path)
            if a.get('type', '').lower() == 'application/ld+json':
                assert self.json_open is None, 'Nested structured data'
                self.json_open = []
        if tag == 'link' and 'stylesheet' in a.get('rel', '').lower().split():
            self.styles.append(urlsplit(a.get('href', '')).path)
        if tag == 'form' and a.get('id') == 'dform':
            assert not self.form_open, 'Nested Discovery form'
            self.form_open = True
        if self.form_open and tag in {'input', 'select', 'textarea'}:
            self.controls.add(a.get('name', ''))
        if tag == 'a':
            assert self.anchor is None, 'Nested anchor'
            self.anchor = [a.get('href', ''), []]
        if tag == 'tr':
            self.row = []
        if tag in {'td', 'th'} and self.row is not None:
            self.cell = []
        if tag == 'section':
            self.section_depth += 1
            if a.get('id', '').startswith('proof-') or 'proof-h' in a.get('aria-labelledby', '').split():
                self.proofs.append([])
                self.proof_open.append((self.section_depth, len(self.proofs) - 1))

    def handle_endtag(self, tag):
        if tag == 'script' and self.json_open is not None:
            self.json_blocks.append(''.join(self.json_open))
            self.json_open = None
        if tag == 'form':
            self.form_open = False
        if tag == 'a' and self.anchor is not None:
            self.links.append((self.anchor[0], ' '.join(self.anchor[1])))
            self.anchor = None
        if tag in {'td', 'th'} and self.cell is not None:
            self.row.append(' '.join(self.cell))
            self.cell = None
        if tag == 'tr' and self.row is not None:
            self.rows.append(self.row)
            self.row = None
        if tag == 'section':
            self.proof_open = [x for x in self.proof_open if x[0] != self.section_depth]
            self.section_depth -= 1

    def handle_data(self, data):
        if self.json_open is not None:
            self.json_open.append(data)
        else:
            self.text.append(data)
        if self.anchor is not None:
            self.anchor[1].append(data)
        if self.cell is not None:
            self.cell.append(data)
        for _, i in self.proof_open:
            self.proofs[i].append(data)

def check_offer(value, discovery=False):
    if isinstance(value, dict):
        discovery = discovery or bool(re.search(r'\bdiscovery\b', str(value.get('name', '')), re.I))
        if discovery and 'price' in value:
            assert Decimal(str(value['price'])) == 0, 'Nonzero structured Discovery price'
        for child in value.values():
            check_offer(child, discovery)
    elif isinstance(value, list):
        for child in value:
            check_offer(child, discovery)

for rel in ['index.html', 'managed-it-services/index.html', 'discovery/index.html']:
    try:
        raw = (Path('out') / rel).read_text(encoding='utf-8')
        p = Entry()
        p.feed(raw)
        p.close()
        assert not p.form_open and p.anchor is None and p.json_open is None and not p.proof_open, 'Unclosed form, link, structured data or proof section'
        text = re.sub(r'\s+', ' ', ' '.join(p.text + p.metadata))
        assert not policy['NEGATED'].search(text), 'Negated free Discovery claim'
        for match in policy['PAID'].finditer(text):
            assert not any(nonzero(x) for x in match.groups() if x), 'Paid Discovery claim'
        assert not procurement.search(unescape(raw)), 'Customer-specific procurement reference'
        assert not named_record.search(text), 'Named customer record'
        for proof in p.proofs:
            claim = ' '.join(proof)
            assert not case_claim.search(claim) or anonymous.search(claim), 'Named renewal proof requires anonymization'
        for href, label in p.links:
            u = urlsplit(href)
            if u.path.rstrip('/') == '/discovery' and u.netloc in {'', 'ziontechgroup.com'}:
                assert not any(nonzero(m.group(1)) for m in currency.finditer(label)), 'Priced Discovery CTA'
        for row in p.rows:
            if len(row) > 1 and re.search(r'\bdiscovery\b', row[0], re.I):
                assert not nonzero(row[1]), 'Nonzero Discovery table price'
        for block in p.json_blocks:
            data = json.loads(block)
            check_offer(data)
            for match in policy['PAID'].finditer(json.dumps(data, ensure_ascii=False)):
                assert not any(nonzero(x) for x in match.groups() if x), 'Paid Discovery structured copy'
        if rel == 'discovery/index.html':
            assert p.ids[('form', 'dform')] == 1 and p.ids[('section', 'result')] == 1, 'Missing or duplicate questionnaire/report container'
            assert {'name', 'email', 'process', 'hours'} <= p.controls, 'Incomplete Discovery questionnaire'
            assert '/assets/js/discovery-delivery.js' in p.scripts and '/assets/css/discovery.css' in p.styles, 'Missing canonical Discovery dependencies'
            for asset in ['assets/js/discovery-delivery.js', 'assets/css/discovery.css']:
                assert (Path('out') / asset).is_file() and (Path('out') / asset).stat().st_size > 0, 'Missing or empty Discovery dependency'
        print('OK public entry content: ' + rel)
    except (AssertionError, OSError, ValueError, InvalidOperation) as exc:
        raise SystemExit('ERROR public entry content (' + rel + '): ' + str(exc))
PY_PUBLIC_ENTRY
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
assert_managed_it_public
assert_aaa_official_ladder

# Approved scoped app-evaluation publication; preserve all safety guards above.
node scripts/test-network-evaluation.cjs
node scripts/bootstrap-network-evaluation.cjs out
node scripts/verify-network-evaluation-artifact.cjs out

python3 scripts/test-free-discovery-guard.py
assert_public_entry_content

echo "Prepared out ($(find out -type f | wc -l) files)"
