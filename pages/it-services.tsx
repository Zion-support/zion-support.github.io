<<<<<<< HEAD
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

  // NEW INNOVATIVE IT SERVICES - 2024/2025
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations center with AI-driven monitoring, automated incident response, and predictive maintenance for IT infrastructure.',
    icon: Brain,
    features: ['AI-Driven Monitoring', 'Automated Incident Response', 'Predictive Maintenance', 'Self-Healing Systems', 'Intelligent Alerting', 'Performance Optimization'],
    pricing: '$15,000 - $75,000/month',
    category: 'AI Operations',
    popular: true,
    benefits: ['99.9% Uptime', 'Reduced Downtime', 'Automated Operations', 'Cost Efficiency', 'Proactive Management'],
    marketPrice: '$25,000 - $120,000/month',
    link: 'https://ziontechgroup.com/ai-powered-it-operations-center',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Quantum-Safe Cybersecurity Solutions',
    description: 'Next-generation cybersecurity solutions designed to protect against quantum computing threats with post-quantum cryptography.',
    icon: Shield,
    features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Advanced Threat Detection', 'Zero-Trust Architecture', 'Compliance Management', 'Future-Proof Security'],
    pricing: '$50,000 - $300,000/project',
    category: 'Quantum Security',
    popular: true,
    benefits: ['Future-Proof Security', 'Quantum Resistance', 'Advanced Protection', 'Compliance Ready', 'Long-term Investment'],
    marketPrice: '$80,000 - $500,000/project',
    link: 'https://ziontechgroup.com/quantum-safe-cybersecurity-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing infrastructure for ultra-low latency applications, IoT processing, and real-time data analytics.',
    icon: Wifi,
    features: ['Edge Node Deployment', 'Ultra-Low Latency', 'IoT Processing', 'Real-time Analytics', 'Global Distribution', 'Bandwidth Optimization'],
    pricing: '$75,000 - $400,000/project',
    category: 'Edge Computing',
    popular: true,
    benefits: ['Ultra-Low Latency', 'Global Coverage', 'IoT Ready', 'Cost Efficiency', 'Scalable Architecture'],
    marketPrice: '$120,000 - $650,000/project',
    link: 'https://ziontechgroup.com/edge-computing-infrastructure',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Comprehensive blockchain infrastructure including node management, smart contract deployment, and decentralized application hosting.',
    icon: Database,
    features: ['Node Management', 'Smart Contract Deployment', 'DApp Hosting', 'Consensus Management', 'Security Auditing', 'Performance Monitoring'],
    pricing: '$25,000 - $150,000/project',
    category: 'Blockchain',
    popular: true,
    benefits: ['Decentralized Architecture', 'Enhanced Security', 'Transparency', 'Cost Efficiency', 'Future-Proof Technology'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/blockchain-infrastructure-services',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered IT Asset Management',
    description: 'Intelligent IT asset management platform with automated discovery, lifecycle management, and cost optimization using AI.',
    icon: Package,
    features: ['Automated Discovery', 'Lifecycle Management', 'Cost Optimization', 'Compliance Tracking', 'Performance Monitoring', 'Predictive Analytics'],
    pricing: '$10,000 - $50,000/project',
    category: 'Asset Management',
    popular: true,
    benefits: ['Cost Reduction', 'Better Visibility', 'Compliance', 'Optimized Utilization', 'Automated Management'],
    marketPrice: '$15,000 - $80,000/project',
    link: 'https://ziontechgroup.com/ai-powered-it-asset-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Building IT Integration',
    description: 'Comprehensive IT integration for smart buildings including IoT sensors, energy management, and automated building systems.',
    icon: Building,
    features: ['IoT Sensor Integration', 'Energy Management', 'Automated Systems', 'Occupancy Analytics', 'Climate Control', 'Security Integration'],
    pricing: '$100,000 - $500,000/project',
    category: 'Smart Buildings',
    popular: true,
    benefits: ['Energy Savings', 'Operational Efficiency', 'Cost Reduction', 'Enhanced Comfort', 'Sustainability'],
    marketPrice: '$150,000 - $800,000/project',
    link: 'https://ziontechgroup.com/smart-building-it-integration',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing infrastructure setup including quantum processors, quantum networks, and hybrid classical-quantum systems.',
    icon: Cpu,
    features: ['Quantum Processor Setup', 'Quantum Networks', 'Hybrid Systems', 'Quantum Algorithms', 'Error Correction', 'Performance Optimization'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Exponential Computing Power', 'Breakthrough Capabilities', 'Future-Proof Technology', 'Competitive Advantage', 'Research Enablement'],
    marketPrice: '$800,000 - $8,000,000/project',
    link: 'https://ziontechgroup.com/quantum-computing-infrastructure',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Space Technology IT Solutions',
    description: 'Specialized IT solutions for space technology including satellite ground stations, space data processing, and mission control systems.',
    icon: Rocket,
    features: ['Satellite Ground Stations', 'Space Data Processing', 'Mission Control Systems', 'Telemetry Processing', 'Orbital Mechanics', 'Space Weather Monitoring'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Space Technology',
    popular: true,
    benefits: ['Space Mission Support', 'Advanced Capabilities', 'Cutting-Edge Technology', 'Research Enablement', 'Commercial Space'],
    marketPrice: '$300,000 - $3,000,000/project',
    link: 'https://ziontechgroup.com/space-technology-it-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Metaverse Infrastructure Platform',
    description: 'Comprehensive IT infrastructure for metaverse applications including virtual worlds, avatar systems, and immersive experiences.',
    icon: Globe,
    features: ['Virtual World Hosting', 'Avatar Systems', 'Immersive Experiences', 'Real-time Rendering', 'Blockchain Integration', 'Cross-Platform Support'],
    pricing: '$75,000 - $400,000/project',
    category: 'Metaverse',
    popular: true,
    benefits: ['Immersive Experiences', 'Virtual Commerce', 'Social Interaction', 'Scalable Platform', 'Future Technology'],
    marketPrice: '$120,000 - $650,000/project',
    link: 'https://ziontechgroup.com/metaverse-infrastructure-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered IT Service Desk',
    description: 'Intelligent IT service desk with AI-powered ticket routing, automated resolution, and predictive problem prevention.',
    icon: Users,
    features: ['AI Ticket Routing', 'Automated Resolution', 'Predictive Prevention', 'Knowledge Management', 'Self-Service Portal', 'Performance Analytics'],
    pricing: '$5,000 - $25,000/month',
    category: 'Service Desk',
    popular: true,
    benefits: ['Faster Resolution', 'Reduced Costs', 'Better User Experience', 'Proactive Support', 'Automated Operations'],
    marketPrice: '$8,000 - $40,000/month',
    link: 'https://ziontechgroup.com/ai-powered-it-service-desk',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT solutions focused on energy efficiency, carbon footprint reduction, and environmentally responsible technology practices.',
    icon: TreePine,
    features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers', 'Renewable Energy', 'Environmental Monitoring'],
    pricing: '$30,000 - $200,000/project',
    category: 'Green IT',
    popular: true,
    benefits: ['Environmental Responsibility', 'Cost Savings', 'Compliance', 'Brand Enhancement', 'Sustainability Goals'],
    marketPrice: '$50,000 - $300,000/project',
    link: 'https://ziontechgroup.com/green-it-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Digital Twin IT Platform',
    description: 'Comprehensive digital twin platform for creating virtual replicas of physical assets, processes, and systems with real-time monitoring.',
    icon: Monitor,
    features: ['Virtual Asset Creation', 'Real-time Monitoring', 'Predictive Modeling', 'Simulation Capabilities', 'IoT Integration', '3D Visualization'],
    pricing: '$100,000 - $600,000/project',
    category: 'Digital Twin',
    popular: true,
    benefits: ['Asset Optimization', 'Predictive Maintenance', 'Risk Reduction', 'Better Planning', 'Innovation Enablement'],
    marketPrice: '$150,000 - $900,000/project',
    link: 'https://ziontechgroup.com/digital-twin-it-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Autonomous IT Operations',
    description: 'Fully autonomous IT operations platform with self-healing systems, automated scaling, and intelligent resource management.',
    icon: Settings,
    features: ['Self-Healing Systems', 'Automated Scaling', 'Intelligent Resource Management', 'Predictive Maintenance', 'Automated Deployment', 'Performance Optimization'],
    pricing: '$50,000 - $250,000/project',
    category: 'Autonomous IT',
    popular: true,
    benefits: ['Zero-Touch Operations', 'Cost Reduction', 'Improved Reliability', 'Scalable Management', 'Future-Proof Architecture'],
    marketPrice: '$80,000 - $400,000/project',
    link: 'https://ziontechgroup.com/autonomous-it-operations',
    contact: '+1 302 464 0950'
  },
  {
    title: '5G Network Infrastructure',
    description: 'Complete 5G network infrastructure including core network, edge computing, and IoT connectivity for ultra-fast wireless communications.',
    icon: Network,
    features: ['5G Core Network', 'Edge Computing', 'IoT Connectivity', 'Network Slicing', 'Ultra-Low Latency', 'Massive IoT Support'],
    pricing: '$200,000 - $1,500,000/project',
    category: '5G Networks',
    popular: true,
    benefits: ['Ultra-Fast Speeds', 'Low Latency', 'IoT Ready', 'Future-Proof Technology', 'Enhanced Connectivity'],
    marketPrice: '$300,000 - $2,500,000/project',
    link: 'https://ziontechgroup.com/5g-network-infrastructure',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered IT Security Operations',
    description: 'Advanced IT security operations center with AI-driven threat detection, automated response, and continuous security monitoring.',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', 'Continuous Monitoring', 'Behavioral Analysis', 'Threat Intelligence', 'Incident Management'],
    pricing: '$25,000 - $125,000/month',
    category: 'Security Operations',
    popular: true,
    benefits: ['Enhanced Security', 'Faster Response', 'Proactive Protection', 'Cost Efficiency', 'Compliance Assurance'],
    marketPrice: '$40,000 - $200,000/month',
    link: 'https://ziontechgroup.com/ai-powered-it-security-operations',
    contact: '+1 302 464 0950'
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  Code, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Layout from './components/Layout';

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
    price: "Starting at $1,800/month"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: Shield,
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Zero-Trust Architecture",
      "Compliance & Risk Management",
      "Incident Response",
      "Security Training"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes",
    icon: Zap,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Performance Optimization",
      "Automated Testing",
      "Deployment Automation"
    ],
    price: "Starting at $1,500/month"
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
    price: "Starting at $1,200/month"
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
    price: "Starting at $1,000/month"
  },
  {
    title: "System Administration",
    description: "Comprehensive system management and maintenance",
    icon: Server,
    features: [
      "Server Setup & Configuration",
      "System Monitoring",
      "User Management",
      "Backup Solutions",
      "Performance Optimization",
      "24/7 System Support"
    ],
    price: "Starting at $800/month"
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
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
  }
];

export default function ITServicesPage() {
  return (
<<<<<<< HEAD
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
=======
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
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
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
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
  );
}