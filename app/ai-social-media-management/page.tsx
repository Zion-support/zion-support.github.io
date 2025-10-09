'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Share2, Users, BarChart } from 'lucide-react';

const AISocialMediaManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-pink-500" />,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags automatically using advanced AI algorithms.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Optimal Posting Times',
      description: 'AI determines the best times to post for maximum engagement across all platforms.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Audience Intelligence',
      description: 'Deep insights into your audience behavior, preferences, and engagement patterns.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-500" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with AI-powered insights to optimize your social media strategy.'
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', color: 'text-blue-500' },
    { name: 'Instagram', icon: '📷', color: 'text-pink-500' },
    { name: 'Twitter', icon: '🐦', color: 'text-blue-400' },
    { name: 'LinkedIn', icon: '💼', color: 'text-blue-600' },
    { name: 'TikTok', icon: '🎵', color: 'text-black' },
    { name: 'YouTube', icon: '📺', color: 'text-red-500' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '3 social media accounts',
        'AI content generation',
        'Basic scheduling',
        'Engagement tracking',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10 social media accounts',
        'Advanced AI features',
        'Content calendar',
        'Hashtag optimization',
        'Advanced analytics',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited accounts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated manager',
        'White-label options',
        '24/7 support',
        'Custom training'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '400%',
      description: 'Average increase in social media engagement'
    },
    {
      metric: '90%',
      description: 'Time saved on content creation'
    },
    {
      metric: '3.2x',
      description: 'Higher follower growth rate'
    },
    {
      metric: '24/7',
      description: 'Automated posting and monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-pink-500/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Share2 className="w-4 h-4 mr-2" />
              AI Social Media Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Social Media Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dominate social media with AI-powered content creation, scheduling, and analytics. 
              Grow your audience by 400% and save 90% of your time with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-pink-500 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-200"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-300">
              Manage all your social media accounts from one powerful AI-driven platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className={`text-lg font-semibold ${platform.color}`}>
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI social media management platform uses machine learning to optimize every aspect of your social presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your social media needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-500 shadow-2xl shadow-pink-500/20' 
                  : 'border-white/10 hover:border-pink-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                      : 'border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join thousands of businesses already using our AI social media management to grow their online presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-pink-200 text-sm mt-4">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagementPage;