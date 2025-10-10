'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, BarChart3, Brain, Target, Zap, Shield, Globe, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Database, PieChart, LineChart } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    'Advanced Machine Learning Models',
    'Real-time Data Processing',
    'Predictive Forecasting',
    'Anomaly Detection',
    'Custom Algorithm Development',
    'Multi-source Data Integration',
    'Automated Insights Generation',
    'Interactive Dashboards'
  ];

  const pricingPlans = [
    {
      name: 'Analyst',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 1M data points/month',
        'Basic predictive models',
        'Standard dashboards',
        'Email support',
        '5 user accounts'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10M data points/month',
        'Advanced ML algorithms',
        'Custom dashboards',
        'API access',
        'Priority support',
        '25 user accounts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data points',
        'Custom model development',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: TrendingUp,
      title: 'Sales Forecasting',
      description: 'Predict sales trends and revenue with 95% accuracy using advanced machine learning algorithms and historical data analysis.'
    },
    {
      icon: Target,
      title: 'Customer Behavior Analysis',
      description: 'Understand customer patterns, predict churn, and optimize retention strategies with AI-powered behavioral insights.'
    },
    {
      icon: BarChart3,
      title: 'Market Trend Prediction',
      description: 'Stay ahead of market changes with predictive analytics that forecast industry trends and competitive movements.'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Identify potential risks and opportunities before they impact your business with comprehensive predictive risk modeling.'
    }
  ];

  const industries = [
    'E-commerce & Retail',
    'Financial Services',
    'Healthcare & Life Sciences',
    'Manufacturing',
    'Real Estate',
    'Technology',
    'Energy & Utilities',
    'Transportation & Logistics'
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group | Advanced Data Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered predictive analytics. Forecast trends, optimize decisions, and drive business growth with advanced machine learning." />
        <meta name="keywords" content="AI predictive analytics, machine learning, data forecasting, business intelligence, predictive modeling, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Analytics</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Predictive Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into powerful predictions with advanced AI and machine learning. 
              Forecast trends, optimize decisions, and drive unprecedented business growth with intelligent analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Predictive Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered analytics platform combines cutting-edge machine learning with intuitive visualization to deliver actionable insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Predictive Analytics for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI predictive analytics can transform different aspects of your business operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our predictive analytics solutions are tailored for various industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your data and business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
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
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Insights</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Real-time Analysis</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Predict the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and unlock the power of predictive analytics for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveAnalyticsPage;