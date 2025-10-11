'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
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
=======
import { CheckCircle, Star, ArrowRight, Zap, Brain, Cloud, Cpu } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

<<<<<<< HEAD
=======
  const aiServices = [
    { name: 'AI-Powered Chatbots', price: '$299', period: '/month', marketPrice: '$500-2000', features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration'] },
    { name: 'AI Content Generation', price: '$199', period: '/month', marketPrice: '$300-1500', features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'] },
    { name: 'AI Data Analytics', price: '$399', period: '/month', marketPrice: '$800-3000', features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection'] },
    { name: 'AI Workflow Automation', price: '$349', period: '/month', marketPrice: '$600-2500', features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling'] },
    { name: 'AI Computer Vision', price: '$599', period: '/month', marketPrice: '$1000-5000', features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics'] },
    { name: 'AI Fraud Detection', price: '$799', period: '/month', marketPrice: '$1500-5000', features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection'] }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure & Migration', price: '$2,500', period: '/month', marketPrice: '$4000-15000', features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery'] },
    { name: 'Cybersecurity Solutions', price: '$1,800', period: '/month', marketPrice: '$3000-12000', features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring'] },
    { name: 'Database Management', price: '$1,200', period: '/month', marketPrice: '$2000-8000', features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'] },
    { name: 'DevOps & CI/CD', price: '$2,200', period: '/month', marketPrice: '$3500-10000', features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'] },
    { name: 'IT Consulting', price: '$200', period: '/hour', marketPrice: '$300-800', features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation'] },
    { name: 'Custom Software Development', price: '$150', period: '/hour', marketPrice: '$200-500', features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization'] }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', price: '$89', period: '/month', marketPrice: '$150-500', features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors'] },
    { name: 'Zion Chat AI', price: '$149', period: '/month', marketPrice: '$300-800', features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing'] },
    { name: 'Zion Invoice Genius', price: '$49', period: '/month', marketPrice: '$100-300', features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking'] },
    { name: 'Zion Lead Magnet', price: '$99', period: '/month', marketPrice: '$200-600', features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration'] },
    { name: 'Zion Security Shield', price: '$199', period: '/month', marketPrice: '$400-1200', features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'] },
    { name: 'Zion Cloud Vault', price: '$79', period: '/month', marketPrice: '$150-400', features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'] }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'saas': return microSaasServices;
      default: return aiServices;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'ai': return Brain;
      case 'it': return Cloud;
      case 'saas': return Cpu;
      default: return Brain;
    }
  };

>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
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
<<<<<<< HEAD
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
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
=======
      popular: false
    }
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="View our pricing plans for AI and IT services." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
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
=======
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
      </Helmet>
      <div className="min-h-screen py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for our AI and IT services. Choose the plan that fits your business needs.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-2">
              {[
                { id: 'ai', name: 'AI Services', icon: Brain },
                { id: 'it', name: 'IT Services', icon: Cloud },
                { id: 'saas', name: 'Micro SaaS', icon: Cpu }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {getCurrentServices().map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.period}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-400">Market Price: </span>
                  <span className="text-sm text-gray-300 line-through">{service.marketPrice}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Complete Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-cyan-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
                        Most Popular
                      </span>
                    </div>
                  )}
                  
<<<<<<< HEAD
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
=======
              <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-cyan-500/50">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI Services
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic Analytics
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-purple-500/50">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI Services
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced Analytics
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-green-500/50">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Analytics
                  </li>
                </ul>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
=======
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We offer tailored AI and IT solutions for enterprise clients. Contact us for a personalized quote.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Sales
            </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </div>
        </div>
      </main>
      
      <Footer />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    </>
  );
};

export default PricingPage;