
export const metadata = {
  title: 'GenAI Budget‑Aware Routing 2026',
  description: 'Stable UX under cost SLAs using quality tiers, caches, and eval signals.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">GenAI Budget‑Aware Routing 2026</h1>
      <p className="text-gray-600 mb-8">Deliver predictable cost and quality with tiered models, semantic caches, and evals.</p>
      <div className="prose prose-invert max-w-none">
        <p>
          Implement budget‑aware routing to keep experiences stable during traffic spikes and model variance.
        </p>
        <ul>
          <li>Define quality tiers and cost SLAs</li>
          <li>Cache high‑similarity responses with semantic keys</li>
          <li>Use eval signals to escalate to stronger models</li>
          <li>Track cost per request and error budgets in real time</li>
        </ul>
      </div>
    </main>
  );
}

