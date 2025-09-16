import React from 'react';

export const metadata = {
  title: 'AI 2026: Agentic Observability — Deep Dive',
  description:
    'Traces, evals, incidents, KPIs, and evidence pipelines for production-grade observability in autonomous agent platforms.',
};

export default function AgenticObservabilityDeepDivePage() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-white/80 text-sm font-semibold">New • 2026</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Agentic Observability — Deep Dive</h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Build rich telemetry for autonomous workflows: traces, evaluation signals, incidents, KPIs, and
            audit-ready evidence pipelines.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <section className="prose prose-lg max-w-none">
          <h2>Pillars of Agentic Observability</h2>
          <ul>
            <li><strong>Traces & Spans:</strong> end-to-end visibility across reasoning, tool calls, and data access</li>
            <li><strong>Eval Signals:</strong> quality, safety, and reliability metrics at runtime</li>
            <li><strong>Incidents:</strong> eval-gated triage, mitigation, and evidence capture</li>
            <li><strong>KPIs:</strong> user outcomes and business impact, not just system health</li>
            <li><strong>Evidence Hub:</strong> centralized artifacts for audits and postmortems</li>
          </ul>

          <h2>Reference Implementation</h2>
          <ol>
            <li>Adopt a unified trace schema for agent steps and tool events.</li>
            <li>Emit eval results as structured spans and link to scorecards.</li>
            <li>Standardize incident runbooks with rollback contracts and approvals.</li>
            <li>Automate evidence collection into a searchable hub.</li>
          </ol>
        </section>
      </main>
    </article>
  );
}

