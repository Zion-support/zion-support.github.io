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
  FileNegotiation as FileLegalNegotiation
} from 'lucide-react';

interface ITService {
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
  timeline: string;
}

const itServices: ITService[] = [
  // Cloud Infrastructure & Migration
  {
    id: 'cloud-migration-pro',
    name: 'Cloud Migration Pro',
    description: 'Seamless migration to AWS, Azure, or GCP with zero downtime, optimized performance, and cost reduction.',
    features: [
      'Multi-cloud strategy and planning',
      'Hybrid cloud solutions',
      'Cost optimization and analysis',
      'Security implementation and compliance',
      'Performance tuning and optimization',
      'Disaster recovery planning',
      'Data migration and synchronization',
      'Application modernization',
      'Monitoring and alerting setup',
      '24/7 support and maintenance'
    ],
    pricing: { monthly: 10000, yearly: 100000, setup: 0 },
    category: 'Cloud Infrastructure',
    icon: <Cloud className="w-8 h-8" />,
    popular: true,
    marketPrice: '$15,000-30,000',
    benefits: [
      '40% reduction in infrastructure costs',
      '99.9% uptime guarantee',
      '50% improvement in performance',
      'Zero downtime migration'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/cloud-migration-pro',
    trial: 'Free consultation',
    roi: '300% ROI in 12 months',
    capabilities: [
      'Zero downtime migration',
      'Multi-cloud expertise',
      'Cost optimization',
      'Security compliance'
    ],
    useCases: [
      'Legacy system modernization',
      'Cost reduction initiatives',
      'Scalability improvements',
      'Disaster recovery setup'
    ],
    industries: ['Finance', 'Healthcare', 'E-commerce', 'Manufacturing', 'Technology'],
    timeline: '2-8 weeks'
  },
  {
    id: 'it-infrastructure-design',
    name: 'IT Infrastructure Design',
    description: 'Scalable and secure infrastructure architecture tailored to your business needs with future-proof design.',
    features: [
      'Network design and implementation',
      'Server configuration and optimization',
      'Load balancing and high availability',
      'Disaster recovery planning',
      'Scalability planning and design',
      'Security architecture design',
      'Performance monitoring setup',
      'Backup and recovery systems',
      'Documentation and training',
      'Ongoing support and maintenance'
    ],
    pricing: { monthly: 15000, yearly: 150000, setup: 0 },
    category: 'Infrastructure',
    icon: <Server className="w-8 h-8" />,
    popular: true,
    marketPrice: '$20,000-50,000',
    benefits: [
      '50% improvement in system performance',
      '99.9% uptime guarantee',
      'Future-proof architecture',
      'Reduced maintenance costs'
    ],
    technologies: ['Cisco', 'Dell', 'HP', 'VMware', 'Hyper-V', 'Linux', 'Windows Server'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/it-infrastructure-design',
    trial: 'Free assessment',
    roi: '250% ROI in 18 months',
    capabilities: [
      'Enterprise-grade architecture',
      'High availability design',
      'Security-first approach',
      'Scalable solutions'
    ],
    useCases: [
      'New office setup',
      'Infrastructure modernization',
      'Merger and acquisition support',
      'Compliance requirements'
    ],
    industries: ['Finance', 'Healthcare', 'Government', 'Education', 'Manufacturing'],
    timeline: '3-6 weeks'
  },
  {
    id: 'database-management-pro',
    name: 'Database Management Pro',
    description: 'Comprehensive database administration with performance tuning, security hardening, and automated monitoring.',
    features: [
      'Database performance tuning',
      'Backup and recovery systems',
      'Security hardening and compliance',
      'Real-time monitoring and alerting',
      'Scalability planning and implementation',
      'Data migration and synchronization',
      'Query optimization',
      'Index management',
      'Automated maintenance tasks',
      '24/7 support and monitoring'
    ],
    pricing: { monthly: 5000, yearly: 50000, setup: 0 },
    category: 'Database Services',
    icon: <Database className="w-8 h-8" />,
    popular: false,
    marketPrice: '$8,000-15,000/month',
    benefits: [
      '60% improvement in query performance',
      '99.9% data availability',
      'Automated backup and recovery',
      'Reduced maintenance overhead'
    ],
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/database-management-pro',
    trial: 'Free health check',
    roi: '200% ROI in 6 months',
    capabilities: [
      'Performance optimization',
      'Security hardening',
      'Automated monitoring',
      'Disaster recovery'
    ],
    useCases: [
      'Database performance issues',
      'Security compliance',
      'Data migration',
      'Backup and recovery'
    ],
    industries: ['Finance', 'Healthcare', 'E-commerce', 'SaaS', 'Government'],
    timeline: 'Ongoing'
  },
  {
    id: 'cloud-cost-optimization',
    name: 'Cloud Cost Optimization',
    description: 'Reduce cloud costs by up to 40% with intelligent resource management, optimization, and monitoring.',
    features: [
      'Cost analysis and auditing',
      'Resource optimization and rightsizing',
      'Auto-scaling implementation',
      'Reserved instance management',
      'Cost monitoring and alerting',
      'Waste identification and elimination',
      'Budget planning and forecasting',
      'Multi-cloud cost comparison',
      'Automated cost optimization',
      'Regular reporting and insights'
    ],
    pricing: { monthly: 3000, yearly: 30000, setup: 0 },
    category: 'Cloud Optimization',
    icon: <DollarSign className="w-8 h-8" />,
    popular: false,
    marketPrice: '$5,000-10,000',
    benefits: [
      '40% reduction in cloud costs',
      'Automated optimization',
      'Real-time cost monitoring',
      'ROI tracking and reporting'
    ],
    technologies: ['AWS Cost Explorer', 'Azure Cost Management', 'Google Cloud Billing', 'Terraform', 'CloudFormation'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/cloud-cost-optimization',
    trial: 'Free audit',
    roi: '400% ROI in 3 months',
    capabilities: [
      'Cost analysis and optimization',
      'Resource rightsizing',
      'Automated scaling',
      'Budget management'
    ],
    useCases: [
      'High cloud costs',
      'Resource waste reduction',
      'Budget optimization',
      'Cost visibility'
    ],
    industries: ['Technology', 'E-commerce', 'SaaS', 'Media', 'Gaming'],
    timeline: '2-4 weeks'
  },

  // Cybersecurity & Compliance
  {
    id: 'enterprise-cybersecurity-suite',
    name: 'Enterprise Cybersecurity Suite',
    description: 'Comprehensive security solutions with 24/7 monitoring, threat detection, and incident response.',
    features: [
      'Threat detection and analysis',
      'Vulnerability assessment and scanning',
      'Security monitoring and alerting',
      'Incident response and forensics',
      'Penetration testing and red teaming',
      'Security awareness training',
      'Compliance monitoring and reporting',
      'Identity and access management',
      'Endpoint protection and management',
      '24/7 security operations center'
    ],
    pricing: { monthly: 8000, yearly: 80000, setup: 0 },
    category: 'Cybersecurity',
    icon: <Shield className="w-8 h-8" />,
    popular: true,
    marketPrice: '$12,000-25,000/month',
    benefits: [
      '99.9% threat detection rate',
      'Zero security breaches',
      '24/7 monitoring and response',
      'Compliance achievement'
    ],
    technologies: ['CrowdStrike', 'Palo Alto', 'Cisco', 'Fortinet', 'Splunk', 'Qualys'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/enterprise-cybersecurity-suite',
    trial: 'Free security audit',
    roi: '300% ROI in 6 months',
    capabilities: [
      'Threat detection and response',
      'Vulnerability management',
      'Security monitoring',
      'Incident response'
    ],
    useCases: [
      'Security compliance',
      'Threat protection',
      'Incident response',
      'Security awareness'
    ],
    industries: ['Finance', 'Healthcare', 'Government', 'Critical Infrastructure', 'Technology'],
    timeline: '2-4 weeks'
  },
  {
    id: 'compliance-management-platform',
    name: 'Compliance Management Platform',
    description: 'Ensure compliance with GDPR, HIPAA, SOX, and other industry regulations with automated monitoring.',
    features: [
      'GDPR compliance and data protection',
      'HIPAA compliance for healthcare',
      'SOX compliance for financial services',
      'Audit support and documentation',
      'Policy management and updates',
      'Risk assessment and mitigation',
      'Training and awareness programs',
      'Incident reporting and management',
      'Compliance monitoring and alerting',
      'Regular reporting and dashboards'
    ],
    pricing: { monthly: 12000, yearly: 120000, setup: 0 },
    category: 'Compliance',
    icon: <FileCheck className="w-8 h-8" />,
    popular: true,
    marketPrice: '$18,000-35,000',
    benefits: [
      '100% compliance achievement',
      'Automated monitoring',
      'Reduced audit time',
      'Risk mitigation'
    ],
    technologies: ['GRC Platforms', 'Compliance Tools', 'Risk Management', 'Audit Software', 'Documentation Systems'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/compliance-management-platform',
    trial: 'Free compliance check',
    roi: '250% ROI in 8 months',
    capabilities: [
      'Multi-regulation compliance',
      'Automated monitoring',
      'Risk assessment',
      'Audit support'
    ],
    useCases: [
      'Regulatory compliance',
      'Audit preparation',
      'Risk management',
      'Policy enforcement'
    ],
    industries: ['Finance', 'Healthcare', 'Government', 'Legal', 'Insurance'],
    timeline: '4-8 weeks'
  },
  {
    id: 'security-awareness-training',
    name: 'Security Awareness Training',
    description: 'Comprehensive employee security training with phishing simulation, assessment, and certification.',
    features: [
      'Phishing simulation and testing',
      'Security workshops and training',
      'Policy development and updates',
      'Assessment and certification',
      'Custom training content',
      'Progress tracking and reporting',
      'Gamification and engagement',
      'Multi-language support',
      'Mobile learning platform',
      'Ongoing reinforcement training'
    ],
    pricing: { monthly: 3000, yearly: 30000, setup: 0 },
    category: 'Security Training',
    icon: <GraduationCap className="w-8 h-8" />,
    popular: false,
    marketPrice: '$5,000-10,000',
    benefits: [
      '90% reduction in security incidents',
      'Improved security awareness',
      'Compliance achievement',
      'Reduced risk exposure'
    ],
    technologies: ['Training Platforms', 'Phishing Simulation', 'LMS Systems', 'Assessment Tools', 'Gamification'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/security-awareness-training',
    trial: 'Free training session',
    roi: '200% ROI in 4 months',
    capabilities: [
      'Phishing simulation',
      'Custom training content',
      'Progress tracking',
      'Certification programs'
    ],
    useCases: [
      'Employee security training',
      'Phishing prevention',
      'Compliance training',
      'Security awareness'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Government', 'Technology'],
    timeline: '1-2 weeks'
  },
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model with identity verification, micro-segmentation, and continuous monitoring.',
    features: [
      'Identity verification and management',
      'Micro-segmentation implementation',
      'Device management and compliance',
      'Access control and policies',
      'Continuous monitoring and analytics',
      'Network segmentation',
      'Application security',
      'Data protection and encryption',
      'Threat detection and response',
      'Compliance and reporting'
    ],
    pricing: { monthly: 15000, yearly: 150000, setup: 0 },
    category: 'Zero Trust',
    icon: <Lock className="w-8 h-8" />,
    popular: false,
    marketPrice: '$25,000-50,000',
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Improved compliance',
      'Better visibility and control'
    ],
    technologies: ['Zero Trust Platforms', 'Identity Management', 'Network Segmentation', 'Access Control', 'Monitoring Tools'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/zero-trust-security-architecture',
    trial: 'Free assessment',
    roi: '350% ROI in 12 months',
    capabilities: [
      'Zero trust implementation',
      'Identity management',
      'Network segmentation',
      'Continuous monitoring'
    ],
    useCases: [
      'Security modernization',
      'Compliance requirements',
      'Remote work security',
      'Advanced threat protection'
    ],
    industries: ['Finance', 'Healthcare', 'Government', 'Critical Infrastructure', 'Technology'],
    timeline: '6-12 weeks'
  },

  // IT Support & Management
  {
    id: '24-7-it-support-monitoring',
    name: '24/7 IT Support & Monitoring',
    description: 'Round-the-clock technical support with proactive monitoring, maintenance, and SLA guarantees.',
    features: [
      'Help desk support and ticketing',
      'Remote monitoring and management',
      'Proactive maintenance and updates',
      'Emergency response and escalation',
      'SLA guarantees and reporting',
      'User training and support',
      'Asset management and tracking',
      'Performance monitoring and optimization',
      'Backup and recovery support',
      'Security monitoring and alerts'
    ],
    pricing: { monthly: 2000, yearly: 20000, setup: 0 },
    category: 'IT Support',
    icon: <Headphones className="w-8 h-8" />,
    popular: true,
    marketPrice: '$3,000-6,000/month',
    benefits: [
      '99.9% uptime guarantee',
      '15-minute response time',
      'Proactive issue prevention',
      'Reduced IT costs'
    ],
    technologies: ['RMM Tools', 'Ticketing Systems', 'Monitoring Platforms', 'Remote Access', 'Asset Management'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/24-7-it-support-monitoring',
    trial: 'Free trial month',
    roi: '200% ROI in 6 months',
    capabilities: [
      '24/7 support coverage',
      'Proactive monitoring',
      'Rapid response times',
      'Comprehensive maintenance'
    ],
    useCases: [
      'IT support outsourcing',
      'Proactive maintenance',
      'Emergency response',
      'User support'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    timeline: 'Immediate'
  },
  {
    id: 'system-administration-services',
    name: 'System Administration Services',
    description: 'Complete system administration with user management, performance optimization, and security hardening.',
    features: [
      'User management and provisioning',
      'System updates and patching',
      'Performance monitoring and optimization',
      'Backup management and testing',
      'Security hardening and compliance',
      'Disaster recovery planning',
      'Capacity planning and scaling',
      'Documentation and procedures',
      'Training and knowledge transfer',
      'Ongoing maintenance and support'
    ],
    pricing: { monthly: 4000, yearly: 40000, setup: 0 },
    category: 'System Administration',
    icon: <Settings className="w-8 h-8" />,
    popular: true,
    marketPrice: '$6,000-12,000/month',
    benefits: [
      'Improved system performance',
      'Enhanced security posture',
      'Reduced downtime',
      'Better resource utilization'
    ],
    technologies: ['Windows Server', 'Linux', 'Active Directory', 'VMware', 'Backup Solutions', 'Monitoring Tools'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/system-administration-services',
    trial: 'Free assessment',
    roi: '250% ROI in 8 months',
    capabilities: [
      'System optimization',
      'User management',
      'Security hardening',
      'Performance monitoring'
    ],
    useCases: [
      'System administration outsourcing',
      'Performance optimization',
      'Security hardening',
      'Disaster recovery'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Government', 'Education'],
    timeline: 'Ongoing'
  },
  {
    id: 'it-strategic-consulting',
    name: 'IT Strategic Consulting',
    description: 'Strategic IT planning and technology consulting for digital transformation and business alignment.',
    features: [
      'Technology assessment and audit',
      'Strategic planning and roadmap',
      'Vendor management and evaluation',
      'Budget planning and optimization',
      'Digital transformation strategy',
      'Technology selection and evaluation',
      'Implementation planning',
      'Change management support',
      'Performance measurement',
      'Ongoing advisory services'
    ],
    pricing: { monthly: 200, yearly: 2000, setup: 0 },
    category: 'IT Consulting',
    icon: <Target className="w-8 h-8" />,
    popular: false,
    marketPrice: '$250-500/hour',
    benefits: [
      'Strategic IT alignment',
      'Cost optimization',
      'Technology roadmap',
      'Digital transformation'
    ],
    technologies: ['Strategic Planning', 'Technology Assessment', 'Vendor Management', 'Digital Transformation', 'Change Management'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/it-strategic-consulting',
    trial: 'Free consultation',
    roi: '300% ROI in 12 months',
    capabilities: [
      'Strategic planning',
      'Technology assessment',
      'Vendor management',
      'Digital transformation'
    ],
    useCases: [
      'IT strategy development',
      'Technology selection',
      'Digital transformation',
      'Cost optimization'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    timeline: 'As needed'
  },
  {
    id: 'it-asset-management',
    name: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control.',
    features: [
      'Asset tracking and inventory',
      'Lifecycle management and planning',
      'License management and compliance',
      'Cost optimization and analysis',
      'Disposal and recycling services',
      'Asset performance monitoring',
      'Warranty and support tracking',
      'Budget planning and forecasting',
      'Compliance and reporting',
      'Mobile asset management'
    ],
    pricing: { monthly: 1500, yearly: 15000, setup: 0 },
    category: 'Asset Management',
    icon: <Package className="w-8 h-8" />,
    popular: false,
    marketPrice: '$2,500-5,000/month',
    benefits: [
      '20% reduction in IT costs',
      'Improved asset utilization',
      'Compliance achievement',
      'Better budget control'
    ],
    technologies: ['Asset Management Tools', 'Inventory Systems', 'License Management', 'Cost Tracking', 'Mobile Apps'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/it-asset-management',
    trial: 'Free inventory',
    roi: '150% ROI in 4 months',
    capabilities: [
      'Asset tracking',
      'Lifecycle management',
      'Cost optimization',
      'Compliance monitoring'
    ],
    useCases: [
      'Asset inventory management',
      'Cost optimization',
      'License compliance',
      'Asset disposal'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Government', 'Education'],
    timeline: '2-4 weeks'
  },

  // Software Development & Integration
  {
    id: 'custom-software-development',
    name: 'Custom Software Development',
    description: 'Tailored software solutions built with modern technologies, best practices, and agile methodologies.',
    features: [
      'Web application development',
      'Mobile app development',
      'API development and integration',
      'Database design and implementation',
      'Quality assurance and testing',
      'DevOps and deployment',
      'User interface design',
      'Performance optimization',
      'Security implementation',
      'Ongoing support and maintenance'
    ],
    pricing: { monthly: 15000, yearly: 150000, setup: 0 },
    category: 'Software Development',
    icon: <Code className="w-8 h-8" />,
    popular: true,
    marketPrice: '$25,000-100,000',
    benefits: [
      'Custom solutions for unique needs',
      'Modern technology stack',
      'Agile development process',
      'Ongoing support and maintenance'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/custom-software-development',
    trial: 'Free consultation',
    roi: '400% ROI in 18 months',
    capabilities: [
      'Full-stack development',
      'Mobile app development',
      'API development',
      'Quality assurance'
    ],
    useCases: [
      'Custom business applications',
      'Mobile app development',
      'API development',
      'Legacy system modernization'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'E-commerce', 'Manufacturing'],
    timeline: '6-12 weeks'
  },
  {
    id: 'system-integration-apis',
    name: 'System Integration & APIs',
    description: 'Connect and integrate disparate systems with robust API development, data migration, and workflow automation.',
    features: [
      'API development and management',
      'Data migration and synchronization',
      'Workflow automation and orchestration',
      'Legacy system integration',
      'Real-time data processing',
      'Error handling and monitoring',
      'Performance optimization',
      'Security implementation',
      'Documentation and testing',
      'Ongoing support and maintenance'
    ],
    pricing: { monthly: 8000, yearly: 80000, setup: 0 },
    category: 'System Integration',
    icon: <Zap className="w-8 h-8" />,
    popular: true,
    marketPrice: '$15,000-40,000',
    benefits: [
      'Seamless system integration',
      'Automated workflows',
      'Real-time data processing',
      'Reduced manual work'
    ],
    technologies: ['REST APIs', 'GraphQL', 'SOAP', 'Message Queues', 'ETL Tools', 'Integration Platforms'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/system-integration-apis',
    trial: 'Free integration assessment',
    roi: '300% ROI in 8 months',
    capabilities: [
      'API development',
      'System integration',
      'Data migration',
      'Workflow automation'
    ],
    useCases: [
      'System integration',
      'Data migration',
      'Workflow automation',
      'Legacy system modernization'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    timeline: '3-8 weeks'
  },
  {
    id: 'devops-cicd-implementation',
    name: 'DevOps & CI/CD Implementation',
    description: 'Streamline development and deployment with automated testing, continuous integration, and deployment pipelines.',
    features: [
      'Automated testing and quality assurance',
      'Continuous integration and deployment',
      'Infrastructure as code',
      'Container orchestration',
      'Monitoring and alerting',
      'Security scanning and compliance',
      'Performance optimization',
      'Disaster recovery and backup',
      'Team training and knowledge transfer',
      'Ongoing support and maintenance'
    ],
    pricing: { monthly: 6000, yearly: 60000, setup: 0 },
    category: 'DevOps',
    icon: <Rocket className="w-8 h-8" />,
    popular: true,
    marketPrice: '$10,000-25,000',
    benefits: [
      '50% faster deployment',
      'Reduced deployment errors',
      'Improved code quality',
      'Better team collaboration'
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/devops-cicd-implementation',
    trial: 'Free DevOps audit',
    roi: '250% ROI in 6 months',
    capabilities: [
      'CI/CD pipeline setup',
      'Infrastructure automation',
      'Monitoring and alerting',
      'Security integration'
    ],
    useCases: [
      'Development process optimization',
      'Deployment automation',
      'Infrastructure management',
      'Team collaboration'
    ],
    industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'SaaS'],
    timeline: '2-6 weeks'
  },
  {
    id: 'legacy-system-modernization',
    name: 'Legacy System Modernization',
    description: 'Modernize legacy systems with cloud migration, technology updates, and improved user experience.',
    features: [
      'Legacy system assessment and analysis',
      'Cloud migration and modernization',
      'Technology stack updates',
      'Data migration and transformation',
      'User interface modernization',
      'Performance optimization',
      'Security updates and hardening',
      'Integration with modern systems',
      'User training and support',
      'Ongoing maintenance and support'
    ],
    pricing: { monthly: 20000, yearly: 200000, setup: 0 },
    category: 'Legacy Modernization',
    icon: <RefreshCw className="w-8 h-8" />,
    popular: false,
    marketPrice: '$35,000-100,000',
    benefits: [
      'Modern technology stack',
      'Improved performance',
      'Enhanced security',
      'Better user experience'
    ],
    technologies: ['Cloud Platforms', 'Modern Frameworks', 'Database Migration', 'API Development', 'UI/UX Design'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/legacy-system-modernization',
    trial: 'Free modernization plan',
    roi: '300% ROI in 18 months',
    capabilities: [
      'Legacy system analysis',
      'Cloud migration',
      'Technology updates',
      'User experience improvement'
    ],
    useCases: [
      'Legacy system modernization',
      'Cloud migration',
      'Technology updates',
      'User experience improvement'
    ],
    industries: ['Finance', 'Healthcare', 'Government', 'Manufacturing', 'Retail'],
    timeline: '8-16 weeks'
  },

  // Network & Infrastructure
  {
    id: 'network-design-implementation',
    name: 'Network Design & Implementation',
    description: 'Secure and scalable network infrastructure with wireless and wired solutions, monitoring, and optimization.',
    features: [
      'Network design and architecture',
      'Wireless and wired solutions',
      'Security implementation and hardening',
      'Performance optimization and tuning',
      'Monitoring and alerting setup',
      'Disaster recovery planning',
      'Capacity planning and scaling',
      'Vendor management and selection',
      'Documentation and procedures',
      'Ongoing support and maintenance'
    ],
    pricing: { monthly: 12000, yearly: 120000, setup: 0 },
    category: 'Network Services',
    icon: <Wifi className="w-8 h-8" />,
    popular: true,
    marketPrice: '$18,000-40,000',
    benefits: [
      'Enhanced network performance',
      'Improved security posture',
      'Scalable infrastructure',
      'Reduced downtime'
    ],
    technologies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'Ubiquiti'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/network-design-implementation',
    trial: 'Free network assessment',
    roi: '250% ROI in 12 months',
    capabilities: [
      'Network design',
      'Security implementation',
      'Performance optimization',
      'Monitoring and alerting'
    ],
    useCases: [
      'New office setup',
      'Network modernization',
      'Security improvements',
      'Performance optimization'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Government', 'Education'],
    timeline: '3-6 weeks'
  },
  {
    id: 'disaster-recovery-backup',
    name: 'Disaster Recovery & Backup',
    description: 'Comprehensive disaster recovery solutions with automated backup, recovery testing, and business continuity planning.',
    features: [
      'Backup solutions and implementation',
      'Disaster recovery planning',
      'Business continuity planning',
      'Recovery testing and validation',
      'Documentation and procedures',
      'Monitoring and alerting',
      'Cloud backup and recovery',
      'On-premises backup solutions',
      'Recovery time optimization',
      'Ongoing testing and maintenance'
    ],
    pricing: { monthly: 5000, yearly: 50000, setup: 0 },
    category: 'Disaster Recovery',
    icon: <Shield className="w-8 h-8" />,
    popular: false,
    marketPrice: '$8,000-15,000',
    benefits: [
      '99.9% data recovery success',
      'Reduced recovery time',
      'Business continuity assurance',
      'Compliance achievement'
    ],
    technologies: ['Backup Solutions', 'Cloud Storage', 'Recovery Tools', 'Monitoring Systems', 'Documentation Tools'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/disaster-recovery-backup',
    trial: 'Free DR assessment',
    roi: '200% ROI in 8 months',
    capabilities: [
      'Backup implementation',
      'Disaster recovery planning',
      'Recovery testing',
      'Business continuity'
    ],
    useCases: [
      'Data protection',
      'Business continuity',
      'Compliance requirements',
      'Risk mitigation'
    ],
    industries: ['All Industries', 'Finance', 'Healthcare', 'Government', 'Critical Infrastructure'],
    timeline: '2-4 weeks'
  },
  {
    id: 'it-performance-monitoring',
    name: 'IT Performance Monitoring',
    description: 'Real-time monitoring and alerting for IT infrastructure, applications, and performance optimization.',
    features: [
      'Real-time monitoring and alerting',
      'Performance metrics and analysis',
      'Capacity planning and forecasting',
      'Root cause analysis',
      'Automated remediation',
      'Custom dashboards and reporting',
      'Integration with existing tools',
      'Mobile monitoring and alerts',
      'Historical data analysis',
      'Ongoing optimization and tuning'
    ],
    pricing: { monthly: 3000, yearly: 30000, setup: 0 },
    category: 'Performance Monitoring',
    icon: <Activity className="w-8 h-8" />,
    popular: false,
    marketPrice: '$5,000-10,000/month',
    benefits: [
      'Proactive issue detection',
      'Improved system performance',
      'Reduced downtime',
      'Better resource utilization'
    ],
    technologies: ['Monitoring Tools', 'APM Solutions', 'Log Analysis', 'Metrics Collection', 'Alerting Systems'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    link: 'https://ziontechgroup.com/it-performance-monitoring',
    trial: 'Free monitoring setup',
    roi: '150% ROI in 4 months',
    capabilities: [
      'Real-time monitoring',
      'Performance analysis',
      'Automated alerting',
      'Capacity planning'
    ],
    useCases: [
      'Performance monitoring',
      'Issue detection',
      'Capacity planning',
      'System optimization'
    ],
    industries: ['All Industries', 'Technology', 'Finance', 'Healthcare', 'E-commerce'],
    timeline: '1-2 weeks'
  }
];

const categories = [
  'All Services',
  'Cloud Infrastructure',
  'Infrastructure',
  'Database Services',
  'Cloud Optimization',
  'Cybersecurity',
  'Compliance',
  'Security Training',
  'Zero Trust',
  'IT Support',
  'System Administration',
  'IT Consulting',
  'Asset Management',
  'Software Development',
  'System Integration',
  'DevOps',
  'Legacy Modernization',
  'Network Services',
  'Disaster Recovery',
  'Performance Monitoring'
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(itServices);

  useEffect(() => {
    let filtered = itServices;
    
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
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Comprehensive IT Solutions for Modern Businesses
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your IT infrastructure with our comprehensive suite of IT services. From cloud migration and cybersecurity 
              to software development and system integration, we deliver enterprise-grade solutions that drive business success.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Bank-level security with SOC 2 compliance and comprehensive threat protection</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="font-bold text-white mb-3 text-lg">Cloud Solutions</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Scalable cloud infrastructure with cost optimization and performance tuning</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-lg">24/7 Support</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Round-the-clock technical support with proactive monitoring and maintenance</p>
              </div>
            </div>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search IT services..."
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
                      <div className="text-sm text-gray-400 mt-1">
                        Timeline: {service.timeline}
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
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of enterprises that have already transformed their IT operations with our solutions.
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