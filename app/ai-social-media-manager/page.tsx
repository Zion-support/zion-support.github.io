'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automatically create engaging social media posts, captions, and hashtags using advanced AI',
      benefits: ['10x faster content creation', 'Consistent brand voice', 'Higher engagement rates']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and insights to optimize your social media strategy',
      benefits: ['Real-time performance tracking', 'ROI measurement', 'Audience insights']
    },
    {
      icon: Target,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience behavior and engagement patterns',
      benefits: ['Optimal posting times', 'Increased reach', 'Better engagement']
    },
    {
      icon: MessageSquare,
      title: 'Automated Engagement',
      description: 'AI-powered responses to comments, mentions, and messages across all platforms',
      benefits: ['24/7 engagement', 'Consistent responses', 'Improved customer service']
    },
    {
      icon: TrendingUp,
      title: 'Hashtag Optimization',
      description: 'Intelligent hashtag research and optimization for maximum reach and engagement',
      benefits: ['Better discoverability', 'Increased reach', 'Trending hashtags']
    },
    {
      icon: Shield,
      title: 'Brand Monitoring',
      description: 'AI-powered brand mention tracking and sentiment analysis across social platforms',
      benefits: ['Brand protection', 'Crisis management', 'Reputation monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '3 social media accounts',
        'Basic AI content generation',
        'Standard analytics',
        'Email support',
        'Basic scheduling',
        'Hashtag suggestions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Advanced AI features',
        'Comprehensive analytics',
        'Priority support',
        'Advanced scheduling',
        'Automated engagement',
        'Brand monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited accounts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'API access',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: Camera,
      features: ['Story optimization', 'Reel suggestions', 'IGTV scheduling', 'Hashtag research']
    },
    {
      name: 'Facebook',
      icon: Users,
      features: ['Post optimization', 'Ad integration', 'Event promotion', 'Group management']
    },
    {
      name: 'Twitter',
      icon: MessageSquare,
      features: ['Tweet optimization', 'Thread creation', 'Trend monitoring', 'Engagement tracking']
    },
    {
      name: 'LinkedIn',
      icon: Briefcase,
      features: ['Professional content', 'B2B optimization', 'Article suggestions', 'Network growth']
    },
    {
      name: 'TikTok',
      icon: Video,
      features: ['Video optimization', 'Trend analysis', 'Challenge participation', 'Viral content']
    },
    {
      name: 'YouTube',
      icon: Play,
      features: ['Title optimization', 'Thumbnail suggestions', 'SEO optimization', 'Engagement tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered social media management with automated content generation, smart scheduling, and performance analytics. Starting at $49/month." />
        <meta name="keywords" content="ai social media management, social media automation, content generation, social media analytics, social media scheduling" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Social Media Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Social Media Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your social media presence with AI-powered content generation, smart scheduling, 
            and automated engagement. Grow your audience and increase engagement across all platforms.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">45%</div>
              <div className="text-gray-300">Higher Engagement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
              <div className="text-gray-300">Platforms</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Manager Demo Request"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all cyber-button"
            >
              Get Free Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all"
            >
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
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
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

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Supported Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center cyber-card">
                <platform.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{platform.name}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-sm font-medium px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
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
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses using AI Social Media Manager to grow their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Manager - Ready to Start"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;