'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Award, 
  Lock, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  BarChart3, 
  FileText, 
  Search, 
  Bot, 
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
  Clock3, 
  Compass, 
  Globe2, 
  Map, 
  Navigation, 
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
  Play,
  Pause,
  RefreshCw,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Plus,
  Minus,
  X,
  ChevronRight,
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Loader2,
  Server,
  Network,
  HardDrive,
  Wifi,
  Router,
  Monitor,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Headphones,
  Microphone,
  Webcam,
  Laptop,
  Tablet,
  Smartphone as Phone,
  Watch,
  Tv,
  Radio,
  Speaker,
  Volume2,
  VolumeX,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Move,
  Copy,
  Scissors as Cut,
  Save,
  Edit,
  Trash2,
  Archive,
  Folder,
  File,
  Image,
  Video as VideoIcon,
  Music as MusicIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Link,
  Unlink,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Eye as EyeIcon,
  EyeOff,
  Bell,
  BellOff,
  Settings as SettingsIcon,
  Wrench as WrenchIcon,
  Tool,
  Hammer as HammerIcon,
  Screwdriver,
  Cog,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  Plug,
  Zap as ZapIcon,
  Flashlight,
  FlashlightOff,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Activity as ActivityIcon,
  Pulse,
  Heart as HeartIcon,
  HeartHandshake,
  Hand,
  HandHeart,
  Handshake,
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Users as UsersIcon,
  UserCircle,
  UserSquare,
  Crown,
  Medal,
  Trophy,
  Award as AwardIcon,
  Star as StarIcon2,
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
  Happy,
  Wink,
  Kiss,
  Hug,
  Clap,
  Wave,
  Peace,
  Victory,
  OkHand,
  PointUp,
  PointDown,
  PointLeft,
  PointRight,
  Index,
  MiddleFinger,
  Call,
  Video as VideoCall,
  MessageCircle,
  MessageSquare as MessageSquareIcon,
  Mail as MailIcon,
  Send,
  Reply,
  Forward,
  Share as ShareIcon2,
  Bookmark,
  BookmarkCheck,
  Flag,
  FlagTriangleLeft,
  FlagTriangleRight,
  Tag,
  Tags,
  Hash,
  AtSign,
  Percent,
  DollarSign as DollarSignIcon,
  Euro,
  PoundSterling,
  Yen,
  Rupee,
  Won,
  Ruble,
  Bitcoin,
  CreditCard as CreditCardIcon,
  Banknote,
  Coins,
  Wallet,
  Receipt,
  ShoppingCart as ShoppingCartIcon,
  ShoppingBag,
  Package,
  Box,
  Archive as ArchiveIcon,
  Inbox,
  Outbox,
  Send as SendIcon,
  Mailbox,
  Trash as TrashIcon,
  Trash2 as TrashIcon2,
  Recycle,
  RefreshCw as RefreshIcon,
  RotateCcw as RotateLeft,
  RotateCw as RotateRight,
  FlipHorizontal,
  FlipVertical,
  Rotate3D,
  Move as MoveIcon,
  Move3D,
  Scale,
  Resize,
  Crop,
  Crop as CropIcon,
  Scissors as ScissorsIcon,
  Cut as CutIcon,
  Copy as CopyIcon,
  Paste,
  Clipboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardPaste,
  ClipboardX,
  File as FileIcon,
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
  FileSpreadsheet,
  FileDatabase,
  FileBinary,
  FileLock,
  FileUnlock,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileEdit,
  FileSearch,
  FileDownload,
  FileUpload,
  FileShare,
  FileMove,
  FileCopy,
  FileRename,
  FileDelete,
  FileRestore,
  FileArchive as FileArchiveIcon,
  FileUnarchive,
  FileCompress,
  FileDecompress,
  FileEncrypt,
  FileDecrypt,
  FileSign,
  FileVerify,
  FileBackup,
  FileRestore as FileRestoreIcon,
  FileSync,
  FileMerge,
  FileSplit,
  FileCompare,
  FileDiff,
  FilePatch,
  FileCommit,
  FileBranch,
  FileMerge as FileMergeIcon,
  FilePullRequest,
  FileIssue,
  FileBug,
  FileFeature,
  FileHotfix,
  FileRelease,
  FileTag,
  FileVersion,
  FileHistory,
  FileLog,
  FileReport,
  FileAnalytics,
  FileChart,
  FileGraph,
  FileDiagram,
  FileFlowchart,
  FileMindmap,
  FileTimeline,
  FileCalendar,
  FileSchedule,
  FileReminder,
  FileNotification,
  FileAlert,
  FileWarning,
  FileError,
  FileSuccess,
  FileInfo,
  FileQuestion,
  FileHelp,
  FileSupport,
  FileDocumentation,
  FileGuide,
  FileTutorial,
  FileManual,
  FileInstructions,
  FileSteps,
  FileProcess,
  FileWorkflow,
  FilePipeline,
  FileAutomation,
  FileScript,
  FileProgram,
  FileApplication,
  FileSoftware,
  FileSystem,
  FileOS,
  FilePlatform,
  FileFramework,
  FileLibrary,
  FileModule,
  FilePackage,
  FileBundle,
  FilePlugin,
  FileExtension,
  FileType,
  FileFormat,
  FileMime,
  FileEncoding,
  FileCompression,
  FileEncryption,
  FileSecurity,
  FilePrivacy,
  FileCompliance,
  FileAudit,
  FileLogging,
  FileMonitoring,
  FileTracking,
  FileTracing,
  FileProfiling,
  FileDebugging,
  FileTesting,
  FileQuality,
  FilePerformance,
  FileOptimization,
  FileMaintenance,
  FileUpdate,
  FileUpgrade,
  FileMigration,
  FileConversion,
  FileTransformation,
  FileProcessing,
  FileAnalysis,
  FileParsing,
  FileValidation,
  FileVerification,
  FileAuthentication,
  FileAuthorization,
  FilePermission,
  FileAccess,
  FileControl,
  FileManagement,
  FileAdministration,
  FileConfiguration,
  FileSettings,
  FilePreferences,
  FileOptions,
  FileParameters,
  FileVariables,
  FileConstants,
  FileProperties,
  FileAttributes,
  FileMetadata,
  FileInfo as FileInfoIcon,
  FileDetails,
  FileSpecification,
  FileRequirements,
  FileSpecs,
  FileDesign,
  FileArchitecture,
  FileStructure,
  FileSchema,
  FileModel,
  FileTemplate,
  FilePattern,
  FileStyle,
  FileTheme,
  FileLayout,
  FileInterface,
  FileUI,
  FileUX,
  FileExperience,
  FileUser,
  FileCustomer,
  FileClient,
  FilePartner,
  FileVendor,
  FileSupplier,
  FileProvider,
  FileService,
  FileSolution,
  FileProduct,
  FileItem,
  FileAsset,
  FileResource,
  FileContent,
  FileData,
  FileInformation,
  FileKnowledge,
  FileWisdom,
  FileInsight,
  FileIntelligence,
  FileSmart,
  FileAI,
  FileML,
  FileDL,
  FileNeural,
  FileQuantum,
  FileBlockchain,
  FileCrypto,
  FileNFT,
  FileToken,
  FileCoin,
  FileCurrency,
  FileMoney,
  FileFinance,
  FileBanking,
  FilePayment,
  FileTransaction,
  FileTrade,
  FileExchange,
  FileMarket,
  FileEconomy,
  FileBusiness,
  FileCommerce,
  FileRetail,
  FileEcommerce,
  FileOnline,
  FileDigital,
  FileVirtual,
  FileCloud,
  FileWeb,
  FileInternet,
  FileNetwork,
  FileConnection,
  FileLink,
  FileURL,
  FileDomain,
  FileWebsite,
  FilePage,
  FileSite,
  FilePortal,
  FilePlatform as FilePlatformIcon,
  FileApp,
  FileMobile,
  FileDesktop,
  FileLaptop,
  FileTablet,
  FilePhone,
  FileWatch,
  FileTV,
  FileRadio,
  FileSpeaker,
  FileHeadphone,
  FileMicrophone,
  FileCamera,
  FileWebcam,
  FileScanner,
  FilePrinter,
  FileFax,
  FileCopier,
  FileProjector,
  FileDisplay,
  FileMonitor,
  FileScreen,
  FileKeyboard,
  FileMouse,
  FileTouchpad,
  FileTrackpad,
  FileJoystick,
  FileGamepad,
  FileController,
  FileRemote,
  FileDevice,
  FileGadget,
  FileTool,
  FileEquipment,
  FileMachine,
  FileRobot,
  FileAutomation as FileAutomationIcon,
  FileAI as FileAIIcon,
  FileSmart as FileSmartIcon,
  FileIntelligent,
  FileCognitive,
  FileLearning,
  FileTraining,
  FileEducation,
  FileTeaching,
  FileLearning as FileLearningIcon,
  FileStudy,
  FileResearch,
  FileDevelopment,
  FileCreation,
  FileBuilding,
  FileConstruction,
  FileManufacturing,
  FileProduction,
  FileAssembly,
  FileInstallation,
  FileSetup,
  FileConfiguration as FileConfigurationIcon,
  FileInstall,
  FileDeploy,
  FileLaunch,
  FileStart,
  FileRun,
  FileExecute,
  FilePlay,
  FilePause,
  FileStop,
  FileEnd,
  FileFinish,
  FileComplete,
  FileDone,
  FileSuccess as FileSuccessIcon,
  FileAchievement,
  FileAccomplishment,
  FileVictory,
  FileWin,
  FileTriumph,
  FileConquest,
  FileDomination,
  FileLeadership,
  FileManagement as FileManagementIcon,
  FileControl as FileControlIcon,
  FileCommand,
  FileOrder,
  FileInstruction,
  FileDirection,
  FileGuidance,
  FileAdvice,
  FileSuggestion,
  FileRecommendation,
  FileProposal,
  FileOffer,
  FileDeal,
  FileAgreement,
  FileContract,
  FileTerms,
  FileConditions,
  FileRules,
  FileRegulations,
  FilePolicies,
  FileProcedures,
  FileProcesses,
  FileWorkflows,
  FileOperations,
  FileActivities,
  FileTasks,
  FileJobs,
  FileWork,
  FileLabor,
  FileEffort,
  FileEnergy,
  FilePower,
  FileForce,
  FileStrength,
  FileMight,
  FileAbility,
  FileCapability,
  FileCapacity,
  FilePotential,
  FilePossibility,
  FileOpportunity,
  FileChance,
  FileLuck,
  FileFortune,
  FileSuccess as FileSuccessIcon2,
  FileAchievement as FileAchievementIcon,
  FileAccomplishment as FileAccomplishmentIcon,
  FileVictory as FileVictoryIcon,
  FileWin as FileWinIcon,
  FileTriumph as FileTriumphIcon,
  FileConquest as FileConquestIcon,
  FileDomination as FileDominationIcon,
  FileLeadership as FileLeadershipIcon,
  FileManagement as FileManagementIcon2,
  FileControl as FileControlIcon2,
  FileCommand as FileCommandIcon,
  FileOrder as FileOrderIcon,
  FileInstruction as FileInstructionIcon,
  FileDirection as FileDirectionIcon,
  FileGuidance as FileGuidanceIcon,
  FileAdvice as FileAdviceIcon,
  FileSuggestion as FileSuggestionIcon,
  FileRecommendation as FileRecommendationIcon,
  FileProposal as FileProposalIcon,
  FileOffer as FileOfferIcon,
  FileDeal as FileDealIcon,
  FileAgreement as FileAgreementIcon,
  FileContract as FileContractIcon,
  FileTerms as FileTermsIcon,
  FileConditions as FileConditionsIcon,
  FileRules as FileRulesIcon,
  FileRegulations as FileRegulationsIcon,
  FilePolicies as FilePoliciesIcon,
  FileProcedures as FileProceduresIcon,
  FileProcesses as FileProcessesIcon,
  FileWorkflows as FileWorkflowsIcon,
  FileOperations as FileOperationsIcon,
  FileActivities as FileActivitiesIcon,
  FileTasks as FileTasksIcon,
  FileJobs as FileJobsIcon,
  FileWork as FileWorkIcon,
  FileLabor as FileLaborIcon,
  FileEffort as FileEffortIcon,
  FileEnergy as FileEnergyIcon,
  FilePower as FilePowerIcon,
  FileForce as FileForceIcon,
  FileStrength as FileStrengthIcon,
  FileMight as FileMightIcon,
  FileAbility as FileAbilityIcon,
  FileCapability as FileCapabilityIcon,
  FileCapacity as FileCapacityIcon,
  FilePotential as FilePotentialIcon,
  FilePossibility as FilePossibilityIcon,
  FileOpportunity as FileOpportunityIcon,
  FileChance as FileChanceIcon,
  FileLuck as FileLuckIcon,
  FileFortune as FileFortuneIcon
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoData, setDemoData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const itServices = [
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      icon: Server,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      price: '$999/month',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 monitoring',
      features: [
        'Server management and optimization',
        'Network setup and configuration',
        'Security hardening and compliance',
        'Backup and disaster recovery solutions',
        'Performance monitoring and alerting',
        'Capacity planning and scaling',
        'Hardware maintenance and upgrades',
        'Cloud migration and hybrid solutions'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduce infrastructure costs by 40%',
        'Improve system performance by 200%',
        '24/7 monitoring and support'
      ],
      demo: {
        title: 'Infrastructure Dashboard Demo',
        description: 'Monitor your IT infrastructure in real-time',
        features: ['Server status', 'Network performance', 'Security alerts', 'Resource usage']
      },
      marketPrice: '$1,499-2,999/month',
      competitors: ['IBM', 'Dell Technologies', 'HPE'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/it-infrastructure'
      }
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services & Migration',
      icon: Cloud,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      price: '$1,299/month',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and GCP',
      features: [
        'Cloud strategy and planning',
        'Migration services and support',
        'Cost optimization and management',
        'Security configuration and compliance',
        'Multi-cloud and hybrid solutions',
        'Disaster recovery and backup',
        'Performance monitoring and optimization',
        'DevOps and CI/CD integration'
      ],
      benefits: [
        'Reduce cloud costs by 35%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Accelerate digital transformation'
      ],
      demo: {
        title: 'Cloud Migration Demo',
        description: 'See how we migrate your infrastructure to the cloud',
        features: ['Migration planning', 'Cost analysis', 'Security assessment', 'Performance optimization']
      },
      marketPrice: '$1,999-4,999/month',
      competitors: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/cloud-services'
      }
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity Solutions',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      price: '$1,599/month',
      description: 'Comprehensive cybersecurity solutions with threat detection, prevention, and response',
      features: [
        'Threat detection and monitoring',
        'Vulnerability assessment and penetration testing',
        'Security incident response',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Identity and access management',
        'Network security and firewall management',
        'Security awareness training',
        '24/7 security operations center (SOC)'
      ],
      benefits: [
        'Prevent 99.9% of cyber threats',
        'Reduce security incidents by 95%',
        'Ensure compliance with regulations',
        'Protect sensitive data and assets'
      ],
      demo: {
        title: 'Security Dashboard Demo',
        description: 'Monitor your security posture in real-time',
        features: ['Threat detection', 'Vulnerability scan', 'Compliance status', 'Incident response']
      },
      marketPrice: '$2,499-5,999/month',
      competitors: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/cybersecurity'
      }
    },
    {
      id: 'devops-cicd',
      title: 'DevOps & CI/CD Solutions',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      price: '$1,199/month',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      features: [
        'CI/CD pipeline setup and optimization',
        'Automated testing and quality assurance',
        'Container orchestration (Kubernetes, Docker)',
        'Infrastructure as Code (IaC)',
        'Monitoring and logging solutions',
        'Release management and deployment',
        'Team collaboration and communication',
        'Performance optimization and scaling'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Improve code quality and reliability',
        'Accelerate time to market',
        'Enhance team productivity'
      ],
      demo: {
        title: 'DevOps Pipeline Demo',
        description: 'See our automated CI/CD pipeline in action',
        features: ['Build automation', 'Testing pipeline', 'Deployment process', 'Monitoring dashboard']
      },
      marketPrice: '$1,799-3,999/month',
      competitors: ['GitLab', 'Jenkins', 'CircleCI'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/devops-cicd'
      }
    },
    {
      id: 'database-services',
      title: 'Database Services & Optimization',
      icon: Database,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      price: '$899/month',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery solutions',
        'Security hardening and compliance',
        'Data migration and synchronization',
        'Monitoring and alerting',
        'Capacity planning and scaling',
        'Disaster recovery planning'
      ],
      benefits: [
        'Improve database performance by 300%',
        'Reduce downtime by 95%',
        'Ensure data integrity and security',
        'Optimize storage and costs'
      ],
      demo: {
        title: 'Database Optimization Demo',
        description: 'See how we optimize your database performance',
        features: ['Performance analysis', 'Query optimization', 'Index recommendations', 'Capacity planning']
      },
      marketPrice: '$1,299-2,999/month',
      competitors: ['Oracle', 'Microsoft SQL Server', 'MongoDB'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/database-services'
      }
    },
    {
      id: 'network-services',
      title: 'Network Services & Management',
      icon: Network,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      price: '$1,099/month',
      description: 'Network design, implementation, and monitoring solutions for optimal performance',
      features: [
        'Network design and architecture',
        'Implementation and configuration',
        'Performance monitoring and optimization',
        'Security and firewall management',
        'Wireless network solutions',
        'VPN and remote access setup',
        'Network troubleshooting and support',
        'Capacity planning and upgrades'
      ],
      benefits: [
        'Improve network performance by 250%',
        'Reduce network downtime by 90%',
        'Enhance security and compliance',
        'Optimize bandwidth and costs'
      ],
      demo: {
        title: 'Network Management Demo',
        description: 'Monitor and manage your network infrastructure',
        features: ['Network topology', 'Performance metrics', 'Security status', 'Traffic analysis']
      },
      marketPrice: '$1,599-3,499/month',
      competitors: ['Cisco', 'Juniper Networks', 'Aruba Networks'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/network-services'
      }
    },
    {
      id: 'helpdesk-support',
      title: 'IT Helpdesk & Support Services',
      icon: Headphones,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      price: '$799/month',
      description: 'Comprehensive IT support and helpdesk services with 24/7 availability',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Software installation and updates',
        'Hardware troubleshooting and repair',
        'User training and education',
        'Ticket management and tracking',
        'Knowledge base and documentation',
        'SLA compliance and reporting'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve user satisfaction by 200%',
        'Minimize downtime and disruptions',
        'Enhance productivity and efficiency'
      ],
      demo: {
        title: 'Helpdesk Portal Demo',
        description: 'Experience our IT support portal',
        features: ['Ticket submission', 'Live chat support', 'Knowledge base', 'Status tracking']
      },
      marketPrice: '$1,199-2,499/month',
      competitors: ['ServiceNow', 'Freshworks', 'Zendesk'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/helpdesk-support'
      }
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup & Recovery Solutions',
      icon: HardDrive,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      price: '$699/month',
      description: 'Comprehensive data backup and disaster recovery solutions with 99.99% reliability',
      features: [
        'Automated backup scheduling',
        'Cloud and on-premises storage',
        'Disaster recovery planning',
        'Data encryption and security',
        'Point-in-time recovery',
        'Cross-platform compatibility',
        'Monitoring and alerting',
        'Compliance and audit support'
      ],
      benefits: [
        '99.99% data recovery success rate',
        'Reduce backup costs by 60%',
        'Minimize data loss and downtime',
        'Ensure business continuity'
      ],
      demo: {
        title: 'Backup Management Demo',
        description: 'Manage your data backup and recovery',
        features: ['Backup status', 'Recovery testing', 'Storage management', 'Compliance reporting']
      },
      marketPrice: '$999-2,499/month',
      competitors: ['Veeam', 'Acronis', 'Commvault'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/data-backup-recovery'
      }
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting & Strategy',
      icon: Briefcase,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      price: '$1,499/month',
      description: 'Strategic IT consulting and technology roadmap development for digital transformation',
      features: [
        'IT strategy and planning',
        'Technology assessment and evaluation',
        'Digital transformation consulting',
        'ROI analysis and business case development',
        'Vendor selection and management',
        'Project management and oversight',
        'Change management and training',
        'Performance measurement and optimization'
      ],
      benefits: [
        'Align IT with business objectives',
        'Reduce technology costs by 30%',
        'Accelerate digital transformation',
        'Improve operational efficiency'
      ],
      demo: {
        title: 'IT Strategy Demo',
        description: 'See our IT consulting approach',
        features: ['Strategy planning', 'Technology assessment', 'ROI analysis', 'Implementation roadmap']
      },
      marketPrice: '$2,499-5,999/month',
      competitors: ['Accenture', 'Deloitte', 'PwC'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/it-consulting'
      }
    },
    {
      id: 'mobile-device-management',
      title: 'Mobile Device Management (MDM)',
      icon: Smartphone,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      price: '$599/month',
      description: 'Comprehensive mobile device management and security solutions for enterprise mobility',
      features: [
        'Device enrollment and provisioning',
        'Security policy enforcement',
        'App management and distribution',
        'Remote wipe and lock capabilities',
        'Compliance monitoring and reporting',
        'Multi-platform support (iOS, Android, Windows)',
        'Integration with existing systems',
        'User training and support'
      ],
      benefits: [
        'Improve mobile security by 400%',
        'Reduce device management overhead by 70%',
        'Ensure compliance with policies',
        'Enhance user productivity'
      ],
      demo: {
        title: 'MDM Dashboard Demo',
        description: 'Manage your mobile devices securely',
        features: ['Device inventory', 'Security policies', 'App management', 'Compliance status']
      },
      marketPrice: '$899-1,999/month',
      competitors: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/mobile-device-management'
      }
    },
    {
      id: 'it-audit-compliance',
      title: 'IT Audit & Compliance Services',
      icon: FileText,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      price: '$1,299/month',
      description: 'Comprehensive IT audit and compliance services for regulatory requirements',
      features: [
        'Compliance assessment and gap analysis',
        'Risk assessment and management',
        'Audit planning and execution',
        'Regulatory compliance (SOX, GDPR, HIPAA)',
        'Documentation and reporting',
        'Remediation planning and support',
        'Continuous monitoring and improvement',
        'Training and awareness programs'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit costs by 40%',
        'Minimize compliance risks',
        'Improve governance and controls'
      ],
      demo: {
        title: 'Compliance Dashboard Demo',
        description: 'Track your compliance status',
        features: ['Compliance status', 'Risk assessment', 'Audit reports', 'Remediation tracking']
      },
      marketPrice: '$1,999-4,999/month',
      competitors: ['KPMG', 'EY', 'Deloitte'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/it-audit-compliance'
      }
    },
    {
      id: 'it-procurement',
      title: 'IT Procurement & Asset Management',
      icon: ShoppingCart,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      price: '$799/month',
      description: 'Strategic IT procurement and asset management services for cost optimization',
      features: [
        'Vendor evaluation and selection',
        'Contract negotiation and management',
        'Asset lifecycle management',
        'Cost optimization and savings',
        'License management and compliance',
        'Inventory tracking and reporting',
        'Disposal and recycling services',
        'Performance monitoring and analysis'
      ],
      benefits: [
        'Reduce IT costs by 25%',
        'Improve asset utilization by 150%',
        'Ensure license compliance',
        'Optimize procurement processes'
      ],
      demo: {
        title: 'Asset Management Demo',
        description: 'Manage your IT assets efficiently',
        features: ['Asset inventory', 'Cost tracking', 'License management', 'Vendor performance']
      },
      marketPrice: '$1,199-2,499/month',
      competitors: ['ServiceNow', 'BMC Helix', 'Ivanti'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/it-procurement'
      }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings across all IT services'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all IT solutions and infrastructure'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all IT services and infrastructure'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class IT engineers and consultants with proven track records'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment of IT solutions and services'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Serving clients worldwide with multi-timezone support and local expertise'
    }
  ];

  const handleDemoClick = async (serviceId: string) => {
    setIsLoading(true);
    setActiveDemo(serviceId);
    
    // Simulate demo data loading
    setTimeout(() => {
      setDemoData({
        [serviceId]: {
          status: 'ready',
          data: 'Demo data loaded successfully'
        }
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services and solutions for modern businesses. From infrastructure management to cybersecurity, we provide enterprise-grade IT services that drive results."
        keywords={['it services', 'it consulting', 'cybersecurity', 'cloud services', 'infrastructure management', 'devops', 'database services']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 transition-all duration-1000 cyber-scan-line">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Enterprise-Grade IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Comprehensive IT services and solutions designed to transform your business operations. 
                From infrastructure management to cybersecurity, we provide enterprise-grade IT services that drive results.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">12+ Services</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of IT services and solutions</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">99.9% Uptime</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Guaranteed uptime and reliability for all services</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for all solutions</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">24/7 Support</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Round-the-clock support and monitoring for all services</p>
                </div>
              </div>
            </div>
          </section>

          {/* IT Services Grid */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our IT Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {itServices.map((service, index) => (
                <div key={service.id} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Demo Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Live Demo:</h4>
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h5 className="text-sm font-medium text-white mb-2">{service.demo.title}</h5>
                      <p className="text-xs text-gray-300 mb-3">{service.demo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.demo.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDemoClick(service.id)}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading && activeDemo === service.id ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Loading Demo...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2" />
                          Try Live Demo
                        </div>
                      )}
                    </button>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col sm:flex-row gap-2 mb-4">
                      <a
                        href={`tel:${service.contact.phone}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:${service.contact.email}?subject=Interest in ${service.title}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        href={service.contact.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        View Full Demo →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our IT Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                    <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our IT services today and see the difference enterprise-grade solutions can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
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

export default ITServicesPage;