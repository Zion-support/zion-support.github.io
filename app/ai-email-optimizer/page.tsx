'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  TrendingUp, 
  Target, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Brain,
  BarChart3,
  Clock,
  Users,
  Shield,
  Send
} from 'lucide-react';

export default function AIEmailOptimizerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Subject Line Optimization',
      description: 'Generate compelling subject lines that increase open rates by up to 300% using advanced AI algorithms.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Performance Analytics',
      description: 'Track open rates, click-through rates, and conversions with detailed analytics and insights.'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: 'Optimal Send Times',
      description: 'AI determines the best times to send emails for maximum engagement and deliverability.'
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: 'A/B Testing Automation',
      description: 'Automatically test different versions of your emails to find the most effective content.'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with advanced spam prevention and reputation management.'
    }
  ];

  const emailTypes = [
    {
      name: 'Newsletter Campaigns',
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      features: ['Content optimization', 'Template design', 'Engagement tracking']
    },
    {
      name: 'Marketing Emails',
      icon: <Target className="w-6 h-6 text-green-500" />,
      features: ['Lead nurturing', 'Conversion optimization', 'ROI tracking']
    },
    {
      name: 'Transactional Emails',
      icon: <Send className="w-6 h-6 text-purple-500" />,
      features: ['Order confirmations', 'Password resets', 'Account updates']
    },
    {
      name: 'Welcome Series',
      icon: <Users className="w-6 h-6 text-orange-500" />,
      features: ['Onboarding automation', 'User engagement', 'Retention campaigns']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 emails/month',
        'Basic AI optimization',
        'Email templates',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ]
    },
    {
      name: 'Professional',
      price: '$99/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50,000 emails/month',
        'Advanced AI optimization',
        'A/B testing',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'API access',
        'Advanced segmentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Built for large organizations',
      features: [
        'Unlimited emails',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'Advanced automation'
      ]
    }
  ];

  const benefits = [
    'Increase open rates by up to 300%',
    'Boost click-through rates by 250%',
    'Improve deliverability by 95%',
    'Save 15+ hours per week',
    'Generate 5x more leads',
    'Reduce unsubscribe rates by 60%'
  ];

  const useCases = [
    {
      title: 'E-commerce Stores',
      description: 'Drive sales with optimized product emails, abandoned cart recovery, and personalized recommendations.',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'SaaS Companies',
      description: 'Improve user onboarding and retention with intelligent email sequences and feature announcements.',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Content Creators',
      description: 'Build engaged audiences with optimized newsletters and automated content delivery.',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Agencies',
      description: 'Manage multiple client campaigns efficiently with white-label solutions and advanced reporting.',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Email Optimizer - Zion Tech Group | Boost Email Performance</title>
        <meta name="description" content="Maximize your email marketing ROI with AI Email Optimizer. Increase open rates, boost engagement, and drive conversions with intelligent email optimization." />
        <meta name="keywords" content="AI email marketing, email optimization, subject line optimization, email analytics, deliverability, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Email Optimizer
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your email marketing with AI-powered optimization. Increase open rates, 
              boost engagement, and drive conversions with intelligent email intelligence.
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
                View Demo
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
              Advanced Email Optimization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to maximize your email marketing performance.
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

      {/* Email Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Optimize Every Email Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From newsletters to transactional emails, our AI optimizes them all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emailTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300 text-center">
                <div className="mb-4 flex justify-center">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{type.name}</h3>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to SaaS, our AI optimization works across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/30 transition-all duration-300">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact of AI-powered email optimization.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start optimizing your email marketing today with our flexible pricing.
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
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI Email Optimizer to boost their email performance and drive real results.
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