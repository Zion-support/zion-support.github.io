'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, DollarSign, BarChart3, PieChart, Target, Lock, Sparkles, Award, Calculator, TrendingDown, AlertTriangle, CheckSquare } from 'lucide-react';

const AIFinancialAnalyzerPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: 'Real-Time Financial Analysis',
      description: 'Get instant insights into your financial health with AI-powered analysis and predictions'
    },
    {
      icon: <PieChart className="w-6 h-6 text-blue-400" />,
      title: 'Portfolio Optimization',
      description: 'AI-driven investment recommendations and portfolio rebalancing suggestions'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Risk Assessment',
      description: 'Advanced risk modeling and early warning systems for financial threats'
    },
    {
      icon: <Calculator className="w-6 h-6 text-purple-400" />,
      title: 'Automated Bookkeeping',
      description: 'AI-powered expense categorization, invoice processing, and financial reporting'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: 'Goal Tracking',
      description: 'Set and monitor financial goals with AI-powered progress tracking and recommendations'
    },
    {
      icon: <Shield className="w-6 h-6 text-pink-400" />,
      title: 'Fraud Detection',
      description: 'Advanced AI algorithms to detect and prevent fraudulent transactions'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$49',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Personal financial dashboard',
        'Basic AI analysis',
        'Expense tracking',
        'Goal setting',
        'Monthly reports',
        'Email support',
        '1 account'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$199',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Personal',
        'Advanced AI analytics',
        'Multi-account support',
        'Automated bookkeeping',
        'Tax preparation',
        'Priority support',
        '5 team members',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations and financial institutions',
      features: [
        'Everything in Business',
        'Custom AI models',
        'API integration',
        'Dedicated support manager',
        'Advanced security',
        'Compliance reporting',
        'Unlimited team members',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '15K+', label: 'Active Users' },
    { icon: <DollarSign className="w-8 h-8 text-green-500" />, value: '$2.5B+', label: 'Assets Analyzed' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, value: '23%', label: 'Avg ROI Improvement' },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: '99.9%', label: 'Accuracy Rate' }
  ];

  const analysisTypes = [
    'Cash Flow Analysis',
    'Profit & Loss Statements',
    'Balance Sheet Analysis',
    'Investment Performance',
    'Risk Assessment',
    'Tax Optimization',
    'Budget Planning',
    'Financial Forecasting',
    'Expense Analysis',
    'Revenue Optimization',
    'Debt Management',
    'Retirement Planning'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Financial Analyzer - Zion Tech Group | Intelligent Financial Management</title>
        <meta name="description" content="Advanced AI-powered financial analysis platform with real-time insights, portfolio optimization, and automated bookkeeping. Starting at $49/month." />
        <meta name="keywords" content="AI financial analysis, portfolio optimization, automated bookkeeping, financial forecasting, risk assessment" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Intelligent Financial Management
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Financial
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Analyzer
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your financial management with AI-powered analysis, automated bookkeeping, 
            and intelligent investment recommendations. Make data-driven financial decisions 
            and optimize your portfolio with 99.9% accuracy.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Analysis Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Financial Analysis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get detailed insights into every aspect of your financial health with our AI-powered analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {analysisTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                <span className="text-gray-300 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage and optimize your finances with AI intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular ? 'border-cyan-500 scale-105' : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {plan.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose AI Financial Analyzer?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of individuals and businesses who have transformed their financial management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Insights</h3>
              <p className="text-gray-300">Get instant financial insights and make informed decisions with real-time data analysis.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Optimized Returns</h3>
              <p className="text-gray-300">Achieve 23% better returns on average with AI-powered investment recommendations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Bank-Level Security</h3>
              <p className="text-gray-300">Your financial data is protected with enterprise-grade security and encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Financial Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 14-day free trial today and experience the power of AI-driven financial analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Plans</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAnalyzerPage;