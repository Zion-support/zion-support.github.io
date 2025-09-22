import React from 'react';

export default function AIInnovationPlaybook2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <div className="inline-block px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-semibold mb-4">NEW 2025</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Innovation Playbook 2025</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A practical guide to ideate, prototype, and scale AI-powered products with measurable ROI.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="text-3xl mb-2">🧭</div>
          <h2 className="text-xl font-semibold mb-2">Strategy</h2>
          <p className="text-gray-600">Define North Star metrics, governance, and risk controls for responsible AI.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="text-3xl mb-2">⚙️</div>
          <h2 className="text-xl font-semibold mb-2">Engineering</h2>
          <p className="text-gray-600">Evaluate build vs. buy, model selection, data pipelines, and observability.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="text-3xl mb-2">📈</div>
          <h2 className="text-xl font-semibold mb-2">Go-To-Market</h2>
          <p className="text-gray-600">Pilot design, pricing, value proof, and change management for adoption.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">Download the Full Playbook</h2>
        <p className="opacity-90 mb-4">Get templates for discovery, evaluation, and KPI tracking.</p>
        <a href="#" className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Get PDF →</a>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Reference Architecture</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Ingestion: event streams, batch ETL</li>
            <li>Model Ops: versioning, evals, rollback</li>
            <li>Safety: guardrails, PII handling, audit</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Starter Use Cases</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Sales assist and proposal drafting</li>
            <li>Support deflection and agent copilot</li>
            <li>DevEx code review and test authoring</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

