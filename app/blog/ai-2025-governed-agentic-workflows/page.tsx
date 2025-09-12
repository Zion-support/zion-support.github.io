import React from 'react';

export const metadata = {
  title: 'Governed Agentic Workflows: Policy Gates, Audits, Evals',
  description:
    'How to design governed agentic workflows with policy gates, audits, and continuous evaluations for safe, reliable operations.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 prose prose-gray">
      <h1>Governed Agentic Workflows: 2025 Blueprint</h1>
      <p>
        Implement governance-by-design for agent systems. Use explicit policy gates, auditable decisions, and
        evaluator feedback loops to ensure safe, reliable outcomes without blocking delivery.
      </p>
      <h2>Core Principles</h2>
      <ul>
        <li>Policy-as-code with versioned controls</li>
        <li>Human-in-the-loop where risk thresholds exceed policy</li>
        <li>Continuous safety and quality evaluators</li>
        <li>Observability with spans, metrics, and decision logs</li>
      </ul>
      <h2>Reference Architecture</h2>
      <p>
        Orchestrate tasks through a workflow engine with embedded policy checks. Attach evaluators to critical
        steps and emit structured events for audits and retrospectives.
      </p>
      <p>
        See also the case study on agent observability and the evaluation checklist for implementation details.
      </p>
    </main>
  );
}

