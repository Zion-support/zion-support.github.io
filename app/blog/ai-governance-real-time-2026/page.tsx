import React from 'react';

export const metadata = {
  title: 'AI Governance in Real Time 2026: Live Canaries + PR Policy Tests',
  description: 'Wire KPI‑linked canaries and CI policy tests so teams ship weekly without regressions.'
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-4">AI Governance in Real Time 2026</h1>
        <p className="text-slate-300 mb-8">Live canaries linked to KPIs, PR policy tests, and rollback playbooks that let teams move fast without breaking outcomes.</p>
        <div className="prose prose-invert prose-slate">
          <h2>What changes in 2026</h2>
          <ul>
            <li>Outcome-linked canaries protect KPIs with budgeted actions</li>
            <li>PR policy tests gate risky flows before merge</li>
            <li>One-click rollback with signed release plans</li>
          </ul>
          <h2>Blueprint</h2>
          <ol>
            <li>Define SLIs tied to business KPIs</li>
            <li>Attach budgets and approvals to risky tools</li>
            <li>Continuously evaluate prompts, tools, and outputs</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

