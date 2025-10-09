import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, BarChart, Zap, Users, DollarSign } from 'lucide-react';

const AdCampaignManagerPage: React.FC = () => {
  const campaignFeatures = [
    {
      title: 'AI Campaign Optimization',
      description: 'Automatically optimize ad campaigns for maximum performance and ROI.',
      icon: '🎯',
      benefits: [
        'Bid optimization',
        'Audience targeting',
        'Ad creative testing',
        'Performance prediction'
      ]
    },
    {
      title: 'Multi-Platform Management',
      description: 'Manage campaigns across Google, Facebook, LinkedIn, and other platforms.',
      icon: '📱',
      benefits: [
        'Google Ads integration',
        'Facebook Ads management',
        'LinkedIn campaign automation',
        'Cross-platform analytics'
      ]
    },
    {
      title: 'Smart Budget Allocation',
      description: 'AI-powered budget distribution across campaigns and platforms.',
      icon: '💰',
      benefits: [
        'Budget optimization',
        'Performance-based allocation',
        'ROI tracking',
        'Cost control'
      ]
    },
    {
      title: 'Creative Testing',
      description: 'Automated A/B testing of ad creatives and messaging.',
      icon: '🧪',
      benefits: [
        'Creative variations',
        'Statistical analysis',
        'Winner selection',
        'Performance tracking'
      ]
    },
    {
      title: 'Audience Intelligence',
      description: 'AI-powered audience analysis and targeting optimization.',
      icon: '👥',
      benefits: [
        'Audience insights',
        'Lookalike audiences',
        'Behavioral targeting',
        'Demographic analysis'
      ]
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting for campaign optimization.',
      icon: '📊',
      benefits: [
        'Real-time tracking',
        'ROI analysis',
        'Conversion tracking',
        'Custom reports'
      ]
    }
  ];

  const campaignTypes = [
    {
      type: 'Search Campaigns',
      description: 'Google Ads and Bing search advertising',
      price: '$79/month',
      features: ['Keyword research', 'Bid management', 'Ad copy optimization', 'Performance tracking']
    },
    {
      type: 'Social Media Ads',
      description: 'Facebook, Instagram, and LinkedIn advertising',
      price: '$99/month',
      features: ['Creative testing', 'Audience targeting', 'Campaign automation', 'Social analytics']
    },
    {
      type: 'Display Campaigns',
      description: 'Banner and display advertising across networks',
      price: '$89/month',
      features: ['Banner creation', 'Placement optimization', 'Retargeting', 'Display analytics']
    },
    {
      type: 'Video Campaigns',
      description: 'YouTube and video advertising campaigns',
      price: '$109/month',
      features: ['Video creation', 'YouTube optimization', 'Video analytics', 'Engagement tracking']
    },
    {
      type: 'Shopping Campaigns',
      description: 'E-commerce product advertising',
      price: '$119/month',
      features: ['Product feed optimization', 'Shopping ads', 'Conversion tracking', 'E-commerce analytics']
    },
    {
      type: 'Full Campaign Suite',
      description: 'Complete advertising management across all platforms',
      price: '$199/month',
      features: ['All campaign types', 'Advanced analytics', 'Custom models', 'Priority support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79/month',
      description: 'Perfect for small businesses getting started with advertising',
      features: [
        'Up to 3 campaigns',
        'Basic optimization',
        'Standard analytics',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 15 campaigns',
        'Advanced AI optimization',
        'Multi-platform management',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'Complete advertising solution for large organizations',
      features: [
        'Unlimited campaigns',
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
        <title>AI Ad Campaign Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered ad campaign management with multi-platform optimization, budget allocation, and performance analytics. Maximize your advertising ROI." />
        <meta name="keywords" content="ai ad campaign manager, advertising automation, campaign optimization, multi-platform ads, ad analytics, roi optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Ad Campaign Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered ad campaign management with multi-platform optimization, budget allocation, and performance analytics. Maximize your advertising ROI.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">ROI Increase</div>
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
              <div className="text-gray-300">AI Optimization</div>
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
            AI-Powered Campaign Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignFeatures.map((feature, index) => (
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

      {/* Campaign Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Campaign Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{campaign.price}</div>
                </div>
                <ul className="space-y-2">
                  {campaign.features.map((feature, featureIndex) => (
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
            Why Choose AI Ad Campaign Manager?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Optimization</h3>
              <p className="text-gray-300">AI continuously optimizes your campaigns for maximum performance and ROI across all platforms.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Platform Management</h3>
              <p className="text-gray-300">Manage all your advertising campaigns from one unified dashboard with AI-powered optimization.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ROI Maximization</h3>
              <p className="text-gray-300">Advanced budget allocation and performance tracking ensure maximum return on your advertising investment.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Ad Campaign Manager Plan`}
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
            Ready to Maximize Your Advertising ROI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI optimize your ad campaigns across all platforms. Start maximizing your advertising performance today.
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

export default AdCampaignManagerPage;