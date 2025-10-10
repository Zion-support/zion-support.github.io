'use client';
import React, { useState } from 'react';
import { CheckCircle, X, ArrowRight, Star, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 2000,
      yearlyPrice: 20000,
      features: [
        'Basic AI Analytics',
        'Email Support',
        '5 AI Models',
        '10GB Storage',
        'Basic Reporting',
        'Mobile App Access'
      ],
      limitations: [
        'Limited API Calls',
        'No Custom Models',
        'Basic Support Only'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      features: [
        'Advanced AI Analytics',
        'Priority Support',
        'Unlimited AI Models',
        '100GB Storage',
        'Advanced Reporting',
        'API Access',
        'Custom Integrations',
        'Training & Onboarding'
      ],
      limitations: [],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex requirements',
      monthlyPrice: 15000,
      yearlyPrice: 150000,
      features: [
        'Enterprise AI Solutions',
        '24/7 Dedicated Support',
        'Custom AI Development',
        'Unlimited Storage',
        'Custom Reporting',
        'Full API Access',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Training',
        'SLA Guarantee'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Additional Storage',
      description: 'Extra storage for your data and models',
      price: 50,
      unit: 'per 100GB/month'
    },
    {
      name: 'Priority Support',
      description: 'Faster response times and dedicated support',
      price: 200,
      unit: 'per month'
    },
    {
      name: 'Custom Development',
      description: 'Bespoke AI solutions tailored to your needs',
      price: 150,
      unit: 'per hour'
    },
    {
      name: 'Training & Onboarding',
      description: 'Comprehensive training for your team',
      price: 200,
      unit: 'per session'
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms for annual subscriptions.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase add-ons to continue using our services.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing and solutions for enterprise clients. Contact our sales team to discuss your specific needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services 
              with no hidden fees or surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
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
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 group hover:scale-105 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.yearlyPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-400">
                      Save ${((plan.monthlyPrice * 12) - plan.yearlyPrice).toLocaleString()}/year
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-400 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Add-ons & Extras</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services and features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="text-cyan-400 font-semibold">
                  ${addon.price} {addon.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Choose your plan and start transforming your business with our AI and IT solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;