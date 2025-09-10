import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Shield,
  Database,
  BarChart3,
  Users,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Users,
  BarChart3,
  Code,
  FileText,
  Phone,
  Car,
  Heart,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  CreditCard,
  Calendar,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Wrench,
  Wifi,
  Terminal,
  Layers,
  Activity,
  Key,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  Save,
  Play,
  Pause,
  Stop,
  Truck,
  Factory,
  Banknote,
  Target,
  TrendingUp,
  Eye,
  Bot,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Migration & Management',
    description: 'Seamless migration to cloud platforms with ongoing management and optimization for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud',
    popular: true
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$5,000 - $40,000/project',
    category: 'Security',
    popular: true,
    setupFee: 'Included',
    timeline: '1-4 weeks'
  },
  {
    title: 'Network Infrastructure Design',
    description: 'Complete network architecture design and implementation for enterprise-grade connectivity and performance.',
    icon: Network,
    features: ['Network Design', 'Hardware Installation', 'Performance Optimization', 'Security Implementation', 'Monitoring Setup'],
    pricing: '$10,000 - $100,000 project',
    category: 'Infrastructure',
    popular: true,
    setupFee: 'Included',
    timeline: '4-12 weeks'
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support and helpdesk services with remote assistance and on-site support when needed.',
    icon: MessageSquare,
    features: ['24/7 Support', 'Remote Assistance', 'On-site Support', 'Ticket Management', 'Knowledge Base'],
    pricing: '$2,000 - $15,000/month',
    category: 'Support',
    popular: true,
    setupFee: '$1,000',
    timeline: 'Immediate'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Comprehensive data protection with automated backups, disaster recovery planning, and business continuity.',
    icon: Database,
    features: ['Automated Backups', 'Disaster Recovery', 'Business Continuity', 'Data Encryption', 'Recovery Testing'],
    pricing: '$1,500 - $10,000/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$2,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'Server Management & Maintenance',
    description: 'Complete server administration including monitoring, updates, security patches, and performance optimization.',
    icon: Server,
    features: ['Server Monitoring', 'Performance Tuning', 'Security Updates', 'Capacity Planning', 'Maintenance Scheduling'],
    pricing: '$1,000 - $8,000/month',
    category: 'Infrastructure',
    popular: true,
    setupFee: '$1,500',
    timeline: '1 week'
  },
  {
    title: 'Software Development & Integration',
    description: 'Custom software development and integration services for business-specific applications and workflows.',
    icon: Code,
    features: ['Custom Development', 'API Integration', 'Legacy System Migration', 'Testing & QA', 'Documentation'],
    pricing: '$15,000 - $200,000 project',
    category: 'Development',
    popular: true,
    setupFee: 'Included',
    timeline: '8-24 weeks'
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT planning and consulting to align technology with business objectives and digital transformation.',
    icon: Target,
    features: ['IT Strategy Planning', 'Technology Assessment', 'Digital Transformation', 'ROI Analysis', 'Implementation Roadmap'],
    pricing: '$200 - $500/hour',
    category: 'Consulting',
    popular: true,
    setupFee: 'N/A',
    timeline: '1-4 weeks'
  },
  {
    title: 'Email & Communication Systems',
    description: 'Enterprise email solutions, unified communications, and collaboration platform implementation and management.',
    icon: Mail,
    features: ['Email Migration', 'Unified Communications', 'Collaboration Tools', 'Security Implementation', 'User Training'],
    pricing: '$2,000 - $15,000 setup',
    category: 'Communication',
    popular: true,
    setupFee: 'Included',
    timeline: '2-4 weeks'
  },
  {
    title: 'Database Administration',
    description: 'Database design, optimization, maintenance, and administration for SQL Server, MySQL, PostgreSQL, and NoSQL databases.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring & Alerts'],
    pricing: '$1,500 - $12,000/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$2,500',
    timeline: '1-3 weeks'
  },
  {
    title: 'Virtualization & Containerization',
    description: 'VMware, Hyper-V, and Docker containerization services for improved resource utilization and scalability.',
    icon: Layers,
    features: ['VMware Implementation', 'Docker Containers', 'Resource Optimization', 'High Availability', 'Disaster Recovery'],
    pricing: '$5,000 - $40,000 project',
    category: 'Infrastructure',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management including security, app deployment, and device lifecycle management.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe', 'Compliance Monitoring'],
    pricing: '$500 - $3,000/month',
    category: 'Mobile Management',
    popular: true,
    setupFee: '$1,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset lifecycle management including inventory, licensing, maintenance, and disposal.',
    icon: Package,
    features: ['Asset Inventory', 'License Management', 'Maintenance Tracking', 'Disposal Planning', 'Cost Analysis'],
    pricing: '$1,000 - $5,000/month',
    category: 'Asset Management',
    popular: true,
    setupFee: '$2,000',
    timeline: '2-4 weeks'
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security including firewalls, intrusion detection, VPN, and secure remote access solutions.',
    icon: Lock,
    features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Access Control', 'Security Monitoring'],
    pricing: '$5,000 - $30,000 setup',
    category: 'Security',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'IT Compliance & Auditing',
    description: 'Compliance management and auditing services for SOX, HIPAA, GDPR, and other regulatory requirements.',
    icon: CheckCircle2,
    features: ['Compliance Assessment', 'Audit Preparation', 'Policy Development', 'Training Programs', 'Ongoing Monitoring'],
    pricing: '$3,000 - $20,000 project',
    category: 'Compliance',
    popular: true,
    setupFee: 'Included',
    timeline: '2-8 weeks'
  },
  {
    title: 'Performance Monitoring & Analytics',
    description: 'Comprehensive IT performance monitoring with real-time analytics, alerting, and capacity planning.',
    icon: Activity,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning', 'Reporting'],
    pricing: '$1,000 - $8,000/month',
    category: 'Monitoring',
    popular: true,
    setupFee: '$1,500',
    timeline: '1-2 weeks'
  },
  {
    title: 'IT Training & Documentation',
    description: 'Comprehensive IT training programs and documentation for staff and end-users on various technologies.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Technical Documentation', 'User Manuals', 'Video Tutorials', 'Certification Prep'],
    pricing: '$150 - $300/hour',
    category: 'Training',
    popular: true,
    setupFee: 'N/A',
    timeline: '1-4 weeks'
  },
  {
    title: 'Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity during outages.',
    icon: AlertTriangle,
    features: ['Risk Assessment', 'Recovery Planning', 'Testing & Validation', 'Documentation', 'Staff Training'],
    pricing: '$5,000 - $25,000 project',
    category: 'Disaster Recovery',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management services for complex technology implementations and system upgrades.',
    icon: Calendar,
    features: ['Project Planning', 'Resource Management', 'Timeline Management', 'Risk Assessment', 'Stakeholder Communication'],
    pricing: '$200 - $400/hour',
    category: 'Project Management',
    popular: true,
    setupFee: 'N/A',
    timeline: 'Varies'
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Specialized cloud security services including compliance management and security architecture design.',
    icon: Shield,
    features: ['Security Architecture', 'Compliance Management', 'Identity & Access Management', 'Data Protection', 'Audit Support'],
    pricing: '$3,000 - $25,000 project',
    category: 'Cloud Security',
    popular: true,
    setupFee: 'Included',
    timeline: '2-8 weeks'
  },
  {
    title: 'IT Infrastructure Assessment',
    description: 'Comprehensive assessment of existing IT infrastructure with recommendations for improvement and optimization.',
    icon: Search,
    features: ['Infrastructure Audit', 'Performance Analysis', 'Security Assessment', 'Cost Optimization', 'Recommendations'],
    pricing: '$2,000 - $15,000 project',
    category: 'Assessment',
    popular: true,
    setupFee: 'Included',
    timeline: '1-4 weeks'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats.',
    icon: Shield,
    features: ['Security Assessment', 'Penetration Testing', 'Firewall Configuration', 'Incident Response'],
    pricing: '$3,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    benefits: ['Protection from Cyber Attacks', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220/hour',
    category: 'Networking'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database'
  },
  {
    title: 'System Administration',
    description: '24/7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2,000 - $8,000/month',
    category: 'Administration'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300/hour',
    category: 'Consulting'
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',
    icon: Server,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    pricing: '$10,000 - $50,000/project',
    category: 'DevOps',
    popular: true
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.',
    icon: HardDrive,
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization'],
    pricing: '$15,000 - $100,000/project',
    category: 'Migration'
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management and optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Asset Management'
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: Shield,
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance'],
    pricing: '$2,000 - $20,000/setup',
    category: 'Backup & Recovery'
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.',
    icon: Lock,
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'Network Security'
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Cloud security implementation and compliance with industry standards.',
    icon: Shield,
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection'],
    pricing: '$8,000 - $40,000/project',
    category: 'Cloud Security'
  },
  {
    title: 'IT Support & Help Desk',
    description: '24/7 IT support and help desk services for your organization.',
    icon: Users,
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
    pricing: '$1,500 - $6,000/month',
    category: 'Support'
  },
  {
    title: 'Software Development Services',
    description: 'Custom software development and application modernization services.',
    icon: Code,
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],
    pricing: '$100 - $200/hour',
    category: 'Development'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management and implementation services.',
    icon: BarChart3,
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control'],
    pricing: '$150 - $300/hour',
    category: 'Project Management'
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],
    pricing: '$2,000 - $10,000/setup',
    category: 'Mobile Management'
  },
  {
    title: 'IT Training & Certification',
    description: 'IT training programs and certification preparation for your team.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$200 - $500/person/day',
    category: 'Training'
  },
  {
    title: 'IT Audit & Assessment',
    description: 'Comprehensive IT infrastructure audit and security assessment services.',
    icon: Search,
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations'],
    pricing: '$5,000 - $25,000/project',
    category: 'Audit & Assessment'
  },
  {
    title: 'IT Procurement & Vendor Management',
    description: 'Strategic IT procurement and vendor relationship management services.',
    icon: ShoppingCart,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management'],
    pricing: '$150 - $300/hour',
    category: 'Procurement'
  },
  {
    title: 'IT Governance & Strategy',
    description: 'IT governance framework development and strategic technology planning.',
    icon: Building,
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management'],
    pricing: '$10,000 - $50,000/project',
    category: 'Governance'
  },
  {
    title: 'IT Compliance & Regulatory',
    description: 'Compliance management for various regulatory requirements and standards.',
    icon: Shield,
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support'],
    pricing: '$8,000 - $40,000/project',
    category: 'Compliance'
  },
  {
title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: CpuIcon,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],
    pricing: '$15,000 - $75,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$25,000 - $150,000/project',
    category: 'Zero Trust',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],
    pricing: '$20,000 - $100,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',
    icon: Shield,
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],
    pricing: '$30,000 - $200,000/project',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: '5G Networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',
    icon: Server,
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],
    pricing: '$40,000 - $300,000/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management for connected environments.',
    icon: Smartphone,
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],
    pricing: '$25,000 - $150,000/setup',
    category: 'IoT Security',
    popular: true
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$30,000 - $200,000/project',
    category: 'Hybrid Cloud',
    popular: true
  },
  {
    title: 'AI Model Infrastructure & MLOps',
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',
    icon: Brain,
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],
    pricing: '$20,000 - $100,000/setup',
    category: 'MLOps',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration'],
    pricing: '$15,000 - $80,000/project',
    category: 'Green IT',
    popular: true
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin technology implementation for physical assets and processes.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs'],
    pricing: '$40,000 - $250,000/project',
    category: 'Digital Twins',
    popular: true
  },
  {
    title: 'AR/VR Infrastructure & Development',
    description: 'Augmented and virtual reality infrastructure setup and application development.',
    icon: Eye,
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design'],
    pricing: '$25,000 - $150,000/project',
    category: 'AR/VR',
    popular: true
  },
  {
    title: 'Robotic Process Automation (RPA)',
    description: 'Implementation of RPA solutions for business process automation and optimization.',
    icon: Bot,
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring'],
    pricing: '$10,000 - $60,000/project',
    category: 'RPA',
    popular: true
  },
  {
    title: 'IT Cost Optimization',
    description: 'Comprehensive analysis and optimization of IT costs and resources.',
    icon: TrendingUp,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Strategies', 'Monitoring Setup'],
    pricing: '$15,000 - $75,000/project',
<<<<<<< HEAD
    category: 'Integration'
  },
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI/ML infrastructure deployment with GPU clusters and model serving.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'Model Serving', 'MLOps Pipeline', 'Auto-scaling'],
    pricing: '$25,000 - $150,000/project',
    category: 'AI Infrastructure',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Blockchain network setup, smart contract deployment, and node management.',
    icon: Shield,
    features: ['Node Setup', 'Smart Contract Deployment', 'Security Auditing', 'Monitoring'],
    pricing: '$20,000 - $100,000/project',
    category: 'Blockchain'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for IoT and real-time processing applications.',
    icon: Cpu,
    features: ['Edge Node Deployment', 'IoT Integration', 'Real-time Processing', 'Data Synchronization'],
    pricing: '$15,000 - $80,000/project',
    category: 'Edge Computing'
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing infrastructure and hybrid classical-quantum systems.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Hybrid Systems', 'Algorithm Optimization', 'Security Implementation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum Computing'
  },
  {
    title: '5G Network Implementation',
    description: '5G network infrastructure design and implementation for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Setup', 'Network Slicing', 'Edge Computing', 'IoT Integration'],
    pricing: '$30,000 - $200,000/project',
    category: '5G Networks'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Complete zero trust security implementation with identity and access management.',
    icon: Lock,
    features: ['Identity Management', 'Access Controls', 'Network Segmentation', 'Continuous Monitoring'],
    pricing: '$40,000 - $250,000/project',
    category: 'Security Architecture'
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Unified management of multi-cloud and hybrid cloud environments.',
    icon: Cloud,
    features: ['Multi-cloud Orchestration', 'Cost Optimization', 'Security Management', 'Compliance'],
    pricing: '$20,000 - $120,000/project',
    category: 'Cloud Management'
  },
  {
    title: 'IoT Platform Development',
    description: 'Complete IoT platform with device management, data processing, and analytics.',
    icon: Smartphone,
    features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Integration APIs'],
    pricing: '$25,000 - $150,000/project',
    category: 'IoT Solutions'
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Comprehensive digital transformation strategy and implementation.',
    icon: Rocket,
    features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'Implementation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Digital Transformation'
  },
  {
    title: 'API Gateway & Management',
    description: 'Enterprise API gateway setup with security, monitoring, and rate limiting.',
    icon: Network,
    features: ['API Gateway Setup', 'Security Policies', 'Rate Limiting', 'Analytics Dashboard'],
    pricing: '$10,000 - $60,000/project',
    category: 'API Management'
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices architecture design and implementation for scalable applications.',
    icon: Server,
    features: ['Architecture Design', 'Service Decomposition', 'Container Orchestration', 'Service Mesh'],
    pricing: '$30,000 - $200,000/project',
    category: 'Microservices'
  },
  {
    title: 'Data Lake & Warehouse Setup',
    description: 'Modern data lake and warehouse implementation with real-time processing.',
    icon: Database,
    features: ['Data Lake Setup', 'ETL Pipelines', 'Real-time Processing', 'Analytics Platform'],
    pricing: '$25,000 - $150,000/project',
    category: 'Data Infrastructure'
  },
  {
    title: 'Compliance & Governance',
    description: 'IT compliance implementation for GDPR, HIPAA, SOX, and other regulations.',
    icon: Shield,
    features: ['Compliance Assessment', 'Policy Implementation', 'Audit Preparation', 'Risk Management'],
    pricing: '$15,000 - $100,000/project',
    category: 'Compliance'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Complete ITSM implementation with ServiceNow, Jira, or custom solutions.',
    icon: Settings,
    features: ['Service Catalog', 'Incident Management', 'Change Management', 'Knowledge Base'],
    pricing: '$20,000 - $120,000/project',
    category: 'ITSM'
  },
  {
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: Cpu,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],
    pricing: '$25,000 - $150,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$50,000 - $300,000/project',
    category: 'Zero Trust',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],
    pricing: '$40,000 - $200,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',
    icon: Shield,
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],
    pricing: '$60,000 - $400,000/project',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$100,000 - $1,000,000/project',
    category: '5G Networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',
    icon: Server,
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],
    pricing: '$80,000 - $600,000/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management for connected environments.',
    icon: Smartphone,
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],
    pricing: '$50,000 - $300,000/setup',
    category: 'IoT Security',
    popular: true
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$60,000 - $400,000/project',
    category: 'Hybrid Cloud',
    popular: true
  },
  {
    title: 'AI Model Infrastructure & MLOps',
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',
    icon: Brain,
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],
    pricing: '$40,000 - $200,000/setup',
    category: 'MLOps',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$30,000 - $200,000/project',
    category: 'Green IT',
    popular: true
  },
  {
    title: 'Advanced Threat Intelligence Platform',
    description: 'Comprehensive threat intelligence and security analytics platform.',
    icon: Shield,
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],
    pricing: '$60,000 - $300,000/setup',
    category: 'Threat Intelligence',
    popular: true
  },
  {
    title: 'Microservices Architecture Implementation',
    description: 'Complete microservices architecture design and implementation for scalable applications.',
    icon: Server,
    features: ['Service Design', 'API Gateway', 'Service Mesh', 'Container Orchestration'],
    pricing: '$50,000 - $300,000/project',
    category: 'Microservices',
    popular: true
  },
  {
    title: 'Data Lake & Analytics Platform',
    description: 'Comprehensive data lake implementation with advanced analytics and machine learning capabilities.',
    icon: Database,
    features: ['Data Ingestion', 'Data Processing', 'Analytics Engine', 'ML Pipeline'],
    pricing: '$40,000 - $250,000/project',
    category: 'Data Analytics',
    popular: true
  },
  {
    title: 'API Management & Gateway Services',
    description: 'Complete API management platform with security, monitoring, and developer portal.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal'],
    pricing: '$25,000 - $150,000/setup',
    category: 'API Management',
    popular: true
  },
  {
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning and implementation.',
    icon: Shield,
    features: ['Backup Strategy', 'Recovery Testing', 'RTO/RPO Optimization', 'Business Continuity'],
    pricing: '$30,000 - $200,000/project',
    category: 'Disaster Recovery',
    popular: true
  },
  {
    title: 'IT Governance & Compliance Framework',
    description: 'Complete IT governance framework with compliance management and risk assessment.',
    icon: Building,
    features: ['Governance Framework', 'Compliance Management', 'Risk Assessment', 'Policy Development'],
    pricing: '$40,000 - $250,000/project',
    category: 'IT Governance',
    popular: true
  },
  {
    title: 'Advanced Network Security Implementation',
    description: 'Next-generation network security with AI-powered threat detection and response.',
    icon: Lock,
    features: ['AI Threat Detection', 'Network Segmentation', 'Intrusion Prevention', 'Security Analytics'],
    pricing: '$50,000 - $300,000/project',
    category: 'Network Security',
    popular: true
  },
  {
    title: 'Cloud-Native Application Development',
    description: 'Complete cloud-native application development with modern DevOps practices.',
    icon: Code,
    features: ['Cloud-Native Design', 'CI/CD Pipeline', 'Containerization', 'Serverless Architecture'],
    pricing: '$60,000 - $400,000/project',
    category: 'Cloud Development',
    popular: true
  },
  {
    title: 'IT Infrastructure Automation',
    description: 'Complete IT infrastructure automation with Infrastructure as Code and self-healing systems.',
    icon: Settings,
    features: ['Infrastructure as Code', 'Automated Provisioning', 'Self-healing Systems', 'Configuration Management'],
    pricing: '$40,000 - $250,000/setup',
    category: 'Infrastructure Automation',
    popular: true
  },
  {
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI for proactive monitoring, incident management, and automation.',
    icon: Brain,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Root Cause Analysis', 'Performance Optimization'],
    pricing: '$25,000 - $125,000/setup',
    category: 'AIOps'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Complete zero trust security implementation with identity verification and micro-segmentation.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Risk Assessment'],
    pricing: '$50,000 - $250,000/project',
    category: 'Security Architecture'
  },
  {
    title: 'Hybrid Cloud Management Platform',
    description: 'Unified management platform for hybrid cloud environments across multiple providers.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Performance Monitoring'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Cloud Management'
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Implementation of quantum-resistant cryptographic solutions for future-proof security.',
    icon: Lock,
    features: ['Quantum-resistant Algorithms', 'Migration Planning', 'Compliance Testing', 'Performance Optimization'],
    pricing: '$75,000 - $350,000/project',
    category: 'Quantum Security'
  },
  {
    title: 'Smart Building IT Infrastructure',
    description: 'IoT-enabled smart building infrastructure with integrated building management systems.',
    icon: Building,
    features: ['IoT Integration', 'Building Automation', 'Energy Management', 'Occupant Analytics'],
    pricing: '$40,000 - $200,000/project',
    category: 'Smart Buildings'
  },
  {
    title: 'Edge AI Computing Infrastructure',
    description: 'Distributed AI computing infrastructure for edge devices and real-time processing.',
    icon: Cpu,
    features: ['Edge AI Deployment', 'Model Optimization', 'Real-time Processing', 'Bandwidth Optimization'],
    pricing: '$60,000 - $300,000/setup',
    category: 'Edge AI'
  },
  {
    title: 'Cybersecurity Operations Center (SOC)',
    description: '24/7 security operations center with advanced threat detection and response capabilities.',
    icon: Shield,
    features: ['24/7 Monitoring', 'Threat Hunting', 'Incident Response', 'Forensic Analysis'],
    pricing: '$100,000 - $500,000/setup',
    category: 'SOC Services'
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin platform for real-time monitoring and simulation of physical assets.',
    icon: Monitor,
    features: ['Real-time Simulation', 'Predictive Modeling', 'Asset Monitoring', 'Performance Analytics'],
    pricing: '$80,000 - $400,000/project',
    category: 'Digital Twins'
  },
  {
    title: 'Sustainable IT Infrastructure',
    description: 'Green IT solutions with energy-efficient hardware and carbon footprint optimization.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Tracking', 'Green Hardware', 'Sustainability Reporting'],
    pricing: '$35,000 - $175,000/setup',
    category: 'Green IT'
  },
  {
    title: 'Multi-Cloud Disaster Recovery',
    description: 'Comprehensive disaster recovery across multiple cloud providers with automated failover.',
    icon: Cloud,
    features: ['Multi-cloud Backup', 'Automated Failover', 'Data Synchronization', 'Recovery Testing'],
    pricing: '$45,000 - $225,000/setup',
    category: 'Disaster Recovery'
  },
  {
    title: 'IT Compliance & Governance Platform',
    description: 'Comprehensive IT governance platform with compliance monitoring and risk management.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Risk Assessment', 'Policy Management', 'Audit Reporting'],
    pricing: '$20,000 - $100,000/setup',
    category: 'IT Governance'
  },
  {
    title: 'Advanced Network Analytics',
    description: 'AI-powered network analytics with traffic analysis, anomaly detection, and optimization.',
    icon: Network,
    features: ['Traffic Analysis', 'Anomaly Detection', 'Performance Optimization', 'Capacity Planning'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Network Analytics'
  },
  {
    title: 'IT Service Management (ITSM) Platform',
    description: 'Comprehensive ITSM platform with service desk, change management, and asset tracking.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'Knowledge Management'],
    pricing: '$15,000 - $75,000/setup',
    category: 'ITSM'
  },
  {
    title: 'Cloud-Native Application Platform',
    description: 'Platform for building, deploying, and managing cloud-native applications with microservices.',
    icon: Server,
    features: ['Microservices Architecture', 'Container Orchestration', 'Service Mesh', 'API Management'],
    pricing: '$50,000 - $250,000/setup',
    category: 'Cloud Native'
  },
  {
    title: 'IT Asset Lifecycle Management',
    description: 'Complete IT asset lifecycle management from procurement to disposal with cost optimization.',
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
    title: 'AI-Powered DevOps Automation',
    description: 'Intelligent DevOps pipeline with automated testing, deployment, and monitoring.',
    icon: Settings,
    features: ['CI/CD Automation', 'Automated Testing', 'Deployment Orchestration', 'Performance Monitoring'],
    pricing: '$25,000 - $150,000/setup',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployments', 'Reduced Errors', 'Better Quality', 'Cost Savings'],
    marketPrice: '$40,000 - $200,000/setup',
    link: 'https://ziontechgroup.com/ai-devops-automation'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$50,000 - $300,000/setup',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Better Compliance', 'Risk Reduction', 'Future-proof'],
    marketPrice: '$75,000 - $500,000/setup',
    link: 'https://ziontechgroup.com/zero-trust-security'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing infrastructure for low-latency applications and IoT deployments.',
    icon: Server,
    features: ['Edge Node Deployment', 'Latency Optimization', 'IoT Integration', 'Global Distribution'],
    pricing: '$100,000 - $800,000/setup',
    category: 'Edge Computing',
    benefits: ['Low Latency', 'Better Performance', 'Scalability', 'Cost Efficiency'],
    marketPrice: '$150,000 - $1,200,000/setup',
    link: 'https://ziontechgroup.com/edge-computing-infrastructure'
  },
  {
    title: 'AI/ML Infrastructure Setup',
    description: 'Complete AI and machine learning infrastructure with GPU clusters and MLOps pipeline.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'MLOps Pipeline', 'Model Deployment', 'Data Pipeline'],
    pricing: '$75,000 - $400,000/setup',
    category: 'AI Infrastructure',
    popular: true,
    benefits: ['Faster AI Development', 'Scalable Infrastructure', 'Better Performance', 'Cost Optimization'],
    marketPrice: '$100,000 - $600,000/setup',
    link: 'https://ziontechgroup.com/ai-ml-infrastructure'
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions with smart contracts and decentralized applications.',
    icon: Network,
    features: ['Blockchain Setup', 'Smart Contract Development', 'DApp Development', 'Consensus Mechanisms'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Blockchain',
    benefits: ['Decentralization', 'Transparency', 'Security', 'Innovation'],
    marketPrice: '$150,000 - $1,500,000/setup',
    link: 'https://ziontechgroup.com/blockchain-infrastructure'
  },
  {
    title: '5G Network Implementation',
    description: '5G network design and implementation for enterprise and industrial applications.',
    icon: Wifi,
    features: ['5G Network Design', 'Private 5G Networks', 'IoT Connectivity', 'Performance Optimization'],
    pricing: '$200,000 - $2,000,000/setup',
    category: '5G Networks',
    benefits: ['High Speed', 'Low Latency', 'IoT Connectivity', 'Future Technology'],
    marketPrice: '$300,000 - $3,000,000/setup',
    link: 'https://ziontechgroup.com/5g-network-implementation'
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing setup and integration for research and enterprise applications.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Algorithm Development', 'Quantum-Classical Integration', 'Research Support'],
    pricing: '$500,000 - $5,000,000/setup',
    category: 'Quantum Computing',
    benefits: ['Exponential Computing', 'Research Advancement', 'Competitive Edge', 'Future Technology'],
    marketPrice: '$750,000 - $7,500,000/setup',
    link: 'https://ziontechgroup.com/quantum-computing-integration'
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platform with device management, data processing, and analytics.',
    icon: Settings,
    features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Security Framework'],
    pricing: '$150,000 - $1,200,000/setup',
    category: 'IoT',
    benefits: ['Device Connectivity', 'Data Insights', 'Automation', 'Scalability'],
    marketPrice: '$200,000 - $1,800,000/setup',
    link: 'https://ziontechgroup.com/iot-platform-development'
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin platform development for industrial and smart city applications.',
    icon: Building,
    features: ['3D Modeling', 'Real-time Synchronization', 'Predictive Analytics', 'Simulation Engine'],
    pricing: '$200,000 - $2,000,000/setup',
    category: 'Digital Twin',
    benefits: ['Predictive Maintenance', 'Better Planning', 'Cost Reduction', 'Innovation'],
    marketPrice: '$300,000 - $3,000,000/setup',
    link: 'https://ziontechgroup.com/digital-twin-infrastructure'
  },
  {
    title: 'AR/VR Infrastructure Setup',
    description: 'Augmented and virtual reality infrastructure for enterprise and consumer applications.',
    icon: Video,
    features: ['AR/VR Hardware Setup', 'Content Management', 'User Tracking', 'Performance Optimization'],
    pricing: '$100,000 - $800,000/setup',
    category: 'AR/VR',
    benefits: ['Immersive Experience', 'Training Solutions', 'Remote Collaboration', 'Innovation'],
    marketPrice: '$150,000 - $1,200,000/setup',
    link: 'https://ziontechgroup.com/ar-vr-infrastructure'
  },
  {
    title: 'High-Performance Computing Cluster',
    description: 'HPC cluster setup and optimization for scientific computing and data analysis.',
    icon: Cpu,
    features: ['HPC Cluster Design', 'Parallel Processing', 'Performance Tuning', 'Scientific Computing'],
    pricing: '$300,000 - $3,000,000/setup',
    category: 'HPC',
    benefits: ['High Performance', 'Scientific Computing', 'Data Analysis', 'Research Support'],
    marketPrice: '$450,000 - $4,500,000/setup',
    link: 'https://ziontechgroup.com/hpc-cluster-setup'
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT infrastructure with energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Tracking', 'Sustainable Hardware', 'Green Certifications'],
    pricing: '$50,000 - $300,000/setup',
    category: 'Green IT',
    benefits: ['Environmental Impact', 'Cost Savings', 'Compliance', 'Sustainability'],
    marketPrice: '$75,000 - $450,000/setup',
    link: 'https://ziontechgroup.com/green-it-solutions'
  },
  {
    title: 'IT Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning and implementation.',
    icon: Shield,
    features: ['Disaster Recovery Planning', 'Backup Systems', 'Failover Mechanisms', 'Business Continuity'],
    pricing: '$75,000 - $500,000/setup',
    category: 'Disaster Recovery',
    benefits: ['Business Protection', 'Minimal Downtime', 'Data Security', 'Compliance'],
    marketPrice: '$100,000 - $750,000/setup',
    link: 'https://ziontechgroup.com/disaster-recovery'
  },
  {
    title: 'IT Governance & Compliance Framework',
    description: 'Comprehensive IT governance framework with compliance monitoring and risk management.',
    icon: CheckCircle,
    features: ['Governance Framework', 'Compliance Monitoring', 'Risk Management', 'Policy Development'],
    pricing: '$100,000 - $600,000/setup',
    category: 'IT Governance',
    benefits: ['Better Compliance', 'Risk Management', 'Policy Enforcement', 'Audit Readiness'],
    marketPrice: '$150,000 - $900,000/setup',
    link: 'https://ziontechgroup.com/it-governance-compliance'
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
  }
];

const categories = [
  'All Services',
  'Cloud Services',
  'Security',
  'Infrastructure',
  'Support',
  'Data Management',
  'Development',
  'Consulting',
  'Communication',
  'Mobile Management',
  'Asset Management',
  'Compliance',
  'Monitoring',
  'Training',
  'Disaster Recovery',
  'Project Management',
  'Cloud Security',
  'Assessment',
  'DevOps',
  'Data Protection',
  'Software Management',
  'Mobile Management',
  'Asset Management',
  'Training',
  'Virtualization',
  'Compliance',
  'Project Management',
  'Cost Optimization'
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified professionals with years of experience in enterprise IT solutions"
  },
  {
    icon: Star,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring for your critical systems"
  },
  {
    icon: Users,
    title: "Proven Track Record",
    description: "Successfully completed 500+ IT projects for businesses of all sizes"
  },
  {
    icon: Award,
    title: "Cutting-Edge Technology",
    description: "Latest technologies and best practices to keep your systems modern and secure"
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade protection',
    stat: '100%'
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful implementations"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "We analyze your current IT infrastructure and identify areas for improvement"
  },
  {
    step: "02",
    title: "Planning",
    description: "Develop a comprehensive strategy tailored to your business needs and goals"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute the plan with minimal disruption to your business operations"
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing maintenance and support to ensure optimal performance"
  }
];

export default function ITServicesPage() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and technical support. Expert team delivering enterprise-grade solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, IT support, technical consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
<div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<div className="flex items-center justify-center mb-6">
                  <Server className="h-16 w-16 text-green-400 mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                IT{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support to keep your business running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive digital transformation
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
whileHover={{ y: -5 }} ">
                  <div className="flex items-center justify-between mb-4">
                  <div className="text-green-600 group-hover:text-emerald-600 transition-colors">
                  <IconComponent className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
                  <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                  <span className="text-sm font-semibold text-green-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-green-600 hover: bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional IT solutions that drive business success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through expertise, reliability, and customer-focused solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology for delivering successful IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
=======
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
                  </div>
                  </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to discuss your IT needs and get a customized solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/micro-saas" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}