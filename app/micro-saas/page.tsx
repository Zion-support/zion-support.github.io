'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Search, Filter, Zap, Brain, Code, Database, Smartphone, Mail, Calendar, FileText, CreditCard, Target, Globe, Lock, Settings, Monitor, Headphones, Camera, Music, Video, Image, Download, Upload, Share, Heart, ThumbsUp, Award, Clock, DollarSign, Percent, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Cpu, HardDrive, Wifi, Battery, Wrench, Hammer, Scissors, Paintbrush, Palette, Layers, Grid, Layout, Maximize, Minimize, RotateCcw, RotateCw, RefreshCw, RefreshCcw, Play, Pause, Stop, SkipBack, SkipForward, Volume2, VolumeX, Mic, MicOff, Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneOff, Video as VideoIcon, VideoOff, Eye, EyeOff, Lock as LockIcon, Unlock, Key, Fingerprint, Shield as ShieldIcon, ShieldCheck, AlertTriangle, AlertCircle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Copy, Save, Download as DownloadIcon, Upload as UploadIcon, Share2, ExternalLink, Link, Link2, Unlink, Bookmark, BookmarkCheck, Flag, FlagOff, Tag, Tags, Hash, AtSign, Hash as HashIcon, DollarSign as DollarIcon, Percent as PercentIcon, Plus as PlusIcon, Minus as MinusIcon, X as XIcon, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowLeft, ArrowUp, ArrowDown, Move, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, RefreshCw as RefreshCwIcon, RefreshCcw as RefreshCcwIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, ZoomIn, ZoomOut, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, List, Grid as GridIcon, Layout as LayoutIcon, Columns, Rows, AlignLeft, AlignCenter, AlignRight, AlignJustify, Bold, Italic, Underline, Strikethrough, Code as CodeIcon, Terminal, Command, Keyboard, Mouse, MousePointer, Hand, HandPointer, Handshake, Users as UsersIcon, User, UserCheck, UserPlus, UserMinus, UserX, UserCog, UserEdit, UserSearch, UserShield, UserStar, UserHeart, UserCheck as UserCheckIcon, UserPlus as UserPlusIcon, UserMinus as UserMinusIcon, UserX as UserXIcon, UserCog as UserCogIcon, UserEdit as UserEditIcon, UserSearch as UserSearchIcon, UserShield as UserShieldIcon, UserStar as UserStarIcon, UserHeart as UserHeartIcon } from 'lucide-react';

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
  marketPrice: string;
  savings: string;
  trialDays: number;
  setupTime: string;
  integrations: number;
  support: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const products: MicroSaasProduct[] = [
    // AI & Machine Learning Tools
    {
      id: 'ai-content-generator',
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates, SEO optimization, and brand voice customization',
      features: [
        '50+ content templates',
        'SEO optimization',
        'Brand voice training',
        'Multi-language support',
        'Plagiarism detection',
        'Content calendar',
        'Team collaboration',
        'API access'
      ],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'AI & ML',
      marketPrice: '$299/month',
      savings: '73%',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: 25,
      support: '24/7'
    },
    {
      id: 'ai-chatbot-builder',
      icon: MessageSquare,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots with natural language processing, multi-channel support, and analytics',
      features: [
        'No-code builder',
        'NLP processing',
        'Multi-channel support',
        'Analytics dashboard',
        'CRM integration',
        'Custom training',
        'Voice support',
        'A/B testing'
      ],
      price: '$99/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'AI & ML',
      marketPrice: '$399/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'ai-analytics-dashboard',
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and custom reports',
      features: [
        'Real-time analytics',
        'Predictive insights',
        'Custom dashboards',
        'Automated reports',
        'Data visualization',
        'Alert system',
        'Mobile app',
        'API access'
      ],
      price: '$149/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'AI & ML',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 50,
      support: '24/7'
    },
    {
      id: 'ai-email-marketing',
      icon: Mail,
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI optimization, personalization, and advanced automation',
      features: [
        'AI optimization',
        'Personalization engine',
        'A/B testing',
        'Segmentation',
        'Automation workflows',
        'Analytics & reporting',
        'Template library',
        'Deliverability tools'
      ],
      price: '$69/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'AI & ML',
      marketPrice: '$299/month',
      savings: '77%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'ai-social-media-manager',
      icon: Share2,
      title: 'AI Social Media Manager',
      description: 'Complete social media management with AI content generation, scheduling, and performance analytics',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Optimal timing',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Team collaboration',
        'Analytics dashboard'
      ],
      price: '$89/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'AI & ML',
      marketPrice: '$399/month',
      savings: '78%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 15,
      support: '24/7'
    },

    // Business & Productivity Tools
    {
      id: 'project-management-ai',
      icon: Target,
      title: 'AI Project Management',
      description: 'Intelligent project management with AI task prioritization, resource optimization, and team collaboration',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Team collaboration',
        'Time tracking',
        'Progress analytics',
        'Risk assessment',
        'Integration hub',
        'Mobile app'
      ],
      price: '$129/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Business',
      marketPrice: '$499/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 60,
      support: '24/7'
    },
    {
      id: 'crm-ai-powered',
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Advanced CRM with AI lead scoring, automated follow-ups, and predictive sales analytics',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Pipeline management',
        'Email integration',
        'Call tracking',
        'Custom fields',
        'Reporting suite'
      ],
      price: '$199/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Business',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 45,
      support: '24/7'
    },
    {
      id: 'expense-tracker-ai',
      icon: CreditCard,
      title: 'AI Expense Tracker',
      description: 'Smart expense management with receipt scanning, AI categorization, and automated reporting',
      features: [
        'Receipt scanning (OCR)',
        'AI categorization',
        'Automated reporting',
        'Budget tracking',
        'Approval workflows',
        'Tax preparation',
        'Mobile app',
        'Bank integration'
      ],
      price: '$49/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Business',
      marketPrice: '$199/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: 20,
      support: '24/7'
    },
    {
      id: 'appointment-scheduler-ai',
      icon: Calendar,
      title: 'AI Appointment Scheduler',
      description: 'Smart scheduling with AI optimization, automated reminders, and multi-timezone support',
      features: [
        'AI optimization',
        'Automated reminders',
        'Multi-timezone support',
        'Payment processing',
        'Video conferencing',
        'Custom booking forms',
        'Calendar sync',
        'Analytics dashboard'
      ],
      price: '$59/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Business',
      marketPrice: '$249/month',
      savings: '76%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 25,
      support: '24/7'
    },
    {
      id: 'inventory-manager-ai',
      icon: Package,
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and optimization',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock optimization',
        'Barcode scanning',
        'Multi-location support',
        'Supplier management',
        'Analytics & reporting',
        'Mobile app'
      ],
      price: '$179/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Business',
      marketPrice: '$699/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 35,
      support: '24/7'
    },

    // Marketing & Sales Tools
    {
      id: 'seo-optimizer-ai',
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-powered recommendations and competitor tracking',
      features: [
        'Keyword research',
        'Site audit',
        'Competitor analysis',
        'Content optimization',
        'Rank tracking',
        'Technical SEO',
        'Link building tools',
        'Performance monitoring'
      ],
      price: '$89/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Marketing',
      marketPrice: '$399/month',
      savings: '78%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 20,
      support: '24/7'
    },
    {
      id: 'lead-generation-ai',
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Automated lead generation with AI prospecting, email sequences, and conversion optimization',
      features: [
        'AI prospecting',
        'Email sequences',
        'Lead scoring',
        'CRM integration',
        'A/B testing',
        'Analytics dashboard',
        'Compliance tools',
        'Multi-channel'
      ],
      price: '$199/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Marketing',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'ad-campaign-manager',
      icon: TrendingUp,
      title: 'AI Ad Campaign Manager',
      description: 'Intelligent ad campaign management with AI optimization across Google, Facebook, and LinkedIn',
      features: [
        'Multi-platform ads',
        'AI optimization',
        'A/B testing',
        'Budget management',
        'Audience targeting',
        'Creative testing',
        'Performance analytics',
        'Automated bidding'
      ],
      price: '$299/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$999/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 15,
      support: '24/7'
    },
    {
      id: 'landing-page-builder',
      icon: Layout,
      title: 'AI Landing Page Builder',
      description: 'Create high-converting landing pages with AI optimization and A/B testing capabilities',
      features: [
        'Drag-and-drop builder',
        'AI optimization',
        'A/B testing',
        'Mobile responsive',
        'Form builder',
        'Analytics integration',
        'Template library',
        'Conversion tracking'
      ],
      price: '$79/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$299/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'email-signature-manager',
      icon: Mail,
      title: 'Email Signature Manager',
      description: 'Professional email signature management with branding, tracking, and compliance features',
      features: [
        'Brand customization',
        'Click tracking',
        'Compliance tools',
        'Team management',
        'Template library',
        'Analytics dashboard',
        'Mobile optimization',
        'Integration hub'
      ],
      price: '$29/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$99/month',
      savings: '71%',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: 10,
      support: '24/7'
    },

    // Design & Creative Tools
    {
      id: 'ai-design-studio',
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools',
      features: [
        'AI design generation',
        'Logo creation',
        'Template library',
        'Brand kit',
        'Collaboration tools',
        'Export options',
        'Version control',
        'Stock photos'
      ],
      price: '$89/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Design',
      marketPrice: '$399/month',
      savings: '78%',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: 20,
      support: '24/7'
    },
    {
      id: 'video-editor-ai',
      icon: Video,
      title: 'AI Video Editor',
      description: 'Professional video editing with AI automation, effects, and multi-format export',
      features: [
        'AI automation',
        'Auto-editing',
        'Effects library',
        'Multi-format export',
        'Collaboration tools',
        'Cloud storage',
        'Mobile app',
        'Templates'
      ],
      price: '$149/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Design',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 15,
      support: '24/7'
    },
    {
      id: 'image-optimizer-ai',
      icon: Image,
      title: 'AI Image Optimizer',
      description: 'Intelligent image optimization with compression, format conversion, and quality enhancement',
      features: [
        'Smart compression',
        'Format conversion',
        'Quality enhancement',
        'Batch processing',
        'CDN integration',
        'API access',
        'Analytics',
        'Automation'
      ],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Design',
      marketPrice: '$149/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: 25,
      support: '24/7'
    },
    {
      id: 'brand-kit-manager',
      icon: Layers,
      title: 'Brand Kit Manager',
      description: 'Centralized brand asset management with guidelines, templates, and team collaboration',
      features: [
        'Asset management',
        'Brand guidelines',
        'Template library',
        'Team collaboration',
        'Version control',
        'Usage tracking',
        'Approval workflows',
        'Integration hub'
      ],
      price: '$59/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Design',
      marketPrice: '$199/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 20,
      support: '24/7'
    },

    // Development & Technical Tools
    {
      id: 'code-assistant-ai',
      icon: Code,
      title: 'AI Code Assistant',
      description: 'Intelligent code completion, debugging, and optimization for multiple programming languages',
      features: [
        'Code completion',
        'Bug detection',
        'Code optimization',
        'Multi-language support',
        'Documentation generation',
        'Refactoring tools',
        'Version control',
        'Team collaboration'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Development',
      marketPrice: '$399/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'api-builder-ai',
      icon: Database,
      title: 'AI API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: [
        'Visual API builder',
        'AI documentation',
        'Testing suite',
        'Rate limiting',
        'Authentication',
        'Monitoring',
        'Version control',
        'Team collaboration'
      ],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Development',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'bug-tracker-ai',
      icon: Bug,
      title: 'AI Bug Tracker',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: [
        'AI issue detection',
        'Priority scoring',
        'Resolution suggestions',
        'Team collaboration',
        'Integration hub',
        'Analytics dashboard',
        'Mobile app',
        'Automation'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Development',
      marketPrice: '$299/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 35,
      support: '24/7'
    },
    {
      id: 'performance-monitor',
      icon: Activity,
      title: 'AI Performance Monitor',
      description: 'Real-time application performance monitoring with AI insights and automated alerting',
      features: [
        'Real-time monitoring',
        'AI insights',
        'Automated alerting',
        'Error tracking',
        'Performance analytics',
        'Custom dashboards',
        'API monitoring',
        'Mobile monitoring'
      ],
      price: '$129/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Development',
      marketPrice: '$499/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 45,
      support: '24/7'
    },
    {
      id: 'security-scanner-ai',
      icon: Shield,
      title: 'AI Security Scanner',
      description: 'Automated security scanning with vulnerability detection, compliance checking, and remediation',
      features: [
        'Vulnerability scanning',
        'Compliance checking',
        'Threat detection',
        'Remediation guidance',
        'Security reports',
        'Continuous monitoring',
        'Integration hub',
        'Team collaboration'
      ],
      price: '$199/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 30,
      support: '24/7'
    },

    // Communication & Collaboration Tools
    {
      id: 'team-chat-ai',
      icon: MessageSquare,
      title: 'AI Team Chat',
      description: 'Intelligent team communication with AI moderation, translation, and productivity insights',
      features: [
        'AI moderation',
        'Real-time translation',
        'Productivity insights',
        'File sharing',
        'Video calls',
        'Screen sharing',
        'Mobile app',
        'Integration hub'
      ],
      price: '$59/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication',
      marketPrice: '$199/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: 25,
      support: '24/7'
    },
    {
      id: 'meeting-scheduler-ai',
      icon: Calendar,
      title: 'AI Meeting Scheduler',
      description: 'Smart meeting scheduling with AI optimization, conflict resolution, and time zone management',
      features: [
        'AI optimization',
        'Conflict resolution',
        'Time zone management',
        'Room booking',
        'Catering coordination',
        'Follow-up automation',
        'Analytics dashboard',
        'Mobile app'
      ],
      price: '$49/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Communication',
      marketPrice: '$199/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 20,
      support: '24/7'
    },
    {
      id: 'document-collaboration',
      icon: FileText,
      title: 'AI Document Collaboration',
      description: 'Advanced document collaboration with AI editing, version control, and real-time collaboration',
      features: [
        'Real-time collaboration',
        'AI editing assistance',
        'Version control',
        'Comment system',
        'Approval workflows',
        'Template library',
        'Mobile app',
        'Integration hub'
      ],
      price: '$89/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Communication',
      marketPrice: '$299/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'knowledge-base-ai',
      icon: BookOpen,
      title: 'AI Knowledge Base',
      description: 'Intelligent knowledge management with AI search, content suggestions, and team collaboration',
      features: [
        'AI search',
        'Content suggestions',
        'Team collaboration',
        'Version control',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub',
        'Custom branding'
      ],
      price: '$79/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Communication',
      marketPrice: '$299/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 25,
      support: '24/7'
    },

    // E-commerce & Sales Tools
    {
      id: 'ecommerce-analytics',
      icon: BarChart,
      title: 'AI E-commerce Analytics',
      description: 'Advanced e-commerce analytics with AI insights, customer behavior analysis, and sales optimization',
      features: [
        'Customer behavior analysis',
        'Sales optimization',
        'Inventory insights',
        'Conversion tracking',
        'A/B testing',
        'Predictive analytics',
        'Custom dashboards',
        'Mobile app'
      ],
      price: '$199/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'inventory-optimizer',
      icon: Package,
      title: 'AI Inventory Optimizer',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and cost optimization',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Cost optimization',
        'Multi-location support',
        'Supplier management',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub'
      ],
      price: '$179/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'E-commerce',
      marketPrice: '$699/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 35,
      support: '24/7'
    },
    {
      id: 'customer-support-ai',
      icon: Headphones,
      title: 'AI Customer Support',
      description: 'Intelligent customer support with AI chatbots, ticket management, and knowledge base integration',
      features: [
        'AI chatbots',
        'Ticket management',
        'Knowledge base',
        'Multi-channel support',
        'Analytics dashboard',
        'Team collaboration',
        'Mobile app',
        'Integration hub'
      ],
      price: '$149/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'pricing-optimizer',
      icon: DollarSign,
      title: 'AI Pricing Optimizer',
      description: 'Dynamic pricing optimization with AI analysis, competitor tracking, and revenue maximization',
      features: [
        'Dynamic pricing',
        'Competitor tracking',
        'Revenue optimization',
        'A/B testing',
        'Analytics dashboard',
        'Alert system',
        'Mobile app',
        'Integration hub'
      ],
      price: '$299/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'E-commerce',
      marketPrice: '$999/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '25 minutes',
      integrations: 20,
      support: '24/7'
    },

    // HR & People Management
    {
      id: 'hr-management-ai',
      icon: Users,
      title: 'AI HR Management',
      description: 'Comprehensive HR management with AI recruitment, employee analytics, and performance tracking',
      features: [
        'AI recruitment',
        'Employee analytics',
        'Performance tracking',
        'Time tracking',
        'Payroll integration',
        'Benefits management',
        'Compliance tools',
        'Mobile app'
      ],
      price: '$199/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'HR',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'employee-engagement',
      icon: Heart,
      title: 'AI Employee Engagement',
      description: 'Boost employee engagement with AI insights, feedback collection, and culture analytics',
      features: [
        'Engagement surveys',
        'AI insights',
        'Feedback collection',
        'Culture analytics',
        'Team collaboration',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub'
      ],
      price: '$89/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR',
      marketPrice: '$299/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 25,
      support: '24/7'
    },
    {
      id: 'time-tracking-ai',
      icon: Clock,
      title: 'AI Time Tracking',
      description: 'Intelligent time tracking with AI categorization, productivity insights, and automated reporting',
      features: [
        'AI categorization',
        'Productivity insights',
        'Automated reporting',
        'Project tracking',
        'Team collaboration',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub'
      ],
      price: '$59/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'HR',
      marketPrice: '$199/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 30,
      support: '24/7'
    },

    // Finance & Accounting Tools
    {
      id: 'accounting-ai',
      icon: Calculator,
      title: 'AI Accounting Suite',
      description: 'Comprehensive accounting with AI automation, expense tracking, and financial reporting',
      features: [
        'AI automation',
        'Expense tracking',
        'Financial reporting',
        'Tax preparation',
        'Invoice management',
        'Bank reconciliation',
        'Mobile app',
        'Integration hub'
      ],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Finance',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 35,
      support: '24/7'
    },
    {
      id: 'invoice-generator-ai',
      icon: FileText,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI optimization, payment tracking, and financial analytics',
      features: [
        'Automated creation',
        'AI optimization',
        'Payment tracking',
        'Financial analytics',
        'Template library',
        'Multi-currency',
        'Mobile app',
        'Integration hub'
      ],
      price: '$49/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$199/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 25,
      support: '24/7'
    },
    {
      id: 'budget-planner-ai',
      icon: PieChart,
      title: 'AI Budget Planner',
      description: 'Intelligent budget planning with AI insights, expense categorization, and financial forecasting',
      features: [
        'AI insights',
        'Expense categorization',
        'Financial forecasting',
        'Goal tracking',
        'Alert system',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$299/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 20,
      support: '24/7'
    },

    // Data & Analytics Tools
    {
      id: 'data-visualization-ai',
      icon: BarChart3,
      title: 'AI Data Visualization',
      description: 'Advanced data visualization with AI insights, interactive dashboards, and automated reporting',
      features: [
        'AI insights',
        'Interactive dashboards',
        'Automated reporting',
        'Data connectors',
        'Custom charts',
        'Collaboration tools',
        'Mobile app',
        'API access'
      ],
      price: '$129/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$499/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 50,
      support: '24/7'
    },
    {
      id: 'survey-builder-ai',
      icon: ClipboardList,
      title: 'AI Survey Builder',
      description: 'Create intelligent surveys with AI question suggestions, analytics, and automated insights',
      features: [
        'AI question suggestions',
        'Advanced analytics',
        'Automated insights',
        'Custom themes',
        'Multi-channel distribution',
        'Response tracking',
        'Data export',
        'Integration hub'
      ],
      price: '$69/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Analytics',
      marketPrice: '$249/month',
      savings: '72%',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'competitor-analysis-ai',
      icon: Search,
      title: 'AI Competitor Analysis',
      description: 'Comprehensive competitor analysis with AI insights, market tracking, and strategic recommendations',
      features: [
        'AI insights',
        'Market tracking',
        'Strategic recommendations',
        'Price monitoring',
        'Feature comparison',
        'Analytics dashboard',
        'Alert system',
        'Integration hub'
      ],
      price: '$199/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Analytics',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 25,
      support: '24/7'
    },

    // Security & Compliance Tools
    {
      id: 'security-audit-ai',
      icon: Shield,
      title: 'AI Security Audit',
      description: 'Comprehensive security auditing with AI threat detection, compliance checking, and remediation',
      features: [
        'AI threat detection',
        'Compliance checking',
        'Vulnerability scanning',
        'Remediation guidance',
        'Security reports',
        'Continuous monitoring',
        'Team collaboration',
        'Integration hub'
      ],
      price: '$299/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Security',
      marketPrice: '$999/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '25 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'compliance-manager-ai',
      icon: CheckCircle,
      title: 'AI Compliance Manager',
      description: 'Automated compliance management with AI monitoring, reporting, and regulatory updates',
      features: [
        'AI monitoring',
        'Automated reporting',
        'Regulatory updates',
        'Risk assessment',
        'Audit trails',
        'Team collaboration',
        'Mobile app',
        'Integration hub'
      ],
      price: '$249/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Security',
      marketPrice: '$799/month',
      savings: '69%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 35,
      support: '24/7'
    },

    // Cloud & Infrastructure Tools
    {
      id: 'cloud-monitor-ai',
      icon: Cloud,
      title: 'AI Cloud Monitor',
      description: 'Intelligent cloud monitoring with AI insights, cost optimization, and automated scaling',
      features: [
        'AI insights',
        'Cost optimization',
        'Automated scaling',
        'Performance monitoring',
        'Alert system',
        'Analytics dashboard',
        'Multi-cloud support',
        'Integration hub'
      ],
      price: '$179/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Cloud',
      marketPrice: '$699/month',
      savings: '74%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 45,
      support: '24/7'
    },
    {
      id: 'backup-manager-ai',
      icon: HardDrive,
      title: 'AI Backup Manager',
      description: 'Intelligent backup management with AI optimization, disaster recovery, and compliance features',
      features: [
        'AI optimization',
        'Disaster recovery',
        'Compliance features',
        'Automated scheduling',
        'Version control',
        'Analytics dashboard',
        'Multi-cloud support',
        'Integration hub'
      ],
      price: '$99/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Cloud',
      marketPrice: '$399/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 30,
      support: '24/7'
    },

    // Mobile & App Development Tools
    {
      id: 'mobile-app-builder',
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'Create native mobile apps with AI assistance, drag-and-drop interface, and instant deployment',
      features: [
        'Drag-and-drop builder',
        'AI assistance',
        'Native apps',
        'Instant deployment',
        'Template library',
        'Analytics integration',
        'Push notifications',
        'App store publishing'
      ],
      price: '$199/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Mobile',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 25,
      support: '24/7'
    },
    {
      id: 'app-analytics-ai',
      icon: BarChart,
      title: 'AI App Analytics',
      description: 'Advanced app analytics with AI insights, user behavior analysis, and performance optimization',
      features: [
        'AI insights',
        'User behavior analysis',
        'Performance optimization',
        'Crash reporting',
        'A/B testing',
        'Custom dashboards',
        'Real-time monitoring',
        'Integration hub'
      ],
      price: '$149/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Mobile',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 35,
      support: '24/7'
    },

    // IoT & Hardware Tools
    {
      id: 'iot-manager-ai',
      icon: Wifi,
      title: 'AI IoT Manager',
      description: 'Comprehensive IoT device management with AI monitoring, automation, and predictive maintenance',
      features: [
        'Device management',
        'AI monitoring',
        'Automation',
        'Predictive maintenance',
        'Data analytics',
        'Alert system',
        'Mobile app',
        'Integration hub'
      ],
      price: '$299/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'IoT',
      marketPrice: '$999/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '25 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'sensor-analytics-ai',
      icon: Activity,
      title: 'AI Sensor Analytics',
      description: 'Advanced sensor data analysis with AI insights, anomaly detection, and predictive analytics',
      features: [
        'Data analysis',
        'AI insights',
        'Anomaly detection',
        'Predictive analytics',
        'Real-time monitoring',
        'Alert system',
        'Custom dashboards',
        'Integration hub'
      ],
      price: '$199/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'IoT',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 30,
      support: '24/7'
    },

    // Education & Training Tools
    {
      id: 'learning-management-ai',
      icon: BookOpen,
      title: 'AI Learning Management',
      description: 'Intelligent learning management with AI personalization, progress tracking, and automated assessments',
      features: [
        'AI personalization',
        'Progress tracking',
        'Automated assessments',
        'Content creation',
        'Team collaboration',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub'
      ],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Education',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'training-builder-ai',
      icon: GraduationCap,
      title: 'AI Training Builder',
      description: 'Create interactive training content with AI assistance, multimedia support, and assessment tools',
      features: [
        'AI assistance',
        'Multimedia support',
        'Assessment tools',
        'Interactive content',
        'Team collaboration',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Education',
      marketPrice: '$399/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 25,
      support: '24/7'
    },

    // Healthcare & Medical Tools
    {
      id: 'patient-management-ai',
      icon: Heart,
      title: 'AI Patient Management',
      description: 'Comprehensive patient management with AI insights, appointment scheduling, and health tracking',
      features: [
        'AI insights',
        'Appointment scheduling',
        'Health tracking',
        'Medical records',
        'Billing integration',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub'
      ],
      price: '$299/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Healthcare',
      marketPrice: '$999/month',
      savings: '70%',
      trialDays: 14,
      setupTime: '25 minutes',
      integrations: 40,
      support: '24/7'
    },
    {
      id: 'medical-imaging-ai',
      icon: Camera,
      title: 'AI Medical Imaging',
      description: 'Advanced medical imaging analysis with AI diagnosis assistance and automated reporting',
      features: [
        'AI diagnosis assistance',
        'Automated reporting',
        'Image enhancement',
        'Comparison tools',
        'Analytics dashboard',
        'Team collaboration',
        'Mobile app',
        'Integration hub'
      ],
      price: '$499/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Healthcare',
      marketPrice: '$1999/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '30 minutes',
      integrations: 35,
      support: '24/7'
    },

    // Real Estate & Property Tools
    {
      id: 'property-management-ai',
      icon: Home,
      title: 'AI Property Management',
      description: 'Intelligent property management with AI insights, tenant screening, and maintenance optimization',
      features: [
        'AI insights',
        'Tenant screening',
        'Maintenance optimization',
        'Rent tracking',
        'Analytics dashboard',
        'Mobile app',
        'Integration hub',
        'Compliance tools'
      ],
      price: '$199/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Real Estate',
      marketPrice: '$799/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: 30,
      support: '24/7'
    },
    {
      id: 'market-analysis-ai',
      icon: TrendingUp,
      title: 'AI Market Analysis',
      description: 'Advanced real estate market analysis with AI insights, price predictions, and investment recommendations',
      features: [
        'AI insights',
        'Price predictions',
        'Investment recommendations',
        'Market trends',
        'Analytics dashboard',
        'Alert system',
        'Mobile app',
        'Integration hub'
      ],
      price: '$149/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Real Estate',
      marketPrice: '$599/month',
      savings: '75%',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: 25,
      support: '24/7'
    }
  ];

  const categories = [
    'All',
    'AI & ML',
    'Business',
    'Marketing',
    'Design',
    'Development',
    'Communication',
    'E-commerce',
    'HR',
    'Finance',
    'Analytics',
    'Security',
    'Cloud',
    'Mobile',
    'IoT',
    'Education',
    'Healthcare',
    'Real Estate'
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
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
  }, [products, selectedCategory, searchTerm, sortBy]);

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '50+', label: 'Micro SaaS Tools' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '75%', label: 'Average Savings' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'Support' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs with 75% average savings." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, CRM, marketing automation" />
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
              Discover our collection of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Quick setup, affordable pricing, powerful features with 75% average savings.
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

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Tools' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} tool{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
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
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                        <div className="text-sm text-green-400 font-semibold">Save {product.savings}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{product.users}</div>
                        <div className="text-xs text-gray-500">{product.trialDays}-day free trial</div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-center text-sm">
                    <div>
                      <div className="text-gray-400">Setup Time</div>
                      <div className="text-white font-semibold">{product.setupTime}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Integrations</div>
                      <div className="text-white font-semibold">{product.integrations}+</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No tools found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Get started in minutes with our intuitive setup process and comprehensive onboarding.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cost Effective</h3>
                <p className="text-gray-300">Save up to 75% compared to enterprise solutions with our competitive pricing.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee and 24/7 monitoring.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Get help when you need it with our dedicated support team and comprehensive documentation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  View All Plans
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

export default MicroSaasPage;