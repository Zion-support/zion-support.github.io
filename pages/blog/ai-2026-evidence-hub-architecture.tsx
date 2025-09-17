import Link from 'next/link';

export default function EvidenceHubArchitecture() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg">
        <h1>AI 2026: Evidence Hub Architecture</h1>
        <p>
          A production Evidence Hub centralizes evaluation results, traces, incidents, releases,
          and policy events to give teams audit-ready visibility and accelerate safe change.
        </p>
        <h2>Core Capabilities</h2>
        <ul>
          <li>Evaluation ingestion and scorecard storage</li>
          <li>Trace correlation across agents, tools, and datasets</li>
          <li>Incident tracking with post-incident learning loops</li>
          <li>Release governance via evaluation gates and rollback contracts</li>
          <li>Policy-as-code events with approvals and risk tiers</li>
        </ul>
        <h2>Reference Links</h2>
        <ul>
          <li><Link href="/blog/ai-2026-eval-gated-ci-cd-blueprint">Eval-Gated CI/CD Blueprint</Link></li>
          <li><Link href="/blog/ai-2026-agentic-observability-deep-dive">Agentic Observability Deep Dive</Link></li>
        </ul>
      </article>
    </main>
  );
}

