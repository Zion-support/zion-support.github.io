'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star, Zap, Shield, Brain, Cloud } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI Integration (1-2 AI models)',
        'Cloud Infrastructure Setup (AWS/Azure)',
        'Email Support (48-hour response)',
        'Monthly Performance Reports',
        'Basic Analytics Dashboard',
        'Up to 5 users',
        'Standard Security Features',
        'Basic Training (2 hours)',
        '99.5% Uptime SLA'
      ],
      popular: false,
      category: 'AI & IT Starter'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced AI and IT needs',
      features: [
        'Advanced AI Solutions (3-5 AI models)',
        'Custom Development (up to 40 hours/month)',
        'Priority Support (24-hour response)',
        'Weekly Performance Reports',
        'Advanced Analytics & BI Dashboard',
        'API Access & Integration',
        'Up to 25 users',
        'Advanced Security & Compliance',
        'Comprehensive Training (8 hours)',
        '99.9% Uptime SLA',
        'Dedicated Account Manager'
      ],
      popular: true,
      category: 'AI & IT Professional'
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'Comprehensive solution for large enterprises with complex requirements',
      features: [
        'Full AI Suite (unlimited models)',
        'Unlimited Custom Development',
        '24/7 Premium Support',
        'Real-time Performance Monitoring',
        'Enterprise Analytics & BI',
        'Full API Access & Custom Integrations',
        'Unlimited users',
        'Enterprise Security & Compliance',
        'Comprehensive Training Program',
        '99.99% Uptime SLA',
        'Dedicated Success Team',
        'Custom SLA Terms',
        'On-site Support Available'
      ],
      popular: false,
      category: 'AI & IT Enterprise'
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model training for your specific use case',
      price: '$5,000',
      period: '/model'
    },
    {
      name: 'Additional Support Hours',
      description: 'Extra development and support hours beyond plan limits',
      price: '$150',
      period: '/hour'
    },
    {
      name: 'Priority Implementation',
      description: 'Expedited project delivery and implementation',
      price: '$10,000',
      period: '/project'
    },
    {
      name: 'Custom Integrations',
      description: 'Integration with your existing systems and tools',
      price: '$3,000',
      period: '/integration'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and take effect immediately.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you approach your limits and provide options to upgrade or purchase additional resources.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom enterprise pricing for organizations with unique requirements. Contact us for a personalized quote.'
    },
    {
      question: 'What support options are available?',
      answer: 'Support options vary by plan, from email support to 24/7 premium support with dedicated account managers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs with flexible options and enterprise solutions." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, cloud computing pricing, enterprise solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Simple
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions with flexible options to scale.
            </p>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">
                        {billingCycle === 'yearly' ? plan.price.replace('$', '$').replace(',', '') : plan.price}
                      </span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-400 mt-2">Save 20% with yearly billing</p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enhance your plan with these optional add-ons
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-cyan-400">{addon.price}</span>
                    <span className="text-gray-300 ml-1">{addon.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and plans
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Start your free trial today or contact us for a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PricingPage;