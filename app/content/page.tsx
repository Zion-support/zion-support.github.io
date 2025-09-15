import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Content Hub | Zion Tech Group',
  description: 'Explore our latest guides and articles on AI and automation.'
};

export default function ContentIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Content</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Stay ahead with our practical guides and deep-dives into enterprise AI and automation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-purple-700 mb-2">Guide</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-agent-observability-blueprint" className="hover:underline">
              Agent Observability Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            A practical blueprint to instrument agents with metrics, traces, evals, and safety guardrails.
          </p>
          <Link href="/blog/ai-2026-agent-observability-blueprint" className="text-purple-600 font-semibold">Read Guide →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-blue-700 mb-2">Article</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-trustworthy-rag-blueprint" className="hover:underline">
              Trustworthy RAG Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Build reliable RAG with grounding, citations, verification, and continuous evaluations.
          </p>
          <Link href="/blog/ai-2026-trustworthy-rag-blueprint" className="text-blue-600 font-semibold">Read Article →</Link>
        </article>
      </div>
    </main>
  );
}

