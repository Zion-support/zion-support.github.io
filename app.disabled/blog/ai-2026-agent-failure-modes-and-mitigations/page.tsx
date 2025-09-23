import Link from 'next/link';
import React from 'react';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI 2026: Agent Failure Modes and Mitigations',
  description: 'Common failure modes for autonomous agents and concrete mitigations using policy-as-code, evals, and guardrails.',
  keywords: ['agent failures', 'mitigations', 'policy-as-code', 'evals', 'guardrails'],
};

export default function AgentFailureModesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SEO
        title="AI 2026: Agent Failure Modes and Mitigations"
        description="Common failure modes for autonomous agents and concrete mitigations using policy-as-code, evals, and guardrails."
        keywords="agent failures, mitigations, policy-as-code, evals, guardrails"
        url="/blog/ai-2026-agent-failure-modes-and-mitigations"
      />

      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold opacity-90">Reliability • 2025-09-15</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Agent Failure Modes and Mitigations</h1>
          <p className="text-lg md:text-xl opacity-90 mt-4 max-w-3xl">A practical catalog of failures with prevention and containment strategies.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <article className="prose prose-lg max-w-none">
            <h2>Frequent Failure Modes</h2>
            <ul>
              <li>Hallucinated tool calls and unsafe effectors</li>
              <li>Prompt injection and cross-task data leakage</li>
              <li>Runaway loops and cost explosions</li>
              <li>Spec drift and stale policies</li>
            </ul>
            <h3>Mitigations</h3>
            <ul>
              <li>Policy-as-code with explicit allow/deny tool lists and risk tiers</li>
              <li>Eval-gated releases and continuous regression suites</li>
              <li>Runtime governors: budget caps, step limits, and escalation rules</li>
              <li>Isolation domains and signed tool manifests</li>
            </ul>
          </article>

          <div className="flex gap-4">
            <Link href="/content/ai-2026-evaluation-hub" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
              Evaluation Hub
            </Link>
            <Link href="/content/ai-2026-policy-as-code-starter-kit" className="border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">
              Policy-as-Code Kit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

