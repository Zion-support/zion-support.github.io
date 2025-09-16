import Link from 'next/link';
<<<<<<< HEAD
import React from 'react';

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs — Best Practices',
  description: 'Practical guidance to define, monitor, and enforce agent platform SLOs.'
};

export default function AgentPlatformSLOsBestPracticesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-sm text-purple-700 font-semibold">Article</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">AI 2026: Agent Platform SLOs — Best Practices</h1>
      <p className="text-gray-600 mt-4">
        Turn SLOs into operational leverage: tie them to telemetry, evaluation gates, and clear
        mitigations. This guide shares implementation techniques that keep agents safe, reliable,
        high‑quality, and cost‑efficient.
      </p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Defining SLOs</h2>
          <p className="text-gray-700 mt-2">
            Start with the critical user journeys. For each, define safety, quality, reliability,
            and cost SLOs with unambiguous measurement and data sources.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Measuring and Alerting</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
            <li>Instrument eval harnesses and runtime telemetry per journey</li>
            <li>Set thresholds by customer tier and environment (dev/stage/prod)</li>
            <li>Alert on budget burn rate, not just instantaneous breaches</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Mitigation Playbooks</h2>
          <p className="text-gray-700 mt-2">Pre‑define mitigations: safe‑mode routes, model fallbacks, policy overrides with approvals.</p>
        </div>

        <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
          <p className="text-sm text-purple-800">
            Need the full reference SLO set? See the companion guide:{' '}
            <Link href="/content/ai-2026-agent-platform-slos" className="font-semibold underline">
              Agent Platform SLOs That Matter
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
=======
>>>>>>> origin/feature/new-slos-content-and-promo

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs — Best Practices',
  description: 'Practical guidance to define, monitor, and enforce SLOs for autonomous agent platforms.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">New • 2025-09-15</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">AI 2026: Agent Platform SLOs — Best Practices</h1>
        <p className="text-gray-600 mt-3">A pragmatic playbook for designing SLOs that reflect safety, quality, reliability, and cost—plus how to operationalize them.</p>
      </div>

      <article className="prose prose-purple max-w-none">
        <h2>Define Outcomes Before Metrics</h2>
        <p>Start from the business outcomes you want: safe automation, higher task success, faster incident recovery, and efficient spend. Translate each into one or two measurable SLOs.</p>

        <h3>Suggested SLOs</h3>
        <ul>
          <li>Safety policy violation rate ≤ 0.5/1k actions with 95% confidence.</li>
          <li>Eval task success rate ≥ 98% on critical scenarios, no regression &gt; 0.5%.</li>
          <li>Action success rate ≥ 99.5%, safe-mode MTTR &lt; 5 minutes.</li>
          <li>Cost per successful task within budget; cache hit rate ≥ 60%.</li>
        </ul>

        <h3>Enforce with Policy and Evals</h3>
        <p>Use policy-as-code to codify thresholds and evaluation suites to gate changes. Break the build when deltas exceed allowed error bars.</p>

        <h3>Observability</h3>
        <p>Trace every agent action with evaluation IDs, policy decisions, model/router versions, and cost metadata. Aggregate in an evaluation hub for reviews.</p>

        <h3>Runbooks</h3>
        <p>Document safe-mode fallbacks, rollback criteria, and escalation paths when SLOs breach. Automate alerts and weekly scorecards.</p>

        <p className="mt-8">See also:</p>
        <ul>
          <li><Link href="/content/ai-2026-agent-platform-slos" className="text-purple-600">Agent Platform SLOs (Guide)</Link></li>
          <li><Link href="/content/ai-2026-operational-excellence-handbook" className="text-purple-600">Operational Excellence Handbook</Link></li>
        </ul>
      </article>
    </main>
  );
}

