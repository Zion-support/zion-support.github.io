'use strict';

// Review-only, deterministic drafts. No network, credentials, commits or deployment.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const LOCALES = Object.freeze(['pt-BR', 'en', 'es', 'fr', 'de']);
const OUTPUT_PARTS = Object.freeze(['automation', 'reports', 'services-content-drafts']);
const ORIGIN = 'https://ziontechgroup.com';
const COPY = Object.freeze({
  'pt-BR': {
    prefix: '/pt', draft: 'RASCUNHO PARA REVISÃO — não publicado.',
    title: 'Antes de solicitar suporte técnico presencial no Brasil',
    intro: 'Uma solicitação clara ajuda a avaliar o atendimento sem confundir uma cotação preliminar com uma mobilização confirmada. Comece por um escopo técnico sem dados sensíveis do cliente final.',
    heading: 'O que informar por e-mail',
    items: ['Cidade e estado, com uma descrição geral do ambiente.', 'Fabricante, modelo e tipo de equipamento; problema observado e resultado esperado.', 'Janela desejada, duração estimada e habilidades técnicas necessárias.', 'Requisitos de acesso, segurança e acompanhamento remoto, sem compartilhar credenciais.'],
    coverage: 'Cobertura, disponibilidade de técnico, prazo, SLA e condições comerciais são qualificados por cidade, equipamento e janela. Não há garantia automática de atendimento em todas as localidades.',
    gate: 'Qualquer mobilização ou compra depende de escopo e condições confirmados por escrito, aceite formal do cliente, número de pedido de compra (PO) e liberação da Zion. A coleta inicial de informações não confirma um serviço.',
    apps: 'Explore o catálogo de aplicativos', discovery: 'Comece pelo Discovery online gratuito',
    note: 'Conteúdo genérico para revisão editorial. Não apresenta clientes reais, preços, resultados de projetos ou comprovação de disponibilidade.'
  },
  en: {
    prefix: '', draft: 'DRAFT FOR REVIEW — not published.',
    title: 'Before requesting on-site IT support in Brazil',
    intro: 'A clear request helps qualify service without confusing an initial quotation with a confirmed dispatch. Start with a technical scope that excludes sensitive end-client information.',
    heading: 'What to provide by email',
    items: ['City and state, plus a general description of the environment.', 'Equipment manufacturer, model and type; observed issue and expected outcome.', 'Requested window, estimated duration and required technical skills.', 'Access, safety and remote-supervision requirements, without sharing credentials.'],
    coverage: 'Coverage, technician availability, timing, SLAs and commercial terms are qualified for each city, device and service window. Coverage in every location is not automatically guaranteed.',
    gate: 'Dispatch or purchasing requires written scope and terms, formal customer acceptance, a purchase-order (PO) number and Zion release. Initial information gathering does not confirm a service.',
    apps: 'Explore the app catalog', discovery: 'Start with the free online Discovery',
    note: 'Generic copy for editorial review. It contains no real customer case, pricing, project results or proof of technician availability.'
  },
  es: {
    prefix: '/es', draft: 'BORRADOR PARA REVISIÓN — no publicado.',
    title: 'Antes de solicitar soporte informático presencial en Brasil',
    intro: 'Una solicitud clara permite evaluar el servicio sin confundir una cotización inicial con un desplazamiento confirmado. Empiece por un alcance técnico sin datos sensibles del cliente final.',
    heading: 'Qué información enviar por correo electrónico',
    items: ['Ciudad y estado, junto con una descripción general del entorno.', 'Fabricante, modelo y tipo de equipo; problema observado y resultado esperado.', 'Horario solicitado, duración estimada y conocimientos técnicos necesarios.', 'Requisitos de acceso, seguridad y supervisión remota, sin compartir credenciales.'],
    coverage: 'La cobertura, disponibilidad del técnico, plazos, SLA y condiciones comerciales se evalúan por ciudad, equipo y horario. No se garantiza automáticamente la cobertura de todas las localidades.',
    gate: 'El desplazamiento o la compra requieren alcance y condiciones por escrito, aceptación formal del cliente, número de orden de compra (PO) y autorización de Zion. La recopilación inicial de información no confirma un servicio.',
    apps: 'Explore el catálogo de aplicaciones', discovery: 'Empiece con el Discovery online gratuito',
    note: 'Contenido genérico para revisión editorial. No incluye clientes reales, precios, resultados de proyectos ni comprobación de disponibilidad.'
  },
  fr: {
    prefix: '/fr', draft: 'BROUILLON À RELIRE — non publié.',
    title: 'Avant de demander une assistance informatique sur site au Brésil',
    intro: 'Une demande précise permet d’évaluer la prestation sans confondre un devis initial avec une intervention confirmée. Commencez par un périmètre technique sans données sensibles du client final.',
    heading: 'Informations à transmettre par e-mail',
    items: ['Ville et État, avec une description générale de l’environnement.', 'Fabricant, modèle et type d’équipement ; problème observé et résultat attendu.', 'Créneau souhaité, durée estimée et compétences techniques requises.', 'Conditions d’accès, de sécurité et de supervision à distance, sans transmettre d’identifiants.'],
    coverage: 'La couverture, la disponibilité du technicien, les délais, les SLA et les conditions commerciales sont évalués pour chaque ville, équipement et créneau. La couverture de toutes les localités n’est pas automatiquement garantie.',
    gate: 'Toute intervention ou tout achat nécessite un périmètre et des conditions écrits, l’accord formel du client, un numéro de bon de commande (PO) et l’autorisation de Zion. La collecte initiale d’informations ne confirme pas une prestation.',
    apps: 'Découvrez le catalogue d’applications', discovery: 'Commencez par le Discovery en ligne gratuit',
    note: 'Texte générique soumis à validation éditoriale. Aucun client réel, prix, résultat de projet ou engagement de disponibilité n’est présenté.'
  },
  de: {
    prefix: '/de', draft: 'ENTWURF ZUR PRÜFUNG — nicht veröffentlicht.',
    title: 'Vor der Anfrage eines IT-Vor-Ort-Einsatzes in Brasilien',
    intro: 'Eine klare Anfrage hilft bei der Prüfung des Einsatzes, ohne ein erstes Angebot mit einer bestätigten Entsendung zu verwechseln. Beginnen Sie mit einem technischen Leistungsumfang ohne sensible Endkundendaten.',
    heading: 'Welche Angaben per E-Mail benötigt werden',
    items: ['Stadt und Bundesstaat sowie eine allgemeine Beschreibung der Umgebung.', 'Hersteller, Modell und Gerätetyp; beobachtetes Problem und gewünschtes Ergebnis.', 'Gewünschtes Zeitfenster, geschätzte Dauer und erforderliche Fachkenntnisse.', 'Zugangs-, Sicherheits- und Fernbetreuungsanforderungen, ohne Zugangsdaten zu übermitteln.'],
    coverage: 'Abdeckung, Technikerverfügbarkeit, Termine, SLA und kaufmännische Bedingungen werden je Stadt, Gerät und Zeitfenster geprüft. Eine automatische Abdeckung aller Standorte wird nicht zugesichert.',
    gate: 'Ein Einsatz oder Kauf setzt schriftlichen Leistungsumfang und Bedingungen, die formelle Kundenfreigabe, eine Bestellnummer (PO) und die Freigabe durch Zion voraus. Die erste Informationsaufnahme bestätigt noch keinen Auftrag.',
    apps: 'App-Katalog ansehen', discovery: 'Mit dem kostenlosen Online-Discovery beginnen',
    note: 'Allgemeiner Text zur redaktionellen Prüfung. Keine echten Kundenfälle, Preise, Projektergebnisse oder Verfügbarkeitsnachweise werden behauptet.'
  }
});

function buildBundle() {
  const drafts = LOCALES.map(locale => {
    const c = COPY[locale];
    const content = `> ${c.draft}\n\n# ${c.title}\n\n${c.intro}\n\n## ${c.heading}\n\n${c.items.map(item => `- ${item}`).join('\n')}\n\n${c.coverage}\n\n${c.gate}\n\n[${c.apps}](${ORIGIN}${c.prefix}/apps/)\n\n[${c.discovery}](${ORIGIN}${c.prefix}/discovery/)\n\n_${c.note}_\n`;
    return { locale, name: `field-support-request.${locale}.md`, content };
  });
  const manifest = {
    schemaVersion: 1,
    mode: 'draft-only',
    published: false,
    topic: 'brazil-field-support-request-checklist',
    localeCount: drafts.length,
    files: drafts.map(({ locale, name, content }) => ({
      locale, name, bytes: Buffer.byteLength(content, 'utf8'),
      sha256: crypto.createHash('sha256').update(content, 'utf8').digest('hex')
    }))
  };
  return { drafts, manifest };
}

function ensureOutputDirectory(root) {
  let current = path.resolve(root);
  const rootStat = fs.lstatSync(current);
  if (rootStat.isSymbolicLink() || !rootStat.isDirectory()) throw new Error('Unsafe draft workspace.');
  for (const part of OUTPUT_PARTS) {
    current = path.join(current, part);
    if (fs.existsSync(current)) {
      const stat = fs.lstatSync(current);
      if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error('Unsafe draft output directory.');
    } else {
      fs.mkdirSync(current, { mode: 0o700 });
    }
  }
  return current;
}

function writeBundle(root = process.cwd()) {
  const { drafts, manifest } = buildBundle();
  const outputDir = ensureOutputDirectory(root);
  const files = [...drafts, { name: 'manifest.json', content: `${JSON.stringify(manifest, null, 2)}\n` }];
  // Preflight all fixed destinations before writing any draft content.
  for (const { name } of files) {
    const target = path.join(outputDir, name);
    if (fs.existsSync(target) || (() => { try { return fs.lstatSync(target).isSymbolicLink(); } catch { return false; } })()) {
      const stat = fs.lstatSync(target);
      if (stat.isSymbolicLink() || !stat.isFile()) throw new Error('Unsafe draft output file.');
    }
  }
  const written = [];
  for (const { name, content } of files) {
    const target = path.join(outputDir, name);
    if (fs.existsSync(target) && fs.readFileSync(target, 'utf8') === content) continue;
    const flags = fs.constants.O_WRONLY | fs.constants.O_CREAT | fs.constants.O_TRUNC | (fs.constants.O_NOFOLLOW || 0);
    const fd = fs.openSync(target, flags, 0o600);
    try { fs.writeFileSync(fd, content, 'utf8'); } finally { fs.closeSync(fd); }
    written.push(name);
  }
  return { mode: 'draft-only', published: false, localeCount: drafts.length, outputDir, writtenFiles: written };
}

function run(argv, root = process.cwd()) {
  if (argv.length !== 1 || argv[0] !== '--draft') {
    throw new Error('Publishing is not implemented. Explicit --draft mode is required; no publishing or delivery is performed.');
  }
  return writeBundle(root);
}

module.exports = { LOCALES, OUTPUT_PARTS, COPY, buildBundle, writeBundle, run };
if (require.main === module) {
  try { console.log(JSON.stringify(run(process.argv.slice(2)))); }
  catch (error) { console.error(`::error::${error.message}`); process.exitCode = 1; }
}
