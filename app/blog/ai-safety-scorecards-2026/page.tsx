// @ts-nocheck
import React from 'react';

export const metadata = {
  title: 'AI Safety Scorecards 2026 — SLIs, Budgets, Rollback | Zion Tech Group',
  description: 'Operationalize AI safety with SLIs wired to KPIs, budgeted actions, approvals, and instant rollback to ship reliable autonomy.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-4">AI Safety Scorecards 2026</h1>
        <p className="text-slate-300 mb-8">SLIs → KPIs with budgeted actions, approvals, and instant rollback.</p>
        <div className="prose prose-invert prose-slate">
          <h2>Why Scorecards</h2>
          <p>Scorecards connect operational SLIs to business KPIs so autonomy remains safe, reliable, and measurable. Actions are budgeted, approvals are enforced for risky operations, and every rollout has an instant rollback path.</p>
          <h2>Core Components</h2>
          <ul>
            <li>Policy tests in CI block unsafe merges</li>
            <li>KPI-linked canaries with auto-rollback</li>
            <li>Budgeted actions and human approvals</li>
            <li>Observability: traces, evals, and guardrail events</li>
          </ul>
          <h2>Outcomes</h2>
          <p>Reduce incidents, improve MTTR, and maintain customer trust while increasing release velocity.</p>
        </div>
      </main>
    </div>
  );
}

