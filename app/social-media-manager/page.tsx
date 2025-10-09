import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Share2, Target, BarChart, Zap, Users } from 'lucide-react';

const SocialMediaManagerPage: React.FC = () => {
  const socialFeatures = [
    {
      title: 'AI Content Generation',
      description: 'Generate engaging social media content using AI analysis of trending topics and audience preferences.',
      icon: '✍️',
      benefits: [
        'Trending topic analysis',
        'Content suggestions',
        'Hashtag optimization',
        'Platform-specific content'
      ]
    },
    {
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one unified dashboard.',
      icon: '📱',
      benefits: [
        'Facebook integration',
        'Twitter management',
        'Instagram posting',
        'LinkedIn automation'
      ]
    },
    {
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that determines the optimal posting times for maximum engagement.',
      icon: '⏰',
      benefits: [
        'Optimal timing analysis',
        'Audience activity tracking',
        'Automatic scheduling',
        'Cross-platform coordination'
      ]
    },
    {
      title: 'Engagement Analytics',
      description: 'Comprehensive analytics to track performance and optimize your social media strategy.',
      icon: '📊',
      benefits: [
        'Engagement tracking',
        'Reach analysis',
        'Follower growth',
        'Performance insights'
      ]
    },
    {
      title: 'Community Management',
      description: 'AI-powered community management with automated responses and sentiment analysis.',
      icon: '👥',
      benefits: [
        'Automated responses',
        'Sentiment analysis',
        'Comment moderation',
        'Community insights'
      ]
    },
    {
      title: 'Influencer Collaboration',
      description: 'Find and collaborate with influencers using AI-powered matching and analytics.',
      icon: '🌟',
      benefits: [
        'Influencer discovery',
        'Audience matching',
        'Campaign tracking',
        'ROI analysis'
      ]
    }
  ];

  const socialTypes = [
    {
      type: 'Content Creation',
      description: 'AI-powered content generation and optimization',
      price: '$45/month',
      features: ['Content generation', 'Hashtag research', 'Trend analysis', 'A/B testing']
    },
    {
      type: 'Scheduling & Publishing',
      description: 'Automated posting and scheduling across platforms',
      price: '$35/month',
      features: ['Multi-platform posting', 'Optimal timing', 'Content calendar', 'Bulk scheduling']
    },
    {
      type: 'Analytics & Reporting',
      description: 'Comprehensive social media analytics and reporting',
      price: '$55/month',
      features: ['Performance tracking', 'Engagement metrics', 'Custom reports', 'Competitor analysis']
    },
    {
      type: 'Community Management',
      description: 'AI-powered community engagement and management',
      price: '$65/month',
      features: ['Automated responses', 'Sentiment analysis', 'Comment moderation', 'Community insights']
    },
    {
      type: 'Influencer Marketing',
      description: 'Influencer discovery and collaboration management',
      price: '$75/month',
      features: ['Influencer discovery', 'Audience matching', 'Campaign tracking', 'ROI analysis']
    },
    {
      type: 'Full Social Suite',
      description: 'Complete social media management solution',
      price: '$149/month',
      features: ['All features', 'Advanced analytics', 'Custom models', 'Priority support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$45/month',
      description: 'Perfect for small businesses getting started with social media',
      features: [
        'Up to 3 social accounts',
        'Basic content generation',
        'Simple scheduling',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10 social accounts',
        'Advanced AI features',
        'Full analytics suite',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'Complete social media management for large organizations',
      features: [
        'Unlimited accounts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered social media management with content generation, scheduling, analytics, and community management. Grow your social presence." />
        <meta name="keywords" content="ai social media manager, social media automation, content generation, social media analytics, community management, influencer marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Social Media Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered social media management with content generation, scheduling, analytics, and community management. Grow your social presence.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Engagement Boost</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Multi-Platform</div>
              <div className="text-gray-300">Management</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Automation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Social Media Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Social Media Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialTypes.map((social, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{social.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{social.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{social.price}</div>
                </div>
                <ul className="space-y-2">
                  {social.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Social Media Manager?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Content</h3>
              <p className="text-gray-300">AI generates engaging content that resonates with your audience and drives engagement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Platform Management</h3>
              <p className="text-gray-300">Manage all your social media accounts from one unified dashboard with AI optimization.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Engagement</h3>
              <p className="text-gray-300">AI handles community management, responses, and engagement to keep your audience active.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Social Media Manager Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you create engaging content, manage your accounts, and grow your social media following.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagerPage;