'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Brain,
  Smartphone,
  Mail,
  BarChart3,
  Shield,
  Globe
} from 'lucide-react';

export default function AISmartSchedulerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your preferences and optimizes meeting times automatically.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Smart Time Blocking',
      description: 'Automatically block time for focused work, breaks, and personal activities based on your productivity patterns.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate schedules across teams with conflict resolution and optimal meeting suggestions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Instant Scheduling',
      description: 'One-click scheduling with smart suggestions for the best available times for all participants.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Timezone Intelligence',
      description: 'Automatic timezone detection and conversion for global teams and international meetings.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Analytics & Insights',
      description: 'Track productivity patterns, meeting efficiency, and time allocation with detailed analytics.'
    }
  ];

  const useCases = [
    {
      title: 'Executive Assistants',
      description: 'Streamline complex scheduling for executives with multiple commitments and priorities.',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Remote Teams',
      description: 'Coordinate schedules across different time zones and working hours seamlessly.',
      icon: <Globe className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Sales Teams',
      description: 'Optimize client meeting scheduling and follow-up appointments for maximum efficiency.',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Healthcare Providers',
      description: 'Manage patient appointments with intelligent scheduling and automated reminders.',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited personal scheduling',
        'AI-powered time optimization',
        'Calendar integration (Google, Outlook)',
        'Mobile app access',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$49/month',
      description: 'Ideal for small teams and professionals',
      features: [
        'Everything in Personal',
        'Team scheduling (up to 10 members)',
        'Advanced AI features',
        'Custom meeting templates',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99/month',
      description: 'Built for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ]
    }
  ];

  const benefits = [
    'Save 2+ hours per week on scheduling',
    'Reduce scheduling conflicts by 90%',
    'Increase meeting attendance rates',
    'Improve work-life balance',
    'Boost team productivity',
    'Eliminate double-booking errors'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Smart Scheduler - Zion Tech Group | Intelligent Scheduling Solution</title>
        <meta name="description" content="Revolutionize your scheduling with AI Smart Scheduler. Intelligent time management, team coordination, and productivity optimization for modern professionals." />
        <meta name="keywords" content="AI scheduler, smart scheduling, time management, productivity, team coordination, meeting optimization, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Smart Scheduler
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your scheduling with AI-powered intelligence. Automatically optimize meeting times, 
              coordinate teams, and boost productivity with our smart scheduling solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Scheduling Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to master your time and coordinate teams effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Professional
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI Smart Scheduler adapts to your specific needs and industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Smart Scheduler?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of intelligent scheduling for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your scheduling needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-slate-700'} hover:border-cyan-500/30 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'border border-slate-600 text-white hover:bg-slate-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Master Your Schedule?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their productivity with AI Smart Scheduler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}