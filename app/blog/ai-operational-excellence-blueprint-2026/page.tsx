import React from 'react';

export const metadata = {
  title: 'AI Operational Excellence Blueprint 2026',
  description:
    'Guardrails wired to KPIs with PR checks, canaries, and SLOs engineers adopt.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">AI Operational Excellence Blueprint 2026</h1>
      <p className="text-gray-600 mb-8">
        From policy to practice: scorecards and playbooks that correlate with outcomes and speed teams up.
      </p>
      <div className="prose prose-indigo">
        <h2>Blueprint</h2>
        <ol>
          <li>Define outcome‑linked scorecards and SLAs</li>
          <li>Add policy tests to CI and pre‑merge checks</li>
          <li>Run online canaries and budget risky actions</li>
        </ol>
        <h2>Results</h2>
        <p>
          Improve reliability while maintaining delivery velocity. Reduce incident MTTR with budgeted actions
          and rollback‑ready playbooks.
        </p>
      </div>
    </main>
  );
}

