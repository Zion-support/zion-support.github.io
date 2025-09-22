import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Evaluation Harness Blueprint - Zion Tech Group',
  description:
    'Build an evaluation harness for autonomous agents with scenario suites, metrics, and governance to ship reliable AI.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Evaluation Harness Blueprint</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Design an evaluation-first pipeline with scenario generation, golden sets, and automatic policy gates for agent releases.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Architecture</h2>
          <ol>
            <li>Scenario and dataset generation</li>
            <li>Metric computation and reliability scoring</li>
            <li>Policy gates and governance checks</li>
            <li>Dashboards and incident workflows</li>
          </ol>

          <h2>Metrics</h2>
          <ul>
            <li>Task success and constraint violations</li>
            <li>Safety, security, and privacy scores</li>
            <li>Latency, cost, and consistency</li>
          </ul>

          <h2>Resources</h2>
          <p>
            See also the LLM Evals Maturity Model and Agent Safety Certification.
          </p>
          <p className="flex gap-3">
            <Link href="/blog/ai-2026-llm-evals-maturity-model" className="inline-block border border-purple-600 text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50">LLM Evals Model</Link>
            <Link href="/content/ai-2026-agent-safety-certification" className="inline-block border border-purple-600 text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50">Safety Certification</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

