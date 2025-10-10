'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, Zap, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: '$2,999', yearly: '$29,990' },
      period: billingCycle === 'monthly' ? '/month' : '/year',
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
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: { monthly: '$7,999', yearly: '$79,990' },
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI Solutions',
        'Custom AI Model Training',
        'Priority Support',
        'Real-time Analytics',
        'Advanced Security',
        'Up to 25 users',
        '100GB storage',
        'API Access',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: { monthly: '$19,999', yearly: '$199,990' },
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Complete AI transformation for large enterprises',
      features: [
        'Full AI Suite',
        'Custom AI Development',
        '24/7 Premium Support',
        'Advanced Analytics & BI',
        'Enterprise Security',
        'Unlimited users',
        'Unlimited storage',
        'Full API Access',
        'Custom Integrations',
        'Dedicated Support Team',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const microSaasPlans = [
    {
      name: 'AI CRM',
      price: '$149',
      period: '/month',
      description: 'AI-powered customer relationship management',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting'],
      popular: true
    },
    {
      name: 'AI Analytics',
      price: '$199',
      period: '/month',
      description: 'Real-time business intelligence dashboard',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
      popular: false
    },
    {
      name: 'AI Content Studio',
      price: '$299',
      period: '/month',
      description: 'Complete content creation suite',
      features: ['AI Writing', 'Image Generation', 'Video Editing', 'Social Media Automation'],
      popular: false
    },
    {
      name: 'AI Chatbot',
      price: '$99',
      period: '/month',
      description: 'Intelligent chatbot builder',
      features: ['No-code Builder', 'Multi-channel Support', 'NLP', 'Analytics'],
      popular: true
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI and IT Solutions Pricing</title>
        <meta name="description" content="View our transparent pricing for AI and IT solutions. Choose from flexible plans designed to scale with your business needs." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, enterprise pricing, micro saas pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our core AI and IT solutions 
                with flexible options to scale as you grow.
              </p>
            </div>
          </section>

          {/* Billing Toggle */}
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
                  <div className="flex">
                    <button
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        billingCycle === 'monthly'
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle('yearly')}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        billingCycle === 'yearly'
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      Yearly
                      <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Pricing Plans */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Enterprise Plans</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions designed for businesses of all sizes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative ${
                      plan.popular ? 'ring-2 ring-cyan-400/50 scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-6">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price[billingCycle]}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                        plan.popular
                          ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                          : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Pricing */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Micro SAAS Solutions</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Affordable, powerful AI-driven tools for modern businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {microSaasPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 relative ${
                      plan.popular ? 'ring-2 ring-cyan-400/50' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-300">
                  Have questions about our pricing? We're here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
                  <p className="text-gray-300">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing differences.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
                  <p className="text-gray-300">
                    Yes, we offer custom pricing for enterprise clients with specific requirements. 
                    Contact our sales team to discuss your needs.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
                  <p className="text-gray-300">
                    All plans include email support. Professional and Enterprise plans include priority support, 
                    and Enterprise includes 24/7 premium support with dedicated account managers.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Is there a free trial?</h3>
                  <p className="text-gray-300">
                    Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Choose your plan and start transforming your business with AI and IT solutions today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </button>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

PricingPage.displayName = 'PricingPage';

export default PricingPage;