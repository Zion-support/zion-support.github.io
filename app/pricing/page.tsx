'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Award, Globe, Brain, Cloud, Code, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Basic AI automation',
        'Email support',
        'Standard analytics',
        'Up to 5 users',
        'Basic integrations',
        'Monthly reports'
      ],
      limitations: [
        'Limited AI models',
        'Basic customization',
        'Standard SLA'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/20',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 799, yearly: 7990 },
      features: [
        'Advanced AI automation',
        'Priority support',
        'Advanced analytics',
        'Up to 25 users',
        'Custom integrations',
        'Real-time reports',
        'API access',
        'Custom AI models'
      ],
      limitations: [
        'Limited custom development',
        'Standard security features'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-400/20',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 1999, yearly: 19990 },
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Unlimited users',
        'Full custom development',
        'Real-time dashboards',
        'Full API access',
        'Custom AI training',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment',
        'Advanced security'
      ],
      limitations: [],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/20',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Training & Support',
      description: 'Additional training sessions and support hours',
      price: { monthly: 199, yearly: 1990 },
      features: ['Monthly training sessions', 'Additional support hours', 'Custom documentation']
    },
    {
      name: 'Advanced Analytics',
      description: 'Enhanced reporting and analytics capabilities',
      price: { monthly: 99, yearly: 990 },
      features: ['Custom dashboards', 'Advanced reporting', 'Data export']
    },
    {
      name: 'Priority Support',
      description: 'Faster response times and dedicated support',
      price: { monthly: 149, yearly: 1490 },
      features: ['2-hour response time', 'Dedicated support agent', 'Phone support']
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What happens if I exceed my user limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or purchase additional user licenses.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing for organizations with specific needs. Contact our sales team to discuss your requirements.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom billing for enterprise clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Choose the plan that fits your business needs
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              All plans include our core AI and IT services. Scale up as your business grows 
              with no hidden fees or surprises.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-green-400">(Save 20%)</span>
              </span>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-cyan-400">
                        ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm">
                        Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full cyber-button inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    ${billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}
                    <span className="text-gray-400 text-lg ml-1">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already using our AI and IT solutions to transform their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;