'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Share2, BarChart3, Calendar, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Hash, Image, Video } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISocialMediaSchedulerPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Content Optimization',
      description: 'AI analyzes your audience and suggests optimal posting times, hashtags, and content types for maximum engagement.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-400" />,
      title: 'Smart Scheduling',
      description: 'Automatically schedule posts across all platforms at the best times for your specific audience.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with AI-powered insights on performance, engagement, and growth trends.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Multi-Platform Management',
      description: 'Manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and more from one unified dashboard.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Content Automation',
      description: 'AI generates engaging captions, suggests trending hashtags, and creates content variations automatically.'
    },
    {
      icon: <Image className="w-6 h-6 text-red-400" />,
      title: 'Visual Content Tools',
      description: 'Built-in image editor, video trimmer, and AI-powered visual content suggestions for better engagement.'
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', color: 'text-blue-400' },
    { name: 'Instagram', icon: '📷', color: 'text-pink-400' },
    { name: 'Twitter', icon: '🐦', color: 'text-blue-300' },
    { name: 'LinkedIn', icon: '💼', color: 'text-blue-600' },
    { name: 'TikTok', icon: '🎵', color: 'text-white' },
    { name: 'YouTube', icon: '📺', color: 'text-red-500' },
    { name: 'Pinterest', icon: '📌', color: 'text-red-400' },
    { name: 'Snapchat', icon: '👻', color: 'text-yellow-400' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 3 social accounts',
        '30 posts per month',
        'Basic AI insights',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49.99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI optimization',
        'Team collaboration (5 users)',
        'Priority support',
        'Advanced analytics',
        'Content calendar',
        'Hashtag research'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social accounts',
        'Unlimited posts',
        'Custom AI models',
        'Unlimited team members',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      content: 'AI Social Media Scheduler has increased our client engagement by 150%. The AI optimization is incredible!',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'Content Creator',
      company: 'Influencer Marketing',
      content: 'The automated content suggestions and optimal timing features have saved me 10+ hours per week.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Social Media Manager',
      company: 'E-commerce Brand',
      content: 'Managing 8 social accounts used to be overwhelming. Now it\'s effortless with AI-powered automation.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Scheduler - Smart Content Management & Analytics | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management platform with smart scheduling, content optimization, and multi-platform analytics. Increase engagement by 150%." />
        <meta name="keywords" content="AI social media scheduler, social media management, content automation, social media analytics, multi-platform posting, AI content optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-scheduler" />
      </Helmet>

      <FuturisticBackground variant="hero">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Social Media Management
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Social Media Scheduler
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your social media strategy with AI-powered content optimization, smart scheduling, 
                and multi-platform management. Join 25,000+ marketers who've increased engagement by 150%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">150%</div>
                <div className="text-gray-300">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
                <div className="text-gray-300">Platforms Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4.8/5</div>
                <div className="text-gray-300">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Supported Platforms
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Manage all your social media accounts from one powerful dashboard
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <FuturisticCard
                  key={index}
                  variant="feature"
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className={`text-lg font-semibold ${platform.color}`}>{platform.name}</h3>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Powerful Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to dominate social media with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  variant="feature"
                  className="h-full"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose the plan that fits your social media needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  variant={plan.popular ? "service" : "feature"}
                  className={`h-full relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton
                    variant={plan.popular ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Join thousands of marketers who've transformed their social media strategy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  variant="testimonial"
                  className="h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Ready to Dominate Social Media?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your 14-day free trial today. No credit card required. Join 25,000+ marketers already using AI Social Media Scheduler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('tel:+13024640950', '_blank')}
                >
                  Call +1 (302) 464-0950
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}