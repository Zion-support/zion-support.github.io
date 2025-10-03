// import React from 'react';

export const metadata = {
  title: 'AI Compliance GPT | Zion Tech Group',
  description: 'Continuous compliance copilot for SOC 2, ISO 27001, HIPAA, and GDPR with policy drafting and evidence automation.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Compliance GPT</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl">
            Automate compliance with an AI copilot that drafts policies, maps controls, gathers evidence, and prepares audit-ready reports.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Controls & Coverage</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• SOC 2 Type I/II, ISO 27001</li>
              <li>• HIPAA, GDPR, PCI DSS</li>
              <li>• Policy drafting and review</li>
              <li>• Risk register and vendor management</li>
              <li>• Evidence collection & change tracking</li>
              <li>• Continuous control monitoring</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• AWS, GCP, Azure, Okta</li>
              <li>• Jira, GitHub, GitLab</li>
              <li>• Slack, Google Workspace, M365</li>
              <li>• SIEM and vulnerability scanners</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><span className="font-semibold">Startup</span>: $799/month</li>
              <li><span className="font-semibold">Growth</span>: $1,999/month</li>
              <li><span className="font-semibold">Enterprise</span>: custom</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">Comps: Vanta/Drata/Secureframe $500–$3k+/mo</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Audit-Ready in Weeks</h3>
            <p className="text-gray-700 text-sm">Templates, mappings, and automated evidence exports speed up audits while reducing team burden.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Talk to Compliance</h3>
            <div className="flex gap-3">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-slate-800 text-white px-5 py-3 rounded-lg font-semibold hover:bg-black">Request Assessment</a>
              <a href="tel:+13024640950" className="border border-slate-800 text-slate-800 px-5 py-3 rounded-lg font-semibold hover:bg-slate-50">Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

