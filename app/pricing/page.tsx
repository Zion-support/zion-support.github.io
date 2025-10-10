'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Brain, Cloud, Users, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('ai');

  const aiPlans = [
    {
      name: 'AI Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI-Powered Chatbot (up to 1,000 conversations/month)',
        'Basic AI Analytics Dashboard',
        'Email Support',
        'Standard AI Models',
        'Basic Integration (2 platforms)',
        'Monthly AI Training Sessions'
      ],
      popular: false,
      icon: Brain,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'AI Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Advanced AI Chatbot (unlimited conversations)',
        'AI Data Analytics with Predictive Insights',
        'AI Computer Vision (up to 10,000 images/month)',
        'Priority Support',
        'Custom AI Model Training',
        'Advanced Integrations (10 platforms)',
        'Weekly AI Optimization',
        'AI Fraud Detection',
        'Voice AI Processing'
      ],
      popular: true,
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'AI Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive AI solutions for large enterprises',
      features: [
        'All AI Professional Features',
        'Custom AI Development',
        'AI Supply Chain Optimization',
        'AI Healthcare Diagnostics',
        'AI Financial Modeling',
        '24/7 Dedicated Support',
        'Unlimited Integrations',
        'Daily AI Optimization',
        'AI Compliance Management',
        'Custom AI Training Programs',
        'Dedicated AI Consultant'
      ],
      popular: false,
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const itPlans = [
    {
      name: 'IT Essentials',
      price: '$1,200',
      period: '/month',
      description: 'Core IT services for small to medium businesses',
      features: [
        'Cloud Infrastructure Management',
        'Basic Cybersecurity Monitoring',
        'Database Management (up to 5 databases)',
        'Email Support',
        'Monthly Security Reports',
        'Basic Backup & Recovery',
        'Network Monitoring'
      ],
      popular: false,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'IT Professional',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive IT solutions for growing businesses',
      features: [
        'Advanced Cloud Infrastructure',
        'Comprehensive Cybersecurity Suite',
        'DevOps & CI/CD Pipeline',
        'Database Management (unlimited)',
        'Priority Support',
        'Advanced Backup & Recovery',
        'Network Infrastructure Management',
        'IT Consulting (10 hours/month)',
        'Compliance Management',
        'Performance Monitoring'
      ],
      popular: true,
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'IT Enterprise',
      price: '$5,000',
      period: '/month',
      description: 'Full-scale IT solutions for large enterprises',
      features: [
        'All IT Professional Features',
        'Data Center Services',
        'Advanced Security Services',
        'Custom Software Development',
        '24/7 Dedicated Support',
        'Disaster Recovery Planning',
        'IT Audit & Compliance',
        'Unlimited IT Consulting',
        'Custom Integration Development',
        'Dedicated IT Manager',
        'Advanced Analytics & BI'
      ],
      popular: false,
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const saasPlans = [
    {
      name: 'SaaS Starter',
      price: '$49',
      period: '/month',
      description: 'Essential micro SaaS tools for small businesses',
      features: [
        'Zion Invoice Genius (up to 100 invoices/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Templates',
        'Basic Integrations (3 platforms)',
        'Monthly Updates'
      ],
      popular: false,
      icon: Brain,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'SaaS Professional',
      price: '$149',
      period: '/month',
      description: 'Advanced micro SaaS solutions for growing businesses',
      features: [
        'Zion Chat AI (unlimited conversations)',
        'Zion Analytics Pro (up to 25 users)',
        'Zion Lead Magnet',
        'Zion Project Master',
        'Priority Support',
        'Advanced Integrations (10 platforms)',
        'Custom Branding',
        'API Access',
        'Advanced Analytics',
        'Weekly Optimization'
      ],
      popular: true,
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'SaaS Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete micro SaaS suite for large organizations',
      features: [
        'All SaaS Professional Features',
        'Zion Security Shield',
        'Zion Cloud Vault',
        'Zion CRM Intelligence',
        'Zion Workflow Automation',
        '24/7 Dedicated Support',
        'Unlimited Users',
        'White-label Solutions',
        'Custom Development',
        'Advanced Security',
        'Dedicated Account Manager',
        'Custom Training Programs'
      ],
      popular: false,
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const getCurrentPlans = () => {
    switch (selectedPlan) {
      case 'ai': return aiPlans;
      case 'it': return itPlans;
      case 'saas': return saasPlans;
      default: return aiPlans;
    }
  };

  const plans = getCurrentPlans();

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SaaS tools. Choose the perfect plan for your business needs." />
      </Helmet>   <//Helmet>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">{/* Header */}</div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Pricing</h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the perfect plan for your business needs. All plans include our industry-leading support and regular updates.</p className="text-xl text-gray-300 max-w-3xl mx-auto">
              </p>
            </div>{/* Plan Selector */}<//div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() =>setSelectedPlan('ai')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPlan === 'ai'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              ></button
                onClick={() =>
                AI Services</button
                onClick={() =>
              </button>
              <button
                onClick={() =>setSelectedPlan('it')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPlan === 'it'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              ></button
                onClick={() =>
                IT Services</button
                onClick={() =>
              </button>
              <button
                onClick={() =>setSelectedPlan('saas')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPlan === 'saas'
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              ></button
                onClick={() =>
                Micro SaaS</button
                onClick={() =>
              </button>
            </div>{/* Pricing Cards */} {plans.map((plan, index) => (<//div>
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-lg p-8 hover:bg-slate-800/70 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                  }`}
                >{plan.popular && (</div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-lg p-8 hover:bg-slate-800/70 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                  }`}
                >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />Most Popular</Star className="w-4 h-4 mr-1" />
                      </span>
                    </div>)}<//div>
                  <//div>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
 {plan.features.map((feature, featureIndex) => (<//div>
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>))} <//li>
<//li>
                  <div className="text-center">
                    <a
                      href="/contact"
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center`}
                    >Get Started</a
                      href="/contact"
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center`}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>))} {/* Enterprise Section */}<//div>
            <div className="bg-slate-800/50 rounded-lg p-8 text-center mb-16">
              <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">For enterprise clients with specific requirements, we offer custom solutions tailored to your unique needs. </p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact us for a personalized quote and consultation.</p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >Contact Sales</a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >Call: (302) 464-0950</a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                </a>
              </div>{/* FAQ Section */}<//div>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, </p className="text-gray-300">
                    and we'll prorate any billing differences.</p className="text-gray-300">
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
                  <p className="text-gray-300">Yes, we offer a 14-day free trial for all our plans. No credit card required, </p className="text-gray-300">
                    and you can cancel anytime during the trial period.</p className="text-gray-300">
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">What support is included?</h3>
                  <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support, </p className="text-gray-300">
                    and Enterprise includes 24/7 dedicated support.</p className="text-gray-300">
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Do you offer custom pricing?</h3>
                  <p className="text-gray-300">Yes, for enterprise clients with specific needs, we offer custom pricing and solutions. </p className="text-gray-300">
                    Contact our sales team to discuss your requirements.</p className="text-gray-300">
                  </p>
                </div>{/* CTA Section */}<//div>
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2 className="text-2xl font-bold text-white mb-4">
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Choose the perfect plan for your business and start transforming your operations with our AI and IT solutions.</p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Start Free Trial</a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Call: (302) 464-0950</a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                </div>
        </div>
      </main> <//main>
      <Footer />
    </>);<//>
}<//>
export default PricingPage<//>