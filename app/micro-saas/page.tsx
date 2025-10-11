'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  BarChart, MessageSquare, Shield, Cloud, FileText, Users, Target, Calendar,
  Mail, Package, DollarSign, Settings, Globe, Eye, Code, CheckCircle, ArrowRight,
  Star, Zap, Clock, Heart, TrendingUp, Cpu, Link, Server, MessageCircle, Brain,
  Phone, MapPin, Search, Filter, Award, Rocket, Crown, Wrench, Hammer, Paintbrush,
  Scissors, BookOpen, Calculator, Briefcase, ShoppingCart, CreditCard, Gamepad2,
  Music, Video, Camera, Palette, Bot, Truck, Box, Archive, Folder, File, Image,
  Film, Headphones, Mic, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack,
  SkipForward, Repeat, Shuffle, Radio, Tv, Tablet, Watch, Mouse, Keyboard, Webcam,
  Wifi, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, Signal, Send, Reply, Forward,
  Share, Copy, Paste, Cut, Save, Download, Upload, Refresh, RotateCcw, Maximize,
  Minimize, X, Plus, Minus, Activity, PieChart, TrendingDown, ExternalLink,
  ChevronRight, Home, Stethoscope, GraduationCap, Car, Plane, Ship, Train,
  Factory, Music as MusicIcon, Video as VideoIcon, Camera as CameraIcon,
  Palette as PaletteIcon, Bot as BotIcon, Package as PackageIcon, Truck as TruckIcon,
  Box as BoxIcon, Archive as ArchiveIcon, Folder as FolderIcon, File as FileIcon,
  Image as ImageIcon, Film as FilmIcon, Headphones as HeadphoneIcon, Mic as Microphone,
  Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon,
  Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon,
  Radio as RadioIcon, Tv as TvIcon, Monitor, Laptop, Smartphone as PhoneIcon,
  Tablet as TabletIcon, Watch as WatchIcon, Headphones as HeadsetIcon,
  Gamepad2 as GamepadIcon, Joystick, Mouse as MouseIcon, Keyboard as KeyboardIcon,
  Webcam as WebcamIcon, Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon,
  Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon,
  Signal as SignalIcon, SignalZero, SignalLow, SignalMedium, SignalHigh, SignalFull,
  Wifi as WifiIcon, WifiOff as WifiOffIcon
} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const microSaasProducts = [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Multi-tenant Architecture'
      ],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting'
      ],
      icon: BarChart,
      category: 'Analytics',
      popular: true,
      users: 'Up to 25 users',
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      id: 'zion-chat-ai',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: [
        'GPT-4 Powered AI',
        'Multi-channel Support',
        'Advanced Sentiment Analysis',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Multi-language Support'
      ],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true,
      users: 'Up to 25 users',
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring and threat detection with automated incident response.',
      features: [
        'Real-time Threat Detection',
        'Automated Incident Response',
        'Compliance Monitoring',
        'Vulnerability Scanning',
        'Security Analytics',
        '24/7 SOC Support'
      ],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: [
        'Proactive threat protection',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team'
      ],
      icon: Shield,
      category: 'Security',
      popular: true,
      users: 'Up to 50 users',
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.',
      features: [
        'AI Content Generation',
        'Multi-platform Publishing',
        'SEO Optimization',
        'Brand Voice Training',
        'Content Calendar',
        'Performance Analytics'
      ],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      icon: FileText,
      category: 'Content',
      popular: false,
      users: 'Up to 10 users',
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      id: 'zion-crm-intelligence',
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflows.',
      features: [
        'AI Lead Scoring',
        'Predictive Analytics',
        'Automated Workflows',
        'Customer Segmentation',
        'Sales Forecasting',
        'Integration Hub'
      ],
      price: '$129/month',
      marketPrice: '$200-600/month',
      benefits: [
        'Increase sales by 35%',
        'Better lead qualification',
        'Automated follow-ups',
        'Data-driven insights'
      ],
      icon: Users,
      category: 'CRM',
      popular: false,
      users: 'Up to 15 users',
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      id: 'zion-lead-magnet',
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: [
        'AI-powered Lead Scoring',
        'Multi-channel Lead Capture',
        'Automated Lead Nurturing',
        'CRM Integration',
        'Advanced Analytics',
        'A/B Testing'
      ],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization'
      ],
      icon: Target,
      category: 'Marketing',
      popular: true,
      users: 'Up to 20 users',
      link: 'https://ziontechgroup.com/zion-lead-magnet'
    },
    {
      id: 'zion-project-master',
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and automated reporting.',
      features: [
        'AI Resource Allocation',
        'Predictive Timeline Management',
        'Risk Assessment',
        'Team Collaboration',
        'Progress Tracking',
        'Automated Reporting'
      ],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: [
        'Improved project success rate',
        'Better resource utilization',
        'Reduced project delays',
        'Automated reporting'
      ],
      icon: Calendar,
      category: 'Project Management',
      popular: false,
      users: 'Up to 30 users',
      link: 'https://ziontechgroup.com/zion-project-master'
    },
    {
      id: 'zion-email-automation',
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automated campaigns.',
      features: [
        'AI Personalization',
        'Automated Campaigns',
        'A/B Testing',
        'Advanced Segmentation',
        'Deliverability Optimization',
        'Performance Analytics'
      ],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Increase open rates by 40%',
        'Automated campaigns',
        'Better personalization',
        'ROI optimization'
      ],
      icon: Mail,
      category: 'Marketing',
      popular: false,
      users: 'Up to 5,000 contacts',
      link: 'https://ziontechgroup.com/zion-email-automation'
    },
    {
      id: 'zion-invoice-genius',
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: [
        'AI-powered Invoice Generation',
        'Automated Recurring Billing',
        'Multi-currency Support',
        'Payment Tracking',
        'Tax Calculation',
        'Client Portal'
      ],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices'
      ],
      icon: DollarSign,
      category: 'Finance',
      popular: true,
      users: 'Up to 100 invoices/month',
      link: 'https://ziontechgroup.com/zion-invoice-genius'
    },
    {
      id: 'zion-workflow-automation',
      title: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and monitoring.',
      features: [
        'Process Mining',
        'Workflow Optimization',
        'Task Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Custom Integrations'
      ],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      icon: Settings,
      category: 'Automation',
      popular: false,
      users: 'Up to 20 workflows',
      link: 'https://ziontechgroup.com/zion-workflow-automation'
    },
    {
      id: 'zion-social-scheduler',
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and automated posting.',
      features: [
        'AI Content Optimization',
        'Multi-platform Scheduling',
        'Hashtag Research',
        'Engagement Analytics',
        'Competitor Analysis',
        'Content Calendar'
      ],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: [
        'Increase engagement by 60%',
        'Automated posting',
        'Better content strategy',
        'Time savings'
      ],
      icon: Globe,
      category: 'Social Media',
      popular: false,
      users: 'Up to 5 accounts',
      link: 'https://ziontechgroup.com/zion-social-scheduler'
    },
    {
      id: 'zion-ai-video-editor',
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and optimization.',
      features: [
        'AI Auto-editing',
        'Smart Cut Detection',
        'Automated Subtitles',
        'Color Correction',
        'Audio Enhancement',
        'Multi-format Export'
      ],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Save 70% editing time',
        'Professional quality',
        'Automated features',
        'Easy to use'
      ],
      icon: Video,
      category: 'Video',
      popular: false,
      users: 'Up to 3 users',
      link: 'https://ziontechgroup.com/zion-ai-video-editor'
    },
    {
      id: 'zion-ai-translator-pro',
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with context-aware translations and real-time language processing.',
      features: [
        '100+ Languages',
        'Context-aware Translation',
        'Real-time Processing',
        'Document Translation',
        'Voice Translation',
        'API Integration'
      ],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Accurate translations',
        'Real-time processing',
        'Multiple formats',
        'API integration'
      ],
      icon: Globe,
      category: 'Translation',
      popular: false,
      users: 'Up to 1,000 translations/month',
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      id: 'zion-ai-code-reviewer',
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection and security analysis.',
      features: [
        'Automated Code Review',
        'Security Vulnerability Detection',
        'Performance Analysis',
        'Code Quality Metrics',
        'Best Practice Suggestions',
        'Team Collaboration'
      ],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: [
        'Reduce bugs by 50%',
        'Improve code quality',
        'Security enhancement',
        'Team learning'
      ],
      icon: Code,
      category: 'Development',
      popular: false,
      users: 'Up to 10 developers',
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    },
    {
      id: 'zion-customer-insights-pro',
      title: 'Zion Customer Insights Pro',
      description: 'AI-powered customer analytics platform with sentiment analysis and behavioral insights.',
      features: [
        'Sentiment Analysis',
        'Behavioral Tracking',
        'Customer Segmentation',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Real-time Dashboards'
      ],
      price: '$119/month',
      marketPrice: '$250-600/month',
      benefits: [
        'Better customer understanding',
        'Churn prevention',
        'Personalized experiences',
        'Data-driven decisions'
      ],
      icon: Users,
      category: 'Analytics',
      popular: false,
      users: 'Up to 20 users',
      link: 'https://ziontechgroup.com/zion-customer-insights-pro'
    },
    {
      id: 'zion-ai-email-assistant',
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered sorting, drafting, and response suggestions.',
      features: [
        'Smart Email Sorting',
        'AI Draft Suggestions',
        'Priority Classification',
        'Auto-responses',
        'Email Analytics',
        'Calendar Integration'
      ],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: [
        'Save 2 hours daily',
        'Better email organization',
        'Faster responses',
        'Reduced email stress'
      ],
      icon: Mail,
      category: 'Productivity',
      popular: false,
      users: 'Up to 5 users',
      link: 'https://ziontechgroup.com/zion-ai-email-assistant'
    },
    {
      id: 'zion-ai-meeting-assistant',
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated transcription, action items, and follow-ups.',
      features: [
        'Automated Transcription',
        'Action Item Extraction',
        'Meeting Summaries',
        'Calendar Integration',
        'Follow-up Automation',
        'Team Collaboration'
      ],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: [
        'Better meeting efficiency',
        'Automated follow-ups',
        'Improved accountability',
        'Time savings'
      ],
      icon: Calendar,
      category: 'Productivity',
      popular: false,
      users: 'Up to 15 users',
      link: 'https://ziontechgroup.com/zion-ai-meeting-assistant'
    },
    {
      id: 'zion-ai-seo-optimizer',
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research and content optimization.',
      features: [
        'Keyword Research',
        'Content Optimization',
        'Competitor Analysis',
        'Rank Tracking',
        'Technical SEO Audit',
        'Performance Monitoring'
      ],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Increase organic traffic',
        'Better search rankings',
        'Automated optimization',
        'Competitive advantage'
      ],
      icon: Target,
      category: 'SEO',
      popular: false,
      users: 'Up to 3 websites',
      link: 'https://ziontechgroup.com/zion-ai-seo-optimizer'
    },
    {
      id: 'zion-ai-data-cleaner',
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated data quality management.',
      features: [
        'Automated Data Cleaning',
        'Duplicate Detection',
        'Data Validation',
        'Format Standardization',
        'Quality Scoring',
        'Error Reporting'
      ],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Improve data quality',
        'Reduce errors',
        'Automated cleaning',
        'Better analytics'
      ],
      icon: Database,
      category: 'Data',
      popular: false,
      users: 'Up to 10,000 records/month',
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner'
    },
    {
      id: 'zion-ai-contract-analyzer',
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment with automated legal document processing.',
      features: [
        'Contract Analysis',
        'Risk Assessment',
        'Clause Extraction',
        'Compliance Checking',
        'Automated Summaries',
        'Legal Database Integration'
      ],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: [
        'Faster contract review',
        'Risk reduction',
        'Compliance assurance',
        'Time savings'
      ],
      icon: FileText,
      category: 'Legal',
      popular: false,
      users: 'Up to 50 contracts/month',
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: microSaasProducts.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasProducts.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { id: 'Content', name: 'Content', count: microSaasProducts.filter(p => p.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: microSaasProducts.filter(p => p.category === 'CRM').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasProducts.filter(p => p.category === 'Project Management').length },
    { id: 'Finance', name: 'Finance', count: microSaasProducts.filter(p => p.category === 'Finance').length },
    { id: 'Automation', name: 'Automation', count: microSaasProducts.filter(p => p.category === 'Automation').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasProducts.filter(p => p.category === 'Social Media').length },
    { id: 'Video', name: 'Video', count: microSaasProducts.filter(p => p.category === 'Video').length },
    { id: 'Translation', name: 'Translation', count: microSaasProducts.filter(p => p.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasProducts.filter(p => p.category === 'Development').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
    { id: 'SEO', name: 'SEO', count: microSaasProducts.filter(p => p.category === 'SEO').length },
    { id: 'Data', name: 'Data', count: microSaasProducts.filter(p => p.category === 'Data').length },
    { id: 'Legal', name: 'Legal', count: microSaasProducts.filter(p => p.category === 'Legal').length }
  ]

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use business tools with AI and automation. Launch your software-as-a-service business quickly with our pre-built micro-SaaS platform.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border ${
                product.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-white/10'
              }`}>
                {product.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-medium">Popular</span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{product.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                  </div>
                  <p className="text-sm text-green-400">Save up to 50% vs market rate</p>
                  <p className="text-sm text-gray-400 mt-1">{product.users}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center text-green-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    <span className="bg-gray-700 px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    Try Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS platform provides all the essential components for a successful SaaS business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300">Get your micro SaaS solution up and running in days, not months.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable Architecture</h3>
              <p className="text-gray-300">Built to handle growth from startup to enterprise scale.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300">Leverage cutting-edge AI to provide intelligent features and automation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure & Compliant</h3>
              <p className="text-gray-300">Enterprise-grade security and compliance built-in from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro-SaaS platform and launch your software business in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage
