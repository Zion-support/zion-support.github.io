import SEO from '../../components/SEO';

export const metadata = {
  title: 'Agent Observability 2026 - Deep Dive and Implementation Guide',
  description:
    'Implementation guide for agent observability: metrics taxonomy, tracing design, eval harness integration, and actionable dashboards.',
  keywords: [
    'agent observability',
    'metrics',
    'tracing',
    'evals',
    'dashboards',
  ],
};

export default function AgentObservability2026Page() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Agent Observability 2026"
        description="Metrics taxonomy, distributed tracing, eval harness integration, and dashboards"
        keywords="observability, agents, metrics, tracing, evals"
        url="/content/agent-observability-2026"
      />

      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold opacity-90">Guide • 2025-09-16</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Agent Observability 2026</h1>
          <p className="text-lg md:text-xl opacity-90 mt-4 max-w-3xl">A practical blueprint for instrumenting, evaluating, and monitoring agent systems end to end.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Metrics Taxonomy</h2>
          <ul>
            <li>Business: conversion lift, time-to-resolution, ROI per workflow</li>
            <li>System: P95/P99 latencies, error rates, token/cost budgets</li>
            <li>Safety: restricted tool attempts, hallucination evals, data egress</li>
          </ul>

          <h3>Tracing Design</h3>
          <p>Capture spans for planning, retrieval, tool invocations, and generation. Attach inputs/outputs with privacy-safe redaction and link eval artifacts.</p>

          <h3>Eval Harness Integration</h3>
          <p>Run offline eval suites, pre-deploy canaries, and online shadow tests. Gate releases on eval SLOs and monitor drift continuously.</p>

          <h3>Dashboards and Actionability</h3>
          <p>Build role-based dashboards for SRE, security, and product. Trigger automated remediation and degraded modes on SLO violations.</p>
        </div>
      </main>
    </div>
  );
}

