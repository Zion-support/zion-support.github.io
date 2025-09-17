import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Safe Rollouts in Production',
  description: 'Eval-gated deployments, progressive exposure, and rollback strategies for autonomous agents in production.'
};

export default function SafeRollouts2026Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI 2026: Safe Rollouts in Production</h1>
      <p className="text-gray-600 mb-8">Eval-gated deployments, progressive exposure, and rollback strategies for autonomous agents in production.</p>

      <section className="prose prose-indigo max-w-none">
        <h2>Key Concepts</h2>
        <ul>
          <li>Pre-merge gates backed by evaluation harnesses</li>
          <li>Canary and shadow deployments with automatic rollback</li>
          <li>Risk-tiered tool permissions and policy-as-code</li>
          <li>Live safety and reliability SLOs</li>
        </ul>

        <h2>Implementation Steps</h2>
        <ol>
          <li>Define critical evaluation suites for core scenarios</li>
          <li>Integrate pass/fail thresholds into CI/CD</li>
          <li>Roll out via canary and monitor key SLOs</li>
          <li>Automate rollback on SLO or eval regression</li>
        </ol>
      </section>

      <div className="mt-10 flex gap-3">
        <Link href="/blog/ai-2026-autonomous-evidence-led-operations" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Evidence‑Led Ops</Link>
        <Link href="/content/ai-2026-evaluation-hub" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evaluation Hub</Link>
      </div>
    </main>
  );
}

