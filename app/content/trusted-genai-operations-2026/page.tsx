import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Trusted GenAI Operations — Evidence-Driven, Safe, and Scalable',
  description:
    'A practical guide to operating GenAI systems with evaluation gates, policy-as-code, risk tiers, and audit-ready evidence.',
};

export default function TrustedGenAIOperations2026Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            AI 2026: Trusted GenAI Operations
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl">
            Operate GenAI systems safely with evaluation gates, risk-tiered permissions, policy-as-code, and
            evidence-driven approvals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog/ai-2026-eval-gated-autonomy" className="bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
              Eval-Gated Autonomy
            </Link>
            <Link href="/content/ai-2026-safe-evaluation-hub" className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-700">
              Evaluation Hub
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Trust Matters</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              As GenAI shifts from pilots to production, enterprises need operational patterns that keep systems safe,
              reliable, and cost-aware. This guide distills pragmatic controls to ship with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Evaluation Gates</h3>
              <p className="mt-2 text-gray-700">
                Use pre- and post-deployment evaluation suites with clear pass/fail criteria. Route rollouts through
                automated checks to catch regressions before customers do.
              </p>
            </article>
            <article className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Risk-Tiered Tool Use</h3>
              <p className="mt-2 text-gray-700">
                Apply least-privilege by default. Escalate permissions only when eval signals and human approvals
                justify the risk.
              </p>
            </article>
            <article className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Policy-as-Code</h3>
              <p className="mt-2 text-gray-700">
                Codify rules for data access, tool invocation, and safety constraints. Version and test policies like
                application code.
              </p>
            </article>
            <article className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Evidence-Driven Approvals</h3>
              <p className="mt-2 text-gray-700">
                Centralize evaluations, incidents, sign-offs, and KPIs to create an audit-ready, continuously
                improving operation.
              </p>
            </article>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Starter Kit</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Adopt an evaluation harness with scenario suites and measurable thresholds</li>
              <li>Define risk tiers and required approvals for sensitive tool actions</li>
              <li>Implement policy-as-code with tests and CI checks</li>
              <li>Instrument agent workflows with tracing and metrics for deep observability</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/content/ai-2026-evaluation-harness-blueprint" className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700">
                Evaluation Harness Blueprint
              </Link>
              <Link href="/content/ai-2026-secure-tooling-permissions-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-2 rounded-lg font-semibold hover:bg-purple-50">
                Permissions Blueprint
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

