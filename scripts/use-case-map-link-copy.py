"""Localize staged use-case map labels; preserve every destination. No I/O."""
from __future__ import annotations

import html
import re
from html.parser import HTMLParser

RELEASE = 'use-case-link-copy-2026-10-15-v1'
LOCALES = ('en', 'pt', 'es', 'fr', 'de')
LANGS = dict(zip(LOCALES, ('en', 'pt-BR', 'es', 'fr', 'de')))
IDS = ('field', 'network', 'ops', 'security', 'procurement', 'cost', 'automation', 'sales', 'data', 'logistics')

# The paths identify existing projects. Labels do not claim the destinations are
# translated, integrated, live, or suitable for production.
ROWS = '''
/|Zion home|In\u00edcio Zion|Inicio de Zion|Accueil Zion|Zion-Startseite
/apps/|App catalog|Cat\u00e1logo de apps|Cat\u00e1logo de aplicaciones|Catalogue d\u2019applications|App-Katalog
/discovery/|Free Discovery|Discovery gratuito|Discovery gratuito|Discovery gratuit|Kostenlose Discovery
/apps/network.html|App network map|Mapa da rede de apps|Mapa de la red de aplicaciones|Carte du r\u00e9seau d\u2019applications|Karte des App-Netzwerks
/apps/start-here.html|Guided app journeys|Percursos guiados pelos apps|Recorridos guiados por aplicaciones|Parcours guid\u00e9s des applications|Gef\u00fchrte App-Pfade
/apps/discovery-action-center.html|Discovery action center|Central de a\u00e7\u00f5es do Discovery|Centro de acciones de Discovery|Centre d\u2019actions Discovery|Discovery-Aktionszentrum
/apps/network-learning-paths.html|App learning paths|Trilhas de aprendizado dos apps|Rutas de aprendizaje de aplicaciones|Parcours d\u2019apprentissage des applications|App-Lernpfade
/apps/content-hub.html|Guides and app spotlights|Guias e destaques dos apps|Gu\u00edas y aplicaciones destacadas|Guides et applications \u00e0 d\u00e9couvrir|Leitf\u00e4den und App-Einblicke
/apps/discovery-report-workbench.html|Discovery report workbench|Editor de relat\u00f3rios do Discovery|Editor de informes de Discovery|Atelier de rapports Discovery|Discovery-Berichtswerkstatt
/apps/pilot-evidence-checklist.html|Pilot evidence checklist|Checklist de evid\u00eancias do piloto|Lista de evidencias del piloto|Liste des preuves du pilote|Nachweis-Checkliste f\u00fcr Pilotprojekte
/apps/field-service-evidence-guide.html|Field-service evidence guide|Guia de evid\u00eancias do atendimento em campo|Gu\u00eda de evidencias del servicio en campo|Guide des preuves d\u2019intervention sur site|Nachweisleitfaden f\u00fcr Vor-Ort-Eins\u00e4tze
/apps/supplier-quote-evidence-workbench.html|Supplier quotation evidence|Evid\u00eancias de cota\u00e7\u00f5es de fornecedores|Evidencias de cotizaciones de proveedores|Preuves des devis fournisseurs|Nachweise zu Lieferantenangeboten
/apps/service-readiness-paths.html|Service-readiness paths|Percursos de prontid\u00e3o do servi\u00e7o|Rutas de preparaci\u00f3n del servicio|Parcours de pr\u00e9paration du service|Pfade zur Einsatzbereitschaft
/apps/discovery-decision-kit.html|Discovery decision kit|Kit de decis\u00e3o do Discovery|Kit de decisiones de Discovery|Kit de d\u00e9cision Discovery|Discovery-Entscheidungshilfe
/ai-smart-hands-scheduler/|Smart Hands scheduling|Planejamento de Smart Hands|Planificaci\u00f3n de Smart Hands|Planification Smart Hands|Smart-Hands-Einsatzplanung
/site-survey-planner/|Site survey planning|Planejamento de vistoria t\u00e9cnica|Planificaci\u00f3n de visitas t\u00e9cnicas|Planification des relev\u00e9s sur site|Planung von Standortbegehungen
/sla-breach-predictor/|SLA breach analysis|An\u00e1lise de viola\u00e7\u00f5es de SLA|An\u00e1lisis de incumplimientos de SLA|Analyse des violations de SLA|Analyse von SLA-Verletzungen
/apps/october-2026-batch11.html|Field-service app collection|Cole\u00e7\u00e3o de apps para servi\u00e7os de campo|Colecci\u00f3n de aplicaciones para servicios de campo|Collection d\u2019applications de services sur site|App-Sammlung f\u00fcr den Au\u00dfendienst
/ai-network-performance-wan-optimization/|WAN performance planning|Planejamento de desempenho de WAN|Planificaci\u00f3n del rendimiento WAN|Planification des performances WAN|Planung der WAN-Leistung
/site-uptime-watchdog/|Site availability review|Revis\u00e3o de disponibilidade de sites|Revisi\u00f3n de disponibilidad de sitios|Examen de la disponibilit\u00e9 des sites|Pr\u00fcfung der Website-Verf\u00fcgbarkeit
/stack-audit/|Technology stack audit|Auditoria da infraestrutura tecnol\u00f3gica|Auditor\u00eda de la infraestructura tecnol\u00f3gica|Audit de l\u2019infrastructure technologique|Audit des Technologie-Stacks
/patch-window-planner/|Patch window planning|Planejamento de janelas de atualiza\u00e7\u00e3o|Planificaci\u00f3n de ventanas de actualizaci\u00f3n|Planification des cr\u00e9neaux de mise \u00e0 jour|Planung von Patch-Zeitfenstern
/ai-ticket-triage/|AI-assisted ticket triage|Triagem de chamados com apoio de IA|Clasificaci\u00f3n de tickets con apoyo de IA|Qualification des tickets assist\u00e9e par IA|KI-gest\u00fctzte Ticket-Triage
/support-ticket-triager/|Support ticket classification|Classifica\u00e7\u00e3o de chamados de suporte|Clasificaci\u00f3n de tickets de soporte|Classement des tickets de support|Klassifizierung von Support-Tickets
/ai-incident-response/|Incident-response planning|Planejamento de resposta a incidentes|Planificaci\u00f3n de respuesta a incidentes|Planification de la r\u00e9ponse aux incidents|Planung der Reaktion auf Vorf\u00e4lle
/ops-runbook-ai/|Operations runbook assistance|Apoio a procedimentos operacionais|Apoyo a procedimientos operativos|Assistance aux proc\u00e9dures op\u00e9rationnelles|Unterst\u00fctzung f\u00fcr Betriebsanweisungen
/ai-governance-checklist/|AI governance checklist|Checklist de governan\u00e7a de IA|Lista de gobernanza de IA|Liste de contr\u00f4le de gouvernance IA|Checkliste zur KI-Governance
/ai-access-reviewer/|Access-permission review|Revis\u00e3o de permiss\u00f5es de acesso|Revisi\u00f3n de permisos de acceso|Examen des droits d\u2019acc\u00e8s|Pr\u00fcfung der Zugriffsrechte
/secrets-leak-scanner/|Exposed-secret review|Revis\u00e3o de segredos expostos|Revisi\u00f3n de secretos expuestos|Examen des secrets expos\u00e9s|Pr\u00fcfung offengelegter Geheimnisse
/vendor-risk-assessor/|Vendor risk assessment|Avalia\u00e7\u00e3o de riscos de fornecedores|Evaluaci\u00f3n de riesgos de proveedores|\u00c9valuation des risques fournisseurs|Bewertung von Lieferantenrisiken
/supplier-risk-radar/|Supplier risk radar|Radar de riscos de fornecedores|Radar de riesgos de proveedores|Radar des risques fournisseurs|Radar f\u00fcr Lieferantenrisiken
/roi-calc/|ROI calculator|Calculadora de ROI|Calculadora de ROI|Calculateur de ROI|ROI-Rechner
/finops-estimator/|FinOps cost estimate|Estimativa de custos de FinOps|Estimaci\u00f3n de costes FinOps|Estimation des co\u00fbts FinOps|FinOps-Kostensch\u00e4tzung
/llm-cost-calculator/|Language-model cost calculator|Calculadora de custos de modelos de linguagem|Calculadora de costes de modelos de lenguaje|Calculateur de co\u00fbts des mod\u00e8les de langage|Kostenrechner f\u00fcr Sprachmodelle
/cloud-cost-optimization/|Cloud cost planning|Planejamento de custos de nuvem|Planificaci\u00f3n de costes en la nube|Planification des co\u00fbts cloud|Planung der Cloud-Kosten
/ai-roi-tracker/|AI return-on-investment tracking|Acompanhamento do retorno sobre IA|Seguimiento del retorno de inversi\u00f3n en IA|Suivi du retour sur investissement IA|Verfolgung der KI-Investitionsrendite
/ai-opportunity-mapper/|AI opportunity mapping|Mapeamento de oportunidades de IA|Mapa de oportunidades de IA|Cartographie des opportunit\u00e9s IA|Erfassung von KI-Chancen
/priorizador-casos-uso-ia/|AI use-case prioritization|Prioriza\u00e7\u00e3o de casos de uso de IA|Priorizaci\u00f3n de casos de uso de IA|Priorisation des cas d\u2019usage IA|Priorisierung von KI-Anwendungsf\u00e4llen
/automation-brief-builder/|Automation brief builder|Cria\u00e7\u00e3o de briefing de automa\u00e7\u00e3o|Creaci\u00f3n de un resumen de automatizaci\u00f3n|Cr\u00e9ation d\u2019un cahier d\u2019automatisation|Erstellung eines Automatisierungsbriefings
/automation-pilot-planner/|Automation pilot planning|Planejamento de piloto de automa\u00e7\u00e3o|Planificaci\u00f3n de un piloto de automatizaci\u00f3n|Planification d\u2019un pilote d\u2019automatisation|Planung eines Automatisierungspiloten
/ai-tender-scout/|Tender research|Pesquisa de licita\u00e7\u00f5es|Investigaci\u00f3n de licitaciones|Recherche d\u2019appels d\u2019offres|Ausschreibungsrecherche
/lead-score-copilot/|Lead qualification assistance|Apoio \u00e0 qualifica\u00e7\u00e3o de leads|Apoyo a la calificaci\u00f3n de contactos|Aide \u00e0 la qualification des prospects|Unterst\u00fctzung bei der Lead-Qualifizierung
/deal-coach-ai/|Opportunity review assistance|Apoio \u00e0 revis\u00e3o de oportunidades|Apoyo a la revisi\u00f3n de oportunidades|Aide \u00e0 l\u2019examen des opportunit\u00e9s|Unterst\u00fctzung bei der Chancenpr\u00fcfung
/renewal-upsell-radar/|Renewal and expansion review|Revis\u00e3o de renova\u00e7\u00e3o e expans\u00e3o|Revisi\u00f3n de renovaciones y ampliaciones|Examen des renouvellements et extensions|Pr\u00fcfung von Verl\u00e4ngerungen und Erweiterungen
/ai-data-warehouse/|Data warehouse planning|Planejamento de armazenamento anal\u00edtico|Planificaci\u00f3n de almacenes de datos|Planification d\u2019entrep\u00f4ts de donn\u00e9es|Planung von Data Warehouses
/ai-predictive-analytics/|Predictive analytics review|Revis\u00e3o de an\u00e1lise preditiva|Revisi\u00f3n de an\u00e1lisis predictivo|Examen des analyses pr\u00e9dictives|Pr\u00fcfung pr\u00e4diktiver Analysen
/ai-readiness-assessment/|AI readiness assessment|Avalia\u00e7\u00e3o de prontid\u00e3o para IA|Evaluaci\u00f3n de preparaci\u00f3n para IA|\u00c9valuation de la pr\u00e9paration \u00e0 l\u2019IA|Bewertung der KI-Bereitschaft
/model-observatory/|Model evaluation observatory|Observat\u00f3rio de avalia\u00e7\u00e3o de modelos|Observatorio de evaluaci\u00f3n de modelos|Observatoire d\u2019\u00e9valuation des mod\u00e8les|Observatorium zur Modellbewertung
/route-optimization-ai/|Route planning|Planejamento de rotas|Planificaci\u00f3n de rutas|Planification des itin\u00e9raires|Routenplanung
/warehouse-slotting-optimizer/|Warehouse slotting planning|Planejamento de posi\u00e7\u00f5es no armaz\u00e9m|Planificaci\u00f3n de ubicaciones en almac\u00e9n|Planification des emplacements en entrep\u00f4t|Planung der Lagerplatzbelegung
/demand-sensing-forecaster/|Demand signal review|Revis\u00e3o de sinais de demanda|Revisi\u00f3n de se\u00f1ales de demanda|Examen des signaux de demande|Pr\u00fcfung von Nachfragesignalen
/delivery-exception-copilot/|Delivery exception review|Revis\u00e3o de exce\u00e7\u00f5es de entrega|Revisi\u00f3n de excepciones de entrega|Examen des exceptions de livraison|Pr\u00fcfung von Lieferabweichungen
'''
LABELS = {}
for row in ROWS.strip().splitlines():
    parts = row.split('|')
    if len(parts) != 6 or parts[0] in LABELS:
        raise ValueError('Invalid or duplicate navigation copy row')
    LABELS[parts[0]] = dict(zip(LOCALES, parts[1:]))

CONTEXT_ROWS = '''
field|Prepare the work order, access window and completion evidence before requesting onsite support.|Prepare a ordem de servi\u00e7o, a janela de acesso e as evid\u00eancias de conclus\u00e3o antes de solicitar atendimento local.|Prepara la orden de trabajo, la ventana de acceso y las evidencias de finalizaci\u00f3n antes de solicitar asistencia presencial.|Pr\u00e9parez l\u2019ordre de travail, le cr\u00e9neau d\u2019acc\u00e8s et les preuves de r\u00e9alisation avant de demander une intervention.|Bereiten Sie Arbeitsauftrag, Zugangszeitfenster und Abschlussnachweise vor, bevor Sie Vor-Ort-Unterst\u00fctzung anfragen.
network|Define what will be measured and which changes can be tested within an approved window.|Defina o que ser\u00e1 medido e quais mudan\u00e7as podem ser testadas em uma janela aprovada.|Define qu\u00e9 se medir\u00e1 y qu\u00e9 cambios pueden probarse en una ventana aprobada.|D\u00e9finissez les mesures et les changements \u00e0 tester pendant un cr\u00e9neau approuv\u00e9.|Legen Sie Messgr\u00f6\u00dfen und die in einem freigegebenen Zeitfenster testbaren \u00c4nderungen fest.
ops|Start with one ticket flow; keep escalation, ownership and the final decision with a person.|Comece por um fluxo de chamados; mantenha a escala\u00e7\u00e3o, a responsabilidade e a decis\u00e3o final com uma pessoa.|Empieza por un flujo de tickets; mant\u00e9n la escalada, la responsabilidad y la decisi\u00f3n final en manos de una persona.|Commencez par un flux de tickets ; confiez l\u2019escalade, la responsabilit\u00e9 et la d\u00e9cision finale \u00e0 une personne.|Beginnen Sie mit einem Ticket-Ablauf; Eskalation, Verantwortung und die letzte Entscheidung bleiben bei einer Person.
security|Review permissions and data exposure with synthetic examples, never live credentials.|Revise permiss\u00f5es e exposi\u00e7\u00e3o de dados com exemplos sint\u00e9ticos, nunca com credenciais reais.|Revisa los permisos y la exposici\u00f3n de datos con ejemplos sint\u00e9ticos, nunca con credenciales reales.|Examinez les droits et l\u2019exposition des donn\u00e9es avec des exemples fictifs, jamais avec de vrais identifiants.|Pr\u00fcfen Sie Rechte und Datenoffenlegung anhand synthetischer Beispiele, nie mit echten Zugangsdaten.
procurement|Compare the same scope and complete costs; a supplier listing is not a verified quotation.|Compare o mesmo escopo e os custos completos; um fornecedor listado n\u00e3o equivale a uma cota\u00e7\u00e3o verificada.|Compara el mismo alcance y los costes completos; un proveedor listado no equivale a una cotizaci\u00f3n verificada.|Comparez un p\u00e9rim\u00e8tre identique et les co\u00fbts complets ; une fiche fournisseur ne constitue pas un devis v\u00e9rifi\u00e9.|Vergleichen Sie denselben Umfang und die Gesamtkosten; ein Lieferanteneintrag ist kein gepr\u00fcftes Angebot.
cost|Keep assumptions visible and compare scenarios; estimates are not guaranteed savings.|Mantenha as premissas vis\u00edveis e compare cen\u00e1rios; estimativas n\u00e3o s\u00e3o economias garantidas.|Mant\u00e9n visibles los supuestos y compara escenarios; las estimaciones no garantizan ahorros.|Gardez les hypoth\u00e8ses visibles et comparez les sc\u00e9narios ; les estimations ne garantissent pas d\u2019\u00e9conomies.|Halten Sie Annahmen sichtbar und vergleichen Sie Szenarien; Sch\u00e4tzungen garantieren keine Einsparungen.
automation|Choose a narrow process, a reviewer and a stop rule before connecting real systems.|Escolha um processo limitado, um revisor e uma regra de parada antes de conectar sistemas reais.|Elige un proceso acotado, un revisor y una regla de parada antes de conectar sistemas reales.|Choisissez un processus limit\u00e9, un r\u00e9viseur et une r\u00e8gle d\u2019arr\u00eat avant de connecter des syst\u00e8mes r\u00e9els.|W\u00e4hlen Sie einen begrenzten Prozess, einen Pr\u00fcfer und eine Abbruchregel vor der Anbindung echter Systeme.
sales|Organize evidence of fit and account ownership; these links do not authorize outreach.|Organize evid\u00eancias de ader\u00eancia e responsabilidade pela conta; estes links n\u00e3o autorizam contatos.|Organiza evidencias de adecuaci\u00f3n y responsabilidad de la cuenta; estos enlaces no autorizan contactos.|Organisez les preuves de pertinence et la responsabilit\u00e9 du compte ; ces liens n\u2019autorisent aucune prospection.|Ordnen Sie Eignungsnachweise und Kontoverantwortung; diese Links erlauben keine Kontaktaufnahme.
data|Check input quality, evaluation criteria and limitations before interpreting a result.|Confira a qualidade dos dados, os crit\u00e9rios de avalia\u00e7\u00e3o e as limita\u00e7\u00f5es antes de interpretar um resultado.|Comprueba la calidad de los datos, los criterios de evaluaci\u00f3n y las limitaciones antes de interpretar un resultado.|V\u00e9rifiez la qualit\u00e9 des donn\u00e9es, les crit\u00e8res d\u2019\u00e9valuation et les limites avant d\u2019interpr\u00e9ter un r\u00e9sultat.|Pr\u00fcfen Sie Datenqualit\u00e4t, Bewertungskriterien und Grenzen, bevor Sie ein Ergebnis deuten.
logistics|Test capacity and route assumptions against actual constraints before changing an operation.|Teste premissas de capacidade e rotas com restri\u00e7\u00f5es reais antes de alterar uma opera\u00e7\u00e3o.|Prueba los supuestos de capacidad y rutas frente a restricciones reales antes de cambiar una operaci\u00f3n.|Testez les hypoth\u00e8ses de capacit\u00e9 et d\u2019itin\u00e9raire face aux contraintes r\u00e9elles avant de modifier l\u2019exploitation.|Pr\u00fcfen Sie Kapazit\u00e4ts- und Routenannahmen anhand tats\u00e4chlicher Einschr\u00e4nkungen vor Betriebs\u00e4nderungen.
'''
CONTEXT = {parts[0]: dict(zip(LOCALES, parts[1:])) for parts in (line.split('|') for line in CONTEXT_ROWS.strip().splitlines())}
NOTES = dict(zip(LOCALES, (
    'These navigation labels are translated. The original project destinations are unchanged; their language and maturity vary. Links do not certify app functionality, integrations, availability or deployment permission.',
    'Os r\u00f3tulos de navega\u00e7\u00e3o est\u00e3o traduzidos. Os destinos originais dos projetos n\u00e3o mudaram; idioma e maturidade variam. Links n\u00e3o certificam funcionamento, integra\u00e7\u00f5es, disponibilidade ou autoriza\u00e7\u00e3o de implanta\u00e7\u00e3o.',
    'Estas etiquetas de navegaci\u00f3n est\u00e1n traducidas. Los destinos originales no han cambiado; su idioma y madurez var\u00edan. Los enlaces no certifican funcionamiento, integraciones, disponibilidad ni permiso de despliegue.',
    'Ces libell\u00e9s de navigation sont traduits. Les destinations originales restent inchang\u00e9es ; leur langue et leur maturit\u00e9 varient. Les liens ne certifient ni fonctionnement, ni int\u00e9gration, ni disponibilit\u00e9, ni autorisation de d\u00e9ploiement.',
    'Diese Navigationsbeschriftungen sind \u00fcbersetzt. Die urspr\u00fcnglichen Projektziele bleiben unver\u00e4ndert; Sprache und Reifegrad variieren. Links best\u00e4tigen weder Funktionalit\u00e4t noch Integration, Verf\u00fcgbarkeit oder Bereitstellungsfreigabe.'
)))
STYLE = '.category-context{color:#475569}.grid .card ul{padding-left:1.2rem}.grid .card li a{display:block;padding:.45rem .2rem;text-underline-offset:.2em}.grid .card li a:hover{background:#e7f8f4}.resource-index ul{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr));gap:.25rem 1.5rem;padding-left:1.2rem}.resource-index a{display:inline-block;padding:.35rem 0}'

COMPARISON = {'en': {'title': 'Compare resources before choosing a pilot', 'intro': 'Use the same short review for every resource so that a promising description becomes a testable decision.', 'steps': ['Define the input and expected output. Check whether the destination is a guide, a calculator, a prototype or an implemented application.', 'Try a synthetic example and compare the result with a known answer. Record missing integrations, language gaps and accessibility barriers.', 'Name a reviewer and an acceptance criterion. Choose a limited next step only after reviewing the evidence; keep real data and production changes out of the initial test.']}, 'pt': {'title': 'Compare os recursos antes de escolher um piloto', 'intro': 'Use a mesma revisão breve para cada recurso e transforme uma descrição promissora em uma decisão que possa ser testada.', 'steps': ['Defina a entrada e a saída esperada. Confira se o destino é um guia, uma calculadora, um protótipo ou uma aplicação implementada.', 'Teste um exemplo sintético e compare o resultado com uma resposta conhecida. Registre integrações ausentes, lacunas de idioma e barreiras de acessibilidade.', 'Indique um revisor e um critério de aceitação. Escolha um próximo passo limitado somente após revisar as evidências; não use dados reais nem faça alterações em produção no teste inicial.']}, 'es': {'title': 'Compara los recursos antes de elegir un piloto', 'intro': 'Aplica la misma revisión breve a cada recurso para convertir una descripción prometedora en una decisión que puedas poner a prueba.', 'steps': ['Define la entrada y la salida esperada. Comprueba si el destino es una guía, una calculadora, un prototipo o una aplicación implementada.', 'Prueba un ejemplo sintético y compara el resultado con una respuesta conocida. Registra las integraciones ausentes, las carencias de idioma y las barreras de accesibilidad.', 'Designa un revisor y un criterio de aceptación. Elige un siguiente paso limitado solo después de revisar las evidencias; no uses datos reales ni hagas cambios en producción en la prueba inicial.']}, 'fr': {'title': 'Comparez les ressources avant de choisir un projet pilote', 'intro': 'Appliquez le même examen rapide à chaque ressource pour transformer une description prometteuse en une décision que vous pourrez tester.', 'steps': ['Définissez les données d’entrée et le résultat attendu. Vérifiez si la destination est un guide, un calculateur, un prototype ou une application implémentée.', 'Essayez un exemple fictif et comparez le résultat à une réponse connue. Notez les intégrations manquantes, les lacunes linguistiques et les obstacles d’accessibilité.', 'Désignez un réviseur et un critère d’acceptation. Ne choisissez une prochaine étape limitée qu’après examen des preuves ; excluez les données réelles et les changements en production du test initial.']}, 'de': {'title': 'Vergleichen Sie Ressourcen vor der Auswahl eines Pilotprojekts', 'intro': 'Prüfen Sie jede Ressource nach demselben kurzen Schema, damit aus einer vielversprechenden Beschreibung eine überprüfbare Entscheidung wird.', 'steps': ['Definieren Sie Eingabe und erwartete Ausgabe. Prüfen Sie, ob das Ziel ein Leitfaden, ein Rechner, ein Prototyp oder eine implementierte Anwendung ist.', 'Testen Sie ein synthetisches Beispiel und vergleichen Sie das Ergebnis mit einer bekannten Antwort. Halten Sie fehlende Integrationen, Sprachlücken und Barrieren bei der Zugänglichkeit fest.', 'Benennen Sie eine prüfende Person und ein Abnahmekriterium. Wählen Sie erst nach Prüfung der Nachweise einen begrenzten nächsten Schritt; verwenden Sie im ersten Test keine Echtdaten und ändern Sie keine Produktivsysteme.']}}

def comparison_section(locale):
    copy = COMPARISON.get(locale, {})
    if set(copy) != {"title", "intro", "steps"} or not isinstance(copy["steps"], list) or len(copy["steps"]) != 3:
        raise ValueError("Incomplete comparison copy: " + locale)
    values = [copy["title"], copy["intro"], *copy["steps"]]
    if any(not isinstance(v, str) or not v.strip() for v in values):
        raise ValueError("Empty comparison copy: " + locale)
    escape = lambda value: html.escape(value, quote=True)
    return ('<section class="resource-comparison" aria-labelledby="resource-comparison-title"><h2 id="resource-comparison-title">' + escape(copy["title"]) + "</h2><p>" + escape(copy["intro"]) + "</p><ol>" + "".join("<li>" + escape(step) + "</li>" for step in copy["steps"]) + "</ol></section>")


class Links(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.hrefs = []; self.language = None
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a': self.hrefs.append(attrs.get('href'))
        if tag == 'html': self.language = attrs.get('lang')


def validate_copy():
    if set(CONTEXT) != set(IDS) or set(NOTES) != set(LOCALES):
        raise ValueError('Incomplete category or disclosure copy')
    for key, translations in [*LABELS.items(), *CONTEXT.items(), ('disclosure', NOTES)]:
        if set(translations) != set(LOCALES) or any(not isinstance(v, str) or not v.strip() for v in translations.values()):
            raise ValueError('Incomplete five-language copy: ' + key)


def localize_pages(pages, languages):
    """Return localized maps without touching disk or changing any link URL.

    Fail before returning any candidate if a locale, category, or destination
    lacks copy. This runs inside the finalizer's temporary staging directory.
    """
    validate_copy()
    comparison_sections = {locale: comparison_section(locale) for locale in LOCALES}
    if languages != LANGS or len(pages) != len(LOCALES):
        raise ValueError('Expected exactly EN/PT-BR/ES/FR/DE maps')
    result = {}
    for locale, language in languages.items():
        name = ('' if locale == 'en' else locale + '/') + 'apps/app-network-use-case-map.html'
        if name not in pages: raise ValueError('Missing locale map: ' + locale)
        before = pages[name]
        if Links(before).language != language: raise ValueError('Wrong map language: ' + locale)
        if 'data-use-case-link-copy=' in before:
            raise ValueError('Localize freshly rendered maps, not previously localized output')
        category_links = [0]; resource_links = [0]
        def replace_anchor(match):
            opening, encoded_href, inner = match.group(1), match.group(2), match.group(3)
            href = html.unescape(encoded_href)
            is_project = bool(re.fullmatch(r'<span lang="en">[^<]*</span>', inner))
            is_resource = html.unescape(inner).endswith(': ' + href) and '<' not in inner
            if not (is_project or is_resource): return match.group(0)
            if href not in LABELS: raise ValueError('No reviewed link translation: ' + href)
            if is_project: category_links[0] += 1
            if is_resource: resource_links[0] += 1
            return opening + html.escape(LABELS[href][locale], quote=True) + '</a>'
        after = re.sub(r'(<a href="([^"]+)">)([\s\S]*?)</a>', replace_anchor, before)
        if category_links[0] != 40 or resource_links[0] != len(LABELS):
            raise ValueError('Unexpected map link shape; review new source destinations')
        for key in IDS:
            pattern = r'(<h2 id="' + key + r'-title">[\s\S]*?</h2>)'
            if len(re.findall(pattern, after)) != 1: raise ValueError('Missing or duplicate category: ' + key)
            text = '<p class="category-context">' + html.escape(CONTEXT[key][locale], quote=True) + '</p>'
            after = re.sub(pattern, lambda m: m.group(1) + text, after, count=1)
        pattern = r'(<aside class="note"><p>)[\s\S]*?(</p>)'
        if len(re.findall(pattern, after)) != 1: raise ValueError('Missing destination-language disclosure')
        after = re.sub(pattern, lambda m: m.group(1) + html.escape(NOTES[locale], quote=True) + m.group(2), after, count=1)
        if after.count('<main id="main">') != 1 or after.count('</style>') != 1:
            raise ValueError('Unexpected main/style shape')
        after = after.replace('<main id="main">', '<main id="main" data-use-case-link-copy="' + RELEASE + '">', 1)
        after = after.replace('</style>', STYLE + '</style>', 1)
        after = after.replace('</aside><section>', '</aside><section class="resource-index">', 1)
        if after.count('</section></main>') != 1:
            raise ValueError("Unexpected final resource section shape")
        after = after.replace('</section></main>', '</section>' + comparison_sections[locale] + '</main>', 1)
        if Links(before).hrefs != Links(after).hrefs:
            raise ValueError('A navigation destination or its order changed')
        if re.findall(r'<(?:form|script)\b[\s\S]*?</(?:form|script)>', before, re.I) != re.findall(r'<(?:form|script)\b[\s\S]*?</(?:form|script)>', after, re.I):
            raise ValueError('Protected form/script changed')
        result[name] = after
    return result

