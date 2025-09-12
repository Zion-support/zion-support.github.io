import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Governed Agentic Workflows: Practical Blueprints for 2025',
  description: 'How to design governed agentic workflows with policy gates, auditability, and measurable ROI in 2025.',
  keywords: ['agentic workflows', 'governance', 'policy', 'observability', 'AI agents', 'ROI'],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">NEW • Sep 12, 2025</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Governed Agentic Workflows: Practical Blueprints for 2025</h1>
          <p className="text-lg text-gray-700 mb-6">
            A concise blueprint for building governed agentic workflows with policy controls, audit trails, and operational evaluation—ready for enterprise adoption.
          </p>

          <div className="flex flex-wrap gap-2 text-sm mb-8">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Governance</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Agents</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Observability</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Safety</span>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Architecture Overview</h2>
            <p>
              Governed agentic systems combine orchestration, policy enforcement, and evaluation. Use declarative workflows with policy checks before and after tool calls, with structured logs for compliance.
            </p>
            <ul>
              <li>Policy engine integrated at plan, act, and observe steps</li>
              <li>Typed tool schemas and argument validation</li>
              <li>Operational evals for quality, cost, and latency</li>
              <li>Human-on-the-loop escalation and overrides</li>
            </ul>

            <h2>Implementation Steps</h2>
            <ol>
              <li>Define policies as code and align to risk tiers.</li>
              <li>Adopt a workflow DSL with explicit gates and audits.</li>
              <li>Instrument spans, metrics, and structured events.</li>
              <li>Roll out with feature flags and guardrails.
              </li>
            </ol>

            <h2>KPIs</h2>
            <p>Track containment rate, rework, human time saved, P95 latency, and cost per successful task.</p>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/resources/agent-benchmarking-blueprint-2025" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get the Blueprint
            </Link>
            <Link href="/content-showcase" className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

