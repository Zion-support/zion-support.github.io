import Link from 'next/link';

export const metadata = {
  title: 'Edge Experiments 2025: Zero‑PII Global A/B at <100ms',
  description:
    'Scoped IDs, on‑device metrics, and DP noise for compliant experimentation with sub‑100ms reads worldwide.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 prose prose-invert">
      <h1>Edge Experiments 2025</h1>
      <p>
        Run privacy‑preserving global experiments without PII. Use scoped identifiers, on‑device aggregation, and
        differential privacy noise to stay compliant while keeping reads under 100ms.
      </p>
      <h2>Implementation Highlights</h2>
      <ul>
        <li>Scoped IDs with rotation windows</li>
        <li>On‑device counters and sketches</li>
        <li>Signed configs with TTL freshness</li>
        <li>Federated rollups and DP release</li>
      </ul>
      <p>
        See more analytics guides on the{' '}
        <Link href="/blog" className="font-semibold">blog</Link>.
      </p>
    </main>
  );
}

