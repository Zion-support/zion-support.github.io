import Link from 'next/link';

export const metadata = {
  title: 'Agentic Observability — Executive Overview (2026) | Zion Tech Group',
  description: 'Traces, evals, incidents, and KPIs to operate agent platforms with confidence.',
}

export default function AgenticObservabilityOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-100">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="text-sm text-gray-600">Observability • September 2025 • 6 min read</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Agentic Observability — Executive Overview</h1>
          <p className="mt-3 text-gray-700">What to measure, how to trace, and where to place gates to keep autonomy safe and reliable.</p>
        </header>

        <section className="prose prose-slate max-w-none">
          <h2>Core pillars</h2>
          <ul>
            <li>Decision traces and tool outcome telemetry</li>
            <li>Evaluation suites wired to scorecards and release gates</li>
            <li>Incident hooks and rollback contracts</li>
          </ul>
          <h2>Dashboards that matter</h2>
          <p>Track success rates, override frequency, cost per outcome, and policy exceptions. Link anomalies to changes and owners.</p>
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600 flex items-center gap-4">
          <Link href="/blog" className="text-pink-700 hover:text-pink-800">← Back to Blog</Link>
          <Link href="/blog/ai-2026-agentic-observability-deep-dive" className="text-gray-600 hover:text-gray-800">Deep Dive →</Link>
        </footer>
      </article>
    </main>
  )
}

