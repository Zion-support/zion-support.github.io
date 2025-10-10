'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, Timer, PieChart, Activity, AlertCircle, Award, BookOpen, Briefcase, Building, ChevronRight, Download, Eye, Filter, GitBranch, Layers, Lightbulb, Maximize, Minimize, MoreHorizontal, Play, Pause, RefreshCw, Save, Search, Send, Settings2, Star as StarIcon, ThumbsUp, Trash2, Upload, User, Users2, Video, Volume2, Wifi, X, Zap as ZapIcon, Instagram, Twitter, Facebook, Youtube, Linkedin, Hash, Image, MessageSquare, Bell, TrendingUp as TrendingUpIcon, Target as TargetIcon, BarChart3, PieChart as PieChartIcon, Activity as ActivityIcon, Calendar as CalendarIcon, Clock as ClockIcon, Globe as GlobeIcon, Users as UsersIcon, Heart as HeartIcon, Share2 as Share2Icon, MessageCircle as MessageCircleIcon, Eye as EyeIcon, ThumbsUp as ThumbsUpIcon, Zap as ZapIcon2, Sparkles as SparklesIcon, Brain as BrainIcon, Cloud as CloudIcon, Code as CodeIcon, BarChart as BarChartIcon, Users as UsersIcon2, Zap as ZapIcon3, Shield as ShieldIcon, Globe as GlobeIcon2, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, TrendingUp as TrendingUpIcon2, Settings as SettingsIcon, Calendar as CalendarIcon2, CheckSquare as CheckSquareIcon, FileText as FileTextIcon, MessageCircle as MessageCircleIcon2, Heart as HeartIcon2, DollarSign as DollarSignIcon, Box as BoxIcon, Monitor as MonitorIcon, Link as LinkIcon2, Server as ServerIcon, Share2 as Share2Icon2, Mic as MicIcon, Wrench as WrenchIcon, Truck as TruckIcon } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice and audience preferences.',
      benefits: ['10x faster content creation', 'Consistent brand voice', 'Trending hashtag suggestions', 'Multi-language support']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive social media analytics with AI-powered insights, competitor analysis, and performance predictions.',
      benefits: ['Real-time performance tracking', 'ROI measurement', 'Audience insights', 'Competitor benchmarking']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience activity patterns and platform algorithms.',
      benefits: ['Optimal timing suggestions', 'Cross-platform scheduling', 'Content calendar automation', 'Time zone optimization']
    },
    {
      icon: Users,
      title: 'Audience Intelligence',
      description: 'Deep audience analysis and segmentation to create targeted content that resonates with your followers.',
      benefits: ['Demographic analysis', 'Interest mapping', 'Engagement patterns', 'Content preferences']
    },
    {
      icon: Zap,
      title: 'Automated Engagement',
      description: 'AI-powered auto-responses, comment management, and engagement strategies to grow your social presence.',
      benefits: ['Smart auto-responses', 'Comment moderation', 'Engagement optimization', 'Crisis management']
    },
    {
      icon: Target,
      title: 'Campaign Optimization',
      description: 'AI-driven campaign optimization that adjusts strategies in real-time for maximum reach and engagement.',
      benefits: ['Real-time optimization', 'A/B testing automation', 'Budget allocation', 'Performance forecasting']
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'text-pink-400', users: '2B+' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-400', users: '3B+' },
    { name: 'Twitter', icon: Twitter, color: 'text-cyan-400', users: '450M+' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', users: '900M+' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-400', users: '2.7B+' },
    { name: 'TikTok', icon: Hash, color: 'text-white', users: '1B+' }
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
        'Standard analytics',
        'Email support',
        'Basic scheduling',
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
        'Up to 10 social accounts',
        'Advanced AI features',
        'Comprehensive analytics',
        'Priority support',
        'Advanced scheduling',
        'Team collaboration',
        'White-label options',
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
        'Unlimited social accounts',
        'Full AI suite',
        'Custom analytics',
        '24/7 dedicated support',
        'Advanced security',
        'Custom AI training',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'AI Social Media Manager has increased our engagement by 300% and saved us 20 hours per week. The AI content suggestions are spot-on!',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'TechStartup',
      content: 'The automated scheduling and audience insights have transformed our social media strategy. We now reach 5x more people with less effort.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Sarah Thompson',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'Managing 20+ client accounts used to be overwhelming. Now with AI automation, we can focus on strategy while the AI handles execution.',
      rating: 5,
      avatar: 'ST'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Posts Generated', icon: FileText },
    { number: '95%', label: 'Engagement Increase', icon: TrendingUp },
    { number: '50M+', label: 'Impressions Generated', icon: Eye },
    { number: '24/7', label: 'AI Monitoring', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-8 animate-fade-in">
                <Share2 className="w-4 h-4 mr-2 animate-spin" />
                AI-Powered Social Media Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
                AI Social Media
                <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Manager Pro
                </span>
              </h1>
              <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg max-w-4xl mx-auto animate-fade-in delay-200">
                Transform your social media presence with AI-powered content generation, smart scheduling, and advanced analytics. 
                Increase engagement by 300% and save 20+ hours per week.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-300">
              <a 
                href="tel:+13024640950" 
                className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl hover:shadow-pink-500/25"
                aria-label="Call us at +1 302 464 0950"
              >
                <span className="flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="group border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-center hover:shadow-2xl hover:shadow-pink-500/25"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                <span className="flex items-center justify-center">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-pink-400" />
                  </div>
                  <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Supported Platforms
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Manage all your social media accounts from one powerful AI-driven dashboard.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                  <platform.icon className={`w-10 h-10 ${platform.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.users} users</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to revolutionize your social media management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your social media needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-pink-500/40 scale-105 shadow-2xl shadow-pink-500/25' 
                  : 'border-pink-500/20 hover:border-pink-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-pink-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                    : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their social media presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-pink-500/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-pink-400 font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven social media management. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              aria-label="Call us at +1 302 464 0950"
            >
              Start Free Trial
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
              aria-label="Email us at kleber@ziontechgroup.com"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;