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
  Ethernet,
  Zap,
  Bot,
  Cpu as CpuIcon,
  Network,
  HardDrive as HardDriveIcon,
  Server as ServerIcon,
  MemoryStick as MemoryStickIcon,
  Disc as DiscIcon,
  Cd as CdIcon,
  Dvd as DvdIcon,
  FloppyDisk as FloppyDiskIcon,
  Usb as UsbIcon,
  Hdmi as HdmiIcon,
  Ethernet as EthernetIcon
} from 'lucide-react';

const AIServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All AI Services');

  const aiServices = [
    // AI Analytics & Intelligence
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation for data-driven decision making.',
      price: '$2,999/month',
      originalPrice: '$5,999/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Automated report generation',
        'Custom dashboard builder',
        'Multi-source data integration',
        'AI-powered insights',
        'Machine learning models',
        'Natural language queries',
        'Mobile app included',
        '24/7 support'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Analytics',
      link: '/ai-analytics-dashboard-pro',
      popular: true,
      rating: 4.9,
      users: '500+',
      freeTrial: '30 days',
      marketPrice: '$8,000-15,000/month',
      savings: '50%'
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      description: 'Comprehensive BI platform with AI-powered analytics, predictive modeling, and automated business insights generation for enterprise organizations.',
      price: '$4,999/month',
      originalPrice: '$9,999/month',
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
      category: 'AI Analytics',
      link: '/ai-business-intelligence-pro',
      popular: true,
      rating: 4.8,
      users: '200+',
      freeTrial: '30 days',
      marketPrice: '$15,000-25,000/month',
      savings: '50%'
    },
    {
      id: 'ai-data-analytics-pro',
      name: 'AI Data Analytics Pro',
      description: 'Advanced data analytics platform with machine learning models, automated data processing, and intelligent insights for complex datasets.',
      price: '$3,499/month',
      originalPrice: '$6,999/month',
      features: [
        'Machine learning models',
        'Automated data processing',
        'Intelligent insights',
        'Data visualization',
        'Statistical analysis',
        'Pattern recognition',
        'Anomaly detection',
        'Predictive modeling',
        'Data quality assessment',
        'Custom algorithms'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'AI Analytics',
      link: '/ai-data-analytics-pro',
      popular: false,
      rating: 4.7,
      users: '300+',
      freeTrial: '30 days',
      marketPrice: '$10,000-18,000/month',
      savings: '50%'
    },

    // AI Content & Creative
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform that generates high-quality blog posts, articles, marketing copy, and creative content with brand consistency.',
      price: '$1,999/month',
      originalPrice: '$3,999/month',
      features: [
        'Blog post generation',
        'Article writing',
        'Marketing copy',
        'Creative content',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Content calendar',
        'Plagiarism checker',
        'A/B testing'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'AI Content',
      link: '/ai-content-generation-pro',
      popular: true,
      rating: 4.8,
      users: '800+',
      freeTrial: '14 days',
      marketPrice: '$5,000-10,000/month',
      savings: '50%'
    },
    {
      id: 'ai-video-generation-pro',
      name: 'AI Video Generation Pro',
      description: 'Professional AI video creation platform with advanced editing capabilities, voice synthesis, and custom branding for marketing and training content.',
      price: '$2,499/month',
      originalPrice: '$4,999/month',
      features: [
        'Text-to-video generation',
        'Advanced editing tools',
        'Voice synthesis',
        'Custom branding',
        'HD/4K export',
        'Animation effects',
        'Background music',
        'Auto-captions',
        'Multi-language support',
        'Batch processing'
      ],
      icon: <Video className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'AI Content',
      link: '/ai-video-generation-pro',
      popular: true,
      rating: 4.9,
      users: '400+',
      freeTrial: '14 days',
      marketPrice: '$8,000-15,000/month',
      savings: '50%'
    },
    {
      id: 'ai-design-studio-pro',
      name: 'AI Design Studio Pro',
      description: 'Professional AI design platform that creates logos, graphics, marketing materials, and brand assets with advanced customization options.',
      price: '$1,799/month',
      originalPrice: '$3,599/month',
      features: [
        'Logo generation',
        'Graphic design',
        'Brand assets',
        'Marketing materials',
        'Template library',
        'Custom styles',
        'Batch processing',
        'High-res exports',
        'Team collaboration',
        'Brand guidelines'
      ],
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500',
      category: 'AI Content',
      link: '/ai-design-studio-pro',
      popular: false,
      rating: 4.7,
      users: '600+',
      freeTrial: '14 days',
      marketPrice: '$4,000-8,000/month',
      savings: '50%'
    },

    // AI Customer Experience
    {
      id: 'ai-customer-support-chatbot',
      name: 'AI Customer Support Chatbot Pro',
      description: 'Advanced AI chatbot system with natural language processing, multi-channel support, and intelligent ticket routing for enhanced customer experience.',
      price: '$2,299/month',
      originalPrice: '$4,599/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Intelligent routing',
        'Sentiment analysis',
        'Knowledge base integration',
        'Live chat handoff',
        'Performance analytics',
        'Custom workflows',
        'API integration',
        '24/7 availability'
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'AI Customer Experience',
      link: '/ai-customer-support-chatbot',
      popular: true,
      rating: 4.8,
      users: '700+',
      freeTrial: '30 days',
      marketPrice: '$6,000-12,000/month',
      savings: '50%'
    },
    {
      id: 'ai-customer-insights-pro',
      name: 'AI Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavioral insights, churn prediction, and personalized recommendations for better customer retention.',
      price: '$2,999/month',
      originalPrice: '$5,999/month',
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
      category: 'AI Customer Experience',
      link: '/ai-customer-insights-pro',
      popular: true,
      rating: 4.8,
      users: '500+',
      freeTrial: '30 days',
      marketPrice: '$8,000-15,000/month',
      savings: '50%'
    },
    {
      id: 'ai-voice-assistant-pro',
      name: 'AI Voice Assistant Pro',
      description: 'Enterprise-grade AI voice assistant with natural language processing, custom training, and multi-language support for business applications.',
      price: '$3,499/month',
      originalPrice: '$6,999/month',
      features: [
        'Natural language processing',
        'Custom voice training',
        'Multi-language support',
        'API integration',
        'Analytics dashboard',
        'Mobile app',
        '24/7 availability',
        'Custom wake words',
        'Conversation memory',
        'Enterprise security'
      ],
      icon: <Mic className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'AI Customer Experience',
      link: '/ai-voice-assistant-pro',
      popular: false,
      rating: 4.7,
      users: '300+',
      freeTrial: '30 days',
      marketPrice: '$10,000-20,000/month',
      savings: '50%'
    },

    // AI Cybersecurity & Security
    {
      id: 'ai-cybersecurity-suite-pro',
      name: 'AI Cybersecurity Suite Pro',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, automated incident response, and compliance monitoring for enterprise security.',
      price: '$4,999/month',
      originalPrice: '$9,999/month',
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
      category: 'AI Cybersecurity',
      link: '/ai-cybersecurity-suite-pro',
      popular: true,
      rating: 4.9,
      users: '400+',
      freeTrial: '30 days',
      marketPrice: '$15,000-30,000/month',
      savings: '50%'
    },
    {
      id: 'ai-fraud-detection-pro',
      name: 'AI Fraud Detection Pro',
      description: 'Advanced fraud detection system with machine learning models, real-time monitoring, and automated prevention for financial institutions.',
      price: '$3,999/month',
      originalPrice: '$7,999/month',
      features: [
        'Machine learning models',
        'Real-time monitoring',
        'Automated prevention',
        'Risk scoring',
        'Pattern recognition',
        'Anomaly detection',
        'Transaction analysis',
        'Behavioral analysis',
        'Alert system',
        'Compliance reporting'
      ],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'AI Cybersecurity',
      link: '/ai-fraud-detection-pro',
      popular: true,
      rating: 4.8,
      users: '250+',
      freeTrial: '30 days',
      marketPrice: '$12,000-25,000/month',
      savings: '50%'
    },
    {
      id: 'ai-content-moderator-pro',
      name: 'AI Content Moderator Pro',
      description: 'Advanced content moderation system with AI-powered detection of inappropriate content, spam, and policy violations across platforms.',
      price: '$1,999/month',
      originalPrice: '$3,999/month',
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
      icon: <Eye className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI Cybersecurity',
      link: '/ai-content-moderator-pro',
      popular: false,
      rating: 4.6,
      users: '400+',
      freeTrial: '30 days',
      marketPrice: '$5,000-10,000/month',
      savings: '50%'
    },

    // AI Marketing & Sales
    {
      id: 'ai-marketing-automation-pro',
      name: 'AI Marketing Automation Pro',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization, lead nurturing, and personalized content delivery.',
      price: '$2,499/month',
      originalPrice: '$4,999/month',
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
      link: '/ai-marketing-automation-pro',
      popular: true,
      rating: 4.7,
      users: '600+',
      freeTrial: '30 days',
      marketPrice: '$6,000-12,000/month',
      savings: '50%'
    },
    {
      id: 'ai-crm-pro',
      name: 'AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive customer behavior analysis.',
      price: '$1,999/month',
      originalPrice: '$3,999/month',
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
      category: 'AI Marketing',
      link: '/ai-crm-pro',
      popular: true,
      rating: 4.8,
      users: '800+',
      freeTrial: '30 days',
      marketPrice: '$5,000-10,000/month',
      savings: '50%'
    },
    {
      id: 'ai-sentiment-analysis-pro',
      name: 'AI Sentiment Analysis Pro',
      description: 'Advanced sentiment analysis platform with real-time monitoring, multi-channel analysis, and actionable insights for customer success teams.',
      price: '$1,799/month',
      originalPrice: '$3,599/month',
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
      category: 'AI Marketing',
      link: '/ai-sentiment-analysis-pro',
      popular: false,
      rating: 4.7,
      users: '500+',
      freeTrial: '30 days',
      marketPrice: '$4,000-8,000/month',
      savings: '50%'
    },

    // AI Development & Engineering
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI coding assistant with intelligent code completion, bug detection, automated testing, and code optimization for development teams.',
      price: '$2,999/month',
      originalPrice: '$5,999/month',
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
      category: 'AI Development',
      link: '/ai-code-assistant-pro',
      popular: true,
      rating: 4.8,
      users: '900+',
      freeTrial: '30 days',
      marketPrice: '$8,000-15,000/month',
      savings: '50%'
    },
    {
      id: 'ai-testing-automation-pro',
      name: 'AI Testing Automation Pro',
      description: 'Intelligent testing automation platform with AI-powered test generation, execution, and maintenance for software quality assurance.',
      price: '$2,499/month',
      originalPrice: '$4,999/month',
      features: [
        'AI test generation',
        'Automated execution',
        'Test maintenance',
        'Bug detection',
        'Performance testing',
        'Regression testing',
        'API testing',
        'UI testing',
        'Load testing',
        'Quality metrics'
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'AI Development',
      link: '/ai-testing-automation-pro',
      popular: false,
      rating: 4.7,
      users: '400+',
      freeTrial: '30 days',
      marketPrice: '$6,000-12,000/month',
      savings: '50%'
    },
    {
      id: 'ai-api-manager-pro',
      name: 'AI API Manager Pro',
      description: 'Intelligent API management platform with automated documentation, testing, monitoring, and optimization for enterprise APIs.',
      price: '$1,999/month',
      originalPrice: '$3,999/month',
      features: [
        'Automated documentation',
        'API testing',
        'Performance monitoring',
        'Usage analytics',
        'Rate limiting',
        'Security management',
        'Version control',
        'Developer portal',
        'Integration tools',
        'Compliance monitoring'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'AI Development',
      link: '/ai-api-manager-pro',
      popular: false,
      rating: 4.6,
      users: '350+',
      freeTrial: '30 days',
      marketPrice: '$5,000-10,000/month',
      savings: '50%'
    },

    // AI Operations & Infrastructure
    {
      id: 'ai-devops-pro',
      name: 'AI DevOps Pro',
      description: 'AI-powered DevOps platform with automated deployment, monitoring, and optimization for modern software development workflows.',
      price: '$3,499/month',
      originalPrice: '$6,999/month',
      features: [
        'Automated deployment',
        'Continuous monitoring',
        'Performance optimization',
        'Infrastructure management',
        'Container orchestration',
        'CI/CD pipelines',
        'Log analysis',
        'Alert management',
        'Capacity planning',
        'Cost optimization'
      ],
      icon: <Server className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'AI Operations',
      link: '/ai-devops-pro',
      popular: true,
      rating: 4.8,
      users: '500+',
      freeTrial: '30 days',
      marketPrice: '$10,000-20,000/month',
      savings: '50%'
    },
    {
      id: 'ai-performance-optimizer-pro',
      name: 'AI Performance Optimizer Pro',
      description: 'Advanced performance monitoring and optimization platform with AI-powered recommendations for applications and infrastructure.',
      price: '$2,999/month',
      originalPrice: '$5,999/month',
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
      category: 'AI Operations',
      link: '/ai-performance-optimizer-pro',
      popular: false,
      rating: 4.7,
      users: '400+',
      freeTrial: '30 days',
      marketPrice: '$8,000-15,000/month',
      savings: '50%'
    },
    {
      id: 'ai-cloud-manager-pro',
      name: 'AI Cloud Manager Pro',
      description: 'Intelligent cloud management platform with automated resource allocation, cost optimization, and security monitoring for multi-cloud environments.',
      price: '$4,499/month',
      originalPrice: '$8,999/month',
      features: [
        'Resource allocation',
        'Cost optimization',
        'Security monitoring',
        'Multi-cloud support',
        'Automated scaling',
        'Compliance monitoring',
        'Performance analytics',
        'Disaster recovery',
        'Migration tools',
        'Expert support'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      category: 'AI Operations',
      link: '/ai-cloud-manager-pro',
      popular: true,
      rating: 4.8,
      users: '300+',
      freeTrial: '30 days',
      marketPrice: '$15,000-30,000/month',
      savings: '50%'
    },

    // AI Specialized Solutions
    {
      id: 'ai-translator-pro',
      name: 'AI Translator Pro',
      description: 'Advanced AI translation platform with context awareness, industry-specific terminology, and real-time translation for global businesses.',
      price: '$1,499/month',
      originalPrice: '$2,999/month',
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
      category: 'AI Specialized',
      link: '/ai-translator-pro',
      popular: false,
      rating: 4.7,
      users: '600+',
      freeTrial: '14 days',
      marketPrice: '$4,000-8,000/month',
      savings: '50%'
    },
    {
      id: 'ai-supply-chain-optimizer-pro',
      name: 'AI Supply Chain Optimizer Pro',
      description: 'Advanced supply chain optimization platform with demand forecasting, route optimization, and supplier risk assessment for logistics.',
      price: '$4,999/month',
      originalPrice: '$9,999/month',
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
      icon: <Truck className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'AI Specialized',
      link: '/ai-supply-chain-optimizer-pro',
      popular: false,
      rating: 4.7,
      users: '200+',
      freeTrial: '30 days',
      marketPrice: '$15,000-30,000/month',
      savings: '50%'
    },
    {
      id: 'ai-financial-forecaster-pro',
      name: 'AI Financial Forecaster Pro',
      description: 'Advanced financial forecasting platform with machine learning models, scenario planning, and automated reporting for CFOs and finance teams.',
      price: '$3,999/month',
      originalPrice: '$7,999/month',
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
      category: 'AI Specialized',
      link: '/ai-financial-forecaster-pro',
      popular: true,
      rating: 4.8,
      users: '250+',
      freeTrial: '30 days',
      marketPrice: '$12,000-25,000/month',
      savings: '50%'
    }
  ];

  const categories = [
    { name: 'All AI Services', count: aiServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'AI Analytics', count: aiServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Content', count: aiServices.filter(s => s.category.includes('Content')).length, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Customer Experience', count: aiServices.filter(s => s.category.includes('Customer Experience')).length, color: 'from-indigo-500 to-purple-500' },
    { name: 'AI Cybersecurity', count: aiServices.filter(s => s.category.includes('Cybersecurity')).length, color: 'from-red-500 to-pink-500' },
    { name: 'AI Marketing', count: aiServices.filter(s => s.category.includes('Marketing')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Development', count: aiServices.filter(s => s.category.includes('Development')).length, color: 'from-gray-500 to-slate-500' },
    { name: 'AI Operations', count: aiServices.filter(s => s.category.includes('Operations')).length, color: 'from-cyan-500 to-blue-500' },
    { name: 'AI Specialized', count: aiServices.filter(s => s.category.includes('Specialized')).length, color: 'from-teal-500 to-green-500' }
  ];

  const filteredServices = selectedCategory === 'All AI Services' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '25+', label: 'AI Services', icon: <Brain className="w-6 h-6" /> },
    { number: '5,000+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <Headphones className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and focus on strategic initiatives with AI-powered solutions",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "60% efficiency boost"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization",
      icon: <Target className="w-6 h-6" />,
      stat: "40% cost savings"
    },
    {
      title: "Better Insights",
      description: "Gain deeper insights into your business with advanced AI analytics and predictions",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "95% accuracy"
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'TechCorp Global',
      role: 'CTO',
      content: 'Zion AI Analytics Dashboard Pro transformed our data insights. We increased our conversion rate by 60% in just 6 months.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Sarah Williams',
      company: 'Enterprise Solutions',
      role: 'VP of Marketing',
      content: 'The AI Marketing Automation platform is incredible. Our campaign ROI increased by 80% with automated optimization.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Financial Services Inc.',
      role: 'Chief Security Officer',
      content: 'Zion AI Cybersecurity Suite Pro provides enterprise-grade protection. We prevented 99.9% of threats automatically.',
      rating: 5,
      avatar: 'MR'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive AI services including analytics, content generation, cybersecurity, and workflow automation. Enterprise-grade AI solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, business AI solutions, enterprise AI, AI consulting"
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
              <span className="text-cyan-400 text-sm font-medium">25+ Enterprise AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
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
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to deliver measurable results and transform your business operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 mb-3">{benefit.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
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

        {/* AI Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Enterprise AI Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to transform your business operations and drive innovation.
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
                See what our enterprise clients say about our AI services
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you identify the best opportunities for your business 
                and implement solutions that drive real results.
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
                  Get Started Today
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

export default AIServicesPage;