'use client';
import React from 'react';
import { CheckCircle, Star, Share2, Target, BarChart, Brain, Users, Zap, TrendingUp } from 'lucide-react';

const AISocialMediaManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags automatically for all platforms',
      benefits: ['10x faster content creation', '95% engagement improvement', 'Multi-platform optimization']
    },
    {
      icon: Target,
      title: 'Smart Scheduling',
      description: 'AI determines the optimal posting times for maximum reach and engagement',
      benefits: ['40% higher reach', '60% better engagement', 'Automated optimization']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights and performance tracking across all social platforms',
      benefits: ['Real-time performance data', 'ROI tracking', 'Competitor analysis']
    },
    {
      icon: Users,
      title: 'Audience Intelligence',
      description: 'Deep insights into your audience demographics, interests, and behavior',
      benefits: ['80% better targeting', '45% higher engagement', 'Audience growth insights']
    },
    {
      icon: Share2,
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one unified dashboard',
      benefits: ['Centralized control', 'Consistent branding', 'Efficient workflow']
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Stay ahead with AI-powered trend detection and viral content identification',
      benefits: ['Early trend detection', 'Viral content opportunities', 'Competitive advantage']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Advanced AI features',
        'Smart scheduling',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom integrations',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social accounts',
        'Full AI suite',
        'Custom AI models',
        'Dedicated support',
        'Advanced automation',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: '📘',
      features: ['AI post optimization', 'Audience targeting', 'Engagement tracking'],
      reach: '2.9B users'
    },
    {
      name: 'Instagram',
      icon: '📷',
      features: ['Visual content AI', 'Story optimization', 'Hashtag suggestions'],
      reach: '1.4B users'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      features: ['Trend analysis', 'Tweet optimization', 'Real-time monitoring'],
      reach: '450M users'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      features: ['Professional content', 'B2B targeting', 'Thought leadership'],
      reach: '900M users'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      features: ['Viral content detection', 'Trend prediction', 'Video optimization'],
      reach: '1B users'
    },
    {
      name: 'YouTube',
      icon: '📺',
      features: ['Video optimization', 'SEO enhancement', 'Thumbnail AI'],
      reach: '2.7B users'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Brands',
      description: 'Drive sales and build brand awareness with AI-optimized social content',
      icon: '🛒',
      metrics: ['50% increase in followers', '35% higher engagement', '40% more website traffic']
    },
    {
      title: 'SaaS Companies',
      description: 'Generate leads and showcase product features through social media',
      icon: '💻',
      metrics: ['60% more qualified leads', '45% higher conversion', '30% cost reduction']
    },
    {
      title: 'Content Creators',
      description: 'Scale content production and maximize reach across platforms',
      icon: '🎨',
      metrics: ['80% faster content creation', '70% more views', '50% higher engagement']
    },
    {
      title: 'Agencies',
      description: 'Manage multiple client accounts efficiently with AI automation',
      icon: '🏢',
      metrics: ['90% time savings', '60% better results', '100% client satisfaction']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Social Media Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Automate and optimize your social media presence with AI-powered content creation and management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-600">
              Manage all your social media accounts from one powerful AI-driven platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{platform.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{platform.name}</h3>
                    <p className="text-sm text-gray-600">{platform.reach}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to dominate social media with AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
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

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your social media needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-600">
              See how AI social media management transforms different industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Start creating AI-powered social media content that drives engagement and growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-indigo-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagementPage;