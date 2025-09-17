import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agent Rollback Runbooks',
  description: 'Scorecard-driven rollback patterns for safe, auditable agent operations.'
};

export default function AgentRollbackRunbooksPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm text-gray-500 mb-4">
        <Link href="/content" className="hover:underline">← Back to Content</Link>
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Agent Rollback Runbooks</h1>
      <p className="text-gray-600 mb-8">
        Practical rollback procedures tied to evaluation scorecards, incidents, and approvals to ensure
        safe autonomy. Use these runbooks to reduce MTTR and contain blast radius.
      </p>
      <section className="prose max-w-none">
        <h2>Signals to Watch</h2>
        <ul>
          <li>SLO breaches on reliability, safety, or cost</li>
          <li>Online eval regressions beyond guard bands</li>
          <li>Incident containment timers elapsed</li>
        </ul>
        <h2>Rollback Levels</h2>
        <ol>
          <li>Disable risky tools; restrict to read-only</li>
          <li>Route to safer models and higher grounding thresholds</li>
          <li>Revert to previous agent policy or version</li>
        </ol>
        <h2>Evidence Capture</h2>
        <p>Bundle traces, evals, and policy events for auditability and learning reviews.</p>
      </section>
    </main>
  );
}

