'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, X, Star, Phone, Mail, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: '$2,999', yearly: '$29,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Up to 5 team members',
        'Email support',
        'Basic analytics dashboard',
        'Standard security features',
        'Monthly reporting'
      ],
      limitations: [
        'Limited AI model training',
        'Basic customization options',
        'Standard response times'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: { monthly: '$7,999', yearly: '$79,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Up to 25 team members',
        'Priority support',
        'Advanced analytics & reporting',
        'Enhanced security features',
        'Custom AI model training',
        'API access',
        'Weekly reporting',
        'Dedicated account manager'
      ],
      limitations: [
        'Limited custom integrations',
        'Standard SLA response times'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: { monthly: '$19,999', yearly: '$199,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Complete solution for large enterprises',
      features: [
        'Full AI suite & custom development',
        'Unlimited team members',
        '24/7 dedicated support',
        'Real-time analytics & insights',
        'Enterprise-grade security',
        'Custom AI model development',
        'Full API access & integrations',
        'Daily reporting & monitoring',
        'Dedicated success team',
        'Custom SLA agreements',
        'On-premises deployment options',
        'White-label solutions'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Training',
      price: '$1,999/month',
      description: 'Extra AI model training and optimization'
    },
    {
      name: 'Premium Support',
      price: '$999/month',
      description: '24/7 phone and chat support with 1-hour response time'
    },
    {
      name: 'Custom Integrations',
      price: 'Custom pricing',
      description: 'Bespoke integrations with your existing systems'
    },
    {
      name: 'Data Migration',
      price: '$2,999 one-time',
      description: 'Complete data migration and setup assistance'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you reach your limits and help you upgrade to a higher plan if needed.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for Enterprise customers with specific requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing | Zion Tech Group - AI & IT Solutions Pricing</title>
        <meta name="description" content="Choose the perfect plan for your business. Transparent pricing for AI and IT solutions starting from $2,999/month. Free trial available." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, business plans, enterprise pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple <span className="text-cyan-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI and IT solutions with transparent pricing.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span
                className={`${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
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
                key={plan.name}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-105'
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">
                      {plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-400 text-lg">
                      {plan.period[billingCycle]}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="space-y-2 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Limitations:</h4>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start">
                        <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Add-ons & Extensions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services and features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</p>
                <p className="text-gray-300 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business with AI and IT solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;