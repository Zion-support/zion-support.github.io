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

interface AIService {
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
  capabilities: string[];
  useCases: string[];
  industries: string[];
}

const aiServices: AIService[] = [
  // AI-Powered Business Intelligence
  {
    id: 'ai-business-intelligence-pro',
    name: 'AI Business Intelligence Pro',
    description: 'Advanced AI analytics platform that transforms raw data into actionable business insights with predictive analytics and real-time dashboards.',
    features: [
      'Real-time data processing and visualization',
      'Predictive analytics and forecasting',
      'Natural language queries and reporting',
      'Automated report generation',
      'Custom dashboard creation',
      'Multi-data source integration',
      'Advanced machine learning models',
      '24/7 monitoring and alerts',
      'Mobile app for on-the-go insights',
      'White-label reporting options'
    ],
    pricing: { monthly: 2499, yearly: 24990, setup: 0 },
    category: 'AI Analytics',
    icon: <BarChart className="w-8 h-8" />,
    popular: true,
    marketPrice: '$3,000-6,000/month',
    benefits: [
      '400% improvement in decision-making speed',
      '90% reduction in manual reporting time',
      '300% increase in data accuracy',
      '500% better business insights'
    ],
    technologies: ['Machine Learning', 'Data Visualization', 'Real-time Processing', 'Predictive Analytics', 'API Integrations'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-business-intelligence-pro',
    trial: '14-day free trial',
    roi: '400% ROI in 4 months',
    capabilities: [
      'Process 10TB+ data daily',
      '99.9% accuracy in predictions',
      'Real-time insights delivery',
      'Custom ML model training'
    ],
    useCases: [
      'Sales forecasting and pipeline analysis',
      'Customer behavior prediction',
      'Market trend analysis',
      'Operational efficiency optimization'
    ],
    industries: ['Finance', 'Retail', 'Healthcare', 'Manufacturing', 'Technology']
  },
  {
    id: 'ai-content-generation-suite',
    name: 'AI Content Generation Suite',
    description: 'Comprehensive AI-powered content creation platform for all marketing needs with brand voice training and multi-format support.',
    features: [
      'Blog post and article generation',
      'Social media content creation',
      'Email marketing copy',
      'Video script writing',
      'SEO optimization and analysis',
      'Multi-language support (40+ languages)',
      'Brand voice training and consistency',
      'Content calendar management',
      'Plagiarism detection',
      'Performance analytics and insights'
    ],
    pricing: { monthly: 899, yearly: 8990, setup: 0 },
    category: 'AI Content Creation',
    icon: <FileText className="w-8 h-8" />,
    popular: true,
    marketPrice: '$1,200-2,500/month',
    benefits: [
      '200% increase in content production',
      '80% improvement in SEO performance',
      '150% better engagement rates',
      '60% reduction in content creation time'
    ],
    technologies: ['Natural Language Processing', 'SEO Analysis', 'Content Optimization', 'Plagiarism Detection', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-content-generation-suite',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months',
    capabilities: [
      'Generate 1000+ articles daily',
      '40+ languages supported',
      'SEO score optimization',
      'Brand consistency maintenance'
    ],
    useCases: [
      'Content marketing automation',
      'Social media content creation',
      'Email campaign optimization',
      'SEO content strategy'
    ],
    industries: ['Marketing', 'E-commerce', 'Media', 'Education', 'Technology']
  },
  {
    id: 'ai-customer-service-automation',
    name: 'AI Customer Service Automation',
    description: 'Intelligent customer service platform with advanced NLP, sentiment analysis, and seamless human handoff capabilities.',
    features: [
      '24/7 AI chatbot with human-like responses',
      'Sentiment analysis and mood detection',
      'Multi-language support (50+ languages)',
      'Human handoff and escalation management',
      'Knowledge base integration',
      'Ticket routing and prioritization',
      'Performance analytics and insights',
      'Custom training and fine-tuning',
      'Voice and text support',
      'Integration with CRM systems'
    ],
    pricing: { monthly: 1299, yearly: 12990, setup: 0 },
    category: 'AI Customer Service',
    icon: <MessageSquare className="w-8 h-8" />,
    popular: true,
    marketPrice: '$1,800-3,500/month',
    benefits: [
      '350% improvement in response time',
      '80% reduction in support costs',
      '95% customer satisfaction rate',
      '90% query resolution without human intervention'
    ],
    technologies: ['Natural Language Processing', 'Machine Learning', 'Sentiment Analysis', 'Chatbot APIs', 'CRM Integration'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-customer-service-automation',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    capabilities: [
      '95% query resolution rate',
      '50+ language support',
      'Real-time sentiment tracking',
      'Seamless human escalation'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification and nurturing',
      'FAQ automation',
      'Order and billing support'
    ],
    industries: ['E-commerce', 'SaaS', 'Healthcare', 'Finance', 'Retail']
  },
  {
    id: 'ai-marketing-automation-platform',
    name: 'AI Marketing Automation Platform',
    description: 'Complete marketing automation platform with AI-driven campaign optimization, audience segmentation, and performance analytics.',
    features: [
      'Campaign optimization and automation',
      'Audience segmentation and targeting',
      'Predictive lead scoring',
      'Email personalization and optimization',
      'Ad performance analysis and optimization',
      'ROI optimization and tracking',
      'A/B testing automation',
      'Cross-platform integration',
      'Customer journey mapping',
      'Advanced analytics and reporting'
    ],
    pricing: { monthly: 1599, yearly: 15990, setup: 0 },
    category: 'AI Marketing',
    icon: <Target className="w-8 h-8" />,
    popular: true,
    marketPrice: '$2,000-4,000/month',
    benefits: [
      '300% increase in conversion rates',
      'Automated campaign optimization',
      'Real-time performance tracking',
      'Predictive customer behavior'
    ],
    technologies: ['Machine Learning', 'Marketing Automation', 'Predictive Analytics', 'A/B Testing', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-marketing-automation-platform',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    capabilities: [
      '300% increase in conversion rates',
      'Automated campaign optimization',
      'Real-time performance tracking',
      'Predictive customer behavior'
    ],
    useCases: [
      'Email marketing automation',
      'Social media advertising',
      'Lead nurturing campaigns',
      'Customer retention programs'
    ],
    industries: ['Marketing', 'E-commerce', 'SaaS', 'Healthcare', 'Finance']
  },
  {
    id: 'ai-document-processing-system',
    name: 'AI Document Processing System',
    description: 'Intelligent document analysis, extraction, and processing with OCR, NLP, and automated workflow integration.',
    features: [
      'OCR text recognition and extraction',
      'Document classification and sorting',
      'Data extraction and validation',
      'Form processing and automation',
      'Contract analysis and review',
      'Compliance checking and monitoring',
      'Multi-format support (PDF, Word, Excel, etc.)',
      'Batch processing capabilities',
      'Integration with business systems',
      'Advanced analytics and reporting'
    ],
    pricing: { monthly: 799, yearly: 7990, setup: 0 },
    category: 'AI Document Processing',
    icon: <FileText className="w-8 h-8" />,
    popular: false,
    marketPrice: '$1,200-2,500/month',
    benefits: [
      '99.5% accuracy in text extraction',
      'Process 10,000+ documents/hour',
      '50+ file formats supported',
      'Automated compliance checking'
    ],
    technologies: ['OCR Technology', 'Natural Language Processing', 'Document Classification', 'Workflow Automation', 'Compliance Monitoring'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-document-processing-system',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    capabilities: [
      '99.5% accuracy in text extraction',
      'Process 10,000+ documents/hour',
      '50+ file formats supported',
      'Automated compliance checking'
    ],
    useCases: [
      'Invoice processing automation',
      'Contract analysis and review',
      'Compliance document management',
      'Data extraction and validation'
    ],
    industries: ['Legal', 'Finance', 'Insurance', 'Healthcare', 'Government']
  },
  {
    id: 'ai-image-video-analysis',
    name: 'AI Image & Video Analysis',
    description: 'Advanced computer vision platform for image and video content analysis with object detection, facial recognition, and content moderation.',
    features: [
      'Object detection and recognition',
      'Facial recognition and analysis',
      'Content moderation and safety',
      'Video analytics and insights',
      'Image classification and tagging',
      'Quality assessment and optimization',
      'Real-time processing capabilities',
      'API integration and customization',
      'Batch processing support',
      'Advanced analytics and reporting'
    ],
    pricing: { monthly: 1199, yearly: 11990, setup: 0 },
    category: 'AI Computer Vision',
    icon: <Camera className="w-8 h-8" />,
    popular: true,
    marketPrice: '$1,500-3,000/month',
    benefits: [
      '99.8% accuracy in object detection',
      'Real-time video processing',
      'Advanced facial recognition',
      'Content safety monitoring'
    ],
    technologies: ['Computer Vision', 'Object Detection', 'Facial Recognition', 'Content Moderation', 'Real-time Processing'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-image-video-analysis',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    capabilities: [
      '99.8% accuracy in object detection',
      'Real-time video processing',
      'Advanced facial recognition',
      'Content safety monitoring'
    ],
    useCases: [
      'Security and surveillance',
      'Content moderation',
      'Quality control in manufacturing',
      'Medical image analysis'
    ],
    industries: ['Security', 'Manufacturing', 'Healthcare', 'Media', 'E-commerce']
  },
  {
    id: 'ai-financial-analysis-platform',
    name: 'AI Financial Analysis Platform',
    description: 'Comprehensive AI platform for financial data analysis, risk assessment, fraud detection, and investment optimization.',
    features: [
      'Risk assessment and management',
      'Fraud detection and prevention',
      'Market analysis and forecasting',
      'Credit scoring and evaluation',
      'Portfolio optimization',
      'Regulatory compliance monitoring',
      'Real-time market monitoring',
      'Predictive modeling and analytics',
      'Investment recommendations',
      'Advanced reporting and insights'
    ],
    pricing: { monthly: 2999, yearly: 29990, setup: 0 },
    category: 'AI Finance',
    icon: <TrendingUp className="w-8 h-8" />,
    popular: true,
    marketPrice: '$4,000-8,000/month',
    benefits: [
      '99.9% fraud detection accuracy',
      'Real-time risk assessment',
      'Regulatory compliance automation',
      'Advanced predictive modeling'
    ],
    technologies: ['Machine Learning', 'Risk Assessment', 'Fraud Detection', 'Predictive Analytics', 'Financial Modeling'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-financial-analysis-platform',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    capabilities: [
      '99.9% fraud detection accuracy',
      'Real-time risk assessment',
      'Regulatory compliance automation',
      'Advanced predictive modeling'
    ],
    useCases: [
      'Fraud detection and prevention',
      'Credit risk assessment',
      'Investment portfolio optimization',
      'Regulatory compliance monitoring'
    ],
    industries: ['Banking', 'Insurance', 'Investment', 'Fintech', 'Real Estate']
  },
  {
    id: 'ai-healthcare-diagnostics',
    name: 'AI Healthcare Diagnostics',
    description: 'Advanced AI platform for medical image analysis, diagnostic assistance, and patient care optimization with HIPAA compliance.',
    features: [
      'Medical image analysis and interpretation',
      'Diagnostic assistance and recommendations',
      'Drug discovery and development support',
      'Patient risk assessment and monitoring',
      'Treatment recommendations and optimization',
      'Clinical trial matching and analysis',
      'HIPAA compliance and security',
      'Integration with EMR systems',
      'Real-time monitoring and alerts',
      'Advanced analytics and reporting'
    ],
    pricing: { monthly: 3999, yearly: 39990, setup: 0 },
    category: 'AI Healthcare',
    icon: <Heart className="w-8 h-8" />,
    popular: false,
    marketPrice: '$6,000-15,000/month',
    benefits: [
      '95% diagnostic accuracy',
      'HIPAA compliant processing',
      'Real-time medical imaging',
      'Drug interaction analysis'
    ],
    technologies: ['Medical AI', 'Image Analysis', 'Diagnostic AI', 'HIPAA Compliance', 'EMR Integration'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
    trial: '30-day free trial',
    roi: '500% ROI in 8 months',
    capabilities: [
      '95% diagnostic accuracy',
      'HIPAA compliant processing',
      'Real-time medical imaging',
      'Drug interaction analysis'
    ],
    useCases: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Drug discovery',
      'Patient monitoring'
    ],
    industries: ['Healthcare', 'Pharmaceuticals', 'Medical Devices', 'Research', 'Telemedicine']
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics, demand forecasting, and automated optimization.',
    features: [
      'Demand forecasting and planning',
      'Inventory optimization and management',
      'Route planning and optimization',
      'Supplier risk assessment',
      'Cost optimization and analysis',
      'Quality control and monitoring',
      'Real-time tracking and visibility',
      'Performance analytics and insights',
      'Automated decision making',
      'Integration with ERP systems'
    ],
    pricing: { monthly: 1899, yearly: 18990, setup: 0 },
    category: 'AI Supply Chain',
    icon: <Truck className="w-8 h-8" />,
    popular: true,
    marketPrice: '$2,500-5,000/month',
    benefits: [
      '30% reduction in costs',
      '99.5% demand forecast accuracy',
      'Real-time supply tracking',
      'Automated optimization'
    ],
    technologies: ['Supply Chain AI', 'Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Assessment'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-supply-chain-optimization',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    capabilities: [
      '30% reduction in costs',
      '99.5% demand forecast accuracy',
      'Real-time supply tracking',
      'Automated optimization'
    ],
    useCases: [
      'Demand forecasting',
      'Inventory optimization',
      'Supplier management',
      'Cost reduction'
    ],
    industries: ['Manufacturing', 'Retail', 'Logistics', 'Automotive', 'Food & Beverage']
  },
  {
    id: 'ai-voice-speech-processing',
    name: 'AI Voice & Speech Processing',
    description: 'Advanced speech recognition and voice processing platform with NLP, sentiment analysis, and multi-language support.',
    features: [
      'Speech recognition and transcription',
      'Voice synthesis and generation',
      'Language translation and localization',
      'Sentiment analysis and emotion detection',
      'Voice cloning and customization',
      'Real-time processing capabilities',
      'Multi-language support (50+ languages)',
      'API integration and customization',
      'Voice command processing',
      'Advanced analytics and insights'
    ],
    pricing: { monthly: 1399, yearly: 13990, setup: 0 },
    category: 'AI Voice Processing',
    icon: <Mic className="w-8 h-8" />,
    popular: false,
    marketPrice: '$2,000-4,000/month',
    benefits: [
      '99.2% speech recognition accuracy',
      '50+ languages supported',
      'Real-time voice processing',
      'Natural voice synthesis'
    ],
    technologies: ['Speech Recognition', 'Voice Synthesis', 'Natural Language Processing', 'Sentiment Analysis', 'Multi-language Support'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-voice-speech-processing',
    trial: '14-day free trial',
    roi: '250% ROI in 4 months',
    capabilities: [
      '99.2% speech recognition accuracy',
      '50+ languages supported',
      'Real-time voice processing',
      'Natural voice synthesis'
    ],
    useCases: [
      'Voice assistants and chatbots',
      'Call center automation',
      'Accessibility solutions',
      'Language translation'
    ],
    industries: ['Customer Service', 'Healthcare', 'Education', 'Accessibility', 'Entertainment']
  },
  {
    id: 'ai-cybersecurity-platform',
    name: 'AI Cybersecurity Platform',
    description: 'Advanced AI-powered cybersecurity solution with threat detection, behavioral analysis, and automated incident response.',
    features: [
      'Threat detection and analysis',
      'Anomaly detection and alerting',
      'Behavioral analysis and monitoring',
      'Incident response automation',
      'Vulnerability assessment and scanning',
      'Compliance monitoring and reporting',
      'Real-time security alerts',
      'Forensic analysis and investigation',
      'Integration with security tools',
      'Advanced analytics and insights'
    ],
    pricing: { monthly: 2199, yearly: 21990, setup: 0 },
    category: 'AI Cybersecurity',
    icon: <Shield className="w-8 h-8" />,
    popular: true,
    marketPrice: '$3,000-6,000/month',
    benefits: [
      '99.9% threat detection rate',
      'Real-time security monitoring',
      'Automated incident response',
      'Advanced behavioral analysis'
    ],
    technologies: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Assessment', 'Security Monitoring'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-cybersecurity-platform',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    capabilities: [
      '99.9% threat detection rate',
      'Real-time security monitoring',
      'Automated incident response',
      'Advanced behavioral analysis'
    ],
    useCases: [
      'Threat detection and prevention',
      'Security monitoring',
      'Incident response',
      'Compliance management'
    ],
    industries: ['Finance', 'Healthcare', 'Government', 'Technology', 'Critical Infrastructure']
  },
  {
    id: 'ai-research-development',
    name: 'AI Research & Development',
    description: 'Comprehensive AI R&D platform for custom model development, training, and deployment with advanced analytics.',
    features: [
      'Custom model development and training',
      'Data preprocessing and preparation',
      'Model training and optimization',
      'Hyperparameter tuning and optimization',
      'Model deployment and management',
      'Performance monitoring and analytics',
      'A/B testing and experimentation',
      'Research collaboration tools',
      'Version control and management',
      'Advanced reporting and insights'
    ],
    pricing: { monthly: 4999, yearly: 49990, setup: 0 },
    category: 'AI R&D',
    icon: <Cpu className="w-8 h-8" />,
    popular: false,
    marketPrice: '$8,000-15,000/month',
    benefits: [
      'Custom AI model development',
      'Advanced research capabilities',
      'Collaborative development environment',
      'Enterprise-grade security'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'Model Training', 'Hyperparameter Optimization', 'Model Deployment'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/ai-research-development',
    trial: '30-day free trial',
    roi: '500% ROI in 8 months',
    capabilities: [
      'Custom AI model development',
      'Advanced research capabilities',
      'Collaborative development environment',
      'Enterprise-grade security'
    ],
    useCases: [
      'Custom AI model development',
      'Research and experimentation',
      'Model optimization',
      'AI strategy development'
    ],
    industries: ['Technology', 'Research', 'Academia', 'Pharmaceuticals', 'Automotive']
  }
];

const categories = [
  'All Services',
  'AI Analytics',
  'AI Content Creation',
  'AI Customer Service',
  'AI Marketing',
  'AI Document Processing',
  'AI Computer Vision',
  'AI Finance',
  'AI Healthcare',
  'AI Supply Chain',
  'AI Voice Processing',
  'AI Cybersecurity',
  'AI R&D'
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(aiServices);

  useEffect(() => {
    let filtered = aiServices;
    
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
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Advanced Artificial Intelligence Solutions for Enterprise
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of AI services. From machine learning and natural language processing 
              to computer vision and predictive analytics, we deliver cutting-edge AI solutions that drive real business value.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="font-bold text-white mb-3 text-lg">Advanced AI</h3>
                <p className="text-sm text-gray-300 leading-relaxed">State-of-the-art machine learning models and neural networks for complex problem solving</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-lg">Real-time Processing</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Lightning-fast AI processing with sub-second response times and 99.9% uptime</p>
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
                  placeholder="Search AI services..."
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
                    <h4 className="text-white font-semibold mb-3">Capabilities:</h4>
                    <ul className="space-y-1">
                      {service.capabilities.slice(0, 2).map((capability, index) => (
                        <li key={index} className="text-sm text-green-400 flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {capability}
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of enterprises that have already transformed their operations with our AI solutions.
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
                Get Free Consultation
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