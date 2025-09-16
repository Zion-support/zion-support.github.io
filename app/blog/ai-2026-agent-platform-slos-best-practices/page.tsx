import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs — Best Practices',
  description:
    'Define actionable SLOs for agent platforms: safety, quality, reliability, latency, and cost with clear error budgets.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Agent Platform SLOs — Best Practices</h1>
          <p className="text-lg opacity-90">A concise SLO set for safety, quality, reliability, latency, and cost.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-emerald">
        <p>
          Adopt service level objectives tailored to autonomous agent platforms. Balance user outcomes and
          operational safety by encoding targets for evaluation pass‑rates, harmful output rates, tool‑use
          integrity, tail latency, incident MTTR, and per‑task unit costs.
        </p>

        <h2>Recommended SLO Categories</h2>
        <ul>
          <li>Safety: harmful output rate ≤ threshold; jailbreak block rate ≥ target</li>
          <li>Quality: eval pass‑rate on critical scenarios ≥ target</li>
          <li>Reliability: success rate and rollback coverage with error budgets</li>
          <li>Latency: p95/p99 end‑to‑end and tool latency within budgets</li>
          <li>Cost: unit economics per task and per successful outcome</li>
        </ul>

        <h2>Operationalizing SLOs</h2>
        <ul>
          <li>Attach eval gates to CI, staging, canary, and ramp</li>
          <li>Drive change policy with budgets and automatic rollbacks</li>
          <li>Record evidence artifacts for audits and postmortems</li>
          <li>Expose dashboards and alerts mapped to business KPIs</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="m-0">Related resources</h3>
          <ul>
            <li><Link href="/blog/ai-2026-safe-rollouts-in-production">Safe Rollouts in Production</Link></li>
            <li><Link href="/content/ai-2026-agent-platform-readiness-checklist">Readiness Checklist</Link></li>
            <li><Link href="/content/ai-2026-evaluation-runbook-starter-kit">Evaluation Runbook</Link></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
