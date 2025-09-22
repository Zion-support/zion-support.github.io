import Link from 'next/link';

export const metadata = {
  title: 'Enterprise AI Security Blueprint (2025) | Zion Tech Group',
  description: 'Layered controls for model, data, runtime, and supply chain risk in enterprise AI systems.'
};

export default function EnterpriseAISecurityBlueprint2025Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 text-sm text-purple-700 font-semibold">Security</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise AI Security Blueprint (2025)</h1>
      <p className="text-gray-600 mb-8">
        A practical blueprint for establishing layered controls across model, data, runtime, and supply chain to
        secure enterprise AI systems while maintaining developer velocity and business impact.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Why a Blueprint Now</h2>
        <p>
          With AI moving into production across critical workflows, organizations need a clear, actionable security
          blueprint that aligns governance, engineering, and operations. This guide provides a battle-tested approach
          to reduce risk without slowing delivery.
        </p>

        <h2>Layered Controls</h2>
        <ul>
          <li><strong>Model</strong>: eval gates, jailbreak resistance, prompt injection defenses, output constraints.</li>
          <li><strong>Data</strong>: classification, tokenization, PII redaction, lineage, and access controls.</li>
          <li><strong>Runtime</strong>: policy-as-code, network egress control, secrets hygiene, sandboxing.</li>
          <li><strong>Supply Chain</strong>: model/proxy provenance, SBOM for AI, dependency integrity checks.</li>
        </ul>

        <h2>Operational Guardrails</h2>
        <p>
          Instrument your systems with standardized logging, incident taxonomies, and red-team drills. Establish SLOs
          for safety and reliability, not just latency and cost.
        </p>

        <h2>Getting Started</h2>
        <ol>
          <li>Define a minimal control baseline per risk tier.</li>
          <li>Automate checks in CI/CD with policy-as-code.</li>
          <li>Continuously evaluate models with realistic adversarial suites.</li>
        </ol>
      </div>

      <div className="mt-10 flex gap-4">
        <Link href="/contact" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Talk to Security Experts</Link>
        <Link href="/resources" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Explore Resources</Link>
      </div>
    </main>
  );
}

