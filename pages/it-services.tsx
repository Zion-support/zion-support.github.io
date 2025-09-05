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
  Headphones,
  Package,
  BookOpen,
  Kanban,
  DollarSign,
  Code,
  Rocket,
  Sprout,
  Car,
  Brain,
  Heart,
  ShoppingCart,
  FileText
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud',
    link: 'https://cloudinfra.ziontechgroup.com'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$5,000 - $40,000/project',
    category: 'Security',
    popular: true,
    link: 'https://cybersecurity.ziontechgroup.com'
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220/hour',
    category: 'Networking',
    link: 'https://networkinfra.ziontechgroup.com'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database',
    link: 'https://databasemgmt.ziontechgroup.com'
  },
  {
    title: 'System Administration',
    description: '24/7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2,000 - $8,000/month',
    category: 'Administration',
    link: 'https://sysadmin.ziontechgroup.com'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    link: 'https://itconsulting.ziontechgroup.com'
  },
  {
    title: 'DevOps & CI/CD Pipeline',
    description: 'Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code.',
    icon: Cpu,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    pricing: '$8,000 - $35,000/project',
    category: 'DevOps',
    link: 'https://devops.ziontechgroup.com'
  },
  {
    title: 'Data Center Services',
    description: 'Complete data center design, implementation, and management services.',
    icon: Server,
    features: ['Data Center Design', 'Hardware Installation', 'Power & Cooling', 'Remote Management'],
    pricing: '$15,000 - $100,000/project',
    category: 'Data Center',
    link: 'https://datacenter.ziontechgroup.com'
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 IT support services with multi-tier helpdesk solutions.',
    icon: Headphones,
    features: ['24/7 Support', 'Multi-tier Helpdesk', 'Remote Assistance', 'Knowledge Base'],
    pricing: '$1,500 - $6,000/month',
    category: 'Support',
    link: 'https://itsupport.ziontechgroup.com'
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning and implementation.',
    icon: HardDrive,
    features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Replication', 'Recovery Testing'],
    pricing: '$3,000 - $20,000/project',
    category: 'Backup & Recovery',
    link: 'https://backuprecovery.ziontechgroup.com'
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset lifecycle management and tracking solutions.',
    icon: Package,
    features: ['Asset Tracking', 'License Management', 'Lifecycle Planning', 'Cost Optimization'],
    pricing: '$2,000 - $12,000/project',
    category: 'Asset Management',
    link: 'https://itassets.ziontechgroup.com'
  },
  {
    title: 'Network Security & Firewall',
    description: 'Advanced network security implementation with next-generation firewall solutions.',
    icon: Lock,
    features: ['Next-gen Firewalls', 'Intrusion Detection', 'VPN Solutions', 'Security Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'Network Security',
    link: 'https://networksecurity.ziontechgroup.com'
  },
  {
    title: 'Cloud Migration Services',
    description: 'Seamless migration of applications and data to cloud platforms.',
    icon: Cloud,
    features: ['Migration Planning', 'Data Migration', 'Application Modernization', 'Performance Optimization'],
    pricing: '$10,000 - $50,000/project',
    category: 'Cloud Migration',
    link: 'https://cloudmigration.ziontechgroup.com'
  },
  {
    title: 'IT Compliance & Governance',
    description: 'IT compliance management and governance framework implementation.',
    icon: Shield,
    features: ['Compliance Auditing', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting'],
    pricing: '$8,000 - $40,000/project',
    category: 'Compliance',
    link: 'https://itcompliance.ziontechgroup.com'
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe'],
    pricing: '$2,000 - $10,000/project',
    category: 'Mobile Management',
    link: 'https://mobiledevices.ziontechgroup.com'
  },
  {
    title: 'IT Training & Certification',
    description: 'Comprehensive IT training programs and certification preparation.',
    icon: BookOpen,
    features: ['Technical Training', 'Certification Prep', 'Hands-on Labs', 'Custom Curriculum'],
    pricing: '$500 - $3,000/person',
    category: 'Training',
    link: 'https://ittraining.ziontechgroup.com'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management services for complex technology implementations.',
    icon: Kanban,
    features: ['Project Planning', 'Resource Management', 'Risk Management', 'Quality Assurance'],
    pricing: '$150 - $250/hour',
    category: 'Project Management',
    link: 'https://itprojects.ziontechgroup.com'
  },
  {
    title: 'IT Vendor Management',
    description: 'Strategic vendor relationship management and procurement optimization.',
    icon: Building,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Performance Monitoring', 'Cost Optimization'],
    pricing: '$2,000 - $15,000/project',
    category: 'Vendor Management',
    link: 'https://itvendors.ziontechgroup.com'
  },
  {
    title: 'IT Performance Monitoring',
    description: 'Advanced IT infrastructure monitoring and performance optimization services.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning'],
    pricing: '$3,000 - $18,000/project',
    category: 'Monitoring',
    link: 'https://itmonitoring.ziontechgroup.com'
  },
  {
    title: 'IT Cost Optimization',
    description: 'Comprehensive IT cost analysis and optimization strategies.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Budget Planning', 'Resource Optimization', 'ROI Analysis'],
    pricing: '$5,000 - $25,000/project',
    category: 'Cost Optimization',
    link: 'https://itcosts.ziontechgroup.com'
  },
  {
    title: 'Enterprise Software Development',
    description: 'Custom enterprise software development with modern technologies and best practices.',
    icon: Code,
    features: ['Custom Development', 'Modern Frameworks', 'API Integration', 'Scalable Architecture'],
    pricing: '$15,000 - $100,000/project',
    category: 'Software Development',
    popular: true,
    link: 'https://enterprisesoftware.ziontechgroup.com'
  },
  {
    title: 'IT Infrastructure Assessment',
    description: 'Comprehensive IT infrastructure evaluation and optimization recommendations.',
    icon: BarChart3,
    features: ['Infrastructure Audit', 'Performance Analysis', 'Security Assessment', 'Optimization Plan'],
    pricing: '$5,000 - $30,000/project',
    category: 'Infrastructure',
    link: 'https://itassessment.ziontechgroup.com'
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation planning and implementation services.',
    icon: Rocket,
    features: ['Digital Strategy', 'Process Automation', 'Technology Roadmap', 'Change Management'],
    pricing: '$20,000 - $150,000/project',
    category: 'Digital Transformation',
    link: 'https://digitaltransformation.ziontechgroup.com'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'ITIL-based service management implementation and optimization.',
    icon: Settings,
    features: ['ITIL Implementation', 'Service Catalog', 'Incident Management', 'Change Management'],
    pricing: '$10,000 - $60,000/project',
    category: 'Service Management',
    link: 'https://itsm.ziontechgroup.com'
  },
  {
    title: 'Enterprise Integration Services',
    description: 'Seamless integration of enterprise systems and applications.',
    icon: Network,
    features: ['System Integration', 'API Development', 'Data Synchronization', 'Workflow Automation'],
    pricing: '$12,000 - $80,000/project',
    category: 'Integration',
    link: 'https://enterpriseintegration.ziontechgroup.com'
  },
  {
    title: 'IT Security Auditing',
    description: 'Comprehensive security auditing and vulnerability assessment services.',
    icon: Shield,
    features: ['Security Auditing', 'Vulnerability Assessment', 'Penetration Testing', 'Compliance Review'],
    pricing: '$8,000 - $50,000/project',
    category: 'Security Auditing',
    link: 'https://itsecurityaudit.ziontechgroup.com'
  },
  {
    title: 'Cloud Architecture Design',
    description: 'Scalable and secure cloud architecture design and implementation.',
    icon: Cloud,
    features: ['Cloud Architecture', 'Scalability Design', 'Security Implementation', 'Cost Optimization'],
    pricing: '$15,000 - $100,000/project',
    category: 'Cloud Architecture',
    link: 'https://cloudarchitecture.ziontechgroup.com'
  },
  {
    title: 'IT Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation services.',
    icon: HardDrive,
    features: ['DR Planning', 'Backup Strategy', 'Recovery Testing', 'Business Continuity'],
    pricing: '$10,000 - $75,000/project',
    category: 'Disaster Recovery',
    link: 'https://itdisasterrecovery.ziontechgroup.com'
  },
  {
    title: 'IT Governance & Risk Management',
    description: 'IT governance framework implementation and risk management services.',
    icon: Shield,
    features: ['Governance Framework', 'Risk Assessment', 'Policy Development', 'Compliance Management'],
    pricing: '$12,000 - $80,000/project',
    category: 'Governance',
    link: 'https://itgovernance.ziontechgroup.com'
  },
  {
    title: 'Enterprise Data Management',
    description: 'Comprehensive data management strategy and implementation services.',
    icon: Database,
    features: ['Data Strategy', 'Data Governance', 'Data Quality', 'Master Data Management'],
    pricing: '$15,000 - $100,000/project',
    category: 'Data Management',
    link: 'https://enterprisedata.ziontechgroup.com'
  },
  {
    title: 'IT Operations Automation',
    description: 'Automation of IT operations and processes for improved efficiency.',
    icon: Settings,
    features: ['Process Automation', 'Workflow Optimization', 'Monitoring Automation', 'Incident Response'],
    pricing: '$8,000 - $50,000/project',
    category: 'Operations Automation',
    link: 'https://itautomation.ziontechgroup.com'
  },
  {
    title: 'Enterprise Mobility Solutions',
    description: 'Comprehensive mobile enterprise solutions and device management.',
    icon: Smartphone,
    features: ['Mobile Strategy', 'Device Management', 'App Development', 'Security Implementation'],
    pricing: '$10,000 - $60,000/project',
    category: 'Enterprise Mobility',
    link: 'https://enterprisemobility.ziontechgroup.com'
  },
  {
    title: 'IT Performance Optimization',
    description: 'System performance optimization and capacity planning services.',
    icon: TrendingUp,
    features: ['Performance Analysis', 'Capacity Planning', 'Optimization', 'Load Testing'],
    pricing: '$5,000 - $35,000/project',
    category: 'Performance Optimization',
    link: 'https://itperformance.ziontechgroup.com'
  },
  {
    title: 'Enterprise Security Solutions',
    description: 'Comprehensive enterprise security implementation and management.',
    icon: Lock,
    features: ['Security Architecture', 'Identity Management', 'Access Control', 'Security Monitoring'],
    pricing: '$20,000 - $150,000/project',
    category: 'Enterprise Security',
    link: 'https://enterprisesecurity.ziontechgroup.com'
  },
  {
    title: 'IT Change Management',
    description: 'Structured IT change management and implementation services.',
    icon: Settings,
    features: ['Change Planning', 'Risk Assessment', 'Implementation', 'Rollback Procedures'],
    pricing: '$5,000 - $30,000/project',
    category: 'Change Management',
    link: 'https://itchangemanagement.ziontechgroup.com'
  },
  {
    title: 'Enterprise Application Support',
    description: 'Comprehensive support and maintenance for enterprise applications.',
    icon: Monitor,
    features: ['Application Support', 'Bug Fixing', 'Performance Tuning', 'Feature Enhancement'],
    pricing: '$3,000 - $20,000/month',
    category: 'Application Support',
    link: 'https://enterpriseappsupport.ziontechgroup.com'
  },
  {
    title: 'IT Capacity Planning',
    description: 'Strategic IT capacity planning and resource optimization services.',
    icon: BarChart3,
    features: ['Capacity Analysis', 'Growth Planning', 'Resource Optimization', 'Cost Forecasting'],
    pricing: '$8,000 - $50,000/project',
    category: 'Capacity Planning',
    link: 'https://itcapacityplanning.ziontechgroup.com'
  },
  {
    title: 'Enterprise Backup Solutions',
    description: 'Comprehensive enterprise backup and recovery solutions.',
    icon: HardDrive,
    features: ['Backup Strategy', 'Data Replication', 'Recovery Testing', 'Compliance'],
    pricing: '$10,000 - $75,000/project',
    category: 'Backup Solutions',
    link: 'https://enterprisebackup.ziontechgroup.com'
  },
  {
    title: 'IT Service Desk Implementation',
    description: 'Professional IT service desk setup and management services.',
    icon: Headphones,
    features: ['Service Desk Setup', 'Process Implementation', 'Staff Training', 'Performance Monitoring'],
    pricing: '$15,000 - $100,000/project',
    category: 'Service Desk',
    link: 'https://itservicedesk.ziontechgroup.com'
  },
  {
    title: 'Enterprise Network Design',
    description: 'Scalable enterprise network design and implementation services.',
    icon: Network,
    features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
    pricing: '$20,000 - $150,000/project',
    category: 'Network Design',
    link: 'https://enterprisenetwork.ziontechgroup.com'
  },
  {
    title: 'IT Compliance & Regulatory',
    description: 'IT compliance management and regulatory adherence services.',
    icon: Shield,
    features: ['Compliance Assessment', 'Regulatory Adherence', 'Audit Preparation', 'Documentation'],
    pricing: '$10,000 - $75,000/project',
    category: 'Compliance',
    link: 'https://itcompliance.ziontechgroup.com'
  },
  {
    title: 'Enterprise Monitoring Solutions',
    description: 'Comprehensive enterprise monitoring and alerting solutions.',
    icon: Monitor,
    features: ['Infrastructure Monitoring', 'Application Monitoring', 'Log Management', 'Alerting'],
    pricing: '$12,000 - $80,000/project',
    category: 'Monitoring Solutions',
    link: 'https://enterprisemonitoring.ziontechgroup.com'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Complete zero trust security implementation with identity verification and micro-segmentation.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$25,000 - $150,000/project',
    category: 'Zero Trust',
    popular: true,
    link: 'https://zerotrust.ziontechgroup.com'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing infrastructure for low-latency applications and IoT.',
    icon: Cpu,
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing'],
    pricing: '$30,000 - $200,000/project',
    category: 'Edge Computing',
    link: 'https://edgecomputing.ziontechgroup.com'
  },
  {
    title: '5G Network Implementation',
    description: 'Complete 5G network design, implementation, and optimization services.',
    icon: Network,
    features: ['5G Core Network', 'RAN Optimization', 'Network Slicing', 'Performance Tuning'],
    pricing: '$50,000 - $500,000/project',
    category: '5G Networks',
    link: 'https://5gnetworks.ziontechgroup.com'
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Enterprise blockchain infrastructure and distributed ledger technology implementation.',
    icon: Network,
    features: ['Blockchain Networks', 'Smart Contracts', 'Consensus Mechanisms', 'Security Implementation'],
    pricing: '$40,000 - $300,000/project',
    category: 'Blockchain',
    link: 'https://blockchaininfra.ziontechgroup.com'
  },
  {
    title: 'IoT Platform Management',
    description: 'Comprehensive IoT platform design, implementation, and management services.',
    icon: Smartphone,
    features: ['Device Management', 'Data Processing', 'Security Implementation', 'Analytics Platform'],
    pricing: '$35,000 - $250,000/project',
    category: 'IoT',
    link: 'https://iotplatform.ziontechgroup.com'
  },
  {
    title: 'Digital Twin Technology',
    description: 'Digital twin implementation for physical assets and process optimization.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Process Optimization'],
    pricing: '$60,000 - $400,000/project',
    category: 'Digital Twins',
    link: 'https://digitaltwins.ziontechgroup.com'
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT infrastructure and energy-efficient technology implementation.',
    icon: Sprout,
    features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$20,000 - $150,000/project',
    category: 'Green IT',
    link: 'https://greenit.ziontechgroup.com'
  },
  {
    title: 'AI Infrastructure Services',
    description: 'Complete AI infrastructure setup including GPU clusters, ML pipelines, and data processing.',
    icon: Brain,
    features: ['GPU Clusters', 'ML Pipelines', 'Data Processing', 'Model Deployment'],
    pricing: '$45,000 - $350,000/project',
    category: 'AI Infrastructure',
    link: 'https://aiinfrastructure.ziontechgroup.com'
  },
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing infrastructure and hybrid quantum-classical systems implementation.',
    icon: Cpu,
    features: ['Quantum Hardware', 'Hybrid Systems', 'Quantum Algorithms', 'Security Implementation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum Computing',
    link: 'https://quantuminfrastructure.ziontechgroup.com'
  },
  {
    title: 'Autonomous Systems Infrastructure',
    description: 'Infrastructure for autonomous vehicles, drones, and robotic systems.',
    icon: Car,
    features: ['Sensor Networks', 'Communication Systems', 'Control Infrastructure', 'Safety Systems'],
    pricing: '$75,000 - $600,000/project',
    category: 'Autonomous Systems',
    link: 'https://autonomousinfra.ziontechgroup.com'
  },
  {
    title: 'Space Technology Infrastructure',
    description: 'Ground station infrastructure and satellite communication systems.',
    icon: Rocket,
    features: ['Ground Stations', 'Satellite Communication', 'Data Processing', 'Mission Control'],
    pricing: '$150,000 - $1,500,000/project',
    category: 'Space Technology',
    link: 'https://spaceinfrastructure.ziontechgroup.com'
  },
  {
    title: 'Neuromorphic Computing Infrastructure',
    description: 'Neuromorphic computing hardware and software infrastructure implementation.',
    icon: Brain,
    features: ['Neuromorphic Chips', 'Spiking Neural Networks', 'Hardware Acceleration', 'Software Stack'],
    pricing: '$80,000 - $700,000/project',
    category: 'Neuromorphic Computing',
    link: 'https://neuromorphicinfra.ziontechgroup.com'
  },
  {
    title: 'Metaverse Infrastructure',
    description: 'Complete metaverse infrastructure including VR/AR systems and virtual world hosting.',
    icon: Monitor,
    features: ['VR/AR Systems', 'Virtual World Hosting', 'Avatar Systems', 'Real-time Rendering'],
    pricing: '$100,000 - $800,000/project',
    category: 'Metaverse',
    link: 'https://metaverseinfra.ziontechgroup.com'
  },
  {
    title: 'Biometric Security Systems',
    description: 'Advanced biometric authentication and security systems implementation.',
    icon: Shield,
    features: ['Facial Recognition', 'Fingerprint Scanning', 'Iris Recognition', 'Voice Authentication'],
    pricing: '$25,000 - $200,000/project',
    category: 'Biometric Security',
    link: 'https://biometricsecurity.ziontechgroup.com'
  },
  {
    title: 'Smart City Infrastructure',
    description: 'Complete smart city infrastructure including sensors, networks, and data platforms.',
    icon: Building,
    features: ['Sensor Networks', 'Data Platforms', 'Traffic Management', 'Energy Systems'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Smart Cities',
    link: 'https://smartcityinfra.ziontechgroup.com'
  },
  {
    title: 'Industrial IoT Infrastructure',
    description: 'Industrial IoT infrastructure for manufacturing and industrial automation.',
    icon: Settings,
    features: ['Industrial Sensors', 'PLC Integration', 'SCADA Systems', 'Predictive Maintenance'],
    pricing: '$50,000 - $400,000/project',
    category: 'Industrial IoT',
    link: 'https://industrialiotinfra.ziontechgroup.com'
  },
  {
    title: 'Healthcare IT Infrastructure',
    description: 'Specialized IT infrastructure for healthcare organizations and medical facilities.',
    icon: Heart,
    features: ['HIPAA Compliance', 'Medical Device Integration', 'Patient Data Security', 'Telemedicine Systems'],
    pricing: '$40,000 - $300,000/project',
    category: 'Healthcare IT',
    link: 'https://healthcareitinfra.ziontechgroup.com'
  },
  {
    title: 'Financial Services Infrastructure',
    description: 'High-security IT infrastructure for financial institutions and fintech companies.',
    icon: DollarSign,
    features: ['High-Frequency Trading', 'Regulatory Compliance', 'Risk Management', 'Payment Processing'],
    pricing: '$60,000 - $500,000/project',
    category: 'FinTech Infrastructure',
    link: 'https://fintechinfra.ziontechgroup.com'
  },
  {
    title: 'Educational Technology Infrastructure',
    description: 'IT infrastructure for educational institutions and e-learning platforms.',
    icon: BookOpen,
    features: ['Learning Management Systems', 'Virtual Classrooms', 'Student Information Systems', 'Assessment Tools'],
    pricing: '$30,000 - $250,000/project',
    category: 'EdTech Infrastructure',
    link: 'https://edtechinfra.ziontechgroup.com'
  },
  {
    title: 'Retail Technology Infrastructure',
    description: 'Omnichannel retail technology infrastructure and point-of-sale systems.',
    icon: ShoppingCart,
    features: ['POS Systems', 'Inventory Management', 'Customer Analytics', 'E-commerce Integration'],
    pricing: '$35,000 - $300,000/project',
    category: 'Retail IT',
    link: 'https://retailitinfra.ziontechgroup.com'
  },
  {
    title: 'Government IT Infrastructure',
    description: 'Secure IT infrastructure for government agencies and public sector organizations.',
    icon: Building,
    features: ['Security Clearance', 'Compliance Requirements', 'Citizen Services', 'Data Sovereignty'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Government IT',
    link: 'https://governmentitinfra.ziontechgroup.com'
  },
  {
    title: 'Energy Sector Infrastructure',
    description: 'IT infrastructure for energy companies, utilities, and renewable energy providers.',
    icon: Zap,
    features: ['Smart Grid Systems', 'Energy Management', 'Renewable Integration', 'Grid Optimization'],
    pricing: '$50,000 - $400,000/project',
    category: 'Energy IT',
    link: 'https://energyitinfra.ziontechgroup.com'
  },
  {
    title: 'Transportation IT Infrastructure',
    description: 'IT infrastructure for transportation companies and logistics providers.',
    icon: Car,
    features: ['Fleet Management', 'Route Optimization', 'Real-time Tracking', 'Safety Systems'],
    pricing: '$40,000 - $350,000/project',
    category: 'Transportation IT',
    link: 'https://transportationitinfra.ziontechgroup.com'
  },
  {
    title: 'Environmental Monitoring Infrastructure',
    description: 'IT infrastructure for environmental monitoring and climate data collection.',
    icon: Globe,
    features: ['Sensor Networks', 'Data Collection', 'Climate Modeling', 'Environmental Analytics'],
    pricing: '$35,000 - $300,000/project',
    category: 'Environmental IT',
    link: 'https://environmentalitinfra.ziontechgroup.com'
  },
  {
    title: 'Research & Development Infrastructure',
    description: 'High-performance computing infrastructure for research institutions and R&D organizations.',
    icon: Cpu,
    features: ['HPC Clusters', 'Research Data Management', 'Collaboration Tools', 'Simulation Platforms'],
    pricing: '$60,000 - $500,000/project',
    category: 'R&D Infrastructure',
    link: 'https://rdinfra.ziontechgroup.com'
  },
  {
    title: 'Disaster Recovery Infrastructure',
    description: 'Comprehensive disaster recovery infrastructure and business continuity solutions.',
    icon: Shield,
    features: ['Multi-site Replication', 'Automated Failover', 'Data Recovery', 'Business Continuity'],
    pricing: '$40,000 - $400,000/project',
    category: 'Disaster Recovery',
    link: 'https://disasterrecoveryinfra.ziontechgroup.com'
  },
  {
    title: 'Compliance & Governance Infrastructure',
    description: 'IT infrastructure designed for regulatory compliance and governance requirements.',
    icon: FileText,
    features: ['Audit Trails', 'Compliance Monitoring', 'Data Governance', 'Regulatory Reporting'],
    pricing: '$30,000 - $250,000/project',
    category: 'Compliance Infrastructure',
    link: 'https://complianceinfra.ziontechgroup.com'
  },
  {
    title: 'Future-Ready Infrastructure',
    description: 'Next-generation IT infrastructure designed for emerging technologies and future scalability.',
    icon: Star,
    features: ['Future Technology Integration', 'Scalable Architecture', 'Innovation Platform', 'Technology Evolution'],
    pricing: 'Custom Pricing',
    category: 'Future Infrastructure',
    link: 'https://futureinfra.ziontechgroup.com'
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
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Proactive monitoring and maintenance',
    stat: '99.9%'
  },
  {
    icon: Zap,
    title: 'Cost Savings',
    description: 'Optimized infrastructure and processes',
    stat: '40%'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade protection',
    stat: '100%'
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Flexible and scalable solutions',
    stat: 'Unlimited'
  }
];

const supportLevels = [
  {
    name: 'Basic Support',
    description: 'Standard business hours support',
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports'],
    pricing: '$1,000/month'
  },
  {
    name: 'Premium Support',
    description: 'Extended hours and priority support',
    features: ['24/7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports'],
    pricing: '$3,000/month'
  },
  {
    name: 'Enterprise Support',
    description: 'Dedicated support team and SLA guarantees',
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real-time Reports'],
    pricing: 'Custom Pricing'
  }
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, system administration" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              End-to-end IT services designed to optimize your infrastructure and ensure business continuity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
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
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
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

                  <div className="space-y-2">
                    <Link
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Get Quote</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven expertise and measurable results for your technology infrastructure.
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
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Levels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Support Levels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support level that best fits your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  index === 1 ? 'bg-green-50 border-2 border-green-200' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
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
    </div>
  );
}