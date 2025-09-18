import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-sm text-purple-100/90 mb-3">
            <Link href="/blog" className="hover:underline">← Back to Blog</Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Production Agent Runbooks — Templates (2026)</h1>
          <p className="mt-3 text-purple-100/90 max-w-3xl">
            Ready-to-use, copy‑paste runbook templates to standardize incident response, on‑call, rollbacks, and
            evaluation‑gated releases for autonomous agents in production.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <article className="prose prose-lg max-w-none">
          <h2>What These Templates Cover</h2>
          <ul>
            <li>On‑call triage and escalation for agent incidents</li>
            <li>Rollback and containment when autonomy crosses risk thresholds</li>
            <li>Evaluation‑gated deploys with pass/fail criteria</li>
            <li>Post‑incident reviews with learning loop actions</li>
          </ul>

          <h2>Quick Start</h2>
          <ol>
            <li>Clone templates into your runbooks repository</li>
            <li>Customize ownership, SLOs, and guardrail policies</li>
            <li>Integrate eval checks into CI/CD and runtime gates</li>
            <li>Tabletop test with simulated failure modes</li>
          </ol>

          <h2>Download the Templates</h2>
          <p>
            Want the full template pack as Markdown and JSON? Get access and we will send you the latest version with
            implementation notes.
          </p>

          <div className="not-prose mt-8 flex gap-3">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700">
              Request Template Pack →
            </Link>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 rounded-md border border-purple-600 text-purple-700 hover:bg-purple-50">
              Explore More Articles
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

