'use client'
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'
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
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target,
  DollarSign,
  Heart,
  Calendar,
  Lock,
  Mic,
  Wifi,
  Monitor,
  Package,
  Mail,
  Link as LinkIcon,
  Server,
  Workflow,
  CheckSquare,
  ShoppingCart,
  TrendingUp,
  Code,
  Cpu
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      link: 'https://ziontechgroup.com/ai-fraud-detection'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with automated ticket routing and sentiment analysis.',
      category: 'ai',
      features: ['Automated Ticket Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved response times', 'Better customer satisfaction', 'Reduced agent workload', '24/7 availability'],
      link: 'https://ziontechgroup.com/ai-customer-service'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analysis',
      description: 'Advanced financial modeling and risk assessment using machine learning algorithms.',
      category: 'ai',
      features: ['Risk Assessment', 'Financial Modeling', 'Market Analysis', 'Credit Scoring', 'Fraud Prevention'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Improved risk management', 'Better investment decisions', 'Reduced financial losses', 'Compliance automation'],
      link: 'https://ziontechgroup.com/ai-financial-services'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Treatment Optimization'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Reduced medical errors', 'Cost-effective healthcare'],
      link: 'https://ziontechgroup.com/ai-healthcare'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content and automated customer journey optimization.',
      category: 'ai',
      features: ['Personalized Campaigns', 'Customer Segmentation', 'A/B Testing', 'Lead Scoring', 'ROI Optimization'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2500/month',
      benefits: ['Higher conversion rates', 'Personalized experiences', 'Automated optimization', 'Better ROI'],
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    
    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      link: 'https://ziontechgroup.com/devops-cicd'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for optimal performance.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization', 'Security Implementation', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support'],
      link: 'https://ziontechgroup.com/custom-software'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Tuning'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'it',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times'],
      link: 'https://ziontechgroup.com/web-development'
    },
    
    // Micro SaaS Services
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for businesses of all sizes.',
      category: 'saas',
      features: ['Real-time Threat Detection', 'Vulnerability Scanning', 'Security Analytics', 'Compliance Monitoring', 'Incident Response', 'Security Training'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control', 'Cross-platform Sync', 'Compliance Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      link: 'https://ziontechgroup.com/zion-cloud-vault'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams and agencies.',
      category: 'saas',
      features: ['AI Content Generation', 'Brand Voice Training', 'Multi-platform Publishing', 'Content Calendar', 'SEO Optimization', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: ['Faster content creation', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Automated Follow-ups', 'Customer Insights', 'Sales Forecasting', 'Integration Hub'],
      price: 'Starting at $179/month',
      marketPrice: '$300-1000/month',
      benefits: ['Improved sales performance', 'Better customer insights', 'Automated workflows', 'Higher conversion rates'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      category: 'saas',
      features: ['Real-time Data Sync', 'Data Transformation', 'Error Handling', 'Monitoring & Alerts', 'API Management', 'Data Quality Checks'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Seamless data flow', 'Reduced manual work', 'Data consistency', 'Real-time updates'],
      link: 'https://ziontechgroup.com/zion-data-sync'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and nurturing platform with AI-powered targeting and automation.',
      category: 'saas',
      features: ['AI Lead Scoring', 'Automated Nurturing', 'Multi-channel Campaigns', 'A/B Testing', 'Conversion Tracking', 'ROI Analytics'],
      price: 'Starting at $159/month',
      marketPrice: '$300-900/month',
      benefits: ['Higher quality leads', 'Automated nurturing', 'Better conversion rates', 'ROI optimization'],
      link: 'https://ziontechgroup.com/zion-lead-magnet'
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent resource allocation and risk prediction.',
      category: 'saas',
      features: ['AI Resource Allocation', 'Risk Prediction', 'Automated Scheduling', 'Progress Tracking', 'Team Collaboration', 'Performance Analytics'],
      price: 'Starting at $139/month',
      marketPrice: '$250-700/month',
      benefits: ['Better project outcomes', 'Reduced delays', 'Optimal resource use', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-project-master'
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation.',
      category: 'saas',
      features: ['AI Personalization', 'Behavioral Triggers', 'A/B Testing', 'Deliverability Optimization', 'Analytics & Reporting', 'List Management'],
      price: 'Starting at $119/month',
      marketPrice: '$200-600/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Improved deliverability'],
      link: 'https://ziontechgroup.com/zion-email-automation'
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management system with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Multi-location Management', 'Supplier Integration', 'Analytics Dashboard'],
      price: 'Starting at $169/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Automated management', 'Better forecasting'],
      link: 'https://ziontechgroup.com/zion-inventory-smart'
    },
    {
      icon: DollarSign,
      title: 'Zion Invoice Genius',
      description: 'Intelligent invoicing and payment processing platform with automated follow-ups and analytics.',
      category: 'saas',
      features: ['Automated Invoicing', 'Payment Processing', 'Late Payment Follow-ups', 'Financial Analytics', 'Multi-currency Support', 'Client Portal'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Faster payments', 'Reduced admin work', 'Better cash flow', 'Professional invoices'],
      link: 'https://ziontechgroup.com/zion-invoice-genius'
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform with AI-powered process optimization and monitoring.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'AI Process Optimization', 'Integration Hub', 'Performance Monitoring', 'Error Handling', 'Custom Triggers'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Process efficiency', 'Reduced manual work', 'Error reduction', 'Scalable automation'],
      link: 'https://ziontechgroup.com/zion-workflow-automation'
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights and alerting.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI Anomaly Detection', 'Custom Dashboards', 'Automated Alerts', 'Performance Analytics', 'Capacity Planning'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Proactive monitoring', 'Reduced downtime', 'Better performance', 'Cost optimization'],
      link: 'https://ziontechgroup.com/zion-performance-monitor'
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform with regulatory monitoring and reporting.',
      category: 'saas',
      features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Document Management', 'Audit Trails', 'Training Modules'],
      price: 'Starting at $229/month',
      marketPrice: '$400-1000/month',
      benefits: ['Compliance assurance', 'Reduced audit risk', 'Automated reporting', 'Regulatory updates'],
      link: 'https://ziontechgroup.com/zion-compliance-manager'
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content optimization and scheduling.',
      category: 'saas',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Team Collaboration'],
      price: 'Starting at $109/month',
      marketPrice: '$200-600/month',
      benefits: ['Better engagement', 'Time savings', 'Content optimization', 'Multi-platform management'],
      link: 'https://ziontechgroup.com/zion-social-scheduler'
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing and content optimization.',
      category: 'saas',
      features: ['AI Auto-editing', 'Content Optimization', 'Multi-format Export', 'Collaboration Tools', 'Template Library', 'Analytics Dashboard'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster editing', 'Professional results', 'Time savings', 'Easy collaboration'],
      link: 'https://ziontechgroup.com/zion-ai-video-editor'
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language processing and cultural adaptation.',
      category: 'saas',
      features: ['100+ Languages', 'Cultural Adaptation', 'Document Translation', 'Real-time Translation', 'Quality Assurance', 'API Integration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Accurate translations', 'Cultural sensitivity', 'Multi-language support', 'API integration'],
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis and security vulnerability detection.',
      category: 'saas',
      features: ['Automated Code Analysis', 'Security Scanning', 'Performance Optimization', 'Best Practice Checks', 'Team Collaboration', 'Integration Support'],
      price: 'Starting at $159/month',
      marketPrice: '$300-800/month',
      benefits: ['Better code quality', 'Security assurance', 'Faster reviews', 'Team collaboration'],
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'saas', name: 'Micro SaaS', icon: Cpu }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, analytics, cloud solutions, cybersecurity, and micro SaaS platforms. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud computing, cybersecurity, data analytics, automation" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT services to transform your business" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive AI and IT services to transform your business" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg data-stream">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch-enhanced neon-text-enhanced glow">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text-enhanced">
              Comprehensive AI and IT Solutions for Modern Businesses
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-8">
                Transform your business with our cutting-edge AI services, comprehensive IT solutions, and innovative micro SaaS platforms. 
                From advanced analytics to cybersecurity, we provide everything you need to succeed in the digital age.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 cyber-card-enhanced">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                        }`}
                      >
                        <category.icon className="w-4 h-4" />
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-400">
                    Showing {filteredServices.length} of {services.length} services
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cyber-card-enhanced holographic-card-enhanced group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-cyan-400 font-medium">
                        {service.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-4 p-3 bg-slate-800/30 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-cyan-400">Our Price:</span>
                      <span className="text-lg font-bold text-white">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Market Price:</span>
                      <span className="text-sm text-gray-300 line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 cyber-card-enhanced holographic-card-enhanced">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI and IT solutions can drive your success. 
                Contact our experts today for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  📧 Email Us
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default ServicesPage