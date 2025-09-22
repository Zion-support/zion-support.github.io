import Link from 'next/link';
import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';

export const metadata = {
  keywords: ['LLM evals', 'AI maturity model', 'AI governance', 'evaluation harness']
};

export default function LLMEvalsMaturityModel2026() {
  return (
    <ErrorBoundary>
      

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🧪 NEW FRAMEWORK</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI 2026: LLM Evals Maturity Model</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              A staged path from ad-hoc testing to continuous, risk-tiered evaluation with governance and observability.
            </p>
            <Link href="/contact" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request the toolkit</Link>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Maturity Stages</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-8">
              <li>Ad-hoc: manual spot checks and anecdotes</li>
              <li>Harnessed: scripted test suites, golden answers, datasets</li>
              <li>Continuous: CI-integrated evals with thresholds and gates</li>
              <li>Risk-tiered: policies by use-case criticality and data sensitivity</li>
              <li>Autonomous: real-time monitoring with rollback and safe modes</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Metrics</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Factuality, robustness, bias/fairness, and safety incidents</li>
              <li>Task success rate, latency budgets, and cost ceilings</li>
              <li>Drift detection and retraining effectiveness</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h4 className="text-xl font-bold text-yellow-900 mb-2">Adoption Tips</h4>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Start with business-critical tasks and define SLOs</li>
                <li>Automate evals in CI before promoting models to prod</li>
                <li>Instrument runtime with action-level traces and labels</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Get the evaluation templates</h4>
              <p className="text-gray-700 mb-4">Download ready-to-use harnesses and golden datasets to accelerate your evals program.</p>
              <Link href="/contact" className="inline-block text-purple-600 font-semibold hover:text-purple-800">Request templates →</Link>
            </div>
          </div>
        </article>
      </div>
    </ErrorBoundary>
  );
}