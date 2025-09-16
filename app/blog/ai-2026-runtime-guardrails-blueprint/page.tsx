import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

export const metadata = {
  title: 'AI 2026: Runtime Guardrails Blueprint',
  description: 'Design runtime guardrails for safe tool use: isolation, permissions, eval gates, and deep telemetry.',
  keywords: [
    'AI 2026',
    'runtime guardrails',
    'policy-as-code',
    'risk-tiered permissions',
    'sandboxing',
    'observability',
    'eval gates'
  ],
};

export default function RuntimeGuardrailsBlueprint() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI 2026: Runtime Guardrails Blueprint"
        description="Design runtime guardrails for safe tool use: isolation, permissions, eval gates, and deep telemetry."
        keywords="AI 2026, runtime guardrails, policy-as-code, risk-tiered permissions, sandboxing, observability, eval gates"
        url="/blog/ai-2026-runtime-guardrails-blueprint"
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🛡️ Runtime Guardrails 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Runtime Guardrails Blueprint</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ship safer autonomy with isolation domains, risk‑tiered permissions, policy‑as‑code gates,
              and deep telemetry that proves behavior is safe in production.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Talk to an Expert</Link>
              <Link href="/blog/ai-2026-evaluation-driven-release-engineering" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700">Eval‑Driven Releases</Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Runtime Guardrails?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Foundation models can make unsafe calls, leak data, or exceed budgets if left unchecked.
                Runtime guardrails bring principled control: sandboxing tools, enforcing permissions by risk tier,
                verifying citations, and gating actions with evaluations before they impact users.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Core Building Blocks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold mb-2">Isolation Domains</h4>
                  <p className="text-gray-600">Process, network, and data sandboxing per capability and tenant.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold mb-2">Risk‑Tiered Permissions</h4>
                  <p className="text-gray-600">Explicit allowlists, scopes, quotas, and approvals per risk level.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold mb-2">Policy‑as‑Code</h4>
                  <p className="text-gray-600">Declarative guardrails for input/output validation and action gating.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold mb-2">Deep Telemetry</h4>
                  <p className="text-gray-600">Traces, citations, error budgets, and cost to prove safe behavior.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Reference Flow</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Authenticate agent identity and load policy bundle.</li>
                <li>Scope tools and data by risk tier; start sandboxed runtime.</li>
                <li>Evaluate planned actions; gate on policy and eval scores.</li>
                <li>Execute with tracing and cost controls; auto‑rollback on breach.</li>
                <li>Publish evidence: evaluations, incidents, approvals, and KPIs.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to implement guardrails?</h2>
            <p className="text-xl opacity-90 mb-8">We design and deploy runtime guardrails with eval gates and observability.</p>
            <Link href="/contact" className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Book a workshop</Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog/ai-2026-evaluation-driven-release-engineering" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Evaluation‑Driven Releases</h3>
                <p className="text-gray-600">Wire eval gates and rollback into your release pipelines.</p>
              </Link>
              <Link href="/blog/ai-2026-live-evals-in-production-practical-guide" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Evals in Production</h3>
                <p className="text-gray-600">Continuous evaluation with policy‑gated promotions.</p>
              </Link>
              <Link href="/blog/ai-2026-production-evidence-hub-blueprint" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Production Evidence Hub</h3>
                <p className="text-gray-600">Centralize evaluations, incidents, approvals, and KPIs.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

