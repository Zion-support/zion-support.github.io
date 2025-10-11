'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  FileText,
  Target,
  Shield,
  Cloud,
  Zap,
  Users,
<<<<<<< HEAD
=======
  Brain,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Settings,
<<<<<<< HEAD
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart,
  Brain,
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
  Cpu,
  Database,
  Globe,
  Smartphone,
  Lock,
<<<<<<< HEAD
  Calendar,
  Headphones,
  Code,
  Mail,
  Phone,
  MapPin
=======
  DollarSign,
  Heart,
  Mic,
  Eye,
  Code,
  Package,
  Monitor,
  Wifi,
  Server,
  Search,
  Filter,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  ShoppingCart,
  Headphones,
  Workflow,
  Box,
  PieChart,
  Activity,
  Layers,
  Command,
  Terminal,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Car,
  Plane,
  Truck,
  Ship,
  Train,
  Bike,
  Bus,
  Taxi,
  Rocket,
  Satellite,
  Wrench,
  Hammer,
  Scissors,
  Paintbrush,
  PenTool,
  Pencil,
  Eraser,
  Ruler,
  Compass,
  Calculator,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  AlarmClock,
  Bell,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume1,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Download,
  Upload,
  Share,
  Copy,
  Cut,
  Paste,
  Save,
  Trash2,
  Edit,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
  ChevronsUp,
  ChevronsLeft,
  ChevronsRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowDownLeft,
  Move,
  Move3D,
  Rotate3D,
  Scale,
  Crop,
  Focus,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Sad,
  Wink,
  Kiss,
  Tongue,
  Eye as EyeIcon,
  EyeOff,
  Ear,
  Nose,
  Mouth,
  Hand,
  Fingerprint,
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Users as UsersIcon,
  UserCircle,
  UserSquare,
  Crown,
  Award,
  Medal,
  Trophy,
  Gift,
  Present,
  Box as BoxIcon,
  Package as PackageIcon,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileCode,
  FileJson,
  FileXml,
  FileCsv,
  FileZip,
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
  FileCopy,
  FileMove,
  FileTrash,
  FileLock,
  FileUnlock,
  FileSettings,
  FileInfo,
  FileWarning,
  FileAlert,
  FileQuestion,
  FileHeart,
  FileStar,
  FileBookmark,
  FileTag,
  FileLabel,
  FileFolder,
  FileFolderOpen,
  FileFolderPlus,
  FileFolderMinus,
  FileFolderEdit,
  FileFolderSearch,
  FileFolderDownload,
  FileFolderUpload,
  FileFolderShare,
  FileFolderCopy,
  FileFolderMove,
  FileFolderTrash,
  FileFolderLock,
  FileFolderUnlock,
  FileFolderSettings,
  FileFolderInfo,
  FileFolderWarning,
  FileFolderAlert,
  FileFolderQuestion,
  FileFolderHeart,
  FileFolderStar,
  FileFolderBookmark,
  FileFolderTag,
  FileFolderLabel
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      price: '$89/month',
      marketPrice: '$150-500/month',
=======
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasServices = [
    // Business Intelligence & Analytics
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      category: 'analytics',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
<<<<<<< HEAD
        'API integration',
        'Mobile app access'
      ],
=======
        'White-label solutions',
        'API integration'
      ],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
<<<<<<< HEAD
        'ROI tracking'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      link: 'https://analytics.ziontechgroup.com'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      price: '$149/month',
      marketPrice: '$300-800/month',
=======
        'ROI optimization',
        'Competitive advantage'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/analytics-pro'
    },
    {
      icon: PieChart,
      title: 'Zion Data Insights',
      description: 'Comprehensive data analysis and visualization tool for small to medium businesses with automated insights.',
      category: 'analytics',
      features: [
        'Interactive data visualization',
        'Automated insight generation',
        'Custom data models',
        'Export to multiple formats',
        'Scheduled reports',
        'Data quality monitoring'
      ],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Easy data interpretation',
        'Automated insights',
        'Professional reports',
        'Time savings'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/data-insights'
    },

    // Customer Service & Support
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      category: 'customer-service',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      features: [
        'GPT-4 powered AI',
        'Multi-channel support',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support',
<<<<<<< HEAD
        'CRM integration',
        'Analytics dashboard'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      link: 'https://chat.ziontechgroup.com'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
      price: '$49/month',
      marketPrice: '$100-300/month',
=======
        'Custom training',
        'Analytics dashboard'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved satisfaction',
        'Lead generation',
        'Cost reduction'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/chat-ai'
    },
    {
      icon: Headphones,
      title: 'Zion Support Hub',
      description: 'Comprehensive customer support management system with ticketing, knowledge base, and live chat.',
      category: 'customer-service',
      features: [
        'Ticket management system',
        'Knowledge base builder',
        'Live chat integration',
        'Customer satisfaction surveys',
        'Performance analytics',
        'Team collaboration tools'
      ],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Streamlined support process',
        'Better customer experience',
        'Team efficiency',
        'Performance tracking'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/support-hub'
    },

    // Financial & Accounting
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
      category: 'financial',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      features: [
        'AI-powered invoice generation',
        'Automated recurring billing',
        'Multi-currency support',
        'Payment tracking',
        'Tax calculation',
        'Client portal',
        'Expense tracking',
        'Financial reporting'
      ],
<<<<<<< HEAD
=======
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices',
        'Better cash flow'
      ],
<<<<<<< HEAD
      category: 'Finance',
      popular: true,
      icon: FileText,
      link: 'https://invoices.ziontechgroup.com'
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      price: '$99/month',
      marketPrice: '$200-600/month',
=======
      popular: true,
      link: 'https://ziontechgroup.com/invoice-genius'
    },
    {
      icon: Calculator,
      title: 'Zion Expense Tracker',
      description: 'Smart expense tracking and management system with receipt scanning and automated categorization.',
      category: 'financial',
      features: [
        'Receipt scanning with OCR',
        'Automated categorization',
        'Expense approval workflows',
        'Budget tracking',
        'Tax preparation',
        'Multi-user access',
        'Mobile app',
        'Integration with accounting software'
      ],
      price: 'Starting at $29/month',
      marketPrice: '$60-200/month',
      benefits: [
        'Automated expense tracking',
        'Reduced manual work',
        'Better budget control',
        'Tax compliance'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/expense-tracker'
    },

    // Marketing & Sales
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      category: 'marketing',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'CRM integration',
        'Advanced analytics',
        'A/B testing',
<<<<<<< HEAD
        'Email marketing',
        'Social media integration'
      ],
=======
        'Email marketing automation',
        'Social media integration'
      ],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Time savings'
      ],
<<<<<<< HEAD
      category: 'Marketing',
      popular: true,
      icon: Target,
      link: 'https://leads.ziontechgroup.com'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
=======
      popular: true,
      link: 'https://ziontechgroup.com/lead-magnet'
    },
    {
      icon: Mail,
      title: 'Zion Email Studio',
      description: 'Professional email marketing platform with AI-powered content generation and advanced automation.',
      category: 'marketing',
      features: [
        'AI content generation',
        'Advanced automation workflows',
        'A/B testing',
        'Segmentation tools',
        'Analytics dashboard',
        'Template library',
        'Deliverability optimization',
        'Compliance tools'
      ],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: [
        'Higher open rates',
        'Automated campaigns',
        'Better engagement',
        'Professional templates'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/email-studio'
    },

    // Security & Compliance
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      category: 'security',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      features: [
        'Real-time threat monitoring',
        'Vulnerability scanning',
        'Incident response',
        'Security analytics',
        'Compliance reporting',
        'Employee training',
<<<<<<< HEAD
        'Firewall management',
        'Backup monitoring'
      ],
=======
        'Penetration testing',
        'Security audits'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind',
<<<<<<< HEAD
        'Cost-effective protection'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      link: 'https://security.ziontechgroup.com'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and version control.',
      price: '$79/month',
      marketPrice: '$150-400/month',
=======
        'Cost savings'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/security-shield'
    },
    {
      icon: Lock,
      title: 'Zion Privacy Guard',
      description: 'GDPR and privacy compliance management system with automated data protection and consent management.',
      category: 'security',
      features: [
        'GDPR compliance tools',
        'Consent management',
        'Data mapping',
        'Privacy impact assessments',
        'Breach notification',
        'Cookie consent',
        'Data subject requests',
        'Compliance reporting'
      ],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: [
        'GDPR compliance',
        'Reduced legal risk',
        'Automated processes',
        'Customer trust'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/privacy-guard'
    },

    // Cloud & Infrastructure
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and version control.',
      category: 'cloud',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      features: [
        'Automated backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Data encryption',
        'Compliance support',
        'File sharing',
<<<<<<< HEAD
        'Mobile access'
      ],
=======
        'Collaboration tools'
      ],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
<<<<<<< HEAD
        'Secure sharing'
      ],
      category: 'Storage',
      popular: false,
      icon: Cloud,
      link: 'https://vault.ziontechgroup.com'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation platform that streamlines operations and reduces manual work.',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'Visual workflow builder',
        'AI-powered optimization',
        'Integration capabilities',
        'Task automation',
        'Approval workflows',
        'Performance analytics',
        'Custom triggers',
        'Team collaboration'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Team productivity'
      ],
      category: 'Automation',
      popular: true,
      icon: Workflow,
      link: 'https://workflow.ziontechgroup.com'
    },
    {
      id: 'zion-project-manager',
      name: 'Zion Project Manager',
      description: 'AI-powered project management platform with intelligent resource allocation and progress tracking.',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI project planning',
        'Resource optimization',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Risk assessment',
        'Reporting dashboard'
      ],
      benefits: [
        'Better project outcomes',
        'Resource optimization',
        'Timeline accuracy',
        'Team coordination',
        'Cost control'
      ],
      category: 'Project Management',
      popular: false,
      icon: Calendar,
      link: 'https://projects.ziontechgroup.com'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar',
        'Performance analytics',
        'Team collaboration',
        'Template library'
      ],
      benefits: [
        'Save 80% content time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform reach',
        'Content performance'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      link: 'https://content.ziontechgroup.com'
    },
    {
      id: 'zion-crm-assistant',
      name: 'Zion CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights and automated follow-ups.',
      price: '$119/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Customer segmentation',
        'Pipeline management',
        'Email integration',
        'Mobile app',
        'Advanced analytics'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better lead management',
        'Automated nurturing',
        'Sales insights',
        'Customer retention'
      ],
      category: 'CRM',
      popular: true,
      icon: Users,
      link: 'https://crm.ziontechgroup.com'
    },
    {
      id: 'zion-email-marketing',
      name: 'Zion Email Marketing',
      description: 'Advanced email marketing platform with AI-powered personalization and automated campaigns.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'List segmentation',
        'Email templates',
        'Analytics dashboard',
        'Integration capabilities',
        'Compliance tools'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'Personalized content',
        'ROI tracking'
      ],
      category: 'Marketing',
      popular: false,
      icon: Mail,
      link: 'https://email.ziontechgroup.com'
    },
    {
      id: 'zion-inventory-manager',
      name: 'Zion Inventory Manager',
      description: 'Smart inventory management system with AI-powered demand forecasting and automated reordering.',
      price: '$89/month',
      marketPrice: '$200-600/month',
=======
        'Peace of mind'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/cloud-vault'
    },
    {
      icon: Server,
      title: 'Zion Infrastructure Manager',
      description: 'Cloud infrastructure monitoring and management platform with automated scaling and cost optimization.',
      category: 'cloud',
      features: [
        'Infrastructure monitoring',
        'Automated scaling',
        'Cost optimization',
        'Performance analytics',
        'Alert management',
        'Resource planning',
        'Security monitoring',
        'Compliance tracking'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: [
        'Optimized performance',
        'Reduced costs',
        'Automated management',
        'Better reliability'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/infrastructure-manager'
    },

    // Productivity & Collaboration
    {
      icon: Users,
      title: 'Zion Team Hub',
      description: 'Comprehensive team collaboration platform with project management, communication, and productivity tools.',
      category: 'productivity',
      features: [
        'Project management',
        'Team communication',
        'File sharing',
        'Task tracking',
        'Time tracking',
        'Video conferencing',
        'Document collaboration',
        'Workflow automation'
      ],
      price: 'Starting at $59/month',
      marketPrice: '$120-400/month',
      benefits: [
        'Improved collaboration',
        'Better project visibility',
        'Increased productivity',
        'Centralized communication'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/team-hub'
    },
    {
      icon: Calendar,
      title: 'Zion Schedule Master',
      description: 'Advanced scheduling and appointment management system with AI-powered optimization and automation.',
      category: 'productivity',
      features: [
        'AI-powered scheduling',
        'Appointment management',
        'Calendar integration',
        'Automated reminders',
        'Resource booking',
        'Conflict resolution',
        'Time zone handling',
        'Mobile app'
      ],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: [
        'Optimized scheduling',
        'Reduced conflicts',
        'Automated reminders',
        'Better time management'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/schedule-master'
    },

    // Content & Design
    {
      icon: Palette,
      title: 'Zion Design Studio',
      description: 'AI-powered design platform with automated logo creation, branding, and marketing material generation.',
      category: 'design',
      features: [
        'AI logo generation',
        'Brand kit creation',
        'Marketing material templates',
        'Social media graphics',
        'Print design tools',
        'Collaboration features',
        'Asset library',
        'Export options'
      ],
      price: 'Starting at $69/month',
      marketPrice: '$150-500/month',
      benefits: [
        'Professional designs',
        'Time savings',
        'Consistent branding',
        'Cost-effective'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/design-studio'
    },
    {
      icon: Camera,
      title: 'Zion Media Manager',
      description: 'Comprehensive media management platform with AI-powered editing, organization, and distribution tools.',
      category: 'design',
      features: [
        'AI-powered editing',
        'Media organization',
        'Batch processing',
        'Cloud storage',
        'Sharing tools',
        'Version control',
        'Metadata management',
        'Integration APIs'
      ],
      price: 'Starting at $49/month',
      marketPrice: '$100-350/month',
      benefits: [
        'Streamlined workflow',
        'AI-powered editing',
        'Better organization',
        'Time savings'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/media-manager'
    },

    // E-commerce & Sales
    {
      icon: ShoppingCart,
      title: 'Zion E-commerce Suite',
      description: 'Complete e-commerce platform with AI-powered recommendations, inventory management, and analytics.',
      category: 'ecommerce',
      features: [
        'AI product recommendations',
        'Inventory management',
        'Order processing',
        'Payment integration',
        'Shipping management',
        'Analytics dashboard',
        'Mobile optimization',
        'SEO tools'
      ],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: [
        'Increased sales',
        'Better customer experience',
        'Automated processes',
        'Data-driven insights'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ecommerce-suite'
    },
    {
      icon: Package,
      title: 'Zion Inventory Pro',
      description: 'Advanced inventory management system with AI-powered demand forecasting and automated reordering.',
      category: 'ecommerce',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost tracking',
<<<<<<< HEAD
        'Reporting dashboard',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Optimize inventory levels',
        'Cost reduction',
        'Automated processes',
        'Better forecasting'
      ],
      category: 'Inventory',
      popular: false,
      icon: Package,
      link: 'https://inventory.ziontechgroup.com'
=======
        'Reporting tools',
        'Integration APIs'
      ],
      price: 'Starting at $89/month',
      marketPrice: '$180-600/month',
      benefits: [
        'Reduced stockouts',
        'Optimized inventory',
        'Cost savings',
        'Better planning'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/inventory-pro'
    },

    // HR & Operations
    {
      icon: Briefcase,
      title: 'Zion HR Manager',
      description: 'Comprehensive human resources management system with employee onboarding, performance tracking, and payroll.',
      category: 'hr',
      features: [
        'Employee onboarding',
        'Performance tracking',
        'Payroll management',
        'Time and attendance',
        'Benefits administration',
        'Document management',
        'Compliance tracking',
        'Reporting tools'
      ],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: [
        'Streamlined HR processes',
        'Better employee experience',
        'Compliance assurance',
        'Time savings'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/hr-manager'
    },
    {
      icon: GraduationCap,
      title: 'Zion Learning Hub',
      description: 'Employee training and development platform with AI-powered course recommendations and progress tracking.',
      category: 'hr',
      features: [
        'Course management',
        'AI recommendations',
        'Progress tracking',
        'Certification management',
        'Video conferencing',
        'Assessment tools',
        'Reporting dashboard',
        'Mobile learning'
      ],
      price: 'Starting at $79/month',
      marketPrice: '$160-500/month',
      benefits: [
        'Improved skills',
        'Better engagement',
        'Compliance training',
        'Career development'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/learning-hub'
    },

    // Industry-Specific Solutions
    {
      icon: Heart,
      title: 'Zion Health Connect',
      description: 'Healthcare management platform with patient records, appointment scheduling, and telemedicine capabilities.',
      category: 'healthcare',
      features: [
        'Patient records management',
        'Appointment scheduling',
        'Telemedicine platform',
        'Prescription management',
        'Insurance verification',
        'Billing integration',
        'HIPAA compliance',
        'Mobile app'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: [
        'Improved patient care',
        'Streamlined operations',
        'HIPAA compliance',
        'Better communication'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/health-connect'
    },
    {
      icon: BookOpen,
      title: 'Zion Education Platform',
      description: 'Comprehensive learning management system for educational institutions with AI-powered personalized learning.',
      category: 'education',
      features: [
        'Course management',
        'Student tracking',
        'AI personalized learning',
        'Assessment tools',
        'Parent communication',
        'Grade management',
        'Resource library',
        'Mobile access'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: [
        'Improved learning outcomes',
        'Better engagement',
        'Streamlined administration',
        'Parent involvement'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/education-platform'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: services.filter(s => s.category === 'Storage').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Project Management', name: 'Project Management', count: services.filter(s => s.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: services.filter(s => s.category === 'CRM').length },
    { id: 'Inventory', name: 'Inventory', count: services.filter(s => s.category === 'Inventory').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
=======
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'customer-service').length },
    { id: 'financial', name: 'Financial', count: microSaasServices.filter(s => s.category === 'financial').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'cloud', name: 'Cloud', count: microSaasServices.filter(s => s.category === 'cloud').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'design', name: 'Design', count: microSaasServices.filter(s => s.category === 'design').length },
    { id: 'ecommerce', name: 'E-commerce', count: microSaasServices.filter(s => s.category === 'ecommerce').length },
    { id: 'hr', name: 'HR', count: microSaasServices.filter(s => s.category === 'hr').length },
    { id: 'healthcare', name: 'Healthcare', count: microSaasServices.filter(s => s.category === 'healthcare').length },
    { id: 'education', name: 'Education', count: microSaasServices.filter(s => s.category === 'education').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
  });

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Solutions - Zion Tech Group | Business Software Tools</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including analytics, CRM, project management, and automation tools for small to medium businesses." />
        <meta name="keywords" content="micro saas, business software, analytics, CRM, project management, automation, small business tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS tools to grow your business" />
=======
        <title>Micro SAAS Solutions - Zion Tech Group | Business Software</title>
        <meta name="description" content="Comprehensive micro SAAS solutions for small and medium businesses including analytics, customer service, financial management, and productivity tools." />
        <meta name="keywords" content="micro saas, business software, analytics, customer service, financial management, productivity tools, cloud solutions" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive micro SAAS solutions" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
<<<<<<< HEAD
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful Business Tools for Modern Companies
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SaaS solutions designed to streamline operations, 
              boost productivity, and drive growth for small to medium businesses. Each tool is built with 
              cutting-edge technology and user-friendly interfaces.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
=======
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful Business Software for Modern Companies
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SAAS solutions designed specifically for small and medium businesses. 
              From analytics and customer service to financial management and productivity tools, we provide everything you need 
              to streamline operations and drive growth.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
=======
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
<<<<<<< HEAD
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
=======
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
<<<<<<< HEAD
                  <p className="text-gray-300 mb-4">{service.description}</p>
=======
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
<<<<<<< HEAD
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
=======
                    <span className="text-gray-400 text-sm capitalize">{service.category.replace('-', ' ')}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

<<<<<<< HEAD
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
=======
                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
<<<<<<< HEAD
                      Try Demo
=======
                      Learn More
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
<<<<<<< HEAD
                      Get Started
=======
                      Get Quote
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
<<<<<<< HEAD
                Choose from our comprehensive suite of micro SaaS solutions or get a custom solution 
                built specifically for your business needs. Contact our experts for a free consultation.
=======
                Choose from our comprehensive suite of micro SAAS solutions or let us create a custom solution 
                tailored to your specific business needs. Get started with a free consultation today.
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
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
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
