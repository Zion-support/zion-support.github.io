import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import {},
  {
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
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Eye,
  Smartphone,
  Laptop,
  Building,
  BarChart3,
  Code,
  Bot,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket,
  FileText,
  Package
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
    title: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model with continuous verification and least privilege access.',
    icon: Shield,
    features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Continuous Monitoring'],
    pricing: '$15,000 - $75,000/project',
    category: 'Security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Deploy edge computing solutions for low-latency applications and IoT devices.',
    icon: Cpu,
    features: ['Edge Data Centers', 'IoT Integration', 'Low Latency Processing', 'Distributed Architecture'],
    pricing: '$20,000 - $100,000/project',
    category: 'Edge Computing'
  },
  {
    title: 'Quantum-Safe Cryptography',
    description: 'Implement quantum-resistant encryption to future-proof your security infrastructure.',
    icon: Lock,
    features: ['Post-Quantum Algorithms', 'Hybrid Cryptography', 'Migration Planning', 'Compliance'],
    pricing: '$25,000 - $150,000/project',
    category: 'Advanced Security'
  },
  {
    title: '5G Network Implementation',
    description: 'Design and deploy 5G networks for high-speed, low-latency connectivity.',
    icon: Wifi,
    features: ['5G Core Network', 'Network Slicing', 'Edge Computing Integration', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Telecommunications'
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Build and maintain blockchain networks for secure, decentralized applications.',
    icon: Network,
    features: ['Blockchain Deployment', 'Smart Contracts', 'Consensus Mechanisms', 'Node Management'],
    pricing: '$10,000 - $50,000/project',
    category: 'Blockchain'
  },
  {
    title: 'AI Infrastructure Management',
    description: 'Specialized infrastructure for AI/ML workloads with GPU clusters and data pipelines.',
    icon: Brain,
    features: ['GPU Clusters', 'ML Pipeline Management', 'Model Deployment', 'Performance Optimization'],
    pricing: '$8,000 - $40,000/month',
    category: 'AI Infrastructure'
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT infrastructure with energy-efficient hardware and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Efficiency', 'Carbon Tracking', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$5,000 - $30,000/project',
    category: 'Sustainability'
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless management of multi-cloud and hybrid cloud environments.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$12,000 - $60,000/project',
    category: 'Cloud Management'
  },
  {
    title: 'IoT Security & Management',
    description: 'Comprehensive security and management for Internet of Things devices and networks.',
    icon: Smartphone,
    features: ['Device Authentication', 'Network Security', 'Firmware Updates', 'Threat Detection'],
    pricing: '$6,000 - $35,000/project',
    category: 'IoT Security'
  },
  {
    title: 'Digital Twin Implementation',
    description: 'Create digital replicas of physical systems for simulation, monitoring, and optimization.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs'],
    pricing: '$20,000 - $100,000/project',
    category: 'Digital Twin'
  },
  {
    title: 'API Gateway & Management',
    description: 'Comprehensive API management platform with security, monitoring, and analytics.',
    icon: Code,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Analytics Dashboard'],
    pricing: '$3,000 - $15,000/month',
    category: 'API Management'
  },
  {
    title: 'Disaster Recovery as a Service',
    description: 'Comprehensive disaster recovery solutions with automated failover and testing.',
    icon: Shield,
    features: ['Automated Failover', 'Regular Testing', 'RTO/RPO Optimization', 'Compliance'],
    pricing: '$2,000 - $12,000/month',
    category: 'Disaster Recovery'
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Ensure compliance with industry regulations and implement governance frameworks.',
    icon: CheckCircle,
    features: ['Compliance Auditing', 'Policy Management', 'Risk Assessment', 'Reporting'],
    pricing: '$5,000 - $25,000/project',
    category: 'Compliance'
  },
  {
    title: 'Microservices Architecture',
    description: 'Design and implement microservices architecture for scalable, maintainable applications.',
    icon: Server,
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring'],
    pricing: '$15,000 - $75,000/project',
    category: 'Architecture'
  },
  {
    title: 'IT Cost Optimization',
    description: 'Comprehensive IT cost analysis and optimization across all technology investments.',
    icon: DollarSign,
    features: ['Cost Analysis', 'License Optimization', 'Resource Right-sizing', 'ROI Tracking'],
    pricing: '$3,000 - $15,000/project',
    category: 'Cost Management'
  },
  {
    title: 'IT Training & Certification',
    description: 'Comprehensive IT training programs and certification for your team.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Certification Paths', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$500 - $2,500/person',
    category: 'Training'
  },
  {
    title: 'IT Vendor Management',
    description: 'Strategic vendor relationship management and technology procurement optimization.',
    icon: Users,
    features: ['Vendor Assessment', 'Contract Negotiation', 'Performance Monitoring', 'Cost Optimization'],
    pricing: '$2,000 - $10,000/month',
    category: 'Vendor Management'
  },
  {
    title: 'IT Innovation Lab',
    description: 'Dedicated innovation lab for exploring emerging technologies and proof-of-concepts.',
    icon: Rocket,
    features: ['Technology Research', 'Proof of Concepts', 'Innovation Workshops', 'Technology Roadmaps'],
    pricing: '$5,000 - $25,000/month',
    category: 'Innovation'
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
    title: 'Blockchain & Cryptocurrency Solutions',
    description: 'Blockchain implementation, smart contracts, and cryptocurrency integration services.',
    icon: Shield,
    features: ['Blockchain Development', 'Smart Contracts', 'DeFi Solutions', 'Crypto Integration'],
    pricing: '$25,000 - $150,000/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Infrastructure & Management',
    description: 'Internet of Things infrastructure design, implementation, and management services.',
    icon: Wifi,
    features: ['IoT Architecture', 'Sensor Integration', 'Data Collection', 'Device Management'],
    pricing: '$15,000 - $75,000/project',
    category: 'IoT'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure and distributed computing solutions for low-latency applications.',
    icon: Cpu,
    features: ['Edge Infrastructure', 'Latency Optimization', 'Distributed Processing', 'Real-time Analytics'],
    pricing: '$20,000 - $100,000/project',
    category: 'Edge Computing'
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing solutions and hybrid classical-quantum system integration.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Hybrid Systems', 'Quantum Security', 'Performance Optimization'],
    pricing: '$100,000 - $500,000/project',
    category: 'Quantum Computing'
  },
  {
    title: '5G Network Implementation',
    description: '5G network infrastructure design, implementation, and optimization services.',
    icon: Network,
    features: ['5G Infrastructure', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$50,000 - $250,000/project',
    category: '5G Networks'
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Comprehensive digital transformation strategy and implementation services.',
    icon: Rocket,
    features: ['Digital Strategy', 'Process Automation', 'Technology Integration', 'Change Management'],
    pricing: '$25,000 - $125,000/project',
    category: 'Digital Transformation',
    popular: true
  },
  {
    title: 'API Gateway & Management',
    description: 'API gateway implementation, management, and microservices architecture services.',
    icon: Network,
    features: ['API Gateway Setup', 'Rate Limiting', 'Authentication', 'Monitoring'],
    pricing: '$10,000 - $50,000/setup',
    category: 'API Management'
  },
  {
    title: 'Container Orchestration & Kubernetes',
    description: 'Kubernetes implementation, container orchestration, and microservices management.',
    icon: Server,
    features: ['Kubernetes Setup', 'Container Management', 'Auto-scaling', 'Service Mesh'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Containerization'
  },
  {
    title: 'Serverless Architecture Implementation',
    description: 'Serverless computing solutions and function-as-a-service implementation.',
    icon: Cloud,
    features: ['Serverless Setup', 'Function Development', 'Event Processing', 'Cost Optimization'],
    pricing: '$8,000 - $40,000/project',
    category: 'Serverless'
  },
  {
    title: 'Data Lake & Data Warehouse Solutions',
    description: 'Big data infrastructure, data lakes, and data warehouse implementation services.',
    icon: Database,
    features: ['Data Lake Setup', 'ETL Pipelines', 'Data Governance', 'Analytics Platform'],
    pricing: '$20,000 - $100,000/project',
    category: 'Big Data'
  },
  {
    title: 'Machine Learning Infrastructure',
    description: 'ML infrastructure setup, model deployment, and MLOps implementation services.',
    icon: Brain,
    features: ['ML Pipeline Setup', 'Model Deployment', 'MLOps Implementation', 'Monitoring'],
    pricing: '$15,000 - $75,000/setup',
    category: 'ML Infrastructure'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Zero trust security model implementation and identity management solutions.',
    icon: Shield,
    features: ['Identity Management', 'Access Controls', 'Network Segmentation', 'Continuous Monitoring'],
    pricing: '$25,000 - $125,000/project',
    category: 'Zero Trust Security'
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Multi-cloud and hybrid cloud management and optimization services.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Management', 'Migration Services'],
    pricing: '$20,000 - $100,000/project',
    category: 'Hybrid Cloud'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'ITIL-based service management implementation and process optimization.',
    icon: Settings,
    features: ['ITIL Implementation', 'Service Catalog', 'Incident Management', 'Change Management'],
    pricing: '$10,000 - $50,000/setup',
    category: 'ITSM'
  },
  {
    title: 'Business Intelligence & Analytics',
    description: 'BI platform implementation, data visualization, and business analytics solutions.',
    icon: BarChart3,
    features: ['BI Platform Setup', 'Data Visualization', 'Dashboard Creation', 'Advanced Analytics'],
    pricing: '$15,000 - $75,000/project',
    category: 'Business Intelligence'
  },
  {
    title: 'IT Risk Management',
    description: 'Comprehensive IT risk assessment, management, and mitigation services.',
    icon: Shield,
    features: ['Risk Assessment', 'Threat Modeling', 'Vulnerability Management', 'Risk Mitigation'],
    pricing: '$8,000 - $40,000/project',
    category: 'Risk Management'
  },
  {
    title: 'IT Cost Optimization',
    description: 'IT infrastructure cost analysis and optimization services for better ROI.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Resource Optimization', 'Vendor Negotiation', 'ROI Improvement'],
    pricing: '$5,000 - $25,000/project',
    category: 'Cost Optimization'
  },
  {
    title: 'IT Performance Monitoring',
    description: 'Comprehensive IT infrastructure monitoring and performance optimization services.',
    icon: Monitor,
    features: ['Infrastructure Monitoring', 'Performance Analysis', 'Alerting Systems', 'Capacity Planning'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Performance Monitoring'
  },
  {
    title: 'IT Innovation & Emerging Technologies',
    description: 'Emerging technology evaluation, pilot implementation, and innovation consulting.',
    icon: Rocket,
    features: ['Technology Evaluation', 'Pilot Projects', 'Innovation Strategy', 'Proof of Concept'],
    pricing: '$10,000 - $50,000/project',
    category: 'Innovation'
  },
  {
    title: 'IT Sustainability & Green Computing',
    description: 'Sustainable IT practices, energy efficiency, and environmental impact reduction.',
    icon: Sprout,
    features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Green IT Strategy', 'Sustainability Reporting'],
    pricing: '$8,000 - $40,000/project',
    category: 'Sustainability'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure and deployment for low-latency applications.',
    icon: Cpu,
    features: ['Edge Infrastructure', 'Latency Optimization', 'Distributed Processing', 'Real-time Analytics'],
    pricing: '$20,000 - $100,000/project',
    category: 'Edge Computing',
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
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing infrastructure setup and management for research and enterprise applications.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Quantum Software Stack', 'Hybrid Classical-Quantum Systems', 'Quantum Network Management'],
    pricing: '$100,000 - $500,000/setup',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure and management for IoT and real-time applications.',
    icon: Server,
    features: ['Edge Node Deployment', 'Edge-to-Cloud Integration', 'Real-time Processing', 'Distributed Management'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Edge Computing'
  },
  {
    title: '5G Network Implementation',
    description: '5G network infrastructure design, implementation, and optimization services.',
    icon: Network,
    features: ['5G Core Network', 'RAN Optimization', 'Network Slicing', 'Performance Monitoring'],
    pricing: '$50,000 - $300,000/project',
    category: '5G Networks'
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Blockchain network setup, node management, and smart contract infrastructure.',
    icon: Shield,
    features: ['Blockchain Network Setup', 'Node Management', 'Smart Contract Deployment', 'Consensus Management'],
    pricing: '$30,000 - $200,000/setup',
    category: 'Blockchain Infrastructure'
  },
  {
    title: 'AI/ML Infrastructure Management',
    description: 'Specialized infrastructure for AI and machine learning workloads and model deployment.',
    icon: Brain,
    features: ['GPU Cluster Management', 'Model Training Infrastructure', 'MLOps Pipeline', 'Model Serving'],
    pricing: '$40,000 - $250,000/setup',
    category: 'AI Infrastructure'
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT infrastructure and energy-efficient computing solutions.',
    icon: Sprout,
    features: ['Energy Efficiency Optimization', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$20,000 - $120,000/project',
    category: 'Green IT'
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Comprehensive hybrid cloud infrastructure management across multiple cloud providers.',
    icon: Cloud,
    features: ['Multi-cloud Orchestration', 'Workload Migration', 'Cost Optimization', 'Security Management'],
    pricing: '$35,000 - $200,000/setup',
    category: 'Hybrid Cloud'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Zero Trust security model implementation and network architecture design.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$45,000 - $250,000/setup',
    category: 'Zero Trust Security'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'ITIL-based service management implementation and process optimization.',
    icon: Settings,
    features: ['Service Catalog Management', 'Incident Management', 'Change Management', 'Service Level Management'],
    pricing: '$25,000 - $150,000/setup',
    category: 'ITSM'
  },
  {
    title: 'Digital Workplace Solutions',
    description: 'Modern digital workplace infrastructure and collaboration tools implementation.',
    icon: Users,
    features: ['Collaboration Platforms', 'Unified Communications', 'Digital Signage', 'Employee Experience'],
    pricing: '$30,000 - $180,000/setup',
    category: 'Digital Workplace'
  },
  {
    title: 'IT Compliance & Governance',
    description: 'IT compliance framework implementation and governance structure development.',
    icon: Shield,
    features: ['Compliance Framework', 'Policy Development', 'Risk Assessment', 'Audit Preparation'],
    pricing: '$20,000 - $120,000/project',
    category: 'Compliance & Governance'
  },
  {
    title: 'High-Performance Computing (HPC)',
    description: 'High-performance computing infrastructure for scientific and engineering applications.',
    icon: Cpu,
    features: ['HPC Cluster Design', 'Parallel Processing', 'Job Scheduling', 'Performance Optimization'],
    pricing: '$60,000 - $400,000/setup',
    category: 'HPC'
  },
  {
    title: 'IT Disaster Recovery as a Service',
    description: 'Comprehensive disaster recovery services with guaranteed RTO and RPO.',
    icon: Shield,
    features: ['Disaster Recovery Planning', 'Backup Services', 'Failover Testing', 'Recovery Guarantees'],
    pricing: '$5,000 - $50,000/month',
    category: 'DRaaS'
  },
  {
    title: 'IT Cost Optimization Services',
    description: 'IT cost analysis and optimization strategies for infrastructure and software licensing.',
    icon: DollarSign,
    features: ['Cost Analysis', 'License Optimization', 'Resource Right-sizing', 'Vendor Negotiation'],
    pricing: '$15,000 - $100,000/project',
    category: 'Cost Optimization'
  },
  {
    title: 'IT Innovation Lab Services',
    description: 'Dedicated innovation lab setup for emerging technology experimentation and proof of concepts.',
    icon: Rocket,
    features: ['Lab Infrastructure', 'Technology Evaluation', 'Proof of Concepts', 'Innovation Consulting'],
    pricing: '$50,000 - $300,000/setup',
    category: 'Innovation Lab'
  },
  {
    title: 'IT Performance Monitoring & Analytics',
    description: 'Advanced IT performance monitoring and analytics platform implementation.',
    icon: BarChart3,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Predictive Analytics', 'Custom Dashboards'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Performance Monitoring'
  },
  {
    title: 'IT Capacity Planning Services',
    description: 'IT capacity planning and resource forecasting for optimal infrastructure scaling.',
    icon: TrendingUp,
    features: ['Capacity Analysis', 'Growth Forecasting', 'Resource Planning', 'Cost Projections'],
    pricing: '$20,000 - $120,000/project',
    category: 'Capacity Planning'
  },
  {
    title: 'IT Vendor Management Services',
    description: 'Comprehensive IT vendor management and relationship optimization services.',
    icon: Users,
    features: ['Vendor Assessment', 'Contract Management', 'Performance Monitoring', 'Cost Optimization'],
    pricing: '$10,000 - $80,000/project',
    category: 'Vendor Management'
  },
  {
    title: 'IT Change Management',
    description: 'Structured IT change management processes and implementation support.',
    icon: Settings,
    features: ['Change Process Design', 'Risk Assessment', 'Change Implementation', 'Post-Change Review'],
    pricing: '$15,000 - $100,000/project',
    category: 'Change Management'
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
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',
    icon: Shield,
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],
    pricing: '$50,000 - $300,000/project',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$75,000 - $500,000/project',
    category: '5G Networks',
    popular: true
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management for connected environments.',
    icon: Smartphone,
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],
    pricing: '$35,000 - $200,000/setup',
    category: 'IoT Security',
    popular: true
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$45,000 - $300,000/project',
    category: 'Hybrid Cloud',
    popular: true
  },
  {
    title: 'AI Model Infrastructure & MLOps',
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',
    icon: Brain,
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],
    pricing: '$30,000 - $150,000/setup',
    category: 'MLOps',
    popular: true
  },
  {
    title: 'IT Asset Lifecycle Management',
    description: 'Complete IT asset lifecycle management from procurement to disposal.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Asset Management',
    popular: true
  },
  {
    title: 'Advanced Persistent Threat (APT) Protection',
    description: 'Specialized protection against advanced persistent threats and sophisticated attacks.',
    icon: Shield,
    features: ['Threat Hunting', 'Behavioral Analysis', 'Incident Response', 'Forensic Analysis'],
    pricing: '$40,000 - $200,000/setup',
    category: 'Advanced Security',
    popular: true
  },
  {
    title: 'IT Governance & Risk Management',
    description: 'Comprehensive IT governance framework with risk management and compliance.',
    icon: Building,
    features: ['Governance Framework', 'Risk Assessment', 'Compliance Monitoring', 'Policy Management'],
    pricing: '$20,000 - $100,000/project',
    category: 'Governance',
    popular: true
  },
  {
    title: 'Cloud-Native Application Development',
    description: 'Modern cloud-native application development with microservices and containers.',
    icon: Code,
    features: ['Microservices Design', 'Container Development', 'CI/CD Pipelines', 'Cloud Integration'],
    pricing: '$50,000 - $300,000/project',
    category: 'Cloud Development',
    popular: true
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive IT performance optimization across infrastructure and applications.',
    icon: Zap,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring'],
    pricing: '$15,000 - $80,000/project',
    category: 'Performance',
    popular: true
  },
  {
    title: 'IT Compliance & Audit Services',
    description: 'Comprehensive compliance management for various regulatory requirements.',
    icon: Shield,
    features: ['Compliance Assessment', 'Audit Preparation', 'Policy Development', 'Training'],
    pricing: '$25,000 - $150,000/project',
    category: 'Compliance',
    popular: true
  },
  {
    title: 'IT Innovation & Digital Transformation',
    description: 'Strategic IT innovation and digital transformation consulting and implementation.',
    icon: Rocket,
    features: ['Digital Strategy', 'Technology Roadmap', 'Innovation Labs', 'Change Management'],
    pricing: '$50,000 - $500,000/project',
    category: 'Digital Transformation',
    popular: true
  },
  {
    title: 'AI-Powered IT Operations',
    description: 'Intelligent IT operations using AI for predictive maintenance and automation.',
    icon: Bot,
    features: ['Predictive Maintenance', 'Automated Incident Response', 'Performance Optimization', 'Anomaly Detection'],
    pricing: '$15,000 - $75,000/setup',
    category: 'AI Operations',
    popular: true
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure and management for distributed applications.',
    icon: Cpu,
    features: ['Edge Infrastructure', 'Latency Optimization', 'Distributed Processing', 'Remote Management'],
    pricing: '$20,000 - $100,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: '5G Network Implementation',
    description: '5G network design, implementation, and optimization services.',
    icon: Network,
    features: ['5G Planning', 'Network Slicing', 'Performance Optimization', 'Security Implementation'],
    pricing: '$50,000 - $500,000/project',
    category: '5G Technology',
    popular: true
  },
  {
    title: 'IoT Infrastructure Management',
    description: 'Comprehensive IoT infrastructure design, implementation, and management.',
    icon: Network,
    features: ['IoT Architecture', 'Device Management', 'Data Processing', 'Security Implementation'],
    pricing: '$25,000 - $150,000/project',
    category: 'IoT',
    popular: true
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing infrastructure and integration services.',
    icon: Cpu,
    features: ['Quantum Infrastructure', 'Algorithm Development', 'Hybrid Computing', 'Security Implementation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'AR/VR Infrastructure',
    description: 'Augmented and virtual reality infrastructure setup and management.',
    icon: Monitor,
    features: ['AR/VR Setup', 'Content Management', 'Performance Optimization', 'User Experience'],
    pricing: '$40,000 - $300,000/project',
    category: 'AR/VR',
    popular: true
  },
  {
    title: 'Metaverse Infrastructure',
    description: 'Complete metaverse infrastructure and platform development services.',
    icon: Globe,
    features: ['Virtual Worlds', 'Avatar Systems', 'Real-time Interactions', 'Blockchain Integration'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Metaverse',
    popular: true
  },
  {
    title: 'API Management & Governance',
    description: 'Comprehensive API management, security, and governance solutions.',
    icon: Code,
    features: ['API Gateway', 'Rate Limiting', 'Security Policies', 'Analytics & Monitoring'],
    pricing: '$10,000 - $75,000/setup',
    category: 'API Management',
    popular: true
  },
  {
    title: 'Data Mesh Architecture',
    description: 'Data mesh architecture implementation for distributed data management.',
    icon: Database,
    features: ['Data Domains', 'Self-serve Platform', 'Federated Governance', 'Product Thinking'],
    pricing: '$50,000 - $500,000/project',
    category: 'Data Architecture',
    popular: true
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices architecture design, implementation, and management.',
    icon: Server,
    features: ['Service Design', 'API Gateway', 'Service Mesh', 'Monitoring & Observability'],
    pricing: '$30,000 - $250,000/project',
    category: 'Microservices',
    popular: true
  },
  {
    title: 'Serverless Architecture',
    description: 'Serverless architecture implementation and optimization services.',
    icon: Cloud,
    features: ['Function Design', 'Event-driven Architecture', 'Cost Optimization', 'Performance Tuning'],
    pricing: '$15,000 - $100,000/project',
    category: 'Serverless',
    popular: true
  },
  {
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations with machine learning-powered monitoring and automation.',
    icon: Brain,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Root Cause Analysis'],
    pricing: '$25,000 - $200,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation with identity and access management.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$40,000 - $300,000/project',
    category: 'Security',
    popular: true
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for low-latency applications and IoT deployments.',
    icon: Wifi,
    features: ['Edge Nodes', 'Data Processing', 'Real-time Analytics', 'IoT Integration'],
    pricing: '$20,000 - $150,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Quantum-Safe Cryptography',
    description: 'Post-quantum cryptography implementation for future-proof security.',
    icon: Shield,
    features: ['Quantum-resistant Algorithms', 'Key Management', 'Migration Planning', 'Compliance'],
    pricing: '$50,000 - $400,000/project',
    category: 'Advanced Security',
    popular: true
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Network,
    features: ['Network Design', 'Core Network', 'Edge Computing', 'Performance Optimization'],
    pricing: '$100,000 - $1,000,000/project',
    category: '5G Technology',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Blockchain network setup, smart contract development, and decentralized application hosting.',
    icon: Lock,
    features: ['Blockchain Setup', 'Smart Contracts', 'DApp Development', 'Node Management'],
    pricing: '$30,000 - $250,000/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platform with device management, data processing, and analytics.',
    icon: Settings,
    features: ['Device Management', 'Data Ingestion', 'Real-time Processing', 'Analytics Dashboard'],
    pricing: '$40,000 - $300,000/project',
    category: 'IoT',
    popular: true
  },
  {
    title: 'Multi-Cloud Management Platform',
    description: 'Unified management platform for multi-cloud environments with cost optimization.',
    icon: Cloud,
    features: ['Multi-cloud Monitoring', 'Cost Optimization', 'Resource Management', 'Security Compliance'],
    pricing: '$35,000 - $250,000/project',
    category: 'Cloud Management',
    popular: true
  },
  {
    title: 'Advanced Threat Intelligence',
    description: 'Comprehensive threat intelligence platform with real-time monitoring and response.',
    icon: Shield,
    features: ['Threat Detection', 'Intelligence Gathering', 'Incident Response', 'Threat Hunting'],
    pricing: '$45,000 - $350,000/setup',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'Data Lake Architecture',
    description: 'Scalable data lake implementation with real-time processing and analytics capabilities.',
    icon: Database,
    features: ['Data Ingestion', 'Storage Optimization', 'Real-time Processing', 'Analytics Tools'],
    pricing: '$50,000 - $400,000/project',
    category: 'Data Management',
    popular: true
  },
  {
    title: 'API Gateway & Management',
    description: 'Comprehensive API management platform with security, monitoring, and analytics.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Analytics Dashboard'],
    pricing: '$25,000 - $150,000/project',
    category: 'API Management',
    popular: true
  },
  {
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning and implementation.',
    icon: Shield,
    features: ['Backup Strategies', 'Recovery Planning', 'Testing', 'Compliance'],
    pricing: '$30,000 - $200,000/project',
    category: 'Disaster Recovery',
    popular: true
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Comprehensive IT compliance and governance framework implementation.',
    icon: FileText,
    features: ['Compliance Assessment', 'Policy Development', 'Audit Support', 'Training'],
    pricing: '$20,000 - $150,000/project',
    category: 'Compliance',
    popular: true
  },
  {
    title: 'Advanced Monitoring & Observability',
    description: 'Comprehensive monitoring and observability platform with AI-powered insights.',
    icon: Monitor,
    features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Analysis', 'Performance Insights'],
    pricing: '$25,000 - $180,000/setup',
    category: 'Monitoring',
    popular: true
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset management with lifecycle tracking and optimization.',
    icon: Package,
    features: ['Asset Discovery', 'Lifecycle Management', 'Cost Optimization', 'Compliance Tracking'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Asset Management',
    popular: true
  },
  {
    title: 'Network Performance Optimization',
    description: 'Advanced network performance optimization with AI-powered analysis and tuning.',
    icon: Network,
    features: ['Performance Analysis', 'Traffic Optimization', 'QoS Management', 'Bandwidth Optimization'],
    pricing: '$20,000 - $120,000/project',
    category: 'Network Optimization',
    popular: true
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Comprehensive IT service management platform with automation and AI capabilities.',
    icon: Settings,
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Automation'],
    pricing: '$30,000 - $200,000/setup',
    category: 'Service Management',
    popular: true
  },
  {
    title: 'Zero-Trust Security Architecture',
    description: 'Comprehensive zero-trust security implementation with identity verification and micro-segmentation.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$75,000 - $500,000/project',
    category: 'Security Architecture',
    popular: true
  },
  {
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations with machine learning for predictive maintenance and automated incident response.',
    icon: Brain,
    features: ['Predictive Maintenance', 'Automated Incident Response', 'Anomaly Detection', 'Root Cause Analysis'],
    pricing: '$50,000 - $300,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Multi-Cloud Strategy & Management',
    description: 'Comprehensive multi-cloud strategy with unified management across AWS, Azure, and GCP.',
    icon: Cloud,
    features: ['Multi-cloud Architecture', 'Unified Management', 'Cost Optimization', 'Disaster Recovery'],
    pricing: '$100,000 - $750,000/project',
    category: 'Cloud Strategy'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing solutions for low-latency applications and IoT integration.',
    icon: Cpu,
    features: ['Edge Nodes', 'Latency Optimization', 'IoT Integration', 'Real-time Processing'],
    pricing: '$80,000 - $400,000/project',
    category: 'Edge Computing'
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Post-quantum cryptography implementation to protect against future quantum computing threats.',
    icon: Lock,
    features: ['Quantum-Safe Algorithms', 'Migration Planning', 'Compliance Support', 'Performance Optimization'],
    pricing: '$150,000 - $1,000,000/project',
    category: 'Quantum Security'
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Network,
    features: ['5G Core Network', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$200,000 - $1,500,000/project',
    category: '5G Networks'
  },
  {
    title: 'Hybrid Cloud Integration',
    description: 'Seamless integration between on-premises and cloud environments with unified management.',
    icon: Server,
    features: ['Hybrid Architecture', 'Data Synchronization', 'Unified Management', 'Security Integration'],
    pricing: '$60,000 - $400,000/project',
    category: 'Hybrid Cloud'
  },
  {
    title: 'IT Service Management (ITSM) Implementation',
    description: 'Complete ITSM framework implementation with service catalog, change management, and incident response.',
    icon: Settings,
    features: ['Service Catalog', 'Change Management', 'Incident Response', 'Service Level Management'],
    pricing: '$40,000 - $250,000/setup',
    category: 'ITSM'
  },
  {
    title: 'Disaster Recovery as a Service (DRaaS)',
    description: 'Comprehensive disaster recovery solutions with automated failover and data replication.',
    icon: Shield,
    features: ['Automated Failover', 'Data Replication', 'RTO/RPO Optimization', 'Testing & Validation'],
    pricing: '$5,000 - $50,000/month',
    category: 'Disaster Recovery'
  },
  {
    title: 'IT Governance & Risk Management',
    description: 'Comprehensive IT governance framework with risk assessment and compliance management.',
    icon: Building,
    features: ['Governance Framework', 'Risk Assessment', 'Compliance Management', 'Policy Development'],
    pricing: '$75,000 - $500,000/project',
    category: 'IT Governance'
  },
  {
    title: 'API-First Architecture Design',
    description: 'API-first architecture design and implementation with microservices and API gateway solutions.',
    icon: Network,
    features: ['API Design', 'Microservices Architecture', 'API Gateway', 'Developer Portal'],
    pricing: '$50,000 - $300,000/project',
    category: 'API Architecture'
  },
  {
    title: 'IT Asset Lifecycle Management',
    description: 'Comprehensive IT asset management from procurement to disposal with cost optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'Lifecycle Tracking', 'Cost Optimization', 'Compliance Reporting'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Asset Management'
  },
  {
    title: 'Cybersecurity Incident Response',
    description: '24/7 cybersecurity incident response with threat hunting and forensic analysis.',
    icon: Shield,
    features: ['24/7 Monitoring', 'Threat Hunting', 'Forensic Analysis', 'Incident Containment'],
    pricing: '$10,000 - $100,000/month',
    category: 'Incident Response'
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive IT performance analysis and optimization across all infrastructure components.',
    icon: TrendingUp,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring Setup'],
    pricing: '$30,000 - $200,000/project',
    category: 'Performance Optimization'
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT solutions with energy efficiency and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Efficiency', 'Carbon Tracking', 'Sustainable Procurement', 'Green Certifications'],
    pricing: '$40,000 - $250,000/project',
    category: 'Green IT'
  },
  {
    title: 'IT Compliance & Audit Services',
    description: 'Comprehensive IT compliance assessment and audit services for various regulatory requirements.',
    icon: Shield,
    features: ['Compliance Assessment', 'Audit Preparation', 'Regulatory Reporting', 'Remediation Support'],
    pricing: '$25,000 - $150,000/project',
    category: 'Compliance'
  },
  {
    title: 'IT Training & Certification Programs',
    description: 'Comprehensive IT training programs with certification preparation and hands-on labs.',
    icon: BookOpen,
    features: ['Custom Training', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$500 - $2,500/person/day',
    category: 'Training'
  },
  {
    title: 'IT Vendor Management & Procurement',
    description: 'Strategic IT vendor management with procurement optimization and contract negotiation.',
    icon: ShoppingCart,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Optimization', 'Vendor Performance'],
    pricing: '$50,000 - $300,000/project',
    category: 'Vendor Management'
  },
  {
    title: 'IT Innovation & Digital Transformation',
    description: 'Strategic IT innovation consulting with digital transformation roadmap and implementation.',
    icon: Rocket,
    features: ['Innovation Strategy', 'Digital Roadmap', 'Technology Assessment', 'Change Management'],
    pricing: '$100,000 - $750,000/project',
    category: 'Digital Transformation'
  },
  {
    title: 'Cloud Migration & Modernization',
    description: 'Comprehensive cloud migration and application modernization services.',
    icon: Cloud,
    features: ['Migration Planning', 'Application Modernization', 'Data Migration', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Cloud Migration',
    popular: true
  },
  {
    title: 'IT Training & Certification',
    description: 'Comprehensive IT training and certification programs for teams and individuals.',
    icon: BookOpen,
    features: ['Technical Training', 'Certification Prep', 'Hands-on Labs', 'Custom Curriculum'],
    pricing: '$2,000 - $15,000 per person',
    category: 'Training',
    popular: true
  },
  {
];

export default function ITServicesPage() {},
  {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, and digital transformation." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, infrastructure, digital transformation, IT consulting" />
      </Head>

      {/* Hero Section */},
  {
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
          </div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }},
  {
            animate={{ opacity: 1, y: 0 }},
  {
            transition={{ duration: 0.8 }},
  {
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services;
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions to power your digital transformation;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */},
  {
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }},
  {
            whileInView={{ opacity: 1, y: 0 }},
  {
            transition={{ duration: 0.8 }},
  {
            viewport={{ once: true }},
  {
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions;
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end IT services designed to optimize your technology infrastructure;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {itServices.map((service, index) => {},
  {
              const IconComponent = service.icon;
              return (
    <motion.div
                  key={index},
  {
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                  initial={{ opacity: 0, y: 30 }},
  {
                  whileInView={{ opacity: 1, y: 0 }},
  {
                  transition={{ duration: 0.8, delay: index * 0.1 }},
  {
                  viewport={{ once: true }},
  {
                  whileHover={{ y: -5 }},
  {
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-12 w-12 text-green-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-green-600 font-semibold">{service.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-200"
                  >
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              )
  })},
  {
          </div>
        </div>
      </section>

      {/* CTA Section */},
  {
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }},
  {
            whileInView={{ opacity: 1, y: 0 }},
  {
            transition={{ duration: 0.8 }},
  {
            viewport={{ once: true }},
  {
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get IT Assessment;
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
              >
                View All Services;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
  },
  {