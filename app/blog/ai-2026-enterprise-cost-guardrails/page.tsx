import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Cost Guardrails (2026): Predictable AI spend',
  description: 'Budgets, tiers, and KPI‑linked routing that keep GenAI costs predictable without hurting UX.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>Enterprise Cost Guardrails (2026)</h1>
      <p>
        Design cost guardrails that preserve user experience. Use routing policies, quality tiers,
        and eval‑backed fallbacks to keep spend within budget and outcomes stable.
      </p>
      <h2>Guardrail Toolkit</h2>
      <ul>
        <li>Budget‑aware routing with real‑time spend telemetry</li>
        <li>Tiered models with semantic cache integration</li>
        <li>Rollback triggers on KPI degradation</li>
      </ul>
      <p>
        Continue with the <Link href="/blog/genai-budget-aware-routing-2026">Budget‑Aware Routing (2026)</Link> guide.
      </p>
    </main>
  );
}
