'use strict';
// Approved additive artifact renderer. No submissions, purchases or dispatches.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',base='/apps/field-service-evidence-guide',origin='https://ziontechgroup.com';
const names={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'};
const localizedUI={
 en:{language:'Language',topic:'Field service evidence guides',readiness:'Field visit readiness',tools:['Supplier Quote Evidence Workbench','SLA Calculator','ROI Calculator','Automation Pilot Planner']},
 pt:{language:'Idioma',topic:'Guias de evidências para serviços de campo',readiness:'Prontidão para visita técnica',tools:['Bancada de evidências de cotações','Calculadora de SLA','Calculadora de ROI','Planejador de piloto de automação']},
 es:{language:'Idioma',topic:'Guías de evidencias para servicios de campo',readiness:'Preparación para la visita técnica',tools:['Banco de evidencias de cotizaciones','Calculadora de SLA','Calculadora de ROI','Planificador de piloto de automatización']},
 fr:{language:'Langue',topic:'Guides des preuves pour les services sur site',readiness:'Préparation de la visite sur site',tools:['Atelier de preuves des devis','Calculateur de SLA','Calculateur de ROI','Planificateur de pilote d’automatisation']},
 de:{language:'Sprache',topic:'Evidenzleitfäden für Vor-Ort-Service',readiness:'Bereitschaft für den Vor-Ort-Einsatz',tools:['Arbeitsbereich für Angebotsnachweise','SLA-Rechner','ROI-Rechner','Planer für Automatisierungspiloten']}
};
const route=l=>base+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
const copy={
pt:{title:'Guia de evidências para serviços de campo',intro:'Do Discovery a uma visita técnica que pode ser qualificada. Defina o processo, compare evidências escritas e mantenha aprovações separadas. Uma ferramenta de planejamento não confirma técnico, cotação, PO ou autorização de despacho.',nav:['Início','Apps','Rede de apps','Discovery gratuito','Pular para o conteúdo'],stepsTitle:'Uma jornada prática em cinco etapas',steps:['Descobrir: escolha um processo no Discovery gratuito, guarde o relatório imediato e valide suas hipóteses.','Especificar: o responsável deve documentar escopo, fuso local, janelas separadas de visita, regras de acesso e escolta e evidências de sucesso no canal autorizado. Um endereço compartilhado não significa uma única visita.','Qualificar: obtenha nomes dos técnicos, disponibilidade por escrito, experiência pertinente, ferramentas e evidências de seguro e conformidade. Compare escopo completo e condições comerciais escritas.','Aprovar: defina o preço ao cliente e destaque impostos, viagem, frete e outras despesas aplicáveis. Antes de qualquer compra, reserva ou despacho, exija confirmação formal escrita do cliente, PO correspondente e liberação operacional específica da Zion. Os três requisitos são cumulativos.','Encerrar com evidências: registre trabalho executado, testes, exceções, aceite do cliente e tempo e custo reais. Preserve a conversa escrita; não invente resultados.'],toolsTitle:'Quatro ferramentas conectadas para explorar',tools:['Compare hipóteses de custo e evidências faltantes usando cotações escritas, não médias de mercado como compromisso do fornecedor. Não cria pedido nem despacho.','Explore cenários de disponibilidade e penalidades. Valide contrato, janela de serviço e exclusões antes de usar o resultado.','Refine hipóteses de horas e capacidade usando sua própria referência inicial. Estimativas não são economias medidas, garantias ou cotações.','Defina responsável, referência inicial, revisão humana e regra de parada para um teste reversível. Planejamento não autoriza mudanças em produção.'],open:'Abrir',source:'Ver código-fonte',checksTitle:'Antes de selecionar um parceiro',checks:['Manutenção física não concede automaticamente direitos a firmware, software, licenças ou suporte do fabricante; confirme esses direitos separadamente.','Compare escopo equivalente, qualificação dos técnicos e disponibilidade. Diferencie os prazos de resposta, restauração e solução.','Confirme horas mínimas, hora extra, cancelamento, pagamento, validade da cotação, viagem, estacionamento e tratamento tributário.','Identifique estimativas como estimativas; nunca prometa estoque ou disponibilidade de técnico não confirmados.','Mantenha um único responsável pela conversa. Responda na mesma conversa e evite contatos de acompanhamento duplicados sem resposta.','Somente o responsável pode coletar nomes de clientes, endereço preciso, números de série ou logs reais, no canal autorizado e estritamente quando necessário. Este guia público não solicita esses dados. Revise os logs e remova segredos e dados desnecessários antes de compartilhar.'],freeTitle:'Discovery gratuito e online',free:'Sem cartão, compra ou reunião comercial obrigatória. O relatório aparece imediatamente no navegador; o mesmo resultado é submetido para entrega ao endereço validado do participante e a commercial@ziontechgroup.com. A aceitação pelo provedor não comprova recebimento. Copie ou baixe o relatório ou use a alternativa manual quando necessário.',guard:'Serviços pagos são opcionais e separados. Este guia não coleta informações nem inicia agendamento, pedido ou despacho.',report:'Trabalhar no relatório',footer:'Guias, rede e prontidão para a visita',types:['Página de serviço','Documentação / conceito','Calculadora: validar hipóteses','Destino não verificado']},
es:{title:'Guía de evidencias para servicios de campo',intro:'Del Discovery a una visita técnica que se puede cualificar. Defina el proceso, compare evidencias escritas y mantenga separadas las aprobaciones. Una herramienta de planificación no confirma un técnico, una cotización, un PO ni permiso de despacho.',nav:['Inicio','Apps','Red de apps','Discovery gratuito','Saltar al contenido'],stepsTitle:'Un recorrido práctico en cinco pasos',steps:['Descubrir: elija un proceso en Discovery gratuito, conserve el informe inmediato y valide sus supuestos.','Especificar: el responsable debe documentar alcance, zona horaria local, ventanas de visita separadas, reglas de acceso y acompañamiento y evidencias de éxito en el canal autorizado. Compartir dirección no significa una sola visita.','Cualificar: obtenga nombres de técnicos, disponibilidad escrita, experiencia pertinente, herramientas y evidencias de seguro y cumplimiento. Compare el alcance completo y las condiciones comerciales escritas.','Aprobar: acuerde el precio al cliente y detalle impuestos, viajes, transporte y otros cargos aplicables. Antes de cualquier compra, reserva o despacho, exija la confirmación formal por escrito del cliente, la orden de compra (PO) correspondiente y la autorización operativa específica de Zion. Los tres requisitos son obligatorios.','Cerrar con evidencias: registre el trabajo, pruebas, excepciones, aceptación del cliente y tiempo y costo reales. Conserve la conversación escrita; no invente resultados.'],toolsTitle:'Cuatro herramientas conectadas para explorar',tools:['Compare supuestos de costo y evidencias pendientes mediante cotizaciones escritas, no promedios de mercado como compromiso del proveedor. No crea pedidos ni despachos.','Explore disponibilidad y penalizaciones. Valide contrato, horario de servicio y exclusiones antes de usar el resultado.','Refine horas y capacidad con su propia línea base. Las estimaciones no son ahorros medidos, garantías ni cotizaciones.','Defina responsable, línea base, revisión humana y regla de parada para una prueba reversible. Planificar no autoriza cambios en producción.'],open:'Abrir',source:'Ver código fuente',checksTitle:'Antes de elegir un socio',checks:['El mantenimiento físico no otorga automáticamente derechos de firmware, software, licencias ni soporte del fabricante; confirme esos derechos por separado.','Compare alcance equivalente, cualificaciones y disponibilidad. Distinga los plazos de respuesta, restauración y resolución.','Confirme horas mínimas, horas extra, cancelación, pago, validez, viajes, estacionamiento y tratamiento fiscal.','Identifique las estimaciones; nunca prometa existencias ni disponibilidad de técnicos sin confirmar.','Mantenga un único responsable. Responda en el mismo hilo y evite seguimientos duplicados sin respuesta.','Solo el responsable puede recopilar identidades de clientes, direcciones exactas, números de serie o registros reales, por el canal autorizado y cuando sea estrictamente necesario. Esta guía pública no solicita esos datos. Revise los registros y elimine secretos y datos innecesarios antes de compartirlos.'],freeTitle:'Discovery gratuito y online',free:'Sin tarjeta, compra ni llamada comercial obligatoria. El informe aparece inmediatamente en el navegador; el mismo resultado se envía al servicio de correo para la dirección validada del participante y commercial@ziontechgroup.com. La aceptación del proveedor no prueba recepción. Copie o descargue el informe o use la alternativa manual cuando sea necesario.',guard:'Los servicios de pago son opcionales y separados. Esta guía no recoge datos ni inicia reservas, pedidos o despachos.',report:'Trabajar en el informe',footer:'Guías, red y preparación para la visita',types:['Página de servicio','Documentación / concepto','Calculadora: validar supuestos','Destino no verificado']},
fr:{title:'Guide des preuves pour les services sur site',intro:'Du Discovery à une intervention que vous pouvez qualifier. Définissez le processus, comparez les preuves écrites et séparez les validations. Un outil de planification ne confirme ni technicien, ni devis, ni bon de commande, ni autorisation de déplacement.',nav:['Accueil','Apps','Réseau des apps','Discovery gratuit','Aller au contenu'],stepsTitle:'Un parcours pratique en cinq étapes',steps:['Découvrir : choisissez un processus dans Discovery gratuit, conservez le rapport immédiat et validez ses hypothèses.','Préciser : le responsable doit documenter le périmètre, le fuseau local, les créneaux distincts, les règles d’accès et d’accompagnement et les preuves de réussite dans le canal autorisé. Une adresse commune ne signifie pas une seule intervention.','Qualifier : obtenez les noms des techniciens, leur disponibilité écrite, expérience pertinente, outils et preuves d’assurance et de conformité. Comparez le périmètre complet et les conditions commerciales écrites.','Approuver : convenez du prix client et détaillez taxes, déplacements, transport et autres frais applicables. Avant tout achat, réservation ou envoi d’une équipe, exigez la confirmation écrite formelle du client, le bon de commande (PO) correspondant et l’autorisation opérationnelle spécifique de Zion. Les trois exigences sont cumulatives.','Clore avec des preuves : consignez travaux, tests, exceptions, acceptation du client, durée et coût réels. Conservez la conversation écrite ; ne créez pas de résultats fictifs.'],toolsTitle:'Quatre outils connectés à explorer',tools:['Comparez hypothèses de coût et preuves manquantes à partir de devis écrits, et non de moyennes de marché présentées comme engagements du fournisseur. Aucun achat ni déplacement n’est créé.','Explorez disponibilité et pénalités. Vérifiez contrat, plage de service et exclusions avant d’utiliser le résultat.','Affinez heures et capacité avec votre référence réelle. Les estimations ne sont ni économies mesurées, ni garanties, ni devis.','Définissez responsable, référence, contrôle humain et règle d’arrêt pour un test réversible. Planifier n’autorise aucun changement en production.'],open:'Ouvrir',source:'Voir le code source',checksTitle:'Avant de choisir un partenaire',checks:['La maintenance physique ne confère pas automatiquement de droits sur les micrologiciels, logiciels, licences ou support du fabricant ; vérifiez ces droits séparément.','Comparez périmètres équivalents, qualifications et disponibilité. Distinguez les délais de réponse, de rétablissement et de résolution.','Confirmez minimum d’heures, heures supplémentaires, annulation, paiement, validité, déplacements, stationnement et fiscalité.','Signalez les estimations ; ne promettez ni stock ni disponibilité de techniciens non confirmés.','Gardez un seul responsable. Répondez dans le même fil et évitez les relances en doublon sans réponse.','Seul le responsable peut recueillir les identités des clients, adresses exactes, numéros de série ou journaux réels, dans le canal autorisé et uniquement si nécessaire. Ce guide public ne demande pas ces données. Relisez les journaux et retirez les secrets et données superflues avant tout partage.'],freeTitle:'Discovery gratuit et en ligne',free:'Sans carte bancaire, achat ni appel commercial obligatoire. Le rapport apparaît immédiatement dans le navigateur ; le même résultat est soumis au service de messagerie pour l’adresse validée du participant et commercial@ziontechgroup.com. L’acceptation du prestataire ne prouve pas la réception. Copiez ou téléchargez le rapport, ou utilisez la solution manuelle si nécessaire.',guard:'Les services payants sont facultatifs et distincts. Ce guide ne collecte aucune information et ne crée aucune réservation, commande ou intervention.',report:'Travailler sur le rapport',footer:'Guides, réseau et préparation de l’intervention',types:['Page de service','Documentation / concept','Calculateur : vérifier les hypothèses','Destination non vérifiée']},
de:{title:'Evidenzleitfaden für Vor-Ort-Service',intro:'Von Discovery zu einem überprüfbaren Vor-Ort-Einsatz. Beschreiben Sie den Prozess, vergleichen Sie schriftliche Nachweise und trennen Sie Freigaben. Ein Planungswerkzeug bestätigt weder Techniker noch Angebot, Bestellung oder Einsatzfreigabe.',nav:['Startseite','Apps','App-Netzwerk','Kostenloses Discovery','Zum Inhalt'],stepsTitle:'Ein praktischer Weg in fünf Schritten',steps:['Entdecken: Wählen Sie einen Prozess im kostenlosen Discovery, speichern Sie den sofortigen Bericht und prüfen Sie seine Annahmen.','Beschreiben: Die verantwortliche Person dokumentiert Umfang, lokale Zeitzone, getrennte Besuchsfenster, Zugangs- und Begleitregeln sowie Erfolgskriterien im autorisierten Kanal. Eine gemeinsame Adresse bedeutet nicht einen einzigen Einsatz.','Qualifizieren: Fordern Sie Technikernamen, schriftliche Verfügbarkeit, einschlägige Erfahrung, Werkzeuge sowie Versicherungs- und Compliance-Nachweise an. Vergleichen Sie vollständigen Umfang und schriftliche Geschäftsbedingungen.','Freigeben: Vereinbaren Sie den Kundenpreis und weisen Sie Steuern, Reise-, Fracht- und sonstige anwendbare Kosten gesondert aus. Vor jedem Kauf, jeder Reservierung oder Entsendung sind die formelle schriftliche Kundenbestätigung, die zugehörige Bestellung (PO) und die spezifische operative Freigabe durch Zion erforderlich. Alle drei Voraussetzungen müssen erfüllt sein.','Mit Nachweisen abschließen: Dokumentieren Sie Arbeiten, Tests, Ausnahmen, Kundenabnahme sowie tatsächliche Zeit und Kosten. Bewahren Sie den schriftlichen Verlauf; erfinden Sie keine Ergebnisse.'],toolsTitle:'Vier verknüpfte Werkzeuge erkunden',tools:['Vergleichen Sie Kostenannahmen und fehlende Nachweise anhand schriftlicher Angebote, nicht anhand von Marktmitteln als vermeintlicher Lieferantenzusage. Keine Bestellung oder Entsendung wird ausgelöst.','Prüfen Sie Verfügbarkeits- und Vertragsstrafenszenarien. Kontrollieren Sie Vertrag, Servicezeiten und Ausschlüsse vor Nutzung.','Präzisieren Sie Stunden- und Kapazitätsannahmen anhand Ihrer eigenen Ausgangswerte. Schätzungen sind keine gemessenen Einsparungen, Garantien oder Angebote.','Definieren Sie Verantwortliche, Ausgangswerte, menschliche Prüfung und Abbruchregel für einen reversiblen Test. Planung erlaubt keine Produktionsänderung.'],open:'Öffnen',source:'Quellcode ansehen',checksTitle:'Vor der Partnerauswahl',checks:['Physische Wartung gewährt nicht automatisch Rechte an Firmware, Software, Lizenzen oder Herstellersupport; prüfen Sie diese Rechte gesondert.','Vergleichen Sie gleichwertigen Umfang, Qualifikation und Verfügbarkeit. Unterscheiden Sie Reaktionszeit, Wiederherstellungszeit und endgültige Behebung.','Bestätigen Sie Mindeststunden, Überstunden, Stornierung, Zahlung, Gültigkeit, Reise, Parken und steuerliche Behandlung.','Kennzeichnen Sie Schätzungen; versprechen Sie keine unbestätigten Bestände oder Technikerverfügbarkeit.','Behalten Sie eine verantwortliche Person. Antworten Sie im bestehenden Verlauf und vermeiden Sie doppelte unbeantwortete Nachfassmails.','Nur die verantwortliche Person darf Kundenidentitäten, genaue Adressen, Seriennummern oder echte Protokolle im autorisierten Kanal und nur bei zwingendem Bedarf erfassen. Dieser öffentliche Leitfaden fordert diese Daten nicht an. Prüfen Sie Protokolle und entfernen Sie Geheimnisse und unnötige Daten vor dem Teilen.'],freeTitle:'Discovery kostenlos und online',free:'Keine Kreditkarte, kein Kauf und kein verpflichtender Vertriebstermin. Der Bericht erscheint sofort im Browser; dasselbe Ergebnis wird dem E-Mail-Dienst für die validierte Teilnehmeradresse und commercial@ziontechgroup.com übergeben. Annahme durch den Dienst beweist keinen Eingang im Postfach. Kopieren oder laden Sie den Bericht herunter oder nutzen Sie bei Bedarf den manuellen Ersatzweg.',guard:'Kostenpflichtige Leistungen sind optional und getrennt. Dieser Leitfaden erfasst keine Informationen und löst keine Reservierung, Bestellung oder Entsendung aus.',report:'Bericht bearbeiten',footer:'Leitfäden, Netzwerk und Einsatzbereitschaft',types:['Dienstleistungsseite','Dokumentation / Konzept','Rechner: Annahmen prüfen','Ungeprüftes Ziel']}
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Same-language routes for the existing preparation, evidence and closeout resources.
const visitJourneyCopy={
  "en": {
    "title": "Prepare the visit and document the outcome",
    "intro": "Move from an agreed scope to a reviewable service record with these three resources, in the same language as this guide.",
    "stages": [
      [
        "Before the visit",
        "Check access, the named technician, written availability and the approved scope. Review the client confirmation, purchase order and separate Zion release before any supplier commitment.",
        "Review the visit handoff"
      ],
      [
        "During the work",
        "For each agreed check, record the expected result, observed result, time and evidence reference. Mark a check that was not performed as pending and assign its next action.",
        "Review operational evidence"
      ],
      [
        "At completion",
        "Use the report template to record completed work, exceptions, open actions and the next update. Request written acceptance from the authorized client contact in the existing service thread.",
        "Prepare the completion report"
      ]
    ],
    "note": "Keep technician completion and client acceptance as separate statuses. An unresolved check needs an owner and a next update; it must not be recorded as passed."
  },
  "pt": {
    "title": "Prepare a visita e documente o resultado",
    "intro": "Passe do escopo acordado a um registro de serviço que possa ser revisado com estes três recursos, no mesmo idioma deste guia.",
    "stages": [
      [
        "Antes da visita",
        "Confira acesso, técnico identificado, disponibilidade escrita e escopo aprovado. Revise a confirmação do cliente, a PO e a liberação separada da Zion antes de qualquer compromisso com o fornecedor.",
        "Revisar a passagem da visita"
      ],
      [
        "Durante o trabalho",
        "Para cada verificação acordada, registre resultado esperado, resultado observado, horário e referência da evidência. Marque uma verificação não realizada como pendente e atribua a próxima ação.",
        "Revisar as evidências operacionais"
      ],
      [
        "Na conclusão",
        "Use o modelo de relatório para registrar trabalho concluído, exceções, ações pendentes e a próxima atualização. Solicite aceite escrito ao contato autorizado do cliente na conversa existente sobre o serviço.",
        "Preparar o relatório de conclusão"
      ]
    ],
    "note": "Mantenha a conclusão do técnico e o aceite do cliente como estados separados. Uma verificação pendente precisa de responsável e próxima atualização; ela não deve ser registrada como aprovada."
  },
  "es": {
    "title": "Prepare la visita y documente el resultado",
    "intro": "Pase del alcance acordado a un registro de servicio que pueda revisarse con estos tres recursos, en el mismo idioma que esta guía.",
    "stages": [
      [
        "Antes de la visita",
        "Compruebe el acceso, el técnico identificado, la disponibilidad escrita y el alcance aprobado. Revise la confirmación del cliente, la orden de compra y la autorización separada de Zion antes de asumir un compromiso con el proveedor.",
        "Revisar la preparación de la visita"
      ],
      [
        "Durante el trabajo",
        "Para cada comprobación acordada, registre el resultado esperado, el observado, la hora y la referencia de la evidencia. Marque una comprobación no realizada como pendiente y asigne la siguiente acción.",
        "Revisar las evidencias operativas"
      ],
      [
        "Al finalizar",
        "Use la plantilla del informe para registrar el trabajo terminado, las excepciones, las acciones pendientes y la próxima actualización. Solicite la aceptación escrita del contacto autorizado del cliente en la conversación existente sobre el servicio.",
        "Preparar el informe de finalización"
      ]
    ],
    "note": "Mantenga la finalización del técnico y la aceptación del cliente como estados separados. Una comprobación pendiente necesita responsable y próxima actualización; no debe registrarse como superada."
  },
  "fr": {
    "title": "Préparez la visite et documentez le résultat",
    "intro": "Passez du périmètre convenu à un dossier de service vérifiable grâce à ces trois ressources, dans la même langue que ce guide.",
    "stages": [
      [
        "Avant la visite",
        "Vérifiez l’accès, le technicien identifié, sa disponibilité écrite et le périmètre approuvé. Contrôlez la confirmation du client, le bon de commande et l’autorisation distincte de Zion avant tout engagement envers le fournisseur.",
        "Vérifier la préparation de la visite"
      ],
      [
        "Pendant les travaux",
        "Pour chaque vérification convenue, consignez le résultat attendu, le résultat observé, l’heure et la référence de la preuve. Marquez une vérification non effectuée comme en attente et attribuez l’action suivante.",
        "Vérifier les preuves opérationnelles"
      ],
      [
        "À la fin de l’intervention",
        "Utilisez le modèle de rapport pour consigner les travaux terminés, les exceptions, les actions restantes et la prochaine mise à jour. Demandez l’acceptation écrite du contact autorisé du client dans la conversation existante sur le service.",
        "Préparer le rapport de fin d’intervention"
      ]
    ],
    "note": "Conservez des statuts distincts pour la fin des travaux du technicien et l’acceptation du client. Une vérification en attente exige un responsable et une prochaine mise à jour ; elle ne doit pas être indiquée comme réussie."
  },
  "de": {
    "title": "Den Einsatz vorbereiten und das Ergebnis dokumentieren",
    "intro": "Erstellen Sie aus dem vereinbarten Leistungsumfang einen überprüfbaren Servicebericht. Diese drei Ressourcen verwenden dieselbe Sprache wie dieser Leitfaden.",
    "stages": [
      [
        "Vor dem Einsatz",
        "Prüfen Sie Zugang, benannten Techniker, schriftliche Verfügbarkeit und genehmigten Leistungsumfang. Prüfen Sie Kundenbestätigung, Bestellung und die separate Freigabe von Zion, bevor Sie eine Verpflichtung gegenüber dem Lieferanten eingehen.",
        "Einsatzvorbereitung prüfen"
      ],
      [
        "Während der Arbeiten",
        "Erfassen Sie für jede vereinbarte Prüfung das erwartete und beobachtete Ergebnis, die Uhrzeit und den Nachweisverweis. Kennzeichnen Sie eine nicht durchgeführte Prüfung als offen und weisen Sie die nächste Aufgabe zu.",
        "Betriebliche Nachweise prüfen"
      ],
      [
        "Zum Abschluss",
        "Dokumentieren Sie erledigte Arbeiten, Ausnahmen, offene Aufgaben und die nächste Rückmeldung mit der Berichtsvorlage. Fordern Sie die schriftliche Abnahme beim autorisierten Kundenkontakt im bestehenden Serviceverlauf an.",
        "Abschlussbericht vorbereiten"
      ]
    ],
    "note": "Führen Sie den Abschluss durch den Techniker und die Kundenabnahme als getrennte Statusangaben. Eine offene Prüfung braucht einen Verantwortlichen und die nächste Rückmeldung; sie darf nicht als bestanden vermerkt werden."
  }
};
const visitJourneySlugs=['field-visit-handoff-2026','app-network-operations-evidence-checklist-2026','field-service-completion-pack-2026'];
function withVisitJourney(html,locale){
 const c=visitJourneyCopy[locale];
 assert(c,'Unknown field-visit locale '+locale);
 const clean=html.replace(/<!--field-visit-journey:start-->[\s\S]*?<!--field-visit-journey:end-->/g,'');
 assert(!clean.includes('data-field-visit-journey'),'Unrecognized field-visit journey block '+locale);
 const anchor=locale==='en'?'<section aria-labelledby="tools">':'<section><h2 id="tools">';
 assert(clean.includes(anchor),'Field-visit journey insertion anchor changed '+locale);
 const suffix=locale==='en'?'':'-'+(locale==='pt'?'pt-br':locale);
 const cards=c.stages.map((item,i)=>'<article class="card"><h3>'+esc(item[0])+'</h3><p>'+esc(item[1])+'</p><a href="/zion-app-network/'+visitJourneySlugs[i]+suffix+'.html">'+esc(item[2])+'</a></article>').join('');
 const block='<!--field-visit-journey:start--><section data-field-visit-journey="2026-10-31" aria-labelledby="field-visit-journey-title"><h2 id="field-visit-journey-title">'+esc(c.title)+'</h2><p>'+esc(c.intro)+'</p><div class="grid">'+cards+'</div><p>'+esc(c.note)+'</p></section><!--field-visit-journey:end-->';
 return clean.replace(anchor,block+anchor);
}

const forms=s=>s.match(/<form\b[\s\S]*?<\/form>/gi)||[];
const types={en:['Service page','Documentation / concept','Calculator: validate assumptions','Unverified destination']};for(const [l,c] of Object.entries(copy))types[l]=c.types;
const languageNav=l=>'<nav data-field-evidence-languages aria-label="'+localizedUI[l].language+'">'+Object.keys(names).map(k=>'<a lang="'+(k==='pt'?'pt-BR':k)+'" hreflang="'+(k==='pt'?'pt-BR':k)+'" href="'+route(k)+'">'+names[k]+'</a>').join(' · ')+'</nav>';
const alternates=Object.keys(names).map(l=>'<link rel="alternate" hreflang="'+(l==='pt'?'pt-BR':l)+'" href="'+origin+route(l)+'">').join('')+'<link rel="alternate" hreflang="x-default" href="'+origin+route('en')+'">';
const toolPaths=['/apps/supplier-quote-evidence-workbench.html','/sla-calculator/','/roi-calc/','/automation-pilot-planner/'];
const toolSources=['public/apps/supplier-quote-evidence-workbench.html','public/sla-calculator/index.html','public/roi-calc/index.html','public/automation-pilot-planner/index.html'];
const englishFile=path.join(out,route('en').slice(1));assert(fs.existsSync(englishFile),'English guide missing');let en=fs.readFileSync(englishFile,'utf8');assert.equal(forms(en).length,0);
// Source pages can already carry hreflang metadata; keep exactly one reciprocal set.
en=en.replace(/<link\b(?=[^>]*\brel=["']alternate["'])[^>]*>/gi,'').replace('</head>',alternates+'</head>');
if(!en.includes('data-field-evidence-languages'))en=en.replace('<main id="main">','<main id="main">'+languageNav('en'));
en=withVisitJourney(en,'en');
assert.equal((en.match(/rel="alternate"/g)||[]).length,6);fs.writeFileSync(englishFile,en);
for(const [l,c] of Object.entries(copy)){
 const lang=l==='pt'?'pt-BR':l,p='/'+l+'/',home=l==='pt'?'/':p,ui=localizedUI[l];
 const cards=c.tools.map((body,i)=>'<article class="card"><h3>'+esc(ui.tools[i])+'</h3><p>'+esc(body)+'</p><a href="'+toolPaths[i]+'">'+esc(c.open)+'</a> · <a href="https://github.com/Zion-support/zion-support.github.io/blob/main/'+toolSources[i]+'">'+esc(c.source)+'</a></article>').join('');
 const html='<!DOCTYPE html><html lang="'+lang+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(c.title)+' | Zion</title><meta name="description" content="'+esc(c.intro)+'"><link rel="canonical" href="'+origin+route(l)+'">'+alternates+'<link rel="stylesheet" href="/assets/css/apps-pattern.css"><style>body{margin:0;background:#0b1220;color:#e8eef8;font:16px/1.65 system-ui,sans-serif}.wrap{max-width:1100px;margin:auto;padding:24px}a{color:#7dd3fc;overflow-wrap:anywhere}a:focus-visible{outline:3px solid #fde047;outline-offset:3px}nav{display:flex;flex-wrap:wrap;gap:12px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px}.card{background:#121a2b;border:1px solid #334155;border-radius:12px;padding:20px;margin:16px 0}</style></head><body data-field-evidence-release="2026-10-09"><a href="#main">'+esc(c.nav[4])+'</a><div class="wrap"><nav><a href="'+home+'">'+esc(c.nav[0])+'</a><a href="'+p+'apps/">'+esc(c.nav[1])+'</a><a href="'+p+'apps/network.html">'+esc(c.nav[2])+'</a><a href="'+p+'discovery/">'+esc(c.nav[3])+'</a><a href="https://github.com/Zion-support/zion-app-network">GitHub</a></nav>'+languageNav(l)+'<main id="main"><h1>'+esc(c.title)+'</h1><p>'+esc(c.intro)+'</p><section><h2>'+esc(c.stepsTitle)+'</h2><ol>'+c.steps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ol></section><section><h2 id="tools">'+esc(c.toolsTitle)+'</h2><div class="grid">'+cards+'</div></section><section class="card"><h2>'+esc(c.checksTitle)+'</h2><ul>'+c.checks.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul></section><section class="card"><h2>'+esc(c.freeTitle)+'</h2><p>'+esc(c.free)+'</p><p>'+esc(c.guard)+'</p><a href="'+p+'discovery/">'+esc(c.nav[3])+'</a> · <a href="/apps/discovery-report-workbench.html">'+esc(c.report)+'</a></section></main><footer><h2>'+esc(c.footer)+'</h2><a href="/apps/content-hub.html">'+esc(c.nav[1])+'</a> · <a href="'+p+'apps/network.html">'+esc(c.nav[2])+'</a> · <a href="/global-fe-dispatch/">'+esc(ui.readiness)+'</a> · <a href="https://github.com/Zion-support/zion-support.github.io/blob/main/scripts/render-field-evidence-locales.cjs">GitHub</a><p>© 2026 Zion Tech Group</p></footer></div></body></html>';
 assert.equal((html.match(/rel="alternate"/g)||[]).length,6);assert(!/<form\b|<script\b/i.test(html));const f=path.join(out,route(l).slice(1));if(fs.existsSync(f))assert.equal(forms(fs.readFileSync(f,'utf8')).length,0);fs.writeFileSync(f,withVisitJourney(html,l));
}
// Localized additive promotions. Redirect entrypoints remain byte-for-byte unchanged.
for(const l of Object.keys(names)){
 const title=l==='en'?'Field Service Evidence Guide':copy[l].title,label=l==='en'?'Free Discovery':copy[l].nav[3];
 const paths=[l==='pt'?'index.html':l+'/index.html'];if(l==='pt')paths.push('pt/index.html');
 for(const rel of paths){const f=path.join(out,rel);if(!fs.existsSync(f))continue;const before=fs.readFileSync(f,'utf8');if(/http-equiv\s*=\s*["']?refresh/i.test(before)){console.log('Preserve redirect entrypoint '+rel);continue;}let html=before.replace(/<!--field-evidence-locales:start-->[\s\S]*?<!--field-evidence-locales:end-->/g,'');const anchor=html.includes('</main>')?'</main>':'</body>';assert(anchor,'Homepage insertion anchor missing: '+rel);const promo='<!--field-evidence-locales:start--><section class="section section-soft" data-field-evidence-promo="2026-10-09"><div class="wrap"><h2>'+esc(title)+'</h2><p><a class="btn" href="'+route(l)+'">'+esc(title)+'</a> · <a href="/'+(l==='en'?'':l+'/')+'discovery/">'+esc(label)+'</a></p></div></section><!--field-evidence-locales:end-->';html=html.replace(anchor,promo+anchor);assert.deepEqual(forms(html),forms(before));fs.writeFileSync(f,html);}
}
for(const rel of ['apps/index.html','apps/content-hub.html','apps/network.html','sla-calculator/index.html','roi-calc/index.html','automation-pilot-planner/index.html','apps/supplier-quote-evidence-workbench.html']){
 const f=path.join(out,rel);if(!fs.existsSync(f))continue;const before=fs.readFileSync(f,'utf8');
 const code=(before.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)?.[1]||'en').slice(0,2);
 const locale=localizedUI[code]?code:'en',topic=localizedUI[locale].topic;
 // The links open a different resource family, so label their topic visibly.
 // Replace the earlier unlabelled navigation as well as this owned section.
 const clean=before.replace(/<!--field-evidence-locales-return:start-->[\s\S]*?<!--field-evidence-locales-return:end-->/g,'').replace(/<nav\b[^>]*\bdata-field-evidence-locales-return\b[^>]*>[\s\S]*?<\/nav>/g,'');
 assert(!clean.includes('data-field-evidence-locales-return'),'Unrecognized field-guide return block '+rel);assert(clean.includes('</body>'));
 const links=Object.keys(names).map(l=>'<a hreflang="'+(l==='pt'?'pt-BR':l)+'" href="'+route(l)+'">'+names[l]+'</a>').join(' · ');
 const block='<!--field-evidence-locales-return:start--><section class="catalog-wrap catalog-section" data-field-evidence-locales-return lang="'+(locale==='pt'?'pt-BR':locale)+'" aria-labelledby="field-evidence-language-title"><h2 id="field-evidence-language-title">'+esc(topic)+'</h2><nav aria-label="'+esc(topic)+'">'+links+'</nav></section><!--field-evidence-locales-return:end-->';
 const html=clean.replace('</body>',block+'</body>');assert.deepEqual(forms(html),forms(before));fs.writeFileSync(f,html);
}
// Honest recommendation labels in local and submitted report; routing/delivery untouched.
const asset=path.join(out,'assets/js/discovery-delivery.js');let js=fs.readFileSync(asset,'utf8');
if(!js.includes('function recommendationKind(')){
 const helpers='\nconst RECOMMENDATION_TYPES='+JSON.stringify(types)+';\nfunction recommendationKind(url){const labels=RECOMMENDATION_TYPES[locale]||RECOMMENDATION_TYPES.en;return url==="/ai-predictive-analytics/"?labels[0]:url==="/ai-roi-tracker/"?labels[1]:["/roi-calc/","/roi-calculator/","/sla-calculator/"].includes(url)?labels[2]:labels[3];}\n';
 const summaryOld="apps.map(a=>a[0]+' https://ziontechgroup.com'+a[1])",summaryNew="apps.map(a=>a[0]+' ['+recommendationKind(a[1])+'] https://ziontechgroup.com'+a[1])";
 assert(js.includes(summaryOld),'Report classification insertion anchor changed');assert(js.includes('link.textContent=name;'),'Link classification anchor changed');js=js.replace("'use strict';","'use strict';"+helpers).replace(summaryOld,summaryNew).replace('link.textContent=name;','link.textContent=name+" — "+recommendationKind(path);');fs.writeFileSync(asset,js);
}
let logistics=0;for(const suffix of ['', '.pt-br','.es','.fr','.de']){const f=path.join(out,'apps/october-2026-batch129-logistics-ai'+suffix+'.html');if(!fs.existsSync(f))continue;const before=fs.readFileSync(f,'utf8');const after=before.replace(/<(title|h1)([^>]*)>([\s\S]*?)<\/\1>/gi,(all,tag,attrs,text)=>'<'+tag+attrs+'>'+text.replace(/(?:Batch|Lote|Lot|Charge)\s*99\s*[—–:-]?\s*/gi,'')+'</'+tag+'>');assert.deepEqual(forms(before),forms(after));fs.writeFileSync(f,after);logistics++;}
fs.writeFileSync(path.join(out,'apps/field-evidence-publication.json'),JSON.stringify({release:'2026-10-09',scope:'Field evidence guide only; not whole-network translation or capability certification',pages:Object.keys(names).map(l=>({language:l,url:route(l)})),logistics,delivery:'unchanged; service acceptance is not paired inbox receipt'},null,2));
console.log('PASS field evidence: five locales, reciprocal alternates, form preservation, classified recommendations; logistics pages='+logistics);

