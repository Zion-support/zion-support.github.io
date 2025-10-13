import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  Video,
  FileText,
  Mail,
  Package,
  Heart,
  DollarSign,
  Mic,
  Share,
  Calendar,
  Target,
  PieChart,
  Settings,
  Headphones,
  Globe,
  Activity,
  TrendingDown,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
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
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Copy,
  Scissors,
  Save,
  Folder,
  File,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Sidebar,
  Navigation,
  Compass,
  Map,
  Home,
  Building,
  Store,
  Factory,
  Warehouse,
  Office,
  School,
  Hospital,
  Bank,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Bus,
  Taxi,
  Truck,
  Package as PackageIcon,
  Box,
  Gift,
  ShoppingBag,
  CreditCard,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Percent,
  TrendingDown as TrendingDownIcon,
  Activity as ActivityIcon,
  Pulse,
  Thermometer,
  Gauge,
  Battery,
  Wifi,
  Bluetooth,
  Radio,
  Tv,
  Laptop,
  Tablet,
  Smartphone,
  Watch,
  Headphones as HeadphonesIcon,
  Speaker,
  Mic as MicIcon,
  Camera,
  Video as VideoIcon,
  Image,
  Music,
  Film,
  Book,
  Newspaper,
  FileText as FileTextIcon,
  File as FileIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  HardDrive,
  Server,
  Cpu,
  MemoryStick,
  Disc,
  Cd,
  Dvd,
  FloppyDisk,
  Usb,
  Hdmi,
  Ethernet
} from 'lucide-react';

const MicroSaasPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasServices = [
    // AI-Powered Business Solutions
    {
      id: 'zion-ai-analytics-pro',
      name: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Automated report generation',
        'Custom dashboard builder',
        'Multi-source data integration',
        'AI-powered insights',
        'Mobile app included',
        '24/7 support'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Analytics',
      link: '/zion-ai-analytics-pro',
      popular: true,
      rating: 4.9,
      users: '2,500+',
      freeTrial: '14 days',
      marketPrice: '$599/month',
      benefits: 'Increase data-driven decisions by 85%',
      useCases: ['Business Intelligence', 'Financial Reporting', 'Sales Analytics', 'Marketing Insights']
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive customer behavior analysis.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Email integration',
        'Sales pipeline management',
        'Customer segmentation',
        'Performance analytics',
        'Mobile CRM app'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI CRM',
      link: '/zion-ai-crm-pro',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      freeTrial: '14 days',
      marketPrice: '$399/month',
      benefits: 'Boost sales conversion by 60%',
      useCases: ['Lead Management', 'Sales Automation', 'Customer Retention', 'Pipeline Optimization']
    },
    {
      id: 'zion-ai-video-generator',
      name: 'Zion AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated content generation. Perfect for marketing, training, and social media.',
      price: '$399/month',
      originalPrice: '$799/month',
      features: [
        'Text-to-video generation',
        'Multiple video styles',
        'Voice synthesis',
        'Background music library',
        'HD/4K export',
        'Brand customization',
        'Social media templates',
        'Batch processing'
      ],
      icon: <Video className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'AI Video',
      link: '/zion-ai-video-generator',
      popular: true,
      rating: 4.9,
      users: '1,500+',
      freeTrial: '7 days',
      marketPrice: '$799/month',
      benefits: 'Reduce video production time by 90%',
      useCases: ['Marketing Videos', 'Training Content', 'Social Media', 'Product Demos']
    },
    {
      id: 'zion-ai-invoice-generator',
      name: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered data extraction, smart categorization, and seamless accounting integration.',
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'Auto Invoice Creation',
        'Data Extraction',
        'Smart Categorization',
        'Accounting Integration',
        'Multi-currency',
        'PDF Export',
        'Payment Tracking',
        'Tax Calculations'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI Finance',
      link: '/zion-ai-invoice-generator',
      popular: true,
      rating: 4.7,
      users: '3,200+',
      freeTrial: '14 days',
      marketPrice: '$199/month',
      benefits: 'Save 15 hours per week on invoicing',
      useCases: ['Invoice Automation', 'Expense Tracking', 'Tax Preparation', 'Financial Reporting']
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights Pro',
      description: 'Advanced customer analytics with behavioral insights, churn prediction, and personalized recommendations for better customer retention.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Behavioral Analytics',
        'Churn Prediction',
        'Personalized Recommendations',
        'Customer Segmentation',
        'Real-time Insights',
        'ROI Tracking',
        'A/B Testing',
        'Integration APIs'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Analytics',
      link: '/zion-ai-customer-insights',
      popular: true,
      rating: 4.8,
      users: '1,400+',
      freeTrial: '14 days',
      marketPrice: '$599/month',
      benefits: 'Reduce customer churn by 40%',
      useCases: ['Customer Analytics', 'Churn Prevention', 'Personalization', 'Retention Strategies']
    },
    {
      id: 'zion-ai-email-analyzer',
      name: 'Zion AI Email Analyzer Pro',
      description: 'Intelligent email analysis with sentiment detection, spam filtering, and automated response suggestions for better communication.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Sentiment Analysis',
        'Spam Detection',
        'Auto Response',
        'Email Classification',
        'Priority Scoring',
        'Team Collaboration',
        'Analytics Dashboard',
        'Integration Tools'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'AI Communication',
      link: '/zion-ai-email-analyzer',
      popular: false,
      rating: 4.6,
      users: '2,100+',
      freeTrial: '14 days',
      marketPrice: '$299/month',
      benefits: 'Improve email response time by 70%',
      useCases: ['Email Management', 'Sentiment Analysis', 'Spam Filtering', 'Team Communication']
    },
    {
      id: 'zion-smart-inventory-optimizer',
      name: 'Zion Smart Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for retail and e-commerce.',
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'Demand Forecasting',
        'Auto Reordering',
        'Cost Optimization',
        'Multi-location',
        'Supplier Management',
        'Analytics Dashboard',
        'Barcode Scanning',
        'Mobile App'
      ],
      icon: <Package className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'AI Inventory',
      link: '/zion-smart-inventory-optimizer',
      popular: true,
      rating: 4.7,
      users: '1,600+',
      freeTrial: '14 days',
      marketPrice: '$499/month',
      benefits: 'Reduce inventory costs by 30%',
      useCases: ['Inventory Management', 'Demand Planning', 'Cost Optimization', 'Supply Chain']
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      name: 'Zion AI Customer Sentiment Tracker',
      description: 'Real-time customer sentiment monitoring across all channels with automated alerts and actionable insights for customer success teams.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Real-time Monitoring',
        'Multi-channel Analysis',
        'Automated Alerts',
        'Sentiment Trends',
        'Actionable Insights',
        'Team Notifications',
        'Custom Dashboards',
        'API Integration'
      ],
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'AI Sentiment',
      link: '/zion-ai-customer-sentiment-tracker',
      popular: false,
      rating: 4.5,
      users: '1,200+',
      freeTrial: '14 days',
      marketPrice: '$359/month',
      benefits: 'Improve customer satisfaction by 45%',
      useCases: ['Sentiment Analysis', 'Customer Feedback', 'Brand Monitoring', 'Crisis Management']
    },
    {
      id: 'zion-smart-expense-categorizer',
      name: 'Zion Smart Expense Categorizer',
      description: 'AI-powered expense categorization and tracking with receipt scanning, tax optimization, and automated reporting for businesses.',
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'Receipt Scanning',
        'Auto Categorization',
        'Tax Optimization',
        'Expense Reports',
        'Budget Tracking',
        'Mobile App',
        'Team Management',
        'Compliance Tools'
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      category: 'AI Finance',
      link: '/zion-smart-expense-categorizer',
      popular: false,
      rating: 4.6,
      users: '2,800+',
      freeTrial: '14 days',
      marketPrice: '$259/month',
      benefits: 'Save 10 hours per week on expense management',
      useCases: ['Expense Tracking', 'Tax Preparation', 'Budget Management', 'Financial Reporting']
    },
    {
      id: 'zion-ai-voice-assistant-pro',
      name: 'Zion AI Voice Assistant Pro',
      description: 'Advanced voice assistant with natural language processing, multi-language support, and custom voice training for business applications.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Custom Voice Training',
        'API Integration',
        'Voice Commands',
        'Analytics Dashboard',
        'Mobile App',
        '24/7 Availability'
      ],
      icon: <Mic className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'AI Voice',
      link: '/zion-ai-voice-assistant-pro',
      popular: true,
      rating: 4.7,
      users: '900+',
      freeTrial: '14 days',
      marketPrice: '$399/month',
      benefits: 'Increase productivity by 50% with voice commands',
      useCases: ['Voice Automation', 'Customer Service', 'Accessibility', 'Hands-free Operations']
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer Pro',
      description: 'Intelligent code review with automated bug detection, security analysis, and performance optimization suggestions for development teams.',
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'Automated Code Review',
        'Bug Detection',
        'Security Analysis',
        'Performance Optimization',
        'Code Quality Metrics',
        'Team Collaboration',
        'Integration Tools',
        'Custom Rules'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI Development',
      link: '/zion-ai-code-reviewer',
      popular: false,
      rating: 4.8,
      users: '2,200+',
      freeTrial: '14 days',
      marketPrice: '$319/month',
      benefits: 'Reduce code review time by 75%',
      useCases: ['Code Quality', 'Bug Prevention', 'Security Auditing', 'Performance Optimization']
    },
    {
      id: 'zion-ai-social-media-manager',
      name: 'Zion AI Social Media Manager',
      description: 'AI-powered social media management with content generation, optimal posting times, and automated engagement for all major platforms.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Content Generation',
        'Optimal Posting Times',
        'Automated Engagement',
        'Multi-platform',
        'Analytics Dashboard',
        'Brand Voice Training',
        'Hashtag Research',
        'Team Collaboration'
      ],
      icon: <Share className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'AI Social Media',
      link: '/zion-ai-social-media-manager',
      popular: true,
      rating: 4.6,
      users: '2,300+',
      freeTrial: '7 days',
      marketPrice: '$359/month',
      benefits: 'Increase social media engagement by 80%',
      useCases: ['Content Creation', 'Social Media Automation', 'Brand Management', 'Engagement Optimization']
    },
    {
      id: 'zion-ai-contract-analyzer',
      name: 'Zion AI Contract Analyzer Pro',
      description: 'Intelligent contract analysis with risk assessment, clause extraction, and automated compliance checking for legal teams.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Risk Assessment',
        'Clause Extraction',
        'Compliance Checking',
        'Contract Comparison',
        'Legal Templates',
        'Team Collaboration',
        'Version Control',
        'Integration Tools'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      category: 'AI Legal',
      link: '/zion-ai-contract-analyzer',
      popular: false,
      rating: 4.7,
      users: '800+',
      freeTrial: '14 days',
      marketPrice: '$599/month',
      benefits: 'Reduce contract review time by 85%',
      useCases: ['Contract Analysis', 'Risk Assessment', 'Compliance Management', 'Legal Automation']
    },
    {
      id: 'zion-ai-performance-optimizer',
      name: 'Zion AI Performance Optimizer',
      description: 'AI-powered performance monitoring and optimization for websites, applications, and infrastructure with automated recommendations.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Performance Monitoring',
        'Automated Optimization',
        'Real-time Alerts',
        'Performance Reports',
        'A/B Testing',
        'CDN Integration',
        'Mobile Optimization',
        'API Monitoring'
      ],
      icon: <Activity className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'AI Performance',
      link: '/zion-ai-performance-optimizer',
      popular: false,
      rating: 4.6,
      users: '1,100+',
      freeTrial: '14 days',
      marketPrice: '$399/month',
      benefits: 'Improve website speed by 60%',
      useCases: ['Performance Monitoring', 'Website Optimization', 'Infrastructure Management', 'User Experience']
    },
    {
      id: 'zion-ai-customer-churn-predictor',
      name: 'Zion AI Customer Churn Predictor',
      description: 'Predict customer churn with machine learning models and automated retention campaigns to improve customer lifetime value.',
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'Churn Prediction',
        'Retention Campaigns',
        'Customer Scoring',
        'Risk Analysis',
        'Automated Alerts',
        'ROI Tracking',
        'A/B Testing',
        'Integration APIs'
      ],
      icon: <TrendingDown className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'AI Analytics',
      link: '/zion-ai-customer-churn-predictor',
      popular: true,
      rating: 4.8,
      users: '1,300+',
      freeTrial: '14 days',
      marketPrice: '$499/month',
      benefits: 'Reduce customer churn by 35%',
      useCases: ['Churn Prevention', 'Customer Retention', 'Predictive Analytics', 'Retention Campaigns']
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      name: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, route optimization, and supplier risk assessment for logistics.',
      price: '$349/month',
      originalPrice: '$699/month',
      features: [
        'Demand Forecasting',
        'Route Optimization',
        'Supplier Risk Assessment',
        'Cost Analysis',
        'Inventory Management',
        'Real-time Tracking',
        'Compliance Monitoring',
        'Integration Tools'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'AI Supply Chain',
      link: '/zion-ai-supply-chain-optimizer',
      popular: false,
      rating: 4.7,
      users: '600+',
      freeTrial: '14 days',
      marketPrice: '$699/month',
      benefits: 'Optimize supply chain costs by 25%',
      useCases: ['Supply Chain Management', 'Logistics Optimization', 'Risk Assessment', 'Cost Reduction']
    },
    {
      id: 'zion-ai-financial-forecaster',
      name: 'Zion AI Financial Forecaster Pro',
      description: 'Advanced financial forecasting with machine learning models, scenario planning, and automated financial reporting for CFOs.',
      price: '$399/month',
      originalPrice: '$799/month',
      features: [
        'Financial Forecasting',
        'Scenario Planning',
        'Automated Reports',
        'Risk Analysis',
        'Cash Flow Prediction',
        'Investment Analysis',
        'Compliance Tools',
        'Integration APIs'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI Finance',
      link: '/zion-ai-financial-forecaster',
      popular: true,
      rating: 4.9,
      users: '700+',
      freeTrial: '14 days',
      marketPrice: '$799/month',
      benefits: 'Improve financial accuracy by 90%',
      useCases: ['Financial Planning', 'Risk Management', 'Investment Analysis', 'Compliance Reporting']
    },
    {
      id: 'zion-ai-content-moderator',
      name: 'Zion AI Content Moderator Pro',
      description: 'Automated content moderation with AI-powered detection of inappropriate content, spam, and policy violations across platforms.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Content Detection',
        'Spam Filtering',
        'Policy Violations',
        'Automated Actions',
        'Custom Rules',
        'Analytics Dashboard',
        'Team Management',
        'API Integration'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'AI Moderation',
      link: '/zion-ai-content-moderator',
      popular: false,
      rating: 4.6,
      users: '1,500+',
      freeTrial: '14 days',
      marketPrice: '$359/month',
      benefits: 'Reduce moderation time by 95%',
      useCases: ['Content Moderation', 'Spam Prevention', 'Policy Enforcement', 'Community Management']
    },
    {
      id: 'zion-ai-translator-pro',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation with context awareness, industry-specific terminology, and real-time translation for global businesses.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Context-aware Translation',
        'Industry Terminology',
        'Real-time Translation',
        'Multi-language Support',
        'API Integration',
        'Quality Assurance',
        'Custom Glossaries',
        'Batch Processing'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-500 to-teal-500',
      category: 'AI Translation',
      link: '/zion-ai-translator-pro',
      popular: false,
      rating: 4.7,
      users: '1,800+',
      freeTrial: '7 days',
      marketPrice: '$299/month',
      benefits: 'Support 100+ languages with 95% accuracy',
      useCases: ['Document Translation', 'Website Localization', 'Customer Support', 'Global Communication']
    },
    {
      id: 'zion-ai-data-cleaner',
      name: 'Zion AI Data Cleaner Pro',
      description: 'Intelligent data cleaning and preprocessing with automated error detection, data validation, and quality improvement for analytics.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Automated Data Cleaning',
        'Error Detection',
        'Data Validation',
        'Quality Metrics',
        'Data Transformation',
        'API Integration',
        'Batch Processing',
        'Custom Rules'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500',
      category: 'AI Data',
      link: '/zion-ai-data-cleaner',
      popular: false,
      rating: 4.6,
      users: '1,300+',
      freeTrial: '14 days',
      marketPrice: '$399/month',
      benefits: 'Improve data quality by 90%',
      useCases: ['Data Cleaning', 'Quality Assurance', 'Data Preparation', 'Analytics Optimization']
    },
    {
      id: 'zion-ai-task-scheduler',
      name: 'Zion AI Task Scheduler Pro',
      description: 'Intelligent task scheduling and project management with AI-powered resource allocation and deadline optimization for teams.',
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'AI Task Scheduling',
        'Resource Allocation',
        'Deadline Optimization',
        'Team Collaboration',
        'Progress Tracking',
        'Automated Reminders',
        'Integration Tools',
        'Mobile App'
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-orange-500 to-amber-500',
      category: 'AI Productivity',
      link: '/zion-ai-task-scheduler',
      popular: false,
      rating: 4.5,
      users: '2,700+',
      freeTrial: '14 days',
      marketPrice: '$259/month',
      benefits: 'Increase team productivity by 40%',
      useCases: ['Project Management', 'Task Automation', 'Resource Planning', 'Team Coordination']
    },
    {
      id: 'zion-ai-customer-support-pro',
      name: 'Zion AI Customer Support Pro',
      description: 'Advanced AI customer support with multi-channel integration, sentiment analysis, and automated ticket routing for support teams.',
      price: '$229/month',
      originalPrice: '$459/month',
      features: [
        'Multi-channel Support',
        'Sentiment Analysis',
        'Automated Routing',
        'Knowledge Base',
        'Live Chat Integration',
        'Performance Analytics',
        'Team Management',
        'API Integration'
      ],
      icon: <Headphones className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'AI Support',
      link: '/zion-ai-customer-support-pro',
      popular: true,
      rating: 4.8,
      users: '1,900+',
      freeTrial: '14 days',
      marketPrice: '$459/month',
      benefits: 'Reduce support response time by 70%',
      useCases: ['Customer Service', 'Ticket Management', 'Chat Support', 'Support Analytics']
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'AI Analytics', count: microSaasServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Finance', count: microSaasServices.filter(s => s.category.includes('Finance')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'AI Video', count: microSaasServices.filter(s => s.category.includes('Video')).length, color: 'from-red-500 to-orange-500' },
    { name: 'AI Communication', count: microSaasServices.filter(s => s.category.includes('Communication')).length, color: 'from-orange-500 to-red-500' },
    { name: 'AI Development', count: microSaasServices.filter(s => s.category.includes('Development')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Social Media', count: microSaasServices.filter(s => s.category.includes('Social Media')).length, color: 'from-violet-500 to-purple-500' },
    { name: 'AI Legal', count: microSaasServices.filter(s => s.category.includes('Legal')).length, color: 'from-slate-500 to-gray-500' },
    { name: 'AI Performance', count: microSaasServices.filter(s => s.category.includes('Performance')).length, color: 'from-teal-500 to-cyan-500' },
    { name: 'AI Supply Chain', count: microSaasServices.filter(s => s.category.includes('Supply Chain')).length, color: 'from-indigo-500 to-blue-500' },
    { name: 'AI Moderation', count: microSaasServices.filter(s => s.category.includes('Moderation')).length, color: 'from-red-500 to-orange-500' },
    { name: 'AI Translation', count: microSaasServices.filter(s => s.category.includes('Translation')).length, color: 'from-cyan-500 to-teal-500' },
    { name: 'AI Data', count: microSaasServices.filter(s => s.category.includes('Data')).length, color: 'from-purple-500 to-violet-500' },
    { name: 'AI Productivity', count: microSaasServices.filter(s => s.category.includes('Productivity')).length, color: 'from-orange-500 to-amber-500' },
    { name: 'AI Support', count: microSaasServices.filter(s => s.category.includes('Support')).length, color: 'from-blue-500 to-indigo-500' }
  ];

  const stats = [
    { number: '25+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> },
    { number: '50,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Analytics Pro transformed our data insights. We increased our conversion rate by 40% in just 3 months.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'CTO',
      content: 'The AI CRM system is incredible. Our sales team productivity increased by 60% with automated lead scoring.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'Zion AI Content Generator saves us 20 hours per week. The quality is outstanding and our clients love it.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of AI-powered micro SAAS solutions. From video generation to customer insights, we provide ready-to-use business tools that transform your operations."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI tools, business automation, video generator, invoice generator, customer insights, social media manager, AI analytics, business software"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">25+ AI-Powered Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use AI-powered business tools that transform your operations. 
              From video generation to customer insights, our micro SAAS solutions are designed for immediate deployment and maximum impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI-Powered Business Tools
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS solutions designed to automate and optimize your business processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="mr-2">{service.rating}</span>
                          <span>•</span>
                          <span className="ml-2">{service.users} users</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">{service.freeTrial} free trial</div>
                      <div className="text-xs text-green-400 mt-1">Save {Math.round((1 - parseFloat(service.price.replace('$', '').replace('/month', '')) / parseFloat(service.originalPrice.replace('$', '').replace('/month', ''))) * 100)}% vs market price</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30 inline-block mb-2">
                        {service.category}
                      </div>
                      <div className="text-sm text-green-400 font-medium">{service.benefits}</div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
                    <div className="flex gap-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                        Try Free
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Start your free trial today and experience the power of AI-driven automation.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;