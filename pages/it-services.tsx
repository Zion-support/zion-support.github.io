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
  Monitor, 
  Settings, 
  CheckCircle, 
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
  Rocket,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
  Sprout,
  Bot,
  Eye
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
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
    popular: true
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
    icon: Cpu,
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
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: Cpu,
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
    title: 'Data Mesh Architecture Implementation',
    description: 'Modern data architecture using data mesh principles for decentralized data management.',
    icon: Database,
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics'],
    pricing: '$50,000 - $300,000/project',
    category: 'Data Architecture',
    popular: true
  },
  {
    title: 'Microservices Architecture Design',
    description: 'Microservices-based application architecture for scalable and maintainable systems.',
    icon: Server,
    features: ['Service Decomposition', 'API Gateway', 'Service Discovery', 'Container Orchestration'],
    pricing: '$25,000 - $150,000/project',
    category: 'Microservices',
    popular: true
  },
  {
    title: 'API Management & Gateway Services',
    description: 'Comprehensive API management platform with security, monitoring, and analytics.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Analytics Dashboard'],
    pricing: '$5,000 - $30,000/setup',
    category: 'API Management',
    popular: true
  },
  {
    title: 'Container Security & Compliance',
    description: 'Container security solutions with vulnerability scanning and compliance monitoring.',
    icon: Shield,
    features: ['Vulnerability Scanning', 'Image Security', 'Runtime Protection', 'Compliance Monitoring'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Container Security',
    popular: true
  },
  {
    title: 'Multi-Cloud Cost Optimization',
    description: 'Intelligent cost optimization across multiple cloud providers and services.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Resource Optimization', 'Reserved Instances', 'Automated Scaling'],
    pricing: '$10,000 - $50,000/project',
    category: 'Cloud Optimization',
    popular: true
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Comprehensive IT service management platform with incident, problem, and change management.',
    icon: Settings,
    features: ['Incident Management', 'Problem Management', 'Change Management', 'Service Catalog'],
    pricing: '$15,000 - $75,000/setup',
    category: 'ITSM',
    popular: true
  },
  {
    title: 'Identity & Access Management (IAM)',
    description: 'Comprehensive identity and access management solutions with single sign-on and MFA.',
    icon: Lock,
    features: ['Single Sign-On', 'Multi-Factor Authentication', 'Role-based Access', 'Identity Governance'],
    pricing: '$8,000 - $40,000/setup',
    category: 'IAM',
    popular: true
  },
  {
    title: 'Data Loss Prevention (DLP)',
    description: 'Advanced data loss prevention solutions to protect sensitive information.',
    icon: Shield,
    features: ['Content Discovery', 'Data Classification', 'Policy Enforcement', 'Incident Response'],
    pricing: '$10,000 - $60,000/setup',
    category: 'Data Protection',
    popular: true
  },
  {
    title: 'Network Performance Monitoring',
    description: 'Comprehensive network performance monitoring and optimization solutions.',
    icon: BarChart3,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Network Monitoring',
    popular: true
  },
  {
    title: 'IT Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation services.',
    icon: Shield,
    features: ['Recovery Planning', 'Backup Strategy', 'Testing & Validation', 'Documentation'],
    pricing: '$15,000 - $100,000/project',
    category: 'Disaster Recovery',
    popular: true
  },
  {
    title: 'IT Risk Assessment & Management',
    description: 'Comprehensive IT risk assessment and management framework implementation.',
    icon: Search,
    features: ['Risk Identification', 'Risk Analysis', 'Mitigation Planning', 'Ongoing Monitoring'],
    pricing: '$10,000 - $60,000/project',
    category: 'Risk Management',
    popular: true
  },
  {
    title: 'IT Change Management',
    description: 'Structured change management process for IT infrastructure and applications.',
    icon: Settings,
    features: ['Change Planning', 'Impact Analysis', 'Approval Workflow', 'Rollback Procedures'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Change Management',
    popular: true
  },
  {
    title: 'IT Capacity Planning',
    description: 'Strategic IT capacity planning and resource optimization services.',
    icon: BarChart3,
    features: ['Capacity Analysis', 'Growth Planning', 'Resource Optimization', 'Performance Modeling'],
    pricing: '$10,000 - $50,000/project',
    category: 'Capacity Planning',
    popular: true
  },
  {
    title: 'IT Vendor Management',
    description: 'Strategic IT vendor management and relationship optimization services.',
    icon: Users,
    features: ['Vendor Assessment', 'Contract Management', 'Performance Monitoring', 'Cost Optimization'],
    pricing: '$5,000 - $30,000/project',
    category: 'Vendor Management',
    popular: true
  },
  {
    title: 'IT Service Level Management',
    description: 'Service level agreement management and performance monitoring services.',
    icon: CheckCircle,
    features: ['SLA Definition', 'Performance Monitoring', 'Reporting', 'Continuous Improvement'],
    pricing: '$5,000 - $25,000/setup',
    category: 'SLA Management',
    popular: true
  },
  {
    title: 'IT Knowledge Management',
    description: 'IT knowledge management system implementation and maintenance.',
    icon: BookOpen,
    features: ['Knowledge Base', 'Documentation', 'Search & Retrieval', 'Collaboration Tools'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Knowledge Management',
    popular: true
  },
  {
    title: 'IT Incident Management',
    description: 'Structured incident management process with automated response and escalation.',
    icon: AlertTriangle,
    features: ['Incident Detection', 'Automated Response', 'Escalation Procedures', 'Post-incident Analysis'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Incident Management',
    popular: true
  },
  {
    title: 'IT Problem Management',
    description: 'Root cause analysis and problem resolution services for IT infrastructure.',
    icon: Search,
    features: ['Root Cause Analysis', 'Problem Tracking', 'Solution Implementation', 'Prevention Planning'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Problem Management',
    popular: true
  },
  {
    title: 'IT Configuration Management',
    description: 'IT configuration management database (CMDB) implementation and maintenance.',
    icon: Database,
    features: ['CMDB Setup', 'Configuration Tracking', 'Change Impact Analysis', 'Compliance Reporting'],
    pricing: '$10,000 - $60,000/setup',
    category: 'Configuration Management',
    popular: true
  },
  {
    title: 'IT Release Management',
    description: 'Structured release management process for software and infrastructure deployments.',
    icon: Rocket,
    features: ['Release Planning', 'Deployment Automation', 'Rollback Procedures', 'Quality Gates'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Release Management',
    popular: true
  },
  {
    title: 'IT Service Catalog Management',
    description: 'IT service catalog development and management for self-service IT delivery.',
    icon: ShoppingCart,
    features: ['Service Definition', 'Self-service Portal', 'Request Management', 'Fulfillment Automation'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Service Catalog',
    popular: true
  },
  {
    title: 'IT Financial Management',
    description: 'IT financial management and cost allocation services for IT services.',
    icon: DollarSign,
    features: ['Cost Allocation', 'Budget Management', 'Chargeback Models', 'Financial Reporting'],
    pricing: '$8,000 - $40,000/setup',
    category: 'IT Financial Management',
    popular: true
  },
  {
    title: 'IT Service Continuity Management',
    description: 'IT service continuity planning and implementation for business resilience.',
    icon: Shield,
    features: ['Continuity Planning', 'Recovery Procedures', 'Testing & Validation', 'Ongoing Maintenance'],
    pricing: '$15,000 - $100,000/project',
    category: 'Service Continuity',
    popular: true
  },
  {
    title: 'IT Service Desk Implementation',
    description: 'Comprehensive IT service desk setup with ticketing and knowledge management.',
    icon: MessageSquare,
    features: ['Ticketing System', 'Knowledge Base', 'Self-service Portal', 'Performance Metrics'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Service Desk',
    popular: true
  },
  {
    title: 'IT Service Integration',
    description: 'Integration of IT services with business processes and applications.',
    icon: Network,
    features: ['Process Integration', 'API Development', 'Data Synchronization', 'Workflow Automation'],
    pricing: '$15,000 - $75,000/project',
    category: 'Service Integration',
    popular: true
  },
  {
    title: 'IT Service Quality Management',
    description: 'IT service quality measurement and improvement services.',
    icon: CheckCircle,
    features: ['Quality Metrics', 'Performance Monitoring', 'Improvement Planning', 'Customer Satisfaction'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Quality Management',
    popular: true
  },
  {
    title: 'IT Service Innovation',
    description: 'IT service innovation and digital transformation consulting services.',
    icon: Lightbulb,
    features: ['Innovation Planning', 'Technology Assessment', 'Digital Transformation', 'Future Roadmap'],
    pricing: '$20,000 - $100,000/project',
    category: 'Service Innovation',
    popular: true
  },
  {
    title: 'IT Service Optimization',
    description: 'IT service performance optimization and efficiency improvement services.',
    icon: TrendingUp,
    features: ['Performance Analysis', 'Efficiency Improvement', 'Cost Optimization', 'Process Automation'],
    pricing: '$15,000 - $75,000/project',
    category: 'Service Optimization',
    popular: true
  },
  {
    title: 'IT Service Transformation',
    description: 'Complete IT service transformation and modernization services.',
    icon: RefreshCw,
    features: ['Service Redesign', 'Process Modernization', 'Technology Upgrade', 'Change Management'],
    pricing: '$50,000 - $300,000/project',
    category: 'Service Transformation',
    popular: true
  },
  {
    title: 'IT Service Excellence',
    description: 'IT service excellence framework implementation and continuous improvement.',
    icon: Award,
    features: ['Excellence Framework', 'Best Practices', 'Continuous Improvement', 'Certification Support'],
    pricing: '$25,000 - $150,000/project',
    category: 'Service Excellence',
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
  }
];

const technologies = [
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
  { name: 'AI & Machine Learning', icon: Brain, description: 'TensorFlow, PyTorch, Scikit-learn' },
  { name: 'DevOps & CI/CD', icon: Settings, description: 'Docker, Kubernetes, Jenkins, GitLab' },
  { name: 'Security Tools', icon: Shield, description: 'SIEM, SOAR, Vulnerability Scanners' },
  { name: 'Database Systems', icon: Database, description: 'PostgreSQL, MongoDB, Redis, Elasticsearch' },
  { name: 'Monitoring & Analytics', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' }
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services and solutions for your business" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT services to transform your business infrastructure
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-blue-600 font-semibold">
                    {service.pricing}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
