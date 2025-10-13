import React from 'react';
import { Link } from 'react-router-dom';
import { Database, ArrowRight, CheckCircle, Star, Cloud, Users, Clock, DollarSign, Shield, Code, Mail, Settings, RefreshCw, Zap, Globe, Smartphone, Activity, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionDataSync = () => {
  const features = [
    'Real-time Data Synchronization',
    'Multi-source Data Integration',
    'Automated Data Transformation',
    'Data Quality Validation',
    'Conflict Resolution',
    'Incremental Sync',
    'API Integration',
    'Custom Mapping Rules',
    'Data Monitoring & Alerts',
    'Backup & Recovery',
    'Compliance Reporting',
    'White-label Options'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic sync features',
        'Email support',
        '1 user account',
        'Standard sync frequency',
        'Basic monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 data sources',
        'Advanced sync features',
        'Priority support',
        'Up to 10 user accounts',
        'Real-time sync',
        'Advanced monitoring',
        'Custom transformations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Enterprise features',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee',
        'On-premise options'
      ],
      popular: false
    }
  ];

  const syncFeatures = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Real-time Sync',
      description: 'Keep your data synchronized across all systems in real-time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Multi-source Integration',
      description: 'Connect and sync data from multiple databases and applications.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Transformation',
      description: 'Transform data automatically during sync with custom rules.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Validation',
      description: 'Ensure data quality with built-in validation and error handling.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Monitoring & Alerts',
      description: 'Monitor sync status and get alerts for any issues.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics Dashboard',
      description: 'Track sync performance and data flow with detailed analytics.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const integrations = [
    { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
    { name: 'Salesforce', icon: <Users className="w-6 h-6" /> },
    { name: 'HubSpot', icon: <Users className="w-6 h-6" /> },
    { name: 'Google Sheets', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'API Endpoints', icon: <Code className="w-6 h-6" /> },
    { name: 'Webhooks', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Zion Data Sync - Real-time Data Synchronization Platform | Zion Tech Group"
        description="Sync data across multiple systems in real-time. Automated data transformation, validation, and monitoring. Starting at $39/month."
        keywords="data sync, data synchronization, data integration, real-time sync, data transformation, data validation"
        canonical="https://ziontechgroup.com/zion-data-sync"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <Database className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Data Synchronization</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              Zion Data Sync
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Keep your data synchronized across all systems in real-time. Automated data transformation, 
            validation, and monitoring for seamless data flow across your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Database className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Sync Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">&lt;1s</div>
              <div className="text-gray-300 text-sm">Sync Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Sync Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to keep your data synchronized and flowing seamlessly across all systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {syncFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Data Sync Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All the features you need for reliable data synchronization across your entire infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-green-300 transition-colors">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect Any Data Source
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sync data from and to any database, API, or application with our extensive integration library.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-green-400 group-hover:text-green-300 transition-colors mb-2 flex justify-center">
                  {integration.icon}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Data Sync Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your data sync needs. All plans include 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-green-500/50 shadow-green-500/20' 
                    : 'border-white/20 hover:border-green-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-green-500/25'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Syncing Your Data
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using Zion Data Sync to keep their data synchronized 
            and flowing seamlessly. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Database className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionDataSync;