'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Brain, Cloud, Code, Network } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Up to 5 AI-powered tools',
        'Basic analytics dashboard',
        'Email support',
        'Standard security features',
        '1GB storage',
        'Basic integrations'
      ],
      popular: false,
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Up to 20 AI-powered tools',
        'Advanced analytics dashboard',
        'Priority support',
        'Enhanced security features',
        '10GB storage',
        'Advanced integrations',
        'Custom branding',
        'API access'
      ],
      popular: true,
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 999, yearly: 9990 },
      features: [
        'Unlimited AI-powered tools',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'Enterprise security features',
        'Unlimited storage',
        'Custom integrations',
        'White-label solution',
        'Dedicated account manager',
        'Custom training'
      ],
      popular: false,
      icon: <Shield className="w-8 h-8 text-purple-500" />
    }
  ];

  const services = [
    {
      name: 'AI Services',
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      price: 'Starting at $500/month',
      description: 'AI-powered solutions for your business'
    },
    {
      name: 'IT Services',
      icon: <Cloud className="w-6 h-6 text-green-400" />,
      price: 'Starting at $2,500/project',
      description: 'Comprehensive IT infrastructure services'
    },
    {
      name: 'Micro SaaS',
      icon: <Code className="w-6 h-6 text-purple-400" />,
      price: 'Starting at $99/month',
      description: 'Ready-to-use SaaS applications'
    },
    {
      name: '5G Solutions',
      icon: <Network className="w-6 h-6 text-orange-400" />,
      price: 'Starting at $5,000/project',
      description: '5G network implementation services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and digital transformation. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, plans, subscription, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-sm font-medium mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 text-sm text-green-400 font-medium">Save 20%</span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/20'
              } hover:border-blue-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'yearly' ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need something specific? We offer custom solutions tailored to your unique business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{service.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                <p className="text-blue-400 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing for large organizations?</h3>
              <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients. Contact us to discuss your specific needs.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial available?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans. No credit card required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses already using our solutions to grow and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
