#!/usr/bin/env python3
"""Offline regression fixtures for prepare-pages-out.sh; no network or mail sends.

Run: python3 scripts/test-free-discovery-guard.py
Optional: python3 scripts/test-free-discovery-guard.py /path/to/prepare-pages-out.sh
The test copies the target script into a disposable tree because it recreates out/.
Synthetic success does not certify a production build, browser flow, or inbox receipt.
"""
from pathlib import Path
import json
import subprocess
import sys
import tempfile

SCRIPT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).with_name('prepare-pages-out.sh')
PAY = '7sY00k7JScFV99Bf044ZG06'
PAD = '<!--' + 'x' * 5400 + '-->'
FREE = ('<!doctype html><html lang="en"><head>'
        '<link rel="stylesheet" href="/assets/css/discovery.css">'
        '<script defer src="/assets/js/discovery-delivery.js"></script>'
        '</head><body><h1>Free Discovery</h1><p>Discovery is always free.</p>'
        '<form id="dform"><input name="email" type="email"><button>Free report</button></form>'
        '<section id="result">Report</section>'
        f'<a href="https://buy.stripe.com/{PAY}">Optional paid Starter</a>'
        + PAD + '</body></html>')
BASE = {
    'index.html': '<link href="/assets/css/site.css"><h1>Discovery gr\u00e1tis</h1>',
    'discovery/index.html': FREE,
    'plans/index.html': PAY + PAD,
    'services/ai-automation/index.html': PAY + PAD,
    'managed-it-services/index.html': 'Free Discovery',
    'autonomous-ai-agents/index.html': 'Optional services; no unapproved SKU.',
    'assets/js/discovery-delivery.js': '// Synthetic dependency fixture; not runtime validation.\n',
    'assets/css/discovery.css': 'body { margin: 0; }\n',
}
CASES = [
    ('free_questionnaire_with_optional_starter', {}, True),
    ('single_quotes_and_multiline_attributes', {'discovery/index.html': FREE.replace(' id="', "\n id='").replace('dform"', "dform'").replace('result"', "result'")}, True),
    ('missing_form', {'discovery/index.html': FREE.replace('id="dform"', 'id="other"')}, False),
    ('missing_result', {'discovery/index.html': FREE.replace('id="result"', 'id="other"')}, False),
    ('missing_delivery_script_reference', {'discovery/index.html': FREE.replace('/assets/js/discovery-delivery.js', '/assets/js/unrelated.js')}, False),
    ('missing_stylesheet_reference', {'discovery/index.html': FREE.replace('/assets/css/discovery.css', '/assets/css/unrelated.css')}, False),
    ('missing_free_disclosure', {'discovery/index.html': FREE.replace('Discovery is always free.', 'See plans.')}, False),
    ('paid_discovery_dollars', {'discovery/index.html': FREE.replace('<h1>Free Discovery</h1>', '<h1>Discovery $99</h1>')}, False),
    ('paid_discovery_reais', {'discovery/index.html': FREE.replace('<h1>Free Discovery</h1>', '<h1>Discovery R$ 99</h1>')}, False),
    ('paid_discovery_usd', {'discovery/index.html': FREE.replace('<h1>Free Discovery</h1>', '<h1>Discovery USD 50</h1>')}, False),
    ('missing_script_asset', {'assets/js/discovery-delivery.js': None}, False),
    ('empty_style_asset', {'assets/css/discovery.css': ''}, False),
    ('missing_discovery', {'discovery/index.html': None}, False),
    ('stub_discovery', {'discovery/index.html': '<h1>Free Discovery</h1>'}, False),
    ('redirect_discovery', {'discovery/index.html': FREE + '<meta http-equiv="refresh" content="0;url=/plans/">'}, False),
    ('placeholder_discovery', {'discovery/index.html': FREE + 'PLACEHOLDER'}, False),
    ('homepage_privacy_guard', {'index.html': BASE['index.html'] + 'FGV'}, False),
    ('homepage_next_shell_guard', {'index.html': BASE['index.html'] + '/_next/'}, False),
    ('managed_it_paid_guard', {'managed-it-services/index.html': 'Free Discovery and Discovery $99'}, False),
    ('other_paid_path_guard_retained', {'plans/index.html': PAD}, False),
    ('unapproved_sku_guard_retained', {'autonomous-ai-agents/index.html': '$6,500'}, False),
]

def check(overrides: dict[str, str | None]) -> tuple[bool, str]:
    with tempfile.TemporaryDirectory(prefix='zion-discovery-guard-') as tmp:
        root = Path(tmp)
        target = root/'scripts'/'prepare-pages-out.sh'
        target.parent.mkdir()
        target.write_bytes(SCRIPT.read_bytes())
        files = BASE | overrides
        for name, content in files.items():
            if content is not None:
                path = root/'public'/name
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(content, encoding='utf-8')
        result = subprocess.run(['bash', str(target)], text=True, capture_output=True, timeout=15)
        return result.returncode == 0, (result.stderr or result.stdout).strip()

results=[]
for name, change, expected in CASES:
    actual, output = check(change)
    passed=actual == expected
    results.append({'name':name,'expected_success':expected,'actual_success':actual,'passed':passed,'output':output})
    print(('PASS' if passed else 'FAIL') + ' ' + name)
print(json.dumps({'passed':sum(r['passed'] for r in results),'total':len(results),'fixture_scope':'synthetic offline artifact assembly','results':results},indent=2))
sys.exit(0 if all(r['passed'] for r in results) else 1)
