'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
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
  Brain,
  Globe,
  Smartphone,
  Mail,
  Calendar,
  FileText,
  Target,
  DollarSign,
  Settings,
  Database,
  Lock,
  Monitor,
  Headphones,
  Code,
  Palette,
  PieChart,
  Clock,
  Award,
  Download,
  Upload,
  Eye,
  Heart,
  ShoppingCart,
  CreditCard,
  MapPin,
  Phone,
  Video,
  Image,
  Music,
  BookOpen,
  Camera,
  Mic,
  Wifi,
  Battery,
  Cpu,
  HardDrive,
  Router,
  Server,
  Terminal,
  GitBranch,
  Layers,
  Workflow,
  Bot,
  Sparkles,
  Rocket,
  Lightbulb,
  Trophy,
  Gift,
  Tag,
  Bell,
  Share2,
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
  Wifi as WifiIcon,
  WifiOff,
  Signal,
  SignalZero,
  SignalOne,
  SignalTwo,
  SignalThree,
  Battery as BatteryIcon,
  BatteryLow,
  BatteryMedium,
  BatteryFull,
  BatteryCharging,
  Plug,
  PlugZap,
  Zap as ZapIcon,
  Flashlight,
  FlashlightOff,
  Camera as CameraIcon,
  CameraOff,
  Video as VideoIcon,
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

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice?: string;
  benefits: string[];
  setupTime: string;
  freeTrial: boolean;
  apiAccess: boolean;
  whiteLabel: boolean;
  integrations: string[];
}

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const products: MicroSaasProduct[] = [
    // Analytics & Business Intelligence
    {
      id: '1',
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive forecasting',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$150-500/month',
      benefits: ['Increase data-driven decisions by 300%', 'Save 20 hours/week on reporting', 'Real-time insights', 'Custom dashboards'],
      setupTime: '5 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify', 'Zapier']
    },
    {
      id: '2',
      icon: PieChart,
      title: 'Zion Financial Analytics',
      description: 'Comprehensive financial management and analytics platform with AI-powered expense categorization and forecasting',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Real-time financial reporting and forecasting',
        'Automated invoice processing and approval workflows',
        'Multi-currency support and exchange rate tracking',
        'Tax compliance and preparation assistance',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs'
      ],
      price: '$179/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$300-800/month',
      benefits: ['Reduce financial errors by 95%', 'Save 15 hours/week on bookkeeping', 'Real-time financial insights', 'Automated compliance'],
      setupTime: '10 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Bank APIs', 'Tax software']
    },

    // Communication & Customer Support
    {
      id: '3',
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication',
      marketPrice: '$250-1000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Multi-language support'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'WhatsApp', 'Facebook Messenger']
    },
    {
      id: '4',
      icon: Video,
      title: 'Zion Video Conferencing',
      description: 'Enterprise-grade video conferencing platform with AI-powered features, recording, and collaboration tools',
      features: [
        'HD video conferencing with up to 1000 participants',
        'AI-powered meeting transcription and summaries',
        'Screen sharing and whiteboard collaboration',
        'Meeting recording and cloud storage',
        'Virtual backgrounds and AI noise cancellation',
        'Breakout rooms and polling features',
        'Calendar integration and scheduling',
        'Mobile apps for iOS and Android'
      ],
      price: '$99/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Communication',
      marketPrice: '$200-500/month',
      benefits: ['Professional meetings', 'AI-powered features', 'Easy collaboration', 'Mobile access'],
      setupTime: '5 minutes',
      freeTrial: true,
      apiAccess: false,
      whiteLabel: true,
      integrations: ['Google Calendar', 'Outlook', 'Slack', 'Teams', 'Zoom', 'Webex']
    },

    // Security & Compliance
    {
      id: '5',
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, and compliance management',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security',
      marketPrice: '$500-2000/month',
      benefits: ['Proactive security', 'Reduced false positives', 'Faster incident response', 'Compliance assurance'],
      setupTime: '30 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['SIEM systems', 'Firewalls', 'Antivirus', 'EDR solutions', 'Cloud platforms']
    },
    {
      id: '6',
      icon: Lock,
      title: 'Zion Identity Management',
      description: 'Comprehensive identity and access management solution with SSO, MFA, and privileged access management',
      features: [
        'Single Sign-On (SSO) for 1000+ applications',
        'Multi-factor authentication (MFA) options',
        'Privileged access management (PAM)',
        'Identity governance and compliance',
        'Password management and policy enforcement',
        'Risk-based authentication',
        'Audit trails and compliance reporting',
        'API access management'
      ],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security',
      marketPrice: '$400-1500/month',
      benefits: ['Enhanced security', 'Simplified access', 'Compliance ready', 'Centralized management'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Active Directory', 'LDAP', 'SAML', 'OAuth', 'Cloud providers']
    },

    // Cloud & Storage
    {
      id: '7',
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization and global CDN',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage',
      marketPrice: '$150-400/month',
      benefits: ['Secure backup', 'Fast recovery', 'Cost optimization', 'Global access'],
      setupTime: '10 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['AWS', 'Azure', 'Google Cloud', 'OneDrive', 'Dropbox', 'Box']
    },
    {
      id: '8',
      icon: Database,
      title: 'Zion Database Manager',
      description: 'Advanced database management platform with monitoring, optimization, and automated maintenance',
      features: [
        'Real-time database performance monitoring',
        'Automated query optimization and indexing',
        'Backup and recovery automation',
        'Database security scanning and hardening',
        'Multi-database support (MySQL, PostgreSQL, MongoDB)',
        'Query performance analytics and recommendations',
        'Automated scaling and resource management',
        'Compliance and audit reporting'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Storage',
      marketPrice: '$250-800/month',
      benefits: ['Better performance', 'Automated maintenance', 'Enhanced security', 'Cost optimization'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cloud databases']
    },

    // AI & Automation
    {
      id: '9',
      icon: Bot,
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with AI-powered decision making and custom workflows',
      features: [
        'Visual workflow builder with 200+ integrations',
        'AI-powered decision making and routing',
        'Document processing and data extraction',
        'Email and calendar automation',
        'Custom AI model training and deployment',
        'Advanced analytics and reporting',
        'Multi-tenant architecture',
        'API access and webhook support'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI',
      marketPrice: '$400-1500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Zapier', 'Microsoft Power Automate', 'Salesforce', 'HubSpot', 'Slack', 'Teams']
    },
    {
      id: '10',
      icon: Brain,
      title: 'Zion Content AI',
      description: 'AI-powered content creation platform with writing, design, and marketing automation',
      features: [
        'AI-powered content generation for blogs, social media, emails',
        'Image and video creation with AI',
        'SEO optimization and keyword research',
        'Brand voice customization and consistency',
        'Content calendar and scheduling',
        'Plagiarism detection and originality scoring',
        'Multi-language content creation',
        'Performance analytics and optimization'
      ],
      price: '$149/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'AI',
      marketPrice: '$300-1000/month',
      benefits: ['Faster content creation', 'Consistent branding', 'SEO optimization', 'Multi-platform publishing'],
      setupTime: '5 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['WordPress', 'Shopify', 'Mailchimp', 'Hootsuite', 'Buffer', 'Social platforms']
    },

    // Marketing & Sales
    {
      id: '11',
      icon: Target,
      title: 'Zion Lead Generation',
      description: 'AI-powered lead generation and qualification platform with automated outreach and CRM integration',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated email and LinkedIn outreach',
        'Lead database with 50M+ contacts',
        'Intent data and behavioral tracking',
        'A/B testing for outreach campaigns',
        'CRM integration and lead routing',
        'Compliance with GDPR and CAN-SPAM',
        'Advanced analytics and ROI tracking'
      ],
      price: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Sales',
      marketPrice: '$300-1200/month',
      benefits: ['More qualified leads', 'Automated outreach', 'Better conversion rates', 'ROI tracking'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'LinkedIn', 'Email platforms', 'CRM systems']
    },
    {
      id: '12',
      icon: Mail,
      title: 'Zion Email Marketing',
      description: 'Advanced email marketing platform with AI-powered personalization and automation',
      features: [
        'AI-powered email personalization and optimization',
        'Advanced segmentation and targeting',
        'A/B testing with statistical significance',
        'Behavioral triggers and drip campaigns',
        'Landing page builder with conversion tracking',
        'Advanced analytics and ROI reporting',
        'GDPR and CAN-SPAM compliance tools',
        'Integration with 50+ platforms'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$200-800/month',
      benefits: ['Higher open rates', 'Better personalization', 'Automated campaigns', 'Compliance ready'],
      setupTime: '10 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Zapier', 'Webhooks']
    },

    // E-commerce & Retail
    {
      id: '13',
      icon: ShoppingCart,
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization, optimization, and analytics',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways'
      ],
      price: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$500-2000/month',
      benefits: ['Higher conversion rates', 'Better personalization', 'Automated operations', 'Multi-channel selling'],
      setupTime: '30 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Stripe', 'PayPal', 'Shopify', 'WooCommerce', 'Amazon', 'eBay']
    },
    {
      id: '14',
      icon: CreditCard,
      title: 'Zion Payment Gateway',
      description: 'Advanced payment processing platform with fraud detection, analytics, and global support',
      features: [
        'Multi-currency payment processing',
        'AI-powered fraud detection and prevention',
        'Recurring billing and subscription management',
        'Mobile payment optimization',
        'Advanced analytics and reporting',
        'PCI DSS compliance and security',
        'Global payment method support',
        'White-label payment solutions'
      ],
      price: '$199/month',
      users: 'Unlimited',
      popular: false,
      category: 'E-commerce',
      marketPrice: '$400-1500/month',
      benefits: ['Lower transaction fees', 'Better fraud protection', 'Global reach', 'Easy integration'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Stripe', 'PayPal', 'Square', 'Authorize.Net', 'Braintree', 'Adyen']
    },

    // HR & People Management
    {
      id: '15',
      icon: Users,
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting'
      ],
      price: '$159/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR',
      marketPrice: '$300-1000/month',
      benefits: ['Streamlined HR processes', 'Better candidate matching', 'Automated workflows', 'Compliance ready'],
      setupTime: '25 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['ADP', 'Workday', 'BambooHR', 'Slack', 'Teams', 'Calendar systems']
    },
    {
      id: '16',
      icon: Award,
      title: 'Zion Performance Management',
      description: 'AI-powered performance management system with goal tracking, feedback, and development planning',
      features: [
        'Goal setting and tracking with AI recommendations',
        '360-degree feedback and peer reviews',
        'Performance analytics and insights',
        'Career development planning',
        'Skill gap analysis and recommendations',
        'Recognition and rewards system',
        'Integration with learning platforms',
        'Customizable performance frameworks'
      ],
      price: '$89/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'HR',
      marketPrice: '$200-600/month',
      benefits: ['Better performance tracking', 'Objective feedback', 'Career development', 'Employee engagement'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['HRIS systems', 'Learning platforms', 'Slack', 'Teams', 'Calendar systems']
    },

    // Development & DevOps
    {
      id: '17',
      icon: Code,
      title: 'Zion Code Assistant',
      description: 'AI-powered coding assistant with code generation, review, and optimization for multiple languages',
      features: [
        'AI-powered code generation and completion',
        'Code review and quality analysis',
        'Bug detection and fixing suggestions',
        'Documentation generation',
        'Multi-language support (Python, JavaScript, Java, etc.)',
        'Integration with popular IDEs',
        'Code optimization recommendations',
        'Security vulnerability scanning'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Development',
      marketPrice: '$150-500/month',
      benefits: ['Faster development', 'Better code quality', 'Reduced bugs', 'Automated documentation'],
      setupTime: '5 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['VS Code', 'IntelliJ', 'GitHub', 'GitLab', 'Bitbucket', 'CI/CD platforms']
    },
    {
      id: '18',
      icon: GitBranch,
      title: 'Zion DevOps Platform',
      description: 'Comprehensive DevOps platform with CI/CD, monitoring, and infrastructure management',
      features: [
        'Automated CI/CD pipeline creation',
        'Infrastructure as Code (IaC) management',
        'Container orchestration and management',
        'Application performance monitoring',
        'Log aggregation and analysis',
        'Security scanning and compliance',
        'Multi-cloud deployment support',
        'Team collaboration and workflow management'
      ],
      price: '$199/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Development',
      marketPrice: '$400-1200/month',
      benefits: ['Faster deployments', 'Better reliability', 'Automated testing', 'Cost optimization'],
      setupTime: '30 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['GitHub', 'GitLab', 'Jenkins', 'Docker', 'Kubernetes', 'Cloud platforms']
    },

    // SEO & Digital Marketing
    {
      id: '19',
      icon: Search,
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console'
      ],
      price: '$119/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'SEO',
      marketPrice: '$250-800/month',
      benefits: ['Better search rankings', 'Automated optimization', 'Competitor insights', 'ROI tracking'],
      setupTime: '10 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify', 'Squarespace']
    },
    {
      id: '20',
      icon: Globe,
      title: 'Zion Website Builder',
      description: 'AI-powered website builder with drag-and-drop interface, SEO optimization, and e-commerce features',
      features: [
        'AI-powered website design and layout',
        'Drag-and-drop page builder',
        'Mobile-responsive templates',
        'SEO optimization and meta tags',
        'E-commerce integration and payment processing',
        'Blog and content management',
        'Analytics and performance tracking',
        'White-label solution available'
      ],
      price: '$149/month',
      users: 'Up to 10 websites',
      popular: true,
      category: 'Web Development',
      marketPrice: '$300-1000/month',
      benefits: ['No coding required', 'Professional designs', 'SEO optimized', 'Mobile responsive'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Stripe', 'PayPal', 'Google Analytics', 'Mailchimp', 'Zapier', 'Social platforms']
    },

    // Project Management & Productivity
    {
      id: '21',
      icon: Calendar,
      title: 'Zion Project Manager',
      description: 'AI-powered project management with intelligent task allocation, resource planning, and progress tracking',
      features: [
        'AI-powered project planning and resource allocation',
        'Gantt charts and timeline visualization',
        'Team collaboration and communication tools',
        'Time tracking and productivity analytics',
        'Risk assessment and mitigation planning',
        'Custom workflows and automation',
        'Integration with 100+ tools',
        'Mobile app for on-the-go management'
      ],
      price: '$119/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Productivity',
      marketPrice: '$250-800/month',
      benefits: ['Better project visibility', 'Improved collaboration', 'Resource optimization', 'Risk management'],
      setupTime: '10 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Slack', 'Teams', 'Google Workspace', 'Microsoft 365', 'Jira', 'Asana']
    },
    {
      id: '22',
      icon: Clock,
      title: 'Zion Time Tracker',
      description: 'Advanced time tracking and productivity analytics with AI-powered insights and automated reporting',
      features: [
        'Automatic time tracking with AI detection',
        'Manual time entry and editing',
        'Project and task-based tracking',
        'Productivity analytics and insights',
        'Automated invoicing and billing',
        'Team performance dashboards',
        'Integration with project management tools',
        'Mobile app with offline support'
      ],
      price: '$69/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$150-400/month',
      benefits: ['Accurate time tracking', 'Better productivity insights', 'Automated billing', 'Team visibility'],
      setupTime: '5 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Asana', 'Trello', 'Jira', 'Monday.com', 'QuickBooks', 'Xero']
    },

    // Customer Relationship Management
    {
      id: '23',
      icon: UserCheck,
      title: 'Zion CRM Pro',
      description: 'AI-powered customer relationship management with sales automation, lead scoring, and analytics',
      features: [
        'AI-powered lead scoring and qualification',
        'Sales pipeline management and forecasting',
        'Contact and company management',
        'Email and communication tracking',
        'Task and activity management',
        'Advanced reporting and analytics',
        'Integration with marketing tools',
        'Mobile app for sales teams'
      ],
      price: '$179/month',
      users: 'Up to 40 users',
      popular: true,
      category: 'CRM',
      marketPrice: '$300-1200/month',
      benefits: ['Better lead management', 'Sales automation', 'Improved forecasting', 'Team collaboration'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: true,
      integrations: ['Salesforce', 'HubSpot', 'Mailchimp', 'Zapier', 'Google Workspace', 'Microsoft 365']
    },
    {
      id: '24',
      icon: Headphones,
      title: 'Zion Customer Success',
      description: 'Customer success management platform with health scoring, automation, and retention analytics',
      features: [
        'Customer health scoring and monitoring',
        'Automated onboarding and success workflows',
        'Churn prediction and prevention',
        'Customer feedback and survey management',
        'Success metrics and analytics',
        'Integration with support and sales tools',
        'Automated communication and follow-ups',
        'Customer journey mapping and optimization'
      ],
      price: '$149/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'CRM',
      marketPrice: '$250-800/month',
      benefits: ['Reduced churn', 'Better customer satisfaction', 'Automated workflows', 'Data-driven insights'],
      setupTime: '15 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Slack', 'Teams']
    },

    // Data & Analytics
    {
      id: '25',
      icon: Database,
      title: 'Zion Data Warehouse',
      description: 'Cloud-based data warehouse with ETL/ELT processing, analytics, and business intelligence',
      features: [
        'Automated data ingestion from 100+ sources',
        'Data transformation and cleaning',
        'Real-time and batch processing',
        'Advanced analytics and reporting',
        'Data visualization and dashboards',
        'Machine learning model deployment',
        'Data governance and security',
        'Scalable cloud infrastructure'
      ],
      price: '$299/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Analytics',
      marketPrice: '$500-2000/month',
      benefits: ['Centralized data', 'Better insights', 'Automated processing', 'Scalable infrastructure'],
      setupTime: '45 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify', 'Database systems']
    },
    {
      id: '26',
      icon: Monitor,
      title: 'Zion Monitoring Suite',
      description: 'Comprehensive application and infrastructure monitoring with alerting, logging, and performance analytics',
      features: [
        'Application performance monitoring (APM)',
        'Infrastructure monitoring and alerting',
        'Log aggregation and analysis',
        'Error tracking and debugging',
        'Uptime monitoring and SLA tracking',
        'Custom dashboards and reporting',
        'Integration with incident management',
        'AI-powered anomaly detection'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring',
      marketPrice: '$250-800/month',
      benefits: ['Better reliability', 'Faster issue resolution', 'Proactive monitoring', 'Cost optimization'],
      setupTime: '20 minutes',
      freeTrial: true,
      apiAccess: true,
      whiteLabel: false,
      integrations: ['PagerDuty', 'Slack', 'Teams', 'Jira', 'ServiceNow', 'Cloud platforms']
    }
  ];

  const categories = [
    'All', 'Analytics', 'Communication', 'Security', 'Storage', 'AI', 'Sales', 'Marketing', 
    'E-commerce', 'HR', 'Development', 'SEO', 'Web Development', 'Productivity', 'CRM', 'Monitoring'
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 26+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 26+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs with free trials and competitive pricing." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, CRM, e-commerce, HR management" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 26+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Quick setup, affordable pricing, powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
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
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none min-w-[200px]"
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
                    className="pl-4 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none min-w-[150px]"
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

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                {selectedCategory === 'All' ? 'All Micro SaaS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                      {product.marketPrice && (
                        <span className="text-gray-400 text-sm line-through">{product.marketPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {product.users}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {product.setupTime} setup
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.freeTrial && (
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Free Trial</span>
                      )}
                      {product.apiAccess && (
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">API Access</span>
                      )}
                      {product.whiteLabel && (
                        <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">White Label</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Integrations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.integrations.slice(0, 4).map((integration, index) => (
                        <span key={index} className="bg-white/5 text-gray-400 px-2 py-1 rounded text-xs">
                          {integration}
                        </span>
                      ))}
                      {product.integrations.length > 4 && (
                        <span className="text-gray-400 text-xs">+{product.integrations.length - 4} more</span>
                      )}
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

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Get started in minutes with our intuitive setup process. No complex configuration required.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Affordable Pricing</h3>
                <p className="text-gray-300">Competitive pricing with free trials. Scale as you grow with flexible plans.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with encryption, compliance, and 24/7 monitoring.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Expert support whenever you need it. Chat, email, or phone assistance.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">API Access</h3>
                <p className="text-gray-300">Powerful APIs for custom integrations and white-label solutions.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Regular Updates</h3>
                <p className="text-gray-300">Continuous improvements and new features based on user feedback.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Plans
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

export default MicroSaasPage;