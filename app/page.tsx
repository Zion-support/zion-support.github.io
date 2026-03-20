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

export default function Home() {
  const aiCatalogHighlights = getHomepageAICatalogItems();
  const liveNowItems = getHomepageLiveNowItems();
  const heroCtas = getHomepageHeroCtas();
  const readiness = getDeploymentReadiness();
  const deployStatus = getDeployStatus();

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Banner items={whatsNewItems} />
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
              href="/ai-lab/autonomous-conversion-copilot"
              className="rounded-lg border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-100"
            >
              Explore Conversion Copilot
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