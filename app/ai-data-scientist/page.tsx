'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  Brain, 
  Database, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Target,
  Shield,
  Settings,
  FileText,
  MessageSquare,
  Download,
  Upload,
  Play,
  Sparkles,
  Cpu,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

export default function AIDataScientistPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AutoML Pipeline',
      description: 'Automated machine learning pipeline that builds, trains, and optimizes models without coding.'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Preparation',
      description: 'Intelligent data cleaning, feature engineering, and preprocessing with AI assistance.'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Predictive Analytics',
      description: 'Advanced predictive modeling with 95%+ accuracy for business forecasting and insights.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Visual Analytics',
      description: 'Interactive dashboards and visualizations that automatically adapt to your data patterns.'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance monitoring.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-yellow-400" />,
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time with scalable cloud infrastructure.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Analyst',
      price: '$99',
      period: '/month',
      description: 'Perfect for data analysts',
      features: [
        'Up to 10GB data processing',
        'Basic AutoML features',
        'Standard visualizations',
        'Email support',
        '5 model deployments',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Scientist',
      price: '$299',
      period: '/month',
      description: 'For data scientists',
      features: [
        'Up to 100GB data processing',
        'Advanced AutoML features',
        'Custom visualizations',
        'Priority support',
        'Unlimited model deployments',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data processing',
        'Full AutoML suite',
        'Custom dashboards',
        '24/7 dedicated support',
        'Advanced security features',
        'Custom integrations',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Model Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '10K+', label: 'Models Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '500+', label: 'Data Scientists', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict sales trends and optimize revenue with AI-powered forecasting models.',
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and improve retention with advanced analytics.',
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and mitigate business risks with predictive risk modeling.',
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Market Research',
      description: 'Analyze market trends and competitive intelligence with AI insights.',
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />
    }
  ];

  const algorithms = [
    'Linear Regression',
    'Random Forest',
    'Neural Networks',
    'Support Vector Machines',
    'Gradient Boosting',
    'Clustering Algorithms',
    'Time Series Analysis',
    'Deep Learning Models'
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Scientist - Automated Machine Learning & Analytics | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered data science platform with AutoML, predictive analytics, and automated insights. Build models with 95% accuracy. Starting at $99/month." />
        <meta name="keywords" content="AI data science, AutoML, machine learning, predictive analytics, data visualization, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-scientist" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Data Science
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Data Scientist
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Democratize data science with our AI-powered platform. Build, train, and deploy 
                machine learning models without coding. Get insights that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to turn data into actionable insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Solve complex business problems with AI-powered insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Algorithms Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Algorithms
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Access to 50+ machine learning algorithms and models
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {algorithms.map((algorithm, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center">
                  <span className="text-white font-medium">{algorithm}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your data science needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies using AI to unlock insights from their data. 
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}