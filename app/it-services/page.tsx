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

    // NEW COMPREHENSIVE IT SERVICES
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations using AI and machine learning for proactive monitoring, incident management, and automation.',
      icon: '🤖',
      price: '$3,500/month',
      features: [
        'Predictive Analytics',
        'Automated Incident Response',
        'Intelligent Root Cause Analysis',
        'Performance Optimization',
        'Capacity Planning',
        'Anomaly Detection'
      ],
      benefits: [
        'Reduce MTTR by 80%',
        'Prevent 90% of incidents',
        'Improve system reliability',
        'Automate routine tasks'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'AIOps',
      technologies: ['Machine Learning', 'Big Data Analytics', 'APM Tools', 'Custom AI Models', 'Real-time Processing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with continuous verification and least privilege access.',
      icon: '🔒',
      price: '$4,200/month',
      features: [
        'Identity Verification',
        'Device Trust Assessment',
        'Network Segmentation',
        'Continuous Monitoring',
        'Policy Enforcement',
        'Threat Detection'
      ],
      benefits: [
        'Eliminate security perimeters',
        'Reduce breach risk by 95%',
        'Enable secure remote work',
        'Comply with regulations'
      ],
      marketPrice: '$8,000-20,000/month',
      category: 'Zero Trust Security',
      technologies: ['Identity Management', 'Network Security', 'Endpoint Protection', 'SIEM', 'Custom Security Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Deploy and manage edge computing infrastructure for low-latency applications and IoT devices.',
      icon: '⚡',
      price: '$2,800/month',
      features: [
        'Edge Server Deployment',
        'IoT Device Management',
        'Data Processing at Edge',
        'Network Optimization',
        'Security Implementation',
        'Monitoring & Maintenance'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Enable real-time processing',
        'Improve user experience',
        'Reduce bandwidth costs'
      ],
      marketPrice: '$5,500-14,000/month',
      category: 'Edge Computing',
      technologies: ['Edge Servers', 'IoT Platforms', '5G Networks', 'Edge AI', 'Custom Edge Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Hybrid Cloud Management',
      description: 'Seamless management of hybrid cloud environments across public and private clouds.',
      icon: '☁️',
      price: '$3,200/month',
      features: [
        'Multi-Cloud Orchestration',
        'Workload Migration',
        'Cost Optimization',
        'Security Management',
        'Performance Monitoring',
        'Disaster Recovery'
      ],
      benefits: [
        'Optimize cloud costs by 40%',
        'Improve flexibility',
        'Ensure compliance',
        'Enable seamless scaling'
      ],
      marketPrice: '$6,500-18,000/month',
      category: 'Hybrid Cloud',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Management & Integration',
      description: 'Comprehensive API lifecycle management with security, monitoring, and integration capabilities.',
      icon: '🔌',
      price: '$1,800/month',
      features: [
        'API Gateway Management',
        'API Security',
        'Rate Limiting',
        'Analytics & Monitoring',
        'Developer Portal',
        'Integration Services'
      ],
      benefits: [
        'Improve API performance',
        'Enhance security',
        'Enable developer self-service',
        'Accelerate integration'
      ],
      marketPrice: '$3,500-9,000/month',
      category: 'API Management',
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'MuleSoft', 'Custom API Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Center Modernization',
      description: 'Transform legacy data centers with modern infrastructure, automation, and energy efficiency.',
      icon: '🏢',
      price: '$5,000/month',
      features: [
        'Infrastructure Assessment',
        'Modernization Planning',
        'Hardware Refresh',
        'Automation Implementation',
        'Energy Optimization',
        'Migration Services'
      ],
      benefits: [
        'Reduce operational costs by 50%',
        'Improve energy efficiency',
        'Increase reliability',
        'Enable modern applications'
      ],
      marketPrice: '$10,000-25,000/month',
      category: 'Data Center',
      technologies: ['Modern Servers', 'Storage Systems', 'Network Equipment', 'Automation Tools', 'Energy Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management with incident, problem, and change management processes.',
      icon: '📋',
      price: '$2,200/month',
      features: [
        'Incident Management',
        'Problem Management',
        'Change Management',
        'Service Catalog',
        'Knowledge Management',
        'SLA Monitoring'
      ],
      benefits: [
        'Improve service quality',
        'Reduce resolution time',
        'Increase customer satisfaction',
        'Enable process automation'
      ],
      marketPrice: '$4,500-12,000/month',
      category: 'ITSM',
      technologies: ['ServiceNow', 'Jira Service Management', 'Remedy', 'Custom ITSM Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Governance & Compliance',
      description: 'Establish IT governance frameworks and ensure compliance with industry standards and regulations.',
      icon: '📊',
      price: '$2,500/month',
      features: [
        'Governance Framework Design',
        'Compliance Assessment',
        'Risk Management',
        'Policy Development',
        'Audit Support',
        'Training & Awareness'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit findings',
        'Improve risk management',
        'Establish best practices'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Governance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Compliance Software', 'Custom Governance Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support for your team.',
      icon: '🎓',
      price: '$1,500/month',
      features: [
        'Custom Training Programs',
        'Certification Preparation',
        'Hands-on Labs',
        'Progress Tracking',
        'Expert Instructors',
        'Flexible Delivery'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support tickets',
        'Enable career growth'
      ],
      marketPrice: '$3,000-8,000/month',
      category: 'Training',
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs', 'Custom Training Content'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Vendor Management',
      description: 'Strategic vendor management and procurement services for IT hardware, software, and services.',
      icon: '🤝',
      price: '$1,800/month',
      features: [
        'Vendor Assessment',
        'Contract Negotiation',
        'Performance Monitoring',
        'Cost Optimization',
        'Risk Management',
        'Relationship Management'
      ],
      benefits: [
        'Reduce IT costs by 25%',
        'Improve vendor performance',
        'Mitigate vendor risks',
        'Optimize contracts'
      ],
      marketPrice: '$3,500-9,000/month',
      category: 'Vendor Management',
      technologies: ['Vendor Management Platforms', 'Contract Management', 'Performance Analytics', 'Custom Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      icon: '🚨',
      price: '$2,800/month',
      features: [
        'Risk Assessment',
        'Recovery Planning',
        'Backup Strategy',
        'Testing & Validation',
        'Documentation',
        'Training & Drills'
      ],
      benefits: [
        'Minimize downtime',
        'Protect critical data',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$5,500-14,000/month',
      category: 'Disaster Recovery',
      technologies: ['Backup Solutions', 'Replication Tools', 'Recovery Platforms', 'Custom DR Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Performance Optimization',
      description: 'Comprehensive performance analysis and optimization for IT systems and applications.',
      icon: '⚡',
      price: '$2,200/month',
      features: [
        'Performance Analysis',
        'Bottleneck Identification',
        'Optimization Recommendations',
        'Capacity Planning',
        'Load Testing',
        'Continuous Monitoring'
      ],
      benefits: [
        'Improve system performance',
        'Reduce response times',
        'Optimize resource usage',
        'Enhance user experience'
      ],
      marketPrice: '$4,500-12,000/month',
      category: 'Performance',
      technologies: ['APM Tools', 'Performance Testing', 'Monitoring Solutions', 'Custom Optimization Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Cost Optimization',
      description: 'Strategic cost optimization and budget management for IT infrastructure and services.',
      icon: '💰',
      price: '$1,600/month',
      features: [
        'Cost Analysis',
        'Budget Planning',
        'Resource Optimization',
        'Vendor Negotiation',
        'ROI Analysis',
        'Cost Monitoring'
      ],
      benefits: [
        'Reduce IT costs by 30%',
        'Optimize budget allocation',
        'Improve ROI',
        'Enable cost transparency'
      ],
      marketPrice: '$3,200-8,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'Budget Planning Software', 'Analytics Platforms', 'Custom Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Innovation & Digital Transformation',
      description: 'Drive digital transformation and innovation initiatives to modernize IT operations.',
      icon: '🚀',
      price: '$4,500/month',
      features: [
        'Digital Strategy Development',
        'Technology Roadmap',
        'Innovation Assessment',
        'Pilot Program Management',
        'Change Management',
        'ROI Measurement'
      ],
      benefits: [
        'Accelerate digital transformation',
        'Drive innovation',
        'Improve competitiveness',
        'Enable business growth'
      ],
      marketPrice: '$9,000-25,000/month',
      category: 'Digital Transformation',
      technologies: ['Emerging Technologies', 'Innovation Platforms', 'Change Management Tools', 'Custom Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with advanced threat detection capabilities.',
      icon: '🛡️',
      price: '$6,500/month',
      features: [
        '24/7 Security Monitoring',
        'Threat Detection',
        'Incident Response',
        'Vulnerability Management',
        'Security Analytics',
        'Threat Intelligence'
      ],
      benefits: [
        'Detect threats in real-time',
        'Respond to incidents quickly',
        'Reduce security risks',
        'Ensure compliance'
      ],
      marketPrice: '$15,000-40,000/month',
      category: 'SOC',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Security Analytics', 'Custom SOC Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Compliance & Audit Support',
      description: 'Comprehensive compliance management and audit support for various industry standards.',
      icon: '📋',
      price: '$2,000/month',
      features: [
        'Compliance Assessment',
        'Audit Preparation',
        'Policy Development',
        'Control Implementation',
        'Documentation',
        'Remediation Support'
      ],
      benefits: [
        'Ensure compliance',
        'Pass audits successfully',
        'Reduce compliance costs',
        'Improve security posture'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Compliance',
      technologies: ['Compliance Platforms', 'Audit Tools', 'Policy Management', 'Custom Compliance Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Expert project management for IT initiatives with agile methodologies and best practices.',
      icon: '📊',
      price: '$2,500/month',
      features: [
        'Project Planning',
        'Resource Management',
        'Risk Management',
        'Quality Assurance',
        'Stakeholder Communication',
        'Progress Tracking'
      ],
      benefits: [
        'Deliver projects on time',
        'Control project costs',
        'Manage project risks',
        'Ensure quality delivery'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Project Management',
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Collaboration Platforms', 'Custom PM Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Architecture & Design',
      description: 'Strategic IT architecture design and implementation for scalable and secure systems.',
      icon: '🏗️',
      price: '$3,800/month',
      features: [
        'Architecture Assessment',
        'Solution Design',
        'Technology Selection',
        'Implementation Planning',
        'Integration Design',
        'Documentation'
      ],
      benefits: [
        'Design scalable solutions',
        'Ensure security',
        'Optimize performance',
        'Enable future growth'
      ],
      marketPrice: '$7,500-20,000/month',
      category: 'Architecture',
      technologies: ['Architecture Tools', 'Design Methodologies', 'Integration Platforms', 'Custom Architecture Solutions'],
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
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'AIOps', count: itServices.filter(s => s.category === 'AIOps').length },
    { name: 'Zero Trust Security', count: itServices.filter(s => s.category === 'Zero Trust Security').length },
    { name: 'Edge Computing', count: itServices.filter(s => s.category === 'Edge Computing').length },
    { name: 'Hybrid Cloud', count: itServices.filter(s => s.category === 'Hybrid Cloud').length },
    { name: 'API Management', count: itServices.filter(s => s.category === 'API Management').length },
    { name: 'Data Center', count: itServices.filter(s => s.category === 'Data Center').length },
    { name: 'ITSM', count: itServices.filter(s => s.category === 'ITSM').length },
    { name: 'Governance', count: itServices.filter(s => s.category === 'Governance').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Vendor Management', count: itServices.filter(s => s.category === 'Vendor Management').length },
    { name: 'Disaster Recovery', count: itServices.filter(s => s.category === 'Disaster Recovery').length },
    { name: 'Performance', count: itServices.filter(s => s.category === 'Performance').length },
    { name: 'Cost Optimization', count: itServices.filter(s => s.category === 'Cost Optimization').length },
    { name: 'Digital Transformation', count: itServices.filter(s => s.category === 'Digital Transformation').length },
    { name: 'SOC', count: itServices.filter(s => s.category === 'SOC').length },
    { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length },
    { name: 'Architecture', count: itServices.filter(s => s.category === 'Architecture').length }
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