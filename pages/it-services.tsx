import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Phone, Mail, LinkIcon, TestTube, Wrench } from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    id: 1,
    title: 'IT Infrastructure Management',
    description: 'Comprehensive IT infrastructure setup, monitoring, and maintenance.',
    icon: Cpu,
    features: ['Network Setup', 'Server Management', 'Cloud Migration', '24/7 Monitoring']
  },
  {
    id: 2,
    title: 'Cybersecurity Solutions',
    description: 'Protect your business with advanced security measures and protocols.',
    icon: Shield,
    features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance']
  },
  {
    id: 3,
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for modern business needs.',
    icon: Cloud,
<<<<<<< HEAD
    features: ['Multi-Cloud Management', 'Resource Optimization', 'Cost Management', 'Security Controls'],
    pricing: '$2,999 - $11,999/month',
    category: 'Cloud Management',
    benefits: ['Unified Operations', 'Cost Optimization', 'Flexible Deployment', 'Enhanced Security'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/hybrid-cloud',
    popular: false
  },
  {
    title: 'Advanced Analytics & Business Intelligence',
    description: 'Comprehensive analytics platform with real-time insights and predictive capabilities.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Modeling', 'Data Visualization', 'Business Intelligence'],
    pricing: '$2,499 - $9,999/month',
    category: 'Analytics Platform',
    benefits: ['Data-Driven Insights', 'Predictive Capabilities', 'Real-time Monitoring', 'Business Intelligence'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/advanced-analytics',
    popular: false
  },
  {
    title: 'IT Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery solutions ensuring business continuity and data protection.',
    icon: Shield,
    features: ['Backup Solutions', 'Recovery Planning', 'Business Continuity', 'Data Protection'],
    pricing: '$1,999 - $7,999/month',
    category: 'Disaster Recovery',
    benefits: ['Business Continuity', 'Data Protection', 'Minimal Downtime', 'Risk Mitigation'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/disaster-recovery',
    popular: false
  },
  {
    title: 'AI-Powered Network Security Operations Center (SOC)',
    description: 'Advanced 24/7 security monitoring with AI-driven threat detection and automated response.',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', '24/7 Monitoring', 'Incident Management'],
    pricing: '$8,999 - $24,999/month',
    category: 'Security Operations',
    benefits: ['Proactive Threat Detection', 'Reduced Response Time', 'Enhanced Security Posture', 'Cost Optimization'],
    marketPrice: '$12,000 - $35,000/month',
    link: 'https://ziontechgroup.com/ai-soc',
    popular: true
  },
  {
    title: 'Quantum Computing Infrastructure Setup',
    description: 'Complete quantum computing infrastructure deployment and optimization for advanced computing needs.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Quantum Software Stack', 'Hybrid Computing', 'Quantum Algorithms'],
    pricing: '$19,999 - $99,999/month',
    category: 'Quantum Computing',
    benefits: ['Exponential Computing Power', 'Advanced Problem Solving', 'Competitive Advantage', 'Future-Ready Infrastructure'],
    marketPrice: '$25,000 - $150,000/month',
    link: 'https://ziontechgroup.com/quantum-infrastructure',
    popular: true
  },
  {
    title: 'Edge AI Computing Platform',
    description: 'Distributed AI computing infrastructure for real-time processing and low-latency applications.',
    icon: Brain,
    features: ['Edge AI Deployment', 'Real-time Processing', 'Low Latency', 'Distributed Computing'],
    pricing: '$4,999 - $19,999/month',
    category: 'Edge AI',
    benefits: ['Ultra-Low Latency', 'Real-time AI Processing', 'Reduced Bandwidth Costs', 'Enhanced Privacy'],
    marketPrice: '$7,000 - $30,000/month',
    link: 'https://ziontechgroup.com/edge-ai',
    popular: true
  },
  {
    title: 'Autonomous IT Operations (AIOps)',
    description: 'Fully automated IT operations with self-healing systems and predictive maintenance.',
    icon: Settings,
    features: ['Self-Healing Systems', 'Predictive Maintenance', 'Automated Remediation', 'Intelligent Monitoring'],
    pricing: '$6,999 - $22,999/month',
    category: 'AIOps',
    benefits: ['99.9% Uptime', 'Reduced Manual Intervention', 'Predictive Problem Solving', 'Cost Optimization'],
    marketPrice: '$10,000 - $35,000/month',
    link: 'https://ziontechgroup.com/aiops',
    popular: true
  },
  {
    title: 'Digital Twin Technology Platform',
    description: 'Create digital replicas of physical systems for simulation, monitoring, and optimization.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'IoT Integration'],
    pricing: '$7,999 - $29,999/month',
    category: 'Digital Twin',
    benefits: ['Improved Decision Making', 'Predictive Maintenance', 'Cost Optimization', 'Risk Reduction'],
    marketPrice: '$12,000 - $45,000/month',
    link: 'https://ziontechgroup.com/digital-twin',
    popular: false
  },
  {
    title: 'Neuromorphic Computing Infrastructure',
    description: 'Brain-inspired computing systems for ultra-efficient AI processing and pattern recognition.',
    icon: Brain,
    features: ['Neuromorphic Chips', 'Spiking Neural Networks', 'Ultra-Low Power', 'Pattern Recognition'],
    pricing: '$12,999 - $49,999/month',
    category: 'Neuromorphic Computing',
    benefits: ['Ultra-Efficient Processing', 'Advanced Pattern Recognition', 'Low Power Consumption', 'Real-time Learning'],
    marketPrice: '$18,000 - $75,000/month',
    link: 'https://ziontechgroup.com/neuromorphic',
    popular: false
  },
  {
    title: '6G Network Infrastructure & Testing',
    description: 'Next-generation 6G network deployment and optimization for ultra-high-speed connectivity.',
    icon: Wifi,
    features: ['6G Network Design', 'Ultra-High Speed', 'Low Latency', 'Massive IoT Support'],
    pricing: '$24,999 - $99,999/month',
    category: '6G Networks',
    benefits: ['Ultra-Fast Connectivity', 'Revolutionary Speeds', 'Future-Ready Infrastructure', 'Advanced Applications'],
    marketPrice: '$35,000 - $150,000/month',
    link: 'https://ziontechgroup.com/6g-networks',
    popular: true
  },
  {
    title: 'Holographic Computing Platform',
    description: 'Advanced holographic display and computing systems for immersive experiences.',
    icon: Monitor,
    features: ['Holographic Displays', '3D Computing', 'Immersive Interfaces', 'Spatial Computing'],
    pricing: '$15,999 - $59,999/month',
    category: 'Holographic Computing',
    benefits: ['Immersive Experiences', 'Advanced Visualization', 'Spatial Computing', 'Next-Gen Interfaces'],
    marketPrice: '$22,000 - $90,000/month',
    link: 'https://ziontechgroup.com/holographic',
    popular: false
  },
  {
    title: 'Biometric Security & Authentication',
    description: 'Advanced biometric authentication systems with multi-modal recognition capabilities.',
    icon: Shield,
    features: ['Multi-Modal Biometrics', 'Behavioral Analysis', 'Anti-Spoofing', 'Privacy Protection'],
    pricing: '$3,999 - $14,999/month',
    category: 'Biometric Security',
    benefits: ['Enhanced Security', 'User Convenience', 'Fraud Prevention', 'Privacy Compliance'],
    marketPrice: '$6,000 - $22,000/month',
    link: 'https://ziontechgroup.com/biometric-security',
    popular: true
  },
  {
    title: 'Space-Based Computing Infrastructure',
    description: 'Satellite-based computing and data processing for global coverage and edge computing.',
    icon: Globe,
    features: ['Satellite Computing', 'Global Coverage', 'Edge Processing', 'Low Earth Orbit'],
    pricing: '$29,999 - $149,999/month',
    category: 'Space Computing',
    benefits: ['Global Coverage', 'Low Latency', 'Disaster Resilience', 'Edge Computing'],
    marketPrice: '$45,000 - $200,000/month',
    link: 'https://ziontechgroup.com/space-computing',
    popular: false
  },
  {
    title: 'Molecular Computing Platform',
    description: 'Revolutionary molecular-level computing for ultra-dense data processing and storage.',
    icon: Cpu,
    features: ['Molecular Processors', 'DNA Storage', 'Ultra-Dense Computing', 'Quantum Integration'],
    pricing: '$39,999 - $199,999/month',
    category: 'Molecular Computing',
    benefits: ['Ultra-Dense Processing', 'Revolutionary Storage', 'Energy Efficiency', 'Future Technology'],
    marketPrice: '$60,000 - $300,000/month',
    link: 'https://ziontechgroup.com/molecular-computing',
    popular: false
  },
  {
    title: 'Swarm Intelligence Systems',
    description: 'Distributed AI systems using swarm intelligence for complex problem solving and optimization.',
    icon: Network,
    features: ['Swarm Algorithms', 'Distributed AI', 'Collective Intelligence', 'Self-Organization'],
    pricing: '$5,999 - $22,999/month',
    category: 'Swarm Intelligence',
    benefits: ['Collective Problem Solving', 'Scalable Intelligence', 'Fault Tolerance', 'Emergent Behavior'],
    marketPrice: '$9,000 - $35,000/month',
    link: 'https://ziontechgroup.com/swarm-intelligence',
    popular: false
  },
  {
    title: 'Optical Computing Infrastructure',
    description: 'Light-based computing systems for ultra-fast processing and data transmission.',
    icon: Zap,
    features: ['Optical Processors', 'Light-Based Computing', 'Ultra-Fast Processing', 'Low Heat Generation'],
    pricing: '$8,999 - $34,999/month',
    category: 'Optical Computing',
    benefits: ['Ultra-Fast Processing', 'Low Power Consumption', 'High Bandwidth', 'Future Technology'],
    marketPrice: '$13,000 - $50,000/month',
    link: 'https://ziontechgroup.com/optical-computing',
    popular: false
  },
  {
    title: 'Federated Learning Platform',
    description: 'Distributed machine learning platform that preserves data privacy while enabling collaborative AI.',
    icon: Brain,
    features: ['Privacy-Preserving ML', 'Distributed Training', 'Federated Analytics', 'Secure Aggregation'],
    pricing: '$4,999 - $19,999/month',
    category: 'Federated Learning',
    benefits: ['Data Privacy', 'Collaborative AI', 'Regulatory Compliance', 'Distributed Intelligence'],
    marketPrice: '$7,500 - $30,000/month',
    link: 'https://ziontechgroup.com/federated-learning',
    popular: true
  },
  {
    title: 'Advanced Network Security Implementation',
    description: 'Comprehensive network security solutions with advanced threat protection and monitoring.',
    icon: Network,
    features: ['Firewall Management', 'Intrusion Detection', 'Threat Prevention', 'Network Monitoring'],
    pricing: '$2,999 - $11,999/month',
    category: 'Network Security',
    benefits: ['Enhanced Protection', 'Threat Prevention', 'Network Monitoring', 'Compliance Ready'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/network-security',
    popular: false
  },
  {
    title: 'IT Compliance & Regulatory Services',
    description: 'Comprehensive compliance management for various industry regulations and standards.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Audit Support', 'Regulatory Updates', 'Documentation Management'],
    pricing: '$1,999 - $7,999/month',
    category: 'IT Compliance',
    benefits: ['Regulatory Compliance', 'Audit Support', 'Risk Mitigation', 'Documentation Management'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/it-compliance',
    popular: false
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic consulting services for digital transformation and technology modernization.',
    icon: Rocket,
    features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'Implementation Planning'],
    pricing: '$4,999 - $19,999/month',
    category: 'Digital Transformation',
    benefits: ['Strategic Guidance', 'Technology Modernization', 'Change Management', 'Competitive Advantage'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/digital-transformation',
    popular: true
  },
  {
    title: 'IT Asset Management & Optimization',
    description: 'Comprehensive IT asset management with optimization and lifecycle management.',
    icon: Settings,
    features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$1,499 - $5,999/month',
    category: 'Asset Management',
    benefits: ['Cost Optimization', 'Asset Visibility', 'Lifecycle Management', 'Performance Tracking'],
    marketPrice: '$2,500 - $9,000/month',
    link: 'https://ziontechgroup.com/it-asset-management',
    popular: false
  },
  {
    title: 'Advanced Backup & Data Protection',
    description: 'Comprehensive backup and data protection solutions with automated recovery.',
    icon: HardDrive,
    features: ['Automated Backups', 'Data Encryption', 'Recovery Testing', 'Compliance Support'],
    pricing: '$1,999 - $7,999/month',
    category: 'Data Protection',
    benefits: ['Data Security', 'Automated Backups', 'Quick Recovery', 'Compliance Ready'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/backup-protection',
    popular: false
  },
  {
    title: 'IT Performance Monitoring & Optimization',
    description: 'Comprehensive IT performance monitoring with optimization and capacity planning.',
    icon: Monitor,
    features: ['Performance Monitoring', 'Capacity Planning', 'Optimization Recommendations', 'Alert Management'],
    pricing: '$2,499 - $9,999/month',
    category: 'Performance Monitoring',
    benefits: ['Performance Optimization', 'Capacity Planning', 'Proactive Management', 'Cost Efficiency'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/performance-monitoring',
    popular: false
  },
  {
    title: 'Cloud Security & Compliance Services',
    description: 'Comprehensive cloud security solutions with compliance management and monitoring.',
    icon: Cloud,
    features: ['Cloud Security', 'Compliance Management', 'Threat Detection', 'Access Controls'],
    pricing: '$2,999 - $11,999/month',
    category: 'Cloud Security',
    benefits: ['Enhanced Security', 'Compliance Ready', 'Threat Protection', 'Scalable Solutions'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/cloud-security',
    popular: false
  },
  {
    title: 'IT Service Management (ITSM) Implementation',
    description: 'Complete ITSM implementation with service desk, change management, and incident handling.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Incident Management', 'Problem Management'],
    pricing: '$3,999 - $14,999/month',
    category: 'ITSM',
    benefits: ['Improved Service Delivery', 'Process Standardization', 'Better Visibility', 'Cost Optimization'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/itsm',
    popular: false
  },
  {
    icon: Cloud,
    name: 'Cloud Infrastructure & DevOps',
    description: 'Complete cloud migration and DevOps implementation with automated deployment and monitoring.',
    features: [
      'Cloud migration and optimization',
      'CI/CD pipeline setup',
      'Infrastructure as Code (IaC)',
      'Container orchestration',
      'Monitoring and logging',
      'Disaster recovery planning'
    ],
    pricing: '$120 – $220/hour',
    projectPricing: '$6,000 – $30,000/project',
    timeline: '2–8 weeks',
    benefits: [
      '99.9% uptime guarantee',
      'Automated deployment processes',
      'Reduced infrastructure costs',
      'Improved system reliability'
    ],
    category: 'Cloud & Infrastructure'
  },
  {
    icon: Shield,
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including zero trust architecture, endpoint detection, and security operations center setup.',
      features: [
        'Zero Trust security architecture',
        'Endpoint Detection and Response (EDR)',
        'Security Operations Center (SOC) setup',
        'Vulnerability assessment and penetration testing',
        'Compliance and regulatory adherence',
        'Security awareness training programs'
      ],
      pricing: '$5,000 – $40,000/project',
      projectPricing: '$2,000 – $8,000/month managed',
      timeline: '4–12 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced security incidents',
        'Compliance with regulations',
        '24/7 security monitoring'
      ],
      category: 'Security'
    },
    {
      icon: Cloud,
      name: 'Cloud Migration & Modernization',
      description: 'Seamless migration to cloud platforms with application modernization and optimization.',
      features: [
        'Lift and shift migration strategies',
        'Application containerization',
        'Serverless architecture implementation',
        'Data platform upgrades and migration',
        'Legacy system modernization',
        'Performance optimization and tuning'
      ],
      pricing: '$10,000 – $150,000/project',
      projectPricing: 'Custom pricing based on complexity',
      timeline: '3–20 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Enhanced security and compliance',
        'Modern technology stack adoption'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Code,
      name: 'Enterprise Architecture Consulting',
      description: 'Strategic technology planning, system design, and architecture optimization for enterprise-scale solutions.',
      features: [
        'Technology stack evaluation and selection',
        'System architecture design and documentation',
        'Scalability and performance planning',
        'Integration strategy and roadmap development',
        'Technical debt assessment and remediation',
        'Digital transformation consulting'
      ],
      pricing: '$150 – $300/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '2–8 weeks',
      benefits: [
        'Optimized technology architecture',
        'Reduced technical debt',
        'Improved system performance',
        'Strategic technology roadmap'
      ],
      category: 'Consulting'
    },
    {
      icon: Database,
      name: 'Database Design & Optimization',
      description: 'Database architecture, performance tuning, and migration services for optimal data management.',
      features: [
        'Database architecture design and implementation',
        'Performance tuning and optimization',
        'Data migration and consolidation',
        'Backup and disaster recovery setup',
        'Database security and compliance',
        'Monitoring and maintenance automation'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$8,000 – $40,000/project',
      timeline: '2–6 weeks',
      benefits: [
        'Improved database performance',
        'Enhanced data security',
        'Reduced maintenance overhead',
        'Optimized storage costs'
      ],
      category: 'Data Management'
    },
    {
      icon: LinkIcon,
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL API development, microservices architecture, and third-party integrations.',
      features: [
        'RESTful and GraphQL API development',
        'Microservices architecture implementation',
        'Third-party service integration',
        'API documentation and testing frameworks',
        'API security and authentication',
        'Performance monitoring and optimization'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$10,000 – $50,000/project',
      timeline: '3–12 weeks',
      benefits: [
        'Scalable API architecture',
        'Improved system integration',
        'Enhanced developer experience',
        'Reduced development time'
      ],
      category: 'Development'
    },
    {
      icon: Smartphone,
      name: 'Mobile App Development',
      description: 'Native iOS/Android applications, React Native, and Flutter development for cross-platform solutions.',
      features: [
        'Native iOS and Android development',
        'React Native cross-platform apps',
        'Flutter mobile applications',
        'UI/UX design and implementation',
        'App store optimization and deployment',
        'Performance optimization and testing'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'High-performance mobile applications',
        'Cross-platform compatibility',
        'Optimized user experience',
        'Reduced development costs'
      ],
      category: 'Development'
    },
    {
      icon: Globe,
      name: 'Web Application Development',
      description: 'Modern web applications using React, Next.js, Vue.js, and full-stack development solutions.',
      features: [
        'React and Next.js applications',
        'Vue.js and Nuxt.js development',
        'Full-stack web applications',
        'Progressive Web App (PWA) development',
        'Performance optimization and SEO',
        'Responsive design and accessibility'
      ],
      pricing: '$80 – $200/hour',
      projectPricing: '$15,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Modern, scalable web applications',
        'Optimized performance and SEO',
        'Responsive and accessible design',
        'Reduced maintenance costs'
      ],
      category: 'Development'
    },
    {
      icon: Server,
      name: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for enterprise environments.',
      features: [
        'Server setup and configuration',
        'Network infrastructure design',
        'Storage and backup solutions',
        'Monitoring and alerting systems',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Reliable and scalable infrastructure',
        'Reduced downtime and maintenance',
        'Optimized performance and costs',
        'Enhanced security and compliance'
      ],
      category: 'Infrastructure'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing Solutions',
      description: 'Advanced HPC infrastructure for scientific computing, AI/ML workloads, and data-intensive applications.',
      features: [
        'GPU cluster setup and optimization',
        'Distributed computing frameworks',
        'High-speed networking configuration',
        'Parallel processing optimization',
        'Scientific computing environments',
        'AI/ML infrastructure scaling'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Scalable AI/ML infrastructure',
        'Cost-effective high-performance computing'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: 'IoT Platform & Device Management',
      description: 'Comprehensive IoT solutions including device management, data analytics, and edge computing.',
      features: [
        'IoT device connectivity and management',
        'Edge computing infrastructure',
        'Real-time data processing and analytics',
        'Device security and firmware updates',
        'IoT platform integration',
        'Predictive maintenance systems'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Scalable IoT infrastructure',
        'Real-time device monitoring',
        'Automated device management',
        'Data-driven insights and optimization'
      ],
      category: 'IoT & Edge Computing'
    },
    {
      icon: BarChart3,
      name: 'Enterprise Digital Transformation',
      description: 'Comprehensive digital transformation consulting and implementation for modern business operations.',
      features: [
        'Digital strategy and roadmap development',
        'Legacy system modernization',
        'Cloud-native application development',
        'Data analytics and business intelligence',
        'Process automation and optimization',
        'Change management and training'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$100,000 – $1,000,000/project',
      timeline: '12–52 weeks',
      benefits: [
        'Modernized business operations',
        'Improved efficiency and productivity',
        'Enhanced customer experience',
        'Competitive advantage in digital markets'
      ],
      category: 'Digital Transformation'
    },
    {
      icon: Shield,
      name: 'Advanced Threat Intelligence Platform',
      description: 'Comprehensive cybersecurity platform with threat intelligence, incident response, and security analytics.',
      features: [
        'Threat intelligence gathering and analysis',
        'Incident response automation',
        'Security analytics and reporting',
        'Threat hunting and investigation',
        'Compliance monitoring and reporting',
        'Security orchestration and automation'
      ],
      pricing: '$10,000 – $100,000/project',
      projectPricing: '$5,000 – $25,000/month managed',
      timeline: '8–20 weeks',
      benefits: [
        'Proactive threat detection',
        'Automated incident response',
        'Enhanced security visibility',
        'Reduced security risks and costs'
      ],
      category: 'Cybersecurity'
    },
    {
      icon: Database,
      name: 'Enterprise Data Platform',
      description: 'Modern data platform architecture with real-time analytics, data lakes, and business intelligence.',
      features: [
        'Data lake and warehouse architecture',
        'Real-time data processing pipelines',
        'Business intelligence and analytics',
        'Data governance and compliance',
        'Machine learning model deployment',
        'Data visualization and reporting'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$75,000 – $500,000/project',
      timeline: '12–32 weeks',
      benefits: [
        'Unified data platform',
        'Real-time business insights',
        'Improved data quality and governance',
        'Enhanced decision-making capabilities'
      ],
      category: 'Data & Analytics'
    },
    {
      icon: Code,
      name: 'Enterprise Application Integration',
      description: 'Seamless integration of enterprise applications with modern integration platforms and APIs.',
      features: [
        'Enterprise Service Bus (ESB) implementation',
        'API gateway and management',
        'Legacy system integration',
        'Real-time data synchronization',
        'Integration monitoring and management',
        'Cloud and on-premises connectivity'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$40,000 – $300,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Unified enterprise systems',
        'Improved data flow and accuracy',
        'Reduced integration complexity',
        'Enhanced business process efficiency'
      ],
      category: 'Integration'
    },
    {
      icon: Smartphone,
      name: 'Quantum Computing Consulting',
      description: 'Quantum computing strategy, algorithm development, and hybrid quantum-classical solutions.',
      features: [
        'Quantum computing strategy development',
        'Quantum algorithm design and optimization',
        'Hybrid quantum-classical solutions',
        'Quantum software development',
        'Quantum hardware evaluation',
        'Quantum security and cryptography'
      ],
      pricing: '$300 – $800/hour',
      projectPricing: '$100,000 – $2,000,000/project',
      timeline: '16–52 weeks',
      benefits: [
        'Cutting-edge quantum capabilities',
        'Exponential computational advantages',
        'Future-proof technology investment',
        'Competitive advantage in research'
      ],
      category: 'Quantum Computing'
    },
    {
      icon: Globe,
      name: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, DeFi protocols, and Web3 application development.',
      features: [
        'Blockchain platform development',
        'Smart contract development and auditing',
        'DeFi protocol implementation',
        'NFT marketplace development',
        'Web3 application architecture',
        'Cryptocurrency integration'
      ],
      pricing: '$150 – $400/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–32 weeks',
      benefits: [
        'Decentralized application solutions',
        'Enhanced security and transparency',
        'Reduced intermediary costs',
        'Innovative business models'
      ],
      category: 'Blockchain & Web3'
    },
    {
      icon: TestTube,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security practices in DevOps workflows with automated security testing and compliance.',
      features: [
        'Security integration in CI/CD pipelines',
        'Automated security testing and scanning',
        'Infrastructure security as code',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management automation'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Integrated security in development',
        'Automated compliance management',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'DevSecOps'
    },
    {
      icon: BarChart3,
      name: 'Data Engineering & Analytics',
      description: 'Data pipeline development, data warehouses, ETL processes, and business intelligence solutions.',
      features: [
        'Data pipeline development and optimization',
        'Data warehouse design and implementation',
        'ETL/ELT process automation',
        'Business intelligence dashboards',
        'Real-time data processing',
        'Data quality and governance'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Improved data-driven decision making',
        'Automated data processing',
        'Enhanced business intelligence',
        'Reduced data processing costs'
      ],
      category: 'Data Management'
    },
    {
      icon: Cpu,
      name: 'Blockchain & Web3 Development',
      description: 'Smart contract development, DeFi protocols, and blockchain integration solutions.',
      features: [
        'Smart contract development and auditing',
        'DeFi protocol design and implementation',
        'Blockchain integration and dApp development',
        'Tokenomics and governance system design',
        'NFT marketplace development',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Cutting-edge blockchain solutions',
        'Decentralized application development',
        'Enhanced security and transparency',
        'Innovative business models'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Wrench,
      name: 'IoT & Embedded Systems',
      description: 'IoT device development, sensor integration, and edge computing solutions.',
      features: [
        'IoT device development and prototyping',
        'Sensor integration and data collection',
        'Edge computing and real-time processing',
        'IoT platform development',
        'Device management and monitoring',
        'Security and compliance implementation'
      ],
      pricing: '$100 – $300/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Connected device solutions',
        'Real-time data processing',
        'Improved operational efficiency',
        'Innovative IoT applications'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Cloud,
      name: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions for low-latency applications and real-time processing.',
      features: [
        'Edge server deployment and management',
        'Content delivery network optimization',
        'Real-time data processing at the edge',
        'Edge AI and machine learning deployment',
        '5G network integration',
        'Edge security and compliance'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '8–16 weeks',
      benefits: [
        '50% reduction in latency',
        'Improved application performance',
        'Enhanced user experience',
        'Reduced bandwidth costs'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
      features: [
        'Identity and access management (IAM)',
        'Network micro-segmentation',
        'Device trust and compliance',
        'Application security controls',
        'Data encryption and protection',
        'Continuous security monitoring'
      ],
      pricing: '$8,000 – $50,000/project',
      projectPricing: '$3,000 – $12,000/month managed',
      timeline: '6–16 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Compliance with regulations',
        'Improved threat detection'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Data Lake & Warehouse Modernization',
      description: 'Modern data architecture with cloud-native data lakes and real-time analytics.',
      features: [
        'Cloud data lake design and implementation',
        'Real-time data streaming and processing',
        'Data governance and cataloging',
        'Advanced analytics and ML integration',
        'Data quality and lineage tracking',
        'Cost optimization and performance tuning'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Unified data platform',
        'Real-time analytics capabilities',
        'Improved data quality',
        'Reduced data processing costs'
      ],
      category: 'Data Management'
    },
    {
      icon: Code,
      name: 'Microservices Architecture Design',
      description: 'Scalable microservices architecture with service mesh and container orchestration.',
      features: [
        'Microservices design and implementation',
        'Service mesh and API gateway setup',
        'Container orchestration with Kubernetes',
        'Service discovery and load balancing',
        'Distributed tracing and monitoring',
        'DevOps and CI/CD integration'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Improved scalability and performance',
        'Faster development and deployment',
        'Better fault isolation',
        'Enhanced team productivity'
      ],
      category: 'Development'
    },
    {
      icon: Globe,
      name: 'Progressive Web App Development',
      description: 'Modern PWA development with offline capabilities and native app features.',
      features: [
        'PWA architecture and implementation',
        'Service worker development',
        'Offline functionality and caching',
        'Push notifications and background sync',
        'App-like user experience',
        'Performance optimization'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$20,000 – $80,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Native app-like experience',
        'Offline functionality',
        'Reduced development costs',
        'Cross-platform compatibility'
      ],
      category: 'Development'
    },
    {
      icon: Server,
      name: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud operations with multi-cloud orchestration and management.',
      features: [
        'Multi-cloud strategy and planning',
        'Hybrid cloud architecture design',
        'Cloud cost optimization and governance',
        'Disaster recovery and backup solutions',
        'Security and compliance management',
        'Performance monitoring and optimization'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Flexible cloud deployment',
        'Reduced vendor lock-in',
        'Optimized costs and performance',
        'Enhanced disaster recovery'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: BarChart3,
      name: 'Real-Time Analytics Platform',
      description: 'Streaming analytics platform with real-time data processing and visualization.',
      features: [
        'Real-time data streaming and processing',
        'Stream analytics and complex event processing',
        'Real-time dashboards and visualization',
        'Machine learning model deployment',
        'Data pipeline monitoring and alerting',
        'Scalable architecture design'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$35,000 – $120,000/project',
      timeline: '8–16 weeks',
      benefits: [
        'Real-time business insights',
        'Faster decision making',
        'Improved operational efficiency',
        'Enhanced customer experience'
      ],
      category: 'Data Management'
    },
    {
      icon: Cpu,
      name: 'Quantum Computing Integration',
      description: 'Quantum computing solutions and hybrid quantum-classical system integration.',
      features: [
        'Quantum algorithm development',
        'Hybrid quantum-classical systems',
        'Quantum machine learning applications',
        'Quantum cryptography implementation',
        'Quantum simulation and optimization',
        'Quantum hardware integration'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–32 weeks',
      benefits: [
        'Exponential computational power',
        'Advanced optimization capabilities',
        'Enhanced security with quantum cryptography',
        'Competitive advantage in research'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: TestTube,
      name: 'AI/ML Model Deployment & MLOps',
      description: 'End-to-end machine learning operations with model deployment and monitoring.',
      features: [
        'ML model deployment and serving',
        'Model versioning and management',
        'A/B testing and experimentation',
        'Model monitoring and drift detection',
        'Automated retraining pipelines',
        'MLOps workflow automation'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Faster model deployment',
        'Improved model performance',
        'Automated ML operations',
        'Reduced operational overhead'
      ],
      category: 'AI & Machine Learning'
    },
    {
      icon: BookOpen,
      name: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation with technology roadmap and change management.',
      features: [
        'Digital strategy and roadmap development',
        'Technology assessment and selection',
        'Change management and training',
        'Process optimization and automation',
        'Customer experience transformation',
        'Innovation and R&D strategy'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Strategic technology alignment',
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage'
      ],
      category: 'Consulting'
    },
    {
      icon: Wrench,
      name: 'AR/VR Development & Integration',
      description: 'Augmented and virtual reality solutions for training, visualization, and customer engagement.',
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Spatial computing and tracking',
        'Multi-platform deployment',
        'User experience design',
        'Performance optimization'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Immersive user experiences',
        'Enhanced training and education',
        'Improved customer engagement',
        'Innovative business applications'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Cloud,
      name: 'Enterprise Application Integration',
      description: 'Comprehensive enterprise application integration with API management, data synchronization, and workflow automation.',
      features: [
        'Enterprise Service Bus (ESB) implementation',
        'API gateway and management platform',
        'Data integration and synchronization',
        'Workflow automation and orchestration',
        'Legacy system modernization',
        'Real-time data processing and analytics'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Seamless system integration',
        'Improved data consistency',
        'Reduced integration complexity',
        'Enhanced business agility'
      ],
      category: 'Enterprise Integration'
    },
    {
      icon: Shield,
      name: 'Advanced Threat Intelligence Platform',
      description: 'Comprehensive threat intelligence and security monitoring with automated response capabilities.',
      features: [
        'Threat intelligence gathering and analysis',
        'Security Information and Event Management (SIEM)',
        'Automated incident response and remediation',
        'Threat hunting and investigation',
        'Security orchestration and automation',
        'Compliance monitoring and reporting'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Proactive threat detection',
        'Automated security response',
        'Reduced security incidents',
        'Enhanced security posture'
      ],
      category: 'Security'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing Solutions',
      description: 'Advanced HPC infrastructure with GPU computing, parallel processing, and scientific computing capabilities.',
      features: [
        'GPU-accelerated computing clusters',
        'Parallel processing and distributed computing',
        'Scientific computing and simulation',
        'Machine learning and AI training infrastructure',
        'High-speed networking and storage',
        'Performance optimization and tuning'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Cost-effective computing resources',
        'Scalable infrastructure'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: 'IoT Platform & Device Management',
      description: 'Comprehensive IoT platform with device management, data analytics, and edge computing capabilities.',
      features: [
        'IoT device provisioning and management',
        'Edge computing and data processing',
        'Real-time data analytics and visualization',
        'Device security and firmware management',
        'Integration with cloud platforms',
        'Predictive maintenance and monitoring'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Centralized device management',
        'Real-time data insights',
        'Improved operational efficiency',
        'Scalable IoT infrastructure'
      ],
      category: 'IoT & Edge Computing'
    },
    {
      icon: Code,
      name: 'Enterprise Digital Transformation Consulting',
      description: 'Strategic digital transformation with technology modernization, process optimization, and change management.',
      features: [
        'Digital strategy development and planning',
        'Technology stack modernization',
        'Process digitization and automation',
        'Change management and training',
        'Data-driven decision making implementation',
        'Customer experience transformation'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–36 weeks',
      benefits: [
        'Modernized technology infrastructure',
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage'
      ],
      category: 'Digital Transformation'
    },
    {
      icon: Database,
      name: 'Big Data Analytics & Data Lake Solutions',
      description: 'Comprehensive big data platform with data lake architecture, analytics, and machine learning capabilities.',
      features: [
        'Data lake architecture and implementation',
        'Big data processing and analytics',
        'Real-time streaming data processing',
        'Machine learning and AI model deployment',
        'Data governance and security',
        'Business intelligence and reporting'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Unified data platform',
        'Advanced analytics capabilities',
        'Real-time data processing',
        'Data-driven insights'
      ],
      category: 'Data Analytics'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification and network segmentation.',
      features: [
        'Identity and access management (IAM)',
        'Network segmentation and micro-segmentation',
        'Multi-factor authentication and SSO',
        'Device trust and compliance',
        'Continuous security monitoring',
        'Security policy automation'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$40,000 – $250,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Automated security policies',
        'Compliance with regulations'
      ],
      category: 'Security'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud Management & Optimization',
      description: 'Comprehensive multi-cloud strategy with cost optimization, governance, and unified management.',
      features: [
        'Multi-cloud architecture design',
        'Cloud cost optimization and management',
        'Unified cloud governance and compliance',
        'Cloud migration and modernization',
        'Disaster recovery and backup strategies',
        'Performance monitoring and optimization'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Optimized cloud costs',
        'Improved cloud performance',
        'Enhanced security and compliance',
        'Reduced vendor lock-in'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: 'Enterprise Mobile App Development',
      description: 'Native and cross-platform mobile application development with enterprise-grade security and integration.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Enterprise security and authentication',
        'Backend integration and API development',
        'Mobile device management (MDM)',
        'App store deployment and management'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$15,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Enhanced mobile productivity',
        'Improved user experience',
        'Enterprise-grade security',
        'Cross-platform compatibility'
      ],
      category: 'Mobile Development'
    },
    {
      icon: BarChart3,
      name: 'Business Intelligence & Data Visualization',
      description: 'Advanced BI platform with interactive dashboards, reporting, and self-service analytics.',
      features: [
        'Interactive dashboards and reports',
        'Self-service analytics platform',
        'Data visualization and storytelling',
        'Advanced analytics and forecasting',
        'Real-time data integration',
        'Mobile BI and accessibility'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Data-driven decision making',
        'Improved business insights',
        'Self-service analytics',
        'Enhanced reporting capabilities'
      ],
      category: 'Business Intelligence'
    },
    {
      icon: Server,
      name: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing platform with low-latency processing and real-time analytics.',
      features: [
        'Edge computing infrastructure deployment',
        'Low-latency data processing',
        'Real-time analytics and decision making',
        'Edge-to-cloud data synchronization',
        'Edge security and management',
        'IoT and sensor data processing'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Reduced latency and improved performance',
        'Real-time data processing',
        'Enhanced reliability and availability',
        'Cost-effective computing at the edge'
      ],
      category: 'Edge Computing'
    },
    {
      icon: Shield,
      name: 'Compliance & Regulatory Technology',
      description: 'Comprehensive compliance management with automated monitoring, reporting, and risk assessment.',
      features: [
        'Regulatory compliance monitoring',
        'Automated compliance reporting',
        'Risk assessment and management',
        'Audit trail and documentation',
        'Policy management and updates',
        'Compliance training and awareness'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Automated compliance monitoring',
        'Reduced compliance risks',
        'Streamlined audit processes',
        'Cost-effective compliance management'
      ],
      category: 'Compliance'
    },
    {
      icon: Cpu,
      name: 'Quantum Computing Infrastructure',
      description: 'Quantum computing infrastructure setup, algorithm development, and quantum-classical hybrid systems.',
      features: [
        'Quantum hardware integration and setup',
        'Quantum algorithm development and optimization',
        'Quantum-classical hybrid system architecture',
        'Quantum error correction and fault tolerance',
        'Quantum software development frameworks',
        'Quantum security and cryptography implementation'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: 'Custom pricing based on quantum requirements',
      timeline: '24–52 weeks',
      benefits: [
        'Exponential computational capabilities',
        'Advanced optimization and simulation',
        'Enhanced security through quantum cryptography',
        'Cutting-edge competitive advantage'
      ],
      category: 'Quantum Computing'
    },
    {
      icon: Globe,
      name: 'Edge Computing & IoT Infrastructure',
      description: 'Distributed edge computing infrastructure with IoT device management and real-time data processing.',
      features: [
        'Edge computing infrastructure deployment',
        'IoT device management and monitoring',
        'Real-time data processing and analytics',
        'Edge AI and machine learning deployment',
        '5G network integration and optimization',
        'Distributed system architecture design'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–20 weeks',
      benefits: [
        'Reduced latency and improved performance',
        'Enhanced data privacy and security',
        'Scalable IoT device management',
        'Real-time decision making capabilities'
      ],
      category: 'Edge Computing'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',
      features: [
        'Zero trust network architecture design',
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring and analytics',
        'Privileged access management (PAM)',
        'Security orchestration and automation'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Improved compliance and governance',
        'Automated threat response'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Blockchain & Distributed Ledger Solutions',
      description: 'Blockchain infrastructure, smart contract development, and decentralized application deployment.',
      features: [
        'Blockchain infrastructure setup and management',
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Cryptocurrency wallet and exchange integration',
        'Blockchain analytics and monitoring',
        'Regulatory compliance and governance'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Enhanced transparency and trust',
        'Reduced transaction costs',
        'Improved data integrity',
        'Decentralized system architecture'
      ],
      category: 'Blockchain'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud & Hybrid Cloud Management',
      description: 'Comprehensive multi-cloud and hybrid cloud strategy with unified management and optimization.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Hybrid cloud integration and management',
        'Cloud cost optimization and FinOps',
        'Cross-cloud data migration and synchronization',
        'Unified monitoring and management platform',
        'Disaster recovery and business continuity'
      ],
      pricing: '$150,000 – $1,500,000 project',
      projectPricing: '$15,000 – $150,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Reduced vendor lock-in',
        'Optimized cloud costs',
        'Enhanced flexibility and scalability',
        'Improved disaster recovery capabilities'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: '5G Network Infrastructure & Optimization',
      description: '5G network deployment, optimization, and application development for next-generation connectivity.',
      features: [
        '5G network infrastructure deployment',
        'Network slicing and optimization',
        '5G application development and testing',
        'Edge computing integration with 5G',
        'Network performance monitoring and analytics',
        'IoT and smart city connectivity solutions'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Ultra-low latency connectivity',
        'Massive IoT device support',
        'Enhanced mobile broadband',
        'Next-generation application capabilities'
      ],
      category: 'Network Infrastructure'
    },
    {
      icon: Brain,
      name: 'AI/ML Infrastructure & MLOps',
      description: 'Complete AI/ML infrastructure setup with MLOps pipelines, model deployment, and monitoring.',
      features: [
        'AI/ML infrastructure design and deployment',
        'MLOps pipeline development and automation',
        'Model training and deployment platforms',
        'AI model monitoring and governance',
        'Data pipeline and feature store setup',
        'AI ethics and bias monitoring'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Accelerated AI model development',
        'Automated ML operations',
        'Scalable AI infrastructure',
        'Enhanced model performance and reliability'
      ],
      category: 'AI Infrastructure'
    },
    {
      icon: Server,
      name: 'Serverless & Microservices Architecture',
      description: 'Serverless architecture implementation with microservices design and API management.',
      features: [
        'Serverless architecture design and implementation',
        'Microservices development and deployment',
        'API gateway and management platform',
        'Container orchestration and management',
        'Event-driven architecture implementation',
        'Performance monitoring and optimization'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Faster development and deployment',
        'Enhanced system reliability'
      ],
      category: 'Architecture'
    },
    {
      icon: Database,
      name: 'Data Mesh & Data Fabric Architecture',
      description: 'Modern data architecture with data mesh and data fabric implementation for enterprise data management.',
      features: [
        'Data mesh architecture design and implementation',
        'Data fabric platform development',
        'Data governance and cataloging',
        'Real-time data streaming and processing',
        'Data quality and lineage management',
        'Self-service analytics platform'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Improved data accessibility and democratization',
        'Enhanced data quality and governance',
        'Faster time-to-insight',
        'Scalable data architecture'
      ],
      category: 'Data Architecture'
    },
    {
      icon: Shield,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security into DevOps pipelines with automated security testing and compliance.',
      features: [
        'DevSecOps pipeline integration',
        'Automated security testing and scanning',
        'Infrastructure as Code security',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management and remediation'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–16 weeks',
      benefits: [
        'Enhanced security throughout SDLC',
        'Automated compliance and reporting',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'Security'
    },
    {
      icon: Globe,
      name: 'Green IT & Sustainable Technology',
      description: 'Sustainable IT infrastructure with energy optimization, carbon footprint reduction, and green computing.',
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint monitoring and reduction',
        'Green data center optimization',
        'Sustainable software development practices',
        'Renewable energy integration',
        'Environmental impact assessment and reporting'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced environmental impact',
        'Lower energy costs',
        'Enhanced corporate sustainability',
        'Compliance with environmental regulations'
      ],
      category: 'Sustainability'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing (HPC)',
      description: 'High-performance computing infrastructure for scientific research, simulations, and data-intensive applications.',
      features: [
        'HPC cluster design and deployment',
        'Parallel computing optimization',
        'GPU computing and acceleration',
        'Scientific computing software stack',
        'High-speed networking and storage',
        'Performance monitoring and optimization'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: '$50,000 – $500,000/month managed',
      timeline: '24–48 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Complex simulation capabilities',
        'Advanced data processing and analysis'
      ],
      category: 'High-Performance Computing'
    }
  ];

const categories = [
  'All',
  'AI Operations',
  'Quantum Security',
  'Edge Computing',
  '5G Networks',
  'Blockchain Infrastructure',
  'IoT Platforms',
  'AI Infrastructure',
  'Green IT',
  'Zero Trust Security',
  'Cloud Management',
  'Analytics Platform',
  'Disaster Recovery',
  'Network Security',
  'IT Compliance',
  'Digital Transformation',
  'Asset Management',
  'Data Protection',
  'Performance Monitoring',
  'Cloud Security',
  'ITSM'
];

export default function ITServicesPage() {
=======
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
  Target,
  Heart,
  GraduationCap,
  PieChart,
  Truck,
  Home,
  Video,
  ClipboardList,
  Eye,
  Bot,
  Phone,
  Mail,
  MapPin,
  Activity,
  RefreshCw,
  Layers,
  Compass,
  Lightning
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    id: 'ai-business-process-automation',
    title: 'AI-Powered Business Process Automation',
    description: 'Transform your business operations with intelligent automation that learns and adapts to your workflows',
    icon: Bot,
    features: ['Intelligent Workflow Design', 'Process Mining & Analysis', 'RPA Integration', 'Real-time Monitoring'],
    pricing: 'Starting at $2,500/month',
    category: 'AI & Automation',
    benefits: ['Reduce operational costs by 60%', 'Eliminate manual errors', 'Scale processes automatically'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    id: 'ai-cybersecurity-operations',
    title: 'AI Cybersecurity Operations Center',
    description: 'Advanced threat detection and response with AI-powered security monitoring and incident management',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', 'Security Analytics', 'Compliance Monitoring'],
    pricing: 'Starting at $3,500/month',
    category: 'Cybersecurity',
    benefits: ['99.9% threat detection accuracy', 'Real-time incident response', 'Reduced security costs'],
    marketPrice: '$8,000-25,000/month'
  },
  {
    id: 'ai-data-analytics-platform',
    title: 'AI Data Analytics Platform',
    description: 'Unlock insights from your data with advanced AI-powered analytics, machine learning, and predictive modeling',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Dashboards', 'Data Visualization'],
    pricing: 'Starting at $2,000/month',
    category: 'Data & Analytics',
    benefits: ['Make data-driven decisions', 'Predict future trends', 'Optimize business performance'],
    marketPrice: '$4,000-12,000/month'
  },
  {
    id: 'cloud-infrastructure-management',
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions with automated scaling, monitoring, and cost optimization',
    icon: Cloud,
    features: ['Multi-Cloud Management', 'Auto-Scaling', 'Cost Optimization', 'Disaster Recovery'],
    pricing: 'Starting at $1,500/month',
    category: 'Cloud Services',
    benefits: ['Reduce cloud costs by 40%', 'Improve reliability', 'Scale on demand'],
    marketPrice: '$3,000-10,000/month'
  },
  {
    id: 'ai-devops-automation',
    title: 'AI DevOps Automation Platform',
    description: 'Intelligent CI/CD pipelines with automated testing, deployment, and infrastructure management',
    icon: Settings,
    features: ['AI-Powered Testing', 'Automated Deployment', 'Infrastructure as Code', 'Performance Monitoring'],
    pricing: 'Starting at $2,200/month',
    category: 'DevOps & Infrastructure',
    benefits: ['90% faster deployments', 'Zero-downtime updates', 'Automated quality assurance'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    title: 'Quantum-Safe Cloud Infrastructure',
    description: 'Future-proof cloud solutions with quantum-resistant encryption and advanced security protocols.',
    icon: Cloud,
    features: ['Quantum-resistant encryption', 'Advanced threat protection', 'Zero-trust architecture', 'Compliance automation'],
    pricing: '$4,200 - $15,000/month',
    category: 'Cloud Security',
    benefits: ['Future-proof security', 'Advanced protection', 'Compliance ready', 'Scalable infrastructure'],
    marketPrice: '$6,500 - $22,000/month',
    link: 'https://ziontechgroup.com/quantum-cloud',
    popular: true
  },
  {
    title: 'AI-Powered Network Intelligence',
    description: 'Intelligent network management with predictive analytics, automated optimization, and threat detection.',
    icon: Network,
    features: ['Predictive network analytics', 'Automated optimization', 'Threat detection', 'Performance monitoring'],
    pricing: '$2,800 - $9,500/month',
    category: 'Network Management',
    benefits: ['Improve network performance by 40%', 'Reduce downtime by 70%', 'Automated optimization', 'Proactive monitoring'],
    marketPrice: '$4,500 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-network',
    popular: false
  },
  {
    title: 'Smart Data Center Management',
    description: 'AI-driven data center operations with predictive maintenance, energy optimization, and automated management.',
    icon: Server,
    features: ['Predictive maintenance', 'Energy optimization', 'Automated management', 'Capacity planning'],
    pricing: '$3,200 - $11,000/month',
    category: 'Data Center',
    benefits: ['Reduce energy costs by 35%', 'Prevent equipment failures', 'Optimize capacity usage', 'Automated operations'],
    marketPrice: '$5,000 - $16,000/month',
    link: 'https://ziontechgroup.com/smart-datacenter',
    popular: true
  },
  {
    title: 'AI-Powered IT Asset Management',
    description: 'Intelligent asset lifecycle management with predictive analytics and automated optimization.',
    icon: HardDrive,
    features: ['Asset lifecycle tracking', 'Predictive analytics', 'Automated optimization', 'Cost analysis'],
    pricing: '$1,800 - $6,500/month',
    category: 'Asset Management',
    benefits: ['Optimize asset utilization', 'Reduce costs by 25%', 'Prevent asset failures', 'Automated management'],
    marketPrice: '$3,000 - $10,000/month',
    link: 'https://ziontechgroup.com/ai-asset-management',
    popular: false
  },
  {
    title: 'Advanced Threat Intelligence Platform',
    description: 'Comprehensive threat intelligence with AI analysis, automated response, and global threat monitoring.',
    icon: Shield,
    features: ['Global threat monitoring', 'AI threat analysis', 'Automated response', 'Threat hunting'],
    pricing: '$4,500 - $16,000/month',
    category: 'Cybersecurity',
    benefits: ['Detect threats 10x faster', 'Automated response', 'Global threat visibility', 'Proactive protection'],
    marketPrice: '$7,000 - $25,000/month',
    link: 'https://ziontechgroup.com/threat-intelligence',
    popular: true
  },
  {
    title: 'AI-Powered Backup & Disaster Recovery',
    description: 'Intelligent backup solutions with automated testing, recovery optimization, and business continuity planning.',
    icon: Database,
    features: ['Automated backup testing', 'Recovery optimization', 'Business continuity', 'Ransomware protection'],
    pricing: '$2,200 - $8,500/month',
    category: 'Data Protection',
    benefits: ['99.9% recovery success rate', 'Reduce recovery time by 60%', 'Automated testing', 'Business continuity'],
    marketPrice: '$3,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-backup',
    popular: true
  },
  {
    title: 'Smart IT Service Desk',
    description: 'AI-powered service desk with intelligent ticket routing, automated resolution, and predictive support.',
    icon: Headphones,
    features: ['Intelligent ticket routing', 'Automated resolution', 'Predictive support', 'Knowledge management'],
    pricing: '$1,500 - $5,500/month',
    category: 'ITSM',
    benefits: ['Resolve 80% of tickets automatically', 'Reduce response time by 70%', 'Improve user satisfaction', 'Predictive support'],
    marketPrice: '$2,500 - $8,000/month',
    link: 'https://ziontechgroup.com/smart-service-desk',
    popular: true
  },
  {
    title: 'AI-Powered Performance Monitoring',
    description: 'Intelligent application and infrastructure monitoring with predictive analytics and automated optimization.',
    icon: Monitor,
    features: ['Predictive analytics', 'Automated optimization', 'Real-time monitoring', 'Performance insights'],
    pricing: '$2,800 - $9,000/month',
    category: 'Performance Monitoring',
    benefits: ['Prevent performance issues', 'Optimize system performance', 'Reduce downtime by 50%', 'Automated optimization'],
    marketPrice: '$4,500 - $14,000/month',
    link: 'https://ziontechgroup.com/ai-performance',
    popular: false
  },
  {
    title: 'Intelligent Cloud Cost Optimization',
    description: 'AI-driven cloud cost management with automated optimization, rightsizing, and budget forecasting.',
    icon: DollarSign,
    features: ['Automated cost optimization', 'Resource rightsizing', 'Budget forecasting', 'Cost analytics'],
    pricing: '$1,200 - $4,500/month',
    category: 'Cloud Management',
    benefits: ['Reduce cloud costs by 40%', 'Automated optimization', 'Predictive budgeting', 'Cost transparency'],
    marketPrice: '$2,000 - $7,000/month',
    link: 'https://ziontechgroup.com/cloud-cost-optimization',
    popular: true
  },
  {
    title: 'AI-Powered Compliance Management',
    description: 'Automated compliance monitoring and reporting for various regulatory standards and industry requirements.',
    icon: CheckCircle,
    features: ['Automated compliance monitoring', 'Regulatory reporting', 'Risk assessment', 'Audit preparation'],
    pricing: '$2,500 - $8,500/month',
    category: 'Compliance',
    benefits: ['Ensure 100% compliance', 'Automated reporting', 'Reduce audit time by 60%', 'Risk mitigation'],
    marketPrice: '$4,000 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-compliance',
    popular: false
  },
  {
    title: 'Smart IT Documentation & Knowledge Base',
    description: 'AI-powered documentation management with automated updates, intelligent search, and knowledge extraction.',
    icon: BookOpen,
    features: ['Automated documentation', 'Intelligent search', 'Knowledge extraction', 'Version control'],
    pricing: '$1,800 - $6,000/month',
    category: 'Knowledge Management',
    benefits: ['Automated documentation', 'Instant knowledge access', 'Reduce documentation time by 70%', 'Better knowledge sharing'],
    marketPrice: '$3,000 - $9,000/month',
    link: 'https://ziontechgroup.com/smart-documentation',
    popular: false
  },
  {
    title: 'AI-Powered IT Training & Certification',
    description: 'Personalized IT training programs with AI-driven learning paths and automated skill assessment.',
    icon: GraduationCap,
    features: ['Personalized learning paths', 'Automated assessment', 'Skill gap analysis', 'Certification tracking'],
    pricing: '$1,500 - $5,500/month',
    category: 'Training',
    benefits: ['Improve team skills by 50%', 'Personalized learning', 'Automated assessment', 'Certification tracking'],
    marketPrice: '$2,500 - $8,000/month',
    link: 'https://ziontechgroup.com/ai-training',
    popular: false
  },
  {
    title: 'Intelligent IT Procurement & Vendor Management',
    description: 'AI-driven procurement optimization with vendor analysis, contract management, and cost optimization.',
    icon: ShoppingCart,
    features: ['Vendor analysis', 'Contract management', 'Cost optimization', 'Procurement automation'],
    pricing: '$2,200 - $7,500/month',
    category: 'Procurement',
    benefits: ['Reduce procurement costs by 30%', 'Optimize vendor relationships', 'Automated contract management', 'Better vendor selection'],
    marketPrice: '$3,500 - $11,000/month',
    link: 'https://ziontechgroup.com/ai-procurement',
    popular: false
  },
  {
    title: 'AI-Powered IT Risk Management',
    description: 'Comprehensive risk assessment and mitigation with AI analysis, threat modeling, and automated controls.',
    icon: AlertTriangle,
    features: ['Risk assessment', 'Threat modeling', 'Automated controls', 'Risk monitoring'],
    pricing: '$3,000 - $10,500/month',
    category: 'Risk Management',
    benefits: ['Identify risks 5x faster', 'Automated risk mitigation', 'Reduce risk exposure by 60%', 'Continuous monitoring'],
    marketPrice: '$5,000 - $16,000/month',
    link: 'https://ziontechgroup.com/ai-risk-management',
    popular: true
  },
  {
    title: 'Smart IT Change Management',
    description: 'AI-driven change management with impact analysis, automated testing, and risk assessment.',
    icon: RefreshCw,
    features: ['Impact analysis', 'Automated testing', 'Risk assessment', 'Change approval'],
    pricing: '$2,000 - $7,000/month',
    category: 'Change Management',
    benefits: ['Reduce change failures by 80%', 'Automated impact analysis', 'Faster change approval', 'Risk mitigation'],
    marketPrice: '$3,200 - $10,500/month',
    link: 'https://ziontechgroup.com/smart-change-management',
    popular: false
  },
  {
    id: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization',
    description: 'Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization',
    icon: Truck,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: 'Starting at $2,800/month',
    category: 'Supply Chain',
    benefits: ['Reduce inventory costs', 'Improve delivery times', 'Minimize supply chain risks'],
    marketPrice: '$6,000-20,000/month'
  },
  {
    id: 'ai-financial-services',
    title: 'AI Financial Services Platform',
    description: 'Advanced financial technology solutions with AI-powered risk assessment, fraud detection, and trading algorithms',
    icon: DollarSign,
    features: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading', 'Regulatory Compliance'],
    pricing: 'Starting at $4,000/month',
    category: 'Financial Technology',
    benefits: ['Reduce financial risks', 'Detect fraud in real-time', 'Optimize trading strategies'],
    marketPrice: '$10,000-30,000/month'
  },
  {
    id: 'ai-healthcare-solutions',
    title: 'AI Healthcare Technology Solutions',
    description: 'Transform healthcare delivery with AI-powered diagnostics, patient management, and medical research tools',
    icon: Heart,
    features: ['Medical Image Analysis', 'Patient Risk Assessment', 'Drug Discovery', 'Clinical Decision Support'],
    pricing: 'Starting at $3,500/month',
    category: 'Healthcare Technology',
    benefits: ['Improve diagnostic accuracy', 'Reduce medical errors', 'Accelerate research'],
    marketPrice: '$8,000-25,000/month'
  },
  {
    id: 'ai-education-platform',
    title: 'AI Education Technology Platform',
    description: 'Revolutionize learning with AI-powered personalized education, adaptive learning, and intelligent tutoring systems',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Adaptive Assessments', 'Intelligent Tutoring', 'Learning Analytics'],
    pricing: 'Starting at $1,200/month',
    category: 'Education Technology',
    benefits: ['Improve learning outcomes', 'Personalize education', 'Track student progress'],
    marketPrice: '$2,500-8,000/month'
  },
  {
    id: 'ai-manufacturing-optimization',
    title: 'AI Manufacturing Optimization',
    description: 'Optimize manufacturing processes with AI-powered quality control, predictive maintenance, and production planning',
    icon: Building,
    features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Integration'],
    pricing: 'Starting at $3,000/month',
    category: 'Manufacturing Technology',
    benefits: ['Reduce downtime', 'Improve product quality', 'Optimize production efficiency'],
    marketPrice: '$6,000-18,000/month'
  },
  {
    id: 'ai-retail-solutions',
    title: 'AI Retail Technology Solutions',
    description: 'Enhance retail operations with AI-powered inventory management, customer analytics, and personalized shopping experiences',
    icon: ShoppingCart,
    features: ['Inventory Management', 'Customer Analytics', 'Personalized Recommendations', 'Price Optimization'],
    pricing: 'Starting at $2,200/month',
    category: 'Retail Technology',
    benefits: ['Increase sales', 'Optimize inventory', 'Improve customer experience'],
    marketPrice: '$4,500-15,000/month'
  },
  {
    id: 'ai-energy-management',
    title: 'AI Energy Management System',
    description: 'Optimize energy consumption with AI-powered smart grid management, renewable energy integration, and predictive analytics',
    icon: Lightning,
    features: ['Smart Grid Management', 'Energy Forecasting', 'Renewable Integration', 'Cost Optimization'],
    pricing: 'Starting at $2,500/month',
    category: 'Energy Technology',
    benefits: ['Reduce energy costs', 'Optimize consumption', 'Integrate renewables'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    id: 'ai-transportation-logistics',
    title: 'AI Transportation & Logistics',
    description: 'Optimize transportation and logistics with AI-powered route optimization, fleet management, and demand forecasting',
    icon: Truck,
    features: ['Route Optimization', 'Fleet Management', 'Demand Forecasting', 'Real-time Tracking'],
    pricing: 'Starting at $2,800/month',
    category: 'Transportation Technology',
    benefits: ['Reduce transportation costs', 'Improve delivery efficiency', 'Optimize routes'],
    marketPrice: '$6,000-20,000/month'
  },
  {
    id: 'ai-real-estate-platform',
    title: 'AI Real Estate Technology Platform',
    description: 'Transform real estate with AI-powered property valuation, market analysis, and intelligent property management',
    icon: Home,
    features: ['Property Valuation', 'Market Analysis', 'Tenant Screening', 'Maintenance Prediction'],
    pricing: 'Starting at $1,800/month',
    category: 'Real Estate Technology',
    benefits: ['Accurate property valuations', 'Optimize rental income', 'Predict maintenance needs'],
    marketPrice: '$3,500-12,000/month'
  },
  {
    id: 'ai-legal-tech-platform',
    title: 'AI Legal Technology Platform',
    description: 'Streamline legal operations with AI-powered document analysis, contract review, and legal research automation',
    icon: BookOpen,
    features: ['Document Analysis', 'Contract Review', 'Legal Research', 'Compliance Monitoring'],
    pricing: 'Starting at $2,500/month',
    category: 'Legal Technology',
    benefits: ['Reduce legal costs', 'Improve accuracy', 'Accelerate research'],
    marketPrice: '$5,000-18,000/month'
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation Platform',
    description: 'Maximize marketing ROI with AI-powered campaign optimization, customer segmentation, and personalized content delivery',
    icon: Target,
    features: ['Campaign Optimization', 'Customer Segmentation', 'Content Personalization', 'ROI Analytics'],
    pricing: 'Starting at $1,500/month',
    category: 'Marketing Technology',
    benefits: ['Increase marketing ROI', 'Personalize campaigns', 'Optimize customer targeting'],
    marketPrice: '$3,000-10,000/month'
  },
  {
    id: 'ai-hr-technology',
    title: 'AI Human Resources Technology',
    description: 'Transform HR operations with AI-powered recruitment, employee analytics, and workforce optimization',
    icon: Users,
    features: ['Talent Acquisition', 'Employee Analytics', 'Performance Management', 'Workforce Planning'],
    pricing: 'Starting at $1,800/month',
    category: 'Human Resources Technology',
    benefits: ['Improve hiring quality', 'Optimize workforce', 'Reduce HR costs'],
    marketPrice: '$3,500-12,000/month'
  },
  {
    id: 'ai-iot-platform',
    title: 'AI Internet of Things Platform',
    description: 'Connect and manage IoT devices with AI-powered data processing, device management, and predictive analytics',
    icon: Wifi,
    features: ['Device Management', 'Data Processing', 'Predictive Analytics', 'Edge Computing'],
    pricing: 'Starting at $2,200/month',
    category: 'IoT Technology',
    benefits: ['Optimize device performance', 'Predict maintenance needs', 'Process data at scale'],
    marketPrice: '$4,500-15,000/month'
  },
  {
    id: 'ai-blockchain-solutions',
    title: 'AI Blockchain Technology Solutions',
    description: 'Secure and transparent solutions with AI-powered blockchain applications, smart contracts, and decentralized systems',
    icon: Lock,
    features: ['Smart Contracts', 'Decentralized Applications', 'Cryptocurrency Integration', 'Security Protocols'],
    pricing: 'Starting at $3,500/month',
    category: 'Blockchain Technology',
    benefits: ['Enhanced security', 'Transparent transactions', 'Reduce intermediaries'],
    marketPrice: '$8,000-25,000/month'
  }
];

const categories = [
  'All',
  'AI & Automation',
  'Cybersecurity',
  'Data & Analytics',
  'Cloud Services',
  'DevOps & Infrastructure',
  'Customer Experience',
  'Supply Chain',
  'Financial Technology',
  'Healthcare Technology',
  'Education Technology',
  'Manufacturing Technology',
  'Retail Technology',
  'Energy Technology',
  'Transportation Technology',
  'Real Estate Technology',
  'Legal Technology',
  'Marketing Technology',
  'Human Resources Technology',
  'IoT Technology',
  'Blockchain Technology'
];

export default function ITServices() {
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
<<<<<<< HEAD
    const matchesSearch = (service.title && service.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (service.description && service.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (service.category && service.category.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

=======
    features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Disaster Recovery']
  }
];

export default function ITServicesPage() {
>>>>>>> 957bdd045b2f6b572bc67ae198e0b79701b01c6c
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, and cloud solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                IT Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Comprehensive IT solutions to keep your business running smoothly
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional IT services designed to support your business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="text-blue-600 mb-4">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
=======
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>IT Services & Solutions | ZionTech Group</title>
        <meta name="description" content="Comprehensive IT services and solutions powered by AI and cutting-edge technology. Transform your business with our expert IT consulting and implementation services." />
        <meta name="keywords" content="IT services, technology solutions, AI services, cloud computing, cybersecurity, data analytics" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services &
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth. 
                From AI-powered automation to cloud infrastructure, we deliver cutting-edge IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search IT services and solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">{service.pricing}</div>
                        <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">4.9/5</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/micro-saas"
                        className="flex-1 border border-gray-300 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need IT Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you with your IT infrastructure needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our expert team design and implement the perfect technology solution for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore Micro SaaS
                </Link>
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
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  );
}