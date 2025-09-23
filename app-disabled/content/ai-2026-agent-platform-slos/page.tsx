import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs That Matter',
  description: 'A concise SLO set for safety, quality, reliability, and cost—ready to adopt.'
};

export default function AgentPlatformSLOsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-sm text-purple-700 font-semibold">Guide</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">AI 2026: Agent Platform SLOs That Matter</h1>
      <p className="text-gray-600 mt-4">
        Define a clear, actionable set of service level objectives for agent platforms: safety, quality,
        reliability, and cost. Use these to drive design decisions, incident response, and change management.
      </p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Core SLO Categories</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
            <li><strong>Safety</strong>: policy-as-code violations per 1k actions, unsafe tool invocations, sandbox breaks</li>
            <li><strong>Quality</strong>: task success rate, correctness with verification, hallucination rate</li>
            <li><strong>Reliability</strong>: availability, latency SLOs for critical paths, degradation fallbacks</li>
            <li><strong>Cost</strong>: tokens per successful task, cache hit rate, batch/route efficiency</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Adoption Checklist</h2>
          <ol className="list-decimal ml-6 mt-3 text-gray-700 space-y-2">
            <li>Instrument evaluation gates and runtime telemetry for each SLO</li>
            <li>Define pass/fail with thresholds by tier and criticality</li>
            <li>Wire alerts and mitigation playbooks to SLO breaches</li>
            <li>Review trends weekly; tie roadmap to SLO deltas</li>
          </ol>
        </div>

        <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
          <p className="text-sm text-purple-800">
            Looking for implementation best practices? Read the companion article:
            {' '}
            <Link href="/blog/ai-2026-agent-platform-slos-best-practices" className="font-semibold underline">
              Agent Platform SLOs — Best Practices
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

