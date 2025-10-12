'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Users, 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Brain,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Settings,
  BarChart3,
  Image,
  Video,
  MessageSquare,
  Heart,
  Eye,
  Target,
  Clock,
  RefreshCw,
  Smartphone,
  Monitor,
  Laptop,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

export default function AISocialMediaManagerPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice and audience preferences.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-400" />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience activity, time zones, and platform algorithms for maximum engagement.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive performance tracking with AI insights, competitor analysis, and ROI measurement across all platforms.'
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: 'Audience Intelligence',
      description: 'Deep audience analysis with demographic insights, interests, and behavior patterns to optimize your content strategy.'
    },
    {
      icon: <Target className="w-6 h-6 text-red-400" />,
      title: 'Automated Engagement',
      description: 'AI-powered responses to comments, DMs, and mentions with personalized, brand-appropriate replies that build relationships.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: 'Growth Optimization',
      description: 'AI-driven recommendations for hashtags, posting frequency, content types, and engagement strategies to maximize growth.'
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8 text-pink-500" />,
      features: ['Stories automation', 'Reels optimization', 'IGTV scheduling', 'Hashtag research', 'Story highlights']
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8 text-blue-600" />,
      features: ['Page management', 'Event promotion', 'Group engagement', 'Live streaming', 'Facebook Shop']
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-8 h-8 text-blue-400" />,
      features: ['Tweet scheduling', 'Thread creation', 'Trend monitoring', 'Hashtag tracking', 'Mention management']
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8 text-blue-700" />,
      features: ['Professional content', 'Company updates', 'Article publishing', 'Network engagement', 'Lead generation']
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8 text-red-600" />,
      features: ['Video optimization', 'Thumbnail creation', 'SEO optimization', 'Comment management', 'Playlist curation']
    },
    {
      name: 'TikTok',
      icon: <Video className="w-8 h-8 text-black" />,
      features: ['Trend analysis', 'Video ideas', 'Hashtag strategy', 'Timing optimization', 'Viral content prediction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '3 social media accounts',
        'Basic AI content generation',
        'Simple scheduling',
        'Basic analytics',
        'Email support',
        '1 user',
        '30 posts/month',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10 social media accounts',
        'Advanced AI content generation',
        'Smart scheduling & optimization',
        'Advanced analytics & insights',
        'Priority support',
        '3 users',
        'Unlimited posts',
        'Custom templates',
        'Competitor analysis',
        'Hashtag research'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For agencies and large brands',
      features: [
        'Unlimited social media accounts',
        'Custom AI model training',
        'Advanced automation',
        'White-label solution',
        'Dedicated account manager',
        'Unlimited users',
        'Custom integrations',
        'API access',
        'Team collaboration tools',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const contentTypes = [
    {
      type: 'Visual Content',
      items: [
        'AI-generated image captions',
        'Carousel post creation',
        'Story template generation',
        'Video script writing',
        'Thumbnail optimization',
        'Brand consistency checks'
      ]
    },
    {
      type: 'Written Content',
      items: [
        'Post captions & descriptions',
        'Blog post summaries',
        'Email newsletter content',
        'Product descriptions',
        'Hashtag research & generation',
        'Comment responses'
      ]
    },
    {
      type: 'Video Content',
      items: [
        'Video script generation',
        'YouTube descriptions',
        'TikTok video ideas',
        'Live stream planning',
        'Video SEO optimization',
        'Thumbnail text suggestions'
      ]
    },
    {
      type: 'Engagement',
      items: [
        'Comment responses',
        'DM automation',
        'Mention management',
        'Community building',
        'Influencer outreach',
        'Customer service integration'
      ]
    }
  ];

  const successMetrics = [
    {
      metric: 'Engagement Rate',
      improvement: '+150%',
      description: 'Average increase in likes, comments, and shares across all platforms'
    },
    {
      metric: 'Follower Growth',
      improvement: '+200%',
      description: 'Faster follower acquisition through optimized content and timing'
    },
    {
      metric: 'Time Saved',
      improvement: '15hrs/week',
      description: 'Automated content creation and scheduling saves significant time'
    },
    {
      metric: 'ROI',
      improvement: '+300%',
      description: 'Better content performance leads to higher conversion rates'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Boutique Fashion',
      role: 'Marketing Manager',
      content: 'Our engagement increased by 150% in just 2 months. The AI content suggestions are spot-on and save us hours every week.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Chen',
      company: 'TechStart Inc',
      role: 'Founder',
      content: 'The automated posting and engagement features helped us grow from 1K to 50K followers in 6 months. Incredible results!',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Sarah Johnson',
      company: 'Local Restaurant',
      role: 'Owner',
      content: 'Perfect for small businesses. The AI understands our brand voice and creates content that resonates with our customers.',
      rating: 5,
      avatar: 'SJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="Transform your social media with AI-powered content generation, smart scheduling, and analytics. Grow your audience 200% faster. Starting at $29/month." />
        <meta name="keywords" content="AI social media manager, social media automation, content generation, social media analytics, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-manager" />
        
        <meta property="og:title" content="AI Social Media Manager - Zion Tech Group" />
        <meta property="og:description" content="Transform your social media with AI-powered content generation, smart scheduling, and analytics. Grow your audience 200% faster." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-social-media-manager" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Social Media Manager - Zion Tech Group" />
        <meta name="twitter:description" content="Transform your social media with AI-powered content generation, smart scheduling, and analytics. Grow your audience 200% faster." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mb-6">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Social Media Manager
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your social media presence with AI-powered content generation, smart scheduling, and advanced analytics. 
                Grow your audience 200% faster while saving 15 hours per week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">200%</div>
                <div className="text-gray-300">Follower Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">150%</div>
                <div className="text-gray-300">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15hrs</div>
                <div className="text-gray-300">Time Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">6</div>
                <div className="text-gray-300">Platforms Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to dominate social media with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">All Major Platforms Supported</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Manage all your social media accounts from one powerful dashboard
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    {platform.icon}
                    <h3 className="text-xl font-semibold text-white ml-4">{platform.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">AI Content Generation</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Create engaging content across all formats with AI assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6">{type.type}</h3>
                  <ul className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Proven Results</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                See the measurable impact on your social media performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{metric.improvement}</div>
                  <div className="text-lg font-semibold text-white mb-2">{metric.metric}</div>
                  <div className="text-gray-300 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing Plans</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your social media needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                See how businesses are growing their social media presence with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-pink-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Social Media?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free 14-day trial today. No credit card required. See results in days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 14-day free trial • ✓ No setup fees • ✓ 24/7 support • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-6">Need Help Getting Started?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-pink-400 mr-2" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-pink-400 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-400 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}