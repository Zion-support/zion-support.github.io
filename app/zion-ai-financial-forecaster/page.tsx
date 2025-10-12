'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Target, Brain, Zap, BarChart3, CheckCircle, ArrowRight, Star, Users, Award, Calendar, PieChart, LineChart } from 'lucide-react';

const ZionAiFinancialForecasterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Financial Modeling',
      description: 'Advanced machine learning models predict cash flow, revenue, and financial performance with 96% accuracy',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Scenario Planning',
      description: 'Model multiple financial scenarios to prepare for different business conditions and market changes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Risk Assessment',
      description: 'Identify financial risks and opportunities with AI-powered analysis of market trends and business metrics',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Investment Insights',
      description: 'Get AI-driven recommendations for optimal investment strategies and capital allocation',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic financial forecasting',
        'Cash flow predictions',
        'Email support',
        'Standard reports',
        '1 user account',
        'Monthly forecasts'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI forecasting',
        'Scenario planning',
        'Priority support',
        'Custom dashboards',
        'Up to 5 user accounts',
        'API access',
        'Risk assessment',
        'Investment insights'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited user accounts',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager',
        'Advanced analytics',
        'Multi-currency support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '96%', label: 'Forecast Accuracy', icon: Target },
    { number: '40%', label: 'Better Decisions', icon: TrendingUp },
    { number: '25%', label: 'Cost Reduction', icon: DollarSign },
    { number: '180+', label: 'Happy Customers', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Financial Forecaster - 96% Forecast Accuracy | Zion Tech Group</title>
        <meta name="description" content="AI-powered financial forecasting platform. Achieve 96% forecast accuracy with advanced modeling, scenario planning, and risk assessment. Starting at $199/month." />
        <meta name="keywords" content="financial forecasting, AI financial modeling, cash flow prediction, scenario planning, financial analytics, investment insights" />
        <meta property="og:title" content="Zion AI Financial Forecaster - 96% Forecast Accuracy" />
        <meta property="og:description" content="AI-powered financial forecasting platform with advanced modeling and scenario planning. Achieve 96% forecast accuracy and make better financial decisions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-financial-forecaster" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion AI Financial Forecaster
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Master your finances with AI. Achieve 96% forecast accuracy and make better financial decisions with advanced modeling and scenario planning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Financial Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage AI to predict, plan, and optimize your financial future
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Financial Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your financial forecasting needs. All plans include our core AI modeling engine.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-green-400/60 ring-2 ring-green-400/20' : 'border-slate-700/50'} hover:border-green-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-green-500/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Master Your Financial Future Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 180+ companies already using Zion AI Financial Forecaster to achieve 96% forecast accuracy and make better financial decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiFinancialForecasterPage;