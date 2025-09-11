import React from 'react';

export default function PostPage() {
  return (
    <article className='prose lg:prose-lg max-w-3xl mx-auto py-12'>
      <h1>GenAI Security in 2025: Practical Controls That Actually Work</h1>
      <p>
        As generative AI moves into production across the enterprise, the
        security surface area expands dramatically. In 2025, successful teams
        combine standard application security with AI-specific controls to
        mitigate risks without slowing delivery.
      </p>
      <h2>Top Risks</h2>
      <ul>
        <li>Prompt injection and indirect prompt injection</li>
        <li>Data leakage via training, prompts, and logs</li>
        <li>Over-permissive tools and agent actions</li>
        <li>Supply chain risk from model and provider drift</li>
      </ul>
      <h2>Pragmatic Controls</h2>
      <ol>
        <li>
          Isolate systems of record. Keep PII and secrets in vaults, brokering
          access through short-lived credentials and policy checks.
        </li>
        <li>
          Enforce allowlists on tools. Agents should only call idempotent,
          reversible actions with explicit scopes and rate limits.
        </li>
        <li>
          Apply structured output with schemas. Validate against JSON Schema and
          reject non-conforming responses.
        </li>
        <li>
          Add runtime guards. Pattern-match dangerous strings and enforce
          bounded contexts to prevent cross-domain data flow.
        </li>
        <li>
          Monitor and eval. Track cost, latency, refusal, hallucination and
          jailbreak rates with regular regression tests.
        </li>
      </ol>
      <h2>Architecture Blueprint</h2>
      <p>
        Adopt a gateway layer that standardizes authn/z, redaction, prompt
        templating, content filtering, and observability across all model
        providers. Pair with a policy engine (e.g., OPA) to externalize rules
        and simplify audits.
      </p>
      <p>
        The result is safer GenAI that still ships fast—and scales with
        confidence.
      </p>
    </article>
  );
}

