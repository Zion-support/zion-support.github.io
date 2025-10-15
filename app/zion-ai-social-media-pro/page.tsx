import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  BarChart3,
  Calendar,
  Hash,
  Image,
  Video,
  Smartphone,
  Monitor,
  Target,
  Eye,
  Lock,
  Send,
  ThumbsUp,
  Share,
  Bookmark,
  ShoppingCart,
  FileText
} from 'lucide-react';

const ZionAISocialMediaProPage: React.FC = () => {
  const features = [
    {
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI algorithms.',
      icon: <Brain className="w-6 h-6" />,
      benefits: ['Auto-generated posts', 'Trending hashtags', 'Content optimization', 'Brand voice matching']
    },
    {
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one unified dashboard.',
      icon: <Globe className="w-6 h-6" />,
      benefits: ['Facebook, Instagram, Twitter', 'LinkedIn, TikTok, YouTube', 'Unified posting', 'Cross-platform analytics']
    },
    {
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience engagement patterns.',
      icon: <Calendar className="w-6 h-6" />,
      benefits: ['Optimal timing', 'Bulk scheduling', 'Time zone management', 'Content calendar']
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your social media performance and audience behavior.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Engagement metrics', 'Audience insights', 'ROI tracking', 'Competitor analysis']
    },
    {
      title: 'Automated Engagement',
      description: 'AI-powered responses and engagement to keep your audience active and engaged.',
      icon: <MessageCircle className="w-6 h-6" />,
      benefits: ['Auto-responses', 'Comment management', 'Mention tracking', 'Sentiment analysis']
    },
    {
      title: 'Visual Content Tools',
      description: 'Create stunning visuals and videos with our built-in design tools.',
      icon: <Image className="w-6 h-6" />,
      benefits: ['Template library', 'AI image generation', 'Video editing', 'Brand consistency']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        '10 social media accounts',
        'Advanced AI features',
        'Smart scheduling',
        'Advanced analytics',
        'Priority support',
        '5 users included',
        'Team collaboration',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited accounts',
        'All AI features',
        'Custom integrations',
        'Advanced reporting',
        'Dedicated support',
        'Unlimited users',
        'API access',
        'Custom branding'
      ],
      popular: false
    }
  ];

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">f</div>,
      features: ['Page management', 'Story posting', 'Live streaming', 'Ad management']
    },
    {
      name: 'Instagram',
      icon: <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">IG</div>,
      features: ['Feed posts', 'Stories', 'Reels', 'IGTV']
    },
    {
      name: 'Twitter',
      icon: <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold">T</div>,
      features: ['Tweet scheduling', 'Thread management', 'Trend tracking', 'Mention monitoring']
    },
    {
      name: 'LinkedIn',
      icon: <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">in</div>,
      features: ['Company pages', 'Article posting', 'Event promotion', 'B2B networking']
    },
    {
      name: 'TikTok',
      icon: <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">TT</div>,
      features: ['Video scheduling', 'Trend analysis', 'Hashtag research', 'Creator tools']
    },
    {
      name: 'YouTube',
      icon: <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">YT</div>,
      features: ['Video management', 'Thumbnail creation', 'SEO optimization', 'Analytics']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Marketing',
      description: 'Drive sales with product showcases, customer testimonials, and promotional campaigns.',
      icon: <ShoppingCart className="w-8 h-8" />,
      metrics: ['Conversion Rate', 'Click-through Rate', 'Sales Attribution', 'Customer Engagement']
    },
    {
      title: 'Brand Awareness',
      description: 'Build brand recognition and reach new audiences with strategic content.',
      icon: <Target className="w-8 h-8" />,
      metrics: ['Brand Mentions', 'Reach Growth', 'Follower Growth', 'Share of Voice']
    },
    {
      title: 'Customer Support',
      description: 'Provide excellent customer service through social media channels.',
      icon: <MessageCircle className="w-8 h-8" />,
      metrics: ['Response Time', 'Resolution Rate', 'Customer Satisfaction', 'Issue Tracking']
    },
    {
      title: 'Content Marketing',
      description: 'Establish thought leadership and drive traffic to your website.',
      icon: <FileText className="w-8 h-8" />,
      metrics: ['Website Traffic', 'Lead Generation', 'Content Engagement', 'Authority Building']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Pro - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Transform your social media presence with Zion AI Social Media Pro. AI-powered content generation, multi-platform management, and advanced analytics for modern businesses." />
        <meta name="keywords" content="social media management, AI content generation, social media automation, social media analytics, social media scheduling, social media marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-social-media-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Share2 className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Social Media Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Social Media <span className="text-cyan-400">Pro</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your social media strategy with AI-powered content generation, multi-platform management, 
              and advanced analytics. Grow your audience and engagement like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                <div className="text-gray-300 text-sm">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500%</div>
                <div className="text-gray-300 text-sm">Engagement Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2min</div>
                <div className="text-gray-300 text-sm">Setup Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Manage All Your Social Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect and manage all your social media accounts from one powerful dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {socialPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group text-center"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {platform.name}
                  </h3>
                  
                  <ul className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI-Driven Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, schedule, and optimize your social media content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a small business or enterprise, our platform scales with your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-cyan-400 font-semibold text-sm">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and upgrade as you grow. No hidden fees, cancel anytime.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using Zion AI Social Media Pro to grow their audience and engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAISocialMediaProPage;