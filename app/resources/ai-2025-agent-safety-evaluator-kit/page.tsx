import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Agent Safety Evaluator Kit 2025',
  description:
    'Downloadable evaluators, policies, and test cases to validate agent safety across prompt injection, data leakage, tool abuse, and harmful outputs.',
  keywords: ['agent safety', 'evaluators', 'red teaming', 'guardrails', 'policy', 'llm'],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">NEW • Sep 12, 2025</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Agent Safety Evaluator Kit 2025</h1>
          <p className="text-lg text-gray-700 mb-6">
            A practical kit with reusable evaluators, sample red-team prompts, policy templates, and a scoring rubric to validate safety for LLM apps and agent systems.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2>What’s Inside</h2>
            <ul>
              <li>Evaluator templates for prompt injection, DLP, tool misuse, and harmful content</li>
              <li>Reference policy for inputs, tool calls, and outputs</li>
              <li>Red-team corpus and regression suite structure</li>
              <li>Operational dashboard metrics and SLOs</li>
            </ul>

            <h2>How to Use</h2>
            <ol>
              <li>Integrate evaluators into CI and pre-deploy checks</li>
              <li>Track violations by category and severity</li>
              <li>Automate policy gating with allow/deny lists and sandboxed tools</li>
            </ol>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/resources/ai-governance-starter-kit-2025" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Get Governance Starter Kit
            </Link>
            <Link href="/contact" className="border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Request Workshop
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

