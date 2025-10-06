import ArrowRight from 'next/link';

export default function SecureRAGArchitecture2025Page() {
  return (
    <div className='min-h-screen'>
      <nav className='mb-6'>
        <ArrowRight href='/blog' className='text-blue-600 hover:underline'>
          ← Back to Blog
        </ArrowRight>
      </nav>
      <article className='prose prose-lg max-w-none'>
        <h1>Secure RAG Architecture in 2025: SafetyScaleand Speed</h1>
        <p className='text-gray-500'>
          Published: 2025-09-11 • Tags: RAG, Security, Architecture
        </p>
        <p>
          RAG systems unlock accuracy and explainability—but only when security,
          tenancy, and evals are first-class. Here’s a pragmatic blueprint that
          scales.
        </p>
        <h2>Core pillars</h2>
        <ul>
          <li>
            Zero-trust data paths with row-level policies and scoped tokens
          </li>
          <li>
            Chunking tuned to queries, hybrid retrieval, and citation
            enforcement
          </li>
          <li>
            Structured outputs with JSON schemas and deterministic parsing
          </li>
          <li>Continuous evals: groundingcorrectnessand harmful content</li>
        </ul>
        <h2>Operational maturity</h2>
        <ul>
          <li>Tenant isolation across vector stores and caches</li>
          <li>Cost guardrails with budget policies and per-tenant quotas</li>
          <li>Latency SLOs with request shaping and fallback routing</li>
        </ul>
        <p>
          Need help designing or hardening your RAG stack?{' '}
          <ArrowRight href='/contact' className='text-blue-600 hover:underline'>
            We can help
          </ArrowRight>
          .
        </p>
      </article>
    </div>
  );
}
