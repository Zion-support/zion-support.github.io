'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Users, 
  Shield, 
  Cloud,
  Brain,
  TrendingUp,
  Clock
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: '$2,999', yearly: '$29,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard',
        'Up to 5 users',
        '10GB storage',
        'Basic security features'
      ],
      popular: false,
      icon: Users,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: { monthly: '$7,999', yearly: '$79,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions',
        'Up to 25 users',
        '100GB storage',
        'Advanced security features',
        'Custom integrations'
      ],
      popular: true,
      icon: Brain,
      color: 'cyan'
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      period: { monthly: '', yearly: '' },
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee',
        'Unlimited users',
        'Unlimited storage',
        'Enterprise security',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false,
      icon: Shield,
      color: 'purple'
    }
  ];

  const microSaasPlans = [
    {
      name: 'Basic',
      price: { monthly: '$99', yearly: '$990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Essential micro SAAS tools for small teams',
      features: [
        '5 AI tools included',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        'Up to 10 users'
      ],
      icon: Zap,
      color: 'green'
    },
    {
      name: 'Pro',
      price: { monthly: '$299', yearly: '$2,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Advanced micro SAAS suite for growing businesses',
      features: [
        '15 AI tools included',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Up to 50 users',
        'API access',
        'White-label options'
      ],
      icon: TrendingUp,
      color: 'blue'
    },
    {
      name: 'Enterprise',
      price: { monthly: '$799', yearly: '$7,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Complete micro SAAS ecosystem for large organizations',
      features: [
        'All 50+ AI tools',
        'Custom analytics',
        '24/7 support',
        'Unlimited integrations',
        'Unlimited users',
        'Custom development',
        'Dedicated support'
      ],
      icon: Cloud,
      color: 'purple'
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Tools',
      price: '$199/month',
      description: 'Access to premium AI tools and features',
      icon: Brain
    },
    {
      name: 'Priority Support',
      price: '$299/month',
      description: '24/7 priority support with guaranteed response times',
      icon: Clock
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Custom features and integrations tailored to your needs',
      icon: Zap
    },
    {
      name: 'Training & Onboarding',
      price: '$499/session',
      description: 'Comprehensive training sessions for your team',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-scan-line">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Main Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI & IT Solutions Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`quantum-card p-8 hover:scale-105 transition-all duration-300 group relative ${
                    plan.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-${plan.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 text-${plan.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {plan.price[billingPeriod as keyof typeof plan.price]}
                      </span>
                      <span className="text-gray-400 text-lg">
                        {plan.period[billingPeriod as keyof typeof plan.period]}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Micro SAAS Solutions Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={index}
                  className="cyber-card p-8 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-${plan.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 text-${plan.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {plan.price[billingPeriod as keyof typeof plan.price]}
                      </span>
                      <span className="text-gray-400 text-lg">
                        {plan.period[billingPeriod as keyof typeof plan.period]}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full block text-center py-3 px-6 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <addon.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{addon.price}</div>
                    <Link
                      to="/contact"
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="cyber-card p-6">
                <h3 className="text-lg font-bold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-lg font-bold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Absolutely! For large organizations with specific needs, we offer custom pricing and tailored solutions. Contact us to discuss your requirements.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-lg font-bold text-white mb-2">What's included in the free trial?</h3>
                <p className="text-gray-300">Our free trial includes access to all basic features, 24/7 support, and a dedicated onboarding specialist to help you get started.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-lg font-bold text-white mb-2">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for any of our plans. We believe in transparent pricing with no hidden costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="quantum-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 holographic-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the perfect plan for your business and start transforming with AI and IT solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
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