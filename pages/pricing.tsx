import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Check, Star, Zap, Users, Building } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      features: [
        'Basic AI consultation',
        'Up to 5 team members',
        'Email support',
        'Basic analytics',
        'Standard deployment',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies',
      icon: <Users className="h-8 w-8 text-purple-600" />,
      features: [
        'Advanced AI solutions',
        'Up to 25 team members',
        'Priority support',
        'Advanced analytics',
        'Custom deployment',
        'Weekly reports',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      icon: <Building className="h-8 w-8 text-green-600" />,
      features: [
        'Full AI transformation',
        'Unlimited team members',
        '24/7 dedicated support',
        'Enterprise analytics',
        'White-label solutions',
        'Real-time reports',
        'Full API access',
        'Custom development',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <Layout title="Pricing - Zion Tech Group" description="Transparent pricing for AI and technology solutions. Choose the plan that fits your business needs.">
      <div className="min-h-screen pt-24 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and technology solutions.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing differences.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What's included in the Enterprise plan?
                </h3>
                <p className="text-gray-600">
                  The Enterprise plan includes everything in our Professional plan, plus dedicated support, 
                  custom development, SLA guarantees, and a dedicated account manager. Contact us for a 
                  custom quote based on your specific needs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Do you offer custom solutions?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We specialize in custom AI and technology solutions. Our Enterprise plan 
                  includes custom development, but we can also work with you on one-off projects or 
                  specialized requirements.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-600">
                  We offer a 30-day free trial for our Professional plan. This gives you full access 
                  to all features so you can evaluate our solutions before committing to a paid plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your needs and find the perfect solution for your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Sales
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}