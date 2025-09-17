import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Evidence Bundles Blueprint',
  description: 'Package traces, policy events, evals, and metrics into verifiable bundles.'
};

export default function EvidenceBundlesBlueprintPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm text-gray-500 mb-4">
        <Link href="/content" className="hover:underline">← Back to Content</Link>
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Evidence Bundles Blueprint</h1>
      <p className="text-gray-600 mb-8">
        Make decisions auditable by bundling the right artifacts around each release and incident. This
        blueprint shows what to collect, how to store it, and how to use it.
      </p>
      <section className="prose max-w-none">
        <h2>What To Bundle</h2>
        <ul>
          <li>Traces and key prompts/responses with privacy controls</li>
          <li>Evaluation results and scorecards</li>
          <li>Policy decisions and approvals</li>
          <li>Incident and rollback events</li>
        </ul>
        <h2>Storage Patterns</h2>
        <p>Use append-only logs with immutable references and lifecycle policies.</p>
        <h2>Operational Uses</h2>
        <ul>
          <li>Postmortems and learning reviews</li>
          <li>Audit and compliance attestations</li>
          <li>Release gating and risk scoring</li>
        </ul>
      </section>
    </main>
  );
}

