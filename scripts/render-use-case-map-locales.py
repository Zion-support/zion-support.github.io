#!/usr/bin/env python3
"""Build five read-only use-case maps into a staging directory; never publish."""
import argparse
import hashlib
import html
import json
from pathlib import Path
import re

IDS = ['field','network','ops','security','procurement','cost','automation','sales','data','logistics']
LANGS = {'en':'en','pt':'pt-BR','es':'es','fr':'fr','de':'de'}
NAMES = {'en':'English','pt':'Português','es':'Español','fr':'Français','de':'Deutsch'}
COPY = {
'en': {
 'title':'Choose an app by the decision you need to make',
 'intro':'Choose one operational question, inspect related projects and record evidence before a small, reversible test.',
 'skip':'Skip to content','home':'Home','guide':'Workflow guide','discovery':'Free Discovery','languages':'Choose a language','jump':'Choose a category','back':'Back to top','support':'Continue with related resources',
 'note':'Project names are retained as identifiers. Destination languages and implementation maturity vary. A catalog link is not proof of a working model, integration, availability or permission to deploy.',
 'evidence':'Before connecting systems: name the process owner, record a measured baseline, use authorized data, set a reviewer and agree a stop rule. Paid implementation is optional and requires a separate decision.',
 'email':'Discovery can provide a browser report and request email delivery. Provider acceptance does not prove inbox receipt; retain your own copy.',
 'categories':['Field services','Network and infrastructure','IT operations','Security and governance','Procurement','FinOps and cost','AI and automation','Sales operations','Data and analytics','Supply chain and logistics'],
 'questions':['Which site, access approval and acceptance evidence are needed before dispatch?','Which measured network baseline and change window will you compare?','Which incident needs human escalation, and who owns the response?','Which permissions, retention rules and approvals apply to this test?','Which supplier scope, complete cost and written approval remain unverified?','Which usage, currency and cost assumptions drive this scenario?','Which single process can be tested reversibly with authorized data?','Which account owner and consent evidence are required before outreach?','Which data quality checks and evaluation criteria support the result?','Which capacity, routing constraints and exception owner must be confirmed?']},
'pt': {
 'title':'Escolha um app pela decisão que precisa tomar',
 'intro':'Escolha uma questão operacional, confira projetos relacionados e registre evidências antes de um teste pequeno e reversível.',
 'skip':'Pular para o conteúdo','home':'Página inicial','guide':'Guia de processos','discovery':'Discovery gratuito','languages':'Escolher idioma','jump':'Escolher categoria','back':'Voltar ao topo','support':'Continuar com recursos relacionados',
 'note':'Os nomes dos projetos são mantidos como identificadores. O idioma e a maturidade dos destinos variam. Um link no catálogo não comprova modelo funcionando, integração, disponibilidade nem autorização para implantar.',
 'evidence':'Antes de conectar sistemas: defina o responsável, registre uma linha de base medida, use dados autorizados, indique um revisor e combine uma regra de parada. Implementação paga é opcional e exige uma decisão separada.',
 'email':'O Discovery pode oferecer relatório no navegador e solicitar entrega por e-mail. A aceitação pelo provedor não comprova recebimento; guarde sua própria cópia.',
 'categories':['Serviços de campo','Rede e infraestrutura','Operações de TI','Segurança e governança','Compras','FinOps e custos','IA e automação','Operações comerciais','Dados e análise','Cadeia de suprimentos e logística'],
 'questions':['Quais local, autorização de acesso e evidências de aceite são necessários antes do atendimento?','Quais linha de base medida e janela de mudança da rede serão comparadas?','Qual incidente exige escalação humana e quem responde por ele?','Quais permissões, regras de retenção e aprovações se aplicam ao teste?','Quais escopo do fornecedor, custo completo e aprovação escrita continuam sem comprovação?','Quais premissas de uso, moeda e custo sustentam este cenário?','Qual processo pode ser testado de forma reversível com dados autorizados?','Quais responsável pela conta e evidências de consentimento são necessários antes do contato?','Quais verificações de qualidade dos dados e critérios de avaliação sustentam o resultado?','Quais capacidade, restrições de rota e responsável por exceções precisam ser confirmados?']},
'es': {
 'title':'Elige una aplicación según la decisión que necesitas tomar',
 'intro':'Elige una pregunta operativa, inspecciona proyectos relacionados y registra evidencia antes de una prueba pequeña y reversible.',
 'skip':'Saltar al contenido','home':'Inicio','guide':'Guía de procesos','discovery':'Discovery gratuito','languages':'Elegir idioma','jump':'Elegir categoría','back':'Volver arriba','support':'Continuar con recursos relacionados',
 'note':'Los nombres de los proyectos se conservan como identificadores. El idioma y la madurez de los destinos varían. Un enlace no demuestra un modelo operativo, integración, disponibilidad ni autorización para desplegar.',
 'evidence':'Antes de conectar sistemas: identifica al responsable, registra una línea base medida, usa datos autorizados, designa un revisor y acuerda una regla de parada. La implementación de pago es opcional y requiere una decisión separada.',
 'email':'Discovery puede ofrecer un informe en el navegador y solicitar envío por correo. La aceptación del proveedor no demuestra recepción; conserva tu propia copia.',
 'categories':['Servicios de campo','Red e infraestructura','Operaciones de TI','Seguridad y gobernanza','Compras','FinOps y costes','IA y automatización','Operaciones comerciales','Datos y análisis','Cadena de suministro y logística'],
 'questions':['¿Qué ubicación, autorización de acceso y evidencia de aceptación se necesitan antes del servicio?','¿Qué línea base medida de la red y ventana de cambio compararás?','¿Qué incidente requiere escalamiento humano y quién responde?','¿Qué permisos, reglas de conservación y aprobaciones se aplican a esta prueba?','¿Qué alcance del proveedor, coste completo y aprobación escrita siguen sin verificar?','¿Qué supuestos de uso, moneda y coste determinan este escenario?','¿Qué proceso puede probarse de forma reversible con datos autorizados?','¿Qué responsable de cuenta y evidencia de consentimiento se necesitan antes del contacto?','¿Qué controles de calidad de datos y criterios de evaluación respaldan el resultado?','¿Qué capacidad, restricciones de ruta y responsable de excepciones deben confirmarse?']},
'fr': {
 'title':'Choisissez une application selon la décision à prendre',
 'intro':'Choisissez une question opérationnelle, examinez les projets connexes et consignez les preuves avant un essai limité et réversible.',
 'skip':'Aller au contenu','home':'Accueil','guide':'Guide des processus','discovery':'Discovery gratuit','languages':'Choisir une langue','jump':'Choisir une catégorie','back':'Retour en haut','support':'Continuer avec les ressources connexes',
 'note':'Les noms des projets sont conservés comme identifiants. La langue et la maturité des destinations varient. Un lien ne prouve ni modèle opérationnel, ni intégration, ni disponibilité, ni autorisation de déploiement.',
 'evidence':'Avant de connecter des systèmes : désignez le responsable, consignez une référence mesurée, utilisez des données autorisées, nommez un réviseur et convenez d’une règle d’arrêt. L’implémentation payante reste facultative et nécessite une décision distincte.',
 'email':'Discovery peut fournir un rapport dans le navigateur et demander un envoi par courriel. L’acceptation du fournisseur ne prouve pas la réception ; conservez votre propre copie.',
 'categories':['Services sur site','Réseau et infrastructure','Opérations informatiques','Sécurité et gouvernance','Achats','FinOps et coûts','IA et automatisation','Opérations commerciales','Données et analyse','Chaîne logistique'],
 'questions':['Quels site, autorisation d’accès et justificatifs d’acceptation sont nécessaires avant l’intervention ?','Quels référence réseau mesurée et créneau de changement allez-vous comparer ?','Quel incident exige une escalade humaine et qui en est responsable ?','Quels droits, règles de conservation et accords s’appliquent à cet essai ?','Quels périmètre fournisseur, coût complet et accord écrit restent à vérifier ?','Quelles hypothèses d’utilisation, de devise et de coût déterminent ce scénario ?','Quel processus peut être testé de façon réversible avec des données autorisées ?','Quels responsable de compte et justificatifs de consentement faut-il avant tout contact ?','Quels contrôles de qualité des données et critères d’évaluation étayent le résultat ?','Quels capacité, contraintes de trajet et responsable des exceptions faut-il confirmer ?']},
'de': {
 'title':'Wählen Sie eine App anhand der anstehenden Entscheidung',
 'intro':'Wählen Sie eine betriebliche Frage, prüfen Sie verwandte Projekte und dokumentieren Sie Belege vor einem kleinen, reversiblen Versuch.',
 'skip':'Zum Inhalt springen','home':'Startseite','guide':'Prozessleitfaden','discovery':'Kostenlose Discovery','languages':'Sprache wählen','jump':'Kategorie wählen','back':'Nach oben','support':'Mit verwandten Ressourcen fortfahren',
 'note':'Projektnamen bleiben als Kennungen erhalten. Sprache und Reifegrad der Ziele variieren. Ein Link belegt weder ein funktionierendes Modell noch Integration, Verfügbarkeit oder Bereitstellungsfreigabe.',
 'evidence':'Vor der Systemanbindung: verantwortliche Person benennen, gemessenen Ausgangswert dokumentieren, freigegebene Daten verwenden, Prüfer bestimmen und Abbruchregel vereinbaren. Eine kostenpflichtige Implementierung ist optional und erfordert eine gesonderte Entscheidung.',
 'email':'Discovery kann einen Browserbericht erstellen und den E-Mail-Versand anfordern. Die Annahme durch den Anbieter belegt keinen Posteingang; bewahren Sie eine eigene Kopie auf.',
 'categories':['Außendienst','Netzwerk und Infrastruktur','IT-Betrieb','Sicherheit und Governance','Beschaffung','FinOps und Kosten','KI und Automatisierung','Vertriebsbetrieb','Daten und Analyse','Lieferkette und Logistik'],
 'questions':['Welche Standorte, Zugangsfreigaben und Abnahmebelege sind vor dem Einsatz erforderlich?','Welchen gemessenen Netzwerkausgangswert und welches Änderungsfenster vergleichen Sie?','Welcher Vorfall erfordert menschliche Eskalation und wer ist verantwortlich?','Welche Berechtigungen, Aufbewahrungsregeln und Freigaben gelten für diesen Test?','Welche Lieferantenleistungen, Gesamtkosten und schriftlichen Freigaben sind noch ungeprüft?','Welche Nutzungs-, Währungs- und Kostenannahmen bestimmen dieses Szenario?','Welcher einzelne Prozess lässt sich mit freigegebenen Daten reversibel testen?','Welche Kontoverantwortung und Einwilligungsbelege sind vor der Kontaktaufnahme erforderlich?','Welche Datenqualitätsprüfungen und Bewertungskriterien stützen das Ergebnis?','Welche Kapazität, Routenbeschränkungen und Ausnahmeverantwortung müssen bestätigt werden?']}}

CSS = 'body{margin:auto;max-width:72rem;padding:1.3rem;font:1rem/1.65 system-ui;background:#f8fafc;color:#172033}a{color:#1d4ed8;overflow-wrap:anywhere}a:focus-visible{outline:3px solid #0f766e;outline-offset:3px}.skip{position:absolute;left:-9999px}.skip:focus{left:1rem;top:1rem;background:white;padding:1rem}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr));gap:1rem}.card{border:1px solid #94a3b8;border-radius:1rem;padding:1rem;scroll-margin-top:1rem}.jump,nav{display:flex;flex-wrap:wrap;gap:.8rem;margin:1rem 0}.note{border-left:4px solid #0f766e;padding:1rem;background:#e7f8f4}h1{font-size:clamp(1.8rem,5vw,3rem);line-height:1.2}h2{font-size:1.3rem}li{margin:.5rem 0}'

def route(locale):
    return ('/' if locale == 'en' else '/'+locale+'/')+'apps/app-network-use-case-map.html'

def build(source, output):
    raw = source.read_text(encoding='utf-8')
    cards = re.findall(r'<div class="card" id="([^"]+)"><h2>.*?</h2><p>(.*?)</p></div>',raw,re.S)
    if [k for k,_ in cards] != IDS:
        raise ValueError('Expected exactly ten ordered source categories')
    links = {}
    for key, body in cards:
        links[key] = [(html.unescape(u),html.unescape(re.sub('<[^>]+>','',label))) for u,label in re.findall(r'<a href="([^"]+)">(.*?)</a>',body,re.S)]
        if len(links[key]) != 4 or any(not u.startswith('/') or u.startswith('//') for u,_ in links[key]):
            raise ValueError('Expected four safe source links per category')
    source_urls = sorted(set(html.unescape(u) for u in re.findall(r'<a\b[^>]*\bhref="([^"]+)"',raw,re.I) if not u.startswith('#')))
    if any(not u.startswith('/') and not u.startswith('https://ziontechgroup.com/') for u in source_urls):
        raise ValueError('Unexpected source navigation origin')
    e = lambda s: html.escape(str(s),quote=True)
    pages = {}
    for locale, c in COPY.items():
        if len(c['categories']) != 10 or len(c['questions']) != 10 or any(not s.strip() for s in c.values() if isinstance(s,str)):
            raise ValueError('Incomplete locale '+locale)
        lang = LANGS[locale]
        prefix = '/' if locale == 'en' else '/'+locale+'/'
        home = '/en/' if locale == 'en' else ('/' if locale == 'pt' else prefix)
        alternates = ''.join('<link rel="alternate" hreflang="'+LANGS[k]+'" href="https://ziontechgroup.com'+route(k)+'">' for k in LANGS)
        switches = ''.join('<a href="'+route(k)+'" lang="'+LANGS[k]+'" hreflang="'+LANGS[k]+'"'+(' aria-current="page"' if k==locale else '')+'>'+NAMES[k]+'</a>' for k in LANGS)
        sections = []
        for i,key in enumerate(IDS):
            items = ''.join('<li><a href="'+e(u)+'"><span lang="en">'+e(label)+'</span></a></li>' for u,label in links[key])
            sections.append('<section class="card" id="'+key+'" aria-labelledby="'+key+'-title"><h2 id="'+key+'-title">'+e(c['categories'][i])+'</h2><p>'+e(c['questions'][i])+'</p><ul>'+items+'</ul><a href="#top">'+e(c['back'])+'</a></section>')
        jump = ''.join('<a href="#'+key+'">'+e(c['categories'][i])+'</a>' for i,key in enumerate(IDS))
        support = ''.join('<li><a href="'+e(u)+'">'+e(c['support'])+': '+e(u)+'</a></li>' for u in source_urls)
        page = '<!doctype html><html lang="'+lang+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+e(c['title'])+' | Zion Tech Group</title><meta name="description" content="'+e(c['intro'])+'"><link rel="canonical" href="https://ziontechgroup.com'+route(locale)+'">'+alternates+'<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com'+route('en')+'"><style>'+CSS+'</style></head><body id="top"><a class="skip" href="#main">'+e(c['skip'])+'</a><header><nav aria-label="'+e(c['guide'])+'"><a href="'+home+'">'+e(c['home'])+'</a><a href="'+prefix+'apps/network-learning-paths.html">'+e(c['guide'])+'</a><a href="'+('/discovery/' if locale=='en' else prefix+'discovery/')+'">'+e(c['discovery'])+'</a></nav><nav aria-label="'+e(c['languages'])+'">'+switches+'</nav></header><main id="main"><h1>'+e(c['title'])+'</h1><p>'+e(c['intro'])+'</p><nav class="jump" aria-label="'+e(c['jump'])+'">'+jump+'</nav><p class="note">'+e(c['evidence'])+'</p><div class="grid">'+''.join(sections)+'</div><aside class="note"><p>'+e(c['note'])+'</p><p>'+e(c['email'])+'</p></aside><section><h2>'+e(c['support'])+'</h2><ul>'+support+'</ul></section></main><footer><a href="#top">'+e(c['back'])+'</a></footer></body></html>\n'
        pages[route(locale).lstrip('/')] = page
    output.mkdir(parents=True,exist_ok=True)
    for name,page in pages.items():
        target = output/name
        target.parent.mkdir(parents=True,exist_ok=True)
        target.write_text(page,encoding='utf-8')
    manifest = {'status':'STAGED_NOT_LIVE','source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'locales':LANGS,'routes':[route(k) for k in LANGS],'categories':10,'links_per_category':4,'scope':'Five use-case map bodies only; destination translations and capabilities not certified'}
    target = output/'apps/use-case-map-locales.json'
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    return pages

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source',type=Path,default=Path('public/apps/app-network-use-case-map.html'))
    parser.add_argument('--out',type=Path,required=True,help='Staging directory; not a publishing command')
    args = parser.parse_args()
    if args.source.resolve().is_relative_to(args.out.resolve()):
        parser.error('Source must remain outside output to preserve deterministic input')
    build(args.source,args.out)
    print('PASS: five staged use-case maps; no deployment performed')
