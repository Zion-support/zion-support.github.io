import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <header className="mb-8">
          <p className="text-sm text-gray-500">Sep 12, 2025 • 19 min read • Evaluation</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Agent & LLM Benchmarking Best Practices 2025
          </h1>
          <p className="text-lg text-gray-600">
            A practical guide to designing reliable, decision-ready benchmarks for models and agentic systems
            with safety, latency, and cost signals.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>What makes a benchmark trustworthy</h2>
          <ul>
            <li>Business-aligned tasks with clear acceptance thresholds</li>
            <li>Production-representative datasets and prompts with versioning</li>
            <li>Deterministic harness, retries, and seed control</li>
            <li>Track quality, latency P50/P95, and cost per task</li>
            <li>Guardrails and red-team cases to surface safety regressions</li>
          </ul>

          <h2>Minimal viable eval harness</h2>
          <ol>
            <li>Define tasks and success metrics tied to user outcomes</li>
            <li>Create curated fixtures and golden tests</li>
            <li>Capture traces with IDs and export JSON reports</li>
            <li>Automate pass/fail against thresholds in CI</li>
            <li>Share executive-friendly summaries</li>
          </ol>

          <p>
            Looking to operationalize evals? Explore our{' '}
            <Link href="/resources/ai-2025-evaluation-maturity-model" className="text-blue-600 hover:underline">
              Evaluation Maturity Model (Free)
            </Link>.
          </p>
        </div>
      </article>
    </main>
  );
}

