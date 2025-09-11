import React from 'react';

export default function PostPage() {
  return (
    <article className='prose lg:prose-lg max-w-3xl mx-auto py-12'>
      <h1>Serverless for ML in 2025: Simple, Cost-Efficient, Production-Ready</h1>
      <p>
        Serverless is no longer just for prototypes. With modern runtimes and
        managed vector stores, you can run production ML and GenAI workloads
        without managing servers—often at a fraction of the cost.
      </p>
      <h2>What Works Well</h2>
      <ul>
        <li>Event-driven pipelines with durable queues and retries</li>
        <li>On-demand inference with concurrency controls</li>
        <li>Chunked batch jobs using step functions and state machines</li>
      </ul>
      <h2>Cost and Performance Tips</h2>
      <ol>
        <li>Prefer streaming to reduce latency and memory pressure</li>
        <li>Use cold-start friendly languages and keep bundles small</li>
        <li>Cache embeddings and models where allowed; reuse connections</li>
      </ol>
      <h2>Reference Stack</h2>
      <p>
        API gateway + serverless functions + managed vector DB + object storage
        + observability. Add a policy layer for authz and data redaction, and a
        cost dashboard tracking token and egress spend.
      </p>
      <p>
        The result: scalable ML systems that are simpler to operate and easier
        to justify financially.
      </p>
    </article>
  );
}

