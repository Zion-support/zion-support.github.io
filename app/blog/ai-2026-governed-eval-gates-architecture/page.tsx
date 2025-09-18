import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Governed Eval Gates Architecture — Blueprint',
  description: 'Design an evaluation-first architecture: policy-gated scenarios, scorecards, rollback contracts, and an audit-ready evidence hub.',
};

export default function GovernedEvalGatesArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-indigo-100 font-semibold">Blueprint • 2026</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Governed Eval Gates Architecture</h1>
          <p className="mt-4 text-indigo-100/90 max-w-3xl">A practical reference for evaluation-first systems: define policies, gate changes, and continuously collect evidence to ship safer autonomy at scale.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/blog/ai-2026-release-scorecards" className="inline-block bg-white text-indigo-700 px-5 py-3 rounded-lg font-semibold hover:bg-indigo-50">Release Scorecards</Link>
            <Link href="/blog/ai-2026-safe-rollouts-in-production" className="inline-block border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white/10">Safe Rollouts</Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 prose prose-indigo">
        <h2>Why Eval Gates</h2>
        <p>
          As autonomous workflows grow in complexity, evaluation must become a first-class runtime primitive.
          Governed eval gates provide an enforceable quality bar that promotes safe change, reduces regressions,
          and creates audit-ready evidence for every decision.
        </p>

        <h3>Architecture Overview</h3>
        <ul>
          <li><strong>Policy-as-Code:</strong> Declarative policies map product risks to required scenarios and thresholds.</li>
          <li><strong>Scenario Suites:</strong> Representative tasks with clear oracles and acceptance criteria.</li>
          <li><strong>Scorecards:</strong> Weighted metrics roll up into pass/fail gates per route and persona.</li>
          <li><strong>Rollback Contracts:</strong> Predefined failure states and automated rollback actions.</li>
          <li><strong>Evidence Hub:</strong> Immutable records of inputs, outputs, metrics, and decisions.</li>
        </ul>

        <h3>Operational Flows</h3>
        <ol>
          <li>Propose a change and link the impacted routes.</li>
          <li>Run governed scenario suites; publish scorecards and diffs.</li>
          <li>Gate deployment based on policy thresholds; auto-rollback on violations.</li>
          <li>Stream runtime telemetry and live evals to the evidence hub.</li>
        </ol>

        <h3>Starter Kits</h3>
        <p>Jump-start with these companion resources:</p>
        <ul>
          <li><Link href="/resources/ai-2026-release-scorecards-starter-kit">Release Scorecards Starter Kit</Link></li>
          <li><Link href="/content/ai-2026-evaluation-harness-blueprint">Evaluation Harness Blueprint</Link></li>
          <li><Link href="/blog/ai-2026-safe-change-management-blueprint">Safe Change Management Blueprint</Link></li>
        </ul>

        <h3>Implementation Checklist</h3>
        <ul>
          <li>Define risk tiers and map to evaluation requirements.</li>
          <li>Codify policies; version control all scenarios and thresholds.</li>
          <li>Automate pre-merge and pre-release gates; require scorecard approvals.</li>
          <li>Enable canary + rollback with contract tests.</li>
          <li>Centralize telemetry and audits in the evidence hub.</li>
        </ul>

        <hr />
        <p className="text-sm text-gray-500">Last updated: Sept 16, 2025</p>
      </main>
    </div>
  );
}

