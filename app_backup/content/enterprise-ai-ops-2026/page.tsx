import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Enterprise AI Ops Blueprint 2026',
  description:
    'A practical blueprint to build, operate, and scale enterprise-grade AI operations with reliability, governance, and measurable ROI in 2026.',
  keywords: [
    'AI Ops',
    'MLOps',
    'LLMOps',
    'AI Governance',
    'AI Reliability',
    'Observability',
    'AI Platform',
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-gray-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm font-semibold text-purple-700">Blueprint • 2026</div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterprise AI Ops Blueprint (2026)
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Design a resilient AI operating model: from evaluation-first development and robust runtime controls
            to observability, incident response, and continuous governance. This blueprint provides actionable
            architecture patterns and checklists to scale AI safely and profitably.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <article className="prose prose-lg max-w-none">
            <h2>1) Operating Model</h2>
            <ul>
              <li>Evaluation-first development with task suites, golden sets, and guardrails.</li>
              <li>Platform team owning tooling, standards, and shared services.</li>
              <li>Product teams integrating AI capabilities with clear SLOs and KPIs.</li>
            </ul>

            <h2>2) Architecture</h2>
            <ul>
              <li>Gateway with policy-as-code, rate limits, and prompt safety hooks.</li>
              <li>Feature store, vector index, and secure secrets/key management.</li>
              <li>Offline/online evaluation harnesses and canary rollouts.</li>
            </ul>

            <h2>3) Reliability & Observability</h2>
            <ul>
              <li>Trace every request: prompts, tool calls, model versions, and outputs.</li>
              <li>Latency/error budgets and auto-fallback strategies.</li>
              <li>PII redaction, content filters, and abuse detection in the path.</li>
            </ul>

            <h2>4) Governance</h2>
            <ul>
              <li>Model registry, data lineage, and approval workflows.</li>
              <li>Risk classification with tiered controls and human-in-the-loop.</li>
              <li>Policy mapping to evidence for audits and customers.</li>
            </ul>

            <h2>5) ROI and Adoption</h2>
            <ul>
              <li>Outcome-oriented KPIs: cycle time, quality, cost, revenue impact.</li>
              <li>Playbooks for onboarding teams and measuring value quickly.</li>
              <li>Portfolio view to prioritize high-leverage automations.</li>
            </ul>
          </article>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Get the checklist</h3>
            <p className="text-gray-700 mb-4">Use our 20-point AI Ops readiness checklist to assess your current state.</p>
            <div className="flex gap-3">
              <Link href="/contact" className="bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">
                Talk to an Expert
              </Link>
              <Link href="/services" className="border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

