'use client';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, CheckCircle, Zap, ArrowRight, Phone, MessageSquare, Star, Settings, Database, Globe, Target, Activity, Brain, PieChart } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = memo(() => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Forecasting',
      description: 'AI-powered predictive models that forecast sales, demand, and market trends with 95% accuracy',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your data to provide accurate predictions and insights',
      color: 'text-purple-400'
    },
    {
      icon: Target,
      title: 'Customer Behavior Prediction',
      description: 'Predict customer actions, churn risk, and lifetime value to optimize marketing strategies',
      color: 'text-green-400'
    },
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Continuous analysis of data streams to provide real-time insights and predictions',
      color: 'text-orange-400'
    },
    {
      icon: PieChart,
      title: 'Risk Assessment',
      description: 'Predict and assess risks across various business functions and market conditions',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'AI automatically identifies patterns and generates actionable business insights',
      color: 'text-red-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting with analytics',
      features: [
        'Up to 1M data points',
        'Basic predictive models',
        'Standard dashboards',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with complex data needs',
      features: [
        'Up to 10M data points',
        'Advanced ML models',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Real-time analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with extensive data requirements',
      features: [
        'Unlimited data points',
        'Custom AI models',
        'Advanced integrations',
        'Dedicated support',
        'White-label options',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '95%',
      label: 'Prediction Accuracy',
      description: 'Industry-leading accuracy in business predictions'
    },
    {
      metric: '40%',
      label: 'Revenue Increase',
      description: 'Average revenue increase from better decisions'
    },
    {
      metric: '60%',
      label: 'Cost Reduction',
      description: 'Reduce operational costs through better planning'
    },
    {
      metric: '3x',
      label: 'Faster Insights',
      description: 'Get insights 3x faster than traditional methods'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Predictive Analytics - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered predictive analytics with 95% accuracy. Forecast sales, customer behavior, and market trends to make data-driven decisions." />
        <meta name="keywords" content="AI predictive analytics, business intelligence, forecasting, machine learning, data analytics" />
        <meta property="og:title" content="AI Predictive Analytics - Advanced Business Intelligence" />
        <meta property="og:description" content="Revolutionary AI-powered predictive analytics with 95% accuracy and advanced forecasting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-predictive-analytics" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BarChart className="w-4 h-4" />
            <span>AI Predictive Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Predictive Analytics
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into powerful predictions with our AI-powered analytics platform. 
            Forecast sales, customer behavior, and market trends with 95% accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </section>

        {/* Benefits Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-sm text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Predictive Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI predictive analytics platform provides comprehensive forecasting and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our predictive analytics solutions work across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">E-commerce</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Demand forecasting</li>
                <li>• Customer lifetime value</li>
                <li>• Inventory optimization</li>
                <li>• Price optimization</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Finance</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Risk assessment</li>
                <li>• Fraud detection</li>
                <li>• Credit scoring</li>
                <li>• Market prediction</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Patient outcomes</li>
                <li>• Disease prediction</li>
                <li>• Resource planning</li>
                <li>• Treatment optimization</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Predictive maintenance</li>
                <li>• Quality control</li>
                <li>• Supply chain optimization</li>
                <li>• Production planning</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Marketing</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Campaign optimization</li>
                <li>• Customer segmentation</li>
                <li>• Churn prediction</li>
                <li>• ROI forecasting</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Real Estate</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Property valuation</li>
                <li>• Market trends</li>
                <li>• Investment analysis</li>
                <li>• Price prediction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Analytics Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the plan that matches your data volume and business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/30 p-8 rounded-lg border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500/50 scale-105' 
                  : 'border-gray-700 hover:border-purple-500/30'
              }`}>
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Start Predicting the Future Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with AI-powered predictive analytics. Get a free consultation 
            and see how much you can improve your decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
});

AIPredictiveAnalyticsPage.displayName = 'AIPredictiveAnalyticsPage';

export default AIPredictiveAnalyticsPage;