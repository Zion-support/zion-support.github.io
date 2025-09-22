import Link from 'next/link'

export const metadata = {
  title: 'AI 2026: Real-Time Agent Debugger — Live Traces, Diffs, and Evals',
  description:
    'Debug autonomous agents in production with live traces, prompt/tool diffs, eval IDs, and rollback-ready guardrails.',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI 2026: Real-Time Agent Debugger</h1>
          <p className="text-gray-600 mt-4">
            Live traces, prompt and tool diffing across retries and routes, evaluation IDs, and guardrails to safely debug
            autonomous agents in production.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/content/ai-2026-safe-evaluation-hub" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Evaluation Hub</Link>
            <Link href="/blog/ai-2026-agent-observability-blueprint" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Observability Blueprint</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-indigo">
          <h2>Why Real-Time Debugging Matters</h2>
          <p>
            Traditional logs are not enough for autonomous agents. You need structured traces, evaluation context, and
            guardrail decisions to understand behavior and regressions.
          </p>
          <h3>Key Capabilities</h3>
          <ul>
            <li>Live trace streaming with span-level attributes and artifacts</li>
            <li>Prompt/tool diffing across retries, routes, and model versions</li>
            <li>Evaluation IDs stitched to every span and decision</li>
            <li>Safe rollbacks with policy-as-code gates</li>
          </ul>
          <h3>Getting Started</h3>
          <ol>
            <li>Instrument agents with OpenTelemetry-compatible spans</li>
            <li>Attach evaluation metadata and policy decisions</li>
            <li>Enable diff views for prompts, tools, and results</li>
            <li>Wire rollback buttons to progressive delivery</li>
          </ol>
        </div>
      </section>
    </main>
  )
}

