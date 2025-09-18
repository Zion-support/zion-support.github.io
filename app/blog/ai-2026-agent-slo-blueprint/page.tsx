import React from 'react';

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs — Best Practices',
  description:
    'A concise, adoptable SLO set for agent platforms across safety, quality, reliability, and cost with examples and rollout tips.',
};

export default function AgentSLOBlueprintPage() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-white/80 text-sm font-semibold">New • 2026</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Agent Platform SLOs — Best Practices</h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Define and operationalize SLOs that balance safety, quality, reliability, and cost for autonomous
            agent systems.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <section className="prose prose-lg max-w-none">
          <h2>Recommended SLO Areas</h2>
          <ul>
            <li><strong>Safety:</strong> policy violations per 1K actions, blocked risky tool calls, red-team pass rate</li>
            <li><strong>Quality:</strong> task success rate, eval score thresholds, regression guardrails</li>
            <li><strong>Reliability:</strong> incident MTTR, rollback success rate, on-call response time</li>
            <li><strong>Cost:</strong> spend per workflow, cache hit rates, tiered model routing efficiency</li>
          </ul>

          <h2>Implementation Tips</h2>
          <ol>
            <li>Start with executive journeys and critical-path workflows.</li>
            <li>Attach SLO thresholds to release scorecards and rollout policies.</li>
            <li>Instrument live evaluations to detect regressions and trigger rollbacks.</li>
            <li>Continuously tune thresholds based on evidence and incident reviews.</li>
          </ol>
        </section>
      </main>
    </article>
  );
}

