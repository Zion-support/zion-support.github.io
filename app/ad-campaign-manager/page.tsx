'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Target, BarChart, DollarSign, TrendingUp, Users, Clock, Settings, Eye, MousePointer } from 'lucide-react';

const AdCampaignManagerPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'AI-Powered Targeting',
      description: 'Automatically optimize your ad targeting based on audience behavior and performance data.'
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Track campaign performance with detailed analytics and AI-driven insights across all platforms.'
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'AI automatically adjusts your ad spend to maximize ROI and minimize wasted budget.'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep audience analysis to help you create more effective campaigns and reach the right people.'
    }
  ];

  const benefits = [
    'Increase ad performance by up to 300%',
    'Reduce cost per acquisition by 50%',
    'Automated A/B testing and optimization',
    'Cross-platform campaign management',
    'Real-time budget allocation',
    'Advanced audience segmentation',
    'Creative performance analysis',
    '24/7 campaign monitoring'
  ];

  const platforms = [
    { name: 'Google Ads', icon: '🔍', reach: '3.5B+ searches/day' },
    { name: 'Facebook Ads', icon: '📘', reach: '2.9B+ users' },
    { name: 'Instagram Ads', icon: '📷', reach: '2B+ users' },
    { name: 'LinkedIn Ads', icon: '💼', reach: '900M+ users' },
    { name: 'Twitter Ads', icon: '🐦', reach: '450M+ users' },
    { name: 'TikTok Ads', icon: '🎵', reach: '1B+ users' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to $5K ad spend',
        'Basic AI optimization',
        'Standard analytics',
        'Email support',
        '2 platforms'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to $25K ad spend',
        'Advanced AI optimization',
        'Advanced analytics',
        'Priority support',
        'All platforms',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited ad spend',
        'Premium AI optimization',
        'Custom analytics',
        '24/7 dedicated support',
        'All platforms + custom',
        'Advanced automation',
        'White-label solution'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Ad Campaign Manager - Zion Tech Group | Optimize Your Ads</title>
        <meta name="description" content="AI-powered ad campaign management across all platforms. Automatically optimize targeting, budget, and creative performance to maximize ROI." />
        <meta name="keywords" content="ad campaign manager, AI advertising, Google Ads, Facebook Ads, ad optimization, campaign management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Ad Campaign Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automatically optimize your ad campaigns across all platforms with AI-powered targeting, 
              budget allocation, and performance analysis. Maximize ROI and minimize wasted spend.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Powerful Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Platforms Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Supported Ad Platforms</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {platforms.map((platform, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-3">{platform.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                    <p className="text-gray-400 text-sm">{platform.reach}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Ad Campaign Manager?</h2>
              <div className="cyber-card hologram-card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div
                    key={index}
                    className={`cyber-card hologram-card p-8 relative ${
                      plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full cyber-button text-center py-3">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Ad Campaigns?</h3>
              <p className="text-gray-300 mb-6">
                Start maximizing your ad performance with AI-powered optimization. 
                Reduce costs, increase conversions, and grow your business with smarter advertising.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-center py-3 px-8"
                >
                  Start Free Trial
                </a>
                <a
                  href="/demo"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AdCampaignManagerPage;