import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Operational Resilience Blueprint',
  description:
    'Design resilient AI and agent systems with eval-gated rollouts, chaos drills, and safe-mode fallbacks.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <p className="text-sm text-purple-700 font-semibold">New on the blog</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          AI 2026: Operational Resilience Blueprint
        </h1>
        <p className="text-gray-600 mt-3">
          Practices and patterns to withstand incidents without customer impact: progressive delivery, eval gates,
          blast-radius controls, and graceful degradation.
        </p>
      </header>
      <article className="prose prose-purple max-w-none">
        <h2>Why resilience for autonomous systems</h2>
        <p>
          As organizations adopt autonomous agents, resilience becomes a first-class concern. This blueprint proposes
          a pragmatic approach combining evaluation harnesses, policy-as-code, and production guardrails.
        </p>
        <h3>Key building blocks</h3>
        <ul>
          <li>Evaluation gates with scenario suites and pass criteria</li>
          <li>Safe-mode fallbacks and circuit breakers</li>
          <li>Progressive rollouts and feature flags</li>
          <li>Incident simulation drills and post-incident learnings</li>
        </ul>
        <h3>Get started</h3>
        <p>
          Start with a small set of critical scenarios and wire them into your deployment pipeline. Add telemetry and
          alerts keyed to evaluation IDs, then iterate.
        </p>
      </article>
      <div className="mt-10 flex gap-3">
        <Link href="/content/ai-2026-evaluation-harness-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Evaluation Harness Blueprint</Link>
        <Link href="/blog/ai-2026-production-guardrails-playbook" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Production Guardrails</Link>
      </div>
    </main>
  );
}

