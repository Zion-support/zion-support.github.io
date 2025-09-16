import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-sm text-purple-100/90 mb-3">
            <Link href="/blog" className="hover:underline">← Back to Blog</Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Trustworthy Autonomous Agents Blueprint (2026)</h1>
          <p className="mt-3 text-purple-100/90 max-w-3xl">
            Governance-by-design for agents: evals-as-code, policy-as-code, safety telemetry, and gated autonomy patterns for reliable production operations.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <article className="prose prose-lg max-w-none">
          <h2>Why Trustworthiness Matters</h2>
          <p>
            As enterprises adopt autonomous agents, safety and reliability become first-class requirements. This blueprint
            outlines pragmatic controls to keep agents aligned with business goals and risk thresholds.
          </p>

        <h2>Key Building Blocks</h2>
        <ul>
          <li>Evals-as-code integrated into CI/CD and runtime guardrails</li>
          <li>Policy-as-code for tool eligibility, PII handling, and change control</li>
          <li>Safety telemetry with golden signals and semantic traces</li>
          <li>Risk-tiered autonomy gates and supervised override paths</li>
        </ul>

        <h2>Rollout Pattern</h2>
        <ol>
          <li>Define success metrics and failure modes</li>
          <li>Instrument evaluations, traces, and policies</li>
          <li>Start in shadow mode, then progressive exposure</li>
          <li>Continuously retrain guardrails with incident learning</li>
        </ol>

        <h2>Outcomes</h2>
        <p>
          Teams reduce incident rates, accelerate safe deploys, and unlock higher autonomy levels with measurable confidence.
        </p>

        <div className="not-prose mt-8">
          <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700">
            Talk to an Expert →
          </Link>
        </div>
        </article>
      </main>
    </div>
  );
}

