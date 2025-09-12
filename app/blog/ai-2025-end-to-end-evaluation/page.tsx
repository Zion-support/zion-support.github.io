import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'End-to-End Evaluation for AI Systems in 2025 | Zion Tech Group',
  description: 'Operational evaluation for LLM and agentic systems: quality, latency, cost, safety, reliability, and business KPIs.',
  keywords: 'AI evaluation, E2E, reliability, latency, cost, safety, KPIs, AI 2025',
  openGraph: {
    title: 'End-to-End Evaluation for AI Systems in 2025',
    description: 'A practical framework for continuous evaluation across quality, latency, cost, safety, and reliability.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Evaluation', 'Reliability', 'Safety']
  }
};

export default function EndToEndEvaluation2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              End-to-End Evaluation for AI Systems in 2025
            </h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div>Zion Tech Group</div>
              <div>September 12, 2025</div>
              <div>19 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Point-in-time benchmarks are not enough. Production AI requires continuous, operational
            evaluation: model quality, latency budgets, cost limits, safety constraints, and reliability
            SLOs tied directly to business KPIs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Evaluation Dimensions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Task quality: rubric-based graders and golden sets</li>
            <li>Latency: p50/p95 targets and adaptive routing controls</li>
            <li>Cost: request budgets, caching, and model mix policies</li>
            <li>Safety: jailbreak resistance, toxicity, leakage prevention</li>
            <li>Reliability: retries, fallbacks, timeouts, circuit breaking</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Continuous Evals Pipeline</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Automatic sampling of production traffic with anonymization</li>
              <li>Shadow testing for new prompts, tools, and models</li>
              <li>Alerting on regression thresholds and anomaly detection</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Safety & Guardrails</h3>
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Adversarial red teaming and auto-jailbreak testing</li>
              <li>Policy enforcement on inputs/outputs with explainability</li>
              <li>Evidence requirements and source citation checks</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need an Evals Program?</h3>
            <p className="text-gray-700 mb-6">
              We build continuous evaluation systems aligned to your reliability SLOs and cost targets,
              with automated dashboards and guardrails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">
                Get a Free Assessment
              </Link>
              <Link href="/resources" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}