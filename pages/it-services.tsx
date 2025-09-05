import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  Code, 
  Settings, 
  CheckCircle, 
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
  AlertTriangle,
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
} from 'lucide-react';
import Layout from './components/Layout';

const itServices = [
  // Cloud & Infrastructure Services
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services',
    icon: Cloud,
    features: ['AWS/Azure/GCP Setup', 'Server Management', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$2,000 - $10,000/month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24/7 monitoring'],
    marketPrice: '$5,000/month',
    link: '/contact'
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
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: Shield,
    features: [
      'Security Audits',
      'Penetration Testing',
      'Incident Response',
      'Compliance Management'
    ],
    pricing: 'Starting at $2,000/month',
    popular: true
  },
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

const technologies = [
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean', category: 'Performance' }
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

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified IT professionals with extensive experience"
  }
];
