
export default function AutonomousAgentRiskPlaybook2026(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-4">
          NEW • 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Autonomous Agent Risk Playbook 2026</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Practical governance, reliability, and safety patterns for deploying agentic systems at scale.
        </p>
      </div>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Risk Domains</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Tool-use guardrails and permissioning</li>
            <li>Hallucination containment and validation</li>
            <li>Data exfiltration and privacy controls</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Operational Controls</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Runbooks with human-in-the-loop checkpoints</li>
            <li>Step-level tracing and evidence bundling</li>
            <li>Policy-as-code for task and tool scopes</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Quality Engineering</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>E2E evals across tasks and failure modes</li>
            <li>Cost-aware routing and fallback strategies</li>
            <li>SLIs/SLOs with error budgets</li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Download the Checklist</h2>
        <p className="text-gray-700 mb-4">A one-page deploy checklist covering scope, controls, and telemetry.</p>
        <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">Get the PDF →</a>
      </section>
    </main>
  );
}

