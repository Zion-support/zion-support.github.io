'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star, Zap, Shield, Brain, Cloud } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      icon: Zap,
      features: [
        'Basic AI Analytics',
        'Email Support',
        '5 AI Models',
        '1GB Data Storage',
        'Basic Reporting',
        'Mobile App Access'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 499,
      yearlyPrice: 4990,
      icon: Shield,
      features: [
        'Advanced AI Analytics',
        'Priority Support',
        '20 AI Models',
        '10GB Data Storage',
        'Advanced Reporting',
        'API Access',
        'Custom Integrations',
        'Team Collaboration'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      icon: Brain,
      features: [
        'Enterprise AI Suite',
        '24/7 Dedicated Support',
        'Unlimited AI Models',
        'Unlimited Data Storage',
        'Custom Reporting',
        'Full API Access',
        'White-label Solutions',
        'Advanced Security',
        'Custom Training',
        'SLA Guarantee'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const addOns = [
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud hosting and management',
      price: 299,
      icon: Cloud
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Advanced security and compliance tools',
      price: 199,
      icon: Shield
    },
    {
      name: 'Custom Development',
      description: 'Tailored solutions for your specific needs',
      price: 150,
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Choose the perfect AI and IT solution plan for your business. Flexible pricing options with no hidden fees. Start your transformation today." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, business plans, enterprise solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple <span className="text-cyan-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI solutions 
            with no hidden fees or long-term contracts.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400 text-lg">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Add-on Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">${addon.price}/month</div>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Is there a free trial available?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans with no credit card required.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">What support options are available?</h3>
              <p className="text-gray-300">We provide email support for all plans, with priority support for Professional and 24/7 dedicated support for Enterprise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
