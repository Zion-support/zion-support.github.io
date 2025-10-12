'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Zap, 
  Users, 
  Settings, 
  Mail, 
  Calendar,
  TrendingUp,
  Lock,
  Database,
  Globe,
  Smartphone,
  Monitor,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  Target,
  Lightbulb,
  Cpu,
  Network,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Video,
  Image,
  File,
  Folder,
  Trash2,
  Edit,
  Copy,
  Share,
  Heart,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  X,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  ExternalLink,
  Link as LinkIcon,
  Phone,
  Mail as MailIcon,
  MapPin,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  User,
  UserPlus,
  UserCheck,
  UserX,
  LogIn,
  LogOut,
  Key,
  Lock as LockIcon,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Shield as ShieldIcon,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Loader,
  Loader2,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Move,
  Grip,
  GripVertical,
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
  Heart as HeartIcon,
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
  Tongue,
  Wink2,
  Kiss2,
  Tongue2,
  Wink3,
  Kiss3,
  Tongue3,
  Wink4,
  Kiss4,
  Tongue4,
  Wink5,
  Kiss5,
  Tongue5,
  Wink6,
  Kiss6,
  Tongue6,
  Wink7,
  Kiss7,
  Tongue7,
  Wink8,
  Kiss8,
  Tongue8,
  Wink9,
  Kiss9,
  Tongue9,
  Wink10,
  Kiss10,
  Tongue10,
  Package
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'communication', name: 'Communication', icon: MessageSquare },
    { id: 'automation', name: 'Automation', icon: Settings }
  ];

  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      category: 'analytics',
      description: 'Advanced business intelligence and data visualization platform with real-time insights and predictive analytics.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'API Integration'],
      price: '$29/month',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      link: '/zion-analytics-pro',
      popular: true
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      category: 'ai',
      description: 'Intelligent chatbot platform with natural language processing and multi-channel support.',
      features: ['NLP Processing', 'Multi-channel Support', 'Custom Training', 'Analytics Dashboard'],
      price: '$19/month',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500',
      link: '/zion-chat-ai',
      popular: true
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      category: 'security',
      description: 'Comprehensive cybersecurity monitoring and threat detection system for small to medium businesses.',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      price: '$49/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/zion-security-shield',
      popular: false
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      category: 'security',
      description: 'Secure cloud storage solution with end-to-end encryption and advanced file management.',
      features: ['End-to-End Encryption', 'File Versioning', 'Collaboration Tools', 'Mobile Access'],
      price: '$15/month',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-cloud-vault',
      popular: false
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      category: 'ai',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      features: ['AI Writing Assistant', 'Content Templates', 'SEO Optimization', 'Multi-language Support'],
      price: '$25/month',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      link: '/zion-content-studio',
      popular: true
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      category: 'ai',
      description: 'Smart CRM system with AI-powered lead scoring and automated follow-up sequences.',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Pipeline Management', 'Performance Analytics'],
      price: '$39/month',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-crm-intelligence',
      popular: false
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      category: 'automation',
      description: 'Automated data synchronization across multiple platforms and databases.',
      features: ['Multi-platform Sync', 'Real-time Updates', 'Conflict Resolution', 'Data Validation'],
      price: '$22/month',
      icon: RefreshCw,
      color: 'from-orange-500 to-red-500',
      link: '/zion-data-sync',
      popular: false
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      category: 'productivity',
      description: 'Lead generation and email marketing automation platform with advanced segmentation.',
      features: ['Email Automation', 'Lead Segmentation', 'A/B Testing', 'Conversion Tracking'],
      price: '$18/month',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      link: '/zion-lead-magnet',
      popular: false
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      category: 'productivity',
      description: 'Project management platform with AI-powered task optimization and team collaboration.',
      features: ['Task Management', 'Team Collaboration', 'AI Optimization', 'Progress Tracking'],
      price: '$32/month',
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      link: '/zion-project-master',
      popular: true
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      category: 'automation',
      description: 'Advanced email marketing automation with personalization and behavioral triggers.',
      features: ['Behavioral Triggers', 'Personalization', 'Email Templates', 'Performance Analytics'],
      price: '$28/month',
      icon: Mail,
      color: 'from-yellow-500 to-orange-500',
      link: '/zion-email-automation',
      popular: false
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      category: 'productivity',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Alerts', 'Supplier Management'],
      price: '$35/month',
      icon: Package,
      color: 'from-violet-500 to-purple-500',
      link: '/zion-inventory-smart',
      popular: false
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      category: 'productivity',
      description: 'Smart invoicing platform with automated billing, payment tracking, and financial reporting.',
      features: ['Automated Billing', 'Payment Tracking', 'Financial Reports', 'Tax Calculations'],
      price: '$20/month',
      icon: FileText,
      color: 'from-emerald-500 to-green-500',
      link: '/zion-invoice-genius',
      popular: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === activeCategory);

  const popularServices = microSaasServices.filter(service => service.popular);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions including AI tools, analytics platforms, productivity apps, and automation services. Transform your business with our innovative software solutions." />
        <meta name="keywords" content="micro saas, saas solutions, AI tools, business software, productivity apps, analytics platform, automation tools" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive micro SAAS solutions including AI tools, analytics platforms, productivity apps, and automation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Tech Group Micro SAAS Solutions",
            "description": "Comprehensive micro SAAS solutions for businesses",
            "url": "https://ziontechgroup.com/micro-saas",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "15",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, affordable software solutions designed to transform your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="#services"
                  className="cyber-button group"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="cyber-button-secondary group"
                >
                  Get Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Popular Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular micro SAAS solutions trusted by thousands of businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {popularServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="cyber-card group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">Popular</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                    </div>
                    <Link 
                      to={service.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Section */}
        <section id="services" className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  All Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Browse our complete collection of micro SAAS solutions
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="cyber-card group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-semibold">Popular</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                    </div>
                    <Link 
                      to={service.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="cyber-card text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$15<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Up to 3 services
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Basic support
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Standard features
                  </li>
                </ul>
                <Link to="/contact" className="cyber-button-secondary w-full justify-center">
                  Get Started
                </Link>
              </div>

              {/* Professional Plan */}
              <div className="cyber-card text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$39<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Up to 10 services
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Advanced features
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    API access
                  </li>
                </ul>
                <Link to="/contact" className="cyber-button w-full justify-center">
                  Get Started
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="cyber-card text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Unlimited services
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    24/7 support
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    All features
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Custom integrations
                  </li>
                </ul>
                <Link to="/contact" className="cyber-button-secondary w-full justify-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of our micro SAAS solutions.
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;