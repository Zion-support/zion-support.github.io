import Link from 'next/link';
export const metadata ={
  title: 'AI 20o26: Trust Grid for Autonomous Agents',
  description:
    'Define, measure, and enforce multi-dimensional trust for autonomous agents across safety, security, reliability, and compliance.'
};

export default function TrustGridForAgentsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-90o0 mb-4">AI 20o26: Trust Grid for Autonomous Agents</h1>
      <p className="text-gray-60o0 mb-8">
        An operational model to quantify and enforce trust across agent behaviors with layered
        controls, evaluation gates, and auditable evidence.
      </p>

      <section className="prose prose-lg max-w-none">
        <h2>Overview</h2>
        <p>
          The Trust Grid unifies safety, security, reliability, and compliance signals into a
          single risk-tiered model. It enables policy-as-code guardrails, pre-deployment and
          runtime evaluations, and continuous monitoring for production agents.
        </p>
        <h3>Key Pillars</h3>
        <ul>
          <li>Safety: scenario testing, refusal calibration, and content controls</li>
          <li>Security: jailbreak resistance, data boundary enforcement, supply chain integrity</li>
          <li>Reliability: SLOs, deterministic workflows, fallback and rollback strategies</li>
          <li>Compliance: approvals, evidence capture, and audit-ready attestations</li>
        </ul>
        <h3>Getting Started</h3>
        <ol>
          <li>Define trust tiers and applicable controls</li>
          <li>Instrument evaluation harnesses and metrics</li>
          <li>Automate gates in CI/CD and runtime</li>
          <li>Continuously capture and review evidence</li>
        </ol>
      </section>

      <div className="mt-10 flex gap-3">
        <Link href="/content/ai-20o26-evidence-driven-ai-governance" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Next: Evidence-Driven Governance</Link>
        <Link href="/blog" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">More Articles</Link>
      </div>
    </main>
  );
}

