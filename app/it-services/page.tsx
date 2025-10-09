import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Code,
  Database,
  Cloud,
  Smartphone,
  FileText,
  Image,
  Video,
  Music,
  Settings,
  Lock,
  DollarSign,
  Award,
  Rocket,
  Heart,
  ShoppingCart,
  Calendar,
  Camera,
  Headphones,
  Printer,
  Wrench,
  Activity,
  Layers,
  Workflow,
  Mic,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bookmark,
  Flag,
  Bell,
  Gift,
  CreditCard,
  PieChart,
  LineChart,
  Scissors,
  Palette,
  Brush,
  Wand2,
  Lightbulb,
  Puzzle,
  Gamepad2,
  Car,
  Home,
  Plane,
  Train,
  Ship,
  Bike,
  Coffee,
  Utensils,
  Shirt,
  Shoe,
  Watch,
  Laptop,
  Monitor,
  Tablet,
  Mouse,
  Keyboard,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  Plug,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Umbrella,
  TreePine,
  Flower,
  Leaf,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  PawPrint,
  Baby,
  Child,
  User,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  Users2,
  UserCog,
  Crown,
  Gem,
  Diamond,
  StarHalf,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  HeartHandshake,
  Handshake,
  Hand,
  Fingerprint,
  QrCode,
  Barcode,
  Tag,
  Tags,
  Hash,
  AtSign,
  Percent,
  Plus,
  Minus,
  X,
  Divide,
  Equal,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Omega,
  Check,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  QuestionMarkCircle,
  ExclamationTriangle,
  Ban,
  LockKeyhole,
  Unlock,
  Key,
  KeyRound,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  ShieldQuestion,
  EyeOff,
  EyeCheck,
  SearchX,
  SearchCheck,
  FilterX,
  SortAsc,
  SortDesc,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Repeat,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Stop,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  SquareDot,
  CircleDot,
  TriangleDot,
  HexagonDot,
  OctagonDot,
  PentagonDot,
  SquareCheck,
  CircleCheck,
  TriangleCheck,
  HexagonCheck,
  OctagonCheck,
  PentagonCheck,
  SquareX,
  CircleX,
  TriangleX,
  HexagonX,
  OctagonX,
  PentagonX,
  SquarePlus,
  CirclePlus,
  TrianglePlus,
  HexagonPlus,
  OctagonPlus,
  PentagonPlus,
  SquareMinus,
  CircleMinus,
  TriangleMinus,
  HexagonMinus,
  OctagonMinus,
  PentagonMinus,
  SquareEqual,
  CircleEqual,
  TriangleEqual,
  HexagonEqual,
  OctagonEqual,
  PentagonEqual,
  SquareQuestion,
  CircleQuestion,
  TriangleQuestion,
  HexagonQuestion,
  OctagonQuestion,
  PentagonQuestion,
  SquareAlert,
  CircleAlert,
  TriangleAlert,
  HexagonAlert,
  OctagonAlert,
  PentagonAlert,
  SquareInfo,
  CircleInfo,
  TriangleInfo,
  HexagonInfo,
  OctagonInfo,
  PentagonInfo,
  SquareHelp,
  CircleHelp,
  TriangleHelp,
  HexagonHelp,
  OctagonHelp,
  PentagonHelp,
  SquareBan,
  CircleBan,
  TriangleBan,
  HexagonBan,
  OctagonBan,
  PentagonBan,
  SquareLock,
  CircleLock,
  TriangleLock,
  HexagonLock,
  OctagonLock,
  PentagonLock,
  SquareUnlock,
  CircleUnlock,
  TriangleUnlock,
  HexagonUnlock,
  OctagonUnlock,
  PentagonUnlock,
  SquareShield,
  CircleShield,
  TriangleShield,
  HexagonShield,
  OctagonShield,
  PentagonShield,
  SquareEye,
  CircleEye,
  TriangleEye,
  HexagonEye,
  OctagonEye,
  PentagonEye,
  SquareEyeOff,
  CircleEyeOff,
  TriangleEyeOff,
  HexagonEyeOff,
  OctagonEyeOff,
  PentagonEyeOff,
  SquareSearch,
  CircleSearch,
  TriangleSearch,
  HexagonSearch,
  OctagonSearch,
  PentagonSearch,
  SquareFilter,
  CircleFilter,
  TriangleFilter,
  HexagonFilter,
  OctagonFilter,
  PentagonFilter,
  SquareSort,
  CircleSort,
  TriangleSort,
  HexagonSort,
  OctagonSort,
  PentagonSort,
  SquareArrow,
  CircleArrow,
  TriangleArrow,
  HexagonArrow,
  OctagonArrow,
  PentagonArrow,
  SquareChevron,
  CircleChevron,
  TriangleChevron,
  HexagonChevron,
  OctagonChevron,
  PentagonChevron,
  SquareRotate,
  CircleRotate,
  TriangleRotate,
  HexagonRotate,
  OctagonRotate,
  PentagonRotate,
  SquareRefresh,
  CircleRefresh,
  TriangleRefresh,
  HexagonRefresh,
  OctagonRefresh,
  PentagonRefresh,
  SquareRepeat,
  CircleRepeat,
  TriangleRepeat,
  HexagonRepeat,
  OctagonRepeat,
  PentagonRepeat,
  SquareShuffle,
  CircleShuffle,
  TriangleShuffle,
  HexagonShuffle,
  OctagonShuffle,
  PentagonShuffle,
  SquareSkip,
  CircleSkip,
  TriangleSkip,
  HexagonSkip,
  OctagonSkip,
  PentagonSkip,
  SquarePlay,
  CirclePlay,
  TrianglePlay,
  HexagonPlay,
  OctagonPlay,
  PentagonPlay,
  SquarePause,
  CirclePause,
  TrianglePause,
  HexagonPause,
  OctagonPause,
  PentagonPause,
  SquareStop,
  CircleStop,
  TriangleStop,
  HexagonStop,
  OctagonStop,
  PentagonStop,
  SquareSquare,
  CircleSquare,
  TriangleSquare,
  HexagonSquare,
  OctagonSquare,
  PentagonSquare,
  SquareCircle,
  CircleCircle,
  TriangleCircle,
  HexagonCircle,
  OctagonCircle,
  PentagonCircle,
  SquareTriangle,
  CircleTriangle,
  TriangleTriangle,
  HexagonTriangle,
  OctagonTriangle,
  PentagonTriangle,
  SquareHexagon,
  CircleHexagon,
  TriangleHexagon,
  HexagonHexagon,
  OctagonHexagon,
  PentagonHexagon,
  SquareOctagon,
  CircleOctagon,
  TriangleOctagon,
  HexagonOctagon,
  OctagonOctagon,
  PentagonOctagon,
  SquarePentagon,
  CirclePentagon,
  TrianglePentagon,
  HexagonPentagon,
  OctagonPentagon,
  PentagonPentagon
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    // Infrastructure Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and management with 99.9% uptime guarantee.',
      icon: Cloud,
      price: 2999,
      period: 'month',
      features: [
        'Multi-Cloud Strategy',
        'Infrastructure as Code',
        'Auto-Scaling',
        'Disaster Recovery',
        'Cost Optimization',
        'Security Hardening',
        '24/7 Monitoring',
        'Performance Tuning'
      ],
      category: 'Infrastructure',
      popular: true,
      savings: '$15,000/year vs in-house team',
      marketPrice: '$5,000-10,000/month',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      benefits: 'Reduce infrastructure costs by 40%',
      rating: 4.9,
      clients: '200+',
      demoUrl: 'https://ziontechgroup.com/cloud-infrastructure',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'cybersecurity',
      name: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions including threat detection, incident response, and compliance management.',
      icon: Shield,
      price: 2499,
      period: 'month',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Penetration Testing',
        'SOC Services',
        'Compliance Management',
        'Security Training',
        'Incident Response',
        'Risk Assessment'
      ],
      category: 'Security',
      popular: true,
      savings: '$20,000/year vs security consultants',
      marketPrice: '$4,000-8,000/month',
      technologies: ['SIEM', 'EDR', 'MDR', 'Firewalls', 'Penetration Testing', 'Security Analytics'],
      benefits: 'Reduce security incidents by 80%',
      rating: 4.8,
      clients: '150+',
      demoUrl: 'https://ziontechgroup.com/cybersecurity',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'network-management',
      name: 'Network Infrastructure',
      description: 'Design, implement, and manage enterprise networks with advanced monitoring and optimization.',
      icon: Wifi,
      price: 1999,
      period: 'month',
      features: [
        'Network Design & Implementation',
        'Wireless Solutions',
        'VPN & Remote Access',
        'Network Monitoring',
        'Traffic Optimization',
        'Load Balancing',
        'Network Security',
        'Performance Analytics'
      ],
      category: 'Infrastructure',
      popular: false,
      savings: '$12,000/year vs network specialists',
      marketPrice: '$3,000-6,000/month',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Wireshark', 'Nagios', 'Zabbix'],
      benefits: 'Improve network reliability by 50%',
      rating: 4.7,
      clients: '180+',
      demoUrl: 'https://ziontechgroup.com/network-management',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'data-center',
      name: 'Data Center Services',
      description: 'Complete data center management including hardware, virtualization, and disaster recovery.',
      icon: Server,
      price: 3999,
      period: 'month',
      features: [
        'Hardware Management',
        'Virtualization',
        'Backup & Recovery',
        'Power Management',
        'Environmental Monitoring',
        'Capacity Planning',
        'Disaster Recovery',
        'Maintenance & Support'
      ],
      category: 'Infrastructure',
      popular: false,
      savings: '$25,000/year vs data center costs',
      marketPrice: '$6,000-12,000/month',
      technologies: ['VMware', 'Hyper-V', 'SAN', 'NAS', 'UPS', 'Environmental Controls'],
      benefits: 'Achieve 99.99% uptime',
      rating: 4.8,
      clients: '120+',
      demoUrl: 'https://ziontechgroup.com/data-center',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'devops-automation',
      name: 'DevOps & Automation',
      description: 'Streamline development and deployment with CI/CD pipelines, infrastructure automation, and monitoring.',
      icon: Code,
      price: 1799,
      period: 'month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure Automation',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Testing Automation',
        'Deployment Strategies',
        'Version Control',
        'Performance Optimization'
      ],
      category: 'Development',
      popular: true,
      savings: '$18,000/year vs DevOps engineers',
      marketPrice: '$3,500-7,000/month',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
      benefits: 'Deploy 10x faster',
      rating: 4.7,
      clients: '220+',
      demoUrl: 'https://ziontechgroup.com/devops-automation',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'database-management',
      name: 'Database Administration',
      description: 'Expert database management including optimization, backup, security, and performance tuning.',
      icon: Database,
      price: 1299,
      period: 'month',
      features: [
        'Database Design & Optimization',
        'Backup & Recovery',
        'Performance Tuning',
        'Security Hardening',
        'Migration Services',
        'Monitoring & Alerting',
        'Capacity Planning',
        '24/7 Support'
      ],
      category: 'Data Management',
      popular: false,
      savings: '$8,000/year vs DBA consultants',
      marketPrice: '$2,500-5,000/month',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      benefits: 'Improve database performance by 60%',
      rating: 4.6,
      clients: '160+',
      demoUrl: 'https://ziontechgroup.com/database-management',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'help-desk',
      name: 'IT Help Desk Services',
      description: '24/7 technical support for end users with advanced ticketing and remote assistance.',
      icon: Headphones,
      price: 899,
      period: 'month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Ticket Management',
        'Knowledge Base',
        'User Training',
        'Software Installation',
        'Hardware Troubleshooting',
        'Performance Reports'
      ],
      category: 'Support',
      popular: true,
      savings: '$6,000/year vs in-house support',
      marketPrice: '$1,500-3,000/month',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'Slack', 'Microsoft Teams'],
      benefits: 'Resolve 95% of issues remotely',
      rating: 4.5,
      clients: '300+',
      demoUrl: 'https://ziontechgroup.com/help-desk',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'backup-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with automated testing and rapid disaster recovery capabilities.',
      icon: HardDrive,
      price: 1199,
      period: 'month',
      features: [
        'Automated Backups',
        'Disaster Recovery Planning',
        'Data Replication',
        'Recovery Testing',
        'Compliance Backup',
        'Cloud Storage',
        'Recovery Time Optimization',
        'Business Continuity'
      ],
      category: 'Data Management',
      popular: false,
      savings: '$7,500/year vs backup solutions',
      marketPrice: '$1,800-3,500/month',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS S3', 'Azure Backup', 'Google Cloud Storage'],
      benefits: 'Recover from disasters in minutes',
      rating: 4.7,
      clients: '200+',
      demoUrl: 'https://ziontechgroup.com/backup-recovery',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'email-systems',
      name: 'Email & Communication Systems',
      description: 'Enterprise email solutions with security, archiving, and advanced collaboration features.',
      icon: Mail,
      price: 799,
      period: 'month',
      features: [
        'Email Server Management',
        'Security & Spam Protection',
        'Email Archiving',
        'Mobile Device Management',
        'Collaboration Tools',
        'Compliance Features',
        'Migration Services',
        'Performance Monitoring'
      ],
      category: 'Communication',
      popular: false,
      savings: '$4,800/year vs email services',
      marketPrice: '$1,200-2,500/month',
      technologies: ['Microsoft Exchange', 'Office 365', 'Google Workspace', 'Zimbra', 'Postfix', 'Dovecot'],
      benefits: 'Improve email security by 90%',
      rating: 4.4,
      clients: '250+',
      demoUrl: 'https://ziontechgroup.com/email-systems',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'monitoring',
      name: 'IT Monitoring & Analytics',
      description: 'Comprehensive monitoring of IT infrastructure with predictive analytics and automated alerting.',
      icon: Activity,
      price: 999,
      period: 'month',
      features: [
        'Infrastructure Monitoring',
        'Performance Analytics',
        'Predictive Maintenance',
        'Automated Alerting',
        'Custom Dashboards',
        'Capacity Planning',
        'Trend Analysis',
        'Reporting & Insights'
      ],
      category: 'Monitoring',
      popular: false,
      savings: '$6,000/year vs monitoring tools',
      marketPrice: '$1,500-3,000/month',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'ELK Stack', 'Splunk'],
      benefits: 'Prevent 90% of issues before they occur',
      rating: 4.6,
      clients: '180+',
      demoUrl: 'https://ziontechgroup.com/monitoring',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'mobile-management',
      name: 'Mobile Device Management',
      description: 'Complete mobile device lifecycle management with security, app management, and compliance.',
      icon: Smartphone,
      price: 599,
      period: 'month',
      features: [
        'Device Enrollment',
        'Security Policies',
        'App Management',
        'Remote Wipe',
        'Compliance Monitoring',
        'Location Tracking',
        'Update Management',
        'User Support'
      ],
      category: 'Mobile',
      popular: false,
      savings: '$3,600/year vs MDM solutions',
      marketPrice: '$1,200-2,500/month',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf', 'AirWatch', 'Samsung Knox'],
      benefits: 'Secure 100% of mobile devices',
      rating: 4.5,
      clients: '220+',
      demoUrl: 'https://ziontechgroup.com/mobile-management',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'print-services',
      name: 'Print & Document Management',
      description: 'Enterprise print management with document workflow, security, and cost optimization.',
      icon: Printer,
      price: 499,
      period: 'month',
      features: [
        'Print Server Management',
        'Document Workflow',
        'Print Security',
        'Cost Tracking',
        'Driver Management',
        'Mobile Printing',
        'Maintenance Services',
        'Usage Analytics'
      ],
      category: 'Document Management',
      popular: false,
      savings: '$2,400/year vs print services',
      marketPrice: '$800-1,500/month',
      technologies: ['Print Servers', 'Document Management', 'Print Security', 'Cost Tracking', 'Mobile Printing'],
      benefits: 'Reduce print costs by 40%',
      rating: 4.3,
      clients: '150+',
      demoUrl: 'https://ziontechgroup.com/print-services',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and digital transformation consulting services.',
      icon: Brain,
      price: 299,
      period: 'hour',
      features: [
        'IT Strategy Development',
        'Digital Transformation Planning',
        'Technology Assessment',
        'Vendor Evaluation',
        'IT Governance',
        'Change Management',
        'Training & Knowledge Transfer',
        'Project Management'
      ],
      category: 'Consulting',
      popular: true,
      savings: '$50,000/year vs IT consultants',
      marketPrice: '$500-800/hour',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Change Management', 'Vendor Management'],
      benefits: 'Align IT with business objectives',
      rating: 4.9,
      clients: '300+',
      demoUrl: 'https://ziontechgroup.com/it-consulting',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'managed-it',
      name: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, and maintenance.',
      icon: Settings,
      price: 99,
      period: 'user/month',
      features: [
        '24/7 Helpdesk Support',
        'Proactive Monitoring',
        'Software License Management',
        'Asset Management',
        'User Training',
        'Incident Management',
        'Change Management',
        'Regular Reporting'
      ],
      category: 'Managed Services',
      popular: true,
      savings: '$30,000/year vs in-house IT',
      marketPrice: '$150-250/user/month',
      technologies: ['RMM Tools', 'PSA Software', 'Asset Management', 'Monitoring', 'Helpdesk'],
      benefits: 'Reduce IT costs by 30%',
      rating: 4.7,
      clients: '250+',
      demoUrl: 'https://ziontechgroup.com/managed-it',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless cloud migration with ongoing management and optimization.',
      icon: Cloud,
      price: 2500,
      period: 'month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Execution',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring',
        'Multi-cloud Management',
        'Training & Support',
        'Ongoing Optimization'
      ],
      category: 'Cloud Services',
      popular: false,
      savings: '$40,000/year vs cloud consultants',
      marketPrice: '$5,000-10,000/month',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'CloudFormation'],
      benefits: 'Reduce infrastructure costs by 40%',
      rating: 4.8,
      clients: '180+',
      demoUrl: 'https://ziontechgroup.com/cloud-migration',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'compliance',
      name: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance management and governance frameworks for regulatory requirements.',
      icon: Shield,
      price: 1400,
      period: 'month',
      features: [
        'Compliance Assessment',
        'Policy Development',
        'Risk Management',
        'Audit Preparation',
        'Training & Awareness',
        'Documentation Management',
        'Regulatory Updates',
        'Continuous Monitoring'
      ],
      category: 'Compliance',
      popular: false,
      savings: '$25,000/year vs compliance consultants',
      marketPrice: '$2,500-5,000/month',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Document Management', 'Training Systems', 'Audit Tools'],
      benefits: 'Ensure 100% compliance',
      rating: 4.6,
      clients: '120+',
      demoUrl: 'https://ziontechgroup.com/compliance',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'asset-management',
      name: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control.',
      icon: Package,
      price: 600,
      period: 'month',
      features: [
        'Asset Discovery & Inventory',
        'Lifecycle Management',
        'Cost Tracking & Optimization',
        'License Management',
        'Depreciation Tracking',
        'Procurement Support',
        'Compliance Reporting',
        'Asset Analytics'
      ],
      category: 'Asset Management',
      popular: false,
      savings: '$15,000/year vs asset management tools',
      marketPrice: '$1,200-2,500/month',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'Snipe-IT', 'Asset Panda', 'Freshservice'],
      benefits: 'Reduce IT costs by 25%',
      rating: 4.4,
      clients: '200+',
      demoUrl: 'https://ziontechgroup.com/asset-management',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'virtualization',
      name: 'Virtualization Services',
      description: 'Complete virtualization solutions including server, desktop, and application virtualization.',
      icon: Monitor,
      price: 1899,
      period: 'month',
      features: [
        'Server Virtualization',
        'Desktop Virtualization',
        'Application Virtualization',
        'Storage Virtualization',
        'Network Virtualization',
        'Cloud Integration',
        'Performance Optimization',
        'Disaster Recovery'
      ],
      category: 'Virtualization',
      popular: false,
      savings: '$20,000/year vs virtualization specialists',
      marketPrice: '$3,500-7,000/month',
      technologies: ['VMware', 'Hyper-V', 'Citrix', 'VDI', 'Docker', 'Kubernetes'],
      benefits: 'Reduce hardware costs by 60%',
      rating: 4.7,
      clients: '140+',
      demoUrl: 'https://ziontechgroup.com/virtualization',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'web-development',
      name: 'Web Development & Maintenance',
      description: 'Custom web development, maintenance, and optimization services for businesses of all sizes.',
      icon: Globe,
      price: 1299,
      period: 'month',
      features: [
        'Custom Web Development',
        'Website Maintenance',
        'Performance Optimization',
        'Security Updates',
        'Content Management',
        'SEO Optimization',
        'Mobile Responsiveness',
        'Analytics & Reporting'
      ],
      category: 'Development',
      popular: false,
      savings: '$18,000/year vs web developers',
      marketPrice: '$2,500-5,000/month',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'PHP', 'WordPress'],
      benefits: 'Improve website performance by 50%',
      rating: 4.5,
      clients: '280+',
      demoUrl: 'https://ziontechgroup.com/web-development',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development, integration, and management services for seamless system connectivity.',
      icon: Code,
      price: 1599,
      period: 'month',
      features: [
        'Custom API Development',
        'API Integration',
        'API Management',
        'Documentation',
        'Testing & Validation',
        'Security Implementation',
        'Performance Monitoring',
        'Version Control'
      ],
      category: 'Development',
      popular: false,
      savings: '$22,000/year vs API developers',
      marketPrice: '$3,000-6,000/month',
      technologies: ['REST APIs', 'GraphQL', 'SOAP', 'API Gateway', 'Postman', 'Swagger'],
      benefits: 'Connect all your systems seamlessly',
      rating: 4.6,
      clients: '160+',
      demoUrl: 'https://ziontechgroup.com/api-development',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length, icon: Layers },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length, icon: Server },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length, icon: Shield },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length, icon: Code },
    { name: 'Data Management', count: itServices.filter(s => s.category === 'Data Management').length, icon: Database },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length, icon: Headphones },
    { name: 'Communication', count: itServices.filter(s => s.category === 'Communication').length, icon: Mail },
    { name: 'Monitoring', count: itServices.filter(s => s.category === 'Monitoring').length, icon: Activity },
    { name: 'Mobile', count: itServices.filter(s => s.category === 'Mobile').length, icon: Smartphone },
    { name: 'Document Management', count: itServices.filter(s => s.category === 'Document Management').length, icon: Printer },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length, icon: Brain },
    { name: 'Managed Services', count: itServices.filter(s => s.category === 'Managed Services').length, icon: Settings },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length, icon: Cloud },
    { name: 'Compliance', count: itServices.filter(s => s.category === 'Compliance').length, icon: Shield },
    { name: 'Asset Management', count: itServices.filter(s => s.category === 'Asset Management').length, icon: Package },
    { name: 'Virtualization', count: itServices.filter(s => s.category === 'Virtualization').length, icon: Monitor }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const pricingPlans = [
    {
      name: 'Basic IT Support',
      price: 999,
      period: 'month',
      description: 'Essential IT services for small businesses',
      features: [
        'Help Desk Support',
        'Basic Monitoring',
        'Email Management',
        'Backup Services',
        'Security Updates',
        'Remote Support'
      ],
      popular: false
    },
    {
      name: 'Professional IT',
      price: 2499,
      period: 'month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'All Basic Services',
        'Cloud Infrastructure',
        'Advanced Security',
        'Network Management',
        'DevOps Support',
        'Database Administration',
        '24/7 Monitoring',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise IT',
      price: 4999,
      period: 'month',
      description: 'Full-scale IT services for large organizations',
      features: [
        'All Professional Services',
        'Data Center Management',
        'Advanced Analytics',
        'Custom Solutions',
        'Dedicated Team',
        'SLA Guarantee',
        'Compliance Management',
        'Strategic Consulting'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to keep your business running smoothly. From infrastructure to security, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Clients Served</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">15min</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name === 'All' ? 'all' : category.name)}
                className={`cyber-card hologram-card p-4 text-center hover:scale-105 transition-all duration-300 ${
                  selectedCategory === category.name.toLowerCase() || 
                  (selectedCategory === 'all' && category.name === 'All')
                    ? 'ring-2 ring-cyan-400' 
                    : ''
                }`}
              >
                <category.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} services</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-1">/{service.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                      <div className="text-xs text-green-400">{service.savings}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-yellow-400 mb-1">{service.benefits}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {service.rating} • {service.clients} clients
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <div className="space-y-2">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cyber-button text-center block"
                  >
                    Try Free Demo
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block"
                  >
                    Get Started
                  </a>
                </div>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  {service.contactInfo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your IT Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and advanced threat protection.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support to keep your systems running.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proactive Management</h3>
              <p className="text-gray-300">Predictive maintenance and optimization to prevent issues before they occur.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud Expertise</h3>
              <p className="text-gray-300">Deep expertise in AWS, Azure, and Google Cloud platforms.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored IT solutions designed specifically for your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Trusted by 500+ businesses with proven ROI and success stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts assess your current IT setup and recommend the best solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free IT assessment • ✓ Custom recommendations • ✓ No obligation</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;