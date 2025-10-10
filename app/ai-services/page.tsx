'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3, 
  MessageSquare, 
  Search, 
  Filter, 
  Zap, 
  Code, 
  Database, 
  Smartphone, 
  Mail, 
  Calendar, 
  FileText, 
  CreditCard, 
  Target, 
  Globe, 
  Lock, 
  Settings, 
  Monitor, 
  Headphones, 
  Camera, 
  Music, 
  Video, 
  Image, 
  Download, 
  Upload, 
  Share, 
  Heart, 
  ThumbsUp, 
  Award, 
  Clock, 
  DollarSign, 
  Percent, 
  BarChart, 
  PieChart, 
  LineChart, 
  Activity, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Battery, 
  Wrench, 
  Hammer, 
  Scissors, 
  Paintbrush, 
  Palette, 
  Layers, 
  Grid, 
  Layout, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  RotateCw, 
  RefreshCw, 
  RefreshCcw, 
  Play, 
  Pause, 
  Stop, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
  PhoneMissed, 
  PhoneOff, 
  Video as VideoIcon, 
  VideoOff, 
  Eye, 
  EyeOff, 
  Lock as LockIcon, 
  Unlock, 
  Key, 
  Fingerprint, 
  Shield as ShieldIcon, 
  ShieldCheck, 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  X, 
  Plus, 
  Minus, 
  Edit, 
  Trash2, 
  Copy, 
  Save, 
  Download as DownloadIcon, 
  Upload as UploadIcon, 
  Share2, 
  ExternalLink, 
  Link, 
  Link2, 
  Unlink, 
  Bookmark, 
  BookmarkCheck, 
  Flag, 
  FlagOff, 
  Tag, 
  Tags, 
  Hash, 
  AtSign, 
  Hash as HashIcon, 
  DollarSign as DollarIcon, 
  Percent as PercentIcon, 
  Plus as PlusIcon, 
  Minus as MinusIcon, 
  X as XIcon, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  Move, 
  RotateCcw as RotateCcwIcon, 
  RotateCw as RotateCwIcon, 
  RefreshCw as RefreshCwIcon, 
  RefreshCcw as RefreshCcwIcon, 
  Maximize as MaximizeIcon, 
  Minimize as MinimizeIcon, 
  ZoomIn, 
  ZoomOut, 
  Search as SearchIcon, 
  Filter as FilterIcon, 
  SortAsc, 
  SortDesc, 
  List, 
  Grid as GridIcon, 
  Layout as LayoutIcon, 
  Columns, 
  Rows, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  Code as CodeIcon, 
  Terminal, 
  Command, 
  Keyboard, 
  Mouse, 
  MousePointer, 
  Hand, 
  HandPointer, 
  Handshake, 
  Users as UsersIcon, 
  User, 
  UserCheck, 
  UserPlus, 
  UserMinus, 
  UserX, 
  UserCog, 
  UserEdit, 
  UserSearch, 
  UserShield, 
  UserStar, 
  UserHeart, 
  UserCheck as UserCheckIcon, 
  UserPlus as UserPlusIcon, 
  UserMinus as UserMinusIcon, 
  UserX as UserXIcon, 
  UserCog as UserCogIcon, 
  UserEdit as UserEditIcon, 
  UserSearch as UserSearchIcon, 
  UserShield as UserShieldIcon, 
  UserStar as UserStarIcon, 
  UserHeart as UserHeartIcon,
  Package,
  BookOpen,
  GraduationCap,
  Calculator,
  ClipboardList,
  Home,
  Bug
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  savings: string;
  category: string;
  popular: boolean;
  implementationTime: string;
  useCases: string[];
  industries: string[];
  integrations: number;
  support: string;
  trialDays: number;
  roi: string;
  clients: string;
}

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const aiServices: AIService[] = [
    // AI & Machine Learning Core Services
    {
      id: 'ai-consulting',
      icon: Brain,
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI strategy development, technology assessment, and implementation roadmap for enterprise transformation',
      features: [
        'AI readiness assessment',
        'Technology stack evaluation',
        'ROI analysis and forecasting',
        'Implementation roadmap',
        'Change management strategy',
        'Risk assessment',
        'Compliance guidance',
        'Ongoing support'
      ],
      price: '$5,000/month',
      marketPrice: '$15,000/month',
      savings: '67%',
      category: 'AI Consulting',
      popular: true,
      implementationTime: '2-4 weeks',
      useCases: ['Digital transformation', 'Process automation', 'Data strategy', 'AI adoption'],
      industries: ['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology'],
      integrations: 50,
      support: '24/7',
      trialDays: 30,
      roi: '300-500%',
      clients: '500+'
    },
    {
      id: 'machine-learning-platform',
      icon: Cpu,
      title: 'Machine Learning Platform',
      description: 'End-to-end ML platform with automated model training, deployment, and monitoring for production-ready AI solutions',
      features: [
        'Automated model training',
        'MLOps pipeline',
        'Model versioning',
        'A/B testing framework',
        'Real-time monitoring',
        'Auto-scaling infrastructure',
        'Data preprocessing',
        'Model explainability'
      ],
      price: '$8,000/month',
      marketPrice: '$25,000/month',
      savings: '68%',
      category: 'ML Platform',
      popular: true,
      implementationTime: '4-6 weeks',
      useCases: ['Predictive analytics', 'Recommendation engines', 'Fraud detection', 'Demand forecasting'],
      industries: ['E-commerce', 'Banking', 'Insurance', 'Healthcare', 'Manufacturing'],
      integrations: 75,
      support: '24/7',
      trialDays: 30,
      roi: '400-600%',
      clients: '200+'
    },
    {
      id: 'natural-language-processing',
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI',
      features: [
        'Text classification',
        'Sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Text summarization',
        'Question answering',
        'Conversational AI',
        'Custom model training'
      ],
      price: '$3,000/month',
      marketPrice: '$10,000/month',
      savings: '70%',
      category: 'NLP',
      popular: true,
      implementationTime: '3-5 weeks',
      useCases: ['Customer support', 'Content moderation', 'Market research', 'Document analysis'],
      industries: ['Media', 'Customer Service', 'Legal', 'Education', 'Social Media'],
      integrations: 40,
      support: '24/7',
      trialDays: 30,
      roi: '250-400%',
      clients: '300+'
    },
    {
      id: 'computer-vision',
      icon: Camera,
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision for image recognition, object detection, facial recognition, and medical imaging analysis',
      features: [
        'Image classification',
        'Object detection',
        'Facial recognition',
        'Medical imaging',
        'Quality inspection',
        'Augmented reality',
        'Video analysis',
        'Custom model training'
      ],
      price: '$4,500/month',
      marketPrice: '$15,000/month',
      savings: '70%',
      category: 'Computer Vision',
      popular: false,
      implementationTime: '4-6 weeks',
      useCases: ['Quality control', 'Security systems', 'Medical diagnosis', 'Autonomous vehicles'],
      industries: ['Manufacturing', 'Healthcare', 'Security', 'Automotive', 'Retail'],
      integrations: 35,
      support: '24/7',
      trialDays: 30,
      roi: '300-500%',
      clients: '150+'
    },
    {
      id: 'predictive-analytics',
      icon: TrendingUp,
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive analytics with forecasting, risk assessment, and business intelligence for data-driven decisions',
      features: [
        'Demand forecasting',
        'Risk assessment',
        'Customer lifetime value',
        'Churn prediction',
        'Price optimization',
        'Inventory optimization',
        'Fraud detection',
        'Real-time insights'
      ],
      price: '$6,000/month',
      marketPrice: '$20,000/month',
      savings: '70%',
      category: 'Analytics',
      popular: true,
      implementationTime: '3-5 weeks',
      useCases: ['Sales forecasting', 'Risk management', 'Customer retention', 'Supply chain optimization'],
      industries: ['Finance', 'Retail', 'Manufacturing', 'Healthcare', 'Insurance'],
      integrations: 60,
      support: '24/7',
      trialDays: 30,
      roi: '350-550%',
      clients: '250+'
    },

    // AI Automation & Workflow
    {
      id: 'ai-automation',
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Intelligent process automation with RPA, workflow optimization, and decision-making capabilities for complex business processes',
      features: [
        'Intelligent RPA',
        'Workflow optimization',
        'Decision automation',
        'Exception handling',
        'Process mining',
        'Compliance monitoring',
        'Performance analytics',
        'Custom integrations'
      ],
      price: '$7,500/month',
      marketPrice: '$25,000/month',
      savings: '70%',
      category: 'Automation',
      popular: true,
      implementationTime: '4-8 weeks',
      useCases: ['Invoice processing', 'Customer onboarding', 'Data entry', 'Compliance reporting'],
      industries: ['Finance', 'Healthcare', 'Legal', 'Manufacturing', 'Government'],
      integrations: 80,
      support: '24/7',
      trialDays: 30,
      roi: '400-700%',
      clients: '180+'
    },
    {
      id: 'ai-chatbot-platform',
      icon: MessageSquare,
      title: 'AI Chatbot Platform',
      description: 'Enterprise-grade conversational AI platform with multi-channel support, voice integration, and advanced analytics',
      features: [
        'Multi-channel deployment',
        'Voice integration',
        'Intent recognition',
        'Context management',
        'Human handoff',
        'Analytics dashboard',
        'A/B testing',
        'Custom training'
      ],
      price: '$2,500/month',
      marketPrice: '$8,000/month',
      savings: '69%',
      category: 'Conversational AI',
      popular: true,
      implementationTime: '2-4 weeks',
      useCases: ['Customer support', 'Sales assistance', 'Lead qualification', 'Internal helpdesk'],
      industries: ['E-commerce', 'Banking', 'Healthcare', 'Travel', 'Real Estate'],
      integrations: 45,
      support: '24/7',
      trialDays: 30,
      roi: '200-400%',
      clients: '400+'
    },
    {
      id: 'ai-document-processing',
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Intelligent document processing with OCR, data extraction, classification, and automated workflow management',
      features: [
        'Advanced OCR',
        'Data extraction',
        'Document classification',
        'Workflow automation',
        'Quality assurance',
        'Compliance checking',
        'Multi-format support',
        'API integration'
      ],
      price: '$3,500/month',
      marketPrice: '$12,000/month',
      savings: '71%',
      category: 'Document AI',
      popular: false,
      implementationTime: '3-5 weeks',
      useCases: ['Invoice processing', 'Contract analysis', 'Claims processing', 'Compliance reporting'],
      industries: ['Insurance', 'Legal', 'Finance', 'Healthcare', 'Government'],
      integrations: 30,
      support: '24/7',
      trialDays: 30,
      roi: '300-500%',
      clients: '120+'
    },

    // Industry-Specific AI Solutions
    {
      id: 'ai-healthcare',
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support',
      features: [
        'Medical imaging analysis',
        'Drug discovery',
        'Patient risk assessment',
        'Clinical decision support',
        'Electronic health records',
        'Telemedicine integration',
        'HIPAA compliance',
        'FDA approval support'
      ],
      price: '$15,000/month',
      marketPrice: '$50,000/month',
      savings: '70%',
      category: 'Healthcare AI',
      popular: true,
      implementationTime: '8-12 weeks',
      useCases: ['Medical diagnosis', 'Drug discovery', 'Patient monitoring', 'Treatment optimization'],
      industries: ['Hospitals', 'Pharmaceuticals', 'Medical Devices', 'Telemedicine', 'Research'],
      integrations: 25,
      support: '24/7',
      trialDays: 60,
      roi: '500-800%',
      clients: '80+'
    },
    {
      id: 'ai-fintech',
      icon: CreditCard,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, algorithmic trading, credit scoring, and regulatory compliance in financial services',
      features: [
        'Fraud detection',
        'Algorithmic trading',
        'Credit scoring',
        'Risk assessment',
        'Regulatory compliance',
        'Anti-money laundering',
        'Real-time monitoring',
        'Audit trails'
      ],
      price: '$12,000/month',
      marketPrice: '$40,000/month',
      savings: '70%',
      category: 'FinTech AI',
      popular: true,
      implementationTime: '6-10 weeks',
      useCases: ['Fraud prevention', 'Trading optimization', 'Credit decisions', 'Compliance monitoring'],
      industries: ['Banking', 'Insurance', 'Investment', 'Cryptocurrency', 'FinTech'],
      integrations: 40,
      support: '24/7',
      trialDays: 45,
      roi: '400-700%',
      clients: '100+'
    },
    {
      id: 'ai-ecommerce',
      icon: ShoppingCart,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines, dynamic pricing, inventory optimization, and customer insights',
      features: [
        'Recommendation engines',
        'Dynamic pricing',
        'Inventory optimization',
        'Customer segmentation',
        'Demand forecasting',
        'Personalization',
        'Search optimization',
        'Analytics dashboard'
      ],
      price: '$5,500/month',
      marketPrice: '$18,000/month',
      savings: '69%',
      category: 'E-commerce AI',
      popular: false,
      implementationTime: '4-6 weeks',
      useCases: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights'],
      industries: ['Retail', 'Fashion', 'Electronics', 'Home & Garden', 'Marketplace'],
      integrations: 50,
      support: '24/7',
      trialDays: 30,
      roi: '300-500%',
      clients: '200+'
    },
    {
      id: 'ai-manufacturing',
      icon: Package,
      title: 'AI Manufacturing Solutions',
      description: 'Smart manufacturing with predictive maintenance, quality control, supply chain optimization, and production planning',
      features: [
        'Predictive maintenance',
        'Quality control',
        'Supply chain optimization',
        'Production planning',
        'Energy optimization',
        'Safety monitoring',
        'IoT integration',
        'Real-time analytics'
      ],
      price: '$9,000/month',
      marketPrice: '$30,000/month',
      savings: '70%',
      category: 'Manufacturing AI',
      popular: false,
      implementationTime: '6-10 weeks',
      useCases: ['Predictive maintenance', 'Quality assurance', 'Supply chain', 'Production optimization'],
      industries: ['Automotive', 'Electronics', 'Food & Beverage', 'Pharmaceuticals', 'Aerospace'],
      integrations: 35,
      support: '24/7',
      trialDays: 45,
      roi: '400-600%',
      clients: '90+'
    },

    // AI Data & Analytics
    {
      id: 'ai-data-analytics',
      icon: BarChart3,
      title: 'AI Data Analytics Platform',
      description: 'Advanced data analytics with AI insights, automated reporting, and predictive modeling for business intelligence',
      features: [
        'Automated insights',
        'Predictive modeling',
        'Data visualization',
        'Real-time analytics',
        'Anomaly detection',
        'Custom dashboards',
        'Data integration',
        'API access'
      ],
      price: '$4,000/month',
      marketPrice: '$15,000/month',
      savings: '73%',
      category: 'Data Analytics',
      popular: true,
      implementationTime: '3-5 weeks',
      useCases: ['Business intelligence', 'Performance monitoring', 'Trend analysis', 'Decision support'],
      industries: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'],
      integrations: 70,
      support: '24/7',
      trialDays: 30,
      roi: '250-450%',
      clients: '300+'
    },
    {
      id: 'ai-big-data',
      icon: Database,
      title: 'AI Big Data Platform',
      description: 'Scalable big data processing with AI analytics, real-time streaming, and machine learning for massive datasets',
      features: [
        'Big data processing',
        'Real-time streaming',
        'Machine learning',
        'Data lakes',
        'Scalable infrastructure',
        'Data governance',
        'Security & compliance',
        'Cloud integration'
      ],
      price: '$10,000/month',
      marketPrice: '$35,000/month',
      savings: '71%',
      category: 'Big Data AI',
      popular: false,
      implementationTime: '6-8 weeks',
      useCases: ['Data processing', 'Real-time analytics', 'ML model training', 'Data warehousing'],
      industries: ['Technology', 'Finance', 'Healthcare', 'Telecommunications', 'Government'],
      integrations: 60,
      support: '24/7',
      trialDays: 45,
      roi: '350-600%',
      clients: '70+'
    },

    // AI Security & Compliance
    {
      id: 'ai-cybersecurity',
      icon: Shield,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced AI-powered security with threat detection, behavioral analysis, and automated response for enterprise protection',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Automated response',
        'Vulnerability scanning',
        'Incident response',
        'Compliance monitoring',
        'Security analytics',
        '24/7 monitoring'
      ],
      price: '$8,500/month',
      marketPrice: '$28,000/month',
      savings: '70%',
      category: 'Cybersecurity AI',
      popular: true,
      implementationTime: '4-6 weeks',
      useCases: ['Threat prevention', 'Incident response', 'Compliance', 'Security monitoring'],
      industries: ['Finance', 'Healthcare', 'Government', 'Technology', 'Energy'],
      integrations: 40,
      support: '24/7',
      trialDays: 30,
      roi: '400-700%',
      clients: '150+'
    },
    {
      id: 'ai-compliance',
      icon: CheckCircle,
      title: 'AI Compliance Management',
      description: 'Automated compliance monitoring with AI risk assessment, regulatory updates, and audit trail management',
      features: [
        'Compliance monitoring',
        'Risk assessment',
        'Regulatory updates',
        'Audit trails',
        'Policy management',
        'Training automation',
        'Reporting tools',
        'Integration hub'
      ],
      price: '$6,500/month',
      marketPrice: '$22,000/month',
      savings: '70%',
      category: 'Compliance AI',
      popular: false,
      implementationTime: '4-6 weeks',
      useCases: ['Regulatory compliance', 'Risk management', 'Audit preparation', 'Policy enforcement'],
      industries: ['Finance', 'Healthcare', 'Government', 'Legal', 'Insurance'],
      integrations: 35,
      support: '24/7',
      trialDays: 30,
      roi: '300-500%',
      clients: '100+'
    },

    // AI Cloud & Infrastructure
    {
      id: 'ai-cloud-platform',
      icon: Cloud,
      title: 'AI Cloud Platform',
      description: 'Comprehensive AI cloud platform with ML infrastructure, model deployment, and scalable computing resources',
      features: [
        'ML infrastructure',
        'Model deployment',
        'Auto-scaling',
        'GPU computing',
        'Data storage',
        'API management',
        'Monitoring & logging',
        'Security & compliance'
      ],
      price: '$7,000/month',
      marketPrice: '$25,000/month',
      savings: '72%',
      category: 'Cloud AI',
      popular: true,
      implementationTime: '3-5 weeks',
      useCases: ['ML model deployment', 'Data processing', 'AI application hosting', 'Scalable computing'],
      industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Media'],
      integrations: 80,
      support: '24/7',
      trialDays: 30,
      roi: '300-500%',
      clients: '200+'
    },
    {
      id: 'ai-edge-computing',
      icon: Wifi,
      title: 'AI Edge Computing',
      description: 'Edge AI solutions for real-time processing, IoT integration, and low-latency inference at the network edge',
      features: [
        'Edge inference',
        'IoT integration',
        'Real-time processing',
        'Low latency',
        'Offline capability',
        'Device management',
        'Data synchronization',
        'Security protocols'
      ],
      price: '$5,500/month',
      marketPrice: '$18,000/month',
      savings: '69%',
      category: 'Edge AI',
      popular: false,
      implementationTime: '4-6 weeks',
      useCases: ['IoT analytics', 'Real-time processing', 'Autonomous systems', 'Smart cities'],
      industries: ['Manufacturing', 'Automotive', 'Smart Cities', 'Agriculture', 'Energy'],
      integrations: 25,
      support: '24/7',
      trialDays: 30,
      roi: '250-400%',
      clients: '80+'
    },

    // AI Research & Development
    {
      id: 'ai-research-platform',
      icon: BookOpen,
      title: 'AI Research Platform',
      description: 'Advanced AI research platform with experimental tools, model development, and collaboration features for AI research teams',
      features: [
        'Experimental tools',
        'Model development',
        'Collaboration features',
        'Version control',
        'Experiment tracking',
        'Data management',
        'Publication tools',
        'Peer review'
      ],
      price: '$3,000/month',
      marketPrice: '$10,000/month',
      savings: '70%',
      category: 'AI Research',
      popular: false,
      implementationTime: '2-4 weeks',
      useCases: ['AI research', 'Model development', 'Experiment tracking', 'Collaboration'],
      industries: ['Academia', 'Research', 'Technology', 'Pharmaceuticals', 'Government'],
      integrations: 30,
      support: '24/7',
      trialDays: 30,
      roi: '200-350%',
      clients: '60+'
    },
    {
      id: 'ai-ethics-compliance',
      icon: Scale,
      title: 'AI Ethics & Compliance',
      description: 'AI ethics framework with bias detection, fairness monitoring, and compliance tools for responsible AI deployment',
      features: [
        'Bias detection',
        'Fairness monitoring',
        'Ethics framework',
        'Compliance tools',
        'Audit trails',
        'Transparency reporting',
        'Risk assessment',
        'Training programs'
      ],
      price: '$4,500/month',
      marketPrice: '$15,000/month',
      savings: '70%',
      category: 'AI Ethics',
      popular: false,
      implementationTime: '3-5 weeks',
      useCases: ['Bias mitigation', 'Fairness monitoring', 'Ethics compliance', 'Transparency reporting'],
      industries: ['Finance', 'Healthcare', 'Government', 'Technology', 'Legal'],
      integrations: 20,
      support: '24/7',
      trialDays: 30,
      roi: '200-400%',
      clients: '50+'
    }
  ];

  const categories = [
    'All',
    'AI Consulting',
    'ML Platform',
    'NLP',
    'Computer Vision',
    'Analytics',
    'Automation',
    'Conversational AI',
    'Document AI',
    'Healthcare AI',
    'FinTech AI',
    'E-commerce AI',
    'Manufacturing AI',
    'Data Analytics',
    'Big Data AI',
    'Cybersecurity AI',
    'Compliance AI',
    'Cloud AI',
    'Edge AI',
    'AI Research',
    'AI Ethics'
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort services
    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      case 'price-low':
        return filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
      case 'price-high':
        return filtered.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
      case 'name':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return filtered;
    }
  }, [aiServices, selectedCategory, searchTerm, sortBy]);

  const stats = [
    { icon: <Brain className="w-8 h-8 text-blue-500" />, value: '20+', label: 'AI Services' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '70%', label: 'Average Savings' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '500+', label: 'Enterprise Clients' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '400%', label: 'Average ROI' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and industry-specific solutions. 70% average savings with 400% ROI." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI consulting, AI automation, AI healthcare, AI fintech" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning platforms 
              to industry-specific AI applications, we deliver 70% average savings with 400% ROI.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      <option value="popular" className="bg-gray-800">Most Popular</option>
                      <option value="price-low" className="bg-gray-800">Price: Low to High</option>
                      <option value="price-high" className="bg-gray-800">Price: High to Low</option>
                      <option value="name" className="bg-gray-800">Name A-Z</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
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
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                        <div className="text-sm text-green-400 font-semibold">Save {service.savings}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{service.clients} clients</div>
                        <div className="text-xs text-gray-500">{service.trialDays}-day free trial</div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 6 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 6} more features
                      </li>
                    )}
                  </ul>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-center text-sm">
                    <div>
                      <div className="text-gray-400">Implementation</div>
                      <div className="text-white font-semibold">{service.implementationTime}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">ROI</div>
                      <div className="text-white font-semibold">{service.roi}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-2">Industries:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.industries.slice(0, 3).map((industry, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {industry}
                        </span>
                      ))}
                      {service.industries.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                          +{service.industries.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Get Started
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored AI solutions designed for specific industries with deep domain expertise and compliance requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
                <p className="text-gray-300">HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Finance</h3>
                <p className="text-gray-300">Advanced AI for fraud detection, algorithmic trading, and regulatory compliance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
                <p className="text-gray-300">Smart manufacturing with predictive maintenance, quality control, and supply chain optimization.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
                <p className="text-gray-300">Intelligent e-commerce with recommendation engines, dynamic pricing, and customer insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get started with our AI services and experience 70% average savings with 400% ROI. 
                Free consultation and 30-day trial available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Free Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiServicesPage;