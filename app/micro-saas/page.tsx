'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Globe, 
  Smartphone, 
  Laptop, 
  Database, 
  Lock, 
  Settings, 
  TrendingUp, 
  Target, 
  Rocket, 
  Award, 
  Clock, 
  DollarSign, 
  Server, 
  Network, 
  HardDrive, 
  Cpu, 
  Monitor, 
  Wifi, 
  Headphones, 
  Printer, 
  Camera, 
  Wrench, 
  Cog, 
  Activity, 
  MessageCircle, 
  Mic, 
  Phone,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Edit,
  Trash2,
  Plus,
  Minus,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Heart,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  Copy,
  Scissors,
  Save,
  Folder,
  File,
  FolderOpen,
  Archive,
  Inbox,
  Send,
  Reply,
  Forward,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  X,
  Check,
  XCircle,
  AlertCircle,
  CheckCircle2,
  Clock3,
  Timer,
  Calendar as CalendarIcon,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users2,
  UserCircle,
  UserSquare,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin,
  Home,
  Building,
  Building2,
  Store,
  ShoppingCart,
  ShoppingBag,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Receipt,
  Package,
  Truck,
  Plane,
  Car,
  Bike,
  Bus,
  Train,
  Ship,
  Anchor,
  Compass,
  Map,
  Route,
  Flag as FlagIcon,
  Globe as GlobeIcon,
  Wifi as WifiIcon,
  Signal,
  Battery,
  BatteryCharging,
  Power,
  Plug,
  Zap as ZapIcon,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Snowflake,
  Sunrise,
  Sunset,
  Star as StarIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  Sparkles,
  Flame,
  Snowflake as SnowflakeIcon,
  Droplets as DropletsIcon,
  Wind as WindIcon,
  Thermometer as ThermometerIcon,
  Umbrella as UmbrellaIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  Cloud as CloudIcon2,
  Sun as SunIcon2,
  Moon as MoonIcon2,
  Star as StarIcon2,
  Sparkles as SparklesIcon,
  Flame as FlameIcon,
  Snowflake as SnowflakeIcon2,
  Droplets as DropletsIcon2,
  Wind as WindIcon2,
  Thermometer as ThermometerIcon2,
  Umbrella as UmbrellaIcon2,
  CloudRain as CloudRainIcon2,
  CloudSnow as CloudSnowIcon2,
  CloudLightning as CloudLightningIcon2,
  Cloud as CloudIcon3,
  Sun as SunIcon3,
  Moon as MoonIcon3,
  Star as StarIcon3,
  Sparkles as SparklesIcon3,
  Flame as FlameIcon3,
  Snowflake as SnowflakeIcon3,
  Droplets as DropletsIcon3,
  Wind as WindIcon3,
  Thermometer as ThermometerIcon3,
  Umbrella as UmbrellaIcon3,
  CloudRain as CloudRainIcon3,
  CloudSnow as CloudSnowIcon3,
  CloudLightning as CloudLightningIcon3
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasServices = [
    // AI-Powered Productivity Tools
    {
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered writing tool with grammar checking, style suggestions, and content generation.',
      icon: <FileText className="w-8 h-8" />,
      features: [
        'AI-powered grammar checking',
        'Style and tone suggestions',
        'Content generation and rewriting',
        'Plagiarism detection',
        'Multi-language support',
        'Real-time collaboration'
      ],
      price: '$29/month',
      marketPrice: '$49-99/month',
      category: 'Productivity',
      benefits: [
        'Improve writing quality by 80%',
        'Save 5+ hours per week',
        'Reduce editing time by 60%',
        'Professional-grade content'
      ],
      technologies: ['OpenAI GPT-4', 'NLP', 'Machine Learning', 'Real-time Processing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Image Generator Studio',
      description: 'Professional AI image generation tool with advanced editing capabilities and style transfer.',
      icon: <Image className="w-8 h-8" />,
      features: [
        'AI image generation from text',
        'Style transfer and filters',
        'Background removal and editing',
        'High-resolution output',
        'Batch processing',
        'API integration'
      ],
      price: '$39/month',
      marketPrice: '$79-149/month',
      category: 'Creative',
      benefits: [
        'Create professional images instantly',
        'Reduce design costs by 70%',
        'Unlimited image generation',
        'Commercial usage rights'
      ],
      technologies: ['DALL-E', 'Stable Diffusion', 'Computer Vision', 'Neural Networks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Video Creator Pro',
      description: 'Intelligent video creation tool with automated editing, voice synthesis, and scene generation.',
      icon: <Video className="w-8 h-8" />,
      features: [
        'AI video generation from scripts',
        'Automated editing and transitions',
        'Voice synthesis and dubbing',
        'Background music generation',
        'Subtitle generation',
        'Multi-format export'
      ],
      price: '$59/month',
      marketPrice: '$99-199/month',
      category: 'Video',
      benefits: [
        'Create professional videos in minutes',
        'Reduce production costs by 80%',
        'Automated editing workflows',
        'High-quality output'
      ],
      technologies: ['Video AI', 'Speech Synthesis', 'Computer Vision', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Music Composer',
      description: 'Advanced AI music generation tool with style transfer, mood analysis, and custom composition.',
      icon: <Music className="w-8 h-8" />,
      features: [
        'AI music composition',
        'Style and genre transfer',
        'Mood-based generation',
        'Instrument synthesis',
        'Lyrics generation',
        'MIDI export'
      ],
      price: '$34/month',
      marketPrice: '$69-129/month',
      category: 'Music',
      benefits: [
        'Create original music instantly',
        'Reduce composition time by 90%',
        'Professional-quality output',
        'Commercial usage rights'
      ],
      technologies: ['MuseNet', 'Jukebox', 'Neural Audio', 'MIDI Processing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Business Intelligence & Analytics
    {
      title: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics platform with predictive insights and automated reporting.',
      icon: <BarChart className="w-8 h-8" />,
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards',
        'Data integration',
        'Mobile app access'
      ],
      price: '$49/month',
      marketPrice: '$99-199/month',
      category: 'Analytics',
      benefits: [
        'Make data-driven decisions',
        'Reduce reporting time by 75%',
        'Predict future trends',
        'Improve business performance'
      ],
      technologies: ['Machine Learning', 'Data Visualization', 'APIs', 'Cloud Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Insights',
      description: 'Advanced customer behavior analysis with sentiment tracking and engagement optimization.',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Customer behavior analysis',
        'Sentiment tracking',
        'Engagement optimization',
        'Churn prediction',
        'Personalization engine',
        'Real-time alerts'
      ],
      price: '$44/month',
      marketPrice: '$89-179/month',
      category: 'Customer Analytics',
      benefits: [
        'Increase customer retention by 40%',
        'Improve engagement rates',
        'Predict customer needs',
        'Optimize marketing campaigns'
      ],
      technologies: ['NLP', 'Machine Learning', 'Sentiment Analysis', 'Predictive Modeling'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Sales Predictor',
      description: 'Intelligent sales forecasting with lead scoring and revenue optimization.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        'Sales forecasting',
        'Lead scoring',
        'Revenue optimization',
        'Pipeline analysis',
        'Performance tracking',
        'ROI calculation'
      ],
      price: '$39/month',
      marketPrice: '$79-159/month',
      category: 'Sales',
      benefits: [
        'Improve sales accuracy by 60%',
        'Increase conversion rates',
        'Optimize sales processes',
        'Maximize revenue potential'
      ],
      technologies: ['Predictive Analytics', 'Machine Learning', 'CRM Integration', 'Data Mining'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Marketing & Social Media
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media management with content creation, scheduling, and engagement tracking.',
      icon: <Share className="w-8 h-8" />,
      features: [
        'Automated content creation',
        'Post scheduling and optimization',
        'Engagement tracking',
        'Hashtag optimization',
        'Competitor analysis',
        'Performance analytics'
      ],
      price: '$34/month',
      marketPrice: '$69-139/month',
      category: 'Social Media',
      benefits: [
        'Save 10+ hours per week',
        'Increase engagement by 50%',
        'Automated posting',
        'Data-driven optimization'
      ],
      technologies: ['Social Media APIs', 'Content Generation', 'Analytics', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Marketing Pro',
      description: 'Intelligent email marketing platform with personalization, automation, and performance optimization.',
      icon: <Mail className="w-8 h-8" />,
      features: [
        'AI-powered personalization',
        'Automated email sequences',
        'A/B testing optimization',
        'Subject line generation',
        'Send time optimization',
        'Performance analytics'
      ],
      price: '$29/month',
      marketPrice: '$59-119/month',
      category: 'Email Marketing',
      benefits: [
        'Increase open rates by 40%',
        'Improve click-through rates',
        'Automated campaigns',
        'Personalized content'
      ],
      technologies: ['Email APIs', 'Personalization Engine', 'A/B Testing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Advanced SEO optimization tool with keyword research, content analysis, and ranking tracking.',
      icon: <Search className="w-8 h-8" />,
      features: [
        'Keyword research and analysis',
        'Content optimization suggestions',
        'Ranking tracking',
        'Competitor analysis',
        'Technical SEO audit',
        'Performance monitoring'
      ],
      price: '$39/month',
      marketPrice: '$79-159/month',
      category: 'SEO',
      benefits: [
        'Improve search rankings',
        'Increase organic traffic',
        'Optimize content strategy',
        'Track performance metrics'
      ],
      technologies: ['SEO APIs', 'Keyword Analysis', 'Content Analysis', 'Ranking Tracking'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // E-commerce & Sales
    {
      title: 'AI E-commerce Assistant',
      description: 'Intelligent e-commerce platform with product recommendations, pricing optimization, and inventory management.',
      icon: <ShoppingCart className="w-8 h-8" />,
      features: [
        'Product recommendation engine',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer segmentation',
        'Abandoned cart recovery',
        'Sales analytics'
      ],
      price: '$49/month',
      marketPrice: '$99-199/month',
      category: 'E-commerce',
      benefits: [
        'Increase sales by 35%',
        'Reduce cart abandonment',
        'Optimize pricing strategy',
        'Improve customer experience'
      ],
      technologies: ['Recommendation Engine', 'Pricing Algorithm', 'Inventory Management', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Inventory Optimizer',
      description: 'Smart inventory management with demand forecasting, reorder optimization, and waste reduction.',
      icon: <Package className="w-8 h-8" />,
      features: [
        'Demand forecasting',
        'Reorder point optimization',
        'Waste reduction analysis',
        'Supplier management',
        'Cost optimization',
        'Real-time tracking'
      ],
      price: '$44/month',
      marketPrice: '$89-179/month',
      category: 'Inventory',
      benefits: [
        'Reduce inventory costs by 25%',
        'Minimize stockouts',
        'Optimize reorder timing',
        'Improve cash flow'
      ],
      technologies: ['Demand Forecasting', 'Optimization Algorithms', 'Supply Chain Analytics', 'IoT Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Development & Technical
    {
      title: 'AI Code Assistant',
      description: 'Intelligent coding assistant with code generation, debugging, and optimization suggestions.',
      icon: <Code className="w-8 h-8" />,
      features: [
        'AI code generation',
        'Bug detection and fixing',
        'Code optimization',
        'Documentation generation',
        'Multi-language support',
        'IDE integration'
      ],
      price: '$39/month',
      marketPrice: '$79-159/month',
      category: 'Development',
      benefits: [
        'Accelerate development by 50%',
        'Reduce coding errors',
        'Improve code quality',
        'Automated documentation'
      ],
      technologies: ['Code Generation AI', 'Static Analysis', 'IDE Integration', 'Multi-language Support'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI API Manager',
      description: 'Intelligent API management platform with monitoring, optimization, and security features.',
      icon: <Network className="w-8 h-8" />,
      features: [
        'API monitoring and analytics',
        'Performance optimization',
        'Security scanning',
        'Rate limiting',
        'Documentation generation',
        'Testing automation'
      ],
      price: '$34/month',
      marketPrice: '$69-139/month',
      category: 'API Management',
      benefits: [
        'Improve API performance',
        'Enhance security',
        'Reduce maintenance time',
        'Automated testing'
      ],
      technologies: ['API Gateway', 'Monitoring Tools', 'Security Scanning', 'Performance Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Database Optimizer',
      description: 'Smart database optimization with query analysis, performance tuning, and automated maintenance.',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Query performance analysis',
        'Index optimization',
        'Automated maintenance',
        'Performance monitoring',
        'Capacity planning',
        'Backup optimization'
      ],
      price: '$44/month',
      marketPrice: '$89-179/month',
      category: 'Database',
      benefits: [
        'Improve query performance by 60%',
        'Reduce maintenance time',
        'Optimize storage usage',
        'Prevent performance issues'
      ],
      technologies: ['Query Analysis', 'Performance Tuning', 'Automated Maintenance', 'Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Communication & Collaboration
    {
      title: 'AI Meeting Assistant',
      description: 'Intelligent meeting management with transcription, action items, and follow-up automation.',
      icon: <MessageCircle className="w-8 h-8" />,
      features: [
        'Real-time transcription',
        'Action item extraction',
        'Meeting summaries',
        'Follow-up automation',
        'Calendar integration',
        'Team collaboration'
      ],
      price: '$29/month',
      marketPrice: '$59-119/month',
      category: 'Communication',
      benefits: [
        'Save 2+ hours per meeting',
        'Improve meeting productivity',
        'Automated follow-ups',
        'Better team collaboration'
      ],
      technologies: ['Speech Recognition', 'NLP', 'Calendar APIs', 'Collaboration Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Project Manager',
      description: 'Smart project management with task automation, resource optimization, and progress tracking.',
      icon: <Target className="w-8 h-8" />,
      features: [
        'Task automation',
        'Resource optimization',
        'Progress tracking',
        'Risk assessment',
        'Timeline optimization',
        'Team coordination'
      ],
      price: '$39/month',
      marketPrice: '$79-159/month',
      category: 'Project Management',
      benefits: [
        'Improve project success rate',
        'Optimize resource allocation',
        'Reduce project delays',
        'Better team coordination'
      ],
      technologies: ['Project Management AI', 'Resource Optimization', 'Risk Analysis', 'Team Collaboration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Security & Compliance
    {
      title: 'AI Security Monitor',
      description: 'Advanced security monitoring with threat detection, vulnerability scanning, and incident response.',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Security analytics',
        'Compliance monitoring',
        'Real-time alerts'
      ],
      price: '$59/month',
      marketPrice: '$119-239/month',
      category: 'Security',
      benefits: [
        'Detect threats in real-time',
        'Prevent security breaches',
        'Ensure compliance',
        'Reduce security risks'
      ],
      technologies: ['Threat Detection', 'Vulnerability Scanning', 'Security Analytics', 'Compliance Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Compliance Checker',
      description: 'Automated compliance monitoring with regulatory updates and audit preparation.',
      icon: <CheckCircle className="w-8 h-8" />,
      features: [
        'Regulatory compliance monitoring',
        'Audit preparation',
        'Policy management',
        'Risk assessment',
        'Documentation automation',
        'Reporting tools'
      ],
      price: '$49/month',
      marketPrice: '$99-199/month',
      category: 'Compliance',
      benefits: [
        'Ensure regulatory compliance',
        'Simplify audit preparation',
        'Reduce compliance costs',
        'Automated reporting'
      ],
      technologies: ['Compliance Monitoring', 'Regulatory APIs', 'Documentation Automation', 'Risk Assessment'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Finance & Accounting
    {
      title: 'AI Financial Analyzer',
      description: 'Intelligent financial analysis with forecasting, budgeting, and investment optimization.',
      icon: <DollarSign className="w-8 h-8" />,
      features: [
        'Financial forecasting',
        'Budget optimization',
        'Investment analysis',
        'Risk assessment',
        'Cash flow management',
        'Performance tracking'
      ],
      price: '$44/month',
      marketPrice: '$89-179/month',
      category: 'Finance',
      benefits: [
        'Improve financial planning',
        'Optimize investments',
        'Reduce financial risks',
        'Better cash flow management'
      ],
      technologies: ['Financial Modeling', 'Risk Analysis', 'Investment Algorithms', 'Cash Flow Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Expense Tracker',
      description: 'Smart expense management with categorization, receipt processing, and budget monitoring.',
      icon: <Receipt className="w-8 h-8" />,
      features: [
        'Automated categorization',
        'Receipt processing',
        'Budget monitoring',
        'Expense analytics',
        'Tax preparation',
        'Mobile app access'
      ],
      price: '$24/month',
      marketPrice: '$49-99/month',
      category: 'Expense Management',
      benefits: [
        'Save 3+ hours per week',
        'Improve expense accuracy',
        'Simplify tax preparation',
        'Better budget control'
      ],
      technologies: ['OCR', 'Expense Categorization', 'Receipt Processing', 'Budget Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Health & Wellness
    {
      title: 'AI Health Monitor',
      description: 'Personal health monitoring with symptom analysis, medication reminders, and wellness tracking.',
      icon: <Activity className="w-8 h-8" />,
      features: [
        'Health data tracking',
        'Symptom analysis',
        'Medication reminders',
        'Wellness recommendations',
        'Health reports',
        'Doctor integration'
      ],
      price: '$29/month',
      marketPrice: '$59-119/month',
      category: 'Health',
      benefits: [
        'Improve health outcomes',
        'Prevent health issues',
        'Better medication adherence',
        'Personalized wellness plans'
      ],
      technologies: ['Health APIs', 'Symptom Analysis', 'Medication Tracking', 'Wellness Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with workout optimization, form analysis, and progress tracking.',
      icon: <Target className="w-8 h-8" />,
      features: [
        'Personalized workout plans',
        'Form analysis',
        'Progress tracking',
        'Nutrition guidance',
        'Goal setting',
        'Motivation support'
      ],
      price: '$34/month',
      marketPrice: '$69-139/month',
      category: 'Fitness',
      benefits: [
        'Achieve fitness goals faster',
        'Prevent injuries',
        'Personalized training',
        'Better motivation'
      ],
      technologies: ['Computer Vision', 'Fitness Analytics', 'Personalization Engine', 'Progress Tracking'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    
    // Education & Learning
    {
      title: 'AI Learning Assistant',
      description: 'Personalized learning platform with adaptive curriculum, progress tracking, and skill assessment.',
      icon: <Bookmark className="w-8 h-8" />,
      features: [
        'Adaptive learning paths',
        'Progress tracking',
        'Skill assessment',
        'Personalized content',
        'Learning analytics',
        'Certification tracking'
      ],
      price: '$39/month',
      marketPrice: '$79-159/month',
      category: 'Education',
      benefits: [
        'Accelerate learning by 40%',
        'Personalized education',
        'Better retention rates',
        'Track learning progress'
      ],
      technologies: ['Adaptive Learning', 'Progress Analytics', 'Skill Assessment', 'Content Personalization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Language Tutor',
      description: 'Intelligent language learning with pronunciation analysis, conversation practice, and cultural insights.',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Pronunciation analysis',
        'Conversation practice',
        'Cultural insights',
        'Progress tracking',
        'Multi-language support',
        'Mobile app access'
      ],
      price: '$29/month',
      marketPrice: '$59-119/month',
      category: 'Language Learning',
      benefits: [
        'Improve pronunciation',
        'Faster language acquisition',
        'Cultural understanding',
        'Personalized learning'
      ],
      technologies: ['Speech Recognition', 'NLP', 'Cultural Analysis', 'Progress Tracking'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful, affordable AI-driven tools for modern businesses. 50+ ready-to-use applications 
            that transform your workflow and boost productivity.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Micro SAAS Apps</div>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$24</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="cyber-button">All Categories</button>
            {categories.map((category, index) => (
              <button key={index} className="cyber-card hologram-card px-6 py-3 hover:scale-105 transition-all duration-300">
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Choose Your Micro SAAS Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-400 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive suite of micro SAAS solutions and start transforming 
            your business operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
            >
              Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;