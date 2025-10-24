<<<<<<< HEAD
'use client'

import React from 'react'
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    { 
      icon: Calculator, 
      title: 'Automated Bookkeeping', 
      description: 'AI-powered automated bookkeeping and transaction categorization.' 
    },
    {
      icon: BarChart, 
      title: 'Financial Analytics', 
      description: 'Advanced financial reporting and analytics with AI insights.' 
    },
    {
      icon: FileText, 
      title: 'Tax Preparation', 
      description: 'Automated tax preparation and compliance management.' 
    },
    {
      icon: Shield, 
      title: 'Audit Trail', 
      description: 'Complete audit trail and compliance tracking for financial records.' 
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: ['Basic bookkeeping', 'Transaction categorization', 'Simple reporting', 'Email support'],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: ['Advanced analytics', 'Tax preparation', 'Multi-currency support', 'Priority support', 'API access'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Custom integrations', 'Dedicated support', 'White-label solution', 'SLA guarantee', 'Training'],
      cta: 'Contact Sales'
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Accounting Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your accounting workflow with AI-powered automation. 
                Reduce manual work by 80% and get real-time financial insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
=======
'use client';
import React from 'react';

export const dynamic = 'force-dynamic';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    { icon: Calculator, title: 'Automated Bookkeeping', description: 'AI-powered automated bookkeeping and transaction categorization.' },
    { icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and analytics with AI insights.' },
    { icon: FileText, title: 'Tax Preparation', description: 'Automated tax preparation and compliance management.' },
    { icon: Shield, title: 'Audit Trail', description: 'Complete audit trail and compliance tracking for financial records.' },
    { icon: Zap, title: 'Invoice Processing', description: 'Automated invoice processing and payment tracking.' },
    { icon: CheckCircle, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Accounting Assistant</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Streamline your accounting with AI-powered financial management tools.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI accounting assistant handles complex financial tasks with ease
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}>
                    {plan.cta}
                  </button>
=======
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 bg-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Accounting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using AI to streamline their accounting processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Accounting?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI-driven financial management and streamline your accounting processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </main>

      <Footer />
    </>
  )
}

export default AIAccountingAssistantPage
=======

        <Footer />
      </div>
  );
};

export default AIAccountingAssistantPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
