import Link from 'next/link';
import React from 'react';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI 2026: Risk‑Tiered Tool Use Blueprint — Permissions that Scale',
  description:
    'Blueprint for designing risk‑tiered tool permissions with policy‑as‑code, isolation domains, runtime checks, and audit‑ready evidence.',
  keywords: [
    'risk tiers',
    'tool permissions',
    'policy as code',
    'isolation domains',
    'runtime guardrails',
    'agent safety',
  ],
};

const RiskTieredToolUseBlueprint2026: React.FC = () => {
  return (
    <div>
      <SEO
        title="AI 2026: Risk‑Tiered Tool Use Blueprint"
        description="A practical blueprint: define tiers, codify policies, enforce isolation, and capture evidence."
        keywords="risk tiers, policy as code, isolation domains, runtime checks, evidence"
        url="/content/ai-2026-risk-tiered-tool-use-blueprint"
      />

      <main className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold opacity-90">Blueprint • 2025-09-15</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">Risk‑Tiered Tool Use Blueprint</h1>
            <p className="text-lg md:text-xl opacity-90 mt-4 max-w-3xl">Codify risk‑aware permissions that scale with autonomy while preserving safety and compliance.</p>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h2>Reference Architecture</h2>
            <ol>
              <li>Risk tier registry and tool inventory</li>
              <li>Policy‑as‑code engine with tests and CI evals</li>
              <li>Isolation domains for High/Critical</li>
              <li>Runtime decision service with evidence capture</li>
            </ol>

            <h3>Tier Definitions</h3>
            <p>Define criteria for Low, Medium, High, and Critical based on impact, reversibility, and data sensitivity.</p>

            <h3>Controls by Tier</h3>
            <ul>
              <li>Low: logging + rate limits</li>
              <li>Medium: pre‑flight policy checks</li>
              <li>High: isolation + approvals + eval gates</li>
              <li>Critical: multi‑party approvals + break‑glass protocol</li>
            </ul>

            <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
              <h4 className="text-emerald-800 font-semibold">Deliverables</h4>
              <ul className="list-disc pl-6 text-emerald-900">
                <li>Policy repository with tests and CI gates</li>
                <li>Isolation profiles and IaC modules</li>
                <li>Decision logs with eval IDs and audit export</li>
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/blog/ai-2026-risk-tiered-tool-use" className="text-purple-600 font-semibold">Read the Overview →</Link>
              <Link href="/content/ai-2026-secure-tooling-permissions-blueprint" className="text-emerald-700 font-semibold">Secure Tooling Permissions →</Link>
              <Link href="/resources/ai-2026-agent-risk-metrics-starter-kit" className="text-emerald-700 font-semibold">Risk Metrics Starter Kit →</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RiskTieredToolUseBlueprint2026;

