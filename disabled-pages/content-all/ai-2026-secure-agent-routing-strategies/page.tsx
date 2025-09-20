import Link from 'next/link'
export const metadata = {
  title: 'AI 2026: Secure Agent Routing Strategies',
  description:
    'Least‑privilege routing, tiered trust, eval‑gated execution, and runtime guards for safe autonomous agents.'
}
export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">New content · September 2025</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          AI 2026: Secure Agent Routing Strategies,
        </h1>
        <p>
          Design safe, reliable routing for autonomous agents with least‑privilege policies, tiered trust, and,
          evaluation‑gated execution.,
        </p>
      </header>
      <article className="prose prose-purple max-w-none">
        <h2>Principles</h2>
        <ul>
          <li>Start with least‑privilege by default, grant capabilities per task.</li>
          <li>Use tiered trust with explicit handoffs and supervisory review gates.</li>
          <li>Eval‑gate risky actions with scenario tests and pass criteria.</li>
          <li>Enforce runtime guards: quotas, timeouts, budgets, and domain isolation.</li>
        </ul>
        <h2>Reference Architecture</h2>
        <ol>
          <li>Policy‑as‑code router computes permissible tools and routes.</li>
          <li>Evaluator service validates context and outcomes pre/post action.</li>
          <li>Observability stream records traces, decisions, and metrics.</li>
          <li>Fallbacks and safe‑mode paths on evaluator failure.</li>
        </ol>
        <h2>Resources</h2>
        <ul>
          <li>
            <Link className="text-purple-600 font-semibold" href="/content/ai-2026-secure-tooling-permissions-blueprint">
              Permissions Blueprint,
            </Link>
          </li>
          <li>
            <Link className="text-purple-600 font-semibold" href="/content/ai-2026-evaluation-hub">
              Evaluation Hub,
            </Link>
          </li>
        </ul>
      </article>
    </main>)
}
