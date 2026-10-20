import pathlib,subprocess,hashlib,re,json,tempfile,shutil
root=pathlib.Path(__file__).resolve().parents[1]
with tempfile.TemporaryDirectory() as td:
 work=pathlib.Path(td); out=work/'out'; (work/'public/apps').mkdir(parents=True)
 (work/'public/apps/network.html').write_text('<html><body><a href="https://github.com/Zion-support/zion-claims-triage-ai">Claims</a><a href="/apps/field-service-evidence-guide.html">Guide</a></body></html>')
 locales={'en':('en','/en/','/app-network-discovery.html'),'pt':('pt-BR','/','/pt/discovery/'),'es':('es','/es/','/es/discovery/'),'fr':('fr','/fr/','/fr/discovery/'),'de':('de','/de/','/de/discovery/')}
 def file(url): return out/(url.lstrip('/')+('index.html' if url.endswith('/') else ''))
 protected='<form action="/unchanged"><input name="sentinel"></form><script>window.sentinel="unchanged";</script>'
 for locale,(lang,home,disc) in locales.items():
  prefix='/' if locale=='en' else '/'+locale+'/'
  targets=[home,disc,prefix+'apps/network-learning-paths.html']+[prefix+t+'/' for t in ['roi-calc','sla-calculator','ai-governance-checklist']]
  for url in targets:
   f=file(url); f.parent.mkdir(parents=True,exist_ok=True)
   body='<html lang="'+lang+'"><body>'+protected+'<main id="app-paths-home"></main><!--zion-network-home:start--><section><div></div></section><!--zion-network-home:end--></body></html>'
   if url==home and locale=='pt':
    body='<html lang="'+lang+'"><body><div id="app-paths-home">'+protected+'<section><p>Content remains</p></section><footer>Footer remains</footer></div></body></html>'
   elif url==home and locale in ('es','fr'):
    body='<html lang="'+lang+'"><body><main id="app-paths-home">'+protected+'<section><p>Content remains</p></section></main><footer>Footer remains</footer></body></html>'
   f.write_text(body)
  # The English destination is a standalone HTML file, not a directory route.
  if locale=='en':
   free=file(disc)
   free.write_text('<html lang="en"><body><h1>Free Discovery</h1><form id="discovery"><input name="email"></form></body></html>')
 css=file('/assets/css/site.css');css.parent.mkdir(parents=True);css.write_text('body{max-width:100%}')
 def run(): return subprocess.run(['node',str(root/'scripts/render-network-showcase-release.cjs'),str(out)],cwd=work,text=True,capture_output=True)
 r=run();assert r.returncode==0,r.stderr
 before={str(f.relative_to(out)):hashlib.sha256(f.read_bytes()).hexdigest() for f in out.rglob('*') if f.is_file()}
 r=run();assert r.returncode==0,r.stderr
 after={str(f.relative_to(out)):hashlib.sha256(f.read_bytes()).hexdigest() for f in out.rglob('*') if f.is_file()}
 assert before==after,'non-idempotent output'
 for locale,(lang,home,disc) in locales.items():
  prefix='/' if locale=='en' else '/'+locale+'/'
  html=file(prefix+'apps/network.html').read_text()
  expected_headings={"en":"Choose a starting question","pt":"Escolha uma pergunta inicial","es":"Elige una pregunta para empezar","fr":"Choisissez une première question","de":"Wählen Sie eine Ausgangsfrage"}
  assert expected_headings[locale] in html,'Translated journey heading missing '+locale
  assert '<html lang="'+lang+'">' in html
  assert len(re.findall('rel="alternate"',html))==6
  assert '<link rel="canonical" href="https://ziontechgroup.com'+prefix+'apps/network.html">' in html
  assert len(re.findall(r'<h1\b',html))==1
  assert 'https://github.com/Zion-support/zion-claims-triage-ai' in html
  assert '/apps/field-service-evidence-guide.html' in html
  assert not re.search(r'<form\b|<script\b',html,re.I)
  for other in locales:
   route=('/' if other=='en' else '/'+other+'/')+'apps/network.html'
   assert 'href="'+route+'"' in html
  homepage=file(home).read_text(); assert protected in homepage
  assert homepage.count('data-showcase-promotion=')==1
  assert html.count('data-journey-card=')==3,'Exactly three translated workflow questions per showcase'
  for slug in ['roi-calc','sla-calculator','ai-governance-checklist']:
   route=prefix+slug+'/'
   assert 'href="'+route+'"' in html,'Showcase tool interlink missing '+route
   assert 'href="'+route+'"' in homepage,'Homepage tool interlink missing '+route
  assert 'href="'+prefix+'apps/network.html"' in homepage
  assert 'network-start-here.html' not in html,'Missing start-here route must not be used'
  assert 'href="'+prefix+'apps/network-learning-paths.html"' in html,'Link to existing learning paths'
  assert homepage.count('data-showcase-promotion=')==1,'Exactly one owned promotion'
  assert html.count('href="'+disc+'"')>=4,'Every navigation and main CTA must target the free questionnaire'
  assert 'href="/discovery/">Free Discovery</a>' not in html,'Paid English Discovery misadvertised as free'
 print('PASS five locales: complete candidate rendering, six alternates, canonical, switches, source links, read-only showcase, homepage form/script preservation and two-run idempotence.')
 free=file('/app-network-discovery.html');originalFree=free.read_text()
 free.write_text(originalFree.replace('</body>','<a href="https://buy.stripe.com/unsafe">Pay $99</a></body>'))
 bad=run();assert bad.returncode!=0 and 'Paid Discovery cannot be labeled free' in bad.stderr,'checkout CTA must fail closed'
 free.write_text(re.sub('<form.*?</form>','',originalFree,flags=re.I|re.S))
 bad=run();assert bad.returncode!=0 and 'Missing free Discovery questionnaire' in bad.stderr,'missing form must fail closed'
 free.write_text(originalFree.replace('<html lang="en">','<html lang="de">',1))
 bad=run();assert bad.returncode!=0 and 'Discovery locale mismatch' in bad.stderr,'wrong language must fail closed'
 free.write_text(originalFree)
 assert run().returncode==0,'restored free questionnaire must pass'
 print('PASS negative Discovery CTA controls: paid checkout, missing form, wrong locale.')
 home=file('/es/');originalHome=home.read_text()
 home.write_text(originalHome.replace('<main id="app-paths-home">','<main id="app-paths-home"><!--zion-network-home:start-->',1))
 bad=run();assert bad.returncode!=0 and 'Unbalanced existing network home markers' in bad.stderr,'unbalanced marker should fail closed'
 home.write_text(originalHome)
 missing=file('/fr/roi-calc/');missing.unlink()
 assert run().returncode!=0,'missing locale target must fail'
 print('PASS negative control: missing localized tool rejected.')
