import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agentic Platform Safety Blueprint',
  description: 'Practical guardrails, eval gates, and policy-as-code patterns to ship safe autonomy.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <article className="prose prose-slate lg:prose-lg">
        <h1>AI 2026: Agentic Platform Safety Blueprint</h1>
        <p>
          This blueprint distills the most effective patterns we have seen for
          operating agent platforms safely in production. It focuses on
          evaluation gates, runtime guardrails, risk-tiered tool use, and
          policy-as-code, all tied together by an audit-ready evidence hub.
        </p>

        <h2>Key Practices</h2>
        <ul>
          <li>Eval gates with scorecards and rollback contracts</li>
          <li>Runtime guardrails with approvals and blast-radius limits</li>
          <li>Risk-tiered tool use with sandboxing and allowlists</li>
          <li>Policy-as-code for approvals, budgets, and escalation paths</li>
          <li>Unified evidence hub across releases, incidents, and audits</li>
        </ul>

        <h2>Implementation Quickstart</h2>
        <ol>
          <li>Define SLAs/SLOs and map them to evaluation scenarios</li>
          <li>Set up gating in CI/CD with pass/fail thresholds</li>
          <li>Instrument tracing and capture decision evidence</li>
          <li>Roll out risk tiers for tools with approvals</li>
          <li>Publish policies as code and version them</li>
        </ol>

        <div className="not-prose mt-8 flex gap-3">
          <Link href="/blog/ai-2026-policy-as-code-blueprint" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700">Policy-as-Code</Link>
          <Link href="/blog/ai-2026-reliable-autonomy-operations" className="inline-block border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:bg-slate-50">Reliable Autonomy</Link>
        </div>
      </article>
    </main>
  );
}

