'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Users, DollarSign, Eye, Download, Share2, Settings, Zap, Brain, Target, Globe, Database, PieChart, LineChart, Activity, ArrowRight, CheckCircle, Star, Shield, Clock, RefreshCw } from 'lucide-react';

const ZionAnalyticsPro: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your business metrics in real-time with live dashboards',
      price: '$99/mo',
      popular: true
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions from our AI engine',
      price: '$149/mo'
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your business needs',
      price: '$79/mo'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Connect with 100+ platforms including Google Analytics, Facebook, Shopify',
      price: '$199/mo'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with SOC 2 compliance and data encryption',
      price: '$299/mo'
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Schedule and automate report generation and delivery',
      price: '$59/mo'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Email support',
        '1 user account',
        '30-day data retention',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 data sources',
        'Advanced dashboards',
        'Priority support',
        '5 user accounts',
        '1-year data retention',
        'All integrations',
        'AI insights',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        '24/7 dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'White-label options',
        'Advanced AI insights',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Data Points Processed', value: '1B+', icon: Database },
    { label: 'Uptime', value: '99.9%', icon: Activity },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: Star }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Loading Zion Analytics Pro...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with Zion Analytics Pro. Real-time dashboards, AI-powered analytics, and comprehensive reporting tools." />
        <meta name="keywords" content="business analytics, data visualization, business intelligence, real-time dashboards, AI analytics, data insights" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Zion Analytics Pro</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Advanced Business
                </span>
                <br />
                <span className="text-white">Intelligence Platform</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business data into actionable insights with our AI-powered analytics platform. 
                Real-time dashboards, predictive analytics, and comprehensive reporting tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make data-driven decisions and grow your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  feature.popular 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30' 
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <feature.icon className="w-10 h-10 text-cyan-400" />
                    {feature.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{feature.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 relative' 
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    {tier.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using Zion Analytics Pro to make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsPro;