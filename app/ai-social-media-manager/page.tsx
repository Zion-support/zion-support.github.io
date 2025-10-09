import React from 'react';
import { CheckCircle, Star, ArrowRight, Zap, Users, TrendingUp, Shield, Clock, BarChart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Multi-platform Scheduling',
      description: 'Schedule posts across Facebook, Instagram, Twitter, LinkedIn, and TikTok from one dashboard.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Hashtag Optimization',
      description: 'AI-powered hashtag research and optimization to maximize reach and engagement.'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Engagement Analytics',
      description: 'Track performance, analyze trends, and get insights to improve your social media strategy.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Competitor Analysis',
      description: 'Monitor competitors, track their strategies, and identify opportunities to outperform them.'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Auto-posting',
      description: 'Set up automated posting schedules and let AI handle your social media presence 24/7.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$79',
      period: '/month',
      features: [
        '3 social media accounts',
        'Basic scheduling',
        'Content templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: [
        '10 social media accounts',
        'AI content creation',
        'Advanced analytics',
        'Competitor analysis',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      features: [
        'Unlimited accounts',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
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

  const benefits = [
    {
      stat: '15 hours',
      description: 'Saved per week on social media management'
    },
    {
      stat: '50%',
      description: 'Increase in engagement rates'
    },
    {
      stat: '300%',
      description: 'Growth in organic reach'
    },
    {
      stat: '90%',
      description: 'Reduction in content creation time'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            New AI-Powered Solution
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Social Media Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automate your social media presence with AI-powered content creation, scheduling, and analytics that grows your following organically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              See the impact our AI social media manager has on businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {benefit.stat}
                </div>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
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
            <p className="text-xl text-gray-300">
              Everything you need to dominate social media
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-purple-400 mb-4">
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

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Major Platforms
            </h2>
            <p className="text-xl text-gray-300">
              Manage all your social media accounts from one place
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{platform.icon}</div>
                <h3 className={`text-lg font-semibold ${platform.color}`}>
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
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
              <div key={index} className={`bg-white rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
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
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI to grow their social media presence and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;