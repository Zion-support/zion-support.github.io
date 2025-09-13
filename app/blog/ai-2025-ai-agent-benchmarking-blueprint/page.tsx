import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Agent Benchmarking Blueprint 2025: Decision-Ready Evals',
  description:
    'Comprehensive blueprint for benchmarking AI agents across quality, latency, cost, and safety with operational evaluators.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 prose prose-gray">
      <h1>Agent Benchmarking Blueprint 2025</h1>
      <p>
        This blueprint provides a pragmatic, production-oriented approach to evaluating agentic systems across
        quality, latency, cost, and safety. It includes evaluator design patterns, data generation strategies,
        and governance guardrails to make evaluation decision-ready.
      </p>
      <h2>Evaluation Dimensions</h2>
      <ul>
        <li>Quality: task success, faithfulness, completeness</li>
        <li>Latency: p95 per step, workflow critical path</li>
        <li>Cost: token budgets, cache hit-rates, routing efficiency</li>
        <li>Safety: jailbreak resistance, policy adherence, red-team coverage</li>
      </ul>
      <h2>Operational Evals</h2>
      <p>
        Run evaluators continuously in lower environments and shadow prod to catch regressions early. Instrument
        spans and attach evaluator outcomes to traces for fast debugging.
      </p>
      <div className="not-prose mt-8">
        <Link href="/resources/agent-benchmarking-blueprint-2025" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Download the Blueprint →
        </Link>
      </div>
    </main>
  );
}

