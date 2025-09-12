import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Model Evaluation Playbook 2025 | Zion Tech Group',
  description: 'Practical, production-ready evaluation for LLMs and agents: test design, metrics, and continuous evaluation workflows.',
  keywords: 'LLM evaluation, AI evals, agent testing, offline evals, canary, regression testing'
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-flex items-center bg-purple-500/20 text-purple-200 rounded-full px-4 py-1 text-sm">NEW • September 2025</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">AI Model Evaluation Playbook 2025</h1>
          <p className="mt-4 text-lg text-purple-100/90">Production-ready patterns for evaluating LLM apps and agent systems with confidence.</p>
        </div>

        <div className="prose prose-invert prose-lg">
          <p>
            Reliable AI delivery requires ruthless evaluation. This playbook shows how to design test sets,
            pick metrics, and run continuous evaluation for both LLM apps and multi-tool agent workflows.
          </p>
          <h2>What to Measure</h2>
          <ul>
            <li>Task success rate and constraint satisfaction</li>
            <li>Groundedness and factuality for RAG tasks</li>
            <li>Cost and latency budgets per scenario</li>
            <li>Tool usage correctness and safety policy adherence</li>
          </ul>
          <h2>Test Design</h2>
          <ul>
            <li>Curate realistic scenarios; avoid overfitting to happy paths</li>
            <li>Use golden outputs, LLM-as-judge with rubrics, and human spot checks</li>
            <li>Cover adversarial and safety-critical cases</li>
          </ul>
          <h2>Continuous Evaluation</h2>
          <ul>
            <li>Pre-merge offline evals gated by thresholds</li>
            <li>Shadow/canary with real traffic and rollback triggers</li>
            <li>Weekly regression suites and drift detection</li>
          </ul>
          <p>
            Ship faster with confidence by automating evals in CI and production. Tie results to SLOs and
            dashboards so teams can act on regressions immediately.
          </p>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/blog" className="bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Back to Blog</Link>
          <Link href="/resources" className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">Download Resources</Link>
        </div>
      </div>
    </div>
  );
}

