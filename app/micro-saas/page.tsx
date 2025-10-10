'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Cloud, 
  BarChart3, 
  Target, 
  Rocket,
  Brain,
  Zap,
  Globe,
  Settings,
  Mail,
  Search,
  Code,
  FileText,
  Calendar,
  CheckSquare,
  TrendingUp,
  Smartphone,
  Lock,
  Database,
  Cpu,
  MessageSquare,
  Sparkles,
  Eye,
  Mic,
  Camera,
  CreditCard,
  ShoppingCart,
  Home,
  Car,
  Heart,
  BookOpen,
  Briefcase,
  Palette,
  Headphones,
  Wifi,
  Battery,
  Activity,
  Award,
  Bell,
  Bookmark,
  Download,
  Edit,
  Filter,
  Gift,
  HelpCircle,
  Image,
  Layers,
  Link,
  MapPin,
  Maximize,
  Minimize,
  Monitor,
  MousePointer,
  Music,
  Paperclip,
  Play,
  Plus,
  RefreshCw,
  Save,
  Scissors,
  Share,
  Star as StarIcon,
  Tag,
  Trash2,
  Upload,
  Video,
  Volume2,
  Wrench,
  X,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Chrome,
  Firefox,
  Safari,
  Edge,
  Android,
  Apple,
  Windows,
  Linux,
  Docker,
  Kubernetes,
  Aws,
  Azure,
  Gcp,
  Slack,
  Discord,
  Zoom,
  Teams,
  Notion,
  Trello,
  Asana,
  Jira,
  Confluence,
  Figma,
  Sketch,
  Adobe,
  Canva,
  Stripe,
  Paypal,
  Square,
  Shopify,
  WooCommerce,
  Magento,
  BigCommerce,
  Salesforce,
  Hubspot,
  Pipedrive,
  Zendesk,
  Intercom,
  Freshworks,
  Monday,
  ClickUp,
  Airtable,
  Zapier,
  Ifttt,
  Make,
  Integromat,
  Webflow,
  Framer,
  Bubble,
  Adalo,
  Glide,
  Thunkable,
  AppSheet,
  PowerApps,
  OutSystems,
  Mendix,
  Retool,
  Internal,
  Airtable as AirtableIcon,
  Zapier as ZapierIcon,
  Ifttt as IftttIcon,
  Make as MakeIcon,
  Integromat as IntegromatIcon,
  Webflow as WebflowIcon,
  Framer as FramerIcon,
  Bubble as BubbleIcon,
  Adalo as AdaloIcon,
  Glide as GlideIcon,
  Thunkable as ThunkableIcon,
  AppSheet as AppSheetIcon,
  PowerApps as PowerAppsIcon,
  OutSystems as OutSystemsIcon,
  Mendix as MendixIcon,
  Retool as RetoolIcon,
  Internal as InternalIcon
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice?: string;
  savings?: string;
  rating?: number;
  reviews?: number;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // AI & Analytics
    {
      id: '1',
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and real-time data visualization.',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Mobile-responsive design',
        'Team collaboration tools',
        'API integration',
        'Custom alerts & notifications',
        'Export to multiple formats'
      ],
      price: '$49/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'AI & Analytics',
      link: '/ai-analytics-dashboard',
      marketPrice: '$199/month',
      savings: '75%',
      rating: 4.9,
      reviews: 1247
    },
    {
      id: '2',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Content Generator',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: [
        'AI writing for 50+ content types',
        'Image generation with DALL-E integration',
        'Video creation and editing',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Team collaboration',
        'Analytics & performance tracking'
      ],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'AI & Analytics',
      link: '/ai-content-generator',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.8,
      reviews: 892
    },
    {
      id: '3',
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'AI Lead Scoring Engine',
      description: 'Intelligent lead qualification and scoring to maximize conversion rates and sales efficiency.',
      features: [
        'AI-powered lead scoring',
        'Behavioral analysis',
        'Predictive modeling',
        'CRM integration',
        'Custom scoring rules',
        'Lead nurturing automation',
        'Performance analytics',
        'A/B testing',
        'Real-time notifications',
        'ROI tracking'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'AI & Analytics',
      link: '/ai-lead-scoring',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.7,
      reviews: 456
    },
    {
      id: '4',
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics Suite',
      description: 'Advanced forecasting and trend analysis to make data-driven business decisions.',
      features: [
        'Time series forecasting',
        'Trend analysis',
        'Anomaly detection',
        'Custom models',
        'Data visualization',
        'Automated insights',
        'Alert system',
        'API integration',
        'Custom dashboards',
        'Export capabilities'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'AI & Analytics',
      link: '/predictive-analytics',
      marketPrice: '$399/month',
      savings: '75%',
      rating: 4.6,
      reviews: 234
    },

    // CRM & Sales
    {
      id: '5',
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI-Powered CRM Pro',
      description: 'Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Contact management',
        'Sales pipeline automation',
        'Email integration',
        'Task automation',
        'Performance analytics',
        'Mobile app',
        'Custom fields & workflows'
      ],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'CRM & Sales',
      link: '/ai-crm-pro',
      marketPrice: '$99/month',
      savings: '71%',
      rating: 4.8,
      reviews: 1567
    },
    {
      id: '6',
      icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      features: [
        'No-code chatbot builder',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training',
        'Live chat handoff',
        'Voice integration',
        'A/B testing',
        'Custom branding',
        '24/7 availability'
      ],
      price: '$19/month',
      users: 'Unlimited conversations',
      popular: true,
      category: 'CRM & Sales',
      link: '/ai-chatbot-builder',
      marketPrice: '$79/month',
      savings: '76%',
      rating: 4.7,
      reviews: 2341
    },
    {
      id: '7',
      icon: <Mail className="w-8 h-8 text-indigo-500" />,
      title: 'AI Email Marketing Pro',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: [
        'AI campaign optimization',
        'Advanced personalization',
        'A/B testing automation',
        'Behavioral triggers',
        'Advanced analytics',
        'Template library',
        'Automation workflows',
        'List segmentation',
        'Deliverability optimization',
        'ROI tracking'
      ],
      price: '$39/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'CRM & Sales',
      link: '/ai-email-marketing',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.6,
      reviews: 892
    },
    {
      id: '8',
      icon: <Phone className="w-8 h-8 text-teal-500" />,
      title: 'AI Sales Assistant',
      description: 'Intelligent sales automation with AI-powered call analysis, follow-up suggestions, and performance insights.',
      features: [
        'Call analysis & insights',
        'Follow-up suggestions',
        'Sales script optimization',
        'Performance analytics',
        'CRM integration',
        'Lead qualification',
        'Meeting scheduling',
        'Email automation',
        'Pipeline management',
        'ROI tracking'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'CRM & Sales',
      link: '/ai-sales-assistant',
      marketPrice: '$199/month',
      savings: '70%',
      rating: 4.5,
      reviews: 567
    },

    // Project Management
    {
      id: '9',
      icon: <CheckSquare className="w-8 h-8 text-emerald-500" />,
      title: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered task allocation, resource optimization, and progress tracking.',
      features: [
        'AI task allocation',
        'Resource optimization',
        'Progress tracking',
        'Risk assessment',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Gantt charts',
        'Mobile app',
        'Integration APIs'
      ],
      price: '$49/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Project Management',
      link: '/ai-project-manager',
      marketPrice: '$199/month',
      savings: '75%',
      rating: 4.8,
      reviews: 1234
    },
    {
      id: '10',
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: 'Smart Scheduler Pro',
      description: 'AI-powered scheduling with calendar optimization, meeting coordination, and time management.',
      features: [
        'AI calendar optimization',
        'Meeting coordination',
        'Time management',
        'Auto-scheduling',
        'Integration APIs',
        'Conflict resolution',
        'Time zone handling',
        'Recurring events',
        'Mobile sync',
        'Analytics dashboard'
      ],
      price: '$15/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Project Management',
      link: '/smart-scheduler',
      marketPrice: '$49/month',
      savings: '69%',
      rating: 4.7,
      reviews: 789
    },
    {
      id: '11',
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: 'Time Tracking AI',
      description: 'Intelligent time tracking with automatic project detection, productivity insights, and billing automation.',
      features: [
        'Automatic time tracking',
        'Project detection',
        'Productivity insights',
        'Billing automation',
        'Team monitoring',
        'Reports & analytics',
        'Mobile app',
        'Integration APIs',
        'Custom categories',
        'Export capabilities'
      ],
      price: '$12/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Project Management',
      link: '/time-tracking-ai',
      marketPrice: '$39/month',
      savings: '69%',
      rating: 4.6,
      reviews: 456
    },

    // Security & Compliance
    {
      id: '12',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Monitor',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and automated response.',
      features: [
        'AI threat detection',
        'Automated incident response',
        'Compliance monitoring',
        'Security analytics',
        'Real-time alerts',
        'Vulnerability scanning',
        'Access control',
        'Audit trails',
        '24/7 monitoring',
        'Custom rules'
      ],
      price: '$79/month',
      users: 'Unlimited users',
      popular: true,
      category: 'Security & Compliance',
      link: '/ai-security-monitor',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.9,
      reviews: 1890
    },
    {
      id: '13',
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: 'Compliance Manager Pro',
      description: 'Automated compliance management with AI-powered monitoring, reporting, and risk assessment.',
      features: [
        'Compliance monitoring',
        'Automated reporting',
        'Risk assessment',
        'Audit trails',
        'Policy management',
        'Training modules',
        'Alert system',
        'Integration APIs',
        'Custom frameworks',
        'Documentation'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security & Compliance',
      link: '/compliance-manager',
      marketPrice: '$399/month',
      savings: '75%',
      rating: 4.7,
      reviews: 678
    },
    {
      id: '14',
      icon: <Eye className="w-8 h-8 text-cyan-600" />,
      title: 'Privacy Protection Suite',
      description: 'Comprehensive privacy protection with AI-powered data discovery, classification, and protection.',
      features: [
        'Data discovery',
        'Classification',
        'Protection policies',
        'Consent management',
        'GDPR compliance',
        'CCPA compliance',
        'Data mapping',
        'Risk assessment',
        'Incident response',
        'Reporting'
      ],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security & Compliance',
      link: '/privacy-protection',
      marketPrice: '$599/month',
      savings: '75%',
      rating: 4.8,
      reviews: 234
    },

    // Finance & Accounting
    {
      id: '15',
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting.',
      features: [
        'Automated bookkeeping',
        'Tax preparation',
        'Financial reports',
        'Expense tracking',
        'Invoice generation',
        'Payment processing',
        'Bank reconciliation',
        'Compliance monitoring',
        'Multi-currency support',
        'Integration APIs'
      ],
      price: '$39/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Finance & Accounting',
      link: '/ai-accounting',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.7,
      reviews: 1456
    },
    {
      id: '16',
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights.',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Budget insights',
        'Tax preparation',
        'Multi-currency',
        'Team management',
        'Approval workflows',
        'Reporting',
        'Mobile app',
        'Integration APIs'
      ],
      price: '$19/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Finance & Accounting',
      link: '/expense-tracker-ai',
      marketPrice: '$59/month',
      savings: '68%',
      rating: 4.6,
      reviews: 892
    },
    {
      id: '17',
      icon: <BarChart3 className="w-8 h-8 text-blue-700" />,
      title: 'Financial Analytics Pro',
      description: 'Advanced financial analytics with AI-powered insights, forecasting, and risk assessment.',
      features: [
        'Financial forecasting',
        'Risk assessment',
        'Cash flow analysis',
        'Investment insights',
        'Portfolio management',
        'Custom reports',
        'Real-time data',
        'Integration APIs',
        'Mobile dashboard',
        'Alert system'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Finance & Accounting',
      link: '/financial-analytics',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.8,
      reviews: 567
    },

    // Marketing & Social Media
    {
      id: '18',
      icon: <Globe className="w-8 h-8 text-pink-600" />,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics.',
      features: [
        'Content creation',
        'Auto-scheduling',
        'Performance analytics',
        'Multi-platform support',
        'Engagement tracking',
        'Hashtag optimization',
        'Competitor analysis',
        'Influencer outreach',
        'Team collaboration',
        'ROI tracking'
      ],
      price: '$29/month',
      users: 'Up to 5 accounts',
      popular: true,
      category: 'Marketing & Social',
      link: '/social-media-ai',
      marketPrice: '$99/month',
      savings: '71%',
      rating: 4.7,
      reviews: 2134
    },
    {
      id: '19',
      icon: <Search className="w-8 h-8 text-orange-600" />,
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions.',
      features: [
        'SEO analysis',
        'Keyword research',
        'Content suggestions',
        'Ranking tracking',
        'Technical audits',
        'Competitor analysis',
        'Link building',
        'Local SEO',
        'Reporting',
        'Integration APIs'
      ],
      price: '$39/month',
      users: 'Up to 10 websites',
      popular: false,
      category: 'Marketing & Social',
      link: '/seo-optimizer',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.6,
      reviews: 1234
    },
    {
      id: '20',
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: 'Ad Campaign Manager AI',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.',
      features: [
        'Multi-platform ads',
        'AI optimization',
        'Budget management',
        'Performance tracking',
        'Auto-bidding',
        'A/B testing',
        'Audience targeting',
        'Creative optimization',
        'ROI tracking',
        'Reporting'
      ],
      price: '$59/month',
      users: 'Up to 20 campaigns',
      popular: false,
      category: 'Marketing & Social',
      link: '/ad-campaign-ai',
      marketPrice: '$199/month',
      savings: '70%',
      rating: 4.5,
      reviews: 789
    },

    // E-commerce & Retail
    {
      id: '21',
      icon: <ShoppingCart className="w-8 h-8 text-indigo-600" />,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced e-commerce analytics with AI-powered insights, conversion optimization, and customer behavior analysis.',
      features: [
        'Conversion optimization',
        'Customer behavior analysis',
        'Product recommendations',
        'Inventory management',
        'Price optimization',
        'A/B testing',
        'Customer segmentation',
        'Sales forecasting',
        'Integration APIs',
        'Custom dashboards'
      ],
      price: '$49/month',
      users: 'Up to 1 store',
      popular: true,
      category: 'E-commerce & Retail',
      link: '/ecommerce-analytics',
      marketPrice: '$199/month',
      savings: '75%',
      rating: 4.8,
      reviews: 1567
    },
    {
      id: '22',
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Customer Support AI',
      description: 'Intelligent customer support with AI-powered ticket routing, response generation, and satisfaction tracking.',
      features: [
        'AI ticket routing',
        'Response generation',
        'Satisfaction tracking',
        'Knowledge base',
        'Multi-channel support',
        'Escalation management',
        'Performance analytics',
        'Integration APIs',
        'Custom workflows',
        'Team collaboration'
      ],
      price: '$39/month',
      users: 'Up to 10 agents',
      popular: false,
      category: 'E-commerce & Retail',
      link: '/customer-support-ai',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.7,
      reviews: 892
    },

    // Healthcare & Medical
    {
      id: '23',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Medical Records AI',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis.',
      features: [
        'HIPAA compliance',
        'Data extraction',
        'Medical analysis',
        'Patient portal',
        'Integration APIs',
        'Secure storage',
        'Access control',
        'Audit trails',
        'Reporting',
        'Mobile access'
      ],
      price: '$99/month',
      users: 'Up to 25 providers',
      popular: false,
      category: 'Healthcare & Medical',
      link: '/medical-records-ai',
      marketPrice: '$399/month',
      savings: '75%',
      rating: 4.9,
      reviews: 234
    },
    {
      id: '24',
      icon: <Activity className="w-8 h-8 text-green-600" />,
      title: 'Health Analytics Pro',
      description: 'AI-powered health analytics with patient monitoring, predictive insights, and treatment recommendations.',
      features: [
        'Patient monitoring',
        'Predictive insights',
        'Treatment recommendations',
        'Risk assessment',
        'Clinical decision support',
        'Integration APIs',
        'Reporting',
        'Alert system',
        'Compliance monitoring',
        'Mobile dashboard'
      ],
      price: '$149/month',
      users: 'Up to 50 providers',
      popular: false,
      category: 'Healthcare & Medical',
      link: '/health-analytics',
      marketPrice: '$599/month',
      savings: '75%',
      rating: 4.8,
      reviews: 123
    },

    // Education & Training
    {
      id: '25',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'Learning Management AI',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking.',
      features: [
        'Personalized learning',
        'Progress tracking',
        'Course creation',
        'Assessment tools',
        'Certification',
        'Mobile app',
        'Integration APIs',
        'Analytics dashboard',
        'Team management',
        'Content library'
      ],
      price: '$29/month',
      users: 'Up to 100 students',
      popular: true,
      category: 'Education & Training',
      link: '/learning-management-ai',
      marketPrice: '$99/month',
      savings: '71%',
      rating: 4.7,
      reviews: 1456
    },
    {
      id: '26',
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'Skill Assessment AI',
      description: 'Intelligent skill assessment with AI-powered evaluation, certification, and career recommendations.',
      features: [
        'AI skill evaluation',
        'Certification system',
        'Career recommendations',
        'Progress tracking',
        'Custom assessments',
        'Integration APIs',
        'Reporting',
        'Mobile app',
        'Team management',
        'Analytics'
      ],
      price: '$39/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Education & Training',
      link: '/skill-assessment-ai',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.6,
      reviews: 567
    },

    // Real Estate & Property
    {
      id: '27',
      icon: <Home className="w-8 h-8 text-purple-600" />,
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization.',
      features: [
        'Tenant screening',
        'Maintenance scheduling',
        'Rent optimization',
        'Property analytics',
        'Tenant portal',
        'Payment processing',
        'Document management',
        'Integration APIs',
        'Mobile app',
        'Reporting'
      ],
      price: '$49/month',
      users: 'Up to 25 properties',
      popular: false,
      category: 'Real Estate & Property',
      link: '/property-management-ai',
      marketPrice: '$199/month',
      savings: '75%',
      rating: 4.7,
      reviews: 789
    },
    {
      id: '28',
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: 'Real Estate Analytics',
      description: 'Advanced real estate analytics with market analysis, property valuation, and investment insights.',
      features: [
        'Market analysis',
        'Property valuation',
        'Investment insights',
        'Trend prediction',
        'Portfolio management',
        'Integration APIs',
        'Custom reports',
        'Mobile dashboard',
        'Alert system',
        'Data visualization'
      ],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Real Estate & Property',
      link: '/real-estate-analytics',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.8,
      reviews: 234
    },

    // Legal & Compliance
    {
      id: '29',
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: 'Legal Document AI',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment.',
      features: [
        'Contract analysis',
        'Compliance tracking',
        'Risk assessment',
        'Document templates',
        'Legal research',
        'Integration APIs',
        'Team collaboration',
        'Version control',
        'Reporting',
        'Mobile access'
      ],
      price: '$99/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Legal & Compliance',
      link: '/legal-document-ai',
      marketPrice: '$399/month',
      savings: '75%',
      rating: 4.7,
      reviews: 345
    },
    {
      id: '30',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'Compliance Tracker AI',
      description: 'Automated compliance tracking with AI-powered monitoring, reporting, and risk management.',
      features: [
        'Compliance monitoring',
        'Automated reporting',
        'Risk management',
        'Policy tracking',
        'Audit preparation',
        'Integration APIs',
        'Team collaboration',
        'Alert system',
        'Documentation',
        'Mobile app'
      ],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Legal & Compliance',
      link: '/compliance-tracker-ai',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.6,
      reviews: 456
    },

    // Manufacturing & Supply Chain
    {
      id: '31',
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management.',
      features: [
        'Demand forecasting',
        'Inventory management',
        'Supplier analytics',
        'Risk assessment',
        'Cost optimization',
        'Integration APIs',
        'Real-time monitoring',
        'Alert system',
        'Reporting',
        'Mobile dashboard'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Manufacturing & Supply',
      link: '/supply-chain-optimizer',
      marketPrice: '$599/month',
      savings: '75%',
      rating: 4.8,
      reviews: 123
    },
    {
      id: '32',
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: 'Quality Control AI',
      description: 'AI-powered quality control with automated inspection, defect detection, and process optimization.',
      features: [
        'Automated inspection',
        'Defect detection',
        'Process optimization',
        'Quality analytics',
        'Integration APIs',
        'Real-time monitoring',
        'Alert system',
        'Reporting',
        'Mobile app',
        'Team collaboration'
      ],
      price: '$199/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Manufacturing & Supply',
      link: '/quality-control-ai',
      marketPrice: '$799/month',
      savings: '75%',
      rating: 4.7,
      reviews: 67
    },

    // Human Resources
    {
      id: '33',
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: 'HR Analytics Pro',
      description: 'AI-powered HR analytics with employee insights, performance tracking, and retention analysis.',
      features: [
        'Employee insights',
        'Performance tracking',
        'Retention analysis',
        'Recruitment analytics',
        'Integration APIs',
        'Custom reports',
        'Mobile dashboard',
        'Team management',
        'Alert system',
        'Data visualization'
      ],
      price: '$59/month',
      users: 'Up to 100 employees',
      popular: false,
      category: 'Human Resources',
      link: '/hr-analytics-pro',
      marketPrice: '$199/month',
      savings: '70%',
      rating: 4.6,
      reviews: 456
    },
    {
      id: '34',
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      title: 'Recruitment AI',
      description: 'Intelligent recruitment with AI-powered candidate screening, matching, and interview scheduling.',
      features: [
        'Candidate screening',
        'AI matching',
        'Interview scheduling',
        'Skills assessment',
        'Background checks',
        'Integration APIs',
        'Team collaboration',
        'Analytics dashboard',
        'Mobile app',
        'Custom workflows'
      ],
      price: '$79/month',
      users: 'Up to 20 recruiters',
      popular: false,
      category: 'Human Resources',
      link: '/recruitment-ai',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.7,
      reviews: 789
    },

    // Creative & Design
    {
      id: '35',
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools.',
      features: [
        'AI design tools',
        'Logo generation',
        'Marketing materials',
        'Brand kit',
        'Template library',
        'Collaboration tools',
        'Export options',
        'Integration APIs',
        'Mobile app',
        'Version control'
      ],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Creative & Design',
      link: '/ai-design-studio',
      marketPrice: '$99/month',
      savings: '71%',
      rating: 4.8,
      reviews: 2134
    },
    {
      id: '36',
      icon: <Camera className="w-8 h-8 text-red-600" />,
      title: 'Video Editor AI',
      description: 'AI-powered video editing with automatic editing, effects, and optimization for social media.',
      features: [
        'Automatic editing',
        'AI effects',
        'Social media optimization',
        'Template library',
        'Collaboration tools',
        'Export options',
        'Integration APIs',
        'Mobile app',
        'Cloud storage',
        'Version control'
      ],
      price: '$39/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Creative & Design',
      link: '/video-editor-ai',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.7,
      reviews: 892
    },

    // Communication & Collaboration
    {
      id: '37',
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: 'Team Communication AI',
      description: 'Intelligent team communication with AI-powered insights, meeting optimization, and collaboration tools.',
      features: [
        'AI meeting insights',
        'Meeting optimization',
        'Collaboration tools',
        'File sharing',
        'Integration APIs',
        'Mobile app',
        'Analytics dashboard',
        'Team management',
        'Custom workflows',
        'Security features'
      ],
      price: '$19/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Communication & Collaboration',
      link: '/team-communication-ai',
      marketPrice: '$59/month',
      savings: '68%',
      rating: 4.6,
      reviews: 567
    },
    {
      id: '38',
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: 'Video Conferencing AI',
      description: 'AI-enhanced video conferencing with automatic transcription, meeting summaries, and optimization.',
      features: [
        'Automatic transcription',
        'Meeting summaries',
        'AI optimization',
        'Screen sharing',
        'Recording',
        'Integration APIs',
        'Mobile app',
        'Analytics',
        'Team management',
        'Security features'
      ],
      price: '$29/month',
      users: 'Up to 50 participants',
      popular: false,
      category: 'Communication & Collaboration',
      link: '/video-conferencing-ai',
      marketPrice: '$99/month',
      savings: '71%',
      rating: 4.7,
      reviews: 1234
    },

    // Development & DevOps
    {
      id: '39',
      icon: <Code className="w-8 h-8 text-gray-600" />,
      title: 'Code Assistant AI',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: [
        'Code completion',
        'Debugging help',
        'Code optimization',
        'Multi-language support',
        'Documentation',
        'Integration APIs',
        'Team collaboration',
        'Version control',
        'Mobile app',
        'Custom models'
      ],
      price: '$39/month',
      users: 'Up to 10 developers',
      popular: true,
      category: 'Development & DevOps',
      link: '/code-assistant-ai',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.8,
      reviews: 3456
    },
    {
      id: '40',
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      title: 'DevOps Automation AI',
      description: 'AI-powered DevOps automation with intelligent deployment, monitoring, and optimization.',
      features: [
        'Intelligent deployment',
        'Automated monitoring',
        'Performance optimization',
        'Integration APIs',
        'Team collaboration',
        'Analytics dashboard',
        'Alert system',
        'Mobile app',
        'Custom workflows',
        'Security features'
      ],
      price: '$79/month',
      users: 'Up to 15 developers',
      popular: false,
      category: 'Development & DevOps',
      link: '/devops-automation-ai',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.7,
      reviews: 567
    },

    // IoT & Hardware
    {
      id: '41',
      icon: <Wifi className="w-8 h-8 text-cyan-600" />,
      title: 'IoT Management AI',
      description: 'AI-powered IoT device management with monitoring, optimization, and predictive maintenance.',
      features: [
        'Device monitoring',
        'Performance optimization',
        'Predictive maintenance',
        'Integration APIs',
        'Real-time alerts',
        'Analytics dashboard',
        'Mobile app',
        'Team management',
        'Custom rules',
        'Security features'
      ],
      price: '$99/month',
      users: 'Up to 100 devices',
      popular: false,
      category: 'IoT & Hardware',
      link: '/iot-management-ai',
      marketPrice: '$399/month',
      savings: '75%',
      rating: 4.6,
      reviews: 234
    },
    {
      id: '42',
      icon: <Activity className="w-8 h-8 text-green-600" />,
      title: 'Smart Home AI',
      description: 'AI-powered smart home management with automation, energy optimization, and security monitoring.',
      features: [
        'Home automation',
        'Energy optimization',
        'Security monitoring',
        'Integration APIs',
        'Mobile app',
        'Voice control',
        'Analytics dashboard',
        'Custom rules',
        'Team management',
        'Alert system'
      ],
      price: '$29/month',
      users: 'Up to 50 devices',
      popular: false,
      category: 'IoT & Hardware',
      link: '/smart-home-ai',
      marketPrice: '$99/month',
      savings: '71%',
      rating: 4.7,
      reviews: 1234
    },

    // Transportation & Logistics
    {
      id: '43',
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: 'Fleet Management AI',
      description: 'AI-powered fleet management with route optimization, maintenance scheduling, and driver monitoring.',
      features: [
        'Route optimization',
        'Maintenance scheduling',
        'Driver monitoring',
        'Fuel optimization',
        'Integration APIs',
        'Real-time tracking',
        'Analytics dashboard',
        'Mobile app',
        'Alert system',
        'Custom rules'
      ],
      price: '$79/month',
      users: 'Up to 25 vehicles',
      popular: false,
      category: 'Transportation & Logistics',
      link: '/fleet-management-ai',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.8,
      reviews: 456
    },
    {
      id: '44',
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: 'Logistics Optimizer AI',
      description: 'AI-powered logistics optimization with demand forecasting, inventory management, and delivery optimization.',
      features: [
        'Demand forecasting',
        'Inventory management',
        'Delivery optimization',
        'Integration APIs',
        'Real-time monitoring',
        'Analytics dashboard',
        'Mobile app',
        'Team management',
        'Alert system',
        'Custom rules'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Transportation & Logistics',
      link: '/logistics-optimizer-ai',
      marketPrice: '$599/month',
      savings: '75%',
      rating: 4.7,
      reviews: 123
    },

    // Energy & Environment
    {
      id: '45',
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Energy Management AI',
      description: 'AI-powered energy management with optimization, monitoring, and cost reduction.',
      features: [
        'Energy optimization',
        'Real-time monitoring',
        'Cost reduction',
        'Integration APIs',
        'Analytics dashboard',
        'Mobile app',
        'Alert system',
        'Custom rules',
        'Team management',
        'Reporting'
      ],
      price: '$99/month',
      users: 'Up to 25 locations',
      popular: false,
      category: 'Energy & Environment',
      link: '/energy-management-ai',
      marketPrice: '$399/month',
      savings: '75%',
      rating: 4.6,
      reviews: 234
    },
    {
      id: '46',
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: 'Environmental Monitoring AI',
      description: 'AI-powered environmental monitoring with pollution tracking, climate analysis, and sustainability insights.',
      features: [
        'Pollution tracking',
        'Climate analysis',
        'Sustainability insights',
        'Integration APIs',
        'Real-time monitoring',
        'Analytics dashboard',
        'Mobile app',
        'Alert system',
        'Custom rules',
        'Reporting'
      ],
      price: '$79/month',
      users: 'Up to 50 sensors',
      popular: false,
      category: 'Energy & Environment',
      link: '/environmental-monitoring-ai',
      marketPrice: '$299/month',
      savings: '74%',
      rating: 4.7,
      reviews: 123
    },

    // Sports & Fitness
    {
      id: '47',
      icon: <Activity className="w-8 h-8 text-red-600" />,
      title: 'Sports Analytics AI',
      description: 'AI-powered sports analytics with performance tracking, injury prediction, and team optimization.',
      features: [
        'Performance tracking',
        'Injury prediction',
        'Team optimization',
        'Integration APIs',
        'Real-time monitoring',
        'Analytics dashboard',
        'Mobile app',
        'Team management',
        'Custom rules',
        'Reporting'
      ],
      price: '$59/month',
      users: 'Up to 25 athletes',
      popular: false,
      category: 'Sports & Fitness',
      link: '/sports-analytics-ai',
      marketPrice: '$199/month',
      savings: '70%',
      rating: 4.8,
      reviews: 567
    },
    {
      id: '48',
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: 'Fitness Tracker AI',
      description: 'AI-powered fitness tracking with personalized workouts, nutrition planning, and health monitoring.',
      features: [
        'Personalized workouts',
        'Nutrition planning',
        'Health monitoring',
        'Integration APIs',
        'Mobile app',
        'Analytics dashboard',
        'Team management',
        'Custom rules',
        'Alert system',
        'Reporting'
      ],
      price: '$19/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Sports & Fitness',
      link: '/fitness-tracker-ai',
      marketPrice: '$59/month',
      savings: '68%',
      rating: 4.7,
      reviews: 1234
    },

    // Entertainment & Media
    {
      id: '49',
      icon: <Music className="w-8 h-8 text-purple-600" />,
      title: 'Content Creator AI',
      description: 'AI-powered content creation with automated editing, optimization, and distribution across platforms.',
      features: [
        'Automated editing',
        'Content optimization',
        'Multi-platform distribution',
        'Integration APIs',
        'Analytics dashboard',
        'Mobile app',
        'Team collaboration',
        'Custom rules',
        'Alert system',
        'Reporting'
      ],
      price: '$39/month',
      users: 'Up to 5 creators',
      popular: false,
      category: 'Entertainment & Media',
      link: '/content-creator-ai',
      marketPrice: '$149/month',
      savings: '74%',
      rating: 4.6,
      reviews: 789
    },
    {
      id: '50',
      icon: <Video className="w-8 h-8 text-red-600" />,
      title: 'Streaming Analytics AI',
      description: 'AI-powered streaming analytics with audience insights, content optimization, and performance tracking.',
      features: [
        'Audience insights',
        'Content optimization',
        'Performance tracking',
        'Integration APIs',
        'Real-time monitoring',
        'Analytics dashboard',
        'Mobile app',
        'Team management',
        'Custom rules',
        'Reporting'
      ],
      price: '$29/month',
      users: 'Up to 10 channels',
      popular: false,
      category: 'Entertainment & Media',
      link: '/streaming-analytics-ai',
      marketPrice: '$99/month',
      savings: '71%',
      rating: 4.7,
      reviews: 456
    }
  ];

  const categories = [
    'All',
    'AI & Analytics',
    'CRM & Sales',
    'Project Management',
    'Security & Compliance',
    'Finance & Accounting',
    'Marketing & Social',
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Education & Training',
    'Real Estate & Property',
    'Legal & Compliance',
    'Manufacturing & Supply',
    'Human Resources',
    'Creative & Design',
    'Communication & Collaboration',
    'Development & DevOps',
    'IoT & Hardware',
    'Transportation & Logistics',
    'Energy & Environment',
    'Sports & Fitness',
    'Entertainment & Media'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularProducts = microSaasProducts.filter(product => product.popular);
  const totalSavings = microSaasProducts.reduce((total, product) => {
    if (product.savings) {
      const savings = parseInt(product.savings.replace('%', ''));
      return total + savings;
    }
    return total;
  }, 0);

  const averageSavings = Math.round(totalSavings / microSaasProducts.length);

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View All Plans
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[150px]">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-300">AI Tools</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[150px]">
                <div className="text-3xl font-bold text-cyan-400">{averageSavings}%</div>
                <div className="text-sm text-gray-300">Average Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[150px]">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[150px]">
                <div className="text-3xl font-bold text-cyan-400">Free</div>
                <div className="text-sm text-gray-300">Trial</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS tools..."
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
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
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

        {/* Popular Products Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Most Popular Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most loved micro SaaS tools that are helping businesses grow and scale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative border border-white/20"
                >
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                      {product.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-300 mb-2">{product.users}</div>
                    {product.savings && (
                      <div className="text-sm text-green-400 font-medium">
                        Save {product.savings} vs market price
                      </div>
                    )}
                    {product.rating && (
                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating!) ? 'text-yellow-400' : 'text-gray-400'
                              }`}
                              fill={i < Math.floor(product.rating!) ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-300 ml-2">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={product.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Tools' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} tool{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group border border-white/10"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-cyan-500/20 p-2 rounded-lg mr-3 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {product.title}
                      </h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-lg font-bold text-cyan-400">{product.price}</div>
                      {product.marketPrice && (
                        <div className="text-xs text-gray-400 line-through">{product.marketPrice}</div>
                      )}
                    </div>
                    <div className="text-xs text-gray-300">{product.users}</div>
                    {product.savings && (
                      <div className="text-xs text-green-400 font-medium">
                        Save {product.savings}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={product.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {product.rating && (
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                        <span className="text-xs text-gray-300 ml-1">{product.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses, designed for success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
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
      </div>
    </>
  );
};

export default MicroSaasPage;
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable AI-powered tools designed for small to medium businesses. Scale your operations without the complexity.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Explore Solutions
            </button>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of specialized tools designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-2xl font-bold text-white mb-1">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users}</div>
                  </div>
                </div>
              ))}
=======
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-300 mb-6">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
=======
  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support'];

  const stats = [
=======
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: 'Marketing Automation',
      description: 'Automate your marketing campaigns and boost engagement',
      features: [
        'Email campaigns',
        'Social media scheduling',
        'Lead scoring',
        'A/B testing',
        'Performance analytics'
      ],
      price: '$35/month',
      users: 'Up to 8 users',
      popular: true,
      category: 'Marketing'
    }
  ];

  const features = [
>>>>>>> cursor/fix-errors-and-merge-to-main-581e
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with built-in collaboration tools'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with comprehensive analytics'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Project Management', 'Security', 'Storage', 'Marketing'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Small Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small businesses. Affordable, powerful tools to streamline your operations." />
        <meta name="keywords" content="micro SaaS, small business tools, business software, productivity tools, affordable software" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
=======
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
<<<<<<< HEAD
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
=======
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
<<<<<<< HEAD
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
=======
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
                >
                  View All Plans
                </Link>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect micro SaaS solution for your business and start growing today.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              View All Plans
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
=======
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Powerful, affordable tools designed specifically for small businesses and startups
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Browse Solutions
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for small businesses, designed for success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of specialized tools designed for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                  product.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {product.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">{product.users}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 text-sm">
                    Try Free
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your free trial today and discover how our micro SaaS solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-581e
  );
};

export default MicroSaasPage;