import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Receipt, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Users, BarChart3, Star, Sparkles, TrendingUp, Target, CreditCard, Camera } from 'lucide-react'
import Layout from '../layout'

export default function AIExpenseTracker() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR and AI recognition'
    },
    {
      icon: <Camera className="w-6 h-6 text-purple-400" />,
      title: 'Smart Categorization',
      description: 'AI automatically categorizes expenses and learns from your spending patterns'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />,
      title: 'Real-time Analytics',
      description: 'Track spending trends, budget performance, and financial insights with detailed reports'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-400" />,
      title: 'Multi-account Sync',
      description: 'Connect bank accounts, credit cards, and payment apps for comprehensive expense tracking'
    }
  ]

  const trackingFeatures = [
    {
      category: 'Expense Capture',
      items: ['Receipt Scanning', 'Manual Entry', 'Bank Integration', 'Credit Card Sync', 'Mobile App', 'Web Interface']
    },
    {
      category: 'AI Features',
      items: ['Smart Categorization', 'Duplicate Detection', 'Merchant Recognition', 'Tax Classification', 'Expense Validation', 'Pattern Learning']
    },
    {
      category: 'Reporting',
      items: ['Spending Reports', 'Budget Analysis', 'Tax Reports', 'Category Breakdown', 'Trend Analysis', 'Export Options']
    },
    {
      category: 'Integration',
      items: ['Accounting Software', 'Tax Software', 'Banking APIs', 'Payment Apps', 'CRM Systems', 'ERP Integration']
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 100 receipts/month',
        'Basic AI features',
        'Standard categories',
        'Email support',
        'Basic reporting',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 1,000 receipts/month',
        'Advanced AI features',
        'Custom categories',
        'Priority support',
        'Advanced reporting',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited receipts',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'Freelance Consultant',
      content: 'AI Expense Tracker saves me hours every week. The receipt scanning is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Robert Smith',
      company: 'Small Business Owner',
      content: 'Finally, expense tracking that works. The AI categorization is spot-on every time.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Manager',
      content: 'The analytics help us understand our spending patterns and optimize our budget.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Expense Tracker - Smart Expense Management | Zion Tech Group"
      description="Transform your expense tracking with AI-powered receipt scanning, smart categorization, and real-time analytics. Track expenses effortlessly and gain financial insights. Start your free trial today."
      keywords="expense tracker, receipt scanning, expense management, AI categorization, financial tracking, budget management"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
                <Receipt className="w-4 h-4 mr-2" />
                AI-Powered Expense Tracking
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Expense Tracker
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your expense tracking with AI-powered receipt scanning, smart categorization, 
                and real-time analytics. Track expenses effortlessly and gain valuable financial insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Intelligent Expense Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-powered features that make expense tracking effortless and accurate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracking Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Expense Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to track, categorize, and analyze your expenses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trackingFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your expense tracking needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-teal-400/40 scale-105 shadow-2xl shadow-teal-500/20' 
                    : 'border-teal-500/20 hover:border-teal-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-purple-600 text-white hover:from-teal-600 hover:to-purple-700'
                        : 'border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-gray-300">
                See how our AI Expense Tracker transforms financial management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-2xl p-8 border border-teal-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Simplify Your Expense Tracking Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of users using AI Expense Tracker to manage their finances better
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}