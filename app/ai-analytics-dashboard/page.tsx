'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Target, PieChart, Activity, CheckCircle, AlertTriangle, Star, Zap, Shield, Clock, Users, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Eye, Sparkles } from 'lucide-react';

const AIAnalyticsDashboard: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [timeRange, setTimeRange] = useState('30d');

  const mockData = {
    revenue: {
      current: 125000,
      previous: 98000,
      change: 27.6,
      trend: 'up'
    },
    users: {
      current: 15420,
      previous: 12800,
      change: 20.5,
      trend: 'up'
    },
    conversions: {
      current: 8.2,
      previous: 6.8,
      change: 20.6,
      trend: 'up'
    },
    engagement: {
      current: 4.2,
      previous: 3.8,
      change: 10.5,
      trend: 'up'
    }
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable business insights',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend forecasting']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data updates and interactive dashboards',
      benefits: ['Live data streaming', 'Interactive charts', 'Custom metrics']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track business goals with AI-powered recommendations for improvement',
      benefits: ['Goal setting', 'Progress tracking', 'Achievement alerts']
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Comprehensive monitoring of all your business metrics with automated reporting',
      benefits: ['KPI monitoring', 'Automated reports', 'Performance alerts']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic AI insights',
        'Monthly reports',
        'Email support',
        'Core dashboard features'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 25 data sources',
        'Advanced AI insights',
        'Weekly reports',
        'Priority support',
        'Custom dashboards',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,599',
      period: '/month',
      description: 'For large organizations with complex data needs',
      features: [
        'Unlimited data sources',
        'Advanced AI features',
        'Real-time monitoring',
        '24/7 dedicated support',
        'White-label solution',
        'API access'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue by 40%',
      description: 'AI insights help optimize your business strategy'
    },
    {
      icon: Clock,
      title: 'Save 70% Analysis Time',
      description: 'Automated insights reduce manual data analysis'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Data-driven insights improve business decisions'
    },
    {
      icon: BarChart,
      title: 'Competitive Advantage',
      description: 'Stay ahead with advanced analytics and predictions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="AI-powered business intelligence and analytics dashboard. Increase revenue by 40% with intelligent data insights and automated reporting." />
        <meta name="keywords" content="ai analytics, business intelligence, data dashboard, predictive analytics, ai insights, business analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered business intelligence and analytics dashboard that increases revenue by 40% 
            with intelligent data insights and automated reporting.
          </p>
          
          {/* Live Demo Dashboard */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Live Analytics Demo</h3>
            
            {/* Time Range Selector */}
            <div className="flex justify-center mb-6">
              <div className="bg-slate-800 rounded-lg p-1">
                {['7d', '30d', '90d', '1y'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      timeRange === range
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {Object.entries(mockData).map(([key, data]) => (
                <div
                  key={key}
                  className={`bg-slate-800/50 rounded-lg p-6 cursor-pointer transition-all ${
                    selectedMetric === key ? 'ring-2 ring-cyan-400' : 'hover:bg-slate-700/50'
                  }`}
                  onClick={() => setSelectedMetric(key)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-300 capitalize">{key}</h4>
                    <TrendingUp className={`w-4 h-4 ${data.trend === 'up' ? 'text-green-400' : 'text-red-400'}`} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {key === 'revenue' ? `$${data.current.toLocaleString()}` :
                     key === 'users' ? data.current.toLocaleString() :
                     key === 'conversions' ? `${data.current}%` :
                     `${data.current}h`}
                  </div>
                  <div className={`text-sm ${data.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {data.trend === 'up' ? '+' : '-'}{data.change}% vs previous period
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="bg-slate-800/50 rounded-lg p-8 text-center">
              <BarChart className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Interactive Analytics Chart</h4>
              <p className="text-gray-300">
                Real-time visualization of your {selectedMetric} data with AI-powered insights and predictions
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Analytics Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Analytics Dashboard?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Analytics Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Analytics Dashboard`}
                  className="w-full cyber-button text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses using our AI analytics dashboard to make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsDashboard;