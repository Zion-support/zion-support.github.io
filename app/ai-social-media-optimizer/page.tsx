'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  TrendingUp, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Brain,
  BarChart3,
  Target,
  Clock,
  Heart,
  MessageCircle
} from 'lucide-react';

export default function AISocialMediaOptimizerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Content Optimization',
      description: 'Automatically optimize your posts for maximum engagement using advanced AI algorithms.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Performance Analytics',
      description: 'Track and analyze your social media performance with detailed insights and recommendations.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Audience Targeting',
      description: 'Identify and target your ideal audience with AI-powered demographic and interest analysis.'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: 'Optimal Timing',
      description: 'Post at the perfect times when your audience is most active and engaged.'
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: 'Auto-Scheduling',
      description: 'Automatically schedule posts across all platforms for maximum reach and engagement.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'ROI Tracking',
      description: 'Measure the return on investment of your social media campaigns with detailed metrics.'
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: <Share2 className="w-6 h-6 text-blue-500" />,
      features: ['Post optimization', 'Ad targeting', 'Engagement tracking']
    },
    {
      name: 'Instagram',
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      features: ['Story optimization', 'Hashtag research', 'Visual content analysis']
    },
    {
      name: 'Twitter',
      icon: <MessageCircle className="w-6 h-6 text-cyan-500" />,
      features: ['Tweet optimization', 'Trend analysis', 'Engagement boosting']
    },
    {
      name: 'LinkedIn',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      features: ['Professional content', 'B2B targeting', 'Lead generation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 social accounts',
        'Basic AI optimization',
        'Monthly analytics report',
        'Email support',
        'Standard templates'
      ]
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 social accounts',
        'Advanced AI optimization',
        'Real-time analytics',
        'Priority support',
        'Custom templates',
        'A/B testing',
        'Competitor analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'Built for large organizations',
      features: [
        'Unlimited social accounts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'API access',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ]
    }
  ];

  const benefits = [
    'Increase engagement by up to 300%',
    'Save 10+ hours per week on social media',
    'Boost follower growth by 250%',
    'Improve post reach by 400%',
    'Generate 5x more leads',
    'Reduce social media management costs'
  ];

  const useCases = [
    {
      title: 'E-commerce Brands',
      description: 'Drive sales and increase brand awareness with optimized product posts and targeted campaigns.',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Content Creators',
      description: 'Maximize reach and engagement with AI-optimized content and perfect timing.',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'B2B Companies',
      description: 'Generate leads and build professional presence with LinkedIn optimization.',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Agencies',
      description: 'Manage multiple client accounts efficiently with white-label solutions.',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Social Media Optimizer - Zion Tech Group | Boost Your Social Presence</title>
        <meta name="description" content="Maximize your social media impact with AI Social Media Optimizer. Increase engagement, grow followers, and boost ROI with intelligent content optimization." />
        <meta name="keywords" content="AI social media, social media optimization, content optimization, social media analytics, engagement boost, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Social Media Optimizer
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your social media presence with AI-powered optimization. Increase engagement, 
              grow your audience, and maximize ROI across all platforms.
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
              Powerful Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to dominate social media with AI-powered intelligence.
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

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Optimize Across All Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage and optimize your presence on every major social media platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300 text-center">
                <div className="mb-4 flex justify-center">{platform.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
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
              Perfect For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a startup or enterprise, our AI optimization works for you.
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
              See the measurable impact of AI-powered social media optimization.
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
              Start optimizing your social media today with our flexible pricing.
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
              Ready to Dominate Social Media?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI Social Media Optimizer to boost their online presence and drive real results.
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