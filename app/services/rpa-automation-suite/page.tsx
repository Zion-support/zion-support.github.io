

export default function RPAAutomationSuitePage() {
  const useCases = [
    'Invoice extraction and reconciliation',
    'Employee onboarding and access provisioning',
    'Data entry across legacy systems and web apps',
    'Compliance evidence collection and reporting',
    'Customer support triage and case routing',
  ];

  const pricing = [
    { tier: 'Starter', price: '$299/month', bots: '2 bots', includes: ['Basic scheduler', 'Email alerts', 'CSV exports'] },
    { tier: 'Business', price: '$999/month', bots: '10 bots', includes: ['Queues', 'Retry policies', 'Slack/Jira integration'] },
    { tier: 'Enterprise', price: 'Custom', bots: 'Unlimited', includes: ['SSO/SAML', 'VPC deployment', 'Advanced audit logs'] },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">RPA Automation Suite</h1>
          <p className="text-lg text-gray-600 max-w-3xl">Deploy resilient bots to automate manual tasks across systems with approvals and full auditability.</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((c, i) => (
            <div key={i} className="bg-white rounded-xl border p-6 flex items-start">
              <span className="text-green-600 mr-3">✓</span>
              <span className="text-gray-800">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className="border rounded-xl p-6 bg-gray-50">
                <div className="text-xl font-semibold text-gray-900">{p.tier}</div>
                <div className="text-3xl font-extrabold mt-2">{p.price}</div>
                <div className="text-gray-600 mt-1">Includes {p.bots}</div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {p.includes.map((i, idx) => (
                    <li key={idx} className="flex items-center"><span className="text-blue-600 mr-2">•</span>{i}</li>
                  ))}
                </ul>
                <a href={`mailto:kleber@ziontechgroup.com?subject=RPA Automation ${p.tier}`} className="mt-6 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full">Choose {p.tier}</a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">Implementation: $6,000 - $45,000 depending on systems, bots, and SLAs.</p>
        </div>
      </section>
    </div>
  );
}

