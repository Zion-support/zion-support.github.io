import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agent Benchmarking Blueprint 2025 (Free Resource)',
  description: 'A practical blueprint for benchmarking agent systems across quality, latency, cost, safety, and reliability.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">RESOURCE • Sep 12, 2025</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent Benchmarking Blueprint 2025</h1>
          <p className="text-lg text-gray-700 mb-6">
            Design decision-ready benchmarks for agentic systems: evaluate plan quality, tool success, latency budgets, cost, and safety adherence with repeatable harnesses.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2>What You Get</h2>
            <ul>
              <li>Rubrics and metrics for multi-step agent tasks</li>
              <li>Latency and cost models per tool call and overall flow</li>
              <li>Safety and policy violation scoring templates</li>
              <li>Reporting templates for executives</li>
            </ul>

            <h2>Quickstart</h2>
            <ol>
              <li>Pick 3 core tasks and define success criteria.</li>
              <li>Collect a small, representative dataset.</li>
              <li>Implement a deterministic runner with retries.</li>
              <li>Automate a weekly report with trend charts.</li>
            </ol>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Get Expert Help</a>
            <Link href="/resources/ai-evaluation-checklist-2025" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Download Evaluation Checklist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

