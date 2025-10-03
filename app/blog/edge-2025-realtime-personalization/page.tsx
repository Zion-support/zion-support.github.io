import React from 'react';

export const metadata = {
  title: 'Realtime Personalization 2025 at the Edge: <100ms, Zero‑PII',
  description: 'Edge flags, scoped IDs, on‑device telemetry for private, sub‑100ms personalization at global scale.',
};

export default function Page() {
  return (
    <main className="text-left">
      <h1 className="text-left">Realtime Personalization at the Edge</h1>"
      <p className="text-left">Deliver private, sub‑100ms experiences with edge feature flags and scoped IDs.</p>"
      <div className="text-left">
        <p>
          Use edge‑deployed feature flags and on‑device telemetry to personalize experiences without PII. Achieve
          predictable latency and compliance while improving conversion.
        </p>
        <h2>Architecture</h2>
        <ul>
          <li>Scoped identifiers and ephemeral tokens</li>
          <li>On‑device aggregation with DP noise</li>
          <li>Global edge rollout with instant rollback</li>
        </ul>
      </div>
    </main>
  );
}
