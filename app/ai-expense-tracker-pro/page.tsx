import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp, Camera, DollarSign, FileText, Shield, BarChart3, Zap, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AIExpenseTrackerProPage() {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-green-500" />,
      title: 'Receipt Scanning',
      description: 'AI-powered receipt scanning with automatic data extraction and categorization',
      benefits: ['Instant Scanning', 'OCR Technology', 'Auto Data Entry', 'Multi-format Support']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: 'Auto Categorization',
      description: 'Intelligent expense categorization using machine learning algorithms',
      benefits: ['Smart Categories', 'Learning Patterns', 'Custom Rules', 'Bulk Processing']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'Budget Management',
      description: 'Real-time budget tracking with alerts and spending insights',
      benefits: ['Budget Alerts', 'Spending Limits', 'Category Budgets', 'Monthly Reports']
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'Tax Reports',
      description: 'Automated tax report generation with compliance-ready documentation',
      benefits: ['Tax Categories', 'Export Options', 'Audit Trail', 'Compliance Ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$15',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: ['Up to 500 receipts/month', 'Basic categorization', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: ['Unlimited receipts', 'Advanced AI features', 'Team collaboration', 'Priority support', 'Custom categories'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: ['Everything in Business', 'Advanced analytics', 'Custom integrations', 'Dedicated support', 'On-premise option'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker Pro - Zion Tech Group | https://ziontechgroup.com</title>
        <meta name="description" content="Automated expense tracking with AI-powered receipt scanning and categorization. Streamline your finances with smart budget management. Starting at $15/month." />
        <meta name="keywords" content="AI expense tracker, receipt scanning, budget management, expense automation, financial tracking" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              AI Expense <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Tracker Pro</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Automate your expense tracking with AI-powered receipt scanning and intelligent categorization. 
              Save time and gain insights into your spending patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-lg hover:border-green-400/50">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Smart <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Everything you need to track expenses efficiently and gain financial insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Simple <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-pink-400/50 ring-2 ring-pink-400/20' 
                  : 'border-white/20 hover:border-pink-400/50'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                    : 'border-2 border-white/30 text-white hover:bg-white/10'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Simplify Your Expense Tracking?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                  Join thousands of users already saving time with AI-powered expense tracking.
                  <span className="block mt-2 text-cyan-200 font-semibold">
                    Start your free trial today - no credit card required!
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                    <Target className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
