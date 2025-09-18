import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Safe Evaluation Hub — Lifecycle Gates for Reliable Autonomy',
  description: 'Design an evaluation-first hub with lifecycle gates, risk tiers, and continuous telemetry to ship safer, reliable autonomous agents at scale.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Safe Evaluation Hub</h1>
          <p className="text-lg md:text-xl opacity-90">Lifecycle gates, risk tiers, and continuous telemetry to ship safer autonomy.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Why an Evaluation Hub?</h2>
          <p>
            Enterprise agent platforms require reliable, repeatable evaluation. A centralized hub enables
            standardized scenarios, metrics, baselines, and policy-as-code guardrails applied across the lifecycle.
          </p>
          <h3>Core Capabilities</h3>
          <ul>
            <li>Lifecycle gates for dev, staging, canary, and prod</li>
            <li>Risk tiering and least-privilege tool permissions</li>
            <li>Continuous regression detection with automatic rollback hooks</li>
            <li>Telemetry overlays for safety, cost, and reliability</li>
          </ul>
          <h3>Outcomes</h3>
          <ul>
            <li>Reliability: 99.9% target SLOs sustained via eval gates</li>
            <li>Faster releases with guardrails and audit-ready evidence</li>
            <li>Incident reduction and shorter MTTR through gated changes</li>
          </ul>
          <p>
            Pair this hub with your CI to block risky changes and promote only evaluation-approved variants.
          </p>
          <p>
            Continue with the{' '}
            <Link href="/blog/ai-2026-eval-gated-autonomy" className="text-purple-700 underline">Eval‑Gated Autonomy overview</Link>{' '}
            and the{' '}
            <Link href="/content/ai-2026-evaluation-runbook-starter-kit" className="text-purple-700 underline">Evaluation Runbook Starter Kit</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

