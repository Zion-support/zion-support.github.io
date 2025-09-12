import React from 'react';

export const metadata = {
  title: 'AI Evaluation Checklist 2025 (Free Download)',
  description: 'A practical evaluation checklist for LLM apps and agents: safety, reliability, latency, and cost. Includes templates to operationalize evals in CI/CD.',
  keywords: ['AI evaluation', 'LLM evals', 'agents', 'guardrails', 'latency', 'cost', 'templates', 'checklist'],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">RESOURCE • Free</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Evaluation Checklist 2025</h1>
          <p className="text-lg text-gray-700 mb-6">
            Use this checklist to evaluate safety, reliability, latency, and cost for LLM apps and agent systems. Includes ready-to-use templates for CI/CD and production monitoring.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold mb-3">What’s Inside</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Safety & privacy: prompt injection, data leakage, policy compliance</li>
              <li>Reliability: determinism windows, fallbacks, human handoff</li>
              <li>Latency budgets and SLOs for interactive UX</li>
              <li>Cost guardrails with per-route budgets</li>
              <li>Red-teaming and regression suites</li>
            </ul>
          </div>

          <a href="#" className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Download PDF
          </a>

          <p className="text-sm text-gray-500 mt-4">No email required. Instant access.</p>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import SEO from '../../components/SEO';

export default function AIEvaluationChecklist2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Evaluation Checklist 2025: 120+ Actionable Checks"
        description="Free checklist covering metrics, safety, reliability, latency, and cost for LLMs, agents, and RAG systems."
        keywords="AI checklist, evaluation, benchmarks, LLM, agents, RAG, safety, latency, cost"
        url="/resources/ai-evaluation-checklist-2025"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">AI Evaluation Checklist 2025</h1>
        <p className="text-lg text-gray-700 mb-6">
          Use this comprehensive checklist to stand up practical, production-grade evaluation for your AI systems.
          It covers functional quality, safety, reliability, latency, cost, and operations.
        </p>
        <div className="grid gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-900 mb-2">Functional Quality</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
              <li>Define task success criteria and acceptance thresholds</li>
              <li>Groundedness checks with citation validation</li>
              <li>Golden dataset with human-labeled examples</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-900 mb-2">Safety & Compliance</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
              <li>Red team prompts and jailbreak resistance testing</li>
              <li>PII handling and privacy controls verified</li>
              <li>Abuse and policy violation detection</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-900 mb-2">Latency & Cost</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
              <li>Track P50/P95 latency and throughput</li>
              <li>Token usage budgets and cost alerts</li>
              <li>Caching and tool selection policies</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-900 mb-2">Reliability & Ops</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
              <li>Retries, fallbacks, and circuit breakers</li>
              <li>Eval runs in CI with regression gates</li>
              <li>Drift detection and dataset refresh cadence</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <a href="/blog/ai-benchmarking-and-evaluation-2025" className="text-blue-600 font-medium">Read the full guide →</a>
        </div>
      </div>
    </div>
  );
}

