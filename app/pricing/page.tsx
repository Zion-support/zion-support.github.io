import React from 'react';
type Metadata = { title: string; description: string; keywords?: string[] };

export const metadata: Metadata = {
  title: 'Pricing | Zion Tech Group',
  description: 'Transparent pricing for AI services, micro SaaS, and IT solutions with flexible engagement models.',
  keywords: ['pricing', 'AI pricing', 'IT services pricing', 'micro SaaS pricing'],
};

type Plan = {
  name: string;
  price: string;
  cadence: string;
  idealFor: string;
  features: string[];
  cta: string;
};

export default function PricingPage() {
  const plans: Plan[] = [
    {
      name: 'Starter',
      price: '$199',
      cadence: 'per month',
      idealFor: 'Startups validating AI/Micro SaaS initiatives',
      features: [
        'Up to 2 micro SaaS modules',
        'Basic AI automations (NLP, classification)',
        'Email support',
        'Monthly optimization report',
      ],
      cta: 'mailto:kleber@ziontechgroup.com?subject=Starter Plan Subscription',
    },
    {
      name: 'Growth',
      price: '$899',
      cadence: 'per month',
      idealFor: 'SMBs scaling AI and automation across teams',
      features: [
        'Up to 6 micro SaaS modules',
        'Custom ML models and dashboards',
        'Priority support (SLA 8h)',
        'Quarterly strategy workshop',
      ],
      cta: 'mailto:kleber@ziontechgroup.com?subject=Growth Plan Subscription',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      cadence: 'annual or multi-year',
      idealFor: 'Enterprises with compliance, SSO, SLOs, and integrations',
      features: [
        'Unlimited modules and users',
        'Dedicated squad (PM, Eng, DS, SRE)',
        'On-prem/VPC deployment options',
        'Compliance: SOC 2 readiness, HIPAA, ISO 27001',
      ],
      cta: 'mailto:kleber@ziontechgroup.com?subject=Enterprise Plan Consultation',
    },
  ];

  const implementationRates = [
    { item: 'AI Model Development', range: '$5,000 - $50,000/project' },
    { item: 'Micro SaaS Build-out', range: '$10,000 - $120,000/project' },
    { item: 'Cloud Migration', range: '$5,000 - $75,000/project' },
    { item: 'DevOps & CI/CD', range: '$3,000 - $40,000/project' },
    { item: 'Cybersecurity Assessment', range: '$2,500 - $25,000/project' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Pricing</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Transparent, flexible pricing with clear ROI. Choose a subscription plan or engage us for fixed-price implementation projects.</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-2 text-gray-600">{plan.idealFor}</div>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="ml-2 text-gray-500">{plan.cadence}</span>
              </div>
              <ul className="mt-6 space-y-2 text-gray-700">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center"><span className="text-green-600 mr-2">✓</span>{f}</li>
                ))}
              </ul>
              <a href={plan.cta} className="mt-6 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">Get started</a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {implementationRates.map((r) => (
              <div key={r.item} className="flex items-center justify-between border rounded-lg p-4">
                <div className="text-gray-900 font-medium">{r.item}</div>
                <div className="text-gray-600">{r.range}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">For detailed quotes, email <a className="text-blue-600 hover:text-blue-700" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> or call <a className="text-blue-600 hover:text-blue-700" href="tel:+13024640950">+1 302 464 0950</a>.</p>
        </div>
      </section>
    </div>
  );
}

