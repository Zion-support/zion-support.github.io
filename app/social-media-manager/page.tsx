'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Share2, BarChart, Calendar, Users, Image, Video, MessageSquare, TrendingUp, Target, Clock } from 'lucide-react';

const SocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Share2,
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one unified dashboard across Facebook, Instagram, Twitter, LinkedIn, and more.'
    },
    {
      icon: BarChart,
      title: 'AI-Powered Analytics',
      description: 'Get deep insights into your social media performance with AI-driven analytics and predictive recommendations.'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically schedule posts at optimal times based on your audience engagement patterns and AI analysis.'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Understand your audience better with AI-powered demographic analysis and engagement tracking.'
    }
  ];

  const benefits = [
    'Save 10+ hours per week on social media management',
    'AI-powered content suggestions and optimization',
    'Automated posting across all platforms',
    'Real-time engagement monitoring',
    'Advanced analytics and reporting',
    'Team collaboration tools',
    'Content calendar and planning',
    '24/7 social media monitoring'
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B+' },
    { name: 'Instagram', icon: '📷', users: '2B+' },
    { name: 'Twitter', icon: '🐦', users: '450M+' },
    { name: 'LinkedIn', icon: '💼', users: '900M+' },
    { name: 'TikTok', icon: '🎵', users: '1B+' },
    { name: 'YouTube', icon: '📺', users: '2.7B+' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 social accounts',
        'Basic AI features',
        'Standard analytics',
        'Email support',
        'Basic scheduling'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 15 social accounts',
        'Advanced AI features',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Content calendar'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Premium AI features',
        'Custom analytics',
        '24/7 dedicated support',
        'Advanced team features',
        'API access',
        'White-label solution'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Manage All Platforms</title>
        <meta name="description" content="AI-powered social media management tool. Schedule posts, analyze performance, and grow your audience across all platforms with intelligent automation." />
        <meta name="keywords" content="social media manager, AI social media, social media automation, social media analytics, multi-platform management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Social Media Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one powerful dashboard. 
              AI-powered content creation, scheduling, and analytics to grow your audience.
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
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Supported Platforms</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {platforms.map((platform, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-3">{platform.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                    <p className="text-gray-400 text-sm">{platform.users} users</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Social Media Manager?</h2>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Social Media?</h3>
              <p className="text-gray-300 mb-6">
                Start managing all your social media accounts with AI-powered automation. 
                Save time, grow your audience, and boost engagement across all platforms.
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

export default SocialMediaManagerPage;