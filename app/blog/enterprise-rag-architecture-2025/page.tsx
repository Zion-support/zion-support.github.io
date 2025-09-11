import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>2025-09-11 • 10 min read • Retrieval-Augmented Generation</p>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>Enterprise RAG Architecture 2025: Reliable, Governed, and Cost-Aware</h1>
          <p className='text-lg text-gray-700'>A practical reference for shipping Retrieval-Augmented Generation in production with reliability, governance, and clear ROI.</p>
        </header>

        <section className='prose prose-blue max-w-none'>
          <h2>Core Principles</h2>
          <ul>
            <li>Retrieval first: prioritize grounding quality before model size.</li>
            <li>Observability: trace prompts, tools, retrieval, and costs end-to-end.</li>
            <li>Governance: enforce data, safety, and compliance controls by default.</li>
          </ul>

          <h2>Reference Architecture</h2>
          <ol>
            <li>Ingestion: connectors, PII scrubbing, canonicalization, and chunking.</li>
            <li>Indexing: hybrid search (BM25 + vector) with metadata filtering.</li>
            <li>Query: query understanding, retrieval orchestration, reranking.</li>
            <li>Generation: templated prompts with tool access and budgets.</li>
            <li>Controls: guardrails, redaction, citation enforcement, and caching.</li>
          </ol>

          <h2>What To Measure</h2>
          <ul>
            <li>Answer accuracy and citation coverage on golden sets.</li>
            <li>Latency and cost per user task, not per request.</li>
            <li>Deflection and time-saved for support and ops use cases.</li>
          </ul>

          <h2>Common Pitfalls</h2>
          <ul>
            <li>Unversioned prompts and indexes—no rollbacks, hard debugging.</li>
            <li>Over-chunking content causing context bloat and higher costs.</li>
            <li>Ignoring security posture for connectors and embeddings.</li>
          </ul>

          <div className='mt-10 p-6 bg-purple-50 border border-purple-200 rounded-lg'>
            <h3 className='text-xl font-semibold text-purple-900 mb-2'>Implementation Kit</h3>
            <p className='text-purple-800'>We ship blueprints for ingestion, hybrid retrieval, evals, and dashboards tailored to your stack.</p>
            <div className='mt-4 flex gap-3'>
              <Link href='/contact' className='bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors'>Request Architecture Review</Link>
              <Link href='/services/ai-services' className='border border-purple-600 text-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-purple-50 transition-colors'>AI Services</Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

