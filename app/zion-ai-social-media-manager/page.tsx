'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Share2, TrendingUp, Target, Brain, Zap, BarChart3, CheckCircle, ArrowRight, Star, Users, Award, Calendar, PieChart, LineChart } from 'lucide-react';

const ZionAiSocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate engaging social media posts, captions, and hashtags using advanced AI algorithms',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Optimal posting times based on audience engagement patterns and platform algorithms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics showing engagement rates, reach, and ROI across all platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Audience Insights',
      description: 'Deep audience analysis and targeting to maximize engagement and conversion rates',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 social accounts',
        'Basic AI content generation',
        'Email support',
        'Standard analytics',
        '1 user account',
        '5 posts per day'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10 social accounts',
        'Advanced AI content generation',
        'Priority support',
        'Custom analytics',
        'Up to 5 user accounts',
        'Unlimited posts',
        'Hashtag research',
        'Competitor analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited user accounts',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager',
        'Team collaboration tools'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Engagement Increase', icon: TrendingUp },
    { number: '85%', label: 'Time Saved', icon: Zap },
    { number: '40%', label: 'Follower Growth', icon: Users },
    { number: '400+', label: 'Happy Customers', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - Increase Engagement by 300% | Zion Tech Group</title>
        <meta name="description" content="AI-powered social media management platform. Increase engagement by 300% with automated content generation, smart scheduling, and advanced analytics. Starting at $79/month." />
        <meta name="keywords" content="social media management, AI content generation, social media automation, social media analytics, engagement optimization" />
        <meta property="og:title" content="Zion AI Social Media Manager - Increase Engagement by 300%" />
        <meta property="og:description" content="AI-powered social media management platform with automated content generation and smart scheduling. Increase engagement by 300% and save 85% of your time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-social-media-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion AI Social Media Manager
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Automate your social media with AI. Increase engagement by 300% and save 85% of your time with smart content generation and scheduling
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Social Media Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let AI handle your social media while you focus on growing your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Affordable Social Media Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your social media needs. All plans include our core AI automation engine.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-pink-400/60 ring-2 ring-pink-400/20' : 'border-slate-700/50'} hover:border-pink-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700' 
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-pink-500/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Social Media Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 400+ companies already using Zion AI Social Media Manager to increase engagement by 300% and save 85% of their time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiSocialMediaManagerPage;