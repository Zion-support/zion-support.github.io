// @ts-nocheck
import React from 'react';
import SEO from '../../../components/SEO';

export default function AIAgentArchitectureGuide2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Agent Architecture Guide 2025"
        description="Design production-grade AI agent systems with guardrails, evals, memory, and orchestration."
        keywords="AI agents, guardrails, evals, LangGraph, orchestration, observability"
        url="/resources/ai-2025-agent-architecture-guide"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Agent Architecture Guide 2025</h1>
        <p className="text-lg text-gray-700 mb-8">
          A practical reference for architecting AI agents in production: policy guardrails, offline/online evals,
          memory strategies, tool-use patterns, cost controls, and full-stack observability.
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-3">Included frameworks</h2>
          <ul className="list-disc pl-6 text-emerald-900 space-y-2">
            <li>Reference agent graph (LangGraph) with retries and fallbacks</li>
            <li>Safety guardrails and prompt hardening patterns</li>
            <li>Evals harness with golden datasets and regression gates</li>
            <li>Tracing and analytics with OpenTelemetry</li>
            <li>Runbook for incident response and rollback</li>
          </ul>
        </div>

        <a href="#" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Download PDF</a>
      </div>
    </div>
  );
}

