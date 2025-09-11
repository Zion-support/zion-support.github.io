<<<<<<< HEAD

import Head from 'next/head';

import Link from 'next/link';
<<<<<<< HEAD
=======
=======
import React from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion } from 'framer-motion';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
  Sprout,
  Eye,
  Bot,
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Laptop,
  MessageSquare,
  Mail,
  Building,
  BarChart3,
  Code,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket;



} from 'lucide-react';
const it_services = [{
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi - cloud Strategy', 'Cost Optimization', 'Auto - scaling', 'Disaster Recovery'],
    pricing: '$6, 000 - $30, 000 / project',
    category: 'Cloud',
    popular: true;
  },
  {



    title: 'Cybersecurity Solutions'
    description: 'Enterprise-grade security services to protect your digital assets and data.'
    icon: Shield
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
    pricing: '$5,000 - $40,000/project'
    category: 'Security'



    popular: true
  }
  {
    title: 'Network Infrastructure'
    description: 'Design, implementation, and management of robust network infrastructure.'
    icon: Network
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting']
    pricing: '$120 - $220/hour'
    category: 'Networking'
  }
  {
    title: 'Database Management'
    description: 'Comprehensive database solutions including design, optimization, and maintenance.'
    icon: Database
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services']
    pricing: '$2,000 - $15,000/project'
    category: 'Database'
  }
  {
    title: 'System Administration'
    description: '24/7 system administration and maintenance services for your IT infrastructure.'
    icon: Settings
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management']
    pricing: '$2,000 - $8,000/month'
    category: 'Administration'
  }
  {
    title: 'IT Consulting'
    description: 'Strategic IT consulting to align technology with business objectives.'
    icon: Users
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support']
    pricing: '$150 - $300/hour'
    category: 'Consulting'
  }
  {
    title: 'DevOps & CI/CD Implementation'
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.'
    icon: Server
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging']
    pricing: '$10,000 - $50,000/project'
    category: 'DevOps'
    popular: true
  }
  {
    title: 'Data Center Migration'
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.'
    icon: HardDrive
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization']
    pricing: '$15,000 - $100,000/project'
    category: 'Migration'
  }
  {
    title: 'IT Asset Management'
    description: 'Comprehensive IT asset lifecycle management and optimization.'
    icon: Monitor
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization']
    pricing: '$3,000 - $15,000/setup'
    category: 'Asset Management'
  }
  {
    title: 'Backup & Disaster Recovery'
    description: 'Comprehensive backup solutions and disaster recovery planning.'
    icon: Shield
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance']
    pricing: '$2,000 - $20,000/setup'
    category: 'Backup & Recovery'
  }
  {
    title: 'Network Security Implementation'
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.'
    icon: Lock
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring']
    pricing: '$5,000 - $25,000/project'
    category: 'Network Security'
  }
  {
    title: 'Cloud Security & Compliance'
    description: 'Cloud security implementation and compliance with industry standards.'
    icon: Shield
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection']
    pricing: '$8,000 - $40,000/project'
    category: 'Cloud Security'
  }
  {
    title: 'IT Support & Help Desk'
    description: '24/7 IT support and help desk services for your organization.'
    icon: Users
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base']
    pricing: '$1,500 - $6,000/month'
    category: 'Support'
  }
  {
    title: 'Software Development Services'
    description: 'Custom software development and application modernization services.'
    icon: Code
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance']
    pricing: '$100 - $200/hour'
    category: 'Development'
  }
  {
    title: 'IT Project Management'
    description: 'Professional IT project management and implementation services.'
    icon: BarChart3
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control']
    pricing: '$150 - $300/hour'
    category: 'Project Management'
  }
  {
    title: 'Mobile Device Management'
    description: 'Comprehensive mobile device management and security solutions.'
    icon: Smartphone
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls']
    pricing: '$2,000 - $10,000/setup'
    category: 'Mobile Management'
  }
  {
    title: 'IT Training & Certification'
    description: 'IT training programs and certification preparation for your team.'
    icon: BookOpen
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking']
    pricing: '$200 - $500/person/day'
    category: 'Training'
  }
  {
    title: 'IT Audit & Assessment'
    description: 'Comprehensive IT infrastructure audit and security assessment services.'
    icon: Search
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations']
    pricing: '$5,000 - $25,000/project'
    category: 'Audit & Assessment'
  }
  {
    title: 'IT Procurement & Vendor Management'
    description: 'Strategic IT procurement and vendor relationship management services.'
    icon: ShoppingCart
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management']
    pricing: '$150 - $300/hour'
    category: 'Procurement'
  }
  {
    title: 'IT Governance & Strategy'
    description: 'IT governance framework development and strategic technology planning.'
    icon: Building
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management']
    pricing: '$10,000 - $50,000/project'
    category: 'Governance'
  }
  {
    title: 'IT Compliance & Regulatory'
    description: 'Compliance management for various regulatory requirements and standards.'
    icon: Shield
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support']
    pricing: '$8,000 - $40,000/project'
    category: 'Compliance'
  }
  {
title: 'AI-Powered IT Operations (AIOps)'
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.'
    icon: Cpu
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems']
    pricing: '$15,000 - $75,000/setup'
    category: 'AIOps'
    popular: true
  }
  {
    title: 'Zero Trust Security Architecture'
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.'
    icon: Lock
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access']
    pricing: '$25,000 - $150,000/project'
    category: 'Zero Trust'
    popular: true
  }
  {
    title: 'Edge Computing Infrastructure'
    description: 'Edge computing solutions for low-latency applications and IoT deployments.'
    icon: Network
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing']
    pricing: '$20,000 - $100,000/project'
    category: 'Edge Computing'
    popular: true
  }
  {
    title: 'Quantum-Safe Cryptography Implementation'
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.'
    icon: Shield
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing']
    pricing: '$30,000 - $200,000/project'
    category: 'Quantum Security'
    popular: true
  }
  {
    title: '5G Network Infrastructure'
    description: '5G network design, implementation, and optimization for enterprise applications.'
    icon: Wifi
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization']
    pricing: '$50,000 - $500,000/project'
    category: '5G Networks'
    popular: true
  }
  {
    title: 'Blockchain Infrastructure Services'
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.'
    icon: Server
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms']
    pricing: '$40,000 - $300,000/project'
    category: 'Blockchain'
    popular: true
  }
  {
    title: 'IoT Security & Management Platform'
    description: 'Comprehensive IoT security and device management for connected environments.'
    icon: Smartphone
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring']
    pricing: '$25,000 - $150,000/setup'
    category: 'IoT Security'
    popular: true
  }
  {
    title: 'Hybrid Cloud Orchestration'
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.'
    icon: Cloud
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring']
    pricing: '$30,000 - $200,000/project'
    category: 'Hybrid Cloud'
    popular: true
  }
  {
    title: 'AI Model Infrastructure & MLOps'
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.'
    icon: Brain
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling']
    pricing: '$20,000 - $100,000/setup'
    category: 'MLOps'
    popular: true
  }
  {
    title: 'Green IT & Sustainability Solutions'
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.'
    icon: Sprout
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration']
    pricing: '$15,000 - $80,000/project'
    category: 'Green IT'
    popular: true
  }
  {
    title: 'Digital Twin Infrastructure'
    description: 'Digital twin technology implementation for physical assets and processes.'
    icon: Monitor
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs']
    pricing: '$40,000 - $250,000/project'
    category: 'Digital Twins'
    popular: true
  }
  {
    title: 'AR/VR Infrastructure & Development'
    description: 'Augmented and virtual reality infrastructure setup and application development.'
    icon: Eye
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design']
    pricing: '$25,000 - $150,000/project'
    category: 'AR/VR'
    popular: true
  }
  {
    title: 'Robotic Process Automation (RPA)'
    description: 'Implementation of RPA solutions for business process automation and optimization.'
    icon: Bot
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring']
    pricing: '$10,000 - $60,000/project'
    category: 'RPA'
    popular: true
  }
  {
    title: 'Data Mesh Architecture Implementation'
    description: 'Modern data architecture using data mesh principles for decentralized data management.'
    icon: Database
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics']
    pricing: '$50,000 - $300,000/project'
    category: 'Data Architecture'
    popular: true
  }
  {
    title: 'Serverless Architecture Design'
    description: 'Serverless computing solutions for scalable and cost-effective application deployment.'
    icon: Cloud
    features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization']
    pricing: '$15,000 - $80,000/project'
    category: 'Serverless'
    popular: true
  }
  {
    title: 'API Gateway & Management Platform'
    description: 'Comprehensive API management including security, monitoring, and developer portal.'
    icon: Network
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal']
    pricing: '$10,000 - $50,000/setup'
    category: 'API Management'
    popular: true
  }
  {
    title: 'Microservices Architecture Migration'
    description: 'Migration from monolithic to microservices architecture with container orchestration.'
    icon: Server
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup']
    pricing: '$40,000 - $250,000/project'
    category: 'Microservices'
    popular: true
  }
  {
    title: 'IT Service Management (ITSM) Platform'
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.'
    icon: Settings
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management']
    pricing: '$20,000 - $100,000/setup'
    category: 'ITSM'
    popular: true
  }
  {
    title: 'Cyber Threat Intelligence Platform'
    description: 'Advanced threat intelligence and security information management system.'
    icon: Shield
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting']
    pricing: '$30,000 - $150,000/setup'
    category: 'Threat Intelligence'
    popular: true
  }
  {
    title: 'AI-Powered IT Operations Management'
    description: 'Intelligent IT operations with automated incident response and predictive maintenance.'
    icon: Cpu
    features: ['Automated Incident Response', 'Predictive Maintenance', 'Performance Optimization', 'Root Cause Analysis']
    pricing: '$5,000 - $25,000/month'
    category: 'AIOps'
    popular: true
  }
  {
    title: 'Zero Trust Security Architecture'
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.'
    icon: Lock
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement']
    pricing: '$20,000 - $100,000/setup'
    category: 'Zero Trust Security'
    popular: true
  }
  {
    title: 'Edge Computing Infrastructure'
    description: 'Edge computing solutions for low-latency applications and IoT deployments.'
    icon: Network
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing']
    pricing: '$10,000 - $50,000/setup'
    category: 'Edge Computing'
    popular: true
  }
  {
    title: 'Hybrid Cloud Management'
    description: 'Unified management of hybrid cloud environments across multiple providers.'
    icon: Cloud
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration']
    pricing: '$8,000 - $40,000/month'
    category: 'Hybrid Cloud'
    popular: true
  }
  {
    title: 'API Gateway & Management'
    description: 'Comprehensive API management with security, monitoring, and developer portal.'
    icon: Code
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal']
    pricing: '$3,000 - $15,000/month'
    category: 'API Management'
    popular: true
  }
  {
    title: 'IT Service Management (ITSM)'
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.'
    icon: Settings
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management']
    pricing: '$5,000 - $25,000/setup'
    category: 'ITSM'
    popular: true
  }
  {
    title: 'Data Center Modernization'
    description: 'Modern data center design and implementation with energy efficiency and scalability.'
    icon: Server
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery']
    pricing: '$50,000 - $500,000/project'
    category: 'Data Center'
    popular: true
  }
  {
    title: 'IT Compliance & Governance'
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.'
    icon: CheckCircle
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management']
    pricing: '$10,000 - $50,000/setup'
    category: 'Compliance'
    popular: true
  }
  {
    title: 'Microservices Architecture'
    description: 'Microservices design and implementation with container orchestration and service mesh.'
    icon: Server
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway']
    pricing: '$25,000 - $150,000/project'
    category: 'Microservices'
    popular: true
  }
  {
    title: 'IT Automation & Orchestration'
    description: 'Comprehensive IT automation with workflow orchestration and self-healing systems.'
    icon: Settings
    features: ['Workflow Automation', 'Self-healing Systems', 'Configuration Management', 'Deployment Automation']
    pricing: '$15,000 - $75,000/setup'
    category: 'Automation'
    popular: true
  }
  {
    title: 'Digital Workplace Solutions'
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.'
    icon: Users
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access']
    pricing: '$8,000 - $40,000/setup'
    category: 'Digital Workplace'
    popular: true
  }
  {
    title: 'IT Performance Monitoring'
    description: 'Comprehensive IT performance monitoring with real-time analytics and alerting.'
    icon: Monitor
    features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning']
    pricing: '$3,000 - $15,000/month'
    category: 'Performance Monitoring'
    popular: true
  }
  {
    title: 'Cloud Cost Optimization'
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.'
    icon: DollarSign
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management']
    pricing: '$2,000 - $10,000/month'
    category: 'Cloud Optimization'
    popular: true
  }
  {
    title: 'IT Disaster Recovery Planning'
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.'
    icon: Shield
    features: ['Recovery Planning', 'Testing & Validation', 'RTO/RPO Optimization', 'Business Continuity']
    pricing: '$15,000 - $75,000/project'
    category: 'Disaster Recovery'
    popular: true
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' }
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' }
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' }
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' }
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' }
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
];
const benefits = [{
    icon: Clock
    title: 'Reduced Downtime'
    description: 'Proactive monitoring and maintenance'
    stat: '99.9%'
  }
  {
    icon: Zap
    title: 'Cost Savings'
    description: 'Optimized infrastructure and processes'
    stat: '40%'
  }
  {
    icon: Shield
    title: 'Enhanced Security'
    description: 'Enterprise-grade protection'
    stat: '100%'
  }
  {
    icon: TrendingUp
    title: 'Scalability'
    description: 'Flexible and scalable solutions'
    stat: 'Unlimited'
  }
];
const supportLevels = [{
    name: 'Basic Support'
    description: 'Standard business hours support'
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports']
    pricing: '$1,000/month'
  }
  {
    name: 'Premium Support'
    description: 'Extended hours and priority support'
    features: ['24/7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports']
    pricing: '$3,000/month'
  }
  {
    name: 'Enterprise Support'
    description: 'Dedicated support team and SLA guarantees'
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real-time Reports']
    pricing: 'Custom Pricing'
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Server,;
  Shield,;
  Cloud,;
  Database,;
  Network,;
  Monitor,;
  Settings,;
  CheckCircle,;
  ArrowRight,;
  Clock,;
  Award,;
  Star,;
  Zap,;
  TrendingUp,;
  Users,;
  Sprout,;
  Eye,;
  Bot,;
  Lock,;
  Globe,;
  Cpu,;
  HardDrive,;
  Wifi,;
  Smartphone,;
  Laptop,;
  MessageSquare,;
  Mail,;
  Building,;
  BarChart3,;
  Code,;
  Search,;
  ShoppingCart,;
  BookOpen,;
  Brain,;
  DollarSign,;
  Rocket;
} from 'lucide-react';
const itServices = [{;
    title: 'Cloud Infrastructure Management',;
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',;
    icon: Cloud,;
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],;
    pricing: '$6,000 - $30,000/project',;
    category: 'Cloud',;
    popular: true;
  },;
  {;
    title: 'Cybersecurity Solutions',;
    description: 'Enterprise-grade security services to protect your digital assets and data.',;
    icon: Shield,;
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],;
    pricing: '$5,000 - $40,000/project',;
    category: 'Security',;
    popular: true;
  },;
  {;
    title: 'Network Infrastructure',;
    description: 'Design, implementation, and management of robust network infrastructure.',;
    icon: Network,;
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],;
    pricing: '$120 - $220/hour',;
    category: 'Networking';
  },;
  {;
    title: 'Database Management',;
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',;
    icon: Database,;
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],;
    pricing: '$2,000 - $15,000/project',;
    category: 'Database';
  },;
  {;
    title: 'System Administration',;
    description: '24/7 system administration and maintenance services for your IT infrastructure.',;
    icon: Settings,;
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],;
    pricing: '$2,000 - $8,000/month',;
    category: 'Administration';
  },;
  {;
    title: 'IT Consulting',;
    description: 'Strategic IT consulting to align technology with business objectives.',;
    icon: Users,;
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],;
    pricing: '$150 - $300/hour',;
    category: 'Consulting';
  },;
  {;
    title: 'DevOps & CI/CD Implementation',;
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',;
    icon: Server,;
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],;
    pricing: '$10,000 - $50,000/project',;
    category: 'DevOps',;
    popular: true;
  },;
  {;
    title: 'Data Center Migration',;
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.',;
    icon: HardDrive,;
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization'],;
    pricing: '$15,000 - $100,000/project',;
    category: 'Migration';
  },;
  {;
    title: 'IT Asset Management',;
    description: 'Comprehensive IT asset lifecycle management and optimization.',;
    icon: Monitor,;
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],;
    pricing: '$3,000 - $15,000/setup',;
    category: 'Asset Management';
  },;
  {;
    title: 'Backup & Disaster Recovery',;
    description: 'Comprehensive backup solutions and disaster recovery planning.',;
    icon: Shield,;
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance'],;
    pricing: '$2,000 - $20,000/setup',;
    category: 'Backup & Recovery';
  },;
  {;
    title: 'Network Security Implementation',;
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.',;
    icon: Lock,;
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],;
    pricing: '$5,000 - $25,000/project',;
    category: 'Network Security';
  },;
  {;
    title: 'Cloud Security & Compliance',;
    description: 'Cloud security implementation and compliance with industry standards.',;
    icon: Shield,;
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection'],;
    pricing: '$8,000 - $40,000/project',;
    category: 'Cloud Security';
  },;
  {;
    title: 'IT Support & Help Desk',;
    description: '24/7 IT support and help desk services for your organization.',;
    icon: Users,;
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],;
    pricing: '$1,500 - $6,000/month',;
    category: 'Support';
  },;
  {;
    title: 'Software Development Services',;
    description: 'Custom software development and application modernization services.',;
    icon: Code,;
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],;
    pricing: '$100 - $200/hour',;
    category: 'Development';
  },;
  {;
    title: 'IT Project Management',;
    description: 'Professional IT project management and implementation services.',;
    icon: BarChart3,;
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control'],;
    pricing: '$150 - $300/hour',;
    category: 'Project Management';
  },;
  {;
    title: 'Mobile Device Management',;
    description: 'Comprehensive mobile device management and security solutions.',;
    icon: Smartphone,;
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],;
    pricing: '$2,000 - $10,000/setup',;
    category: 'Mobile Management';
  },;
  {;
    title: 'IT Training & Certification',;
    description: 'IT training programs and certification preparation for your team.',;
    icon: BookOpen,;
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],;
    pricing: '$200 - $500/person/day',;
    category: 'Training';
  },;
  {;
    title: 'IT Audit & Assessment',;
    description: 'Comprehensive IT infrastructure audit and security assessment services.',;
    icon: Search,;
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations'],;
    pricing: '$5,000 - $25,000/project',;
    category: 'Audit & Assessment';
  },;
  {;
    title: 'IT Procurement & Vendor Management',;
    description: 'Strategic IT procurement and vendor relationship management services.',;
    icon: ShoppingCart,;
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management'],;
    pricing: '$150 - $300/hour',;
    category: 'Procurement';
  },;
  {;
    title: 'IT Governance & Strategy',;
    description: 'IT governance framework development and strategic technology planning.',;
    icon: Building,;
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management'],;
    pricing: '$10,000 - $50,000/project',;
    category: 'Governance';
  },;
  {;
    title: 'IT Compliance & Regulatory',;
    description: 'Compliance management for various regulatory requirements and standards.',;
    icon: Shield,;
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support'],;
    pricing: '$8,000 - $40,000/project',;
    category: 'Compliance';
  },;
  {;
title: 'AI-Powered IT Operations (AIOps)',;
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',;
    icon: Cpu,;
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],;
    pricing: '$15,000 - $75,000/setup',;
    category: 'AIOps',;
    popular: true;
  },;
  {;
    title: 'Zero Trust Security Architecture',;
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.',;
    icon: Lock,;
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],;
    pricing: '$25,000 - $150,000/project',;
    category: 'Zero Trust',;
    popular: true;
  },;
  {;
    title: 'Edge Computing Infrastructure',;
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',;
    icon: Network,;
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],;
    pricing: '$20,000 - $100,000/project',;
    category: 'Edge Computing',;
    popular: true;
  },;
  {;
    title: 'Quantum-Safe Cryptography Implementation',;
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',;
    icon: Shield,;
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],;
    pricing: '$30,000 - $200,000/project',;
    category: 'Quantum Security',;
    popular: true;
  },;
  {;
    title: '5G Network Infrastructure',;
    description: '5G network design, implementation, and optimization for enterprise applications.',;
    icon: Wifi,;
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],;
    pricing: '$50,000 - $500,000/project',;
    category: '5G Networks',;
    popular: true;
  },;
  {;
    title: 'Blockchain Infrastructure Services',;
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',;
    icon: Server,;
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],;
    pricing: '$40,000 - $300,000/project',;
    category: 'Blockchain',;
    popular: true;
  },;
  {;
    title: 'IoT Security & Management Platform',;
    description: 'Comprehensive IoT security and device management for connected environments.',;
    icon: Smartphone,;
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],;
    pricing: '$25,000 - $150,000/setup',;
    category: 'IoT Security',;
    popular: true;
  },;
  {;
    title: 'Hybrid Cloud Orchestration',;
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',;
    icon: Cloud,;
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],;
    pricing: '$30,000 - $200,000/project',;
    category: 'Hybrid Cloud',;
    popular: true;
  },;
  {;
    title: 'AI Model Infrastructure & MLOps',;
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',;
    icon: Brain,;
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],;
    pricing: '$20,000 - $100,000/setup',;
    category: 'MLOps',;
    popular: true;
  },;
  {;
    title: 'Green IT & Sustainability Solutions',;
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',;
    icon: Sprout,;
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration'],;
    pricing: '$15,000 - $80,000/project',;
    category: 'Green IT',;
    popular: true;
  },;
  {;
    title: 'Digital Twin Infrastructure',;
    description: 'Digital twin technology implementation for physical assets and processes.',;
    icon: Monitor,;
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs'],;
    pricing: '$40,000 - $250,000/project',;
    category: 'Digital Twins',;
    popular: true;
  },;
  {;
    title: 'AR/VR Infrastructure & Development',;
    description: 'Augmented and virtual reality infrastructure setup and application development.',;
    icon: Eye,;
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design'],;
    pricing: '$25,000 - $150,000/project',;
    category: 'AR/VR',;
    popular: true;
  },;
  {;
    title: 'Robotic Process Automation (RPA)',;
    description: 'Implementation of RPA solutions for business process automation and optimization.',;
    icon: Bot,;
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring'],;
    pricing: '$10,000 - $60,000/project',;
    category: 'RPA',;
    popular: true;
  },;
  {;
    title: 'Data Mesh Architecture Implementation',;
    description: 'Modern data architecture using data mesh principles for decentralized data management.',;
    icon: Database,;
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics'],;
    pricing: '$50,000 - $300,000/project',;
    category: 'Data Architecture',;
    popular: true;
  },;
  {;
    title: 'Serverless Architecture Design',;
    description: 'Serverless computing solutions for scalable and cost-effective application deployment.',;
    icon: Cloud,;
    features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization'],;
    pricing: '$15,000 - $80,000/project',;
    category: 'Serverless',;
    popular: true;
  },;
  {;
    title: 'API Gateway & Management Platform',;
    description: 'Comprehensive API management including security, monitoring, and developer portal.',;
    icon: Network,;
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal'],;
    pricing: '$10,000 - $50,000/setup',;
    category: 'API Management',;
    popular: true;
  },;
  {;
    title: 'Microservices Architecture Migration',;
    description: 'Migration from monolithic to microservices architecture with container orchestration.',;
    icon: Server,;
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup'],;
    pricing: '$40,000 - $250,000/project',;
    category: 'Microservices',;
    popular: true;
  },;
  {;
    title: 'IT Service Management (ITSM) Platform',;
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.',;
    icon: Settings,;
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management'],;
    pricing: '$20,000 - $100,000/setup',;
    category: 'ITSM',;
    popular: true;
  },;
  {;
    title: 'Cyber Threat Intelligence Platform',;
    description: 'Advanced threat intelligence and security information management system.',;
    icon: Shield,;
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],;
    pricing: '$30,000 - $150,000/setup',;
    category: 'Threat Intelligence',;
    popular: true;
  },;
  {;
    title: 'AI-Powered IT Operations Management',;
    description: 'Intelligent IT operations with automated incident response and predictive maintenance.',;
    icon: Cpu,;
    features: ['Automated Incident Response', 'Predictive Maintenance', 'Performance Optimization', 'Root Cause Analysis'],;
    pricing: '$5,000 - $25,000/month',;
    category: 'AIOps',;
    popular: true;
  },;
  {;
    title: 'Zero Trust Security Architecture',;
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',;
    icon: Lock,;
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],;
    pricing: '$20,000 - $100,000/setup',;
    category: 'Zero Trust Security',;
    popular: true;
  },;
  {;
    title: 'Edge Computing Infrastructure',;
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',;
    icon: Network,;
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing'],;
    pricing: '$10,000 - $50,000/setup',;
    category: 'Edge Computing',;
    popular: true;
  },;
  {;
    title: 'Hybrid Cloud Management',;
    description: 'Unified management of hybrid cloud environments across multiple providers.',;
    icon: Cloud,;
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration'],;
    pricing: '$8,000 - $40,000/month',;
    category: 'Hybrid Cloud',;
    popular: true;
  },;
  {;
    title: 'API Gateway & Management',;
    description: 'Comprehensive API management with security, monitoring, and developer portal.',;
    icon: Code,;
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal'],;
    pricing: '$3,000 - $15,000/month',;
    category: 'API Management',;
    popular: true;
  },;
  {;
    title: 'IT Service Management (ITSM)',;
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.',;
    icon: Settings,;
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management'],;
    pricing: '$5,000 - $25,000/setup',;
    category: 'ITSM',;
    popular: true;
  },;
  {;
    title: 'Data Center Modernization',;
    description: 'Modern data center design and implementation with energy efficiency and scalability.',;
    icon: Server,;
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery'],;
    pricing: '$50,000 - $500,000/project',;
    category: 'Data Center',;
    popular: true;
  },;
  {;
    title: 'IT Compliance & Governance',;
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.',;
    icon: CheckCircle,;
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management'],;
    pricing: '$10,000 - $50,000/setup',;
    category: 'Compliance',;
    popular: true;
  },;
  {;
    title: 'Microservices Architecture',;
    description: 'Microservices design and implementation with container orchestration and service mesh.',;
    icon: Server,;
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway'],;
    pricing: '$25,000 - $150,000/project',;
    category: 'Microservices',;
    popular: true;
  },;
  {;
    title: 'IT Automation & Orchestration',;
    description: 'Comprehensive IT automation with workflow orchestration and self-healing systems.',;
    icon: Settings,;
    features: ['Workflow Automation', 'Self-healing Systems', 'Configuration Management', 'Deployment Automation'],;
    pricing: '$15,000 - $75,000/setup',;
    category: 'Automation',;
    popular: true;
  },;
  {;
    title: 'Digital Workplace Solutions',;
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.',;
    icon: Users,;
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access'],;
    pricing: '$8,000 - $40,000/setup',;
    category: 'Digital Workplace',;
    popular: true;
  },;
  {;
    title: 'IT Performance Monitoring',;
    description: 'Comprehensive IT performance monitoring with real-time analytics and alerting.',;
    icon: Monitor,;
    features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning'],;
    pricing: '$3,000 - $15,000/month',;
    category: 'Performance Monitoring',;
    popular: true;
  },;
  {;
    title: 'Cloud Cost Optimization',;
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.',;
    icon: DollarSign,;
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management'],;
    pricing: '$2,000 - $10,000/month',;
    category: 'Cloud Optimization',;
    popular: true;
  },;
  {;
    title: 'IT Disaster Recovery Planning',;
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.',;
    icon: Shield,;
    features: ['Recovery Planning', 'Testing & Validation', 'RTO/RPO Optimization', 'Business Continuity'],;
    pricing: '$15,000 - $75,000/project',;
    category: 'Disaster Recovery',;
    popular: true;
import Link from 'next/link',
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Phone, Mail, Bot } from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations management with predictive analytics and automated incident response.',
    icon: Brain,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Performance Monitoring', 'Capacity Planning'],
    pricing: '$2,999 - $9,999/month',
    category: 'AI Operations',
    benefits: ['Reduced Downtime', 'Cost Optimization', 'Proactive Management', 'Scalable Operations'],
    marketPrice: '$5,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-it-operations',
    popular: true
  },
  {
    title: 'Quantum-Safe Cybersecurity Implementation',
    description: 'Future-proof security solutions using quantum-resistant encryption and advanced threat protection.',
    icon: Shield,
    features: ['Quantum-Resistant Encryption', 'Advanced Threat Detection', 'Zero Trust Architecture', 'Compliance Management'],
    pricing: '$4,999 - $19,999/month',
    category: 'Quantum Security',
    benefits: ['Future-Proof Security', 'Advanced Protection', 'Compliance Ready', 'Scalable Security'],
    marketPrice: '$8,000 - $25,000/month',
    link: 'https://ziontechgroup.com/quantum-security',
    popular: true
  }
  {
    title: 'Network Infrastructure'
    description: 'Design, implementation, and management of robust network infrastructure.'
    icon: Network
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting']
    pricing: '$120 - $220/hour'
    category: 'Networking'
  }
  {
    title: 'Database Management'
    description: 'Comprehensive database solutions including design, optimization, and maintenance.'
    icon: Database
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services']
    pricing: '$2,000 - $15,000/project'
    category: 'Database'
  }
  {
    title: 'System Administration'
    description: '24/7 system administration and maintenance services for your IT infrastructure.'
    icon: Settings
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management']
    pricing: '$2,000 - $8,000/month'
    category: 'Administration'
  }
  {
    title: 'IT Consulting'
    description: 'Strategic IT consulting to align technology with business objectives.'
    icon: Users
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support']
    pricing: '$150 - $300/hour'
    category: 'Consulting'
  }
  {
    title: 'DevOps & CI/CD Implementation'
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.'
    icon: Server
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging']
    pricing: '$10,000 - $50,000/project'
    category: 'DevOps'
    popular: true
  }
  {
    title: 'Data Center Migration'
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.'
    icon: HardDrive
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization']
    pricing: '$15,000 - $100,000/project'
    category: 'Migration'
  }
  {
    title: 'IT Asset Management'
    description: 'Comprehensive IT asset lifecycle management and optimization.'
    icon: Monitor
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization']
    pricing: '$3,000 - $15,000/setup'
    category: 'Asset Management'
  }
  {
    title: 'Backup & Disaster Recovery'
    description: 'Comprehensive backup solutions and disaster recovery planning.'
    icon: Shield
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance']
    pricing: '$2,000 - $20,000/setup'
    category: 'Backup & Recovery'
  }
  {
    title: 'Network Security Implementation'
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.'
    icon: Lock
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring']
    pricing: '$5,000 - $25,000/project'
    category: 'Network Security'
  }
  {
    title: 'Cloud Security & Compliance'
    description: 'Cloud security implementation and compliance with industry standards.'
    icon: Shield
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection']
    pricing: '$8,000 - $40,000/project'
    category: 'Cloud Security'
  }
  {
    title: 'IT Support & Help Desk'
    description: '24/7 IT support and help desk services for your organization.'
    icon: Users
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base']
    pricing: '$1,500 - $6,000/month'
    category: 'Support'
  }
  {
    title: 'Software Development Services'
    description: 'Custom software development and application modernization services.'
    icon: Code
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance']
    pricing: '$100 - $200/hour'
    category: 'Development'
  }
  {
    title: 'IT Project Management'
    description: 'Professional IT project management and implementation services.'
    icon: BarChart3
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control']
    pricing: '$150 - $300/hour'
    category: 'Project Management'
  }
  {
    title: 'Mobile Device Management'
    description: 'Comprehensive mobile device management and security solutions.'
    icon: Smartphone
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls']
    pricing: '$2,000 - $10,000/setup'
    category: 'Mobile Management'
  }
  {
    title: 'IT Training & Certification'
    description: 'IT training programs and certification preparation for your team.'
    icon: BookOpen
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking']
    pricing: '$200 - $500/person/day'
    category: 'Training'
  }
  {
    title: 'IT Audit & Assessment'
    description: 'Comprehensive IT infrastructure audit and security assessment services.'
    icon: Search
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations']
    pricing: '$5,000 - $25,000/project'
    category: 'Audit & Assessment'
  }
  {
    title: 'IT Procurement & Vendor Management'
    description: 'Strategic IT procurement and vendor relationship management services.'
    icon: ShoppingCart
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management']
    pricing: '$150 - $300/hour'
    category: 'Procurement'
  }
  {
    title: 'IT Governance & Strategy'
    description: 'IT governance framework development and strategic technology planning.'
    icon: Building
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management']
    pricing: '$10,000 - $50,000/project'
    category: 'Governance'
  }
  {
    title: 'IT Compliance & Regulatory'
    description: 'Compliance management for various regulatory requirements and standards.'
    icon: Shield
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support']
    pricing: '$8,000 - $40,000/project'
    category: 'Compliance'
  }
  {
title: 'AI-Powered IT Operations (AIOps)'
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.'
    icon: Cpu
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems']
    pricing: '$15,000 - $75,000/setup'
    category: 'AIOps'
    popular: true
  }
  {
    title: 'Zero Trust Security Architecture'
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.'
    icon: Lock
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access']
    pricing: '$25,000 - $150,000/project'
    category: 'Zero Trust'
    popular: true
  }
  {
    title: 'Edge Computing Infrastructure'
    description: 'Edge computing solutions for low-latency applications and IoT deployments.'
    icon: Network
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing']
    pricing: '$20,000 - $100,000/project'
    category: 'Edge Computing'
    popular: true
  }
  {
    title: 'Quantum-Safe Cryptography Implementation'
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.'
    icon: Shield
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing']
    pricing: '$30,000 - $200,000/project'
    category: 'Quantum Security'
    popular: true
  }
  {
    title: '5G Network Infrastructure'
    description: '5G network design, implementation, and optimization for enterprise applications.'
    icon: Wifi
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization']
    pricing: '$50,000 - $500,000/project'
    category: '5G Networks'
    popular: true
  }
  {
    title: 'Blockchain Infrastructure Services'
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.'
    icon: Server
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms']
    pricing: '$40,000 - $300,000/project'
    category: 'Blockchain'
    popular: true
  }
  {
    title: 'IoT Security & Management Platform'
    description: 'Comprehensive IoT security and device management for connected environments.'
    icon: Smartphone
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring']
    pricing: '$25,000 - $150,000/setup'
    category: 'IoT Security'
    popular: true
  }
  {
    title: 'Hybrid Cloud Orchestration'
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.'
    icon: Cloud
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring']
    pricing: '$30,000 - $200,000/project'
    category: 'Hybrid Cloud'
    popular: true
  }
  {
    title: 'AI Model Infrastructure & MLOps'
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.'
    icon: Brain
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling']
    pricing: '$20,000 - $100,000/setup'
    category: 'MLOps'
    popular: true
  }
  {
    title: 'Green IT & Sustainability Solutions'
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.'
    icon: Sprout
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration']
    pricing: '$15,000 - $80,000/project'
    category: 'Green IT'
    popular: true
  }
  {
    title: 'Digital Twin Infrastructure'
    description: 'Digital twin technology implementation for physical assets and processes.'
    icon: Monitor
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs']
    pricing: '$40,000 - $250,000/project'
    category: 'Digital Twins'
    popular: true
  }
  {
    title: 'AR/VR Infrastructure & Development'
    description: 'Augmented and virtual reality infrastructure setup and application development.'
    icon: Eye
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design']
    pricing: '$25,000 - $150,000/project'
    category: 'AR/VR'
    popular: true
  }
  {
    title: 'Robotic Process Automation (RPA)'
    description: 'Implementation of RPA solutions for business process automation and optimization.'
    icon: Bot
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring']
    pricing: '$10,000 - $60,000/project'
    category: 'RPA'
    popular: true
  }
  {
    title: 'Data Mesh Architecture Implementation'
    description: 'Modern data architecture using data mesh principles for decentralized data management.'
    icon: Database
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics']
    pricing: '$50,000 - $300,000/project'
    category: 'Data Architecture'
    popular: true
  }
  {
    title: 'Serverless Architecture Design'
    description: 'Serverless computing solutions for scalable and cost-effective application deployment.'
    icon: Cloud
    features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization']
    pricing: '$15,000 - $80,000/project'
    category: 'Serverless'
    popular: true
  }
  {
    title: 'API Gateway & Management Platform'
    description: 'Comprehensive API management including security, monitoring, and developer portal.'
    icon: Network
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal']
    pricing: '$10,000 - $50,000/setup'
    category: 'API Management'
    popular: true
  }
  {
    title: 'Microservices Architecture Migration'
    description: 'Migration from monolithic to microservices architecture with container orchestration.'
    icon: Server
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup']
    pricing: '$40,000 - $250,000/project'
    category: 'Microservices'
    popular: true
  }
  {
    title: 'IT Service Management (ITSM) Platform'
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.'
    icon: Settings
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management']
    pricing: '$20,000 - $100,000/setup'
    category: 'ITSM'
    popular: true
  }
  {
    title: 'Cyber Threat Intelligence Platform'
    description: 'Advanced threat intelligence and security information management system.'
    icon: Shield
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting']
    pricing: '$30,000 - $150,000/setup'
    category: 'Threat Intelligence'
    popular: true
  }
  {
    title: 'AI-Powered IT Operations Management'
    description: 'Intelligent IT operations with automated incident response and predictive maintenance.'
    icon: Cpu
    features: ['Automated Incident Response', 'Predictive Maintenance', 'Performance Optimization', 'Root Cause Analysis']
    pricing: '$5,000 - $25,000/month'
    category: 'AIOps'
    popular: true
  }
  {
    title: 'Zero Trust Security Architecture'
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.'
    icon: Lock
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement']
    pricing: '$20,000 - $100,000/setup'
    category: 'Zero Trust Security'
    popular: true
  }
  {
    title: 'Edge Computing Infrastructure'
    description: 'Edge computing solutions for low-latency applications and IoT deployments.'
    icon: Network
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing']
    pricing: '$10,000 - $50,000/setup'
    category: 'Edge Computing'
    popular: true
  }
  {
    title: 'Hybrid Cloud Management'
    description: 'Unified management of hybrid cloud environments across multiple providers.'
    icon: Cloud
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration']
    pricing: '$8,000 - $40,000/month'
    category: 'Hybrid Cloud'
    popular: true
  }
  {
    title: 'API Gateway & Management'
    description: 'Comprehensive API management with security, monitoring, and developer portal.'
    icon: Code
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal']
    pricing: '$3,000 - $15,000/month'
    category: 'API Management'
    popular: true
  }
  {
    title: 'IT Service Management (ITSM)'
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.'
    icon: Settings
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management']
    pricing: '$5,000 - $25,000/setup'
    category: 'ITSM'
    popular: true
  }
  {
    title: 'Data Center Modernization'
    description: 'Modern data center design and implementation with energy efficiency and scalability.'
    icon: Server
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery']
    pricing: '$50,000 - $500,000/project'
    category: 'Data Center'
    popular: true
  }
  {
    title: 'IT Compliance & Governance'
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.'
    icon: CheckCircle
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management']
    pricing: '$10,000 - $50,000/setup'
    category: 'Compliance'
    popular: true
  }
  {
    title: 'Microservices Architecture'
    description: 'Microservices design and implementation with container orchestration and service mesh.'
    icon: Server
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway']
    pricing: '$25,000 - $150,000/project'
    category: 'Microservices'
    popular: true
  }
  {
    title: 'IT Automation & Orchestration'
    description: 'Comprehensive IT automation with workflow orchestration and self-healing systems.'
    icon: Settings
    features: ['Workflow Automation', 'Self-healing Systems', 'Configuration Management', 'Deployment Automation']
    pricing: '$15,000 - $75,000/setup'
    category: 'Automation'
    popular: true
  }
  {
    title: 'Digital Workplace Solutions'
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.'
    icon: Users
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access']
    pricing: '$8,000 - $40,000/setup'
    category: 'Digital Workplace'
    popular: true
  }
  {
    title: 'IT Performance Monitoring'
    description: 'Comprehensive IT performance monitoring with real-time analytics and alerting.'
    icon: Monitor
    features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning']
    pricing: '$3,000 - $15,000/month'
    category: 'Performance Monitoring'
    popular: true
  }
  {
    title: 'Cloud Cost Optimization'
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.'
    icon: DollarSign
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management']
    pricing: '$2,000 - $10,000/month'
    category: 'Cloud Optimization'
    popular: true
  }
  {
    title: 'IT Disaster Recovery Planning'
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.'
    icon: Shield
    features: ['Recovery Planning', 'Testing & Validation', 'RTO/RPO Optimization', 'Business Continuity']
    pricing: '$15,000 - $75,000/project'
    category: 'Disaster Recovery'
    popular: true
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },;
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },;
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },;
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },;
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },;
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
];
const benefits = [{;
    icon: Clock,;
    title: 'Reduced Downtime',;
    description: 'Proactive monitoring and maintenance',;
    stat: '99 && 99.9%';
  },;
  {;
    icon: Zap,;
    title: 'Cost Savings',;
    description: 'Optimized infrastructure and processes',;
    stat: '40%';
  },;
  {;
    icon: Shield,;
    title: 'Enhanced Security',;
    description: 'Enterprise-grade protection',;
    stat: '100%';
  },;
  {;
    icon: TrendingUp,;
    title: 'Scalability',;
    description: 'Flexible and scalable solutions',;
    stat: 'Unlimited';
  }
];
const supportLevels = [{;
    name: 'Basic Support',;
    description: 'Standard business hours support',;
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports'],;
    pricing: '$1,000/month';
  },;
  {;
    name: 'Premium Support',;
    description: 'Extended hours and priority support',;
    features: ['24/7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports'],;
    pricing: '$3,000/month';
  },;
  {;
    name: 'Enterprise Support',;
    description: 'Dedicated support team and SLA guarantees',;
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real-time Reports'],;
    pricing: 'Custom Pricing';
  }
];
export default function ITServicesPage() {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
                  <Head>;
                  <title>IT Services - Zion Tech Group</title>;
    pricing: '$5, 000 - $40, 000 / project',
    category: 'Security',
    popular: true;
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220 / hour',
    category: 'Networking';
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2, 000 - $15, 000 / project',
    category: 'Database';
  },
  {
    title: 'System Administration',
    description: '24 / 7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2, 000 - $8, 000 / month',
    category: 'Administration';
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300 / hour',
    category: 'Consulting';
  },
  {
    title: 'DevOps & CI / CD Implementation',
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',
    icon: Server,
    features: ['CI / CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    pricing: '$10, 000 - $50, 000 / project',
    category: 'DevOps',
    popular: true;
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of on - premises infrastructure to cloud or new data centers.',
    icon: HardDrive,
    features: ['Migration Planning', 'Zero - downtime Migration', 'Data Validation', 'Performance Optimization'],
    pricing: '$15, 000 - $100, 000 / project',
    category: 'Migration';
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management and optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3, 000 - $15, 000 / setup',
    category: 'Asset Management';
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: Shield,
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO / RPO Optimization', 'Compliance'],
    pricing: '$2, 000 - $20, 000 / setup',
    category: 'Backup & Recovery';
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.',
    icon: Lock,
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],
    pricing: '$5, 000 - $25, 000 / project',
    category: 'Network Security';
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Cloud security implementation and compliance with industry standards.',
    icon: Shield,
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection'],
    pricing: '$8, 000 - $40, 000 / project',
    category: 'Cloud Security';
  },
  {
    title: 'IT Support & Help Desk',
    description: '24 / 7 IT support and help desk services for your organization.',
    icon: Users,
    features: ['24 / 7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
    pricing: '$1, 500 - $6, 000 / month',
    category: 'Support';
  },
  {
    title: 'Software Development Services',
    description: 'Custom software development and application modernization services.',
    icon: Code,
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],
    pricing: '$100 - $200 / hour',
    category: 'Development';
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management and implementation services.',
    icon: BarChart3,
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control'],
    pricing: '$150 - $300 / hour',
    category: 'Project Management';
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],
    pricing: '$2, 000 - $10, 000 / setup',
    category: 'Mobile Management';
  },
  {
    title: 'IT Training & Certification',
    description: 'IT training programs and certification preparation for your team.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands - on Labs', 'Progress Tracking'],
    pricing: '$200 - $500 / person / day',
    category: 'Training';
  },
  {
    title: 'IT Audit & Assessment',
    description: 'Comprehensive IT infrastructure audit and security assessment services.',
    icon: Search,
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations'],
    pricing: '$5, 000 - $25, 000 / project',
    category: 'Audit & Assessment';
  },
  {
    title: 'IT Procurement & Vendor Management',
    description: 'Strategic IT procurement and vendor relationship management services.',
    icon: ShoppingCart,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management'],
    pricing: '$150 - $300 / hour',
    category: 'Procurement';
  },
  {
    title: 'IT Governance & Strategy',
    description: 'IT governance framework development and strategic technology planning.',
    icon: Building,
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management'],
    pricing: '$10, 000 - $50, 000 / project',
    category: 'Governance';
  },
  {
    title: 'IT Compliance & Regulatory',
    description: 'Compliance management for various regulatory requirements and standards.',
    icon: Shield,
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support'],
    pricing: '$8, 000 - $40, 000 / project',
    category: 'Compliance';
  },
  {
title: 'AI - Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: Cpu,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self - healing Systems'],
    pricing: '$15, 000 - $75, 000 / setup',
    category: 'AIOps',
    popular: true;
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and micro - segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro - segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$25, 000 - $150, 000 / project',
    category: 'Zero Trust',
    popular: true;
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed computing infrastructure for low-latency applications and IoT deployments.',
    icon: Cpu,
    features: ['Edge Nodes Deployment', 'Low-Latency Processing', 'IoT Integration', 'Real-time Analytics'],
    pricing: '$1,999 - $7,999/month',
    category: 'Edge Computing',
    benefits: ['Ultra-Low Latency', 'Improved Performance', 'Cost Efficiency', 'Scalable Infrastructure'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/edge-computing',
    popular: false
  },
  {
    title: '5G Network Implementation & Optimization',
    description: 'Complete 5G network deployment and optimization services for enhanced connectivity.',
    icon: Wifi,
    features: ['5G Network Design', 'Performance Optimization', 'Coverage Analysis', 'Capacity Planning'],
    pricing: '$9,999 - $49,999/month',
    category: '5G Networks',
    benefits: ['Ultra-Fast Connectivity', 'Enhanced Coverage', 'Future-Ready Infrastructure', 'Optimized Performance'],
    marketPrice: '$15,000 - $75,000/month',
    link: 'https://ziontechgroup.com/5g-networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure & Integration',
    description: 'Enterprise blockchain solutions with smart contracts and decentralized applications.',
    icon: Database,
    features: ['Blockchain Development', 'Smart Contracts', 'DApp Integration', 'Consensus Mechanisms'],
    pricing: '$3,999 - $14,999/month',
    category: 'Blockchain Infrastructure',
    benefits: ['Decentralized Solutions', 'Enhanced Security', 'Transparent Operations', 'Cost Reduction'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/blockchain-infrastructure',
    popular: false
  },
  {
    title: 'IoT Platform Development & Management',
    description: 'Comprehensive IoT solutions for device management, data collection, and analytics.',
    icon: Smartphone,
    features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Remote Monitoring'],
    pricing: '$2,499 - $9,999/month',
    category: 'IoT Platforms',
    benefits: ['Connected Devices', 'Real-time Insights', 'Operational Efficiency', 'Data-Driven Decisions'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/iot-platforms',
    popular: false
  },
  {
    title: 'AI Infrastructure & ML Pipeline Setup',
    description: 'Complete AI infrastructure setup with machine learning pipelines and model deployment.',
    icon: Brain,
    features: ['ML Pipeline Setup', 'Model Training', 'Model Deployment', 'Performance Monitoring'],
    pricing: '$4,999 - $19,999/month',
    category: 'AI Infrastructure',
    benefits: ['Advanced AI Capabilities', 'Scalable ML Operations', 'Automated Workflows', 'High Performance'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-infrastructure',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Eco-friendly IT solutions for reducing carbon footprint and energy consumption.',
    icon: Globe,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Practices', 'Green Monitoring'],
    pricing: '$1,999 - $7,999/month',
    category: 'Green IT',
    benefits: ['Environmental Impact', 'Cost Savings', 'Sustainability Goals', 'Efficient Operations'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/green-it',
    popular: false
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation for enhanced protection.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Access Controls'],
    pricing: '$3,999 - $14,999/month',
    category: 'Zero Trust Security',
    popular: true;
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low - latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing'],
    pricing: '$10, 000 - $50, 000 / setup',
    category: 'Edge Computing',
    popular: true;
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Unified management of hybrid cloud environments across multiple providers.',
    icon: Cloud,
    features: ['Multi - cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration'],
    pricing: '$8, 000 - $40, 000 / month',
    category: 'Hybrid Cloud',
    popular: true;
  },
  {
    title: 'API Gateway & Management',
    description: 'Comprehensive API management with security, monitoring, and developer portal.',
    icon: Code,
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal'],
    pricing: '$3, 000 - $15, 000 / month',
    category: 'API Management',
    popular: true;
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management'],
    pricing: '$5, 000 - $25, 000 / setup',
    category: 'ITSM',
    popular: true;
  },
  {
    title: 'Data Center Modernization',
    description: 'Modern data center design and implementation with energy efficiency and scalability.',
    icon: Server,
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery'],
    pricing: '$50, 000 - $500, 000 / project',
    category: 'Data Center',
    popular: true;
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management'],
    pricing: '$10, 000 - $50, 000 / setup',
    category: 'Compliance',
    popular: true;
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices design and implementation with container orchestration and service mesh.',
    icon: Server,
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway'],
    pricing: '$25, 000 - $150, 000 / project',
    category: 'Microservices',
    popular: true;
  },
  {
    title: 'IT Automation & Orchestration',
    description: 'Comprehensive IT automation with workflow orchestration and self - healing systems.',
    icon: Settings,
    features: ['Workflow Automation', 'Self - healing Systems', 'Configuration Management', 'Deployment Automation'],
    pricing: '$15, 000 - $75, 000 / setup',
    category: 'Automation',
    popular: true;
  },
  {
    title: 'Digital Workplace Solutions',
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.',
    icon: Users,
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access'],
    pricing: '$8, 000 - $40, 000 / setup',
    category: 'Digital Workplace',
    popular: true;
  },
  {
    title: 'IT Performance Monitoring',
    description: 'Comprehensive IT performance monitoring with real - time analytics and alerting.',
    icon: Monitor,
    features: ['Real - time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning'],
    pricing: '$3, 000 - $15, 000 / month',
    category: 'Performance Monitoring',
    popular: true;
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management'],
    pricing: '$2, 000 - $10, 000 / month',
    category: 'Cloud Optimization',
    popular: true;
  },
  {
    title: 'IT Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.',
    icon: Shield,
    features: ['Recovery Planning', 'Testing & Validation', 'RTO / RPO Optimization', 'Business Continuity'],
    pricing: '$15, 000 - $75, 000 / project',
    category: 'Disaster Recovery',
    popular: true;
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD - WAN' }
];
const benefits = [{
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Proactive monitoring and maintenance',
    stat: '99.9%';
  },
  {
    icon: Zap,
    title: 'Cost Savings',
    description: 'Optimized infrastructure and processes',
    stat: '40%';
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise - grade protection',
    stat: '100%';
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Flexible and scalable solutions',
    stat: 'Unlimited';
  }
];
const support_levels = [{
    name: 'Basic Support',
    description: 'Standard business hours support',
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports'],
    pricing: '$1, 000 / month';
  },
  {
    name: 'Premium Support',
    description: 'Extended hours and priority support',
    features: ['24 / 7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports'],
    pricing: '$3, 000 / month';
  },
  {
    name: 'Enterprise Support',
    description: 'Dedicated support team and SLA guarantees',
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real - time Reports'],
    pricing: 'Custom Pricing';
  }
];
export default /**
 * ITServicesPage - Function description
 */
function ITServicesPage() {
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">;
                  <Head>;
                  <title > IT Services - Zion Tech Group</title>;
                  <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration." />;
                  <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, system administration" />;
                  </Head>;
      {/* Hero Section */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <section className="relative bg - gradient - to - br from - green - 900 via - emerald - 900 to - teal - 900 text - white py - 20 overflow - hidden">;
<div className="absolute inset - 0">;
                  <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - green - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse">;
                  </div>;
                  <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - emerald - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000">;
                  </div>;
                  </div>;
                  <div className="container mx - auto px - 4 relative z - 10">;
                  <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className="text - center";
          >;
<div className="flex items - center justify - center mb - 6">;
                  <Server className="h - 16 w - 16 text - green - 400 mr - 4" />;
                  <h1 className="text - 4xl md:text - 6xl font - bold">;
                IT{' '}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <span className="bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Services;
                </span>;
</h1>;
                  </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
              Comprehensive IT solutions to keep your business running smoothly. From cloud infrastructure to cybersecurity, we & apos;ve got you covered.;
            </p>;
                  <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                  <Link href="/contact" className="px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 text - white rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold">;
                Get IT Consultation;
              </Link>;
                  <Link href="/services" className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - gray - 900 transition - all duration - 300 font - semibold">;
                View All Services;
              </Link>;
                  </div>;
                  </motion.div>;
                  </div>;
                  </section>;
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Services
                </span>
</h1>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Comprehensive IT solutions to keep your business running smoothly. From cloud infrastructure to cybersecurity, we&apos;ve got you covered.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get IT Consultation
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Services Grid */}
      <section className="py - 20 bg - gray - 50">;
                  <div className="container mx - auto px - 4">;
                  <motion.div;
            className="text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
<h2 className="text - 3xl sm:text - 4xl md:text - 5xl font - bold text - gray - 900 mb - 4">;
              Our IT Solutions;
            </h2>;
                  <p className="text - lg sm:text - xl text - gray - 600 max - w-4xl mx - auto leading - relaxed">;
              End - to - end IT services designed to optimize your infrastructure and ensure business continuity.;
            </p>;
                  </motion.div>;
                  <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {it_services.map ((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div;
                  key={index}
className="bg - white p - 8 rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 group;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion } from 'framer-motion';


<<<<<<< HEAD

ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======
=======
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

=======

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Settings, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Brain, 
  Cpu, 
  Wifi, 
  Monitor, 
  AlertTriangle, 
  TrendingUp, 
  Lock, 
  Globe, 
  HardDrive, 
  Smartphone, 
  Building, 
import {
  Server,
  Shield,
  Cloud,
  Database,
  Network,
  Code,
  Settings,
  CheckCircle,
  Users,
  DollarSign,
  Brain,
  Cpu,
  Wifi,
  Monitor,
  AlertTriangle,
  TrendingUp,
  Lock,
  Globe,
  HardDrive,
  Smartphone,
  Building,
  BarChart3,
  Package,
  GraduationCap,
  Atom,
  Leaf,
  Link as LinkIcon,
  ArrowRight,
  Clock,
  Award,
  Star,
  Zap,
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Search, 
  ShoppingCart, 
  BookOpen, 

<<<<<<< HEAD
  Rocket,
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
  Server
  Shield
  Cloud
  Database
  Network
  Code
  Settings
  CheckCircle
  Users
  DollarSign
  Brain
  Cpu
  Wifi
  Monitor
  AlertTriangle
  TrendingUp
  Lock
  Globe
  HardDrive
  Smartphone
  Building
  BarChart3
  Package
  GraduationCap
  Atom
  Leaf
  Link as LinkIcon
  ArrowRight
  Clock
  Award
  Star
  Zap
  Search
  ShoppingCart
  BookOpen
  Rocket
<<<<<<< HEAD
  Rocket,;
=======



=======
  Rocket,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Laptop;
} from 'lucide-react';

  Laptop
} from 'lucide-react'
import Layout from '../components/Layout'


<<<<<<< HEAD
  Rocket,;
origin/main
  Rocket,;
  Laptop;
} from 'lucide-react';
  Laptop
} from 'lucide-react'
import Layout from '../components/Layout'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const itServices = [
  {
    title: 'Cloud Infrastructure Management'
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services'
    icon: Cloud
    features: ['AWS/Azure/GCP Setup', 'Server Management', 'Auto-scaling', 'Cost Optimization']
    pricing: '$2,000 - $10,000/month'
    category: 'Cloud Computing'
    popular: true
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24/7 monitoring']
    marketPrice: '$5,000/month'
    link: '/contact'
  }
import Layout from '../components / Layout';
;
const it_services = [;
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services',
    icon: Cloud,
    features: ['AWS / Azure / GCP Setup', 'Server Management', 'Auto - scaling', 'Cost Optimization'],
    pricing: '$2, 000 - $10, 000 / month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24 / 7 monitoring'],
    market_price: '$5, 000 / month',
    link: '/contact';
  },
  {


<<<<<<< HEAD


    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats',
    icon: Shield,
    features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance'],
    pricing: '$1,500 - $8,000/month',
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======
>>>>>>> origin/automation-improvements-final
=======




>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    category: 'Security',
    popular: true,
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24/7 protection'],
    marketPrice: '$4,000/month',
    title: 'Cybersecurity Solutions'
    description: 'Comprehensive security services to protect your business from cyber threats'
    icon: Shield
    features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance']
    pricing: '$1,500 - $8,000/month'
    category: 'Security'
    popular: true
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24/7 protection']
    marketPrice: '$4,000/month'



    link: '/contact'
<<<<<<< HEAD
origin/main
=======
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    link: '/contact'
    pricing: '$1, 500 - $8, 000 / month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24 / 7 protection'],
    market_price: '$4, 000 / month',
    link: '/contact';
  },
  {
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance services',
    icon: Database,
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration'],
    pricing: '$1, 000 - $5, 000 / month',
    category: 'Database',
    popular: false,
    benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Scalability'],
    market_price: '$2, 500 / month',
    link: '/contact';
  }
  {
    title: 'Database Management'
    description: 'Expert database design, optimization, and maintenance services'
    icon: Database
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration']
    pricing: '$1,000 - $5,000/month'
    category: 'Database'
    popular: false
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import Head from 'next/head';

import Link from 'next/link';
=======
import React from 'react';
import Head from 'next / head';
import Link from 'next / link';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import { motion } from 'framer-motion';


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
  Sprout,
  Eye,
  Bot,
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Laptop,
  MessageSquare,
  Mail,
  Building,
  BarChart3,
  Code,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket;



} from 'lucide-react';
const it_services = [{
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi - cloud Strategy', 'Cost Optimization', 'Auto - scaling', 'Disaster Recovery'],
    pricing: '$6, 000 - $30, 000 / project',
    category: 'Cloud',
    popular: true;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$5,000 - $40,000/project',
    category: 'Security',
    title: 'Cybersecurity Solutions'
    description: 'Enterprise-grade security services to protect your digital assets and data.'
    icon: Shield
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
    pricing: '$5,000 - $40,000/project'
    category: 'Security'
origin/main
    popular: true
  }
  {
    title: 'Network Infrastructure'
    description: 'Design, implementation, and management of robust network infrastructure.'
    icon: Network
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting']
    pricing: '$120 - $220/hour'
    category: 'Networking'
  }
  {
    title: 'Database Management'
    description: 'Comprehensive database solutions including design, optimization, and maintenance.'
    icon: Database
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services']
    pricing: '$2,000 - $15,000/project'
    category: 'Database'
  }
  {
    title: 'System Administration'
    description: '24/7 system administration and maintenance services for your IT infrastructure.'
    icon: Settings
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management']
    pricing: '$2,000 - $8,000/month'
    category: 'Administration'
  }
  {
    title: 'IT Consulting'
    description: 'Strategic IT consulting to align technology with business objectives.'
    icon: Users
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support']
    pricing: '$150 - $300/hour'
    category: 'Consulting'
  }
  {
    title: 'DevOps & CI/CD Implementation'
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.'
    icon: Server
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging']
    pricing: '$10,000 - $50,000/project'
    category: 'DevOps'
    popular: true
  }
  {
    title: 'Data Center Migration'
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.'
    icon: HardDrive
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization']
    pricing: '$15,000 - $100,000/project'
    category: 'Migration'
  }
  {
    title: 'IT Asset Management'
    description: 'Comprehensive IT asset lifecycle management and optimization.'
    icon: Monitor
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization']
    pricing: '$3,000 - $15,000/setup'
    category: 'Asset Management'
  }
  {
    title: 'Backup & Disaster Recovery'
    description: 'Comprehensive backup solutions and disaster recovery planning.'
    icon: Shield
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance']
    pricing: '$2,000 - $20,000/setup'
    category: 'Backup & Recovery'
  }
  {
    title: 'Network Security Implementation'
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.'
    icon: Lock
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring']
    pricing: '$5,000 - $25,000/project'
    category: 'Network Security'
  }
  {
    title: 'Cloud Security & Compliance'
    description: 'Cloud security implementation and compliance with industry standards.'
    icon: Shield
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection']
    pricing: '$8,000 - $40,000/project'
    category: 'Cloud Security'
  }
  {
    title: 'IT Support & Help Desk'
    description: '24/7 IT support and help desk services for your organization.'
    icon: Users
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base']
    pricing: '$1,500 - $6,000/month'
    category: 'Support'
  }
  {
    title: 'Software Development Services'
    description: 'Custom software development and application modernization services.'
    icon: Code
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance']
    pricing: '$100 - $200/hour'
    category: 'Development'
  }
  {
    title: 'IT Project Management'
    description: 'Professional IT project management and implementation services.'
    icon: BarChart3
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control']
    pricing: '$150 - $300/hour'
    category: 'Project Management'
  }
  {
    title: 'Mobile Device Management'
    description: 'Comprehensive mobile device management and security solutions.'
    icon: Smartphone
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls']
    pricing: '$2,000 - $10,000/setup'
    category: 'Mobile Management'
  }
  {
    title: 'IT Training & Certification'
    description: 'IT training programs and certification preparation for your team.'
    icon: BookOpen
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking']
    pricing: '$200 - $500/person/day'
    category: 'Training'
  }
  {
    title: 'IT Audit & Assessment'
    description: 'Comprehensive IT infrastructure audit and security assessment services.'
    icon: Search
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations']
    pricing: '$5,000 - $25,000/project'
    category: 'Audit & Assessment'
  }
  {
    title: 'IT Procurement & Vendor Management'
    description: 'Strategic IT procurement and vendor relationship management services.'
    icon: ShoppingCart
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management']
    pricing: '$150 - $300/hour'
    category: 'Procurement'
  }
  {
    title: 'IT Governance & Strategy'
    description: 'IT governance framework development and strategic technology planning.'
    icon: Building
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management']
    pricing: '$10,000 - $50,000/project'
    category: 'Governance'
  }
  {
    title: 'IT Compliance & Regulatory'
    description: 'Compliance management for various regulatory requirements and standards.'
    icon: Shield
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support']
    pricing: '$8,000 - $40,000/project'
    category: 'Compliance'
  }
  {
title: 'AI-Powered IT Operations (AIOps)'
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.'
    icon: Cpu
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems']
    pricing: '$15,000 - $75,000/setup'
    category: 'AIOps'
    popular: true
  }
  {
    title: 'Zero Trust Security Architecture'
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.'
    icon: Lock
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access']
    pricing: '$25,000 - $150,000/project'
    category: 'Zero Trust'
    popular: true
  }
  {
    title: 'Edge Computing Infrastructure'
    description: 'Edge computing solutions for low-latency applications and IoT deployments.'
    icon: Network
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing']
    pricing: '$20,000 - $100,000/project'
    category: 'Edge Computing'
    popular: true
  }
  {
    title: 'Quantum-Safe Cryptography Implementation'
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.'
    icon: Shield
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing']
    pricing: '$30,000 - $200,000/project'
    category: 'Quantum Security'
    popular: true
  }
  {
    title: '5G Network Infrastructure'
    description: '5G network design, implementation, and optimization for enterprise applications.'
    icon: Wifi
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization']
    pricing: '$50,000 - $500,000/project'
    category: '5G Networks'
    popular: true
  }
  {
    title: 'Blockchain Infrastructure Services'
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.'
    icon: Server
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms']
    pricing: '$40,000 - $300,000/project'
    category: 'Blockchain'
    popular: true
  }
  {
    title: 'IoT Security & Management Platform'
    description: 'Comprehensive IoT security and device management for connected environments.'
    icon: Smartphone
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring']
    pricing: '$25,000 - $150,000/setup'
    category: 'IoT Security'
    popular: true
  }
  {
    title: 'Hybrid Cloud Orchestration'
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.'
    icon: Cloud
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring']
    pricing: '$30,000 - $200,000/project'
    category: 'Hybrid Cloud'
    popular: true
  }
  {
    title: 'AI Model Infrastructure & MLOps'
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.'
    icon: Brain
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling']
    pricing: '$20,000 - $100,000/setup'
    category: 'MLOps'
    popular: true
  }
  {
    title: 'Green IT & Sustainability Solutions'
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.'
    icon: Sprout
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration']
    pricing: '$15,000 - $80,000/project'
    category: 'Green IT'
    popular: true
  }
  {
    title: 'Digital Twin Infrastructure'
    description: 'Digital twin technology implementation for physical assets and processes.'
    icon: Monitor
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs']
    pricing: '$40,000 - $250,000/project'
    category: 'Digital Twins'
    popular: true
  }
  {
    title: 'AR/VR Infrastructure & Development'
    description: 'Augmented and virtual reality infrastructure setup and application development.'
    icon: Eye
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design']
    pricing: '$25,000 - $150,000/project'
    category: 'AR/VR'
    popular: true
  }
  {
    title: 'Robotic Process Automation (RPA)'
    description: 'Implementation of RPA solutions for business process automation and optimization.'
    icon: Bot
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring']
    pricing: '$10,000 - $60,000/project'
    category: 'RPA'
    popular: true
  }
  {
    title: 'Data Mesh Architecture Implementation'
    description: 'Modern data architecture using data mesh principles for decentralized data management.'
    icon: Database
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics']
    pricing: '$50,000 - $300,000/project'
    category: 'Data Architecture'
    popular: true
  }
  {
    title: 'Serverless Architecture Design'
    description: 'Serverless computing solutions for scalable and cost-effective application deployment.'
    icon: Cloud
    features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization']
    pricing: '$15,000 - $80,000/project'
    category: 'Serverless'
    popular: true
  }
  {
    title: 'API Gateway & Management Platform'
    description: 'Comprehensive API management including security, monitoring, and developer portal.'
    icon: Network
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal']
    pricing: '$10,000 - $50,000/setup'
    category: 'API Management'
    popular: true
  }
  {
    title: 'Microservices Architecture Migration'
    description: 'Migration from monolithic to microservices architecture with container orchestration.'
    icon: Server
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup']
    pricing: '$40,000 - $250,000/project'
    category: 'Microservices'
    popular: true
  }
  {
    title: 'IT Service Management (ITSM) Platform'
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.'
    icon: Settings
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management']
    pricing: '$20,000 - $100,000/setup'
    category: 'ITSM'
    popular: true
  }
  {
    title: 'Cyber Threat Intelligence Platform'
    description: 'Advanced threat intelligence and security information management system.'
    icon: Shield
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting']
    pricing: '$30,000 - $150,000/setup'
    category: 'Threat Intelligence'
    popular: true
  }
  {
    title: 'AI-Powered IT Operations Management'
    description: 'Intelligent IT operations with automated incident response and predictive maintenance.'
    icon: Cpu
    features: ['Automated Incident Response', 'Predictive Maintenance', 'Performance Optimization', 'Root Cause Analysis']
    pricing: '$5,000 - $25,000/month'
    category: 'AIOps'
    popular: true
  }
  {
    title: 'Zero Trust Security Architecture'
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.'
    icon: Lock
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement']
    pricing: '$20,000 - $100,000/setup'
    category: 'Zero Trust Security'
    popular: true
  }
  {
    title: 'Edge Computing Infrastructure'
    description: 'Edge computing solutions for low-latency applications and IoT deployments.'
    icon: Network
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing']
    pricing: '$10,000 - $50,000/setup'
    category: 'Edge Computing'
    popular: true
  }
  {
    title: 'Hybrid Cloud Management'
    description: 'Unified management of hybrid cloud environments across multiple providers.'
    icon: Cloud
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration']
    pricing: '$8,000 - $40,000/month'
    category: 'Hybrid Cloud'
    popular: true
  }
  {
    title: 'API Gateway & Management'
    description: 'Comprehensive API management with security, monitoring, and developer portal.'
    icon: Code
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal']
    pricing: '$3,000 - $15,000/month'
    category: 'API Management'
    popular: true
  }
  {
    title: 'IT Service Management (ITSM)'
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.'
    icon: Settings
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management']
    pricing: '$5,000 - $25,000/setup'
    category: 'ITSM'
    popular: true
  }
  {
    title: 'Data Center Modernization'
    description: 'Modern data center design and implementation with energy efficiency and scalability.'
    icon: Server
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery']
    pricing: '$50,000 - $500,000/project'
    category: 'Data Center'
    popular: true
  }
  {
    title: 'IT Compliance & Governance'
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.'
    icon: CheckCircle
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management']
    pricing: '$10,000 - $50,000/setup'
    category: 'Compliance'
    popular: true
  }
  {
    title: 'Microservices Architecture'
    description: 'Microservices design and implementation with container orchestration and service mesh.'
    icon: Server
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway']
    pricing: '$25,000 - $150,000/project'
    category: 'Microservices'
    popular: true
  }
  {
    title: 'IT Automation & Orchestration'
    description: 'Comprehensive IT automation with workflow orchestration and self-healing systems.'
    icon: Settings
    features: ['Workflow Automation', 'Self-healing Systems', 'Configuration Management', 'Deployment Automation']
    pricing: '$15,000 - $75,000/setup'
    category: 'Automation'
    popular: true
  }
  {
    title: 'Digital Workplace Solutions'
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.'
    icon: Users
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access']
    pricing: '$8,000 - $40,000/setup'
    category: 'Digital Workplace'
    popular: true
  }
  {
    title: 'IT Performance Monitoring'
    description: 'Comprehensive IT performance monitoring with real-time analytics and alerting.'
    icon: Monitor
    features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning']
    pricing: '$3,000 - $15,000/month'
    category: 'Performance Monitoring'
    popular: true
  }
  {
    title: 'Cloud Cost Optimization'
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.'
    icon: DollarSign
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management']
    pricing: '$2,000 - $10,000/month'
    category: 'Cloud Optimization'
    popular: true
  }
  {
    title: 'IT Disaster Recovery Planning'
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.'
    icon: Shield
    features: ['Recovery Planning', 'Testing & Validation', 'RTO/RPO Optimization', 'Business Continuity']
    pricing: '$15,000 - $75,000/project'
    category: 'Disaster Recovery'
    popular: true
  }
<<<<<<< HEAD
]
=======

]


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const industries = [
  { name: 'Healthcare', icon: Shield, description: 'Secure and compliant IT solutions for healthcare organizations' }
  { name: 'Finance', icon: TrendingUp, description: 'Robust IT infrastructure for financial services' }
  { name: 'Manufacturing', icon: Building, description: 'Industrial IT solutions and automation' }
  { name: 'Retail', icon: ShoppingCart, description: 'E-commerce and retail technology solutions' }
  { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning management systems' }
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions and compliance' }
<<<<<<< HEAD
=======

];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' }
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' }
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' }
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' }
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' }
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
];
const benefits = [{
    icon: Clock
    title: 'Reduced Downtime'
    description: 'Proactive monitoring and maintenance'
    stat: '99.9%'
  }
  {
    icon: Zap
    title: 'Cost Savings'
    description: 'Optimized infrastructure and processes'
    stat: '40%'
  }
  {
    icon: Shield
    title: 'Enhanced Security'
    description: 'Enterprise-grade protection'
    stat: '100%'
  }
  {
    icon: TrendingUp
    title: 'Scalability'
    description: 'Flexible and scalable solutions'
    stat: 'Unlimited'
  }
];
const supportLevels = [{
    name: 'Basic Support'
    description: 'Standard business hours support'
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports']
    pricing: '$1,000/month'
  }
  {
    name: 'Premium Support'
    description: 'Extended hours and priority support'
    features: ['24/7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports']
    pricing: '$3,000/month'
  }
  {
    name: 'Enterprise Support'
    description: 'Dedicated support team and SLA guarantees'
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real-time Reports']
    pricing: 'Custom Pricing'
=======
import {;
  Server,;
  Shield,;
  Cloud,;
  Database,;
  Network,;
  Monitor,;
  Settings,;
  CheckCircle,;
  ArrowRight,;
  Clock,;
  Award,;
  Star,;
  Zap,;
  TrendingUp,;
  Users,;
  Sprout,;
  Eye,;
  Bot,;
  Lock,;
  Globe,;
  Cpu,;
  HardDrive,;
  Wifi,;
  Smartphone,;
  Laptop,;
  MessageSquare,;
  Mail,;
  Building,;
  BarChart3,;
  Code,;
  Search,;
  ShoppingCart,;
  BookOpen,;
  Brain,;
  DollarSign,;
  Rocket;
} from 'lucide-react';
const itServices = [{;
    title: 'Cloud Infrastructure Management',;
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',;
    icon: Cloud,;
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],;
    pricing: '$6,000 - $30,000/project',;
    category: 'Cloud',;
    popular: true;
  },;
  {;
    title: 'Cybersecurity Solutions',;
    description: 'Enterprise-grade security services to protect your digital assets and data.',;
    icon: Shield,;
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],;
    pricing: '$5,000 - $40,000/project',;
    category: 'Security',;
    popular: true;
  },;
  {;
    title: 'Network Infrastructure',;
    description: 'Design, implementation, and management of robust network infrastructure.',;
    icon: Network,;
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],;
    pricing: '$120 - $220/hour',;
    category: 'Networking';
  },;
  {;
    title: 'Database Management',;
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',;
    icon: Database,;
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],;
    pricing: '$2,000 - $15,000/project',;
    category: 'Database';
  },;
  {;
    title: 'System Administration',;
    description: '24/7 system administration and maintenance services for your IT infrastructure.',;
    icon: Settings,;
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],;
    pricing: '$2,000 - $8,000/month',;
    category: 'Administration';
  },;
  {;
    title: 'IT Consulting',;
    description: 'Strategic IT consulting to align technology with business objectives.',;
    icon: Users,;
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],;
    pricing: '$150 - $300/hour',;
    category: 'Consulting';
  },;
  {;
    title: 'DevOps & CI/CD Implementation',;
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',;
    icon: Server,;
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],;
    pricing: '$10,000 - $50,000/project',;
    category: 'DevOps',;
    popular: true;
  },;
  {;
    title: 'Data Center Migration',;
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.',;
    icon: HardDrive,;
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization'],;
    pricing: '$15,000 - $100,000/project',;
    category: 'Migration';
  },;
  {;
    title: 'IT Asset Management',;
    description: 'Comprehensive IT asset lifecycle management and optimization.',;
    icon: Monitor,;
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],;
    pricing: '$3,000 - $15,000/setup',;
    category: 'Asset Management';
  },;
  {;
    title: 'Backup & Disaster Recovery',;
    description: 'Comprehensive backup solutions and disaster recovery planning.',;
    icon: Shield,;
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance'],;
    pricing: '$2,000 - $20,000/setup',;
    category: 'Backup & Recovery';
  },;
  {;
    title: 'Network Security Implementation',;
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.',;
    icon: Lock,;
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],;
    pricing: '$5,000 - $25,000/project',;
    category: 'Network Security';
  },;
  {;
    title: 'Cloud Security & Compliance',;
    description: 'Cloud security implementation and compliance with industry standards.',;
    icon: Shield,;
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection'],;
    pricing: '$8,000 - $40,000/project',;
    category: 'Cloud Security';
  },;
  {;
    title: 'IT Support & Help Desk',;
    description: '24/7 IT support and help desk services for your organization.',;
    icon: Users,;
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],;
    pricing: '$1,500 - $6,000/month',;
    category: 'Support';
  },;
  {;
    title: 'Software Development Services',;
    description: 'Custom software development and application modernization services.',;
    icon: Code,;
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],;
    pricing: '$100 - $200/hour',;
    category: 'Development';
  },;
  {;
    title: 'IT Project Management',;
    description: 'Professional IT project management and implementation services.',;
    icon: BarChart3,;
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control'],;
    pricing: '$150 - $300/hour',;
    category: 'Project Management';
  },;
  {;
    title: 'Mobile Device Management',;
    description: 'Comprehensive mobile device management and security solutions.',;
    icon: Smartphone,;
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],;
    pricing: '$2,000 - $10,000/setup',;
    category: 'Mobile Management';
  },;
  {;
    title: 'IT Training & Certification',;
    description: 'IT training programs and certification preparation for your team.',;
    icon: BookOpen,;
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],;
    pricing: '$200 - $500/person/day',;
    category: 'Training';
  },;
  {;
    title: 'IT Audit & Assessment',;
    description: 'Comprehensive IT infrastructure audit and security assessment services.',;
    icon: Search,;
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations'],;
    pricing: '$5,000 - $25,000/project',;
    category: 'Audit & Assessment';
  },;
  {;
    title: 'IT Procurement & Vendor Management',;
    description: 'Strategic IT procurement and vendor relationship management services.',;
    icon: ShoppingCart,;
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management'],;
    pricing: '$150 - $300/hour',;
    category: 'Procurement';
  },;
  {;
    title: 'IT Governance & Strategy',;
    description: 'IT governance framework development and strategic technology planning.',;
    icon: Building,;
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management'],;
    pricing: '$10,000 - $50,000/project',;
    category: 'Governance';
  },;
  {;
    title: 'IT Compliance & Regulatory',;
    description: 'Compliance management for various regulatory requirements and standards.',;
    icon: Shield,;
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support'],;
    pricing: '$8,000 - $40,000/project',;
    category: 'Compliance';
  },;
  {;
title: 'AI-Powered IT Operations (AIOps)',;
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',;
    icon: Cpu,;
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],;
    pricing: '$15,000 - $75,000/setup',;
    category: 'AIOps',;
    popular: true;
  },;
  {;
    title: 'Zero Trust Security Architecture',;
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.',;
    icon: Lock,;
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],;
    pricing: '$25,000 - $150,000/project',;
    category: 'Zero Trust',;
    popular: true;
  },;
  {;
    title: 'Edge Computing Infrastructure',;
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',;
    icon: Network,;
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],;
    pricing: '$20,000 - $100,000/project',;
    category: 'Edge Computing',;
    popular: true;
  },;
  {;
    title: 'Quantum-Safe Cryptography Implementation',;
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',;
    icon: Shield,;
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],;
    pricing: '$30,000 - $200,000/project',;
    category: 'Quantum Security',;
    popular: true;
  },;
  {;
    title: '5G Network Infrastructure',;
    description: '5G network design, implementation, and optimization for enterprise applications.',;
    icon: Wifi,;
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],;
    pricing: '$50,000 - $500,000/project',;
    category: '5G Networks',;
    popular: true;
  },;
  {;
    title: 'Blockchain Infrastructure Services',;
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',;
    icon: Server,;
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],;
    pricing: '$40,000 - $300,000/project',;
    category: 'Blockchain',;
    popular: true;
  },;
  {;
    title: 'IoT Security & Management Platform',;
    description: 'Comprehensive IoT security and device management for connected environments.',;
    icon: Smartphone,;
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],;
    pricing: '$25,000 - $150,000/setup',;
    category: 'IoT Security',;
    popular: true;
  },;
  {;
    title: 'Hybrid Cloud Orchestration',;
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',;
    icon: Cloud,;
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],;
    pricing: '$30,000 - $200,000/project',;
    category: 'Hybrid Cloud',;
    popular: true;
  },;
  {;
    title: 'AI Model Infrastructure & MLOps',;
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',;
    icon: Brain,;
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],;
    pricing: '$20,000 - $100,000/setup',;
    category: 'MLOps',;
    popular: true;
  },;
  {;
    title: 'Green IT & Sustainability Solutions',;
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',;
    icon: Sprout,;
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration'],;
    pricing: '$15,000 - $80,000/project',;
    category: 'Green IT',;
    popular: true;
  },;
  {;
    title: 'Digital Twin Infrastructure',;
    description: 'Digital twin technology implementation for physical assets and processes.',;
    icon: Monitor,;
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs'],;
    pricing: '$40,000 - $250,000/project',;
    category: 'Digital Twins',;
    popular: true;
  },;
  {;
    title: 'AR/VR Infrastructure & Development',;
    description: 'Augmented and virtual reality infrastructure setup and application development.',;
    icon: Eye,;
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design'],;
    pricing: '$25,000 - $150,000/project',;
    category: 'AR/VR',;
    popular: true;
  },;
  {;
    title: 'Robotic Process Automation (RPA)',;
    description: 'Implementation of RPA solutions for business process automation and optimization.',;
    icon: Bot,;
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring'],;
    pricing: '$10,000 - $60,000/project',;
    category: 'RPA',;
    popular: true;
  },;
  {;
    title: 'Data Mesh Architecture Implementation',;
    description: 'Modern data architecture using data mesh principles for decentralized data management.',;
    icon: Database,;
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics'],;
    pricing: '$50,000 - $300,000/project',;
    category: 'Data Architecture',;
    popular: true;
  },;
  {;
    title: 'Serverless Architecture Design',;
    description: 'Serverless computing solutions for scalable and cost-effective application deployment.',;
    icon: Cloud,;
    features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization'],;
    pricing: '$15,000 - $80,000/project',;
    category: 'Serverless',;
    popular: true;
  },;
  {;
    title: 'API Gateway & Management Platform',;
    description: 'Comprehensive API management including security, monitoring, and developer portal.',;
    icon: Network,;
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal'],;
    pricing: '$10,000 - $50,000/setup',;
    category: 'API Management',;
    popular: true;
  },;
  {;
    title: 'Microservices Architecture Migration',;
    description: 'Migration from monolithic to microservices architecture with container orchestration.',;
    icon: Server,;
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup'],;
    pricing: '$40,000 - $250,000/project',;
    category: 'Microservices',;
    popular: true;
  },;
  {;
    title: 'IT Service Management (ITSM) Platform',;
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.',;
    icon: Settings,;
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management'],;
    pricing: '$20,000 - $100,000/setup',;
    category: 'ITSM',;
    popular: true;
  },;
  {;
    title: 'Cyber Threat Intelligence Platform',;
    description: 'Advanced threat intelligence and security information management system.',;
    icon: Shield,;
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],;
    pricing: '$30,000 - $150,000/setup',;
    category: 'Threat Intelligence',;
    popular: true;
  },;
  {;
    title: 'AI-Powered IT Operations Management',;
    description: 'Intelligent IT operations with automated incident response and predictive maintenance.',;
    icon: Cpu,;
    features: ['Automated Incident Response', 'Predictive Maintenance', 'Performance Optimization', 'Root Cause Analysis'],;
    pricing: '$5,000 - $25,000/month',;
    category: 'AIOps',;
    popular: true;
  },;
  {;
    title: 'Zero Trust Security Architecture',;
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',;
    icon: Lock,;
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],;
    pricing: '$20,000 - $100,000/setup',;
    category: 'Zero Trust Security',;
    popular: true;
  },;
  {;
    title: 'Edge Computing Infrastructure',;
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',;
    icon: Network,;
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing'],;
    pricing: '$10,000 - $50,000/setup',;
    category: 'Edge Computing',;
    popular: true;
  },;
  {;
    title: 'Hybrid Cloud Management',;
    description: 'Unified management of hybrid cloud environments across multiple providers.',;
    icon: Cloud,;
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration'],;
    pricing: '$8,000 - $40,000/month',;
    category: 'Hybrid Cloud',;
    popular: true;
  },;
  {;
    title: 'API Gateway & Management',;
    description: 'Comprehensive API management with security, monitoring, and developer portal.',;
    icon: Code,;
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal'],;
    pricing: '$3,000 - $15,000/month',;
    category: 'API Management',;
    popular: true;
  },;
  {;
    title: 'IT Service Management (ITSM)',;
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.',;
    icon: Settings,;
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management'],;
    pricing: '$5,000 - $25,000/setup',;
    category: 'ITSM',;
    popular: true;
  },;
  {;
    title: 'Data Center Modernization',;
    description: 'Modern data center design and implementation with energy efficiency and scalability.',;
    icon: Server,;
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery'],;
    pricing: '$50,000 - $500,000/project',;
    category: 'Data Center',;
    popular: true;
  },;
  {;
    title: 'IT Compliance & Governance',;
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.',;
    icon: CheckCircle,;
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management'],;
    pricing: '$10,000 - $50,000/setup',;
    category: 'Compliance',;
    popular: true;
  },;
  {;
    title: 'Microservices Architecture',;
    description: 'Microservices design and implementation with container orchestration and service mesh.',;
    icon: Server,;
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway'],;
    pricing: '$25,000 - $150,000/project',;
    category: 'Microservices',;
    popular: true;
  },;
  {;
    title: 'IT Automation & Orchestration',;
    description: 'Comprehensive IT automation with workflow orchestration and self-healing systems.',;
    icon: Settings,;
    features: ['Workflow Automation', 'Self-healing Systems', 'Configuration Management', 'Deployment Automation'],;
    pricing: '$15,000 - $75,000/setup',;
    category: 'Automation',;
    popular: true;
  },;
  {;
    title: 'Digital Workplace Solutions',;
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.',;
    icon: Users,;
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access'],;
    pricing: '$8,000 - $40,000/setup',;
    category: 'Digital Workplace',;
    popular: true;
  },;
  {;
    title: 'IT Performance Monitoring',;
    description: 'Comprehensive IT performance monitoring with real-time analytics and alerting.',;
    icon: Monitor,;
    features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning'],;
    pricing: '$3,000 - $15,000/month',;
    category: 'Performance Monitoring',;
    popular: true;
  },;
  {;
    title: 'Cloud Cost Optimization',;
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.',;
    icon: DollarSign,;
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management'],;
    pricing: '$2,000 - $10,000/month',;
    category: 'Cloud Optimization',;
    popular: true;
  },;
  {;
    title: 'IT Disaster Recovery Planning',;
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.',;
    icon: Shield,;
    features: ['Recovery Planning', 'Testing & Validation', 'RTO/RPO Optimization', 'Business Continuity'],;
    pricing: '$15,000 - $75,000/project',;
    category: 'Disaster Recovery',;
    popular: true;
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },;
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },;
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },;
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },;
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },;
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
];
const benefits = [{;
    icon: Clock,;
    title: 'Reduced Downtime',;
    description: 'Proactive monitoring and maintenance',;
    stat: '99 && 99.9%';
  },;
  {;
    icon: Zap,;
    title: 'Cost Savings',;
    description: 'Optimized infrastructure and processes',;
    stat: '40%';
  },;
  {;
    icon: Shield,;
    title: 'Enhanced Security',;
    description: 'Enterprise-grade protection',;
    stat: '100%';
  },;
  {;
    icon: TrendingUp,;
    title: 'Scalability',;
    description: 'Flexible and scalable solutions',;
    stat: 'Unlimited';
  }
];
const supportLevels = [{;
    name: 'Basic Support',;
    description: 'Standard business hours support',;
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports'],;
    pricing: '$1,000/month';
  },;
  {;
    name: 'Premium Support',;
    description: 'Extended hours and priority support',;
    features: ['24/7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports'],;
    pricing: '$3,000/month';
  },;
  {;
    name: 'Enterprise Support',;
    description: 'Dedicated support team and SLA guarantees',;
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real-time Reports'],;
    pricing: 'Custom Pricing';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
];
export default function ITServicesPage() {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
                  <Head>;
                  <title>IT Services - Zion Tech Group</title>;
=======
    pricing: '$5, 000 - $40, 000 / project',
    category: 'Security',
    popular: true;
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220 / hour',
    category: 'Networking';
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2, 000 - $15, 000 / project',
    category: 'Database';
  },
  {
    title: 'System Administration',
    description: '24 / 7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2, 000 - $8, 000 / month',
    category: 'Administration';
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300 / hour',
    category: 'Consulting';
  },
  {
    title: 'DevOps & CI / CD Implementation',
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',
    icon: Server,
    features: ['CI / CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    pricing: '$10, 000 - $50, 000 / project',
    category: 'DevOps',
    popular: true;
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of on - premises infrastructure to cloud or new data centers.',
    icon: HardDrive,
    features: ['Migration Planning', 'Zero - downtime Migration', 'Data Validation', 'Performance Optimization'],
    pricing: '$15, 000 - $100, 000 / project',
    category: 'Migration';
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management and optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3, 000 - $15, 000 / setup',
    category: 'Asset Management';
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: Shield,
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO / RPO Optimization', 'Compliance'],
    pricing: '$2, 000 - $20, 000 / setup',
    category: 'Backup & Recovery';
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.',
    icon: Lock,
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],
    pricing: '$5, 000 - $25, 000 / project',
    category: 'Network Security';
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Cloud security implementation and compliance with industry standards.',
    icon: Shield,
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection'],
    pricing: '$8, 000 - $40, 000 / project',
    category: 'Cloud Security';
  },
  {
    title: 'IT Support & Help Desk',
    description: '24 / 7 IT support and help desk services for your organization.',
    icon: Users,
    features: ['24 / 7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
    pricing: '$1, 500 - $6, 000 / month',
    category: 'Support';
  },
  {
    title: 'Software Development Services',
    description: 'Custom software development and application modernization services.',
    icon: Code,
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],
    pricing: '$100 - $200 / hour',
    category: 'Development';
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management and implementation services.',
    icon: BarChart3,
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control'],
    pricing: '$150 - $300 / hour',
    category: 'Project Management';
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],
    pricing: '$2, 000 - $10, 000 / setup',
    category: 'Mobile Management';
  },
  {
    title: 'IT Training & Certification',
    description: 'IT training programs and certification preparation for your team.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands - on Labs', 'Progress Tracking'],
    pricing: '$200 - $500 / person / day',
    category: 'Training';
  },
  {
    title: 'IT Audit & Assessment',
    description: 'Comprehensive IT infrastructure audit and security assessment services.',
    icon: Search,
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations'],
    pricing: '$5, 000 - $25, 000 / project',
    category: 'Audit & Assessment';
  },
  {
    title: 'IT Procurement & Vendor Management',
    description: 'Strategic IT procurement and vendor relationship management services.',
    icon: ShoppingCart,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management'],
    pricing: '$150 - $300 / hour',
    category: 'Procurement';
  },
  {
    title: 'IT Governance & Strategy',
    description: 'IT governance framework development and strategic technology planning.',
    icon: Building,
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management'],
    pricing: '$10, 000 - $50, 000 / project',
    category: 'Governance';
  },
  {
    title: 'IT Compliance & Regulatory',
    description: 'Compliance management for various regulatory requirements and standards.',
    icon: Shield,
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support'],
    pricing: '$8, 000 - $40, 000 / project',
    category: 'Compliance';
  },
  {
title: 'AI - Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: Cpu,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self - healing Systems'],
    pricing: '$15, 000 - $75, 000 / setup',
    category: 'AIOps',
    popular: true;
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and micro - segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro - segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$25, 000 - $150, 000 / project',
    category: 'Zero Trust',
    popular: true;
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low - latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],
    pricing: '$20, 000 - $100, 000 / project',
    category: 'Edge Computing',
    popular: true;
  },
  {
    title: 'Quantum - Safe Cryptography Implementation',
    description: 'Migration to quantum - resistant cryptographic algorithms and security protocols.',
    icon: Shield,
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future - proofing'],
    pricing: '$30, 000 - $200, 000 / project',
    category: 'Quantum Security',
    popular: true;
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$50, 000 - $500, 000 / project',
    category: '5G Networks',
    popular: true;
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',
    icon: Server,
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],
    pricing: '$40, 000 - $300, 000 / project',
    category: 'Blockchain',
    popular: true;
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management for connected environments.',
    icon: Smartphone,
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],
    pricing: '$25, 000 - $150, 000 / setup',
    category: 'IoT Security',
    popular: true;
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless orchestration and management across multiple cloud and on - premises environments.',
    icon: Cloud,
    features: ['Multi - cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$30, 000 - $200, 000 / project',
    category: 'Hybrid Cloud',
    popular: true;
  },
  {
    title: 'AI Model Infrastructure & MLOps',
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',
    icon: Brain,
    features: ['Model Deployment', 'A / B Testing', 'Performance Monitoring', 'Auto - scaling'],
    pricing: '$20, 000 - $100, 000 / setup',
    category: 'MLOps',
    popular: true;
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration'],
    pricing: '$15, 000 - $80, 000 / project',
    category: 'Green IT',
    popular: true;
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin technology implementation for physical assets and processes.',
    icon: Monitor,
    features: ['3D Modeling', 'Real - time Simulation', 'Predictive Analytics', 'Integration APIs'],
    pricing: '$40, 000 - $250, 000 / project',
    category: 'Digital Twins',
    popular: true;
  },
  {
    title: 'AR / VR Infrastructure & Development',
    description: 'Augmented and virtual reality infrastructure setup and application development.',
    icon: Eye,
    features: ['VR / AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design'],
    pricing: '$25, 000 - $150, 000 / project',
    category: 'AR / VR',
    popular: true;
  },
  {
    title: 'Robotic Process Automation (RPA)',
    description: 'Implementation of RPA solutions for business process automation and optimization.',
    icon: Bot,
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring'],
    pricing: '$10, 000 - $60, 000 / project',
    category: 'RPA',
    popular: true;
  },
  {
    title: 'Data Mesh Architecture Implementation',
    description: 'Modern data architecture using data mesh principles for decentralized data management.',
    icon: Database,
    features: ['Domain - driven Design', 'Data Product Development', 'Federated Governance', 'Self - service Analytics'],
    pricing: '$50, 000 - $300, 000 / project',
    category: 'Data Architecture',
    popular: true;
  },
  {
    title: 'Serverless Architecture Design',
    description: 'Serverless computing solutions for scalable and cost - effective application deployment.',
    icon: Cloud,
    features: ['Function - as - a-Service', 'Event - driven Architecture', 'Auto - scaling', 'Cost Optimization'],
    pricing: '$15, 000 - $80, 000 / project',
    category: 'Serverless',
    popular: true;
  },
  {
    title: 'API Gateway & Management Platform',
    description: 'Comprehensive API management including security, monitoring, and developer portal.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal'],
    pricing: '$10, 000 - $50, 000 / setup',
    category: 'API Management',
    popular: true;
  },
  {
    title: 'Microservices Architecture Migration',
    description: 'Migration from monolithic to microservices architecture with container orchestration.',
    icon: Server,
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup'],
    pricing: '$40, 000 - $250, 000 / project',
    category: 'Microservices',
    popular: true;
  },
  {
    title: 'IT Service Management (ITSM) Platform',
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.',
    icon: Settings,
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management'],
    pricing: '$20, 000 - $100, 000 / setup',
    category: 'ITSM',
    popular: true;
  },
  {
    title: 'Cyber Threat Intelligence Platform',
    description: 'Advanced threat intelligence and security information management system.',
    icon: Shield,
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],
    pricing: '$30, 000 - $150, 000 / setup',
    category: 'Threat Intelligence',
    popular: true;
  },
  {
    title: 'AI - Powered IT Operations Management',
    description: 'Intelligent IT operations with automated incident response and predictive maintenance.',
    icon: Cpu,
    features: ['Automated Incident Response', 'Predictive Maintenance', 'Performance Optimization', 'Root Cause Analysis'],
    pricing: '$5, 000 - $25, 000 / month',
    category: 'AIOps',
    popular: true;
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation with identity verification and micro - segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro - segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$20, 000 - $100, 000 / setup',
    category: 'Zero Trust Security',
    popular: true;
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low - latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing'],
    pricing: '$10, 000 - $50, 000 / setup',
    category: 'Edge Computing',
    popular: true;
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Unified management of hybrid cloud environments across multiple providers.',
    icon: Cloud,
    features: ['Multi - cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration'],
    pricing: '$8, 000 - $40, 000 / month',
    category: 'Hybrid Cloud',
    popular: true;
  },
  {
    title: 'API Gateway & Management',
    description: 'Comprehensive API management with security, monitoring, and developer portal.',
    icon: Code,
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal'],
    pricing: '$3, 000 - $15, 000 / month',
    category: 'API Management',
    popular: true;
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management'],
    pricing: '$5, 000 - $25, 000 / setup',
    category: 'ITSM',
    popular: true;
  },
  {
    title: 'Data Center Modernization',
    description: 'Modern data center design and implementation with energy efficiency and scalability.',
    icon: Server,
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery'],
    pricing: '$50, 000 - $500, 000 / project',
    category: 'Data Center',
    popular: true;
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management'],
    pricing: '$10, 000 - $50, 000 / setup',
    category: 'Compliance',
    popular: true;
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices design and implementation with container orchestration and service mesh.',
    icon: Server,
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway'],
    pricing: '$25, 000 - $150, 000 / project',
    category: 'Microservices',
    popular: true;
  },
  {
    title: 'IT Automation & Orchestration',
    description: 'Comprehensive IT automation with workflow orchestration and self - healing systems.',
    icon: Settings,
    features: ['Workflow Automation', 'Self - healing Systems', 'Configuration Management', 'Deployment Automation'],
    pricing: '$15, 000 - $75, 000 / setup',
    category: 'Automation',
    popular: true;
  },
  {
    title: 'Digital Workplace Solutions',
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.',
    icon: Users,
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access'],
    pricing: '$8, 000 - $40, 000 / setup',
    category: 'Digital Workplace',
    popular: true;
  },
  {
    title: 'IT Performance Monitoring',
    description: 'Comprehensive IT performance monitoring with real - time analytics and alerting.',
    icon: Monitor,
    features: ['Real - time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning'],
    pricing: '$3, 000 - $15, 000 / month',
    category: 'Performance Monitoring',
    popular: true;
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management'],
    pricing: '$2, 000 - $10, 000 / month',
    category: 'Cloud Optimization',
    popular: true;
  },
  {
    title: 'IT Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.',
    icon: Shield,
    features: ['Recovery Planning', 'Testing & Validation', 'RTO / RPO Optimization', 'Business Continuity'],
    pricing: '$15, 000 - $75, 000 / project',
    category: 'Disaster Recovery',
    popular: true;
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD - WAN' }
];
const benefits = [{
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Proactive monitoring and maintenance',
    stat: '99.9%';
  },
  {
    icon: Zap,
    title: 'Cost Savings',
    description: 'Optimized infrastructure and processes',
    stat: '40%';
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise - grade protection',
    stat: '100%';
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Flexible and scalable solutions',
    stat: 'Unlimited';
  }
];
const support_levels = [{
    name: 'Basic Support',
    description: 'Standard business hours support',
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports'],
    pricing: '$1, 000 / month';
  },
  {
    name: 'Premium Support',
    description: 'Extended hours and priority support',
    features: ['24 / 7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports'],
    pricing: '$3, 000 / month';
  },
  {
    name: 'Enterprise Support',
    description: 'Dedicated support team and SLA guarantees',
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real - time Reports'],
    pricing: 'Custom Pricing';
  }
];
export default /**
 * ITServicesPage - Function description
 */
function ITServicesPage() {
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">;
                  <Head>;
                  <title > IT Services - Zion Tech Group</title>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration." />;
                  <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, system administration" />;
                  </Head>;
      {/* Hero Section */}

      <section className="relative bg - gradient - to - br from - green - 900 via - emerald - 900 to - teal - 900 text - white py - 20 overflow - hidden">;
<div className="absolute inset - 0">;
                  <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - green - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse">;
                  </div>;
                  <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - emerald - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000">;
                  </div>;
                  </div>;
                  <div className="container mx - auto px - 4 relative z - 10">;
                  <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className="text - center";
          >;
<div className="flex items - center justify - center mb - 6">;
                  <Server className="h - 16 w - 16 text - green - 400 mr - 4" />;
                  <h1 className="text - 4xl md:text - 6xl font - bold">;
                IT{' '}
                <span className="bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent">;

                  Services;
                </span>;
</h1>;
                  </div>;

                  <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
              Comprehensive IT solutions to keep your business running smoothly. From cloud infrastructure to cybersecurity, we & apos;ve got you covered.;
            </p>;
                  <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                  <Link href="/contact" className="px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 text - white rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold">;
                Get IT Consultation;
              </Link>;
                  <Link href="/services" className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - gray - 900 transition - all duration - 300 font - semibold">;
                View All Services;
              </Link>;
                  </div>;
                  </motion.div>;
                  </div>;
                  </section>;
      {/* Services Grid */}
      <section className="py - 20 bg - gray - 50">;
                  <div className="container mx - auto px - 4">;
                  <motion.div;
            className="text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
<h2 className="text - 3xl sm:text - 4xl md:text - 5xl font - bold text - gray - 900 mb - 4">;
              Our IT Solutions;
            </h2>;
                  <p className="text - lg sm:text - xl text - gray - 600 max - w-4xl mx - auto leading - relaxed">;
              End - to - end IT services designed to optimize your infrastructure and ensure business continuity.;
            </p>;
                  </motion.div>;
                  <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {it_services.map ((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div;
                  key={index}
className="bg - white p - 8 rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 group;

import React from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion } from 'framer-motion';
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Settings, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Brain, 
  Cpu, 
  Wifi, 
  Monitor, 
  AlertTriangle, 
  TrendingUp, 
  Lock, 
  Globe, 
  HardDrive, 
  Smartphone, 
  Building, 
=======
import {
  Server,
  Shield,
  Cloud,
  Database,
  Network,
  Code,
  Settings,
  CheckCircle,
  Users,
  DollarSign,
  Brain,
  Cpu,
  Wifi,
  Monitor,
  AlertTriangle,
  TrendingUp,
  Lock,
  Globe,
  HardDrive,
  Smartphone,
  Building,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  BarChart3,
  Package,
  GraduationCap,
  Atom,
  Leaf,
  Link as LinkIcon,
  ArrowRight,
  Clock,
  Award,
  Star,
  Zap,

=======
  Search, 
  ShoppingCart, 
  BookOpen, 


import {
  Server
  Shield
  Cloud
  Database
  Network
  Code
  Settings
  CheckCircle
  Users
  DollarSign
  Brain
  Cpu
  Wifi
  Monitor
  AlertTriangle
  TrendingUp
  Lock
  Globe
  HardDrive
  Smartphone
  Building
  BarChart3
  Package
  GraduationCap
  Atom
  Leaf
  Link as LinkIcon
  ArrowRight
  Clock
  Award
  Star
  Zap
  Search
  ShoppingCart
  BookOpen
  Rocket



=======
  Rocket,;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  Laptop;
} from 'lucide-react';

  Laptop
} from 'lucide-react'
import Layout from '../components/Layout'


const itServices = [
  {
    title: 'Cloud Infrastructure Management'
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services'
    icon: Cloud
    features: ['AWS/Azure/GCP Setup', 'Server Management', 'Auto-scaling', 'Cost Optimization']
    pricing: '$2,000 - $10,000/month'
    category: 'Cloud Computing'
    popular: true
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24/7 monitoring']
    marketPrice: '$5,000/month'
    link: '/contact'
  }
=======
import Layout from '../components / Layout';
;
const it_services = [;
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats',
    icon: Shield,
    features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance'],
    pricing: '$1,500 - $8,000/month',
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    category: 'Security',
    popular: true,
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24/7 protection'],
    marketPrice: '$4,000/month',
    title: 'Cybersecurity Solutions'
    description: 'Comprehensive security services to protect your business from cyber threats'
    icon: Shield
    features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance']
    pricing: '$1,500 - $8,000/month'
    category: 'Security'
    popular: true
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24/7 protection']
    marketPrice: '$4,000/month'
origin/main
    link: '/contact'
=======
    pricing: '$1, 500 - $8, 000 / month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24 / 7 protection'],
    market_price: '$4, 000 / month',
    link: '/contact';
  },
  {
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance services',
    icon: Database,
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration'],
    pricing: '$1, 000 - $5, 000 / month',
    category: 'Database',
    popular: false,
    benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Scalability'],
    market_price: '$2, 500 / month',
    link: '/contact';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  {
    title: 'Database Management'
    description: 'Expert database design, optimization, and maintenance services'
    icon: Database
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration']
    pricing: '$1,000 - $5,000/month'
    category: 'Database'
    popular: false
    benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Scalability']
    marketPrice: '$2,500/month'
    link: '/contact'
  }

]


const industries = [
  { name: 'Healthcare', icon: Shield, description: 'Secure and compliant IT solutions for healthcare organizations' }
  { name: 'Finance', icon: TrendingUp, description: 'Robust IT infrastructure for financial services' }
  { name: 'Manufacturing', icon: Building, description: 'Industrial IT solutions and automation' }
  { name: 'Retail', icon: ShoppingCart, description: 'E-commerce and retail technology solutions' }
  { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning management systems' }
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions and compliance' }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function ITServices() {;


  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {
<<<<<<< HEAD
=======
=======
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
];

export default function ITServices() {
export default function ITServices() {;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer)
  }, []);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {




=======
];

export default function ITServices() {;


  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {
=======
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function ITServices() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer)
  }, []);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com',  }
  const categories = [
    { id: 'all', name: 'All IT Services', count: 100 }
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 }
    { id: 'security', name: 'Cybersecurity', count: 20 }
    { id: 'devops', name: 'DevOps & Automation', count: 15 }
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 }
    { id: 'quantum', name: 'Quantum Computing', count: 10 }
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 },  ];
  const services = [
    {
      id: 1
      name: 'Quantum Computing Consulting'
      description:
        'Expert guidance on quantum computing implementation and optimization for enterprise applications.'
      category: 'quantum'
      features: [
        'Quantum Algorithm Design'
        'Hardware Selection'
        'Performance Optimization'
        'Security Implementation'
      ]
      price: 'Custom Pricing'
      popular: true
      benefits: [
        'Exponential Speedup'
        'Advanced Cryptography'
        'Optimization Solutions'
        'Future-Proof Technology'
      ]
    }
    {
      id: 2
      name: 'Blockchain & Web3 Solutions'
      description:
        'Comprehensive blockchain development and Web3 integration services for modern businesses.'
      category: 'blockchain'
      features: [
        'Smart Contract Development'
        'DApp Creation'
        'DeFi Integration'
        'NFT Platforms'
      ]
      price: 'Custom Pricing'
      popular: true
      benefits: [
        'Decentralized Solutions'
        'Enhanced Security'
        'Transparency'
        'Innovation'
      ]
    }
    {
      id: 3
      name: 'DevSecOps & Security Automation'
      description:
        'Integrated development, security, and operations with automated security testing and deployment.'
      category: 'devops'
      features: [
        'CI/CD Pipelines'
        'Security Scanning'
        'Automated Testing'
        'Infrastructure as Code'
      ]
      price: '$199/month'
      popular: false
      benefits: [
        'Faster Deployment'
        'Enhanced Security'
        'Reduced Risk'
        'Automated Compliance'
      ]
    }
    {
      id: 4
      name: 'Enterprise Data Platform'
      description:
        'Comprehensive data management and analytics platform for enterprise-scale operations.'
      category: 'enterprise'
      features: [
        'Data Warehousing'
        'Real-time Analytics'
        'Data Governance'
        'Machine Learning Integration'
      ]
      price: '$299/month'
      popular: true
      benefits: [
        'Data-Driven Insights'
        'Scalable Architecture'
        'Compliance Ready'
        'Advanced Analytics'
      ]
    }
    {
      id: 5
      name: 'High-Performance Computing Solutions'
      description:
        'Optimized computing infrastructure for demanding computational workloads and research.'
      category: 'cloud'
      features: [
        'GPU Computing'
        'Parallel Processing'
        'Distributed Computing'
        'Performance Monitoring'
      ]
      price: '$399/month'
      popular: false
      benefits: [
        'Massive Processing Power'
        'Scalable Resources'
        'Cost Optimization'
        'Advanced Capabilities'
      ]
    }
    {
      id: 6
      name: 'Cloud Migration Services'
      description:
        'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.'
      category: 'cloud'
      features: [
        'Assessment & Planning'
        'Data Migration'
        'Application Modernization'
        'Performance Optimization'
      ]
      price: 'Custom Pricing'
      popular: true
      benefits: [
        'Reduced Costs'
        'Enhanced Scalability'
        'Improved Security'
        'Better Performance'
      ]
    }
    {
      id: 7
      name: 'Infrastructure as Code'
      description:
        'Automated infrastructure provisioning and management using modern DevOps practices.'
      category: 'devops'
      features: [
        'Terraform Automation'
        'Configuration Management'
        'Version Control'
        'Environment Provisioning'
      ]
      price: '$149/month'
      popular: false
      benefits: [
        'Consistent Environments'
        'Faster Provisioning'
        'Version Control'
        'Reduced Errors'
      ]
    }
    {
      id: 8
      name: 'Disaster Recovery Solutions'
      description:
        'Comprehensive backup and disaster recovery strategies to ensure business continuity.'
      category: 'security'
      features: [
        'Automated Backups'
        'Multi-site Replication'
        'Recovery Testing'
        'RTO/RPO Optimization'
      ]
      price: '$179/month'
      popular: true
      benefits: [
        'Business Continuity'
        'Data Protection'
        'Minimal Downtime'
        'Compliance Ready'
      ]
    }
    {
      id: 9
      name: 'Cybersecurity Assessment'
      description:
        'Comprehensive security evaluation and penetration testing for enterprise systems.'
      category: 'security'
      features: [
        'Vulnerability Assessment'
        'Penetration Testing'
        'Compliance Auditing'
        'Security Recommendations'
      ]
      price: '$249/month'
      popular: false
      benefits: [
        'Risk Identification'
        'Compliance Assurance'
        'Security Hardening'
        'Threat Mitigation'
      ]
    }
    {
      id: 10
      name: 'API Development & Integration'
      description:
        'Custom API development and third-party integration services for seamless connectivity.'
      category: 'enterprise'
      features: [
        'RESTful APIs'
        'GraphQL Services'
        'Third-party Integration'
        'API Documentation'
      ]
      price: '$129/month'
      popular: true
      benefits: [
        'System Integration'
        'Improved Efficiency'
        'Scalable Architecture'
        'Developer Experience'
      ]
    }
    {
      id: 11
      name: 'Microservices Architecture'
      description:
        'Design and implementation of microservices-based applications for scalable systems.'
      category: 'enterprise'
      features: [
        'Service Design'
        'Container Orchestration'
        'Service Mesh'
        'Monitoring & Logging'
      ]
      price: '$199/month'
      popular: false
      benefits: [
        'Scalable Architecture'
        'Independent Deployment'
        'Technology Diversity'
        'Fault Isolation'
      ]
    }
    {
      id: 12
      name: 'Edge Computing Solutions'
      description:
        'Distributed computing infrastructure for low-latency applications and IoT systems.'
      category: 'cloud'
      features: [
        'Edge Deployment'
        'IoT Integration'
        'Real-time Processing'
        'Bandwidth Optimization'
      ]
      price: '$159/month'
      popular: true
      benefits: [
        'Reduced Latency'
        'Bandwidth Savings'
        'Offline Capability'
        'Enhanced Performance'
      ]
    }
  ];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter(service => service.category === selectedCategory);

  return (
<<<<<<< HEAD

  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')


import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function ITServices(req, res) {
  try {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

<<<<<<< HEAD
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {;
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {;
    phone: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    site: 'https://ziontechgroup && ziontechgroup.com',  };
  const categories = [;
    { id: 'all', name: 'All IT Services', count: 100 },;
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },;
    { id: 'security', name: 'Cybersecurity', count: 20 },;
    { id: 'devops', name: 'DevOps & Automation', count: 15 },;
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },;
    { id: 'quantum', name: 'Quantum Computing', count: 10 },;
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 },  ];
  const services = [;
    {;
      id: 1,;
      name: 'Quantum Computing Consulting',;
      description:;
        'Expert guidance on quantum computing implementation and optimization for enterprise applications.',;
      category: 'quantum',;
      features: [;
        'Quantum Algorithm Design',;
        'Hardware Selection',;
        'Performance Optimization',;
        'Security Implementation',;
      ],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: [;
        'Exponential Speedup',;
        'Advanced Cryptography',;
        'Optimization Solutions',;
        'Future-Proof Technology',;
      ],;
    },;
    {;
      id: 2,;
      name: 'Blockchain & Web3 Solutions',;
      description:;
        'Comprehensive blockchain development and Web3 integration services for modern businesses.',;
      category: 'blockchain',;
      features: [;
        'Smart Contract Development',;
        'DApp Creation',;
        'DeFi Integration',;
        'NFT Platforms',;
      ],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: [;
        'Decentralized Solutions',;
        'Enhanced Security',;
        'Transparency',;
        'Innovation',;
      ],;
    },;
    {;
      id: 3,;
      name: 'DevSecOps & Security Automation',;
      description:;
        'Integrated development, security, and operations with automated security testing and deployment.',;
      category: 'devops',;
      features: [;
        'CI/CD Pipelines',;
        'Security Scanning',;
        'Automated Testing',;
        'Infrastructure as Code',;
      ],;
      price: '$199/month',;
      popular: false,;
      benefits: [;
        'Faster Deployment',;
        'Enhanced Security',;
        'Reduced Risk',;
        'Automated Compliance',;
      ],;
    },;
    {;
      id: 4,;
      name: 'Enterprise Data Platform',;
      description:;
        'Comprehensive data management and analytics platform for enterprise-scale operations.',;
      category: 'enterprise',;
      features: [;
        'Data Warehousing',;
        'Real-time Analytics',;
        'Data Governance',;
        'Machine Learning Integration',;
      ],;
      price: '$299/month',;
      popular: true,;
      benefits: [;
        'Data-Driven Insights',;
        'Scalable Architecture',;
        'Compliance Ready',;
        'Advanced Analytics',;
      ],;
    },;
    {;
      id: 5,;
      name: 'High-Performance Computing Solutions',;
      description:;
        'Optimized computing infrastructure for demanding computational workloads and research.',;
      category: 'cloud',;
      features: [;
        'GPU Computing',;
        'Parallel Processing',;
        'Distributed Computing',;
        'Performance Monitoring',;
      ],;
      price: '$399/month',;
      popular: false,;
      benefits: [;
        'Massive Processing Power',;
        'Scalable Resources',;
        'Cost Optimization',;
        'Advanced Capabilities',;
      ],;
    },;
    {;
      id: 6,;
      name: 'Cloud Migration Services',;
      description:;
        'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',;
      category: 'cloud',;
      features: [;
        'Assessment & Planning',;
        'Data Migration',;
        'Application Modernization',;
        'Performance Optimization',;
      ],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: [;
        'Reduced Costs',;
        'Enhanced Scalability',;
        'Improved Security',;
        'Better Performance',;
      ],;
    },;
    {;
      id: 7,;
      name: 'Infrastructure as Code',;
      description:;
        'Automated infrastructure provisioning and management using modern DevOps practices.',;
      category: 'devops',;
      features: [;
        'Terraform Automation',;
        'Configuration Management',;
        'Version Control',;
        'Environment Provisioning',;
      ],;
      price: '$149/month',;
      popular: false,;
      benefits: [;
        'Consistent Environments',;
        'Faster Provisioning',;
        'Version Control',;
        'Reduced Errors',;
      ],;
    },;
    {;
      id: 8,;
      name: 'Disaster Recovery Solutions',;
      description:;
        'Comprehensive backup and disaster recovery strategies to ensure business continuity.',;
      category: 'security',;
      features: [;
        'Automated Backups',;
        'Multi-site Replication',;
        'Recovery Testing',;
        'RTO/RPO Optimization',;
      ],;
      price: '$179/month',;
      popular: true,;
      benefits: [;
        'Business Continuity',;
        'Data Protection',;
        'Minimal Downtime',;
        'Compliance Ready',;
      ],;
    },;
    {;
      id: 9,;
      name: 'Cybersecurity Assessment',;
      description:;
        'Comprehensive security evaluation and penetration testing for enterprise systems.',;
      category: 'security',;
      features: [;
        'Vulnerability Assessment',;
        'Penetration Testing',;
        'Compliance Auditing',;
        'Security Recommendations',;
      ],;
      price: '$249/month',;
      popular: false,;
      benefits: [;
        'Risk Identification',;
        'Compliance Assurance',;
        'Security Hardening',;
        'Threat Mitigation',;
      ],;
    },;
    {;
      id: 10,;
      name: 'API Development & Integration',;
      description:;
        'Custom API development and third-party integration services for seamless connectivity.',;
      category: 'enterprise',;
      features: [;
        'RESTful APIs',;
        'GraphQL Services',;
        'Third-party Integration',;
        'API Documentation',;
      ],;
      price: '$129/month',;
      popular: true,;
      benefits: [;
        'System Integration',;
        'Improved Efficiency',;
        'Scalable Architecture',;
        'Developer Experience',;
      ],;
    },;
    {;
      id: 11,;
      name: 'Microservices Architecture',;
      description:;
        'Design and implementation of microservices-based applications for scalable systems.',;
      category: 'enterprise',;
      features: [;
        'Service Design',;
        'Container Orchestration',;
        'Service Mesh',;
        'Monitoring & Logging',;
      ],;
      price: '$199/month',;
      popular: false,;
      benefits: [;
        'Scalable Architecture',;
        'Independent Deployment',;
        'Technology Diversity',;
        'Fault Isolation',;
      ],;
    },;
    {;
      id: 12,;
      name: 'Edge Computing Solutions',;
      description:;
        'Distributed computing infrastructure for low-latency applications and IoT systems.',;
      category: 'cloud',;
      features: [;
        'Edge Deployment',;
        'IoT Integration',;
        'Real-time Processing',;
        'Bandwidth Optimization',;
      ],;
      price: '$159/month',;
      popular: true,;
      benefits: [;
        'Reduced Latency',;
        'Bandwidth Savings',;
        'Offline Capability',;
        'Enhanced Performance',;
      ],;
    },;
  ];
<<<<<<< HEAD
    <Layout>;
      <Head>;
        <title>IT Services - Zion Tech Group</title>;

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter(service => service.category === selectedCategory);

  return (
    <Layout>
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function ITServices(req, res) {
  try {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {;
    const timer = setTimeout(() => setIsLoaded(true), 100),;
    return () => clearTimeout(timer);
  }, []),;
  const contact: ContactInfo = {;
    phone: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    site: 'https://ziontechgroup.com';
  },;
  const categories = [;
    { id: 'all', name: 'All IT Services', count: 100 },;
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },;
    { id: 'security', name: 'Cybersecurity', count: 20 },;
    { id: 'devops', name: 'DevOps & Automation', count: 15 },;
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },;
    { id: 'quantum', name: 'Quantum Computing', count: 10 },;
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const services = [;
    {;
      id: 1;
      name: 'Quantum Computing Consulting';
      description: 'Expert guidance on quantum computing implementation and optimization for enterprise applications.';
      category: 'quantum';
      features: ['Quantum Algorithm DesignHardware SelectionPerformance OptimizationSecurity Implementation'],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: ['Exponential SpeedupAdvanced CryptographyOptimization SolutionsFuture-Proof Technology'];
    },;
    {;
      id: 2,;
      name: 'Blockchain & Web3 Solutions',;
      description: 'Comprehensive blockchain development and Web3 integration services for modern businesses.',;
      category: 'blockchain',;
      features: ['Smart Contract DevelopmentDApp CreationDeFi IntegrationNFT Platforms'],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: ['Decentralized SolutionsEnhanced SecurityTransparencyInnovation'];
    },;
    {;
      id: 3,;
      name: 'DevSecOps & Security Automation',;
      description: 'Integrated development, security, and operations with automated security testing and deployment.',;
      category: 'devops',;
      features: ['CI/CD PipelinesSecurity ScanningAutomated TestingInfrastructure as Code'],;
      price: '$199/month',;
      popular: false,;
      benefits: ['Faster DeploymentEnhanced SecurityReduced RiskAutomated Compliance'];
    },;
    {;
      id: 4,;
      name: 'Enterprise Data Platform',;
      description: 'Comprehensive data management and analytics platform for enterprise-scale operations.',;
      category: 'enterprise',;
      features: ['Data WarehousingReal-time AnalyticsData GovernanceMachine Learning Integration'],;
      price: '$299/month',;
      popular: true,;
      benefits: ['Data-Driven InsightsScalable ArchitectureCompliance ReadyAdvanced Analytics'];
    },;
    {;
      id: 5,;
      name: 'High-Performance Computing Solutions',;
      description: 'Optimized computing infrastructure for demanding computational workloads and research.',;
      category: 'cloud',;
      features: ['GPU ComputingParallel ProcessingDistributed ComputingPerformance Monitoring'],;
      price: '$399/month',;
      popular: false,;
      benefits: ['Massive Processing PowerScalable ResourcesCost OptimizationAdvanced Capabilities'];
    },;
    {;
      id: 6,;
      name: 'Cloud Migration Services',;
      description: 'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',;
      category: 'cloud',;
      features: ['Assessment & PlanningData MigrationApplication ModernizationPerformance Optimization'],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: ['Reduced CostsEnhanced ScalabilityImproved SecurityBetter Performance'];
    },;
    {;
      id: 7,;
      name: 'Infrastructure as Code',;
      description: 'Automated infrastructure provisioning and management using modern DevOps practices.',;
      category: 'devops',;
      features: ['Terraform AutomationConfiguration ManagementVersion ControlEnvironment Provisioning'],;
      price: '$149/month',;
      popular: false,;
      benefits: ['Consistent EnvironmentsFaster ProvisioningVersion ControlReduced Errors'];
    },;
    {;
      id: 8,;
      name: 'Disaster Recovery Solutions',;
      description: 'Comprehensive backup and disaster recovery strategies to ensure business continuity.',;
      category: 'security',;
      features: ['Automated BackupsMulti-site ReplicationRecovery TestingRTO/RPO Optimization'],;
      price: '$179/month',;
      popular: true,;
      benefits: ['Business ContinuityData ProtectionMinimal DowntimeCompliance Ready'];
    },;
    {;
      id: 9,;
      name: 'Cybersecurity Assessment',;
      description: 'Comprehensive security evaluation and penetration testing for enterprise systems.',;
      category: 'security',;
      features: ['Vulnerability AssessmentPenetration TestingCompliance AuditingSecurity Recommendations'],;
      price: '$249/month',;
      popular: false,;
      benefits: ['Risk IdentificationCompliance AssuranceSecurity HardeningThreat Mitigation'];
    },;
    {;
      id: 10,;
      name: 'API Development & Integration',;
      description: 'Custom API development and third-party integration services for seamless connectivity.',;
      category: 'enterprise',;
      features: ['RESTful APIsGraphQL ServicesThird-party IntegrationAPI Documentation'],;
      price: '$129/month',;
      popular: true,;
      benefits: ['System IntegrationImproved EfficiencyScalable ArchitectureDeveloper Experience'];
    },;
    {;
      id: 11,;
      name: 'Microservices Architecture',;
      description: 'Design and implementation of microservices-based applications for scalable systems.',;
      category: 'enterprise',;
      features: ['Service DesignContainer OrchestrationService MeshMonitoring & Logging'],;
      price: '$199/month',;
      popular: false,;
      benefits: ['Scalable ArchitectureIndependent DeploymentTechnology DiversityFault Isolation'];
    },;
    {;
      id: 12,;
      name: 'Edge Computing Solutions',;
      description: 'Distributed computing infrastructure for low-latency applications and IoT systems.',;
      category: 'cloud',;
      features: ['Edge DeploymentIoT IntegrationReal-time ProcessingBandwidth Optimization'],;
      price: '$159/month',;
      popular: true,;
      benefits: ['Reduced LatencyBandwidth SavingsOffline CapabilityEnhanced Performance'];
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory),
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
=======
<<<<<<< HEAD
  const filteredServices =;
    selectedCategory === 'all';
      ? services;
      : services && services.filter(service => service && service.category === selectedCategory);
  return (

    <>


      <Head>
        <title>IT Services - Zion Tech Group</title>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <meta
          name='description'
          content='Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.'
        />;
        <meta
          name='keywords'
          content='IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure'
<<<<<<< HEAD
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your IT infrastructure with cutting-edge technologies. From AI operations to quantum computing, 
                we provide comprehensive IT solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

=======

=======
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function ITServices(req, res) {
  try {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {;
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);

  const contact: ContactInfo = {;
    phone: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    site: 'https://ziontechgroup && ziontechgroup.com',  };

  const categories = [;
    { id: 'all', name: 'All IT Services', count: 100 },;
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },;
    { id: 'security', name: 'Cybersecurity', count: 20 },;
    { id: 'devops', name: 'DevOps & Automation', count: 15 },;
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },;
    { id: 'quantum', name: 'Quantum Computing', count: 10 },;
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 },  ];

  const services = [;
    {;
      id: 1,;
      name: 'Quantum Computing Consulting',;
      description:;
        'Expert guidance on quantum computing implementation and optimization for enterprise applications.',;
      category: 'quantum',;
      features: [;
        'Quantum Algorithm Design',;
        'Hardware Selection',;
        'Performance Optimization',;
        'Security Implementation',;
      ],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: [;
        'Exponential Speedup',;
        'Advanced Cryptography',;
        'Optimization Solutions',;
        'Future-Proof Technology',;
      ],;
    },;
    {;
      id: 2,;
      name: 'Blockchain & Web3 Solutions',;
      description:;
        'Comprehensive blockchain development and Web3 integration services for modern businesses.',;
      category: 'blockchain',;
      features: [;
        'Smart Contract Development',;
        'DApp Creation',;
        'DeFi Integration',;
        'NFT Platforms',;
      ],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: [;
        'Decentralized Solutions',;
        'Enhanced Security',;
        'Transparency',;
        'Innovation',;
      ],;
    },;
    {;
      id: 3,;
      name: 'DevSecOps & Security Automation',;
      description:;
        'Integrated development, security, and operations with automated security testing and deployment.',;
      category: 'devops',;
      features: [;
        'CI/CD Pipelines',;
        'Security Scanning',;
        'Automated Testing',;
        'Infrastructure as Code',;
      ],;
      price: '$199/month',;
      popular: false,;
      benefits: [;
        'Faster Deployment',;
        'Enhanced Security',;
        'Reduced Risk',;
        'Automated Compliance',;
      ],;
    },;
    {;
      id: 4,;
      name: 'Enterprise Data Platform',;
      description:;
        'Comprehensive data management and analytics platform for enterprise-scale operations.',;
      category: 'enterprise',;
      features: [;
        'Data Warehousing',;
        'Real-time Analytics',;
        'Data Governance',;
        'Machine Learning Integration',;
      ],;
      price: '$299/month',;
      popular: true,;
      benefits: [;
        'Data-Driven Insights',;
        'Scalable Architecture',;
        'Compliance Ready',;
        'Advanced Analytics',;
      ],;
    },;
    {;
      id: 5,;
      name: 'High-Performance Computing Solutions',;
      description:;
        'Optimized computing infrastructure for demanding computational workloads and research.',;
      category: 'cloud',;
      features: [;
        'GPU Computing',;
        'Parallel Processing',;
        'Distributed Computing',;
        'Performance Monitoring',;
      ],;
      price: '$399/month',;
      popular: false,;
      benefits: [;
        'Massive Processing Power',;
        'Scalable Resources',;
        'Cost Optimization',;
        'Advanced Capabilities',;
      ],;
    },;
    {;
      id: 6,;
      name: 'Cloud Migration Services',;
      description:;
        'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',;
      category: 'cloud',;
      features: [;
        'Assessment & Planning',;
        'Data Migration',;
        'Application Modernization',;
        'Performance Optimization',;
      ],;
      price: 'Custom Pricing',;
      popular: true,;
      benefits: [;
        'Reduced Costs',;
        'Enhanced Scalability',;
        'Improved Security',;
        'Better Performance',;
      ],;
    },;
    {;
      id: 7,;
      name: 'Infrastructure as Code',;
      description:;
        'Automated infrastructure provisioning and management using modern DevOps practices.',;
      category: 'devops',;
      features: [;
        'Terraform Automation',;
        'Configuration Management',;
        'Version Control',;
        'Environment Provisioning',;
      ],;
      price: '$149/month',;
      popular: false,;
      benefits: [;
        'Consistent Environments',;
        'Faster Provisioning',;
        'Version Control',;
        'Reduced Errors',;
      ],;
    },;
    {;
      id: 8,;
      name: 'Disaster Recovery Solutions',;
      description:;
        'Comprehensive backup and disaster recovery strategies to ensure business continuity.',;
      category: 'security',;
      features: [;
        'Automated Backups',;
        'Multi-site Replication',;
        'Recovery Testing',;
        'RTO/RPO Optimization',;
      ],;
      price: '$179/month',;
      popular: true,;
      benefits: [;
        'Business Continuity',;
        'Data Protection',;
        'Minimal Downtime',;
        'Compliance Ready',;
      ],;
    },;
    {;
      id: 9,;
      name: 'Cybersecurity Assessment',;
      description:;
        'Comprehensive security evaluation and penetration testing for enterprise systems.',;
      category: 'security',;
      features: [;
        'Vulnerability Assessment',;
        'Penetration Testing',;
        'Compliance Auditing',;
        'Security Recommendations',;
      ],;
      price: '$249/month',;
      popular: false,;
      benefits: [;
        'Risk Identification',;
        'Compliance Assurance',;
        'Security Hardening',;
        'Threat Mitigation',;
      ],;
    },;
    {;
      id: 10,;
      name: 'API Development & Integration',;
      description:;
        'Custom API development and third-party integration services for seamless connectivity.',;
      category: 'enterprise',;
      features: [;
        'RESTful APIs',;
        'GraphQL Services',;
        'Third-party Integration',;
        'API Documentation',;
      ],;
      price: '$129/month',;
      popular: true,;
      benefits: [;
        'System Integration',;
        'Improved Efficiency',;
        'Scalable Architecture',;
        'Developer Experience',;
      ],;
    },;
    {;
      id: 11,;
      name: 'Microservices Architecture',;
      description:;
        'Design and implementation of microservices-based applications for scalable systems.',;
      category: 'enterprise',;
      features: [;
        'Service Design',;
        'Container Orchestration',;
        'Service Mesh',;
        'Monitoring & Logging',;
      ],;
      price: '$199/month',;
      popular: false,;
      benefits: [;
        'Scalable Architecture',;
        'Independent Deployment',;
        'Technology Diversity',;
        'Fault Isolation',;
      ],;
    },;
    {;
      id: 12,;
      name: 'Edge Computing Solutions',;
      description:;
        'Distributed computing infrastructure for low-latency applications and IoT systems.',;
      category: 'cloud',;
      features: [;
        'Edge Deployment',;
        'IoT Integration',;
        'Real-time Processing',;
        'Bandwidth Optimization',;
      ],;
      price: '$159/month',;
      popular: true,;
      benefits: [;
        'Reduced Latency',;
        'Bandwidth Savings',;
        'Offline Capability',;
        'Enhanced Performance',;
      ],;
    },;
  ];

  const filteredServices =;
    selectedCategory === 'all';
      ? services;
      : services && services.filter(service => service && service.category === selectedCategory);

  return (

    <>


      <Head>
        <title>IT Services - Zion Tech Group</title>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <meta
          name='description'
          content='Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.'
        />;
        <meta
          name='keywords'
          content='IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure'

        />;
        <meta name='viewport' content='width=device-width, initial-scale=1 && 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact && contact.site}/it-services`} />;
      </Head>;

      <ErrorBoundary level='page'>;
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>;

          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>;
            <div className='max-w-4xl mx-auto'>;
              <h1                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >;
                IT Services;
              </h1>;
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                100+ Comprehensive IT Solutions;
              </p>;
              <p

                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                Transform your business with our enterprise-grade IT services.;
                From cloud infrastructure to quantum computing, we provide;
                cutting-edge technology solutions that scale with your business;
                and drive innovation.              </p>;
            </div>;
          </section>;


          {/* Category Filter */}
          <section className='py-8 px-4'>;
            <div className='max-w-6xl mx-auto'>;
              <div className='flex flex-wrap justify-center gap-4 mb-8'>;
                {categories && categories.map(category => (                  <button
                    key={category && category.id}
                    onClick={() => setSelectedCategory(category && category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category && category.id;
                        ? 'bg-green-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';

                    }`}
                  >;
                    {category && category.name} ({category && category.count});
                  </button>;
                ))}
<<<<<<< HEAD
              </div>
            </div>
          </section>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        />;
        <meta name='viewport' content='width=device-width, initial-scale=1 && 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact && contact.site}/it-services`} />;
      </Head>;
      <ErrorBoundary level='page'>;
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>;
<<<<<<< HEAD
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={`${contact.site}/it-services`} />
      </Head>
=======

          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>;
            <div className='max-w-4xl mx-auto'>;
              <h1                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >;
                IT Services;
              </h1>;
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                100+ Comprehensive IT Solutions;
              </p>;
              <p

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                Transform your business with our enterprise-grade IT services.;
                From cloud infrastructure to quantum computing, we provide;
                cutting-edge technology solutions that scale with your business;
                and drive innovation.              </p>;
            </div>;
          </section>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Category Filter */}
          <section className='py-8 px-4'>;
            <div className='max-w-6xl mx-auto'>;
              <div className='flex flex-wrap justify-center gap-4 mb-8'>;
                {categories && categories.map(category => (                  <button
                    key={category && category.id}
                    onClick={() => setSelectedCategory(category && category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category && category.id;
                        ? 'bg-green-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';

                    }`}
                  >;
                    {category && category.name} ({category && category.count});
                  </button>;
                ))}
<<<<<<< HEAD
=======

                {filteredServices.map((service, index) => (
                  <div                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className='absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>


=======
                  </div>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Technology Stack Section */}
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Our Technology Stack
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
=======
                      </div>;
                    </div>;

                    <div className='flex items-center justify-between mb-4'>;
                      <span className='text-2xl font-bold text-green-400'>;
                        {service && service.price}
                      </span>;
                      <span className='text-xs text-slate-500 capitalize'>;
                        {service && service.category.replace('-', ' ')}
                      </span>;
                    </div>;

                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>                      Learn More;
                    </button>;
                  </div>;
                ))}
              </div>;
            </div>;
          </section>;

          {/* Technology Stack Section */}
          <section className='py-16 px-4 bg-slate-900/40'>;
            <div className='max-w-6xl mx-auto'>;
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>;
                Our Technology Stack;
              </h2>;

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>;
                <div className='text-center'>;
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'

                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Cloud Platforms</h3>;
                  <p className='text-slate-400'>;
                    AWS, Azure, GCP, and hybrid cloud solutions;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>;

                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}




                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Security</h3>
                  <p className='text-slate-400'>
                    Zero-trust architecture and advanced threat protection
                  </p>
                </div>

                        d='M9 12l2 2 4-4m5 && 4m5.618-4 && 4.016A11.955 11 && 11.955 0 0112 2 && 2.944a11.955 11 && 11.955 0 01-8 && 8.618 3 && 3.04A12.02 12 && 12.02 0 003 9c0 5 && 5.591 3 && 3.824 10 && 10.29 9 11 && 11.622 5 && 5.176-1 && 1.332 9-6 && 6.03 9-11 && 11.622 0-1 && 1.042-.133-2 && 2.052-.382-3 && 3.016z'
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Security</h3>;
                  <p className='text-slate-400'>;
                    Zero-trust architecture and advanced threat protection;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;

                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 && M10.325 4 && 4.317c.426-1 && 1.756 2 && 2.924-1 && 1.756 3 && 3.35 0a1 && 0a1.724 1 && 1.724 0 002 && 002.573 1 && 1.066c1.543-.94 3 && 3.31.826 2 && 2.37 2 && 2.37a1.724 1 && 1.724 0 001 && 001.065 2 && 2.572c1.756 && 756.426 1 && 1.756 2 && 2.924 0 3 && 3.35a1.724 1 && 1.724 0 00-1 && 1.066 2 && 2.573c.94 1 && 1.543-.826 3 && 3.31-2 && 2.37 2 && 2.37a1.724 1 && 1.724 0 00-2 && 2.572 1 && 1.065c-.426 1 && 1.756-2 && 2.924 1 && 1.756-3 && 3.35 0a1 && 0a1.724 1 && 1.724 0 00-2 && 2.573-1 && 1.066c-1 && 1.543.94-3 && 3.31-.826-2 && 2.37-2 && 2.37a1.724 1 && 1.724 0 00-1 && 1.065-2 && 2.572c-1 && 1.756-.426-1 && 1.756-2 && 2.924 0-3 && 3.35a1.724 1 && 1.724 0 001 && 001.066-2 && 2.573c-.94-1 && 1.543.826-3 && 3.31 2 && 2.37-2 && 2.37.996 && 996.608 2 && 2.296.07 2 && 2.572-1 && 1.065z'
                      />;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'




                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>DevOps</h3>
                  <p className='text-slate-400'>
                    CI/CD pipelines and infrastructure automation
                  </p>
                </div>

                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>DevOps</h3>;
                  <p className='text-slate-400'>;
                    CI/CD pipelines and infrastructure automation;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>;

                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}




                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>
                  <p className='text-slate-400'>
                    Smart contracts and decentralized applications
                  </p>                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </section>




                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our IT experts to discuss how our comprehensive
                technology solutions can modernize your infrastructure and
                accelerate your digital transformation.
              </p>

                        d='M13 && M13.828 10 && 10.172a4 4 0 00-5 && 5.656 0l-4 4a4 4 0 105 && 105.656 5 && 5.656l1.102-1 && 1.101m-.758-4 && 4.899a4 4 0 005 && 005.656 0l4-4a4 4 0 00-5 && 5.656-5 && 5.656l-1 && 1.1 1 && 1.1'
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>;
                  <p className='text-slate-400'>;
                    Smart contracts and decentralized applications;
                  </p>                </div>;
              </div>;
            </div>;
          </section>;

          {/* CTA Section */}
          <section className='py-16 px-4'>;
            <div className='max-w-4xl mx-auto text-center'>;
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>;
                Ready to Transform Your IT Infrastructure?;
              </h2>;
              <p className='text-lg text-slate-300 mb-8'>;
                Contact our IT experts to discuss how our comprehensive;
                technology solutions can modernize your infrastructure and;
                accelerate your digital transformation.;
              </p>;

              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>;
                  Get Started;
                  <ArrowRight className="ml-2 w-4 h-4" />;
                </Link>;
                <a
                  href={`tel:${contact && contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>;
                  Call {contact && contact.phone}
                </a>;
                <a

                  href={`mailto:${contact && contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'>;
                  Email Us;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;


          {/* Services Grid */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                IT Services;
              </h1>;
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                100+ Comprehensive IT Solutions;
              </p>;
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                Transform your business with our enterprise-grade IT services. From cloud infrastructure;
                to quantum computing, we provide cutting-edge technology solutions that scale with your;
                business and drive innovation.;
              </p>;
            </div>;
          </section>;
          {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'bg-green-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {category.name} ({category.count});
                  </button>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {filteredServices.map((service, index) => (
                  <div                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className='absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>
<<<<<<< HEAD
                    )}
                    )}

                    <h3 className='text-xl font-bold mb-3'>{service.name}</h3>
                    <p className='text-slate-300 mb-4 text-sm'>
                      {service.description}
                    </p>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-green-400 mb-2'>
                        Key Features:
                      </h4>
                      <ul className='text-slate-400 text-sm space-y-1'>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0'></span>                            {feature}
                          </li>
                        ))}
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0'></span>                            {feature}
                          </li>
                        ))}
                      </ul>;
                    </div>;
                    <div className='mb-4'>;
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>;
                        Benefits:;
                      </h4>;
                      <div className='flex flex-wrap gap-1'>;
                        {service && service.benefits.map((benefit, benefitIndex) => (;
                          <span
                            key={benefitIndex}
                            className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>                            {benefit}
                          </span>;
                        ))}
                      </div>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {service.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>
                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>                      Learn More
                    </button>

=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>



<<<<<<< HEAD
                  </div>
                ))}
              </div>;
            </div>;
          </section>;
          {/* Technology Stack Section */}
          <section className='py-16 px-4 bg-slate-900/40'>;
            <div className='max-w-6xl mx-auto'>;
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>;
                Our Technology Stack;
              </h2>;
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>;
                <div className='text-center'>;
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                            {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </li>;
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </ul>
                    </div>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                        Benefits:
                      </h4>
                      <div className='flex flex-wrap gap-1'>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'
                          >                            {benefit}
                          </span>
                        ))}
                          <span key={benefitIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                            {benefit  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </span>;
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {service.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>
                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>                      Learn More
                    </button>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <Head>
                  <title>IT Services - Zion Tech Group</title>
                  <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration." />
                  <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, system administration" />
                  </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
<div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
                  </div>
                ))}
              </div>
            </div>
          </section>

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Technology Stack Section */}
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Our Technology Stack
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                      </div>;
                    </div>;

                    <div className='flex items-center justify-between mb-4'>;
                      <span className='text-2xl font-bold text-green-400'>;
                        {service && service.price}
                      </span>;
                      <span className='text-xs text-slate-500 capitalize'>;
                        {service && service.category.replace('-', ' ')}
                      </span>;
                    </div>;

                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>                      Learn More;
                    </button>;
                  </div>;
                ))}
              </div>;
            </div>;
          </section>;

          {/* Technology Stack Section */}
          <section className='py-16 px-4 bg-slate-900/40'>;
            <div className='max-w-6xl mx-auto'>;
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>;
                Our Technology Stack;
              </h2>;

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>;
                <div className='text-center'>;
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
<<<<<<< HEAD
                      />
                      </div>;
                    </div>;
                    <div className="flex items-center justify-between mb-4">;
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>;
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('- ')}</span>;
                    </div>;
                    <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">;
                      Learn More;
                    </button>;
                  </div>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* Technology Stack Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Technology Stack
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Cloud Platforms</h3>
                  <p className='text-slate-400'>
                    AWS, Azure, GCP, and hybrid cloud solutions
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
=======

                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Cloud Platforms</h3>;
                  <p className='text-slate-400'>;
                    AWS, Azure, GCP, and hybrid cloud solutions;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}




                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Security</h3>
                  <p className='text-slate-400'>
                    Zero-trust architecture and advanced threat protection
                  </p>
                </div>

                        d='M9 12l2 2 4-4m5 && 4m5.618-4 && 4.016A11.955 11 && 11.955 0 0112 2 && 2.944a11.955 11 && 11.955 0 01-8 && 8.618 3 && 3.04A12.02 12 && 12.02 0 003 9c0 5 && 5.591 3 && 3.824 10 && 10.29 9 11 && 11.622 5 && 5.176-1 && 1.332 9-6 && 6.03 9-11 && 11.622 0-1 && 1.042-.133-2 && 2.052-.382-3 && 3.016z'
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Security</h3>;
                  <p className='text-slate-400'>;
                    Zero-trust architecture and advanced threat protection;
                  </p>;
                </div>;
                <div className='text-center'>;
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
<<<<<<< HEAD
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Security</h3>
                  <p className='text-slate-400'>
                    Zero-trust architecture and advanced threat protection
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 && M10.325 4 && 4.317c.426-1 && 1.756 2 && 2.924-1 && 1.756 3 && 3.35 0a1 && 0a1.724 1 && 1.724 0 002 && 002.573 1 && 1.066c1.543-.94 3 && 3.31.826 2 && 2.37 2 && 2.37a1.724 1 && 1.724 0 001 && 001.065 2 && 2.572c1.756 && 756.426 1 && 1.756 2 && 2.924 0 3 && 3.35a1.724 1 && 1.724 0 00-1 && 1.066 2 && 2.573c.94 1 && 1.543-.826 3 && 3.31-2 && 2.37 2 && 2.37a1.724 1 && 1.724 0 00-2 && 2.572 1 && 1.065c-.426 1 && 1.756-2 && 2.924 1 && 1.756-3 && 3.35 0a1 && 0a1.724 1 && 1.724 0 00-2 && 2.573-1 && 1.066c-1 && 1.543.94-3 && 3.31-.826-2 && 2.37-2 && 2.37a1.724 1 && 1.724 0 00-1 && 1.065-2 && 2.572c-1 && 1.756-.426-1 && 1.756-2 && 2.924 0-3 && 3.35a1.724 1 && 1.724 0 001 && 001.066-2 && 2.573c-.94-1 && 1.543.826-3 && 3.31 2 && 2.37-2 && 2.37.996 && 996.608 2 && 2.296.07 2 && 2.572-1 && 1.065z'
                      />;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'




                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>DevOps</h3>
                  <p className='text-slate-400'>
                    CI/CD pipelines and infrastructure automation
                  </p>
                </div>

                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>DevOps</h3>;
                  <p className='text-slate-400'>;
                    CI/CD pipelines and infrastructure automation;
                  </p>;
                </div>;
                <div className='text-center'>;
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
<<<<<<< HEAD
                      />
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>DevOps</h3>
                  <p className='text-slate-400'>
                    CI/CD pipelines and infrastructure automation
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}




                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>
                  <p className='text-slate-400'>
                    Smart contracts and decentralized applications
                  </p>                </div>
              </div>
            </div>
          </section>




                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our IT experts to discuss how our comprehensive
                technology solutions can modernize your infrastructure and
                accelerate your digital transformation.
              </p>

                        d='M13 && M13.828 10 && 10.172a4 4 0 00-5 && 5.656 0l-4 4a4 4 0 105 && 105.656 5 && 5.656l1.102-1 && 1.101m-.758-4 && 4.899a4 4 0 005 && 005.656 0l4-4a4 4 0 00-5 && 5.656-5 && 5.656l-1 && 1.1 1 && 1.1'
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>;
                  <p className='text-slate-400'>;
                    Smart contracts and decentralized applications;
                  </p>                </div>;
              </div>;
            </div>;
          </section>;
          {/* CTA Section */}
          <section className='py-16 px-4'>;
            <div className='max-w-4xl mx-auto text-center'>;
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>;
                Ready to Transform Your IT Infrastructure?;
              </h2>;
              <p className='text-lg text-slate-300 mb-8'>;
                Contact our IT experts to discuss how our comprehensive;
                technology solutions can modernize your infrastructure and;
                accelerate your digital transformation.;
              </p>;
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>;

<<<<<<< HEAD

                        d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                      />
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>
                  <p className='text-slate-400'>
                    Smart contracts and decentralized applications
                  </p>                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
          {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our IT experts to discuss how our comprehensive
                technology solutions can modernize your infrastructure and
                accelerate your digital transformation.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>;
                  Get Started;
                  <ArrowRight className="ml-2 w-4 h-4" />;
                </Link>;
                <a
                  href={`tel:${contact && contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>;
                  Call {contact && contact.phone}
                </a>;
<<<<<<< HEAD
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'
                >
                  Call {contact.phone}
                </a>
                <a
=======
                <a

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  href={`mailto:${contact && contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'>;
                  Email Us;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Services Grid */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                Comprehensive IT solutions designed to enhance your business operations and security.;
              </p>;
            </motion && motion.div>;
<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {itServices && itServices.map((service, index) => (;
                <motion&& motion.div
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {itServices && itServices.map((service, index) => (;
                <motion&& motion.div

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}

whileHover={{ y: -5 }} ">;
                  <div className="flex items-center justify-between mb-4">;
                  <div className="text-green-600 group-hover:text-emerald-600 transition-colors">;
                  <IconComponent className="w-10 h-10" />;
                  </div>;
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">;
                      {service && service.category}
                    </span>;
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-3">;
                    {service && service.title}
                  </h3>;
                  <p className="text-gray-600 mb-4 leading-relaxed">;
                    {service && service.description}
                  </p>;
                  <div className="mb-4">;
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>;
                  <ul className="space-y-1">;
                      {service && service.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">;
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />;

                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div className="mb-4">;
                  <span className="text-sm font-semibold text-green-600">{service && service.pricing}</span>;
                  </div>;
                  <Link
                    href="/contact"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm">;
                    <span>Get Quote</span>;
                  <ArrowRight className="w-3 h-3 ml-1" />;
                  </Link>;
                  </motion && motion.div>;
              );
            })}
          </div>;
                  </div>;
                  </section>;
      {/* Technologies Section */}
      <section className="py-20 bg-white">;
                  <div className="container mx-auto px-4">;
                  <motion&& motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>;
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
              We leverage cutting-edge technologies to deliver robust IT solutions.;
            </p>;
                  </motion && motion.div>;
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {technologies && technologies.map((tech, index) => {;
              const IconComponent = tech && tech.icon;
              return (
                <motion&& motion.div
                  key={index}
className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }} viewport={{ once: true }}">;
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <IconComponent className="w-8 h-8 text-green-600" />;
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-2">;
                    {tech && tech.name}
                  </h3>;
                  <p className="text-gray-600">;
                    {tech && tech.description}
                  </p>;
                  </motion && motion.div>;
              );
            })}
          </div>;
                  </div>;
                  </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">;
                  <div className="container mx-auto px-4">;
                  <motion&& motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>;
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
              Proven expertise and measurable results for your technology infrastructure.;
            </p>;
                  </motion && motion.div>;
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits && benefits.map((benefit, index) => {;
              const IconComponent = benefit && benefit.icon;
              return (
                <motion&& motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <IconComponent className="w-8 h-8 text-green-600" />;
                  </div>;
                  <div className="text-3xl font-bold text-green-600 mb-2">;
                    {benefit && benefit.stat}
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-2">;
                    {benefit && benefit.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {benefit && benefit.description}
                  </p>;
                  </motion && motion.div>;
              );
            })}
          </div>;
                  </div>;
                  </section>;
      {/* Support Levels Section */}
      <section className="py-20 bg-white">;
                  <div className="container mx-auto px-4">;
                  <motion&& motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Support Levels</h2>;
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
              Choose the support level that best fits your business needs.;
            </p>;
                  </motion && motion.div>;
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {supportLevels && supportLevels.map((level, index) => (;
              <motion&& motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  index === 1 ? 'bg-green-50 border-2 border-green-200' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {level.name}
                </h3>
                  <p className="text-gray-600 mb-6">
                  {level.description}
                </p>
                  <div className="text-3xl font-bold text-green-600 mb-6">
                  {level.pricing}
<<<<<<< HEAD

=======

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Layout>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.'
        />
        <meta
          name='keywords'
          content='IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={`${contact.site}/it-services`} />
      </Head>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1
<<<<<<< HEAD
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
};
  const categories = [
    { id: 'all', name: 'All IT Services', count: 100 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },
    { id: 'security', name: 'Cybersecurity', count: 20 },
    { id: 'devops', name: 'DevOps & Automation', count: 15 },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },
    { id: 'quantum', name: 'Quantum Computing', count: 10 },
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 }
];
  const services = [
    {
      id: 1,
      name: 'Quantum Computing Consulting',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      description: 'Expert guidance on quantum computing implementation and optimization for enterprise applications.',
      category: 'quantum',
      features: ['Quantum Algorithm DesignHardware SelectionPerformance OptimizationSecurity Implementation'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Exponential SpeedupAdvanced CryptographyOptimization SolutionsFuture-Proof Technology']
    };
    {
      id: 2,
      name: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services for modern businesses.',
      category: 'blockchain',
      features: ['Smart Contract DevelopmentDApp CreationDeFi IntegrationNFT Platforms'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Decentralized SolutionsEnhanced SecurityTransparencyInnovation']
    };
    {
      id: 3,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated development, security, and operations with automated security testing and deployment.',
    category: 'devops',
      features: ['CI/CD PipelinesSecurity ScanningAutomated TestingInfrastructure as Code'],
      price: '$199/month',
      popular: false,
      benefits: ['Faster DeploymentEnhanced SecurityReduced RiskAutomated Compliance']
    };
    {
      id: 4,
      name: 'Enterprise Data Platform',
      description: 'Comprehensive data management and analytics platform for enterprise-scale operations.',
      category: 'enterprise',
      features: ['Data WarehousingReal-time AnalyticsData GovernanceMachine Learning Integration'],
      price: '$299/month',
      popular: true,
      benefits: ['Data-Driven InsightsScalable ArchitectureCompliance ReadyAdvanced Analytics']
    };
    {
      id: 5,
      name: 'High-Performance Computing Solutions',
      description: 'Optimized computing infrastructure for demanding computational workloads and research.',
      category: 'cloud',
      features: ['GPU ComputingParallel ProcessingDistributed ComputingPerformance Monitoring'],
      price: '$399/month',
      popular: false,
      benefits: ['Massive Processing PowerScalable ResourcesCost OptimizationAdvanced Capabilities']
    };
    {
      id: 6,
      name: 'Cloud Migration Services',
      description: 'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',
      category: 'cloud',
      features: ['Assessment & PlanningData MigrationApplication ModernizationPerformance Optimization'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Reduced CostsEnhanced ScalabilityImproved SecurityBetter Performance']
    };
    {
      id: 7,
      name: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using modern DevOps practices.',
      category: 'devops',
      features: ['Terraform AutomationConfiguration ManagementVersion ControlEnvironment Provisioning'],
      price: '$149/month',
      popular: false,
      benefits: ['Consistent EnvironmentsFaster ProvisioningVersion ControlReduced Errors']
    };
    {
      id: 8,
      name: 'Disaster Recovery Solutions',
      description: 'Comprehensive backup and disaster recovery strategies to ensure business continuity.',
      category: 'security',
      features: ['Automated BackupsMulti-site ReplicationRecovery TestingRTO/RPO Optimization'],
      price: '$179/month',
      popular: true,
      benefits: ['Business ContinuityData ProtectionMinimal DowntimeCompliance Ready']
    };
    {
      id: 9,
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and penetration testing for enterprise systems.',
      category: 'security',
      features: ['Vulnerability AssessmentPenetration TestingCompliance AuditingSecurity Recommendations'],
      price: '$249/month',
      popular: false,
      benefits: ['Risk IdentificationCompliance AssuranceSecurity HardeningThreat Mitigation']
    };
    {
      id: 10,
      name: 'API Development & Integration',
      description: 'Custom API development and third-party integration services for seamless connectivity.',
      category: 'enterprise',
      features: ['RESTful APIsGraphQL ServicesThird-party IntegrationAPI Documentation'],
      price: '$129/month',
      popular: true,
      benefits: ['System IntegrationImproved EfficiencyScalable ArchitectureDeveloper Experience']
    };
    {
      id: 11,
      name: 'Microservices Architecture',
      description: 'Design and implementation of microservices-based applications for scalable systems.',
      category: 'enterprise',
      features: ['Service DesignContainer OrchestrationService MeshMonitoring & Logging'],
      price: '$199/month',
      popular: false,
      benefits: ['Scalable ArchitectureIndependent DeploymentTechnology DiversityFault Isolation']
    };
    {
      id: 12,
      name: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for low-latency applications and IoT systems.',
      category: 'cloud',
      features: ['Edge DeploymentIoT IntegrationReal-time ProcessingBandwidth Optimization'],
      price: '$159/month',
      popular: true,
      benefits: ['Reduced LatencyBandwidth SavingsOffline CapabilityEnhanced Performance']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/it-services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
<<<<<<< HEAD
              >
                IT Services
              </h1>
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
              >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {level.name}
                </h3>
                  <p className="text-gray-600 mb-6">
                  {level.description}
                </p>
                  <div className="text-3xl font-bold text-green-600 mb-6">
                  {level.pricing}
                </div>
                  <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                  <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    index === 1
? 'bg-green-600 hover: bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
<<<<<<< HEAD
                  </Link>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
<div className="container mx-auto px-4 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT environment.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get IT Assessment
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Contact Information Section */}
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
              Get Started with IT Services Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your IT infrastructure? Our expert team is here to help you build, secure, and optimize your technology environment. Contact us for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free IT Consultation</h3>
              <p className="text-gray-600 mb-4">Get expert advice on your IT project with our complimentary 30-minute consultation.</p>
              <a href="tel:+13024640950" className="text-green-600 font-semibold hover:text-green-700">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your IT project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-green-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </motion.div>
          </div>
          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Join 500+ successful businesses that trust Zion Tech Group for their IT infrastructure needs. Let&apos;s build the perfect technology solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
ursor/integrate-build-improve-and-re-verify-8f7d
              >
                IT Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                100+ Comprehensive IT Solutions
              </p>
<<<<<<< HEAD
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Transform your business with our enterprise-grade IT services.
                From cloud infrastructure to quantum computing, we provide
                cutting-edge technology solutions that scale with your business
                and drive innovation.
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Comprehensive IT Solutions
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Transform your business with our enterprise-grade IT services. From cloud infrastructure 
            </div>
          </section>
{/* Category Filter */}
                to quantum computing, we provide cutting-edge technology solutions that scale with your 
                business and drive innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
                  </div>
  );
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </section>

          {/* Category Filter */}
          </section>

          {/* Category Filter */}
          <section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (
ursor/integrate-build-improve-and-re-verify-8f7d

                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Link>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
<div className="container mx-auto px-4 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT environment.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get IT Assessment
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Contact Information Section */}
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
              Get Started with IT Services Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your IT infrastructure? Our expert team is here to help you build, secure, and optimize your technology environment. Contact us for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free IT Consultation</h3>
              <p className="text-gray-600 mb-4">Get expert advice on your IT project with our complimentary 30-minute consultation.</p>
              <a href="tel:+13024640950" className="text-green-600 font-semibold hover:text-green-700">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your IT project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-green-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </motion.div>
          </div>
          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Join 500+ successful businesses that trust Zion Tech Group for their IT infrastructure needs. Let&apos;s build the perfect technology solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
ursor/integrate-build-improve-and-re-verify-8f7d
              >
                IT Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                100+ Comprehensive IT Solutions
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Transform your business with our enterprise-grade IT services.
                From cloud infrastructure to quantum computing, we provide
                cutting-edge technology solutions that scale with your business
                and drive innovation.
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Comprehensive IT Solutions
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Transform your business with our enterprise-grade IT services. From cloud infrastructure 
                to quantum computing, we provide cutting-edge technology solutions that scale with your 
                business and drive innovation.
              </p>
            </div>



                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}



}
          </section>

          {/* Category Filter */}
          <section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (
ursor/integrate-build-improve-and-re-verify-8f7d

;
const industries = [;
  { name: 'Healthcare', icon: Shield, description: 'Secure and compliant IT solutions for healthcare organizations' },
  { name: 'Finance', icon: TrendingUp, description: 'Robust IT infrastructure for financial services' },
  { name: 'Manufacturing', icon: Building, description: 'Industrial IT solutions and automation' },
  { name: 'Retail', icon: ShoppingCart, description: 'E - commerce and retail technology solutions' },
  { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning management systems' },
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions and compliance' }
];
export default /**
 * ITServices - Function description
 */
function ITServices() {
  const [is_loaded, setIsLoaded] = useState (false);
  const [selected_category, setSelectedCategory] = useState ('all');
;
  useEffect (() => {
    const timer = set_timeout (() => setIsLoaded (true), 100);
    return () => clear_timeout (timer);  }, []);
;
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',  }
;
  const categories = [;
    { id: 'all', name: 'All IT Services', count: 100 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },
    { id: 'security', name: 'Cybersecurity', count: 20 },
    { id: 'devops', name: 'DevOps & Automation', count: 15 },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },
    { id: 'quantum', name: 'Quantum Computing', count: 10 },
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 },  ];
;
  const services = [;
    {
      id: 1,
      name: 'Quantum Computing Consulting',
      description:;
        'Expert guidance on quantum computing implementation and optimization for enterprise applications.',
      category: 'quantum',
      features: [;
        'Quantum Algorithm Design',
        'Hardware Selection',
        'Performance Optimization',
        'Security Implementation',
      ],
      price: 'Custom Pricing',
      popular: true,
      benefits: [;
        'Exponential Speedup',
        'Advanced Cryptography',
        'Optimization Solutions',
        'Future - Proof Technology',
      ],
    },
    {
      id: 2,
      name: 'Blockchain & Web3 Solutions',
      description:;
        'Comprehensive blockchain development and Web3 integration services for modern businesses.',
      category: 'blockchain',
      features: [;
        'Smart Contract Development',
        'DApp Creation',
        'DeFi Integration',
        'NFT Platforms',
      ],
      price: 'Custom Pricing',
      popular: true,
      benefits: [;
        'Decentralized Solutions',
        'Enhanced Security',
        'Transparency',
        'Innovation',
      ],
    },
    {
      id: 3,
      name: 'DevSecOps & Security Automation',
      description:;
        'Integrated development, security, and operations with automated security testing and deployment.',
      category: 'devops',
      features: [;
        'CI / CD Pipelines',
        'Security Scanning',
        'Automated Testing',
        'Infrastructure as Code',
      ],
      price: '$199 / month',
      popular: false,
      benefits: [;
        'Faster Deployment',
        'Enhanced Security',
        'Reduced Risk',
        'Automated Compliance',
      ],
    },
    {
      id: 4,
      name: 'Enterprise Data Platform',
      description:;
        'Comprehensive data management and analytics platform for enterprise - scale operations.',
      category: 'enterprise',
      features: [;
        'Data Warehousing',
        'Real - time Analytics',
        'Data Governance',
        'Machine Learning Integration',
      ],
      price: '$299 / month',
      popular: true,
      benefits: [;
        'Data - Driven Insights',
        'Scalable Architecture',
        'Compliance Ready',
        'Advanced Analytics',
      ],
    },
    {
      id: 5,
      name: 'High - Performance Computing Solutions',
      description:;
        'Optimized computing infrastructure for demanding computational workloads and research.',
      category: 'cloud',
      features: [;
        'GPU Computing',
        'Parallel Processing',
        'Distributed Computing',
        'Performance Monitoring',
      ],
      price: '$399 / month',
      popular: false,
      benefits: [;
        'Massive Processing Power',
        'Scalable Resources',
        'Cost Optimization',
        'Advanced Capabilities',
      ],
    },
    {
      id: 6,
      name: 'Cloud Migration Services',
      description:;
        'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',
      category: 'cloud',
      features: [;
        'Assessment & Planning',
        'Data Migration',
        'Application Modernization',
        'Performance Optimization',
      ],
      price: 'Custom Pricing',
      popular: true,
      benefits: [;
        'Reduced Costs',
        'Enhanced Scalability',
        'Improved Security',
        'Better Performance',
      ],
    },
    {
      id: 7,
      name: 'Infrastructure as Code',
      description:;
        'Automated infrastructure provisioning and management using modern DevOps practices.',
      category: 'devops',
      features: [;
        'Terraform Automation',
        'Configuration Management',
        'Version Control',
        'Environment Provisioning',
      ],
      price: '$149 / month',
      popular: false,
      benefits: [;
        'Consistent Environments',
        'Faster Provisioning',
        'Version Control',
        'Reduced Errors',
      ],
    },
    {
      id: 8,
      name: 'Disaster Recovery Solutions',
      description:;
        'Comprehensive backup and disaster recovery strategies to ensure business continuity.',
      category: 'security',
      features: [;
        'Automated Backups',
        'Multi - site Replication',
        'Recovery Testing',
        'RTO / RPO Optimization',
      ],
      price: '$179 / month',
      popular: true,
      benefits: [;
        'Business Continuity',
        'Data Protection',
        'Minimal Downtime',
        'Compliance Ready',
      ],
    },
    {
      id: 9,
      name: 'Cybersecurity Assessment',
      description:;
        'Comprehensive security evaluation and penetration testing for enterprise systems.',
      category: 'security',
      features: [;
        'Vulnerability Assessment',
        'Penetration Testing',
        'Compliance Auditing',
        'Security Recommendations',
      ],
      price: '$249 / month',
      popular: false,
      benefits: [;
        'Risk Identification',
        'Compliance Assurance',
        'Security Hardening',
        'Threat Mitigation',
      ],
    },
    {
      id: 10,
      name: 'API Development & Integration',
      description:;
        'Custom API development and third - party integration services for seamless connectivity.',
      category: 'enterprise',
      features: [;
        'RESTful APIs',
        'GraphQL Services',
        'Third - party Integration',
        'API Documentation',
      ],
      price: '$129 / month',
      popular: true,
      benefits: [;
        'System Integration',
        'Improved Efficiency',
        'Scalable Architecture',
        'Developer Experience',
      ],
    },
    {
      id: 11,
      name: 'Microservices Architecture',
      description:;
        'Design and implementation of microservices - based applications for scalable systems.',
      category: 'enterprise',
      features: [;
        'Service Design',
        'Container Orchestration',
        'Service Mesh',
        'Monitoring & Logging',
      ],
      price: '$199 / month',
      popular: false,
      benefits: [;
        'Scalable Architecture',
        'Independent Deployment',
        'Technology Diversity',
        'Fault Isolation',
      ],
    },
    {
      id: 12,
      name: 'Edge Computing Solutions',
      description:;
        'Distributed computing infrastructure for low - latency applications and IoT systems.',
      category: 'cloud',
      features: [;
        'Edge Deployment',
        'IoT Integration',
        'Real - time Processing',
        'Bandwidth Optimization',
      ],
      price: '$159 / month',
      popular: true,
      benefits: [;
        'Reduced Latency',
        'Bandwidth Savings',
        'Offline Capability',
        'Enhanced Performance',
      ],
    },
  ];
;
  const filtered_services =;
    selected_category === 'all';
      ? services;
      : services.filter (service => service.category === selected_category);
;
  return (
    <Layout>;
      <Head>;
        <title > IT Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.';
        />;
        <meta;
          name='keywords';
          content='IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure';
        />;
        <meta name='viewport' content='width = device - width, initial - scale = 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact.site}/it - services`} />;
      </Head>;
      <ErrorBoundary level='page'>;
        <main className='min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
          {/* Hero Section */}
          <section className='py - 20 px - 4 text - center' role='banner'>;
            <div className='max - w-4xl mx - auto'>;
              <h1                className={`text - 5xl md:text - 6xl font - extrabold tracking - tight mb - 6 transition - all duration - 1000 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                IT Services;
              </h1>;
              <p;
                className={`text - xl md:text - 2xl text - slate - 300 mb - 8 transition - all duration - 1000 delay - 200 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                100+ Comprehensive IT Solutions;
              </p>;
              <p;
                className={`text - lg text - slate - 400 mb - 12 max - w-3xl mx - auto transition - all duration - 1000 delay - 400 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                Transform your business with our enterprise - grade IT services.;
                From cloud infrastructure to quantum computing, we provide;
                cutting - edge technology solutions that scale with your business;
                and drive innovation.              </p>;
            </div>;
          </section>;
          {/* Category Filter */}
          <section className='py - 8 px - 4'>;
            <div className='max - w-6xl mx - auto'>;
              <div className='flex flex - wrap justify - center gap - 4 mb - 8'>;
                {categories.map (category => (                  <button;

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and business requirements.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
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

<<<<<<< HEAD
        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and business requirements.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
                Ready to Enhance Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can improve your business operations and security.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
<<<<<<< HEAD
=======
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Transform your business with our enterprise-grade IT services. From cloud infrastructure 
<<<<<<< HEAD
                to quantum computing, we provide cutting-edge technology solutions that scale with your

  const _filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory),

  return (_<>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        <link rel=&quot;canonical&quot; href={`${contact.site}/it-services`} />
      </Head>
      
      <ErrorBoundary level=&quot;page&quot;>
        <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
          {/* Hero Section */}
          <section className=&quot;py-20 px-4 text-center&quot; role=&quot;banner&quot;>
            <div className=&quot;max-w-4xl mx-auto&quot;>
              <h1 
                className={_`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                IT Services
              </h1>
              <p className={_`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Comprehensive IT Solutions
              </p>
              <p className={_`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Transform your business with our enterprise-grade IT services. From cloud infrastructure 
                to quantum computing, _we provide cutting-edge technology solutions that scale with your 

                business and drive innovation.
              </p>
            </div>



                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}



}

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          </section>

          {/* Category Filter */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
const industries = [;
  { name: 'Healthcare', icon: Shield, description: 'Secure and compliant IT solutions for healthcare organizations' },
  { name: 'Finance', icon: TrendingUp, description: 'Robust IT infrastructure for financial services' },
  { name: 'Manufacturing', icon: Building, description: 'Industrial IT solutions and automation' },
  { name: 'Retail', icon: ShoppingCart, description: 'E - commerce and retail technology solutions' },
  { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning management systems' },
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions and compliance' }
];
export default /**
 * ITServices - Function description
 */
function ITServices() {
  const [is_loaded, setIsLoaded] = useState (false);
  const [selected_category, setSelectedCategory] = useState ('all');
;
  useEffect (() => {
    const timer = set_timeout (() => setIsLoaded (true), 100);
    return () => clear_timeout (timer);  }, []);
;
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',  }
;
  const categories = [;
    { id: 'all', name: 'All IT Services', count: 100 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },
    { id: 'security', name: 'Cybersecurity', count: 20 },
    { id: 'devops', name: 'DevOps & Automation', count: 15 },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },
    { id: 'quantum', name: 'Quantum Computing', count: 10 },
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 },  ];
;
  const services = [;
    {
      id: 1,
      name: 'Quantum Computing Consulting',
      description:;
        'Expert guidance on quantum computing implementation and optimization for enterprise applications.',
      category: 'quantum',
      features: [;
        'Quantum Algorithm Design',
        'Hardware Selection',
        'Performance Optimization',
        'Security Implementation',
      ],
      price: 'Custom Pricing',
      popular: true,
      benefits: [;
        'Exponential Speedup',
        'Advanced Cryptography',
        'Optimization Solutions',
        'Future - Proof Technology',
      ],
    },
    {
      id: 2,
      name: 'Blockchain & Web3 Solutions',
      description:;
        'Comprehensive blockchain development and Web3 integration services for modern businesses.',
      category: 'blockchain',
      features: [;
        'Smart Contract Development',
        'DApp Creation',
        'DeFi Integration',
        'NFT Platforms',
      ],
      price: 'Custom Pricing',
      popular: true,
      benefits: [;
        'Decentralized Solutions',
        'Enhanced Security',
        'Transparency',
        'Innovation',
      ],
    },
    {
      id: 3,
      name: 'DevSecOps & Security Automation',
      description:;
        'Integrated development, security, and operations with automated security testing and deployment.',
      category: 'devops',
      features: [;
        'CI / CD Pipelines',
        'Security Scanning',
        'Automated Testing',
        'Infrastructure as Code',
      ],
      price: '$199 / month',
      popular: false,
      benefits: [;
        'Faster Deployment',
        'Enhanced Security',
        'Reduced Risk',
        'Automated Compliance',
      ],
    },
    {
      id: 4,
      name: 'Enterprise Data Platform',
      description:;
        'Comprehensive data management and analytics platform for enterprise - scale operations.',
      category: 'enterprise',
      features: [;
        'Data Warehousing',
        'Real - time Analytics',
        'Data Governance',
        'Machine Learning Integration',
      ],
      price: '$299 / month',
      popular: true,
      benefits: [;
        'Data - Driven Insights',
        'Scalable Architecture',
        'Compliance Ready',
        'Advanced Analytics',
      ],
    },
    {
      id: 5,
      name: 'High - Performance Computing Solutions',
      description:;
        'Optimized computing infrastructure for demanding computational workloads and research.',
      category: 'cloud',
      features: [;
        'GPU Computing',
        'Parallel Processing',
        'Distributed Computing',
        'Performance Monitoring',
      ],
      price: '$399 / month',
      popular: false,
      benefits: [;
        'Massive Processing Power',
        'Scalable Resources',
        'Cost Optimization',
        'Advanced Capabilities',
      ],
    },
    {
      id: 6,
      name: 'Cloud Migration Services',
      description:;
        'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',
      category: 'cloud',
      features: [;
        'Assessment & Planning',
        'Data Migration',
        'Application Modernization',
        'Performance Optimization',
      ],
      price: 'Custom Pricing',
      popular: true,
      benefits: [;
        'Reduced Costs',
        'Enhanced Scalability',
        'Improved Security',
        'Better Performance',
      ],
    },
    {
      id: 7,
      name: 'Infrastructure as Code',
      description:;
        'Automated infrastructure provisioning and management using modern DevOps practices.',
      category: 'devops',
      features: [;
        'Terraform Automation',
        'Configuration Management',
        'Version Control',
        'Environment Provisioning',
      ],
      price: '$149 / month',
      popular: false,
      benefits: [;
        'Consistent Environments',
        'Faster Provisioning',
        'Version Control',
        'Reduced Errors',
      ],
    },
    {
      id: 8,
      name: 'Disaster Recovery Solutions',
      description:;
        'Comprehensive backup and disaster recovery strategies to ensure business continuity.',
      category: 'security',
      features: [;
        'Automated Backups',
        'Multi - site Replication',
        'Recovery Testing',
        'RTO / RPO Optimization',
      ],
      price: '$179 / month',
      popular: true,
      benefits: [;
        'Business Continuity',
        'Data Protection',
        'Minimal Downtime',
        'Compliance Ready',
      ],
    },
    {
      id: 9,
      name: 'Cybersecurity Assessment',
      description:;
        'Comprehensive security evaluation and penetration testing for enterprise systems.',
      category: 'security',
      features: [;
        'Vulnerability Assessment',
        'Penetration Testing',
        'Compliance Auditing',
        'Security Recommendations',
      ],
      price: '$249 / month',
      popular: false,
      benefits: [;
        'Risk Identification',
        'Compliance Assurance',
        'Security Hardening',
        'Threat Mitigation',
      ],
    },
    {
      id: 10,
      name: 'API Development & Integration',
      description:;
        'Custom API development and third - party integration services for seamless connectivity.',
      category: 'enterprise',
      features: [;
        'RESTful APIs',
        'GraphQL Services',
        'Third - party Integration',
        'API Documentation',
      ],
      price: '$129 / month',
      popular: true,
      benefits: [;
        'System Integration',
        'Improved Efficiency',
        'Scalable Architecture',
        'Developer Experience',
      ],
    },
    {
      id: 11,
      name: 'Microservices Architecture',
      description:;
        'Design and implementation of microservices - based applications for scalable systems.',
      category: 'enterprise',
      features: [;
        'Service Design',
        'Container Orchestration',
        'Service Mesh',
        'Monitoring & Logging',
      ],
      price: '$199 / month',
      popular: false,
      benefits: [;
        'Scalable Architecture',
        'Independent Deployment',
        'Technology Diversity',
        'Fault Isolation',
      ],
    },
    {
      id: 12,
      name: 'Edge Computing Solutions',
      description:;
        'Distributed computing infrastructure for low - latency applications and IoT systems.',
      category: 'cloud',
      features: [;
        'Edge Deployment',
        'IoT Integration',
        'Real - time Processing',
        'Bandwidth Optimization',
      ],
      price: '$159 / month',
      popular: true,
      benefits: [;
        'Reduced Latency',
        'Bandwidth Savings',
        'Offline Capability',
        'Enhanced Performance',
      ],
    },
  ];
;
  const filtered_services =;
    selected_category === 'all';
      ? services;
      : services.filter (service => service.category === selected_category);
;
  return (
    <Layout>;
      <Head>;
        <title > IT Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.';
        />;
        <meta;
          name='keywords';
          content='IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure';
        />;
        <meta name='viewport' content='width = device - width, initial - scale = 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact.site}/it - services`} />;
      </Head>;
      <ErrorBoundary level='page'>;
        <main className='min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
          {/* Hero Section */}
          <section className='py - 20 px - 4 text - center' role='banner'>;
            <div className='max - w-4xl mx - auto'>;
              <h1                className={`text - 5xl md:text - 6xl font - extrabold tracking - tight mb - 6 transition - all duration - 1000 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                IT Services;
              </h1>;
              <p;
                className={`text - xl md:text - 2xl text - slate - 300 mb - 8 transition - all duration - 1000 delay - 200 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                100+ Comprehensive IT Solutions;
              </p>;
              <p;
                className={`text - lg text - slate - 400 mb - 12 max - w-3xl mx - auto transition - all duration - 1000 delay - 400 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                Transform your business with our enterprise - grade IT services.;
                From cloud infrastructure to quantum computing, we provide;
                cutting - edge technology solutions that scale with your business;
                and drive innovation.              </p>;
            </div>;
          </section>;
          {/* Category Filter */}
          <section className='py - 8 px - 4'>;
            <div className='max - w-6xl mx - auto'>;
              <div className='flex flex - wrap justify - center gap - 4 mb - 8'>;
                {categories.map (category => (                  <button;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    key={category.id}
                    on_click={() => setSelectedCategory (category.id)}
                    className={`px - 6 py - 3 rounded - lg font - semibold transition - all duration - 300 ${
                      selected_category === category.id;
                        ? 'bg - green - 600 text - white';
                        : 'bg - slate - 800 text - slate - 300 hover:bg - slate - 700';
                    }`}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >;
                    {category.name} ({category.count});
                  </button>))}
              </div>;
            </div>;
          </section>;
          {/* Services Grid */}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                </div>
                  <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">;
                  {level && level.name}
                </h3>;
                  <p className="text-gray-600 mb-6">;
                  {level && level.description}
                </p>;
                  <div className="text-3xl font-bold text-green-600 mb-6">;
                  {level && level.pricing}
                </div>;
                  <ul className="space-y-3 mb-8">;
                  {level && level.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-600">;
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                  <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    index === 1
? 'bg-green-600 hover: bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>;
                  <span>Choose Plan</span>;
                  <ArrowRight className="w-4 h-4 ml-2" />;
                  </Link>;
                  </motion && motion.div>;
            ))}
          <section className='py - 16 px - 4' role='main'>;
            <div className='max - w-7xl mx - auto'>;
              <div className='grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
                {filtered_services.map ((service, index) => (
                  <div                    key={service.id}
                    className={`p - 6 bg - slate - 900 / 60 rounded - xl border border - white / 10 hover:border - green - 500 / 40 transition - all duration - 300 hover:scale - 105 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
                    style={{ transition_delay: `${index * 100}ms` }}
                  >;
                    {service.popular && (
                      <div className='absolute -top - 2 -right - 2 bg - green - 600 text - white text - xs font - bold px - 2 py - 1 rounded - full'>;
                        Popular;
                      </div>)}
                    <h3 className='text - xl font - bold mb - 3'>{service.name}</h3>;
                    <p className='text - slate - 300 mb - 4 text - sm'>;
                      {service.description}
                    </p>;
                    <div className='mb - 4'>;
                      <h4 className='text - sm font - semibold text - green - 400 mb - 2'>;
                        Key Features:;
                      </h4>;
                      <ul className='text - slate - 400 text - sm space - y-1'>;
                        {service.features.map ((feature, feature_index) => (
                          <li key={feature_index} className='flex items - center'>;
                            <span className='w - 1.5 h - 1.5 bg - green - 400 rounded - full mr - 2 flex - shrink - 0'></span>                            {feature}
                          </li>))}
                      </ul>;
                    </div>;
                    <div className='mb - 4'>;
                      <h4 className='text - sm font - semibold text - blue - 400 mb - 2'>;
                        Benefits:;
                      </h4>;
                      <div className='flex flex - wrap gap - 1'>;
                        {service.benefits.map ((benefit, benefit_index) => (
                          <span;
                            key={benefit_index}
                            className='text - xs bg - slate - 800 text - slate - 300 px - 2 py - 1 rounded';
                          >                            {benefit}
                          </span>))}
                      </div>;
                    </div>;
                    <div className='flex items - center justify - between mb - 4'>;
                      <span className='text - 2xl font - bold text - green - 400'>;
                        {service.price}
                      </span>;
                      <span className='text - xs text - slate - 500 capitalize'>;
                        {service.category.replace ('-', ' ')}
                      </span>;
                    </div>;
                    <button className='w - full py - 2 bg - green - 600 hover:bg - green - 700 rounded - lg font - semibold transition - colors'>                      Learn More;
                    </button>;
                  </div>))}
              </div>;
            </div>;
          </section>;
          {/* Technology Stack Section */}
          <section className='py - 16 px - 4 bg - slate - 900 / 40'>;
            <div className='max - w-6xl mx - auto'>;
              <h2 className='text - 3xl md:text - 4xl font - bold text - center mb - 12'>;
                Our Technology Stack;
              </h2>;
              <div className='grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
                <div className='text - center'>;
                  <div className='w - 16 h - 16 bg - green - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                    <svg;
                      className='w - 8 h - 8 text - white';
                      fill='none';
                      stroke='current_color';
                      view_box='0 0 24 24';
                    >;
                      <path;
                        stroke_linecap='round';
                        stroke_linejoin='round';
                        stroke_width={2}
                        d='M3 15a4 4 0 004 4M9 5a2 2 0 012 - 2h2a2 2 0 012 2m - 6 9l2 2 4 - 4m6 2a9 9 0 11 - 18 0 9 9 0 0118 0z';
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text - xl font - bold mb - 2'>Cloud Platforms</h3>;
                  <p className='text - slate - 400'>;
                    AWS, Azure, GCP, and hybrid cloud solutions;
                  </p>;
                </div>;
                <div className='text - center'>;
                  <div className='w - 16 h - 16 bg - blue - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                    <svg;
                      className='w - 8 h - 8 text - white';
                      fill='none';
                      stroke='current_color';
                      view_box='0 0 24 24';
                    >;
                      <path;
                        stroke_linecap='round';
                        stroke_linejoin='round';
                        stroke_width={2}
                        d='M9 12l2 2 4 - 4m5.618 - 4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01 - 8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176 - 1.332 9 - 6.03 9 - 11.622 0 - 1.042-.133 - 2.052-.382 - 3.016z';
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text - xl font - bold mb - 2'>Security</h3>;
                  <p className='text - slate - 400'>;
                    Zero - trust architecture and advanced threat protection;
                  </p>;
                </div>;
                <div className='text - center'>;
                  <div className='w - 16 h - 16 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                    <svg;
                      className='w - 8 h - 8 text - white';
                      fill='none';
                      stroke='current_color';
                      view_box='0 0 24 24';
                    >;
                      <path;
                        stroke_linecap='round';
                        stroke_linejoin='round';
                        stroke_width={2}
                        d='M10.325 4.317c.426 - 1.756 2.924 - 1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00 - 1.066 2.573c.94 1.543-.826 3.31 - 2.37 2.37a1.724 1.724 0 00 - 2.572 1.065c-.426 1.756 - 2.924 1.756 - 3.35 0a1.724 1.724 0 00 - 2.573 - 1.066c - 1.543.94 - 3.31-.826 - 2.37 - 2.37a1.724 1.724 0 00 - 1.065 - 2.572c - 1.756-.426 - 1.756 - 2.924 0 - 3.35a1.724 1.724 0 001.066 - 2.573c-.94 - 1.543.826 - 3.31 2.37 - 2.37.996.608 2.296.07 2.572 - 1.065z';
                      />;
                      <path;
                        stroke_linecap='round';
                        stroke_linejoin='round';
                        stroke_width={2}
                        d='M15 12a3 3 0 11 - 6 0 3 3 0 016 0z';
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text - xl font - bold mb - 2'>DevOps</h3>;
                  <p className='text - slate - 400'>;
                    CI / CD pipelines and infrastructure automation;
                  </p>;
                </div>;
                <div className='text - center'>;
                  <div className='w - 16 h - 16 bg - orange - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                    <svg;
                      className='w - 8 h - 8 text - white';
                      fill='none';
                      stroke='current_color';
                      view_box='0 0 24 24';
                    >;
                      <path;
                        stroke_linecap='round';
                        stroke_linejoin='round';
                        stroke_width={2}
                        d='M13.828 10.172a4 4 0 00 - 5.656 0l - 4 4a4 4 0 105.656 5.656l1.102 - 1.101m-.758 - 4.899a4 4 0 005.656 0l4 - 4a4 4 0 00 - 5.656 - 5.656l - 1.1 1.1';
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text - xl font - bold mb - 2'>Blockchain</h3>;
                  <p className='text - slate - 400'>;
                    Smart contracts and decentralized applications;
                  </p>                </div>;
              </div>;
            </div>;
          </section>;
          {/* CTA Section */}
          <section className='py - 16 px - 4'>;
            <div className='max - w-4xl mx - auto text - center'>;
              <h2 className='text - 3xl md:text - 4xl font - bold mb - 8'>;
                Ready to Transform Your IT Infrastructure?;
              </h2>;
              <p className='text - lg text - slate - 300 mb - 8'>;
                Contact our IT experts to discuss how our comprehensive;
                technology solutions can modernize your infrastructure and;
                accelerate your digital transformation.;
              </p>;
              <div className='flex flex - col sm:flex - row items - center justify - center gap - 4'>;
                <Link;
                  href='/contact';
                  className='px - 8 py - 3 bg - green - 600 hover:bg - green - 700 rounded - lg font - semibold transition - colors';
                >;
                  Get Started;
                  <ArrowRight className="ml - 2 w - 4 h - 4" />;
                </Link>;
                <a;
                  href={`tel:${contact.phone.replace (/[^\d+]/g, '')}`}
                  className='px - 8 py - 3 bg - blue - 600 hover:bg - blue - 700 rounded - lg font - semibold transition - colors';
                >;
                  Call {contact.phone}
                </a>;
                <a;
                  href={`mailto:${contact.email}`}
                  className='px - 8 py - 3 bg - slate - 800 hover:bg - slate - 700 border border - white / 10 rounded - lg font - semibold transition - colors'                >;
                  Email Us;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Grid */}
        <section className="py - 16 px - 4">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Our IT Services</h2>;
              <p className="text - lg text - gray - 600 max - w-2xl mx - auto">;
                Comprehensive IT solutions designed to enhance your business operations and security.;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {it_services.map ((service, index) => (
                <motion.div;
                  key={index}
                  className="bg - white p - 6 rounded - lg shadow - lg hover:shadow - xl transition - shadow";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
while_hover={{ coordinate_y: -5 }} ">;
                  <div className="flex items - center justify - between mb - 4">;
                  <div className="text - green - 600 group - hover:text - emerald - 600 transition - colors">;
                  <IconComponent className="w - 10 h - 10" />;
                  </div>;
                  <span className="text - xs font - semibold text - green - 600 bg - green - 100 px - 2 py - 1 rounded - full">;
                      {service.category}
                    </span>;
                  </div>;
                  <h3 className="text - xl font - bold text - gray - 900 mb - 3">;
                    {service.title}
                  </h3>;
                  <p className="text - gray - 600 mb - 4 leading - relaxed">;
                    {service.description}
                  </p>;
                  <div className="mb - 4">;
<h4 className="font - semibold text - gray - 900 mb - 2 text - sm">Key "Features": </h4>;
                  <ul className="space - y-1">;
                      {service.features.map ((feature, feature_index) => (
                        <li key={feature_index} className="flex items - center text - xs text - gray - 600">;
<CheckCircle className="w - 3 h - 3 text - green - 500 mr - 2 flex - shrink - 0" />;
                          {feature}
                        </li>))}
                    </ul>;
                  </div>;
                  <div className="mb - 4">;
                  <span className="text - sm font - semibold text - green - 600">{service.pricing}</span>;
                  </div>;
                  <Link;
                    href="/contact";
                    className="w - full bg - green - 600 hover:bg - green - 700 text - white py - 2 px - 4 rounded - lg font - semibold transition - colors inline - flex items - center justify - center text - sm";
                  >;
                    <span > Get Quote</span>;
                  <ArrowRight className="w - 3 h - 3 ml - 1" />;
                  </Link>;
                  </motion.div>);
            })}
          </div>;
                  </div>;
                  </section>;
      {/* Technologies Section */}
      <section className="py - 20 bg - white">;
                  <div className="container mx - auto px - 4">;
                  <motion.div;
            className="text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
<h2 className="text - 3xl sm:text - 4xl font - bold text - gray - 900 mb - 4">Technologies We Work With</h2>;
            <p className="text - lg text - gray - 600 max - w-2xl mx - auto">;
              We leverage cutting - edge technologies to deliver robust IT solutions.;
            </p>;
                  </motion.div>;
                  <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {technologies.map ((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div;
                  key={index}
className="text - center p - 6 rounded - lg hover:bg - gray - 50 transition - colors;
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}">;
                  <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                  <IconComponent className="w - 8 h - 8 text - green - 600" />;
                  </div>;
                  <h3 className="text - xl font - bold text - gray - 900 mb - 2">;
                    {tech.name}
                  </h3>;
                  <p className="text - gray - 600">;
                    {tech.description}
                  </p>;
                  </motion.div>);
            })}
          </div>;
                  </div>;
                  </section>;
      {/* Benefits Section */}
      <section className="py - 20 bg - gray - 50">;
                  <div className="container mx - auto px - 4">;
                  <motion.div;
            className="text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
<h2 className="text - 3xl sm:text - 4xl font - bold text - gray - 900 mb - 4">Why Choose Our IT Services?</h2>;
            <p className="text - lg text - gray - 600 max - w-2xl mx - auto">;
              Proven expertise and measurable results for your technology infrastructure.;
            </p>;
                  </motion.div>;
                  <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
            {benefits.map ((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div;
                  key={index}
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                  <IconComponent className="w - 8 h - 8 text - green - 600" />;
                  </div>;
                  <div className="text - 3xl font - bold text - green - 600 mb - 2">;
                    {benefit.stat}
                  </div>;
                  <h3 className="text - xl font - bold text - gray - 900 mb - 2">;
                    {benefit.title}
                  </h3>;
                  <p className="text - gray - 600">;
                    {benefit.description}
                  </p>;
                  </motion.div>);
            })}
          </div>;
                  </div>;
                  </section>;
      {/* Support Levels Section */}
      <section className="py - 20 bg - white">;
                  <div className="container mx - auto px - 4">;
                  <motion.div;
            className="text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
<h2 className="text - 3xl sm:text - 4xl font - bold text - gray - 900 mb - 4">Support Levels</h2>;
            <p className="text - lg text - gray - 600 max - w-2xl mx - auto">;
              Choose the support level that best fits your business needs.;
            </p>;
                  </motion.div>;
                  <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {support_levels.map ((level, index) => (
              <motion.div;
                key={index}
                className={`p - 8 rounded - xl shadow - lg ${
                  index === 1 ? 'bg - green - 50 border - 2 border - green - 200' : 'bg - white';
                }`}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >;
                  <h3 className="text - 2xl font - bold text - gray - 900 mb - 2">;
                  {level.name}
                </h3>;
                  <p className="text - gray - 600 mb - 6">;
                  {level.description}
                </p>;
                  <div className="text - 3xl font - bold text - green - 600 mb - 6">;
                  {level.pricing}
                </div>;
                  <ul className="space - y-3 mb - 8">;
                  {level.features.map ((feature, feature_index) => (
                    <li key={feature_index} className="flex items - center text - gray - 600">;
                  <CheckCircle className="w - 5 h - 5 text - green - 500 mr - 3 flex - shrink - 0" />;
                      {feature}
                    </li>))}
                </ul>;
                  <Link;
                  href="/contact";
                  className={`w - full py - 3 px - 6 rounded - lg font - semibold transition - colors inline - flex items - center justify - center ${
                    index === 1;
? 'bg - green - 600 hover: bg - green - 700 text - white';
                      : 'bg - gray - 100 hover:bg - gray - 200 text - gray - 900';
                  }`}
                >;
                  <span > Choose Plan</span>;
                  <ArrowRight className="w - 4 h - 4 ml - 2" />;
                  </Link>;
                  </motion.div>))}
          </div>;
                  </div>;
                  </section>;
      {/* CTA Section */}
<<<<<<< HEAD
        </section>
      </div>
    </Layout>
  );
}
=======

        </section>
      </div>
    </Layout>

>>>>>>> origin/automation-improvements-final
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Technology Stack
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>
                  <p className="text-slate-400">AWS, Azure, GCP, and hybrid cloud solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security</h3>
                  <p className="text-slate-400">Zero-trust architecture and advanced threat protection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">DevOps</h3>
                  <p className="text-slate-400">CI/CD pipelines and infrastructure automation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Blockchain</h3>
                  <p className="text-slate-400">Smart contracts and decentralized applications</p>
                    </div>
                    
                    <button className=&quot;w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors&quot;>
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Services Grid */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredServices.map((service, index) => (
                  <div
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className='absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>
                    )}

<<<<<<< HEAD
                    <h3 className='text-xl font-bold mb-3'>{service.name}</h3>
                    <p className='text-slate-300 mb-4 text-sm'>
                      {service.description}
                    </p>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-green-400 mb-2'>
                        Key Features:
                      </h4>
                      <ul className='text-slate-400 text-sm space-y-1'>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0'></span>
                      <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                        Benefits:
                      </h4>
                      <div className='flex flex-wrap gap-1'>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'
                          >
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {service.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>

                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('- ')}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
<<<<<<< HEAD
=======
          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our IT experts to discuss how our comprehensive technology solutions 
                can modernize your infrastructure and accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                >
                  Get IT Consultation
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
                >
                  Email Us
                </Link>

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Our Technology Stack
              </h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Cloud Platforms</h3>
                  <p className='text-slate-400'>
                    AWS, Azure, GCP, and hybrid cloud solutions
                  </p>
origin/automation-improvements-final
                </div>
                  <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
<<<<<<< HEAD
                      {feature}
                    </li>
                  ))}
                </ul>
=======
=======
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">;
                  {level && level.name}
                </h3>;
                  <p className="text-gray-600 mb-6">;
                  {level && level.description}
                </p>;
                  <div className="text-3xl font-bold text-green-600 mb-6">;
                  {level && level.pricing}
                </div>;
                  <ul className="space-y-3 mb-8">;
                  {level && level.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-600">;
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      {feature}
                    </li>;
                  ))}
                </ul>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    index === 1
? 'bg-green-600 hover: bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
<<<<<<< HEAD
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  </motion.div>
=======
                  }`}>;
                  <span>Choose Plan</span>;
                  <ArrowRight className="w-4 h-4 ml-2" />;
                  </Link>;
                  </motion && motion.div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
<div className="container mx-auto px-4 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT environment.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get IT Assessment
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Contact Information Section */}
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
              Get Started with IT Services Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your IT infrastructure? Our expert team is here to help you build, secure, and optimize your technology environment. Contact us for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free IT Consultation</h3>
              <p className="text-gray-600 mb-4">Get expert advice on your IT project with our complimentary 30-minute consultation.</p>
              <a href="tel:+13024640950" className="text-green-600 font-semibold hover:text-green-700">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your IT project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-green-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </motion.div>
          </div>
          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Join 500+ successful businesses that trust Zion Tech Group for their IT infrastructure needs. Let&apos;s build the perfect technology solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
<<<<<<< HEAD

<<<<<<< HEAD

  );

            </div>
            </div>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </motion.div>
        </div>
      </section>
                  </div>
        </section>
      </div>
    </Layout>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  );

            </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-b76c
origin/main
=======

=======
>>>>>>> origin/main
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/integrate-build-improve-and-re-verify-b76c
origin/main
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
              viewport={{ once: true }}>;
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Building className="w-8 h-8 text-green-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>;
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>;
              <address className="text-green-600 font-semibold not-italic">;
                364 E Main St STE 1008<br />;
                Middletown, DE 19709;
              </address>;
            </motion && motion.div>;
          </div>;
          <motion&& motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>;
            <p className="text-lg mb-6">;
              Join 500+ successful businesses that trust Zion Tech Group for their IT infrastructure needs. Let&apos;s build the perfect technology solution for your business.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                Start Building;
              </Link>;
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">;
                View All Services;
              </Link>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
                  </div>;
  );
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py - 20 bg - gradient - to - r from - green - 600 to - emerald - 600 text - white">;
<div className="container mx - auto px - 4 text - center">;
                  <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
<h2 className="text - 3xl md:text - 4xl font - bold mb - 6">Ready to Optimize Your IT Infrastructure?</h2>;
            <p className="text - xl mb - 8 max - w-2xl mx - auto">;
              Let our expert team help you build a robust, secure, and scalable IT environment.;
            </p>;
                  <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                  <Link href="/contact" className="px - 8 py - 4 bg - white text - green - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold">;
                Get IT Assessment;
              </Link>;
                  <Link href="/services" className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - green - 600 transition - all duration - 300 font - semibold">;
                View All Services;
              </Link>;
                  </div>;
                  </motion.div>;
                  </div>;
                  </section>;
      {/* Contact Information Section */}
      <section className="py - 20 bg - gray - 50">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            className="text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Get Started with IT Services Today;
            </h2>;
            <p className="text - lg text - gray - 600 max - w-3xl mx - auto mb - 8">;
              Ready to transform your IT infrastructure? Our expert team is here to help you build, secure, and optimize your technology environment. Contact us for a free consultation and discover how we can accelerate your digital transformation.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 mb - 12">;
            <motion.div;
              className="text - center p - 6 bg - white rounded - lg shadow - lg";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >;
              <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <MessageSquare className="w - 8 h - 8 text - green - 600" />;
              </div>;
              <h3 className="text - xl font - bold text - gray - 900 mb - 2">Free IT Consultation</h3>;
              <p className="text - gray - 600 mb - 4">Get expert advice on your IT project with our complimentary 30 - minute consultation.</p>;
              <a href="tel:+13024640950" className="text - green - 600 font - semibold hover:text - green - 700">;
                Call Now: +1 302 464 0950;
              </a>;
            </motion.div>;
            <motion.div;
              className="text - center p - 6 bg - white rounded - lg shadow - lg";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >;
              <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Mail className="w - 8 h - 8 text - green - 600" />;
              </div>;
              <h3 className="text - xl font - bold text - gray - 900 mb - 2">Email Us</h3>;
              <p className="text - gray - 600 mb - 4">Send us your IT project details and we'll respond within 24 hours with a detailed proposal.</p>;
              <a href="mailto:kleber@ziontechgroup.com" className="text - green - 600 font - semibold hover:text - green - 700">;
                kleber@ziontechgroup.com;
              </a>;
            </motion.div>;
            <motion.div;
              className="text - center p - 6 bg - white rounded - lg shadow - lg";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >;
              <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Building className="w - 8 h - 8 text - green - 600" />;
              </div>;
              <h3 className="text - xl font - bold text - gray - 900 mb - 2">Visit Our Office</h3>;
              <p className="text - gray - 600 mb - 4">Schedule an in - person meeting at our headquarters in Middletown, Delaware.</p>;
              <address className="text - green - 600 font - semibold not - italic">;
                364 E Main St STE 1008 < br />;
                Middletown, DE 19709;
              </address>;
            </motion.div>;
          </div>;
          <motion.div;
            className="bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - 2xl p - 8 text - white text - center";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h3 className="text - 2xl font - bold mb - 4">Ready to Get Started?</h3>;
            <p className="text - lg mb - 6">;
              Join 500+ successful businesses that trust Zion Tech Group for their IT infrastructure needs. Let & apos;s build the perfect technology solution for your business.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link href="/contact" className="px - 8 py - 4 bg - white text - green - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold">;
                Start Building;
              </Link>;
              <Link href="/services" className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - green - 600 transition - all duration - 300 font - semibold">;
                View All Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
                  </div>);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
          </section>;
        </main>;
      </ErrorBoundary>;
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD
}
}
}
}
}
          <section className="py-16 px-4 bg-slate-900/40">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">;
                Our Technology Stack;
              </h2>;
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>;
                  <p className="text-slate-400">AWS, Azure, GCP, and hybrid cloud solutions</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Security</h3>;
                  <p className="text-slate-400">Zero-trust architecture and advanced threat protection</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">DevOps</h3>;
                  <p className="text-slate-400">CI/CD pipelines and infrastructure automation</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Blockchain</h3>;
                  <p className="text-slate-400">Smart contracts and decentralized applications</p>;
                </div>;
              </div>;
            </div>;
          </section>;
          {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-3xl md:text-4xl font-bold mb-8">;
                Ready to Transform Your IT Infrastructure?;
              </h2>;
              <p className="text-lg text-slate-300 mb-8">;
                Contact our IT experts to discuss how our comprehensive technology solutions;
                can modernize your infrastructure and accelerate your digital transformation.;
              </p>;
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">;
                <Link;
                  href="/contact";
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors";
                >;
                  Get IT Consultation;
                </Link>;
                <a;
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} ;
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors";
                >;
                  Call {contact.phone  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </a>;
                <a;
                  href={`mailto:${contact.email}`} ;
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors";
                >;
                  Email Us;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </ErrorBoundary>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/fix-lint-push-and-merge-to-main-ae4e
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
