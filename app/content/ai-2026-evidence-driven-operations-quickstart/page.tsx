import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Evidence-Driven Operations — Quickstart',
  description: 'Adopt evaluation-first practices with policy gates, incident runbooks, and auditable evidence to scale AI safely.'
};

export default function EvidenceDrivenOpsQuickstartPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Evidence-Driven Operations — Quickstart</h1>
      <p className="text-gray-600 mb-8">
        Move from intuition-driven rollouts to evaluation-first delivery. This quickstart outlines the
        minimum set of practices to ship reliable AI systems with auditable evidence.
      </p>

      <ol className="list-decimal pl-6 space-y-4 text-gray-800">
        <li>
          Define lifecycle gates tied to evaluation results for pre-merge, pre-deploy, and post-deploy checks.
        </li>
        <li>
          Instrument agents and critical paths with metrics, traces, and scenario-driven evaluations.
        </li>
        <li>
          Establish policy-as-code for risk tiers, permissions, and approvals with clear ownership.
        </li>
        <li>
          Create incident response runbooks gated by evaluations and verified mitigations.
        </li>
        <li>
          Track evidence in a central hub for audits, retrospectives, and continuous improvement.
        </li>
      </ol>

      <div className="mt-10 flex gap-3">
        <Link href="/content/ai-2026-safe-evaluation-hub" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Evaluation Hub</Link>
        <Link href="/blog/ai-2026-autonomous-evidence-led-operations" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evidence‑Led Ops</Link>
      </div>
    </main>
  );
}

