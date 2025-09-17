import React from 'react'

export default function ProductionAgentIncidentPlaybooks() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-10 px-4">
      <h1>Production Agent Incident Playbooks — 2026 Guide</h1>
      <p>
        Standardized runbooks help teams triage, contain, and resolve agent incidents with
        greater speed and reliability. This guide provides actionable patterns with eval gates
        and signed evidence to drive reproducible, audit-ready responses.
      </p>
      <h2>When to Trigger</h2>
      <ul>
        <li>Policy violations or tool-use exceptions detected by guardrails</li>
        <li>Quality regressions crossing objective thresholds</li>
        <li>Latency or cost SLO breaches impacting users</li>
      </ul>
      <h2>Core Playbooks</h2>
      <ol>
        <li>Containment via capability downscoping and safe degradation</li>
        <li>Rollback using evidence-gated approvals and automated controllers</li>
        <li>Root-cause analysis with lineage, traces, and policy exception trails</li>
      </ol>
      <h2>Postmortem Essentials</h2>
      <ul>
        <li>Evidence bundle with inputs, outputs, model versions, and policies</li>
        <li>Objective evals demonstrating issue detection and remediation</li>
        <li>Follow-up actions tied to guardrail thresholds and SLOs</li>
      </ul>
      <p>
        Adopt these playbooks to reduce MTTR and improve safety posture while sustaining
        rapid iteration cycles.
      </p>
    </main>
  )
}

