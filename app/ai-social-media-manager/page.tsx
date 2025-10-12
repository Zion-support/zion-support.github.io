import React from 'react';
import { CheckCircle, ArrowRight, Share2, BarChart3, Calendar, Users, Zap, Star, Image, MessageSquare, TrendingUp, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AISocialMediaManagerPage() {
  const features = [
    {
      icon: <Share2 className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Creation',
      description: 'Generate engaging social media posts, captions, and hashtags using advanced AI technology.',
      features: ['Post generation', 'Hashtag optimization', 'Content scheduling', 'Multi-platform posting', 'Visual content creation', 'Trend analysis'],
      price: 'Starting at $29/month',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive social media analytics with AI-powered insights and performance predictions.',
      features: ['Engagement tracking', 'Audience insights', 'Performance predictions', 'ROI analysis', 'Competitor analysis', 'Custom reports'],
      price: 'Starting at $39/month',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Community Management',
      description: 'AI-powered community management with automated responses and sentiment analysis.',
      features: ['Auto-responses', 'Sentiment analysis', 'Comment moderation', 'Engagement optimization', 'Crisis management', 'Brand monitoring'],
      price: 'Starting at $49/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Save Time',
      description: 'Reduce social media management time by 70% with AI-powered automation and content generation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increase Engagement',
      description: 'Boost engagement rates by 150% with AI-optimized content and perfect timing.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Grow Followers',
      description: 'Grow your audience organically with AI-driven content strategy and hashtag optimization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Data-Driven Strategy',
      description: 'Make informed decisions with comprehensive analytics and AI-powered insights.'
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      description: 'Visual content creation and story optimization',
      icon: <Image className="w-6 h-6 text-pink-500" />
    },
    {
      name: 'Facebook',
      description: 'Community building and ad campaign management',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      name: 'Twitter',
      description: 'Real-time engagement and trend monitoring',
      icon: <MessageSquare className="w-6 h-6 text-sky-500" />
    },
    {
      name: 'LinkedIn',
      description: 'Professional content and B2B networking',
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      name: 'TikTok',
      description: 'Short-form video content and viral optimization',
      icon: <Zap className="w-6 h-6 text-black" />
    },
    {
      name: 'YouTube',
      description: 'Video content strategy and SEO optimization',
      icon: <Target className="w-6 h-6 text-red-500" />
    }
  ];

  const stats = [
    { number: '1M+', label: 'Posts Created' },
    { number: '150%', label: 'Engagement Boost' },
    { number: '70%', label: 'Time Saved' },
    { number: '24/7', label: 'AI Monitoring' }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: ['3 social accounts', 'AI content creation', 'Basic analytics', 'Content scheduling', 'Hashtag research', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: ['10 social accounts', 'Advanced analytics', 'Community management', 'Competitor analysis', 'Priority support', 'Custom branding'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: ['Unlimited accounts', 'White-label options', 'API access', 'Dedicated support', 'Custom AI models', 'On-premise deployment'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management platform. Create, schedule, and optimize content across all platforms with intelligent automation." />
        <meta name="keywords" content="AI social media manager, social media automation, content creation, social media analytics, community management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Social Media Manager
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your social media presence with AI-powered content creation, scheduling, and analytics. 
              Grow your audience and engagement across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Social Media Management Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to dominate social media with AI-powered automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Major Platforms Supported
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manage all your social media accounts from one powerful AI-driven platform.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{platform.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Social Media Manager?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of social media management with intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free and scale as your social media presence grows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join thousands of brands using AI to create engaging content and grow their social media presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/micro-saas-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}