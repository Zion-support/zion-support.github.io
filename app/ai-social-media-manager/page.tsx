'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, Share2, MessageSquare, Hash, Image, Video as VideoIcon2, Calendar as CalendarIcon2, TrendingUp as TrendingUpIcon, Eye, Heart as HeartIcon2, ThumbsUp, Send, Plus, Edit3, Trash2, Copy, Link, ExternalLink, Download, Upload, Filter, SortAsc, SortDesc, MoreHorizontal, MoreVertical, X, Check, AlertCircle, Info, HelpCircle, Lightbulb, Bookmark, Flag, Tag, User, UserPlus, UserMinus, UserCheck, UserX, Users as UsersIcon2, UserCircle, UserCheck2, UserPlus2, UserMinus2, UserX2, Users2, UserCircle2, UserCheck3, UserPlus3, UserMinus3, UserX3, Users3, UserCircle3, UserCheck4, UserPlus4, UserMinus4, UserX4, Users4, UserCircle4, UserCheck5, UserPlus5, UserMinus5, UserX5, Users5, UserCircle5, UserCheck6, UserPlus6, UserMinus6, UserX6, Users6, UserCircle6, UserCheck7, UserPlus7, UserMinus7, UserX7, Users7, UserCircle7, UserCheck8, UserPlus8, UserMinus8, UserX8, Users8, UserCircle8, UserCheck9, UserPlus9, UserMinus9, UserX9, Users9, UserCircle9, UserCheck10, UserPlus10, UserMinus10, UserX10, Users10, UserCircle10 } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate engaging social media content using advanced AI algorithms',
      benefits: ['Automated post creation', 'Trend-based content', 'Brand voice consistency']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive social media analytics with AI-powered insights',
      benefits: ['Performance tracking', 'Audience analysis', 'ROI measurement']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-optimized posting schedule for maximum engagement',
      benefits: ['Optimal timing', 'Cross-platform sync', 'Content calendar']
    },
    {
      icon: Hash,
      title: 'Hashtag Optimization',
      description: 'AI-powered hashtag research and optimization',
      benefits: ['Trending hashtags', 'Reach optimization', 'Engagement boost']
    },
    {
      icon: Users,
      title: 'Audience Targeting',
      description: 'Intelligent audience segmentation and targeting',
      benefits: ['Demographic analysis', 'Interest mapping', 'Behavior prediction']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Complete social media automation with AI decision making',
      benefits: ['Auto-posting', 'Response automation', 'Engagement management']
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B', reach: '95%' },
    { name: 'Instagram', icon: '📷', users: '2B', reach: '90%' },
    { name: 'Twitter', icon: '🐦', users: '450M', reach: '85%' },
    { name: 'LinkedIn', icon: '💼', users: '900M', reach: '80%' },
    { name: 'TikTok', icon: '🎵', users: '1B', reach: '88%' },
    { name: 'YouTube', icon: '📺', users: '2.7B', reach: '92%' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Comprehensive analytics',
        'Priority support',
        'API access',
        'Team collaboration',
        'Custom templates'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Full AI suite',
        'Advanced analytics',
        '24/7 dedicated support',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      content: 'AI Social Media Manager has increased our engagement by 300% and saved us 20 hours per week.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechStart Inc',
      content: 'The AI content generation is incredible. Our social media presence has never been stronger.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Amanda Wilson',
      role: 'Social Media Manager',
      company: 'Fashion Brand',
      content: 'The analytics insights have helped us understand our audience better than ever before.',
      rating: 5,
      avatar: '👩‍💄'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Boost sales with AI-optimized social media campaigns and product promotion',
      benefits: ['250% increase in sales', '180% more engagement', '90% time savings']
    },
    {
      industry: 'Restaurants',
      description: 'Attract customers with mouth-watering content and local engagement',
      benefits: ['300% more reservations', '220% social reach', '85% customer retention']
    },
    {
      industry: 'Fitness',
      description: 'Build community and motivate followers with inspiring fitness content',
      benefits: ['400% follower growth', '350% engagement rate', '95% member retention']
    },
    {
      industry: 'Real Estate',
      description: 'Showcase properties and generate leads with stunning visual content',
      benefits: ['500% more leads', '280% website traffic', '75% conversion rate']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Share2 className="w-4 h-4" />
            <span>AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Social Media Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-400 mb-8 font-medium cyber-glow">
            Intelligent Social Media Automation
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your social media presence with AI-powered content generation, smart scheduling, 
            and advanced analytics. Increase engagement by 300% and save 20 hours per week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-gray-300">More Engagement</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20h</div>
              <div className="text-gray-300">Time Saved/Week</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">250%</div>
              <div className="text-gray-300">ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            All Major Platforms Supported
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Manage all your social media accounts from one powerful AI-driven platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{platform.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
              <div className="text-sm text-gray-400 mb-1">{platform.users} users</div>
              <div className="text-sm text-cyan-400">{platform.reach} reach</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to optimize your social media strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Industry Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Proven results across multiple industries and business types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                {useCase.industry}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="text-center">
                    <div className="text-lg font-bold text-pink-400">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your social media needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-pink-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-pink-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their social media presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI Social Media Manager to increase engagement, 
            save time, and grow their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;