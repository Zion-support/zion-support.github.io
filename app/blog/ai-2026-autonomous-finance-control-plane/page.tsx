import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Autonomous Finance Control Plane',
  description:
    'Real-time policy enforcement, anomaly detection, and auditability for modern finance operations.',
};

export default function AutonomousFinanceControlPlanePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">New Finance AI</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">AI 2026: Autonomous Finance Control Plane</h1>
        <p className="text-gray-600 mt-3">
          Real-time policy enforcement, anomaly detection, and auditability for modern finance operations.
        </p>
      </header>

      <article className="prose prose-purple max-w-none">
        <p>
          This guide outlines an autonomous control plane for CFO organizations: policy-as-code,
          telemetry-driven anomaly detection, continuous evidence collection, and guardrails
          for financial workflows.
        </p>

        <h2>Key capabilities</h2>
        <ul>
          <li>Versioned finance policies as code with approvals</li>
          <li>Streaming telemetry and anomaly alerts</li>
          <li>Automated evidence and audit trails</li>
          <li>Safe automation with rollback and circuit breakers</li>
        </ul>

        <h2>Next steps</h2>
        <div className="not-prose mt-4 flex gap-3">
          <Link href="/blog/ai-2026-autonomous-finance-operating-system" className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700">Finance OS</Link>
          <Link href="/content/ai-2026-autonomous-compliance" className="inline-block border border-purple-600 text-purple-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-50">Compliance Model</Link>
        </div>
      </article>
    </main>
  );
}

