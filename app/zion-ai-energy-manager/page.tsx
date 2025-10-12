import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';
import { Zap, BarChart, Settings, Clock, CheckCircle, Star, ArrowRight, Brain, Leaf, DollarSign, TrendingUp, AlertTriangle, Users, Globe, Battery } from 'lucide-react';

const ZionAIEnergyManager: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Energy Monitoring',
      description: 'Real-time energy consumption tracking with AI-powered insights and anomaly detection',
      price: '$0.05/device/month'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast energy usage patterns and optimize consumption based on historical data',
      price: '$0.10/analysis'
    },
    {
      icon: Settings,
      title: 'Automated Optimization',
      description: 'AI automatically adjusts settings to minimize energy waste and reduce costs',
      price: '$0.02/optimization'
    },
    {
      icon: Leaf,
      title: 'Carbon Footprint Tracking',
      description: 'Monitor and reduce your environmental impact with detailed carbon analytics',
      price: '$0.03/tracking'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Identify cost-saving opportunities and optimize energy purchasing strategies',
      price: '$0.01/savings'
    },
    {
      icon: AlertTriangle,
      title: 'Maintenance Alerts',
      description: 'Predict equipment failures and schedule maintenance to prevent energy waste',
      price: '$0.05/alert'
    }
  ];

  const pricingTiers = [
    {
      name: 'Home',
      price: '$49',
      period: '/month',
      description: 'Perfect for residential use',
      features: [
        'Up to 20 devices',
        'Basic monitoring',
        'Energy reports',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$199',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 100 devices',
        'Advanced analytics',
        'Automated optimization',
        'Carbon tracking',
        'Priority support',
        'API access',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'SLA guarantee',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '35%', label: 'Average Energy Savings', icon: DollarSign },
    { number: '50%', label: 'Reduced Carbon Footprint', icon: Leaf },
    { number: '24/7', label: 'Monitoring & Optimization', icon: Clock },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap }
  ];

  return (
    <Layout
      title="Zion AI Energy Manager - Smart Energy Optimization"
      description="Optimize energy consumption with AI-powered monitoring, predictive analytics, and automated optimization. Reduce costs by up to 35% while minimizing your carbon footprint."
      keywords="energy management, AI optimization, smart energy, carbon footprint, energy savings, predictive analytics, sustainability"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6">
                <Leaf className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Sustainable Energy Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Zion AI Energy Manager
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your energy consumption with AI-powered optimization. Reduce costs by up to 35% 
                while minimizing your carbon footprint through intelligent monitoring and automated efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105">
                  View Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Energy Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive energy management powered by AI to optimize consumption and reduce environmental impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-green-400 font-semibold text-sm">
                    {feature.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered energy management system continuously monitors and optimizes your energy consumption
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Monitor</h3>
                <p className="text-gray-300 leading-relaxed">
                  Continuously track energy consumption across all devices and systems in real-time.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Analyze</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI analyzes patterns, identifies inefficiencies, and predicts optimal energy usage.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Optimize</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automatically adjust settings and provide recommendations to maximize efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Zion AI Energy Manager</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already saving energy and reducing costs with our AI-powered solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cost Savings</h3>
                <p className="text-gray-300 text-sm">
                  Reduce energy costs by up to 35% through intelligent optimization and waste elimination.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Sustainability</h3>
                <p className="text-gray-300 text-sm">
                  Minimize your carbon footprint and contribute to environmental sustainability goals.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Efficiency</h3>
                <p className="text-gray-300 text-sm">
                  Maximize energy efficiency with AI-powered insights and automated optimization.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
                <p className="text-gray-300 text-sm">
                  Join the global movement towards sustainable energy and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your energy management needs and start saving today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-green-500/50 shadow-lg shadow-green-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-green-500 text-green-400 hover:bg-green-500/10'
                  }`}>
                    {tier.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Start Your Energy Optimization Journey
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the sustainable energy revolution. Start saving money and reducing your environmental impact today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                    Start Free Trial
                  </button>
                  <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105">
                    Contact Energy Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ZionAIEnergyManager;