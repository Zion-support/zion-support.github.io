'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Smartphone,
  Database,
  Globe,
  Users,
  Target,
  TrendingUp,
  Lock,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Machine Learning Tools
    {
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates, SEO optimization, and multi-language support',
      features: ['50+ content templates', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Plagiarism checker', 'Social media integration'],
      price: '$49/month',
      users: 'Up to 5 users',
      category: 'AI Tools',
      popular: true,
      link: '/ai-content-generator-pro'
    },
    {
      icon: Brain,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required',
      features: ['Drag-and-drop builder', 'Multi-language support', 'CRM integration', 'Analytics dashboard', 'Custom branding', 'API access'],
      price: '$79/month',
      users: 'Up to 10 users',
      category: 'AI Tools',
      popular: true,
      link: '/ai-chatbot-builder'
    },
    {
      icon: Brain,
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered subject lines, send time optimization, and personalization',
      features: ['AI subject line generator', 'Send time optimization', 'Personalization engine', 'A/B testing', 'Analytics & insights', 'Template library'],
      price: '$99/month',
      users: 'Up to 25 users',
      category: 'AI Tools',
      link: '/ai-email-marketing-suite'
    },
    {
      icon: Brain,
      title: 'AI Social Media Manager',
      description: 'Automated social media management with content creation, scheduling, and performance analytics',
      features: ['Content generation', 'Auto-scheduling', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform support', 'ROI analytics'],
      price: '$69/month',
      users: 'Up to 15 users',
      category: 'AI Tools',
      link: '/ai-social-media-manager'
    },
    {
      icon: Brain,
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code completion', 'Bug detection', 'Code optimization', 'Documentation generation', 'Multi-language support', 'IDE integration'],
      price: '$39/month',
      users: 'Up to 20 users',
      category: 'AI Tools',
      link: '/ai-code-assistant'
    },
    {
      icon: Brain,
      title: 'AI Voice Assistant Builder',
      description: 'Create custom voice assistants and voice-activated applications for your business',
      features: ['Voice recognition', 'Natural language processing', 'Custom commands', 'Multi-language support', 'Cloud deployment', 'Analytics'],
      price: '$149/month',
      users: 'Up to 50 users',
      category: 'AI Tools',
      link: '/ai-voice-assistant-builder'
    },

    // Business & Productivity Tools
    {
      icon: BarChart3,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with AI insights, custom dashboards, and automated reporting',
      features: ['Real-time dashboards', 'AI insights', 'Custom reports', 'Data visualization', 'Mobile app', 'API integration'],
      price: '$89/month',
      users: 'Up to 50 users',
      category: 'Business Tools',
      popular: true,
      link: '/smart-analytics-dashboard'
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Mobile app'],
      price: '$129/month',
      users: 'Up to 100 users',
      category: 'Business Tools',
      popular: true,
      link: '/ai-powered-crm'
    },
    {
      icon: Target,
      title: 'Lead Generation Pro',
      description: 'AI-powered lead generation with automated prospecting, email sequences, and follow-up automation',
      features: ['Lead scoring', 'Email sequences', 'LinkedIn automation', 'CRM integration', 'Analytics', 'Custom workflows'],
      price: '$199/month',
      users: 'Up to 25 users',
      category: 'Business Tools',
      link: '/lead-generation-pro'
    },
    {
      icon: TrendingUp,
      title: 'Sales Pipeline Manager',
      description: 'Advanced sales pipeline management with AI forecasting and automated deal progression',
      features: ['Pipeline visualization', 'AI forecasting', 'Deal automation', 'Team collaboration', 'Performance metrics', 'Integration APIs'],
      price: '$79/month',
      users: 'Up to 30 users',
      category: 'Business Tools',
      link: '/sales-pipeline-manager'
    },
    {
      icon: Clock,
      title: 'AI Meeting Scheduler',
      description: 'Intelligent meeting scheduling with calendar optimization and automated coordination',
      features: ['Calendar integration', 'Auto-scheduling', 'Time zone handling', 'Meeting analytics', 'Custom availability', 'Reminder system'],
      price: '$29/month',
      users: 'Up to 20 users',
      category: 'Business Tools',
      link: '/ai-meeting-scheduler'
    },
    {
      icon: Award,
      title: 'Employee Performance Tracker',
      description: 'AI-powered employee performance tracking with goal setting and automated feedback',
      features: ['Goal tracking', 'Performance analytics', 'Feedback automation', 'Team dashboards', 'Integration APIs', 'Mobile app'],
      price: '$59/month',
      users: 'Up to 100 users',
      category: 'Business Tools',
      link: '/employee-performance-tracker'
    },

    // Security & Compliance
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security training'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      popular: true,
      link: '/security-monitoring-suite'
    },
    {
      icon: Lock,
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with team sharing and security auditing',
      features: ['Password generation', 'Team sharing', 'Security auditing', '2FA integration', 'Breach monitoring', 'Mobile apps'],
      price: '$39/month',
      users: 'Up to 50 users',
      category: 'Security',
      link: '/password-manager-pro'
    },
    {
      icon: Shield,
      title: 'Compliance Manager',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements',
      features: ['Regulatory compliance', 'Audit trails', 'Risk assessment', 'Documentation', 'Training modules', 'Reporting'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Security',
      link: '/compliance-manager'
    },
    {
      icon: Lock,
      title: 'Data Encryption Service',
      description: 'End-to-end data encryption with key management and secure file sharing',
      features: ['End-to-end encryption', 'Key management', 'Secure sharing', 'Access controls', 'Audit logs', 'API integration'],
      price: '$79/month',
      users: 'Up to 100 users',
      category: 'Security',
      link: '/data-encryption-service'
    },

    // Cloud & Infrastructure
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Monitoring', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Cloud Services',
      popular: true,
      link: '/cloud-infrastructure-manager'
    },
    {
      icon: Cloud,
      title: 'Server Monitoring Pro',
      description: 'Advanced server monitoring with performance optimization and automated alerting',
      features: ['Real-time monitoring', 'Performance optimization', 'Automated alerts', 'Capacity planning', 'Historical data', 'Mobile app'],
      price: '$49/month',
      users: 'Up to 25 servers',
      category: 'Cloud Services',
      link: '/server-monitoring-pro'
    },
    {
      icon: Cloud,
      title: 'Backup & Recovery Manager',
      description: 'Automated backup and disaster recovery solutions with point-in-time recovery',
      features: ['Automated backups', 'Point-in-time recovery', 'Cross-region replication', 'Compliance support', 'Monitoring', 'API access'],
      price: '$99/month',
      users: 'Unlimited users',
      category: 'Cloud Services',
      link: '/backup-recovery-manager'
    },
    {
      icon: Cloud,
      title: 'CDN Performance Optimizer',
      description: 'Content delivery network optimization with global edge caching and performance analytics',
      features: ['Global CDN', 'Edge caching', 'Performance analytics', 'DDoS protection', 'SSL certificates', 'API integration'],
      price: '$149/month',
      users: 'Unlimited users',
      category: 'Cloud Services',
      link: '/cdn-performance-optimizer'
    },

    // Development & DevOps
    {
      icon: Database,
      title: 'Database Performance Monitor',
      description: 'Real-time database monitoring with query optimization and performance analytics',
      features: ['Query optimization', 'Performance analytics', 'Alert system', 'Capacity planning', 'Historical data', 'Multi-database support'],
      price: '$79/month',
      users: 'Up to 10 databases',
      category: 'Development',
      link: '/database-performance-monitor'
    },
    {
      icon: Globe,
      title: 'API Gateway Manager',
      description: 'Centralized API management with rate limiting, authentication, and analytics',
      features: ['Rate limiting', 'Authentication', 'Analytics', 'Documentation', 'Testing tools', 'Monitoring'],
      price: '$99/month',
      users: 'Unlimited users',
      category: 'Development',
      link: '/api-gateway-manager'
    },
    {
      icon: Zap,
      title: 'CI/CD Pipeline Manager',
      description: 'Automated continuous integration and deployment with testing and monitoring',
      features: ['Automated testing', 'Deployment automation', 'Rollback capabilities', 'Monitoring', 'Integration APIs', 'Team collaboration'],
      price: '$149/month',
      users: 'Up to 50 users',
      category: 'Development',
      link: '/cicd-pipeline-manager'
    },
    {
      icon: Database,
      title: 'Code Quality Analyzer',
      description: 'Automated code quality analysis with security scanning and performance optimization',
      features: ['Code analysis', 'Security scanning', 'Performance optimization', 'Technical debt tracking', 'Team reports', 'Integration APIs'],
      price: '$59/month',
      users: 'Up to 30 users',
      category: 'Development',
      link: '/code-quality-analyzer'
    },

    // Marketing & Sales
    {
      icon: Target,
      title: 'Marketing Automation Pro',
      description: 'Comprehensive marketing automation with lead nurturing and campaign management',
      features: ['Lead nurturing', 'Campaign management', 'Email marketing', 'Social media automation', 'Analytics', 'A/B testing'],
      price: '$199/month',
      users: 'Up to 50 users',
      category: 'Marketing',
      popular: true,
      link: '/marketing-automation-pro'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimizer Suite',
      description: 'AI-powered SEO optimization with keyword research and content optimization',
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Technical SEO', 'Competitor analysis', 'Reporting'],
      price: '$89/month',
      users: 'Up to 25 websites',
      category: 'Marketing',
      link: '/seo-optimizer-suite'
    },
    {
      icon: BarChart3,
      title: 'Ad Campaign Optimizer',
      description: 'AI-powered ad campaign optimization across Google, Facebook, and LinkedIn',
      features: ['Multi-platform support', 'Bid optimization', 'Audience targeting', 'A/B testing', 'ROI tracking', 'Automated rules'],
      price: '$149/month',
      users: 'Up to 20 campaigns',
      category: 'Marketing',
      link: '/ad-campaign-optimizer'
    },
    {
      icon: Users,
      title: 'Customer Journey Mapper',
      description: 'Visualize and optimize customer journeys with touchpoint analysis and automation',
      features: ['Journey mapping', 'Touchpoint analysis', 'Automation triggers', 'Analytics', 'A/B testing', 'Integration APIs'],
      price: '$79/month',
      users: 'Up to 30 users',
      category: 'Marketing',
      link: '/customer-journey-mapper'
    },

    // E-commerce & Retail
    {
      icon: Globe,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced e-commerce analytics with conversion optimization and customer insights',
      features: ['Conversion tracking', 'Customer insights', 'Funnel analysis', 'A/B testing', 'Revenue optimization', 'Mobile app'],
      price: '$129/month',
      users: 'Up to 5 stores',
      category: 'E-commerce',
      link: '/ecommerce-analytics-pro'
    },
    {
      icon: Target,
      title: 'Inventory Management AI',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Analytics', 'Mobile app'],
      price: '$199/month',
      users: 'Up to 100 SKUs',
      category: 'E-commerce',
      link: '/inventory-management-ai'
    },
    {
      icon: Users,
      title: 'Customer Service AI',
      description: 'AI-powered customer service with chatbots, ticket routing, and sentiment analysis',
      features: ['AI chatbots', 'Ticket routing', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support', 'Analytics'],
      price: '$149/month',
      users: 'Up to 50 agents',
      category: 'E-commerce',
      link: '/customer-service-ai'
    },
    {
      icon: TrendingUp,
      title: 'Pricing Optimization Engine',
      description: 'Dynamic pricing optimization with competitor analysis and demand forecasting',
      features: ['Dynamic pricing', 'Competitor analysis', 'Demand forecasting', 'A/B testing', 'Revenue optimization', 'API integration'],
      price: '$299/month',
      users: 'Up to 1000 products',
      category: 'E-commerce',
      link: '/pricing-optimization-engine'
    },

    // Healthcare & Finance
    {
      icon: Shield,
      title: 'HIPAA Compliance Manager',
      description: 'Healthcare compliance management with automated auditing and risk assessment',
      features: ['HIPAA compliance', 'Risk assessment', 'Audit trails', 'Training modules', 'Documentation', 'Reporting'],
      price: '$399/month',
      users: 'Unlimited users',
      category: 'Healthcare',
      link: '/hipaa-compliance-manager'
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics Suite',
      description: 'Advanced financial analytics with forecasting and risk management',
      features: ['Financial forecasting', 'Risk management', 'Compliance reporting', 'Real-time analytics', 'Custom dashboards', 'API integration'],
      price: '$249/month',
      users: 'Up to 100 users',
      category: 'Finance',
      link: '/financial-analytics-suite'
    },
    {
      icon: Lock,
      title: 'Fraud Detection AI',
      description: 'AI-powered fraud detection with real-time monitoring and risk scoring',
      features: ['Real-time monitoring', 'Risk scoring', 'Machine learning', 'API integration', 'Custom rules', 'Analytics'],
      price: '$199/month',
      users: 'Up to 10,000 transactions',
      category: 'Finance',
      link: '/fraud-detection-ai'
    },

    // Education & Training
    {
      icon: Users,
      title: 'Learning Management System',
      description: 'AI-powered learning management with personalized content and progress tracking',
      features: ['Personalized learning', 'Progress tracking', 'Content creation', 'Assessment tools', 'Analytics', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 500 students',
      category: 'Education',
      link: '/learning-management-system'
    },
    {
      icon: Brain,
      title: 'AI Tutoring Assistant',
      description: 'Personalized AI tutoring with adaptive learning and progress analytics',
      features: ['Adaptive learning', 'Progress analytics', 'Multi-subject support', 'Parent dashboard', 'Mobile app', 'API integration'],
      price: '$79/month',
      users: 'Up to 100 students',
      category: 'Education',
      link: '/ai-tutoring-assistant'
    },

    // Real Estate & Property
    {
      icon: Globe,
      title: 'Property Management Pro',
      description: 'Comprehensive property management with tenant screening and maintenance tracking',
      features: ['Tenant screening', 'Maintenance tracking', 'Rent collection', 'Financial reporting', 'Mobile app', 'API integration'],
      price: '$149/month',
      users: 'Up to 100 properties',
      category: 'Real Estate',
      link: '/property-management-pro'
    },
    {
      icon: BarChart3,
      title: 'Real Estate Analytics',
      description: 'Market analysis and property valuation with investment insights',
      features: ['Market analysis', 'Property valuation', 'Investment insights', 'Trend analysis', 'Custom reports', 'API integration'],
      price: '$199/month',
      users: 'Up to 50 users',
      category: 'Real Estate',
      link: '/real-estate-analytics'
    },

    // Legal & Compliance
    {
      icon: Shield,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis and compliance tracking',
      features: ['Contract analysis', 'Compliance tracking', 'Document templates', 'Version control', 'Collaboration tools', 'API integration'],
      price: '$299/month',
      users: 'Up to 100 users',
      category: 'Legal',
      link: '/legal-document-manager'
    },
    {
      icon: Lock,
      title: 'Contract Lifecycle Manager',
      description: 'End-to-end contract management with automated workflows and risk assessment',
      features: ['Contract workflows', 'Risk assessment', 'Approval processes', 'Renewal tracking', 'Analytics', 'Integration APIs'],
      price: '$249/month',
      users: 'Up to 75 users',
      category: 'Legal',
      link: '/contract-lifecycle-manager'
    },

    // HR & Recruitment
    {
      icon: Users,
      title: 'AI Recruiting Assistant',
      description: 'AI-powered recruitment with candidate screening and interview scheduling',
      features: ['Candidate screening', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Analytics', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 50 recruiters',
      category: 'HR',
      link: '/ai-recruiting-assistant'
    },
    {
      icon: Award,
      title: 'Employee Onboarding Pro',
      description: 'Automated employee onboarding with document management and task tracking',
      features: ['Document management', 'Task tracking', 'Compliance checklists', 'Welcome workflows', 'Analytics', 'Mobile app'],
      price: '$79/month',
      users: 'Up to 200 employees',
      category: 'HR',
      link: '/employee-onboarding-pro'
    },

    // Project Management
    {
      icon: Target,
      title: 'Project Management AI',
      description: 'AI-powered project management with resource optimization and risk prediction',
      features: ['Resource optimization', 'Risk prediction', 'Task automation', 'Team collaboration', 'Analytics', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Project Management',
      link: '/project-management-ai'
    },
    {
      icon: Clock,
      title: 'Time Tracking Pro',
      description: 'Advanced time tracking with productivity analytics and automated reporting',
      features: ['Time tracking', 'Productivity analytics', 'Automated reporting', 'Team dashboards', 'Mobile app', 'API integration'],
      price: '$39/month',
      users: 'Up to 50 users',
      category: 'Project Management',
      link: '/time-tracking-pro'
    },

    // Communication & Collaboration
    {
      icon: Users,
      title: 'Team Collaboration Hub',
      description: 'Unified team collaboration with video conferencing, file sharing, and project management',
      features: ['Video conferencing', 'File sharing', 'Project management', 'Team chat', 'Screen sharing', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 100 users',
      category: 'Communication',
      link: '/team-collaboration-hub'
    },
    {
      icon: Globe,
      title: 'Video Conferencing Pro',
      description: 'Enterprise-grade video conferencing with AI features and advanced analytics',
      features: ['HD video', 'AI features', 'Recording', 'Transcription', 'Analytics', 'Integration APIs'],
      price: '$79/month',
      users: 'Up to 200 participants',
      category: 'Communication',
      link: '/video-conferencing-pro'
    },

    // Data & Analytics
    {
      icon: BarChart3,
      title: 'Data Visualization Studio',
      description: 'Advanced data visualization with interactive dashboards and real-time analytics',
      features: ['Interactive dashboards', 'Real-time analytics', 'Custom charts', 'Data connectors', 'Collaboration', 'API integration'],
      price: '$129/month',
      users: 'Up to 25 users',
      category: 'Data Analytics',
      link: '/data-visualization-studio'
    },
    {
      icon: Database,
      title: 'Data Pipeline Manager',
      description: 'Automated data pipeline management with ETL processes and monitoring',
      features: ['ETL processes', 'Data monitoring', 'Error handling', 'Scheduling', 'Scalability', 'API integration'],
      price: '$199/month',
      users: 'Unlimited users',
      category: 'Data Analytics',
      link: '/data-pipeline-manager'
    },

    // Mobile & IoT
    {
      icon: Smartphone,
      title: 'Mobile App Analytics',
      description: 'Comprehensive mobile app analytics with user behavior tracking and performance monitoring',
      features: ['User behavior tracking', 'Performance monitoring', 'Crash reporting', 'A/B testing', 'Revenue analytics', 'Real-time data'],
      price: '$89/month',
      users: 'Up to 10 apps',
      category: 'Mobile',
      link: '/mobile-app-analytics'
    },
    {
      icon: Globe,
      title: 'IoT Device Manager',
      description: 'Centralized IoT device management with monitoring and automation',
      features: ['Device monitoring', 'Automation rules', 'Data collection', 'Alert system', 'Analytics', 'API integration'],
      price: '$149/month',
      users: 'Up to 1000 devices',
      category: 'IoT',
      link: '/iot-device-manager'
    },

    // Specialized Tools
    {
      icon: Sparkles,
      title: 'AI Design Assistant',
      description: 'AI-powered design tool with logo creation, brand identity, and marketing materials',
      features: ['Logo creation', 'Brand identity', 'Marketing materials', 'Template library', 'Custom designs', 'Export options'],
      price: '$59/month',
      users: 'Up to 10 users',
      category: 'Design',
      link: '/ai-design-assistant'
    },
    {
      icon: Award,
      title: 'Customer Feedback Analyzer',
      description: 'AI-powered customer feedback analysis with sentiment tracking and actionable insights',
      features: ['Sentiment analysis', 'Feedback categorization', 'Trend analysis', 'Actionable insights', 'Integration APIs', 'Reporting'],
      price: '$79/month',
      users: 'Up to 50 users',
      category: 'Customer Experience',
      link: '/customer-feedback-analyzer'
    }
  ];

  const categories = [
    'All',
    'AI Tools',
    'Business Tools',
    'Security',
    'Cloud Services',
    'Development',
    'Marketing',
    'E-commerce',
    'Healthcare',
    'Finance',
    'Education',
    'Real Estate',
    'Legal',
    'HR',
    'Project Management',
    'Communication',
    'Data Analytics',
    'Mobile',
    'IoT',
    'Design',
    'Customer Experience'
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover 50+ innovative micro SAAS solutions powered by AI. From business tools to security suites, find the perfect solution for your business needs." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS Solutions">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto neon-text">
              50+ AI-Powered Tools for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive collection of innovative micro SAAS solutions designed to transform your business operations. 
              From AI-powered tools to security suites, find the perfect solution for your needs.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Micro SAAS Tools</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 appearance-none cyber-glow"
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
                        ? 'bg-cyan-500 text-white cyber-glow'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:cyber-glow'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white neon-text">
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-cyan-400 font-medium">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group relative energy-pulse">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium cyber-glow">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-4">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-gray-400 text-xs">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-xs text-gray-400">{product.users}</div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link
                      to={product.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 cyber-glow"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="w-full border border-cyan-500/30 text-cyan-400 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 cyber-glow">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    {benefit === 'No upfront costs' && 'Start immediately with our flexible pricing and free trials.'}
                    {benefit === 'Quick deployment' && 'Get up and running in minutes with our automated setup process.'}
                    {benefit === 'Scalable solutions' && 'Grow with confidence as our solutions scale with your business.'}
                    {benefit === 'Regular updates' && 'Stay current with continuous feature updates and improvements.'}
                    {benefit === '24/7 support' && 'Get help whenever you need it with our round-the-clock support team.'}
                    {benefit === 'Easy integration' && 'Seamlessly integrate with your existing tools and workflows.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cyber-glow hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 cyber-glow"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
