import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs — Best Practices',
  description: 'Practical guidance to define, monitor, and enforce SLOs for autonomous agent platforms.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">New • 2025-09-15</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">AI 2026: Agent Platform SLOs — Best Practices</h1>
        <p className="text-gray-600 mt-3">A pragmatic playbook for designing SLOs that reflect safety, quality, reliability, and cost—plus how to operationalize them.</p>
      </div>

      <article className="prose prose-purple max-w-none">
        <h2>Define Outcomes Before Metrics</h2>
        <p>Start from the business outcomes you want: safe automation, higher task success, faster incident recovery, and efficient spend. Translate each into one or two measurable SLOs.</p>

        <h3>Suggested SLOs</h3>
        <ul>
          <li>Safety policy violation rate ≤ 0.5/1k actions with 95% confidence.</li>
          <li>Eval task success rate ≥ 98% on critical scenarios, no regression &gt; 0.5%.</li>
          <li>Action success rate ≥ 99.5%, safe-mode MTTR &lt; 5 minutes.</li>
          <li>Cost per successful task within budget; cache hit rate ≥ 60%.</li>
        </ul>

        <h3>Enforce with Policy and Evals</h3>
        <p>Use policy-as-code to codify thresholds and evaluation suites to gate changes. Break the build when deltas exceed allowed error bars.</p>

        <h3>Observability</h3>
        <p>Trace every agent action with evaluation IDs, policy decisions, model/router versions, and cost metadata. Aggregate in an evaluation hub for reviews.</p>

        <h3>Runbooks</h3>
        <p>Document safe-mode fallbacks, rollback criteria, and escalation paths when SLOs breach. Automate alerts and weekly scorecards.</p>

        <p className="mt-8">See also:</p>
        <ul>
          <li><Link href="/content/ai-2026-agent-platform-slos" className="text-purple-600">Agent Platform SLOs (Guide)</Link></li>
          <li><Link href="/content/ai-2026-operational-excellence-handbook" className="text-purple-600">Operational Excellence Handbook</Link></li>
        </ul>
      </article>
    </main>
  );
}

