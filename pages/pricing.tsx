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
      </main>
      <Footer />
    </>
  );
}

