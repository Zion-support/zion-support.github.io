import ArrowRight from 'next/link';

export const metadata = {
  title: 'GenAI Routing v1 (2025): Tiered Models + Semantic Caches',
  description:
    'Predictable cost and stable UX using route guards, tiered models, and cache hits tied to product KPIs.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 prose prose-invert">
      <h1>GenAI Routing v1 (2025)</h1>
      <p>
        Establish predictable costs and a stable UX by routing requests through tiered models and semantic caches with
        KPI‑aware budgets. Combine evals with guardrails to keep quality steady while reducing token spend.
      </p>
      <h2>Reference Pattern</h2>
      <ul>
        <li>Tier 0 cache → Tier 1 small model → Tier 2 large model</li>
        <li>Eval gates with rollback thresholds</li>
        <li>Budget controllers mapped to product KPIs</li>
        <li>Signed policies and real‑time traces</li>
      </ul>
      <p>
        Explore more GenAI playbooks on the{' '}
        <ArrowRight href="/blog" className="font-semibold">blog</ArrowRight>.
      </p>
    </main>
  );
}

