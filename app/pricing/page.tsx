'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Target,
  Award,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: '$299', yearly: '$2,999' },
      originalPrice: { monthly: '$499', yearly: '$4,999' },
      features: [
        'AI Chatbot (up to 1,000 conversations/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard AI Models',
        'Basic Integration (3 apps)',
        'Monthly Reports'
      ],
      limitations: [
        'Limited to 1,000 conversations',
        'Basic support only',
        'No custom training'
      ],
      popular: false,
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: '$799', yearly: '$7,999' },
      originalPrice: { monthly: '$1,299', yearly: '$12,999' },
      features: [
        'AI Chatbot (unlimited conversations)',
        'Advanced Analytics & Insights',
        'Priority Support (24/7)',
        'Custom AI Model Training',
        'Advanced Integrations (10 apps)',
        'Real-time Analytics',
        'A/B Testing Tools',
        'Custom Branding',
        'API Access',
        'Monthly Strategy Calls'
      ],
      limitations: [
        'Limited to 10 integrations',
        'Standard custom training'
      ],
      popular: true,
      icon: Star,
      color: 'from-cyan-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: '$1,999', yearly: '$19,999' },
      originalPrice: { monthly: '$3,499', yearly: '$34,999' },
      features: [
        'Everything in Professional',
        'Unlimited AI Models',
        'Dedicated Account Manager',
        'White-label Solutions',
        'Unlimited Integrations',
        'Advanced Security Features',
        'Custom Development',
        'On-premise Deployment',
        'SLA Guarantee (99.9%)',
        'Quarterly Business Reviews',
        'Custom Training Programs',
        'Priority Feature Requests'
      ],
      limitations: [],
      popular: false,
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Content Generation',
      description: 'Advanced content creation with GPT-4',
      price: { monthly: '$199', yearly: '$1,999' },
      features: ['Unlimited content generation', 'Multi-language support', 'Brand voice training']
    },
    {
      name: 'Computer Vision',
      description: 'Image and video analysis capabilities',
      price: { monthly: '$399', yearly: '$3,999' },
      features: ['Object detection', 'Facial recognition', 'Quality control automation']
    },
    {
      name: 'Voice AI',
      description: 'Speech recognition and synthesis',
      price: { monthly: '$299', yearly: '$2,999' },
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands']
    },
    {
      name: 'Advanced Analytics',
      description: 'Deep insights and predictive analytics',
      price: { monthly: '$499', yearly: '$4,999' },
      features: ['Predictive modeling', 'Custom dashboards', 'Advanced reporting']
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large enterprises?',
      answer: 'Absolutely! We work with enterprises to create custom solutions that meet their specific needs. Contact our sales team for a personalized quote.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer email support for Starter plans, priority support for Professional plans, and dedicated account management for Enterprise plans.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans with flexible billing options." />
        <meta name="keywords" content="pricing, AI pricing, IT services pricing, enterprise solutions, subscription plans" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Affordable AI and IT solutions for every business size" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Choose the Perfect Plan for Your Business
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Get started with our AI and IT solutions at prices that work for your budget. 
              All plans include our core features with the flexibility to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
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
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-400/50 scale-105'
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 text-lg ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm line-through">
                      ${billingCycle === 'monthly' ? plan.originalPrice.monthly : plan.originalPrice.yearly}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-start">
                            <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
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
                  <Link
                    to="/contact"
                    className="w-full bg-slate-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-700 transition-colors text-center block"
                  >
                    Add to Plan
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI and IT solutions. 
                No credit card required, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default PricingPage;