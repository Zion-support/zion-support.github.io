'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Brain, BarChart3, Target, Users, Zap, CheckCircle, Star, ArrowRight, Send, TrendingUp, MousePointer } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AIEmailMarketingAutomationPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice.'
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Smart Segmentation',
      description: 'AI automatically segments your audience based on behavior, preferences, and engagement patterns for maximum relevance.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into open rates, click-through rates, conversions, and revenue attribution with AI-powered recommendations.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Automated Workflows',
      description: 'Create complex email sequences that trigger based on user behavior, purchase history, and engagement levels.'
    },
    {
      icon: <MousePointer className="w-6 h-6 text-yellow-400" />,
      title: 'A/B Testing',
      description: 'AI-powered A/B testing that automatically optimizes subject lines, content, and send times for maximum performance.'
    },
    {
      icon: <Users className="w-6 h-6 text-red-400" />,
      title: 'Personalization Engine',
      description: 'Dynamic content personalization that adapts emails to each recipient based on their preferences and behavior history.'
    }
  ];

  const automationTypes = [
    { name: 'Welcome Series', icon: '👋', color: 'text-green-400' },
    { name: 'Abandoned Cart', icon: '🛒', color: 'text-red-400' },
    { name: 'Birthday Emails', icon: '🎂', color: 'text-purple-400' },
    { name: 'Re-engagement', icon: '🔄', color: 'text-blue-400' },
    { name: 'Post-Purchase', icon: '✅', color: 'text-yellow-400' },
    { name: 'Win-Back', icon: '💪', color: 'text-cyan-400' },
    { name: 'Upsell/Cross-sell', icon: '📈', color: 'text-orange-400' },
    { name: 'Event Reminders', icon: '📅', color: 'text-pink-400' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39.99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        '10,000 emails/month',
        'Basic AI content generation',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99.99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25,000 subscribers',
        'Unlimited emails',
        'Advanced AI automation',
        'A/B testing',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$249.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Unlimited emails',
        'Custom AI models',
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
      name: 'Rachel Thompson',
      role: 'Marketing Director',
      company: 'E-commerce Brand',
      content: 'Our email open rates increased by 65% with AI-generated subject lines. The automation workflows are incredibly powerful!',
      rating: 5,
      avatar: 'RT'
    },
    {
      name: 'Mark Davis',
      role: 'Founder',
      company: 'SaaS Company',
      content: 'The AI segmentation is game-changing. We\'re now sending highly targeted emails that actually convert.',
      rating: 5,
      avatar: 'MD'
    },
    {
      name: 'Lisa Chen',
      role: 'Email Marketing Manager',
      company: 'Retail Chain',
      content: 'The automated workflows save us 20+ hours per week. Our revenue from email marketing has tripled.',
      rating: 5,
      avatar: 'LC'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing Automation - Smart Email Campaigns | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing platform with smart automation, content generation, and advanced analytics. Increase open rates by 65%." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, marketing automation, email analytics, AI content generation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-marketing-automation" />
      </Helmet>

      <FuturisticBackground variant="hero">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Email Marketing
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Email Marketing Automation
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your email marketing with AI-powered automation, content generation, and smart segmentation. 
                Join 20,000+ marketers who've increased open rates by 65%.
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">20,000+</div>
                <div className="text-gray-300">Active Marketers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">65%</div>
                <div className="text-gray-300">Open Rate Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-300">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4.8/5</div>
                <div className="text-gray-300">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Types */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Powerful Automation Types
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Pre-built automation workflows for every stage of the customer journey
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {automationTypes.map((type, index) => (
                <FuturisticCard
                  key={index}
                  variant="feature"
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className={`text-lg font-semibold ${type.color}`}>{type.name}</h3>
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
                Everything you need to create high-converting email campaigns with AI
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
                Choose the plan that fits your email marketing needs. All plans include 14-day free trial.
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
                Join thousands of marketers who've transformed their email campaigns
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
                Ready to Transform Your Email Marketing?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your 14-day free trial today. No credit card required. Join 20,000+ marketers already using AI Email Marketing Automation.
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