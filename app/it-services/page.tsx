import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support'
      ],
      benefits: [
        'Achieve 99.9% uptime',
        'Reduce IT costs by 30%',
        'Improve system performance by 50%',
        'Ensure business continuity'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration services with ongoing management and optimization for maximum efficiency.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Execution',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring',
        'Multi-cloud Management'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability by 300%',
        'Enhance security posture',
        'Enable remote work capabilities'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'CloudFormation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, prevention, and incident response.',
      icon: '🛡️',
      price: '$2,500/month',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Prevention',
        'Vulnerability Management',
        'Incident Response',
        'Security Training',
        'Compliance Management'
      ],
      benefits: [
        'Prevent 99.9% of cyber threats',
        'Reduce security incidents by 80%',
        'Ensure compliance with regulations',
        'Protect sensitive data'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Security',
      technologies: ['SIEM', 'Firewalls', 'EDR', 'MDR', 'Penetration Testing', 'Security Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and monitoring.',
      icon: '🔄',
      price: '$1,800/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Automated Testing',
        'Deployment Automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve code quality',
        'Enable rapid scaling'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and management for high-performance applications.',
      icon: '🗄️',
      price: '$1,200/month',
      features: [
        'Database Design & Architecture',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Alerting',
        'Capacity Planning'
      ],
      benefits: [
        'Improve query performance by 70%',
        'Reduce downtime by 95%',
        'Optimize storage usage by 40%',
        'Ensure data integrity'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Security & Monitoring',
      description: 'Advanced network security solutions with real-time monitoring and threat detection.',
      icon: '🌐',
      price: '$1,600/month',
      features: [
        'Network Design & Implementation',
        'Firewall Configuration',
        'Intrusion Detection',
        'Network Monitoring',
        'Traffic Analysis',
        'VPN Management'
      ],
      benefits: [
        'Detect threats in real-time',
        'Improve network performance by 60%',
        'Reduce security vulnerabilities',
        'Enable secure remote access'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Network Security',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Wireshark', 'Nagios', 'Zabbix'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Help Desk',
      description: 'Comprehensive IT support services with 24/7 help desk and technical assistance.',
      icon: '🎧',
      price: '$800/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Hardware & Software Support',
        'User Training',
        'Issue Tracking & Resolution',
        'Knowledge Base Management'
      ],
      benefits: [
        'Resolve 95% of issues remotely',
        'Reduce downtime by 80%',
        'Improve user satisfaction',
        'Enable self-service options'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'Slack', 'Microsoft Teams'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
      icon: '💾',
      price: '$900/month',
      features: [
        'Automated Backup Systems',
        'Disaster Recovery Planning',
        'Data Encryption',
        'Offsite Storage',
        'Recovery Testing',
        'Compliance Reporting'
      ],
      benefits: [
        'Protect 100% of critical data',
        'Recover from disasters in minutes',
        'Ensure regulatory compliance',
        'Minimize data loss risks'
      ],
      marketPrice: '$1,800-3,500/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS S3', 'Azure Backup', 'Google Cloud Storage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management',
      description: 'Comprehensive mobile device management and security for BYOD and corporate devices.',
      icon: '📱',
      price: '$700/month',
      features: [
        'Device Enrollment & Provisioning',
        'Security Policy Enforcement',
        'App Management',
        'Remote Wipe & Lock',
        'Compliance Monitoring',
        'User Self-Service Portal'
      ],
      benefits: [
        'Secure 100% of mobile devices',
        'Reduce security risks by 90%',
        'Simplify device management',
        'Enable BYOD policies'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Mobile Management',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf', 'AirWatch', 'Samsung Knox'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance management and governance frameworks for regulatory requirements.',
      icon: '📋',
      price: '$1,400/month',
      features: [
        'Compliance Assessment',
        'Policy Development',
        'Risk Management',
        'Audit Preparation',
        'Training & Awareness',
        'Documentation Management'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit findings by 85%',
        'Minimize regulatory risks',
        'Streamline compliance processes'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Document Management', 'Training Systems', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control.',
      icon: '📊',
      price: '$600/month',
      features: [
        'Asset Discovery & Inventory',
        'Lifecycle Management',
        'Cost Tracking & Optimization',
        'License Management',
        'Depreciation Tracking',
        'Procurement Support'
      ],
      benefits: [
        'Reduce IT costs by 25%',
        'Improve asset utilization by 40%',
        'Ensure license compliance',
        'Optimize procurement decisions'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'Snipe-IT', 'Asset Panda', 'Freshservice'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to align technology with business objectives and drive digital transformation.',
      icon: '💡',
      price: '$1,500/month',
      features: [
        'IT Strategy Development',
        'Technology Roadmap Planning',
        'Digital Transformation',
        'Vendor Evaluation',
        'Cost Optimization',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Accelerate digital transformation',
        'Improve technology ROI'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Change Management', 'Vendor Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // NEW ADVANCED IT SERVICES
    {
      title: 'AI-Powered IT Operations Center',
      description: 'Intelligent IT operations with predictive maintenance, automated incident response, and self-healing infrastructure.',
      icon: '🤖',
      price: '$3,500/month',
      features: [
        'Predictive Maintenance',
        'Automated Incident Response',
        'Self-Healing Infrastructure',
        'Intelligent Monitoring',
        'Proactive Problem Resolution',
        'AI-Driven Root Cause Analysis'
      ],
      benefits: [
        'Reduce downtime by 85%',
        'Prevent 90% of incidents',
        'Improve MTTR by 70%',
        'Enable autonomous operations'
      ],
      marketPrice: '$7,000-15,000/month',
      category: 'AI Operations',
      technologies: ['Machine Learning', 'Anomaly Detection', 'Automation', 'Monitoring', 'AIOps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with continuous verification and micro-segmentation.',
      icon: '🔐',
      price: '$4,200/month',
      features: [
        'Identity Verification',
        'Micro-segmentation',
        'Continuous Monitoring',
        'Least Privilege Access',
        'Threat Detection',
        'Security Automation'
      ],
      benefits: [
        'Prevent 99.9% of breaches',
        'Reduce attack surface by 80%',
        'Enable secure remote work',
        'Comply with regulations'
      ],
      marketPrice: '$8,500-18,000/month',
      category: 'Security',
      technologies: ['Zero Trust', 'Identity Management', 'Network Segmentation', 'SIEM', 'SOAR'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions for low-latency applications and IoT connectivity.',
      icon: '⚡',
      price: '$2,800/month',
      features: [
        'Edge Data Centers',
        '5G Integration',
        'IoT Connectivity',
        'Low-Latency Processing',
        'Distributed Storage',
        'Edge AI Processing'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Enable real-time applications',
        'Improve user experience',
        'Support IoT ecosystems'
      ],
      marketPrice: '$5,500-12,000/month',
      category: 'Edge Computing',
      technologies: ['Edge Computing', '5G', 'IoT', 'Kubernetes', 'Edge AI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Quantum-Safe Cryptography',
      description: 'Post-quantum cryptography implementation to protect against future quantum computing threats.',
      icon: '🔒',
      price: '$3,200/month',
      features: [
        'Quantum-Safe Algorithms',
        'Hybrid Cryptography',
        'Key Management',
        'Migration Planning',
        'Compliance Support',
        'Future-Proof Security'
      ],
      benefits: [
        'Protect against quantum threats',
        'Future-proof security',
        'Maintain compliance',
        'Ensure data longevity'
      ],
      marketPrice: '$6,500-14,000/month',
      category: 'Security',
      technologies: ['Post-Quantum Crypto', 'NIST Standards', 'Key Management', 'Hybrid Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Data Center Management',
      description: 'Intelligent data center operations with predictive cooling, power optimization, and automated maintenance.',
      icon: '🏢',
      price: '$4,500/month',
      features: [
        'Predictive Cooling',
        'Power Optimization',
        'Automated Maintenance',
        'Capacity Planning',
        'Environmental Monitoring',
        'Energy Efficiency'
      ],
      benefits: [
        'Reduce energy costs by 40%',
        'Improve efficiency by 60%',
        'Prevent equipment failures',
        'Optimize space utilization'
      ],
      marketPrice: '$9,000-20,000/month',
      category: 'Data Center',
      technologies: ['AI/ML', 'IoT Sensors', 'Predictive Analytics', 'Automation', 'Energy Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Multi-Cloud Management Platform',
      description: 'Unified multi-cloud management with cost optimization, security, and performance monitoring.',
      icon: '☁️',
      price: '$2,200/month',
      features: [
        'Multi-Cloud Orchestration',
        'Cost Optimization',
        'Security Management',
        'Performance Monitoring',
        'Compliance Tracking',
        'Resource Automation'
      ],
      benefits: [
        'Reduce cloud costs by 35%',
        'Improve security posture',
        'Simplify management',
        'Optimize performance'
      ],
      marketPrice: '$4,500-10,000/month',
      category: 'Cloud Management',
      technologies: ['Multi-Cloud', 'Cost Optimization', 'Security', 'Monitoring', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Network Optimization',
      description: 'Intelligent network management with traffic optimization, congestion prediction, and automated routing.',
      icon: '🌐',
      price: '$2,600/month',
      features: [
        'Traffic Optimization',
        'Congestion Prediction',
        'Automated Routing',
        'Quality of Service',
        'Bandwidth Management',
        'Network Analytics'
      ],
      benefits: [
        'Improve network performance by 50%',
        'Reduce congestion by 70%',
        'Optimize bandwidth usage',
        'Enhance user experience'
      ],
      marketPrice: '$5,200-12,000/month',
      category: 'Network Management',
      technologies: ['AI/ML', 'SDN', 'Network Analytics', 'Automation', 'QoS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Blockchain Infrastructure Services',
      description: 'Enterprise blockchain solutions with smart contracts, decentralized applications, and tokenization.',
      icon: '⛓️',
      price: '$3,800/month',
      features: [
        'Blockchain Development',
        'Smart Contracts',
        'DApp Development',
        'Tokenization',
        'Consensus Mechanisms',
        'Security Auditing'
      ],
      benefits: [
        'Enable decentralized solutions',
        'Improve transparency',
        'Reduce intermediaries',
        'Enhance security'
      ],
      marketPrice: '$7,500-18,000/month',
      category: 'Blockchain',
      technologies: ['Ethereum', 'Hyperledger', 'Smart Contracts', 'Web3', 'DeFi'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered IT Service Desk',
      description: 'Intelligent service desk with automated ticket routing, resolution, and user self-service capabilities.',
      icon: '🎧',
      price: '$1,800/month',
      features: [
        'AI Ticket Routing',
        'Automated Resolution',
        'Self-Service Portal',
        'Knowledge Management',
        'User Experience Analytics',
        'Proactive Support'
      ],
      benefits: [
        'Resolve 80% of tickets automatically',
        'Reduce response time by 90%',
        'Improve user satisfaction',
        'Lower support costs'
      ],
      marketPrice: '$3,600-8,000/month',
      category: 'Service Desk',
      technologies: ['AI/ML', 'NLP', 'Automation', 'Knowledge Management', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Hyperconverged Infrastructure',
      description: 'Integrated compute, storage, and networking solutions with simplified management and scalability.',
      icon: '🔄',
      price: '$3,000/month',
      features: [
        'Integrated Infrastructure',
        'Simplified Management',
        'Scalable Architecture',
        'High Availability',
        'Disaster Recovery',
        'Performance Optimization'
      ],
      benefits: [
        'Reduce complexity by 60%',
        'Improve scalability',
        'Lower total cost of ownership',
        'Simplify management'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'Infrastructure',
      technologies: ['HCI', 'Virtualization', 'Storage', 'Networking', 'Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Application Performance Monitoring',
      description: 'Intelligent APM with predictive analytics, root cause analysis, and automated optimization.',
      icon: '📊',
      price: '$2,400/month',
      features: [
        'Real-time Monitoring',
        'Predictive Analytics',
        'Root Cause Analysis',
        'Performance Optimization',
        'User Experience Tracking',
        'Automated Alerts'
      ],
      benefits: [
        'Prevent 90% of performance issues',
        'Improve application performance',
        'Reduce mean time to resolution',
        'Enhance user experience'
      ],
      marketPrice: '$4,800-12,000/month',
      category: 'Monitoring',
      technologies: ['APM', 'AI/ML', 'Analytics', 'Monitoring', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Software-Defined Everything (SDx)',
      description: 'Comprehensive software-defined infrastructure including networking, storage, and security.',
      icon: '⚙️',
      price: '$3,600/month',
      features: [
        'Software-Defined Networking',
        'Software-Defined Storage',
        'Software-Defined Security',
        'Centralized Management',
        'Policy Automation',
        'Dynamic Provisioning'
      ],
      benefits: [
        'Increase agility by 80%',
        'Reduce operational costs',
        'Improve flexibility',
        'Simplify management'
      ],
      marketPrice: '$7,200-18,000/month',
      category: 'SDx',
      technologies: ['SDN', 'SDS', 'SD-Security', 'Automation', 'Orchestration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered IT Asset Management',
      description: 'Intelligent asset lifecycle management with predictive maintenance and optimization recommendations.',
      icon: '📦',
      price: '$1,500/month',
      features: [
        'Asset Discovery',
        'Lifecycle Management',
        'Predictive Maintenance',
        'Cost Optimization',
        'Compliance Tracking',
        'Automated Reporting'
      ],
      benefits: [
        'Reduce asset costs by 30%',
        'Improve utilization by 50%',
        'Prevent asset failures',
        'Ensure compliance'
      ],
      marketPrice: '$3,000-7,500/month',
      category: 'Asset Management',
      technologies: ['AI/ML', 'Asset Management', 'Predictive Analytics', 'Automation', 'Reporting'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Container Security & Orchestration',
      description: 'Comprehensive container security with Kubernetes orchestration and runtime protection.',
      icon: '🐳',
      price: '$2,800/month',
      features: [
        'Container Security',
        'Kubernetes Orchestration',
        'Runtime Protection',
        'Vulnerability Scanning',
        'Policy Enforcement',
        'Compliance Management'
      ],
      benefits: [
        'Secure containerized applications',
        'Improve deployment efficiency',
        'Ensure compliance',
        'Reduce security risks'
      ],
      marketPrice: '$5,600-14,000/month',
      category: 'Container Security',
      technologies: ['Kubernetes', 'Container Security', 'Runtime Protection', 'Policy Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered IT Governance',
      description: 'Intelligent IT governance with policy automation, compliance monitoring, and risk management.',
      icon: '📋',
      price: '$2,200/month',
      features: [
        'Policy Automation',
        'Compliance Monitoring',
        'Risk Management',
        'Audit Preparation',
        'Governance Reporting',
        'Decision Support'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit findings by 90%',
        'Improve governance efficiency',
        'Minimize risks'
      ],
      marketPrice: '$4,400-11,000/month',
      category: 'Governance',
      technologies: ['Governance', 'Compliance', 'Risk Management', 'Policy Automation', 'Reporting'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Quantum Computing Integration',
      description: 'Quantum computing integration services for optimization, cryptography, and machine learning applications.',
      icon: '⚛️',
      price: '$8,500/month',
      features: [
        'Quantum Algorithm Development',
        'Hybrid Classical-Quantum Systems',
        'Quantum Cryptography',
        'Optimization Problems',
        'Machine Learning Integration',
        'Quantum Simulation'
      ],
      benefits: [
        'Solve complex optimization problems',
        'Enhance cryptographic security',
        'Accelerate machine learning',
        'Enable quantum advantage'
      ],
      marketPrice: '$17,000-50,000/month',
      category: 'Quantum Computing',
      technologies: ['Quantum Computing', 'Qiskit', 'Cirq', 'Quantum ML', 'Quantum Cryptography'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered IT Financial Management',
      description: 'Intelligent IT financial management with cost optimization, budgeting, and ROI analysis.',
      icon: '💰',
      price: '$1,800/month',
      features: [
        'Cost Optimization',
        'Budget Planning',
        'ROI Analysis',
        'Financial Forecasting',
        'Cost Allocation',
        'Investment Planning'
      ],
      benefits: [
        'Reduce IT costs by 25%',
        'Improve budget accuracy',
        'Optimize investments',
        'Enhance financial visibility'
      ],
      marketPrice: '$3,600-9,000/month',
      category: 'Financial Management',
      technologies: ['Financial Analytics', 'Cost Optimization', 'Budgeting', 'ROI Analysis', 'Forecasting'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Intelligent Data Management Platform',
      description: 'AI-powered data management with automated classification, governance, and lifecycle management.',
      icon: '🗄️',
      price: '$3,200/month',
      features: [
        'Automated Data Classification',
        'Data Governance',
        'Lifecycle Management',
        'Data Quality',
        'Privacy Protection',
        'Compliance Automation'
      ],
      benefits: [
        'Improve data quality by 80%',
        'Ensure compliance',
        'Reduce data risks',
        'Optimize storage costs'
      ],
      marketPrice: '$6,400-16,000/month',
      category: 'Data Management',
      technologies: ['Data Management', 'AI/ML', 'Governance', 'Privacy', 'Compliance'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered IT Training Platform',
      description: 'Intelligent IT training with personalized learning paths, skill assessment, and certification tracking.',
      icon: '🎓',
      price: '$1,200/month',
      features: [
        'Personalized Learning',
        'Skill Assessment',
        'Certification Tracking',
        'Progress Analytics',
        'Content Management',
        'Performance Evaluation'
      ],
      benefits: [
        'Improve IT skills by 60%',
        'Reduce training costs',
        'Accelerate certification',
        'Enhance team capabilities'
      ],
      marketPrice: '$2,400-6,000/month',
      category: 'Training',
      technologies: ['Learning Management', 'AI/ML', 'Assessment', 'Analytics', 'Content Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Intelligent IT Procurement Platform',
      description: 'AI-powered IT procurement with vendor management, contract optimization, and spend analytics.',
      icon: '🛒',
      price: '$1,600/month',
      features: [
        'Vendor Management',
        'Contract Optimization',
        'Spend Analytics',
        'Procurement Automation',
        'Supplier Evaluation',
        'Cost Benchmarking'
      ],
      benefits: [
        'Reduce procurement costs by 20%',
        'Improve vendor relationships',
        'Optimize contracts',
        'Enhance spend visibility'
      ],
      marketPrice: '$3,200-8,000/month',
      category: 'Procurement',
      technologies: ['Procurement', 'Vendor Management', 'Contract Management', 'Analytics', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'Network Security', count: itServices.filter(s => s.category === 'Network Security').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Backup & Recovery', count: itServices.filter(s => s.category === 'Backup & Recovery').length },
    { name: 'Mobile Management', count: itServices.filter(s => s.category === 'Mobile Management').length },
    { name: 'Compliance', count: itServices.filter(s => s.category === 'Compliance').length },
    { name: 'Asset Management', count: itServices.filter(s => s.category === 'Asset Management').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and DevOps. Enterprise-grade IT solutions starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cloud migration, cybersecurity, devops, it support, database management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize your technology infrastructure and drive business growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$600</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IT Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and transform your technology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;