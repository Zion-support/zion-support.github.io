import React from 'react';
import { ArrowRight, Award, BarChart3, Brain, Carbon, CheckCircle, Clock, Cloud, Code, Cpu, Cross, Database, Eye, Flexible, From, Globe, Grid, Link2, Mail, MapPin, Monitor, Network, Now, Phone, Server, Settings, Shield, TrendingUp, User, Users, Wifi, Zap } from 'lucide-react';

import Head from 'next/head';
import Link from 'next/link';
// import PageTransition from '../src/components/PageTransition';
export default function ITServices() {
  const title = 'IT Services — Zion Tech Group';
  const description =
    'Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions.';

  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description:
        'Complete cloud transformation with AWS, Azure, and Google Cloud Platform',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design and implementation',
        'Legacy system migration and modernization',
        'Serverless computing and containerization',
        'Auto-scaling and load balancing',
        'Cost optimization and FinOps practices',
        'Disaster recovery and backup solutions',
      ],
      pricing: '$5,000 - $50, 000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services',
    },
    {
      title: 'Cybersecurity & Compliance',
      description:
        'Enterprise-grade security solutions and compliance management',
      icon: Shield,
      features: [
        'Zero-trust security architecture',
        'SOC 2, GDPR, HIPAA compliance automation',
        'Penetration testing and vulnerability assessments',
        'Security monitoring and incident response',
        'Identity and access management (IAM)',
        'Data encryption and privacy protection',
      ],
      pricing: '$3,000 - $25, 000/month',
      delivery: '3-8 weeks',
      category: 'Security Services',
    },
    {
      title: 'Network Infrastructure',
      description:
        'Design, implementation, and management of enterprise networks',
      icon: Network,
      features: [
        'SD-WAN and hybrid network solutions',
        'Network security and firewall management',
        'Wireless network design and optimization',
        'Network monitoring and performance tuning',
        'VoIP and unified communications',
        'Network documentation and training',
      ],
      pricing: '$2,000 - $15, 000/month',
      delivery: '2-6 weeks',
      category: 'Network Services',
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
        'SLA-based response times',
      ],
      pricing: '$1,500 - $8, 000/month',
      delivery: '1-2 weeks',
      category: 'Support Services',
    },
    {
      title: 'Data Management & Analytics',
      description:
        'Data warehousing, analytics, and business intelligence solutions',
      icon: Database,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Data governance and quality management',
        'Real-time analytics and reporting',
        'Machine learning data preparation',
      ],
      pricing: '$4,000 - $30, 000/month',
      delivery: '6-16 weeks',
      category: 'Data Services',
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
        'DevSecOps and security integration',
      ],
      pricing: '$3,500 - $20, 000/month',
      delivery: '4-10 weeks',
      category: 'DevOps Services',
    },
    {
      title: 'Digital Transformation',
      description:
        'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: [
        'Digital strategy and roadmap development',
        'Process automation and optimization',
        'Legacy system modernization',
        'Change management and training',
        'Technology stack evaluation',
        'ROI measurement and optimization',
      ],
      pricing: '$10,000 - $100, 000/month',
      delivery: '12-24 weeks',
      category: 'Consulting Services',
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
        'IT strategy and planning',
      ],
      pricing: '$2,500 - $15, 000/month',
      delivery: '2-4 weeks',
      category: 'Managed Services',
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description:
        'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration and consulting',
        'Cryptocurrency wallet development',
        'Tokenomics and governance design',
        'Cross-chain interoperability solutions',
      ],
      pricing: '$8,000 - $50, 000/month',
      delivery: '8-20 weeks',
      category: 'Blockchain Services',
    },
    {
      title: 'IoT & Edge Computing',
      description:
        'Internet of Things solutions and edge computing infrastructure',
      icon: Cpu,
      features: [
        'IoT device development and integration',
        'Edge computing platform setup',
        'Real-time data processing and analytics',
        'IoT security and device management',
        'Sensor network design and deployment',
        'Edge AI and machine learning integration',
      ],
      pricing: '$5,000 - $30, 000/month',
      delivery: '6-16 weeks',
      category: 'IoT Services',
    },
    {
      title: 'Quantum Computing Consulting',
      description:
        'Quantum computing strategy, algorithm development, and implementation',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Quantum computing strategy consulting',
        'Hybrid classical-quantum solutions',
        'Quantum security and cryptography',
        'Quantum machine learning applications',
        'Quantum hardware evaluation and selection',
      ],
      pricing: '$15,000 - $100, 000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Services',
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
        'Edge computing integration',
      ],
      pricing: '$10,000 - $75, 000/month',
      delivery: '8-20 weeks',
      category: 'Network Services',
    },
    {
      title: 'AR/VR Development & Implementation',
      description:
        'Augmented and virtual reality solutions for business applications',
      icon: Monitor,
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Immersive training and simulation',
        'Virtual showroom and retail solutions',
        'AR/VR hardware integration',
        'Performance optimization and testing',
      ],
      pricing: '$6,000 - $40, 000/month',
      delivery: '8-16 weeks',
      category: 'AR/VR Services',
    },
    {
      title: 'API Management & Integration',
      description:
        'Comprehensive API strategy, development, and management platform',
      icon: Code,
      features: [
        'API design and development',
        'API gateway setup and management',
        'Third-party API integration',
        'API security and authentication',
        'API analytics and monitoring',
        'Microservices architecture design',
      ],
      pricing: '$3,000 - $20, 000/month',
      delivery: '4-12 weeks',
      category: 'API Services',
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description:
        'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [
        'Disaster recovery strategy development',
        'Backup and replication solutions',
        'Business continuity planning',
        'Recovery time objective optimization',
        'Testing and validation services',
        'Compliance and audit support',
      ],
      pricing: '$5,000 - $35, 000/month',
      delivery: '6-16 weeks',
      category: 'Recovery Services',
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
        'Sustainability reporting and compliance',
      ],
      pricing: '$4,000 - $25, 000/month',
      delivery: '6-14 weeks',
      category: 'Sustainability Services',
    },
    {
      title: 'FinTech & Payment Solutions',
      description:
        'Financial technology solutions and payment system integration',
      icon: Database,
      features: [
        'Payment gateway integration',
        'Financial API development',
        'Compliance and regulatory solutions',
        'Fraud detection and prevention',
        'Digital banking solutions',
        'Cryptocurrency integration',
      ],
      pricing: '$8,000 - $60, 000/month',
      delivery: '10-24 weeks',
      category: 'FinTech Services',
    },
    {
      title: 'Advanced Blockchain & Web3 Infrastructure',
      description:
        'Enterprise blockchain solutions with smart contracts and DeFi integration',
      icon: Network,
      features: [
        'Enterprise blockchain platform development',
        'Smart contract auditing and optimization',
        'DeFi protocol integration',
        'NFT marketplace development',
        'Cross-chain interoperability solutions',
        'Blockchain governance and tokenomics',
      ],
      pricing: '$12,000 - $80,000/month',
      delivery: '10-24 weeks',
      category: 'Blockchain Services',
    },
    {
      title: 'AI Infrastructure & MLOps',
      description:
        'Complete AI infrastructure setup with machine learning operations and model deployment',
      icon: Brain,
      features: [
        'MLOps pipeline development and automation',
        'AI model training and deployment infrastructure',
        'GPU cluster management and optimization',
        'Model versioning and monitoring',
        'Auto-scaling AI workloads',
        'AI security and compliance frameworks',
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'AI Infrastructure',
    },
    {
      title: 'Edge AI & Computer Vision Systems',
      description:
        'Edge computing solutions with AI and computer vision for real-time processing',
      icon: Eye,
      features: [
        'Edge AI model deployment and optimization',
        'Computer vision system development',
        'Real-time video analytics',
        'Edge device management and monitoring',
        'Low-latency processing optimization',
        'Edge-to-cloud data synchronization',
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '6-14 weeks',
      category: 'Edge AI Services',
    },
    {
      title: 'Zero Trust Security Architecture',
      description:
        'Comprehensive zero trust security implementation with identity and access management',
      icon: Shield,
      features: [
        'Zero trust network architecture design',
        'Identity and access management (IAM)',
        'Multi-factor authentication implementation',
        'Network segmentation and micro-segmentation',
        'Continuous security monitoring',
        'Compliance automation and reporting',
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '8-20 weeks',
      category: 'Security Services',
    },
    {
      title: 'Hybrid Cloud & Multi-Cloud Management',
      description:
        'Advanced hybrid and multi-cloud infrastructure with seamless workload orchestration',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture',
        'Hybrid cloud workload migration',
        'Cloud cost optimization and FinOps',
        'Cross-cloud data synchronization',
        'Disaster recovery across clouds',
        'Cloud governance and compliance',
      ],
      pricing: '$12,000 - $75,000/month',
      delivery: '10-24 weeks',
      category: 'Cloud Services',
    },
    {
      title: 'Advanced Analytics & Data Engineering',
      description:
        'Enterprise data engineering with real-time analytics and business intelligence',
      icon: BarChart3,
      features: [
        'Real-time data pipeline development',
        'Advanced analytics and machine learning',
        'Data lake and warehouse architecture',
        'Stream processing and event-driven analytics',
        'Data governance and quality management',
        'Self-service analytics platforms',
      ],
      pricing: '$8,000 - $45,000/month',
      delivery: '8-18 weeks',
      category: 'Data Services',
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description:
        'Intelligent automation solutions with RPA and AI for business process optimization',
      icon: Settings,
      features: [
        'RPA bot development and deployment',
        'Process mining and optimization',
        'AI-powered decision automation',
        'Workflow orchestration and management',
        'Exception handling and monitoring',
        'Integration with enterprise systems',
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'Automation Services',
    },
    {
      title: 'Cybersecurity Operations Center (SOC)',
      description:
        '24/7 security monitoring and incident response with advanced threat detection',
      icon: Shield,
      features: [
        '24/7 security monitoring and alerting',
        'Advanced threat detection and response',
        'Security incident management',
        'Threat intelligence and analysis',
        'Vulnerability management and patching',
        'Security awareness training and testing',
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '4-8 weeks',
      category: 'Security Services',
    },
    {
      title: 'Digital Twin & Simulation Platforms',
      description:
        'Digital twin development for industrial and business process simulation',
      icon: Monitor,
      features: [
        'Digital twin architecture and development',
        'Real-time simulation and modeling',
        'IoT sensor integration and data processing',
        'Predictive maintenance and optimization',
        'Virtual testing and validation',
        'Integration with existing systems',
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-32 weeks',
      category: 'Simulation Services',
    },
    {
      title: 'Advanced Network Security & SD-WAN',
      description:
        'Next-generation network security with software-defined wide area networking',
      icon: Network,
      features: [
        'SD-WAN implementation and optimization',
        'Next-generation firewall deployment',
        'Network segmentation and micro-segmentation',
        'Advanced threat protection',
        'Network performance monitoring',
        'Cloud connectivity optimization',
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '6-16 weeks',
      category: 'Network Services',
    },
    {
      title: 'Serverless & Event-Driven Architecture',
      description:
        'Modern serverless architecture with event-driven design and microservices',
      icon: Server,
      features: [
        'Serverless architecture design and implementation',
        'Event-driven system development',
        'Microservices architecture and orchestration',
        'Function-as-a-Service (FaaS) optimization',
        'Event streaming and message queuing',
        'Auto-scaling and cost optimization',
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '6-14 weeks',
      category: 'Architecture Services',
    },
    {
      title: 'Advanced Compliance & Governance',
      description:
        'Comprehensive compliance management with automated governance and risk assessment',
      icon: Shield,
      features: [
        'Compliance automation and monitoring',
        'Risk assessment and management',
        'Audit trail and documentation',
        'Regulatory reporting automation',
        'Policy management and enforcement',
        'Third-party risk assessment',
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '8-20 weeks',
      category: 'Compliance Services',
    },
    {
      title: 'Edge Computing & Distributed Systems',
      description:
        'Edge computing infrastructure with distributed system architecture and optimization',
      icon: Cpu,
      features: [
        'Edge computing platform design and deployment',
        'Distributed system architecture and optimization',
        'Real-time data processing and streaming',
        'Edge AI and inference optimization',
        'Multi-cloud and hybrid edge solutions',
        'Edge security and device management',
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Edge Computing',
    },
    {
      title: 'Cybersecurity Operations Center (SOC)',
      description:
        '24/7 security monitoring and incident response with advanced threat detection',
      icon: Shield,
      features: [
        '24/7 security monitoring and alerting',
        'Advanced threat detection and response',
        'Security incident investigation and forensics',
        'Threat intelligence and analysis',
        'Security awareness training and simulation',
        'Compliance monitoring and reporting',
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '6-12 weeks',
      category: 'Security Operations',
    },
    {
      title: 'Digital Twin & Simulation Platforms',
      description:
        'Digital twin development and simulation platforms for industrial and business applications',
      icon: Monitor,
      features: [
        'Digital twin architecture and development',
        'Real-time simulation and modeling',
        'IoT sensor integration and data processing',
        'Predictive maintenance and optimization',
        'Virtual testing and validation',
        'Integration with existing systems',
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Digital Twin',
    },
    {
      title: 'Zero Trust Security Architecture',
      description:
        'Comprehensive zero trust security implementation with identity and access management',
      icon: Shield,
      features: [
        'Zero trust architecture design and implementation',
        'Identity and access management (IAM)',
        'Micro-segmentation and network security',
        'Continuous authentication and monitoring',
        'Privileged access management (PAM)',
        'Security policy automation and enforcement',
      ],
      pricing: '$12,000 - $75,000/month',
      delivery: '10-20 weeks',
      category: 'Zero Trust',
    },
    {
      title: 'Hyperautomation & RPA Solutions',
      description:
        'Intelligent process automation with robotic process automation and AI integration',
      icon: Settings,
      features: [
        'Robotic process automation (RPA) implementation',
        'Intelligent document processing and OCR',
        'Workflow automation and optimization',
        'AI-powered decision making and routing',
        'Process mining and discovery',
        'Integration with enterprise systems',
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-16 weeks',
      category: 'Automation',
    },
    {
      title: 'Advanced Data Engineering & Lakehouse',
      description:
        'Modern data engineering with data lakehouse architecture and real-time processing',
      icon: Database,
      features: [
        'Data lakehouse architecture design',
        'Real-time data streaming and processing',
        'Data pipeline automation and orchestration',
        'Data quality and governance implementation',
        'Advanced analytics and ML integration',
        'Multi-cloud data strategy and migration',
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '10-20 weeks',
      category: 'Data Engineering',
    },
    {
      title: 'Cloud-Native Application Development',
      description:
        'Modern cloud-native application development with microservices and serverless architecture',
      icon: Cloud,
      features: [
        'Microservices architecture design and implementation',
        'Serverless application development',
        'Container orchestration and management',
        'API-first development and integration',
        'Cloud-native security and monitoring',
        'Performance optimization and scaling',
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Cloud Native',
    },
    {
      title: 'Advanced Network Security & SD-WAN',
      description:
        'Next-generation network security with software-defined wide area networking',
      icon: Network,
      features: [
        'SD-WAN design and implementation',
        'Next-generation firewall deployment',
        'Network segmentation and micro-segmentation',
        'Advanced threat protection and detection',
        'Network performance monitoring and optimization',
        'Cloud connectivity and hybrid networking',
      ],
      pricing: '$8,000 - $45,000/month',
      delivery: '8-16 weeks',
      category: 'Network Security',
      icon: Network,
      features: [
        'Multi-chain blockchain architecture design',
        'Smart contract development and auditing',
        'DeFi protocol integration and optimization',
        'NFT marketplace and tokenization platforms',
        'Cross-chain bridge development',
        'Regulatory compliance and KYC/AML solutions',
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '12-32 weeks',
      category: 'Blockchain Services',
    },
    {
      title: 'IoT & Edge Computing Solutions',
      description:
        'Comprehensive IoT ecosystem with edge computing and real-time analytics',
      icon: Cpu,
      features: [
        'IoT device integration and management',
        'Edge computing infrastructure deployment',
        'Real-time data processing and analytics',
        'Industrial IoT (IIoT) solutions',
        'Smart city and building automation',
        'Predictive maintenance and monitoring',
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '8-24 weeks',
      category: 'IoT Services',
    },
    {
      title: 'Advanced Cybersecurity & Zero Trust',
      description:
        'Next-generation security architecture with AI-powered threat detection',
      icon: Shield,
      features: [
        'Zero Trust security architecture implementation',
        'AI-powered threat detection and response',
        'Advanced persistent threat (APT) protection',
        'Security orchestration and automation (SOAR)',
        'Identity and access management (IAM)',
        'Compliance automation and reporting',
      ],
      pricing: '$12,000 - $60,000/month',
      delivery: '10-28 weeks',
      category: 'Advanced Security',
    },
    {
      title: 'Quantum Computing & Cryptography',
      description:
        'Quantum computing solutions and post-quantum cryptography implementation',
      icon: Cpu,
      features: [
        'Quantum algorithm development and optimization',
        'Post-quantum cryptography implementation',
        'Quantum key distribution (QKD) systems',
        'Quantum simulation and modeling',
        'Hybrid classical-quantum computing',
        'Quantum security assessment and consulting',
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '20-48 weeks',
      category: 'Quantum Services',
    },
    {
      title: 'Advanced Data Engineering & Analytics',
      description:
        'Enterprise data platforms with real-time processing and AI integration',
      icon: Database,
      features: [
        'Real-time data streaming and processing',
        'Advanced analytics and machine learning pipelines',
        'Data lake and data warehouse architecture',
        'ETL/ELT automation and optimization',
        'Data governance and quality management',
        'Business intelligence and visualization',
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-20 weeks',
      category: 'Data Services',
    },
    {
      title: 'Microservices & API Architecture',
      description:
        'Scalable microservices architecture with API management and governance',
      icon: Code,
      features: [
        'Microservices architecture design and implementation',
        'API gateway and management platform',
        'Service mesh implementation (Istio, Linkerd)',
        'Container orchestration and management',
        'API security and rate limiting',
        'Service discovery and load balancing',
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'Architecture Services',
    },
    {
      title: 'Advanced Cloud Native Solutions',
      description:
        'Cloud-native application development with serverless and containerization',
      icon: Cloud,
      features: [
        'Serverless architecture design and implementation',
        'Kubernetes cluster management and optimization',
        'Cloud-native CI/CD pipeline development',
        'Multi-cloud and hybrid cloud solutions',
        'Cloud cost optimization and FinOps',
        'Disaster recovery and backup automation',
      ],
      pricing: '$10,000 - $45,000/month',
      delivery: '8-20 weeks',
      category: 'Cloud Native Services',
    },
    {
      title: 'Advanced Network & SD-WAN Solutions',
      description:
        'Software-defined networking with AI-powered optimization and security',
      icon: Network,
      features: [
        'SD-WAN design and implementation',
        'Network function virtualization (NFV)',
        'AI-powered network optimization',
        'Software-defined perimeter (SDP)',
        'Network automation and orchestration',
        '5G network integration and optimization',
      ],
      pricing: '$8,000 - $35,000/month',
      delivery: '6-18 weeks',
      category: 'Network Services',
    },
    {
      title: 'Advanced DevOps & SRE Solutions',
      description:
        'Site reliability engineering with advanced monitoring and automation',
      icon: Settings,
      features: [
        'SRE implementation and best practices',
        'Advanced monitoring and observability',
        'Chaos engineering and resilience testing',
        'Infrastructure as code (IaC) automation',
        'Performance optimization and tuning',
        'Incident response and post-mortem automation',
      ],
      pricing: '$7,000 - $32,000/month',
      delivery: '6-16 weeks',
      category: 'DevOps Services',
    },
    {
      title: 'Advanced AI/ML Infrastructure',
      description:
        'Machine learning operations (MLOps) with model deployment and monitoring',
      icon: Brain,
      features: [
        'MLOps pipeline development and automation',
        'Model training and deployment infrastructure',
        'AI model monitoring and drift detection',
        'Distributed training and inference systems',
        'AI model versioning and governance',
        'Edge AI deployment and optimization',
      ],
      pricing: '$12,000 - $55,000/month',
      delivery: '10-24 weeks',
      category: 'AI/ML Services',
    },
    {
      title: 'Advanced Compliance & Governance',
      description:
        'Regulatory compliance automation with audit trails and reporting',
      icon: Shield,
      features: [
        'Automated compliance monitoring and reporting',
        'Regulatory framework implementation (GDPR, HIPAA, SOX)',
        'Audit trail and evidence collection',
        'Risk assessment and management automation',
        'Policy management and enforcement',
        'Third-party risk management',
      ],
      pricing: '$6,000 - $28,000/month',
      delivery: '6-14 weeks',
      category: 'Compliance Services',
    },
    {
      title: 'Advanced Performance Engineering',
      description:
        'Application performance optimization with load testing and monitoring',
      icon: BarChart3,
      features: [
        'Performance testing and optimization',
        'Load testing and capacity planning',
        'Application performance monitoring (APM)',
        'Database performance tuning',
        'Caching strategy implementation',
        'Performance regression testing',
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '4-12 weeks',
      category: 'Performance Services',
    },
    {
      title: 'Advanced Integration & Middleware',
      description:
        'Enterprise integration with API management and data synchronization',
      icon: Link2,
      features: [
        'Enterprise service bus (ESB) implementation',
        'API integration and management',
        'Data synchronization and replication',
        'Message queuing and event streaming',
        'Legacy system integration and modernization',
        'Real-time data integration',
      ],
      pricing: '$7,000 - $35,000/month',
      delivery: '6-18 weeks',
      category: 'Integration Services',
    },
    {
      title: 'Advanced Backup & Disaster Recovery',
      description:
        'Comprehensive backup and disaster recovery with automation and testing',
      icon: Shield,
      features: [
        'Automated backup and recovery systems',
        'Disaster recovery planning and testing',
        'Business continuity management',
        'Data replication and synchronization',
        'Recovery time objective (RTO) optimization',
        'Cloud-based backup and recovery',
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-12 weeks',
      category: 'Backup Services',
    },
  ];
  const technologies = [
    {
      name: 'Cloud Platforms',
      icon: Cloud,
      description: 'AWS, Azure, GCP, DigitalOcean',
    },
    {
      name: 'Containerization',
      icon: Server,
      description: 'Docker, Kubernetes, OpenShift',
    },
    {
      name: 'Security Tools',
      icon: Shield,
      description: 'SIEM, WAF, IAM, Encryption',
    },
    {
      name: 'Monitoring',
      icon: BarChart3,
      description: 'Prometheus, Grafana, ELK Stack',
    },
    {
      name: 'Databases',
      icon: Database,
      description: 'PostgreSQL, MongoDB, Redis',
    },
    {
      name: 'Networking',
      icon: Network,
      description: 'Cisco, Fortinet, SD-WAN',
    },
  ];
  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and maintenance',
      icon: Clock,
      stat: '99.9%',
    },
    {
      title: 'Cost Savings',
      description: 'Optimized infrastructure and processes',
      icon: Zap,
      stat: '40%',
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade protection',
      icon: Shield,
      stat: '100%',
    },
    {
      title: 'Scalability',
      description: 'Flexible and scalable solutions',
      icon: TrendingUp,
      stat: 'Unlimited',
    },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/it-services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Server className="h-12 w-12 text-green-600 mr-4" />
              <Award className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-green-600">
                IT Services
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Information Technology Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive IT services that keep your business running
              smoothly. From cloud infrastructure to cybersecurity, we provide
              end-to-end technology solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover: bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                href="/pricing-guide"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our IT Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proven expertise and measurable results for your technology
              infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {benefit.stat}
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 sm: py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies We Master
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cutting-edge technologies powering modern IT infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <tech.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-4">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-24 sm: py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our IT Service Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive IT solutions tailored to your business needs. All
              services include implementation, training, and ongoing support.
              Contact us at{' '}
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-green-600 hover:text-green-500"
              >
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a
                href="tel:+13024640950"
                className="text-green-600 hover:text-green-500"
              >
                +1 302 464 0950
              </a>{' '}
              for custom pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-green-600 font-medium">
                      {service.category}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.delivery}</span>
                    </div>
                    <div className="font-semibold text-green-600">
                      {service.pricing}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-green-600 hover: text-green-500 transition-colors group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-50 py-16 sm: py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let's discuss how our IT services can optimize your technology
              infrastructure. Get a free consultation and custom proposal.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm: grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Call Us
                </h3>
                <a
                  href="tel:+13024640950"
                  className="text-green-600 hover:text-green-500"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-green-600 hover:text-green-500"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
              >
                Call Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
