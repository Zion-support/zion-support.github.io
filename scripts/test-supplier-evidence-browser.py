"""Read-only browser QA: local calculator events and download only; no outbound submissions."""
import argparse,json,pathlib
from playwright.sync_api import sync_playwright
p=argparse.ArgumentParser();p.add_argument('--base',default='http://127.0.0.1:8765');p.add_argument('--output',default='supplier-browser-evidence.json');a=p.parse_args()
results=[]
with sync_playwright() as pw:
 browser=pw.chromium.launch(headless=True,args=['--no-sandbox'])
 for lang in ['en','pt','es','fr','de']:
  suffix='' if lang=='en' else '.'+('pt-br' if lang=='pt' else lang)
  url=a.base+'/apps/supplier-quote-evidence-workbench'+suffix+'.html'
  context=browser.new_context(locale={'en':'en-US','pt':'pt-BR','es':'es-ES','fr':'fr-FR','de':'de-DE'}[lang],viewport={'width':390,'height':844},accept_downloads=True)
  page=context.new_page();errors=[];posts=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.on('request',lambda r:posts.append(r.url) if r.method not in ['GET','HEAD'] else None)
  response=page.goto(url,wait_until='networkidle');assert response.status==200
  assert page.locator('body').get_attribute('data-supplier-release')=='supplier-evidence-2026-10-09-v2'
  assert page.locator('link[rel="alternate"]').count()==6
  page.locator('#example').click();page.wait_for_function('!document.getElementById("export").disabled')
  report=page.locator('#output').inner_text();assert '182' in report and '200' in report
  holds={'en':'HOLD','pt':'AGUARDAR','es':'EN ESPERA','fr':'EN ATTENTE','de':'ZURÜCKHALTEN'}
  assert holds[lang] in report
  with page.expect_download() as info:page.locator('#export').click()
  download=info.value;data=pathlib.Path(download.path()).read_text();assert data==report
  page.locator('#a-base').fill('101');assert page.locator('#export').is_disabled()
  page.locator('#include-b').check();assert page.locator('#supplier-b').is_visible()
  page.locator('#quote-form button[type="submit"]').click();assert not page.locator('#export').is_disabled()
  assert page.locator('#output').inner_text().count(' A')>=1 and page.locator('#output').inner_text().count(' B')>=1
  for gate in ['scope','named','availability','written','costs','terms','approval','po','zion']:page.locator('#a-'+gate).check()
  page.locator('#include-b').uncheck();page.locator('#quote-form button[type="submit"]').click()
  assert holds[lang] not in page.locator('#output').inner_text()
  page.locator('#markup').fill('39');page.evaluate('document.getElementById("quote-form").dispatchEvent(new Event("submit",{cancelable:true}))')
  assert page.locator('#errors').inner_text() and page.locator('#export').is_disabled()
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), 'Mobile horizontal overflow'
  assert not errors,errors;assert not posts,posts
  results.append({'language':lang,'url':url,'status':200,'example':'pass','download':'pass','stale_export':'pass','comparison':'pass','approval_review':'pass','localized_error':'pass','mobile_overflow':'none','browser_errors':errors,'outbound_submissions':posts})
  context.close()
 browser.close()
pathlib.Path(a.output).write_text(json.dumps(results,ensure_ascii=False,indent=2));print(json.dumps(results,ensure_ascii=False))
