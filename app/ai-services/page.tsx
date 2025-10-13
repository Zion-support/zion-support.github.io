import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Mail, 
  Smartphone, 
  Globe, 
  Star, 
  CheckCircle, 
  Sparkles,
  Target,
  FileText,
  Bot,
  Cloud,
  Database,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Headphones,
  Award,
  Rocket,
  TrendingUp,
  Calendar,
  MessageSquare,
  Image,
  Video,
  Music,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Eye,
  Heart,
  ThumbsUp,
  Clock,
  DollarSign,
  Percent,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Play,
  Pause,
  Stop,
  RefreshCw,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Maximize,
  Minimize,
  Move,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalLow,
  SignalZero,
  SignalHigh,
  SignalMedium,
  Package,
  ShoppingCart,
  CreditCard,
  Truck,
  MapPin,
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
  Gift,
  ShoppingBag,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Thermometer,
  Gauge,
  Bluetooth,
  Radio,
  Tv,
  Tablet,
  Watch,
  Speaker,
  Disc,
  Cd,
  Dvd,
  FloppyDisk,
  Usb,
  Hdmi,
  Ethernet,
  Code,
  Terminal,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  GitCompare,
  GitBranch as GitBranchIcon,
  GitCommit as GitCommitIcon,
  GitMerge as GitMergeIcon,
  GitPullRequest as GitPullRequestIcon,
  GitCompare as GitCompareIcon,
  Layers,
  Box,
  Archive,
  Folder,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FileSpreadsheet,
  FileText as FileTextIcon,
  FileCode,
  FileJson,
  FileXml,
  FileCsv,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileEdit,
  FileSearch,
  FileSliders,
  FileBarChart,
  FilePieChart,
  FileLineChart,
  FileScissors,
  FileType,
  FileUp,
  FileDown,
  FileLeft,
  FileRight,
  FileQuestion,
  FileWarning,
  FileInfo,
  FileClock,
  FileHeart,
  FileStar,
  FileShield,
  FileLock,
  FileUnlock,
  FileKey,
  FileUser,
  FileUsers,
  FileSettings,
  FileCog,
  FileWrench,
  FileHammer,
  FileScrewdriver,
  FileWrench as FileWrenchIcon,
  FileHammer as FileHammerIcon,
  FileScrewdriver as FileScrewdriverIcon,
  FileCog as FileCogIcon,
  FileSettings as FileSettingsIcon,
  FileUser as FileUserIcon,
  FileUsers as FileUsersIcon,
  FileKey as FileKeyIcon,
  FileLock as FileLockIcon,
  FileUnlock as FileUnlockIcon,
  FileShield as FileShieldIcon,
  FileStar as FileStarIcon,
  FileHeart as FileHeartIcon,
  FileClock as FileClockIcon,
  FileInfo as FileInfoIcon,
  FileWarning as FileWarningIcon,
  FileQuestion as FileQuestionIcon,
  FileRight as FileRightIcon,
  FileLeft as FileLeftIcon,
  FileDown as FileDownIcon,
  FileUp as FileUpIcon,
  FileType as FileTypeIcon,
  FileScissors as FileScissorsIcon,
  FileLineChart as FileLineChartIcon,
  FilePieChart as FilePieChartIcon,
  FileBarChart as FileBarChartIcon,
  FileSliders as FileSlidersIcon,
  FileSearch as FileSearchIcon,
  FileEdit as FileEditIcon,
  FileMinus as FileMinusIcon,
  FilePlus as FilePlusIcon,
  FileX as FileXIcon,
  FileCheck as FileCheckIcon,
  FilePowerpoint as FilePowerpointIcon,
  FileExcel as FileExcelIcon,
  FileWord as FileWordIcon,
  FilePdf as FilePdfIcon,
  FileCsv as FileCsvIcon,
  FileXml as FileXmlIcon,
  FileJson as FileJsonIcon,
  FileCode as FileCodeIcon,
  FileText as FileTextIcon2,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileAudio as FileAudioIcon,
  FileVideo as FileVideoIcon,
  FileImage as FileImageIcon,
  File as FileIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  Box as BoxIcon,
  Layers as LayersIcon,
  GitCompare as GitCompareIcon2,
  GitPullRequest as GitPullRequestIcon2,
  GitMerge as GitMergeIcon2,
  GitCommit as GitCommitIcon2,
  GitBranch as GitBranchIcon2,
  Terminal as TerminalIcon,
  Code as CodeIcon
} from 'lucide-react';

const AIServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All AI Services');

  const aiServices = [
    // AI Analytics & Business Intelligence
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
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
        '24/7 support'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Analytics',
      link: '/ai-analytics-dashboard-pro',
      popular: true,
      rating: 4.9,
      users: '2,500+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Performance Monitoring']
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      description: 'Comprehensive BI platform with AI-powered analytics, predictive modeling, and automated business insights generation for enterprise decision making.',
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
        'API integration'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'AI Analytics',
      link: '/ai-business-intelligence-pro',
      popular: true,
      rating: 4.8,
      users: '1,000+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Enterprise Analytics', 'Strategic Planning', 'Market Analysis', 'Financial Forecasting']
    },
    {
      id: 'ai-data-analytics-pro',
      name: 'AI Data Analytics Pro',
      description: 'Advanced data analytics platform with machine learning algorithms, automated data processing, and intelligent insights for complex data analysis.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Machine learning algorithms',
        'Automated data processing',
        'Intelligent insights',
        'Data quality assessment',
        'Statistical analysis',
        'Trend identification',
        'Anomaly detection',
        'Custom models'
      ],
      icon: <PieChart className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'AI Analytics',
      link: '/ai-data-analytics-pro',
      popular: false,
      rating: 4.7,
      users: '1,300+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Data Science', 'Machine Learning', 'Statistical Analysis', 'Research & Development']
    },

    // AI Content & Marketing
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform that generates high-quality blog posts, social media content, marketing copy, and multimedia content with brand consistency.',
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
        'Plagiarism checker'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'AI Content',
      link: '/ai-content-generation-pro',
      popular: true,
      rating: 4.7,
      users: '3,200+',
      freeTrial: '7 days',
      savings: '50%',
      useCases: ['Content Marketing', 'Social Media', 'Blog Writing', 'Email Campaigns']
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization, lead nurturing, personalized content delivery, and advanced analytics.',
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
        'ROI tracking'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI Marketing',
      link: '/ai-marketing-automation',
      popular: true,
      rating: 4.7,
      users: '2,800+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Lead Generation', 'Email Marketing', 'Campaign Management', 'Customer Retention']
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'AI-powered social media management platform with automated posting, content optimization, engagement tracking, and performance analytics across all platforms.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Automated posting',
        'Content optimization',
        'Hashtag research',
        'Engagement tracking',
        'Multi-platform support',
        'Content calendar',
        'Analytics dashboard',
        'Team collaboration'
      ],
      icon: <Share className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'AI Marketing',
      link: '/ai-social-media-manager',
      popular: false,
      rating: 4.5,
      users: '2,300+',
      freeTrial: '7 days',
      savings: '50%',
      useCases: ['Social Media Management', 'Brand Awareness', 'Community Building', 'Influencer Marketing']
    },

    // AI Customer Experience
    {
      id: 'ai-customer-support-chatbot',
      name: 'AI Customer Support Chatbot',
      description: 'Intelligent customer support system with advanced AI chatbots, automated ticket routing, sentiment analysis, and multi-channel support capabilities.',
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
        'API integration'
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'AI Support',
      link: '/ai-customer-support-chatbot',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Customer Service', 'Help Desk', 'Live Chat', 'Support Automation']
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      description: 'Advanced customer analytics platform with behavioral insights, churn prediction, personalized recommendations, and customer segmentation for better retention.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Behavioral analytics',
        'Churn prediction',
        'Personalized recommendations',
        'Customer segmentation',
        'Real-time insights',
        'ROI tracking',
        'Predictive modeling',
        'Actionable insights'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Customer',
      link: '/ai-customer-insights',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Customer Analytics', 'Churn Prevention', 'Personalization', 'Customer Segmentation']
    },
    {
      id: 'ai-sentiment-analysis-pro',
      name: 'AI Sentiment Analysis Pro',
      description: 'Real-time customer sentiment monitoring across all channels with automated alerts, trend analysis, and actionable insights for customer success teams.',
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
        'Review analysis'
      ],
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'AI Customer',
      link: '/ai-sentiment-analysis-pro',
      popular: false,
      rating: 4.5,
      users: '900+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Brand Monitoring', 'Customer Feedback', 'Reputation Management', 'Market Research']
    },

    // AI Development & Code
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with intelligent code completion, bug detection, automated testing, and code review for development teams.',
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
        'Team collaboration'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500',
      category: 'AI Development',
      link: '/ai-code-assistant-pro',
      popular: true,
      rating: 4.8,
      users: '2,200+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Software Development', 'Code Review', 'Bug Fixing', 'Documentation']
    },
    {
      id: 'ai-code-generation',
      name: 'AI Code Generation',
      description: 'Intelligent code generation platform that creates clean, efficient code from natural language descriptions, with support for multiple programming languages.',
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'Natural language to code',
        'Multi-language support',
        'Code optimization',
        'Error handling',
        'Documentation generation',
        'Code testing',
        'Version control integration',
        'Team collaboration'
      ],
      icon: <Terminal className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI Development',
      link: '/ai-code-generation',
      popular: false,
      rating: 4.6,
      users: '1,400+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Rapid Prototyping', 'Code Templates', 'API Development', 'Microservices']
    },
    {
      id: 'ai-automated-testing',
      name: 'AI Automated Testing',
      description: 'AI-powered automated testing platform that generates test cases, performs intelligent testing, and identifies bugs with minimal human intervention.',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Test case generation',
        'Intelligent testing',
        'Bug identification',
        'Performance testing',
        'Security testing',
        'Regression testing',
        'Test reporting',
        'CI/CD integration'
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      category: 'AI Development',
      link: '/ai-automated-testing',
      popular: false,
      rating: 4.7,
      users: '1,100+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Quality Assurance', 'Regression Testing', 'Performance Testing', 'Security Testing']
    },

    // AI Security & Compliance
    {
      id: 'ai-cybersecurity-suite-pro',
      name: 'AI Cybersecurity Suite Pro',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, automated incident response, vulnerability scanning, and compliance monitoring.',
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
        'Expert support'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'AI Security',
      link: '/ai-cybersecurity-suite-pro',
      popular: true,
      rating: 4.9,
      users: '1,100+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Threat Detection', 'Incident Response', 'Compliance', 'Security Monitoring']
    },
    {
      id: 'ai-fraud-detection-pro',
      name: 'AI Fraud Detection Pro',
      description: 'Advanced fraud detection system using machine learning algorithms to identify suspicious activities, prevent fraud, and protect financial transactions.',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Real-time fraud detection',
        'Machine learning algorithms',
        'Pattern recognition',
        'Risk scoring',
        'Automated alerts',
        'Transaction monitoring',
        'Behavioral analysis',
        'Compliance reporting'
      ],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'AI Security',
      link: '/ai-fraud-detection-pro',
      popular: true,
      rating: 4.8,
      users: '1,600+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Financial Security', 'Transaction Monitoring', 'Risk Management', 'Compliance']
    },
    {
      id: 'ai-content-moderation-pro',
      name: 'AI Content Moderation Pro',
      description: 'Automated content moderation platform with AI-powered detection of inappropriate content, spam, policy violations, and automated actions.',
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
        'Real-time processing'
      ],
      icon: <Eye className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500',
      category: 'AI Security',
      link: '/ai-content-moderation-pro',
      popular: false,
      rating: 4.5,
      users: '1,800+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Content Moderation', 'Spam Prevention', 'Policy Enforcement', 'Community Management']
    },

    // AI Automation & Workflow
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Comprehensive AI automation platform that streamlines business processes, automates repetitive tasks, and optimizes workflows across departments.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Process automation',
        'Task optimization',
        'Workflow management',
        'Integration capabilities',
        'Custom automation rules',
        'Performance monitoring',
        'Error handling',
        'Scalable architecture'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI Automation',
      link: '/ai-automation-platform',
      popular: true,
      rating: 4.7,
      users: '2,500+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Business Process Management']
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation system that learns from user behavior, optimizes processes, and automates complex business workflows.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Intelligent automation',
        'Process learning',
        'Workflow optimization',
        'Custom triggers',
        'Conditional logic',
        'Integration APIs',
        'Performance analytics',
        'Error recovery'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'AI Automation',
      link: '/ai-workflow-automation',
      popular: false,
      rating: 4.6,
      users: '1,200+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Business Process Automation', 'Workflow Management', 'Task Optimization', 'Process Intelligence']
    },

    // AI Communication & Language
    {
      id: 'ai-language-translation',
      name: 'AI Language Translation',
      description: 'Advanced AI translation platform with real-time translation, document processing, context awareness, and multi-language support for global businesses.',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Real-time translation',
        'Document processing',
        '100+ languages',
        'Context awareness',
        'API integration',
        'Batch processing',
        'Quality assurance',
        'Custom glossaries'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-teal-500 to-green-500',
      category: 'AI Language',
      link: '/ai-language-translation',
      popular: false,
      rating: 4.7,
      users: '1,800+',
      freeTrial: '7 days',
      savings: '50%',
      useCases: ['Global Communication', 'Document Translation', 'Multilingual Support', 'Localization']
    },
    {
      id: 'ai-voice-assistant-pro',
      name: 'AI Voice Assistant Pro',
      description: 'Advanced voice assistant with natural language processing, multi-language support, custom voice training, and integration capabilities for business applications.',
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
        '24/7 availability'
      ],
      icon: <Mic className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'AI Voice',
      link: '/ai-voice-assistant-pro',
      popular: false,
      rating: 4.7,
      users: '900+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Voice Commands', 'Customer Service', 'Accessibility', 'Hands-free Operations']
    },
    {
      id: 'ai-conversational-ai',
      name: 'AI Conversational AI',
      description: 'Advanced conversational AI platform that creates intelligent chatbots and virtual assistants with natural language understanding and context awareness.',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Natural language understanding',
        'Context awareness',
        'Multi-turn conversations',
        'Intent recognition',
        'Entity extraction',
        'Conversation flow design',
        'Analytics dashboard',
        'Integration APIs'
      ],
      icon: <Bot className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'AI Voice',
      link: '/ai-conversational-ai',
      popular: true,
      rating: 4.8,
      users: '2,000+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Chatbots', 'Virtual Assistants', 'Customer Service', 'Conversational Interfaces']
    },

    // AI Specialized Solutions
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced computer vision platform with image recognition, object detection, facial recognition, and visual analysis capabilities for various industries.',
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'Image recognition',
        'Object detection',
        'Facial recognition',
        'Visual analysis',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Batch processing'
      ],
      icon: <Camera className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'AI Vision',
      link: '/ai-computer-vision',
      popular: false,
      rating: 4.6,
      users: '1,400+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Image Analysis', 'Object Detection', 'Facial Recognition', 'Visual Inspection']
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'AI-powered predictive maintenance system that uses machine learning to predict equipment failures, optimize maintenance schedules, and reduce downtime.',
      price: '$349/month',
      originalPrice: '$699/month',
      features: [
        'Failure prediction',
        'Maintenance optimization',
        'Equipment monitoring',
        'Risk assessment',
        'Cost optimization',
        'Real-time alerts',
        'Maintenance scheduling',
        'Performance analytics'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'AI Industrial',
      link: '/ai-predictive-maintenance',
      popular: false,
      rating: 4.7,
      users: '800+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Manufacturing', 'Equipment Maintenance', 'Asset Management', 'Industrial IoT']
    },
    {
      id: 'ai-supply-chain-optimizer',
      name: 'AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, route optimization, supplier risk assessment, and real-time tracking for logistics.',
      price: '$349/month',
      originalPrice: '$699/month',
      features: [
        'Demand forecasting',
        'Route optimization',
        'Supplier risk assessment',
        'Cost analysis',
        'Inventory management',
        'Real-time tracking',
        'Performance analytics',
        'Integration APIs'
      ],
      icon: <Truck className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'AI Supply Chain',
      link: '/ai-supply-chain-optimizer',
      popular: false,
      rating: 4.6,
      users: '700+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Logistics', 'Supply Chain Management', 'Inventory Optimization', 'Demand Planning']
    },
    {
      id: 'ai-financial-analysis',
      name: 'AI Financial Analysis',
      description: 'Advanced financial analysis platform with AI-powered forecasting, risk assessment, investment analysis, and automated financial reporting for CFOs.',
      price: '$399/month',
      originalPrice: '$799/month',
      features: [
        'Financial forecasting',
        'Risk assessment',
        'Investment analysis',
        'Cash flow prediction',
        'Scenario planning',
        'Automated reporting',
        'Compliance monitoring',
        'Real-time analytics'
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI Finance',
      link: '/ai-financial-analysis',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      freeTrial: '14 days',
      savings: '50%',
      useCases: ['Financial Planning', 'Risk Management', 'Investment Analysis', 'Financial Reporting']
    }
  ];

  const categories = [
    { name: 'All AI Services', count: aiServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'AI Analytics', count: aiServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Content', count: aiServices.filter(s => s.category.includes('Content')).length, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Marketing', count: aiServices.filter(s => s.category.includes('Marketing')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Support', count: aiServices.filter(s => s.category.includes('Support')).length, color: 'from-indigo-500 to-purple-500' },
    { name: 'AI Customer', count: aiServices.filter(s => s.category.includes('Customer')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Development', count: aiServices.filter(s => s.category.includes('Development')).length, color: 'from-gray-500 to-slate-500' },
    { name: 'AI Security', count: aiServices.filter(s => s.category.includes('Security')).length, color: 'from-red-500 to-pink-500' },
    { name: 'AI Automation', count: aiServices.filter(s => s.category.includes('Automation')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Language', count: aiServices.filter(s => s.category.includes('Language')).length, color: 'from-teal-500 to-green-500' },
    { name: 'AI Voice', count: aiServices.filter(s => s.category.includes('Voice')).length, color: 'from-violet-500 to-purple-500' },
    { name: 'AI Vision', count: aiServices.filter(s => s.category.includes('Vision')).length, color: 'from-cyan-500 to-blue-500' },
    { name: 'AI Industrial', count: aiServices.filter(s => s.category.includes('Industrial')).length, color: 'from-orange-500 to-red-500' },
    { name: 'AI Supply Chain', count: aiServices.filter(s => s.category.includes('Supply Chain')).length, color: 'from-indigo-500 to-blue-500' },
    { name: 'AI Finance', count: aiServices.filter(s => s.category.includes('Finance')).length, color: 'from-green-500 to-emerald-500' }
  ];

  const stats = [
    { number: '25+', label: 'AI Services', icon: <Brain className="w-6 h-6" /> },
    { number: '15,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Headphones className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'TechCorp Analytics',
      role: 'Chief Data Officer',
      content: 'Zion AI Analytics Pro revolutionized our data insights. We achieved 60% faster decision-making and 40% improvement in predictive accuracy.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Digital Marketing Solutions',
      role: 'Marketing Director',
      content: 'The AI Marketing Automation platform increased our campaign ROI by 85%. The personalization features are incredibly powerful.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      company: 'CustomerFirst Inc.',
      role: 'VP of Customer Success',
      content: 'Our customer satisfaction scores improved by 45% after implementing Zion AI Customer Support. The chatbot handles 80% of inquiries automatically.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  const filteredServices = selectedCategory === 'All AI Services' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of AI services powered by cutting-edge artificial intelligence. From analytics to automation, we provide intelligent solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI development, AI security, AI marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">25+ AI Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence with our comprehensive suite of AI services. 
              From analytics to automation, we provide intelligent solutions that transform your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 hover:border-cyan-500/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedCategory === 'All AI Services' ? 'All AI Services' : selectedCategory + ' Services'}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {selectedCategory === 'All AI Services' 
                  ? 'Discover our complete range of AI services designed to transform your business operations with artificial intelligence.'
                  : `Explore our ${selectedCategory.toLowerCase()} services powered by advanced AI technology.`
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
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
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                      )}
                      {service.savings && (
                        <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          {service.savings} OFF
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">{service.freeTrial} free trial</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  {service.useCases && (
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Use Cases:</div>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.slice(0, 3).map((useCase, index) => (
                          <span key={index} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                            {useCase}
                          </span>
                        ))}
                        {service.useCases.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{service.useCases.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
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
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by AI Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what industry experts say about our AI services
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Harness AI Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI services to drive innovation and efficiency. 
              Start your AI transformation journey today with our cutting-edge solutions.
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
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start AI Journey
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
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;