'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, DollarSign } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const aiServicesPricing = [
    {
      name: 'AI Starter',
      price: { monthly: 999, yearly: 9999 },
      description: 'Perfect for small businesses exploring AI',
      features: [
        'Basic AI chatbot',
        'Simple analytics',
        'Email support',
        'Up to 1,000 interactions/month',
        'Standard integrations'
      ],
      popular: false,
      category: 'ai'
    },
    {
      name: 'AI Professional',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Advanced AI models',
        'Custom training',
        'Priority support',
        'Up to 10,000 interactions/month',
        'Advanced integrations',
        'API access'
      ],
      popular: true,
      category: 'ai'
    },
    {
      name: 'AI Enterprise',
      price: { monthly: 9999, yearly: 99999 },
      description: 'Enterprise-grade AI solutions',
      features: [
        'Custom AI models',
        'Dedicated support',
        'Unlimited interactions',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      category: 'ai'
    }
  ];

  const itServicesPricing = [
    {
      name: 'IT Basic',
      price: { monthly: 1999, yearly: 19999 },
      description: 'Essential IT services for small businesses',
      features: [
        'Basic cloud setup',
        'Email support',
        'Monthly reports',
        'Standard security',
        'Basic monitoring'
      ],
      popular: false,
      category: 'it'
    },
    {
      name: 'IT Professional',
      price: { monthly: 4999, yearly: 49999 },
      description: 'Comprehensive IT solutions',
      features: [
        'Advanced cloud services',
        'Priority support',
        'Weekly reports',
        'Advanced security',
        '24/7 monitoring',
        'Backup solutions'
      ],
      popular: true,
      category: 'it'
    },
    {
      name: 'IT Enterprise',
      price: { monthly: 19999, yearly: 199999 },
      description: 'Enterprise IT infrastructure',
      features: [
        'Custom solutions',
        'Dedicated team',
        'Real-time reports',
        'Enterprise security',
        '24/7 support',
        'Disaster recovery'
      ],
      popular: false,
      category: 'it'
    }
  ];

  const getPrice = (pricing: { monthly: number; yearly: number }) => {
    return billingCycle === 'monthly' ? pricing.monthly : pricing.yearly;
  };

  const getSavings = (pricing: { monthly: number; yearly: number }) => {
    const monthlyTotal = pricing.monthly * 12;
    const yearlyTotal = pricing.yearly;
    const savings = monthlyTotal - yearlyTotal;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the plan that fits your business needs with 14-day free trials." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, business solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-cyan-400 mr-2" />
                <span className="text-2xl font-bold text-white">Transparent Pricing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Simple, Transparent{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trials.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`mx-4 w-16 h-8 rounded-full p-1 transition-colors ${
                    billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                  }`} />
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="ml-2 text-sm text-green-400 font-semibold">
                    Save up to 20%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Services</h2>
              <p className="text-xl text-gray-300">Choose the AI solution that fits your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {aiServicesPricing.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700/50'
                  } hover:border-cyan-400/50 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${getPrice(plan.price).toLocaleString()}</span>
                      <span className="text-gray-300 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">
                        Save {getSavings(plan.price)}% vs monthly
                      </p>
                    )}
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Services</h2>
              <p className="text-xl text-gray-300">Comprehensive IT solutions for your business</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {itServicesPricing.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700/50'
                  } hover:border-cyan-400/50 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${getPrice(plan.price).toLocaleString()}</span>
                      <span className="text-gray-300 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">
                        Save {getSavings(plan.price)}% vs monthly
                      </p>
                    )}
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              All plans include 14-day free trials. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;