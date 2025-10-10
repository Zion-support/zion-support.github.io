<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, AlertCircle, CheckSquare, Timer, DollarSign, PieChart, Activity, Share2, Instagram, Twitter, Facebook, Youtube, Linkedin, Hash, Image, Video, Send } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
=======
'use client'
import React, { useState, useEffect } from 'react'
// import { Helmet } from 'react-helmet-async'
import { Phone } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))
const SEOOptimizer = lazy(() => import('../components/SEOOptimizer'))
const AISocialMediaManagerPage: React.FC = React.memo((props) => {
  // const [isLoaded, setIsLoaded] = useState(false)
  // useEffect(() => {
//     setIsLoaded(true);}
//   }, [])
>>>>>>> origin/main
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
<<<<<<< HEAD
      description: 'Generate engaging posts, captions, and hashtags automatically with AI-powered content creation',
      benefits: ['10x faster content creation', 'Optimized for each platform', 'Trending hashtag suggestions', 'Brand voice consistency']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive social media analytics with AI insights, engagement predictions, and ROI tracking',
      benefits: ['Real-time performance metrics', 'Predictive analytics', 'Competitor analysis', 'ROI measurement']
=======
      description: 'Generate engaging posts, captions, and hashtags using advanced AI',
      benefits: ['10x faster content creation', 'Higher engagement rates', 'Brand voice consistency']}
>>>>>>> origin/main
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
<<<<<<< HEAD
      description: 'AI-powered optimal posting times based on audience behavior and engagement patterns',
      benefits: ['Optimal timing suggestions', 'Cross-platform scheduling', 'Content calendar automation', 'Time zone management']
=======
      description: 'AI-optimized posting times for maximum reach and engagement',
      benefits: ['40% more reach', 'Optimal timing', 'Cross-platform coordination']}
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics with AI-powered performance predictions',
      benefits: ['Real-time insights', 'ROI tracking', 'Growth predictions']}
>>>>>>> origin/main
    },
    {
      icon: Users,
      title: 'Audience Intelligence',
<<<<<<< HEAD
      description: 'Deep audience insights with AI-powered demographic analysis and behavior prediction',
      benefits: ['Audience segmentation', 'Interest analysis', 'Engagement prediction', 'Growth opportunities']
    },
    {
      icon: Share2,
      title: 'Multi-Platform Management',
      description: 'Manage all social media platforms from one dashboard with unified analytics and reporting',
      benefits: ['Unified dashboard', 'Cross-platform posting', 'Consistent branding', 'Centralized analytics']
    },
    {
      icon: Target,
      title: 'Campaign Optimization',
      description: 'AI-driven campaign optimization with A/B testing, performance prediction, and budget allocation',
      benefits: ['Automated A/B testing', 'Performance prediction', 'Budget optimization', 'Conversion tracking']
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: Facebook, color: 'text-blue-500', users: '2.9B' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500', users: '1.4B' },
    { name: 'Twitter', icon: Twitter, color: 'text-blue-400', users: '450M' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', users: '900M' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-500', users: '2.7B' },
    { name: 'TikTok', icon: Hash, color: 'text-black', users: '1B' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        '100 posts per month',
        'Basic AI content creation',
        'Standard analytics',
        'Email support',
        'Basic scheduling'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Comprehensive analytics',
        'Priority support',
        'Advanced scheduling',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social accounts',
        'Unlimited posts',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'AI Social Media Manager increased our engagement by 300% and saved us 20 hours per week. The AI content suggestions are brilliant.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Social Media Manager',
      company: 'TechStart Inc.',
      content: 'The analytics insights helped us optimize our campaigns and increase ROI by 250%. Best social media tool we\'ve used.',
      rating: 5
    },
    {
      name: 'Amanda Wilson',
      role: 'Content Creator',
      company: 'Creative Agency',
      content: 'The AI content creation is incredible. We can now create 10x more content with better quality and engagement.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '25,000+', label: 'Active Users' },
    { icon: Share2, value: '1M+', label: 'Posts Scheduled' },
    { icon: TrendingUp, value: '300%', label: 'Avg. Engagement Increase' },
    { icon: Clock, value: '20h', label: 'Time Saved Weekly' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management platform with content creation, scheduling, analytics, and automation. Starting at $49/month." />
        <meta name="keywords" content="ai social media management, social media automation, content creation, social media analytics, social media scheduling" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Social Media Management
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Social Media Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your social media presence with AI-powered content creation, intelligent scheduling, and advanced analytics. 
            Manage all platforms from one dashboard and grow your audience 10x faster.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <stat.icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-pink-400 mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Manager Demo"
              className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Manage All Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <platform.icon className={`w-12 h-12 ${platform.color} mx-auto mb-3`} />
                <h3 className="text-white font-semibold mb-1">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.users} users</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-pink-400 scale-105' : ''} cyber-card`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Social Media Manager - ${plan.name} Plan`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join thousands of businesses already using AI Social Media Manager to grow their audience and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-pink-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;
=======
      description: 'AI-driven audience analysis and targeting recommendations',
      benefits: ['Better targeting', 'Audience growth', 'Engagement optimization']}
    }
  ]
  const platforms = [
    { name: 'Facebook', icon: '📘', features: ['Post scheduling', 'Story management', 'Ad integration'] },
    { name: 'Instagram', icon: '📷', features: ['Feed posts', 'Stories', 'Reels', 'IGTV'] },
    { name: 'Twitter', icon: '🐦', features: ['Tweet scheduling', 'Thread management', 'Trend monitoring'] },
    { name: 'LinkedIn', icon: '💼', features: ['Professional posts', 'Company updates', 'B2B content'] },
    { name: 'TikTok', icon: '🎵', features: ['Video scheduling', 'Trend analysis', 'Hashtag optimization'] },
    { name: 'YouTube', icon: '📺', features: ['Video optimization', 'Thumbnail creation', 'SEO optimization'] }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '30 posts per month',
        'Basic AI content creation',
        'Standard analytics',
        'Email support'
      ],
      popular: false}
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced AI content creation',
        'Detailed analytics',
        'Team collaboration',
        'Priority support'
      ],
      popular: true}
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Full AI suite',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'API access'
      ],
      popular: false}
    }
  ]
  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director, FashionBrand',
      content: 'AI Social Media Manager increased our engagement by 200% and saved us 20 hours per week as any',
      rating: 5}
    },
    {
      name: 'David Kim',
      role: 'CEO, TechStartup',
      content: 'The AI content suggestions are spot-on. Our social media presence has never been stronger.',
      rating: 5}
    },
    {
      name: 'Lisa Thompson',
      role: 'Social Media Manager, Agency',
      content: 'Managing 20+ client accounts is now effortless with AI automation. Highly recommended as any',
      rating: 5}
    }
  ]
  return (
    <>
      <SEOOptimizer
        title="AI Social Media Manager - Automated Social Media Management | Zion Tech Group"
        description="Transform your social media with AI-powered content creation, smart scheduling, and analytics. Increase engagement by 200% and save 20+ hours per week."
        keywords={['AI social media management', 'social media automation', 'content creation', 'social media analytics', 'social media scheduling', 'AI marketing']}
        canonicalUrl="https://ziontechgroup.com/ai-social-media-manager"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Share2 className="w-4 h-4" />
                AI-Powered Social Media Management
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Social Media Manager
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Automate your social media with AI-powered content creation, smart scheduling, and advanced analytics. 
                Increase engagement by 200% and save 20+ hours per week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                 aria-label="
                  Start Free Trial
                ">
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
                 aria-label="
                  Watch Demo
                ">
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">200%</div>
                <div className="text-gray-300">Engagement Increase</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                <div className="text-gray-300">Hours Saved/Week</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">More Reach</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Content</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your social media strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2" role="list">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-pink-400">
                        <Target className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                All Major Platforms Supported
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one powerful dashboard
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{platform.name}</h3>
                  <ul className="space-y-2" role="list">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center justify-center">
                        <Hash className="w-4 h-4 mr-2 text-pink-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your social media needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-pink-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-pink-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>}
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-pink-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400" style={{ color: "#9CA3AF" }}>per month</div>
                  </div>
                  <ul className="space-y-4 mb-8" role="list">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Target className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Social Media Manager ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-pink-400 text-slate-900 hover:bg-pink-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'`}
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Social Media Manager
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-pink-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Start your free trial today and experience the power of AI-driven social media management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Manager Free Trial Request"
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
               aria-label="
                Start Free Trial
              ">
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-pink-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
export default AISocialMediaManagerPage
>>>>>>> origin/main
