// @ts-nocheck
import ArrowRight from 'next/link';

export default function BudgetAwareRouting2025() {
  return (
    <main>
      <article>
        <header>
          <p>September 30, 2025 • 9 min read</p>
          <h1>
            Budget‑Aware Routing — Stable UX Under Cost SLAs
          </h1>
          <p>
            Tiered models, semantic caches, and eval gates to hold quality while cutting spend 40–70%.
          </p>
        </header>

        <section>
          <h2>Routing Stack</h2>
          <ul>
            <li>Quality tiers with fallback: gold, silver, economy.</li>
            <li>Semantic caches for frequent intents; TTL by risk tier.</li>
            <li>Eval gates in CI and live canaries protect UX.</li>
            <li>Per‑request budgets and dynamic compression.</li>
          </ul>

          <h2>Measuring Success</h2>
          <p>
            Track $/win, latency, and User outcomes. Route to cheapest model that meets quality SLOs.
          </p>
        </section>

        <hr />

        <aside>
          <h3>Related</h3>
          <ul>
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

