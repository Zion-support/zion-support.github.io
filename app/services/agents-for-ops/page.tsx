import React from 'react';

export const metadata = {
  title: 'Autonomous Agents for Ops | Zion Tech Group',
  description: 'Production-safe autonomous agents for SRE, SecOps, and DevOps with approvals and guardrails.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Autonomous Agents for Ops</h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl">
            Resolve incidents faster with AI agents that triage alerts, run playbooks, create tickets, and propose safe remediations under human-in-the-loop control.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Use Cases</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Alert triage and enrichment</li>
              <li>• Runbooks and safe remediations</li>
              <li>• Incident comms and stakeholder updates</li>
              <li>• Postmortems and knowledge capture</li>
              <li>• Cost anomaly investigations</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Datadog, Prometheus, New Relic</li>
              <li>• PagerDuty, Opsgenie</li>
              <li>• ServiceNow, Jira</li>
              <li>• AWS, GCP, Azure</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><span className="font-semibold">Starter</span>: $999/month</li>
              <li><span className="font-semibold">Business</span>: $2,499/month</li>
              <li><span className="font-semibold">Enterprise</span>: custom</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">Benchmarks: Shoreline/Synthetic SRE tools $500–$3k+/mo</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Safety</h3>
            <p className="text-gray-700 text-sm">Policy engine, approval gates, dry-runs, and audit logs ensure safe automation.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Talk to SRE</h3>
            <div className="flex gap-3">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-cyan-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-cyan-700">Design Pilot</a>
              <a href="tel:+13024640950" className="border border-cyan-600 text-cyan-700 px-5 py-3 rounded-lg font-semibold hover:bg-cyan-50">Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

