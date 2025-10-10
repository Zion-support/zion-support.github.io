'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Globe } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 999, annual: 9999 },
      features: [
        'Basic AI Integration',
        'Email Support',
        '5 User Accounts',
        'Basic Analytics',
        'Standard Security'
      ],
      popular: false,
      icon: Zap
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 2499, annual: 24999 },
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        '25 User Accounts',
        'Advanced Analytics',
        'Enhanced Security',
        'Custom Integrations',
        'Training & Onboarding'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 4999, annual: 49999 },
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Unlimited Users',
        'Real-time Analytics',
        'Enterprise Security',
        'Custom Development',
        'Dedicated Account Manager',
        'SLA Guarantee'
      ],
      popular: false,
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Simple,
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Transparent
              </span>
              {' '}Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our commitment to excellence and 24/7 support.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual <span className="text-cyan-400">(Save 20%)</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/consultation"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Solutions */}
          <div className="mt-20 text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
              <p className="text-xl text-gray-300 mb-8">
                We understand that every business is unique. Let's create a tailored solution that perfectly fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h4>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h4>
                <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-3">What support is included?</h4>
                <p className="text-gray-300">All plans include support. Professional and Enterprise plans get priority support with faster response times.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h4>
                <p className="text-gray-300">Yes, we offer custom pricing for large enterprises with specific requirements. Contact us to discuss.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;