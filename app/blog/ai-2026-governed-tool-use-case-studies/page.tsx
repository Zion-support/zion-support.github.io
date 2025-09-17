import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Governed Tool Use — Case Studies',
  description: 'Real case studies on policy-guarded tool use with risk tiers, sandboxes, and runtime checks in production agent systems.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI 2026: Governed Tool Use — Case Studies</h1>
          <p className="mt-4 text-gray-600">How enterprises implement policy-as-code, risk tiers, sandboxes, and runtime guardrails to enable safe, reliable tool use by autonomous agents.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <article className="prose prose-indigo max-w-none">
            <h2>Summary</h2>
            <p>These case studies cover governed tool use patterns including tiered permissions, isolation domains, audit logging, evaluation gates, and rollback contracts to prevent unsafe actions and regressions.</p>

            <h3>Case Study 1 — Finance Reconciliation</h3>
            <ul>
              <li>Risk tiers: read-only by default, write under eval gates</li>
              <li>Sandbox accounts for verification before promotion</li>
              <li>Runtime checks for transaction limits and anomaly scores</li>
            </ul>

            <h3>Case Study 2 — Customer Support Automations</h3>
            <ul>
              <li>Policy-as-code to restrict tool arguments and scopes</li>
              <li>Incident runbooks with agentic triage and escalation paths</li>
              <li>Continuous evaluations with real-world scenario suites</li>
            </ul>

            <h3>Implementation Patterns</h3>
            <ol>
              <li>Define risk tiers and permission boundaries per tool</li>
              <li>Instrument evaluation gates in critical flows</li>
              <li>Enforce isolation domains and least privilege</li>
              <li>Capture evidence in an audit-ready hub</li>
            </ol>
          </article>

          <div className="flex flex-wrap gap-3">
            <Link href="/blog/ai-2026-safe-tool-use-blueprint" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Safe Tool Use Blueprint</Link>
            <Link href="/content/ai-2026-secure-tooling-permissions-blueprint" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Permissions Blueprint</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

