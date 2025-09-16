import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Live Evals in Production — Practical Guide',
  description:
    'How to instrument, gate, and govern live evaluations in production to ship safer and faster.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Live Evals in Production — Practical Guide</h1>
          <p className="text-lg opacity-90">Instrument, gate, and govern with live evaluations to ship safer and faster.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <p>
          Live evaluations move beyond offline test sets to continuously assess real user journeys in
          production. By attaching evaluation gates to release stages and runtime traffic, teams can
          prevent regressions, control risk, and accelerate delivery.
        </p>

        <h2>Core Building Blocks</h2>
        <ul>
          <li>Scenario suites mapped to high-risk and high-value workflows</li>
          <li>Policy-as-code gates with thresholds for safety, quality, and latency</li>
          <li>Evidence capture: inputs, outputs, metrics, and decisions for auditability</li>
          <li>Automated rollback contracts with canary scorecards</li>
        </ul>

        <h2>Deployment Patterns</h2>
        <ul>
          <li>CI and staging eval gates to catch regressions early</li>
          <li>Canary release with continuous sampling and budgeted error rates</li>
          <li>Progressive rollout controlled by evaluation pass‑rates</li>
          <li>Post‑release monitoring with alerts tied to business KPIs</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="m-0">Related resources</h3>
          <ul>
            <li><Link href="/blog/ai-2026-eval-gated-ci-cd-blueprint">Eval‑Gated CI/CD Blueprint</Link></li>
            <li><Link href="/blog/ai-2026-operationalizing-live-evals-in-production-deep-dive">Operationalizing Live Evals</Link></li>
            <li><Link href="/content/ai-2026-evaluation-harness-blueprint">Evaluation Harness Blueprint</Link></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

