import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'AI 2026: Evaluation Hub',
  description: 'Centralized hub for eval harnesses, scenario suites, and governance gates for autonomous AI systems.'
};

export default function EvaluationHub2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">AI 2026: Evaluation Hub</h1>
      <p className="text-gray-700 mb-6">
        A centralized hub to design, manage, and operationalize evaluations for autonomous AI systems. Build scenario suites,
        define metrics, and enforce policy gates across development and production.
      </p>

      <section className="space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Blueprints</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <Link href="/content/ai-2026-evaluation-harness-blueprint" className="text-purple-700 hover:underline">
                Evaluation Harness Blueprint
              </Link>
            </li>
            <li>
              <Link href="/content/ai-2026-evals-maturity-model" className="text-purple-700 hover:underline">
                LLM Evals Maturity Model
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Scenario Suites</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <Link href="/blog/ai-2026-autonomous-agents-red-team-scenarios" className="text-purple-700 hover:underline">
                Autonomous Agents Red-Team Scenarios
              </Link>
            </li>
            <li>
              <Link href="/content/ai-2026-agentic-evaluation-checklists" className="text-purple-700 hover:underline">
                Agentic Evaluation Checklists
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Governance Gates</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <Link href="/content/ai-2026-agent-governance-policy-as-code" className="text-purple-700 hover:underline">
                Agent Governance Policy-as-Code
              </Link>
            </li>
            <li>
              <Link href="/content/ai-2026-agent-risk-management-framework" className="text-purple-700 hover:underline">
                Agent Risk Management Framework
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Get Started</h2>
          <p className="text-gray-700 mb-4">Use our open blueprints to stand up evaluations in days, not months.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/content/ai-2026-evaluation-harness-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Harness Blueprint</Link>
            <Link href="/content/ai-2026-agent-safety-certification" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Safety Certification</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

