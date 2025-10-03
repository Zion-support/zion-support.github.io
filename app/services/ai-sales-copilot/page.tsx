export const metadata = {
  title: 'AI Sales Copilot | Zion Tech Group',
  description: 'AI copilot for SDRs and AEs: lead research, outreach drafting, objection handling, deal insights, and CRM updates.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Sales Copilot</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            Supercharge your revenue team with an AI copilot that researches leads, drafts personalized outreach, handles objections, summarizes calls, and updates your CRM automatically.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:+13024640950" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Call +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">Request Demo</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Key Capabilities</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Account and lead research with buying signals</li>
              <li>• Multi-channel outreach drafting (email, LinkedIn)</li>
              <li>• Objection handling with playbooks</li>
              <li>• Live call assistance and action item capture</li>
              <li>• Automatic CRM updates and task creation</li>
              <li>• Deal risk insights and next best action</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Salesforce, HubSpot, Pipedrive</li>
              <li>• Gmail, Outlook, Slack</li>
              <li>• Gong, Zoom, Google Meet</li>
              <li>• Clearbit, Apollo, LinkedIn</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><span className="font-semibold">Starter</span>: $59/user/month</li>
              <li><span className="font-semibold">Growth</span>: $129/user/month</li>
              <li><span className="font-semibold">Enterprise</span>: custom</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">Average market comps: Outreach/Klaviyo add-ons $50–$150/user/mo</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
            <p className="text-gray-700 text-sm mb-3">Role-based access, SSO/SAML, audit logs, data residency options, SOC 2 controls.</p>
            <div className="text-sm">
              See also: <a className="text-blue-600 hover:underline" href="https://ziontechgroup.com/security">Security</a>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Get Started</h3>
            <p className="text-gray-700 text-sm mb-4">Book a demo and receive a customized ROI model based on your pipeline.</p>
            <div className="flex gap-3">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700">Book a Demo</a>
              <a href="tel:+13024640950" className="border border-blue-600 text-blue-600 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">Call Sales</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

