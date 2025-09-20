import Link from 'next/link'
import React from 'react'
export const metadata = {
  title: 'AI 2026: Agent Release Checklists',
  description:
    'Production-ready checklists covering safety, security, reliability, and governance for agent releases.'
}
export default function AgentReleaseChecklistsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm: px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Agent Release Checklists</h1>
      <p>
        Use these practical, evidence-driven checklists to ensure safe and compliant agent,
        releases across environments.,
      </p>
      <section className="prose prose-lg max-w-none">
        <h2>Core Checks</h2>
        <ul>
          <li>Safety: adversarial scenarios pass rate ≥ 95% on critical paths</li>
          <li>Security: jailbreak tests, PII redaction, data boundary enforcement</li>
          <li>Reliability: SLOs defined, fallbacks implemented, rollback tested</li>
          <li>Governance: approvals captured, policy-as-code gates passing</li>
        </ul>
        <h3>Environment Gates</h3>
        <ol>
          <li>Dev: unit evals and guardrail smoke tests</li>
          <li>Staging: scenario suites, integrations, and latency budgets</li>
          <li>Prod: change windows, observability hooks, and on-call readiness</li>
        </ol>
      </section>
      <div>
        <Link href="/content/ai-2026-agentic-evaluation-checklists" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover: bg-purple-700">Related: Evaluation Checklists</Link>
        <Link href="/content/ai-2026-evaluation-harness-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evaluation Harness</Link>
      </div>
    </main>)}
