import React from 'react';

export const metadata = {
  title: 'Edge Private Insights 2026: Consentless Metrics Blueprint',
  description: 'Scoped IDs, on‑device aggregation, and DP noise for actionable insights without PII.',
};

export default function Page() {
  return (
    <main className="text-left">
      <h1 className="text-left">Edge Private Insights 2026</h1>"
      <p className="text-left">Consentless metrics using scoped IDs, on‑device aggregation, and differential privacy.</p>"
      <div className="text-left">
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

