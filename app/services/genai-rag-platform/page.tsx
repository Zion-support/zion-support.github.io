// import React from 'react';

export const metadata = {
  title: 'Enterprise RAG & GenAI Platform | Zion Tech Group',
  description: 'Production-ready GenAI with retrieval augmented generation, evaluations, guardrails, and observability.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise RAG & GenAI Platform</h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl">Ship reliable GenAI apps with best-practice RAG, dataset/versioning, evals, safety, and analytics.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Capabilities</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Hybrid search (BM25 + vector) and re-ranking</li>
              <li>• Chunking, citations, and source attributions</li>
              <li>• Offline/online evaluations and telemetry</li>
              <li>• Prompt/guardrail management</li>
              <li>• Multi-tenant, SSO, and rate limiting</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Stack</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• OpenAI/Anthropic/Cohere, vLLM</li>
              <li>• PgVector, Elasticsearch, Weaviate</li>
              <li>• LangChain/LlamaIndex, Guardrails</li>
              <li>• Grafana/Datadog, Feature flags</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><span className="font-semibold">Starter</span>: $299/month</li>
              <li><span className="font-semibold">Business</span>: $999/month</li>
              <li><span className="font-semibold">Enterprise</span>: custom</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">Comparable: Pinecone/Weaviate hosting + evals platforms</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Templates</h3>
            <p className="text-gray-700 text-sm">Helpdesk, policy Q&A, sales enablement, compliance assistant, and engineering KB out of the box.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <div className="flex gap-3">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-fuchsia-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-fuchsia-700">Start Trial</a>
              <a href="tel:+13024640950" className="border border-fuchsia-600 text-fuchsia-700 px-5 py-3 rounded-lg font-semibold hover:bg-fuchsia-50">Talk to Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

