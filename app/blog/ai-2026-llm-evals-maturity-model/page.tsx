import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'AI 2026: LLM Evals Maturity Model',
  description: 'A comprehensive maturity model for LLM evaluation systems and practices.'
};

export default function LLMEvalsMaturityModelPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <div className="text-sm font-semibold text-purple-700 mb-2">Maturity Model</div>
        <h1 className="text-4xl font-bold text-gray-900">
          AI 2026: LLM Evals Maturity Model
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          A comprehensive framework for assessing and improving LLM evaluation capabilities across organizations.
        </p>
      </header>

      <section className="space-y-8">
        <article className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Level 1: Basic Evaluation</h2>
          <p className="text-gray-700">
            Initial evaluation capabilities with basic metrics and manual testing processes.
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Manual test case creation and execution</li>
            <li>Basic accuracy and performance metrics</li>
            <li>Ad-hoc evaluation processes</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Level 2: Systematic Evaluation</h2>
          <p className="text-gray-700">
            Structured evaluation processes with automated testing and standardized metrics.
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Automated test execution pipelines</li>
            <li>Standardized evaluation metrics</li>
            <li>Regular evaluation schedules</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Level 3: Advanced Evaluation</h2>
          <p className="text-gray-700">
            Sophisticated evaluation systems with continuous monitoring and advanced analytics.
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Continuous evaluation monitoring</li>
            <li>Advanced analytics and reporting</li>
            <li>Integration with CI/CD pipelines</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Level 4: Mature Evaluation</h2>
          <p className="text-gray-700">
            Enterprise-grade evaluation systems with predictive capabilities and governance.
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Predictive evaluation capabilities</li>
            <li>Comprehensive governance frameworks</li>
            <li>Cross-organizational evaluation standards</li>
          </ul>
        </article>
      </section>

      <nav className="mt-12 flex flex-wrap gap-3">
        <Link href="/blog" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">
          Back to Blog
        </Link>
      </nav>
    </main>
  );
}