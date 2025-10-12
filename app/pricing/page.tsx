'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, X, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 299, annual: 249 },
      features: [
        'Basic AI Chatbot',
        'Email Support',
        '5GB Storage',
        'Up to 1,000 interactions/month',
        'Basic Analytics',
        'Standard Templates'
      ],
      limitations: [
        'No Custom Training',
        'Limited Integrations',
        'Basic Reporting'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 799, annual: 649 },
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        '50GB Storage',
        'Up to 10,000 interactions/month',
        'Advanced Analytics',
        'Custom Training',
        'API Access',
        'Multiple Integrations',
        'Custom Branding',
        'Advanced Reporting'
      ],
      limitations: [
        'Limited Custom Development',
        'Standard SLA'
      ],
      color: 'from-cyan-500 to-blue-600',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 1999, annual: 1599 },
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Unlimited Storage',
        'Unlimited Interactions',
        'Real-time Analytics',
        'Custom AI Models',
        'Full API Access',
        'All Integrations',
        'White-label Solution',
        'Custom Development',
        'Dedicated Account Manager',
        'SLA Guarantee',
        'On-premise Deployment',
        'Advanced Security'
      ],
      limitations: [],
      color: 'from-purple-500 to-pink-600',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional Storage',
      description: 'Extra storage for your data and models',
      price: '$50/month per 100GB'
    },
    {
      name: 'Custom Development',
      description: 'Bespoke features and integrations',
      price: '$150/hour'
    },
    {
      name: 'Training & Support',
      description: 'Additional training sessions and support',
      price: '$200/hour'
    },
    {
      name: 'Priority Support',
      description: 'Faster response times and dedicated support',
      price: '$100/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect plan for your business. All plans include our core AI solutions and 24/7 support.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8">
                <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
                {isAnnual && (
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20'
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-green-400 text-sm">
                        Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Add-on Services
              </h2>
              <p className="text-xl text-gray-300">
                Enhance your plan with additional services tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <p className="text-cyan-400 font-semibold">{addon.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'Can I change my plan anytime?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'We offer a 14-day free trial for all our plans. No credit card required to get started.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
                },
                {
                  question: 'Do you offer custom pricing?',
                  answer: 'Yes, we offer custom pricing for enterprise customers with specific requirements. Contact us to discuss your needs.'
                },
                {
                  question: 'What happens if I exceed my plan limits?',
                  answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional capacity as needed.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions to transform their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PricingPage;