import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Real-Time Retrieval Architectures',
  description:
    'Blueprints for low-latency RAG: vector DB tuning, streaming generation, hybrid search, and ops readiness.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Real-Time Retrieval Architectures</h1>
          <p className="text-lg md:text-xl opacity-90">
            Practical designs for sub-200ms RAG: schema design, ANN indexes, hybrid reranking, and streaming UX.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>What you will learn</h2>
          <ul>
            <li>Latency budgets and bottlenecks in end-to-end retrieval-augmented generation.</li>
            <li>Index choices (HNSW, IVF-PQ) and vector DB configuration for throughput.</li>
            <li>Hybrid lexical + vector search with lightweight cross-encoder reranking.</li>
            <li>Chunking strategies, schema evolution, and freshness with streaming ingest.</li>
            <li>Observability, eval loops, and SLOs for production RAG systems.</li>
          </ul>

          <h2>Get started</h2>
          <p>
            Explore our companion playbook for operating autonomous AI systems with real-time retrieval pipelines.
          </p>
          <p>
            <Link href="/content/ai-2026-autonomous-ops-playbook" className="text-purple-600 font-semibold">
              Go to Autonomous Ops Playbook →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

