import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            GenAI Evaluation Playbook 2025: Ship Quality with Confidence
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Practical evals for quality, safety, and cost. Judge models, CI gates, and dashboards that teams actually use.
          </p>
          <div className="text-sm text-gray-500 mb-10">Published: 2025-09-11 · 9 min read · Category: AI Evaluation</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Why evals matter</h2>
          <p>
            Without continuous evaluation, LLM features regress silently. A lightweight system of judge models,
            golden sets, and CI gates keeps quality, safety, and cost within guardrails.
          </p>
          <h2>Minimal viable eval stack</h2>
          <ul>
            <li>Task-focused golden datasets versioned in your repo</li>
            <li>Automatic evals in CI with clear pass/fail thresholds</li>
            <li>Dashboards tracking quality, cost, and latency per feature</li>
          </ul>
          <h2>Rollout playbook</h2>
          <ol>
            <li>Pick top 3 user journeys; write 20-50 representative test cases each</li>
            <li>Add budget caps, latency SLOs, and quality thresholds</li>
            <li>Block merges on regressions; page on-cost spikes</li>
          </ol>
          <div className="mt-10">
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Get an evals starter kit for your team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

