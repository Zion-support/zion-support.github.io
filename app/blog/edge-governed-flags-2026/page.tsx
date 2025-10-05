import ArrowRight from 'next/link';

export const metadata = {
  title: 'Edge‑Governed Feature Flags (2026): Private control at <100ms',
  description: 'Patterns for consent‑aware, policy‑checked feature flags with scoped IDs and on‑device enforcement.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>Edge‑Governed Feature Flags (2026)</h1>
      <p>
        Run feature flags at the edge with policy checks and privacy guarantees. Enforce org policy,
        budget constraints, and regional compliance while keeping p95 under 100ms.
      </p>
      <h2>Key Practices</h2>
      <ul>
        <li>Scoped, rotating user identifiers; no PII traverses the network</li>
        <li>Signed flag manifests with cache TTLs and rollback hooks</li>
        <li>DP‑hardened telemetry and KPI‑linked canaries for safe rollout</li>
      </ul>
      <p>
        See also: <ArrowRight href="/blog/privacy-safe-feature-flags-2026">Privacy‑Safe Feature Flags (2026)</ArrowRight>.
      </p>
    </main>
  );
}

