import Link from 'next/link';
import React from 'react';
export const metadata = {
  keywords: [
    'agentic guardrails',
    'AI safety',
    'policy-as-code',
    'LLM evals',
    'runtime controls',
    'production AI',
    'observability',
  ],
};

export default function AgenticGuardrailsProductionBlueprintPage() {
  return (
    <div className="min-h-screen bg-white">
      

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6 text-sm text-purple-700 font-semibold">Production AI</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agentic Guardrails Production Blueprint</h1>
        <p className="text-gray-600 mb-8">
          A comprehensive guide to deploying agentic systems safely in production with robust guardrails, monitoring, and operational excellence.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>Key Principles</h2>
          <ul>
            <li>Policy-as-code for consistent enforcement</li>
            <li>Evaluation gates for safe deployments</li>
            <li>Runtime controls and monitoring</li>
            <li>Cost optimization and resource management</li>
          </ul>

          <h2>Implementation Guide</h2>
          <p>
            This blueprint provides step-by-step guidance for implementing production-ready agentic systems
            with comprehensive safety and reliability measures.
          </p>
        </div>

        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Get Started</Link>
          <Link href="/resources" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Learn More</Link>
        </div>
      </main>
    </div>
  );
}