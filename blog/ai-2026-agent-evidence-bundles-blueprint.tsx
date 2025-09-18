import React from 'react'

export default function AgentEvidenceBundlesBlueprint() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-10 px-4">
      <h1>Agent Evidence Bundles — 2026 Blueprint</h1>
      <p>
        Design signed, reproducible evidence bundles for autonomous agents. Capture inputs, outputs, tool calls,
        policies, eval signals, lineage, and provenance in a standardized package suitable for audits and incident reviews.
      </p>
      <h2>Key Components</h2>
      <ul>
        <li>Provenance and chain-of-custody metadata</li>
        <li>Policy-as-code checks and results</li>
        <li>Eval rubrics, scores, and thresholds</li>
        <li>Signed artifacts for integrity</li>
      </ul>
      <p>
        Read the full blueprint to implement durable evidence capture across environments and services.
      </p>
    </main>
  )
}

