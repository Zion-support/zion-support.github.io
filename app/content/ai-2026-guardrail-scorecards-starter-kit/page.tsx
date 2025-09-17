import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Guardrail Scorecards — Starter Kit | Zion Tech Group',
  description: 'Copy‑paste scorecard templates, policies‑as‑code, and eval wiring to ship governed autonomy.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link href="/" className="text-emerald-600 hover:text-emerald-800">← Home</Link>
        </nav>
        <header className="mb-8">
          <div className="text-sm text-emerald-700 font-semibold mb-2">Starter Kit</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">AI 2026: Guardrail Scorecards — Starter Kit</h1>
          <p className="text-gray-600">Ready‑to‑use scorecards, thresholds, and approval gates to prevent incidents and regressions.</p>
        </header>
        <article className="prose prose-lg max-w-none">
          <h2>Included templates</h2>
          <ul>
            <li>Policy schema: safety, quality, reliability, cost</li>
            <li>Threshold presets: conservative, balanced, aggressive</li>
            <li>CI integration: fail builds when scorecards regress</li>
          </ul>
          <h2>Quickstart</h2>
          <ol>
            <li>Adopt the policy schema and tune thresholds per risk tier</li>
            <li>Wire evaluation suites to scorecards and publish dashboards</li>
            <li>Require approvals when error budgets or policies are breached</li>
          </ol>
          <p>
            Related reading: <Link href="/blog/ai-2026-guardrail-scorecards-executive-brief" className="text-emerald-700">Executive Brief</Link> and
            {' '}<Link href="/content/ai-2026-operational-excellence-handbook" className="text-emerald-700">Operational Excellence</Link>.
          </p>
        </article>
      </div>
    </main>
  );
}

