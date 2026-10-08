"""Read-only live browser QA. Every non-GET/HEAD request is aborted.
Run with Playwright 1.63.0 and Chromium installed. Uses synthetic values only.
"""
import json
import os
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

artifacts = Path(os.environ.get('ZION_QA_ARTIFACT_DIR', 'artifacts/insurance-evidence'))
artifacts.mkdir(parents=True, exist_ok=True)
base = 'https://ziontechgroup.com'
results, failures, blocked = [], [], []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--no-sandbox'])
    for width in [1280, 375]:
        context = browser.new_context(viewport={'width': width, 'height': 900}, accept_downloads=True)
        def guard(route):
            if route.request.method not in ['GET', 'HEAD']:
                blocked.append({'url': route.request.url, 'method': route.request.method})
                route.abort()
            else:
                route.continue_()
        context.route('**/*', guard)
        for language in ['en', 'pt', 'es', 'fr', 'de']:
            prefix = '' if language == 'en' else '/' + language
            page = context.new_page()
            errors, dialogs = [], []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.on('dialog', lambda dialog: (dialogs.append(dialog.message), dialog.dismiss()))
            for mode in ['policy', 'underwriting', 'claims']:
                try:
                    url = base + prefix + '/apps/insurance-evidence-workbench.html?mode=' + mode + '&qa=' + str(int(time.time()))
                    response = page.goto(url, wait_until='networkidle', timeout=30000)
                    assert response.status == 200
                    assert page.locator('#mode').input_value() == mode
                    copy = json.loads(page.locator('#evidence-copy').text_content())
                    page.locator('#mode').focus()
                    page.keyboard.press('Tab')
                    assert page.evaluate('document.activeElement.id') == 'example'
                    page.locator('#evidence-form button').click()
                    assert copy['missing'] + ': 6/6' in page.locator('#evidence-status').text_content()
                    for field in ['example', 'owner', 'baseline', 'evidence', 'reviewer', 'stop']:
                        page.locator('#' + field).fill('SYNTHETIC ' + field + ' <img src=x onerror=alert(1)>')
                    page.locator('#evidence-form button').click()
                    assert copy['missing'] + ': 0/6' in page.locator('#evidence-status').text_content()
                    text = page.locator('#evidence-report').text_content()
                    assert copy['complete'] in text and copy['limit'] in text and '<img' in text
                    assert page.locator('#evidence-report img').count() == 0
                    assert page.evaluate('document.activeElement.id') == 'evidence-report'
                    with page.expect_download(timeout=10000) as info:
                        page.locator('#evidence-download').click()
                    download = info.value
                    assert download.suggested_filename == 'zion-insurance-evidence-brief.txt'
                    assert Path(download.path()).read_text() == text
                    assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1')
                    assert not errors and not dialogs
                    results.append({'language': language, 'width': width, 'mode': mode, 'status': 'PASS'})
                except Exception as error:
                    failures.append({'language': language, 'width': width, 'mode': mode, 'error': str(error)})
            page.close()
        context.close()
    browser.close()
report = {'passed': len(results), 'failed': len(failures), 'blocked_write_requests': blocked, 'results': results, 'failures': failures}
(artifacts / 'browser-qa.json').write_text(json.dumps(report, indent=2))
print(json.dumps({'passed': len(results), 'failed': len(failures), 'blocked_write_requests': blocked, 'failures': failures}, indent=2))
assert len(results) == 30 and not failures and not blocked
