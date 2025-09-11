import React from 'react';

export default function GenAIEvalsInProduction() {
  return (
    <div className='min-h-screen'>
      <article className='prose prose-lg max-w-3xl mx-auto py-12'>
        <h1>GenAI Evals in Production: What Actually Works</h1>
        <p>
          Offline evals are not enough. High-signal, low-friction production
          evals provide the continuous feedback loops required to keep quality
          and safety high as data, prompts, and models evolve.
        </p>
        <h2>Key Practices</h2>
        <ul>
          <li>Golden task sets with drift-aware sampling</li>
          <li>Human-in-the-loop audits on high-risk segments</li>
          <li>Cost and latency budgets with automatic degradations</li>
          <li>Failure taxonomies tied to remediation playbooks</li>
        </ul>
        <h2>Metrics That Matter</h2>
        <p>
          Track groundedness, instruction adherence, toxicity, PII leakage, and
          hallucination rates. Use business metrics like CSAT and conversion to
          validate impact.
        </p>
      </article>
    </div>
  );
}

