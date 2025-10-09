'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Calendar, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Share2, Instagram, Facebook, Twitter, Youtube, Linkedin, Hash, AtSign, Heart as HeartIcon, MessageCircle, Send, ThumbsUp, ThumbsDown, Bookmark, Flag, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ChevronUpDown, ArrowUpDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Hand, MousePointer, Cursor, Type, Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Quote, Code as CodeIcon, Link, Unlink, Image, Table, Columns, Rows, Grid, Layout, Sidebar, SidebarClose, SidebarOpen, PanelLeft, PanelRight, PanelTop, PanelBottom, Split, SplitSquareHorizontal, SplitSquareVertical, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Star as StarIcon2, Moon, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Flame, Snowflake, Zap as ZapIcon, Thunderstorm, Tornado, Hurricane, Earthquake, Volcano, Mountain, Tree, Leaf, Flower, Seedling, Sprout, Cactus, Palm, Pine, Oak, Maple, Cherry, Apple, Orange, Lemon, Banana, Grapes, Strawberry, Watermelon, Pineapple, Mango, Avocado, Coconut, Kiwi, Peach, Pear, Plum, Apricot, Fig, Date, Raisin, Cranberry, Blueberry, Raspberry, Blackberry, Gooseberry, Elderberry, Mulberry, Boysenberry, Loganberry, Cloudberry, Huckleberry, Lingonberry, Barberry, Currant } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice',
      benefits: ['Brand voice consistency', 'Trending hashtag suggestions', 'Content optimization', 'Multi-platform adaptation']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience engagement patterns and platform algorithms',
      benefits: ['Optimal timing analysis', 'Audience behavior insights', 'Cross-platform coordination', 'Automated posting']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive social media analytics with AI-driven insights and performance predictions',
      benefits: ['Engagement tracking', 'ROI measurement', 'Audience insights', 'Competitor analysis']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'AI-powered community management with automated responses and sentiment analysis',
      benefits: ['Automated responses', 'Sentiment monitoring', 'Crisis detection', 'Engagement optimization']
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Intelligent audience segmentation and targeting based on AI analysis of user behavior',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Interest mapping', 'Demographic insights']
    },
    {
      icon: Zap,
      title: 'Campaign Automation',
      description: 'Fully automated social media campaigns with AI optimization and A/B testing',
      benefits: ['Campaign automation', 'A/B testing', 'Performance optimization', 'Budget allocation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        'Basic AI content creation',
        'Scheduling for 30 days',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Advanced AI features',
        'Unlimited scheduling',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Full AI suite',
        'White-label options',
        'Dedicated support',
        'Custom AI models',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'text-pink-400', description: 'Visual content and stories optimization' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-400', description: 'Community building and engagement' },
    { name: 'Twitter', icon: Twitter, color: 'text-sky-400', description: 'Real-time updates and trending topics' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', description: 'Professional networking and B2B content' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-400', description: 'Video content and SEO optimization' },
    { name: 'TikTok', icon: Video, color: 'text-white', description: 'Short-form video content and trends' }
  ];

  const useCases = [
    {
      title: 'E-commerce Brands',
      description: 'Drive sales with AI-optimized product posts and targeted advertising campaigns',
      icon: ShoppingCart,
      benefits: ['Product showcase', 'Sales tracking', 'Customer engagement', 'Conversion optimization']
    },
    {
      title: 'SaaS Companies',
      description: 'Build thought leadership and generate leads through strategic content marketing',
      icon: Cloud,
      benefits: ['Thought leadership', 'Lead generation', 'User education', 'Community building']
    },
    {
      title: 'Restaurants',
      description: 'Showcase food and create buzz with mouth-watering visual content and local engagement',
      icon: Heart,
      benefits: ['Food photography', 'Local marketing', 'Customer reviews', 'Event promotion']
    },
    {
      title: 'Fitness Coaches',
      description: 'Motivate followers and build community with inspirational content and workout plans',
      icon: Activity,
      benefits: ['Motivational content', 'Workout plans', 'Progress tracking', 'Community building']
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'Our engagement increased by 300% since using AI Social Media Manager. The AI perfectly captures our brand voice and creates content our audience loves.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'TechStart Solutions',
      content: 'The scheduling feature is incredible. It posts at the perfect times when our audience is most active. We\'ve seen a 150% increase in reach.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'Managing multiple client accounts used to be overwhelming. Now AI handles the heavy lifting, and I can focus on strategy and client relationships.',
      rating: 5
    }
  ];

  const metrics = [
    { label: 'Average Engagement Increase', value: '250%', color: 'text-cyan-400' },
    { label: 'Time Saved Per Week', value: '15 hours', color: 'text-green-400' },
    { label: 'Content Creation Speed', value: '10x faster', color: 'text-purple-400' },
    { label: 'ROI Improvement', value: '180%', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered social media management with content creation, scheduling, analytics, and automation. Starting at $49/month." />
        <meta name="keywords" content="ai social media manager, social media automation, content creation, social media scheduling, social media analytics, social media marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Share2 className="w-4 h-4" />
            <span>AI-Powered Social Media Management</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Social Media Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your social media presence with AI-powered content creation, smart scheduling, and advanced analytics. 
            Increase engagement by up to 250% while saving 15 hours per week.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Manager Demo Request"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all inline-flex items-center"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-medium hover:bg-pink-400 hover:text-white transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
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

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            All Major Platforms Supported
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card text-center">
                <platform.icon className={`w-12 h-12 ${platform.color} mx-auto mb-3`} />
                <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-400">{platform.description}</p>
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
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-pink-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
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
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                      : 'bg-transparent border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Perfect for Every Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-xs text-gray-400">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
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
                <div className="border-t border-gray-600 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Social Media Manager to grow their online presence.
          </p>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8 cyber-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Manager Inquiry"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-pink-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;