import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'AI 2026: Agent Observability Blueprint',
  description: 'Deep visibility into autonomous agents: traces, evaluations, and safety telemetry.',
};

export default function AgentObservabilityBlueprintPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Agent Observability Blueprint</h1>
          <p className="text-lg md:text-xl opacity-90">
            Deep visibility into autonomous agents: traces, evaluations, and safety telemetry across the lifecycle.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <article className="prose prose-lg max-w-none">
            <h2>Why Agent Observability</h2>
            <p>
              Agent systems are dynamic and policy-constrained. Observability must extend beyond infra metrics to
              include prompts, tools, memory, policies, and outcomes. This blueprint maps the signals you need to
              operate safely and effectively at scale.
            </p>
            <h3>Pillars</h3>
            <ul>
              <li>Traces: task graphs, tool calls, latencies, and token usage</li>
              <li>Evals: continuous task success rates and regression alerts</li>
              <li>Safety: red-team findings, blocked actions, and policy breaches</li>
              <li>Economics: cost, ROI attribution, and capacity planning</li>
            </ul>
            <h3>Getting Started</h3>
            <p>
              Instrument agents with a consistent schema, capture spans for each tool, and integrate an evaluation
              harness. Start with high-risk workflows, add policy-as-code checks, and wire alerts to on-call.
            </p>
          </article>

          <div className="flex gap-4">
            <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
              Talk to an Expert
            </Link>
            <Link href="/blog/ai-2026-ai-ops-autonomous-incident-response" className="border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">
              Read Incident Response
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

