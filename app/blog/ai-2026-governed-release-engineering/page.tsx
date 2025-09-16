import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Governed Release Engineering',
  description: 'Policy‑as‑code approvals, eval gates, and scorecards to ship safe changes.',
};

export default function GovernedReleaseEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold">Governed Release Engineering</h1>
          <p className="mt-3 text-emerald-100/90">Gate every change with policies, scenarios, and evidence‑backed scorecards.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-10 prose prose-lg">
        <p>
          This guide outlines a governed approach to releasing agent system changes. It combines policy‑as‑code
          approvals, evaluation gates, and release scorecards to ensure safety, reliability, and cost controls.
        </p>
        <h2>Core Controls</h2>
        <ul>
          <li>Policy‑as‑code approvals mapped to risk tiers and change types.</li>
          <li>Required evaluation scenarios with pass thresholds before promotion.</li>
          <li>Release scorecards, rollback contracts, and post‑incident learning loops.</li>
        </ul>
        <h2>Getting Started</h2>
        <ol>
          <li>Define policies and approvals in code; enforce via CI checks.</li>
          <li>Attach scenario suites and metrics as required gates to each PR.</li>
          <li>Publish scorecards to an evidence hub; promote or rollback based on SLOs.</li>
        </ol>
        <div className="not-prose mt-8 flex flex-wrap gap-3">
          <Link href="/blog/ai-2026-policy-as-code-blueprint" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Policy‑as‑Code Blueprint</Link>
          <Link href="/blog/ai-2026-eval-gated-release-runbook" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Release Runbook</Link>
          <Link href="/blog/ai-2026-release-scorecards" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Release Scorecards</Link>
        </div>
      </main>
    </div>
  );
}

