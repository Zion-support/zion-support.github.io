
export const metadata = {
  title: 'AI Agent Security Blueprint 2026: Zero‑Trust for Autonomous Systems',
  description:
    'Zero‑trust architecture for agents: secret hygiene, tool isolation, least privilege, and audit trails.',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-10">
        <div className="text-sm text-gray-400">January 2026 • 14 min read</div>
        <h1 className="text-4xl font-extrabold mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          AI Agent Security Blueprint 2026
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          A practical zero‑trust approach for autonomous agents: scoped secrets, sandboxed tools, granular policies,
          continuous monitoring, and tamper‑evident auditability.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white">Threat Model</h2>
          <p className="text-gray-300">
            Consider prompt injection, tool misuse, data exfiltration, privilege escalation, and supply‑chain risks.
            Design controls assuming compromise and focus on blast‑radius reduction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white">Core Controls</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Identity and policy per agent and per tool</li>
            <li>Network egress allow‑lists and content scanning</li>
            <li>Secrets vault with time‑bound, scope‑bound tokens</li>
            <li>Filesystem and process isolation for tool execution</li>
            <li>Action logs with signed, immutable storage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white">Observability</h2>
          <p className="text-gray-300">
            Capture traces across prompts, tools, and outcomes. Attach policy events, approvals, and budget usage.
            Alert on anomaly patterns and policy violations with automated containment.
          </p>
        </section>

        <section className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-cyan-500"
          >
            Talk to Security Experts
          </a>
        </section>
      </div>
    </article>
  );
}

