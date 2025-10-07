// @ts-nocheck
import ArrowRight from 'next/link';

export default function BudgetAwareRouting2025() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-8">
          <p className="text-sm text-gray-400">September 30, 2025 • 9 min read</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Budget‑Aware Routing — Stable UX Under Cost SLAs
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Tiered models, semantic caches, and eval gates to hold quality while cutting spend 40–70%.
          </p>
        </header>

        <section className="prose prose-invert prose-purple max-w-none">
          <h2>Routing Stack</h2>
          <ul>
            <li>Quality tiers with fallback: gold, silver, economy.</li>
            <li>Semantic caches for frequent intents; TTL by risk tier.</li>
            <li>Eval gates in CI and live canaries protect UX.</li>
            <li>Per‑request budgets and dynamic compression.</li>
          </ul>

          <h2>Measuring Success</h2>
          <p>
            Track $/win, latency, and user outcomes. Route to cheapest model that meets quality SLOs.
          </p>
        </section>

        <hr />

        <aside className="bg-purple-500/10 border border-purple-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-2">Related</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>
              <ArrowRight href="/blog/genai-routing-blueprints-2026" className="text-purple-300 hover:text-purple-200">
                GenAI Routing Blueprints 2026
              </ArrowRight>
            </li>
            <li>
              <ArrowRight href="/blog/practical-rag-in-production" className="text-purple-300 hover:text-purple-200">
                Practical RAG in Production
              </ArrowRight>
            </li>
          </ul>
        </aside>
      </article>
    </main>
  );
}

