#!/usr/bin/env node
/**
 * Zion Apps Network — static page generator.
 *
 * Emits one consistent, interlinked app page per app in every available
 * language (EN, PT-BR, ES, FR, DE) into public/, plus the matching hub and
 * sitemap entries. public/ is the source of truth for GitHub Pages
 * (scripts/prepare-pages-out.sh copies it verbatim into the Pages artifact).
 *
 * Usage:
 *   node scripts/generate-apps-network-pages.mjs
 *
 * Idempotent: re-running rewrites the same files. No network access.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');

const LANGS = [
  { code: 'en', prefix: '', htmlLang: 'en', name: 'English' },
  { code: 'pt', prefix: 'pt/', htmlLang: 'pt-BR', name: 'Português (BR)' },
  { code: 'es', prefix: 'es/', htmlLang: 'es', name: 'Español' },
  { code: 'fr', prefix: 'fr/', htmlLang: 'fr', name: 'Français' },
  { code: 'de', prefix: 'de/', htmlLang: 'de', name: 'Deutsch' },
];

const GROUP_LABEL = {
  en: { money: 'Money & FinOps', ops: 'Operations & reliability', govern: 'Governance & bids', work: 'Work & briefs', ai: 'AI & automation', field: 'Field & support', hub: 'Hub & CRM' },
  pt: { money: 'Dinheiro & FinOps', ops: 'Operações & confiabilidade', govern: 'Governança & licitações', work: 'Trabalho & briefs', ai: 'IA & automação', field: 'Campo & suporte', hub: 'Hub & CRM' },
  es: { money: 'Dinero & FinOps', ops: 'Operaciones & fiabilidad', govern: 'Gobernanza & licitaciones', work: 'Trabajo & briefs', ia: 'IA & automatización', field: 'Campo & soporte', hub: 'Hub & CRM' },
  fr: { money: 'Argent & FinOps', ops: 'Opérations & fiabilité', govern: 'Gouvernance & appels d\'offres', work: 'Travail & briefs', ai: 'IA & automatisation', field: 'Terrain & support', hub: 'Hub & CRM' },
  de: { money: 'Geld & FinOps', ops: 'Betrieb & Zuverlässigkeit', govern: 'Governance & Ausschreibungen', work: 'Arbeit & Briefs', ai: 'KI & Automatisierung', field: 'Field & Support', hub: 'Hub & CRM' },
};

const T = {
  en: {
    taglinePrefix: 'Zion Apps Network',
    whatItDoes: 'What it does',
    capabilities: 'Key capabilities',
    whenToUse: 'When to use it',
    related: 'Related apps in this network',
    relatedHint: 'Every app interlinks its siblings — no dead ends inside the network.',
    ctaTitle: 'Need this running in production?',
    ctaBody: 'Start with a free Discovery: one process, one report, one 30-minute session. Then scope a pilot with measurable KPIs.',
    ctaPrimary: 'Start Free Discovery',
    ctaSecondary: 'View pricing',
    hubLink: 'Apps Network hub',
    allApps: 'All apps',
    langSwitch: 'Language',
    updated: 'Published',
    free: 'Free to use',
    noCard: 'No credit card',
    interlinked: 'Interlinked',
  },
  pt: {
    taglinePrefix: 'Zion Apps Network',
    whatItDoes: 'O que faz',
    capabilities: 'Principais capacidades',
    whenToUse: 'Quando usar',
    related: 'Apps relacionados nesta rede',
    relatedHint: 'Cada app se interliga aos seus pares — sem caminhos sem saída na rede.',
    ctaTitle: 'Precisa disto em produção?',
    ctaBody: 'Comece com uma Discovery gratuita: um processo, um relatório, uma sessão de 30 minutos. Depois escope um piloto com KPIs mensuráveis.',
    ctaPrimary: 'Começar Discovery gratuita',
    ctaSecondary: 'Ver preços',
    hubLink: 'Hub da Apps Network',
    allApps: 'Todos os apps',
    langSwitch: 'Idioma',
    updated: 'Publicado',
    free: 'Gratuito para usar',
    noCard: 'Sem cartão de crédito',
    interlinked: 'Interligado',
  },
  es: {
    taglinePrefix: 'Zion Apps Network',
    whatItDoes: 'Qué hace',
    capabilities: 'Capacidades clave',
    whenToUse: 'Cuándo usarlo',
    related: 'Apps relacionadas en esta red',
    relatedHint: 'Cada app se interconecta con sus hermanas — sin callejones sin salida en la red.',
    ctaTitle: '¿Necesita esto en producción?',
    ctaBody: 'Empiece con un Discovery gratuito: un proceso, un informe, una sesión de 30 minutos. Luego defina un piloto con KPIs medibles.',
    ctaPrimary: 'Empezar Discovery gratuito',
    ctaSecondary: 'Ver precios',
    hubLink: 'Hub de Apps Network',
    allApps: 'Todas las apps',
    langSwitch: 'Idioma',
    updated: 'Publicado',
    free: 'Gratis',
    noCard: 'Sin tarjeta de crédito',
    interlinked: 'Interconectado',
  },
  fr: {
    taglinePrefix: 'Zion Apps Network',
    whatItDoes: 'Ce qu\'il fait',
    capabilities: 'Capacités clés',
    whenToUse: 'Quand l\'utiliser',
    related: 'Apps liées dans ce réseau',
    relatedHint: 'Chaque app s\'interconnecte à ses partenaires — aucune impasse dans le réseau.',
    ctaTitle: 'Besoin de ceci en production ?',
    ctaBody: 'Commencez par un Discovery gratuit : un processus, un rapport, une session de 30 minutes. Puis cadrez un pilote avec des KPIs mesurables.',
    ctaPrimary: 'Démarrer le Discovery gratuit',
    ctaSecondary: 'Voir les tarifs',
    hubLink: 'Hub Apps Network',
    allApps: 'Toutes les apps',
    langSwitch: 'Langue',
    updated: 'Publié',
    free: 'Gratuit',
    noCard: 'Sans carte de crédit',
    interlinked: 'Interconnecté',
  },
  de: {
    taglinePrefix: 'Zion Apps Network',
    whatItDoes: 'Was es tut',
    capabilities: 'Kernfunktionen',
    whenToUse: 'Wann es sinnvoll ist',
    related: 'Verbundene Apps in diesem Netz',
    relatedHint: 'Jede App verlinkt ihre Geschwister — keine Sackgassen im Netz.',
    ctaTitle: 'Brauchen Sie das in Produktion?',
    ctaBody: 'Starten Sie mit einem kostenlosen Discovery: ein Prozess, ein Bericht, eine 30-minütige Sitzung. Dann ein Pilotprojekt mit messbaren KPIs.',
    ctaPrimary: 'Kostenloses Discovery starten',
    ctaSecondary: 'Preise ansehen',
    hubLink: 'Apps Network Hub',
    allApps: 'Alle Apps',
    langSwitch: 'Sprache',
    updated: 'Veröffentlicht',
    free: 'Kostenlos nutzbar',
    noCard: 'Ohne Kreditkarte',
    interlinked: 'Vernetzt',
  },
};

export { LANGS, GROUP_LABEL, T, PUBLIC, ROOT };
