<<<<<<< HEAD
'use client';

import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Server, Shield, Cloud, Database, Code, Users, Globe, Smartphone, Wrench, Zap, BarChart3, Clock, DollarSign, TrendingUp, Headphones, Settings } from 'lucide-react';

<<<<<<< HEAD
<<<<<<< HEAD
export default function ITServicesPage() {
  const services = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======
const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-migration',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance',
      features: [
        'AWS, Azure, and Google Cloud expertise',
        'Zero-downtime migration strategies',
        'Cost optimization and resource management',
        'Disaster recovery and backup solutions',
        'Multi-cloud and hybrid cloud architectures',
        'Security and compliance implementation',
        'Performance monitoring and optimization',
        '24/7 cloud infrastructure management'
      ],
      pricing: 'Starting at $2,500/month',
      marketPrice: '$5,000-25,000/month',
      category: 'Cloud Services',
      popular: true,
<<<<<<< HEAD
      duration: '2-4 weeks'
=======
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support', 'Disaster recovery'],
      pricing: 'Starting at $299/month',
      category: 'Infrastructure'
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $2,500',
      link: '/cloud-migration'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
      deliverables: ['Migration Plan', 'Infrastructure Setup', 'Security Configuration', 'Monitoring Dashboard']
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime deployment', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,999',
      link: '/it-services/cloud-migration',
      popular: true
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-500" />,
<<<<<<< HEAD
=======
'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { ArrowRight, CheckCircle, Star, Cloud, Shield, Code, Database, Server, Network, Settings, Users, Clock, DollarSign, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP Migration', 'Zero Downtime', 'Cost Optimization', 'Security Compliance'],
      price: 'Starting at $2,500',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
      title: 'Cybersecurity Solutions',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
<<<<<<< HEAD
<<<<<<< HEAD
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
=======
      description: 'Comprehensive security services to protect your digital assets and ensure compliance',
      features: [
        'Security assessment and penetration testing',
        'Firewall and network security configuration',
        'Endpoint protection and antivirus management',
        'Security monitoring and incident response',
        'Compliance auditing (SOC2, GDPR, HIPAA)',
        'Security awareness training',
        'Vulnerability management and patching',
        '24/7 security operations center (SOC)'
      ],
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
      pricing: 'Starting at $1,500/month',
      marketPrice: '$3,000-15,000/month',
      category: 'Security',
      popular: true,
      deliverables: ['Security Audit Report', 'Implementation Plan', 'Monitoring Setup', 'Compliance Documentation']
    },
    {
      id: 'network-infrastructure',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance',
      features: [
        'Network design and architecture planning',
        'Router, switch, and firewall configuration',
        'Wireless network setup and optimization',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization and QoS',
        'Network security implementation',
        'Disaster recovery and redundancy'
      ],
      pricing: 'Starting at $1,200/month',
      marketPrice: '$2,500-12,000/month',
      category: 'Infrastructure',
      popular: false,
      deliverables: ['Network Design', 'Hardware Configuration', 'Security Setup', 'Monitoring Tools']
=======
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and protection for your digital assets and infrastructure.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Compliance audit', 'Security training'],
      pricing: 'Starting at $1,999',
      link: '/it-services/cybersecurity-audit',
      popular: true
=======
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Compliance Management'],
      price: 'Starting at $1,500',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      popular: false
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and maintenance services.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', '24/7 Monitoring'],
      price: 'Starting at $800',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Server Management',
      description: 'Complete server administration, monitoring, and maintenance services.',
      features: ['Server Setup', 'Performance Monitoring', 'Security Updates', 'Disaster Recovery'],
      price: 'Starting at $1,200',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      popular: false
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure solutions.',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Troubleshooting'],
      price: 'Starting at $2,000',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
<<<<<<< HEAD
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Monitoring & logging', 'Infrastructure as code'],
      pricing: 'Starting at $3,999',
      link: '/devops',
      popular: false
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    },
    {
      id: 'database-management',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
<<<<<<< HEAD
      description: 'Expert database administration, optimization, and maintenance services',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery strategies',
        'Database security and access control',
        'Data migration and integration',
        'Monitoring and alerting systems',
        'Disaster recovery planning',
        'Database health checks and maintenance'
      ],
      pricing: 'Starting at $800/month',
      marketPrice: '$1,500-8,000/month',
      category: 'Data Management',
      popular: false,
      deliverables: ['Database Design', 'Performance Report', 'Backup Strategy', 'Security Configuration']
    },
    {
      id: 'devops-cicd',
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated deployment and continuous integration',
      features: [
        'CI/CD pipeline setup and optimization',
        'Container orchestration (Docker, Kubernetes)',
        'Infrastructure as Code (IaC) implementation',
        'Automated testing and quality assurance',
        'Deployment automation and rollback strategies',
        'Monitoring and logging solutions',
        'Environment management and provisioning',
        'Team training and best practices'
      ],
      pricing: 'Starting at $2,000/month',
      marketPrice: '$4,000-20,000/month',
      category: 'Development',
      popular: true,
      deliverables: ['Pipeline Setup', 'Automation Scripts', 'Monitoring Dashboard', 'Documentation']
    },
    {
      id: 'helpdesk-support',
      icon: <Headphones className="w-8 h-8 text-cyan-500" />,
      title: 'IT Helpdesk & Support',
      description: '24/7 technical support and helpdesk services for your organization',
      features: [
        '24/7 technical support and troubleshooting',
        'Remote desktop and system administration',
        'Software installation and updates',
        'Hardware maintenance and repairs',
        'User training and onboarding',
        'Ticket management and escalation',
        'Knowledge base and documentation',
        'SLA monitoring and reporting'
      ],
      pricing: 'Starting at $500/month',
      marketPrice: '$1,000-5,000/month',
      category: 'Support',
      popular: true,
      deliverables: ['Support Portal', 'Knowledge Base', 'SLA Reports', 'User Training Materials']
    },
    {
      id: 'mobile-app-development',
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and prototyping',
        'App store optimization and deployment',
        'Backend API development and integration',
        'Push notifications and analytics',
        'App maintenance and updates',
        'Performance optimization and testing'
      ],
      pricing: 'Starting at $5,000/project',
      marketPrice: '$10,000-100,000/project',
      category: 'Development',
      popular: false,
<<<<<<< HEAD
      duration: 'Ongoing'
=======
      description: 'Protect your business with comprehensive cybersecurity services and threat monitoring.',
      features: ['24/7 threat monitoring', 'Penetration testing', 'Security audits', 'Incident response'],
      price: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with modern DevOps practices and automation.',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Monitoring & logging', 'Container orchestration'],
      price: 'Starting at $3,000',
      link: '/devops-cicd'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time dashboards'],
      price: 'Starting at $2,000/month',
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native & cross-platform', 'UI/UX design', 'App store deployment', 'Maintenance & support'],
      price: 'Starting at $5,000',
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure, transparent, and decentralized applications.',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'Blockchain consulting'],
      price: 'Starting at $10,000',
      link: '/blockchain'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Infrastructure',
      description: 'Build, deploy, and manage scalable cloud solutions with our expert cloud engineering team.',
      features: [
        'AWS, Azure, GCP expertise',
        'Cloud migration services',
        'Infrastructure as Code',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring'
      ],
      pricing: 'Starting at $3,500/month',
      popular: true,
      link: '/cloud-infrastructure'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity services and threat protection.',
      features: [
        'Security assessments',
        'Penetration testing',
        'Incident response',
        'Compliance management',
        'Security training',
        'Threat monitoring'
      ],
      pricing: 'Starting at $2,800/month',
      popular: true,
      link: '/cybersecurity'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: [
        'Web applications',
        'Mobile apps',
        'API development',
        'Database design',
        'Integration services',
        'Maintenance & support'
      ],
      pricing: 'Starting at $4,000/month',
      popular: false,
      link: '/custom-development'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Management',
      description: 'Organize, secure, and optimize your data with our comprehensive data management solutions.',
      features: [
        'Database design',
        'Data migration',
        'Backup solutions',
        'Data analytics',
        'Data governance',
        'Performance optimization'
      ],
      pricing: 'Starting at $2,200/month',
      popular: false,
      link: '/data-management'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Solutions',
      description: 'Develop and deploy mobile applications that engage users and drive business growth.',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: 'Starting at $3,200/month',
      popular: false,
      link: '/mobile-solutions'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support services to keep your systems running smoothly and efficiently.',
      features: [
        '24/7 technical support',
        'System monitoring',
        'Software updates',
        'Hardware maintenance',
        'User training',
        'Help desk services'
      ],
      pricing: 'Starting at $1,500/month',
      popular: true,
      link: '/it-support'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
      deliverables: ['Mobile App', 'Source Code', 'Documentation', 'App Store Submission']
    },
    {
      id: 'system-integration',
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: 'System Integration',
      description: 'Connect and integrate disparate systems for seamless data flow and automation',
      features: [
        'API development and integration',
        'Legacy system modernization',
        'Data synchronization and ETL processes',
        'Third-party software integration',
        'Custom middleware development',
        'Real-time data processing',
        'System monitoring and maintenance',
        'Integration testing and validation'
      ],
      pricing: 'Starting at $3,000/month',
      marketPrice: '$6,000-30,000/month',
      category: 'Integration',
      popular: false,
      deliverables: ['Integration Architecture', 'Custom APIs', 'Data Flow Diagrams', 'Testing Reports']
=======
      features: ['CI/CD Pipeline', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: 'Starting at $1,800',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      popular: true
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
    }
  ]

  const technologies = [
    {
<<<<<<< HEAD
      category: 'Cloud Platforms',
      items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud']
    },
    {
      category: 'Operating Systems',
      items: ['Windows Server', 'Linux (Ubuntu, CentOS, RHEL)', 'macOS', 'VMware vSphere', 'Hyper-V']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Oracle', 'MongoDB', 'Redis']
    },
    {
      category: 'Security Tools',
      items: ['Firewalls (Cisco, Fortinet)', 'Antivirus Solutions', 'SIEM Systems', 'VPN Solutions', 'Identity Management']
    },
    {
      category: 'Development',
      items: ['Docker & Kubernetes', 'Jenkins & GitLab CI', 'Terraform & Ansible', 'Python, Java, .NET', 'React & Angular']
    },
    {
      category: 'Monitoring',
      items: ['Nagios & Zabbix', 'Prometheus & Grafana', 'Splunk & ELK Stack', 'New Relic & Datadog', 'PagerDuty']
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', '24/7 monitoring'],
      pricing: 'Starting at $1,499',
      link: '/database-management',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'Infrastructure Management',
      description: 'Complete management of your IT infrastructure with proactive monitoring and maintenance.',
      features: ['Server management', 'Network monitoring', 'Performance optimization', 'Disaster recovery'],
      pricing: 'Starting at $2,499',
      link: '/infrastructure',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store deployment'],
      pricing: 'Starting at $4,999',
      link: '/mobile-development',
      popular: false
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    }
  ];

  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cost Efficiency',
      description: 'Reduce IT costs by up to 40% through optimized solutions and automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
=======
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Rapid Deployment',
      description: 'Get your IT infrastructure up and running quickly with our proven methodologies and expert team'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive protection, compliance, and monitoring solutions'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business, from startup to enterprise scale'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, support, and maintenance to ensure maximum uptime'
=======
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with industry-standard compliance and monitoring'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your systems'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT'
    },
    {
      icon: <Network className="w-6 h-6 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs'
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    }
  ];

  const testimonials = [
    {
<<<<<<< HEAD
      name: 'Michael Thompson',
      company: 'CTO, TechStart Inc.',
      content: 'Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. Their expertise and attention to detail were exceptional.',
      rating: 5,
      service: 'Cloud Migration & Management'
    },
    {
      name: 'Jennifer Lee',
      company: 'IT Director, FinanceCorp',
      content: 'Their cybersecurity solutions helped us achieve SOC2 compliance and significantly improved our security posture. Highly recommended.',
      rating: 5,
      service: 'Cybersecurity Solutions'
    },
    {
      name: 'David Rodriguez',
      company: 'VP Engineering, DevTech',
      content: 'The DevOps implementation transformed our development workflow. We now deploy 10x faster with better quality and reliability.',
      rating: 5,
      service: 'DevOps & CI/CD'
    }
  ];

<<<<<<< HEAD
=======
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring', 'Incident response'],
      pricing: 'Starting at $499/month',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Services',
      description: 'Cloud migration, optimization, and management across all major platforms.',
      features: ['AWS/Azure/GCP migration', 'Cloud optimization', 'Cost management', 'Multi-cloud strategy', 'Backup solutions'],
      pricing: 'Starting at $399/month',
      category: 'Cloud'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening'],
      pricing: 'Starting at $199/month',
      category: 'Database'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Solutions',
      description: 'Network design, implementation, and ongoing management services.',
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Bandwidth optimization', 'Network security'],
      pricing: 'Starting at $249/month',
      category: 'Network'
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'System Administration',
      description: 'Complete system administration and maintenance for your IT environment.',
      features: ['User management', 'System updates', 'Performance monitoring', 'Troubleshooting', 'Documentation'],
      pricing: 'Starting at $199/month',
      category: 'Administration'
    }
  ];
=======
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost Effective',
      description: 'Reduce IT costs with efficient infrastructure management'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance solutions'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment of IT solutions'
    }
  ]
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ]

<<<<<<< HEAD
  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible payment options',
      icon: <DollarSign className="w-6 h-6 text-orange-500" />
    }
=======
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Infrastructure',
      description: 'Build robust, scalable IT infrastructure that grows with your business needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Security',
      description: 'Implement enterprise-grade security measures to protect your data and systems.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Optimization',
      description: 'Reduce IT costs through efficient resource utilization and cloud optimization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Get round-the-clock technical support and monitoring for your IT infrastructure.'
    }
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Ansible', category: 'Automation' }
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
  ];
=======
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems are always running optimally.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce IT costs by up to 40% with our efficient and scalable solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and business operations.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    }
  ];
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

>>>>>>> cursor/analyze-improve-and-deploy-application-da90
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Transform your technology infrastructure with Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, infrastructure management, Zion Tech Group" />
=======
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and more." />
        <meta name="keywords" content="IT services, infrastructure, cybersecurity, cloud, database, network, system administration" />
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Expert IT services including cloud migration, cybersecurity, network infrastructure, DevOps, and more. 24/7 support and enterprise-grade solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, DevOps, database management, IT support" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              Trusted IT Solutions Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
<<<<<<< HEAD
              Comprehensive IT solutions to keep your business running smoothly and securely. From infrastructure to cybersecurity, we've got you covered.
=======
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and blockchain solutions." />
      </Helmet>
      
=======
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, custom development, and technical support for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, software development, technical support, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation.
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive business growth.
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
      name: 'David Chen',
      company: 'TechFlow Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The migration was seamless and our performance improved by 300%.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'DataCorp Solutions',
      content: 'Their cybersecurity audit identified critical vulnerabilities we never knew existed. Highly professional team.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'CloudFirst Technologies',
      content: 'The DevOps implementation reduced our deployment time from hours to minutes. Incredible efficiency gains.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions. Enterprise-grade technology services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database management, infrastructure, enterprise technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
=======
              Transform your technology infrastructure with our expert IT services. From cloud migration to cybersecurity, 
              we deliver enterprise-grade solutions that drive efficiency, security, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
              <Link 
                to="/about" 
<<<<<<< HEAD
=======
              <Link
                to="/about"
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
=======
              <Link
                to="#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
              >
                View Services
              </Link>
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, database management, server administration, and DevOps solutions. Expert IT support for your business."
        keywords="IT services, cloud migration, cybersecurity, database management, server administration, DevOps, network infrastructure, IT support"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 animate-pulse">
                💻 Professional IT Services
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">IT Services</span> & Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services to keep your business running smoothly. 
              From cloud migration to cybersecurity, we provide expert solutions for all your technology needs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
            </div>
<<<<<<< HEAD
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions are designed to deliver reliability, security, and performance for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-gray-400">IT Projects Completed</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">Certified Experts</div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Services Grid */}
<<<<<<< HEAD
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure and drive business growth
            </p>
          </div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
=======
        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of IT services tailored to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
<<<<<<< HEAD
=======
        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions designed to meet your business requirements and drive digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      {service.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <span className="text-sm text-green-300">{service.category}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <span key={deliverableIndex} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-lg font-bold text-white">{service.pricing}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across the latest technologies and industry-standard tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
=======
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <span className="text-sm text-gray-400">{service.duration}</span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 group-hover:scale-105"
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT solutions designed to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-bold text-white">{service.pricing}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
<<<<<<< HEAD
=======
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
          </div>
        </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional IT services tailored to your business needs
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                </div>
                <ul className="space-y-2 mb-8">
=======
      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end IT services designed to modernize your technology stack and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver reliable, secure, and scalable IT solutions
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
=======
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
=======
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
=======
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the key benefits of partnering with us for your IT needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust and scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-sm font-medium text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
              </div>
            ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using our IT services to drive growth and efficiency
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you build a robust, secure, and scalable technology foundation.
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your IT Transformation
              </Link>
              <Link
                to="/it-services#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let us help you build a robust IT foundation.
=======
        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT solutions designed to support and enhance your business operations
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl relative`}
                >
<<<<<<< HEAD
                  Get Free Consultation
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
              ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
              ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
=======
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
            </div>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Let's discuss how our IT services can transform your technology stack and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </section>
<<<<<<< HEAD
=======

      <Footer />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade IT solutions with unmatched expertise and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from businesses that have transformed with our IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of businesses already using our IT solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your IT Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    </div>
=======
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver IT solutions that provide real business value and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our IT services have transformed businesses across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-sm text-green-300">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Let's discuss how our IT services can optimize your technology stack and drive business growth. 
                Get a free IT assessment and custom solution proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Assessment
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default ItServicesPage;
=======
export default ItServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
export default ITServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
export default ITServicesPage;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
export default ITServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
=======
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Upgrade Your IT Infrastructure?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let our expert team help you build a robust, secure, and scalable IT infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Get IT Consultation
                    <Server className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://ziontechgroup.com/it-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Request Demo
                    <Cloud className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
