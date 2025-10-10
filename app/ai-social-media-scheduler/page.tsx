'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Target, Clock, CheckCircle, Brain, Share2, TrendingUp, BarChart, MessageSquare } from 'lucide-react';

const AISocialMediaScheduler: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience engagement patterns',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI technology',
      color: 'text-blue-400'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track performance across all platforms',
      color: 'text-green-400'
    },
    {
      icon: Share2,
      title: 'Multi-Platform Support',
      description: 'Schedule and manage content across Instagram, Facebook, Twitter, LinkedIn, and TikTok',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 social accounts',
        '30 posts per month',
        'Basic scheduling',
        'Email support',
        'Basic analytics',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'AI content generation',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Unlimited posts',
        'Advanced AI features',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Content Planning',
      description: 'Plan and schedule your content calendar weeks in advance',
      icon: Calendar,
      result: '3x efficiency'
    },
    {
      title: 'Engagement Boost',
      description: 'Increase engagement with AI-optimized posting times and content',
      icon: TrendingUp,
      result: '150% more'
    },
    {
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice across all platforms',
      icon: Target,
      result: '100% consistent'
    },
    {
      title: 'Time Saving',
      description: 'Save hours every week with automated scheduling and content generation',
      icon: Clock,
      result: '10 hours/week'
    }
  ];

  const supportedPlatforms = [
    { name: 'Instagram', icon: '📸', color: 'text-pink-400' },
    { name: 'Facebook', icon: '📘', color: 'text-blue-400' },
    { name: 'Twitter', icon: '🐦', color: 'text-sky-400' },
    { name: 'LinkedIn', icon: '💼', color: 'text-blue-600' },
    { name: 'TikTok', icon: '🎵', color: 'text-black' },
    { name: 'YouTube', icon: '📺', color: 'text-red-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Media Scheduler - Smart Content Management | Zion Tech Group</title>
        <meta name="description" content="Streamline your social media with AI-powered scheduling, content generation, and analytics. Manage all platforms from one dashboard." />
        <meta name="keywords" content="social media scheduler, content management, social media automation, AI content generation, social media analytics" />
        <meta property="og:title" content="AI Social Media Scheduler - Smart Content Management" />
        <meta property="og:description" content="Streamline your social media with AI-powered scheduling and content generation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-social-media-scheduler" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>AI-Powered Social Media</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Social Media Scheduler
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your social media strategy with AI-powered scheduling, content generation,
            and analytics. Manage all platforms from one intelligent dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Start Scheduling
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-white font-semibold mb-2">Faster</div>
              <div className="text-gray-400 text-sm">Schedule content 10x faster than manual posting</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
              <div className="text-white font-semibold mb-2">Platforms</div>
              <div className="text-gray-400 text-sm">Manage all major social media platforms</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">150%</div>
              <div className="text-white font-semibold mb-2">More Engagement</div>
              <div className="text-gray-400 text-sm">AI-optimized posting times and content</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Automation</div>
              <div className="text-gray-400 text-sm">Never miss a post with automated scheduling</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportedPlatforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center">
                <div className="text-4xl mb-2">{platform.icon}</div>
                <div className={`font-medium ${platform.color}`}>{platform.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Social Media?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 5,000+ businesses already using our AI Social Media Scheduler to grow their presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );

AISocialMediaScheduler.displayName = 'AISocialMediaScheduler';

export default AISocialMediaScheduler;