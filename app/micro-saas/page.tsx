'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Database, Smartphone, Globe, Lock, FileText, Mail, Calendar, Target, Cpu, Settings, Monitor, Wifi, Smartphone as Phone, CreditCard, PieChart, Search, Filter, Download, Upload, Eye, AlertTriangle, CheckSquare, Clock, DollarSign, Award, Rocket, Sparkles, Mic, Heart, Box, Link as LinkIcon, Server, Package, Workflow, MessageCircle, TrendingUp as TrendingUpIcon, BarChart, Headphones, ShoppingCart, Video, Camera, Music, Image, Layers, Palette, Brush, Scissors, Wand2, Zap as ZapIcon, Globe as GlobeIcon, Wifi as WifiIcon, Shield as ShieldIcon, Database as DatabaseIcon, BarChart as BarChartIcon, Users as UsersIcon, Settings as SettingsIcon, FileText as FileTextIcon, Mail as MailIcon, Calendar as CalendarIcon, Target as TargetIcon, Cpu as CpuIcon, Monitor as MonitorIcon, Wifi as WifiIcon2, Smartphone as SmartphoneIcon, CreditCard as CreditCardIcon, PieChart as PieChartIcon, Search as SearchIcon, Filter as FilterIcon, Download as DownloadIcon, Upload as UploadIcon, Eye as EyeIcon, AlertTriangle as AlertTriangleIcon, CheckSquare as CheckSquareIcon, Clock as ClockIcon, DollarSign as DollarSignIcon, Award as AwardIcon, Rocket as RocketIcon, Sparkles as SparklesIcon } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice: string;
  savings?: string;
}

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      id: '1',
      icon: BarChart3,
      title: 'ZionAnalytics Pro',
      description: 'Advanced business intelligence and real-time analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Multi-source data integration (APIs, databases, files)',
        'Automated report generation and email scheduling',
        'Advanced filtering and segmentation tools',
        'Mobile app for iOS and Android',
        'White-label solution available',
        '24/7 technical support',
        'SOC 2 Type II compliant'
      ],
      price: '$49/month',
      originalPrice: '$99/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/analytics-pro',
      marketPrice: '$150-300/month',
      savings: '67% off market rate'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'ZionChat AI',
      description: 'Enterprise-grade AI customer support platform with multilingual capabilities',
      features: [
        'Advanced AI chatbot with 95% accuracy rate',
        'Live chat integration with human handoff',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'Ticket management and escalation system',
        'Knowledge base integration',
        'Voice and video chat support',
        'CRM integration (Salesforce, HubSpot, etc.)',
        'Custom AI model training',
        'Advanced analytics and reporting'
      ],
      price: '$79/month',
      originalPrice: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Communication',
      link: 'https://ziontechgroup.com/chat-ai',
      marketPrice: '$200-500/month',
      savings: '60% off market rate'
    },
    {
      id: '3',
      icon: Shield,
      title: 'ZionSecure Monitor',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      features: [
        'Real-time threat detection and response',
        'Automated vulnerability scanning',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Incident response automation',
        'Security dashboard with 360° view',
        'Penetration testing tools',
        'Dark web monitoring',
        'Employee security training modules',
        'Integration with SIEM systems',
        '24/7 security operations center'
      ],
      price: '$129/month',
      originalPrice: '$199/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      link: 'https://ziontechgroup.com/secure-monitor',
      marketPrice: '$300-800/month',
      savings: '57% off market rate'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'ZionCloud Backup',
      description: 'Enterprise cloud backup and disaster recovery solution with global CDN',
      features: [
        'Automated daily backups with versioning',
        'Cross-platform sync (Windows, Mac, Linux)',
        'Global CDN with 99.99% uptime',
        'End-to-end encryption (AES-256)',
        'Disaster recovery in under 4 hours',
        'Compliance with GDPR and HIPAA',
        'Unlimited storage capacity',
        'Mobile app for iOS and Android',
        'API for custom integrations',
        '24/7 technical support'
      ],
      price: '$39/month',
      originalPrice: '$79/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Storage',
      link: 'https://ziontechgroup.com/cloud-backup',
      marketPrice: '$100-200/month',
      savings: '61% off market rate'
    },
    {
      id: '5',
      icon: Monitor,
      title: 'ZionPerformance Pro',
      description: 'Advanced application performance monitoring and optimization platform',
      features: [
        'Real-time performance monitoring',
        'Error tracking and alerting',
        'Uptime monitoring (99.9% SLA)',
        'Performance insights and recommendations',
        'Custom alert rules and notifications',
        'Integration with 100+ tools',
        'Mobile performance monitoring',
        'Database performance analysis',
        'Load testing and capacity planning',
        'Detailed performance reports'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring',
      link: 'https://ziontechgroup.com/performance-pro',
      marketPrice: '$200-400/month',
      savings: '55% off market rate'
    },
    {
      id: '6',
      icon: Brain,
      title: 'ZionAI Assistant',
      description: 'Intelligent business automation and AI-powered workflow optimization',
      features: [
        'Workflow automation with visual builder',
        'AI-powered insights and recommendations',
        'Smart task scheduling and prioritization',
        'Integration with 500+ business tools',
        'Custom AI model training and deployment',
        'Natural language processing',
        'Document analysis and extraction',
        'Predictive analytics and forecasting',
        'Voice commands and control',
        'Custom API development'
      ],
      price: '$149/month',
      originalPrice: '$249/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      link: 'https://ziontechgroup.com/ai-assistant',
      marketPrice: '$400-1000/month',
      savings: '63% off market rate'
    },
    {
      id: '7',
      icon: Code,
      title: 'ZionCode Generator',
      description: 'AI-powered code generation and development acceleration platform',
      features: [
        'AI code generation for 20+ programming languages',
        'Code review and optimization suggestions',
        'Automated testing and debugging',
        'Documentation generation',
        'Code refactoring and modernization',
        'Security vulnerability detection',
        'Performance optimization recommendations',
        'Integration with popular IDEs',
        'Team collaboration features',
        'Custom code templates and snippets'
      ],
      price: '$99/month',
      originalPrice: '$179/month',
      users: 'Up to 20 developers',
      popular: false,
      category: 'Development',
      link: 'https://ziontechgroup.com/code-generator',
      marketPrice: '$300-600/month',
      savings: '67% off market rate'
    },
    {
      id: '8',
      icon: Database,
      title: 'ZionData Manager',
      description: 'Advanced data management and ETL platform with AI-powered insights',
      features: [
        'Automated data extraction and transformation',
        'Data quality monitoring and cleansing',
        'Real-time data processing and streaming',
        'Data visualization and reporting',
        'Machine learning model deployment',
        'Data governance and compliance tools',
        'API for data access and integration',
        'Cloud and on-premise deployment',
        'Advanced security and encryption',
        'Scalable to petabyte scale'
      ],
      price: '$199/month',
      originalPrice: '$349/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Data',
      link: 'https://ziontechgroup.com/data-manager',
      marketPrice: '$500-1500/month',
      savings: '60% off market rate'
    },
    {
      id: '9',
      icon: Smartphone,
      title: 'ZionMobile Builder',
      description: 'No-code mobile app development platform with AI assistance',
      features: [
        'Drag-and-drop app builder',
        'AI-powered design suggestions',
        'Native iOS and Android apps',
        'Real-time preview and testing',
        'App store deployment assistance',
        'Push notifications and analytics',
        'Backend integration and APIs',
        'User authentication and security',
        'Custom branding and theming',
        'App maintenance and updates'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 15 developers',
      popular: false,
      category: 'Mobile',
      link: 'https://ziontechgroup.com/mobile-builder',
      marketPrice: '$200-500/month',
      savings: '61% off market rate'
    },
    {
      id: '10',
      icon: Globe,
      title: 'ZionWeb Optimizer',
      description: 'Comprehensive website optimization and SEO platform',
      features: [
        'Automated website speed optimization',
        'SEO analysis and recommendations',
        'Core Web Vitals monitoring',
        'Content optimization suggestions',
        'Image compression and optimization',
        'CDN integration and management',
        'Security scanning and hardening',
        'Uptime monitoring and alerting',
        'Performance analytics and reporting',
        'A/B testing and conversion optimization'
      ],
      price: '$59/month',
      originalPrice: '$99/month',
      users: 'Up to 25 websites',
      popular: false,
      category: 'Web',
      link: 'https://ziontechgroup.com/web-optimizer',
      marketPrice: '$150-300/month',
      savings: '61% off market rate'
    },
    {
      id: '11',
      icon: CreditCard,
      title: 'ZionPay Gateway',
      description: 'Advanced payment processing and financial management platform',
      features: [
        'Multi-currency payment processing',
        'Cryptocurrency payment support',
        'Fraud detection and prevention',
        'PCI DSS compliance',
        'Recurring billing and subscriptions',
        'Financial reporting and analytics',
        'Tax calculation and reporting',
        'Integration with 100+ payment methods',
        'White-label payment solutions',
        '24/7 fraud monitoring'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Unlimited transactions',
      popular: false,
      category: 'Finance',
      link: 'https://ziontechgroup.com/pay-gateway',
      marketPrice: '$200-500/month',
      savings: '55% off market rate'
    },
    {
      id: '12',
      icon: PieChart,
      title: 'ZionBI Dashboard',
      description: 'Business intelligence and data visualization platform',
      features: [
        'Interactive dashboards and reports',
        'Real-time data visualization',
        'Custom KPI tracking and alerts',
        'Data source integration (50+ connectors)',
        'Advanced analytics and forecasting',
        'Collaborative reporting and sharing',
        'Mobile-responsive dashboards',
        'White-label and custom branding',
        'API for custom integrations',
        'Advanced security and access control'
      ],
      price: '$119/month',
      originalPrice: '$199/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Business Intelligence',
      link: 'https://ziontechgroup.com/bi-dashboard',
      marketPrice: '$300-800/month',
      savings: '60% off market rate'
    },
    // NEW MICRO SAAS SERVICES
    {
      id: '13',
      icon: Mic,
      title: 'ZionVoice AI',
      description: 'Advanced voice recognition and speech synthesis platform for business applications',
      features: [
        'Real-time speech-to-text conversion',
        'Natural-sounding text-to-speech',
        'Voice biometric authentication',
        'Multi-language voice support (100+ languages)',
        'Voice command processing',
        'Call transcription and analysis',
        'Voice emotion detection',
        'Custom voice model training',
        'API integration for applications',
        'Real-time voice analytics'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Voice AI',
      link: 'https://ziontechgroup.com/voice-ai',
      marketPrice: '$200-500/month',
      savings: '55% off market rate'
    },
    {
      id: '14',
      icon: Heart,
      title: 'ZionHealth Monitor',
      description: 'AI-powered health monitoring and wellness tracking platform',
      features: [
        'Health data integration from wearables',
        'AI-powered health insights and predictions',
        'Personalized wellness recommendations',
        'Medication reminder system',
        'Health goal tracking and analytics',
        'Integration with healthcare providers',
        'Emergency health alerts',
        'HIPAA compliant data handling',
        'Mobile app for iOS and Android',
        'Family health monitoring'
      ],
      price: '$39/month',
      originalPrice: '$79/month',
      users: 'Up to 5 family members',
      popular: false,
      category: 'Health',
      link: 'https://ziontechgroup.com/health-monitor',
      marketPrice: '$100-250/month',
      savings: '61% off market rate'
    },
    {
      id: '15',
      icon: Box,
      title: 'ZionInventory AI',
      description: 'Intelligent inventory management with predictive analytics and automation',
      features: [
        'AI-powered demand forecasting',
        'Automated reorder point optimization',
        'Real-time inventory tracking',
        'Multi-location inventory management',
        'Supplier performance analytics',
        'Barcode and QR code scanning',
        'Integration with e-commerce platforms',
        'Cost optimization recommendations',
        'Mobile app for warehouse management',
        'Advanced reporting and analytics'
      ],
      price: '$129/month',
      originalPrice: '$199/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Inventory',
      link: 'https://ziontechgroup.com/inventory-ai',
      marketPrice: '$300-800/month',
      savings: '57% off market rate'
    },
    {
      id: '16',
      icon: LinkIcon,
      title: 'ZionBlockchain Manager',
      description: 'Comprehensive blockchain and cryptocurrency management platform',
      features: [
        'Multi-wallet cryptocurrency management',
        'DeFi protocol integration',
        'Smart contract deployment and monitoring',
        'NFT marketplace integration',
        'Portfolio tracking and analytics',
        'Tax reporting and compliance',
        'Staking and yield farming automation',
        'Security monitoring and alerts',
        'Mobile app for trading',
        'API for custom integrations'
      ],
      price: '$199/month',
      originalPrice: '$349/month',
      users: 'Up to 10 wallets',
      popular: false,
      category: 'Blockchain',
      link: 'https://ziontechgroup.com/blockchain-manager',
      marketPrice: '$500-1500/month',
      savings: '57% off market rate'
    },
    {
      id: '17',
      icon: Server,
      title: 'ZionServer Monitor',
      description: 'Advanced server and infrastructure monitoring with AI-powered insights',
      features: [
        'Real-time server performance monitoring',
        'Predictive failure detection',
        'Automated scaling recommendations',
        'Multi-cloud infrastructure support',
        'Cost optimization analytics',
        'Security vulnerability scanning',
        'Log analysis and correlation',
        'Custom alert rules and notifications',
        'Integration with 50+ cloud providers',
        '24/7 monitoring and support'
      ],
      price: '$149/month',
      originalPrice: '$249/month',
      users: 'Up to 100 servers',
      popular: true,
      category: 'Infrastructure',
      link: 'https://ziontechgroup.com/server-monitor',
      marketPrice: '$400-1000/month',
      savings: '63% off market rate'
    },
    {
      id: '18',
      icon: Package,
      title: 'ZionLogistics AI',
      description: 'Intelligent logistics and shipping optimization platform',
      features: [
        'Route optimization algorithms',
        'Real-time shipment tracking',
        'Carrier performance analytics',
        'Cost optimization recommendations',
        'Delivery time predictions',
        'Multi-carrier integration',
        'Custom shipping rules engine',
        'Mobile app for drivers',
        'Customer delivery notifications',
        'Advanced reporting and analytics'
      ],
      price: '$179/month',
      originalPrice: '$299/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Logistics',
      link: 'https://ziontechgroup.com/logistics-ai',
      marketPrice: '$500-1200/month',
      savings: '60% off market rate'
    },
    {
      id: '19',
      icon: Workflow,
      title: 'ZionWorkflow Engine',
      description: 'Visual workflow automation platform with AI-powered optimization',
      features: [
        'Drag-and-drop workflow builder',
        'AI-powered process optimization',
        'Integration with 500+ business tools',
        'Custom workflow templates',
        'Real-time workflow monitoring',
        'Error handling and recovery',
        'Team collaboration features',
        'Workflow analytics and insights',
        'Mobile workflow management',
        'API for custom integrations'
      ],
      price: '$99/month',
      originalPrice: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Automation',
      link: 'https://ziontechgroup.com/workflow-engine',
      marketPrice: '$250-600/month',
      savings: '60% off market rate'
    },
    {
      id: '20',
      icon: MessageCircle,
      title: 'ZionSocial Manager',
      description: 'AI-powered social media management and content optimization platform',
      features: [
        'Multi-platform social media posting',
        'AI-powered content generation',
        'Optimal posting time recommendations',
        'Hashtag optimization and suggestions',
        'Social media analytics and insights',
        'Influencer collaboration tools',
        'Content calendar management',
        'Brand mention monitoring',
        'Social media advertising integration',
        'Team collaboration features'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 20 social accounts',
      popular: true,
      category: 'Social Media',
      link: 'https://ziontechgroup.com/social-manager',
      marketPrice: '$200-500/month',
      savings: '61% off market rate'
    },
    {
      id: '21',
      icon: TrendingUpIcon,
      title: 'ZionGrowth Analytics',
      description: 'Advanced growth marketing analytics and optimization platform',
      features: [
        'Multi-channel marketing attribution',
        'Customer lifetime value analysis',
        'Cohort analysis and retention tracking',
        'A/B testing automation',
        'Conversion funnel optimization',
        'ROI tracking and reporting',
        'Predictive customer behavior modeling',
        'Marketing campaign performance analytics',
        'Integration with 100+ marketing tools',
        'Custom dashboard builder'
      ],
      price: '$159/month',
      originalPrice: '$259/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Marketing',
      link: 'https://ziontechgroup.com/growth-analytics',
      marketPrice: '$400-1000/month',
      savings: '61% off market rate'
    },
    {
      id: '22',
      icon: BarChart,
      title: 'ZionFinance Pro',
      description: 'Comprehensive financial management and accounting automation platform',
      features: [
        'Automated bookkeeping and reconciliation',
        'Invoice generation and management',
        'Expense tracking and categorization',
        'Tax preparation and filing',
        'Financial reporting and analytics',
        'Multi-currency support',
        'Bank account integration',
        'Payroll processing automation',
        'Compliance monitoring',
        'Mobile app for expense tracking'
      ],
      price: '$119/month',
      originalPrice: '$199/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Finance',
      link: 'https://ziontechgroup.com/finance-pro',
      marketPrice: '$300-800/month',
      savings: '60% off market rate'
    },
    {
      id: '23',
      icon: Users,
      title: 'ZionHR Suite',
      description: 'Complete human resources management with AI-powered recruitment',
      features: [
        'AI-powered resume screening',
        'Candidate matching algorithms',
        'Interview scheduling automation',
        'Employee onboarding workflows',
        'Performance review management',
        'Time tracking and attendance',
        'Benefits administration',
        'Payroll integration',
        'Employee self-service portal',
        'Advanced HR analytics'
      ],
      price: '$139/month',
      originalPrice: '$229/month',
      users: 'Up to 50 employees',
      popular: false,
      category: 'HR',
      link: 'https://ziontechgroup.com/hr-suite',
      marketPrice: '$350-900/month',
      savings: '61% off market rate'
    },
    {
      id: '24',
      icon: Settings,
      title: 'ZionIT Helpdesk',
      description: 'AI-powered IT support and ticketing system with automation',
      features: [
        'Intelligent ticket routing',
        'Automated issue resolution',
        'Knowledge base management',
        'SLA monitoring and alerts',
        'Asset management integration',
        'Remote desktop support',
        'Mobile app for technicians',
        'Customer satisfaction tracking',
        'Integration with IT tools',
        'Advanced reporting and analytics'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 30 technicians',
      popular: true,
      category: 'IT Support',
      link: 'https://ziontechgroup.com/it-helpdesk',
      marketPrice: '$200-600/month',
      savings: '60% off market rate'
    },
    {
      id: '25',
      icon: FileText,
      title: 'ZionDocument AI',
      description: 'Intelligent document processing and management platform',
      features: [
        'OCR and text extraction',
        'Document classification and routing',
        'Contract analysis and review',
        'Automated data extraction',
        'Document version control',
        'Collaborative editing tools',
        'Digital signature integration',
        'Compliance monitoring',
        'Search and retrieval system',
        'API for custom integrations'
      ],
      price: '$109/month',
      originalPrice: '$179/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Document Management',
      link: 'https://ziontechgroup.com/document-ai',
      marketPrice: '$250-700/month',
      savings: '61% off market rate'
    },
    {
      id: '26',
      icon: Mail,
      title: 'ZionEmail Marketing',
      description: 'Advanced email marketing automation with AI-powered personalization',
      features: [
        'AI-powered email content generation',
        'Behavioral trigger automation',
        'A/B testing and optimization',
        'Advanced segmentation',
        'Email deliverability optimization',
        'Landing page builder',
        'Lead scoring and nurturing',
        'Integration with CRM systems',
        'Advanced analytics and reporting',
        'Mobile-responsive email templates'
      ],
      price: '$69/month',
      originalPrice: '$119/month',
      users: 'Up to 10,000 contacts',
      popular: true,
      category: 'Email Marketing',
      link: 'https://ziontechgroup.com/email-marketing',
      marketPrice: '$150-400/month',
      savings: '58% off market rate'
    },
    {
      id: '27',
      icon: Calendar,
      title: 'ZionScheduler Pro',
      description: 'Intelligent scheduling and appointment management platform',
      features: [
        'AI-powered scheduling optimization',
        'Multi-timezone support',
        'Calendar integration (Google, Outlook)',
        'Automated reminder system',
        'Resource booking management',
        'Meeting room optimization',
        'Client self-booking portal',
        'Mobile app for scheduling',
        'Integration with video conferencing',
        'Advanced scheduling analytics'
      ],
      price: '$49/month',
      originalPrice: '$89/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Scheduling',
      link: 'https://ziontechgroup.com/scheduler-pro',
      marketPrice: '$120-300/month',
      savings: '59% off market rate'
    },
    {
      id: '28',
      icon: Target,
      title: 'ZionLead Scoring',
      description: 'AI-powered lead scoring and qualification platform',
      features: [
        'Machine learning lead scoring',
        'Behavioral tracking and analysis',
        'Lead qualification automation',
        'CRM integration and sync',
        'Custom scoring models',
        'Lead nurturing workflows',
        'Conversion prediction',
        'Real-time lead alerts',
        'Advanced analytics dashboard',
        'API for custom integrations'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Lead Management',
      link: 'https://ziontechgroup.com/lead-scoring',
      marketPrice: '$200-500/month',
      savings: '61% off market rate'
    },
    {
      id: '29',
      icon: Cpu,
      title: 'ZionIoT Manager',
      description: 'Comprehensive IoT device management and monitoring platform',
      features: [
        'Device registration and provisioning',
        'Real-time device monitoring',
        'Firmware update management',
        'Data collection and processing',
        'Device health analytics',
        'Alert and notification system',
        'Integration with cloud platforms',
        'Custom dashboard builder',
        'Mobile app for device control',
        'API for custom applications'
      ],
      price: '$149/month',
      originalPrice: '$249/month',
      users: 'Up to 100 devices',
      popular: false,
      category: 'IoT',
      link: 'https://ziontechgroup.com/iot-manager',
      marketPrice: '$400-1000/month',
      savings: '60% off market rate'
    },
    {
      id: '30',
      icon: Monitor,
      title: 'ZionScreen Recorder',
      description: 'Advanced screen recording and video creation platform',
      features: [
        'High-quality screen recording',
        'Video editing and annotation tools',
        'Cloud storage and sharing',
        'Team collaboration features',
        'Video analytics and insights',
        'Custom branding options',
        'Integration with video platforms',
        'Mobile screen recording',
        'Automated video processing',
        'API for custom integrations'
      ],
      price: '$39/month',
      originalPrice: '$79/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Video',
      link: 'https://ziontechgroup.com/screen-recorder',
      marketPrice: '$100-250/month',
      savings: '61% off market rate'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Development', 'Data', 'Mobile', 'Web', 'Finance', 'Business Intelligence', 'Voice AI', 'Health', 'Inventory', 'Blockchain', 'Infrastructure', 'Logistics', 'Automation', 'Social Media', 'Marketing', 'HR', 'IT Support', 'Document Management', 'Email Marketing', 'Scheduling', 'Lead Management', 'IoT', 'Video'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  const benefits = [
    'Quick setup and deployment (under 5 minutes)',
    'Scalable pricing plans with no hidden fees',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'Easy integration with existing systems',
    'White-label solutions available',
    'Free trial and money-back guarantee',
    'Comprehensive documentation and training',
    'Dedicated account management'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '100%', label: 'Secure & Compliant' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '2min', label: 'Setup Time' },
    { icon: <Award className="w-8 h-8 text-yellow-400" />, value: '4.9/5', label: 'Customer Rating' },
    { icon: <Rocket className="w-8 h-8 text-pink-400" />, value: '10x', label: 'Faster Deployment' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 30+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 30+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        <div className="grid-overlay"></div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="neon-text">Micro SaaS</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use business tools that solve specific problems. Quick setup, affordable pricing, powerful features.
              <br />
              <span className="text-cyan-400 font-semibold">Save up to 67% compared to market rates!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="inline-block mr-2 w-5 h-5" />
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-card p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-card text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    {product.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 5 && (
                        <li className="text-gray-500 text-sm">
                          +{product.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Market: {product.marketPrice}</div>
                          {product.savings && (
                            <div className="text-sm text-green-600 font-medium">{product.savings}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">{product.users}</div>
                      <div className="flex gap-2">
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Try Now
                        </a>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center glass-card p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Browse Solutions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Custom Development
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MicroSaasPage;