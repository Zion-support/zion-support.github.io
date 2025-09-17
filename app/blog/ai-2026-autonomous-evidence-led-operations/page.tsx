import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Autonomous Evidence‑Led Operations',
  description: 'Operate AI agents with auditable evidence: metrics, evals, and automated controls feeding decisions.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Autonomous Evidence‑Led Operations</h1>
          <p className="text-lg opacity-90">Decisions driven by evaluation evidence, not intuition — safe, compliant, cost‑efficient.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-emerald">
        <p>
          Establish a central evidence hub aggregating evaluations, telemetry, and policy outcomes. Use
          thresholds to gate changes, trigger incident playbooks, and justify audits. Close the loop with
          learning to improve agent behavior over time.
        </p>

        <h2>Operational Building Blocks</h2>
        <ul>
          <li>Evaluation registry with versioned scenarios and metrics</li>
          <li>Policy‑as‑code that encodes guardrails and approvals</li>
          <li>Automated evidence capture for releases and incidents</li>
          <li>Dashboards for SLOs, risk posture, and cost efficiency</li>
        </ul>

        <h2>Related Content</h2>
        <ul>
          <li><Link href="/blog/ai-2026-safe-rollouts-in-production">Safe Rollouts in Production</Link></li>
          <li><Link href="/content/ai-2026-safe-evaluation-hub">Safe Evaluation Hub</Link></li>
        </ul>
      </main>
    </div>
  );
}

