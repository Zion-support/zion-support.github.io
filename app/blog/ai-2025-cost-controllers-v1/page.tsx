
export const metadata = {
  title: 'AI Cost Controllers v1 (2025): Budgets, Tiers, and Guardrails',
  description: 'Practical cost governance: route by quality tier, enforce budgets, and prevent overruns with policy tests.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">AI Cost Controllers v1 (2025)</h1>
      <p className="text-gray-600 mb-6">Budgets, tiers, and guardrails for predictable spend with steady UX.</p>
      <div className="prose prose-invert">
        <p>
          Implement budget‑aware routing with quality tiers and semantic caching. Add policy tests that block merges
          when cost budgets or latency SLOs are at risk.
        </p>
        <h2>What You Will Learn</h2>
        <ul>
          <li>Designing quality tiers and routing logic</li>
          <li>Enforcing monthly and per‑feature budgets</li>
          <li>Instrumentation for cost and reliability scorecards</li>
        </ul>
      </div>
    </main>
  );
}
