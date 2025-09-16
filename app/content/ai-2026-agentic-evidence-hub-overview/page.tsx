import Link from 'next/link';

export const metadata = {
  title: 'Agentic Evidence Hub — Executive Overview (2026)',
  description: 'Centralize evals, releases, incidents, guardrails, and billing controls for audit-ready autonomy.',
};

export default function AgenticEvidenceHubOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Agentic Evidence Hub — Executive Overview</h1>
          <p className="mt-4 text-lg text-gray-700">
            An evidence-first operations model that unifies evaluation gates, release scorecards, incidents, guardrails,
            and spend controls—so you can ship autonomous systems safely and prove it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog/ai-2026-evidence-hub-architecture" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Architecture</Link>
            <Link href="/blog/ai-2026-agentic-billing-controls" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Billing Controls</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Why an Evidence Hub?</h2>
          <p>
            As enterprises adopt autonomous agents, leaders need traceable evidence of safety, quality, reliability, and cost.
            An Agentic Evidence Hub consolidates the artifacts and controls you already use—eval results, release
            scorecards, incidents, guardrails, approvals, and spend controls—into one authoritative system of record.
          </p>

          <h3>What it centralizes</h3>
          <ul>
            <li>Evaluation gates and scorecards across pre‑prod and production</li>
            <li>Release readiness, rollback contracts, and change approvals</li>
            <li>Incidents, mitigations, and post‑incident action tracking</li>
            <li>Guardrails and policy‑as‑code for governed tool use</li>
            <li>Budgets, approvals, and billing controls for predictable spend</li>
          </ul>

          <h3>Business outcomes</h3>
          <ul>
            <li>Audit‑ready autonomy with traceable evidence</li>
            <li>Reduced incident frequency and faster mean time to recovery</li>
            <li>Predictable cost envelopes with spend guardrails</li>
            <li>Accelerated releases gated by measurable quality</li>
          </ul>

          <h3>Get started</h3>
          <p>
            Start small with a shared scorecard and a minimum viable evidence schema. Expand to runtime evals,
            governed tool use, and centralized incident workflows. Connect finance systems to enforce budgets and
            approvals for high‑risk operations.
          </p>

          <p>
            See also: <Link href="/blog/ai-2026-eval-gated-ci-cd-blueprint">Eval‑Gated CI/CD</Link>,{' '}
            <Link href="/blog/ai-2026-agentic-observability-deep-dive">Agentic Observability</Link>,{' '}
            and <Link href="/blog/ai-2026-reliable-autonomy-operations">Reliable Autonomy Operations</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

