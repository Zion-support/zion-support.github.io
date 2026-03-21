import Banner from './components/Banner';
import { whatsNewItems } from './features/featuredItems';
import Link from 'next/link';
import ProductRecommenderSection from './components/ai/ProductRecommenderSection';
import fs from 'fs';
import path from 'path';
import { getHomepageAICatalogItems, getHomepageHeroCtas, getHomepageLiveNowItems } from './config/aiCatalog';

type DeploymentReadinessReport = {
  timestamp?: string;
  ready?: boolean;
};

type DeployStatusReport = {
  generatedAt?: string;
  status?: string;
  sha?: string;
  netlifyDeployId?: string | null;
  netlifyDeployUrl?: string | null;
};

type SuppressionRegistryReport = {
  generatedAt?: string;
  noise?: { emaOpenIncidents?: number };
  totalOpenIncidents?: number;
  tuning?: { noiseLevel?: string; reason?: string };
};

type NetlifyPreviewSmokeReport = {
  generatedAt?: string;
  skipped?: boolean;
  unhealthyCount?: number;
  baseUrl?: string;
};

type PromotionConfidenceReport = {
  generatedAt?: string;
  gatedThreshold?: number;
  routeScores?: Array<{ route: string; score: number }>;
};

type LaunchDigestReport = {
  generatedAt?: string;
  totalLaunchCommits?: number;
  weeklyHighlights?: string[];
};
type AutomationHealthReport = {
  generatedAt?: string;
  severity?: 'nominal' | 'warning' | 'critical' | string;
  emaOpenIncidents?: number;
  previewUnhealthyCount?: number;
  openFingerprintIssues?: number;
  deployStatus?: string;
};

function getDeploymentReadiness(): DeploymentReadinessReport | null {
  try {
    const reportPath = path.join(
      process.cwd(),
      'automation',
      'reports',
      'deployment-readiness-latest.json',
    );
    if (!fs.existsSync(reportPath)) return null;
    return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as DeploymentReadinessReport;
  } catch {
    return null;
  }
}

function getDeployStatus(): DeployStatusReport | null {
  try {
    const reportPath = path.join(process.cwd(), 'automation', 'reports', 'deploy-status-latest.json');
    if (!fs.existsSync(reportPath)) return null;
    return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as DeployStatusReport;
  } catch {
    return null;
  }
}

function getPromotionConfidence(): PromotionConfidenceReport | null {
  try {
    const reportPath = path.join(
      process.cwd(),
      'automation',
      'reports',
      'promotion-confidence-latest.json',
    );
    if (!fs.existsSync(reportPath)) return null;
    return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as PromotionConfidenceReport;
  } catch {
    return null;
  }
}

function getLaunchDigest(): LaunchDigestReport | null {
  try {
    const reportPath = path.join(process.cwd(), 'automation', 'reports', 'ai-launch-digest-latest.json');
    if (!fs.existsSync(reportPath)) return null;
    return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as LaunchDigestReport;
  } catch {
    return null;
  }
}

function getSuppressionRegistry(): SuppressionRegistryReport | null {
  try {
    const reportPath = path.join(
      process.cwd(),
      'automation',
      'reports',
      'incident-suppression-registry-latest.json',
    );
    if (!fs.existsSync(reportPath)) return null;
    return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as SuppressionRegistryReport;
  } catch {
    return null;
  }
}

function getNetlifyPreviewSmoke(): NetlifyPreviewSmokeReport | null {
  try {
    const reportPath = path.join(
      process.cwd(),
      'automation',
      'reports',
      'netlify-preview-smoke-latest.json',
    );
    if (!fs.existsSync(reportPath)) return null;
    return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as NetlifyPreviewSmokeReport;
  } catch {
    return null;
  }
}

function getAutomationHealth(): AutomationHealthReport | null {
  try {
    const reportPath = path.join(process.cwd(), 'automation', 'reports', 'automation-health-latest.json');
    if (!fs.existsSync(reportPath)) return null;
    return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as AutomationHealthReport;
  } catch {
    return null;
  }
}

function normalizeRouteFromHref(href: string): string {
  if (!href.startsWith('/')) return href;
  return href.split('#')[0]?.split('?')[0] ?? href;
}

function applyConfidenceGate<T extends { href: string }>(
  items: T[],
  confidence: PromotionConfidenceReport | null,
): T[] {
  const threshold = confidence?.gatedThreshold ?? 60;
  const scoreByRoute = new Map((confidence?.routeScores ?? []).map((item) => [item.route, item.score]));
  return items.filter((item) => {
    const route = normalizeRouteFromHref(item.href);
    const score = scoreByRoute.get(route);
    if (typeof score !== 'number') return true;
    return score >= threshold;
  });
}

export default function Home() {
  const confidence = getPromotionConfidence();
  const aiCatalogHighlights = applyConfidenceGate(getHomepageAICatalogItems(), confidence);
  const liveNowItems = applyConfidenceGate(getHomepageLiveNowItems(), confidence);
  const heroCtas = applyConfidenceGate(getHomepageHeroCtas(), confidence);
  const readiness = getDeploymentReadiness();
  const deployStatus = getDeployStatus();
  const digest = getLaunchDigest();
  const suppression = getSuppressionRegistry();
  const netlifySmoke = getNetlifyPreviewSmoke();
  const autoHealth = getAutomationHealth();

  const ema = suppression?.noise?.emaOpenIncidents;
  const deployNetlify = deployStatus?.netlifyDeployUrl;
  const emaOk = typeof ema !== 'number' || ema < 4;
  const smokeOk =
    !netlifySmoke ||
    netlifySmoke.skipped === true ||
    (typeof netlifySmoke.unhealthyCount === 'number' && netlifySmoke.unhealthyCount === 0);
  const automationHealthOk = emaOk && smokeOk && autoHealth?.severity !== 'critical';

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Banner items={whatsNewItems} />
      <section
        aria-label="Automation health"
        className="border-b border-slate-200 bg-slate-900 text-slate-100"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-semibold text-white">Automation health</span>
            {typeof ema === 'number' ? (
              <span className="text-slate-300">
                Incident EMA: <span className="font-mono text-emerald-300">{ema.toFixed(2)}</span>
              </span>
            ) : (
              <span className="text-slate-400">Registry snapshot not in repo build</span>
            )}
            {deployStatus ? (
              <span className="text-slate-300">
                Deploy:{' '}
                <span className="font-mono uppercase text-slate-100">{deployStatus.status ?? 'unknown'}</span>
                {deployStatus.sha ? ` · ${deployStatus.sha.slice(0, 7)}` : ''}
              </span>
            ) : null}
            {deployNetlify ? (
              <a
                href={deployNetlify}
                className="text-cyan-300 underline decoration-cyan-500/60 underline-offset-2 hover:text-cyan-200"
                target="_blank"
                rel="noreferrer"
              >
                Netlify preview
              </a>
            ) : null}
            {netlifySmoke && !netlifySmoke.skipped && typeof netlifySmoke.unhealthyCount === 'number' ? (
              <span className={netlifySmoke.unhealthyCount > 0 ? 'text-amber-300' : 'text-emerald-300'}>
                Preview smoke: {netlifySmoke.unhealthyCount === 0 ? 'OK' : `${netlifySmoke.unhealthyCount} route(s)`}
              </span>
            ) : null}
            {autoHealth ? (
              <span className="text-slate-300">
                FP issues: <span className="font-mono text-violet-300">{autoHealth.openFingerprintIssues ?? 'n/a'}</span>
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase ${
                autoHealth?.severity === 'critical'
                  ? 'bg-rose-900/80 text-rose-100'
                  : automationHealthOk
                    ? 'bg-emerald-900/80 text-emerald-200'
                    : 'bg-amber-900/80 text-amber-100'
              }`}
            >
              {autoHealth?.severity === 'critical' ? 'Critical' : automationHealthOk ? 'Nominal' : 'Review'}
            </span>
            <Link
              href="/ai-lab/deploy-drift-dashboard"
              className="rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-[11px] font-semibold text-slate-100 hover:bg-slate-700"
            >
              Drift dashboard
            </Link>
            <Link
              href="/automation"
              className="rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-[11px] font-semibold text-slate-100 hover:bg-slate-700"
            >
              Automation
            </Link>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4 py-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            Zion AI Platform
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            AI products, autonomous workflows, and continuous app evolution
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Build with production-ready AI services, in-browser intelligent experiences, and
            autonomous automation pipelines that keep improving your app quality, conversion paths,
            and delivery speed.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="#ai-product-recommender"
              className="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-700"
            >
              Try AI Product Recommender
            </Link>
            <Link
              href="/ai-lab"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Explore AI Lab
            </Link>
            {heroCtas.map((cta) => (
              <Link key={cta.href} href={cta.href} className={cta.className}>
                {cta.label}
              </Link>
            ))}
            <Link
              href="/automation"
              className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              View Automation Engine
            </Link>
            <Link
              href="/ai-services/autonomous-growth-intelligence"
              className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
            >
              Explore Autonomous Growth Intelligence
            </Link>
            <Link
              href="#ai-catalog"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              View all AI products & experiences
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            href="/ai-services"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
              AI Services
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Enterprise AI Delivery</h2>
            <p className="mt-2 text-sm text-slate-600">
              Generative AI, autonomous agents, RAG, and multimodal intelligence with governance.
            </p>
          </Link>
          <Link
            href="/ai-lab"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">AI Lab</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">In-Browser Intelligence</h2>
            <p className="mt-2 text-sm text-slate-600">
              Interactive tools for readiness scoring, governance risk, rollout planning, and growth
              strategy.
            </p>
          </Link>
          <Link
            href="/automation"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Automation
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Autonomous Improvement</h2>
            <p className="mt-2 text-sm text-slate-600">
              Agent pipelines for audits, performance checks, quality gates, and deployment-safe
              content evolution.
            </p>
          </Link>
        </section>

        <section className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/60 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Intelligent experiences spotlight</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            New RAG workspace + live autonomous tools now available
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Launch deterministic citation-quality simulations in the new Autonomous RAG Knowledge
            Workspace, then jump to conversion, retention, incident, and deployment intelligence tools
            already live across AI Lab.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/ai-lab/autonomous-rag-knowledge-workspace"
              className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
            >
              Open Autonomous RAG Knowledge Workspace
            </Link>
            <Link
              href="/ai-lab/autonomous-media-prompt-studio"
              className="rounded-lg border border-fuchsia-300 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-800 hover:bg-fuchsia-100"
            >
              Launch Media Prompt Studio
            </Link>
            <Link
              href="/ai-lab/autonomous-conversion-copilot"
              className="rounded-lg border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-100"
            >
              Explore Conversion Copilot
            </Link>
            <Link
              href="/ai-lab/autonomous-revenue-forecast-studio"
              className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              Open Revenue Forecast Studio
            </Link>
            <Link
              href="/ai-lab/autonomous-incident-commander"
              className="rounded-lg border border-rose-300 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-800 hover:bg-rose-100"
            >
              Open Incident Commander
            </Link>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                Deploy status intelligence
              </p>
              <p className="mt-1 text-sm text-slate-700">
                {readiness
                  ? `Latest autonomous readiness: ${readiness.ready ? 'ready to deploy' : 'blocked - needs attention'}.`
                  : 'No local readiness report found yet. Run deploy readiness automation to populate this status.'}
              </p>
              {deployStatus ? (
                <p className="mt-1 text-xs text-slate-500">
                  Last deploy status: {deployStatus.status ?? 'unknown'} ({(deployStatus.sha ?? 'unknown').slice(0, 8)})
                </p>
              ) : null}
            </div>
            <Link
              href="/ai-lab/deployment-readiness-console"
              className="rounded-lg border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800 hover:bg-indigo-100"
            >
              Open deployment readiness console
            </Link>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
            Weekly AI launch digest
          </p>
          <p className="mt-1 text-sm text-slate-700">
            {digest
              ? `${digest.totalLaunchCommits ?? 0} AI launch commits tracked in the latest digest cycle.`
              : 'No launch digest found yet. Run the weekly digest workflow to populate this panel.'}
          </p>
          {digest?.weeklyHighlights?.length ? (
            <ul className="mt-3 space-y-1 text-xs text-slate-600">
              {digest.weeklyHighlights.slice(0, 5).map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/ai-lab/deploy-drift-dashboard"
              className="rounded-lg border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-100"
            >
              Open deploy drift dashboard
            </Link>
            <Link
              href="/ai-lab"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore all AI Lab launches
            </Link>
          </div>
        </section>

        <section
          id="ai-solutions-architect"
          className="mt-8 rounded-2xl border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 via-white to-violet-50 p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-700">
            New intelligent experience
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">AI Solutions Architect is live on every page</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-700">
            Use the floating <strong>Design my AI rollout</strong> widget (bottom-right) to generate a tailored,
            multi-phase plan and jump directly to the most relevant Zion AI products and services.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/ai-services/ai-strategy-roadmap"
              className="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-700"
            >
              Start with AI strategy
            </Link>
            <Link
              href="/contact#engagement"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Talk with a solutions architect
            </Link>
          </div>
        </section>

        <ProductRecommenderSection sectionId="ai-product-recommender" />

        <section id="ai-catalog" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
            AI products, services, and live experiences
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Everything Zion is building and shipping now
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            Explore the complete AI catalog across live in-browser tools, autonomous improvement systems,
            enterprise AI services, and continuously evolving product modules.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aiCatalogHighlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-violet-300 hover:bg-violet-50"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-violet-700">{item.badge}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                Live now
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">
                New intelligent experiences and autonomous products
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-600">
                Explore the newest in-browser AI launches and autonomous workflows currently
                improving conversion, reliability, and deployment speed.
              </p>
            </div>
            <Link
              href="/products"
              className="rounded-lg border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-100"
            >
              Browse all AI products
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {liveNowItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">{item.badge}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs text-slate-600">{item.description}</p>
              </Link>
            ))}
            <Link
              href="/automation"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Automation
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Autonomous Deployment Ops</p>
              <p className="mt-1 text-xs text-slate-600">
                Continuous AI audits and deployment-safe improvement pipelines.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}