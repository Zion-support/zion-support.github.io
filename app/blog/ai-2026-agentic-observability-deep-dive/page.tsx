import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agentic Observability — Deep Dive',
  description: 'Traces, evals, incident telemetry, and KPIs for reliable, safe autonomous agent operations at scale.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-fuchsia-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI 2026: Agentic Observability — Deep Dive</h1>
          <p className="mt-4 text-gray-600">A practical guide to unify traces, evaluations, incidents, and KPIs for production agent systems.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <article className="prose prose-indigo max-w-none">
            <h2>Why Agentic Observability</h2>
            <p>Traditional logs and metrics are insufficient for autonomous workflows. Observability must include evaluation outcomes, tool-use context, and policy gate decisions for reliable rollouts.</p>

            <h3>Signals</h3>
            <ul>
              <li>Traces with tool spans, prompts, and model metadata</li>
              <li>Evaluation scores by scenario and policy gate</li>
              <li>Incident events with triage and rollback status</li>
              <li>KPIs: safety, quality, reliability, and cost</li>
            </ul>

            <h3>Architecture</h3>
            <ol>
              <li>Unified telemetry bus enriched with eval results</li>
              <li>Evidence hub indexing traces, artifacts, and decisions</li>
              <li>Dashboards for release scorecards and on-call triage</li>
            </ol>
          </article>

          <div className="flex flex-wrap gap-3">
            <Link href="/blog/ai-2026-enterprise-agent-observability-guide" className="inline-block bg-pink-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-pink-700">Observability Guide</Link>
            <Link href="/blog/ai-2026-release-scorecards" className="inline-block border border-pink-600 text-pink-700 px-5 py-3 rounded-lg font-semibold hover:bg-pink-50">Release Scorecards</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

