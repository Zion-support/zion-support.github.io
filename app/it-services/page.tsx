'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight,
  CheckCircle, Star, Clock, Users, TrendingUp, Wifi, Server, Code, 
  ShoppingCart, Monitor, Headphones, BarChart, Cpu, Lock, Mail, Phone,
  MapPin, Search, Filter, SortAsc, Download, Upload, Share2, Copy,
  Edit, Trash2, Plus, Minus, X, Check, AlertTriangle, Info, Play,
  Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Camera, Video,
  Image, Music, File, Folder, Archive, Bookmark, Tag, Flag, Pin,
  Compass, Navigation, Map, Home, Building, Car, Plane, Train, Ship,
  Bike, Walk, Run, Activity, Pulse, Grid, Award, Rocket, Layers,
  Workflow, BarChart3, MessageSquare, HardDrive, Printer, Router,
  Package, Heart, DollarSign, Calendar, Target, FileText, Eye, Mic,
  Link, Brain, Award as Trophy, Rocket as Launch, Layers as Stack,
  Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat,
  Headphones as Support, Monitor as Screen, HardDrive as Storage,
  Wifi as Network, Printer as Print, Router as Gateway, Package as Box
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Grid, color: 'from-cyan-500 to-blue-600' },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud, color: 'from-purple-500 to-pink-600' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },
    { id: 'devops', name: 'DevOps & CI/CD', icon: Settings, color: 'from-green-500 to-emerald-600' },
    { id: 'development', name: 'Development', icon: Code, color: 'from-orange-500 to-red-600' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, color: 'from-blue-500 to-cyan-600' },
    { id: 'data', name: 'Data & Analytics', icon: Database, color: 'from-indigo-500 to-purple-600' },
    { id: 'mobile', name: 'Mobile Solutions', icon: Smartphone, color: 'from-yellow-500 to-orange-600' },
    { id: 'support', name: 'IT Support', icon: Headphones, color: 'from-pink-500 to-rose-600' },
    { id: 'consulting', name: 'Consulting', icon: Users, color: 'from-green-600 to-teal-600' }
  ];

  const services = [
    // Cloud Services
    {
      id: 'cloud-infrastructure-pro',
      name: 'Cloud Infrastructure Pro',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with enterprise-grade security and optimization.',
      price: '$2,999/month',
      marketPrice: '$4999-19999/month',
      features: [
        'Multi-cloud architecture design', 'Cloud migration services', 'Cost optimization', 'Auto-scaling solutions',
        'Disaster recovery planning', 'Security compliance', 'Performance monitoring', '24/7 support',
        'Custom cloud strategies', 'Hybrid cloud solutions', 'Cloud-native development', 'Backup & recovery'
      ],
      benefits: [
        '99.9% uptime guarantee', 'Cost reduction up to 50%', 'Scalable infrastructure', 'Expert migration support',
        'Better performance', 'Enhanced security', 'Reduced operational costs'
      ],
      category: 'cloud',
      popular: true,
      icon: Cloud,
      link: 'https://ziontechgroup.com/cloud-infrastructure-pro',
      rating: 4.9,
      reviews: 1247
    },
    {
      id: 'cloud-migration-advanced',
      name: 'Advanced Cloud Migration',
      description: 'Zero-downtime cloud migration with automated tools, testing, and seamless transition planning.',
      price: '$4,999/month',
      marketPrice: '$7999-29999/month',
      features: [
        'Zero-downtime migration', 'Automated migration tools', 'Comprehensive testing', 'Rollback capabilities',
        'Performance optimization', 'Security assessment', 'Cost analysis', 'Training & documentation',
        'Custom migration plans', 'Risk mitigation', 'Compliance validation', 'Post-migration support'
      ],
      benefits: [
        'Seamless migration', 'No business disruption', 'Better performance', 'Reduced costs',
        'Enhanced security', 'Improved scalability', 'Future-proof architecture'
      ],
      category: 'cloud',
      popular: true,
      icon: Cloud,
      link: 'https://ziontechgroup.com/cloud-migration-advanced',
      rating: 4.8,
      reviews: 892
    },
    {
      id: 'cloud-cost-optimization',
      name: 'Cloud Cost Optimization',
      description: 'Intelligent cloud cost management with automated optimization and spending analytics.',
      price: '$1,499/month',
      marketPrice: '$2499-9999/month',
      features: [
        'Cost analysis & reporting', 'Automated optimization', 'Resource right-sizing', 'Reserved instance planning',
        'Spot instance management', 'Storage optimization', 'Network cost reduction', 'Budget alerts',
        'Cost forecasting', 'ROI analysis', 'Custom recommendations', 'Monthly reports'
      ],
      benefits: [
        '30-60% cost reduction', 'Better resource utilization', 'Automated optimization', 'Detailed analytics',
        'Budget control', 'ROI improvement', 'Transparent pricing'
      ],
      category: 'cloud',
      popular: false,
      icon: TrendingUp,
      link: 'https://ziontechgroup.com/cloud-cost-optimization',
      rating: 4.7,
      reviews: 634
    },

    // Cybersecurity
    {
      id: 'cybersecurity-advanced',
      name: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive security services with threat hunting, incident response, and compliance management.',
      price: '$3,999/month',
      marketPrice: '$6999-24999/month',
      features: [
        'Threat hunting & detection', 'Incident response', 'Vulnerability assessments', 'Penetration testing',
        'Security monitoring', 'Compliance management', 'Employee training', 'Security audits',
        'Risk assessment', 'Security orchestration', 'Forensic analysis', '24/7 SOC'
      ],
      benefits: [
        'Proactive threat detection', 'Faster incident response', 'Reduced security risks', 'Compliance assurance',
        'Expert security team', 'Better protection', 'Cost savings'
      ],
      category: 'security',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/cybersecurity-advanced',
      rating: 4.9,
      reviews: 1156
    },
    {
      id: 'security-automation',
      name: 'Security Automation Platform',
      description: 'Automated security operations with AI-powered threat detection and response capabilities.',
      price: '$2,499/month',
      marketPrice: '$3999-14999/month',
      features: [
        'Automated threat detection', 'Incident response automation', 'Security orchestration', 'AI-powered analysis',
        'Threat intelligence', 'Vulnerability management', 'Compliance automation', 'Security analytics',
        'Custom playbooks', 'Integration capabilities', 'Real-time monitoring', 'Automated remediation'
      ],
      benefits: [
        'Faster response times', 'Reduced manual work', 'Better threat detection', 'Automated compliance',
        'Cost savings', 'Improved security posture', '24/7 protection'
      ],
      category: 'security',
      popular: true,
      icon: Zap,
      link: 'https://ziontechgroup.com/security-automation',
      rating: 4.8,
      reviews: 789
    },
    {
      id: 'compliance-automation',
      name: 'Compliance Automation',
      description: 'Automated compliance management with regulatory tracking, audit preparation, and risk assessment.',
      price: '$1,999/month',
      marketPrice: '$2999-9999/month',
      features: [
        'Regulatory tracking', 'Audit preparation', 'Risk assessment', 'Document management',
        'Training modules', 'Reporting tools', 'Alert system', 'Integration capabilities',
        'Compliance monitoring', 'Policy management', 'Audit trails', 'Custom workflows'
      ],
      benefits: [
        'Reduced compliance risks', 'Automated reporting', 'Better audit preparation', 'Cost savings',
        'Time efficiency', 'Better compliance', 'Risk mitigation'
      ],
      category: 'security',
      popular: false,
      icon: CheckCircle,
      link: 'https://ziontechgroup.com/compliance-automation',
      rating: 4.7,
      reviews: 456
    },

    // DevOps & CI/CD
    {
      id: 'devops-advanced',
      name: 'Advanced DevOps & SRE',
      description: 'Site reliability engineering with advanced monitoring, automation, and performance optimization.',
      price: '$3,499/month',
      marketPrice: '$5999-19999/month',
      features: [
        'CI/CD pipeline optimization', 'Infrastructure as Code', 'Container orchestration', 'Monitoring & alerting',
        'Automated testing', 'Deployment automation', 'Performance optimization', 'Disaster recovery',
        'SRE practices', 'Incident management', 'Capacity planning', 'Security integration'
      ],
      benefits: [
        'Faster deployments', 'Reduced downtime', 'Improved reliability', 'Better performance',
        'Cost optimization', 'Scalable operations', 'Better team productivity'
      ],
      category: 'devops',
      popular: true,
      icon: Settings,
      link: 'https://ziontechgroup.com/devops-advanced',
      rating: 4.8,
      reviews: 978
    },
    {
      id: 'machine-learning-ops',
      name: 'MLOps & AI Operations',
      description: 'Machine learning operations with model deployment, monitoring, and automated retraining.',
      price: '$2,999/month',
      marketPrice: '$4999-14999/month',
      features: [
        'Model deployment', 'Model monitoring', 'Automated retraining', 'A/B testing',
        'Model versioning', 'Performance tracking', 'Data pipeline management', 'Model governance',
        'Scalable infrastructure', 'Integration capabilities', 'Monitoring dashboards', 'Automated workflows'
      ],
      benefits: [
        'Faster model deployment', 'Better model performance', 'Automated operations', 'Reduced costs',
        'Scalable ML operations', 'Better governance', 'Improved reliability'
      ],
      category: 'devops',
      popular: false,
      icon: Brain,
      link: 'https://ziontechgroup.com/machine-learning-ops',
      rating: 4.7,
      reviews: 567
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration',
      description: 'Kubernetes and container management with automated scaling, monitoring, and security.',
      price: '$2,199/month',
      marketPrice: '$3999-12999/month',
      features: [
        'Kubernetes management', 'Container orchestration', 'Auto-scaling', 'Service mesh',
        'Monitoring & logging', 'Security scanning', 'CI/CD integration', 'Multi-cluster management',
        'Resource optimization', 'Disaster recovery', 'Backup & restore', 'Performance tuning'
      ],
      benefits: [
        'Better scalability', 'Improved reliability', 'Cost optimization', 'Faster deployments',
        'Better resource utilization', 'Enhanced security', 'Simplified management'
      ],
      category: 'devops',
      popular: true,
      icon: Server,
      link: 'https://ziontechgroup.com/container-orchestration',
      rating: 4.8,
      reviews: 723
    },

    // Development
    {
      id: 'custom-software-development',
      name: 'Custom Software Development',
      description: 'Tailored software solutions with modern technologies, agile development, and quality assurance.',
      price: '$4,999/month',
      marketPrice: '$7999-29999/month',
      features: [
        'Custom application development', 'Modern technology stack', 'Agile development', 'Quality assurance',
        'Code review & testing', 'Performance optimization', 'Security implementation', 'Documentation',
        'Maintenance & support', 'Scalability planning', 'Integration capabilities', 'User training'
      ],
      benefits: [
        'Tailored solutions', 'Modern technology', 'Quality assurance', 'Scalable architecture',
        'Better performance', 'Enhanced security', 'Ongoing support'
      ],
      category: 'development',
      popular: true,
      icon: Code,
      link: 'https://ziontechgroup.com/custom-software-development',
      rating: 4.9,
      reviews: 1124
    },
    {
      id: 'api-development-advanced',
      name: 'Advanced API Development',
      description: 'Enterprise-grade API development with security, monitoring, and comprehensive documentation.',
      price: '$2,999/month',
      marketPrice: '$4999-14999/month',
      features: [
        'RESTful API development', 'GraphQL APIs', 'API security', 'Rate limiting',
        'Authentication & authorization', 'API documentation', 'Testing & validation', 'Performance optimization',
        'Monitoring & analytics', 'Versioning strategy', 'Integration testing', 'Developer portal'
      ],
      benefits: [
        'Better API performance', 'Enhanced security', 'Comprehensive documentation', 'Developer-friendly',
        'Scalable architecture', 'Better monitoring', 'Reduced development time'
      ],
      category: 'development',
      popular: true,
      icon: Link,
      link: 'https://ziontechgroup.com/api-development-advanced',
      rating: 4.8,
      reviews: 856
    },
    {
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Blockchain solutions including smart contracts, DeFi protocols, and enterprise blockchain integration.',
      price: '$5,999/month',
      marketPrice: '$9999-39999/month',
      features: [
        'Smart contract development', 'DeFi protocol creation', 'NFT marketplace', 'Blockchain integration',
        'Cryptocurrency development', 'Token economics', 'Security auditing', 'Performance optimization',
        'Consensus mechanisms', 'Wallet integration', 'DApp development', 'Blockchain consulting'
      ],
      benefits: [
        'Innovative solutions', 'Enhanced security', 'Decentralized architecture', 'Future-proof technology',
        'Competitive advantage', 'Better transparency', 'Reduced costs'
      ],
      category: 'development',
      popular: false,
      icon: Link,
      link: 'https://ziontechgroup.com/blockchain-development',
      rating: 4.7,
      reviews: 234
    },

    // Infrastructure
    {
      id: 'network-infrastructure-pro',
      name: 'Network Infrastructure Pro',
      description: 'Enterprise network design, implementation, and management with security and performance optimization.',
      price: '$2,499/month',
      marketPrice: '$3999-12999/month',
      features: [
        'Network design & planning', 'Router & switch configuration', 'Wireless network setup', 'Network security',
        'Performance monitoring', 'Troubleshooting & support', 'Network optimization', 'Disaster recovery',
        'VPN implementation', 'Load balancing', 'Network documentation', '24/7 monitoring'
      ],
      benefits: [
        'Better network performance', 'Enhanced security', 'Reduced downtime', 'Cost optimization',
        'Scalable infrastructure', 'Better reliability', 'Expert support'
      ],
      category: 'infrastructure',
      popular: true,
      icon: Wifi,
      link: 'https://ziontechgroup.com/network-infrastructure-pro',
      rating: 4.8,
      reviews: 692
    },
    {
      id: 'disaster-recovery-advanced',
      name: 'Advanced Disaster Recovery',
      description: 'Comprehensive disaster recovery planning with automated backup, testing, and rapid recovery.',
      price: '$1,999/month',
      marketPrice: '$2999-9999/month',
      features: [
        'Disaster recovery planning', 'Automated backup systems', 'Recovery testing', 'RTO/RPO optimization',
        'Multi-site replication', 'Failover automation', 'Recovery documentation', 'Regular testing',
        'Compliance validation', 'Risk assessment', 'Recovery procedures', '24/7 monitoring'
      ],
      benefits: [
        'Faster recovery times', 'Reduced data loss', 'Better business continuity', 'Cost optimization',
        'Compliance assurance', 'Peace of mind', 'Expert support'
      ],
      category: 'infrastructure',
      popular: false,
      icon: Shield,
      link: 'https://ziontechgroup.com/disaster-recovery-advanced',
      rating: 4.7,
      reviews: 456
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Application and infrastructure performance optimization with monitoring and automated tuning.',
      price: '$1,799/month',
      marketPrice: '$2999-9999/month',
      features: [
        'Performance analysis', 'Code optimization', 'Database tuning', 'Infrastructure optimization',
        'Caching strategies', 'CDN implementation', 'Load testing', 'Performance monitoring',
        'Automated optimization', 'Capacity planning', 'Bottleneck identification', 'Performance reporting'
      ],
      benefits: [
        'Better performance', 'Reduced costs', 'Improved user experience', 'Scalable solutions',
        'Automated optimization', 'Better monitoring', 'Expert guidance'
      ],
      category: 'infrastructure',
      popular: true,
      icon: Zap,
      link: 'https://ziontechgroup.com/performance-optimization',
      rating: 4.8,
      reviews: 567
    },

    // Data & Analytics
    {
      id: 'data-engineering',
      name: 'Data Engineering',
      description: 'Data pipeline development, ETL processes, and data warehouse solutions with real-time processing.',
      price: '$3,999/month',
      marketPrice: '$6999-19999/month',
      features: [
        'Data pipeline development', 'ETL/ELT processes', 'Data warehouse design', 'Real-time processing',
        'Data quality management', 'Data governance', 'Performance optimization', 'Scalable architecture',
        'Cloud data solutions', 'Data integration', 'Monitoring & alerting', 'Documentation'
      ],
      benefits: [
        'Better data quality', 'Faster processing', 'Scalable solutions', 'Cost optimization',
        'Better insights', 'Automated processes', 'Expert support'
      ],
      category: 'data',
      popular: true,
      icon: Database,
      link: 'https://ziontechgroup.com/data-engineering',
      rating: 4.8,
      reviews: 789
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization & BI',
      description: 'Advanced business intelligence with interactive dashboards, reporting, and data visualization.',
      price: '$2,499/month',
      marketPrice: '$3999-12999/month',
      features: [
        'Interactive dashboards', 'Custom reports', 'Data visualization', 'Self-service BI',
        'Real-time analytics', 'Mobile BI', 'Data storytelling', 'Advanced analytics',
        'Integration capabilities', 'User training', 'Performance optimization', 'Custom development'
      ],
      benefits: [
        'Better insights', 'Faster decisions', 'Self-service analytics', 'Mobile access',
        'Better reporting', 'Cost savings', 'User-friendly interface'
      ],
      category: 'data',
      popular: true,
      icon: BarChart,
      link: 'https://ziontechgroup.com/data-visualization',
      rating: 4.7,
      reviews: 634
    },
    {
      id: 'big-data-solutions',
      name: 'Big Data Solutions',
      description: 'Big data processing with Hadoop, Spark, and cloud-based analytics for large-scale data processing.',
      price: '$4,999/month',
      marketPrice: '$7999-24999/month',
      features: [
        'Hadoop ecosystem', 'Apache Spark', 'Cloud data processing', 'Real-time analytics',
        'Data lake architecture', 'Machine learning integration', 'Scalable processing', 'Cost optimization',
        'Performance tuning', 'Security implementation', 'Monitoring & alerting', 'Expert support'
      ],
      benefits: [
        'Scalable processing', 'Cost optimization', 'Better performance', 'Real-time insights',
        'Flexible architecture', 'Expert guidance', 'Future-proof solutions'
      ],
      category: 'data',
      popular: false,
      icon: Database,
      link: 'https://ziontechgroup.com/big-data-solutions',
      rating: 4.8,
      reviews: 345
    },

    // Mobile Solutions
    {
      id: 'mobile-development-pro',
      name: 'Mobile Development Pro',
      description: 'Native and cross-platform mobile app development with modern technologies and best practices.',
      price: '$3,999/month',
      marketPrice: '$6999-19999/month',
      features: [
        'Native iOS & Android', 'Cross-platform development', 'React Native', 'Flutter',
        'Mobile UI/UX design', 'App store optimization', 'Performance optimization', 'Security implementation',
        'Push notifications', 'Offline capabilities', 'Testing & QA', 'Maintenance & support'
      ],
      benefits: [
        'Better user experience', 'Faster development', 'Cost optimization', 'Cross-platform compatibility',
        'Better performance', 'Enhanced security', 'Ongoing support'
      ],
      category: 'mobile',
      popular: true,
      icon: Smartphone,
      link: 'https://ziontechgroup.com/mobile-development-pro',
      rating: 4.8,
      reviews: 892
    },
    {
      id: 'mobile-app-optimization',
      name: 'Mobile App Optimization',
      description: 'Mobile app performance optimization with analytics, A/B testing, and user experience enhancement.',
      price: '$1,999/month',
      marketPrice: '$2999-9999/month',
      features: [
        'Performance optimization', 'User experience enhancement', 'A/B testing', 'Analytics integration',
        'Crash reporting', 'User feedback analysis', 'App store optimization', 'Performance monitoring',
        'Conversion optimization', 'User retention', 'Revenue optimization', 'Expert guidance'
      ],
      benefits: [
        'Better performance', 'Improved user experience', 'Higher conversion rates', 'Better retention',
        'Increased revenue', 'Data-driven decisions', 'Expert support'
      ],
      category: 'mobile',
      popular: false,
      icon: TrendingUp,
      link: 'https://ziontechgroup.com/mobile-app-optimization',
      rating: 4.7,
      reviews: 456
    },

    // IT Support
    {
      id: 'it-support-enterprise',
      name: 'Enterprise IT Support',
      description: 'Comprehensive IT support with 24/7 monitoring, helpdesk, and proactive maintenance.',
      price: '$1,999/month',
      marketPrice: '$2999-9999/month',
      features: [
        '24/7 technical support', 'Helpdesk management', 'Proactive monitoring', 'Incident management',
        'User training', 'Software management', 'Hardware support', 'Network troubleshooting',
        'Security monitoring', 'Backup management', 'Performance optimization', 'Documentation'
      ],
      benefits: [
        'Faster resolution times', 'Proactive support', 'Reduced downtime', 'Better user satisfaction',
        'Cost optimization', 'Expert support', 'Comprehensive coverage'
      ],
      category: 'support',
      popular: true,
      icon: Headphones,
      link: 'https://ziontechgroup.com/it-support-enterprise',
      rating: 4.8,
      reviews: 1124
    },
    {
      id: 'it-asset-management',
      name: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and compliance.',
      price: '$1,499/month',
      marketPrice: '$2499-7999/month',
      features: [
        'Asset tracking', 'Lifecycle management', 'License management', 'Compliance monitoring',
        'Cost optimization', 'Inventory management', 'Disposal management', 'Reporting & analytics',
        'Integration capabilities', 'Automated workflows', 'Audit trails', 'Expert guidance'
      ],
      benefits: [
        'Better asset visibility', 'Cost optimization', 'Compliance assurance', 'Reduced risks',
        'Automated management', 'Better planning', 'Expert support'
      ],
      category: 'support',
      popular: false,
      icon: Package,
      link: 'https://ziontechgroup.com/it-asset-management',
      rating: 4.7,
      reviews: 567
    },

    // Consulting
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting with technology assessment, planning, and digital transformation guidance.',
      price: '$299/hour',
      marketPrice: '$499-999/hour',
      features: [
        'Technology assessment', 'Strategic planning', 'Digital transformation', 'Architecture review',
        'Process optimization', 'Technology selection', 'Implementation guidance', 'Change management',
        'Training & education', 'Best practices', 'Industry expertise', 'Ongoing support'
      ],
      benefits: [
        'Strategic guidance', 'Technology expertise', 'Cost optimization', 'Risk mitigation',
        'Competitive advantage', 'Best practices', 'Expert knowledge'
      ],
      category: 'consulting',
      popular: true,
      icon: Users,
      link: 'https://ziontechgroup.com/it-consulting',
      rating: 4.9,
      reviews: 456
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Comprehensive digital transformation services with strategy, implementation, and change management.',
      price: '$9,999/month',
      marketPrice: '$19999-49999/month',
      features: [
        'Digital strategy', 'Process digitization', 'Technology implementation', 'Change management',
        'User training', 'Performance monitoring', 'Continuous improvement', 'ROI optimization',
        'Best practices', 'Industry expertise', 'Ongoing support', 'Success metrics'
      ],
      benefits: [
        'Digital innovation', 'Process improvement', 'Cost reduction', 'Better efficiency',
        'Competitive advantage', 'Future-ready technology', 'Expert guidance'
      ],
      category: 'consulting',
      popular: false,
      icon: Rocket,
      link: 'https://ziontechgroup.com/digital-transformation',
      rating: 4.8,
      reviews: 234
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const features = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for all your IT needs.',
      icon: Headphones,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced threat protection and compliance management.',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Scalable Solutions',
      description: 'Built to handle growth from startup to enterprise scale with flexible architecture.',
      icon: Server,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cost Optimization',
      description: 'Intelligent cost management with automated optimization and spending analytics.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.',
      icon: Users,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal downtime and seamless integration.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const stats = [
    { label: 'IT Projects Completed', value: '1000+', icon: CheckCircle },
    { label: 'Enterprise Clients', value: '500+', icon: Building },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group - Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive IT services including cloud solutions, cybersecurity, DevOps, development, infrastructure, and consulting. Enterprise-grade solutions with 24/7 support." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, DevOps, software development, infrastructure, data analytics, mobile development, IT consulting, digital transformation" />
        <meta property="og:title" content="IT Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services for enterprise with cloud solutions, cybersecurity, DevOps, and development. 24/7 support and 99.9% uptime guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6">
                <Server className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">30+ IT Services Available</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive IT services. From cloud solutions to cybersecurity, 
                we provide enterprise-grade technology solutions that scale with your growth and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedCategory === 'all' ? 'All IT Services' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-400 text-lg">
                {filteredServices.length} services found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm font-medium">Save up to 50%</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="w-full border border-cyan-500/30 text-cyan-400 py-2 px-4 rounded-xl font-medium hover:bg-cyan-500/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT services are designed with enterprise-grade features, 
                24/7 support, and seamless integration capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our comprehensive IT services and experience the power of enterprise-grade technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <p>✓ Free consultation • ✓ Custom solutions • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ItServicesPage;