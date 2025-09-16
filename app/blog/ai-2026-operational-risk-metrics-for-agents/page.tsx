import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Operational Risk Metrics for Agents',
  description:
    'Standardize override rates, violations, groundedness, and MTTR across teams with an evaluation-first operating model.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        AI 2026: Operational Risk Metrics for Agents
      </h1>
      <p className="text-gray-600 mt-3">
        A concise, adoptable set of metrics for production agent systems: override rate, guardrail violations, groundedness, time to containment, time to recovery, and change failure rate.
      </p>

      <div className="prose prose-purple mt-8">
        <h2>Why standardize metrics?</h2>
        <p>
          Consistent, comparable metrics enable safer changes, faster rollbacks, and clear ownership across platform and product teams.
        </p>
        <h3>The core set</h3>
        <ul>
          <li>Override Rate: frequency of human overrides or policy blocks</li>
          <li>Guardrail Violations: policy or tool‑use violations per 1k actions</li>
          <li>Groundedness: evidence‑backed answers across key scenarios</li>
          <li>Time to Containment (TTC) and Time to Recovery (MTTR)</li>
          <li>Change Failure Rate: eval‑gated releases that require rollback</li>
        </ul>

        <h3>Make it operational</h3>
        <p>
          Instrument these metrics in your evidence hub and tie them to SLOs and release gates. Start with a baseline, improve iteratively.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <Link href="/resources/ai-2026-agent-risk-metrics-starter-kit" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">
          Get Starter Kit
        </Link>
        <Link href="/blog/ai-2026-agent-platform-slos-best-practices" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">
          Platform SLOs
        </Link>
      </div>
    </main>
  );
}

