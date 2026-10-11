"""Read-only Chromium smoke test; requires playwright==1.63.0 and Chromium."""
import argparse, json, time
from pathlib import Path
from playwright.sync_api import sync_playwright
parser=argparse.ArgumentParser()
parser.add_argument('--output',default='network-finance-browser-results.json')
args=parser.parse_args()
base='https://ziontechgroup.com'
rows=[]
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,args=['--no-sandbox'])
 try:
  for locale in ['en','pt','es','fr','de']:
   prefix='' if locale=='en' else '/'+locale
   source=prefix+'/apps/network-start-here.html'
   destination=prefix+'/apps/finance-insurance-paths.html'
   for width in [1280,375]:
    context=browser.new_context(viewport={'width':width,'height':900})
    writes=[]; errors=[]
    def guard(route):
     if route.request.method not in ['GET','HEAD']:
      writes.append(route.request.url);route.abort()
     else:route.continue_()
    context.route('**/*',guard)
    page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
    response=page.goto(base+source+'?verify='+str(time.time_ns()),wait_until='networkidle',timeout=45000)
    assert response.status==200
    assert page.locator('html').get_attribute('lang').lower().split('-')[0]==locale
    assert page.locator('head link[rel="canonical"]').get_attribute('href')==base+source
    assert page.locator('head link[rel="alternate"]').count()==6
    assert page.locator('.zion-paths article').count()==7
    assert page.locator('form').count()==0
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(locale,width,'Start Here overflow')
    link=page.locator('.zion-paths a[href="'+destination+'"]');assert link.count()==1
    link.focus();assert link.evaluate('(el)=>el===document.activeElement')
    link.click();page.wait_for_load_state('networkidle')
    assert page.url.split('?')[0]==base+destination
    assert page.locator('html').get_attribute('lang').lower().split('-')[0]==locale
    returns=page.locator('a[data-finance-start-return="2026-10-10-v1"][href="'+source+'"]')
    assert returns.count()==2,(locale,'missing permanent return links')
    page.locator('#check-0').check();page.locator('#check-1').check()
    assert page.locator('#progress').inner_text()=='2 / 4'
    with page.expect_download() as download:page.locator('#download-checklist').click()
    saved=download.value;assert saved.suggested_filename=='zion-finance-pilot-checklist.txt'
    text=Path(saved.path()).read_text();assert text.count('[x]')==2 and text.count('[ ]')==2
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(locale,width,'Finance overflow')
    returns.first.focus();assert returns.first.evaluate('(el)=>el===document.activeElement')
    returns.first.click();page.wait_for_load_state('networkidle')
    assert page.url.split('?')[0]==base+source
    assert not errors,errors
    assert not writes,writes
    rows.append({'locale':locale,'width':width,'status':'PASS','guide':base+source,'destination':base+destination,'return_links':2,'page_errors':errors,'write_requests':writes})
    Path(args.output).write_text(json.dumps(rows,indent=2));print('PASS',locale,width,flush=True)
    context.close()
 finally:browser.close()
assert len(rows)==10
print('PASS: ten reciprocal navigation, mobile layout and local-download scenarios; GET/HEAD only.')
