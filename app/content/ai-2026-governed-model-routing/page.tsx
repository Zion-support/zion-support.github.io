import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Governed Model Routing',
  description: 'Latency, cost, and quality-aware routing with policy gates and live evaluations.'
};

export default function GovernedModelRoutingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm text-gray-500 mb-4">
        <Link href="/content" className="hover:underline">← Back to Content</Link>
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Governed Model Routing</h1>
      <p className="text-gray-600 mb-8">
        Design routing that aligns budget, latency, and quality targets with policy-as-code guardrails and
        continuous evaluations. This guide outlines practical patterns to ship predictable, reliable AI.
      </p>

      <section className="prose max-w-none">
        <h2>Why Governed Routing</h2>
        <p>
          Uncontrolled routing leads to cost surprises and variable quality. Governed routing makes
          decisions explicit, auditable, and resilient by tying them to SLOs and business constraints.
        </p>
        <h2>Key Controls</h2>
        <ul>
          <li>Budgets and quotas enforced via policy engines</li>
          <li>Latency bands with graceful model and parameter fallbacks</li>
          <li>Online evaluations to monitor groundedness and safety</li>
          <li>Rollback triggers wired to incident response</li>
        </ul>
        <h2>Reference Flow</h2>
        <ol>
          <li>Preflight checks select candidate routes obeying policy</li>
          <li>Shadow or canary evaluate outcome quality</li>
          <li>Live scorecards drive promotions or rollback</li>
        </ol>
        <p>
          Start with one high-impact workflow and expand coverage as evaluation maturity grows.
        </p>
      </section>
    </main>
  );
}

