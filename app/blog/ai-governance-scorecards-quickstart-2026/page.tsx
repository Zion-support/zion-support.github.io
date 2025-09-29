import React from 'react';

export const metadata = {
  title: 'AI Governance Scorecards Quickstart 2026',
  description:
    'A practical starter for scorecards, PR checks, and KPI‑linked canaries teams adopt in weeks.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">AI Governance Scorecards Quickstart 2026</h1>
      <p className="text-gray-600 mb-8">
        A practical starter for scorecards, PR checks, and KPI‑linked canaries teams adopt in weeks.
      </p>
      <div className="prose prose-indigo">
        <h2>What you will implement</h2>
        <ul>
          <li>Lightweight scorecards tied to product KPIs</li>
          <li>Policy tests in CI for prompts and tools</li>
          <li>Online canaries wired to business metrics</li>
        </ul>
        <h2>Outcomes</h2>
        <p>
          Ship AI features weekly with measurable guardrails and no heavy process. Prove value with
          leading indicators that correlate with revenue, CSAT, and retention.
        </p>
      </div>
    </main>
  );
}

