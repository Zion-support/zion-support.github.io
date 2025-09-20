import Link from 'next/link'
export const metadata = {
  title: 'AI 2026: Agent Evaluation Playground — Overview',
  description: 'Why every agent platform needs a quick, safe way to prototype evaluations.'
}
export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">New • 2025-09-15</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">AI 2026: Agent Evaluation Playground — Overview</h1>
        <p className="text-gray-600 mt-3">A lightweight approach to define scenarios, run evaluations locally, and publish results to an evaluation hub with policy gates.</p>
      </div>
      <article className="prose prose-purple max-w-none">
        <h2>Principles</h2>
        <ul>
          <li>Outcomes over metrics: define success in plain language first</li>
          <li>Policy‑as‑code: versioned thresholds and auto‑fail on regressions</li>
          <li>Traceability: every action tied to eval IDs and model/router versions</li>
        </ul>
        <h3>Getting started</h3>
        <p>Start with one critical scenario. Add guardrail checks and cost budgets. Automate weekly scorecards for review.</p>
        <p className="mt-8">See also:</p>
        <ul>
          <li><Link href="/content/ai-2026-agent-evaluation-playground" className="text-purple-600">Agent Evaluation Playground (Guide)</Link></li>
          <li><Link href="/content/ai-2026-evaluation-hub" className="text-purple-600">Evaluation Hub</Link></li>
        </ul>
      </article>
    </main>
  )}
