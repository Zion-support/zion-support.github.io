'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Briefcase, Globe, Code, BarChart, Wrench, Lock, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud Computing Services
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration with zero downtime, data integrity, and 99.9% uptime guarantee',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Zero Downtime Migration', 'Data Integrity', 'Performance Optimization', '24/7 Support'],
      benefits: ['99.9% uptime', 'Zero downtime migration', '50% cost reduction', 'Enhanced security'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      link: '/cloud-migration',
      rating: 4.8,
      users: '2,500+',
      freeTrial: '14 days'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with automated scaling, monitoring, and optimization',
      icon: Cloud,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['Infrastructure as Code', 'Auto-scaling', 'Cost Management', 'Performance Monitoring', 'Security Hardening', 'Backup & Recovery', 'Disaster Recovery', 'Compliance Management'],
      benefits: ['Auto-scaling', 'Cost optimization', 'Perfect uptime', 'Security compliance'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      link: '/cloud-infrastructure-management',
      rating: 4.9,
      users: '1,800+',
      freeTrial: '14 days'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Strategic multi-cloud implementation for maximum flexibility, redundancy, and vendor independence',
      icon: Cloud,
      price: '$2,200/month',
      originalPrice: '$3,200/month',
      features: ['Multi-cloud Architecture', 'Vendor Management', 'Cost Optimization', 'Disaster Recovery', 'Data Synchronization', 'Security Compliance', 'Performance Monitoring', 'Migration Planning'],
      benefits: ['Vendor independence', 'Maximum redundancy', 'Cost optimization', 'Flexible architecture'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      link: '/multi-cloud-strategy',
      rating: 4.7,
      users: '1,200+',
      freeTrial: '14 days'
    },
    // Cybersecurity Services
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with AI-powered threat detection, prevention, and 24/7 monitoring',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$2,299/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Security Auditing', 'Compliance Management', 'Security Training'],
      benefits: ['99.9% threat detection', '24/7 monitoring', 'Zero security breaches', 'Compliance ready'],
      color: 'text-red-400',
      category: 'Security',
      link: '/cybersecurity',
      rating: 4.9,
      users: '3,200+',
      freeTrial: '14 days'
    },
    {
      title: 'Network Security Solutions',
      description: 'Comprehensive network security with firewall management, intrusion detection, and traffic analysis',
      icon: Shield,
      price: '$1,500/month',
      originalPrice: '$2,200/month',
      features: ['Firewall Management', 'Intrusion Detection', 'Traffic Analysis', 'VPN Solutions', 'Network Monitoring', 'Threat Intelligence', 'Security Policies', 'Incident Response'],
      benefits: ['Perfect network security', 'Real-time monitoring', 'Threat prevention', 'Secure connectivity'],
      color: 'text-red-400',
      category: 'Security',
      link: '/network-security-solutions',
      rating: 4.8,
      users: '2,800+',
      freeTrial: '14 days'
    },
    {
      title: 'Advanced Cybersecurity Solutions',
      description: 'Next-generation cybersecurity with AI, machine learning, and behavioral analysis for enterprise protection',
      icon: Shield,
      price: '$3,200/month',
      originalPrice: '$4,500/month',
      features: ['AI Threat Detection', 'Behavioral Analysis', 'Zero Trust Architecture', 'Advanced Persistent Threat Protection', 'Security Orchestration', 'Threat Hunting', 'Compliance Automation', 'Security Analytics'],
      benefits: ['AI-powered protection', 'Zero trust security', 'Advanced threat hunting', 'Automated compliance'],
      color: 'text-red-400',
      category: 'Security',
      link: '/advanced-cybersecurity-solutions',
      rating: 4.9,
      users: '800+',
      freeTrial: '14 days'
    },
    {
      title: 'Data Center Solutions',
      description: 'Enterprise-grade data center solutions with high availability, scalability, and disaster recovery',
      icon: Database,
      price: '$2,200/month',
      originalPrice: '$3,200/month',
      features: ['High Availability', 'Scalable Infrastructure', 'Disaster Recovery', 'Power Management', 'Cooling Systems', 'Physical Security', 'Monitoring Systems', 'Backup Solutions'],
      benefits: ['99.99% uptime', 'Unlimited scalability', 'Perfect disaster recovery', 'Enterprise security'],
      color: 'text-purple-400',
      category: 'Infrastructure',
      link: '/data-center-solutions',
      rating: 4.8,
      users: '1,500+',
      freeTrial: '14 days'
    },
    // Development Services
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring for faster delivery',
      icon: Settings,
      price: '$1,199/month',
      originalPrice: '$1,799/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps', 'Security Scanning', 'Performance Optimization'],
      benefits: ['10x faster deployment', 'Zero downtime releases', 'Automated testing', 'Perfect monitoring'],
      color: 'text-green-400',
      category: 'Development',
      link: '/devops',
      rating: 4.8,
      users: '4,500+',
      freeTrial: '14 days'
    },
    {
      title: 'IT Integration Services',
      description: 'Seamless integration of disparate systems, applications, and data sources for unified operations',
      icon: Settings,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['System Integration', 'API Development', 'Data Integration', 'Legacy System Modernization', 'Middleware Solutions', 'Real-time Synchronization', 'Error Handling', 'Performance Optimization'],
      benefits: ['Unified systems', 'Real-time integration', 'Legacy modernization', 'Perfect synchronization'],
      color: 'text-green-400',
      category: 'Development',
      link: '/it-integration-services',
      rating: 4.7,
      users: '2,200+',
      freeTrial: '14 days'
    },
    {
      title: 'Developer Tools',
      description: 'Comprehensive developer toolchain with IDEs, version control, testing frameworks, and collaboration tools',
      icon: Code,
      price: '$1,200/month',
      originalPrice: '$1,800/month',
      features: ['IDE Setup', 'Version Control', 'Testing Frameworks', 'Code Review Tools', 'Documentation Tools', 'Collaboration Platforms', 'Debugging Tools', 'Performance Profiling'],
      benefits: ['Enhanced productivity', 'Better code quality', 'Team collaboration', 'Faster development'],
      color: 'text-green-400',
      category: 'Development',
      link: '/developer-tools',
      rating: 4.6,
      users: '6,500+',
      freeTrial: '14 days'
    },
    // Data Management Services
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and 99.9% availability',
      icon: Database,
      price: '$899/month',
      originalPrice: '$1,399/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI Optimization', 'Scalability Planning', 'Migration Services', '24/7 Monitoring'],
      benefits: ['99.9% availability', 'AI optimization', 'Perfect performance', 'Secure data'],
      color: 'text-purple-400',
      category: 'Data Management',
      link: '/database',
      rating: 4.8,
      users: '3,800+',
      freeTrial: '14 days'
    },
    {
      title: 'Big Data Solutions',
      description: 'Enterprise big data solutions with Hadoop, Spark, and AI analytics for massive data processing',
      icon: Database,
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      features: ['Hadoop Clusters', 'Spark Processing', 'Data Lakes', 'Real-time Analytics', 'Machine Learning Integration', 'Data Pipeline Management', 'Scalable Storage', 'Performance Optimization'],
      benefits: ['Massive data processing', 'Real-time analytics', 'Scalable architecture', 'AI integration'],
      color: 'text-purple-400',
      category: 'Data Management',
      link: '/big-data-solutions',
      rating: 4.9,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      title: 'Data Analytics Platform',
      description: 'Comprehensive data analytics platform with visualization, reporting, and business intelligence',
      icon: BarChart,
      price: '$1,500/month',
      originalPrice: '$2,200/month',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Mining', 'Statistical Analysis', 'Machine Learning'],
      benefits: ['Data-driven insights', 'Real-time analytics', 'Predictive capabilities', 'Business intelligence'],
      color: 'text-purple-400',
      category: 'Data Management',
      link: '/data-analytics-platform',
      rating: 4.7,
      users: '2,800+',
      freeTrial: '14 days'
    },
    // Enterprise Services
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise IT solutions with ERP, CRM, and business process automation',
      icon: Briefcase,
      price: '$3,000/month',
      originalPrice: '$4,500/month',
      features: ['ERP Implementation', 'CRM Solutions', 'Business Process Automation', 'Workflow Management', 'Document Management', 'Project Management', 'Financial Systems', 'HR Management'],
      benefits: ['Unified enterprise platform', 'Process automation', 'Better efficiency', 'Cost reduction'],
      color: 'text-cyan-400',
      category: 'Enterprise',
      link: '/enterprise',
      rating: 4.8,
      users: '1,500+',
      freeTrial: '14 days'
    },
    {
      title: 'IT Asset Management Pro',
      description: 'Comprehensive IT asset management with tracking, optimization, and lifecycle management',
      icon: BarChart,
      price: '$800/month',
      originalPrice: '$1,200/month',
      features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'License Management', 'Inventory Management', 'Depreciation Tracking', 'Procurement Planning', 'Compliance Reporting'],
      benefits: ['Perfect asset tracking', 'Cost optimization', 'License compliance', 'Lifecycle management'],
      color: 'text-cyan-400',
      category: 'Enterprise',
      link: '/it-asset-management-pro',
      rating: 4.6,
      users: '4,200+',
      freeTrial: '14 days'
    },
    {
      title: 'IT Help Desk Solutions',
      description: 'Advanced IT help desk with AI-powered ticketing, knowledge management, and automated resolution',
      icon: Users,
      price: '$1,000/month',
      originalPrice: '$1,500/month',
      features: ['AI Ticketing', 'Knowledge Management', 'Automated Resolution', 'Remote Support', 'SLA Management', 'Performance Analytics', 'Multi-channel Support', 'Integration APIs'],
      benefits: ['Faster resolution', 'AI automation', 'Better user experience', 'Cost efficiency'],
      color: 'text-cyan-400',
      category: 'Enterprise',
      link: '/it-help-desk-solutions',
      rating: 4.7,
      users: '5,500+',
      freeTrial: '14 days'
    },
    // Compliance & Governance
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance and governance solutions for regulatory requirements and best practices',
      icon: FileText,
      price: '$1,400/month',
      originalPrice: '$2,100/month',
      features: ['Regulatory Compliance', 'Audit Management', 'Policy Development', 'Risk Assessment', 'Control Testing', 'Documentation Management', 'Training Programs', 'Reporting Systems'],
      benefits: ['Full compliance', 'Risk mitigation', 'Audit ready', 'Best practices'],
      color: 'text-orange-400',
      category: 'Compliance',
      link: '/it-compliance-governance',
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days'
    },
    {
      title: 'IT Performance Optimization',
      description: 'AI-powered IT performance optimization for systems, networks, and applications with real-time monitoring',
      icon: Zap,
      price: '$1,200/month',
      originalPrice: '$1,800/month',
      features: ['Performance Monitoring', 'AI Optimization', 'Bottleneck Identification', 'Capacity Planning', 'Load Testing', 'Performance Tuning', 'Real-time Alerts', 'Optimization Reports'],
      benefits: ['Optimal performance', 'AI optimization', 'Real-time monitoring', 'Cost efficiency'],
      color: 'text-orange-400',
      category: 'Performance',
      link: '/it-performance-optimization',
      rating: 4.7,
      users: '3,500+',
      freeTrial: '14 days'
    },
    {
      title: 'IT Disaster Recovery',
      description: 'Comprehensive disaster recovery solutions with automated backup, failover, and business continuity',
      icon: Database,
      price: '$1,600/month',
      originalPrice: '$2,400/month',
      features: ['Automated Backup', 'Failover Systems', 'Business Continuity', 'Recovery Testing', 'Data Replication', 'RTO/RPO Optimization', 'Disaster Planning', 'Recovery Automation'],
      benefits: ['Zero data loss', 'Fast recovery', 'Business continuity', 'Automated failover'],
      color: 'text-orange-400',
      category: 'Disaster Recovery',
      link: '/it-disaster-recovery',
      rating: 4.9,
      users: '1,800+',
      freeTrial: '14 days'
    },
    // Training & Support
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification courses for technical skills development',
      icon: GraduationCap,
      price: '$600/month',
      originalPrice: '$900/month',
      features: ['Technical Training', 'Certification Programs', 'Hands-on Labs', 'Expert Instructors', 'Custom Curriculum', 'Online Learning', 'Certification Exams', 'Career Guidance'],
      benefits: ['Skill development', 'Industry certifications', 'Career advancement', 'Expert training'],
      color: 'text-blue-400',
      category: 'Training',
      link: '/it-training-certification',
      rating: 4.6,
      users: '8,500+',
      freeTrial: '30 days'
    },
    {
      title: 'IT Consulting Services',
      description: 'Strategic IT consulting for digital transformation, technology strategy, and innovation planning',
      icon: Briefcase,
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      features: ['Digital Transformation', 'Technology Strategy', 'Innovation Planning', 'Architecture Design', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Change Management'],
      benefits: ['Strategic guidance', 'Digital transformation', 'Innovation planning', 'ROI optimization'],
      color: 'text-cyan-400',
      category: 'Consulting',
      link: '/it-consulting-services',
      rating: 4.8,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      title: 'IT Monitoring & Alerting',
      description: 'Comprehensive IT monitoring and alerting system with real-time insights and proactive issue resolution',
      icon: Activity,
      price: '$900/month',
      originalPrice: '$1,400/month',
      features: ['Real-time Monitoring', 'Proactive Alerts', 'Performance Metrics', 'Uptime Tracking', 'Log Analysis', 'Capacity Monitoring', 'Security Monitoring', 'Custom Dashboards'],
      benefits: ['Proactive monitoring', 'Real-time alerts', 'Perfect uptime', 'Issue prevention'],
      color: 'text-green-400',
      category: 'Monitoring',
      link: '/it-monitoring-alerting',
      rating: 4.7,
      users: '4,800+',
      freeTrial: '14 days'
    },
    // Specialized Services
    {
      title: 'Quantum Computing Infrastructure',
      description: 'Quantum computing infrastructure setup and management for advanced computational capabilities',
      icon: Cpu,
      price: '$5,000/month',
      originalPrice: '$7,500/month',
      features: ['Quantum Hardware Setup', 'Quantum Software Development', 'Quantum Algorithms', 'Quantum Security', 'Performance Optimization', 'Integration Services', 'Training & Support', 'Research Collaboration'],
      benefits: ['Quantum advantage', 'Breakthrough computing', 'Future-ready technology', 'Research capabilities'],
      color: 'text-purple-400',
      category: 'Quantum',
      link: '/quantum-computing-infrastructure',
      rating: 4.9,
      users: '50+',
      freeTrial: '7 days'
    },
    {
      title: 'Autonomous Systems Development',
      description: 'Development and deployment of autonomous systems for various industries and applications',
      icon: Settings,
      price: '$4,000/month',
      originalPrice: '$6,000/month',
      features: ['Autonomous Vehicle Development', 'Robotic Systems', 'AI Integration', 'Sensor Fusion', 'Control Systems', 'Safety Systems', 'Testing & Validation', 'Deployment Support'],
      benefits: ['Autonomous operation', 'AI integration', 'Perfect safety', 'Industry transformation'],
      color: 'text-cyan-400',
      category: 'Autonomous',
      link: '/autonomous-systems-development',
      rating: 4.8,
      users: '200+',
      freeTrial: '14 days'
    },
    {
      title: 'Metaverse Development',
      description: 'Metaverse development services for virtual worlds, AR/VR experiences, and immersive digital environments',
      icon: Globe,
      price: '$4,000/month',
      originalPrice: '$6,000/month',
      features: ['Virtual World Creation', 'AR/VR Development', '3D Modeling', 'Avatar Systems', 'Virtual Economy', 'Social Features', 'Cross-platform Support', 'Performance Optimization'],
      benefits: ['Immersive experiences', 'Virtual worlds', 'AR/VR integration', 'Future technology'],
      color: 'text-pink-400',
      category: 'Metaverse',
      link: '/metaverse-development',
      rating: 4.7,
      users: '300+',
      freeTrial: '14 days'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure and solutions for real-time processing and reduced latency',
      icon: Cpu,
      price: '$2,800/month',
      originalPrice: '$4,200/month',
      features: ['Edge Infrastructure', 'Real-time Processing', 'Latency Optimization', 'Distributed Computing', 'IoT Integration', 'Data Processing', 'Security Solutions', 'Performance Monitoring'],
      benefits: ['Ultra-low latency', 'Real-time processing', 'Distributed computing', 'IoT integration'],
      color: 'text-green-400',
      category: 'Edge Computing',
      link: '/edge-computing-solutions',
      rating: 4.8,
      users: '800+',
      freeTrial: '14 days'
    },
    {
      title: 'Climate Technology Solutions',
      description: 'IT solutions for climate monitoring, sustainability tracking, and environmental data management',
      icon: Globe,
      price: '$2,800/month',
      originalPrice: '$4,200/month',
      features: ['Climate Monitoring', 'Sustainability Tracking', 'Environmental Data Management', 'Carbon Footprint Analysis', 'Green IT Solutions', 'Renewable Energy Integration', 'Compliance Reporting', 'Impact Assessment'],
      benefits: ['Climate monitoring', 'Sustainability tracking', 'Green IT', 'Environmental impact'],
      color: 'text-green-400',
      category: 'Climate Tech',
      link: '/climate-technology-solutions',
      rating: 4.7,
      users: '600+',
      freeTrial: '14 days'
    },
    {
      title: 'Space Technology Services',
      description: 'IT services for space technology, satellite communications, and aerospace applications',
      icon: Globe,
      price: '$5,000/month',
      originalPrice: '$7,500/month',
      features: ['Satellite Communications', 'Space Data Processing', 'Aerospace Software', 'Mission Control Systems', 'Telemetry Processing', 'Orbital Mechanics', 'Space Weather Monitoring', 'Ground Station Management'],
      benefits: ['Space technology', 'Satellite communications', 'Mission critical', 'Aerospace expertise'],
      color: 'text-blue-400',
      category: 'Space Tech',
      link: '/space-technology-services',
      rating: 4.9,
      users: '100+',
      freeTrial: '7 days'
    },
    {
      title: 'Biotechnology IT Solutions',
      description: 'Specialized IT solutions for biotechnology, pharmaceutical, and life sciences industries',
      icon: Stethoscope,
      price: '$3,500/month',
      originalPrice: '$5,200/month',
      features: ['Laboratory Information Systems', 'Clinical Data Management', 'Drug Discovery Platforms', 'Genomic Data Processing', 'Regulatory Compliance', 'Quality Management', 'Research Collaboration', 'Data Security'],
      benefits: ['Life sciences expertise', 'Regulatory compliance', 'Research acceleration', 'Data security'],
      color: 'text-red-400',
      category: 'Biotech',
      link: '/biotechnology-it-solutions',
      rating: 4.8,
      users: '400+',
      freeTrial: '14 days'
    },
    {
      title: 'Advanced Robotics Systems',
      description: 'Advanced robotics systems development and integration for industrial and service applications',
      icon: Settings,
      price: '$4,500/month',
      originalPrice: '$6,500/month',
      features: ['Industrial Robotics', 'Service Robotics', 'AI Integration', 'Computer Vision', 'Motion Planning', 'Human-Robot Interaction', 'Safety Systems', 'Performance Optimization'],
      benefits: ['Advanced robotics', 'AI integration', 'Perfect precision', 'Industry automation'],
      color: 'text-orange-400',
      category: 'Robotics',
      link: '/advanced-robotics-systems',
      rating: 4.9,
      users: '250+',
      freeTrial: '14 days'
    },
    {
      title: 'Digital Twin Development',
      description: 'Digital twin development for virtual modeling, simulation, and optimization of physical systems',
      icon: Cpu,
      price: '$3,200/month',
      originalPrice: '$4,800/month',
      features: ['Virtual Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Performance Optimization', 'IoT Integration', 'Data Synchronization', 'Visualization Tools', 'API Integration'],
      benefits: ['Virtual modeling', 'Real-time simulation', 'Predictive capabilities', 'Performance optimization'],
      color: 'text-cyan-400',
      category: 'Digital Twin',
      link: '/digital-twin-development',
      rating: 4.8,
      users: '500+',
      freeTrial: '14 days'
    },
    {
      title: 'Smart City Solutions',
      description: 'Comprehensive smart city solutions for urban infrastructure, IoT, and citizen services',
      icon: Building,
      price: '$4,200/month',
      originalPrice: '$6,300/month',
      features: ['Urban IoT Networks', 'Traffic Management', 'Energy Management', 'Citizen Services', 'Public Safety', 'Environmental Monitoring', 'Data Analytics', 'Integration Platform'],
      benefits: ['Smart infrastructure', 'Citizen services', 'Urban optimization', 'IoT integration'],
      color: 'text-blue-400',
      category: 'Smart City',
      link: '/smart-city-solutions',
      rating: 4.7,
      users: '350+',
      freeTrial: '14 days'
    },
    {
      title: 'FinTech Solutions',
      description: 'Financial technology solutions for banking, payments, trading, and financial services',
      icon: CreditCard,
      price: '$2,500/month',
      originalPrice: '$3,700/month',
      features: ['Payment Systems', 'Banking Solutions', 'Trading Platforms', 'Risk Management', 'Compliance Systems', 'Blockchain Integration', 'API Development', 'Security Solutions'],
      benefits: ['Financial innovation', 'Secure transactions', 'Regulatory compliance', 'Modern banking'],
      color: 'text-green-400',
      category: 'FinTech',
      link: '/fintech-solutions',
      rating: 4.8,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      title: 'HealthTech Infrastructure',
      description: 'Healthcare technology infrastructure for hospitals, clinics, and medical facilities',
      icon: Stethoscope,
      price: '$3,000/month',
      originalPrice: '$4,500/month',
      features: ['Hospital Information Systems', 'Electronic Health Records', 'Medical Imaging', 'Telemedicine Platforms', 'Patient Management', 'Clinical Decision Support', 'Compliance Solutions', 'Integration Services'],
      benefits: ['Healthcare innovation', 'Patient care', 'Medical efficiency', 'Compliance ready'],
      color: 'text-red-400',
      category: 'HealthTech',
      link: '/healthtech-infrastructure',
      rating: 4.9,
      users: '800+',
      freeTrial: '14 days'
    },
    {
      title: 'EdTech Solutions',
      description: 'Educational technology solutions for schools, universities, and online learning platforms',
      icon: GraduationCap,
      price: '$1,800/month',
      originalPrice: '$2,700/month',
      features: ['Learning Management Systems', 'Online Learning Platforms', 'Student Information Systems', 'Assessment Tools', 'Virtual Classrooms', 'Content Management', 'Analytics & Reporting', 'Mobile Learning'],
      benefits: ['Educational innovation', 'Online learning', 'Student engagement', 'Learning analytics'],
      color: 'text-blue-400',
      category: 'EdTech',
      link: '/edtech-solutions',
      rating: 4.7,
      users: '2,500+',
      freeTrial: '14 days'
    },
    {
      title: 'RetailTech Solutions',
      description: 'Retail technology solutions for e-commerce, point-of-sale, and customer experience optimization',
      icon: ShoppingCart,
      price: '$2,200/month',
      originalPrice: '$3,300/month',
      features: ['E-commerce Platforms', 'Point of Sale Systems', 'Inventory Management', 'Customer Analytics', 'Personalization Engines', 'Payment Processing', 'Mobile Commerce', 'Omnichannel Solutions'],
      benefits: ['Retail innovation', 'Customer experience', 'Sales optimization', 'Omnichannel retail'],
      color: 'text-orange-400',
      category: 'RetailTech',
      link: '/retailtech-solutions',
      rating: 4.6,
      users: '1,800+',
      freeTrial: '14 days'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      color: 'text-yellow-400',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Change Management', 'Vendor Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security solutions with compliance management and threat protection.',
      icon: '🔒',
      price: '$2,200/month',
      features: [
        'Cloud Security Assessment',
        'Compliance Management',
        'Threat Protection',
        'Identity & Access Management',
        'Data Encryption',
        'Security Monitoring'
      ],
      benefits: [
        'Ensure cloud security compliance',
        'Protect sensitive data',
        'Reduce security risks by 90%',
        'Meet regulatory requirements'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'Google Cloud Security', 'SIEM', 'IAM', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      icon: '🚨',
      price: '$1,800/month',
      features: [
        'Disaster Recovery Planning',
        'Business Continuity Planning',
        'Backup Strategy Design',
        'Recovery Testing',
        'Documentation',
        'Training & Support'
      ],
      benefits: [
        'Minimize downtime during disasters',
        'Ensure business continuity',
        'Reduce recovery time by 80%',
        'Protect critical business data'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Disaster Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS DR', 'Azure Site Recovery', 'VMware SRM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Performance Monitoring',
      description: 'Advanced IT performance monitoring with real-time analytics and proactive issue resolution.',
      icon: '📊',
      price: '$1,100/month',
      features: [
        'Real-time Monitoring',
        'Performance Analytics',
        'Alert Management',
        'Capacity Planning',
        'Trend Analysis',
        'Custom Dashboards'
      ],
      benefits: [
        'Prevent system failures',
        'Optimize performance by 40%',
        'Reduce downtime by 70%',
        'Enable proactive management'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Performance Monitoring',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'New Relic', 'Datadog'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management with ticketing, change management, and service catalog.',
      icon: '🎫',
      price: '$1,300/month',
      features: [
        'Service Desk Management',
        'Incident Management',
        'Change Management',
        'Service Catalog',
        'Knowledge Management',
        'SLA Management'
      ],
      benefits: [
        'Improve service delivery',
        'Reduce resolution time by 50%',
        'Enhance user satisfaction',
        'Streamline IT operations'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Service Management',
      technologies: ['ServiceNow', 'Jira Service Management', 'Freshservice', 'ManageEngine', 'Cherwell'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Vendor Management',
      description: 'Strategic vendor management with contract optimization, performance monitoring, and cost control.',
      icon: '🤝',
      price: '$1,000/month',
      features: [
        'Vendor Assessment',
        'Contract Management',
        'Performance Monitoring',
        'Cost Optimization',
        'Risk Management',
        'Relationship Management'
      ],
      benefits: [
        'Reduce vendor costs by 25%',
        'Improve vendor performance',
        'Minimize vendor risks',
        'Optimize vendor relationships'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Vendor Management',
      technologies: ['Vendor Management Tools', 'Contract Management', 'Performance Analytics', 'Risk Assessment'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs with certification preparation and skill development.',
      icon: '🎓',
      price: '$800/month',
      features: [
        'Technical Training',
        'Certification Preparation',
        'Skill Assessment',
        'Custom Training Programs',
        'Online Learning Platform',
        'Progress Tracking'
      ],
      benefits: [
        'Improve team skills',
        'Increase certification rates',
        'Reduce training costs by 40%',
        'Enhance productivity'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Training',
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Platforms', 'Assessment Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Cost Optimization',
      description: 'Strategic IT cost optimization with license management, resource optimization, and budget planning.',
      icon: '💰',
      price: '$1,200/month',
      features: [
        'License Management',
        'Resource Optimization',
        'Budget Planning',
        'Cost Analysis',
        'ROI Tracking',
        'Cost Reduction Strategies'
      ],
      benefits: [
        'Reduce IT costs by 35%',
        'Optimize resource utilization',
        'Improve budget planning',
        'Maximize ROI'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'License Management', 'Resource Monitoring', 'Budget Planning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Governance & Risk Management',
      description: 'Comprehensive IT governance with risk management, policy development, and compliance monitoring.',
      icon: '⚖️',
      price: '$1,600/month',
      features: [
        'IT Governance Framework',
        'Risk Assessment',
        'Policy Development',
        'Compliance Monitoring',
        'Audit Management',
        'Risk Mitigation'
      ],
      benefits: [
        'Ensure IT compliance',
        'Minimize IT risks',
        'Improve governance',
        'Streamline audit processes'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Governance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Compliance Software', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Innovation & Emerging Technologies',
      description: 'Strategic guidance on emerging technologies and innovation initiatives to drive competitive advantage.',
      icon: '🚀',
      price: '$1,400/month',
      features: [
        'Technology Assessment',
        'Innovation Strategy',
        'Pilot Program Management',
        'Technology Evaluation',
        'ROI Analysis',
        'Implementation Planning'
      ],
      benefits: [
        'Stay ahead of technology trends',
        'Drive innovation initiatives',
        'Reduce technology risks',
        'Maximize technology ROI'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Innovation',
      technologies: ['Emerging Technologies', 'Innovation Management', 'Technology Assessment', 'Pilot Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Integration & API Management',
      description: 'Comprehensive system integration with API management, data synchronization, and workflow automation.',
      icon: '🔗',
      price: '$1,500/month',
      features: [
        'System Integration',
        'API Management',
        'Data Synchronization',
        'Workflow Automation',
        'Middleware Solutions',
        'Integration Testing'
      ],
      benefits: [
        'Improve system connectivity',
        'Reduce integration complexity',
        'Enable data flow automation',
        'Enhance system efficiency'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Integration',
      technologies: ['API Gateways', 'Middleware', 'ESB', 'Integration Platforms', 'Data Synchronization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Capacity Planning & Scaling',
      description: 'Strategic capacity planning with performance optimization and scalable infrastructure design.',
      icon: '📈',
      price: '$1,300/month',
      features: [
        'Capacity Planning',
        'Performance Optimization',
        'Scalability Design',
        'Resource Forecasting',
        'Load Testing',
        'Growth Planning'
      ],
      benefits: [
        'Optimize resource utilization',
        'Plan for future growth',
        'Prevent performance bottlenecks',
        'Reduce infrastructure costs'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Capacity Planning',
      technologies: ['Capacity Planning Tools', 'Performance Monitoring', 'Load Testing', 'Scalability Solutions'],
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
    { name: 'Cloud Security', count: itServices.filter(s => s.category === 'Cloud Security').length },
    { name: 'Disaster Recovery', count: itServices.filter(s => s.category === 'Disaster Recovery').length },
    { name: 'Performance Monitoring', count: itServices.filter(s => s.category === 'Performance Monitoring').length },
    { name: 'Service Management', count: itServices.filter(s => s.category === 'Service Management').length },
    { name: 'Vendor Management', count: itServices.filter(s => s.category === 'Vendor Management').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Cost Optimization', count: itServices.filter(s => s.category === 'Cost Optimization').length },
    { name: 'Governance', count: itServices.filter(s => s.category === 'Governance').length },
    { name: 'Innovation', count: itServices.filter(s => s.category === 'Innovation').length },
    { name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length },
    { name: 'Capacity Planning', count: itServices.filter(s => s.category === 'Capacity Planning').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and DevOps. 25+ enterprise-grade IT solutions starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cloud migration, cybersecurity, devops, it support, database management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive IT solutions designed to modernize your infrastructure and optimize your business operations.
          </p>
        </section>

        {/* IT Services Grid */}
        <section className="mb-16" aria-labelledby="it-services-heading">
          <h2 id="it-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Our IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            End-to-end IT solutions for modern enterprises
          </p>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
=======
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
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
              <a
                key={index}
                href={service.link}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our IT Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud-First Approach</h3>
                <p className="text-gray-300">We design solutions with cloud scalability and flexibility in mind.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-gray-300">Enterprise-grade security is built into every solution we deliver.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support for all your IT infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our IT services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;