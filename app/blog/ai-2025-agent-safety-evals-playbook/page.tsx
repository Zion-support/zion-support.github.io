import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agent Safety & Evals Playbook 2025 | Zion Tech Group',
  description: 'A comprehensive 2025 playbook for agent safety and evaluations. Covers red teaming, jailbreak prevention, policy enforcement, and automated scoring.',
  keywords: 'agent safety, LLM evals, red teaming, jailbreaks, policy, safety scoring, AI 2025',
  openGraph: {
    title: 'Agent Safety & Evals Playbook 2025',
    description: 'Practical frameworks for building safe, reliable AI agents with measurable quality.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Agents', 'Safety', 'Evaluation']
  }
};

export default function AgentSafetyEvalsPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-rose-100 hover:text-white mb-6 transition-colors">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agent Safety & Evals Playbook 2025
            </h1>
            <div className="flex flex-wrap items-center text-rose-100 text-sm space-x-6">
              <div>Zion Tech Group</div>
              <div>September 12, 2025</div>
              <div>19 min read</div>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Agentic systems create new safety challenges: tool misuse, long-horizon drift, data leakage,
            and jailbreaks. This playbook outlines practical safeguards and evaluation frameworks that
            teams are using successfully in production.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Safety Controls</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Policy engines with deterministic hard gates for restricted actions</li>
            <li>Tool permissioning: allowlists, scopes, and approval workflows</li>
            <li>PII/PHI filters and output redaction with audit trails</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Evaluation Strategy</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Golden tasks by scenario: safety, reliability, latency, cost</li>
              <li>Automated graders + human spot checks for high-risk flows</li>
              <li>Long-horizon evals with tool-usage telemetry and guardrail triggers</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Red Teaming</h3>
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Structured jailbreak suites with continuous mutation</li>
              <li>Data exfiltration probes; prompt injection canaries</li>
              <li>Safety scorecards with regression gates in CI</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Make Your Agents Safer</h3>
            <p className="text-gray-700 mb-6">
              We implement practical safety stacks with monitoring, guardrails, and evals wired to CI/CD.
              Get a readiness assessment and a concrete improvement plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors text-center">
                Request Assessment
              </Link>
              <Link href="/resources" className="border border-rose-600 text-rose-600 px-6 py-3 rounded-lg hover:bg-rose-50 transition-colors text-center">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

