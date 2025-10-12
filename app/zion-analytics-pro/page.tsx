'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  Download, 
  Share, 
  Settings, 
  Filter, 
  Search, 
  RefreshCw,
  Eye,
  Database,
  Cpu,
  Network,
  Shield,
  Zap,
  Target,
  Lightbulb,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Image,
  Video,
  PieChart,
  LineChart,
  BarChart,
  Activity,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  X,
  Edit,
  Copy,
  Trash2,
  Save,
  Upload,
  Download as DownloadIcon,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Move,
  Grip,
  Grid,
  List,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Sad,
  Wink,
  Kiss,
  Tongue
} from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics with live, interactive dashboards that update in real-time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage AI-powered forecasting to predict trends and make data-driven decisions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Custom Reports',
      description: 'Create personalized reports with drag-and-drop functionality and automated scheduling.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'API Integration',
      description: 'Connect with 100+ popular business tools and platforms through our robust API.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'Get intelligent insights and recommendations powered by machine learning algorithms.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 dashboards',
        '10 data sources',
        'Basic reports',
        'Email support',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Unlimited dashboards',
        '50 data sources',
        'Advanced reports',
        'Priority support',
        '10GB data storage',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited data sources',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited data storage',
        'Custom development',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Zion Analytics Pro transformed our decision-making process. The predictive analytics helped us increase revenue by 40%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Data Director, GrowthCorp',
      content: 'The real-time dashboards are incredible. We can now respond to market changes instantly.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager, InnovateLabs',
      content: 'The automated insights save us hours every week. It\'s like having a data scientist on our team.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'features', name: 'Features', icon: CheckCircle },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'testimonials', name: 'Testimonials', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Analytics Pro - the ultimate business intelligence platform featuring real-time dashboards, predictive analytics, and AI-powered insights. Start your free trial today." />
        <meta name="keywords" content="business intelligence, analytics platform, data visualization, predictive analytics, real-time dashboards, business metrics, data insights" />
        <meta property="og:title" content="Zion Analytics Pro - Advanced Business Intelligence Platform" />
        <meta property="og:description" content="Transform your business with Zion Analytics Pro - the ultimate business intelligence platform featuring real-time dashboards, predictive analytics, and AI-powered insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-analytics-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Analytics Pro",
            "description": "Advanced business intelligence platform with real-time dashboards and predictive analytics",
            "url": "https://ziontechgroup.com/zion-analytics-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "150"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                Business Intelligence Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                  Zion Analytics Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with advanced analytics, real-time dashboards, and AI-powered insights that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="#pricing"
                  className="cyber-button group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo"
                  className="cyber-button-secondary group"
                >
                  <Play className="mr-2" />
                  Watch Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-pink-400 mb-2">150+</div>
                  <div className="text-gray-400 text-sm">Integrations</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-green-400 mb-2">4.9★</div>
                  <div className="text-gray-400 text-sm">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-slate-800/30 backdrop-blur-sm border-b border-gray-700/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful Analytics Made Simple
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Zion Analytics Pro combines the power of advanced analytics with an intuitive interface, making complex data insights accessible to everyone in your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="cyber-card group hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Demo Section */}
              <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">See Zion Analytics Pro in Action</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Watch how our platform transforms raw data into actionable insights
                </p>
                <div className="bg-slate-900/50 rounded-xl p-8 mb-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-300">Demo Video Coming Soon</p>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="cyber-button"
                >
                  Request Live Demo
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Comprehensive Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to turn your data into business intelligence
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Real-time Data Visualization</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Create stunning, interactive dashboards that update in real-time. Drag and drop widgets, customize layouts, and share insights with your team instantly.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Interactive charts and graphs
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Customizable dashboard layouts
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Real-time data updates
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Mobile-responsive design
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-24 h-24 text-cyan-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-slate-800/50 rounded-xl p-8 order-2 lg:order-1">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-24 h-24 text-purple-400" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-white mb-6">AI-Powered Predictive Analytics</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Leverage machine learning algorithms to predict future trends, identify opportunities, and make data-driven decisions with confidence.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Automated trend analysis
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Forecasting models
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Anomaly detection
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Smart recommendations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Seamless Integrations</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Connect with over 150+ popular business tools and platforms. Import data from any source and create unified views across your entire tech stack.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      150+ pre-built connectors
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Custom API integrations
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Automated data syncing
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Data transformation tools
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <Network className="w-24 h-24 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Simple, Transparent Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your business needs. All plans include a 14-day free trial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`cyber-card text-center relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mb-8">{plan.description}</p>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className={`w-full justify-center ${
                        plan.popular ? 'cyber-button' : 'cyber-button-secondary'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-400 mb-4">Need a custom solution?</p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact our sales team →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Our Customers Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it - hear from businesses that have transformed their operations with Zion Analytics Pro.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="cyber-card">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using Zion Analytics Pro to make better decisions with their data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="cyber-button"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/demo"
                    className="cyber-button-secondary"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
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