'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  Wifi,
  Server,
  Code,
  ShoppingCart,
  Monitor,
  Headphones,
  BarChart,
  Cpu,
  Package,
  Link as LinkIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions',
        'Security compliance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Improved code quality',
        'Automated workflows'
      ],
      category: 'DevOps',
      popular: false,
      icon: Settings
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Automated backups',
        'Expert DBA support'
      ],
      category: 'Database',
      popular: false,
      icon: Database
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement'
      ],
      category: 'Development',
      popular: false,
      icon: Smartphone
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js development',
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Content management'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times'
      ],
      category: 'Development',
      popular: false,
      icon: Globe
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Network architecture design',
        'Wireless network deployment',
        'Network security implementation',
        'Performance monitoring',
        'Disaster recovery planning',
        '24/7 network support'
      ],
      benefits: [
        'Improved network performance',
        'Enhanced security',
        'Reduced downtime',
        'Scalable infrastructure'
      ],
      category: 'Networking',
      popular: false,
      icon: Wifi
    },
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Comprehensive data center management including colocation, cloud, and hybrid solutions',
      price: '$3,000/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Data center design and setup',
        'Server and storage management',
        'Power and cooling optimization',
        'Disaster recovery solutions',
        'Compliance and security',
        '24/7 monitoring and support'
      ],
      benefits: [
        '99.99% uptime guarantee',
        'Cost optimization',
        'Scalable infrastructure',
        'Expert management'
      ],
      category: 'Data Center',
      popular: false,
      icon: Server
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations',
      price: '$200/hour',
      marketPrice: '$300-800/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Process optimization',
        'Change management'
      ],
      benefits: [
        'Strategic guidance',
        'Cost optimization',
        'Technology alignment',
        'Competitive advantage'
      ],
      category: 'Consulting',
      popular: true,
      icon: Users
    },
    {
      id: 'managed-services',
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services including monitoring, maintenance, and support',
      price: '$1,000/month',
      marketPrice: '$2000-6000/month',
      features: [
        '24/7 system monitoring',
        'Proactive maintenance',
        'Help desk support',
        'Security management',
        'Backup and recovery',
        'Software updates'
      ],
      benefits: [
        'Reduced IT costs',
        'Improved reliability',
        'Expert support',
        'Focus on core business'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Settings
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless system connectivity',
      price: '$2,000/project',
      marketPrice: '$5000-15000/project',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'API documentation',
        'Third-party integrations',
        'API security and authentication',
        'Performance optimization'
      ],
      benefits: [
        'Improved system integration',
        'Enhanced functionality',
        'Better performance',
        'Scalable architecture'
      ],
      category: 'API Development',
      popular: false,
      icon: Code
    },
    {
      id: 'ecommerce-solutions',
      name: 'E-commerce Solutions',
      description: 'Complete e-commerce platform development and optimization services',
      price: '$10,000/project',
      marketPrice: '$20000-100000/project',
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Inventory management',
        'Order processing automation',
        'Mobile commerce optimization',
        'SEO and marketing tools'
      ],
      benefits: [
        'Increased online sales',
        'Better user experience',
        'Mobile optimization',
        'Scalable platform'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart
    },
    {
      id: '5g-implementation',
      name: '5G Network Implementation',
      description: 'Complete 5G network design, deployment, and optimization for enterprise environments',
      price: '$15,000/project',
      marketPrice: '$30000-150000/project',
      features: [
        '5G network architecture design',
        'Small cell deployment',
        'Network slicing implementation',
        'Edge computing integration',
        'IoT connectivity optimization',
        'Performance monitoring',
        'Security implementation',
        'Compliance management'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'Massive IoT support',
        'Future-proof infrastructure',
        'Competitive advantage'
      ],
      category: '5G Technology',
      popular: true,
      icon: Wifi
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for real-time processing and reduced latency',
      price: '$8,000/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Edge server deployment',
        'Real-time data processing',
        'IoT device management',
        'Content delivery optimization',
        'Latency reduction',
        'Bandwidth optimization',
        'Security at the edge',
        'Monitoring and analytics'
      ],
      benefits: [
        'Reduced latency',
        'Improved performance',
        'Cost optimization',
        'Real-time processing',
        'Scalable infrastructure'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Cpu
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services',
      price: '$12,000/project',
      marketPrice: '$25000-100000/project',
      features: [
        'Smart contract development',
        'DeFi platform creation',
        'NFT marketplace development',
        'Cryptocurrency integration',
        'Web3 application development',
        'Blockchain security auditing',
        'Token economics design',
        'Decentralized app deployment'
      ],
      benefits: [
        'Decentralized solutions',
        'Enhanced security',
        'Transparent operations',
        'Future-ready technology',
        'Innovation leadership'
      ],
      category: 'Blockchain',
      popular: true,
      icon: Shield
    },
    {
      id: 'quantum-ready-infrastructure',
      name: 'Quantum-Ready Infrastructure',
      description: 'Future-proof IT infrastructure designed for quantum computing integration',
      price: '$25,000/project',
      marketPrice: '$50000-200000/project',
      features: [
        'Quantum-safe cryptography',
        'Post-quantum security',
        'Quantum network preparation',
        'Hybrid classical-quantum systems',
        'Quantum algorithm optimization',
        'Future-proof architecture',
        'Advanced encryption',
        'Quantum key distribution'
      ],
      benefits: [
        'Future-proof security',
        'Quantum advantage',
        'Advanced cryptography',
        'Competitive edge',
        'Technology leadership'
      ],
      category: 'Quantum Technology',
      popular: false,
      icon: Cpu
    },
    {
      id: 'ai-infrastructure',
      name: 'AI Infrastructure & ML Ops',
      description: 'Specialized infrastructure for AI and machine learning workloads',
      price: '$5,000/month',
      marketPrice: '$10000-40000/month',
      features: [
        'GPU cluster management',
        'ML pipeline automation',
        'Model deployment infrastructure',
        'Data processing optimization',
        'AI model monitoring',
        'Auto-scaling capabilities',
        'Distributed training',
        'Model versioning'
      ],
      benefits: [
        'Optimized AI performance',
        'Scalable ML operations',
        'Cost-effective training',
        'Automated deployment',
        'Production-ready AI'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Brain
    },
    {
      id: 'iot-platform',
      name: 'IoT Platform & Management',
      description: 'Comprehensive IoT platform development and device management solutions',
      price: '$3,500/month',
      marketPrice: '$7000-25000/month',
      features: [
        'IoT device connectivity',
        'Real-time data processing',
        'Device management platform',
        'Predictive maintenance',
        'Edge analytics',
        'Security management',
        'Scalable architecture',
        'Integration capabilities'
      ],
      benefits: [
        'Connected operations',
        'Real-time insights',
        'Predictive maintenance',
        'Operational efficiency',
        'Data-driven decisions'
      ],
      category: 'IoT',
      popular: true,
      icon: Wifi
    },
    {
      id: 'cyber-defense-matrix',
      name: 'Advanced Cyber Defense Matrix',
      description: 'Next-generation cybersecurity platform with AI-powered threat detection and response',
      price: '$4,500/month',
      marketPrice: '$8000-30000/month',
      features: [
        'AI threat detection',
        'Behavioral analytics',
        'Automated response',
        'Zero-trust architecture',
        'Threat hunting',
        'Incident response automation',
        'Security orchestration',
        'Compliance monitoring'
      ],
      benefits: [
        'Advanced threat protection',
        'Automated response',
        'Reduced security incidents',
        'Compliance assurance',
        'Peace of mind'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'digital-twin-platform',
      name: 'Digital Twin Platform',
      description: 'Comprehensive digital twin development for physical asset monitoring and optimization',
      price: '$6,500/month',
      marketPrice: '$12000-50000/month',
      features: [
        '3D asset modeling',
        'Real-time monitoring',
        'Predictive analytics',
        'Simulation capabilities',
        'Performance optimization',
        'Maintenance scheduling',
        'Data integration',
        'Visualization dashboard'
      ],
      benefits: [
        'Asset optimization',
        'Predictive maintenance',
        'Cost reduction',
        'Performance insights',
        'Operational efficiency'
      ],
      category: 'Digital Twin',
      popular: false,
      icon: Monitor
    },
    {
      id: 'metaverse-development',
      name: 'Metaverse Development Platform',
      description: 'Complete metaverse and virtual world development services',
      price: '$20,000/project',
      marketPrice: '$40000-200000/project',
      features: [
        'Virtual world creation',
        'Avatar systems',
        'Virtual economy',
        'Social features',
        'AR/VR integration',
        '3D asset creation',
        'Multi-platform support',
        'Blockchain integration'
      ],
      benefits: [
        'Immersive experiences',
        'New revenue streams',
        'Customer engagement',
        'Innovation leadership',
        'Future-ready platform'
      ],
      category: 'Metaverse',
      popular: true,
      icon: Globe
    },
    
    // Additional Advanced IT Services
    {
      id: 'quantum-infrastructure',
      name: 'Quantum Infrastructure Setup',
      description: 'Complete quantum computing infrastructure implementation and management services',
      price: '$50,000/project',
      marketPrice: '$100000-500000/project',
      features: [
        'Quantum Hardware Installation',
        'Quantum Software Integration',
        'Quantum Network Setup',
        'Quantum Security Implementation',
        'Quantum Algorithm Development',
        'Quantum Performance Optimization',
        'Quantum Maintenance',
        'Quantum Training'
      ],
      benefits: [
        'Exponential computing power',
        'Revolutionary problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      category: 'Quantum Technology',
      popular: true,
      icon: Cpu
    },
    {
      id: 'holographic-systems',
      name: 'Holographic Display Systems',
      description: 'Advanced holographic display and interaction systems for immersive business applications',
      price: '$15,000/project',
      marketPrice: '$30000-150000/project',
      features: [
        'Holographic Display Setup',
        '3D Content Creation',
        'Gesture Recognition',
        'Spatial Computing',
        'AR/VR Integration',
        'Real-time Rendering',
        'Multi-user Collaboration',
        'Custom Applications'
      ],
      benefits: [
        'Immersive user experience',
        'Enhanced productivity',
        'Cutting-edge technology',
        'Competitive differentiation'
      ],
      category: 'Holographic Technology',
      popular: true,
      icon: Eye
    },
    {
      id: 'ai-infrastructure-pro',
      name: 'AI Infrastructure Pro',
      description: 'Specialized AI infrastructure with advanced GPU clusters and ML operations',
      price: '$8,000/month',
      marketPrice: '$15000-60000/month',
      features: [
        'Advanced GPU Clusters',
        'MLOps Pipeline Setup',
        'AI Model Deployment',
        'Distributed Training',
        'Model Monitoring',
        'Auto-scaling AI Services',
        'Edge AI Integration',
        'Performance Optimization'
      ],
      benefits: [
        'Optimized AI performance',
        'Scalable ML operations',
        'Cost-effective training',
        'Production-ready AI'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Brain
    },
    {
      id: 'zero-trust-security-pro',
      name: 'Zero-Trust Security Pro',
      description: 'Advanced zero-trust security architecture with AI-powered threat protection',
      price: '$5,000/month',
      marketPrice: '$10000-40000/month',
      features: [
        'Zero-Trust Implementation',
        'AI Threat Detection',
        'Identity & Access Management',
        'Micro-segmentation',
        'Continuous Monitoring',
        'Behavioral Analytics',
        'Automated Response',
        'Compliance Management'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Continuous monitoring',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Solutions',
      description: 'Comprehensive blockchain infrastructure with enterprise-grade security and scalability',
      price: '$25,000/project',
      marketPrice: '$50000-300000/project',
      features: [
        'Enterprise Blockchain Setup',
        'Smart Contract Development',
        'DeFi Platform Creation',
        'NFT Marketplace Development',
        'Cryptocurrency Integration',
        'Web3 Application Development',
        'Blockchain Security Auditing',
        'Token Economics Design'
      ],
      benefits: [
        'Decentralized solutions',
        'Enhanced security',
        'Transparent operations',
        'Future-ready technology'
      ],
      category: 'Blockchain',
      popular: true,
      icon: Shield
    },
    {
      id: 'edge-computing-pro',
      name: 'Edge Computing Pro',
      description: 'Advanced edge computing infrastructure for ultra-low latency applications',
      price: '$12,000/month',
      marketPrice: '$25000-100000/month',
      features: [
        'Edge Server Deployment',
        'Real-time Processing',
        'IoT Device Management',
        'Content Delivery Optimization',
        'Latency Reduction',
        'Bandwidth Optimization',
        'Edge Security',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Ultra-low latency',
        'Improved performance',
        'Cost optimization',
        'Real-time processing'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Cpu
    },
    {
      id: '5g-enterprise',
      name: '5G Enterprise Solutions',
      description: 'Complete 5G network implementation for enterprise environments with advanced features',
      price: '$35,000/project',
      marketPrice: '$70000-300000/project',
      features: [
        '5G Network Architecture',
        'Small Cell Deployment',
        'Network Slicing',
        'Edge Computing Integration',
        'IoT Connectivity',
        'Performance Optimization',
        'Security Implementation',
        'Compliance Management'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'Massive IoT support',
        'Future-proof infrastructure'
      ],
      category: '5G Technology',
      popular: true,
      icon: Wifi
    },
    {
      id: 'iot-platform-pro',
      name: 'IoT Platform Pro',
      description: 'Comprehensive IoT platform with advanced analytics and device management',
      price: '$6,000/month',
      marketPrice: '$12000-50000/month',
      features: [
        'IoT Device Connectivity',
        'Real-time Data Processing',
        'Device Management Platform',
        'Predictive Maintenance',
        'Edge Analytics',
        'Security Management',
        'Scalable Architecture',
        'Integration Capabilities'
      ],
      benefits: [
        'Connected operations',
        'Real-time insights',
        'Predictive maintenance',
        'Operational efficiency'
      ],
      category: 'IoT',
      popular: true,
      icon: Wifi
    },
    {
      id: 'cyber-defense-matrix-pro',
      name: 'Cyber Defense Matrix Pro',
      description: 'Next-generation cybersecurity platform with AI-powered threat detection and response',
      price: '$8,000/month',
      marketPrice: '$15000-60000/month',
      features: [
        'AI Threat Detection',
        'Behavioral Analytics',
        'Automated Response',
        'Zero-trust Architecture',
        'Threat Hunting',
        'Incident Response Automation',
        'Security Orchestration',
        'Compliance Monitoring'
      ],
      benefits: [
        'Advanced threat protection',
        'Automated response',
        'Reduced security incidents',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'digital-twin-enterprise',
      name: 'Digital Twin Enterprise',
      description: 'Advanced digital twin platform for enterprise asset monitoring and optimization',
      price: '$15,000/month',
      marketPrice: '$30000-120000/month',
      features: [
        '3D Asset Modeling',
        'Real-time Monitoring',
        'Predictive Analytics',
        'Simulation Capabilities',
        'Performance Optimization',
        'Maintenance Scheduling',
        'Data Integration',
        'Visualization Dashboard'
      ],
      benefits: [
        'Asset optimization',
        'Predictive maintenance',
        'Cost reduction',
        'Performance insights'
      ],
      category: 'Digital Twin',
      popular: true,
      icon: Monitor
    },
    {
      id: 'metaverse-enterprise',
      name: 'Metaverse Enterprise Platform',
      description: 'Complete enterprise metaverse platform with advanced collaboration and business features',
      price: '$50,000/project',
      marketPrice: '$100000-500000/project',
      features: [
        'Virtual Office Spaces',
        'Avatar Systems',
        'Virtual Economy',
        'Business Collaboration Tools',
        'AR/VR Integration',
        '3D Asset Creation',
        'Multi-platform Support',
        'Blockchain Integration'
      ],
      benefits: [
        'Immersive collaboration',
        'New business models',
        'Enhanced engagement',
        'Innovation leadership'
      ],
      category: 'Metaverse',
      popular: true,
      icon: Globe
    },
    {
      id: 'quantum-ready-infrastructure-pro',
      name: 'Quantum-Ready Infrastructure Pro',
      description: 'Future-proof IT infrastructure designed for quantum computing integration and hybrid systems',
      price: '$40,000/project',
      marketPrice: '$80000-400000/project',
      features: [
        'Quantum-Safe Cryptography',
        'Post-Quantum Security',
        'Quantum Network Preparation',
        'Hybrid Classical-Quantum Systems',
        'Quantum Algorithm Optimization',
        'Future-Proof Architecture',
        'Advanced Encryption',
        'Quantum Key Distribution'
      ],
      benefits: [
        'Future-proof security',
        'Quantum advantage',
        'Advanced cryptography',
        'Technology leadership'
      ],
      category: 'Quantum Technology',
      popular: true,
      icon: Cpu
    },
    {
      id: 'ai-infrastructure-enterprise',
      name: 'AI Infrastructure Enterprise',
      description: 'Enterprise-grade AI infrastructure with advanced GPU clusters and ML operations',
      price: '$15,000/month',
      marketPrice: '$30000-120000/month',
      features: [
        'Enterprise GPU Clusters',
        'Advanced MLOps',
        'AI Model Deployment',
        'Distributed Training',
        'Model Monitoring',
        'Auto-scaling AI Services',
        'Edge AI Integration',
        'Performance Optimization'
      ],
      benefits: [
        'Enterprise AI performance',
        'Scalable ML operations',
        'Cost-effective training',
        'Production-ready AI'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Brain
    },
    {
      id: 'zero-trust-enterprise',
      name: 'Zero-Trust Enterprise',
      description: 'Enterprise zero-trust security architecture with advanced threat protection and compliance',
      price: '$10,000/month',
      marketPrice: '$20000-80000/month',
      features: [
        'Enterprise Zero-Trust',
        'AI Threat Detection',
        'Identity & Access Management',
        'Micro-segmentation',
        'Continuous Monitoring',
        'Behavioral Analytics',
        'Automated Response',
        'Compliance Management'
      ],
      benefits: [
        'Enterprise security posture',
        'Reduced attack surface',
        'Continuous monitoring',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'blockchain-enterprise-pro',
      name: 'Blockchain Enterprise Pro',
      description: 'Advanced blockchain infrastructure with enterprise-grade security, scalability, and compliance',
      price: '$40,000/project',
      marketPrice: '$80000-400000/project',
      features: [
        'Enterprise Blockchain Setup',
        'Advanced Smart Contracts',
        'DeFi Platform Creation',
        'NFT Marketplace Development',
        'Cryptocurrency Integration',
        'Web3 Application Development',
        'Blockchain Security Auditing',
        'Token Economics Design'
      ],
      benefits: [
        'Enterprise blockchain solutions',
        'Enhanced security',
        'Transparent operations',
        'Future-ready technology'
      ],
      category: 'Blockchain',
      popular: true,
      icon: Shield
    },
    {
      id: 'edge-computing-enterprise',
      name: 'Edge Computing Enterprise',
      description: 'Enterprise edge computing infrastructure for ultra-low latency and high-performance applications',
      price: '$20,000/month',
      marketPrice: '$40000-200000/month',
      features: [
        'Enterprise Edge Servers',
        'Real-time Processing',
        'IoT Device Management',
        'Content Delivery Optimization',
        'Latency Reduction',
        'Bandwidth Optimization',
        'Edge Security',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Ultra-low latency',
        'Enterprise performance',
        'Cost optimization',
        'Real-time processing'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Cpu
    },
    {
      id: '5g-enterprise-pro',
      name: '5G Enterprise Pro',
      description: 'Advanced 5G network implementation for enterprise environments with cutting-edge features',
      price: '$60,000/project',
      marketPrice: '$120000-600000/project',
      features: [
        'Advanced 5G Architecture',
        'Small Cell Deployment',
        'Network Slicing',
        'Edge Computing Integration',
        'IoT Connectivity',
        'Performance Optimization',
        'Security Implementation',
        'Compliance Management'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'Massive IoT support',
        'Future-proof infrastructure'
      ],
      category: '5G Technology',
      popular: true,
      icon: Wifi
    },
    {
      id: 'iot-platform-enterprise',
      name: 'IoT Platform Enterprise',
      description: 'Enterprise IoT platform with advanced analytics, device management, and security',
      price: '$12,000/month',
      marketPrice: '$25000-100000/month',
      features: [
        'Enterprise IoT Connectivity',
        'Real-time Data Processing',
        'Device Management Platform',
        'Predictive Maintenance',
        'Edge Analytics',
        'Security Management',
        'Scalable Architecture',
        'Integration Capabilities'
      ],
      benefits: [
        'Enterprise connected operations',
        'Real-time insights',
        'Predictive maintenance',
        'Operational efficiency'
      ],
      category: 'IoT',
      popular: true,
      icon: Wifi
    },
    {
      id: 'cyber-defense-enterprise',
      name: 'Cyber Defense Enterprise',
      description: 'Enterprise cybersecurity platform with AI-powered threat detection and automated response',
      price: '$15,000/month',
      marketPrice: '$30000-120000/month',
      features: [
        'Enterprise AI Threat Detection',
        'Behavioral Analytics',
        'Automated Response',
        'Zero-trust Architecture',
        'Threat Hunting',
        'Incident Response Automation',
        'Security Orchestration',
        'Compliance Monitoring'
      ],
      benefits: [
        'Enterprise threat protection',
        'Automated response',
        'Reduced security incidents',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'digital-twin-enterprise-pro',
      name: 'Digital Twin Enterprise Pro',
      description: 'Advanced enterprise digital twin platform with AI-powered monitoring and optimization',
      price: '$25,000/month',
      marketPrice: '$50000-200000/month',
      features: [
        'Advanced 3D Asset Modeling',
        'Real-time Monitoring',
        'AI Predictive Analytics',
        'Simulation Capabilities',
        'Performance Optimization',
        'Maintenance Scheduling',
        'Data Integration',
        'Visualization Dashboard'
      ],
      benefits: [
        'Advanced asset optimization',
        'AI-powered maintenance',
        'Cost reduction',
        'Performance insights'
      ],
      category: 'Digital Twin',
      popular: true,
      icon: Monitor
    },
    {
      id: 'metaverse-enterprise-pro',
      name: 'Metaverse Enterprise Pro',
      description: 'Complete enterprise metaverse platform with advanced AI-powered collaboration and business features',
      price: '$100,000/project',
      marketPrice: '$200000-1000000/project',
      features: [
        'AI-Powered Virtual Offices',
        'Advanced Avatar Systems',
        'Virtual Economy',
        'AI Business Collaboration',
        'AR/VR Integration',
        '3D Asset Creation',
        'Multi-platform Support',
        'Blockchain Integration'
      ],
      benefits: [
        'AI-powered collaboration',
        'Advanced business models',
        'Enhanced engagement',
        'Innovation leadership'
      ],
      category: 'Metaverse',
      popular: true,
      icon: Globe
    },
    {
      id: 'quantum-infrastructure-enterprise',
      name: 'Quantum Infrastructure Enterprise',
      description: 'Enterprise quantum computing infrastructure with advanced security and hybrid systems',
      price: '$100,000/project',
      marketPrice: '$200000-1000000/project',
      features: [
        'Enterprise Quantum Hardware',
        'Quantum Software Integration',
        'Quantum Network Setup',
        'Quantum Security Implementation',
        'Quantum Algorithm Development',
        'Quantum Performance Optimization',
        'Quantum Maintenance',
        'Quantum Training'
      ],
      benefits: [
        'Enterprise quantum computing',
        'Revolutionary problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      category: 'Quantum Technology',
      popular: true,
      icon: Cpu
    },
    {
      id: 'holographic-enterprise',
      name: 'Holographic Enterprise Systems',
      description: 'Enterprise holographic display and interaction systems for immersive business applications',
      price: '$75,000/project',
      marketPrice: '$150000-750000/project',
      features: [
        'Enterprise Holographic Displays',
        '3D Content Creation',
        'Gesture Recognition',
        'Spatial Computing',
        'AR/VR Integration',
        'Real-time Rendering',
        'Multi-user Collaboration',
        'Custom Applications'
      ],
      benefits: [
        'Enterprise immersive experience',
        'Enhanced productivity',
        'Cutting-edge technology',
        'Competitive differentiation'
      ],
      category: 'Holographic Technology',
      popular: true,
      icon: Eye
    },
    {
      id: 'ai-infrastructure-ultra',
      name: 'AI Infrastructure Ultra',
      description: 'Ultra-advanced AI infrastructure with cutting-edge GPU clusters and ML operations',
      price: '$25,000/month',
      marketPrice: '$50000-200000/month',
      features: [
        'Ultra-Advanced GPU Clusters',
        'Advanced MLOps',
        'AI Model Deployment',
        'Distributed Training',
        'Model Monitoring',
        'Auto-scaling AI Services',
        'Edge AI Integration',
        'Performance Optimization'
      ],
      benefits: [
        'Ultra-advanced AI performance',
        'Scalable ML operations',
        'Cost-effective training',
        'Production-ready AI'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Brain
    },
    {
      id: 'zero-trust-ultra',
      name: 'Zero-Trust Ultra',
      description: 'Ultra-advanced zero-trust security architecture with AI-powered threat protection',
      price: '$20,000/month',
      marketPrice: '$40000-160000/month',
      features: [
        'Ultra-Advanced Zero-Trust',
        'AI Threat Detection',
        'Identity & Access Management',
        'Micro-segmentation',
        'Continuous Monitoring',
        'Behavioral Analytics',
        'Automated Response',
        'Compliance Management'
      ],
      benefits: [
        'Ultra-advanced security posture',
        'Reduced attack surface',
        'Continuous monitoring',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'blockchain-ultra',
      name: 'Blockchain Ultra',
      description: 'Ultra-advanced blockchain infrastructure with enterprise-grade security and scalability',
      price: '$75,000/project',
      marketPrice: '$150000-750000/project',
      features: [
        'Ultra-Advanced Blockchain Setup',
        'Advanced Smart Contracts',
        'DeFi Platform Creation',
        'NFT Marketplace Development',
        'Cryptocurrency Integration',
        'Web3 Application Development',
        'Blockchain Security Auditing',
        'Token Economics Design'
      ],
      benefits: [
        'Ultra-advanced blockchain solutions',
        'Enhanced security',
        'Transparent operations',
        'Future-ready technology'
      ],
      category: 'Blockchain',
      popular: true,
      icon: Shield
    },
    {
      id: 'edge-computing-ultra',
      name: 'Edge Computing Ultra',
      description: 'Ultra-advanced edge computing infrastructure for ultra-low latency applications',
      price: '$30,000/month',
      marketPrice: '$60000-300000/month',
      features: [
        'Ultra-Advanced Edge Servers',
        'Real-time Processing',
        'IoT Device Management',
        'Content Delivery Optimization',
        'Latency Reduction',
        'Bandwidth Optimization',
        'Edge Security',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Ultra-low latency',
        'Ultra-advanced performance',
        'Cost optimization',
        'Real-time processing'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Cpu
    },
    {
      id: '5g-ultra',
      name: '5G Ultra',
      description: 'Ultra-advanced 5G network implementation with cutting-edge features and capabilities',
      price: '$100,000/project',
      marketPrice: '$200000-1000000/project',
      features: [
        'Ultra-Advanced 5G Architecture',
        'Small Cell Deployment',
        'Network Slicing',
        'Edge Computing Integration',
        'IoT Connectivity',
        'Performance Optimization',
        'Security Implementation',
        'Compliance Management'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'Massive IoT support',
        'Future-proof infrastructure'
      ],
      category: '5G Technology',
      popular: true,
      icon: Wifi
    },
    {
      id: 'iot-platform-ultra',
      name: 'IoT Platform Ultra',
      description: 'Ultra-advanced IoT platform with cutting-edge analytics and device management',
      price: '$20,000/month',
      marketPrice: '$40000-200000/month',
      features: [
        'Ultra-Advanced IoT Connectivity',
        'Real-time Data Processing',
        'Device Management Platform',
        'Predictive Maintenance',
        'Edge Analytics',
        'Security Management',
        'Scalable Architecture',
        'Integration Capabilities'
      ],
      benefits: [
        'Ultra-advanced connected operations',
        'Real-time insights',
        'Predictive maintenance',
        'Operational efficiency'
      ],
      category: 'IoT',
      popular: true,
      icon: Wifi
    },
    {
      id: 'cyber-defense-ultra',
      name: 'Cyber Defense Ultra',
      description: 'Ultra-advanced cybersecurity platform with AI-powered threat detection and response',
      price: '$25,000/month',
      marketPrice: '$50000-200000/month',
      features: [
        'Ultra-Advanced AI Threat Detection',
        'Behavioral Analytics',
        'Automated Response',
        'Zero-trust Architecture',
        'Threat Hunting',
        'Incident Response Automation',
        'Security Orchestration',
        'Compliance Monitoring'
      ],
      benefits: [
        'Ultra-advanced threat protection',
        'Automated response',
        'Reduced security incidents',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'digital-twin-ultra',
      name: 'Digital Twin Ultra',
      description: 'Ultra-advanced digital twin platform with AI-powered monitoring and optimization',
      price: '$40,000/month',
      marketPrice: '$80000-400000/month',
      features: [
        'Ultra-Advanced 3D Asset Modeling',
        'Real-time Monitoring',
        'AI Predictive Analytics',
        'Simulation Capabilities',
        'Performance Optimization',
        'Maintenance Scheduling',
        'Data Integration',
        'Visualization Dashboard'
      ],
      benefits: [
        'Ultra-advanced asset optimization',
        'AI-powered maintenance',
        'Cost reduction',
        'Performance insights'
      ],
      category: 'Digital Twin',
      popular: true,
      icon: Monitor
    },
    {
      id: 'metaverse-ultra',
      name: 'Metaverse Ultra',
      description: 'Ultra-advanced metaverse platform with cutting-edge AI-powered collaboration and business features',
      price: '$200,000/project',
      marketPrice: '$400000-2000000/project',
      features: [
        'Ultra-Advanced AI Virtual Offices',
        'Advanced Avatar Systems',
        'Virtual Economy',
        'AI Business Collaboration',
        'AR/VR Integration',
        '3D Asset Creation',
        'Multi-platform Support',
        'Blockchain Integration'
      ],
      benefits: [
        'Ultra-advanced AI collaboration',
        'Advanced business models',
        'Enhanced engagement',
        'Innovation leadership'
      ],
      category: 'Metaverse',
      popular: true,
      icon: Globe
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud', name: 'Cloud', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'DevOps', name: 'DevOps', count: services.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: services.filter(s => s.category === 'Database').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Networking', name: 'Networking', count: services.filter(s => s.category === 'Networking').length },
    { id: 'Data Center', name: 'Data Center', count: services.filter(s => s.category === 'Data Center').length },
    { id: 'Consulting', name: 'Consulting', count: services.filter(s => s.category === 'Consulting').length },
    { id: 'Managed Services', name: 'Managed Services', count: services.filter(s => s.category === 'Managed Services').length },
    { id: 'API Development', name: 'API Development', count: services.filter(s => s.category === 'API Development').length },
    { id: 'E-commerce', name: 'E-commerce', count: services.filter(s => s.category === 'E-commerce').length },
    { id: '5G Technology', name: '5G Technology', count: services.filter(s => s.category === '5G Technology').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: 'Blockchain', name: 'Blockchain', count: services.filter(s => s.category === 'Blockchain').length },
    { id: 'Quantum Technology', name: 'Quantum Technology', count: services.filter(s => s.category === 'Quantum Technology').length },
    { id: 'AI Infrastructure', name: 'AI Infrastructure', count: services.filter(s => s.category === 'AI Infrastructure').length },
    { id: 'IoT', name: 'IoT', count: services.filter(s => s.category === 'IoT').length },
    { id: 'Digital Twin', name: 'Digital Twin', count: services.filter(s => s.category === 'Digital Twin').length },
    { id: 'Metaverse', name: 'Metaverse', count: services.filter(s => s.category === 'Metaverse').length },
    { id: 'Holographic Technology', name: 'Holographic Technology', count: services.filter(s => s.category === 'Holographic Technology').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and custom software development." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database management, software development" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Modernize your IT infrastructure with our comprehensive solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Modernize Your Technology Infrastructure
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From cloud migration to cybersecurity, our comprehensive IT services help you build, 
              secure, and optimize your technology infrastructure for maximum performance and growth.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our IT experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how we can transform your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
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

export default ItServicesPage;