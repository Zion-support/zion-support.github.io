import React from 'react';
import { Link } from 'react-router-dom';

export default function EnterpriseAIRoadmap2025() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-8">
          <p className="text-sm text-gray-400">September 30, 2025 • 16 min read</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Enterprise AI Roadmap 2025: From Pilots to Measurable Outcomes
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            A pragmatic, budget-aware roadmap to scale reliable AI across the enterprise with guardrails,
            online evaluations, and value stream analytics.
          </p>
        </header>

        <section className="prose prose-invert prose-emerald max-w-none">
          <h2>Why Most AI Programs Stall</h2>
          <p>
            Initiatives often stall due to unclear ownership, missing reliability practices, and runaway costs.
            The fix: policy-first guardrails, KPI-linked budgets, and continuous evaluation.
          </p>

          <h2>Roadmap Overview</h2>
          <ol>
            <li>Define outcomes and leading indicators per value stream.</li>
            <li>Instrument prompts, tools, and external calls with end-to-end traces.</li>
            <li>Apply budget-aware routing, caching, and quantization to control spend.</li>
            <li>Introduce online evaluations and rollback on regression.</li>
            <li>Publish scorecards and automate approvals for higher-risk changes.</li>
          </ol>

          <h2>Reference Architecture</h2>
          <ul>
            <li>Policy engine with allow/deny, reviewers, and risk tiers.</li>
            <li>Observability: traces, metrics, logs, and red-team events.</li>
            <li>Reliability: canary releases, A/B switches, and dataset drift monitors.</li>
            <li>Cost controls: per-request budgets, cache TTLs, and model fallbacks.</li>
          </ul>

          <h2>Getting Started This Quarter</h2>
          <p>
            Start with one critical journey (support, claims, fulfillment). Ship a thin slice with full
            guardrails and publish an ROI scorecard in 30 days.
          </p>
        </section>

        <hr className="my-10 border-white/10" />

        <aside className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-emerald-300 mb-2">Next up</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>
              <Link href="/blog/ai-2025-september-30-new-governed-agent-patterns" className="text-emerald-300 hover:text-emerald-200">
                Governed Agent Patterns (Sep 30, 2025)
              </Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-september-30-autonomous-finops-scorecards" className="text-emerald-300 hover:text-emerald-200">
                Autonomous FinOps Scorecards (Sep 30, 2025)
              </Link>
            </li>
          </ul>
        </aside>
      </article>
    </main>
  );
}

