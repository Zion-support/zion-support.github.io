'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server,
  Database,
  Globe,
  Smartphone,
  Mail,
  Calendar,
  DollarSign,
  Search,
  Filter,
  ChevronDown,
  Play,
  Download,
  ExternalLink,
  Award,
  Lock,
  Wifi,
  Monitor,
  Headphones,
  ShoppingCart,
  Code,
  Workflow,
  PieChart,
  Activity,
  Layers,
  Bot,
  Sparkles,
  Rocket,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Building,
  Car,
  Plane,
  Home,
  ShoppingBag,
  CreditCard,
  Banknote,
  TrendingDown,
  AlertTriangle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Copy,
  Share2,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Phone,
  Video,
  Camera,
  Image,
  Music,
  Volume2,
  VolumeX,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Palette,
  Brush,
  Eraser,
  PenTool,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Link2,
  Unlink,
  Image as ImageIcon,
  Table,
  Grid,
  Layout,
  Sidebar,
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
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Wink,
  Kiss,
  Tongue,
  Eye as EyeIcon,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Tag,
  Tags,
  Bookmark,
  BookmarkCheck,
  Flag,
  FlagOff,
  Pin,
  MapPin,
  Navigation,
  Compass,
  Map,
  Globe as GlobeIcon,
  Earth,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Umbrella,
  Sun as SunIcon,
  Moon as MoonIcon,
  Sunrise,
  Sunset,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  Hourglass,
  History,
  Archive,
  Inbox,
  Outbox,
  Send,
  Reply,
  ReplyAll,
  Forward,
  Share,
  Copy as CopyIcon,
  Cut,
  Paste,
  Undo,
  Redo,
  Save as SaveIcon,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  File,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCode,
  FileJson,
  FileXml,
  FileCsv,
  FileDatabase,
  FileArchive,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileEdit,
  FileSearch,
  FileDownload,
  FileUpload,
  FileShare,
  FileLock,
  FileUnlock,
  FileHeart,
  FileStar,
  FileFlag,
  FileBookmark,
  FileTag,
  FileFolder,
  FileUser,
  FileUsers,
  FileSettings,
  FileInfo,
  FileHelp,
  FileWarning,
  FileAlert,
  FileError,
  FileSuccess,
  FilePending,
  FileProcessing,
  FileComplete,
  FileCancel,
  FilePause,
  FilePlay,
  FileStop,
  FileRestart,
  FileRefresh,
  FileSync,
  FileBackup,
  FileRestore,
  FileImport,
  FileExport,
  FilePrint,
  FileScan,
  FileCompress,
  FileExtract,
  FileEncrypt,
  FileDecrypt,
  FileSign,
  FileVerify,
  FileValidate,
  FileTest,
  FileDebug,
  FileOptimize,
  FileCompile,
  FileBuild,
  FileDeploy,
  FileRelease,
  FileVersion,
  FileUpdate,
  FileUpgrade,
  FileDowngrade,
  FileRollback,
  FileRevert,
  FileReset,
  FileClear,
  FileEmpty,
  FileFull,
  FilePartial,
  FileIncomplete,
  FileBroken,
  FileCorrupt,
  FileInvalid,
  FileValid,
  FileApproved,
  FileRejected,
  FileAccepted,
  FileDeclined,
  FileConfirmed,
  FileDenied,
  FileGranted,
  FileRevoked,
  FileSuspended,
  FileActivated,
  FileDeactivated,
  FileEnabled,
  FileDisabled,
  FileOn,
  FileOff,
  FileTrue,
  FileFalse,
  FileYes,
  FileNo,
  FileMaybe,
  FileUnknown,
  FileQuestion,
  FileExclamation,
  FileAsterisk,
  FileAt,
  FileHash,
  FileDollar,
  FilePercent,
  FileAmpersand,
  FilePipe,
  FileBackslash,
  FileSlash,
  FileColon,
  FileSemicolon,
  FileComma,
  FilePeriod,
  FileQuestionMark,
  FileExclamationMark,
  FileQuotes,
  FileApostrophe,
  FileParentheses,
  FileBrackets,
  FileBraces,
  FileAngleBrackets,
  FileTilde,
  FileCaret,
  FilePlusMinus,
  FileEquals,
  FileNotEquals,
  FileLessThan,
  FileGreaterThan,
  FileLessThanOrEqual,
  FileGreaterThanOrEqual,
  FileApproximately,
  FileInfinity,
  FilePi,
  FileSigma,
  FileDelta,
  FileAlpha,
  FileBeta,
  FileGamma,
  FileOmega,
  FileLambda,
  FileMu,
  FileNu,
  FileXi,
  FileOmicron,
  FileRho,
  FileTau,
  FilePhi,
  FileChi,
  FilePsi,
  FileEpsilon,
  FileEta,
  FileTheta,
  FileIota,
  FileKappa,
  FileZeta,
  FileUpsilon,
  FileDigamma,
  FileStigma,
  FileSampi,
  FileKoppa,
  FileSan,
  FileSho,
  FileQoppa,
  FileTsan,
  FileDisigma,
  FileStigma as FileStigmaIcon,
  FileSampi as FileSampiIcon,
  FileKoppa as FileKoppaIcon,
  FileSan as FileSanIcon,
  FileSho as FileShoIcon,
  FileQoppa as FileQoppaIcon,
  FileTsan as FileTsanIcon,
  FileDisigma as FileDisigmaIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  const services = [
    // Customer Service & Support
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'CRM integration (Salesforce, HubSpot, Pipedrive)',
        'Real-time learning and adaptation',
        'Voice and text support',
        'Escalation to human agents',
        'Analytics and reporting dashboard'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions',
        'Improved customer satisfaction',
        'Reduced response time by 80%'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      link: '/ai-chatbot-builder'
    },
    {
      id: 'ai-customer-support-pro',
      name: 'AI Customer Support Pro',
      description: 'Enterprise-grade customer support automation with advanced AI capabilities and omnichannel support',
      price: '$599/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Omnichannel support (email, chat, phone, social)',
        'Advanced ticket routing and prioritization',
        'Knowledge base integration',
        'Customer sentiment tracking',
        'Predictive issue resolution',
        'Multi-agent collaboration',
        'Custom workflow automation',
        'Advanced analytics and insights'
      ],
      benefits: [
        'Reduce support tickets by 40%',
        'Improve first-call resolution by 65%',
        'Increase customer satisfaction scores',
        'Reduce agent workload by 50%'
      ],
      category: 'Customer Service',
      popular: true,
      icon: Headphones,
      link: '/ai-customer-support-pro'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Platform',
      description: 'Intelligent voice assistants for customer service, sales, and internal operations with natural conversation flow',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Natural voice recognition and synthesis',
        'Multi-language voice support',
        'Context-aware conversations',
        'Integration with phone systems',
        'Voice analytics and insights',
        'Custom voice training',
        'Real-time transcription',
        'Voice biometric authentication'
      ],
      benefits: [
        'Hands-free customer service',
        'Improved accessibility',
        'Reduced call center costs',
        'Enhanced user experience'
      ],
      category: 'Customer Service',
      popular: false,
      icon: Mic,
      link: '/ai-voice-assistant'
    },

    // Content & Marketing
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation (1000+ words)',
        'Social media content creation',
        'Email marketing campaigns',
        'SEO optimization suggestions',
        'Brand voice customization',
        'Multi-language content',
        'Content scheduling and publishing',
        'Plagiarism detection and originality scoring'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Increased content output by 300%'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      link: '/ai-content-generation'
    },
    {
      id: 'ai-content-studio',
      name: 'AI Content Studio Pro',
      description: 'Comprehensive content creation platform with AI-powered writing, editing, and optimization tools',
      price: '$349/month',
      marketPrice: '$600-2000/month',
      features: [
        'Advanced AI writing assistant',
        'Content optimization for SEO',
        'Visual content generation',
        'Video script creation',
        'Podcast script writing',
        'Press release generation',
        'White paper creation',
        'Content performance analytics'
      ],
      benefits: [
        'Complete content workflow automation',
        'Professional-quality output',
        'Time savings of 85%',
        'Improved content performance'
      ],
      category: 'Content',
      popular: true,
      icon: Edit,
      link: '/ai-content-studio'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization, segmentation, and optimization',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'AI-powered email personalization',
        'Dynamic content generation',
        'Send time optimization',
        'Subject line A/B testing',
        'Customer segmentation',
        'Behavioral trigger campaigns',
        'Email performance analytics',
        'Spam score optimization'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Automated campaign optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Mail,
      link: '/ai-email-marketing'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content creation, scheduling, and engagement',
      price: '$179/month',
      marketPrice: '$300-1200/month',
      features: [
        'Multi-platform posting (Facebook, Twitter, LinkedIn, Instagram)',
        'AI content generation for each platform',
        'Optimal posting time prediction',
        'Hashtag optimization',
        'Engagement monitoring and response',
        'Influencer identification',
        'Social media analytics',
        'Crisis management alerts'
      ],
      benefits: [
        'Save 70% social media management time',
        'Increase engagement by 50%',
        'Consistent brand presence',
        'Data-driven content strategy'
      ],
      category: 'Marketing',
      popular: false,
      icon: Share2,
      link: '/ai-social-media-manager'
    },

    // Analytics & Business Intelligence
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms for data-driven decisions',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboards and visualizations',
        'Automated report generation',
        'Anomaly detection and alerting',
        'Custom data models and algorithms',
        'Natural language query interface',
        'Data integration from multiple sources',
        'Advanced statistical analysis'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting accuracy of 95%',
        'Automated reporting saves 20 hours/week',
        'ROI optimization through insights'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart,
      link: '/ai-analytics'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Suite',
      description: 'Comprehensive BI platform with AI-powered insights, automated reporting, and predictive analytics',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Interactive dashboards and reports',
        'AI-powered data discovery',
        'Automated insight generation',
        'What-if scenario analysis',
        'Collaborative analytics workspace',
        'Mobile BI applications',
        'Data governance and security',
        'Custom KPI tracking and alerts'
      ],
      benefits: [
        'Faster decision making',
        'Reduced time to insight by 75%',
        'Improved data accuracy',
        'Self-service analytics for all users'
      ],
      category: 'Analytics',
      popular: true,
      icon: PieChart,
      link: '/ai-business-intelligence'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling and forecasting using machine learning for business planning and optimization',
      price: '$499/month',
      marketPrice: '$1000-3500/month',
      features: [
        'Time series forecasting',
        'Customer lifetime value prediction',
        'Churn prediction and prevention',
        'Demand forecasting',
        'Risk assessment and modeling',
        'Scenario planning and simulation',
        'Model performance monitoring',
        'Automated model retraining'
      ],
      benefits: [
        'Improve forecast accuracy by 40%',
        'Reduce business risks',
        'Optimize resource allocation',
        'Increase revenue through better planning'
      ],
      category: 'Analytics',
      popular: false,
      icon: TrendingUp,
      link: '/ai-predictive-analytics'
    },

    // Computer Vision & Image Processing
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics and monitoring',
        'Real-time image processing',
        'Custom model training',
        'API integration capabilities',
        'Edge computing deployment'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security monitoring',
        'Real-time processing capabilities',
        'Cost reduction through automation'
      ],
      category: 'Computer Vision',
      popular: true,
      icon: Eye,
      link: '/ai-computer-vision'
    },
    {
      id: 'ai-image-recognition',
      name: 'AI Image Recognition Pro',
      description: 'Advanced image recognition and classification system for various business applications and use cases',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Multi-class image classification',
        'Custom model training',
        'Batch processing capabilities',
        'API and SDK integration',
        'Real-time processing',
        'High accuracy recognition',
        'Cloud and edge deployment',
        'Detailed analytics and reporting'
      ],
      benefits: [
        'Automated image categorization',
        'Improved processing efficiency',
        'Reduced manual classification work',
        'Scalable image processing'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Camera,
      link: '/ai-image-recognition'
    },
    {
      id: 'ai-video-analysis',
      name: 'AI Video Analysis Platform',
      description: 'Intelligent video processing and analysis for security, marketing, and operational insights',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time video analysis',
        'Object and person tracking',
        'Behavioral analysis',
        'Scene understanding',
        'Video search and indexing',
        'Automated video editing',
        'Content moderation',
        'Performance analytics'
      ],
      benefits: [
        'Enhanced security monitoring',
        'Automated video processing',
        'Improved content management',
        'Real-time insights and alerts'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Video,
      link: '/ai-video-analysis'
    },

    // Voice & Audio Processing
    {
      id: 'ai-voice-processing',
      name: 'AI Voice Processing Suite',
      description: 'Comprehensive voice recognition, synthesis, and analysis platform for various business applications',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion (99% accuracy)',
        'Text-to-speech synthesis',
        'Voice biometric authentication',
        'Call analytics and insights',
        'Multi-language support',
        'Real-time processing',
        'Voice emotion detection',
        'Custom voice model training'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation capabilities',
        'Enhanced call quality insights',
        'Multi-language support'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Volume2,
      link: '/ai-voice-processing'
    },
    {
      id: 'ai-speech-synthesis',
      name: 'AI Speech Synthesis Pro',
      description: 'Advanced text-to-speech system with natural-sounding voices and emotional expression',
      price: '$199/month',
      marketPrice: '$350-1500/month',
      features: [
        'Natural-sounding voice synthesis',
        'Emotional voice modulation',
        'Multiple voice options',
        'Custom voice creation',
        'Real-time synthesis',
        'SSML support',
        'Audio format conversion',
        'Voice cloning capabilities'
      ],
      benefits: [
        'High-quality voice output',
        'Personalized voice experiences',
        'Reduced voice production costs',
        'Scalable voice generation'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic,
      link: '/ai-speech-synthesis'
    },

    // Automation & Workflow
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining and discovery',
        'Workflow optimization',
        'Task automation and orchestration',
        'Exception handling and recovery',
        'Performance monitoring and analytics',
        'Integration with 500+ applications',
        'Custom automation rules',
        'ROI tracking and reporting'
      ],
      benefits: [
        'Process efficiency improvements of 50%',
        'Error reduction by 80%',
        'Cost savings through automation',
        'Scalable process optimization'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap,
      link: '/ai-automation'
    },
    {
      id: 'ai-robotic-process-automation',
      name: 'AI Robotic Process Automation',
      description: 'Advanced RPA with AI capabilities for complex business process automation and optimization',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Intelligent document processing',
        'Cognitive automation capabilities',
        'Exception handling with AI',
        'Process learning and adaptation',
        'Multi-system integration',
        'Compliance and audit trails',
        'Performance analytics',
        'Scalable deployment options'
      ],
      benefits: [
        'Automate complex processes',
        'Reduce manual work by 90%',
        'Improve process accuracy',
        'Faster process execution'
      ],
      category: 'Automation',
      popular: true,
      icon: Bot,
      link: '/ai-robotic-process-automation'
    },

    // Security & Fraud Detection
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection System',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Anomaly detection and alerting',
        'Automated response systems',
        'False positive reduction',
        'Compliance reporting',
        'Custom rule configuration'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'Minimize false positives by 60%',
        'Compliance ready solutions'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      link: '/ai-fraud-detection'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity solution for threat detection, prevention, and response',
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Threat detection and analysis',
        'Automated incident response',
        'Behavioral analytics',
        'Vulnerability assessment',
        'Security orchestration',
        'Compliance monitoring',
        'Threat intelligence integration',
        '24/7 security monitoring'
      ],
      benefits: [
        'Proactive threat protection',
        'Reduced security incidents by 70%',
        'Faster incident response',
        'Comprehensive security coverage'
      ],
      category: 'Security',
      popular: true,
      icon: Lock,
      link: '/ai-cybersecurity'
    },

    // Personalization & Recommendations
    {
      id: 'ai-personalization',
      name: 'AI Personalization Engine',
      description: 'Advanced recommendation systems and personalization algorithms for enhanced customer experience',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Real-time recommendations',
        'Customer segmentation',
        'Behavioral analysis',
        'A/B testing automation',
        'Cross-platform personalization',
        'Dynamic content delivery',
        'Performance optimization',
        'Privacy-compliant data handling'
      ],
      benefits: [
        'Increase conversions by 40%',
        'Improve customer engagement',
        'Higher customer lifetime value',
        'Automated optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      link: '/ai-personalization'
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine Pro',
      description: 'Sophisticated recommendation system with machine learning for e-commerce, content, and services',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid recommendation approaches',
        'Real-time recommendation updates',
        'Multi-criteria recommendations',
        'Cold start problem handling',
        'Recommendation explainability',
        'Performance analytics and A/B testing'
      ],
      benefits: [
        'Increase sales by 25%',
        'Improve user engagement',
        'Reduce bounce rates',
        'Personalized user experiences'
      ],
      category: 'Marketing',
      popular: false,
      icon: Star,
      link: '/ai-recommendation-engine'
    },

    // Healthcare & Life Sciences
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Comprehensive AI solutions for healthcare including diagnostics, treatment planning, and patient care',
      price: '$1299/month',
      marketPrice: '$2500-10000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Treatment recommendation',
        'Patient monitoring',
        'Drug discovery support',
        'Clinical trial optimization',
        'Healthcare data analytics',
        'HIPAA compliance'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce treatment costs',
        'Enhance patient outcomes',
        'Accelerate drug development'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart,
      link: '/ai-healthcare'
    },
    {
      id: 'ai-medical-imaging',
      name: 'AI Medical Imaging Analysis',
      description: 'Advanced AI-powered medical image analysis for radiology, pathology, and diagnostic imaging',
      price: '$899/month',
      marketPrice: '$1800-5000/month',
      features: [
        'Radiology image analysis',
        'Pathology slide analysis',
        '3D medical imaging',
        'Automated report generation',
        'Integration with PACS systems',
        'Quality assurance tools',
        'Radiologist workflow optimization',
        'Regulatory compliance'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce reading time by 50%',
        'Enhance radiologist productivity',
        'Better patient outcomes'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Scan,
      link: '/ai-medical-imaging'
    },

    // Financial Services
    {
      id: 'ai-financial-services',
      name: 'AI Financial Services Platform',
      description: 'Comprehensive AI solutions for banking, insurance, and financial services including risk assessment and trading',
      price: '$1199/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Credit risk assessment',
        'Algorithmic trading',
        'Insurance underwriting',
        'Fraud detection',
        'Regulatory compliance',
        'Customer service automation',
        'Investment recommendations',
        'Financial data analysis'
      ],
      benefits: [
        'Reduce risk exposure',
        'Improve trading performance',
        'Automate compliance processes',
        'Enhance customer experience'
      ],
      category: 'Finance',
      popular: false,
      icon: DollarSign,
      link: '/ai-financial-services'
    },
    {
      id: 'ai-trading-algorithm',
      name: 'AI Trading Algorithm Suite',
      description: 'Advanced AI-powered trading algorithms for automated trading and portfolio optimization',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Algorithmic trading strategies',
        'Real-time market analysis',
        'Risk management systems',
        'Portfolio optimization',
        'Backtesting capabilities',
        'Performance monitoring',
        'Regulatory compliance',
        'Custom strategy development'
      ],
      benefits: [
        'Automated trading execution',
        'Improved trading performance',
        'Risk reduction',
        '24/7 market monitoring'
      ],
      category: 'Finance',
      popular: false,
      icon: TrendingUp,
      link: '/ai-trading-algorithm'
    },

    // Human Resources
    {
      id: 'ai-hr-solutions',
      name: 'AI HR Solutions Suite',
      description: 'Comprehensive AI-powered human resources platform for recruitment, employee management, and analytics',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Resume screening and matching',
        'Candidate assessment',
        'Employee performance analytics',
        'Predictive attrition modeling',
        'Skills gap analysis',
        'Training recommendations',
        'Diversity and inclusion analytics',
        'HR process automation'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Enhance employee retention',
        'Data-driven HR decisions'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users,
      link: '/ai-hr-solutions'
    },
    {
      id: 'ai-recruitment-pro',
      name: 'AI Recruitment Pro',
      description: 'Advanced AI-powered recruitment platform with intelligent candidate matching and assessment',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: [
        'AI-powered job matching',
        'Video interview analysis',
        'Skills assessment automation',
        'Candidate ranking and scoring',
        'Bias detection and mitigation',
        'Interview scheduling automation',
        'Talent pipeline management',
        'Recruitment analytics'
      ],
      benefits: [
        'Improve hiring efficiency',
        'Reduce bias in recruitment',
        'Better candidate-job fit',
        'Streamlined recruitment process'
      ],
      category: 'Human Resources',
      popular: false,
      icon: GraduationCap,
      link: '/ai-recruitment-pro'
    },

    // Supply Chain & Logistics
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with AI-powered optimization, forecasting, and logistics',
      price: '$699/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier risk assessment',
        'Quality control automation',
        'Supply chain visibility',
        'Predictive maintenance',
        'Sustainability analytics'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve delivery times',
        'Minimize supply chain risks',
        'Optimize resource utilization'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Package,
      link: '/ai-supply-chain'
    },
    {
      id: 'ai-logistics-optimization',
      name: 'AI Logistics Optimization',
      description: 'Advanced logistics optimization using AI for route planning, fleet management, and delivery optimization',
      price: '$549/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Dynamic route optimization',
        'Fleet management automation',
        'Delivery time prediction',
        'Load optimization',
        'Fuel consumption optimization',
        'Driver behavior analysis',
        'Real-time tracking',
        'Performance analytics'
      ],
      benefits: [
        'Reduce logistics costs by 30%',
        'Improve delivery efficiency',
        'Optimize fuel consumption',
        'Enhance customer satisfaction'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Truck,
      link: '/ai-logistics-optimization'
    },

    // Education & Training
    {
      id: 'ai-education',
      name: 'AI Education Platform',
      description: 'Comprehensive AI-powered educational platform with personalized learning and assessment capabilities',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Personalized learning paths',
        'Adaptive assessment',
        'Content recommendation',
        'Learning analytics',
        'Automated grading',
        'Virtual tutoring',
        'Progress tracking',
        'Multi-language support'
      ],
      benefits: [
        'Improve learning outcomes',
        'Personalized education experience',
        'Reduce teaching workload',
        'Better student engagement'
      ],
      category: 'Education',
      popular: false,
      icon: BookOpen,
      link: '/ai-education'
    },
    {
      id: 'ai-corporate-training',
      name: 'AI Corporate Training Suite',
      description: 'AI-powered corporate training platform with personalized learning paths and skill development',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Skills gap analysis',
        'Personalized training plans',
        'Microlearning modules',
        'Progress tracking',
        'Certification management',
        'Learning analytics',
        'Mobile learning support',
        'Integration with HR systems'
      ],
      benefits: [
        'Improve employee skills',
        'Reduce training costs',
        'Increase training effectiveness',
        'Better skill development tracking'
      ],
      category: 'Education',
      popular: false,
      icon: GraduationCap,
      link: '/ai-corporate-training'
    },

    // Document Processing
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document processing and analysis system for automated data extraction and classification',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'OCR and text extraction',
        'Document classification',
        'Data extraction and validation',
        'Form processing automation',
        'Document workflow management',
        'Multi-format support',
        'Quality assurance',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce manual data entry by 90%',
        'Improve data accuracy',
        'Faster document processing',
        'Automated workflow management'
      ],
      category: 'Document Processing',
      popular: false,
      icon: FileText,
      link: '/ai-document-processing'
    },
    {
      id: 'ai-contract-analysis',
      name: 'AI Contract Analysis Pro',
      description: 'Advanced AI-powered contract analysis and management system for legal and business operations',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Contract clause analysis',
        'Risk assessment',
        'Compliance checking',
        'Automated contract generation',
        'Version control and tracking',
        'Renewal reminders',
        'Legal document search',
        'Integration with legal systems'
      ],
      benefits: [
        'Reduce contract review time by 80%',
        'Improve risk identification',
        'Ensure compliance',
        'Streamline contract management'
      ],
      category: 'Document Processing',
      popular: false,
      icon: FileCheck,
      link: '/ai-contract-analysis'
    },

    // IoT & Edge Computing
    {
      id: 'ai-iot-analytics',
      name: 'AI IoT Analytics Platform',
      description: 'Comprehensive AI analytics platform for IoT devices and edge computing applications',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Real-time IoT data processing',
        'Edge AI deployment',
        'Predictive maintenance',
        'Anomaly detection',
        'Device management',
        'Data visualization',
        'API integration',
        'Scalable architecture'
      ],
      benefits: [
        'Real-time insights from IoT data',
        'Predictive maintenance capabilities',
        'Reduced data transmission costs',
        'Improved operational efficiency'
      ],
      category: 'IoT & Analytics',
      popular: false,
      icon: Wifi,
      link: '/ai-iot-analytics'
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing Solutions',
      description: 'AI-powered edge computing solutions for real-time processing and decision making at the edge',
      price: '$699/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Edge AI model deployment',
        'Real-time processing',
        'Low-latency inference',
        'Offline operation capability',
        'Model optimization for edge',
        'Device management',
        'Data synchronization',
        'Security and privacy'
      ],
      benefits: [
        'Ultra-low latency processing',
        'Reduced bandwidth requirements',
        'Enhanced privacy and security',
        'Offline operation capability'
      ],
      category: 'Edge Computing',
      popular: false,
      icon: Cpu,
      link: '/ai-edge-computing'
    },

    // Blockchain & Cryptocurrency
    {
      id: 'ai-blockchain-analytics',
      name: 'AI Blockchain Analytics',
      description: 'Advanced AI analytics platform for blockchain data analysis, cryptocurrency trading, and DeFi applications',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Blockchain data analysis',
        'Cryptocurrency price prediction',
        'DeFi protocol analysis',
        'Smart contract auditing',
        'Transaction monitoring',
        'Risk assessment',
        'Portfolio optimization',
        'Regulatory compliance'
      ],
      benefits: [
        'Better investment decisions',
        'Risk mitigation',
        'Automated trading strategies',
        'Compliance monitoring'
      ],
      category: 'Blockchain',
      popular: false,
      icon: Link,
      link: '/ai-blockchain-analytics'
    },

    // Climate & Sustainability
    {
      id: 'ai-climate-solutions',
      name: 'AI Climate Solutions',
      description: 'AI-powered climate and sustainability solutions for environmental monitoring and optimization',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Climate data analysis',
        'Carbon footprint tracking',
        'Energy optimization',
        'Environmental monitoring',
        'Sustainability reporting',
        'Green technology recommendations',
        'Climate risk assessment',
        'ESG compliance'
      ],
      benefits: [
        'Reduce environmental impact',
        'Optimize energy consumption',
        'Improve sustainability metrics',
        'Compliance with environmental regulations'
      ],
      category: 'Climate',
      popular: false,
      icon: Globe,
      link: '/ai-climate-solutions'
    },

    // Agriculture & Food
    {
      id: 'ai-agricultural-intelligence',
      name: 'AI Agricultural Intelligence',
      description: 'Comprehensive AI solutions for precision agriculture, crop monitoring, and farm optimization',
      price: '$699/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Crop monitoring and analysis',
        'Yield prediction',
        'Soil analysis',
        'Weather forecasting',
        'Pest and disease detection',
        'Irrigation optimization',
        'Farm management automation',
        'Supply chain optimization'
      ],
      benefits: [
        'Increase crop yields by 20%',
        'Reduce resource usage',
        'Improve farm efficiency',
        'Better crop quality'
      ],
      category: 'Agriculture',
      popular: false,
      icon: Sprout,
      link: '/ai-agricultural-intelligence'
    },

    // Energy & Utilities
    {
      id: 'ai-energy-management',
      name: 'AI Energy Management System',
      description: 'AI-powered energy management and optimization platform for utilities and industrial applications',
      price: '$899/month',
      marketPrice: '$1800-5000/month',
      features: [
        'Energy consumption analysis',
        'Demand forecasting',
        'Grid optimization',
        'Renewable energy integration',
        'Load balancing',
        'Energy trading optimization',
        'Predictive maintenance',
        'Carbon footprint tracking'
      ],
      benefits: [
        'Reduce energy costs by 25%',
        'Optimize energy usage',
        'Improve grid stability',
        'Support renewable energy integration'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap,
      link: '/ai-energy-management'
    },

    // Manufacturing & Industry
    {
      id: 'ai-manufacturing',
      name: 'AI Manufacturing Intelligence',
      description: 'Comprehensive AI solutions for manufacturing optimization, quality control, and predictive maintenance',
      price: '$999/month',
      marketPrice: '$2000-6000/month',
      features: [
        'Production optimization',
        'Quality control automation',
        'Predictive maintenance',
        'Supply chain optimization',
        'Equipment monitoring',
        'Process optimization',
        'Defect detection',
        'Performance analytics'
      ],
      benefits: [
        'Increase production efficiency by 30%',
        'Reduce defects by 50%',
        'Minimize downtime',
        'Optimize resource utilization'
      ],
      category: 'Manufacturing',
      popular: false,
      icon: Settings,
      link: '/ai-manufacturing'
    },

    // Retail & E-commerce
    {
      id: 'ai-retail-solutions',
      name: 'AI Retail Solutions Suite',
      description: 'Comprehensive AI platform for retail optimization, customer experience, and inventory management',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Customer behavior analysis',
        'Inventory optimization',
        'Price optimization',
        'Demand forecasting',
        'Personalized recommendations',
        'Visual search',
        'Fraud detection',
        'Store layout optimization'
      ],
      benefits: [
        'Increase sales by 25%',
        'Reduce inventory costs',
        'Improve customer experience',
        'Optimize pricing strategies'
      ],
      category: 'Retail',
      popular: false,
      icon: ShoppingBag,
      link: '/ai-retail-solutions'
    },

    // Real Estate
    {
      id: 'ai-real-estate',
      name: 'AI Real Estate Platform',
      description: 'AI-powered real estate platform with property valuation, market analysis, and investment insights',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Property valuation',
        'Market trend analysis',
        'Investment recommendations',
        'Property search optimization',
        'Price prediction',
        'Risk assessment',
        'Portfolio management',
        'Market forecasting'
      ],
      benefits: [
        'Accurate property valuations',
        'Better investment decisions',
        'Market insights',
        'Risk mitigation'
      ],
      category: 'Real Estate',
      popular: false,
      icon: Home,
      link: '/ai-real-estate'
    },

    // Transportation & Logistics
    {
      id: 'ai-transportation',
      name: 'AI Transportation Solutions',
      description: 'AI-powered transportation and logistics platform for route optimization, fleet management, and delivery',
      price: '$699/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Route optimization',
        'Fleet management',
        'Demand forecasting',
        'Driver behavior analysis',
        'Fuel optimization',
        'Delivery scheduling',
        'Real-time tracking',
        'Performance analytics'
      ],
      benefits: [
        'Reduce transportation costs by 30%',
        'Improve delivery efficiency',
        'Optimize fuel consumption',
        'Enhance customer satisfaction'
      ],
      category: 'Transportation',
      popular: false,
      icon: Truck,
      link: '/ai-transportation'
    },

    // Entertainment & Media
    {
      id: 'ai-entertainment',
      name: 'AI Entertainment Platform',
      description: 'AI-powered entertainment and media platform with content generation, recommendation, and personalization',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Content generation',
        'Personalized recommendations',
        'Content moderation',
        'Audience analytics',
        'Content optimization',
        'Automated editing',
        'Trend analysis',
        'Engagement optimization'
      ],
      benefits: [
        'Increase audience engagement',
        'Automate content creation',
        'Improve content quality',
        'Optimize content performance'
      ],
      category: 'Entertainment',
      popular: false,
      icon: Play,
      link: '/ai-entertainment'
    },

    // Legal & Compliance
    {
      id: 'ai-legal-solutions',
      name: 'AI Legal Solutions Suite',
      description: 'Comprehensive AI platform for legal research, document analysis, and compliance management',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Legal research automation',
        'Document analysis',
        'Contract review',
        'Compliance monitoring',
        'Case law analysis',
        'Legal document generation',
        'Risk assessment',
        'Regulatory updates'
      ],
      benefits: [
        'Reduce legal research time by 70%',
        'Improve document accuracy',
        'Ensure compliance',
        'Streamline legal processes'
      ],
      category: 'Legal',
      popular: false,
      icon: Scale,
      link: '/ai-legal-solutions'
    },

    // Insurance
    {
      id: 'ai-insurance',
      name: 'AI Insurance Platform',
      description: 'AI-powered insurance platform with risk assessment, claims processing, and fraud detection',
      price: '$699/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Risk assessment and pricing',
        'Claims processing automation',
        'Fraud detection',
        'Customer service automation',
        'Underwriting automation',
        'Policy management',
        'Claims analytics',
        'Regulatory compliance'
      ],
      benefits: [
        'Reduce claims processing time by 60%',
        'Improve risk assessment accuracy',
        'Detect fraud more effectively',
        'Enhance customer experience'
      ],
      category: 'Insurance',
      popular: false,
      icon: Shield,
      link: '/ai-insurance'
    },

    // Government & Public Sector
    {
      id: 'ai-government',
      name: 'AI Government Solutions',
      description: 'AI-powered solutions for government agencies including citizen services, data analysis, and policy optimization',
      price: '$1299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Citizen service automation',
        'Data analysis and insights',
        'Policy optimization',
        'Resource allocation',
        'Public safety analytics',
        'Compliance monitoring',
        'Transparency reporting',
        'Digital transformation'
      ],
      benefits: [
        'Improve citizen services',
        'Optimize resource allocation',
        'Enhance transparency',
        'Streamline government operations'
      ],
      category: 'Government',
      popular: false,
      icon: Building,
      link: '/ai-government'
    },

    // Research & Development
    {
      id: 'ai-research-platform',
      name: 'AI Research Platform',
      description: 'Comprehensive AI platform for scientific research, data analysis, and discovery acceleration',
      price: '$899/month',
      marketPrice: '$1800-5000/month',
      features: [
        'Scientific data analysis',
        'Hypothesis generation',
        'Literature review automation',
        'Experiment design',
        'Data visualization',
        'Collaboration tools',
        'Publication assistance',
        'Research analytics'
      ],
      benefits: [
        'Accelerate research processes',
        'Improve data analysis',
        'Generate new insights',
        'Enhance collaboration'
      ],
      category: 'Research',
      popular: false,
      icon: Microscope,
      link: '/ai-research-platform'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: services.filter(s => s.category === 'Computer Vision').length },
    { id: 'Voice AI', name: 'Voice AI', count: services.filter(s => s.category === 'Voice AI').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Healthcare', name: 'Healthcare', count: services.filter(s => s.category === 'Healthcare').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Human Resources', name: 'Human Resources', count: services.filter(s => s.category === 'Human Resources').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: services.filter(s => s.category === 'Supply Chain').length },
    { id: 'Education', name: 'Education', count: services.filter(s => s.category === 'Education').length },
    { id: 'Document Processing', name: 'Document Processing', count: services.filter(s => s.category === 'Document Processing').length },
    { id: 'IoT & Analytics', name: 'IoT & Analytics', count: services.filter(s => s.category === 'IoT & Analytics').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: 'Blockchain', name: 'Blockchain', count: services.filter(s => s.category === 'Blockchain').length },
    { id: 'Climate', name: 'Climate', count: services.filter(s => s.category === 'Climate').length },
    { id: 'Agriculture', name: 'Agriculture', count: services.filter(s => s.category === 'Agriculture').length },
    { id: 'Energy', name: 'Energy', count: services.filter(s => s.category === 'Energy').length },
    { id: 'Manufacturing', name: 'Manufacturing', count: services.filter(s => s.category === 'Manufacturing').length },
    { id: 'Retail', name: 'Retail', count: services.filter(s => s.category === 'Retail').length },
    { id: 'Real Estate', name: 'Real Estate', count: services.filter(s => s.category === 'Real Estate').length },
    { id: 'Transportation', name: 'Transportation', count: services.filter(s => s.category === 'Transportation').length },
    { id: 'Entertainment', name: 'Entertainment', count: services.filter(s => s.category === 'Entertainment').length },
    { id: 'Legal', name: 'Legal', count: services.filter(s => s.category === 'Legal').length },
    { id: 'Insurance', name: 'Insurance', count: services.filter(s => s.category === 'Insurance').length },
    { id: 'Government', name: 'Government', count: services.filter(s => s.category === 'Government').length },
    { id: 'Research', name: 'Research', count: services.filter(s => s.category === 'Research').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive AI solutions. From chatbots to analytics, 
              we provide cutting-edge artificial intelligence services tailored to your specific needs.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent min-w-[200px]"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-cyan-500/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-gray-400 text-sm bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">+{service.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-300">{benefit}</span>
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
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mb-16">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-white hover:bg-slate-700'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mb-16">
            <div className="bg-slate-800/50 rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Let our AI experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiServicesPage;