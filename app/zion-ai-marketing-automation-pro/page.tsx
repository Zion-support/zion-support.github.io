import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Mail, 
  Share2, 
  BarChart3, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Brain,
  Users,
  TrendingUp,
  MessageSquare,
  Smartphone,
  Calendar,
  ShoppingCart,
  RefreshCw,
  Gift
} from 'lucide-react';

const ZionAIMarketingAutomationProPage: React.FC = () => {
  const features = [
    {
      title: 'AI Content Generation',
      description: 'Create compelling marketing content automatically using advanced AI algorithms.',
      icon: Brain,
      benefits: ['Blog Posts', 'Social Media Content', 'Email Campaigns', 'Ad Copy', 'Product Descriptions']
    },
    {
      title: 'Multi-Channel Campaigns',
      description: 'Launch coordinated campaigns across email, social media, SMS, and web channels.',
      icon: Share2,
      benefits: ['Email Marketing', 'Social Media', 'SMS Campaigns', 'Web Push', 'Retargeting Ads']
    },
    {
      title: 'Lead Scoring & Nurturing',
      description: 'Intelligently score leads and automatically nurture them through personalized journeys.',
      icon: Target,
      benefits: ['Behavioral Scoring', 'Lead Qualification', 'Drip Campaigns', 'Personalization', 'A/B Testing']
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics and AI-powered insights.',
      icon: BarChart3,
      benefits: ['ROI Tracking', 'Conversion Analytics', 'Customer Journey', 'Predictive Insights', 'Custom Reports']
    },
    {
      title: 'Email Automation',
      description: 'Create sophisticated email workflows that engage customers at the right time.',
      icon: Mail,
      benefits: ['Welcome Series', 'Abandoned Cart', 'Re-engagement', 'Birthday Campaigns', 'Transactional Emails']
    },
    {
      title: 'Social Media Management',
      description: 'Schedule, publish, and analyze social media content across all platforms.',
      icon: MessageSquare,
      benefits: ['Content Scheduling', 'Hashtag Optimization', 'Engagement Tracking', 'Influencer Outreach', 'Social Listening']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses starting with marketing automation',
      features: [
        'Up to 1,000 contacts',
        'Basic email campaigns',
        'Social media scheduling',
        'Simple analytics',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'AI content generation',
        'Multi-channel campaigns',
        'Lead scoring',
        'Advanced analytics',
        'Priority support',
        'Up to 5 users',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Advanced segmentation',
        'White-label options',
        'Dedicated support',
        'Unlimited users',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  const results = [
    {
      title: 'Increase in Email Open Rates',
      description: 'AI-optimized subject lines and send times',
      icon: Mail,
      stat: '+47%'
    },
    {
      title: 'Higher Conversion Rates',
      description: 'Personalized campaigns and lead nurturing',
      icon: Target,
      stat: '+63%'
    },
    {
      title: 'Time Saved',
      description: 'Automated workflows and content generation',
      icon: Clock,
      stat: '15+ hrs'
    },
    {
      title: 'ROI Improvement',
      description: 'Better targeting and campaign optimization',
      icon: TrendingUp,
      stat: '+89%'
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Mailchimp', logo: 'MC' },
    { name: 'Facebook Ads', logo: 'FB' },
    { name: 'Google Ads', logo: 'GA' },
    { name: 'Shopify', logo: 'SH' },
    { name: 'WooCommerce', logo: 'WC' },
    { name: 'Zapier', logo: 'ZP' }
  ];

  const campaignTypes = [
    { name: 'Welcome Series', description: 'Onboard new subscribers with engaging content', icon: Users },
    { name: 'Abandoned Cart', description: 'Recover lost sales with targeted follow-ups', icon: ShoppingCart },
    { name: 'Re-engagement', description: 'Win back inactive customers', icon: RefreshCw },
    { name: 'Upsell/Cross-sell', description: 'Increase average order value', icon: TrendingUp },
    { name: 'Birthday Campaigns', description: 'Celebrate customers with special offers', icon: Gift },
    { name: 'Post-Purchase', description: 'Follow up after successful purchases', icon: CheckCircle }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Marketing Automation Pro - Advanced Marketing Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered automation. Create, schedule, and optimize multi-channel campaigns that drive engagement and conversions." />
        <meta name="keywords" content="marketing automation, AI marketing, email marketing, social media automation, lead nurturing, campaign management, marketing analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-marketing-automation-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Target className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">AI-Powered Marketing Automation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Marketing Automation Pro</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your marketing with AI-powered automation that creates, schedules, and optimizes 
              multi-channel campaigns. Drive engagement, nurture leads, and boost conversions automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-purple-400 hover:text-slate-900 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Target className="w-5 h-5" />
              </Link>
            </div>

            {/* Results Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">{result.stat}</div>
                    <div className="text-gray-300 text-sm">{result.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Marketing Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, manage, and optimize your marketing campaigns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Campaign Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pre-Built Campaign Templates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Launch effective campaigns quickly with our library of proven templates
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaignTypes.map((campaign, index) => {
                const IconComponent = campaign.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{campaign.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms to streamline your marketing workflow
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{integration.logo}</span>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Marketing Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your marketing needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-purple-500/50 ring-2 ring-purple-500/20 scale-105' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your free trial today and experience the power of AI-driven marketing automation. 
                No credit card required, cancel anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-purple-400 text-purple-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-purple-400 hover:text-slate-900 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <Target className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIMarketingAutomationProPage;