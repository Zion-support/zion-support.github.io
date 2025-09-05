import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, 
  ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, 
  HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, 
  ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Target, Heart, 
  GraduationCap, PieChart, Truck, Home, Video, ClipboardList, Eye, Bot,
  Phone, Mail, MapPin, Activity, RefreshCw, Layers, Compass, Lightning,
  Wifi as WiFi, Bluetooth, Headphones, Printer, Keyboard, Mouse,
  CreditCard, Wallet, Receipt, Calculator, Clock3, Timer,
  AlertTriangle, Info, HelpCircle, ThumbsUp, ThumbsDown, MessageCircle,
  Share2, Download, Upload, Copy, Edit, Trash, Save, Plus, Minus,
  X, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize,
  Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Grip,
  Filter, SortAsc, SortDesc, Grid, List, Layout, Sidebar, Menu,
  Bell, BellOff, Star as StarIcon, Bookmark, Flag, Tag, Hash,
  AtSign, Percent, Hash as HashIcon, DollarSign as Dollar,
  Euro, PoundSterling, Bitcoin, 
  Database as DB, Server as ServerIcon, HardDrive as HD,
  Cpu as CPU, MemoryStick, HardDrive as Storage, Wifi as WiFiIcon,
  Bluetooth as BT, Headphones as Headset, Printer as Print,
  Keyboard as KB, Mouse as MouseIcon, User
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const itServices = [
  // Cloud & Infrastructure Services
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management with 24/7 monitoring.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery', 'Security Hardening'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud & Infrastructure',
    popular: true,
    benefits: ['Reduced Costs', 'Better Scalability', 'Enhanced Security', 'Improved Performance'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/cloud-infrastructure'
  },
  {
    title: 'Hybrid Cloud Solutions',
    description: 'Seamless integration between on-premises and cloud environments with unified management and security.',
    icon: Server,
    features: ['Hybrid Architecture', 'Unified Management', 'Data Synchronization', 'Security Integration', 'Cost Optimization'],
    pricing: '$15,000 - $75,000/project',
    category: 'Cloud & Infrastructure',
    benefits: ['Flexibility', 'Cost Control', 'Security', 'Scalability'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/hybrid-cloud'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed computing infrastructure for low-latency applications and IoT deployments with global edge nodes.',
    icon: Globe,
    features: ['Edge Node Deployment', 'Latency Optimization', 'IoT Integration', 'Global Distribution', 'Real-time Processing'],
    pricing: '$25,000 - $150,000/project',
    category: 'Cloud & Infrastructure',
    benefits: ['Low Latency', 'Better Performance', 'IoT Support', 'Global Reach'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/edge-computing'
  },
  {
    title: 'Cloud Migration Services',
    description: 'Complete cloud migration strategy and execution with minimal downtime and data integrity assurance.',
    icon: RefreshCw,
    features: ['Migration Planning', 'Data Migration', 'Application Modernization', 'Zero Downtime', 'Testing & Validation'],
    pricing: '$10,000 - $100,000/project',
    category: 'Cloud & Infrastructure',
    benefits: ['Smooth Transition', 'Cost Savings', 'Better Performance', 'Enhanced Security'],
    marketPrice: '$15,000 - $150,000/project',
    link: 'https://ziontechgroup.com/cloud-migration'
  },

  // Cybersecurity Services
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data with 24/7 threat monitoring.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Compliance Management'],
    pricing: '$5,000 - $40,000/project',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Enhanced Security', 'Risk Mitigation', 'Compliance', 'Peace of Mind'],
    marketPrice: '$8,000 - $60,000/project',
    link: 'https://ziontechgroup.com/cybersecurity'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and least privilege access.',
    icon: Lock,
    features: ['Identity Verification', 'Network Segmentation', 'Continuous Monitoring', 'Access Control', 'Threat Detection'],
    pricing: '$20,000 - $100,000/project',
    category: 'Cybersecurity',
    benefits: ['Enhanced Security', 'Better Control', 'Compliance', 'Risk Reduction'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/zero-trust'
  },
  {
    title: 'Penetration Testing Services',
    description: 'Comprehensive security testing to identify vulnerabilities and strengthen your security posture.',
    icon: Target,
    features: ['Vulnerability Assessment', 'Social Engineering Tests', 'Network Penetration', 'Web Application Testing', 'Report & Remediation'],
    pricing: '$3,000 - $25,000/project',
    category: 'Cybersecurity',
    benefits: ['Vulnerability Discovery', 'Security Hardening', 'Compliance', 'Risk Assessment'],
    marketPrice: '$5,000 - $40,000/project',
    link: 'https://ziontechgroup.com/penetration-testing'
  },
  {
    title: 'Security Operations Center (SOC)',
    description: '24/7 security monitoring and incident response with advanced threat detection and analysis.',
    icon: Monitor,
    features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Forensic Analysis', 'Security Reporting'],
    pricing: '$5,000 - $20,000/month',
    category: 'Cybersecurity',
    benefits: ['Continuous Protection', 'Faster Response', 'Expert Analysis', 'Compliance'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/soc-services'
  },

  // Network & Infrastructure
  {
    title: 'Network Infrastructure Design',
    description: 'Design, implementation, and management of robust network infrastructure with high availability and performance.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting', 'Capacity Planning'],
    pricing: '$120 - $220/hour',
    category: 'Network & Infrastructure',
    benefits: ['Better Performance', 'Reliability', 'Scalability', 'Cost Optimization'],
    marketPrice: '$150 - $300/hour',
    link: 'https://ziontechgroup.com/network-infrastructure'
  },
  {
    title: 'SD-WAN Implementation',
    description: 'Software-defined wide area network solutions for improved connectivity, security, and cost efficiency.',
    icon: Wifi,
    features: ['SD-WAN Design', 'Branch Connectivity', 'Traffic Optimization', 'Security Integration', 'Management Platform'],
    pricing: '$15,000 - $75,000/project',
    category: 'Network & Infrastructure',
    benefits: ['Cost Savings', 'Better Performance', 'Enhanced Security', 'Simplified Management'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/sd-wan'
  },
  {
    title: 'Network Security Implementation',
    description: 'Comprehensive network security solutions including firewalls, intrusion detection, and access control.',
    icon: Shield,
    features: ['Firewall Configuration', 'Intrusion Detection', 'Access Control', 'VPN Setup', 'Security Monitoring'],
    pricing: '$8,000 - $40,000/project',
    category: 'Network & Infrastructure',
    benefits: ['Enhanced Security', 'Better Control', 'Compliance', 'Threat Prevention'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/network-security'
  },

  // Database & Data Management
  {
    title: 'Database Management Services',
    description: 'Comprehensive database solutions including design, optimization, and maintenance with 24/7 support.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services', 'Monitoring'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database & Data',
    benefits: ['Better Performance', 'Data Security', 'Reliability', 'Cost Optimization'],
    marketPrice: '$3,000 - $25,000/project',
    link: 'https://ziontechgroup.com/database-management'
  },
  {
    title: 'Data Warehouse Solutions',
    description: 'Enterprise data warehouse design and implementation with ETL processes and business intelligence integration.',
    icon: BarChart3,
    features: ['Data Warehouse Design', 'ETL Development', 'BI Integration', 'Data Governance', 'Performance Optimization'],
    pricing: '$25,000 - $150,000/project',
    category: 'Database & Data',
    benefits: ['Better Analytics', 'Data Integration', 'Business Insights', 'Scalability'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/data-warehouse'
  },
  {
    title: 'Big Data Analytics Platform',
    description: 'Scalable big data processing and analytics platform with real-time insights and machine learning integration.',
    icon: TrendingUp,
    features: ['Big Data Processing', 'Real-time Analytics', 'ML Integration', 'Data Visualization', 'Scalable Architecture'],
    pricing: '$50,000 - $300,000/project',
    category: 'Database & Data',
    benefits: ['Real-time Insights', 'Scalability', 'Better Decisions', 'Competitive Advantage'],
    marketPrice: '$75,000 - $500,000/project',
    link: 'https://ziontechgroup.com/big-data-analytics'
  },

  // System Administration & Support
  {
    title: 'System Administration Services',
    description: '24/7 system administration and maintenance services for your IT infrastructure with proactive monitoring.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management', 'Performance Tuning'],
    pricing: '$2,000 - $8,000/month',
    category: 'System Administration',
    benefits: ['Reliability', 'Performance', 'Security', 'Cost Savings'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/system-administration'
  },
  {
    title: 'IT Help Desk Services',
    description: 'Comprehensive IT support and help desk services with multi-channel support and SLA guarantees.',
    icon: Headphones,
    features: ['Multi-channel Support', 'SLA Guarantees', 'Remote Support', 'Knowledge Base', 'Incident Management'],
    pricing: '$1,500 - $6,000/month',
    category: 'System Administration',
    benefits: ['Faster Resolution', 'Better Support', 'Cost Efficiency', 'User Satisfaction'],
    marketPrice: '$2,500 - $10,000/month',
    link: 'https://ziontechgroup.com/help-desk'
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization.',
    icon: ClipboardList,
    features: ['Asset Inventory', 'Lifecycle Management', 'Maintenance Scheduling', 'Cost Tracking', 'Compliance Reporting'],
    pricing: '$1,000 - $5,000/month',
    category: 'System Administration',
    benefits: ['Cost Control', 'Better Planning', 'Compliance', 'Efficiency'],
    marketPrice: '$1,500 - $8,000/month',
    link: 'https://ziontechgroup.com/asset-management'
  },

  // AI & Machine Learning Infrastructure
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI/ML infrastructure with GPU clusters, data pipelines, and model deployment with MLOps.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'Data Pipeline Design', 'Model Deployment', 'MLOps Implementation', 'Monitoring'],
    pricing: '$75,000 - $300,000/project',
    category: 'AI & ML Infrastructure',
    benefits: ['AI Capabilities', 'Scalability', 'Better Performance', 'Cost Optimization'],
    marketPrice: '$100,000 - $500,000/project',
    link: 'https://ziontechgroup.com/ai-infrastructure'
  },
  {
    title: 'Machine Learning Operations (MLOps)',
    description: 'End-to-end MLOps platform for model development, deployment, monitoring, and continuous improvement.',
    icon: Bot,
    features: ['Model Development', 'Automated Deployment', 'Model Monitoring', 'A/B Testing', 'Continuous Integration'],
    pricing: '$25,000 - $150,000/project',
    category: 'AI & ML Infrastructure',
    benefits: ['Faster Deployment', 'Better Models', 'Automation', 'Scalability'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/mlops'
  },
  {
    title: 'Data Science Platform',
    description: 'Comprehensive data science platform with tools for data exploration, modeling, and visualization.',
    icon: BarChart3,
    features: ['Data Exploration', 'Model Development', 'Visualization Tools', 'Collaboration Features', 'Version Control'],
    pricing: '$15,000 - $75,000/project',
    category: 'AI & ML Infrastructure',
    benefits: ['Better Insights', 'Faster Development', 'Collaboration', 'Reproducibility'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/data-science-platform'
  },

  // DevOps & Automation
  {
    title: 'DevOps Implementation',
    description: 'Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated testing.',
    icon: Code,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Monitoring', 'Security Integration'],
    pricing: '$20,000 - $100,000/project',
    category: 'DevOps & Automation',
    benefits: ['Faster Delivery', 'Better Quality', 'Automation', 'Scalability'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/devops'
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Automated infrastructure provisioning and management using Terraform, Ansible, and cloud-native tools.',
    icon: Settings,
    features: ['Terraform Implementation', 'Ansible Automation', 'Cloud Templates', 'Version Control', 'Testing'],
    pricing: '$10,000 - $50,000/project',
    category: 'DevOps & Automation',
    benefits: ['Consistency', 'Automation', 'Version Control', 'Cost Savings'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/infrastructure-as-code'
  },
  {
    title: 'Container Orchestration',
    description: 'Kubernetes and Docker container orchestration with microservices architecture and service mesh.',
    icon: Layers,
    features: ['Kubernetes Setup', 'Docker Implementation', 'Service Mesh', 'Monitoring', 'Security'],
    pricing: '$15,000 - $75,000/project',
    category: 'DevOps & Automation',
    benefits: ['Scalability', 'Portability', 'Efficiency', 'Modern Architecture'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/container-orchestration'
  },

  // Backup & Disaster Recovery
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup and disaster recovery solutions with automated testing and RTO/RPO optimization.',
    icon: HardDrive,
    features: ['Automated Backups', 'Disaster Recovery Planning', 'RTO/RPO Optimization', 'Testing', 'Monitoring'],
    pricing: '$5,000 - $30,000/project',
    category: 'Backup & Recovery',
    benefits: ['Data Protection', 'Business Continuity', 'Compliance', 'Peace of Mind'],
    marketPrice: '$8,000 - $50,000/project',
    link: 'https://ziontechgroup.com/backup-disaster-recovery'
  },
  {
    title: 'Business Continuity Planning',
    description: 'Comprehensive business continuity planning with risk assessment, recovery procedures, and testing.',
    icon: AlertTriangle,
    features: ['Risk Assessment', 'Recovery Procedures', 'Testing', 'Documentation', 'Training'],
    pricing: '$10,000 - $50,000/project',
    category: 'Backup & Recovery',
    benefits: ['Risk Mitigation', 'Business Continuity', 'Compliance', 'Preparedness'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/business-continuity'
  },

  // Compliance & Governance
  {
    title: 'IT Compliance Management',
    description: 'Comprehensive IT compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
    icon: CheckCircle,
    features: ['Compliance Assessment', 'Policy Development', 'Audit Support', 'Training', 'Monitoring'],
    pricing: '$15,000 - $75,000/project',
    category: 'Compliance & Governance',
    benefits: ['Compliance Assurance', 'Risk Reduction', 'Audit Readiness', 'Cost Savings'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/it-compliance'
  },
  {
    title: 'IT Governance Framework',
    description: 'Implementation of IT governance framework with policies, procedures, and performance metrics.',
    icon: Building,
    features: ['Governance Framework', 'Policy Development', 'Performance Metrics', 'Risk Management', 'Training'],
    pricing: '$20,000 - $100,000/project',
    category: 'Compliance & Governance',
    benefits: ['Better Control', 'Risk Management', 'Compliance', 'Efficiency'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/it-governance'
  },

  // IoT & Smart Solutions
  {
    title: 'IoT Infrastructure Setup',
    description: 'Complete IoT infrastructure with device management, data processing, and analytics platform.',
    icon: Wifi,
    features: ['Device Management', 'Data Processing', 'Analytics Platform', 'Security', 'Monitoring'],
    pricing: '$25,000 - $150,000/project',
    category: 'IoT & Smart Solutions',
    benefits: ['IoT Capabilities', 'Data Insights', 'Automation', 'Competitive Advantage'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/iot-infrastructure'
  },
  {
    title: 'Smart Building Solutions',
    description: 'Intelligent building management systems with energy optimization, security, and automation.',
    icon: Home,
    features: ['Energy Management', 'Security Systems', 'Automation', 'Analytics', 'Mobile Control'],
    pricing: '$30,000 - $200,000/project',
    category: 'IoT & Smart Solutions',
    benefits: ['Energy Savings', 'Better Security', 'Automation', 'Cost Reduction'],
    marketPrice: '$50,000 - $300,000/project',
    link: 'https://ziontechgroup.com/smart-building'
  },

  // Blockchain & Cryptocurrency
  {
    title: 'Blockchain Infrastructure',
    description: 'Enterprise blockchain solutions with smart contracts, decentralized applications, and consensus mechanisms.',
    icon: Network,
    features: ['Blockchain Setup', 'Smart Contract Development', 'DApp Development', 'Consensus Mechanisms', 'Security'],
    pricing: '$50,000 - $500,000/project',
    category: 'Blockchain & Crypto',
    benefits: ['Decentralization', 'Security', 'Transparency', 'Innovation'],
    marketPrice: '$75,000 - $750,000/project',
    link: 'https://ziontechgroup.com/blockchain-infrastructure'
  },
  {
    title: 'Cryptocurrency Exchange Platform',
    description: 'Secure cryptocurrency exchange platform with trading, wallet, and compliance features.',
    icon: Bitcoin,
    features: ['Trading Engine', 'Wallet System', 'Security Features', 'Compliance', 'Mobile App'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Blockchain & Crypto',
    benefits: ['Revenue Generation', 'Security', 'Compliance', 'Scalability'],
    marketPrice: '$150,000 - $1,500,000/project',
    link: 'https://ziontechgroup.com/crypto-exchange'
  },

  // Quantum Computing
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing setup and integration for research and enterprise applications with quantum algorithms.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Algorithm Development', 'Quantum-Classical Integration', 'Research Support', 'Training'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum Computing',
    benefits: ['Quantum Advantage', 'Research Capabilities', 'Innovation', 'Competitive Edge'],
    marketPrice: '$150,000 - $1,500,000/project',
    link: 'https://ziontechgroup.com/quantum-computing'
  },

  // Virtualization & Cloud Services
  {
    title: 'Server Virtualization',
    description: 'Complete server virtualization solutions with VMware, Hyper-V, or open-source alternatives.',
    icon: Server,
    features: ['VMware/Hyper-V Setup', 'Resource Optimization', 'High Availability', 'Backup Integration', 'Management'],
    pricing: '$10,000 - $50,000/project',
    category: 'Virtualization',
    benefits: ['Cost Savings', 'Better Utilization', 'Flexibility', 'Easier Management'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/server-virtualization'
  },
  {
    title: 'Desktop Virtualization (VDI)',
    description: 'Virtual desktop infrastructure for secure, scalable desktop delivery to any device.',
    icon: Monitor,
    features: ['VDI Setup', 'User Management', 'Security', 'Performance Optimization', 'Mobile Access'],
    pricing: '$15,000 - $75,000/project',
    category: 'Virtualization',
    benefits: ['Security', 'Flexibility', 'Cost Savings', 'Centralized Management'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/desktop-virtualization'
  }
];

const categories = [
  'All',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Network & Infrastructure',
  'Database & Data',
  'System Administration',
  'AI & ML Infrastructure',
  'DevOps & Automation',
  'Backup & Recovery',
  'Compliance & Governance',
  'IoT & Smart Solutions',
  'Blockchain & Crypto',
  'Quantum Computing',
  'Virtualization'
];

export default function ItServicesPage() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group | 70+ Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover 70+ comprehensive IT services from Zion Tech Group. Cloud infrastructure, cybersecurity, AI/ML, DevOps, and cutting-edge technology solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, AI/ML, DevOps, technology consulting, digital transformation" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="70+ comprehensive IT services including cloud infrastructure, cybersecurity, AI/ML, and cutting-edge technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              IT Services & Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              70+ comprehensive IT services designed to modernize your infrastructure, 
              enhance security, and accelerate digital transformation across all industries.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">70+</div>
                <div className="text-gray-300">IT Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive suite of IT services designed to solve complex technology challenges 
                with cutting-edge solutions and proven expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    {service.popular && (
                      <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded-full mb-2">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits?.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      href={service.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex-1 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our IT experts to discuss your specific needs and find the perfect 
              technology solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
              >
                Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/pricing"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}