import Link from 'next/link';

export const metadata = {
  title: 'Case Study: FinServe — GenAI Risk Mitigation & Compliance | Zion Tech Group',
  description: 'How a fintech leader reduced GenAI risk by 70% and achieved audit-ready compliance with production guardrails and observability.',
  keywords: 'genai compliance, AI governance, fintech AI, risk mitigation, audit readiness',
};

export default function FinServeGenAIRiskMitigation() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-sm text-blue-600 mb-4">
          <Link href="/case-studies" className="hover:underline">← Back to Case Studies</Link>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl mb-8">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">Success Story</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">FinServe: GenAI Risk Mitigation & Compliance</h1>
          <p className="text-xl opacity-90 mb-4">Reducing AI risk by 70%, enabling audit-ready operations, and accelerating delivery by 3x.</p>
          <div className="flex items-center gap-4 text-sm">
            <span>Finance</span>
            <span>•</span>
            <span>AI Governance</span>
            <span>•</span>
            <span>2025</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Metric label="Policy Violations" value="-70%" accent="text-green-600" />
          <Metric label="Time-to-Release" value="3x faster" accent="text-blue-600" />
          <Metric label="Compliance Findings" value="0 critical" accent="text-emerald-600" />
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
          <p className="text-gray-700 mb-6">FinServe needed to scale GenAI features while ensuring compliance with SOC2, PCI, and internal governance. Manual review created bottlenecks and risk exposure.</p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution</h2>
          <ul className="text-gray-700 space-y-2 mb-8">
            <li>• Policy-as-code with automated checks in CI/CD</li>
            <li>• Guardrails for input/output with incident labeling</li>
            <li>• Retrieval-grounded generation with citation enforcement</li>
            <li>• Centralized observability and red team workflows</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <ul className="text-green-800 space-y-2">
              <li>• 70% reduction in policy violations</li>
              <li>• 0 critical compliance findings in audit</li>
              <li>• 3x acceleration in feature delivery</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Bring Audit-Ready GenAI to Your Org</h3>
            <p className="text-lg opacity-90 mb-6">We implement end-to-end governance and guardrails with measurable KPIs and dashboards.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center">Explore Services</Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors text-center">Call +1 302 464 0950</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
      <div className={`text-3xl font-bold ${accent ?? 'text-blue-600'}`}>{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}

