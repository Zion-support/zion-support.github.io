import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter', price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with technology',
      features: [
        'Basic AI integration',
        'Cloud setup & migration',
        'Monthly support',
        'Basic security audit',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing businesses with complex technology needs',
      features: [
        'Advanced AI solutions',
        'Full IT infrastructure management',
        '24/7 support',
        'Comprehensive security suite',
        'Priority support',
        'Custom development',
        'Monthly reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI development',
        'Dedicated team',
        'On-site support',
        'Advanced security & compliance',
        'White-glove service',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <div>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our technology services. Choose the plan that fits your business needs." />
      </Head>
      
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include our commitment to excellence and ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-2 ${
                  plan.popular ? 'border-blue-600' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change plans later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. We&apos;ll prorate any changes to your billing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s included in support?</h3>
                <p className="text-gray-600">All plans include email support. Professional and Enterprise plans include priority and 24/7 support respectively.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-600">Absolutely! Our Enterprise plan is fully customizable, and we can create custom solutions for any plan.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a contract?</h3>
                <p className="text-gray-600">We offer flexible month-to-month billing with no long-term contracts required.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
              <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}