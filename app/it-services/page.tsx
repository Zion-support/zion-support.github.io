'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Server, Network, HardDrive, Monitor, Smartphone as Mobile, Wifi, Database as Db, Shield as SecurityIcon, Settings as Config, Terminal, GitBranch, Layers, Workflow, RefreshCw, AlertTriangle, CheckCircle2, XCircle, Info, HelpCircle, ExternalLink, Download, Upload, Trash2, Edit, Copy, Save, Share, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Maximize, Minimize, RotateCcw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Mic, MicOff, Video as VideoIcon, VideoOff, Camera as CameraIcon, CameraOff, Headphones, Speaker, Printer, Scanner, Fax, Router, Switch, Hub, Modem, Antenna, Satellite, Bluetooth, Usb, Hdmi, Vga, Dvi, DisplayPort, Ethernet, Fiber, Coaxial, TwistedPair, Wireless, Cellular, Gps, Compass as CompassIcon, MapPin as MapIcon, Navigation as NavIcon, Globe as GlobeIcon, World, Earth, Planet, Sun, Moon, Star as StarIcon2, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, Wind, Thermometer, Droplets, Umbrella, Sun as SunIcon, Moon as MoonIcon, Sunrise, Sunset, Calendar as CalendarIcon, Clock as ClockIcon, Timer, Stopwatch, Hourglass, Watch, Alarm, Bell, Notification, Alert, Warning, Error, Success, Info as InfoIcon, Question, Help, Support, Chat, Message, Mail as MailIcon2, Send, Reply, Forward, Archive, Inbox, Outbox, Draft, Spam, Trash, Delete, Remove, Add, Plus, Minus, Multiply, Divide, Equals, GreaterThan, LessThan, NotEqual, Infinity, Pi, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega } from 'lucide-react';
=======
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, HardDrive, Lock, FileText, Activity, ArrowRight, Code, Cog, Globe, Users, Target, Award, Rocket, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/main

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
<<<<<<< HEAD
    // Infrastructure Services
=======
    // Infrastructure & Cloud Services
    {
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      icon: HardDrive,
      features: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '24/7 support'],
      price: 'Starting at $800/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologies: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Cybersecurity Services
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: Shield,
      features: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      price: 'Starting at $2,500/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      icon: Lock,
      features: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      price: 'Starting at $1,800/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Improved user experience', 'Compliance support', 'Reduced IT overhead'],
      technologies: ['Azure AD', 'Okta', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Compliance & Audit',
      description: 'Comprehensive security compliance services for SOC 2, ISO 27001, HIPAA, and other regulatory requirements.',
      icon: FileText,
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk assessment', 'Training programs', 'Ongoing monitoring'],
      price: 'Starting at $3,000/month',
      category: 'Security',
      benefits: ['Achieve compliance', 'Reduce audit time', 'Minimize risks', 'Build trust'],
      technologies: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with dedicated security analysts and advanced threat hunting.',
      icon: Activity,
      features: ['24/7 monitoring', 'Threat hunting', 'Incident response', 'Security analytics', 'Threat intelligence', 'Forensic analysis'],
      price: 'Starting at $5,000/month',
      category: 'Security',
      benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Proactive defense'],
      technologies: ['SIEM', 'SOAR', 'EDR', 'Threat Intelligence', 'Forensic Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Database & Data Management
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management with performance tuning, backup strategies, and high availability solutions.',
      icon: Database,
      features: ['Performance tuning', 'Backup & recovery', 'High availability', 'Data migration', 'Monitoring', 'Capacity planning'],
      price: 'Starting at $1,500/month',
      category: 'Data',
      benefits: ['Improved performance', 'Reduced downtime', 'Cost optimization', 'Data protection'],
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and rapid recovery capabilities.',
      icon: HardDrive,
      features: ['Automated backups', 'Disaster recovery planning', 'RTO/RPO optimization', 'Testing & validation', 'Cloud backup', 'Recovery automation'],
      price: 'Starting at $1,200/month',
      category: 'Data',
      benefits: ['Minimize data loss', 'Rapid recovery', 'Business continuity', 'Compliance support'],
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Migration Services',
      description: 'Seamless data migration with zero downtime, data validation, and comprehensive testing for all platforms.',
      icon: ArrowRight,
      features: ['Zero-downtime migration', 'Data validation', 'Schema conversion', 'Performance testing', 'Rollback planning', 'Post-migration support'],
      price: 'Starting at $2,500/project',
      category: 'Data',
      benefits: ['Risk-free migration', 'Minimal downtime', 'Data integrity', 'Cost savings'],
      technologies: ['AWS DMS', 'Azure Data Factory', 'Google Cloud Data Transfer', 'Custom Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // DevOps & Development
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.',
      icon: Code,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Automated testing'],
      price: 'Starting at $2,000/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation with containerization and service mesh.',
      icon: Cog,
      features: ['Architecture design', 'Service decomposition', 'API gateway', 'Service mesh', 'Monitoring', 'Scaling strategies'],
      price: 'Starting at $3,500/month',
      category: 'Development',
      benefits: ['Improved scalability', 'Better maintainability', 'Faster development', 'Technology flexibility'],
      technologies: ['Kubernetes', 'Istio', 'Docker', 'API Gateway', 'Service Mesh', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Development & Management',
      description: 'Comprehensive API development with design, implementation, security, and lifecycle management.',
      icon: Globe,
      features: ['API design', 'RESTful APIs', 'GraphQL', 'API security', 'Rate limiting', 'Documentation'],
      price: 'Starting at $1,800/month',
      category: 'Development',
      benefits: ['Better integration', 'Improved security', 'Enhanced performance', 'Developer experience'],
      technologies: ['Node.js', 'Python', 'Java', 'Kong', 'Apigee', 'AWS API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // IT Support & Management
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including help desk, system administration, and proactive maintenance.',
      icon: Users,
      features: ['24/7 help desk', 'Remote support', 'System administration', 'Patch management', 'User training', 'Asset management'],
      price: 'Starting at $1,000/month',
      category: 'Support',
      benefits: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance'],
      technologies: ['RMM Tools', 'PSA Software', 'Remote Access', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT planning and consulting to align technology with business objectives and drive digital transformation.',
      icon: Target,
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Vendor evaluation', 'Budget planning', 'Roadmap creation'],
      price: 'Starting at $2,500/month',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      technologies: ['Strategy Frameworks', 'Assessment Tools', 'Planning Software'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and compliance reporting.',
      icon: Settings,
      features: ['Asset tracking', 'License management', 'Lifecycle planning', 'Cost optimization', 'Compliance reporting', 'Vendor management'],
      price: 'Starting at $800/month',
      category: 'Management',
      benefits: ['Cost savings', 'Compliance assurance', 'Better planning', 'Reduced risks'],
      technologies: ['Asset Management Tools', 'License Management', 'CMDB', 'Reporting Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Specialized Services
    {
      title: 'Microsoft 365 Migration & Management',
      description: 'Complete Microsoft 365 migration with security configuration, user training, and ongoing management.',
      icon: Mail,
      features: ['Migration planning', 'Data migration', 'Security configuration', 'User training', 'Ongoing management', 'Compliance setup'],
      price: 'Starting at $1,500/month',
      category: 'Cloud Services',
      benefits: ['Improved collaboration', 'Enhanced security', 'Cost savings', 'Better productivity'],
      technologies: ['Microsoft 365', 'Azure AD', 'PowerShell', 'Migration Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'VoIP & Unified Communications',
      description: 'Modern communication solutions with VoIP, video conferencing, and unified communications platforms.',
      icon: Phone,
      features: ['VoIP implementation', 'Video conferencing', 'Unified communications', 'Call center solutions', 'Integration services', 'Training'],
      price: 'Starting at $1,200/month',
      category: 'Communications',
      benefits: ['Cost savings', 'Improved collaboration', 'Better mobility', 'Enhanced features'],
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', '8x8', 'RingCentral', 'Avaya'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs for staff development and certification preparation.',
      icon: Award,
      features: ['Technical training', 'Certification prep', 'Security awareness', 'Software training', 'Custom programs', 'Online learning'],
      price: 'Starting at $500/month',
      category: 'Training',
      benefits: ['Improved skills', 'Better productivity', 'Reduced support needs', 'Career development'],
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Expert IT project management with planning, execution, and delivery of complex technology initiatives.',
      icon: Rocket,
      features: ['Project planning', 'Resource management', 'Risk assessment', 'Timeline management', 'Quality assurance', 'Stakeholder communication'],
      price: 'Starting at $2,000/month',
      category: 'Project Management',
      benefits: ['On-time delivery', 'Cost control', 'Quality assurance', 'Risk mitigation'],
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Risk Management Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Data', count: itServices.filter(s => s.category === 'Data').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Communications', count: itServices.filter(s => s.category === 'Communications').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length }
  ];
=======
  const services = [
>>>>>>> origin/main
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, management, and optimization for enterprise environments.',
      icon: Server,
      price: '$2,999/month',
      originalPrice: '$8,999/month',
      category: 'infrastructure',
      features: [
        'Server Management & Monitoring',
        'Network Infrastructure Setup',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        'Security Hardening',
        '24/7 Monitoring',
        'Proactive Maintenance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduce IT costs by 40%',
        'Improve system performance by 60%',
        'Eliminate downtime issues'
      ],
      marketPrice: '$8,999-25,000/month',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% uptime SLA',
      responseTime: '15 minutes'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Setup',
      description: 'Complete cloud migration services with AWS, Azure, and Google Cloud Platform expertise.',
      icon: Cloud,
      price: '$4,999/month',
      originalPrice: '$15,999/month',
      category: 'cloud',
      features: [
        'Multi-cloud Strategy',
        'Migration Planning & Execution',
        'Cost Optimization',
        'Security Configuration',
        'Performance Tuning',
        'Disaster Recovery Setup',
        'Monitoring & Alerting',
        'Training & Documentation'
      ],
      benefits: [
        'Reduce infrastructure costs by 50%',
        'Improve scalability by 300%',
        'Enhance security posture by 80%',
        'Enable remote work capabilities'
      ],
      marketPrice: '$15,999-50,000/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.95% uptime SLA',
      responseTime: '10 minutes'
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity',
      description: 'Comprehensive cybersecurity solutions with threat detection, prevention, and incident response.',
      icon: Shield,
      price: '$3,499/month',
      originalPrice: '$12,999/month',
      category: 'security',
      features: [
        'Threat Detection & Prevention',
        'Vulnerability Assessment',
        'Security Monitoring 24/7',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Penetration Testing',
        'Security Audits'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Ensure compliance with regulations',
        'Protect sensitive data effectively'
      ],
      marketPrice: '$12,999-35,000/month',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '15-minute response time',
      responseTime: '5 minutes'
    },
    {
<<<<<<< HEAD
      id: 'devops-cicd',
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated CI/CD pipelines and infrastructure as code.',
      icon: GitBranch,
      price: '$2,499/month',
      originalPrice: '$7,999/month',
      category: 'devops',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Container Orchestration',
        'Monitoring & Logging',
        'Deployment Automation',
        'Version Control Management',
        'Team Training'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve code quality by 70%',
        'Enable continuous delivery'
      ],
      marketPrice: '$7,999-20,000/month',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% deployment success rate',
      responseTime: '30 minutes'
    },
    {
      id: 'database-management',
      title: 'Database Management & Optimization',
      description: 'Expert database administration with performance tuning, backup, and security management.',
      icon: Database,
      price: '$1,999/month',
      originalPrice: '$5,999/month',
      category: 'database',
      features: [
        'Database Design & Architecture',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Alerting',
        'Capacity Planning',
        'Migration Services',
        '24/7 Support'
      ],
      benefits: [
        'Improve query performance by 80%',
        'Reduce downtime by 95%',
        'Optimize storage costs by 40%',
        'Ensure data integrity'
      ],
      marketPrice: '$5,999-15,000/month',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% availability',
      responseTime: '20 minutes'
    },
    {
      id: 'network-services',
      title: 'Network Design & Management',
      description: 'Complete network infrastructure design, implementation, and ongoing management services.',
      icon: Network,
      price: '$2,299/month',
      originalPrice: '$6,999/month',
      category: 'networking',
      features: [
        'Network Design & Architecture',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'VPN Implementation',
        'Network Monitoring',
        'Security Configuration',
        'Performance Optimization',
        'Troubleshooting & Support'
      ],
      benefits: [
        'Improve network performance by 70%',
        'Reduce connectivity issues by 90%',
        'Enhance security by 85%',
        'Enable remote access capabilities'
      ],
      marketPrice: '$6,999-18,000/month',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% network uptime',
      responseTime: '15 minutes'
    },
    // Specialized Services
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services with 24/7 monitoring, support, and proactive maintenance.',
=======
      icon: Database,
      title: 'Database Services',
      price: '$899/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    },
    {
>>>>>>> origin/main
      icon: Settings,
      price: '$1,499/month',
      originalPrice: '$4,999/month',
      category: 'managed-services',
      features: [
        '24/7 Help Desk Support',
        'Proactive Monitoring',
        'Patch Management',
        'Security Updates',
        'Backup Management',
        'Performance Optimization',
        'Vendor Management',
        'Monthly Reporting'
      ],
      benefits: [
        'Reduce IT costs by 60%',
        'Improve system reliability by 80%',
        'Free up internal IT resources',
        'Ensure compliance and security'
      ],
      marketPrice: '$4,999-12,000/month',
      technologies: ['RMM Tools', 'PSA Software', 'Monitoring Systems', 'Automation Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% uptime guarantee',
      responseTime: '5 minutes'
    },
    {
      id: 'it-consulting',
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting services for digital transformation and technology roadmap development.',
      icon: Brain,
      price: '$299/hour',
      originalPrice: '$599/hour',
      category: 'consulting',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation Planning',
        'Vendor Evaluation',
        'Cost Optimization',
        'Risk Assessment',
        'Compliance Review',
        'Implementation Roadmap'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Improve operational efficiency',
        'Mitigate technology risks'
      ],
      marketPrice: '$599-1,200/hour',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Risk Analysis', 'ROI Analysis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '48-hour response time',
      responseTime: '24 hours'
    },
    {
      id: 'data-center-services',
      title: 'Data Center Services',
      description: 'Complete data center design, implementation, and management with colocation and cloud options.',
      icon: HardDrive,
      price: '$4,999/month',
      originalPrice: '$15,999/month',
      category: 'data-center',
      features: [
        'Data Center Design',
        'Power & Cooling Solutions',
        'Security Implementation',
        'Monitoring Systems',
        'Backup Power Systems',
        'Environmental Controls',
        'Physical Security',
        'Compliance Management'
      ],
      benefits: [
        'Ensure 99.99% uptime',
        'Reduce operational costs by 50%',
        'Improve energy efficiency by 40%',
        'Meet compliance requirements'
      ],
      marketPrice: '$15,999-45,000/month',
      technologies: ['UPS Systems', 'Cooling Systems', 'Security Systems', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.99% uptime SLA',
      responseTime: '5 minutes'
    },
    {
      id: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and recovery procedures.',
      icon: RefreshCw,
      price: '$1,299/month',
      originalPrice: '$3,999/month',
      category: 'backup-recovery',
      features: [
        'Automated Backup Systems',
        'Disaster Recovery Planning',
        'Recovery Testing',
        'Off-site Storage',
        'Ransomware Protection',
        'Compliance Backup',
        'Recovery Time Optimization',
        '24/7 Monitoring'
      ],
      benefits: [
        'Reduce recovery time by 90%',
        'Prevent data loss completely',
        'Meet compliance requirements',
        'Minimize business disruption'
      ],
      marketPrice: '$3,999-10,000/month',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'Cloud Storage', 'Replication Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '4-hour recovery time',
      responseTime: '10 minutes'
    },
    {
      id: 'endpoint-management',
      title: 'Endpoint Management',
      description: 'Comprehensive endpoint management for desktops, laptops, and mobile devices with security and compliance.',
      icon: Monitor,
      price: '$89/device/month',
      originalPrice: '$199/device/month',
      category: 'endpoint',
      features: [
        'Device Provisioning',
        'Software Deployment',
        'Patch Management',
        'Security Configuration',
        'Remote Support',
        'Asset Management',
        'Compliance Monitoring',
        'Performance Optimization'
      ],
      benefits: [
        'Reduce support tickets by 70%',
        'Improve security posture by 85%',
        'Streamline device management',
        'Ensure compliance automatically'
      ],
      marketPrice: '$199-399/device/month',
      technologies: ['Microsoft Intune', 'SCCM', 'Jamf', 'Mobile Device Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% device availability',
      responseTime: '15 minutes'
    },
    {
      id: 'voip-telephony',
      title: 'VoIP & Unified Communications',
      description: 'Complete VoIP and unified communications solutions with video conferencing and collaboration tools.',
      icon: Phone,
      price: '$29/user/month',
      originalPrice: '$79/user/month',
      category: 'communications',
      features: [
        'VoIP Phone Systems',
        'Video Conferencing',
        'Instant Messaging',
        'File Sharing',
        'Mobile Integration',
        'Call Recording',
        'Analytics & Reporting',
        'Integration APIs'
      ],
      benefits: [
        'Reduce communication costs by 60%',
        'Improve collaboration by 80%',
        'Enable remote work capabilities',
        'Enhance customer service'
      ],
      marketPrice: '$79-199/user/month',
      technologies: ['Microsoft Teams', 'Zoom', 'Cisco', 'Avaya', 'SIP Trunking'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% call quality',
      responseTime: '10 minutes'
    },
    {
      id: 'it-security-audit',
      title: 'IT Security Audit & Compliance',
      description: 'Comprehensive security audits and compliance assessments with remediation planning and implementation.',
      icon: Search,
      price: '$2,999/audit',
      originalPrice: '$8,999/audit',
      category: 'security-audit',
      features: [
        'Security Assessment',
        'Vulnerability Scanning',
        'Penetration Testing',
        'Compliance Review',
        'Risk Analysis',
        'Remediation Planning',
        'Policy Development',
        'Staff Training'
      ],
      benefits: [
        'Identify security gaps',
        'Meet compliance requirements',
        'Reduce security risks by 90%',
        'Improve security posture'
      ],
      marketPrice: '$8,999-25,000/audit',
      technologies: ['Security Tools', 'Compliance Frameworks', 'Risk Assessment', 'Penetration Testing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '30-day delivery',
      responseTime: '24 hours'
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security Services',
      description: 'Specialized cloud security services with multi-cloud protection and compliance management.',
      icon: Cloud,
      price: '$1,999/month',
      originalPrice: '$5,999/month',
      category: 'cloud-security',
      features: [
        'Cloud Security Assessment',
        'Identity & Access Management',
        'Data Encryption',
        'Threat Detection',
        'Compliance Monitoring',
        'Security Automation',
        'Incident Response',
        'Security Training'
      ],
      benefits: [
        'Secure cloud environments',
        'Meet compliance requirements',
        'Prevent data breaches',
        'Automate security processes'
      ],
      marketPrice: '$5,999-15,000/month',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'Cloud Security Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% security monitoring',
      responseTime: '5 minutes'
    },
    {
      id: 'it-training',
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs with certification preparation and hands-on labs.',
      icon: GraduationCap,
      price: '$199/person/day',
      originalPrice: '$599/person/day',
      category: 'training',
      features: [
        'Customized Training Programs',
        'Certification Preparation',
        'Hands-on Labs',
        'Online & In-person Options',
        'Progress Tracking',
        'Certification Vouchers',
        'Follow-up Support',
        'Team Training'
      ],
      benefits: [
        'Improve team skills by 80%',
        'Increase productivity by 60%',
        'Reduce support costs by 50%',
        'Boost employee satisfaction'
      ],
      marketPrice: '$599-1,299/person/day',
      technologies: ['Microsoft', 'Cisco', 'AWS', 'Azure', 'VMware', 'Linux'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: 'Custom training schedule',
      responseTime: '48 hours'
    }
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-11c2

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'cloud', name: 'Cloud Services', count: itServices.filter(s => s.category === 'cloud').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'devops', name: 'DevOps', count: itServices.filter(s => s.category === 'devops').length },
    { id: 'database', name: 'Database', count: itServices.filter(s => s.category === 'database').length },
    { id: 'networking', name: 'Networking', count: itServices.filter(s => s.category === 'networking').length },
    { id: 'managed-services', name: 'Managed Services', count: itServices.filter(s => s.category === 'managed-services').length },
    { id: 'consulting', name: 'Consulting', count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'data-center', name: 'Data Center', count: itServices.filter(s => s.category === 'data-center').length },
    { id: 'backup-recovery', name: 'Backup & Recovery', count: itServices.filter(s => s.category === 'backup-recovery').length },
    { id: 'endpoint', name: 'Endpoint Management', count: itServices.filter(s => s.category === 'endpoint').length },
    { id: 'communications', name: 'Communications', count: itServices.filter(s => s.category === 'communications').length },
    { id: 'security-audit', name: 'Security Audit', count: itServices.filter(s => s.category === 'security-audit').length },
    { id: 'cloud-security', name: 'Cloud Security', count: itServices.filter(s => s.category === 'cloud-security').length },
    { id: 'training', name: 'Training', count: itServices.filter(s => s.category === 'training').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, cloud, security, DevOps, and managed services. Enterprise-grade solutions starting at $89/month." />
        <meta name="keywords" content="it services, infrastructure, cloud services, cybersecurity, devops, managed it services, it consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
<<<<<<< HEAD
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
>>>>>>> origin/main
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize, secure, and modernize your technology infrastructure.
          </p>
<<<<<<< HEAD
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$89</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
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

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our IT Services
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
>>>>>>> origin/main
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cyber-card group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-sm">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions including infrastructure, cybersecurity, 
              database management, and DevOps services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Cloud className="w-4 h-4" />
                <span>Get Started</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/website-audit-and-update-with-deployment-11c2
>>>>>>> origin/main
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
<<<<<<< HEAD

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
=======
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
>>>>>>> origin/main
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD

                {/* SLA and Response Time */}
                <div className="mb-6 space-y-2">
                  {service.sla && (
                    <div className="p-3 bg-blue-900/20 rounded-lg">
                      <div className="text-sm text-blue-300 font-semibold">
                        🛡️ {service.sla}
                      </div>
                    </div>
                  )}
                  {service.responseTime && (
                    <div className="p-3 bg-green-900/20 rounded-lg">
                      <div className="text-sm text-green-300 font-semibold">
                        ⚡ {service.responseTime} response time
                      </div>
                    </div>
                  )}
                </div>

                {/* Market Price */}
                <div className="mb-6 p-3 bg-yellow-900/20 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-300">Market Price:</span>
                    <span className="text-yellow-400 font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="text-xs text-yellow-200 mt-1">
                    You save {Math.round((1 - parseFloat(service.price.replace(/[$,]/g, '')) / parseFloat(service.originalPrice.replace(/[$,]/g, ''))) * 100)}%
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                  >
                    Get Started Now
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-transparent border-2 border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all text-center block"
                  >
                    Call for Consultation
                  </a>
                </div>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  {service.contactInfo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and transform your technology operations.
=======
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-all duration-300 hover:neon-glow"
                  >
                    Get Started →
                  </a>
                </div>
<<<<<<< HEAD
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our IT services can help your business grow and succeed.
>>>>>>> origin/main
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
<<<<<<< HEAD
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
=======
              className="cyber-button inline-flex items-center space-x-2"
>>>>>>> origin/main
            >
              <Phone className="w-4 h-4" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
<<<<<<< HEAD
      </section>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-11c2
      </main>
      <Footer />
>>>>>>> origin/main
    </div>
  );
};

export default ITServicesPage;