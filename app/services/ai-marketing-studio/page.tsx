export const metadata = {
  title: 'AI Marketing Studio | Zion Tech Group',
  description: 'End-to-end AI marketing suite: audience insights, creative generation, multivariate tests, and attribution.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-rose-600 to-red-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Marketing Studio</h1>
          <p className="text-lg md:text-xl text-rose-100 max-w-3xl">Unify research, creative, experimentation, and attribution to grow pipeline with measurable ROI.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Modules</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Audience intelligence and ICP builder</li>
              <li>• Creative generation for ads and landing pages</li>
              <li>• Multivariate tests with auto-allocation</li>
              <li>• Attribution and MMM dashboards</li>
              <li>• Compliance and brand guardrails</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Google Ads, Meta, LinkedIn</li>
              <li>• Segment, GA4, Mixpanel</li>
              <li>• HubSpot, Salesforce</li>
              <li>• Webflow, Next.js, Shopify</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><span className="font-semibold">Starter</span>: $199/month</li>
              <li><span className="font-semibold">Growth</span>: $499/month</li>
              <li><span className="font-semibold">Enterprise</span>: custom</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">Market comps: Jasper, Copy.ai, Mutiny $100–$1k+/mo</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Expected Impact</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• +30–120% lift in CTR</li>
              <li>• +10–35% conversion rate improvement</li>
              <li>• -15–40% CAC</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Get a Plan</h3>
            <div className="flex gap-3">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-rose-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-rose-700">Request Plan</a>
              <a href="tel:+13024640950" className="border border-rose-600 text-rose-700 px-5 py-3 rounded-lg font-semibold hover:bg-rose-50">Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

