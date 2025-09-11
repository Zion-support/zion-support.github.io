// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Agent Guardrails in Production: What Actually Works',
  description:
    'Practical controls for safe, reliable AI agents: scoping, approvals, evals, and budgets.',
};

export default function AIAgentGuardrailsInProduction() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='py-12 border-b border-gray-200 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>AI Agent Guardrails in Production</h1>
          <p className='mt-3 text-gray-600'>Proven patterns to make agentic systems predictable, auditable, and affordable.</p>
        </div>
      </section>
      <section className='py-10'>
        <div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2>Core Principles</h2>
          <ul>
            <li>Scope actions explicitly with allowlists and typed tools.</li>
            <li>Isolate credentials and environments; minimize blast radius.</li>
            <li>Track cost and token budgets per task, user, and environment.</li>
          </ul>
          <h2>Execution Controls</h2>
          <ul>
            <li>Approval gates for side-effectful actions (create, delete, transfer).</li>
            <li>Safe retries with idempotency keys and conflict detection.</li>
            <li>Time-boxed runs and max-steps caps with clear abort semantics.</li>
          </ul>
          <h2>Observability & Evals</h2>
          <ul>
            <li>Structured logs for tool calls, prompts, responses, and outcomes.</li>
            <li>Golden tasks with continuous sampling and drift alerts.</li>
            <li>Human-in-the-loop audits on risky categories.</li>
          </ul>
          <h2>Rollout Plan</h2>
          <ol>
            <li>Start with read-only tools and simulated effects.</li>
            <li>Add limited write actions with approval gates.</li>
            <li>Expand coverage as evals and SLOs stabilize.</li>
          </ol>
          <p>
            Looking for a production plan?{' '}
            <Link href='/contact' className='text-blue-600 font-semibold'>Talk to our team</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

