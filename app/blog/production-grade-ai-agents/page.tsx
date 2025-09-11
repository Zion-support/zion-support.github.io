// @ts-nocheck
import React from 'react';

export const metadata = {
  title: 'Production-Grade AI Agents: Observability and Safety',
  description:
    'Harden agents with logging, evals, safety guardrails, and cost controls for production.',
};

export default function ProductionGradeAIAgentsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='py-12 border-b border-gray-200 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Production-Grade AI Agents</h1>
          <p className='mt-3 text-gray-600'>Design for reliability, safety, and predictable cost from day one.</p>
        </div>
      </section>
      <section className='py-10'>
        <div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2>Key Principles</h2>
          <ul>
            <li>Structured logging and trace IDs across tools and actions</li>
            <li>Continuous evaluations with golden tasks and drift alerts</li>
            <li>Permissioned tool access and strong input/output filters</li>
          </ul>
          <h2>Architecture</h2>
          <ul>
            <li>Gateway for policy enforcement, rate limits, and cost ceilings</li>
            <li>Replayable queues with dead-letter handling and idempotency</li>
            <li>Feature flags with safe rollout and automated rollback</li>
          </ul>
          <h2>Runbook</h2>
          <ol>
            <li>Instrument: add metrics (latency, cost, success), logs, and traces</li>
            <li>Protect: apply guardrails (regex, classifiers, allow/deny lists)</li>
            <li>Control: budgets per tenant, alerting, and weekly audits</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

