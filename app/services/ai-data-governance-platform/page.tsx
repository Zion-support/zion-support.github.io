// import React from 'react';
type Metadata = { title: string; description: string; keywords?: string[] };

export const metadata: Metadata = {
  title: 'AI Data Governance Platform | Zion Tech Group',
  description: 'Unified data quality, lineage, catalog, and policy enforcement with AI-assisted remediation.',
  keywords: ['data governance', 'data lineage', 'data catalog', 'policy enforcement', 'PII detection'],
};

export default function AIDataGovernancePlatformPage() {
  const features = [
    'Automated data lineage across warehouses, lakes, and microservices',
    'PII/PHI detection with policy-based masking and tokenization',
    'AI-assisted data quality rules and anomaly detection',
    'Business glossary and data catalog with ownership and SLAs',
    'Approval workflows and audit trails for compliance',
    'Connectors: Snowflake, BigQuery, Redshift, Databricks, Postgres, S3',
  ];

  const pricing = [
    { tier: 'Team', price: '$499/month', includes: ['Up to 50 data assets', 'PII detection', 'Basic lineage'] },
    { tier: 'Business', price: '$1,499/month', includes: ['Up to 500 assets', 'Advanced lineage', 'Quality rules', 'Slack/Email alerts'] },
    { tier: 'Enterprise', price: 'Custom', includes: ['Unlimited assets', 'SAML/SSO', 'On-prem/VPC', '24/7 support'] },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Data Governance Platform</h1>
          <p className="text-lg text-gray-600 max-w-3xl">Protect sensitive data, ensure quality, and accelerate analytics with automated lineage, catalog, and policy enforcement.</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border p-6 flex items-start">
              <span className="text-green-600 mr-3">✓</span>
              <span className="text-gray-800">{f}</span>
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
                <ul className="mt-4 space-y-2 text-gray-700">
                  {p.includes.map((i, idx) => (
                    <li key={idx} className="flex items-center"><span className="text-blue-600 mr-2">•</span>{i}</li>
                  ))}
                </ul>
                <a href={`mailto:kleber@ziontechgroup.com?subject=AI Data Governance ${p.tier}`} className="mt-6 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full">Choose {p.tier}</a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">Implementation: $8,000 - $65,000 depending on sources, policies, and SSO.</p>
        </div>
      </section>
    </div>
  );
}

