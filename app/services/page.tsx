'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes with cutting-edge machine learning and deep learning technologies.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting', 'Deep Learning', 'Neural Networks', 'AI Strategy'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true,
      marketPrice: '$2,500/month',
      savings: '40% off',
      trial: '30-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Marketing Automation Pro',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns, intelligent optimization, and advanced customer journey mapping.',
      features: ['Campaign Automation', 'AI Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel', 'Customer Journey Mapping', 'Lead Scoring', 'Attribution Modeling'],
      price: 'Starting at $299/month',
      category: 'AI Services',
      marketPrice: '$599/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Brain,
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer support with advanced chatbots, sentiment analysis, automated ticket routing, and predictive customer service.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support', 'Predictive Support', 'Voice AI', 'Multi-language'],
      price: 'Starting at $199/month',
      category: 'AI Services',
      popular: true,
      marketPrice: '$399/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '3-day setup'
    },
    {
      icon: Brain,
      title: 'AI Data Analytics Platform',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated business intelligence.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models', 'Automated Reporting', 'Data Mining', 'Trend Analysis'],
      price: 'Starting at $399/month',
      category: 'AI Services',
      marketPrice: '$799/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Brain,
      title: 'AI Content Generation Studio',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, video production, and brand voice consistency.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language', 'Brand Voice', 'Content Planning', 'Performance Analytics'],
      price: 'Starting at $149/month',
      category: 'AI Services',
      marketPrice: '$299/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    },
    {
      icon: Brain,
      title: 'AI Healthcare Solutions Pro',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance', 'Clinical Decision Support', 'Telemedicine AI', 'Medical Records Analysis'],
      price: 'Starting at $1,999/month',
      category: 'AI Services',
      marketPrice: '$3,999/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '4-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Financial Services Suite',
      description: 'Advanced AI solutions for fraud detection, risk assessment, algorithmic trading, and regulatory compliance automation.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance', 'Regulatory Reporting', 'Market Analysis', 'Portfolio Optimization'],
      price: 'Starting at $1,499/month',
      category: 'AI Services',
      marketPrice: '$2,999/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Brain,
      title: 'AI E-commerce Solutions Pro',
      description: 'Intelligent e-commerce platform with recommendation engines, dynamic pricing, inventory optimization, and customer behavior analysis.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting', 'Personalization', 'Search Optimization', 'Conversion Analytics'],
      price: 'Starting at $799/month',
      category: 'AI Services',
      marketPrice: '$1,599/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '2-week setup'
    },
    {
      icon: Brain,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity solutions with threat detection, behavioral analysis, and automated incident response.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Assessment', 'Security Monitoring', 'Risk Prediction', 'Compliance Automation', 'Threat Intelligence'],
      price: 'Starting at $999/month',
      category: 'AI Services',
      marketPrice: '$1,999/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '2-week setup'
    },
    {
      icon: Brain,
      title: 'AI Process Automation',
      description: 'Intelligent process automation with AI decision-making, exception handling, and continuous optimization capabilities.',
      features: ['Process Mining', 'AI Decision Making', 'Exception Handling', 'Continuous Optimization', 'Workflow Automation', 'Document Processing', 'Data Extraction', 'Quality Assurance'],
      price: 'Starting at $599/month',
      category: 'AI Services',
      marketPrice: '$1,199/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Brain,
      title: 'AI HR & Recruitment',
      description: 'Intelligent HR solutions with resume screening, candidate matching, performance analytics, and employee engagement optimization.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Skills Assessment', 'Onboarding Automation', 'Retention Analysis', 'Diversity Analytics'],
      price: 'Starting at $399/month',
      category: 'AI Services',
      marketPrice: '$799/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    
    // Cloud Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud infrastructure and migration services for enhanced performance, reliability, and scalability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud', 'Cost Optimization', 'Performance Monitoring', 'Security Hardening'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true,
      marketPrice: '$2,599/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime, data integrity, and performance optimization.',
      features: ['Zero Downtime', 'Data Integrity', 'Cost Optimization', 'Security Compliance', '24/7 Support', 'Performance Testing', 'Backup Strategy', 'Go-live Support'],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services',
      marketPrice: '$5,999/project',
      savings: '50% off',
      trial: 'Free assessment',
      setup: '4-week implementation'
    },
    {
      icon: Cloud,
      title: 'Cloud Security Suite',
      description: 'Comprehensive cloud security solutions with advanced threat detection, compliance management, and automated response.',
      features: ['Threat Detection', 'Compliance Management', 'Access Control', 'Data Encryption', 'Monitoring', 'Incident Response', 'Security Audits', 'Penetration Testing'],
      price: 'Starting at $599/month',
      category: 'Cloud Services',
      marketPrice: '$1,199/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Cloud,
      title: 'DevOps & CI/CD Platform',
      description: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration', 'Container Orchestration', 'Security Scanning', 'Performance Optimization'],
      price: 'Starting at $799/month',
      category: 'Cloud Services',
      marketPrice: '$1,599/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Unified management across AWS, Azure, and Google Cloud with cost optimization and security compliance.',
      features: ['Multi-cloud Dashboard', 'Cost Optimization', 'Security Compliance', 'Resource Management', 'Monitoring', 'Backup Management', 'Disaster Recovery', 'Compliance Reporting'],
      price: 'Starting at $999/month',
      category: 'Cloud Services',
      marketPrice: '$1,999/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '2-week setup'
    },
    {
      icon: Cloud,
      title: 'Cloud Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and compliance reporting.',
      features: ['Automated Backups', 'Disaster Recovery', 'Compliance Reporting', 'Testing', 'Monitoring', 'Data Retention', 'Recovery Testing', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Cloud Services',
      marketPrice: '$799/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    
    // Cybersecurity
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from evolving threats with advanced threat intelligence and automated response.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance', 'Threat Intelligence', 'Security Training', 'Risk Assessment', 'Security Architecture'],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true,
      marketPrice: '$1,599/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Shield,
      title: 'Security Monitoring & SOC',
      description: '24/7 security monitoring with AI-powered threat detection, automated response, and dedicated security operations center.',
      features: ['24/7 Monitoring', 'AI Threat Detection', 'Automated Response', 'Incident Management', 'Compliance Reporting', 'SOC Services', 'Threat Hunting', 'Forensic Analysis'],
      price: 'Starting at $499/month',
      category: 'Cybersecurity',
      marketPrice: '$999/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Shield,
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing to identify vulnerabilities, assess risks, and strengthen your security posture.',
      features: ['Vulnerability Assessment', 'Social Engineering Tests', 'Network Security', 'Web Application Testing', 'Reporting', 'Remediation Guidance', 'Re-testing', 'Compliance Validation'],
      price: 'Starting at $2,999/assessment',
      category: 'Cybersecurity',
      marketPrice: '$5,999/assessment',
      savings: '50% off',
      trial: 'Free security scan',
      setup: '2-week assessment'
    },
    {
      icon: Shield,
      title: 'Compliance Management Suite',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulations with continuous monitoring and reporting.',
      features: ['Regulatory Compliance', 'Automated Monitoring', 'Audit Trails', 'Risk Assessment', 'Documentation', 'Policy Management', 'Training Modules', 'Compliance Reporting'],
      price: 'Starting at $399/month',
      category: 'Cybersecurity',
      marketPrice: '$799/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Shield,
      title: 'Identity & Access Management',
      description: 'Advanced identity and access management with multi-factor authentication, single sign-on, and privileged access management.',
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access Management', 'Identity Governance', 'Access Reviews', 'Password Management', 'Session Management', 'Compliance Reporting'],
      price: 'Starting at $299/month',
      category: 'Cybersecurity',
      marketPrice: '$599/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Shield,
      title: 'Security Awareness Training',
      description: 'Comprehensive security awareness training program with phishing simulations, compliance training, and security culture development.',
      features: ['Phishing Simulations', 'Compliance Training', 'Security Culture', 'Risk Awareness', 'Incident Reporting', 'Training Analytics', 'Custom Content', 'Certification Programs'],
      price: 'Starting at $199/month',
      category: 'Cybersecurity',
      marketPrice: '$399/month',
      savings: '50% off',
      trial: 'Free training module',
      setup: 'Instant setup'
    },
    
    // Data Analytics
    {
      icon: BarChart3,
      title: 'Data Analytics Platform',
      description: 'Transform your data into actionable insights with advanced analytics, visualization, and AI-powered business intelligence.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting', 'Predictive Modeling', 'Data Mining', 'Trend Analysis', 'Custom Dashboards'],
      price: 'Starting at $599/month',
      category: 'Data Analytics',
      popular: true,
      marketPrice: '$1,199/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: BarChart3,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with scalable big data processing, analytics platforms, and real-time streaming analytics.',
      features: ['Data Processing', 'Real-time Analytics', 'Scalable Infrastructure', 'Machine Learning', 'Data Lakes', 'Stream Processing', 'Data Warehousing', 'ETL/ELT'],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics',
      marketPrice: '$2,599/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence Suite',
      description: 'Comprehensive BI solutions with interactive dashboards, automated reporting, and self-service analytics capabilities.',
      features: ['Interactive Dashboards', 'Automated Reports', 'Data Integration', 'Self-service Analytics', 'Mobile Access', 'Ad-hoc Analysis', 'Data Governance', 'Performance Management'],
      price: 'Starting at $899/month',
      category: 'Data Analytics',
      marketPrice: '$1,799/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: BarChart3,
      title: 'Data Science & ML Platform',
      description: 'Advanced data science platform with machine learning capabilities, model deployment, and automated insights generation.',
      features: ['Machine Learning', 'Model Deployment', 'Automated Insights', 'Data Preprocessing', 'Feature Engineering', 'Model Monitoring', 'A/B Testing', 'MLOps'],
      price: 'Starting at $1,499/month',
      category: 'Data Analytics',
      marketPrice: '$2,999/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics Engine',
      description: 'High-performance real-time analytics engine for streaming data processing and instant insights delivery.',
      features: ['Stream Processing', 'Real-time Dashboards', 'Event Processing', 'Alert Management', 'Performance Monitoring', 'Scalable Processing', 'Data Pipeline', 'API Integration'],
      price: 'Starting at $799/month',
      category: 'Data Analytics',
      marketPrice: '$1,599/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: BarChart3,
      title: 'Data Governance & Quality',
      description: 'Comprehensive data governance and quality management with automated monitoring, lineage tracking, and compliance reporting.',
      features: ['Data Governance', 'Quality Monitoring', 'Lineage Tracking', 'Compliance Reporting', 'Data Catalog', 'Privacy Management', 'Master Data Management', 'Data Stewardship'],
      price: 'Starting at $499/month',
      category: 'Data Analytics',
      marketPrice: '$999/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    
    // Mobile Development
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies, AI integration, and cross-platform solutions.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications', 'AI Integration', 'Offline Capabilities', 'Performance Optimization'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: true,
      marketPrice: '$3,999/month',
      savings: '50% off',
      trial: 'Free consultation',
      setup: '4-week development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Maintenance & Support',
      description: 'Comprehensive maintenance and support for mobile applications with performance optimization, security updates, and feature enhancements.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Feature Enhancements', 'App Store Management', 'Analytics Integration', 'User Feedback', 'Version Management'],
      price: 'Starting at $299/month',
      category: 'Mobile Development',
      marketPrice: '$599/month',
      savings: '50% off',
      trial: 'Free assessment',
      setup: '1-week setup'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps (PWA)',
      description: 'Modern Progressive Web Applications that work across all devices with native app-like experience and offline capabilities.',
      features: ['Cross-platform', 'Offline Support', 'Push Notifications', 'App-like Experience', 'Responsive Design', 'Performance', 'SEO Optimization', 'Easy Deployment'],
      price: 'Starting at $1,299/month',
      category: 'Mobile Development',
      marketPrice: '$2,599/month',
      savings: '50% off',
      trial: 'Free demo',
      setup: '2-week development'
    },
    
    // Database Services
    {
      icon: Database,
      title: 'Database Solutions & Management',
      description: 'Comprehensive database design, optimization, and management for optimal performance, reliability, and scalability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring', 'Security Hardening', 'Scalability Planning', 'Disaster Recovery'],
      price: 'Starting at $399/month',
      category: 'Database Services',
      popular: true,
      marketPrice: '$799/month',
      savings: '50% off',
      trial: 'Free assessment',
      setup: '1-week setup'
    },
    {
      icon: Database,
      title: 'Database Migration Services',
      description: 'Seamless database migration with zero downtime, data integrity preservation, and performance optimization.',
      features: ['Zero Downtime', 'Data Integrity', 'Performance Optimization', 'Testing', 'Documentation', 'Rollback Planning', 'Performance Monitoring', 'Go-live Support'],
      price: 'Starting at $1,999/migration',
      category: 'Database Services',
      marketPrice: '$3,999/migration',
      savings: '50% off',
      trial: 'Free migration assessment',
      setup: '2-week migration'
    },
    {
      icon: Database,
      title: 'Database Performance Optimization',
      description: 'Advanced database performance optimization with query tuning, indexing strategies, and capacity planning.',
      features: ['Query Optimization', 'Index Tuning', 'Capacity Planning', 'Performance Monitoring', 'Bottleneck Analysis', 'Resource Optimization', 'Scalability Planning', 'Performance Testing'],
      price: 'Starting at $599/month',
      category: 'Database Services',
      marketPrice: '$1,199/month',
      savings: '50% off',
      trial: 'Free performance audit',
      setup: '1-week optimization'
    },
    
    // Automation
    {
      icon: Zap,
      title: 'Process Automation & RPA',
      description: 'Intelligent process automation with RPA, workflow optimization, and AI-powered decision making capabilities.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization', 'AI Decision Making', 'Exception Handling', 'Process Mining'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true,
      marketPrice: '$1,199/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Zap,
      title: 'IT Operations Automation',
      description: 'Comprehensive IT operations automation with intelligent monitoring, deployment, maintenance, and self-healing capabilities.',
      features: ['Infrastructure Automation', 'Deployment Automation', 'Monitoring', 'Self-healing', 'Cost Optimization', 'Incident Response', 'Capacity Management', 'Performance Tuning'],
      price: 'Starting at $799/month',
      category: 'Automation',
      marketPrice: '$1,599/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'End-to-end business process automation with document processing, approval workflows, and intelligent routing.',
      features: ['Document Processing', 'Approval Workflows', 'Intelligent Routing', 'Form Automation', 'Data Extraction', 'Compliance Automation', 'Audit Trails', 'Performance Analytics'],
      price: 'Starting at $499/month',
      category: 'Automation',
      marketPrice: '$999/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '1-week setup'
    },
    
    // Web Development
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies, AI integration, and performance optimization.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO', 'AI Integration', 'Progressive Web Apps', 'Microservices'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true,
      marketPrice: '$2,599/month',
      savings: '50% off',
      trial: 'Free consultation',
      setup: '3-week development'
    },
    {
      icon: Globe,
      title: 'E-commerce Development',
      description: 'Custom e-commerce solutions with advanced features, AI-powered recommendations, and seamless integrations.',
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Optimization', 'AI Recommendations', 'Multi-vendor Support', 'Subscription Management'],
      price: 'Starting at $1,999/month',
      category: 'Web Development',
      marketPrice: '$3,999/month',
      savings: '50% off',
      trial: 'Free demo',
      setup: '4-week development'
    },
    {
      icon: Globe,
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL API development with comprehensive integration services and documentation.',
      features: ['RESTful APIs', 'GraphQL APIs', 'API Documentation', 'Integration Services', 'Authentication', 'Rate Limiting', 'Monitoring', 'Versioning'],
      price: 'Starting at $799/month',
      category: 'Web Development',
      marketPrice: '$1,599/month',
      savings: '50% off',
      trial: 'Free API testing',
      setup: '1-week development'
    },
    
    // IT Services
    {
      icon: Database,
      title: 'IT Infrastructure Solutions',
      description: 'Complete IT infrastructure setup and management for enterprise environments with cloud and on-premises solutions.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance', 'Cloud Migration', 'Disaster Recovery', 'Capacity Planning'],
      price: 'Starting at $1,499/month',
      category: 'IT Services',
      marketPrice: '$2,999/month',
      savings: '50% off',
      trial: 'Free infrastructure assessment',
      setup: '2-week implementation'
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support, proactive monitoring, and strategic technology planning.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions', 'Patch Management', 'Asset Management', 'Strategic Planning'],
      price: 'Starting at $999/month',
      category: 'IT Services',
      popular: true,
      marketPrice: '$1,999/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '1-week setup'
    },
    {
      icon: BarChart3,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to optimize technology infrastructure, processes, and digital transformation initiatives.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training', 'Vendor Management', 'Technology Roadmap', 'Change Management'],
      price: 'Starting at $299/hour',
      category: 'IT Services',
      marketPrice: '$599/hour',
      savings: '50% off',
      trial: 'Free consultation',
      setup: 'Immediate start'
    },
    {
      icon: Settings,
      title: 'IT Support & Help Desk',
      description: 'Professional IT support and help desk services with multi-channel support and knowledge management.',
      features: ['Multi-channel Support', 'Knowledge Management', 'Ticket Management', 'Remote Support', 'User Training', 'Documentation', 'SLA Management', 'Performance Metrics'],
      price: 'Starting at $199/month',
      category: 'IT Services',
      marketPrice: '$399/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    }
  ];

  const categories = [
    'All',
    'AI Services',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'Mobile Development',
    'Database Services',
    'Automation',
    'Web Development',
    'IT Services'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      {service.savings && (
                        <span className="text-green-400 font-medium">{service.savings}</span>
                      )}
                      {service.trial && (
                        <span className="text-gray-300">{service.trial}</span>
                      )}
                    </div>
                    {service.setup && (
                      <div className="text-xs text-gray-400">{service.setup}</div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
