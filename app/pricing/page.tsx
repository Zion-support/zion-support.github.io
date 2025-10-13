'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Brain, BarChart3 } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 299, yearly: 2990 },
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Analytics Dashboard',
        'Basic Customer Support Bot',
        'Content Generation (1000 words/month)',
        'Email Support',
        'Standard Templates',
        'Basic Reporting'
      ],
      limitations: [
        'Limited to 5 users',
        'Basic AI models only',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 599, yearly: 5990 },
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Starter',
        'Advanced AI Models',
        'Custom AI Training',
        'Priority Support',
        'Advanced Analytics',
        'API Access',
        'Custom Integrations',
        'Advanced Security'
      ],
      limitations: [
        'Up to 25 users',
        'Premium response time',
        'Advanced features included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 1299, yearly: 12990 },
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Everything in Professional',
        'Unlimited Users',
        'Custom AI Development',
        'Dedicated Support Team',
        'White-label Solutions',
        'Advanced Security Suite',
        'Custom Deployment',
        '24/7 Phone Support',
        'SLA Guarantee'
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code generation and review',
      price: { monthly: 99, yearly: 990 },
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Advanced Analytics Suite',
      description: 'Comprehensive business intelligence and reporting',
      price: { monthly: 149, yearly: 1490 },
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      name: 'Custom Integration',
      description: 'Connect with your existing systems and tools',
      price: { monthly: 199, yearly: 1990 },
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const savings = {
    monthly: 0,
    yearly: 20
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Choose the perfect plan for your business. Transparent pricing for AI solutions, IT services, and digital transformation. Start with our free trial." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services cost, business automation pricing, technology consulting rates" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Choose the perfect plan for your business. All plans include our core AI solutions with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save {savings.yearly}%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm font-semibold">
                        Save ${plan.price.monthly * 12 - plan.price.yearly} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-center text-gray-400">
                        <span className="w-5 h-5 mr-3 flex-shrink-0 text-center">•</span>
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Add-ons & Extensions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional features and capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      {addon.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{addon.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                      ${billingCycle === 'monthly' ? addon.price.monthly : Math.floor(addon.price.yearly / 12)}
                    </span>
                    <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                      Add to Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a free trial available?</h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans. No credit card required to get started.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom enterprise solutions?</h3>
                <p className="text-gray-300">Yes, we provide custom solutions for large organizations. Contact our sales team for a personalized quote.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
