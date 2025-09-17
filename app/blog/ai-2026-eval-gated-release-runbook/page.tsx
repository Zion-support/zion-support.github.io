import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Eval‑Gated Release Runbook',
  description: 'A practical SOP to ship safe agent changes with scenario suites, scorecards, and rollback contracts.',
};

export default function EvalGatedReleaseRunbookPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold">Eval‑Gated Release Runbook</h1>
          <p className="mt-3 text-indigo-100/90">Ship changes with confidence using eval gates and evidence‑led rollouts.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-10 prose prose-lg">
        <p>
          This runbook provides a step‑by‑step SOP for releasing agent changes. It encodes pre‑merge evaluation
          gates, progressive delivery with canary scorecards, and deterministic rollbacks when KPIs regress.
        </p>
        <h2>Release Steps</h2>
        <ol>
          <li>Author scenarios and metrics; attach to change as required gates.</li>
          <li>Run canary with live evals and publish scorecards to the evidence hub.</li>
          <li>Promote on success; rollback on breach using contracts and playbooks.</li>
        </ol>
        <div className="not-prose mt-8 flex gap-3">
          <Link href="/blog/ai-2026-eval-gated-ci-cd-blueprint" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700">CI/CD Blueprint</Link>
          <Link href="/blog/ai-2026-release-scorecards" className="inline-block border border-indigo-600 text-indigo-700 px-5 py-3 rounded-lg font-semibold hover:bg-indigo-50">Release Scorecards</Link>
        </div>
      </main>
    </div>
  );
}

