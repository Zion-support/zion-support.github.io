import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Operational Evidence‑Led Decisions — Blueprint',
  description:
    'Centralize evals, incidents, approvals, and KPIs to drive auditable, safe, and cost‑aware decisions for autonomous agent platforms.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Operational Evidence‑Led Decisions — Blueprint</h1>
          <p className="text-lg opacity-90">How to make production decisions with eval evidence, SLOs, and audit‑ready records.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <p>
          Operating autonomous agent platforms safely requires decisions grounded in evidence. This blueprint describes
          how to centralize evaluation artifacts, incidents, approvals, and KPIs to enable repeatable, auditable, and
          cost‑aware decisions across the software lifecycle.
        </p>

        <h2>Core Evidence Artifacts</h2>
        <ul>
          <li>Evaluation runs with versioned prompts, datasets, and pass‑rate summaries</li>
          <li>Change approvals linked to SLO budgets and policy‑as‑code checks</li>
          <li>Incident reports with root cause, mitigations, and prevention actions</li>
          <li>Operational KPIs: safety violations, cost per task, latency, success rate</li>
        </ul>

        <h2>Decision Workflows</h2>
        <ul>
          <li>Attach eval gates to CI, canary, and ramps; block on failures</li>
          <li>Require approval evidence for high‑risk model or tool changes</li>
          <li>Automate rollbacks when SLO error budgets are exceeded</li>
          <li>Record every decision with links to source evidence for audit</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="m-0">Related resources</h3>
          <ul>
            <li><Link href="/blog/ai-2026-agent-platform-slos-best-practices">Agent Platform SLOs</Link></li>
            <li><Link href="/blog/ai-2026-safe-rollouts-in-production">Safe Rollouts in Production</Link></li>
            <li><Link href="/content/ai-2026-operational-excellence-handbook">Operational Excellence Handbook</Link></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

