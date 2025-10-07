import React from 'react';
// @ts-nocheck

export const metadata = {
  title: 'AI 2027: Customer Experience Agents — 24/7 Autonomous CX',
  description:
    'Deploy trusted CX agents with budgets, live KP Is, evals, and instant rollback that resolve 80% of tickets autonomously.',
};

export default function Page() {
  return (
    <main className='min-h-screen bg-slate-950text-white'>
      <section className='py-20'>
        <div className='max-w-3xl mx-auto px-6'>
          <h1 className='text-4xl font-extrabold mb-4'>
            AI 2027: Customer Experience Agents — 24/7 Autonomous CX
          </h1>
          <p className='text-slate-300 mb-6'>
            Budgets , KPI‑linked scorecardsevalsand instant rollback to ship
            safe CX autonomy.
          </p>
          <div className='prose prose-invert'>
            <p>
              This guide shows how to stand up autonomous CX agents with
              guardrails: budgeted actions, KPI‑linked canaries, and one‑click
              recovery. Organizations are resolving up to 80% of tickets
              autonomously with higher CSAT and predictable cost.
            </p>
            <h2>Key Capabilities</h2>
            <ul>
              <li>Budget ‑aware routing and approvals for sensitive actions</li>
              <li>
                Live scorecards tied to KP Is (CSAT, AHT, FCR) with rollback
                triggers
              </li>
              <li>Observability : traces, evals, policy tests</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
