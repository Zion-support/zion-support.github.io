export default function Page() {;
  return (
    <main className="prose mx-auto px-6 py-16">;
      <h1>AI 2026: Operationalizing Live Evals in Production — Deep Dive</h1>;
      <p className="text-gray-600">Date: 2025-09-15 • Tags: Evaluations, Reliability, Progressive Delivery, Observability, 2026</p>;
      <p>Live evaluations move quality gates from offline CI to runtime, enabling progressive delivery, rollback-on-fail, and trust at scale.</p>;
      <h2>Overview</h2>;
      <ul>;
        <li>Live evals architecture and data flows</li>;
        <li>Policy-as-code guardrails and pass/fail thresholds</li>;
        <li>Telemetry: traces, spans, and eval events</li>;
        <li>Rollout strategies and automated rollback</li>;
        <li>Operating model and SLOs</li>;
      </ul>;
      <h2>Key Metrics</h2>;
      <ul>;
        <li>Reliability: 99.9%</li>;
        <li>Rollback time: &lt, 5 min</li>;
        <li>Error budget: guarded</li>;
      </ul>;
      <p>Need help implementing eval-driven releases? Contact us to get production-ready in weeks.</p>;
    </main>)}