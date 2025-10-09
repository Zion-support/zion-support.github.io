'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Share2, TrendingUp, Calendar, BarChart, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Instagram, Twitter, Facebook, Linkedin, Youtube, MessageSquare, Image, Video, Hash, Globe, Clock, Target, Heart, Eye } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create engaging posts, captions, and hashtags automatically',
      price: 'Included'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Optimal posting times based on audience engagement data',
      price: 'Included'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights and performance tracking',
      price: 'Included'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'AI-powered audience analysis and targeting',
      price: 'Included'
    },
    {
      icon: Image,
      title: 'Visual Content Creation',
      description: 'AI-generated images and graphics for posts',
      price: '+$99/month'
    },
    {
      icon: Video,
      title: 'Video Content AI',
      description: 'Automated video creation and editing',
      price: '+$199/month'
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'text-pink-400', users: '2B+' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-400', users: '3B+' },
    { name: 'Twitter', icon: Twitter, color: 'text-cyan-400', users: '450M+' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', users: '900M+' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-400', users: '2.7B+' },
    { name: 'TikTok', icon: Hash, color: 'text-white', users: '1B+' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 social accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 15 social accounts',
        'Unlimited posts',
        'Advanced AI content generation',
        'Comprehensive analytics',
        'Priority support',
        'Team collaboration (5 users)',
        'Custom branding',
        'Hashtag research'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Unlimited posts',
        'AI video creation',
        'Advanced audience insights',
        '24/7 dedicated support',
        'Unlimited team members',
        'White-label solution',
        'Custom integrations',
        'API access'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Save 20+ Hours Weekly',
      description: 'Automate content creation, scheduling, and engagement',
      icon: Clock,
      metric: '20+ hours'
    },
    {
      title: 'Increase Engagement by 300%',
      description: 'AI-optimized content drives higher engagement rates',
      icon: Heart,
      metric: '300%'
    },
    {
      title: 'Grow Followers 5x Faster',
      description: 'Strategic posting and content optimization',
      icon: Users,
      metric: '5x faster'
    },
    {
      title: 'ROI of 400%+',
      description: 'Proven results with measurable business impact',
      icon: TrendingUp,
      metric: '400%+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="AI-powered social media management with automated content creation, scheduling, and analytics. Starting at $99/month. Grow your social presence 5x faster." />
        <meta name="keywords" content="AI social media manager, social media automation, content generation, social media scheduling, social media analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-effect">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch">
              AI Social Media Manager
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Automate, Optimize, and Scale Your Social Presence
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your social media strategy with AI-powered content creation, smart scheduling, 
              and advanced analytics. Grow your audience and engagement while saving 20+ hours per week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Platform Support */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {platforms.map((platform, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <platform.icon className={`w-8 h-8 mx-auto mb-2 ${platform.color}`} />
                  <div className="text-white font-semibold text-sm">{platform.name}</div>
                  <div className="text-gray-400 text-xs">{platform.users} users</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <div className="text-cyan-400 font-semibold">{feature.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. AI Analyzes Your Brand</h3>
                <p className="text-gray-300 text-lg">
                  Our AI studies your brand voice, audience, and industry to understand your unique style.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Content Gets Created</h3>
                <p className="text-gray-300 text-lg">
                  AI generates engaging posts, captions, and hashtags tailored to your audience and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Optimize & Scale</h3>
                <p className="text-gray-300 text-lg">
                  Smart scheduling and continuous optimization help you grow faster than ever before.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'border-2 border-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1,000+ businesses already using our AI social media manager to grow their audience and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AISocialMediaManagerPage;