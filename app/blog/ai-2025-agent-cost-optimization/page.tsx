import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'AI Agent Cost Optimization 2025: Ship Faster, Spend Less',
  description: 'Practical patterns to reduce LLM and agent runtime costs without sacrificing product velocity or reliability. Budgets, caching, batching, model routing, eval-driven guardrails.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">AI Agent Cost Optimization 2025</h1>
          <p className="text-lg opacity-90">
            Ship faster and spend less with pragmatic optimization patterns for LLM apps and agentic workflows. Learn
            how to combine model-routing, caching, request-batching, streaming, and eval-driven guardrails to achieve
            30–60% cost reduction while improving latency and reliability.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <h2>Key Levers</h2>
          <ul>
            <li>Tiered model routing with fallbacks and guardrails</li>
            <li>Prompt compression, response truncation, and structured outputs</li>
            <li>Vector + results caching with invalidation strategies</li>
            <li>Batching, parallelization, and streaming responses</li>
            <li>Cost, latency, and safety evals in CI and production</li>
          </ul>

          <h2>Reference Architecture</h2>
          <p>
            Use a policy layer to decide models, temperature, and tools per task; instrument with tracing, metrics,
            and budgets; and continuously evaluate outputs for quality, cost, and safety.
          </p>

          <h2>ROI Snapshot</h2>
          <p>
            Teams typically see 35–55% cost reductions and up to 40% latency improvement after implementing these
            patterns.
          </p>
        </article>

        <div className="mt-10 flex gap-3">
          <Link href="/resources/ai-evaluation-checklist-2025" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Get the Evaluation Checklist
          </Link>
          <Link href="/content-showcase" className="border border-gray-300 px-4 py-2 rounded-lg">
            More Content
          </Link>
        </div>
      </main>
    </div>
  );
}

