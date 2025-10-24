'use client'

import React from 'react'
import { Calculator, BarChart, FileText, Shield, CheckCircle } from 'lucide-react';
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
          <div className="container mx-auto max-w-6 xl">
            <div className="text-center mb-16">
              <h1 className="text-5 xl md:text-6 xl font-bold text-gray-900 mb-6">
                AI Accounting Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3 xl mx-auto">
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
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6 xl">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-bold text-gray-900 mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2 xl mx-auto">
                Our AI accounting assistant handles complex financial tasks with ease
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
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
          <div className="container mx-auto max-w-6 xl">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-bold text-gray-900 mb-4">
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
                  <h3 className="text-2 xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4 xl font-bold text-gray-900">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="container mx-auto max-w-4 xl text-center">
            <h2 className="text-4 xl font-bold text-white mb-6">
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
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AIAccountingAssistantPage