'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Crown, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: '$299', yearly: '$2,999' },
      icon: Zap,
      popular: false,
      features: [
        'AI Content Generation (5,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Up to 3 team members',
        'Standard AI Models',
        'Basic Integration Support'
      ],
      limitations: [
        'Limited AI model access',
        'Basic reporting only',
        'Standard support hours'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      price: { monthly: '$799', yearly: '$7,999' },
      icon: Shield,
      popular: true,
      features: [
        'AI Content Generation (25,000 words/month)',
        'Advanced Analytics Dashboard',
        'AI Customer Support Bot',
        'Priority Support',
        'Up to 10 team members',
        'Advanced AI Models',
        'Custom Integration Support',
        'API Access',
        'Advanced Reporting',
        '24/7 Support'
      ],
      limitations: [
        'Limited custom AI training',
        'Standard security features'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Complete AI solution for large organizations',
      price: { monthly: '$1,999', yearly: '$19,999' },
      icon: Crown,
      popular: false,
      features: [
        'Unlimited AI Content Generation',
        'Custom AI Models & Training',
        'Advanced Security Suite',
        'Dedicated Account Manager',
        'Unlimited team members',
        'White-label Solutions',
        'Custom Integrations',
        'Advanced Analytics & BI',
        '24/7 Premium Support',
        'SLA Guarantee',
        'Custom AI Development',
        'On-premise Deployment'
      ],
      limitations: []
    }
  ];

  const microSaasPlans = [
    {
      name: 'AI Analytics Dashboard Pro',
      price: '$89/month',
      features: ['Real-time AI analytics', 'Predictive forecasting', 'Custom AI models', 'Automated reporting'],
      popular: true
    },
    {
      name: 'AI Customer Support Suite',
      price: '$149/month',
      features: ['Advanced AI chatbot', 'Sentiment analysis', 'Multi-language support', 'Human agent handoff'],
      popular: false
    },
    {
      name: 'AI Content Generator Pro',
      price: '$99/month',
      features: ['Multi-format content generation', 'Brand voice customization', 'SEO optimization', 'Content scheduling'],
      popular: true
    },
    {
      name: 'AI Workflow Automation',
      price: '$179/month',
      features: ['AI workflow optimization', 'Smart task scheduling', 'Machine learning insights', 'Custom AI models'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose from flexible plans designed for businesses of all sizes." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, micro SaaS pricing, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT services with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
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
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-green-400">(Save 20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:bg-white/10 ${
                    plan.popular
                      ? 'border-cyan-400 ring-2 ring-cyan-400/20 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {plan.price[billingCycle as keyof typeof plan.price]}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
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

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Individual AI-powered tools for specific business needs. Mix and match as needed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/10 ${
                    plan.popular
                      ? 'border-cyan-400 ring-2 ring-cyan-400/20'
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex justify-center mb-4">
                      <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{plan.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do you offer custom enterprise solutions?
                </h3>
                <p className="text-gray-300">
                  Absolutely! We offer custom enterprise solutions tailored to your specific needs. Contact our sales team to discuss your requirements.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What support do you provide?
                </h3>
                <p className="text-gray-300">
                  We provide comprehensive support including documentation, tutorials, email support, and for higher tiers, 24/7 phone support and dedicated account managers.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes! We offer a 14-day free trial for all our plans. No credit card required to get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your specific needs and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;