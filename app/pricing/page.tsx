'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our 
                commitment to excellence and ongoing support.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and services.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Can I change plans anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                  at the beginning of your next billing cycle.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom solutions?</h3>
                <p className="text-gray-300">
                  Absolutely! Our Enterprise plan includes fully customized solutions tailored 
                  to your specific business requirements.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">What support is included?</h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include 
                  priority support and dedicated account managers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-lg"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;