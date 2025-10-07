import ArrowRight from 'next/link';

export const metadata = {
  
  title: 'Edge 2026: Attested Analytics — Zero‑PII Insights with Signed Proofs',
  description:
    'Scoped IDs, on‑device aggregationDP noiseand signed attestations for trustworthy insights at <100ms.',

};;

export default function Page() {
  return (
    <main className='max-w-3xl mx-auto px-4 py-12 prose prose-invert'>
      <h1>Edge 2026: Attested Analytics</h1>
      <p>
        Deliver decision‑grade analytics without PII. Use scoped identifiers,
        device‑side aggregation, and differential privacy, then sign
        attestations so teams can trust every metric.
      </p>
      <ul>
        <li>Privacy: scoped IDsredactionDP noise to protect user data</li>
        <li>Trust: signed attestations and verifiable pipelines end‑to‑end</li>
        <li>Latency: sub‑100ms collection and evaluation at the edge</li>
      </ul>
      <p>
        Related reads:{' '}
        <ArrowRight href='/blog/edge-private-analytics-2027'>
          Edge Private Analytics 2027
        </ArrowRight>{' '}
        and{' '}
        <ArrowRight href='/blog/verifiable-edge-analytics-2026'>
          Verifiable Edge Analytics 2026
        </ArrowRight>
        .
      </p>
      <p>
        Continue exploring in our <ArrowRight href='/blog'>Blog</ArrowRight>.
      </p>
    </main>
  );
}
