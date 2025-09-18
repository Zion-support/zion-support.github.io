import Link from 'next/link';

export const metadata = {
  title: 'Guardrail Scorecards — Executive Brief (2026) | Zion Tech Group',
  description: 'How to use policy‑as‑code scorecards to gate releases and prevent incidents in autonomous systems.',
}

export default function GuardrailScorecardsExecutiveBrief() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-emerald-50">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="text-sm text-gray-600">Governance • September 2025 • 5 min read</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Guardrail Scorecards — Executive Brief</h1>
          <p className="mt-3 text-gray-700">Gate behavior with measurable policies across safety, quality, reliability, and cost.</p>
        </header>

        <section className="prose prose-slate max-w-none">
          <h2>Why scorecards</h2>
          <p>Scorecards make policy enforcement observable and auditable. Tie requirements to evaluation suites and block releases when thresholds are missed.</p>
          <h2>Minimum viable scorecard</h2>
          <ul>
            <li>Safety: disallowed actions, tool permission policies, red‑team outcomes</li>
            <li>Quality: task success, groundedness, instruction adherence</li>
            <li>Reliability: regression deltas, rollback contracts met</li>
            <li>Cost: budget adherence, latency and token ceilings</li>
          </ul>
          <h2>Operating model</h2>
          <p>Publish policies as code, wire scenario suites, and require approvals when error budgets are breached. Archive evidence for audits.</p>
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600 flex items-center gap-4">
          <Link href="/blog" className="text-emerald-700 hover:text-emerald-800">← Back to Blog</Link>
          <Link href="/content/ai-2026-guardrail-scorecards-starter-kit" className="text-gray-600 hover:text-gray-800">Starter Kit →</Link>
        </footer>
      </article>
    </main>
  )
}

