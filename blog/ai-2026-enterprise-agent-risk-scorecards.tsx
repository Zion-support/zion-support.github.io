import React from 'react'

export default function EnterpriseAgentRiskScorecards() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-10 px-4">
      <h1>Enterprise Agent Risk Scorecards (2026)</h1>
      <p>
        Standardize risk metrics for agents across teams and environments. Define thresholds, alerts, and ownership
        using a shared schema that aligns with reliability, safety, and compliance goals.
      </p>
      <h2>Scorecard Dimensions</h2>
      <ul>
        <li>Quality and safety evals</li>
        <li>Latency and cost budgets</li>
        <li>Tool-use permissions and incidents</li>
        <li>Change risk and rollout gates</li>
      </ul>
      <p>
        Use scorecards to enable objective decisions in rollouts, auto-rollback, and incident response.
      </p>
    </main>
  )
}

