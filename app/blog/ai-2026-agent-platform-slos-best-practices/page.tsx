import Link from 'next/link';
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

