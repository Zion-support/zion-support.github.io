import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'AI 2026: Agents‑On‑Call Automation',
  description: 'Autonomous triage, mitigation, and escalation with eval‑gated playbooks and deep observability.'
};

export default function AgentsOnCallAutomationPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Agents‑On‑Call Automation</h1>
      <p className="text-gray-600 mb-8">
        How to design agents that respond to incidents with safety, speed, and accountability using evaluation‑gated
        workflows and comprehensive telemetry.
      </p>

      <div className="prose prose-purple max-w-none">
        <h2>Design Principles</h2>
        <ol>
          <li>Risk‑tiered permissions with policy‑as‑code</li>
          <li>Continuous evaluations and rollback criteria</li>
          <li>Human‑in‑the‑loop for high‑risk actions</li>
          <li>End‑to‑end observability with traces and safety metrics</li>
        </ol>

        <h3>Implementation Pattern</h3>
        <p>
          Start with a small set of automated runbooks, instrument them with eval gates, and scale safely with strong
          operational guardrails and post‑incident learning loops.
        </p>

        <h3>Continue Reading</h3>
        <ul>
          <li>
            <Link href="/content/ai-2026-agent-incident-response-playbook" className="text-purple-700 hover:underline">
              Agent Incident Response Playbook
            </Link>
          </li>
          <li>
            <Link href="/content/ai-2026-operational-guardrails" className="text-purple-700 hover:underline">
              Operational Guardrails
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

