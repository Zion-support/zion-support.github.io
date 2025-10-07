
export const metadata = {
  title: 'Edge Private Insights 2026: Consentless Metrics Blueprint',
  description: 'Scoped IDs, on‑device aggregation, and DP noise for actionable insights without PII.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Edge Private Insights 2026</h1>
      <p className="text-gray-600 mb-8">Consentless metrics using scoped IDs, on‑device aggregation, and differential privacy.</p>
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to measure user journeys with zero PII while preserving rich signals. This blueprint
          covers identifier scoping, local aggregation, and privacy noise calibration.
        </p>
        <ol>
          <li>Adopt rotating, scoped identifiers</li>
          <li>Aggregate metrics at the edge</li>
          <li>Apply DP noise to sensitive counters</li>
          <li>Stream anonymized aggregates to your lake</li>
        </ol>
      </div>
    </main>
  );
}

