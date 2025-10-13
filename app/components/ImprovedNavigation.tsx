import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Sparkles,
  Search,
  User,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  Play,
  Target,
  FileText,
  Video,
  MessageSquare,
  Calendar,
  ShoppingCart,
  CreditCard,
  Truck,
  Wifi,
  Camera,
  Headphones,
  Mic,
  Palette,
  Activity,
  Package,
  Database,
  Code,
  Lock,
  PieChart,
  Heart,
  TrendingDown,
  Network,
  Server,
  Cpu,
  HardDrive,
  MemoryStick,
  Disc,
  Cd,
  Dvd,
  FloppyDisk,
  Usb,
  Hdmi,
  Ethernet
} from 'lucide-react';

const ImprovedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsSidebarOpen(false);
  }, [location]);

  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI Solutions',
      color: 'from-blue-500 to-cyan-500',
      dropdown: [
        { 
          label: 'AI Analytics Dashboard Pro', 
          href: '/ai-analytics-dashboard-pro',
          description: 'Real-time business intelligence',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'AI Business Intelligence Pro', 
          href: '/ai-business-intelligence-pro',
          description: 'Comprehensive BI platform',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'AI Data Analytics Pro', 
          href: '/ai-data-analytics-pro',
          description: 'Advanced data analytics',
          icon: <Database className="w-4 h-4" />
        },
        { 
          label: 'AI Content Generation Pro', 
          href: '/ai-content-generation-pro',
          description: 'AI-powered content creation',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          label: 'AI Video Generation Pro', 
          href: '/ai-video-generation-pro',
          description: 'Professional video creation',
          icon: <Video className="w-4 h-4" />
        },
        { 
          label: 'AI Design Studio Pro', 
          href: '/ai-design-studio-pro',
          description: 'AI-powered design platform',
          icon: <Palette className="w-4 h-4" />
        },
        { 
          label: 'AI Customer Support Pro', 
          href: '/ai-customer-support-chatbot',
          description: 'Intelligent customer service',
          icon: <MessageSquare className="w-4 h-4" />
        },
        { 
          label: 'AI Customer Insights Pro', 
          href: '/ai-customer-insights-pro',
          description: 'Advanced customer analytics',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'AI Voice Assistant Pro', 
          href: '/ai-voice-assistant-pro',
          description: 'Enterprise voice AI',
          icon: <Mic className="w-4 h-4" />
        },
        { 
          label: 'AI Cybersecurity Suite Pro', 
          href: '/ai-cybersecurity-suite-pro',
          description: 'AI-powered security',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'AI Fraud Detection Pro', 
          href: '/ai-fraud-detection-pro',
          description: 'Advanced fraud prevention',
          icon: <Lock className="w-4 h-4" />
        },
        { 
          label: 'AI Content Moderator Pro', 
          href: '/ai-content-moderator-pro',
          description: 'Automated content moderation',
          icon: <Eye className="w-4 h-4" />
        },
        { 
          label: 'AI Marketing Automation Pro', 
          href: '/ai-marketing-automation-pro',
          description: 'Smart marketing campaigns',
          icon: <Target className="w-4 h-4" />
        },
        { 
          label: 'AI CRM Pro', 
          href: '/ai-crm-pro',
          description: 'Intelligent CRM system',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'AI Sentiment Analysis Pro', 
          href: '/ai-sentiment-analysis-pro',
          description: 'Real-time sentiment tracking',
          icon: <Heart className="w-4 h-4" />
        },
        { 
          label: 'AI Code Assistant Pro', 
          href: '/ai-code-assistant-pro',
          description: 'AI-powered development',
          icon: <Code className="w-4 h-4" />
        },
        { 
          label: 'AI Testing Automation Pro', 
          href: '/ai-testing-automation-pro',
          description: 'Intelligent testing platform',
          icon: <CheckCircle className="w-4 h-4" />
        },
        { 
          label: 'AI API Manager Pro', 
          href: '/ai-api-manager-pro',
          description: 'Intelligent API management',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'AI DevOps Pro', 
          href: '/ai-devops-pro',
          description: 'AI-powered DevOps',
          icon: <Server className="w-4 h-4" />
        },
        { 
          label: 'AI Performance Optimizer Pro', 
          href: '/ai-performance-optimizer-pro',
          description: 'Performance optimization',
          icon: <Activity className="w-4 h-4" />
        },
        { 
          label: 'AI Cloud Manager Pro', 
          href: '/ai-cloud-manager-pro',
          description: 'Intelligent cloud management',
          icon: <Cloud className="w-4 h-4" />
        },
        { 
          label: 'AI Translator Pro', 
          href: '/ai-translator-pro',
          description: 'Advanced translation',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'AI Supply Chain Optimizer Pro', 
          href: '/ai-supply-chain-optimizer-pro',
          description: 'Supply chain intelligence',
          icon: <Truck className="w-4 h-4" />
        },
        { 
          label: 'AI Financial Forecaster Pro', 
          href: '/ai-financial-forecaster-pro',
          description: 'Financial forecasting',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'View All AI Services', 
          href: '/ai-services',
          description: 'Explore all AI solutions',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Comprehensive IT Solutions',
      color: 'from-green-500 to-emerald-500',
      dropdown: [
        { 
          label: 'Cloud Infrastructure Pro', 
          href: '/cloud-infrastructure-pro',
          description: 'Multi-cloud solutions',
          icon: <Cloud className="w-4 h-4" />
        },
        { 
          label: 'Cloud Migration Pro', 
          href: '/cloud-migration-pro',
          description: 'Seamless cloud migration',
          icon: <Upload className="w-4 h-4" />
        },
        { 
          label: 'Hybrid Cloud Solutions', 
          href: '/hybrid-cloud-solutions',
          description: 'Hybrid cloud architecture',
          icon: <Network className="w-4 h-4" />
        },
        { 
          label: 'Cybersecurity Suite Pro', 
          href: '/cybersecurity-suite-pro',
          description: 'Comprehensive security',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'Network Security Pro', 
          href: '/network-security-pro',
          description: 'Network protection',
          icon: <Lock className="w-4 h-4" />
        },
        { 
          label: 'Data Protection Pro', 
          href: '/data-protection-pro',
          description: 'Data security solutions',
          icon: <Database className="w-4 h-4" />
        },
        { 
          label: 'Custom Software Development', 
          href: '/custom-software-development',
          description: 'End-to-end development',
          icon: <Code className="w-4 h-4" />
        },
        { 
          label: 'Web Development Pro', 
          href: '/web-development-pro',
          description: 'Professional web solutions',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'Mobile App Development Pro', 
          href: '/mobile-app-development',
          description: 'Native & cross-platform apps',
          icon: <Smartphone className="w-4 h-4" />
        },
        { 
          label: 'DevOps Solutions Pro', 
          href: '/devops-solutions-pro',
          description: 'Complete DevOps implementation',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Infrastructure Management Pro', 
          href: '/infrastructure-management',
          description: 'Comprehensive infrastructure',
          icon: <Server className="w-4 h-4" />
        },
        { 
          label: 'Container Orchestration Pro', 
          href: '/container-orchestration',
          description: 'Kubernetes & Docker',
          icon: <Package className="w-4 h-4" />
        },
        { 
          label: 'Data Warehouse Solutions Pro', 
          href: '/data-warehouse-solutions',
          description: 'Enterprise data warehousing',
          icon: <Database className="w-4 h-4" />
        },
        { 
          label: 'Business Intelligence Pro', 
          href: '/business-intelligence-pro',
          description: 'Advanced BI solutions',
          icon: <PieChart className="w-4 h-4" />
        },
        { 
          label: 'Big Data Solutions Pro', 
          href: '/big-data-solutions',
          description: 'Hadoop & Spark solutions',
          icon: <Activity className="w-4 h-4" />
        },
        { 
          label: 'IT Consulting Pro', 
          href: '/it-consulting-pro',
          description: 'Strategic IT consulting',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'IT Support Pro', 
          href: '/it-support-pro',
          description: 'Comprehensive IT support',
          icon: <Headphones className="w-4 h-4" />
        },
        { 
          label: 'Digital Transformation Pro', 
          href: '/digital-transformation',
          description: 'End-to-end transformation',
          icon: <Zap className="w-4 h-4" />
        },
        { 
          label: 'Blockchain Solutions Pro', 
          href: '/blockchain-solutions',
          description: 'Enterprise blockchain',
          icon: <Lock className="w-4 h-4" />
        },
        { 
          label: 'IoT Solutions Pro', 
          href: '/iot-solutions-pro',
          description: 'Internet of Things',
          icon: <Wifi className="w-4 h-4" />
        },
        { 
          label: 'AR/VR Solutions Pro', 
          href: '/ar-vr-solutions',
          description: 'Augmented & Virtual Reality',
          icon: <Camera className="w-4 h-4" />
        },
        { 
          label: 'View All IT Services', 
          href: '/services',
          description: 'Explore all IT solutions',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-Use Solutions',
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { 
          label: 'Zion AI Analytics Pro', 
          href: '/zion-ai-analytics-pro',
          description: 'Business intelligence platform',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'Zion AI CRM Pro', 
          href: '/zion-ai-crm-pro',
          description: 'Intelligent CRM system',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Content Generator', 
          href: '/zion-ai-content-generator',
          description: 'AI content creation',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Video Generator Pro', 
          href: '/zion-ai-video-generator',
          description: 'Professional video creation',
          icon: <Video className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Customer Support Pro', 
          href: '/zion-ai-customer-support',
          description: 'Intelligent support system',
          icon: <MessageSquare className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Marketing Automation Pro', 
          href: '/zion-ai-marketing-automation',
          description: 'Marketing automation',
          icon: <Target className="w-4 h-4" />
        },
        { 
          label: 'Zion Project Manager Pro', 
          href: '/zion-project-manager-pro',
          description: 'AI project management',
          icon: <Calendar className="w-4 h-4" />
        },
        { 
          label: 'Zion Smart Inventory Optimizer', 
          href: '/zion-smart-inventory-optimizer',
          description: 'Intelligent inventory management',
          icon: <Package className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Financial Analytics Pro', 
          href: '/zion-ai-financial-analytics',
          description: 'Financial management',
          icon: <DollarSign className="w-4 h-4" />
        },
        { 
          label: 'Zion AI HR Management Pro', 
          href: '/zion-hr-management-pro',
          description: 'Human resources management',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI E-commerce Suite', 
          href: '/zion-ecommerce-suite',
          description: 'Complete e-commerce platform',
          icon: <ShoppingCart className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Social Media Manager', 
          href: '/zion-ai-social-media-manager',
          description: 'Social media management',
          icon: <Share className="w-4 h-4" />
        },
        { 
          label: 'Zion Security Shield Pro', 
          href: '/zion-security-shield',
          description: 'Advanced cybersecurity',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Compliance Manager', 
          href: '/zion-compliance-manager',
          description: 'Compliance management',
          icon: <CheckCircle className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Data Visualization Pro', 
          href: '/zion-data-visualization',
          description: 'Data visualization platform',
          icon: <PieChart className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Business Intelligence Pro', 
          href: '/zion-business-intelligence',
          description: 'Comprehensive BI platform',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Team Collaboration Pro', 
          href: '/zion-team-collaboration',
          description: 'Team collaboration platform',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Email Automation Pro', 
          href: '/zion-email-automation',
          description: 'Email marketing platform',
          icon: <Mail className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Translator Pro', 
          href: '/zion-ai-translator-pro',
          description: 'Advanced translation',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Code Assistant Pro', 
          href: '/zion-ai-code-assistant',
          description: 'AI coding assistant',
          icon: <Code className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Design Studio Pro', 
          href: '/zion-ai-design-studio',
          description: 'AI design platform',
          icon: <Palette className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Voice Assistant Pro', 
          href: '/zion-ai-voice-assistant-pro',
          description: 'Custom voice assistant',
          icon: <Mic className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Invoice Generator Pro', 
          href: '/zion-ai-invoice-generator',
          description: 'Automated invoicing',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Customer Insights Pro', 
          href: '/zion-ai-customer-insights',
          description: 'Customer analytics',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Email Analyzer Pro', 
          href: '/zion-ai-email-analyzer',
          description: 'Email analysis platform',
          icon: <Mail className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Customer Sentiment Tracker Pro', 
          href: '/zion-ai-customer-sentiment-tracker',
          description: 'Sentiment monitoring',
          icon: <Heart className="w-4 h-4" />
        },
        { 
          label: 'Zion Smart Expense Categorizer Pro', 
          href: '/zion-smart-expense-categorizer',
          description: 'Expense management',
          icon: <DollarSign className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Code Reviewer Pro', 
          href: '/zion-ai-code-reviewer',
          description: 'Intelligent code review',
          icon: <Code className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Contract Analyzer Pro', 
          href: '/zion-ai-contract-analyzer',
          description: 'Contract analysis',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Performance Optimizer Pro', 
          href: '/zion-ai-performance-optimizer',
          description: 'Performance optimization',
          icon: <Activity className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Customer Churn Predictor Pro', 
          href: '/zion-ai-customer-churn-predictor',
          description: 'Churn prediction',
          icon: <TrendingDown className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Supply Chain Optimizer Pro', 
          href: '/zion-ai-supply-chain-optimizer',
          description: 'Supply chain optimization',
          icon: <Truck className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Financial Forecaster Pro', 
          href: '/zion-ai-financial-forecaster',
          description: 'Financial forecasting',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Content Moderator Pro', 
          href: '/zion-ai-content-moderator',
          description: 'Content moderation',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Data Cleaner Pro', 
          href: '/zion-ai-data-cleaner',
          description: 'Data cleaning platform',
          icon: <Database className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Task Scheduler Pro', 
          href: '/zion-ai-task-scheduler',
          description: 'Intelligent task scheduling',
          icon: <Calendar className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Customer Support Pro', 
          href: '/zion-ai-customer-support-pro',
          description: 'Advanced customer support',
          icon: <Headphones className="w-4 h-4" />
        },
        { 
          label: 'View All Micro SAAS', 
          href: '/micro-saas',
          description: 'Explore all micro SAAS',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-Gen Connectivity',
      color: 'from-orange-500 to-red-500',
      dropdown: [
        { 
          label: '5G Data Analytics', 
          href: '/5g-data-analytics',
          description: 'High-speed data analysis',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: '5G Edge Computing', 
          href: '/5g-edge-computing',
          description: 'Edge computing solutions',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: '5G Implementation', 
          href: '/5g-implementation',
          description: '5G network deployment',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: '5G Mobile Applications', 
          href: '/5g-mobile-applications',
          description: '5G-enabled mobile apps',
          icon: <Smartphone className="w-4 h-4" />
        },
        { 
          label: '5G Network Infrastructure', 
          href: '/5g-network-infrastructure',
          description: '5G network architecture',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: '5G Private Networks', 
          href: '/5g-private-networks',
          description: 'Private 5G networks',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: '5G Smart City Solutions', 
          href: '/5g-smart-city-solutions',
          description: 'Smart city infrastructure',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: '5G IoT Solutions', 
          href: '/5g-iot-solutions',
          description: '5G IoT connectivity',
          icon: <Wifi className="w-4 h-4" />
        },
        { 
          label: 'View All 5G Solutions', 
          href: '/5g-solutions',
          description: 'Explore all 5G solutions',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      icon: <Users className="w-4 h-4" />,
      description: 'About Zion Tech Group',
      color: 'from-cyan-500 to-blue-500',
      dropdown: [
        { 
          label: 'About Us', 
          href: '/about',
          description: 'Our story and mission',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Our Team', 
          href: '/team',
          description: 'Meet our experts',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Careers', 
          href: '/careers',
          description: 'Join our team',
          icon: <Award className="w-4 h-4" />
        },
        { 
          label: 'Case Studies', 
          href: '/case-studies',
          description: 'Success stories',
          icon: <Star className="w-4 h-4" />
        },
        { 
          label: 'Blog', 
          href: '/blog',
          description: 'Latest insights',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          label: 'News', 
          href: '/news',
          description: 'Company news',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          label: 'Press', 
          href: '/press',
          description: 'Press releases',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          label: 'Partners', 
          href: '/partners',
          description: 'Our partners',
          icon: <Users className="w-4 h-4" />
        }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> },
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Consultation', href: '/consultation', icon: <Users className="w-4 h-4" /> }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const Sidebar = () => (
    <div className={`fixed inset-0 z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-white/10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  
                  {/* Enhanced Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl z-50">
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{item.label}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                        <div className="space-y-1 max-h-96 overflow-y-auto">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors">
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                                  {dropdownItem.label}
                                </div>
                                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Links & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="hidden lg:flex space-x-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                    <div className="ml-6 space-y-2">
                      {item.dropdown.slice(0, 4).map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                      {item.dropdown.length > 4 && (
                        <Link
                          to={item.href}
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          View All →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar />
    </>
  );
};

export default ImprovedNavigation;