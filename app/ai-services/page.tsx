'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Award,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Database,
  BarChart,
  MessageSquare,
  Eye,
  Target,
  Globe,
  Lock,
  Sparkles,
  Code,
  Cloud,
  Smartphone,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  Percent,
  Timer,
  Layers,
  Workflow,
  Bot,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  X,
  Menu,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Move,
  Copy,
  Edit,
  Trash2,
  Save,
  Share,
  Link,
  Unlink,
  Lock as LockIcon,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageOff,
  File,
  Folder,
  FolderOpen,
  Archive,
  Inbox,
  Outbox,
  Send,
  Mail as MailIcon,
  MailOpen,
  Reply,
  Forward,
  Flag,
  Bookmark,
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
  Check as CheckIcon,
  X as XMarkIcon,
  ExclamationTriangle,
  ExclamationCircle,
  CheckCircle as CheckCircleIcon,
  XCircle,
  AlertTriangle,
  Info as InfoIcon,
  HelpCircle as HelpIcon,
  QuestionMarkCircle,
  Lightbulb,
  Bulb,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Zap as ZapIcon,
  Thunder,
  Rainbow,
  Sunrise,
  Sunset,
  Compass,
  Map,
  MapPin as MapPinIcon,
  Navigation,
  Route,
  Flag as FlagIcon,
  Home,
  Building,
  Building2,
  Store,
  Factory,
  Warehouse,
  Hospital,
  School,
  University,
  Church,
  Mosque,
  Synagogue,
  Temple,
  Bank,
  CreditCard,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Calculator as CalcIcon,
  PieChart,
  BarChart as BarChartIcon,
  LineChart,
  Activity,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowDownLeft,
  ArrowUpDown,
  ArrowLeftRight,
  ArrowRightLeft,
  ArrowUpDown as ArrowUpDownIcon,
  ArrowLeftRight as ArrowLeftRightIcon,
  ArrowRightLeft as ArrowRightLeftIcon,
  ArrowUpRight as ArrowUpRightIcon,
  ArrowDownRight as ArrowDownRightIcon,
  ArrowUpLeft as ArrowUpLeftIcon,
  ArrowDownLeft as ArrowDownLeftIcon,
  ArrowUp as ArrowUpIcon,
  ArrowDown as ArrowDownIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon2,
  ChevronUp,
  ChevronDown as ChevronDownIcon,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon2,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon2,
  DoubleChevronUp,
  DoubleChevronDown,
  DoubleChevronLeft,
  DoubleChevronRight,
  DoubleChevronUp as DoubleChevronUpIcon,
  DoubleChevronDown as DoubleChevronDownIcon,
  DoubleChevronLeft as DoubleChevronLeftIcon,
  DoubleChevronRight as DoubleChevronRightIcon,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp as ChevronsUpIcon,
  ChevronsDown as ChevronsDownIcon,
  ChevronsLeft as ChevronsLeftIcon,
  ChevronsRight as ChevronsRightIcon,
  Move as MoveIcon,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  MoveUp as MoveUpIcon,
  MoveDown as MoveDownIcon,
  MoveLeft as MoveLeftIcon,
  MoveRight as MoveRightIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  RotateCcw as RotateCcwIcon2,
  RotateCw as RotateCwIcon2,
  RotateCcw as RotateCcwIcon3,
  RotateCw as RotateCwIcon3,
  RotateCcw as RotateCcwIcon4,
  RotateCw as RotateCwIcon4,
  RotateCcw as RotateCcwIcon5,
  RotateCw as RotateCwIcon5,
  RotateCcw as RotateCcwIcon6,
  RotateCw as RotateCwIcon6,
  RotateCcw as RotateCcwIcon7,
  RotateCw as RotateCwIcon7,
  RotateCcw as RotateCcwIcon8,
  RotateCw as RotateCwIcon8,
  RotateCcw as RotateCcwIcon9,
  RotateCw as RotateCwIcon9,
  RotateCcw as RotateCcwIcon10,
  RotateCw as RotateCwIcon10,
  RotateCcw as RotateCcwIcon11,
  RotateCw as RotateCwIcon11,
  RotateCcw as RotateCcwIcon12,
  RotateCw as RotateCwIcon12,
  RotateCcw as RotateCcwIcon13,
  RotateCw as RotateCwIcon13,
  RotateCcw as RotateCcwIcon14,
  RotateCw as RotateCwIcon14,
  RotateCcw as RotateCcwIcon15,
  RotateCw as RotateCwIcon15,
  RotateCcw as RotateCcwIcon16,
  RotateCw as RotateCwIcon16,
  RotateCcw as RotateCcwIcon17,
  RotateCw as RotateCwIcon17,
  RotateCcw as RotateCcwIcon18,
  RotateCw as RotateCwIcon18,
  RotateCcw as RotateCcwIcon19,
  RotateCw as RotateCwIcon19,
  RotateCcw as RotateCcwIcon20,
  RotateCw as RotateCwIcon20,
  RotateCcw as RotateCcwIcon21,
  RotateCw as RotateCwIcon21,
  RotateCcw as RotateCcwIcon22,
  RotateCw as RotateCwIcon22,
  RotateCcw as RotateCcwIcon23,
  RotateCw as RotateCwIcon23,
  RotateCcw as RotateCcwIcon24,
  RotateCw as RotateCwIcon24,
  RotateCcw as RotateCcwIcon25,
  RotateCw as RotateCwIcon25,
  RotateCcw as RotateCcwIcon26,
  RotateCw as RotateCwIcon26,
  RotateCcw as RotateCcwIcon27,
  RotateCw as RotateCwIcon27,
  RotateCcw as RotateCcwIcon28,
  RotateCw as RotateCwIcon28,
  RotateCcw as RotateCcwIcon29,
  RotateCw as RotateCwIcon29,
  RotateCcw as RotateCcwIcon30,
  RotateCw as RotateCwIcon30,
  RotateCcw as RotateCcwIcon31,
  RotateCw as RotateCwIcon31,
  RotateCcw as RotateCcwIcon32,
  RotateCw as RotateCwIcon32,
  RotateCcw as RotateCcwIcon33,
  RotateCw as RotateCwIcon33,
  RotateCcw as RotateCcwIcon34,
  RotateCw as RotateCwIcon34,
  RotateCcw as RotateCcwIcon35,
  RotateCw as RotateCwIcon35,
  RotateCcw as RotateCcwIcon36,
  RotateCw as RotateCwIcon36,
  RotateCcw as RotateCcwIcon37,
  RotateCw as RotateCwIcon37,
  RotateCcw as RotateCcwIcon38,
  RotateCw as RotateCwIcon38,
  RotateCcw as RotateCcwIcon39,
  RotateCw as RotateCwIcon39,
  RotateCcw as RotateCcwIcon40,
  RotateCw as RotateCwIcon40,
  RotateCcw as RotateCcwIcon41,
  RotateCw as RotateCwIcon41,
  RotateCcw as RotateCcwIcon42,
  RotateCw as RotateCwIcon42,
  RotateCcw as RotateCcwIcon43,
  RotateCw as RotateCwIcon43,
  RotateCcw as RotateCcwIcon44,
  RotateCw as RotateCwIcon44,
  RotateCcw as RotateCcwIcon45,
  RotateCw as RotateCwIcon45,
  RotateCcw as RotateCcwIcon46,
  RotateCw as RotateCwIcon46,
  RotateCcw as RotateCcwIcon47,
  RotateCw as RotateCwIcon47,
  RotateCcw as RotateCcwIcon48,
  RotateCw as RotateCwIcon48,
  RotateCcw as RotateCcwIcon49,
  RotateCw as RotateCwIcon49,
  RotateCcw as RotateCcwIcon50,
  RotateCw as RotateCwIcon50,
  RotateCcw as RotateCcwIcon51,
  RotateCw as RotateCwIcon51,
  RotateCcw as RotateCcwIcon52,
  RotateCw as RotateCwIcon52,
  RotateCcw as RotateCcwIcon53,
  RotateCw as RotateCwIcon53,
  RotateCcw as RotateCcwIcon54,
  RotateCw as RotateCwIcon54,
  RotateCcw as RotateCcwIcon55,
  RotateCw as RotateCwIcon55,
  RotateCcw as RotateCcwIcon56,
  RotateCw as RotateCwIcon56,
  RotateCcw as RotateCcwIcon57,
  RotateCw as RotateCwIcon57,
  RotateCcw as RotateCcwIcon58,
  RotateCw as RotateCwIcon58,
  RotateCcw as RotateCcwIcon59,
  RotateCw as RotateCwIcon59,
  RotateCcw as RotateCcwIcon60,
  RotateCw as RotateCwIcon60,
  RotateCcw as RotateCcwIcon61,
  RotateCw as RotateCwIcon61,
  RotateCcw as RotateCcwIcon62,
  RotateCw as RotateCwIcon62,
  RotateCcw as RotateCcwIcon63,
  RotateCw as RotateCwIcon63,
  RotateCcw as RotateCcwIcon64,
  RotateCw as RotateCwIcon64,
  RotateCcw as RotateCcwIcon65,
  RotateCw as RotateCwIcon65,
  RotateCcw as RotateCcwIcon66,
  RotateCw as RotateCwIcon66,
  RotateCcw as RotateCcwIcon67,
  RotateCw as RotateCwIcon67,
  RotateCcw as RotateCcwIcon68,
  RotateCw as RotateCwIcon68,
  RotateCcw as RotateCcwIcon69,
  RotateCw as RotateCwIcon69,
  RotateCcw as RotateCcwIcon70,
  RotateCw as RotateCwIcon70,
  RotateCcw as RotateCcwIcon71,
  RotateCw as RotateCwIcon71,
  RotateCcw as RotateCcwIcon72,
  RotateCw as RotateCwIcon72,
  RotateCcw as RotateCcwIcon73,
  RotateCw as RotateCwIcon73,
  RotateCcw as RotateCcwIcon74,
  RotateCw as RotateCwIcon74,
  RotateCcw as RotateCcwIcon75,
  RotateCw as RotateCwIcon75,
  RotateCcw as RotateCcwIcon76,
  RotateCw as RotateCwIcon76,
  RotateCcw as RotateCcwIcon77,
  RotateCw as RotateCwIcon77,
  RotateCcw as RotateCcwIcon78,
  RotateCw as RotateCwIcon78,
  RotateCcw as RotateCcwIcon79,
  RotateCw as RotateCwIcon79,
  RotateCcw as RotateCcwIcon80,
  RotateCw as RotateCwIcon80,
  RotateCcw as RotateCcwIcon81,
  RotateCw as RotateCwIcon81,
  RotateCcw as RotateCcwIcon82,
  RotateCw as RotateCwIcon82,
  RotateCcw as RotateCcwIcon83,
  RotateCw as RotateCwIcon83,
  RotateCcw as RotateCcwIcon84,
  RotateCw as RotateCwIcon84,
  RotateCcw as RotateCcwIcon85,
  RotateCw as RotateCwIcon85,
  RotateCcw as RotateCcwIcon86,
  RotateCw as RotateCwIcon86,
  RotateCcw as RotateCcwIcon87,
  RotateCw as RotateCwIcon87,
  RotateCcw as RotateCcwIcon88,
  RotateCw as RotateCwIcon88,
  RotateCcw as RotateCcwIcon89,
  RotateCw as RotateCwIcon89,
  RotateCcw as RotateCcwIcon90,
  RotateCw as RotateCwIcon90,
  RotateCcw as RotateCcwIcon91,
  RotateCw as RotateCwIcon91,
  RotateCcw as RotateCcwIcon92,
  RotateCw as RotateCwIcon92,
  RotateCcw as RotateCcwIcon93,
  RotateCw as RotateCwIcon93,
  RotateCcw as RotateCcwIcon94,
  RotateCw as RotateCwIcon94,
  RotateCcw as RotateCcwIcon95,
  RotateCw as RotateCwIcon95,
  RotateCcw as RotateCcwIcon96,
  RotateCw as RotateCwIcon96,
  RotateCcw as RotateCcwIcon97,
  RotateCw as RotateCwIcon97,
  RotateCcw as RotateCcwIcon98,
  RotateCw as RotateCwIcon98,
  RotateCcw as RotateCcwIcon99,
  RotateCw as RotateCwIcon99,
  RotateCcw as RotateCcwIcon100,
  RotateCw as RotateCwIcon100
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = useMemo(() => [
    {
      id: 'ai-enterprise-solutions',
      name: 'AI Enterprise Solutions',
      category: 'enterprise',
      description: 'Comprehensive AI transformation for large enterprises with custom ML models, data pipelines, and intelligent automation.',
      features: [
        'Custom Machine Learning Models',
        'Enterprise Data Integration',
        'Intelligent Process Automation',
        'Real-time Analytics Dashboard',
        'Scalable Cloud Infrastructure',
        '24/7 AI Monitoring & Support'
      ],
      pricing: {
        starter: { price: '$50,000', period: 'month', description: 'Basic AI implementation' },
        professional: { price: '$150,000', period: 'month', description: 'Advanced AI solutions' },
        enterprise: { price: '$500,000', period: 'month', description: 'Full AI transformation' }
      },
      benefits: [
        '300% average ROI within 12 months',
        '70% reduction in operational costs',
        '90% improvement in process efficiency',
        'Real-time decision making capabilities'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/ai-enterprise-solutions'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'customer-service',
      description: 'Intelligent 24/7 customer support with natural language processing, sentiment analysis, and automated ticket resolution.',
      features: [
        'Natural Language Processing',
        'Sentiment Analysis & Response',
        'Automated Ticket Resolution',
        'Multi-language Support',
        'Integration with CRM Systems',
        'Real-time Performance Analytics'
      ],
      pricing: {
        starter: { price: '$2,500', period: 'month', description: 'Up to 1,000 conversations' },
        professional: { price: '$7,500', period: 'month', description: 'Up to 10,000 conversations' },
        enterprise: { price: '$25,000', period: 'month', description: 'Unlimited conversations' }
      },
      benefits: [
        '95% customer satisfaction rate',
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 availability'
      ],
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      link: '/ai-customer-support'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      category: 'analytics',
      description: 'Advanced AI-powered data analytics with predictive modeling, real-time insights, and automated reporting.',
      features: [
        'Predictive Analytics & Forecasting',
        'Real-time Data Processing',
        'Automated Report Generation',
        'Interactive Dashboards',
        'Data Visualization Tools',
        'Custom ML Model Training'
      ],
      pricing: {
        starter: { price: '$3,000', period: 'month', description: 'Up to 1M data points' },
        professional: { price: '$8,000', period: 'month', description: 'Up to 10M data points' },
        enterprise: { price: '$20,000', period: 'month', description: 'Unlimited data processing' }
      },
      benefits: [
        '85% improvement in decision accuracy',
        '50% faster data processing',
        'Real-time business insights',
        'Automated anomaly detection'
      ],
      icon: BarChart,
      color: 'from-green-500 to-emerald-500',
      popular: true,
      link: '/ai-data-analytics'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      description: 'Intelligent content creation with natural language generation, SEO optimization, and multi-format output.',
      features: [
        'Natural Language Generation',
        'SEO-Optimized Content',
        'Multi-format Output (Blog, Social, Email)',
        'Brand Voice Consistency',
        'Content Performance Analytics',
        'Automated Content Scheduling'
      ],
      pricing: {
        starter: { price: '$1,500', period: 'month', description: 'Up to 100 articles' },
        professional: { price: '$4,000', period: 'month', description: 'Up to 500 articles' },
        enterprise: { price: '$10,000', period: 'month', description: 'Unlimited content' }
      },
      benefits: [
        '90% reduction in content creation time',
        '300% increase in content output',
        'Consistent brand voice across all content',
        'SEO-optimized for better rankings'
      ],
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      popular: false,
      link: '/ai-content-generation'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      category: 'security',
      description: 'Advanced AI-powered cybersecurity with threat detection, automated response, and behavioral analysis.',
      features: [
        'Real-time Threat Detection',
        'Behavioral Analysis & Anomaly Detection',
        'Automated Incident Response',
        'Predictive Security Analytics',
        'Zero-trust Architecture',
        'Compliance Monitoring'
      ],
      pricing: {
        starter: { price: '$5,000', period: 'month', description: 'Up to 100 endpoints' },
        professional: { price: '$15,000', period: 'month', description: 'Up to 1,000 endpoints' },
        enterprise: { price: '$50,000', period: 'month', description: 'Unlimited endpoints' }
      },
      benefits: [
        '99.9% threat detection accuracy',
        '90% reduction in false positives',
        'Real-time security monitoring',
        'Automated incident response'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      link: '/ai-cybersecurity'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation with process optimization, smart routing, and adaptive learning.',
      features: [
        'Process Discovery & Mapping',
        'Intelligent Task Routing',
        'Adaptive Learning Algorithms',
        'Integration with 500+ Tools',
        'Real-time Process Monitoring',
        'Performance Optimization'
      ],
      pricing: {
        starter: { price: '$2,000', period: 'month', description: 'Up to 10 workflows' },
        professional: { price: '$6,000', period: 'month', description: 'Up to 50 workflows' },
        enterprise: { price: '$18,000', period: 'month', description: 'Unlimited workflows' }
      },
      benefits: [
        '75% reduction in manual tasks',
        '60% improvement in process efficiency',
        'Real-time process optimization',
        'Seamless tool integration'
      ],
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: '/ai-workflow-automation'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'sales',
      description: 'Intelligent sales automation with lead scoring, predictive analytics, and automated follow-up.',
      features: [
        'Intelligent Lead Scoring',
        'Predictive Sales Analytics',
        'Automated Follow-up Sequences',
        'CRM Integration & Sync',
        'Sales Performance Analytics',
        'Custom Sales Workflows'
      ],
      pricing: {
        starter: { price: '$3,500', period: 'month', description: 'Up to 1,000 leads' },
        professional: { price: '$9,000', period: 'month', description: 'Up to 10,000 leads' },
        enterprise: { price: '$25,000', period: 'month', description: 'Unlimited leads' }
      },
      benefits: [
        '40% increase in conversion rates',
        '50% reduction in sales cycle time',
        'Automated lead qualification',
        'Predictive sales forecasting'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      link: '/ai-sales-automation'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      description: 'Advanced AI solutions for healthcare with medical imaging, diagnosis assistance, and patient monitoring.',
      features: [
        'Medical Image Analysis',
        'Diagnosis Assistance & Support',
        'Patient Risk Assessment',
        'Drug Interaction Analysis',
        'Telemedicine Integration',
        'HIPAA Compliant Infrastructure'
      ],
      pricing: {
        starter: { price: '$10,000', period: 'month', description: 'Basic medical imaging' },
        professional: { price: '$25,000', period: 'month', description: 'Advanced diagnostics' },
        enterprise: { price: '$75,000', period: 'month', description: 'Full healthcare AI suite' }
      },
      benefits: [
        '95% accuracy in medical imaging',
        '60% faster diagnosis time',
        'Reduced medical errors',
        'Improved patient outcomes'
      ],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      link: '/ai-healthcare'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      category: 'fintech',
      description: 'Intelligent financial technology solutions with fraud detection, risk assessment, and automated trading.',
      features: [
        'Real-time Fraud Detection',
        'Risk Assessment & Scoring',
        'Automated Trading Algorithms',
        'Regulatory Compliance Monitoring',
        'Financial Data Analysis',
        'Blockchain Integration'
      ],
      pricing: {
        starter: { price: '$8,000', period: 'month', description: 'Basic fraud detection' },
        professional: { price: '$20,000', period: 'month', description: 'Advanced risk management' },
        enterprise: { price: '$60,000', period: 'month', description: 'Full fintech AI platform' }
      },
      benefits: [
        '99.5% fraud detection accuracy',
        '80% reduction in false positives',
        'Real-time risk assessment',
        'Automated compliance reporting'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      popular: true,
      link: '/ai-fintech'
    },
    {
      id: 'ai-mobile-apps',
      name: 'AI Mobile App Development',
      category: 'mobile',
      description: 'Intelligent mobile applications with AI-powered features, personalization, and smart recommendations.',
      features: [
        'AI-Powered Personalization',
        'Smart Recommendation Engine',
        'Natural Language Processing',
        'Computer Vision Integration',
        'Real-time Analytics',
        'Cross-platform Compatibility'
      ],
      pricing: {
        starter: { price: '$15,000', period: 'one-time', description: 'Basic AI mobile app' },
        professional: { price: '$35,000', period: 'one-time', description: 'Advanced AI features' },
        enterprise: { price: '$75,000', period: 'one-time', description: 'Full AI mobile platform' }
      },
      benefits: [
        'Enhanced user engagement',
        'Personalized user experience',
        'Intelligent app behavior',
        'Real-time user insights'
      ],
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      link: '/ai-mobile-apps'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Solutions',
      category: 'ecommerce',
      description: 'Intelligent e-commerce platform with personalized shopping, inventory optimization, and smart pricing.',
      features: [
        'Personalized Product Recommendations',
        'Dynamic Pricing Optimization',
        'Inventory Management AI',
        'Customer Behavior Analysis',
        'Automated Customer Service',
        'Sales Forecasting'
      ],
      pricing: {
        starter: { price: '$4,000', period: 'month', description: 'Up to 1,000 products' },
        professional: { price: '$12,000', period: 'month', description: 'Up to 10,000 products' },
        enterprise: { price: '$30,000', period: 'month', description: 'Unlimited products' }
      },
      benefits: [
        '35% increase in conversion rates',
        '25% improvement in average order value',
        'Automated inventory optimization',
        'Personalized shopping experience'
      ],
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      popular: true,
      link: '/ai-ecommerce'
    },
    {
      id: 'ai-voice-processing',
      name: 'AI Voice Processing',
      category: 'voice',
      description: 'Advanced voice AI with speech recognition, natural language understanding, and voice synthesis.',
      features: [
        'Speech-to-Text Recognition',
        'Natural Language Understanding',
        'Voice Synthesis & Cloning',
        'Multi-language Support',
        'Real-time Processing',
        'Voice Analytics'
      ],
      pricing: {
        starter: { price: '$2,000', period: 'month', description: 'Up to 1,000 hours' },
        professional: { price: '$6,000', period: 'month', description: 'Up to 10,000 hours' },
        enterprise: { price: '$18,000', period: 'month', description: 'Unlimited processing' }
      },
      benefits: [
        '98% speech recognition accuracy',
        'Real-time voice processing',
        'Multi-language capabilities',
        'Natural voice synthesis'
      ],
      icon: Mic,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      link: '/ai-voice-processing'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'enterprise', name: 'Enterprise', icon: Building },
    { id: 'customer-service', name: 'Customer Service', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'automation', name: 'Automation', icon: Workflow },
    { id: 'sales', name: 'Sales', icon: TrendingUp },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'fintech', name: 'Fintech', icon: DollarSign },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'voice', name: 'Voice', icon: Mic }
  ];

  const filteredServices = useMemo(() => {
    return aiServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [aiServices, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including enterprise solutions, customer support, data analytics, cybersecurity, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, enterprise AI, customer support AI, data analytics AI, cybersecurity AI" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. From enterprise solutions to customer support, we deliver cutting-edge AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From enterprise automation to intelligent customer support, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([tier, pricing]) => (
                      <div key={tier} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{tier}:</span>
                        <span className="text-white font-semibold">
                          {pricing.price}/{pricing.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    className="flex-1 cyber-button text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI experts are ready to help you implement the perfect solution for your business needs. 
            Get a free consultation and see how AI can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;