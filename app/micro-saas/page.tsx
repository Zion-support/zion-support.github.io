'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  TrendingUp,
  Target,
  FileText,
  BarChart,
  Eye,
  Mic,
  Database,
  Globe,
  Phone,
  Mail,
  MapPin,
  Activity,
  Lock,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Brain,
  Heart,
  DollarSign,
  PieChart,
  Settings,
  Calendar,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Package,
  Headphones,
  Camera,
  Music,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Home,
  Car,
  Plane,
  Ship,
  Truck,
  Utensils,
  Coffee,
  Shirt,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  Palette,
  Lightbulb,
  Rocket,
  Award,
  Gift,
  Heart as HeartIcon,
  ThumbsUp,
  Share2,
  Download,
  Upload,
  Edit,
  Trash2,
  Copy,
  Save,
  Search,
  Filter,
  Sort,
  Grid,
  List,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Settings as SettingsIcon,
  User,
  UserPlus,
  Users as UsersIcon,
  UserCheck,
  UserX,
  LogIn,
  LogOut,
  Key,
  Lock as LockIcon,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Wifi as WifiIcon,
  WifiOff,
  Battery,
  BatteryCharging,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Wifi as WifiSignal,
  WifiOff as WifiOffSignal,
  Bluetooth,
  BluetoothOff,
  Radio,
  RadioOff,
  Tv,
  TvOff,
  Monitor as MonitorIcon,
  MonitorOff,
  Smartphone as SmartphoneIcon,
  SmartphoneOff,
  Tablet,
  TabletOff,
  Laptop,
  LaptopOff,
  Desktop,
  DesktopOff,
  Server as ServerIcon,
  ServerOff,
  Database as DatabaseIcon,
  DatabaseOff,
  HardDrive,
  HardDriveOff,
  Cpu as CpuIcon,
  CpuOff,
  MemoryStick,
  MemoryStickOff,
  Disc,
  DiscOff,
  Cd,
  CdOff,
  Dvd,
  DvdOff,
  Cassette,
  CassetteOff,
  Vinyl,
  VinylOff,
  Headphones as HeadphonesIcon,
  HeadphonesOff,
  Mic as MicIcon,
  MicOff,
  Speaker,
  SpeakerOff,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Repeat1,
  Shuffle,
  ShuffleOff,
  FastForward,
  Rewind,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Rotate3D,
  Rotate3DOff,
  FlipHorizontal,
  FlipVertical,
  FlipHorizontal2,
  FlipVertical2,
  RotateLeft,
  RotateRight,
  RotateLeft2,
  RotateRight2,
  RotateLeft3,
  RotateRight3,
  RotateLeft4,
  RotateRight4,
  RotateLeft5,
  RotateRight5,
  RotateLeft6,
  RotateRight6,
  RotateLeft7,
  RotateRight7,
  RotateLeft8,
  RotateRight8,
  RotateLeft9,
  RotateRight9,
  RotateLeft10,
  RotateRight10,
  RotateLeft11,
  RotateRight11,
  RotateLeft12,
  RotateRight12,
  RotateLeft13,
  RotateRight13,
  RotateLeft14,
  RotateRight14,
  RotateLeft15,
  RotateRight15,
  RotateLeft16,
  RotateRight16,
  RotateLeft17,
  RotateRight17,
  RotateLeft18,
  RotateRight18,
  RotateLeft19,
  RotateRight19,
  RotateLeft20,
  RotateRight20,
  RotateLeft21,
  RotateRight21,
  RotateLeft22,
  RotateRight22,
  RotateLeft23,
  RotateRight23,
  RotateLeft24,
  RotateRight24,
  RotateLeft25,
  RotateRight25,
  RotateLeft26,
  RotateRight26,
  RotateLeft27,
  RotateRight27,
  RotateLeft28,
  RotateRight28,
  RotateLeft29,
  RotateRight29,
  RotateLeft30,
  RotateRight30,
  RotateLeft31,
  RotateRight31,
  RotateLeft32,
  RotateRight32,
  RotateLeft33,
  RotateRight33,
  RotateLeft34,
  RotateRight34,
  RotateLeft35,
  RotateRight35,
  RotateLeft36,
  RotateRight36,
  RotateLeft37,
  RotateRight37,
  RotateLeft38,
  RotateRight38,
  RotateLeft39,
  RotateRight39,
  RotateLeft40,
  RotateRight40,
  RotateLeft41,
  RotateRight41,
  RotateLeft42,
  RotateRight42,
  RotateLeft43,
  RotateRight43,
  RotateLeft44,
  RotateRight44,
  RotateLeft45,
  RotateRight45,
  RotateLeft46,
  RotateRight46,
  RotateLeft47,
  RotateRight47,
  RotateLeft48,
  RotateRight48,
  RotateLeft49,
  RotateRight49,
  RotateLeft50,
  RotateRight50,
  RotateLeft51,
  RotateRight51,
  RotateLeft52,
  RotateRight52,
  RotateLeft53,
  RotateRight53,
  RotateLeft54,
  RotateRight54,
  RotateLeft55,
  RotateRight55,
  RotateLeft56,
  RotateRight56,
  RotateLeft57,
  RotateRight57,
  RotateLeft58,
  RotateRight58,
  RotateLeft59,
  RotateRight59,
  RotateLeft60,
  RotateRight60,
  RotateLeft61,
  RotateRight61,
  RotateLeft62,
  RotateRight62,
  RotateLeft63,
  RotateRight63,
  RotateLeft64,
  RotateRight64,
  RotateLeft65,
  RotateRight65,
  RotateLeft66,
  RotateRight66,
  RotateLeft67,
  RotateRight67,
  RotateLeft68,
  RotateRight68,
  RotateLeft69,
  RotateRight69,
  RotateLeft70,
  RotateRight70,
  RotateLeft71,
  RotateRight71,
  RotateLeft72,
  RotateRight72,
  RotateLeft73,
  RotateRight73,
  RotateLeft74,
  RotateRight74,
  RotateLeft75,
  RotateRight75,
  RotateLeft76,
  RotateRight76,
  RotateLeft77,
  RotateRight77,
  RotateLeft78,
  RotateRight78,
  RotateLeft79,
  RotateRight79,
  RotateLeft80,
  RotateRight80,
  RotateLeft81,
  RotateRight81,
  RotateLeft82,
  RotateRight82,
  RotateLeft83,
  RotateRight83,
  RotateLeft84,
  RotateRight84,
  RotateLeft85,
  RotateRight85,
  RotateLeft86,
  RotateRight86,
  RotateLeft87,
  RotateRight87,
  RotateLeft88,
  RotateRight88,
  RotateLeft89,
  RotateRight89,
  RotateLeft90,
  RotateRight90,
  RotateLeft91,
  RotateRight91,
  RotateLeft92,
  RotateRight92,
  RotateLeft93,
  RotateRight93,
  RotateLeft94,
  RotateRight94,
  RotateLeft95,
  RotateRight95,
  RotateLeft96,
  RotateRight96,
  RotateLeft97,
  RotateRight97,
  RotateLeft98,
  RotateRight98,
  RotateLeft99,
  RotateRight99,
  RotateLeft100,
  RotateRight100
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights, real-time dashboards, and predictive analytics',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 Powered AI',
        'Multi-channel support',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      category: 'Customer Support',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'AI content generation',
        'Image and video creation',
        'Social media automation',
        'SEO optimization',
        'Brand voice customization',
        'Multi-platform publishing'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content Creation',
      popular: true,
      icon: FileText
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with lead scoring, automated follow-ups, and predictive analytics',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Sales forecasting',
        'Customer segmentation',
        'Integration capabilities'
      ],
      benefits: [
        'Increase sales by 40%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization'
      ],
      category: 'CRM',
      popular: true,
      icon: Users
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI optimization, personalization, and advanced analytics',
      price: '$179/month',
      marketPrice: '$300-800/month',
      features: [
        'AI-powered email optimization',
        'Advanced personalization',
        'A/B testing automation',
        'Behavioral triggers',
        'Advanced analytics',
        'Integration with major platforms'
      ],
      benefits: [
        'Increase open rates by 60%',
        'Improve click-through rates',
        'Automated personalization',
        'Better ROI tracking'
      ],
      category: 'Email Marketing',
      popular: true,
      icon: Mail
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent task allocation and progress tracking',
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: [
        'AI task allocation',
        'Progress tracking',
        'Resource optimization',
        'Risk assessment',
        'Team collaboration',
        'Integration with popular tools'
      ],
      benefits: [
        'Improve project success by 50%',
        'Better resource utilization',
        'Reduced project delays',
        'Enhanced team collaboration'
      ],
      category: 'Project Management',
      popular: false,
      icon: Calendar
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering',
      price: '$159/month',
      marketPrice: '$300-900/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location management',
        'Barcode scanning',
        'Supplier integration',
        'Cost optimization'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Prevent stockouts',
        'Optimize inventory levels',
        'Improve cash flow'
      ],
      category: 'Inventory Management',
      popular: true,
      icon: Package
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI invoice generation',
        'Automated recurring billing',
        'Payment tracking',
        'Multi-currency support',
        'Client portal',
        'Tax calculation'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices'
      ],
      category: 'Billing',
      popular: true,
      icon: DollarSign
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content creation',
        'Multi-platform scheduling',
        'Performance analytics',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis'
      ],
      benefits: [
        'Increase engagement by 70%',
        'Save time on content creation',
        'Better posting times',
        'Improved social presence'
      ],
      category: 'Social Media',
      popular: true,
      icon: Globe
    },
    {
      id: 'zion-ai-video-editor',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automatic editing, effects, and optimization',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'AI automatic editing',
        'Smart effects and transitions',
        'Voice-to-text conversion',
        'Auto-captioning',
        'Multi-format export',
        'Cloud-based processing'
      ],
      benefits: [
        'Reduce editing time by 80%',
        'Professional quality output',
        'No technical skills required',
        'Faster content production'
      ],
      category: 'Video Editing',
      popular: false,
      icon: Camera
    },
    {
      id: 'zion-ai-translator-pro',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with 100+ languages and context-aware translations',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Document translation',
        'Real-time translation',
        'Voice translation',
        'API integration'
      ],
      benefits: [
        'Accurate translations',
        'Support for 100+ languages',
        'Real-time processing',
        'Easy integration'
      ],
      category: 'Translation',
      popular: true,
      icon: Globe
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, suggestions, and quality metrics',
      price: '$179/month',
      marketPrice: '$350-1000/month',
      features: [
        'Automated code analysis',
        'Bug detection',
        'Performance optimization',
        'Security scanning',
        'Code quality metrics',
        'Integration with Git'
      ],
      benefits: [
        'Improve code quality',
        'Reduce bugs by 60%',
        'Faster code reviews',
        'Better team collaboration'
      ],
      category: 'Development',
      popular: true,
      icon: Code
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Customer Support', name: 'Customer Support', count: services.filter(s => s.category === 'Customer Support').length },
    { id: 'Content Creation', name: 'Content Creation', count: services.filter(s => s.category === 'Content Creation').length },
    { id: 'CRM', name: 'CRM', count: services.filter(s => s.category === 'CRM').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: services.filter(s => s.category === 'Email Marketing').length },
    { id: 'Project Management', name: 'Project Management', count: services.filter(s => s.category === 'Project Management').length },
    { id: 'Inventory Management', name: 'Inventory Management', count: services.filter(s => s.category === 'Inventory Management').length },
    { id: 'Billing', name: 'Billing', count: services.filter(s => s.category === 'Billing').length },
    { id: 'Social Media', name: 'Social Media', count: services.filter(s => s.category === 'Social Media').length },
    { id: 'Video Editing', name: 'Video Editing', count: services.filter(s => s.category === 'Video Editing').length },
    { id: 'Translation', name: 'Translation', count: services.filter(s => s.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Advanced Business Tools</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including analytics, CRM, content creation, email marketing, and project management. Transform your business with powerful AI-driven tools." />
        <meta name="keywords" content="micro saas, business tools, analytics platform, CRM software, content creation, email marketing, project management, AI tools" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 py-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
                🚀 Trusted by 500+ Businesses
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, affordable business tools powered by AI. From analytics to content creation, 
              we provide comprehensive micro SAAS solutions that help businesses grow and succeed.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Affordable Pricing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>AI-Powered Features</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Easy Integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
              >
                Get Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{service.category}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-slate-800/50 to-green-900/50 rounded-3xl p-12 border border-green-500/20 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 500+ businesses that have already transformed their operations with our micro SAAS solutions. 
                Get started with a free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free trial • ✓ No credit card required • ✓ 24/7 support • ✓ Easy setup</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;