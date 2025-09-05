import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import { 
=======
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  Code, 
  Settings, 
  CheckCircle, 
<<<<<<< HEAD
  ArrowRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  Mail,
  Car
=======
  Users,
  Package,
  GraduationCap,
  DollarSign,
  Brain,
  Cpu,
  Atom,
  Wifi,
  Leaf,
  Monitor,
  Link as LinkIcon,
  AlertTriangle
>>>>>>> main
>>>>>>> main
=======
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  Globe, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Smartphone, 
  Laptop, 
  Building, 
  BarChart3, 
  Code, 
  Search, 
  ShoppingCart, 
  BookOpen, 
  Brain, 
  DollarSign, 
  Rocket 
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
} from 'lucide-react';
import Layout from './components/Layout';

<<<<<<< HEAD
<<<<<<< HEAD
const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
const itServices = [
  // Cloud & Infrastructure Services
  {
    title: 'Cloud Infrastructure Management',
<<<<<<< HEAD
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management with 24/7 monitoring.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery', 'Security Hardening'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud & Infrastructure',
    popular: true,
    benefits: ['Reduced Costs', 'Better Scalability', 'Enhanced Security', 'Improved Performance'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/cloud-infrastructure'
=======
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services',
    icon: Cloud,
    features: ['AWS/Azure/GCP Setup', 'Server Management', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$2,000 - $10,000/month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24/7 monitoring'],
    marketPrice: '$5,000/month',
    link: '/contact'
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
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
<<<<<<< HEAD
    description: 'Enterprise-grade security services to protect your digital assets and data with 24/7 threat monitoring.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Compliance Management'],
=======
const services = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for modern businesses",
    icon: Cloud,
    features: [
      "AWS, Azure, GCP Migration",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "Auto-scaling Solutions",
      "Disaster Recovery"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["99.9% uptime guarantee", "50% cost reduction", "24/7 monitoring"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: Shield,
<<<<<<< HEAD
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
>>>>>>> main
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
<<<<<<< HEAD
    features: ['VDI Setup', 'User Management', 'Security', 'Performance Optimization', 'Mobile Access'],
    pricing: '$15,000 - $75,000/project',
    category: 'Virtualization',
    benefits: ['Security', 'Flexibility', 'Cost Savings', 'Centralized Management'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/desktop-virtualization'
=======
    features: ['Asset Discovery', 'Lifecycle Tracking', 'Cost Optimization', 'Compliance Management'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Asset Management'
  },
  {
    title: 'Advanced Threat Intelligence Platform',
    description: 'Comprehensive threat intelligence platform with real-time threat detection and analysis.',
    icon: Shield,
    features: ['Threat Intelligence', 'Real-time Analysis', 'Threat Hunting', 'Incident Correlation'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Threat Intelligence'
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive IT performance optimization with monitoring, analysis, and improvement.',
    icon: TrendingUp,
    features: ['Performance Monitoring', 'Bottleneck Analysis', 'Optimization Recommendations', 'Capacity Planning'],
    pricing: '$20,000 - $100,000/project',
    category: 'Performance Optimization'
  },
  {
    title: 'Secure Remote Work Infrastructure',
    description: 'Complete secure remote work infrastructure with VPN, VDI, and collaboration tools.',
    icon: Users,
    features: ['Secure VPN', 'Virtual Desktop', 'Collaboration Tools', 'Security Monitoring'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Remote Work'
  },
  {
    title: 'IT Cost Optimization Platform',
    description: 'AI-powered IT cost optimization with resource right-sizing and waste reduction.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Resource Right-sizing', 'Waste Detection', 'Optimization Recommendations'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Cost Optimization'
  },
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations with AI-driven incident management, predictive maintenance, and automated resolution.',
    icon: Bot,
    features: ['AI Incident Management', 'Predictive Maintenance', 'Automated Resolution', 'Performance Analytics'],
    pricing: '$50,000 - $250,000/setup',
    category: 'AI Operations',
    popular: true,
    link: 'https://aiops.ziontechgroup.com'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Complete zero trust security implementation with identity verification, network segmentation, and continuous monitoring.',
    icon: Lock,
    features: ['Identity Verification', 'Network Segmentation', 'Continuous Monitoring', 'Access Control'],
    pricing: '$75,000 - $350,000/project',
    category: 'Security Architecture',
    popular: true,
    link: 'https://zerotrust.ziontechgroup.com'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing infrastructure for real-time processing, IoT integration, and low-latency applications.',
    icon: Server,
    features: ['Edge Node Deployment', 'Real-time Processing', 'IoT Integration', 'Low Latency'],
    pricing: '$40,000 - $200,000/setup',
    category: 'Edge Computing',
    link: 'https://edgecomputing.ziontechgroup.com'
  },
  {
    title: '5G Network Implementation',
    description: 'Complete 5G network infrastructure design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['Network Planning', 'Infrastructure Setup', 'Performance Testing', 'Optimization'],
    pricing: '$100,000 - $500,000/project',
    category: '5G Networks',
    link: 'https://5gnetworks.ziontechgroup.com'
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain infrastructure setup and management for various use cases and applications.',
    icon: Shield,
    features: ['Blockchain Setup', 'Smart Contract Development', 'Node Management', 'Security Implementation'],
    pricing: '$60,000 - $300,000/setup',
    category: 'Blockchain',
    popular: true,
    link: 'https://blockchaininfra.ziontechgroup.com'
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platform development with device management, data analytics, and security implementation.',
    icon: Smartphone,
    features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Security Implementation'],
    pricing: '$80,000 - $400,000/project',
    category: 'IoT',
    link: 'https://iotplatform.ziontechgroup.com'
  },
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI infrastructure including GPU clusters, ML pipelines, and model deployment platforms.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'ML Pipeline Development', 'Model Deployment', 'Performance Optimization'],
    pricing: '$150,000 - $750,000/setup',
    category: 'AI Infrastructure',
    popular: true,
    link: 'https://aiinfrastructure.ziontechgroup.com'
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT infrastructure with energy-efficient systems, carbon footprint reduction, and green data centers.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Footprint Analysis', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$40,000 - $200,000/project',
    category: 'Green IT',
    link: 'https://greenit.ziontechgroup.com'
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Comprehensive digital transformation strategy and implementation for modern businesses and enterprises.',
    icon: TrendingUp,
    features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'Implementation Support'],
    pricing: '$200 - $500/hour',
    category: 'Digital Transformation',
    popular: true,
    link: 'https://digitaltransformation.ziontechgroup.com'
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Seamless management of hybrid cloud environments across multiple providers with unified monitoring.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Integration', 'Performance Monitoring'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Cloud Management',
    link: 'https://hybridcloud.ziontechgroup.com'
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Comprehensive IT compliance management and governance framework implementation for regulatory requirements.',
    icon: CheckCircle,
    features: ['Compliance Auditing', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting'],
    pricing: '$50,000 - $250,000/project',
    category: 'Compliance',
    link: 'https://itcompliance.ziontechgroup.com'
  },
  {
    title: 'Advanced Analytics Platform',
    description: 'Enterprise-grade analytics platform with real-time processing, machine learning, and custom dashboards.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Data Visualization', 'ML Integration', 'Custom Dashboards'],
    pricing: '$80,000 - $400,000/project',
    category: 'Analytics',
    link: 'https://analyticsplatform.ziontechgroup.com'
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing setup and integration for advanced computational problems and optimization challenges.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Algorithm Development', 'Hybrid Classical-Quantum', 'Performance Optimization'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum Computing',
    popular: true,
    link: 'https://quantumcomputing.ziontechgroup.com'
  },
  {
    title: 'IT Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning with automated failover and recovery testing.',
    icon: Shield,
    features: ['Disaster Recovery Planning', 'Automated Failover', 'Recovery Testing', 'Business Continuity'],
    pricing: '$40,000 - $200,000/setup',
    category: 'Disaster Recovery',
    link: 'https://disasterrecovery.ziontechgroup.com'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Complete IT service management implementation with ITSM frameworks, processes, and automation.',
    icon: Settings,
    features: ['ITSM Framework', 'Process Automation', 'Service Catalog', 'Incident Management'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Service Management',
    link: 'https://itsm.ziontechgroup.com'
  }
];

<<<<<<< HEAD
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design and implementation',
        'Legacy system migration and modernization',
        'Serverless computing and containerization',
        'Auto-scaling and load balancing',
        'Cost optimization and FinOps practices',
        'Disaster recovery and backup solutions'
      ],
      pricing: '$5,000 - $50,000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions and compliance management',
      icon: Shield,
      features: [
        'Zero-trust security architecture',
        'SOC 2, GDPR, HIPAA compliance automation',
        'Penetration testing and vulnerability assessments',
        'Security monitoring and incident response',
        'Identity and access management (IAM)',
        'Data encryption and privacy protection'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '3-8 weeks',
      category: 'Security Services'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise networks',
      icon: Network,
      features: [
        'SD-WAN and hybrid network solutions',
        'Network security and firewall management',
        'Wireless network design and optimization',
        'Network monitoring and performance tuning',
        'VoIP and unified communications',
        'Network documentation and training'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-6 weeks',
      category: 'Network Services'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services',
      icon: Users,
      features: [
        '24/7/365 technical support coverage',
        'Remote desktop and troubleshooting',
        'Software installation and updates',
        'Hardware procurement and management',
        'User training and documentation',
        'SLA-based response times'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '1-2 weeks',
      category: 'Support Services'
    },
    {
      title: 'Data Management & Analytics',
      description: 'Data warehousing, analytics, and business intelligence solutions',
      icon: Database,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Data governance and quality management',
        'Real-time analytics and reporting',
        'Machine learning data preparation'
      ],
      pricing: '$4,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'Data Services'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code',
      icon: Settings,
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Monitoring and logging solutions',
        'Automated testing and quality gates',
        'DevSecOps and security integration'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'DevOps Services'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: [
        'Digital strategy and roadmap development',
        'Process automation and optimization',
        'Legacy system modernization',
        'Change management and training',
        'Technology stack evaluation',
        'ROI measurement and optimization'
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Consulting Services'
    },
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and monitoring services',
      icon: Monitor,
      features: [
        'Proactive monitoring and maintenance',
        'Patch management and updates',
        'Performance optimization',
        'Capacity planning and scaling',
        'Vendor management and procurement',
        'IT strategy and planning'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '2-4 weeks',
      category: 'Managed Services'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration and consulting',
        'Cryptocurrency wallet development',
        'Tokenomics and governance design',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-20 weeks',
      category: 'Blockchain Services'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions and edge computing infrastructure',
      icon: Cpu,
      features: [
        'IoT device development and integration',
        'Edge computing platform setup',
        'Real-time data processing and analytics',
        'IoT security and device management',
        'Sensor network design and deployment',
        'Edge AI and machine learning integration'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'IoT Services'
    },
    {
      title: 'Quantum Computing Consulting',
      description: 'Quantum computing strategy, algorithm development, and implementation',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Quantum computing strategy consulting',
        'Hybrid classical-quantum solutions',
        'Quantum security and cryptography',
        'Quantum machine learning applications',
        'Quantum hardware evaluation and selection'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Services'
    },
    {
      title: '5G & Network Modernization',
      description: '5G network implementation and legacy network modernization',
      icon: Wifi,
      features: [
        '5G network planning and deployment',
        'Network slicing and optimization',
        'Legacy network migration',
        'Private 5G network setup',
        'Network performance monitoring',
        'Edge computing integration'
      ],
      pricing: '$10,000 - $75,000/month',
      delivery: '8-20 weeks',
      category: 'Network Services'
    },
    {
      title: 'AR/VR Development & Implementation',
      description: 'Augmented and virtual reality solutions for business applications',
      icon: Monitor,
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Immersive training and simulation',
        'Virtual showroom and retail solutions',
        'AR/VR hardware integration',
        'Performance optimization and testing'
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'AR/VR Services'
    },
    {
      title: 'API Management & Integration',
      description: 'Comprehensive API strategy, development, and management platform',
      icon: Code,
      features: [
        'API design and development',
        'API gateway setup and management',
        'Third-party API integration',
        'API security and authentication',
        'API analytics and monitoring',
        'Microservices architecture design'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-12 weeks',
      category: 'API Services'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with automated incident response and predictive maintenance',
      icon: Brain,
      features: [
        'Automated incident detection and response,Predictive maintenance and capacity planning,Intelligent root cause analysis,Automated remediation and self-healing,Performance optimization recommendations,Integration with existing monitoring tools'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'AIOps Services'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation and management',
      icon: Shield,
      features: [
        'Identity and access management (IAM),Network segmentation and micro-segmentation,Device trust and compliance verification,Data encryption and protection,Continuous security monitoring,Automated threat response'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Security Services'
    },
    {
      title: 'Edge Computing & Fog Computing',
      description: 'Distributed computing infrastructure for real-time processing and low latency',
      icon: Network,
      features: [
        'Edge computing platform design and deployment,Fog computing architecture implementation,Real-time data processing and analytics,Edge AI and machine learning,Latency optimization and bandwidth management,Edge device management and monitoring'
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '6-14 weeks',
      category: 'Edge Computing Services'
    },
    {
      title: 'Hyperconverged Infrastructure (HCI)',
      description: 'Integrated compute, storage, and networking solutions for modern data centers',
      icon: Server,
      features: [
        'HCI platform design and implementation,Storage virtualization and management,Network virtualization and SDN,Automated resource provisioning,Disaster recovery and backup solutions,Performance monitoring and optimization'
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '8-16 weeks',
      category: 'Infrastructure Services'
    },
    {
      title: 'Multi-Cloud Management & Orchestration',
      description: 'Unified management and orchestration across multiple cloud providers',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture,Cloud cost optimization and FinOps,Cross-cloud workload migration,Unified monitoring and management,Cloud security and compliance,Automated scaling and resource management'
      ],
      pricing: '$7,000 - $45,000/month',
      delivery: '8-18 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Intelligent automation of repetitive business processes and workflows',
      icon: Settings,
      features: [
        'Process discovery and analysis,RPA bot development and deployment,Workflow automation and optimization,Integration with existing systems,Process monitoring and analytics,Change management and training'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Automation Services'
    },
    {
      title: 'Green IT & Sustainability Solutions',
      description: 'Environmentally conscious IT solutions and carbon footprint reduction',
      icon: TreePine,
      features: [
        'Energy-efficient infrastructure design,Carbon footprint assessment and reduction,Green cloud computing solutions,Sustainable hardware procurement,IT waste management and recycling,Environmental compliance and reporting'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Sustainability Services'
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [
        'Disaster recovery strategy development',
        'Backup and replication solutions',
        'Business continuity planning',
        'Recovery time objective optimization',
        'Testing and validation services',
        'Compliance and audit support'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-16 weeks',
      category: 'Recovery Services'
    },
    {
      title: 'Green IT & Sustainability Solutions',
      description: 'Sustainable IT practices and carbon footprint reduction',
      icon: Globe,
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint assessment and reduction',
        'Sustainable cloud migration',
        'Green data center optimization',
        'E-waste management and recycling',
        'Sustainability reporting and compliance'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-14 weeks',
      category: 'Sustainability Services'
    },
    {
      title: 'FinTech & Payment Solutions',
      description: 'Financial technology solutions and payment system integration',
      icon: Database,
      features: [
        'Payment gateway integration',
        'Financial API development',
        'Compliance and regulatory solutions',
        'Fraud detection and prevention',
        'Digital banking solutions',
        'Cryptocurrency integration'
      ],
      pricing: '$8,000 - $60,000/month',
      delivery: '10-24 weeks',
      category: 'FinTech Services'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with machine learning and automation',
      icon: Brain,
      features: [
        'Automated incident detection and resolution',
        'Predictive maintenance and capacity planning',
        'Intelligent root cause analysis',
        'Automated remediation workflows',
        'Performance optimization recommendations',
        'Cost optimization and resource allocation'
      ],
      pricing: '$12,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'AIOps Services'
    },
    {
      title: 'Zero-Trust Security Architecture',
      description: 'Comprehensive zero-trust security implementation and management',
      icon: Lock,
      features: [
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring',
        'Privileged access management (PAM)',
        'Data loss prevention (DLP)',
        'Security orchestration and automation'
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '12-20 weeks',
      category: 'Security Services'
    },
    {
      title: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud strategy and management across multiple platforms',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design',
        'Cloud migration and optimization',
        'Cost management and optimization',
        'Disaster recovery across clouds',
        'Security and compliance management',
        'Performance monitoring and optimization'
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Edge computing solutions for real-time processing and low-latency applications',
      icon: Cpu,
      features: [
        'Edge server deployment and management',
        'Real-time data processing',
        'Edge AI and machine learning',
        'Content delivery network (CDN) optimization',
        'IoT device integration',
        'Edge security and monitoring'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Edge Computing Services'
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation and modernization services',
      icon: Server,
      features: [
        'Data center assessment and planning',
        'Infrastructure modernization',
        'Energy efficiency optimization',
        'Cooling and power management',
        'Security and access control',
        'Compliance and certification'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Data Center Services'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management platform and process optimization',
      icon: Settings,
      features: [
        'ITIL framework implementation',
        'Service desk and ticketing system',
        'Change and release management',
        'Asset and configuration management',
        'Service level management',
        'Knowledge management system'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-14 weeks',
      category: 'ITSM Services'
    },
    {
      title: 'Compliance & Governance Solutions',
      description: 'Regulatory compliance and IT governance framework implementation',
      icon: Shield,
      features: [
        'SOX, GDPR, HIPAA compliance',
        'IT governance framework design',
        'Risk assessment and management',
        'Audit preparation and support',
        'Policy development and implementation',
        'Training and awareness programs'
      ],
      pricing: '$8,000 - $45,000/month',
      delivery: '8-16 weeks',
      category: 'Compliance Services'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management and optimization',
      icon: HardDrive,
      features: [
        'Asset discovery and inventory',
        'Software license management',
        'Hardware lifecycle management',
        'Cost optimization and planning',
        'Vendor management',
        'Disposal and recycling services'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Asset Management Services'
    },
    {
      title: 'Network Performance Optimization',
      description: 'Advanced network performance monitoring and optimization services',
      icon: Network,
      features: [
        'Network performance analysis',
        'Bandwidth optimization',
        'Quality of Service (QoS) implementation',
        'Network troubleshooting and resolution',
        'Performance monitoring and alerting',
        'Capacity planning and scaling'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Network Services'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support',
      icon: Users,
      features: [
        'Technical skills training',
        'Certification exam preparation',
        'Hands-on lab environments',
        'Custom training curriculum',
        'Instructor-led and self-paced options',
        'Progress tracking and reporting'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-8 weeks',
      category: 'Training Services'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting and technology roadmap development',
      icon: Target,
      features: [
        'IT strategy and roadmap development',
        'Technology assessment and evaluation',
        'Digital transformation planning',
        'Vendor selection and evaluation',
        'ROI analysis and business case development',
        'Change management and adoption'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '4-12 weeks',
      category: 'Consulting Services'
    },
    {
      title: 'Advanced Threat Detection & Response',
      description: 'Next-generation security operations center with AI-powered threat hunting',
      icon: Shield,
      features: [
        'AI-powered threat detection and analysis',
        'Behavioral analytics and anomaly detection',
        'Automated incident response and containment',
        'Threat intelligence integration',
        'Forensic analysis and investigation',
        'Security orchestration and automation'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '8-16 weeks',
      category: 'Security Services'
    },
    {
      title: 'Cloud-Native Application Development',
      description: 'Modern cloud-native applications with microservices architecture',
      icon: Code,
      features: [
        'Microservices architecture design',
        'Container orchestration with Kubernetes',
        'Serverless application development',
        'API gateway and service mesh implementation',
        'Cloud-native CI/CD pipelines',
        'Observability and monitoring setup'
      ],
      pricing: '$12,000 - $60,000/month',
      delivery: '10-20 weeks',
      category: 'Development Services'
    },
    {
      title: 'Data Lake & Analytics Platform',
      description: 'Enterprise data lake with advanced analytics and machine learning capabilities',
      icon: Database,
      features: [
        'Data lake architecture and implementation',
        'ETL/ELT pipeline development',
        'Real-time streaming analytics',
        'Machine learning model deployment',
        'Data governance and security',
        'Business intelligence dashboards'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Data Services'
    },
    {
      title: 'Hybrid Multi-Cloud Architecture',
      description: 'Seamless hybrid cloud strategy across AWS, Azure, and Google Cloud',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design',
        'Cloud migration and optimization',
        'Cross-cloud data synchronization',
        'Unified monitoring and management',
        'Disaster recovery across clouds',
        'Cost optimization and FinOps'
      ],
      pricing: '$25,000 - $120,000/month',
      delivery: '16-32 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with machine learning and predictive analytics',
      icon: Brain,
      features: [
        'Automated incident detection and resolution',
        'Predictive maintenance and capacity planning',
        'Intelligent root cause analysis',
        'Automated remediation workflows',
        'Performance optimization recommendations',
        'Cost optimization and resource allocation'
      ],
      pricing: '$18,000 - $75,000/month',
      delivery: '10-20 weeks',
      category: 'AIOps Services'
    },
    {
      title: 'Zero-Trust Security Implementation',
      description: 'Comprehensive zero-trust security architecture and implementation',
      icon: Lock,
      features: [
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring',
        'Privileged access management (PAM)',
        'Data loss prevention (DLP)',
        'Security orchestration and automation'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Security Services'
    },
    {
      title: 'Edge Computing & IoT Platform',
      description: 'Edge computing infrastructure for IoT and real-time applications',
      icon: Cpu,
      features: [
        'Edge server deployment and management',
        'IoT device integration and management',
        'Real-time data processing and analytics',
        'Edge AI and machine learning',
        'Content delivery network (CDN) optimization',
        'Edge security and monitoring'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Edge Computing Services'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration and consulting',
        'Cryptocurrency wallet development',
        'Tokenomics and governance design',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Blockchain Services'
    },
    {
      title: 'Quantum Computing Integration',
      description: 'Quantum computing strategy, algorithm development, and hybrid solutions',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Quantum computing strategy consulting',
        'Hybrid classical-quantum solutions',
        'Quantum security and cryptography',
        'Quantum machine learning applications',
        'Quantum hardware evaluation and selection'
      ],
      pricing: '$50,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'Quantum Services'
    },
    {
      title: '5G & Network Modernization',
      description: '5G network implementation and legacy network modernization',
      icon: Wifi,
      features: [
        '5G network planning and deployment',
        'Network slicing and optimization',
        'Legacy network migration',
        'Private 5G network setup',
        'Network performance monitoring',
        'Edge computing integration'
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Network Services'
    },
    {
      title: 'AR/VR & Metaverse Solutions',
      description: 'Augmented and virtual reality solutions for business applications',
      icon: Monitor,
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Immersive training and simulation',
        'Virtual showroom and retail solutions',
        'AR/VR hardware integration',
        'Performance optimization and testing'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'AR/VR Services'
    },
    {
      title: 'API Management & Integration',
      description: 'Comprehensive API strategy, development, and management platform',
      icon: Code,
      features: [
        'API design and development',
        'API gateway setup and management',
        'Third-party API integration',
        'API security and authentication',
        'API analytics and monitoring',
        'Microservices architecture design'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'API Services'
    },
    {
      title: 'Green IT & Sustainability Solutions',
      description: 'Environmentally conscious IT solutions and carbon footprint reduction',
      icon: Globe,
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint assessment and reduction',
        'Green cloud computing solutions',
        'Sustainable hardware procurement',
        'IT waste management and recycling',
        'Environmental compliance and reporting'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '6-16 weeks',
      category: 'Sustainability Services'
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [
        'Disaster recovery strategy development',
        'Backup and replication solutions',
        'Business continuity planning',
        'Recovery time objective optimization',
        'Testing and validation services',
        'Compliance and audit support'
      ],
      pricing: '$12,000 - $60,000/month',
      delivery: '8-20 weeks',
      category: 'Recovery Services'
    },
    {
      title: 'FinTech & Payment Solutions',
      description: 'Financial technology solutions and payment system integration',
      icon: Database,
      features: [
        'Payment gateway integration',
        'Financial API development',
        'Compliance and regulatory solutions',
        'Fraud detection and prevention',
        'Digital banking solutions',
        'Cryptocurrency integration'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'FinTech Services'
    },
    {
      title: 'Hyperconverged Infrastructure (HCI)',
      description: 'Integrated compute, storage, and networking solutions for modern data centers',
      icon: Server,
      features: [
        'HCI platform design and implementation',
        'Storage virtualization and management',
        'Network virtualization and SDN',
        'Automated resource provisioning',
        'Disaster recovery and backup solutions',
        'Performance monitoring and optimization'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Infrastructure Services'
    },
    {
      title: 'Multi-Cloud Management & Orchestration',
      description: 'Unified management and orchestration across multiple cloud providers',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture',
        'Cloud cost optimization and FinOps',
        'Cross-cloud workload migration',
        'Unified monitoring and management',
        'Cloud security and compliance',
        'Automated scaling and resource management'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Intelligent automation of repetitive business processes and workflows',
      icon: Settings,
      features: [
        'Process discovery and analysis',
        'RPA bot development and deployment',
        'Workflow automation and optimization',
        'Integration with existing systems',
        'Process monitoring and analytics',
        'Change management and training'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Automation Services'
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation and modernization services',
      icon: Server,
      features: [
        'Data center assessment and planning',
        'Infrastructure modernization',
        'Energy efficiency optimization',
        'Cooling and power management',
        'Security and access control',
        'Compliance and certification'
      ],
      pricing: '$50,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'Data Center Services'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management platform and process optimization',
      icon: Settings,
      features: [
        'ITIL framework implementation',
        'Service desk and ticketing system',
        'Change and release management',
        'Asset and configuration management',
        'Service level management',
        'Knowledge management system'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'ITSM Services'
    },
    {
      title: 'Compliance & Governance Solutions',
      description: 'Regulatory compliance and IT governance framework implementation',
      icon: Shield,
      features: [
        'SOX, GDPR, HIPAA compliance',
        'IT governance framework design',
        'Risk assessment and management',
        'Audit preparation and support',
        'Policy development and implementation',
        'Training and awareness programs'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Compliance Services'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management and optimization',
      icon: HardDrive,
      features: [
        'Asset discovery and inventory',
        'Software license management',
        'Hardware lifecycle management',
        'Cost optimization and planning',
        'Vendor management',
        'Disposal and recycling services'
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Asset Management Services'
    },
    {
      title: 'Network Performance Optimization',
      description: 'Advanced network performance monitoring and optimization services',
      icon: Network,
      features: [
        'Network performance analysis',
        'Bandwidth optimization',
        'Quality of Service (QoS) implementation',
        'Network troubleshooting and resolution',
        'Performance monitoring and alerting',
        'Capacity planning and scaling'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Network Services'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support',
      icon: Users,
      features: [
        'Technical skills training',
        'Certification exam preparation',
        'Hands-on lab environments',
        'Custom training curriculum',
        'Instructor-led and self-paced options',
        'Progress tracking and reporting'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '4-12 weeks',
      category: 'Training Services'
    },
    {
      title: 'Smart City & IoT Solutions',
      description: 'IoT solutions for smart cities and urban infrastructure',
      icon: Globe,
      features: [
        'Smart city infrastructure design',
        'IoT sensor network deployment',
        'Real-time data collection and analysis',
        'Urban mobility solutions',
        'Environmental monitoring',
        'Citizen engagement platforms'
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Smart City Services'
    },
    {
      title: 'Healthcare IT Solutions',
      description: 'Specialized IT solutions for healthcare organizations',
      icon: Heart,
      features: [
        'Electronic Health Records (EHR) integration',
        'HIPAA compliance and security',
        'Telemedicine platform development',
        'Medical device integration',
        'Healthcare data analytics',
        'Patient portal development'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Healthcare IT Services'
    },
    {
      title: 'Manufacturing IT Solutions',
      description: 'IT solutions for manufacturing and industrial automation',
      icon: Settings,
      features: [
        'Industrial IoT implementation',
        'Manufacturing execution systems (MES)',
        'Supply chain optimization',
        'Quality control automation',
        'Predictive maintenance systems',
        'Industrial security solutions'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'Manufacturing IT Services'
    },
    {
      title: 'Retail IT Solutions',
      description: 'Specialized IT solutions for retail and e-commerce',
      icon: ShoppingCart,
      features: [
        'Point of sale (POS) systems',
        'Inventory management systems',
        'Customer relationship management (CRM)',
        'E-commerce platform development',
        'Omnichannel retail solutions',
        'Retail analytics and insights'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Retail IT Services'
    },
    {
      title: 'Education IT Solutions',
      description: 'IT solutions for educational institutions',
      icon: GraduationCap,
      features: [
        'Learning management systems (LMS)',
        'Student information systems (SIS)',
        'Virtual classroom platforms',
        'Educational content management',
        'Student assessment tools',
        'Campus network infrastructure'
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '8-16 weeks',
      category: 'Education IT Services'
    },
    {
      title: 'Government IT Solutions',
      description: 'IT solutions for government agencies and public sector',
      icon: Building,
      features: [
        'Citizen service portals',
        'Government data management',
        'Public safety systems',
        'E-governance platforms',
        'Compliance and security',
        'Inter-agency integration'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Government IT Services'
    },
    {
      title: 'Financial Services IT Solutions',
      description: 'Specialized IT solutions for financial institutions',
      icon: PieChart,
      features: [
        'Core banking systems',
        'Risk management systems',
        'Regulatory compliance solutions',
        'Fraud detection and prevention',
        'Payment processing systems',
        'Financial data analytics'
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Financial Services IT'
    },
    {
      title: 'Energy & Utilities IT Solutions',
      description: 'IT solutions for energy and utilities companies',
      icon: Zap,
      features: [
        'Smart grid implementation',
        'Energy management systems',
        'Asset management solutions',
        'Customer billing systems',
        'Environmental monitoring',
        'Regulatory compliance'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Energy IT Services'
    },
    {
      title: 'Transportation IT Solutions',
      description: 'IT solutions for transportation and logistics',
      icon: Truck,
      features: [
        'Fleet management systems',
        'Route optimization',
        'Real-time tracking',
        'Supply chain visibility',
        'Transportation analytics',
        'Integration with logistics partners'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'Transportation IT Services'
    },
    {
      title: 'Real Estate IT Solutions',
      description: 'IT solutions for real estate and property management',
      icon: Home,
      features: [
        'Property management systems',
        'Tenant portal development',
        'Facility management solutions',
        'Real estate analytics',
        'Property valuation tools',
        'Integration with real estate platforms'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Real Estate IT Services'
    },
    {
      title: 'Entertainment & Media IT Solutions',
      description: 'IT solutions for entertainment and media companies',
      icon: Video,
      features: [
        'Content management systems',
        'Streaming platform development',
        'Digital rights management',
        'Media asset management',
        'Audience analytics',
        'Content delivery optimization'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'Media IT Services'
    },
    {
      title: 'Non-Profit IT Solutions',
      description: 'IT solutions for non-profit organizations',
      icon: Heart,
      features: [
        'Donor management systems',
        'Volunteer management platforms',
        'Fundraising solutions',
        'Program management tools',
        'Impact measurement systems',
        'Grant management solutions'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '6-16 weeks',
      category: 'Non-Profit IT Services'
    },
    {
      title: 'Startup IT Solutions',
      description: 'Scalable IT solutions for startups and growing businesses',
      icon: Rocket,
      features: [
        'MVP development and deployment',
        'Scalable infrastructure setup',
        'Rapid prototyping',
        'Cost-effective solutions',
        'Growth planning and scaling',
        'Technology stack optimization'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '4-12 weeks',
      category: 'Startup IT Services'
    },
    {
      title: 'Enterprise IT Solutions',
      description: 'Comprehensive IT solutions for large enterprises',
      icon: Building,
      features: [
        'Enterprise architecture design',
        'Legacy system modernization',
        'Digital transformation',
        'Enterprise integration',
        'Scalability and performance',
        'Enterprise security'
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '20-40 weeks',
      category: 'Enterprise IT Services'
    },
    {
      title: 'SMB IT Solutions',
      description: 'Cost-effective IT solutions for small and medium businesses',
      icon: Users,
      features: [
        'IT infrastructure setup',
        'Cloud migration',
        'Security implementation',
        'Backup and recovery',
        'IT support and maintenance',
        'Growth planning'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-8 weeks',
      category: 'SMB IT Services'
    },
    {
      title: 'Remote Work IT Solutions',
      description: 'IT solutions for remote and hybrid work environments',
      icon: Home,
      features: [
        'Remote access solutions',
        'Collaboration tools setup',
        'Security for remote workers',
        'VPN and network access',
        'Device management',
        'Productivity monitoring'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '2-6 weeks',
      category: 'Remote Work IT Services'
    },
    {
      title: 'Digital Transformation Services',
      description: 'Comprehensive digital transformation consulting and implementation',
      icon: Zap,
      features: [
        'Digital strategy development',
        'Process digitization',
        'Technology modernization',
        'Change management',
        'Digital culture transformation',
        'ROI measurement and optimization'
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Digital Transformation Services'
    },
    {
      title: 'IT Outsourcing Services',
      description: 'Complete IT outsourcing and managed services',
      icon: Users,
      features: [
        '24/7 IT support',
        'Infrastructure management',
        'Security monitoring',
        'Backup and recovery',
        'Software updates and maintenance',
        'Strategic IT planning'
      ],
      pricing: '$5,000 - $50,000/month',
      delivery: '2-8 weeks',
      category: 'IT Outsourcing Services'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management and delivery services',
      icon: ClipboardList,
      features: [
        'Project planning and execution',
        'Resource allocation and management',
        'Risk assessment and mitigation',
        'Quality assurance',
        'Stakeholder communication',
        'Project delivery and handover'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '4-16 weeks',
      category: 'Project Management Services'
    },
    {
      title: 'IT Vendor Management',
      description: 'Comprehensive IT vendor selection and management services',
      icon: Building,
      features: [
        'Vendor evaluation and selection',
        'Contract negotiation',
        'Vendor performance monitoring',
        'Cost optimization',
        'Relationship management',
        'Risk assessment and mitigation'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '4-12 weeks',
      category: 'Vendor Management Services'
    },
    {
      title: 'IT Risk Management',
      description: 'Comprehensive IT risk assessment and management services',
      icon: Shield,
      features: [
        'Risk assessment and analysis',
        'Risk mitigation strategies',
        'Compliance monitoring',
        'Security audits',
        'Business continuity planning',
        'Risk reporting and monitoring'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '6-16 weeks',
      category: 'Risk Management Services'
    },
    {
      title: 'IT Performance Optimization',
      description: 'IT performance analysis and optimization services',
      icon: TrendingUp,
      features: [
        'Performance monitoring and analysis',
        'Bottleneck identification',
        'Optimization recommendations',
        'Capacity planning',
        'Cost optimization',
        'Performance reporting'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '6-12 weeks',
      category: 'Performance Optimization Services'
    },
    {
      title: 'IT Innovation Lab',
      description: 'IT innovation and research services for emerging technologies',
      icon: Brain,
      features: [
        'Technology research and evaluation',
        'Proof of concept development',
        'Innovation strategy development',
        'Emerging technology adoption',
        'Innovation project management',
        'Technology trend analysis'
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '8-20 weeks',
      category: 'Innovation Services'
    },
    {
      title: 'IT Excellence Center',
      description: 'Comprehensive IT excellence and best practices implementation',
      icon: Award,
      features: [
        'Best practices implementation',
        'Process optimization',
        'Quality management',
        'Continuous improvement',
        'Excellence benchmarking',
        'Performance measurement'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Excellence Services'
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
    { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
    { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
    { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and maintenance',
      icon: Clock,
      stat: '99.9%'
    },
    {
      title: 'Cost Savings',
      description: 'Optimized infrastructure and processes',
      icon: Zap,
      stat: '40%'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade protection',
      icon: Shield,
      stat: '100%'
    },
    {
      title: 'Scalability',
      description: 'Flexible and scalable solutions',
      icon: TrendingUp,
      stat: 'Unlimited'
    }
  ];
=======
const technologies = [
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
<<<<<<< HEAD
=======

=======
    category: 'Performance'
>>>>>>> main
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

<<<<<<< HEAD
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
=======
const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified IT professionals with extensive experience"
    title: 'Robotic Process Automation (RPA)',
    description: 'Implementation of RPA solutions for business process automation and optimization.',
    icon: Bot,
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring'],
    pricing: '$10,000 - $60,000/project',
    category: 'RPA',
    popular: true
  },
  {
    title: 'Data Mesh Architecture Implementation',
    description: 'Modern data architecture using data mesh principles for decentralized data management.',
    icon: Database,
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics'],
    pricing: '$50,000 - $300,000/project',
    category: 'Data Architecture',
    popular: true
  },
  {
    title: 'Serverless Architecture Design',
    description: 'Serverless computing solutions for scalable and cost-effective application deployment.',
    icon: Cloud,
    features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$15,000 - $80,000/project',
    category: 'Serverless',
    popular: true
  },
  {
    title: 'API Gateway & Management Platform',
    description: 'Comprehensive API management including security, monitoring, and developer portal.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal'],
    pricing: '$10,000 - $50,000/setup',
    category: 'API Management',
    popular: true
  },
  {
    title: 'Microservices Architecture Migration',
    description: 'Migration from monolithic to microservices architecture with container orchestration.',
    icon: Server,
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup'],
    pricing: '$40,000 - $250,000/project',
    category: 'Microservices',
    popular: true
  },
  {
    title: 'IT Service Management (ITSM) Platform',
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.',
    icon: Settings,
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management'],
    pricing: '$20,000 - $100,000/setup',
    category: 'ITSM',
    popular: true
  },
  {
    title: 'Cyber Threat Intelligence Platform',
    description: 'Advanced threat intelligence and security information management system.',
    icon: Shield,
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Threat Intelligence',
    popular: true
  },
  {
    title: 'Advanced Cloud Migration Services',
    description: 'Comprehensive cloud migration strategy and execution for enterprise applications.',
    icon: Cloud,
    features: ['Migration Planning', 'Application Modernization', 'Data Migration', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Cloud Migration',
    popular: true
  },
  {
    title: 'Enterprise API Management Platform',
    description: 'Complete API lifecycle management with security, monitoring, and developer portal.',
    icon: Code,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Analytics Dashboard'],
    pricing: '$25,000 - $200,000/setup',
    category: 'API Management'
  },
  {
    title: 'Advanced Database Performance Tuning',
    description: 'Expert database optimization and performance tuning for high-traffic applications.',
    icon: Database,
    features: ['Query Optimization', 'Index Tuning', 'Performance Monitoring', 'Capacity Planning'],
    pricing: '$15,000 - $100,000/project',
    category: 'Database Optimization'
  },
  {
    title: 'Enterprise Backup & Disaster Recovery',
    description: 'Comprehensive backup and disaster recovery solutions with automated failover.',
    icon: Shield,
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance'],
    pricing: '$20,000 - $150,000/setup',
    category: 'Backup & Recovery'
  },
  {
    title: 'Advanced Network Security Implementation',
    description: 'Next-generation network security with zero-trust architecture and micro-segmentation.',
    icon: Lock,
    features: ['Zero Trust Architecture', 'Micro-segmentation', 'Advanced Threat Protection', 'Network Monitoring'],
    pricing: '$40,000 - $300,000/project',
    category: 'Network Security'
  },
  {
    title: 'Enterprise Mobile Device Management',
    description: 'Comprehensive mobile device management with advanced security and compliance.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Mobile Management'
  },
  {
    title: 'Advanced IT Infrastructure Monitoring',
    description: 'Comprehensive infrastructure monitoring with predictive analytics and alerting.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Predictive Analytics', 'Automated Alerting', 'Performance Optimization'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Infrastructure Monitoring'
  },
  {
    title: 'Enterprise Identity & Access Management',
    description: 'Advanced IAM solutions with single sign-on and multi-factor authentication.',
    icon: Users,
    features: ['Single Sign-On', 'Multi-Factor Authentication', 'Role-Based Access', 'Audit Logging'],
    pricing: '$25,000 - $200,000/setup',
    category: 'Identity Management'
  },
  {
    title: 'Advanced IT Consulting & Strategy',
    description: 'Strategic IT consulting with technology roadmap and digital transformation planning.',
    icon: Building,
    features: ['Technology Assessment', 'Strategic Planning', 'Digital Transformation', 'Vendor Selection'],
    pricing: '$200 - $500/hour',
    category: 'IT Consulting'
  },
  {
    title: 'Enterprise Software Development',
    description: 'Custom enterprise software development with modern technologies and best practices.',
    icon: Code,
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],
    pricing: '$150 - $400/hour',
    category: 'Software Development'
  },
  {
    title: 'Advanced IT Project Management',
    description: 'Professional IT project management with agile methodologies and risk management.',
    icon: BarChart3,
    features: ['Agile Methodologies', 'Risk Management', 'Resource Planning', 'Quality Control'],
    pricing: '$200 - $400/hour',
    category: 'Project Management'
  },
  {
    title: 'Enterprise IT Training & Certification',
    description: 'Comprehensive IT training programs with certification preparation and hands-on labs.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$300 - $800/person/day',
    category: 'IT Training'
  },
  {
    title: 'Advanced IT Audit & Compliance',
    description: 'Comprehensive IT audit and compliance services for various industry standards.',
    icon: Search,
    features: ['Compliance Assessment', 'Security Auditing', 'Risk Assessment', 'Regulatory Reporting'],
    pricing: '$30,000 - $200,000/project',
    category: 'IT Audit'
  },
  {
    title: 'Enterprise IT Procurement & Vendor Management',
    description: 'Strategic IT procurement and vendor relationship management with cost optimization.',
    icon: ShoppingCart,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Cost Optimization', 'Vendor Management'],
    pricing: '$200 - $400/hour',
    category: 'IT Procurement'
  },
  {
    title: 'Advanced IT Governance & Risk Management',
    description: 'Comprehensive IT governance framework with risk management and compliance monitoring.',
    icon: Shield,
    features: ['Governance Framework', 'Risk Management', 'Compliance Monitoring', 'Policy Development'],
    pricing: '$50,000 - $300,000/project',
    category: 'IT Governance'
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
>>>>>>> main
>>>>>>> main
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
];
<<<<<<< HEAD

const benefits = [
  {
=======
<<<<<<< HEAD
>>>>>>> main


const benefits = [
  {
=======
const benefits = [{
>>>>>>> main
>>>>>>> main
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Proactive monitoring and maintenance',
    stat: '99.9%'
  },
  {
=======
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Zero-Trust Architecture",
      "Compliance & Risk Management",
      "Incident Response",
      "Security Training"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-10,000/month",
    benefits: ["Reduce security incidents by 90%", "Compliance ready", "24/7 threat monitoring"],
    setupTime: "3-6 weeks"
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes",
>>>>>>> main
    icon: Zap,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Performance Optimization",
      "Automated Testing",
      "Deployment Automation"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Deploy 10x faster", "Reduce errors by 80%", "Automated scaling"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Database Management",
    description: "Optimize and secure your data infrastructure",
    icon: Database,
    features: [
      "Database Design & Optimization",
      "Data Migration Services",
      "Backup & Recovery Solutions",
      "Performance Tuning",
      "Data Security & Encryption",
      "Cloud Database Setup"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["50% faster queries", "Zero data loss", "Automated backups"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Network Solutions",
    description: "Robust networking infrastructure for seamless connectivity",
    icon: Network,
    features: [
      "Network Design & Implementation",
      "VPN & Remote Access",
      "Load Balancing",
      "Network Security",
      "Monitoring & Management",
      "Cloud Networking"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,500/month",
    benefits: ["99.9% network uptime", "Enhanced security", "Remote access ready"],
    setupTime: "1-3 weeks"
  },
  {
    title: "System Administration",
    description: "Comprehensive system management and maintenance",
    icon: Server,
    features: [
<<<<<<< HEAD
      '24/7 helpdesk support',
      'Remote desktop assistance',
      'On-site technical support',
      'Hardware & software troubleshooting',
      'User training & onboarding',
      'IT asset management',
      'Ticket tracking & resolution',
      'SLA compliance monitoring'
    ],
    benefits: [
      'Reduce IT downtime by 70%',
      'Improve user satisfaction by 85%',
      'Lower IT support costs by 40%',
      'Faster issue resolution'
    ],
    marketPrice: '$1,500-3,000/month',
    setupTime: '1 week',
    targetUsers: 'All businesses, Remote teams, SMBs'
  },

  // Advanced IT Services
  {
    id: 7,
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing solutions and infrastructure setup for advanced computational needs and research applications.',
    icon: Cpu,
    category: 'Quantum Computing',
    price: 'Starting at $5,000/month',
    features: [
      'Quantum hardware integration',
      'Quantum algorithm development',
      'Quantum software optimization',
      'Quantum security implementation',
      'Hybrid classical-quantum systems',
      'Quantum cloud access',
      'Research collaboration',
      'Training and education'
    ],
    benefits: [
      'Exponential computational power',
      'Advanced problem solving',
      'Future-proof technology',
      'Competitive advantage'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Research institutions, Financial services, Pharmaceutical companies'
  },
  {
    id: 8,
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for real-time processing, IoT integration, and low-latency applications.',
    icon: Wifi,
    category: 'Edge Computing',
    price: 'Starting at $2,200/month',
    features: [
      'Edge server deployment',
      'IoT device integration',
      'Real-time data processing',
      'Edge AI implementation',
      '5G network optimization',
      'Latency reduction',
      'Distributed computing',
      'Edge security management'
    ],
    benefits: [
      'Reduce latency by 80%',
      'Improve real-time performance',
      'Lower bandwidth costs',
      'Enhanced data privacy'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Healthcare, Autonomous vehicles, IoT companies'
  },
  {
    id: 9,
    title: 'Blockchain Infrastructure & Development',
    description: 'Complete blockchain solutions including smart contracts, DeFi platforms, and enterprise blockchain integration.',
    icon: Lock,
    category: 'Blockchain',
    price: 'Starting at $3,500/month',
    features: [
      'Smart contract development',
      'DeFi platform creation',
      'NFT marketplace development',
      'Blockchain integration',
      'Cryptocurrency wallet development',
      'Token economics design',
      'Security auditing',
      'Compliance implementation'
    ],
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparent transactions',
      'Reduced intermediaries'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Financial services, Supply chain, Healthcare, Gaming'
  },
  {
    id: 10,
    title: 'AI Infrastructure & MLOps',
    description: 'Complete AI infrastructure setup with machine learning pipelines, model deployment, and MLOps automation.',
    icon: Brain,
    category: 'AI Infrastructure',
    price: 'Starting at $2,800/month',
    features: [
      'ML pipeline development',
      'Model training infrastructure',
      'Model deployment & serving',
      'MLOps automation',
      'Data pipeline optimization',
      'Model monitoring & governance',
      'A/B testing frameworks',
      'AI security implementation'
    ],
    benefits: [
      'Faster AI model deployment',
      'Automated ML workflows',
      'Better model performance',
      'Reduced operational overhead'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'AI companies, Data science teams, Enterprises'
  },
  {
    id: 11,
    title: 'IoT Platform & Device Management',
    description: 'Comprehensive IoT solutions including device management, data collection, and analytics platforms.',
    icon: Smartphone,
    category: 'IoT Services',
    price: 'Starting at $1,800/month',
    features: [
      'IoT device integration',
      'Data collection & processing',
      'Device management platform',
      'Real-time monitoring',
      'Predictive maintenance',
      'IoT security implementation',
      'Custom dashboard development',
      'API development & integration'
    ],
    benefits: [
      'Centralized device management',
      'Real-time insights',
      'Predictive maintenance',
      'Improved operational efficiency'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Agriculture, Smart cities, Healthcare'
  },
  {
    id: 12,
    title: 'AR/VR Infrastructure & Development',
    description: 'Augmented and virtual reality solutions including infrastructure setup, content creation, and application development.',
    icon: Eye,
    category: 'AR/VR Services',
    price: 'Starting at $2,500/month',
    features: [
      'AR/VR application development',
      '3D content creation',
      'Hardware integration',
      'Performance optimization',
      'Multi-platform deployment',
      'User experience design',
      'Analytics & tracking',
      'Training & support'
    ],
    benefits: [
      'Immersive user experiences',
      'Enhanced training programs',
      'Better customer engagement',
      'Innovative solutions'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Education, Healthcare, Real estate, Gaming, Training'
  },
  {
    id: 13,
    title: 'Space Technology Infrastructure',
    description: 'Space technology solutions including satellite data processing, space mission support, and astronomical research tools.',
    icon: Rocket,
    category: 'Space Technology',
    price: 'Starting at $4,500/month',
    features: [
      'Satellite data processing',
      'Space mission planning',
      'Orbital mechanics calculations',
      'Space weather monitoring',
      'Research tool development',
      'Data visualization',
      'Mission control systems',
      'Space communication protocols'
    ],
    benefits: [
      'Space data insights',
      'Mission optimization',
      'Research acceleration',
      'Innovation support'
    ],
    marketPrice: '$7,000-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Research institutions, Satellite companies'
  },
  {
    id: 14,
    title: 'Green IT & Sustainability Solutions',
    description: 'Eco-friendly IT solutions focusing on energy efficiency, carbon footprint reduction, and sustainable technology practices.',
    icon: TreePine,
    category: 'Green IT',
    price: 'Starting at $1,500/month',
    features: [
      'Energy-efficient infrastructure',
      'Carbon footprint monitoring',
      'Renewable energy integration',
      'E-waste management',
      'Green cloud solutions',
      'Sustainability reporting',
      'Environmental compliance',
      'Green procurement'
    ],
    benefits: [
      'Reduce carbon footprint by 50%',
      'Lower energy costs by 30%',
      'Meet sustainability goals',
      'Improve brand reputation'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'All industries, ESG-focused companies, Government'
  },
  {
    id: 15,
    title: 'Autonomous Systems Infrastructure',
    description: 'Infrastructure for autonomous vehicles, drones, and robotic systems with AI integration and safety protocols.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $3,200/month',
    features: [
      'Autonomous vehicle infrastructure',
      'Drone fleet management',
      'Robotic system integration',
      'AI safety protocols',
      'Real-time monitoring',
      'Simulation environments',
      'Regulatory compliance',
      'Performance optimization'
    ],
    benefits: [
      'Advanced automation',
      'Enhanced safety',
      'Operational efficiency',
      'Future-ready technology'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Automotive, Logistics, Agriculture, Manufacturing'
=======
      "Server Setup & Configuration",
      "System Monitoring",
      "User Management",
      "Backup Solutions",
      "Performance Optimization",
      "24/7 System Support"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,500-3,500/month",
    benefits: ["Proactive maintenance", "Reduced downtime", "Expert support"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation consulting",
    icon: Settings,
    features: [
      "IT Strategy Development",
      "Technology Roadmap",
      "Digital Transformation",
      "Cost Optimization",
      "Vendor Management",
      "Technology Assessment"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-12,000/month",
    benefits: ["Strategic alignment", "Cost savings", "Future-proof technology"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management and support services",
    icon: Server,
    features: [
      "24/7 Help Desk Support",
      "Proactive Monitoring",
      "Patch Management",
      "Security Updates",
      "Performance Optimization",
      "Incident Response"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-6,000/month",
    benefits: ["Predictable costs", "Expert support", "Proactive maintenance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Cloud Migration Services",
    description: "Seamless migration to cloud platforms with zero downtime",
    icon: Cloud,
    features: [
      "Migration Planning",
      "Data Migration",
      "Application Migration",
      "Testing & Validation",
      "Go-live Support",
      "Post-migration Optimization"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-20,000/month",
    benefits: ["Zero downtime migration", "Cost optimization", "Enhanced security"],
    setupTime: "4-12 weeks"
  },
  {
    title: "IT Security Services",
    description: "Comprehensive security services to protect your infrastructure",
    icon: Shield,
    features: [
      "Security Assessment",
      "Vulnerability Management",
      "Security Monitoring",
      "Incident Response",
      "Security Training",
      "Compliance Auditing"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Enhanced security posture", "Compliance ready", "Reduced risk"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Comprehensive backup and disaster recovery solutions",
    icon: Database,
    features: [
      "Automated Backups",
      "Disaster Recovery Planning",
      "Data Replication",
      "Recovery Testing",
      "Cloud Backup Solutions",
      "Business Continuity"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-7,000/month",
    benefits: ["Zero data loss", "Fast recovery", "Business continuity"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IT Infrastructure Monitoring",
    description: "Advanced monitoring and alerting for your IT infrastructure",
    icon: Settings,
    features: [
      "Real-time Monitoring",
      "Performance Analytics",
      "Alert Management",
      "Capacity Planning",
      "Trend Analysis",
      "Custom Dashboards"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,500/month",
    benefits: ["Proactive issue detection", "Better performance", "Reduced downtime"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Support & Helpdesk",
    description: "Professional IT support and helpdesk services",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Issue Tracking",
      "Knowledge Base",
      "User Training",
      "Service Level Agreements"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["Fast resolution times", "Expert support", "User satisfaction"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Asset Management",
    description: "Complete IT asset lifecycle management and optimization",
    icon: Package,
    features: [
      "Asset Discovery",
      "Inventory Management",
      "License Management",
      "Lifecycle Planning",
      "Cost Optimization",
      "Compliance Tracking"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,000/month",
    benefits: ["Cost optimization", "License compliance", "Asset visibility"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IT Project Management",
    description: "Professional IT project management and implementation",
    icon: CheckCircle,
    features: [
      "Project Planning",
      "Resource Management",
      "Timeline Management",
      "Risk Assessment",
      "Quality Assurance",
      "Stakeholder Communication"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["On-time delivery", "Budget control", "Quality assurance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Training & Certification",
    description: "Comprehensive IT training and certification programs",
    icon: GraduationCap,
    features: [
      "Technical Training",
      "Certification Programs",
      "Skill Assessment",
      "Custom Training",
      "Online Learning",
      "Hands-on Labs"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Improved skills", "Certification ready", "Better performance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Compliance & Governance",
    description: "IT compliance management and governance services",
    icon: Shield,
    features: [
      "Compliance Assessment",
      "Policy Development",
      "Audit Preparation",
      "Risk Management",
      "Governance Framework",
      "Regulatory Updates"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Compliance ready", "Risk reduction", "Audit preparation"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Vendor Management",
    description: "Strategic IT vendor management and optimization",
    icon: Settings,
    features: [
      "Vendor Assessment",
      "Contract Management",
      "Performance Monitoring",
      "Cost Optimization",
      "Relationship Management",
      "Service Level Management"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-7,000/month",
    benefits: ["Cost savings", "Better service", "Strategic partnerships"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Innovation & R&D",
    description: "IT innovation services and emerging technology adoption",
    icon: Zap,
    features: [
      "Technology Research",
      "Proof of Concept",
      "Innovation Labs",
      "Emerging Tech Adoption",
      "Digital Transformation",
      "Future Technology Planning"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Competitive advantage", "Innovation leadership", "Future readiness"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Cost Optimization",
    description: "Strategic IT cost reduction and optimization services",
    icon: DollarSign,
    features: [
      "Cost Analysis",
      "Budget Optimization",
      "Resource Right-sizing",
      "Cloud Cost Management",
      "License Optimization",
      "ROI Analysis"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["30% cost reduction", "Better ROI", "Optimized spending"],
    setupTime: "2-3 weeks"
  },
  {
    title: "AI-Powered IT Operations",
    description: "Intelligent IT operations with AI-driven automation and monitoring",
    icon: Brain,
    features: [
      "AI-Powered Monitoring",
      "Predictive Maintenance",
      "Automated Incident Response",
      "Intelligent Alerting",
      "Performance Optimization",
      "Anomaly Detection"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["90% faster incident resolution", "Predictive maintenance", "Reduced downtime"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Edge Computing Solutions",
    description: "Edge computing infrastructure for real-time data processing",
    icon: Cpu,
    features: [
      "Edge Server Deployment",
      "Real-time Data Processing",
      "Low-latency Applications",
      "IoT Integration",
      "Edge Security",
      "Distributed Computing"
    ],
    price: "Starting at $4,000/month",
    marketPrice: "$6,000-15,000/month",
    benefits: ["50% faster processing", "Reduced latency", "Better performance"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Quantum-Ready Infrastructure",
    description: "Future-proof infrastructure preparation for quantum computing",
    icon: Atom,
    features: [
      "Quantum Algorithm Development",
      "Hybrid Classical-Quantum Systems",
      "Quantum Security Implementation",
      "Post-Quantum Cryptography",
      "Quantum Simulation",
      "Future Technology Planning"
    ],
    price: "Starting at $5,000/month",
    marketPrice: "$8,000-20,000/month",
    benefits: ["Future-proof technology", "Advanced security", "Competitive advantage"],
    setupTime: "6-8 weeks"
  },
  {
    title: "5G Network Implementation",
    description: "5G network design, deployment, and optimization services",
    icon: Wifi,
    features: [
      "5G Network Planning",
      "Infrastructure Deployment",
      "Network Optimization",
      "Performance Testing",
      "Security Implementation",
      "Integration Services"
    ],
    price: "Starting at $4,500/month",
    marketPrice: "$7,000-18,000/month",
    benefits: ["10x faster speeds", "Ultra-low latency", "Massive connectivity"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Sustainable IT Solutions",
    description: "Green IT and sustainability-focused technology solutions",
    icon: Leaf,
    features: [
      "Energy-efficient Infrastructure",
      "Carbon Footprint Reduction",
      "Green Data Centers",
      "Sustainable Hardware",
      "Environmental Monitoring",
      "ESG Reporting"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-10,000/month",
    benefits: ["40% energy reduction", "ESG compliance", "Cost savings"],
    setupTime: "3-5 weeks"
  },
  {
    title: "Zero Trust Security Architecture",
    description: "Comprehensive zero trust security implementation and management",
    icon: Shield,
    features: [
      "Identity Verification",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Least Privilege Access",
      "Threat Detection",
      "Automated Response"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["Enhanced security", "Reduced attack surface", "Compliance ready"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Hybrid Cloud Management",
    description: "Seamless hybrid cloud infrastructure management and optimization",
    icon: Cloud,
    features: [
      "Multi-cloud Orchestration",
      "Workload Migration",
      "Cost Optimization",
      "Security Management",
      "Performance Monitoring",
      "Disaster Recovery"
    ],
    price: "Starting at $3,800/month",
    marketPrice: "$6,000-15,000/month",
    benefits: ["Flexible deployment", "Cost optimization", "Enhanced security"],
    setupTime: "4-6 weeks"
  },
  {
    title: "IT Service Automation",
    description: "Intelligent automation for IT service delivery and management",
    icon: Zap,
    features: [
      "Service Desk Automation",
      "Workflow Automation",
      "Self-Service Portals",
      "Automated Provisioning",
      "Intelligent Routing",
      "Performance Analytics"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-9,000/month",
    benefits: ["80% faster service delivery", "Reduced manual work", "Better user experience"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Digital Twin Technology",
    description: "Digital twin implementation for physical asset monitoring and optimization",
    icon: Monitor,
    features: [
      "Asset Digitalization",
      "Real-time Monitoring",
      "Predictive Analytics",
      "Simulation Capabilities",
      "Performance Optimization",
      "Maintenance Planning"
    ],
    price: "Starting at $4,200/month",
    marketPrice: "$6,500-16,000/month",
    benefits: ["Predictive maintenance", "Optimized performance", "Reduced downtime"],
    setupTime: "5-7 weeks"
  },
  {
    title: "Blockchain IT Infrastructure",
    description: "Blockchain-based IT infrastructure and distributed systems",
    icon: LinkIcon,
    features: [
      "Blockchain Implementation",
      "Smart Contract Development",
      "Distributed Ledger",
      "Cryptographic Security",
      "Consensus Mechanisms",
      "Integration Services"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,500-14,000/month",
    benefits: ["Enhanced security", "Transparent operations", "Decentralized control"],
    setupTime: "4-6 weeks"
  },
  {
    title: "IT Disaster Recovery as a Service",
    description: "Comprehensive disaster recovery and business continuity services",
    icon: AlertTriangle,
    features: [
      "Backup & Recovery",
      "Business Continuity Planning",
      "Disaster Testing",
      "Rapid Recovery",
      "Data Replication",
      "Failover Management"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,500/month",
    benefits: ["99.9% uptime guarantee", "Rapid recovery", "Business continuity"],
    setupTime: "2-4 weeks"
>>>>>>> main
  }
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in IT infrastructure",
    icon: "👥"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support for your systems",
    icon: "🛡️"
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered 500+ IT projects across industries",
    icon: "✅"
  },
  {
    title: "Cost-Effective",
    description: "Transparent pricing with no hidden costs or surprises",
    icon: "💰"
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and system administration. Expert solutions for modern businesses."
      keywords="IT services, cloud computing, cybersecurity, DevOps, system administration, network solutions"
      canonical="https://ziontechgroup.com/it-services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive 
              <span className="text-blue-400"> IT Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your technology infrastructure with our expert IT services. 
              From cloud migration to cybersecurity, we provide end-to-end solutions 
              that drive business growth and operational efficiency.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <service.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Features */}
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-blue-600 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-1" />
                          {benefit}
>>>>>>> main
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                  
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
=======
    description: 'Advanced cybersecurity services to protect your business from threats',
    icon: Shield,
    features: ['Threat Detection', 'Security Audits', 'Penetration Testing', 'Compliance'],
    pricing: '$1,500 - $8,000/month',
    category: 'Security',
    popular: true,
    benefits: ['Protection from cyber threats', 'Compliance with regulations', 'Peace of mind', 'Expert support'],
    marketPrice: '$4,000/month',
    link: '/contact'
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of enterprise network infrastructure',
    icon: Network,
    features: ['Network Design', 'Router Configuration', 'Switch Management', 'VPN Setup'],
    pricing: '$1,000 - $5,000/month',
    category: 'Networking',
    popular: false,
    benefits: ['Improved connectivity', 'Better performance', 'Enhanced security', 'Reliable network'],
    marketPrice: '$2,500/month',
    link: '/contact'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database administration and optimization services',
    icon: Database,
    features: ['Database Setup', 'Performance Tuning', 'Backup & Recovery', 'Security'],
    pricing: '$800 - $4,000/month',
    category: 'Database',
    popular: false,
    benefits: ['Optimized performance', 'Data security', 'Reliable backups', 'Expert management'],
    marketPrice: '$2,000/month',
    link: '/contact'
  },
  {
    title: 'System Administration',
    description: 'Complete system administration and maintenance services',
    icon: Settings,
    features: ['Server Maintenance', 'User Management', 'System Updates', 'Monitoring'],
    pricing: '$1,200 - $6,000/month',
    category: 'System Admin',
    popular: true,
    benefits: ['Reduced downtime', 'Improved performance', 'Proactive maintenance', 'Expert support'],
    marketPrice: '$3,000/month',
    link: '/contact'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'DevOps implementation and continuous integration/deployment pipelines',
    icon: Code,
    features: ['CI/CD Pipelines', 'Docker Containers', 'Kubernetes', 'Monitoring'],
    pricing: '$2,500 - $12,000/month',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster deployments', 'Improved reliability', 'Better collaboration', 'Automated processes'],
    marketPrice: '$6,000/month',
    link: '/contact'
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of your infrastructure to modern data centers',
    icon: Building,
    features: ['Migration Planning', 'Data Transfer', 'Testing', 'Go-live Support'],
    pricing: '$5,000 - $25,000/project',
    category: 'Migration',
    popular: false,
    benefits: ['Reduced costs', 'Improved performance', 'Better security', 'Modern infrastructure'],
    marketPrice: '$15,000/project',
    link: '/contact'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help optimize your technology infrastructure',
    icon: Brain,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    popular: false,
    benefits: ['Expert guidance', 'Cost optimization', 'Technology roadmap', 'Best practices'],
    marketPrice: '$200/hour',
    link: '/contact'
  }
];

const industries = [
  { name: 'Healthcare', icon: Building, description: 'IT solutions for healthcare providers' },
  { name: 'Finance', icon: DollarSign, description: 'Secure IT infrastructure for financial services' },
  { name: 'Manufacturing', icon: Settings, description: 'Industrial IT solutions and automation' },
  { name: 'Retail', icon: ShoppingCart, description: 'E-commerce and retail IT solutions' },
  { name: 'Education', icon: BookOpen, description: 'Educational technology and IT services' },
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions' }
];

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration. Transform your business with our expert IT solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services to keep your business running smoothly. From cloud infrastructure 
                to cybersecurity, we provide the technology solutions you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {service.popular && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Market Price</span>
                      <span className="text-sm text-gray-600">{service.marketPrice}</span>
                    </div>
                    <Link
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                    </Link>
                  </div>
                </motion.div>
              ))}
<<<<<<< HEAD
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
=======
                )}

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    {service.setupTime && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {service.setupTime}
                      </span>
                    )}
                  </div>
                  {service.marketPrice && (
                    <p className="text-xs text-gray-500">
                      Market rate: {service.marketPrice}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their IT needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> main
=======
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and use cases.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  );
}