import Link from 'next/link'
export const metadata = {
  title: 'AI 2026: Implementing Agent SLOs — Practical Guide',
  description: 'Define, monitor, and enforce SLOs that matter for autonomous agent platforms with policy-as-code and eval gates.'
}
export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
        <div>
          <div>
            <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">New • September 2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI 2026: Implementing Agent SLOs — Practical Guide</h1>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl">A concise implementation playbook to define, instrument, and operationalize SLOs for agent platforms across safety, quality, reliability, and economics—wired with policy‑as‑code and evaluation gates.</p>
          <div>
            <Link href="/content/ai-2026-agent-platform-slos" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover: bg-emerald-700">Reference SLO Set</Link>
            <Link href="/blog/ai-2026-agent-platform-slos-best-practices" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Best Practices</Link>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Why SLOs for Agent Platforms</h2>
          <p className="mt-3 text-gray-700">Agents introduce new failure modes and risks. Clear objectives allow governance and progressive delivery with measurable guardrails.</p>
          <div>
            <div>
              <h3 className="font-semibold text-gray-900">Core SLO Categories</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Safety (policy violations, sensitive action gates)</li>
                <li>Quality (task success, factuality, citation density)</li>
                <li>Reliability (availability, latency P95, rollback time)</li>
                <li>Economics (cost per task, cache hit rate, model routing)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Operational Patterns</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Policy‑as‑code checks before and during execution</li>
                <li>Eval‑gated rollout with automatic rollback</li>
                <li>Live telemetry with trace‑to‑eval linkage</li>
                <li>Budget caps and cost‑aware routing</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Starter Targets</h3>
            <div>
              <div>
                <div className="text-sm text-gray-500">Availability</div>
                <div className="text-2xl font-bold text-emerald-600">99.9%</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Rollback time</div>
                <div className="text-2xl font-bold text-emerald-600">&lt, 5 min</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Cost per task</div>
                <div className="text-2xl font-bold text-emerald-600">-20% QoQ</div>
              </div>
            </div>
          </div>
          <div>
            <Link href="/content/ai-2026-agent-platform-operations" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover: bg-purple-700">Ops Guide</Link>
            <Link href="/blog/ai-2026-foundation-model-ops" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Model Ops</Link>
          </div>
        </div>
      </section>
    </main>
  )}
