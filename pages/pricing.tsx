import React from 'react';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/seo/SEOHead';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Great for prototypes and early validation.',
    features: ['Basic components', 'Email support', 'Community access']
  },
  {
    name: 'Growth',
    price: '$499/mo',
    description: 'Everything to scale reliably and securely.',
    features: ['Production SLA', 'Priority support', 'Security reviews', 'Quarterly optimization']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions with white-glove delivery.',
    features: ['Dedicated team', 'Custom integrations', 'Security & compliance', 'Executive reporting']
  }
];

// Detailed service pricing for reference
const servicePricing = [
  {
    name: 'AI Development',
    description: 'Model prototyping, fine-tuning, RAG, and integrations.',
    pricing: [
      { tier: 'POC', price: '$5,000–$15,000' },
      { tier: 'MVP', price: '$20,000–$60,000' },
      { tier: 'Enterprise', price: '$75,000+' }
    ]
  },
  {
    name: 'Micro SaaS',
    description: 'Idea validation, build, payments, analytics, hosting.',
    pricing: [
      { tier: 'Starter', price: '$8,000–$25,000' },
      { tier: 'Growth', price: '$30,000–$80,000' },
      { tier: 'Scale', price: '$100,000+' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    description: 'AWS/GCP/Azure architecture, IaC, observability.',
    pricing: [
      { tier: 'Audit & Setup', price: '$3,000–$12,000' },
      { tier: 'Migration', price: '$10,000–$40,000' },
      { tier: 'Managed', price: 'from $2,000/mo' }
    ]
  },
  {
    name: 'Cybersecurity',
    description: 'Pen-testing, hardening, SOC, compliance.',
    pricing: [
      { tier: 'Security Audit', price: '$4,000–$15,000' },
      { tier: 'Remediation', price: '$8,000–$50,000' },
      { tier: 'Managed SOC', price: 'from $3,000/mo' }
    ]
  },
  {
    name: 'Data & Analytics',
    description: 'Warehouses, pipelines, BI, ML ops.',
    pricing: [
      { tier: 'Strategy & Setup', price: '$5,000–$20,000' },
      { tier: 'Dashboards', price: '$6,000–$25,000' },
      { tier: 'ML Ops', price: '$25,000+' }
    ]
  },
  {
    name: 'Web & Mobile',
    description: 'React/Next.js, React Native, APIs.',
    pricing: [
      { tier: 'Website', price: '$3,000–$15,000' },
      { tier: 'MVP App', price: '$20,000–$70,000' },
      { tier: 'Enterprise', price: '$80,000+' }
    ]
  }
];

export default function PricingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pricing — Zion Tech Group',
    url: 'https://ziontechgroup.com/pricing'
  };

  return (
    <>
      <SEOHead
        title="Pricing — Zion Tech Group"
        description="Transparent pricing for scalable AI, IT, and micro SaaS solutions."
        keywords="pricing, enterprise pricing, ai pricing, it services pricing"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 text-center">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, predictable pricing</h1>
            <p className="text-lg text-gray-600">Choose a plan or request a custom quote for your needs.</p>
          </div>
        </section>
        
        {/* Main Pricing Tiers */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="border rounded-xl p-6 text-left">
                <h2 className="text-xl font-semibold text-gray-900">{tier.name}</h2>
                <div className="text-3xl font-bold text-gray-900 mt-2">{tier.price}</div>
                <p className="text-gray-600 mt-2">{tier.description}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="/request-quote" className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">Get started</a>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Service Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Service-Specific Pricing</h2>
            <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              We tailor solutions to your needs. Below are typical starting ranges observed in the market. Get a custom quote at any time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePricing.map((service) => (
                <div key={service.name} className="border rounded-xl p-6 shadow-sm bg-white">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                    {service.pricing.map((item) => (
                      <li key={item.tier}>{item.tier}: {item.price}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

