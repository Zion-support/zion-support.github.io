import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Platform Engineering Scorecards 2026: From Golden Paths to Outcomes',
  description:
    'Measure adoption, golden-path TTFX, SLOs, and shipped value. A pragmatic scorecard system engineers actually use.',
  keywords:
    'platform engineering, scorecards, golden paths, SLOs, TTFX, developer experience, platform ROI',
};

export default function PlatformEngineeringScorecards2026Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">New • 2026</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Platform Engineering Scorecards 2026: From Golden Paths to Outcomes
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Measure what matters: adoption, golden-path time-to-first-experience (TTFX), SLOs, and shipped
            value—without slowing delivery.
          </p>
          <div className="flex items-center gap-6 text-sm opacity-75">
            <span>📅 Oct 9, 2025</span>
            <span>⏱️ 8 min read</span>
            <span>👤 Zion Tech Group Team</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">Executive Summary</p>
            <p className="text-blue-800">
              Scorecards that engineers adopt focus on outcomes they influence daily. This playbook connects
              platform investments to adoption, golden-path TTFX, reliability SLOs, and shipped business value.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Four-Box Scorecard</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Adoption</h3>
              <p className="text-gray-700">% teams on golden paths, weekly active users, template usage.</p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Golden-path TTFX</h3>
              <p className="text-gray-700">Time from template to first successful deploy with SLOs met.</p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Reliability SLOs</h3>
              <p className="text-gray-700">SLO adherence on core workflows; error budgets & burn rate.</p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Shipped Value</h3>
              <p className="text-gray-700">Cycle time, release frequency, and feature adoption trends.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Operating Rhythm</h2>
          <ul className="text-gray-700 space-y-3 mb-8">
            <li>Monthly reviews with owners and deltas vs. targets</li>
            <li>Red/amber flags trigger remediation playbooks</li>
            <li>Quarterly cut/scale decisions with evidence</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Checklist</h2>
          <ul className="text-gray-700 space-y-3 mb-8">
            <li>Define golden paths with templates and docs</li>
            <li>Instrument TTFX and add guardrail SLOs</li>
            <li>Publish scorecards and assign accountable owners</li>
            <li>Automate PR checks for risky infra changes</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Need help operationalizing scorecards?</h3>
            <p className="opacity-90 mb-4">We set up telemetry, scorecards, and PR checks that teams embrace.</p>
            <div className="flex gap-3 flex-col sm:flex-row">
              <a href="tel:+13024640950" className="bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <RelatedArticleCard
              title="AI Governance Scorecards 2026"
              description="Guardrails tied to KPIs with PR checks and online canaries."
              href="/blog/ai-governance-scorecards-2026"
            />
            <RelatedArticleCard
              title="Edge LLM Caching Blueprint 2026"
              description="Tiered caches and freshness windows for sub-100ms prompts."
              href="/blog/edge-llm-caching-blueprint-2025"
            />
            <RelatedArticleCard
              title="FinOps Scorecards 2025"
              description="Budgets and alerts that cut waste 25–40% without slowing teams."
              href="/blog/finops-scorecards-2025"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function RelatedArticleCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <span className="text-blue-600 font-semibold">Read More →</span>
    </Link>
  );
}

