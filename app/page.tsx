'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Smartphone,
  Database,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Target,
  Cpu,
  Lock,
  MessageSquare,
  FileText,
  Settings,
  Monitor,
  Wifi,
  Code,
  Package,
  Mic,
  Eye,
  Heart,
  DollarSign,
  Calendar,
  Headphones,
  ShoppingCart,
  Workflow,
  Server,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Play,
  Award,
  Clock,
  Sparkles,
  Rocket,
  Lightbulb,
  Layers,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  RefreshCw,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Info,
  AlertCircle,
  CheckSquare,
  XCircle,
  Plus,
  Minus,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Maximize2,
  Minimize2,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Flag,
  Tag,
  Hash,
  AtSign,
  Percent,
  DollarSign as Dollar,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Receipt,
  Calculator,
  PieChart as Pie,
  BarChart as Bar,
  LineChart as Line,
  TrendingUp as Trending,
  TrendingDown as TrendingDownIcon,
  Activity as ActivityIcon,
  Layers as LayersIcon,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Sparkles as SparklesIcon,
  Award as AwardIcon,
  Clock as ClockIcon,
  Play as PlayIcon,
  ChevronRight as ChevronRightIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  Cpu as CpuIcon,
  Lock as LockIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Monitor as MonitorIcon,
  Wifi as WifiIcon,
  Code as CodeIcon,
  Package as PackageIcon,
  Mic as MicIcon,
  Eye as EyeIcon,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Calendar as CalendarIcon,
  Headphones as HeadphonesIcon,
  ShoppingCart as ShoppingCartIcon,
  Workflow as WorkflowIcon,
  Server as ServerIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featuredServices = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for any business',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations with intelligent process automation',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const microSaasServices = [
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence with AI-powered insights',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: ['Real-time Dashboards', 'AI Predictions', 'Custom Reports', 'Multi-tenant'],
      benefits: ['300% faster insights', 'Automated reporting', 'ROI optimization'],
      link: '/micro-saas/analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support with advanced NLP',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: ['GPT-4 Powered', 'Multi-channel', 'Sentiment Analysis', 'Auto-routing'],
      benefits: ['24/7 support', '60% cost reduction', 'Higher satisfaction'],
      link: '/micro-saas/chat-ai'
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and automated billing system',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: ['AI Generation', 'Auto-billing', 'Multi-currency', 'Payment tracking'],
      benefits: ['90% time savings', 'Faster payments', 'Professional invoices'],
      link: '/micro-saas/invoice-genius'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation with AI-powered prospect scoring',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Auto-nurturing', 'CRM Integration'],
      benefits: ['300% more leads', 'Better conversion', 'ROI optimization'],
      link: '/micro-saas/lead-magnet'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring for SMBs',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: ['Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Compliance'],
      benefits: ['Enhanced security', 'Risk reduction', 'Peace of mind'],
      link: '/micro-saas/security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: ['Auto Backups', 'Cross-platform Sync', 'Version Control', 'Encryption'],
      benefits: ['Data protection', 'Business continuity', 'Cost-effective'],
      link: '/micro-saas/cloud-vault'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Headphones },
    { number: '50+', label: 'Countries Served', icon: Globe }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Leading Technology Innovation</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, cloud infrastructure, cybersecurity, and micro SAAS platforms. Expert IT services and digital transformation." />
        <meta name="keywords" content="AI solutions, IT services, cloud migration, cybersecurity, micro saas, digital transformation, business automation, enterprise software" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced glow">
                    Zion Tech Group
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-cyan-400 mb-4 font-medium">
                  AI & IT Solutions Pioneer
                </p>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge artificial intelligence, robust cloud infrastructure, 
                  and innovative micro SAAS solutions. We're your trusted partner in digital transformation.
                </p>
              </div>

              {/* Animated Service Showcase */}
              <div className="mb-12">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${featuredServices[currentServiceIndex].color} rounded-full flex items-center justify-center mr-4 quantum-pulse`}>
                      {React.createElement(featuredServices[currentServiceIndex].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {featuredServices[currentServiceIndex].title}
                      </h3>
                      <p className="text-gray-300">
                        {featuredServices[currentServiceIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link
                  to="/contact"
                  className="futuristic-btn px-8 py-4 rounded-xl text-lg font-semibold hover-lift hover-glow"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="cyber-button-secondary px-8 py-4 rounded-xl text-lg font-semibold hover-lift"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover-lift"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card-enhanced p-6 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text-enhanced">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, affordable, and easy-to-use software solutions designed to streamline your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced p-6 hover-lift group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={service.link}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="cyber-card-enhanced p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have revolutionized their operations with our cutting-edge solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Call Us</div>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                    (302) 464-0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Email Us</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-gray-300 text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="futuristic-btn px-8 py-4 rounded-xl text-lg font-semibold hover-lift"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
                <Link
                  to="/demo"
                  className="cyber-button-secondary px-8 py-4 rounded-xl text-lg font-semibold hover-lift"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
