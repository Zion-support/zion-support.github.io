
export const metadata = {
  title: 'Trustworthy Autonomous Agents 2026: Guardrails, Evals, and Policy Gates',
  description:
    'Design production-grade, trustworthy autonomous agents with defense-in-depth guardrails, evaluations, and human-in-the-loop controls.',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-10">
        <div className="text-sm text-gray-400">January 2026 • 16 min read</div>
        <h1 className="text-4xl font-extrabold mt-2 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Trustworthy Autonomous Agents 2026
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          A practical blueprint to ship reliable autonomy: layered policy gates, budgeted actions, live evals, and
          measurable outcomes with human approval where it matters.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white">Why Trust Matters</h2>
          <p className="text-gray-300">
            Enterprise adoption hinges on predictability, compliance, and recoverability. Trustworthy systems combine
            clear policies, observability, and rollback paths to ensure actions stay within budget and business intent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white">Defense-in-Depth Guardrails</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Static policy filters for hard constraints and redlines</li>
            <li>Dynamic runtime checks tied to business KPIs and budgets</li>
            <li>Tiered approvals: auto, soft-approve with notify, human approval</li>
            <li>Rollback playbooks for quick recovery and auditability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white">Live Evaluations</h2>
          <p className="text-gray-300">
            Couple offline scorecards with live canaries. Track precision/recall, policy violations, and customer
            outcomes. Promote only when guardrail SLOs are consistently met.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white">Getting Started</h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li>Define non-negotiable policies and map to tests</li>
            <li>Instrument traces and link to outcome metrics</li>
            <li>Implement budgeted tools and action approvals</li>
            <li>Automate rollback runbooks and postmortems</li>
          </ol>
        </section>

        <section className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold rounded-lg hover:from-fuchsia-400 hover:to-purple-500"
          >
            Schedule a Consultation
          </a>
        </section>
      </div>
    </article>
  );
}

