'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  FileText, 
  Settings, 
  Target, 
  Award, 
  Globe, 
  Smartphone, 
  Lock, 
  Database, 
  Cpu, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  Gamepad2, 
  ShoppingCart, 
  CreditCard, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Compass, 
  Navigation as NavIcon, 
  PieChart, 
  TrendingDown, 
  Activity, 
  Zap as Lightning, 
  Target as Crosshair, 
  Shield as Security, 
  Users as People, 
  Star as StarIcon, 
  CheckCircle as Check, 
  ArrowRight as Arrow, 
  Phone as PhoneIcon, 
  Mail as MailIcon, 
  MapPin as Location, 
  Truck, 
  Smartphone as Mobile, 
  ChefHat, 
  Rocket, 
  Sprout, 
  Scale,
  MessageSquare,
  ExternalLink,
  Play,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  AlertCircle,
  Info,
  HelpCircle,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  Save,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Heart as HeartIcon,
  Bookmark,
  Flag,
  Bell,
  Settings as SettingsIcon,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  UserCircle,
  UserSquare,
  Crown,
  Award as AwardIcon,
  Medal,
  Trophy,
  Gift,
  Package,
  Box,
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
  FileZip,
  FileCode,
  FileJson,
  FileXml,
  FileCsv,
  FileDatabase,
  FileSpreadsheet,
  FilePresentation,
  FileDocument,
  FileArchive,
  FileDownload,
  FileUpload,
  FileEdit,
  FileCopy,
  FileMove,
  FileDelete,
  FileRename,
  FileShare,
  FileLock,
  FileUnlock,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileSearch,
  FileFilter,
  FileSort,
  FileRefresh,
  FileSave,
  FileOpen,
  FileClose,
  FileNew,
  FileImport,
  FileExport,
  FileSync,
  FileBackup,
  FileRestore,
  FileCompress,
  FileExtract,
  FileConvert,
  FileMerge,
  FileSplit,
  FileCompare,
  FileValidate,
  FileOptimize,
  FileSecure,
  FileEncrypt,
  FileDecrypt,
  FileSign,
  FileVerify,
  FileTimestamp,
  FileVersion,
  FileHistory,
  FileLog,
  FileReport,
  FileAnalytics,
  FileInsights,
  FileMetrics,
  FileStats,
  FileDashboard,
  FileChart,
  FileGraph,
  FileTable,
  FileList,
  FileGrid,
  FileTree,
  FileMap,
  FileTimeline,
  FileCalendar,
  FileSchedule,
  FileTask,
  FileTodo,
  FileNote,
  FileMemo,
  FileComment,
  FileFeedback,
  FileReview,
  FileApproval,
  FileRejection,
  FileAcceptance,
  FileRejection as FileReject,
  FilePending,
  FileProcessing,
  FileCompleted,
  FileFailed,
  FileError,
  FileWarning,
  FileInfo,
  FileSuccess,
  FileCancel,
  FilePause,
  FileResume,
  FileStop,
  FileStart,
  FileRestart,
  FileReset,
  FileClear,
  FileEmpty,
  FileFull,
  FilePartial,
  FileIncomplete,
  FileBroken,
  FileCorrupt,
  FileDamaged,
  FileLost,
  FileMissing,
  FileNotFound,
  FileAccess,
  FilePermission,
  FileOwnership,
  FileGroup,
  FilePublic,
  FilePrivate,
  FileShared,
  FilePersonal,
  FileWork,
  FileBusiness,
  FileProject,
  FileTeam,
  FileOrganization,
  FileCompany,
  FileEnterprise,
  FileCorporate,
  FileInstitutional,
  FileGovernment,
  FileEducational,
  FileAcademic,
  FileResearch,
  FileScientific,
  FileMedical,
  FileHealthcare,
  FileLegal,
  FileFinancial,
  FileAccounting,
  FileBanking,
  FileInsurance,
  FileRealEstate,
  FileConstruction,
  FileManufacturing,
  FileRetail,
  FileEcommerce,
  FileMarketing,
  FileSales,
  FileCustomer,
  FileClient,
  FileVendor,
  FileSupplier,
  FilePartner,
  FileContract,
  FileAgreement,
  FileTerms,
  FilePolicy,
  FileProcedure,
  FileGuideline,
  FileStandard,
  FileSpecification,
  FileRequirement,
  FileCriteria,
  FileChecklist,
  FileTemplate,
  FileForm,
  FileApplication,
  FileRegistration,
  FileEnrollment,
  FileSubscription,
  FileMembership,
  FileAccount,
  FileProfile,
  FileIdentity,
  FileCredential,
  FileCertificate,
  FileLicense,
  FilePermit,
  FileAuthorization,
  FileApproval,
  FileConsent,
  FileAgreement as FileConsentAgreement,
  FileWaiver,
  FileRelease,
  FileDisclosure,
  FilePrivacy,
  FileConfidential,
  FileSecret,
  FileProprietary,
  FileIntellectual,
  FilePatent,
  FileTrademark,
  FileCopyright,
  FileLicense as FileIPLicense,
  FileRoyalty,
  FileFee,
  FilePayment,
  FileInvoice,
  FileReceipt,
  FileBill,
  FileStatement,
  FileReport as FileFinancialReport,
  FileTax,
  FileAudit,
  FileCompliance,
  FileRegulation,
  FileLaw,
  FileLegal as FileLegalDocument,
  FileCourt,
  FileJudgment,
  FileSettlement,
  FileArbitration,
  FileMediation,
  FileNegotiation,
  FileContract as FileLegalContract,
  FileAgreement as FileLegalAgreement,
  FileTerms as FileLegalTerms,
  FilePolicy as FileLegalPolicy,
  FileProcedure as FileLegalProcedure,
  FileGuideline as FileLegalGuideline,
  FileStandard as FileLegalStandard,
  FileSpecification as FileLegalSpecification,
  FileRequirement as FileLegalRequirement,
  FileCriteria as FileLegalCriteria,
  FileChecklist as FileLegalChecklist,
  FileTemplate as FileLegalTemplate,
  FileForm as FileLegalForm,
  FileApplication as FileLegalApplication,
  FileRegistration as FileLegalRegistration,
  FileEnrollment as FileLegalEnrollment,
  FileSubscription as FileLegalSubscription,
  FileMembership as FileLegalMembership,
  FileAccount as FileLegalAccount,
  FileProfile as FileLegalProfile,
  FileIdentity as FileLegalIdentity,
  FileCredential as FileLegalCredential,
  FileCertificate as FileLegalCertificate,
  FileLicense as FileLegalLicense,
  FilePermit as FileLegalPermit,
  FileAuthorization as FileLegalAuthorization,
  FileApproval as FileLegalApproval,
  FileConsent as FileLegalConsent,
  FileAgreement as FileLegalConsentAgreement,
  FileWaiver as FileLegalWaiver,
  FileRelease as FileLegalRelease,
  FileDisclosure as FileLegalDisclosure,
  FilePrivacy as FileLegalPrivacy,
  FileConfidential as FileLegalConfidential,
  FileSecret as FileLegalSecret,
  FileProprietary as FileLegalProprietary,
  FileIntellectual as FileLegalIntellectual,
  FilePatent as FileLegalPatent,
  FileTrademark as FileLegalTrademark,
  FileCopyright as FileLegalCopyright,
  FileLicense as FileLegalIPLicense,
  FileRoyalty as FileLegalRoyalty,
  FileFee as FileLegalFee,
  FilePayment as FileLegalPayment,
  FileInvoice as FileLegalInvoice,
  FileReceipt as FileLegalReceipt,
  FileBill as FileLegalBill,
  FileStatement as FileLegalStatement,
  FileReport as FileLegalFinancialReport,
  FileTax as FileLegalTax,
  FileAudit as FileLegalAudit,
  FileCompliance as FileLegalCompliance,
  FileRegulation as FileLegalRegulation,
  FileLaw as FileLegalLaw,
  FileLegal as FileLegalDocument,
  FileCourt as FileLegalCourt,
  FileJudgment as FileLegalJudgment,
  FileSettlement as FileLegalSettlement,
  FileArbitration as FileLegalArbitration,
  FileMediation as FileLegalMediation,
  FileNegotiation as FileLegalNegotiation,
  FileContract as FileLegalContract,
  FileAgreement as FileLegalAgreement,
  FileTerms as FileLegalTerms,
  FilePolicy as FileLegalPolicy,
  FileProcedure as FileLegalProcedure,
  FileGuideline as FileLegalGuideline,
  FileStandard as FileLegalStandard,
  FileSpecification as FileLegalSpecification,
  FileRequirement as FileLegalRequirement,
  FileCriteria as FileLegalCriteria,
  FileChecklist as FileLegalChecklist,
  FileTemplate as FileLegalTemplate,
  FileForm as FileLegalForm,
  FileApplication as FileLegalApplication,
  FileRegistration as FileLegalRegistration,
  FileEnrollment as FileLegalEnrollment,
  FileSubscription as FileLegalSubscription,
  FileMembership as FileLegalMembership,
  FileAccount as FileLegalAccount,
  FileProfile as FileLegalProfile,
  FileIdentity as FileLegalIdentity,
  FileCredential as FileLegalCredential,
  FileCertificate as FileLegalCertificate,
  FileLicense as FileLegalLicense,
  FilePermit as FileLegalPermit,
  FileAuthorization as FileLegalAuthorization,
  FileApproval as FileLegalApproval,
  FileConsent as FileLegalConsent,
  FileAgreement as FileLegalConsentAgreement,
  FileWaiver as FileLegalWaiver,
  FileRelease as FileLegalRelease,
  FileDisclosure as FileLegalDisclosure,
  FilePrivacy as FileLegalPrivacy,
  FileConfidential as FileLegalConfidential,
  FileSecret as FileLegalSecret,
  FileProprietary as FileLegalProprietary,
  FileIntellectual as FileLegalIntellectual,
  FilePatent as FileLegalPatent,
  FileTrademark as FileLegalTrademark,
  FileCopyright as FileLegalCopyright,
  FileLicense as FileLegalIPLicense,
  FileRoyalty as FileLegalRoyalty,
  FileFee as FileLegalFee,
  FilePayment as FileLegalPayment,
  FileInvoice as FileLegalInvoice,
  FileReceipt as FileLegalReceipt,
  FileBill as FileLegalBill,
  FileStatement as FileLegalStatement,
  FileReport as FileLegalFinancialReport,
  FileTax as FileLegalTax,
  FileAudit as FileLegalAudit,
  FileCompliance as FileLegalCompliance,
  FileRegulation as FileLegalRegulation,
  FileLaw as FileLegalLaw,
  FileLegal as FileLegalDocument,
  FileCourt as FileLegalCourt,
  FileJudgment as FileLegalJudgment,
  FileSettlement as FileLegalSettlement,
  FileArbitration as FileLegalArbitration,
  FileMediation as FileLegalMediation,
  FileNegotiation as FileLegalNegotiation
} from 'lucide-react';

interface MicroSAASService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: React.ReactNode;
  popular?: boolean;
  comingSoon?: boolean;
  marketPrice?: string;
  benefits: string[];
  technologies: string[];
  contactInfo: string;
  link: string;
  trial: string;
  roi: string;
}

const microSAASServices: MicroSAASService[] = [
  // AI-Powered Business Tools
  {
    id: 'ai-project-manager-pro',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with predictive analytics, automated resource allocation, and smart task prioritization.',
    features: [
      'AI-powered task prioritization',
      'Predictive timeline forecasting',
      'Automated resource allocation',
      'Risk prediction and mitigation',
      'Team workload balancing',
      'Progress tracking and analytics',
      'Stakeholder communication automation',
      'Integration with 100+ tools',
      'Custom workflow automation',
      'Real-time collaboration'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 0 },
    category: 'AI Business Tools',
    icon: <Target className="w-8 h-8" />,
    popular: true,
    marketPrice: '$500-800/month',
    benefits: [
      '300% increase in project completion rates',
      '40% reduction in project delays',
      '50% improvement in resource utilization',
      '90% accuracy in timeline predictions'
    ],
    technologies: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'API Integrations', 'Real-time Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-project-manager-pro',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media content creation, scheduling, and engagement optimization across all platforms.',
    features: [
      'AI content generation for all platforms',
      'Optimal posting time prediction',
      'Hashtag optimization and research',
      'Engagement analytics and insights',
      'Multi-platform management (Facebook, Instagram, Twitter, LinkedIn, TikTok)',
      'Competitor analysis and monitoring',
      'Influencer collaboration tools',
      'White-label options',
      'Automated responses and engagement',
      'Performance tracking and reporting'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'AI Marketing Tools',
    icon: <Share2 className="w-8 h-8" />,
    popular: true,
    marketPrice: '$300-600/month',
    benefits: [
      '250% increase in engagement rates',
      '60% time savings on content creation',
      '40% improvement in follower growth',
      '80% better post performance'
    ],
    technologies: ['Natural Language Processing', 'Computer Vision', 'Social Media APIs', 'Analytics Engine', 'Content Optimization'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Real-time business intelligence with predictive insights, automated reporting, and custom dashboards.',
    features: [
      'Real-time data processing and visualization',
      'Predictive analytics and forecasting',
      'Custom dashboard creation',
      'Automated report generation',
      'Natural language queries',
      'Multi-data source integration',
      'Advanced machine learning models',
      '24/7 monitoring and alerts',
      'Mobile app for on-the-go insights',
      'White-label reporting'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 0 },
    category: 'AI Analytics',
    icon: <BarChart className="w-8 h-8" />,
    popular: true,
    marketPrice: '$600-1200/month',
    benefits: [
      '400% improvement in decision-making speed',
      '90% reduction in manual reporting time',
      '300% increase in data accuracy',
      '500% better business insights'
    ],
    technologies: ['Machine Learning', 'Data Visualization', 'Real-time Processing', 'Predictive Analytics', 'API Integrations'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    trial: '14-day free trial',
    roi: '400% ROI in 4 months'
  },
  {
    id: 'ai-email-marketing-suite',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization.',
    features: [
      'AI-powered subject line optimization',
      'Dynamic content personalization',
      'Send time optimization',
      'A/B testing automation',
      'Advanced segmentation',
      'Deliverability monitoring',
      'Revenue attribution tracking',
      'Unlimited sends',
      'Template library with AI suggestions',
      'Advanced analytics and reporting'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 0 },
    category: 'AI Marketing Tools',
    icon: <Mail className="w-8 h-8" />,
    popular: false,
    marketPrice: '$200-500/month',
    benefits: [
      '200% increase in open rates',
      '150% improvement in click-through rates',
      '300% better conversion rates',
      '50% reduction in unsubscribes'
    ],
    technologies: ['Machine Learning', 'Email APIs', 'Personalization Engine', 'A/B Testing', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-email-marketing-suite',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months'
  },

  // Customer Experience Solutions
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot',
    description: '24/7 intelligent customer support with natural language processing, sentiment analysis, and seamless human handoff.',
    features: [
      '24/7 AI chatbot with human-like responses',
      'Multi-language support (50+ languages)',
      'Sentiment analysis and mood detection',
      'Escalation management to human agents',
      'Knowledge base integration',
      'Ticket routing and prioritization',
      'Performance analytics and insights',
      'Custom training and fine-tuning',
      'Voice and text support',
      'Integration with CRM systems'
    ],
    pricing: { monthly: 249, yearly: 2490, setup: 0 },
    category: 'AI Customer Service',
    icon: <MessageSquare className="w-8 h-8" />,
    popular: true,
    marketPrice: '$400-800/month',
    benefits: [
      '350% improvement in response time',
      '80% reduction in support costs',
      '95% customer satisfaction rate',
      '90% query resolution without human intervention'
    ],
    technologies: ['Natural Language Processing', 'Machine Learning', 'Sentiment Analysis', 'Chatbot APIs', 'CRM Integration'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months'
  },
  {
    id: 'ai-lead-generation-engine',
    name: 'AI Lead Generation Engine',
    description: 'Automated lead identification, qualification, and nurturing with AI-powered scoring and outreach.',
    features: [
      'AI-powered lead scoring and qualification',
      'Automated outreach and follow-up',
      'Multi-channel lead capture',
      'CRM integration and synchronization',
      'Performance tracking and analytics',
      'Custom qualification logic',
      'Email and phone number validation',
      'Lead enrichment and data enhancement',
      'A/B testing for outreach campaigns',
      'ROI tracking and reporting'
    ],
    pricing: { monthly: 349, yearly: 3490, setup: 0 },
    category: 'AI Sales Tools',
    icon: <Target className="w-8 h-8" />,
    popular: true,
    marketPrice: '$500-1000/month',
    benefits: [
      '450% increase in qualified leads',
      '200% improvement in conversion rates',
      '60% reduction in lead acquisition costs',
      '300% better lead quality'
    ],
    technologies: ['Machine Learning', 'Lead Scoring', 'CRM APIs', 'Email Validation', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-lead-generation-engine',
    trial: '14-day free trial',
    roi: '450% ROI in 6 months'
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'No-code chatbot creation platform with advanced conversation flows, integrations, and analytics.',
    features: [
      'Drag-and-drop chatbot builder',
      'Multi-channel deployment (web, mobile, social)',
      'Advanced conversation flows',
      'Analytics dashboard and insights',
      'Integration with 200+ tools',
      'Custom templates and themes',
      'Voice and text support',
      'A/B testing capabilities',
      'White-label options',
      '24/7 customer support'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 0 },
    category: 'AI Development Tools',
    icon: <Bot className="w-8 h-8" />,
    popular: false,
    marketPrice: '$150-400/month',
    benefits: [
      '150% improvement in customer engagement',
      '70% reduction in support workload',
      '200% increase in lead generation',
      '90% customer satisfaction rate'
    ],
    technologies: ['Natural Language Processing', 'No-code Platform', 'API Integrations', 'Analytics', 'Multi-channel Support'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-chatbot-builder',
    trial: '7-day free trial',
    roi: '150% ROI in 2 months'
  },

  // Content & Marketing Automation
  {
    id: 'ai-content-studio',
    name: 'AI Content Studio',
    description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support.',
    features: [
      'AI writing assistant for all content types',
      'Content optimization and SEO analysis',
      'Brand voice training and consistency',
      'Multi-format support (blog, social, email, ads)',
      'Plagiarism detection and originality scoring',
      'Content calendar and scheduling',
      'Team collaboration and approval workflows',
      'Performance tracking and analytics',
      'Template library and customization',
      'Multi-language content generation'
    ],
    pricing: { monthly: 179, yearly: 1790, setup: 0 },
    category: 'AI Content Tools',
    icon: <FileText className="w-8 h-8" />,
    popular: true,
    marketPrice: '$300-600/month',
    benefits: [
      '200% increase in content production',
      '80% improvement in SEO performance',
      '150% better engagement rates',
      '60% reduction in content creation time'
    ],
    technologies: ['Natural Language Processing', 'SEO Analysis', 'Content Optimization', 'Plagiarism Detection', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-content-studio',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations.',
    features: [
      'Advanced keyword research and analysis',
      'Content optimization recommendations',
      'Technical SEO audit and fixes',
      'Competitor analysis and monitoring',
      'Rank tracking and reporting',
      'Backlink analysis and opportunities',
      'Local SEO optimization',
      'Schema markup generation',
      'Site speed optimization',
      'Mobile-first indexing optimization'
    ],
    pricing: { monthly: 129, yearly: 1290, setup: 0 },
    category: 'AI SEO Tools',
    icon: <Search className="w-8 h-8" />,
    popular: false,
    marketPrice: '$200-500/month',
    benefits: [
      '180% improvement in organic traffic',
      '120% increase in keyword rankings',
      '90% better content performance',
      '70% reduction in technical SEO issues'
    ],
    technologies: ['SEO Analysis', 'Keyword Research', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    trial: '7-day free trial',
    roi: '180% ROI in 4 months'
  },
  {
    id: 'ai-social-media-analytics',
    name: 'AI Social Media Analytics',
    description: 'Advanced social media performance tracking with sentiment analysis, trend prediction, and ROI measurement.',
    features: [
      'Comprehensive performance tracking',
      'Sentiment analysis and brand monitoring',
      'Trend prediction and insights',
      'Competitor analysis and benchmarking',
      'ROI measurement and attribution',
      'Influencer identification and tracking',
      'Crisis detection and alerts',
      'Custom reporting and dashboards',
      'Multi-platform analytics',
      'White-label reporting options'
    ],
    pricing: { monthly: 159, yearly: 1590, setup: 0 },
    category: 'AI Analytics',
    icon: <BarChart className="w-8 h-8" />,
    popular: false,
    marketPrice: '$250-600/month',
    benefits: [
      '220% improvement in social media ROI',
      '150% better understanding of audience',
      '100% increase in engagement rates',
      '80% reduction in crisis response time'
    ],
    technologies: ['Social Media APIs', 'Sentiment Analysis', 'Trend Analysis', 'ROI Tracking', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-social-media-analytics',
    trial: '7-day free trial',
    roi: '220% ROI in 3 months'
  },

  // Financial & Business Intelligence
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator',
    description: 'Automated invoice creation, tracking, and payment processing with smart reminders and analytics.',
    features: [
      'Automated invoice generation and sending',
      'Payment tracking and reminders',
      'Multi-currency support',
      'Tax calculation and compliance',
      'Integration with accounting software',
      'Custom branding and templates',
      'Recurring invoice automation',
      'Payment gateway integration',
      'Analytics and reporting',
      'Mobile app for on-the-go management'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 0 },
    category: 'AI Financial Tools',
    icon: <CreditCard className="w-8 h-8" />,
    popular: false,
    marketPrice: '$120-300/month',
    benefits: [
      '120% improvement in payment speed',
      '90% reduction in late payments',
      '200% increase in invoice accuracy',
      '70% reduction in administrative time'
    ],
    technologies: ['Invoice Generation', 'Payment Processing', 'Accounting Integration', 'Tax Calculation', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-invoice-generator',
    trial: '7-day free trial',
    roi: '120% ROI in 2 months'
  },
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker',
    description: 'Intelligent expense categorization, receipt scanning, and budget management with mobile app.',
    features: [
      'Receipt scanning and OCR technology',
      'Automatic expense categorization',
      'Budget monitoring and alerts',
      'Tax preparation and reporting',
      'Multi-currency support',
      'Team and employee management',
      'Approval workflows',
      'Integration with accounting software',
      'Mobile app for receipt capture',
      'Advanced analytics and insights'
    ],
    pricing: { monthly: 59, yearly: 590, setup: 0 },
    category: 'AI Financial Tools',
    icon: <DollarSign className="w-8 h-8" />,
    popular: false,
    marketPrice: '$100-250/month',
    benefits: [
      '100% improvement in expense accuracy',
      '80% reduction in manual data entry',
      '150% better budget control',
      '90% faster tax preparation'
    ],
    technologies: ['OCR Technology', 'Expense Categorization', 'Budget Management', 'Tax Preparation', 'Mobile App'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-expense-tracker',
    trial: '7-day free trial',
    roi: '100% ROI in 1 month'
  },
  {
    id: 'ai-financial-advisor',
    name: 'AI Financial Advisor',
    description: 'Personalized financial planning and investment recommendations based on AI analysis and market insights.',
    features: [
      'Portfolio analysis and optimization',
      'Risk assessment and management',
      'Investment recommendations',
      'Goal tracking and planning',
      'Market insights and analysis',
      'Tax optimization strategies',
      'Retirement planning',
      'Insurance recommendations',
      'Real-time market monitoring',
      'Personalized financial reports'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'AI Financial Tools',
    icon: <TrendingUp className="w-8 h-8" />,
    popular: true,
    marketPrice: '$300-800/month',
    benefits: [
      '300% improvement in investment returns',
      '200% better risk management',
      '150% increase in financial planning accuracy',
      '100% reduction in financial stress'
    ],
    technologies: ['Machine Learning', 'Portfolio Analysis', 'Risk Assessment', 'Market Analysis', 'Financial Planning'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-financial-advisor',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months'
  },

  // Productivity & Workflow Tools
  {
    id: 'ai-scheduler-pro',
    name: 'AI Scheduler Pro',
    description: 'Intelligent meeting scheduling with conflict resolution, time zone management, and calendar optimization.',
    features: [
      'Smart scheduling with conflict resolution',
      'Time zone management and conversion',
      'Calendar integration (Google, Outlook, Apple)',
      'Meeting analytics and insights',
      'Automated follow-up and reminders',
      'Resource booking and management',
      'Team availability optimization',
      'Custom scheduling rules and preferences',
      'Mobile app for on-the-go scheduling',
      'Integration with video conferencing tools'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 0 },
    category: 'AI Productivity Tools',
    icon: <Calendar className="w-8 h-8" />,
    popular: false,
    marketPrice: '$150-400/month',
    benefits: [
      '140% improvement in scheduling efficiency',
      '90% reduction in scheduling conflicts',
      '200% better time management',
      '80% reduction in no-shows'
    ],
    technologies: ['Calendar APIs', 'Time Zone Management', 'Conflict Resolution', 'Analytics', 'Mobile App'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-scheduler-pro',
    trial: '7-day free trial',
    roi: '140% ROI in 2 months'
  },
  {
    id: 'ai-password-manager',
    name: 'AI Password Manager',
    description: 'Secure password management with AI-powered security recommendations, breach monitoring, and team sharing.',
    features: [
      'Secure password storage and generation',
      'AI-powered security recommendations',
      'Breach monitoring and alerts',
      'Multi-device synchronization',
      'Team sharing and collaboration',
      'Two-factor authentication',
      'Password strength analysis',
      'Automatic password updates',
      'Secure sharing and inheritance',
      'Advanced security reporting'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'AI Security Tools',
    icon: <Lock className="w-8 h-8" />,
    popular: false,
    marketPrice: '$60-150/month',
    benefits: [
      '80% improvement in password security',
      '100% reduction in password-related breaches',
      '200% better security compliance',
      '90% reduction in password management time'
    ],
    technologies: ['Password Security', 'Breach Monitoring', 'Encryption', 'Team Collaboration', 'Security Analysis'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-password-manager',
    trial: '7-day free trial',
    roi: '80% ROI in 1 month'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation',
    description: 'Visual workflow builder with AI-powered process optimization, integration capabilities, and performance analytics.',
    features: [
      'Visual workflow builder and designer',
      'AI-powered process optimization',
      'Integration with 500+ applications',
      'Performance analytics and insights',
      'Custom triggers and conditions',
      'Error handling and recovery',
      'Team collaboration and sharing',
      'Template library and marketplace',
      'Mobile app for workflow management',
      'White-label and customization options'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 0 },
    category: 'AI Automation Tools',
    icon: <Zap className="w-8 h-8" />,
    popular: true,
    marketPrice: '$500-1000/month',
    benefits: [
      '400% improvement in process efficiency',
      '300% reduction in manual work',
      '200% better error handling',
      '500% increase in automation coverage'
    ],
    technologies: ['Workflow Automation', 'Process Optimization', 'API Integrations', 'Analytics', 'Visual Builder'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-workflow-automation',
    trial: '14-day free trial',
    roi: '400% ROI in 5 months'
  },

  // E-commerce & Sales Tools
  {
    id: 'ai-ecommerce-optimizer',
    name: 'AI E-commerce Optimizer',
    description: 'Boost your online store performance with AI-powered product recommendations, pricing optimization, and conversion analysis.',
    features: [
      'Dynamic pricing optimization',
      'Product recommendation engine',
      'Inventory forecasting and management',
      'Customer behavior analysis',
      'A/B testing automation',
      'Conversion rate optimization',
      'Fraud detection and prevention',
      'Multi-channel synchronization',
      'Personalized shopping experiences',
      'Advanced analytics and reporting'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'AI E-commerce Tools',
    icon: <ShoppingCart className="w-8 h-8" />,
    popular: true,
    marketPrice: '$400-800/month',
    benefits: [
      '200% increase in conversion rates',
      '150% improvement in average order value',
      '300% better product recommendations',
      '250% increase in customer retention'
    ],
    technologies: ['Machine Learning', 'Recommendation Engine', 'Pricing Optimization', 'Fraud Detection', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-ecommerce-optimizer',
    trial: '14-day free trial',
    roi: '200% ROI in 3 months'
  },
  {
    id: 'ai-sales-predictor',
    name: 'AI Sales Predictor',
    description: 'Predict sales outcomes and optimize your sales process with AI-powered forecasting and lead scoring.',
    features: [
      'Sales forecasting and prediction',
      'Lead scoring and qualification',
      'Deal probability calculation',
      'Pipeline optimization',
      'Performance analytics and insights',
      'Territory planning and optimization',
      'Commission tracking and reporting',
      'CRM integration and synchronization',
      'Custom model training',
      'Real-time sales intelligence'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 0 },
    category: 'AI Sales Tools',
    icon: <TrendingUp className="w-8 h-8" />,
    popular: false,
    marketPrice: '$150-400/month',
    benefits: [
      '250% improvement in sales forecasting accuracy',
      '200% increase in qualified leads',
      '300% better pipeline management',
      '150% improvement in sales performance'
    ],
    technologies: ['Machine Learning', 'Sales Forecasting', 'Lead Scoring', 'CRM Integration', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-sales-predictor',
    trial: '7-day free trial',
    roi: '250% ROI in 4 months'
  },

  // Security & Compliance
  {
    id: 'ai-security-monitor',
    name: 'AI Security Monitor',
    description: 'Protect your business with AI-powered threat detection, security monitoring, and automated incident response.',
    features: [
      'Real-time threat detection and analysis',
      'Anomaly identification and alerting',
      'Automated incident response',
      'Compliance monitoring and reporting',
      'Vulnerability scanning and assessment',
      'Security reporting and analytics',
      'Team notifications and alerts',
      'Integration with security tools',
      'Custom security rules and policies',
      '24/7 security monitoring'
    ],
    pricing: { monthly: 129, yearly: 1290, setup: 0 },
    category: 'AI Security Tools',
    icon: <Shield className="w-8 h-8" />,
    popular: false,
    marketPrice: '$200-600/month',
    benefits: [
      '99.9% threat detection accuracy',
      '90% reduction in security incidents',
      '200% improvement in response time',
      '100% compliance achievement'
    ],
    technologies: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response', 'Compliance'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-security-monitor',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months'
  },

  // HR & Recruitment
  {
    id: 'ai-recruitment-assistant',
    name: 'AI Recruitment Assistant',
    description: 'Streamline your hiring process with AI-powered candidate screening, interview scheduling, and talent matching.',
    features: [
      'Resume screening and analysis',
      'Candidate matching and scoring',
      'Interview scheduling and coordination',
      'Skill assessment and testing',
      'Background check integration',
      'Diversity analytics and reporting',
      'Onboarding automation',
      'Performance tracking and analytics',
      'Integration with HR systems',
      'Custom hiring workflows'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 0 },
    category: 'AI HR Tools',
    icon: <Users className="w-8 h-8" />,
    popular: false,
    marketPrice: '$200-500/month',
    benefits: [
      '300% improvement in hiring efficiency',
      '200% better candidate quality',
      '150% reduction in time-to-hire',
      '100% improvement in diversity metrics'
    ],
    technologies: ['Resume Analysis', 'Candidate Matching', 'Interview Scheduling', 'Skill Assessment', 'HR Integration'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-recruitment-assistant',
    trial: '7-day free trial',
    roi: '300% ROI in 4 months'
  },

  // Development Tools
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant',
    description: 'Accelerate development with AI-powered code generation, review, optimization, and bug detection.',
    features: [
      'AI-powered code generation',
      'Bug detection and fixing',
      'Performance optimization',
      'Code review automation',
      'Documentation generation',
      'Test case creation',
      'Security scanning',
      'Multi-language support',
      'IDE integration',
      'Team collaboration features'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 0 },
    category: 'AI Development Tools',
    icon: <Code className="w-8 h-8" />,
    popular: false,
    marketPrice: '$150-400/month',
    benefits: [
      '200% improvement in development speed',
      '150% reduction in bugs',
      '300% better code quality',
      '100% increase in developer productivity'
    ],
    technologies: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Security Scanning', 'IDE Integration'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-code-assistant',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months'
  },

  // Coming Soon Services
  {
    id: 'ai-voice-assistant-builder',
    name: 'AI Voice Assistant Builder',
    description: 'Create custom voice assistants for your business with natural language processing and voice synthesis.',
    features: [
      'Custom voice training and synthesis',
      'Multi-language support',
      'Integration APIs and SDKs',
      'Analytics dashboard',
      'Custom wake words',
      'Offline capabilities',
      'Team management',
      'White-label options',
      'Voice cloning technology',
      'Real-time processing'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 0 },
    category: 'AI Voice Tools',
    icon: <Mic className="w-8 h-8" />,
    comingSoon: true,
    marketPrice: '$300-800/month',
    benefits: [
      'Create personalized voice experiences',
      'Improve accessibility and user experience',
      'Reduce customer service costs',
      'Enhance brand recognition'
    ],
    technologies: ['Voice Synthesis', 'Natural Language Processing', 'Voice Cloning', 'Real-time Processing', 'API Integration'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-voice-assistant-builder',
    trial: '14-day free trial',
    roi: '250% ROI in 6 months'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    description: 'Create professional videos from text prompts with AI-powered video generation and editing.',
    features: [
      'Text-to-video generation',
      'Multiple video styles and templates',
      'Voice synthesis and narration',
      'Background music and sound effects',
      'Subtitle generation and customization',
      'Brand customization and templates',
      'Batch processing capabilities',
      'HD and 4K export options',
      'Real-time preview',
      'Team collaboration features'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'AI Video Tools',
    icon: <Video className="w-8 h-8" />,
    comingSoon: true,
    marketPrice: '$400-1000/month',
    benefits: [
      'Create professional videos in minutes',
      'Reduce video production costs by 80%',
      'Improve content marketing ROI',
      'Scale video content production'
    ],
    technologies: ['Video Generation', 'Text-to-Video', 'Voice Synthesis', 'Video Editing', 'Real-time Processing'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-video-generator',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months'
  }
];

const categories = [
  'All Services',
  'AI Business Tools',
  'AI Marketing Tools',
  'AI Customer Service',
  'AI Sales Tools',
  'AI Content Tools',
  'AI SEO Tools',
  'AI Analytics',
  'AI Financial Tools',
  'AI Productivity Tools',
  'AI Security Tools',
  'AI HR Tools',
  'AI Development Tools',
  'AI E-commerce Tools',
  'AI Voice Tools',
  'AI Video Tools'
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(microSAASServices);

  useEffect(() => {
    let filtered = microSAASServices;
    
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Powerful AI-driven tools for modern businesses
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Choose from 50+ ready-to-use micro SAAS applications designed to streamline your business operations. 
              Each tool is powered by cutting-edge AI technology and comes with comprehensive support.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-white mb-3 text-lg">Rapid Deployment</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Get up and running in under 24 hours with our streamlined onboarding process</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-3 text-lg">Proven ROI</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Our clients see an average ROI of 250% within 6 months of implementation</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Bank-level security with SOC 2 compliance and end-to-end encryption</p>
              </div>
            </div>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search micro SAAS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                  <Search className="w-5 h-5" />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-slate-900 font-semibold'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  } ${service.comingSoon ? 'opacity-75' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {service.comingSoon && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                    <p className="text-gray-300 text-sm">{service.category}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-green-400 flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        {formatPrice(service.pricing.monthly)}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        or {formatPrice(service.pricing.yearly)}/year (save 17%)
                      </div>
                      {service.pricing.setup && service.pricing.setup > 0 && (
                        <div className="text-sm text-gray-400 mt-1">
                          + {formatPrice(service.pricing.setup)} setup fee
                        </div>
                      )}
                      <div className="text-sm text-gray-400 mt-1">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <a
                        href={`/contact?service=${service.id}`}
                        className="w-full bg-cyan-400 text-slate-900 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 text-center block"
                      >
                        Get Started
                      </a>
                      <a
                        href={service.link}
                        className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Services');
                  }}
                  className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see what you're looking for? We can create a custom micro SAAS solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Request Custom Solution
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}