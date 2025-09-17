import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Safe Change Management — Blueprint',
  description:
    'Progressive delivery, evaluation gates, and audit‑ready approvals for safe agent changes in production.',
};

export default function SafeChangeManagementBlueprintPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <p className="text-sm text-purple-700 font-semibold">Blueprint • 2025-09-16</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            AI 2026: Safe Change Management — Blueprint
          </h1>
          <p className="mt-3 text-gray-600">
            Progressive delivery, evaluation gates, and audit‑ready approvals for safe agent changes in production.
          </p>
        </header>

        <section className="prose prose-purple max-w-none">
          <h2>Why safe change matters</h2>
          <p>
            Agent systems change rapidly. This blueprint shows how to combine policy‑as‑code, evaluation gates, and
            staged rollouts to ship safely while preserving velocity.
          </p>

          <h2>Core components</h2>
          <ul>
            <li>Policy‑as‑code approvals with evidence bundles</li>
            <li>Offline and runtime evaluation gates</li>
            <li>Progressive rollout with auto‑rollback</li>
            <li>Observability and incident playbooks</li>
          </ul>

          <h2>Adoption checklist</h2>
          <ol>
            <li>Define SLOs and risk tiers</li>
            <li>Instrument evaluation harness and scorecards</li>
            <li>Gate CI/CD and runtime with policy checks</li>
            <li>Enable staged rollout and health monitors</li>
          </ol>
        </section>

        <footer className="mt-10">
          <Link href="/" className="text-purple-600 font-semibold hover:text-purple-800">
            ← Back to Home
          </Link>
        </footer>
      </article>
    </main>
  );
}

