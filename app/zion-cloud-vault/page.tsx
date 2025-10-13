import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Lock, Upload, Download, Folder, FileText, Zap, Globe, Smartphone, Activity } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionCloudVault = () => {
  const features = [
    'Unlimited Cloud Storage',
    'End-to-End Encryption',
    'Real-time File Sync',
    'Version Control & History',
    'Team Collaboration Tools',
    'Advanced File Sharing',
    'Automated Backups',
    'Cross-Platform Access',
    'API Integration',
    'Custom Branding',
    'Advanced Security Controls',
    'Compliance Reporting'
  ];

  const pricingTiers = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        '1TB cloud storage',
        'Basic file sharing',
        'Mobile app access',
        'Email support',
        '1 user account',
        'Basic security features'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        '5TB cloud storage',
        'Advanced file sharing',
        'Team collaboration',
        'Priority support',
        'Up to 10 user accounts',
        'Advanced security',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited storage',
        'Enterprise features',
        'Dedicated support',
        'Unlimited users',
        'Advanced compliance',
        'Custom integrations',
        'SLA guarantee',
        'On-premise options'
      ],
      popular: false
    }
  ];

  const cloudFeatures = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Unlimited Storage',
      description: 'Store unlimited files and data with our scalable cloud infrastructure.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption ensures your data is secure at all times.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-time Sync',
      description: 'Automatic synchronization across all your devices and platforms.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with advanced collaboration tools.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Security',
      description: 'Multi-factor authentication and advanced security controls.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Performance',
      description: 'Lightning-fast upload and download speeds with global CDN.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const integrations = [
    { name: 'Microsoft Office', icon: <FileText className="w-6 h-6" /> },
    { name: 'Google Workspace', icon: <Globe className="w-6 h-6" /> },
    { name: 'Slack', icon: <Users className="w-6 h-6" /> },
    { name: 'Trello', icon: <Activity className="w-6 h-6" /> },
    { name: 'Salesforce', icon: <Database className="w-6 h-6" /> },
    { name: 'Zapier', icon: <Zap className="w-6 h-6" /> },
    { name: 'API Access', icon: <Code className="w-6 h-6" /> },
    { name: 'Webhooks', icon: <Settings className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Zion Cloud Vault - Secure Cloud Storage & File Sharing | Zion Tech Group"
        description="Secure cloud storage with unlimited space, end-to-end encryption, and team collaboration. Starting at $9/month with 30-day free trial."
        keywords="cloud storage, file sharing, secure storage, team collaboration, cloud backup, file sync, data encryption"
        canonical="https://ziontechgroup.com/zion-cloud-vault"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Cloud className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Secure Cloud Storage</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Zion Cloud Vault
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Secure cloud storage with unlimited space, end-to-end encryption, and powerful collaboration tools. 
            Store, share, and collaborate on your files with enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Cloud className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-gray-300 text-sm">Files Stored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">256-bit</div>
              <div className="text-gray-300 text-sm">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Cloud Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to store, share, and collaborate on your files securely in the cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Cloud Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All the features you need for secure file storage and team collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
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
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and workflows. We support 50+ integrations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors mb-2 flex justify-center">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Affordable Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your storage needs. All plans include 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-blue-500/50 shadow-blue-500/20' 
                    : 'border-white/20 hover:border-blue-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{tier.price}</span>
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
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Storing Securely Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of users who trust Zion Cloud Vault for their file storage and collaboration needs. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Cloud className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionCloudVault;