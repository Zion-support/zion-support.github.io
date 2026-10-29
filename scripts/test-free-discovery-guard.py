#!/usr/bin/env python3
"""Offline behavioral fixtures for the real prepare-pages-out.sh entry guards.

Run: python3 scripts/test-free-discovery-guard.py [path/to/prepare-pages-out.sh]
Only guard functions are loaded into each disposable fixture. Full artifact
assembly, the existing private-path tests and app renderers are separate gates.
All customer and procurement examples below are synthetic, not source records.
"""
from pathlib import Path
import json
import re
import shutil
import subprocess
import sys
import tempfile

SCRIPT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).with_name('prepare-pages-out.sh')
PAY = '7sY00k7JScFV99Bf044ZG06'
PAD = '<!--' + 'x' * 5400 + '-->'
OFFER = '<script type="application/ld+json">' + json.dumps({
    '@type': 'Service', 'name': 'Managed IT',
    'offers': {'@type': 'Offer', 'name': 'Discovery', 'price': '0', 'priceCurrency': 'USD'},
}) + '</script>'
HOME = ('<!doctype html><html lang="pt-BR"><head><link href="/assets/css/site.css"></head><body>'
        '<a href="/discovery/">Discovery grátis</a><section aria-labelledby="proof-h">'
        '<h2 id="proof-h">Escopo e evidências</h2><p>Documented maintenance scope.</p></section></body></html>')
MANAGED = ('<!doctype html><html><head>' + OFFER + '</head><body>'
           '<a href="/discovery/">Free Discovery</a>'
           '<p>Optional Consulting $499; Starter $2,500; Growth $8,000/mo.</p>'
           '<table><tr><td>Discovery</td><td>$0</td></tr>'
           '<tr><td>Starter</td><td>$2,500</td></tr></table></body></html>')
FREE = ('<!doctype html><html lang="en"><head>'
        '<link rel="stylesheet" href="/assets/css/discovery.css">'
        '<script defer src="/assets/js/discovery-delivery.js"></script></head><body>'
        '<h1>Free AI &amp; Automation Discovery</h1>'
        '<p>Free AI & Automation Discovery</p><p>No payment or meeting is required.</p>'
        '<p>Discovery remains free.</p><form id="dform">'
        '<input name="name"><input name="email" type="email">'
        '<select name="process"></select><select name="hours"></select>'
        '<button type="submit">Free report</button></form><section id="result">Report</section>'
        + PAD + '</body></html>')
BASE = {
    'index.html': HOME,
    'managed-it-services/index.html': MANAGED,
    'discovery/index.html': FREE,
    'plans/index.html': '<a href="https://buy.stripe.com/' + PAY + '">Optional Starter $2,500</a>' + PAD,
    'services/ai-automation/index.html': '<a href="https://buy.stripe.com/' + PAY + '">Optional implementation</a>' + PAD,
    'autonomous-ai-agents/index.html': 'Optional Consulting $499; Starter $2,500; Growth $8,000/mo.',
    'assets/js/discovery-delivery.js': '// Synthetic dependency, not runtime validation.\n',
    'assets/css/discovery.css': 'body { margin: 0; }\n',
}
CASES = [
    ('free_questionnaire_without_payment_link', {}, True),
    ('optional_paid_implementation_remains_allowed', {'discovery/index.html': FREE.replace('</body>', '<p>Optional Consulting $499, Starter $2,500, Growth $8,000/mo.</p><a href="https://buy.stripe.com/' + PAY + '">Optional implementation $2,500</a></body>')}, True),
    ('single_quotes_multiline_attributes', {'discovery/index.html': FREE.replace(' id="dform"', "\n id='dform'").replace(' id="result"', "\n id='result'")}, True),
    ('zero_discovery_structured_price', {'discovery/index.html': FREE.replace('</head>', OFFER + '</head>')}, True),
    ('anonymized_renewal_case', {'index.html': HOME.replace('Documented maintenance scope.', 'Anonymized renewal example with no customer details.')}, True),
    ('generic_po_requirement_without_reference', {'index.html': HOME.replace('Documented maintenance scope.', 'A formal purchase order is required before paid implementation.')}, True),
    ('missing_form', {'discovery/index.html': FREE.replace('id="dform"', 'id="other"')}, False),
    ('duplicate_form', {'discovery/index.html': FREE.replace('</body>', '<form id="dform"></form></body>')}, False),
    ('unclosed_form', {'discovery/index.html': FREE.replace('</form>', '')}, False),
    ('missing_result', {'discovery/index.html': FREE.replace('id="result"', 'id="other"')}, False),
    ('missing_email_control', {'discovery/index.html': FREE.replace('name="email"', 'name="other"')}, False),
    ('missing_no_payment_disclosure', {'discovery/index.html': FREE.replace('No payment or meeting is required.', 'Contact sales.')}, False),
    ('missing_free_disclosure', {'discovery/index.html': FREE.replace('Discovery remains free.', 'See plans.')}, False),
    ('missing_delivery_script_reference', {'discovery/index.html': FREE.replace('/assets/js/discovery-delivery.js', '/assets/js/unrelated.js')}, False),
    ('missing_stylesheet_reference', {'discovery/index.html': FREE.replace('/assets/css/discovery.css', '/assets/css/unrelated.css')}, False),
    ('missing_script_asset', {'assets/js/discovery-delivery.js': None}, False),
    ('empty_stylesheet_asset', {'assets/css/discovery.css': ''}, False),
    ('missing_discovery', {'discovery/index.html': None}, False),
    ('stub_discovery', {'discovery/index.html': '<h1>Free Discovery</h1>'}, False),
    ('redirect_discovery', {'discovery/index.html': FREE + '<meta http-equiv="refresh" content="0;url=/plans/">'}, False),
    ('placeholder_discovery', {'discovery/index.html': FREE + 'PLACEHOLDER'}, False),
    ('paid_discovery_dollars', {'discovery/index.html': FREE.replace('</body>', '<p>Discovery $99</p></body>')}, False),
    ('paid_discovery_reais', {'discovery/index.html': FREE.replace('</body>', '<p>Discovery R$ 99</p></body>')}, False),
    ('paid_discovery_usd', {'discovery/index.html': FREE.replace('</body>', '<p>Discovery USD 50</p></body>')}, False),
    ('paid_discovery_split_markup', {'managed-it-services/index.html': MANAGED.replace('</body>', '<p>Discovery <strong>$99</strong></p></body>')}, False),
    ('paid_discovery_reversed', {'discovery/index.html': FREE.replace('</body>', '<p>$99 for Discovery</p></body>')}, False),
    ('priced_discovery_cta', {'managed-it-services/index.html': MANAGED.replace('</body>', '<a href="/discovery/">Book $99</a></body>')}, False),
    ('paid_discovery_metadata', {'managed-it-services/index.html': MANAGED.replace('</head>', '<meta name="description" content="Discovery $99"></head>')}, False),
    ('nonzero_discovery_table_price', {'managed-it-services/index.html': MANAGED.replace('<td>$0</td>', '<td>$99</td>')}, False),
    ('nonzero_discovery_structured_price', {'managed-it-services/index.html': MANAGED.replace('"price": "0"', '"price": "99"')}, False),
    ('malformed_discovery_structured_data', {'managed-it-services/index.html': MANAGED.replace('"price": "0"', '"price": INVALID')}, False),
    ('nonzero_nested_discovery_price', {'managed-it-services/index.html': MANAGED.replace('"price": "0"', '"priceSpecification": {"price": "49"}')}, False),
    ('synthetic_procurement_reference', {'index.html': HOME.replace('Documented maintenance scope.', 'Purchase order: SYNTH-12345')}, False),
    ('synthetic_purchasing_record', {'managed-it-services/index.html': MANAGED.replace('</body>', '<p>SAMPLECOMPRAS-1234</p></body>')}, False),
    ('synthetic_customer_label', {'index.html': HOME.replace('Documented maintenance scope.', 'Client: Example Test Organization')}, False),
    ('synthetic_customer_proof_anchor', {'index.html': HOME.replace('aria-labelledby="proof-h"', 'id="proof-example-client"')}, False),
    ('unreviewed_named_renewal_proof', {'index.html': HOME.replace('Documented maintenance scope.', 'Example Test Organization renewed its contract.')}, False),
    ('homepage_next_shell_guard', {'index.html': HOME + '/_next/'}, False),
    ('other_paid_path_guard_retained', {'plans/index.html': PAD}, False),
    ('unapproved_sku_guard_retained', {'autonomous-ai-agents/index.html': '$6,500'}, False),
]

names = ['assert_money_path', 'assert_free_discovery_path', 'assert_family_a_home',
         'assert_managed_it_public', 'assert_aaa_official_ladder', 'assert_public_entry_content']
source = SCRIPT.read_text(encoding='utf-8')
functions = []
for name in names:
    found = re.findall(r'^' + name + r'\(\) \{\n.*?^\}', source, re.M | re.S)
    assert len(found) == 1, 'Missing or ambiguous production guard: ' + name
    functions.append(found[0])
commands = ['assert_money_path services/ai-automation/index.html', 'assert_money_path plans/index.html'] + names[1:]
harness = 'set -euo pipefail\n' + '\n\n'.join(functions) + '\n' + '\n'.join(commands) + '\n'

def check(overrides):
    with tempfile.TemporaryDirectory(prefix='zion-public-entry-guard-') as tmp:
        root = Path(tmp)
        (root / 'scripts').mkdir()
        for helper in ['assert-free-discovery-home.py', 'test-free-discovery-home.py']:
            shutil.copyfile(SCRIPT.parent / helper, root / 'scripts' / helper)
        for name, content in (BASE | overrides).items():
            if content is not None:
                target = root / 'out' / name
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_text(content, encoding='utf-8')
        script = root / 'guard-functions.sh'
        script.write_text(harness, encoding='utf-8')
        result = subprocess.run(['bash', str(script)], cwd=root, text=True, capture_output=True, timeout=15)
        return result.returncode == 0, (result.stderr or result.stdout).strip()

results = []
for name, change, expected in CASES:
    actual, output = check(change)
    passed = actual == expected
    results.append({'name': name, 'expected_success': expected, 'actual_success': actual, 'passed': passed, 'output': output})
    print(('PASS' if passed else 'FAIL') + ' ' + name)
print(json.dumps({'passed': sum(r['passed'] for r in results), 'total': len(results),
                  'fixture_scope': 'actual entry guard functions with synthetic artifact content', 'results': results}, indent=2))
sys.exit(0 if all(r['passed'] for r in results) else 1)
