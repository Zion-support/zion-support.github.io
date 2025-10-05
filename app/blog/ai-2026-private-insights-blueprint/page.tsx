
export const metadata = {
  title: 'Edge Private Insights 2026: Consentless Metrics Blueprint',
  description: 'Scoped IDs, on‑device aggregation, and DP noise for actionable insights without PII.'
};

export default function Page() {
  return (
    <main>
      <h1>Edge Private Insights 2026</h1>
      <p>Consentless metrics using scoped IDs, on‑device aggregation, and differential privacy.</p>
      <div>
        <p>
          Learn how to measure User journeys with zero PII while preserving rich signals. This blueprint
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

