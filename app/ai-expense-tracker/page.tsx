'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async';;
import { CheckCircle, ArrowRight, Database, Camera, DollarSign, BarChart, Shield, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIExpenseTrackerPage() {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: 'Receipt Scanning',
      description: 'Automatically scan and extract data from receipts using advanced OCR technology.'
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: 'Auto-Categorization',
      description: 'AI-powered expense categorization with smart learning and custom rules.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-500" />,
      title: 'Budget Management',
      description: 'Set budgets and get real-time alerts when approaching spending limits.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-orange-500" />,
      title: 'Expense Analytics',
      description: 'Detailed insights and reports to understand your spending patterns.'
    },
    {
      icon: <Receipt className="w-6 h-6 text-red-500" />,
      title: 'Tax Preparation',
      description: 'Automatically categorize expenses for tax purposes and generate reports.'
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-500" />,
      title: 'Secure Storage',
      description: 'Bank-level security with encryption and secure cloud storage.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$15',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 100 receipts/month',
        'Basic categorization',
        'Mobile app access',
        'Basic reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$35',
      period: '/month',
      description: 'Ideal for small businesses and teams',
      features: [
        'Unlimited receipts',
        'Advanced AI categorization',
        'Team collaboration',
        'Advanced analytics',
        'Priority support',
        'Tax integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$75',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Business',
        'Custom categorization rules',
        'API access',
        'Dedicated support',
        'Custom reporting',
        'SSO integration'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Automated expense tracking with receipt scanning and intelligent categorization. Simplify your financial management with AI." />
        <meta name="keywords" content="expense tracker, receipt scanning, budget management, financial tracking, AI categorization" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                <Database className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Expense Tracker
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Simplify your financial management with AI-powered expense tracking, receipt scanning, and intelligent categorization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Smart Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage your expenses intelligently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500 bg-green-500/10 scale-105' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Simplify Your Expense Management?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of AI-driven expense tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}