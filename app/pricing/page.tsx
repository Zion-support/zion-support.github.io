'use client';
<<<<<<< HEAD
import React, { useState } from 'react';

import { Phone, Mail, CheckCircle, Star, Zap, Brain, Cloud, Rocket, ArrowRight, ExternalLink, DollarSign, Clock, Users, Award, Shield } from 'lucide-react';
import { services, serviceCategories, contactInfo } from '../data/services';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const formatPrice = (pricing: typeof services[0]['pricing']) => {
    if (pricing.custom) {
      return 'Custom Pricing';
    }
    
    let price = pricing.starting;
    if (billingPeriod === 'year' && pricing.period === 'month') {
      price = price * 12 * 0.8; // 20% discount for annual billing
    }
    
    const period = billingPeriod === 'year' && pricing.period === 'month' ? 'year' : pricing.period;
    return `$${Math.round(price).toLocaleString()}/${period === 'month' ? 'mo' : period === 'year' ? 'yr' : 'one-time'}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'micro-saas': return Zap;
      case 'it': return Cloud;
      case 'emerging-tech': return Rocket;
      default: return Star;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-advanced cyber-text-advanced" data-text="Pricing">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transparent, competitive pricing for all our AI, IT, and Micro SAAS solutions. 
            Choose the perfect plan for your business needs.
          </p>
          
          {/* Contact Info Banner */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.phone}</div>
                  <div className="text-gray-400 text-sm">Call for custom pricing</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email for quotes</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ExternalLink className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.website}</div>
                  <div className="text-gray-400 text-sm">Visit our site</div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${billingPeriod === 'month' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'month' ? 'year' : 'month')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'year' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'year' ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-green-400">(20% off)</span>
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            return (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-500 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <CategoryIcon className="w-5 h-5 text-cyan-400" />
                        <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">
                          {serviceCategories.find(cat => cat.id === service.category)?.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-1 neon-text">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                    {service.new && (
                      <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                        <Zap className="w-3 h-3 mr-1" />
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-6 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {formatPrice(service.pricing)}
                    </div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        Market: ${service.marketPrice.min.toLocaleString()}-${service.marketPrice.max.toLocaleString()}
                      </div>
                    )}
                    {billingPeriod === 'year' && service.pricing.period === 'month' && (
                      <div className="text-sm text-green-400 font-medium">
                        Save 20% with annual billing
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="text-xs text-gray-300 bg-slate-800/50 rounded px-2 py-1">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Call Now
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Email
                    </a>
                    <a
                      href={service.contact.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 2).map((useCase, idx) => (
                      <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
          <h3 className="text-3xl font-bold text-white mb-4 neon-text">
            Need Custom Solutions?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We offer custom enterprise solutions tailored to your specific needs. 
            Contact us for a personalized quote and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="cyber-button-advanced inline-flex items-center justify-center px-8 py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}?subject=Custom Enterprise Solution Inquiry`}
              className="cyber-button-advanced inline-flex items-center justify-center px-8 py-3"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      popular: false,
      features: [
        'AI Content Generation (10,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        'Up to 5 users',
        'Basic Integrations',
        'Monthly Reports'
      ],
      limitations: [
        'Limited AI models',
        'No custom training',
        'Basic support only'
      ]
    },
    {
      name: 'Professional',
      price: { monthly: 7999, yearly: 79999 },
      description: 'Ideal for growing businesses with advanced AI needs',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      popular: true,
      features: [
        'AI Content Generation (50,000 words/month)',
        'Advanced Analytics Dashboard',
        'Priority Support',
        'Enhanced Security',
        'Up to 25 users',
        'Advanced Integrations',
        'Weekly Reports',
        'Custom AI Models',
        'API Access',
        'Training & Onboarding'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ]
    },
    {
      name: 'Enterprise',
      price: { monthly: 19999, yearly: 199999 },
      description: 'Complete AI solution for large organizations',
      icon: Cloud,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      popular: false,
      features: [
        'Unlimited AI Content Generation',
        'Custom Analytics Dashboard',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited users',
        'Custom Integrations',
        'Real-time Reports',
        'Custom AI Development',
        'Full API Access',
        'Dedicated Account Manager',
        'Custom Training Programs',
        'SLA Guarantee',
        'White-label Options'
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: 'AI Automation Suite',
      description: 'Advanced workflow automation and process optimization',
      price: { monthly: 2000, yearly: 20000 },
      icon: Zap
    },
    {
      name: 'AI Analytics Pro',
      description: 'Advanced analytics and business intelligence',
      price: { monthly: 1500, yearly: 15000 },
      icon: BarChart
    },
    {
      name: 'AI Security Suite',
      description: 'Enhanced security and compliance features',
      price: { monthly: 1000, yearly: 10000 },
      icon: Shield
    },
    {
      name: 'Custom Development',
      description: 'Bespoke AI solutions and integrations',
      price: { monthly: 5000, yearly: 50000 },
      icon: Code
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What happens if I exceed my usage limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or purchase additional capacity as needed.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing and solutions for enterprise clients with specific requirements. Contact us to discuss your needs.'
    },
    {
      question: 'What support options are available?',
      answer: 'Support varies by plan: Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms for qualified clients.'
    }
  ];

  const calculateSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { savings, percentage };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Pricing Plans
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI services 
              with flexible options to scale as you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <ArrowRight className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-800/50 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);
              return (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-lg p-8 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  } hover:bg-slate-700/50 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        ${plan.price[billingCycle as keyof typeof plan.price].toLocaleString()}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-medium">
                        Save ${savings.savings.toLocaleString()} ({savings.percentage}% off)
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Choose Plan'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Add-on Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services and features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  ${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}
                  <span className="text-gray-400 text-sm ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Common questions about our pricing and plans
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Award, Globe, Brain, Cloud, Code, BarChart, Target, MessageSquare, Database, Settings, Network, RefreshCw } from 'lucide-react';

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$2,500',
      period: '/month',
      features: [
        'Basic AI automation tools',
        'Up to 5 AI models',
        'Email support',
        'Standard analytics',
        'Basic integrations',
        'Monthly reporting'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      price: '$7,500',
      period: '/month',
      features: [
        'Advanced AI automation suite',
        'Up to 25 AI models',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom integrations',
        'Real-time monitoring',
        'Dedicated account manager',
        'Training & onboarding'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: '$18,000',
      period: '/month',
      features: [
        'Complete AI platform access',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Custom AI development',
        'White-label solutions',
        'Advanced security & compliance',
        'Dedicated team',
        'SLA guarantee',
        'Custom training programs',
        'Quarterly business reviews'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Process Automation', price: '$2,500-15,000/month' },
        { name: 'AI Analytics Dashboard', price: '$3,000-18,000/month' },
        { name: 'AI Customer Support', price: '$1,500-12,000/month' },
        { name: 'AI Content Generation', price: '$2,000-15,000/month' },
        { name: 'AI Cybersecurity', price: '$4,000-25,000/month' },
        { name: 'AI/ML Platform', price: '$3,500-20,000/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Infrastructure', price: '$3,500-18,000/month' },
        { name: 'Cybersecurity & Compliance', price: '$4,500-25,000/month' },
        { name: 'DevOps & CI/CD', price: '$2,500-15,000/month' },
        { name: 'Database Management', price: '$2,000-12,000/month' },
        { name: 'Network Solutions', price: '$3,000-16,000/month' },
        { name: 'Managed IT Services', price: '$1,500-6,000/user/month' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-purple-400',
      services: [
        { name: 'AI Project Manager', price: '$29-199/month' },
        { name: 'AI Social Media Manager', price: '$19-99/month' },
        { name: 'AI Analytics Dashboard', price: '$39-199/month' },
        { name: 'AI Email Marketing', price: '$25-149/month' },
        { name: 'AI Customer Support Bot', price: '$35-199/month' },
        { name: 'AI Content Generator', price: '$29-149/month' }
      ]
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'AI Models Deployed', color: 'text-cyan-400' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-blue-400' },
    { icon: Award, value: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-400' }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing Plans</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose from Starter ($2,500/month), Professional ($7,500/month), or Enterprise ($18,000/month) plans. Get 300% ROI with our solutions." />
        <meta name="keywords" content="AI pricing, IT services pricing, micro saas pricing, AI automation cost, IT infrastructure pricing, business AI solutions" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Get transparent pricing for our AI and IT services. Start from $2,500/month and achieve 300% ROI with our comprehensive solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="holographic-text cyber-text">Pricing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for AI and IT solutions that deliver measurable results. 
                Choose the plan that fits your business needs and start transforming today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your 14-day free trial today. No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Choose Your Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your business growth and AI adoption.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} className={`quantum-card p-8 ${plan.popular ? 'energy-pulse' : ''}`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
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

                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      className="w-full cyber-button text-center py-3 block"
                    >
                      Get Started
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="w-full bg-slate-800 text-white py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Pricing */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Service-Specific Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed pricing for individual services. Mix and match based on your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="quantum-card p-6">
                  <div className="flex items-center mb-6">
                    <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex justify-between items-center">
                        <span className="text-gray-300">{service.name}</span>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">ROI Calculator</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Calculate your potential return on investment with our AI and IT solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="quantum-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Calculate Your ROI</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Current Monthly Revenue</label>
                        <input
                          type="number"
                          placeholder="$100,000"
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Current Monthly Costs</label>
                        <input
                          type="number"
                          placeholder="$60,000"
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Selected Plan</label>
                        <select className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400">
                          <option>Starter ($2,500/month)</option>
                          <option>Professional ($7,500/month)</option>
                          <option>Enterprise ($18,000/month)</option>
                        </select>
                      </div>
                      <button className="w-full cyber-button py-3">
                        Calculate ROI
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Projected Results</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-green-400 mb-2">+300%</div>
                        <div className="text-gray-300">Revenue Increase</div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-400 mb-2">-70%</div>
                        <div className="text-gray-300">Cost Reduction</div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-purple-400 mb-2">+90%</div>
                        <div className="text-gray-300">Efficiency Gains</div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">6 months</div>
                        <div className="text-gray-300">Payback Period</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
