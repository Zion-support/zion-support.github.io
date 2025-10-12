'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code,
  BarChart3,
  TrendingUp,
  Target,
  Lightbulb,
  Database,
  Cpu,
  Mail,
  Calendar,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Save,
  Share2,
  Copy,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Bell,
  User,
  Users2,
  Building,
  Home,
  Phone,
  Mail as MailIcon,
  MapPin,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Laptop,
  Monitor,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Mic,
  Video,
  Image,
  Music,
  Film,
  Book,
  BookOpen,
  File,
  Folder,
  FolderOpen,
  Archive,
  Trash,
  Recycle,
  RotateCcw,
  RotateCw,
  Move,
  Copy as CopyIcon,
  Scissors,
  PenTool,
  Brush,
  Palette,
  Layers,
  Grid,
  Layout,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  Unlink,
  List,
  ListOrdered,
  Quote,
  Code2,
  Terminal,
  Command,
  Keyboard,
  Mouse,
  Touchpad,
  Wifi,
  Bluetooth,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Volume2,
  VolumeX,
  Volume1,
  Mute,
  Unmute,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  FastForward,
  Rewind,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  FastForward as FastForwardIcon,
  Rewind as RewindIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Volume1 as Volume1Icon,
  Mute as MuteIcon,
  Unmute as UnmuteIcon,
  PlayCircle as PlayCircleIcon,
  PauseCircle as PauseCircleIcon,
  StopCircle as StopCircleIcon,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Repeat as RepeatIcon2,
  Shuffle as ShuffleIcon2,
  FastForward as FastForwardIcon2,
  Rewind as RewindIcon2
} from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Live data visualization with customizable widgets and interactive charts',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis for data-driven decisions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Custom Reports',
      description: 'Build and schedule automated reports tailored to your business needs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including databases, APIs, and cloud services',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control and audit trails',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'Full REST API for custom integrations and third-party applications',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 45,
      period: 'month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 dashboards',
        'Basic data sources (10)',
        'Standard reports',
        'Email support',
        'Basic visualizations',
        '1 user account'
      ],
      limitations: [
        'Limited data retention (30 days)',
        'Basic integrations only',
        'Standard refresh rates'
      ],
      popular: false,
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 95,
      period: 'month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Up to 25 dashboards',
        'Advanced data sources (50)',
        'Custom reports & scheduling',
        'Priority support',
        'Advanced visualizations',
        'Up to 10 user accounts',
        'API access',
        'Data retention (1 year)',
        'Real-time data updates'
      ],
      limitations: [
        'Limited custom metrics',
        'Standard data processing'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 229,
      period: 'month',
      description: 'Complete solution for large organizations with complex data needs',
      features: [
        'Unlimited dashboards',
        'All data sources (100+)',
        'Advanced custom reports',
        'Dedicated support manager',
        'Custom visualizations',
        'Unlimited user accounts',
        'Full API access',
        'Unlimited data retention',
        'Real-time streaming data',
        'Custom metrics & KPIs',
        'Advanced data processing',
        'White-label solution',
        'On-premise deployment'
      ],
      limitations: [],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'VP of Data, TechCorp',
      content: 'Zion Analytics Pro gave us insights we never had before. Our decision-making process is now 3x faster and more accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      role: 'Head of Marketing, GrowthCo',
      content: 'The predictive analytics feature helped us identify market trends 6 months ahead of our competitors.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      role: 'CEO, DataDriven Inc.',
      content: 'The real-time dashboards transformed how we monitor our business. Everything is now visible at a glance.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const dataSources = [
    { name: 'Google Analytics', icon: BarChart3, color: 'from-orange-500 to-red-500' },
    { name: 'Salesforce', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { name: 'MySQL', icon: Database, color: 'from-yellow-500 to-orange-500' },
    { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
    { name: 'Stripe', icon: CreditCard, color: 'from-purple-500 to-pink-500' },
    { name: 'HubSpot', icon: Target, color: 'from-orange-500 to-red-500' },
    { name: 'Slack', icon: MessageSquare, color: 'from-purple-500 to-pink-500' },
    { name: 'Zapier', icon: Zap, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform</title>
        <meta name="description" content="Advanced business intelligence platform with real-time dashboards, predictive analytics, custom reports, and data integration. Starting at $45/month." />
        <meta name="keywords" content="business intelligence, analytics, dashboards, data visualization, predictive analytics, custom reports" />
        <meta property="og:title" content="Zion Analytics Pro - Advanced Business Intelligence Platform" />
        <meta property="og:description" content="Advanced business intelligence platform with real-time dashboards, predictive analytics, custom reports, and data integration. Starting at $45/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-analytics-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Analytics Pro",
            "description": "Advanced business intelligence platform with real-time dashboards, predictive analytics, custom reports, and data integration",
            "url": "https://ziontechgroup.com/zion-analytics-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "45",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "45",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                Business Intelligence Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Zion Analytics Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Advanced business intelligence platform with real-time dashboards, predictive analytics, and custom reporting for data-driven decisions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-gray-400 text-sm">Data Sources</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Real-time</div>
                  <div className="text-gray-400 text-sm">Updates</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Accuracy</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">SOC 2</div>
                  <div className="text-gray-400 text-sm">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable insights and drive business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100+ Data Sources</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with your existing tools and data sources for comprehensive analytics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {dataSources.map((source, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${source.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <source.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                    {source.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your analytics needs. All plans include 14-day free trial and no setup fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center text-gray-500">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {limitation}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'border border-gray-600 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Data into Insights?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of advanced business intelligence. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsProPage;