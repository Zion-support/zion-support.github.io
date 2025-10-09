'use client';
import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Activity, Target, Zap, CheckCircle, Star, ArrowRight, Brain, Database, Users, Clock, Shield, Phone } from 'lucide-react';
import Link from 'next/link';

const SmartAnalytics: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const features = [
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Live data visualization with customizable widgets and KPIs"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis for better decisions"
    },
    {
      icon: PieChart,
      title: "Advanced Reporting",
      description: "Automated reports with insights and recommendations"
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "Track key metrics and get alerts for anomalies"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and monitor business objectives with progress tracking"
    },
    {
      icon: Brain,
      title: "AI Insights",
      description: "Machine learning algorithms provide actionable recommendations"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 49,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "5 data sources",
        "Basic dashboards",
        "Monthly reports",
        "Email support",
        "1 user account",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 149,
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Unlimited data sources",
        "Advanced dashboards",
        "Real-time reports",
        "Priority support",
        "5 user accounts",
        "1-year data retention",
        "API access",
        "Custom metrics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 399,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "White-label solution",
        "24/7 phone support",
        "Unlimited users",
        "Unlimited data retention",
        "Custom integrations",
        "Advanced AI insights",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const sampleMetrics = [
    { name: 'revenue', label: 'Revenue', value: '$125,430', change: '+12.5%', color: 'text-green-400' },
    { name: 'users', label: 'Active Users', value: '2,847', change: '+8.2%', color: 'text-blue-400' },
    { name: 'conversion', label: 'Conversion Rate', value: '3.2%', change: '+0.5%', color: 'text-purple-400' },
    { name: 'retention', label: 'Retention Rate', value: '87%', change: '+2.1%', color: 'text-cyan-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI-Powered Analytics Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Smart Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Make data-driven decisions with real-time dashboards, predictive analytics, and intelligent reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#demo" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </Link>
              <Link href="#pricing" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
                <Target className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Section */}
      <div id="demo" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Live Dashboard Preview</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            {/* Metric Selector */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {sampleMetrics.map((metric) => (
                <button
                  key={metric.name}
                  onClick={() => setSelectedMetric(metric.name)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedMetric === metric.name
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {metric.label}
                </button>
              ))}
            </div>

            {/* Dashboard Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleMetrics.map((metric) => (
                <div key={metric.name} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-400">{metric.label}</h3>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                  <div className={`text-sm font-medium ${metric.color}`}>{metric.change}</div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="mt-8 bg-gray-700/30 rounded-xl p-8 border border-gray-600">
              <h3 className="text-lg font-semibold text-white mb-4">Performance Trends</h3>
              <div className="h-64 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Interactive chart would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Powerful Analytics Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to understand your data and make informed decisions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your analytics needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
              plan.popular 
                ? 'border-blue-400 shadow-2xl shadow-blue-500/20' 
                : 'border-gray-600'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.popular
                  ? 'cyber-button'
                  : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-12 text-center border border-blue-500/20">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses making smarter decisions with our analytics platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAnalytics;