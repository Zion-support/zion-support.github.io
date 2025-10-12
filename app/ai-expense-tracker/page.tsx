'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Receipt, ArrowRight, BarChart, DollarSign, CheckCircle, Brain, Settings, TrendingUp, Users, Target } from 'lucide-react';

const AIExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Receipt className="w-8 h-8 text-cyan-400" />,
      title: 'Smart Receipt Scanning',
      description: 'Automatically scan and categorize receipts using AI-powered image recognition technology.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: 'Expense Analytics',
      description: 'Get detailed insights and analytics on your spending patterns and trends.'
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: 'AI Categorization',
      description: 'Intelligent expense categorization that learns from your spending habits.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-400" />,
      title: 'Budget Management',
      description: 'Set budgets and get alerts when you approach spending limits.'
    }
  ];

  const benefits = [
    'Save 5+ hours per week on expense tracking',
    'Reduce human errors by 95%',
    'Get real-time expense insights',
    'Automated receipt processing',
    'Smart budget recommendations',
    'Seamless integration with accounting software'
  ];

  const pricing = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 100 receipts/month',
        'Basic AI categorization',
        'Expense reports',
        'Mobile app access',
        'Email support'
      ]
    },
    {
      name: 'Business',
      price: '$29.99',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 1,000 receipts/month',
        'Advanced AI features',
        'Team collaboration',
        'Advanced analytics',
        'Priority support',
        'Accounting integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited receipts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group | Smart Expense Management</title>
        <meta name="description" content="Streamline expense tracking with AI-powered automation. Scan receipts, categorize expenses, and get insights with our intelligent expense management platform." />
        <meta name="keywords" content="AI expense tracker, expense management, receipt scanning, budget tracking, financial analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expense Tracker</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline expense tracking with AI-powered automation. Scan receipts, categorize expenses, and get insights with our intelligent expense management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Smart Expense Management Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI expense tracker provides everything you need to manage expenses efficiently and gain valuable insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Expense Tracker?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI-powered expense tracker helps you save time, reduce errors, and gain valuable insights into your spending patterns.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
                  <p className="text-gray-300">
                    Our AI learns from your expense patterns and automatically categorizes transactions for maximum accuracy and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI features with no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Expense Tracking?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of users already using our AI expense tracker to manage their finances more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/ai-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIExpenseTrackerPage;