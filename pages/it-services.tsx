import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
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
  Sprout,
  Eye,
  Bot,
  Target,
  TreePine,
  Heart,
  GraduationCap,
  PieChart,
  Truck,
  Home,
  Video,
  ClipboardList,
  Phone,
  MapPin,
  Mail,
  CreditCard,
  Camera,
  FileText,
  Mic,
  Calendar,
  Package
} from 'lucide-react';

const itServices = [
  // Cloud & Infrastructure Services
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management with 99.9% uptime guarantee.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery', 'Security Hardening', 'Performance Monitoring'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud Infrastructure',
    popular: true,
    benefits: ['30% Cost Reduction', '99.9% Uptime', 'Scalable Architecture', 'Enhanced Security', '24/7 Monitoring'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/cloud-infrastructure-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Hybrid Cloud Solutions',
    description: 'Seamless integration of on-premises and cloud infrastructure for optimal performance and security.',
    icon: Server,
    features: ['Hybrid Architecture', 'Data Synchronization', 'Security Integration', 'Performance Optimization', 'Migration Services', 'Compliance Management'],
    pricing: '$15,000 - $75,000/project',
    category: 'Cloud Infrastructure',
    popular: true,
    benefits: ['Flexible Deployment', 'Cost Optimization', 'Enhanced Security', 'Seamless Integration', 'Future-Proof Architecture'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/hybrid-cloud-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed computing infrastructure for low-latency applications and IoT deployments with global reach.',
    icon: Wifi,
    features: ['Edge Node Deployment', 'Latency Optimization', 'IoT Integration', 'Global Distribution', 'Real-time Processing', 'Bandwidth Optimization'],
    pricing: '$25,000 - $150,000/project',
    category: 'Edge Computing',
    popular: true,
    benefits: ['Ultra-low Latency', 'Global Coverage', 'IoT Ready', 'Cost Efficiency', 'Scalable Architecture'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/edge-computing-infrastructure',
    contact: '+1 302 464 0950'
  },

  // Cybersecurity Services
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data with advanced threat detection.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Penetration Testing', 'Compliance Management'],
    pricing: '$5,000 - $40,000/project',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Enhanced Security', 'Risk Mitigation', 'Compliance Assurance', '24/7 Monitoring', 'Rapid Response'],
    marketPrice: '$8,000 - $60,000/project',
    link: 'https://ziontechgroup.com/cybersecurity-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation with continuous verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Access Control', 'Threat Detection', 'Automated Response'],
    pricing: '$20,000 - $100,000/project',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Maximum Security', 'Reduced Attack Surface', 'Compliance Ready', 'Automated Protection', 'Future-Proof Security'],
    marketPrice: '$35,000 - $150,000/project',
    link: 'https://ziontechgroup.com/zero-trust-security',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Security Operations Center (SOC)',
    description: '24/7 security monitoring and incident response with advanced threat intelligence and automated response.',
    icon: Monitor,
    features: ['24/7 Monitoring', 'Threat Intelligence', 'Incident Response', 'Security Analytics', 'Automated Response', 'Compliance Reporting'],
    pricing: '$10,000 - $50,000/month',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Round-the-clock Protection', 'Rapid Response', 'Threat Intelligence', 'Compliance Support', 'Cost Efficiency'],
    marketPrice: '$15,000 - $80,000/month',
    link: 'https://ziontechgroup.com/security-operations-center',
    contact: '+1 302 464 0950'
  },

  // Network & Connectivity Services
  {
    title: 'Network Infrastructure Design',
    description: 'Design, implementation, and management of robust network infrastructure with high availability and performance.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting', 'Security Integration', 'Scalability Planning'],
    pricing: '$120 - $220/hour',
    category: 'Networking',
    popular: true,
    benefits: ['High Performance', 'Reliable Connectivity', 'Enhanced Security', 'Scalable Design', 'Cost Optimization'],
    marketPrice: '$150 - $300/hour',
    link: 'https://ziontechgroup.com/network-infrastructure-design',
    contact: '+1 302 464 0950'
  },
  {
    title: '5G Network Implementation',
    description: '5G network design and implementation for enterprise and industrial applications with ultra-low latency.',
    icon: Network,
    features: ['5G Network Design', 'Private 5G Networks', 'IoT Connectivity', 'Performance Optimization', 'Security Integration', 'Edge Computing'],
    pricing: '$200,000 - $2,000,000/project',
    category: '5G Networks',
    popular: true,
    benefits: ['Ultra-low Latency', 'High Bandwidth', 'IoT Ready', 'Enhanced Security', 'Future-Proof Technology'],
    marketPrice: '$300,000 - $3,000,000/project',
    link: 'https://ziontechgroup.com/5g-network-implementation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'SD-WAN Solutions',
    description: 'Software-defined wide area network solutions for optimized connectivity and centralized management.',
    icon: Globe,
    features: ['SD-WAN Design', 'Centralized Management', 'Performance Optimization', 'Security Integration', 'Cost Reduction', 'Cloud Integration'],
    pricing: '$50,000 - $300,000/project',
    category: 'Networking',
    popular: true,
    benefits: ['Cost Reduction', 'Enhanced Performance', 'Centralized Management', 'Cloud Ready', 'Scalable Architecture'],
    marketPrice: '$80,000 - $500,000/project',
    link: 'https://ziontechgroup.com/sd-wan-solutions',
    contact: '+1 302 464 0950'
  },

  // Database & Data Management Services
  {
    title: 'Database Management & Optimization',
    description: 'Comprehensive database solutions including design, optimization, and maintenance with high availability.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services', 'High Availability', 'Security Hardening'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database',
    popular: true,
    benefits: ['Improved Performance', 'High Availability', 'Data Security', 'Cost Optimization', 'Scalable Architecture'],
    marketPrice: '$3,000 - $25,000/project',
    link: 'https://ziontechgroup.com/database-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Big Data Analytics Platform',
    description: 'Enterprise big data platform with real-time analytics, machine learning, and data visualization capabilities.',
    icon: BarChart3,
    features: ['Data Ingestion', 'Real-time Processing', 'Machine Learning', 'Data Visualization', 'Scalable Storage', 'Security & Compliance'],
    pricing: '$100,000 - $800,000/project',
    category: 'Big Data',
    popular: true,
    benefits: ['Real-time Insights', 'Scalable Processing', 'Advanced Analytics', 'Cost Efficiency', 'Data-Driven Decisions'],
    marketPrice: '$150,000 - $1,200,000/project',
    link: 'https://ziontechgroup.com/big-data-analytics-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Data Lake & Warehouse Solutions',
    description: 'Comprehensive data storage and analytics solutions with automated data pipelines and governance.',
    icon: HardDrive,
    features: ['Data Lake Design', 'Data Warehouse', 'ETL/ELT Pipelines', 'Data Governance', 'Security & Compliance', 'Analytics Integration'],
    pricing: '$75,000 - $500,000/project',
    category: 'Data Management',
    popular: true,
    benefits: ['Unified Data Storage', 'Automated Processing', 'Enhanced Analytics', 'Cost Efficiency', 'Compliance Ready'],
    marketPrice: '$120,000 - $800,000/project',
    link: 'https://ziontechgroup.com/data-lake-warehouse-solutions',
    contact: '+1 302 464 0950'
  },

  // AI & Machine Learning Infrastructure
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI/ML infrastructure with GPU clusters, data pipelines, and model deployment capabilities.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'Data Pipeline Design', 'Model Deployment', 'MLOps Implementation', 'Model Monitoring', 'Auto-scaling'],
    pricing: '$75,000 - $300,000/project',
    category: 'AI Infrastructure',
    popular: true,
    benefits: ['High Performance Computing', 'Scalable AI/ML', 'Automated Deployment', 'Cost Optimization', 'Future-Proof Architecture'],
    marketPrice: '$120,000 - $500,000/project',
    link: 'https://ziontechgroup.com/ai-infrastructure-setup',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Machine Learning Operations (MLOps)',
    description: 'End-to-end MLOps platform for model development, deployment, monitoring, and continuous improvement.',
    icon: Settings,
    features: ['Model Development', 'Automated Deployment', 'Model Monitoring', 'A/B Testing', 'Continuous Integration', 'Performance Optimization'],
    pricing: '$50,000 - $250,000/project',
    category: 'MLOps',
    popular: true,
    benefits: ['Faster Model Deployment', 'Automated Operations', 'Better Model Performance', 'Cost Efficiency', 'Scalable ML Operations'],
    marketPrice: '$80,000 - $400,000/project',
    link: 'https://ziontechgroup.com/mlops-platform',
    contact: '+1 302 464 0950'
  },

  // DevOps & Automation Services
  {
    title: 'DevOps Implementation',
    description: 'Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated testing.',
    icon: Code,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Container Orchestration', 'Monitoring & Logging', 'Security Integration'],
    pricing: '$30,000 - $150,000/project',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployment', 'Improved Quality', 'Reduced Costs', 'Enhanced Security', 'Scalable Operations'],
    marketPrice: '$50,000 - $250,000/project',
    link: 'https://ziontechgroup.com/devops-implementation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Container & Kubernetes Solutions',
    description: 'Container orchestration and management with Kubernetes for scalable and reliable application deployment.',
    icon: Package,
    features: ['Kubernetes Setup', 'Container Management', 'Auto-scaling', 'Service Mesh', 'Security Hardening', 'Monitoring & Logging'],
    pricing: '$25,000 - $125,000/project',
    category: 'Containerization',
    popular: true,
    benefits: ['Scalable Deployment', 'Resource Optimization', 'High Availability', 'Cost Efficiency', 'Modern Architecture'],
    marketPrice: '$40,000 - $200,000/project',
    link: 'https://ziontechgroup.com/container-kubernetes-solutions',
    contact: '+1 302 464 0950'
  },

  // System Administration & Support
  {
    title: 'System Administration & Support',
    description: '24/7 system administration and maintenance services for your IT infrastructure with proactive monitoring.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management', 'Backup & Recovery', 'Performance Optimization'],
    pricing: '$2,000 - $8,000/month',
    category: 'System Administration',
    popular: true,
    benefits: ['24/7 Support', 'Proactive Monitoring', 'Reduced Downtime', 'Cost Efficiency', 'Expert Management'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/system-administration-support',
    contact: '+1 302 464 0950'
  },
  {
    title: 'IT Help Desk & Support',
    description: 'Comprehensive IT support services with ticketing system, remote assistance, and knowledge management.',
    icon: Users,
    features: ['Ticketing System', 'Remote Support', 'Knowledge Base', 'User Training', 'Incident Management', 'Service Level Agreements'],
    pricing: '$1,500 - $6,000/month',
    category: 'IT Support',
    popular: true,
    benefits: ['Quick Response', 'User Satisfaction', 'Reduced IT Overhead', 'Knowledge Management', 'Scalable Support'],
    marketPrice: '$2,500 - $10,000/month',
    link: 'https://ziontechgroup.com/it-help-desk-support',
    contact: '+1 302 464 0950'
  },

  // Emerging Technology Services
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing setup and integration for research and enterprise applications with cutting-edge technology.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Algorithm Development', 'Quantum-Classical Integration', 'Research Support', 'Performance Optimization', 'Security Implementation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Quantum Advantage', 'Research Acceleration', 'Future-Proof Technology', 'Competitive Edge', 'Innovation Leadership'],
    marketPrice: '$150,000 - $1,500,000/project',
    link: 'https://ziontechgroup.com/quantum-computing-infrastructure',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Enterprise blockchain solutions with smart contracts, decentralized applications, and secure consensus mechanisms.',
    icon: Network,
    features: ['Blockchain Setup', 'Smart Contract Development', 'DApp Development', 'Consensus Mechanisms', 'Security Implementation', 'Integration Services'],
    pricing: '$50,000 - $500,000/project',
    category: 'Blockchain',
    popular: true,
    benefits: ['Enhanced Security', 'Transparency', 'Decentralization', 'Cost Efficiency', 'Innovation Ready'],
    marketPrice: '$80,000 - $800,000/project',
    link: 'https://ziontechgroup.com/blockchain-infrastructure',
    contact: '+1 302 464 0950'
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platform with device management, data processing, analytics, and security framework.',
    icon: Wifi,
    features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Security Framework', 'Edge Computing', 'Integration Services'],
    pricing: '$100,000 - $800,000/project',
    category: 'IoT',
    popular: true,
    benefits: ['Device Connectivity', 'Real-time Insights', 'Scalable Platform', 'Enhanced Security', 'Cost Efficiency'],
    marketPrice: '$150,000 - $1,200,000/project',
    link: 'https://ziontechgroup.com/iot-platform-development',
    contact: '+1 302 464 0950'
  },

  // Industry-Specific Solutions
  {
    title: 'Healthcare IT Solutions',
    description: 'HIPAA-compliant healthcare IT infrastructure with electronic health records, telemedicine, and data analytics.',
    icon: Heart,
    features: ['HIPAA Compliance', 'EHR Integration', 'Telemedicine Platform', 'Data Analytics', 'Security Implementation', 'Interoperability'],
    pricing: '$150,000 - $1,000,000/project',
    category: 'Healthcare IT',
    popular: true,
    benefits: ['Compliance Assurance', 'Improved Patient Care', 'Cost Efficiency', 'Enhanced Security', 'Interoperability'],
    marketPrice: '$250,000 - $1,500,000/project',
    link: 'https://ziontechgroup.com/healthcare-it-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Financial Services IT',
    description: 'Secure and compliant IT infrastructure for financial services with advanced security and regulatory compliance.',
    icon: CreditCard,
    features: ['Regulatory Compliance', 'Advanced Security', 'Risk Management', 'Data Analytics', 'Fraud Detection', 'API Integration'],
    pricing: '$200,000 - $1,500,000/project',
    category: 'FinTech IT',
    popular: true,
    benefits: ['Regulatory Compliance', 'Enhanced Security', 'Risk Mitigation', 'Cost Efficiency', 'Competitive Advantage'],
    marketPrice: '$300,000 - $2,000,000/project',
    link: 'https://ziontechgroup.com/financial-services-it',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Manufacturing IT Solutions',
    description: 'Industrial IT infrastructure with IoT integration, predictive maintenance, and smart manufacturing capabilities.',
    icon: Building,
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Manufacturing', 'Data Analytics', 'Security Implementation', 'Process Optimization'],
    pricing: '$100,000 - $800,000/project',
    category: 'Manufacturing IT',
    popular: true,
    benefits: ['Operational Efficiency', 'Predictive Maintenance', 'Cost Reduction', 'Quality Improvement', 'Smart Manufacturing'],
    marketPrice: '$150,000 - $1,200,000/project',
    link: 'https://ziontechgroup.com/manufacturing-it-solutions',
    contact: '+1 302 464 0950'
  },

  // Additional Cloud & Infrastructure Services
  {
    title: 'Multi-Cloud Migration Services',
    description: 'Comprehensive migration services for moving workloads across AWS, Azure, and Google Cloud with minimal downtime.',
    icon: Cloud,
    features: ['Workload Assessment', 'Migration Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation', 'Go-live Support'],
    pricing: '$50,000 - $500,000/project',
    category: 'Cloud Migration',
    popular: true,
    benefits: ['Seamless Migration', 'Minimal Downtime', 'Cost Optimization', 'Enhanced Performance', 'Future-Proof Architecture'],
    marketPrice: '$80,000 - $800,000/project',
    link: 'https://ziontechgroup.com/multi-cloud-migration-services',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Advanced cloud cost management with automated rightsizing, reserved instance planning, and budget optimization.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Rightsizing Recommendations', 'Reserved Instance Planning', 'Budget Optimization', 'Automated Scaling', 'Cost Monitoring'],
    pricing: '$5,000 - $50,000/project',
    category: 'Cloud FinOps',
    popular: true,
    benefits: ['30% Cost Reduction', 'Automated Optimization', 'Budget Control', 'Resource Efficiency', 'ROI Tracking'],
    marketPrice: '$8,000 - $80,000/project',
    link: 'https://ziontechgroup.com/cloud-cost-optimization',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Serverless Architecture Implementation',
    description: 'Serverless application development and deployment with AWS Lambda, Azure Functions, and Google Cloud Functions.',
    icon: Zap,
    features: ['Serverless Design', 'Function Development', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization', 'Monitoring & Logging'],
    pricing: '$25,000 - $150,000/project',
    category: 'Serverless',
    popular: true,
    benefits: ['Cost Efficiency', 'Auto-scaling', 'Reduced Management', 'High Availability', 'Pay-per-use Model'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/serverless-architecture-implementation',
    contact: '+1 302 464 0950'
  },

  // Additional Cybersecurity Services
  {
    title: 'Penetration Testing Services',
    description: 'Comprehensive penetration testing and vulnerability assessment with detailed reporting and remediation guidance.',
    icon: Shield,
    features: ['Network Penetration Testing', 'Web Application Testing', 'Mobile App Testing', 'Social Engineering', 'Physical Security Testing', 'Compliance Testing'],
    pricing: '$10,000 - $100,000/project',
    category: 'Penetration Testing',
    popular: true,
    benefits: ['Security Validation', 'Vulnerability Identification', 'Compliance Assurance', 'Risk Mitigation', 'Detailed Reporting'],
    marketPrice: '$15,000 - $150,000/project',
    link: 'https://ziontechgroup.com/penetration-testing-services',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Security Information and Event Management (SIEM)',
    description: 'Comprehensive SIEM implementation with log aggregation, threat detection, and incident response automation.',
    icon: Monitor,
    features: ['Log Aggregation', 'Threat Detection', 'Incident Response', 'Compliance Reporting', 'Real-time Monitoring', 'Automated Response'],
    pricing: '$75,000 - $400,000/project',
    category: 'SIEM',
    popular: true,
    benefits: ['Centralized Monitoring', 'Threat Detection', 'Automated Response', 'Compliance Support', 'Incident Management'],
    marketPrice: '$120,000 - $600,000/project',
    link: 'https://ziontechgroup.com/siem-implementation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Identity and Access Management (IAM)',
    description: 'Comprehensive IAM solution with single sign-on, multi-factor authentication, and privileged access management.',
    icon: Lock,
    features: ['Single Sign-On', 'Multi-Factor Authentication', 'Privileged Access Management', 'Identity Governance', 'Access Reviews', 'Compliance Management'],
    pricing: '$50,000 - $300,000/project',
    category: 'IAM',
    popular: true,
    benefits: ['Enhanced Security', 'Simplified Access', 'Compliance', 'Cost Reduction', 'User Experience'],
    marketPrice: '$80,000 - $500,000/project',
    link: 'https://ziontechgroup.com/iam-implementation',
    contact: '+1 302 464 0950'
  },

  // Additional Network & Connectivity Services
  {
    title: 'Software-Defined Networking (SDN)',
    description: 'SDN implementation for centralized network management, automation, and programmability with enhanced security.',
    icon: Network,
    features: ['SDN Controller Setup', 'Network Virtualization', 'Automated Provisioning', 'Traffic Engineering', 'Security Integration', 'Monitoring & Analytics'],
    pricing: '$100,000 - $600,000/project',
    category: 'SDN',
    popular: true,
    benefits: ['Centralized Management', 'Network Automation', 'Enhanced Security', 'Cost Reduction', 'Scalable Architecture'],
    marketPrice: '$150,000 - $1,000,000/project',
    link: 'https://ziontechgroup.com/sdn-implementation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Network Performance Monitoring',
    description: 'Advanced network monitoring and analytics with real-time performance insights and automated troubleshooting.',
    icon: BarChart3,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Troubleshooting', 'Capacity Planning', 'Alert Management', 'Historical Analysis'],
    pricing: '$25,000 - $150,000/project',
    category: 'Network Monitoring',
    popular: true,
    benefits: ['Proactive Monitoring', 'Performance Optimization', 'Reduced Downtime', 'Cost Efficiency', 'Automated Management'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/network-performance-monitoring',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Wireless Network Solutions',
    description: 'Enterprise wireless network design and implementation with Wi-Fi 6/6E, security, and performance optimization.',
    icon: Wifi,
    features: ['Wi-Fi 6/6E Implementation', 'Wireless Security', 'Performance Optimization', 'Coverage Planning', 'Guest Network Management', 'Analytics & Monitoring'],
    pricing: '$30,000 - $200,000/project',
    category: 'Wireless Networks',
    popular: true,
    benefits: ['High Performance', 'Enhanced Security', 'Better Coverage', 'Cost Efficiency', 'Future-Proof Technology'],
    marketPrice: '$50,000 - $300,000/project',
    link: 'https://ziontechgroup.com/wireless-network-solutions',
    contact: '+1 302 464 0950'
  },

  // Additional Database & Data Management Services
  {
    title: 'Database Migration Services',
    description: 'Comprehensive database migration services with minimal downtime and data integrity assurance across platforms.',
    icon: Database,
    features: ['Migration Planning', 'Data Migration', 'Schema Conversion', 'Performance Optimization', 'Testing & Validation', 'Go-live Support'],
    pricing: '$20,000 - $200,000/project',
    category: 'Database Migration',
    popular: true,
    benefits: ['Seamless Migration', 'Data Integrity', 'Minimal Downtime', 'Performance Optimization', 'Risk Mitigation'],
    marketPrice: '$35,000 - $300,000/project',
    link: 'https://ziontechgroup.com/database-migration-services',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Data Governance & Compliance',
    description: 'Comprehensive data governance framework with compliance management, data quality, and privacy protection.',
    icon: Shield,
    features: ['Data Governance Framework', 'Compliance Management', 'Data Quality Management', 'Privacy Protection', 'Data Classification', 'Audit Trails'],
    pricing: '$75,000 - $400,000/project',
    category: 'Data Governance',
    popular: true,
    benefits: ['Compliance Assurance', 'Data Quality', 'Risk Mitigation', 'Cost Efficiency', 'Audit Readiness'],
    marketPrice: '$120,000 - $600,000/project',
    link: 'https://ziontechgroup.com/data-governance-compliance',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Real-time Data Processing',
    description: 'High-performance real-time data processing platform with stream processing and event-driven architecture.',
    icon: Zap,
    features: ['Stream Processing', 'Event-driven Architecture', 'Real-time Analytics', 'Data Ingestion', 'Scalable Processing', 'Monitoring & Alerting'],
    pricing: '$100,000 - $600,000/project',
    category: 'Real-time Data',
    popular: true,
    benefits: ['Real-time Processing', 'Scalable Architecture', 'Event-driven Design', 'Cost Efficiency', 'High Performance'],
    marketPrice: '$150,000 - $1,000,000/project',
    link: 'https://ziontechgroup.com/real-time-data-processing',
    contact: '+1 302 464 0950'
  },

  // Additional AI & Machine Learning Infrastructure
  {
    title: 'AI Model Deployment Platform',
    description: 'Production-ready AI model deployment with MLOps, monitoring, and automated scaling for enterprise applications.',
    icon: Brain,
    features: ['Model Deployment', 'MLOps Pipeline', 'Model Monitoring', 'Auto-scaling', 'A/B Testing', 'Performance Optimization'],
    pricing: '$60,000 - $300,000/project',
    category: 'AI Deployment',
    popular: true,
    benefits: ['Production-ready AI', 'Automated Operations', 'Scalable Deployment', 'Model Monitoring', 'Cost Efficiency'],
    marketPrice: '$100,000 - $500,000/project',
    link: 'https://ziontechgroup.com/ai-model-deployment-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Data Science Platform',
    description: 'Comprehensive data science platform with Jupyter notebooks, model development, and collaborative analytics.',
    icon: BarChart3,
    features: ['Jupyter Environment', 'Model Development', 'Collaborative Analytics', 'Data Visualization', 'Version Control', 'Resource Management'],
    pricing: '$40,000 - $200,000/project',
    category: 'Data Science',
    popular: true,
    benefits: ['Collaborative Environment', 'Model Development', 'Data Visualization', 'Version Control', 'Resource Efficiency'],
    marketPrice: '$65,000 - $300,000/project',
    link: 'https://ziontechgroup.com/data-science-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Training Infrastructure',
    description: 'High-performance AI training infrastructure with GPU clusters, distributed training, and model optimization.',
    icon: Cpu,
    features: ['GPU Cluster Setup', 'Distributed Training', 'Model Optimization', 'Data Pipeline', 'Resource Management', 'Performance Monitoring'],
    pricing: '$80,000 - $400,000/project',
    category: 'AI Training',
    popular: true,
    benefits: ['High Performance', 'Distributed Training', 'Model Optimization', 'Cost Efficiency', 'Scalable Infrastructure'],
    marketPrice: '$130,000 - $600,000/project',
    link: 'https://ziontechgroup.com/ai-training-infrastructure',
    contact: '+1 302 464 0950'
  },

  // Additional DevOps & Automation Services
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Infrastructure automation using Terraform, Ansible, and CloudFormation for consistent and repeatable deployments.',
    icon: Code,
    features: ['Terraform Implementation', 'Ansible Automation', 'CloudFormation Templates', 'Version Control', 'Testing & Validation', 'Documentation'],
    pricing: '$30,000 - $150,000/project',
    category: 'Infrastructure as Code',
    popular: true,
    benefits: ['Consistent Deployments', 'Version Control', 'Automation', 'Cost Reduction', 'Scalable Operations'],
    marketPrice: '$50,000 - $250,000/project',
    link: 'https://ziontechgroup.com/infrastructure-as-code',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Continuous Integration/Continuous Deployment (CI/CD)',
    description: 'Complete CI/CD pipeline implementation with automated testing, deployment, and monitoring for faster releases.',
    icon: Settings,
    features: ['CI/CD Pipeline Setup', 'Automated Testing', 'Deployment Automation', 'Quality Gates', 'Monitoring & Alerting', 'Rollback Capabilities'],
    pricing: '$25,000 - $125,000/project',
    category: 'CI/CD',
    popular: true,
    benefits: ['Faster Releases', 'Automated Testing', 'Quality Assurance', 'Reduced Risk', 'Cost Efficiency'],
    marketPrice: '$40,000 - $200,000/project',
    link: 'https://ziontechgroup.com/cicd-implementation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices architecture implementation with service mesh, API gateway, and container orchestration.',
    icon: Package,
    features: ['Microservices Design', 'Service Mesh Implementation', 'API Gateway', 'Container Orchestration', 'Service Discovery', 'Monitoring & Logging'],
    pricing: '$50,000 - $300,000/project',
    category: 'Microservices',
    popular: true,
    benefits: ['Scalable Architecture', 'Service Independence', 'Technology Diversity', 'Faster Development', 'Easier Maintenance'],
    marketPrice: '$80,000 - $500,000/project',
    link: 'https://ziontechgroup.com/microservices-architecture',
    contact: '+1 302 464 0950'
  },

  // Additional System Administration & Support
  {
    title: 'IT Infrastructure Assessment',
    description: 'Comprehensive IT infrastructure assessment with performance analysis, security evaluation, and optimization recommendations.',
    icon: Search,
    features: ['Infrastructure Analysis', 'Performance Evaluation', 'Security Assessment', 'Capacity Planning', 'Cost Analysis', 'Optimization Recommendations'],
    pricing: '$10,000 - $50,000/project',
    category: 'IT Assessment',
    popular: true,
    benefits: ['Infrastructure Insights', 'Performance Optimization', 'Security Enhancement', 'Cost Reduction', 'Strategic Planning'],
    marketPrice: '$15,000 - $80,000/project',
    link: 'https://ziontechgroup.com/it-infrastructure-assessment',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation with backup strategies and business continuity.',
    icon: Shield,
    features: ['Disaster Recovery Planning', 'Backup Strategy', 'Business Continuity', 'Recovery Testing', 'Documentation', 'Training & Support'],
    pricing: '$25,000 - $150,000/project',
    category: 'Disaster Recovery',
    popular: true,
    benefits: ['Business Continuity', 'Risk Mitigation', 'Data Protection', 'Compliance', 'Peace of Mind'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/disaster-recovery-planning',
    contact: '+1 302 464 0950'
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset management with inventory tracking, lifecycle management, and cost optimization.',
    icon: Package,
    features: ['Asset Inventory', 'Lifecycle Management', 'Cost Tracking', 'License Management', 'Depreciation Analysis', 'Procurement Support'],
    pricing: '$15,000 - $75,000/project',
    category: 'Asset Management',
    popular: true,
    benefits: ['Asset Visibility', 'Cost Optimization', 'License Compliance', 'Lifecycle Management', 'Procurement Efficiency'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/it-asset-management',
    contact: '+1 302 464 0950'
  },

  // Additional Emerging Technology Services
  {
    title: 'Augmented Reality (AR) Infrastructure',
    description: 'AR infrastructure setup and development platform for enterprise applications with cloud rendering and analytics.',
    icon: Eye,
    features: ['AR Platform Setup', 'Cloud Rendering', '3D Content Management', 'Analytics & Tracking', 'Device Management', 'Integration Services'],
    pricing: '$100,000 - $600,000/project',
    category: 'AR Infrastructure',
    popular: true,
    benefits: ['Immersive Experiences', 'Cloud Rendering', 'Scalable Platform', 'Analytics', 'Cost Efficiency'],
    marketPrice: '$150,000 - $1,000,000/project',
    link: 'https://ziontechgroup.com/ar-infrastructure',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Digital Twin Platform',
    description: 'Digital twin platform development for real-time monitoring, simulation, and optimization of physical assets.',
    icon: Monitor,
    features: ['Digital Twin Creation', 'Real-time Monitoring', 'Simulation Capabilities', 'Predictive Analytics', 'IoT Integration', 'Visualization'],
    pricing: '$150,000 - $800,000/project',
    category: 'Digital Twin',
    popular: true,
    benefits: ['Real-time Insights', 'Predictive Analytics', 'Simulation Capabilities', 'Cost Optimization', 'Enhanced Decision Making'],
    marketPrice: '$250,000 - $1,200,000/project',
    link: 'https://ziontechgroup.com/digital-twin-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Robotic Process Automation (RPA)',
    description: 'RPA implementation for automating repetitive business processes with intelligent automation and monitoring.',
    icon: Bot,
    features: ['Process Automation', 'Bot Development', 'Workflow Design', 'Integration Services', 'Monitoring & Analytics', 'Maintenance & Support'],
    pricing: '$40,000 - $200,000/project',
    category: 'RPA',
    popular: true,
    benefits: ['Process Automation', 'Cost Reduction', 'Improved Accuracy', 'Scalable Operations', 'ROI Tracking'],
    marketPrice: '$65,000 - $300,000/project',
    link: 'https://ziontechgroup.com/rpa-implementation',
    contact: '+1 302 464 0950'
  }
];

export default function ITServicesPage() {
  return (
    <>
      <Head>
        <title>IT Services & Solutions - Zion Tech Group | 70+ Comprehensive Services</title>
        <meta name="description" content="Discover 70+ comprehensive IT services from Zion Tech Group. Cloud infrastructure, cybersecurity, networking, AI/ML, DevOps, and emerging technologies. Expert solutions starting at $120/hour." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, networking, AI/ML, DevOps, quantum computing, blockchain, IoT" />
        <meta property="og:title" content="IT Services & Solutions - Zion Tech Group" />
        <meta property="og:description" content="70+ comprehensive IT services and solutions. From cloud infrastructure to quantum computing, we provide expert technology services for modern enterprises." />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
                <span className="block text-blue-400">70+ Comprehensive Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive IT services. From cloud infrastructure to quantum computing, we provide expert technology solutions for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services & Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from 70+ comprehensive IT services designed to solve complex technology challenges with expert implementation and competitive pricing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        {service.popular && (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                          <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-4">You save up to 40% vs market price</p>
                        
                        <div className="flex gap-2">
                          <a
                            href={service.link}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Learn More
                          </a>
                          <a
                            href={`tel:${service.contact}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Pricing & Value
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our IT services offer exceptional value with transparent pricing and no hidden fees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Cost Savings</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Up to 40% savings vs market rates</li>
                  <li>• No setup or hidden fees</li>
                  <li>• Transparent pricing</li>
                  <li>• Volume discounts available</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Expert Implementation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Certified professionals</li>
                  <li>• Proven methodologies</li>
                  <li>• Rapid deployment</li>
                  <li>• 24/7 support</li>
                  <li>• Training included</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Proven Results</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 99.9% uptime guarantee</li>
                  <li>• 30% cost reduction</li>
                  <li>• 50% faster deployment</li>
                  <li>• 95% customer satisfaction</li>
                  <li>• ROI within 90 days</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with our expert IT services today and experience the power of modern technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}