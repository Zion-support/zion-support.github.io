import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BarChart3, TrendingUp, Target, Zap, Globe, Shield, Award, ArrowRight } from 'lucide-react';

export default function AffiliateAttributionHub() {
  const features = [
    {
      icon: Target,
      title: 'Multi-Touch Attribution',
      description: 'Track customer journey across all touchpoints and channels',
      benefits: ['Complete customer journey visibility', 'Accurate ROI measurement', 'Data-driven decision making']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Live performance metrics and conversion tracking',
      benefits: ['Instant performance insights', 'Live campaign optimization', 'Real-time reporting']
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      description: 'Advanced fraud detection and prevention systems',
      benefits: ['Click fraud detection', 'Conversion validation', 'Revenue protection']
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms for campaign optimization',
      benefits: ['Automated bid management', 'Smart budget allocation', 'Performance prediction']
    }
  ];

  const attributionModels = [
    {
      name: 'First-Touch Attribution',
      description: 'Credits the first interaction that led to conversion',
      bestFor: 'Brand awareness campaigns'
    },
    {
      name: 'Last-Touch Attribution',
      description: 'Credits the final interaction before conversion',
      bestFor: 'Direct response campaigns'
    },
    {
      name: 'Linear Attribution',
      description: 'Distributes credit equally across all touchpoints',
      bestFor: 'Multi-channel marketing'
    },
    {
      name: 'Time-Decay Attribution',
      description: 'Gives more credit to recent interactions',
      bestFor: 'Long sales cycles'
    },
    {
      name: 'Data-Driven Attribution',
      description: 'Uses machine learning for optimal credit distribution',
      bestFor: 'Advanced analytics needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Affiliate Marketing Excellence
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Affiliate Attribution Hub
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Maximize your affiliate marketing ROI with our comprehensive attribution platform. 
            Track, analyze, and optimize every customer interaction across all channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-200"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services/affiliate-marketing"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Attribution Features
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to track, analyze, and optimize your affiliate marketing campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <Award className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attribution Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Attribution Models
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the attribution model that best fits your marketing strategy and business goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attributionModels.map((model, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">{model.name}</h3>
                <p className="text-slate-400 mb-4">{model.description}</p>
                <div className="bg-purple-500/10 rounded-lg p-3">
                  <p className="text-sm text-purple-400 font-medium">Best for:</p>
                  <p className="text-sm text-slate-300">{model.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Attribution Hub?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Proven results and comprehensive features for affiliate marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Increased ROI</h3>
                  <p className="text-slate-400">Optimize campaigns based on accurate attribution data to maximize your return on investment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-slate-400">Track and manage affiliate campaigns across multiple countries and currencies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
                  <p className="text-slate-400">Deep insights into customer behavior and campaign performance with customizable dashboards.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fraud Protection</h3>
                  <p className="text-slate-400">Advanced fraud detection systems to protect your revenue and maintain campaign integrity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-Time Optimization</h3>
                  <p className="text-slate-400">AI-powered campaign optimization that adjusts bids and budgets in real-time for maximum performance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Partner Management</h3>
                  <p className="text-slate-400">Comprehensive tools to manage affiliate relationships and track partner performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Affiliate Marketing?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join leading brands that use our attribution hub to maximize their affiliate marketing ROI 
            and gain complete visibility into their customer acquisition funnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-200"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}