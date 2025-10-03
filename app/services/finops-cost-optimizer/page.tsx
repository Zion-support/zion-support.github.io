export const metadata = {
  title: 'FinOps Cloud Cost Optimizer | Zion Tech Group',
  description: 'Reduce cloud spend 20–40% with rightsizing, commitment planning, anomaly alerts, and governance.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FinOps Cloud Cost Optimizer</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl">
            Gain visibility and take control of AWS, GCP, and Azure costs with automated savings recommendations, anomaly detection, and guardrails.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Rightsizing and idle resource cleanup</li>
              <li>• Savings Plans/RI recommendations</li>
              <li>• Kubernetes cost allocation (labels/namespace)</li>
              <li>• Budget policies and automated alerts</li>
              <li>• Anomaly detection and RCA</li>
              <li>• Unit economics and showback/chargeback</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• AWS Cost Explorer, CUR, CloudWatch</li>
              <li>• GCP Billing Export, Cloud Monitoring</li>
              <li>• Azure Cost Management</li>
              <li>• Prometheus, Grafana, Datadog</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><span className="font-semibold">Starter</span>: $499/month</li>
              <li><span className="font-semibold">Business</span>: $1,499/month</li>
              <li><span className="font-semibold">Enterprise</span>: 1% of managed spend</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">Comps: CloudZero/CloudHealth/Vantage at 0.8–3% of spend</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Results</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• 20–40% cost reduction in 90 days</li>
              <li>• 80% faster anomaly response</li>
              <li>• Governance across teams with clear ownership</li>
              <li>• Predictable budgets with commitment planning</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Talk to FinOps</h3>
            <p className="text-gray-700 text-sm mb-4">Our certified FinOps practitioners will baseline spend and deliver a savings roadmap.</p>
            <div className="flex gap-3">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-orange-700">Get Audit</a>
              <a href="tel:+13024640950" className="border border-orange-600 text-orange-700 px-5 py-3 rounded-lg font-semibold hover:bg-orange-50">Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

