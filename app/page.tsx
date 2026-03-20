import Banner from './components/Banner';
import { whatsNewItems } from './features/featuredItems';
import Link from 'next/link';

export default function Home() {
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
              href="/ai-lab"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Explore AI Lab
            </Link>
            <Link
              href="/ai-lab/autonomous-opportunity-radar"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Open Opportunity Radar
            </Link>
            <Link
              href="/ai-lab/autonomous-growth-loop-designer"
              className="rounded-lg border border-cyan-300 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-100"
            >
              Try Growth Loop Designer
            </Link>
            <Link
              href="/automation"
              className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              View Automation Engine
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
      </main>
    </div>
  );
}