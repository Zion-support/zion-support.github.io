import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  Sparkles,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Award,
  Lock,
  Settings,
  PieChart,
  FileText,
  Video,
  Image,
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
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
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
  Package,
  Box,
  Gift,
  ShoppingBag,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Percent,
  TrendingDown,
  Activity,
  Pulse,
  Thermometer,
  Gauge,
  Battery,
  Bluetooth,
  Radio,
  Tv,
  Laptop,
  Tablet,
  Watch,
  Speaker,
  Music,
  Film,
  Book,
  Newspaper,
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
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const microSaasServices = [
    // AI-Powered Business Solutions
    {
      id: 'zion-ai-analytics-pro',
      name: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation for data-driven decision making.',
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
        '24/7 support',
        'API integrations',
        'Custom metrics'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Analytics',
      link: '/zion-ai-analytics-pro',
      popular: true,
      rating: 4.9,
      users: '2,500+',
      freeTrial: '14 days',
      marketPrice: '$800-1200/month',
      savings: '60%'
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive customer behavior analysis for sales teams.',
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
        'Mobile CRM app',
        'Custom workflows',
        'Team collaboration'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI CRM',
      link: '/zion-ai-crm-pro',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      freeTrial: '14 days',
      marketPrice: '$500-800/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-content-generator',
      name: 'Zion AI Content Generator',
      description: 'AI-powered content creation platform that generates high-quality blog posts, social media content, and marketing copy in seconds with brand consistency.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing copy',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Content calendar',
        'Plagiarism checker',
        'A/B testing',
        'Performance analytics'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'AI Content',
      link: '/zion-ai-content-generator',
      popular: true,
      rating: 4.7,
      users: '3,200+',
      freeTrial: '7 days',
      marketPrice: '$400-600/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-video-generator',
      name: 'Zion AI Video Generator Pro',
      description: 'Create professional videos from text prompts using advanced AI technology. Perfect for marketing, training, and social media content with custom branding.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Text-to-video generation',
        'Multiple video styles',
        'Voice synthesis',
        'Background music library',
        'HD/4K export',
        'Brand customization',
        'Social media templates',
        'Batch processing',
        'Auto-captions',
        'Multi-language support'
      ],
      icon: <Video className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'AI Video',
      link: '/zion-ai-video-generator',
      popular: true,
      rating: 4.9,
      users: '1,500+',
      freeTrial: '7 days',
      marketPrice: '$800-1500/month',
      savings: '75%'
    },
    {
      id: 'zion-ai-customer-support',
      name: 'Zion AI Customer Support Pro',
      description: 'Intelligent customer support system with AI chatbots, automated ticket routing, and sentiment analysis for enhanced customer experience.',
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'AI chatbot integration',
        'Automated ticket routing',
        'Sentiment analysis',
        'Knowledge base management',
        'Multi-channel support',
        'Performance analytics',
        'Custom workflows',
        'API integration',
        'Live chat handoff',
        'Customer satisfaction tracking'
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'AI Support',
      link: '/zion-ai-customer-support',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days',
      marketPrice: '$600-1000/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-marketing-automation',
      name: 'Zion AI Marketing Automation Pro',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization, lead nurturing, and personalized content delivery.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Email marketing automation',
        'Lead nurturing workflows',
        'Campaign optimization',
        'A/B testing',
        'Personalization engine',
        'Social media scheduling',
        'Analytics dashboard',
        'ROI tracking',
        'Customer journey mapping',
        'Dynamic content'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI Marketing',
      link: '/zion-ai-marketing-automation',
      popular: true,
      rating: 4.7,
      users: '2,800+',
      freeTrial: '14 days',
      marketPrice: '$500-800/month',
      savings: '50%'
    },

    // Business Management Solutions
    {
      id: 'zion-project-manager-pro',
      name: 'Zion Project Manager Pro',
      description: 'Advanced project management tool with AI-powered task prioritization, resource allocation, and automated progress tracking for teams.',
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'AI task prioritization',
        'Resource allocation',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Gantt charts',
        'Mobile app',
        'Risk assessment',
        'Milestone tracking'
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'Project Management',
      link: '/zion-project-manager-pro',
      popular: false,
      rating: 4.6,
      users: '1,200+',
      freeTrial: '14 days',
      marketPrice: '$300-500/month',
      savings: '50%'
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Smart Inventory Optimizer',
      description: 'Intelligent inventory management system with predictive analytics, automated reordering, and real-time stock optimization for retail and e-commerce.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Predictive analytics',
        'Automated reordering',
        'Real-time tracking',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Reporting suite',
        'Demand forecasting',
        'ABC analysis'
      ],
      icon: <Package className="w-8 h-8" />,
      color: 'from-amber-500 to-yellow-500',
      category: 'Inventory Management',
      link: '/zion-smart-inventory-optimizer',
      popular: true,
      rating: 4.5,
      users: '900+',
      freeTrial: '14 days',
      marketPrice: '$400-700/month',
      savings: '50%'
    },
    {
      id: 'zion-financial-analytics',
      name: 'Zion AI Financial Analytics Pro',
      description: 'Comprehensive financial management platform with AI-powered forecasting, expense tracking, and automated financial reporting for businesses.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'AI financial forecasting',
        'Expense categorization',
        'Automated reporting',
        'Cash flow analysis',
        'Budget planning',
        'Tax preparation',
        'Investment tracking',
        'Compliance monitoring',
        'Risk assessment',
        'Scenario planning'
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'Financial Management',
      link: '/zion-ai-financial-analytics',
      popular: false,
      rating: 4.7,
      users: '1,400+',
      freeTrial: '14 days',
      marketPrice: '$400-600/month',
      savings: '50%'
    },
    {
      id: 'zion-hr-management-pro',
      name: 'Zion AI HR Management Pro',
      description: 'Complete human resources management system with AI-powered recruitment, employee analytics, and automated HR workflows.',
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'AI recruitment tools',
        'Employee analytics',
        'Performance tracking',
        'Payroll management',
        'Time and attendance',
        'Benefits administration',
        'Training management',
        'Compliance tracking',
        'Employee engagement',
        'Succession planning'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'HR Management',
      link: '/zion-hr-management-pro',
      popular: false,
      rating: 4.6,
      users: '800+',
      freeTrial: '14 days',
      marketPrice: '$300-500/month',
      savings: '50%'
    },

    // E-commerce Solutions
    {
      id: 'zion-ecommerce-suite',
      name: 'Zion AI E-commerce Suite',
      description: 'Complete e-commerce platform with AI-powered product recommendations, automated inventory management, and advanced analytics.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'AI product recommendations',
        'Inventory automation',
        'Order management',
        'Payment processing',
        'Shipping integration',
        'Customer analytics',
        'Mobile commerce',
        'Multi-channel selling',
        'Price optimization',
        'Customer segmentation'
      ],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'E-commerce',
      link: '/zion-ecommerce-suite',
      popular: true,
      rating: 4.8,
      users: '1,600+',
      freeTrial: '14 days',
      marketPrice: '$800-1500/month',
      savings: '50%'
    },
    {
      id: 'zion-social-media-manager',
      name: 'Zion AI Social Media Manager',
      description: 'AI-powered social media management platform with automated posting, content optimization, and performance analytics across all platforms.',
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'Automated posting',
        'Content optimization',
        'Hashtag research',
        'Engagement tracking',
        'Multi-platform support',
        'Content calendar',
        'Analytics dashboard',
        'Team collaboration',
        'Influencer outreach',
        'Brand monitoring'
      ],
      icon: <Share className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500',
      category: 'Social Media',
      link: '/zion-ai-social-media-manager',
      popular: false,
      rating: 4.5,
      users: '2,300+',
      freeTrial: '7 days',
      marketPrice: '$200-400/month',
      savings: '50%'
    },

    // Security & Compliance
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield Pro',
      description: 'Advanced cybersecurity platform with AI-powered threat detection, automated incident response, and compliance monitoring.',
      price: '$499/month',
      originalPrice: '$999/month',
      features: [
        'AI threat detection',
        'Automated response',
        'Compliance monitoring',
        'Vulnerability scanning',
        'Security analytics',
        'Incident management',
        '24/7 monitoring',
        'Expert support',
        'Penetration testing',
        'Security training'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'Cybersecurity',
      link: '/zion-security-shield',
      popular: true,
      rating: 4.9,
      users: '1,100+',
      freeTrial: '14 days',
      marketPrice: '$1500-3000/month',
      savings: '50%'
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion AI Compliance Manager',
      description: 'Automated compliance management system with AI-powered risk assessment, policy monitoring, and regulatory reporting.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'AI risk assessment',
        'Policy monitoring',
        'Regulatory reporting',
        'Audit trails',
        'Compliance dashboards',
        'Automated alerts',
        'Document management',
        'Training modules',
        'Risk scoring',
        'Remediation tracking'
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      category: 'Compliance',
      link: '/zion-compliance-manager',
      popular: false,
      rating: 4.6,
      users: '700+',
      freeTrial: '14 days',
      marketPrice: '$500-1000/month',
      savings: '50%'
    },

    // Data & Analytics
    {
      id: 'zion-data-visualization',
      name: 'Zion AI Data Visualization Pro',
      description: 'Powerful data visualization platform with AI-powered insights, interactive dashboards, and automated report generation.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Interactive dashboards',
        'AI-powered insights',
        'Automated reports',
        'Data connectors',
        'Custom visualizations',
        'Real-time updates',
        'Collaborative features',
        'Mobile access',
        'Data storytelling',
        'Advanced analytics'
      ],
      icon: <PieChart className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'Data Analytics',
      link: '/zion-data-visualization',
      popular: false,
      rating: 4.7,
      users: '1,300+',
      freeTrial: '14 days',
      marketPrice: '$400-800/month',
      savings: '50%'
    },
    {
      id: 'zion-business-intelligence',
      name: 'Zion AI Business Intelligence Pro',
      description: 'Comprehensive BI platform with AI-powered analytics, predictive modeling, and automated business insights generation.',
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'AI-powered analytics',
        'Predictive modeling',
        'Automated insights',
        'Data warehousing',
        'ETL processes',
        'Custom metrics',
        'Alert system',
        'API integration',
        'Machine learning',
        'Natural language queries'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Business Intelligence',
      link: '/zion-business-intelligence',
      popular: true,
      rating: 4.8,
      users: '1,000+',
      freeTrial: '14 days',
      marketPrice: '$800-1500/month',
      savings: '50%'
    },

    // Communication & Collaboration
    {
      id: 'zion-team-collaboration',
      name: 'Zion AI Team Collaboration Pro',
      description: 'Advanced team collaboration platform with AI-powered meeting optimization, document sharing, and project coordination.',
      price: '$79/month',
      originalPrice: '$159/month',
      features: [
        'AI meeting optimization',
        'Document collaboration',
        'Project coordination',
        'Video conferencing',
        'File sharing',
        'Task management',
        'Team analytics',
        'Mobile apps',
        'Screen sharing',
        'Whiteboarding'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Collaboration',
      link: '/zion-team-collaboration',
      popular: false,
      rating: 4.5,
      users: '3,500+',
      freeTrial: '14 days',
      marketPrice: '$200-400/month',
      savings: '50%'
    },
    {
      id: 'zion-email-automation',
      name: 'Zion AI Email Automation Pro',
      description: 'Intelligent email marketing platform with AI-powered personalization, automated campaigns, and advanced analytics.',
      price: '$89/month',
      originalPrice: '$179/month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'List segmentation',
        'Email templates',
        'Analytics dashboard',
        'Integration tools',
        'Compliance tools',
        'Deliverability optimization',
        'Behavioral triggers'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'Email Marketing',
      link: '/zion-email-automation',
      popular: false,
      rating: 4.6,
      users: '2,700+',
      freeTrial: '14 days',
      marketPrice: '$200-400/month',
      savings: '50%'
    },

    // Specialized Solutions
    {
      id: 'zion-ai-translator',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation with context awareness, industry-specific terminology, and real-time translation for global businesses.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Context-aware translation',
        'Industry terminology',
        'Real-time translation',
        'Multi-language support',
        'API integration',
        'Quality assurance',
        'Custom glossaries',
        'Document translation',
        'Voice translation',
        'Website localization'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-teal-500 to-green-500',
      category: 'Translation',
      link: '/zion-ai-translator-pro',
      popular: false,
      rating: 4.7,
      users: '1,800+',
      freeTrial: '7 days',
      marketPrice: '$300-600/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-code-assistant',
      name: 'Zion AI Code Assistant Pro',
      description: 'AI-powered coding assistant with intelligent code completion, bug detection, and automated testing for development teams.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Code completion',
        'Bug detection',
        'Automated testing',
        'Code review',
        'Documentation generation',
        'Multi-language support',
        'IDE integration',
        'Team collaboration',
        'Code optimization',
        'Security scanning'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500',
      category: 'Development',
      link: '/zion-ai-code-assistant',
      popular: true,
      rating: 4.8,
      users: '2,200+',
      freeTrial: '14 days',
      marketPrice: '$500-1000/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-design-studio',
      name: 'Zion AI Design Studio Pro',
      description: 'AI-powered design platform that creates logos, graphics, and marketing materials automatically with brand consistency.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Logo generation',
        'Graphic design',
        'Brand consistency',
        'Template library',
        'Custom styles',
        'Batch processing',
        'High-res exports',
        'Team collaboration',
        'Brand guidelines',
        'Asset management'
      ],
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500',
      category: 'Design',
      link: '/zion-ai-design-studio',
      popular: false,
      rating: 4.6,
      users: '1,500+',
      freeTrial: '7 days',
      marketPrice: '$400-800/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-voice-assistant',
      name: 'Zion AI Voice Assistant Pro',
      description: 'Custom AI voice assistant for businesses with natural language processing, voice commands, and integration capabilities.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Natural language processing',
        'Voice commands',
        'Custom training',
        'Multi-language support',
        'API integration',
        'Analytics dashboard',
        'Mobile app',
        '24/7 availability',
        'Custom wake words',
        'Conversation memory'
      ],
      icon: <Mic className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'Voice AI',
      link: '/zion-ai-voice-assistant-pro',
      popular: false,
      rating: 4.7,
      users: '900+',
      freeTrial: '14 days',
      marketPrice: '$800-1500/month',
      savings: '50%'
    },

    // Additional Innovative Solutions
    {
      id: 'zion-ai-invoice-generator',
      name: 'Zion AI Invoice Generator Pro',
      description: 'Automated invoice generation with AI-powered data extraction, smart categorization, and seamless accounting integration.',
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'Auto invoice creation',
        'Data extraction',
        'Smart categorization',
        'Accounting integration',
        'Multi-currency',
        'PDF export',
        'Payment tracking',
        'Tax calculations',
        'Recurring invoices',
        'Client portal'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI Finance',
      link: '/zion-ai-invoice-generator',
      popular: true,
      rating: 4.7,
      users: '1,200+',
      freeTrial: '7 days',
      marketPrice: '$200-400/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights Pro',
      description: 'Advanced customer analytics with behavioral insights, churn prediction, and personalized recommendations for better customer retention.',
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'Behavioral analytics',
        'Churn prediction',
        'Personalized recommendations',
        'Customer segmentation',
        'Real-time insights',
        'ROI tracking',
        'Lifetime value analysis',
        'Engagement scoring',
        'Predictive modeling',
        'Actionable insights'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Analytics',
      link: '/zion-ai-customer-insights',
      popular: true,
      rating: 4.8,
      users: '1,400+',
      freeTrial: '14 days',
      marketPrice: '$600-1000/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-email-analyzer',
      name: 'Zion AI Email Analyzer Pro',
      description: 'Intelligent email analysis with sentiment detection, spam filtering, and automated response suggestions for better communication.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Sentiment analysis',
        'Spam detection',
        'Auto response',
        'Email classification',
        'Priority scoring',
        'Team collaboration',
        'Email templates',
        'Performance metrics',
        'A/B testing',
        'Compliance checking'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'AI Communication',
      link: '/zion-ai-email-analyzer',
      popular: false,
      rating: 4.6,
      users: '1,000+',
      freeTrial: '7 days',
      marketPrice: '$300-600/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      name: 'Zion AI Customer Sentiment Tracker Pro',
      description: 'Real-time customer sentiment monitoring across all channels with automated alerts and actionable insights for customer success teams.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Real-time monitoring',
        'Multi-channel analysis',
        'Automated alerts',
        'Sentiment trends',
        'Actionable insights',
        'Team notifications',
        'Social media monitoring',
        'Review analysis',
        'Competitor tracking',
        'Crisis detection'
      ],
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'AI Sentiment',
      link: '/zion-ai-customer-sentiment-tracker',
      popular: true,
      rating: 4.7,
      users: '1,100+',
      freeTrial: '14 days',
      marketPrice: '$400-800/month',
      savings: '50%'
    },
    {
      id: 'zion-smart-expense-categorizer',
      name: 'Zion Smart Expense Categorizer Pro',
      description: 'AI-powered expense categorization and tracking with receipt scanning, tax optimization, and automated reporting for businesses.',
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'Receipt scanning',
        'Auto categorization',
        'Tax optimization',
        'Expense reports',
        'Budget tracking',
        'Mobile app',
        'OCR technology',
        'Policy compliance',
        'Approval workflows',
        'Integration tools'
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      category: 'AI Finance',
      link: '/zion-smart-expense-categorizer',
      popular: false,
      rating: 4.5,
      users: '800+',
      freeTrial: '14 days',
      marketPrice: '$200-400/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer Pro',
      description: 'Intelligent code review with automated bug detection, security analysis, and performance optimization suggestions for development teams.',
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'Automated code review',
        'Bug detection',
        'Security analysis',
        'Performance optimization',
        'Code quality metrics',
        'Team collaboration',
        'Best practices suggestions',
        'Vulnerability scanning',
        'Code coverage analysis',
        'Integration tools'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI Development',
      link: '/zion-ai-code-reviewer',
      popular: false,
      rating: 4.7,
      users: '1,300+',
      freeTrial: '14 days',
      marketPrice: '$400-800/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-contract-analyzer',
      name: 'Zion AI Contract Analyzer Pro',
      description: 'Intelligent contract analysis with risk assessment, clause extraction, and automated compliance checking for legal teams.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Risk assessment',
        'Clause extraction',
        'Compliance checking',
        'Contract comparison',
        'Legal templates',
        'Team collaboration',
        'Version control',
        'Deadline tracking',
        'Renewal alerts',
        'Custom workflows'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      category: 'AI Legal',
      link: '/zion-ai-contract-analyzer',
      popular: false,
      rating: 4.6,
      users: '600+',
      freeTrial: '14 days',
      marketPrice: '$800-1500/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-performance-optimizer',
      name: 'Zion AI Performance Optimizer Pro',
      description: 'AI-powered performance monitoring and optimization for websites, applications, and infrastructure with automated recommendations.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Performance monitoring',
        'Automated optimization',
        'Real-time alerts',
        'Performance reports',
        'A/B testing',
        'CDN integration',
        'Database optimization',
        'Caching strategies',
        'Load testing',
        'Scalability analysis'
      ],
      icon: <Activity className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'AI Performance',
      link: '/zion-ai-performance-optimizer',
      popular: false,
      rating: 4.7,
      users: '1,000+',
      freeTrial: '14 days',
      marketPrice: '$500-1000/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-customer-churn-predictor',
      name: 'Zion AI Customer Churn Predictor Pro',
      description: 'Predict customer churn with machine learning models and automated retention campaigns to improve customer lifetime value.',
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'Churn prediction',
        'Retention campaigns',
        'Customer scoring',
        'Risk analysis',
        'Automated alerts',
        'ROI tracking',
        'Behavioral analysis',
        'Intervention strategies',
        'Success metrics',
        'Custom models'
      ],
      icon: <TrendingDown className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'AI Analytics',
      link: '/zion-ai-customer-churn-predictor',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      freeTrial: '14 days',
      marketPrice: '$600-1200/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      name: 'Zion AI Supply Chain Optimizer Pro',
      description: 'AI-powered supply chain optimization with demand forecasting, route optimization, and supplier risk assessment for logistics.',
      price: '$349/month',
      originalPrice: '$699/month',
      features: [
        'Demand forecasting',
        'Route optimization',
        'Supplier risk assessment',
        'Cost analysis',
        'Inventory management',
        'Real-time tracking',
        'Predictive maintenance',
        'Sustainability metrics',
        'Compliance monitoring',
        'Performance analytics'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'AI Supply Chain',
      link: '/zion-ai-supply-chain-optimizer',
      popular: false,
      rating: 4.7,
      users: '800+',
      freeTrial: '14 days',
      marketPrice: '$1000-2000/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-financial-forecaster',
      name: 'Zion AI Financial Forecaster Pro',
      description: 'Advanced financial forecasting with machine learning models, scenario planning, and automated financial reporting for CFOs.',
      price: '$399/month',
      originalPrice: '$799/month',
      features: [
        'Financial forecasting',
        'Scenario planning',
        'Automated reports',
        'Risk analysis',
        'Cash flow prediction',
        'Investment analysis',
        'Market analysis',
        'Regulatory compliance',
        'Stress testing',
        'Executive dashboards'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI Finance',
      link: '/zion-ai-financial-forecaster',
      popular: true,
      rating: 4.8,
      users: '700+',
      freeTrial: '14 days',
      marketPrice: '$1500-3000/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-content-moderator',
      name: 'Zion AI Content Moderator Pro',
      description: 'Automated content moderation with AI-powered detection of inappropriate content, spam, and policy violations across platforms.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Content detection',
        'Spam filtering',
        'Policy violations',
        'Automated actions',
        'Custom rules',
        'Analytics dashboard',
        'Multi-language support',
        'Image analysis',
        'Video analysis',
        'Real-time monitoring'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'AI Moderation',
      link: '/zion-ai-content-moderator',
      popular: false,
      rating: 4.6,
      users: '900+',
      freeTrial: '14 days',
      marketPrice: '$400-800/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-data-cleaner',
      name: 'Zion AI Data Cleaner Pro',
      description: 'Intelligent data cleaning and preprocessing with automated error detection, data validation, and quality improvement for analytics.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Automated data cleaning',
        'Error detection',
        'Data validation',
        'Quality metrics',
        'Data transformation',
        'API integration',
        'Duplicate detection',
        'Format standardization',
        'Missing data handling',
        'Data profiling'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500',
      category: 'AI Data',
      link: '/zion-ai-data-cleaner',
      popular: false,
      rating: 4.7,
      users: '1,100+',
      freeTrial: '14 days',
      marketPrice: '$500-1000/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-task-scheduler',
      name: 'Zion AI Task Scheduler Pro',
      description: 'Intelligent task scheduling and project management with AI-powered resource allocation and deadline optimization for teams.',
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'AI task scheduling',
        'Resource allocation',
        'Deadline optimization',
        'Team collaboration',
        'Progress tracking',
        'Automated reminders',
        'Priority management',
        'Dependency tracking',
        'Capacity planning',
        'Performance analytics'
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-orange-500 to-amber-500',
      category: 'AI Productivity',
      link: '/zion-ai-task-scheduler',
      popular: false,
      rating: 4.6,
      users: '1,400+',
      freeTrial: '14 days',
      marketPrice: '$300-600/month',
      savings: '50%'
    },
    {
      id: 'zion-ai-customer-support-pro',
      name: 'Zion AI Customer Support Pro',
      description: 'Advanced AI customer support with multi-channel integration, sentiment analysis, and automated ticket routing for support teams.',
      price: '$229/month',
      originalPrice: '$459/month',
      features: [
        'Multi-channel support',
        'Sentiment analysis',
        'Automated routing',
        'Knowledge base',
        'Live chat integration',
        'Performance analytics',
        'Customer satisfaction tracking',
        'Escalation management',
        'Team collaboration',
        'Custom workflows'
      ],
      icon: <Headphones className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'AI Support',
      link: '/zion-ai-customer-support-pro',
      popular: true,
      rating: 4.8,
      users: '1,600+',
      freeTrial: '14 days',
      marketPrice: '$600-1200/month',
      savings: '50%'
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'AI Analytics', count: microSaasServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Finance', count: microSaasServices.filter(s => s.category.includes('Finance')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'AI Video', count: microSaasServices.filter(s => s.category.includes('Video')).length, color: 'from-purple-500 to-pink-500' },
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
    { name: 'AI Support', count: microSaasServices.filter(s => s.category.includes('Support')).length, color: 'from-blue-500 to-indigo-500' },
    { name: 'AI CRM', count: microSaasServices.filter(s => s.category.includes('CRM')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'AI Content', count: microSaasServices.filter(s => s.category.includes('Content')).length, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Marketing', count: microSaasServices.filter(s => s.category.includes('Marketing')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Sentiment', count: microSaasServices.filter(s => s.category.includes('Sentiment')).length, color: 'from-pink-500 to-rose-500' },
    { name: 'AI Voice', count: microSaasServices.filter(s => s.category.includes('Voice')).length, color: 'from-violet-500 to-purple-500' },
    { name: 'Project Management', count: microSaasServices.filter(s => s.category.includes('Project Management')).length, color: 'from-teal-500 to-cyan-500' },
    { name: 'Inventory Management', count: microSaasServices.filter(s => s.category.includes('Inventory')).length, color: 'from-amber-500 to-yellow-500' },
    { name: 'Financial Management', count: microSaasServices.filter(s => s.category.includes('Financial Management')).length, color: 'from-green-500 to-teal-500' },
    { name: 'HR Management', count: microSaasServices.filter(s => s.category.includes('HR Management')).length, color: 'from-pink-500 to-rose-500' },
    { name: 'E-commerce', count: microSaasServices.filter(s => s.category.includes('E-commerce')).length, color: 'from-blue-500 to-indigo-500' },
    { name: 'Social Media', count: microSaasServices.filter(s => s.category.includes('Social Media')).length, color: 'from-purple-500 to-violet-500' },
    { name: 'Cybersecurity', count: microSaasServices.filter(s => s.category.includes('Cybersecurity')).length, color: 'from-red-500 to-pink-500' },
    { name: 'Compliance', count: microSaasServices.filter(s => s.category.includes('Compliance')).length, color: 'from-emerald-500 to-green-500' },
    { name: 'Data Analytics', count: microSaasServices.filter(s => s.category.includes('Data Analytics')).length, color: 'from-cyan-500 to-blue-500' },
    { name: 'Business Intelligence', count: microSaasServices.filter(s => s.category.includes('Business Intelligence')).length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Collaboration', count: microSaasServices.filter(s => s.category.includes('Collaboration')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Email Marketing', count: microSaasServices.filter(s => s.category.includes('Email Marketing')).length, color: 'from-orange-500 to-red-500' },
    { name: 'Translation', count: microSaasServices.filter(s => s.category.includes('Translation')).length, color: 'from-teal-500 to-green-500' },
    { name: 'Development', count: microSaasServices.filter(s => s.category.includes('Development')).length, color: 'from-gray-500 to-slate-500' },
    { name: 'Design', count: microSaasServices.filter(s => s.category.includes('Design')).length, color: 'from-pink-500 to-purple-500' }
  ];

  const filteredServices = selectedCategory === 'All Services' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '25,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> }
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

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of AI-powered micro SAAS solutions. From analytics to automation, we provide ready-to-use business tools that transform your operations."
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
              <span className="text-cyan-400 text-sm font-medium">50+ AI-Powered Micro SAAS Solutions</span>
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
                Get Started Today
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
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                      {service.savings && (
                        <div className="text-green-400 text-xs font-semibold mt-1">
                          Save {service.savings}
                        </div>
                      )}
                      {service.marketPrice && (
                        <div className="text-gray-400 text-xs mt-1">
                          Market: {service.marketPrice}
                        </div>
                      )}
                    </div>
                    
                    {/* Rating and Users */}
                    <div className="flex items-center justify-center space-x-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-gray-300">{service.rating}</span>
                      </div>
                      <div className="text-gray-400">{service.users} users</div>
                      <div className="text-cyan-400">{service.freeTrial} free trial</div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
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
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
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
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;