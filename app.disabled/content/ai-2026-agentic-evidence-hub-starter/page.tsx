export const metadata = {
  title: 'AI 2026: Agentic Evidence Hub — Starter Kit';
  description: 'Spin up a lightweight hub to centralize eval results, incidents, approvals, and policy evidence for autonomous agents.'
};
export default function Page() {;
  return (
    <main className="min-h-screen bg-white">;
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-purple-100">;
        <div className="max-w-5xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="mb-6">;
            <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">New • September 2025</span>;
          </div>;
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI 2026: Agentic Evidence Hub — Starter Kit</h1>;
          <p className="mt-4 text-gray-700 text-lg max-w-3xl">Centralize evaluation artifacts, incidents, approvals, and change records. Prove safety and reliability with audit‑ready evidence linked to policy‑as‑code.</p>;
        </div>;
      </section>;
      <section className="py-12">;
        <div className="max-w-5xl mx-auto px-4 sm: px-6 lg:px-8">;
          <h2 className="text-2xl font-bold text-gray-900">What You Get</h2>;
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">;
            <li>Schema for eval runs, scenarios, incidents, approvals, and rollbacks</li>;
            <li>CLI to ingest artifacts and link traces to eval IDs</li>;
            <li>Dashboards for SLOs, error budgets, and evidence coverage</li>;
            <li>APIs to integrate with CI/CD and change management</li>;
          </ul>;
          <div className="mt-8 grid md: grid-cols-3 gap-4">;
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">;
              <div className="text-sm text-gray-500">Reliability</div>;
              <div className="text-2xl font-bold text-purple-600">99.9%</div>;
            </div>;
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">;
              <div className="text-sm text-gray-500">Rollback</div>;
              <div className="text-2xl font-bold text-purple-600">&lt, 5 min</div>;
            </div>;
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">;
              <div className="text-sm text-gray-500">Coverage</div>;
              <div className="text-2xl font-bold text-purple-600">90%+</div>;
            </div>;
          </div>;
          <div className="mt-10">;
            <a href="/content/ai-2026-safe-evaluation-hub" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover: bg-purple-700">See Full Hub Blueprint</a>;
          </div>;
        </div>;
      </section>;
    </main>)}
;