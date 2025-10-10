'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Settings, Target, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, CheckSquare, FileText } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: '$2,999', yearly: '$29,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI consultation and strategy',
        'Cloud infrastructure setup',
        'Security assessment and implementation',
        'Email and phone support',
        'Monthly performance reports',
        'Up to 5 users',
        'Basic analytics dashboard',
        'Standard SLA (99.5% uptime)'
      ],
      popular: false,
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: { monthly: '$5,999', yearly: '$59,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Ideal for growing businesses that need comprehensive AI and IT solutions',
      features: [
        'Advanced AI model development',
        'Custom cloud architecture',
        'Comprehensive security suite',
        'Priority support (4-hour response)',
        'Weekly performance reports',
        'Up to 25 users',
        'Advanced analytics and BI',
        'Premium SLA (99.9% uptime)',
        'Custom integrations',
        'Dedicated account manager',
        'Training and documentation',
        'API access and webhooks'
      ],
      popular: true,
      icon: Star,
      color: 'from-cyan-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: { monthly: '$12,999', yearly: '$129,990' },
      period: { monthly: '/month', yearly: '/year' },
      description: 'Complete solution for large enterprises with complex requirements',
      features: [
        'Full AI transformation program',
        'Multi-cloud and hybrid infrastructure',
        'Enterprise-grade security and compliance',
        '24/7 dedicated support',
        'Real-time monitoring and alerts',
        'Unlimited users',
        'Custom AI model training',
        'Enterprise SLA (99.99% uptime)',
        'White-label solutions',
        'On-site consulting and training',
        'Custom development and integration',
        'Dedicated infrastructure',
        'Advanced reporting and analytics',
        'Compliance and audit support',
        'Disaster recovery and backup'
      ],
      popular: false,
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      price: '$2,500/month',
      description: 'Custom AI model development and training for your specific use cases',
      icon: Brain
    },
    {
      name: 'Quantum Computing Access',
      price: '$5,000/month',
      description: 'Access to quantum computing resources for advanced problem solving',
      icon: Cpu
    },
    {
      name: 'Advanced Security Suite',
      price: '$1,500/month',
      description: 'Enhanced security monitoring, threat detection, and compliance management',
      icon: Lock
    },
    {
      name: 'Custom Development',
      price: '$200/hour',
      description: 'Custom software development and integration services',
      icon: Code
    }
  ];

  const faqs = [
    {
      question: 'What is included in the setup fee?',
      answer: 'Setup includes initial consultation, infrastructure configuration, security implementation, team training, and go-live support. No hidden costs.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us for a personalized quote.'
    },
    {
      question: 'What support is included?',
      answer: 'All plans include email and phone support. Professional and Enterprise plans include priority support with faster response times.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all new customers. If you\'re not satisfied, we\'ll refund your payment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Pricing | Zion Tech Group - Transparent AI and IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. No hidden fees, 30-day money-back guarantee." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions pricing, enterprise AI cost, technology consulting rates" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Pricing Plans">
            <span className="text-cyan-400 neon-text">Pricing</span> Plans
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transparent, flexible pricing for <span className="text-cyan-400 font-bold">AI and IT solutions</span> that scale with your business. 
            No hidden fees, no surprises.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-slate-800/50 rounded-lg p-1 border border-slate-700">
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
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
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
                className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                  plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price[billingCycle]}</span>
                      <span className="text-gray-300 text-lg">{plan.period[billingCycle]}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <addon.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</p>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="cyber-card">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;