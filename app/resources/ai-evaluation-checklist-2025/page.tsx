import React from 'react';
import SEO from '../../../components/SEO';

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

