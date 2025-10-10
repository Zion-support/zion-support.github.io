'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings,
  Cpu,
  Bot,
  Sparkles,
  Layers,
  Workflow,
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Award,
  Lightbulb,
  Rocket,
  PieChart,
  Monitor,
  HardDrive,
  Router,
  Server,
  Terminal,
  GitBranch,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Download,
  Upload,
  Share2,
  Bookmark,
  Heart,
  ThumbsUp,
  MessageCircle,
  UserPlus,
  UserCheck,
  UserX,
  Edit,
  Trash2,
  Copy,
  Save,
  Send,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RefreshCw,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Link as LinkIcon,
  Unlink,
  Lock as LockIcon,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  Signal,
  SignalZero,
  SignalOne,
  SignalTwo,
  SignalThree,
  Battery,
  BatteryLow,
  BatteryMedium,
  BatteryFull,
  BatteryCharging,
  Plug,
  PlugZap,
  Zap as ZapIcon,
  Flashlight,
  FlashlightOff,
  Camera,
  CameraOff,
  Video,
  VideoOff,
  Mic as MicIcon,
  MicOff,
  Headphones as HeadphonesIcon,
  HeadphonesOff,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Repeat,
  Shuffle,
  RotateCcw as RotateCcwIcon,
  RotateCw,
  RefreshCw as RefreshCwIcon,
  RefreshCcw,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  Move,
  Move3D,
  MoveHorizontal,
  MoveVertical,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDiagonal3,
  MoveDiagonal4,
  MoveDiagonal5,
  MoveDiagonal6,
  MoveDiagonal7,
  MoveDiagonal8,
  MoveDiagonal9,
  MoveDiagonal10,
  MoveDiagonal11,
  MoveDiagonal12,
  MoveDiagonal13,
  MoveDiagonal14,
  MoveDiagonal15,
  MoveDiagonal16,
  MoveDiagonal17,
  MoveDiagonal18,
  MoveDiagonal19,
  MoveDiagonal20,
  MoveDiagonal21,
  MoveDiagonal22,
  MoveDiagonal23,
  MoveDiagonal24,
  MoveDiagonal25,
  MoveDiagonal26,
  MoveDiagonal27,
  MoveDiagonal28,
  MoveDiagonal29,
  MoveDiagonal30,
  MoveDiagonal31,
  MoveDiagonal32,
  MoveDiagonal33,
  MoveDiagonal34,
  MoveDiagonal35,
  MoveDiagonal36,
  MoveDiagonal37,
  MoveDiagonal38,
  MoveDiagonal39,
  MoveDiagonal40,
  MoveDiagonal41,
  MoveDiagonal42,
  MoveDiagonal43,
  MoveDiagonal44,
  MoveDiagonal45,
  MoveDiagonal46,
  MoveDiagonal47,
  MoveDiagonal48,
  MoveDiagonal49,
  MoveDiagonal50,
  MoveDiagonal51,
  MoveDiagonal52,
  MoveDiagonal53,
  MoveDiagonal54,
  MoveDiagonal55,
  MoveDiagonal56,
  MoveDiagonal57,
  MoveDiagonal58,
  MoveDiagonal59,
  MoveDiagonal60,
  MoveDiagonal61,
  MoveDiagonal62,
  MoveDiagonal63,
  MoveDiagonal64,
  MoveDiagonal65,
  MoveDiagonal66,
  MoveDiagonal67,
  MoveDiagonal68,
  MoveDiagonal69,
  MoveDiagonal70,
  MoveDiagonal71,
  MoveDiagonal72,
  MoveDiagonal73,
  MoveDiagonal74,
  MoveDiagonal75,
  MoveDiagonal76,
  MoveDiagonal77,
  MoveDiagonal78,
  MoveDiagonal79,
  MoveDiagonal80,
  MoveDiagonal81,
  MoveDiagonal82,
  MoveDiagonal83,
  MoveDiagonal84,
  MoveDiagonal85,
  MoveDiagonal86,
  MoveDiagonal87,
  MoveDiagonal88,
  MoveDiagonal89,
  MoveDiagonal90,
  MoveDiagonal91,
  MoveDiagonal92,
  MoveDiagonal93,
  MoveDiagonal94,
  MoveDiagonal95,
  MoveDiagonal96,
  MoveDiagonal97,
  MoveDiagonal98,
  MoveDiagonal99,
  MoveDiagonal100
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice?: string;
  category: string;
  popular: boolean;
  benefits: string[];
  useCases: string[];
  industries: string[];
  setupTime: string;
  freeTrial: boolean;
  apiAccess: boolean;
  whiteLabel: boolean;
  integrations: string[];
  accuracy: string;
  languages: string[];
  compliance: string[];
}

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const aiServices: AIService[] = [
    // Natural Language Processing
    {
      id: '1',
      icon: MessageSquare,
      title: 'Zion NLP Platform',
      description: 'Advanced natural language processing platform with sentiment analysis, text classification, and language translation',
      features: [
        'Sentiment analysis and emotion detection',
        'Text classification and categorization',
        'Language translation (100+ languages)',
        'Named entity recognition (NER)',
        'Text summarization and extraction',
        'Question answering systems',
        'Chatbot and conversational AI',
        'Document processing and analysis'
      ],
      price: '$299/month',
      marketPrice: '$500-2000/month',
      category: 'NLP',
      popular: true,
      benefits: ['Improve customer understanding', 'Automate text processing', 'Multi-language support', 'Real-time analysis'],
      useCases: ['Customer support', 'Content moderation', 'Market research', 'Document analysis'],
      industries: ['E-commerce', 'Healthcare', 'Finance', 'Media'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Teams', 'WhatsApp'],
      accuracy: '95%',
      languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
      compliance: ['GDPR', 'SOC2', 'HIPAA']
    },
    {
      id: '2',
      icon: Bot,
      title: 'Zion Conversational AI',
      description: 'Enterprise-grade conversational AI platform with advanced dialogue management and multi-channel support',
      features: [
        'GPT-4 powered conversational AI',
        'Multi-channel support (Web, Mobile, Voice)',
        'Context-aware dialogue management',
        'Intent recognition and slot filling',
        'Knowledge base integration',
        'Human handoff capabilities',
        'Analytics and conversation insights',
        'Custom voice and personality'
      ],
      price: '$199/month',
      marketPrice: '$400-1500/month',
      category: 'Conversational AI',
      popular: true,
      benefits: ['24/7 customer support', 'Reduce support costs', 'Improve response time', 'Scale conversations'],
      useCases: ['Customer service', 'Sales automation', 'Lead qualification', 'Internal support'],
      industries: ['Retail', 'Banking', 'Healthcare', 'Education'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['CRM systems', 'Help desk', 'Live chat', 'Voice platforms'],
      accuracy: '92%',
      languages: ['50+ languages'],
      compliance: ['GDPR', 'SOC2', 'PCI DSS']
    },

    // Computer Vision
    {
      id: '3',
      icon: Eye,
      title: 'Zion Computer Vision',
      description: 'Advanced computer vision platform with object detection, facial recognition, and image analysis',
      features: [
        'Object detection and recognition',
        'Facial recognition and verification',
        'Image classification and tagging',
        'OCR and document scanning',
        'Quality control and inspection',
        'Medical image analysis',
        'Video analytics and tracking',
        'Real-time processing capabilities'
      ],
      price: '$399/month',
      marketPrice: '$800-3000/month',
      category: 'Computer Vision',
      popular: false,
      benefits: ['Automate visual tasks', 'Improve accuracy', 'Real-time processing', 'Cost reduction'],
      useCases: ['Quality control', 'Security systems', 'Medical diagnosis', 'Retail analytics'],
      industries: ['Manufacturing', 'Healthcare', 'Retail', 'Security'],
      setupTime: '30 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Camera systems', 'IoT devices', 'Cloud platforms', 'Mobile apps'],
      accuracy: '98%',
      languages: ['Multi-language support'],
      compliance: ['GDPR', 'HIPAA', 'SOC2']
    },
    {
      id: '4',
      icon: Camera,
      title: 'Zion Image Recognition',
      description: 'Specialized image recognition service for product identification, brand monitoring, and visual search',
      features: [
        'Product recognition and matching',
        'Brand logo detection',
        'Visual search capabilities',
        'Image similarity matching',
        'Content moderation',
        'Fashion and style analysis',
        'Food recognition and nutrition',
        'Landmark and location identification'
      ],
      price: '$149/month',
      marketPrice: '$300-1200/month',
      category: 'Computer Vision',
      popular: false,
      benefits: ['Visual search', 'Brand protection', 'Content moderation', 'Product discovery'],
      useCases: ['E-commerce', 'Social media', 'Brand monitoring', 'Visual search'],
      industries: ['Retail', 'Fashion', 'Food', 'Travel'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['E-commerce platforms', 'Social media', 'Mobile apps', 'Websites'],
      accuracy: '94%',
      languages: ['Global'],
      compliance: ['GDPR', 'SOC2']
    },

    // Machine Learning & Analytics
    {
      id: '5',
      icon: BarChart3,
      title: 'Zion ML Analytics',
      description: 'Comprehensive machine learning platform with predictive analytics, forecasting, and business intelligence',
      features: [
        'Predictive analytics and forecasting',
        'Anomaly detection and monitoring',
        'Customer segmentation and profiling',
        'Churn prediction and prevention',
        'Recommendation engines',
        'Time series analysis',
        'A/B testing and optimization',
        'Real-time model deployment'
      ],
      price: '$499/month',
      marketPrice: '$1000-4000/month',
      category: 'Machine Learning',
      popular: true,
      benefits: ['Data-driven insights', 'Predictive capabilities', 'Automated analysis', 'Better decisions'],
      useCases: ['Business forecasting', 'Customer analytics', 'Risk management', 'Process optimization'],
      industries: ['Finance', 'E-commerce', 'Healthcare', 'Manufacturing'],
      setupTime: '45 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Data warehouses', 'CRM systems', 'Analytics platforms', 'Business intelligence'],
      accuracy: '97%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'SOC2', 'HIPAA', 'PCI DSS']
    },
    {
      id: '6',
      icon: TrendingUp,
      title: 'Zion Predictive Analytics',
      description: 'Advanced predictive analytics platform for demand forecasting, risk assessment, and trend analysis',
      features: [
        'Demand forecasting and planning',
        'Risk assessment and scoring',
        'Trend analysis and pattern recognition',
        'Seasonal adjustment and modeling',
        'What-if scenario analysis',
        'Automated model selection',
        'Real-time predictions',
        'Confidence intervals and uncertainty'
      ],
      price: '$399/month',
      marketPrice: '$800-2500/month',
      category: 'Machine Learning',
      popular: false,
      benefits: ['Accurate forecasting', 'Risk mitigation', 'Better planning', 'Competitive advantage'],
      useCases: ['Supply chain', 'Financial planning', 'Inventory management', 'Risk assessment'],
      industries: ['Retail', 'Manufacturing', 'Finance', 'Logistics'],
      setupTime: '30 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['ERP systems', 'Data platforms', 'Business intelligence', 'Cloud services'],
      accuracy: '96%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'SOC2', 'SOX']
    },

    // Voice & Audio AI
    {
      id: '7',
      icon: Mic,
      title: 'Zion Voice AI',
      description: 'Advanced voice AI platform with speech recognition, synthesis, and voice analytics',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice biometrics and authentication',
        'Call analytics and insights',
        'Multi-language voice support',
        'Voice emotion detection',
        'Real-time transcription',
        'Voice command processing'
      ],
      price: '$249/month',
      marketPrice: '$500-1800/month',
      category: 'Voice AI',
      popular: false,
      benefits: ['Voice automation', 'Accessibility', 'Better user experience', 'Multi-language support'],
      useCases: ['Call centers', 'Voice assistants', 'Accessibility', 'Voice commands'],
      industries: ['Healthcare', 'Finance', 'Customer service', 'Education'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Phone systems', 'Mobile apps', 'Web applications', 'IoT devices'],
      accuracy: '95%',
      languages: ['50+ languages'],
      compliance: ['GDPR', 'SOC2', 'HIPAA']
    },
    {
      id: '8',
      icon: Headphones,
      title: 'Zion Audio Intelligence',
      description: 'Comprehensive audio analysis platform with music recognition, sound classification, and audio processing',
      features: [
        'Music and audio recognition',
        'Sound classification and detection',
        'Audio quality analysis',
        'Noise reduction and enhancement',
        'Speaker identification',
        'Audio transcription',
        'Real-time audio processing',
        'Audio content moderation'
      ],
      price: '$179/month',
      marketPrice: '$350-1200/month',
      category: 'Voice AI',
      popular: false,
      benefits: ['Audio automation', 'Content moderation', 'Quality improvement', 'Real-time processing'],
      useCases: ['Content platforms', 'Security systems', 'Media production', 'Accessibility'],
      industries: ['Media', 'Entertainment', 'Security', 'Education'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Audio platforms', 'Video systems', 'Mobile apps', 'IoT devices'],
      accuracy: '93%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'SOC2']
    },

    // Content Generation & Creation
    {
      id: '9',
      icon: FileText,
      title: 'Zion Content AI',
      description: 'AI-powered content generation platform for text, images, and multimedia content creation',
      features: [
        'AI-powered text generation',
        'Image and video creation',
        'Content optimization and SEO',
        'Brand voice customization',
        'Multi-language content',
        'Content planning and scheduling',
        'Plagiarism detection',
        'Performance analytics'
      ],
      price: '$199/month',
      marketPrice: '$400-1500/month',
      category: 'Content AI',
      popular: true,
      benefits: ['Faster content creation', 'Consistent quality', 'SEO optimization', 'Multi-platform publishing'],
      useCases: ['Marketing content', 'Blog posts', 'Social media', 'Product descriptions'],
      industries: ['Marketing', 'E-commerce', 'Media', 'Education'],
      setupTime: '10 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['CMS platforms', 'Social media', 'Email marketing', 'E-commerce'],
      accuracy: '90%',
      languages: ['25+ languages'],
      compliance: ['GDPR', 'SOC2']
    },
    {
      id: '10',
      icon: Palette,
      title: 'Zion Design AI',
      description: 'AI-powered design platform for automated graphic design, logo creation, and visual content generation',
      features: [
        'Automated graphic design',
        'Logo and brand identity creation',
        'Layout optimization',
        'Color scheme generation',
        'Typography recommendations',
        'Template customization',
        'A/B testing for designs',
        'Brand consistency checking'
      ],
      price: '$149/month',
      marketPrice: '$300-1000/month',
      category: 'Content AI',
      popular: false,
      benefits: ['Faster design process', 'Consistent branding', 'Creative inspiration', 'Cost-effective solutions'],
      useCases: ['Marketing materials', 'Brand identity', 'Web design', 'Social media graphics'],
      industries: ['Marketing', 'Design', 'E-commerce', 'Media'],
      setupTime: '5 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Design tools', 'Marketing platforms', 'E-commerce', 'Social media'],
      accuracy: '88%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'SOC2']
    },

    // Automation & Workflow
    {
      id: '11',
      icon: Workflow,
      title: 'Zion Process Automation',
      description: 'Intelligent process automation platform with AI-powered decision making and workflow optimization',
      features: [
        'Visual workflow builder',
        'AI-powered decision making',
        'Document processing automation',
        'Email and calendar automation',
        'Custom AI model training',
        'Integration with 200+ tools',
        'Process mining and optimization',
        'Exception handling and alerts'
      ],
      price: '$299/month',
      marketPrice: '$600-2000/month',
      category: 'Automation',
      popular: true,
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      useCases: ['Business processes', 'Data processing', 'Customer onboarding', 'Compliance'],
      industries: ['Finance', 'Healthcare', 'Manufacturing', 'Professional services'],
      setupTime: '25 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Zapier', 'Microsoft Power Automate', 'Salesforce', 'HubSpot', 'Slack'],
      accuracy: '94%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'SOC2', 'HIPAA', 'SOX']
    },
    {
      id: '12',
      icon: Zap,
      title: 'Zion Smart Automation',
      description: 'AI-powered automation platform for intelligent task scheduling, resource optimization, and smart workflows',
      features: [
        'Intelligent task scheduling',
        'Resource optimization',
        'Smart routing and assignment',
        'Predictive maintenance',
        'Energy optimization',
        'Inventory management',
        'Quality control automation',
        'Performance monitoring'
      ],
      price: '$249/month',
      marketPrice: '$500-1800/month',
      category: 'Automation',
      popular: false,
      benefits: ['Optimized operations', 'Reduced costs', 'Better resource utilization', 'Predictive capabilities'],
      useCases: ['Manufacturing', 'Logistics', 'Energy management', 'Facility management'],
      industries: ['Manufacturing', 'Logistics', 'Energy', 'Real estate'],
      setupTime: '30 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['IoT platforms', 'ERP systems', 'SCADA systems', 'Cloud platforms'],
      accuracy: '92%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'SOC2', 'ISO 27001']
    },

    // Healthcare & Life Sciences
    {
      id: '13',
      icon: Heart,
      title: 'Zion Medical AI',
      description: 'HIPAA-compliant AI platform for medical diagnosis, drug discovery, and healthcare analytics',
      features: [
        'Medical image analysis',
        'Drug discovery and development',
        'Patient risk assessment',
        'Treatment recommendation',
        'Clinical trial optimization',
        'Electronic health record analysis',
        'Telemedicine support',
        'Medical research insights'
      ],
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      category: 'Healthcare AI',
      popular: false,
      benefits: ['Improved diagnosis', 'Faster drug development', 'Better patient outcomes', 'Research acceleration'],
      useCases: ['Medical diagnosis', 'Drug discovery', 'Clinical trials', 'Patient monitoring'],
      industries: ['Healthcare', 'Pharmaceuticals', 'Biotech', 'Medical devices'],
      setupTime: '60 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['EHR systems', 'Medical devices', 'Clinical databases', 'Research platforms'],
      accuracy: '96%',
      languages: ['Multi-language'],
      compliance: ['HIPAA', 'GDPR', 'FDA', 'SOC2']
    },
    {
      id: '14',
      icon: Shield,
      title: 'Zion Health Analytics',
      description: 'Population health analytics platform with disease prediction, outbreak detection, and health insights',
      features: [
        'Disease outbreak prediction',
        'Population health monitoring',
        'Health trend analysis',
        'Risk factor identification',
        'Public health insights',
        'Epidemiological modeling',
        'Health policy analysis',
        'Community health assessment'
      ],
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      category: 'Healthcare AI',
      popular: false,
      benefits: ['Public health insights', 'Disease prevention', 'Policy support', 'Community health'],
      useCases: ['Public health', 'Epidemiology', 'Health policy', 'Community health'],
      industries: ['Public health', 'Government', 'Healthcare', 'Research'],
      setupTime: '45 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Health databases', 'Government systems', 'Research platforms', 'Public health'],
      accuracy: '94%',
      languages: ['Multi-language'],
      compliance: ['HIPAA', 'GDPR', 'SOC2', 'Government standards']
    },

    // Financial Services
    {
      id: '15',
      icon: DollarSign,
      title: 'Zion FinTech AI',
      description: 'Advanced financial AI platform for fraud detection, risk assessment, and algorithmic trading',
      features: [
        'Real-time fraud detection',
        'Credit risk assessment',
        'Algorithmic trading strategies',
        'Anti-money laundering (AML)',
        'Market analysis and prediction',
        'Portfolio optimization',
        'Regulatory compliance',
        'Financial reporting automation'
      ],
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      category: 'FinTech AI',
      popular: true,
      benefits: ['Fraud prevention', 'Risk mitigation', 'Trading optimization', 'Compliance automation'],
      useCases: ['Fraud detection', 'Risk management', 'Trading', 'Compliance'],
      industries: ['Banking', 'Insurance', 'Investment', 'Fintech'],
      setupTime: '40 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Banking systems', 'Trading platforms', 'Payment processors', 'Regulatory systems'],
      accuracy: '98%',
      languages: ['Multi-language'],
      compliance: ['PCI DSS', 'SOX', 'GDPR', 'Basel III']
    },
    {
      id: '16',
      icon: BarChart,
      title: 'Zion Investment AI',
      description: 'AI-powered investment platform with portfolio optimization, market analysis, and robo-advisory services',
      features: [
        'Portfolio optimization',
        'Market trend analysis',
        'Risk-return optimization',
        'Robo-advisory services',
        'ESG investment screening',
        'Alternative data analysis',
        'Performance attribution',
        'Client reporting automation'
      ],
      price: '$399/month',
      marketPrice: '$800-2500/month',
      category: 'FinTech AI',
      popular: false,
      benefits: ['Better returns', 'Risk management', 'Automated advice', 'ESG compliance'],
      useCases: ['Portfolio management', 'Investment advice', 'Risk analysis', 'ESG investing'],
      industries: ['Investment management', 'Wealth management', 'Pension funds', 'Insurance'],
      setupTime: '30 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Trading platforms', 'Market data', 'Client systems', 'Reporting tools'],
      accuracy: '95%',
      languages: ['Multi-language'],
      compliance: ['MiFID II', 'GDPR', 'SOC2', 'Investment regulations']
    },

    // E-commerce & Retail
    {
      id: '17',
      icon: ShoppingCart,
      title: 'Zion E-commerce AI',
      description: 'Comprehensive e-commerce AI platform with recommendation engines, pricing optimization, and customer analytics',
      features: [
        'Product recommendation engines',
        'Dynamic pricing optimization',
        'Customer behavior analysis',
        'Inventory demand forecasting',
        'Personalized shopping experiences',
        'Visual search capabilities',
        'Chatbot and virtual assistants',
        'Conversion rate optimization'
      ],
      price: '$299/month',
      marketPrice: '$600-2000/month',
      category: 'E-commerce AI',
      popular: true,
      benefits: ['Higher conversion rates', 'Better personalization', 'Optimized pricing', 'Improved customer experience'],
      useCases: ['Product recommendations', 'Pricing strategy', 'Customer segmentation', 'Inventory management'],
      industries: ['E-commerce', 'Retail', 'Marketplace', 'Fashion'],
      setupTime: '25 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'Amazon', 'Payment gateways'],
      accuracy: '93%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'PCI DSS', 'SOC2']
    },
    {
      id: '18',
      icon: Target,
      title: 'Zion Retail Analytics',
      description: 'Advanced retail analytics platform with customer insights, store optimization, and supply chain intelligence',
      features: [
        'Customer journey analysis',
        'Store layout optimization',
        'Supply chain forecasting',
        'Price elasticity analysis',
        'Seasonal trend prediction',
        'Competitor analysis',
        'Loyalty program optimization',
        'Omnichannel analytics'
      ],
      price: '$249/month',
      marketPrice: '$500-1800/month',
      category: 'E-commerce AI',
      popular: false,
      benefits: ['Better customer insights', 'Optimized operations', 'Improved profitability', 'Data-driven decisions'],
      useCases: ['Store optimization', 'Supply chain', 'Customer analytics', 'Competitive analysis'],
      industries: ['Retail', 'Fashion', 'Grocery', 'Electronics'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['POS systems', 'Inventory management', 'CRM systems', 'Analytics platforms'],
      accuracy: '91%',
      languages: ['Multi-language'],
      compliance: ['GDPR', 'SOC2', 'PCI DSS']
    },

    // Education & Learning
    {
      id: '19',
      icon: BookOpen,
      title: 'Zion Education AI',
      description: 'AI-powered education platform with personalized learning, assessment, and intelligent tutoring',
      features: [
        'Personalized learning paths',
        'Adaptive assessment and testing',
        'Intelligent tutoring systems',
        'Learning analytics and insights',
        'Content recommendation',
        'Automated grading and feedback',
        'Student progress tracking',
        'Learning outcome prediction'
      ],
      price: '$199/month',
      marketPrice: '$400-1500/month',
      category: 'Education AI',
      popular: false,
      benefits: ['Personalized learning', 'Better outcomes', 'Automated assessment', 'Data-driven insights'],
      useCases: ['Online learning', 'Assessment', 'Tutoring', 'Learning analytics'],
      industries: ['Education', 'Corporate training', 'E-learning', 'EdTech'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['LMS platforms', 'Assessment tools', 'Video platforms', 'Analytics systems'],
      accuracy: '89%',
      languages: ['Multi-language'],
      compliance: ['FERPA', 'GDPR', 'SOC2']
    },
    {
      id: '20',
      icon: Users,
      title: 'Zion Learning Analytics',
      description: 'Comprehensive learning analytics platform with student performance prediction and educational insights',
      features: [
        'Student performance prediction',
        'Learning outcome analysis',
        'Engagement tracking',
        'Early warning systems',
        'Curriculum optimization',
        'Teacher effectiveness analysis',
        'Institutional reporting',
        'Predictive intervention'
      ],
      price: '$149/month',
      marketPrice: '$300-1200/month',
      category: 'Education AI',
      popular: false,
      benefits: ['Student success', 'Early intervention', 'Curriculum optimization', 'Institutional insights'],
      useCases: ['Student success', 'Curriculum design', 'Teacher support', 'Institutional research'],
      industries: ['Higher education', 'K-12', 'Corporate training', 'Online education'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['LMS systems', 'Student information systems', 'Assessment platforms', 'Analytics tools'],
      accuracy: '87%',
      languages: ['Multi-language'],
      compliance: ['FERPA', 'GDPR', 'SOC2']
    }
  ];

  const categories = [
    'All', 'NLP', 'Conversational AI', 'Computer Vision', 'Machine Learning', 'Voice AI', 
    'Content AI', 'Automation', 'Healthcare AI', 'FinTech AI', 'E-commerce AI', 'Education AI'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace('/month', '')) - parseInt(b.price.replace('$', '').replace('/month', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace('/month', '')) - parseInt(a.price.replace('$', '').replace('/month', ''));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const stats = [
    { icon: <Brain className="w-8 h-8 text-blue-500" />, value: '95%', label: 'Average Accuracy' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '10x', label: 'Faster Processing' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '300%', label: 'Efficiency Gain' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting. Transform your business with our AI expertise and proven solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence, Zion Tech Group, AI automation, conversational AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, 
              we deliver AI that drives real results and measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none min-w-[200px]"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="pl-4 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none min-w-[150px]"
                  >
                    <option value="popular" className="bg-slate-800">Most Popular</option>
                    <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                    <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                    <option value="name" className="bg-slate-800">Name: A to Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to solve complex business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {service.accuracy} accuracy
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.setupTime} setup
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.freeTrial && (
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Free Trial</span>
                      )}
                      {service.apiAccess && (
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">API Access</span>
                      )}
                      {service.whiteLabel && (
                        <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">White Label</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Industries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.industries.slice(0, 3).map((industry, index) => (
                        <span key={index} className="bg-white/5 text-gray-400 px-2 py-1 rounded text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Compliance:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.compliance.map((comp, index) => (
                        <span key={index} className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 text-center"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced AI Technology</h3>
                <p className="text-gray-300">State-of-the-art machine learning models and algorithms for superior performance and accuracy.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Implementation</h3>
                <p className="text-gray-300">Quick deployment and setup with minimal downtime and maximum efficiency gains.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with encryption, compliance, and 24/7 monitoring for your data.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Certified AI professionals with years of experience in enterprise AI solutions.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs and requirements.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Continuous Innovation</h3>
                <p className="text-gray-300">Regular updates and improvements based on the latest AI research and technology.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can help you achieve your business goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/consultation"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;