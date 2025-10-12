'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, BarChart3, Target, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Timer, Calendar, TrendingUp } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AITimeTrackerPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Time Analysis',
      description: 'Advanced AI algorithms analyze your work patterns and suggest optimal time allocation strategies.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards with real-time insights into productivity, efficiency, and time utilization.'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Smart Goal Setting',
      description: 'AI-driven goal recommendations based on your historical data and productivity patterns.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Team Collaboration',
      description: 'Seamless team time tracking with project-based organization and collaborative insights.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Automated Reporting',
      description: 'Generate detailed reports automatically with AI-powered insights and recommendations.'
    },
    {
      icon: <Timer className="w-6 h-6 text-red-400" />,
      title: 'Focus Mode',
      description: 'AI-enhanced focus sessions with smart break reminders and productivity optimization.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 5 projects',
        'Basic AI insights',
        'Mobile app access',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$19.99',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Unlimited projects',
        'Advanced AI analytics',
        'Team collaboration',
        'Priority support',
        'Advanced reporting',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49.99',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
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
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechFlow Inc.',
      content: 'AI Time Tracker has revolutionized how our team manages time. The AI insights helped us increase productivity by 40%.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Freelance Developer',
      company: 'Independent',
      content: 'The automated reporting saves me hours every week. The AI recommendations are spot-on for optimizing my work schedule.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Team Lead',
      company: 'Digital Solutions',
      content: 'Our team productivity has improved dramatically. The collaborative features make project management effortless.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Time Tracker - Smart Time Management & Analytics | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered time tracking solution with smart analytics, team collaboration, and automated reporting. Boost productivity by 40% with intelligent time management." />
        <meta name="keywords" content="AI time tracker, time management, productivity analytics, team collaboration, automated reporting, smart scheduling, time optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-tracker" />
      </Helmet>

      <FuturisticBackground variant="hero">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Time Management
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Time Tracker
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your productivity with AI-powered time tracking, smart analytics, and automated insights. 
                Join 10,000+ professionals who've increased their efficiency by 40%.
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                <div className="text-gray-300">User Rating</div>
              </div>
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
                Everything you need to optimize your time and boost productivity
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
                Choose the plan that fits your needs. All plans include 14-day free trial.
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
                Join thousands of satisfied users who've transformed their productivity
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
                Ready to Transform Your Productivity?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your 14-day free trial today. No credit card required. Join 10,000+ professionals already using AI Time Tracker.
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