'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Target, 
  Users, 
  Cloud, 
  Package, 
  Settings, 
  Monitor, 
  CheckSquare, 
  Globe, 
  Eye, 
  Code, 
  Mail, 
  Calendar, 
  Database, 
  DollarSign, 
  Box 
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasTools = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time data visualization', 'AI-powered predictive analytics', 'Custom dashboard builder', 'Advanced data connectors', 'Automated report generation', 'Multi-tenant architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: BarChart3,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and tax calculation.',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: true
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform with multi-format support, brand voice customization, and SEO optimization.',
      features: ['Multi-format content generation', 'Brand voice customization', 'SEO-optimized content', 'Content planning and scheduling', 'Plagiarism detection', 'Content performance analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Scale content production', 'Maintain brand consistency', 'Improve SEO performance', 'Reduce content costs'],
      icon: FileText,
      category: 'Content',
      popular: true
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM system with predictive analytics, automated workflows, and intelligent customer insights.',
      features: ['AI-powered Customer Insights', 'Predictive Analytics', 'Automated Workflows', 'Lead Scoring', 'Sales Forecasting', 'Integration Capabilities'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Improve sales performance', 'Better customer understanding', 'Automated processes', 'Data-driven decisions'],
      icon: Users,
      category: 'CRM',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring platform with threat detection, vulnerability assessment, and compliance management.',
      features: ['Real-time Threat Detection', 'Vulnerability Assessment', 'Automated Security Scanning', 'Compliance Monitoring', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced security risks', 'Compliance assurance', 'Automated monitoring'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated backups, version control, and instant recovery.',
      features: ['Automated Cloud Backups', 'Version Control', 'Instant Recovery', 'Cross-platform Sync', 'Encryption at Rest', 'Compliance Ready'],
      price: '$59/month',
      marketPrice: '$120-350/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      icon: Cloud,
      category: 'Storage',
      popular: false
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent scheduling, resource optimization, and risk prediction.',
      features: ['AI-powered Scheduling', 'Resource Optimization', 'Risk Prediction', 'Team Collaboration', 'Progress Tracking', 'Budget Management'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Risk mitigation', 'Team productivity'],
      icon: Clock,
      category: 'Project Management',
      popular: true
    },
    {
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization, A/B testing, and behavioral triggers.',
      features: ['AI-powered Personalization', 'Behavioral Triggers', 'A/B Testing', 'Email Templates', 'Analytics & Reporting', 'Integration Capabilities'],
      price: '$69/month',
      marketPrice: '$140-400/month',
      benefits: ['Higher email engagement', 'Automated campaigns', 'Better personalization', 'Improved ROI'],
      icon: Mail,
      category: 'Email Marketing',
      popular: true
    },
    {
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Supply Chain Optimization', 'Real-time Tracking', 'Cost Analysis', 'Integration APIs'],
      price: '$119/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduce inventory costs', 'Prevent stockouts', 'Optimize supply chain', 'Better forecasting'],
      icon: Package,
      category: 'Inventory',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform with AI-powered process optimization and intelligent task routing.',
      features: ['No-code Workflow Builder', 'AI Process Optimization', 'Intelligent Task Routing', 'Integration Hub', 'Custom Triggers', 'Analytics Dashboard'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Automate repetitive tasks', 'Improve efficiency', 'Reduce errors', 'Scale operations'],
      icon: Settings,
      category: 'Automation',
      popular: true
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application performance monitoring with real-time alerts, root cause analysis, and optimization recommendations.',
      features: ['Real-time Monitoring', 'Root Cause Analysis', 'Performance Alerts', 'Optimization Recommendations', 'Custom Dashboards', 'API Monitoring'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Improved app performance', 'Faster issue resolution', 'Better user experience', 'Proactive monitoring'],
      icon: Monitor,
      category: 'Monitoring',
      popular: true
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform with regulatory monitoring, audit trails, and automated reporting.',
      features: ['Regulatory Monitoring', 'Audit Trail Management', 'Automated Reporting', 'Compliance Alerts', 'Document Management', 'Risk Assessment'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Ensure compliance', 'Reduce audit costs', 'Automated reporting', 'Risk mitigation'],
      icon: CheckSquare,
      category: 'Compliance',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content optimization, engagement analytics, and automated posting.',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Team Collaboration'],
      price: '$59/month',
      marketPrice: '$120-350/month',
      benefits: ['Increase social engagement', 'Save time on posting', 'Better content strategy', 'Analytics insights'],
      icon: Globe,
      category: 'Social Media',
      popular: true
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, voice synthesis, and intelligent content optimization.',
      features: ['AI-powered Editing', 'Voice Synthesis', 'Auto-captioning', 'Content Optimization', 'Template Library', 'Export Options'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Professional video content', 'Faster editing process', 'AI-powered features', 'Cost-effective production'],
      icon: Eye,
      category: 'Video',
      popular: true
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with real-time translation, context awareness, and multi-language support.',
      features: ['Real-time Translation', 'Context Awareness', 'Multi-language Support', 'Document Translation', 'Voice Translation', 'API Integration'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Break language barriers', 'Accurate translations', 'Real-time communication', 'Global reach'],
      icon: Globe,
      category: 'Translation',
      popular: true
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, security scanning, and performance optimization suggestions.',
      features: ['Automated Code Analysis', 'Security Scanning', 'Performance Optimization', 'Code Quality Metrics', 'Integration Support', 'Team Collaboration'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Improve code quality', 'Faster code reviews', 'Security enhancement', 'Team productivity'],
      icon: Code,
      category: 'Development',
      popular: true
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavioral analysis, churn prediction, and personalized recommendations.',
      features: ['Behavioral Analysis', 'Churn Prediction', 'Personalized Recommendations', 'Customer Segmentation', 'Lifetime Value Analysis', 'Integration APIs'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Better customer understanding', 'Reduce churn', 'Increase retention', 'Data-driven insights'],
      icon: Users,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with smart categorization, automated responses, and priority scoring.',
      features: ['Smart Categorization', 'Automated Responses', 'Priority Scoring', 'Email Templates', 'Scheduling', 'Integration Support'],
      price: '$39/month',
      marketPrice: '$80-250/month',
      benefits: ['Improved email efficiency', 'Better organization', 'Automated responses', 'Time savings'],
      icon: Mail,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting platform with automated transcription, action item extraction, and intelligent scheduling.',
      features: ['Automated Transcription', 'Action Item Extraction', 'Intelligent Scheduling', 'Meeting Analytics', 'Integration Support', 'Team Collaboration'],
      price: '$69/month',
      marketPrice: '$140-400/month',
      benefits: ['Better meeting efficiency', 'Automated documentation', 'Improved follow-up', 'Time optimization'],
      icon: Calendar,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with keyword research, content analysis, and automated optimization suggestions.',
      features: ['Keyword Research', 'Content Analysis', 'Automated Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Performance Reports'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Improve search rankings', 'Better content optimization', 'Competitive advantage', 'Automated SEO'],
      icon: Target,
      category: 'SEO',
      popular: true
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated error detection and data quality improvement.',
      features: ['Automated Error Detection', 'Data Validation', 'Duplicate Removal', 'Format Standardization', 'Quality Metrics', 'Integration APIs'],
      price: '$59/month',
      marketPrice: '$120-350/month',
      benefits: ['Improve data quality', 'Automated cleaning', 'Reduce errors', 'Better analytics'],
      icon: Database,
      category: 'Data',
      popular: true
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment, clause extraction, and automated review.',
      features: ['Risk Assessment', 'Clause Extraction', 'Automated Review', 'Contract Comparison', 'Compliance Checking', 'Integration Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster contract review', 'Risk mitigation', 'Better compliance', 'Time savings'],
      icon: FileText,
      category: 'Legal',
      popular: false
    },
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question generation and advanced analytics.',
      features: ['AI Question Generation', 'Advanced Analytics', 'Custom Templates', 'Multi-channel Distribution', 'Response Analysis', 'Integration APIs'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Better survey design', 'Higher response rates', 'Advanced analytics', 'Automated insights'],
      icon: CheckSquare,
      category: 'Research',
      popular: true
    },
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping, expense categorization, and financial reporting.',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Reporting', 'Tax Preparation', 'Invoice Processing', 'Integration Support'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Automated accounting', 'Better financial insights', 'Tax compliance', 'Time savings'],
      icon: DollarSign,
      category: 'Accounting',
      popular: true
    },
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with resume screening, candidate matching, and interview scheduling.',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Background Checks', 'Analytics Dashboard'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Faster hiring process', 'Better candidate matching', 'Reduced bias', 'Improved efficiency'],
      icon: Users,
      category: 'HR',
      popular: true
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering, sentiment analysis, and compliance monitoring.',
      features: ['AI Content Filtering', 'Sentiment Analysis', 'Compliance Monitoring', 'Custom Rules', 'Real-time Moderation', 'Analytics Dashboard'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Automated moderation', 'Consistent enforcement', 'Reduced manual work', 'Better compliance'],
      icon: Shield,
      category: 'Moderation',
      popular: false
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'IoT-based predictive maintenance platform with equipment monitoring and failure prediction.',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration', 'Analytics Dashboard'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Prevent equipment failures', 'Reduce maintenance costs', 'Optimize schedules', 'Improve uptime'],
      icon: Settings,
      category: 'IoT',
      popular: false
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with consumption monitoring, optimization recommendations, and cost analysis.',
      features: ['Consumption Monitoring', 'Optimization Recommendations', 'Cost Analysis', 'Renewable Integration', 'Smart Controls', 'Reporting'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Reduce energy costs', 'Improve efficiency', 'Environmental impact', 'Smart optimization'],
      icon: Zap,
      category: 'Energy',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain optimization platform with demand forecasting and logistics optimization.',
      features: ['Demand Forecasting', 'Logistics Optimization', 'Inventory Management', 'Supplier Analysis', 'Risk Assessment', 'Cost Optimization'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Optimize supply chain', 'Reduce costs', 'Improve efficiency', 'Better forecasting'],
      icon: Box,
      category: 'Supply Chain',
      popular: false
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and machine learning-based risk assessment.',
      features: ['Real-time Monitoring', 'ML Risk Assessment', 'Pattern Recognition', 'Automated Alerts', 'Integration APIs', 'Analytics Dashboard'],
      price: '$179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Prevent fraud', 'Real-time protection', 'Reduce losses', 'Automated detection'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with omnichannel support and intelligent routing.',
      features: ['Omnichannel Support', 'Intelligent Routing', 'Knowledge Base', 'Sentiment Analysis', 'Performance Analytics', 'Integration Support'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Better customer experience', 'Improved efficiency', 'Omnichannel support', 'Data-driven insights'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with campaign optimization and customer journey mapping.',
      features: ['Campaign Optimization', 'Customer Journey Mapping', 'A/B Testing', 'Personalization', 'Analytics Dashboard', 'Integration Support'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Automated marketing', 'Better personalization', 'Improved ROI', 'Customer insights'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with OCR, data extraction, and automated classification.',
      features: ['Advanced OCR', 'Data Extraction', 'Document Classification', 'Automated Processing', 'Integration APIs', 'Analytics Dashboard'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Automated document processing', 'Faster data extraction', 'Better organization', 'Cost reduction'],
      icon: FileText,
      category: 'Document Processing',
      popular: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasTools.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasTools.filter(t => t.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasTools.filter(t => t.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: microSaasTools.filter(t => t.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasTools.filter(t => t.category === 'Marketing').length },
    { id: 'Content', name: 'Content', count: microSaasTools.filter(t => t.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: microSaasTools.filter(t => t.category === 'CRM').length },
    { id: 'Security', name: 'Security', count: microSaasTools.filter(t => t.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: microSaasTools.filter(t => t.category === 'Storage').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasTools.filter(t => t.category === 'Project Management').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: microSaasTools.filter(t => t.category === 'Email Marketing').length },
    { id: 'Inventory', name: 'Inventory', count: microSaasTools.filter(t => t.category === 'Inventory').length },
    { id: 'Automation', name: 'Automation', count: microSaasTools.filter(t => t.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: microSaasTools.filter(t => t.category === 'Monitoring').length },
    { id: 'Compliance', name: 'Compliance', count: microSaasTools.filter(t => t.category === 'Compliance').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasTools.filter(t => t.category === 'Social Media').length },
    { id: 'Video', name: 'Video', count: microSaasTools.filter(t => t.category === 'Video').length },
    { id: 'Translation', name: 'Translation', count: microSaasTools.filter(t => t.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasTools.filter(t => t.category === 'Development').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasTools.filter(t => t.category === 'Productivity').length },
    { id: 'SEO', name: 'SEO', count: microSaasTools.filter(t => t.category === 'SEO').length },
    { id: 'Data', name: 'Data', count: microSaasTools.filter(t => t.category === 'Data').length },
    { id: 'Legal', name: 'Legal', count: microSaasTools.filter(t => t.category === 'Legal').length },
    { id: 'Research', name: 'Research', count: microSaasTools.filter(t => t.category === 'Research').length },
    { id: 'Accounting', name: 'Accounting', count: microSaasTools.filter(t => t.category === 'Accounting').length },
    { id: 'HR', name: 'HR', count: microSaasTools.filter(t => t.category === 'HR').length },
    { id: 'Moderation', name: 'Moderation', count: microSaasTools.filter(t => t.category === 'Moderation').length },
    { id: 'IoT', name: 'IoT', count: microSaasTools.filter(t => t.category === 'IoT').length },
    { id: 'Energy', name: 'Energy', count: microSaasTools.filter(t => t.category === 'Energy').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: microSaasTools.filter(t => t.category === 'Supply Chain').length },
    { id: 'Document Processing', name: 'Document Processing', count: microSaasTools.filter(t => t.category === 'Document Processing').length }
  ]

  const filteredTools = microSaasTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: CheckCircle
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI-powered intelligence and rapid deployment.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    {tool.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                      {tool.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                      {tool.marketPrice && (
                        <span className="text-gray-400 text-sm ml-2 line-through">{tool.marketPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Browse Solutions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Custom Development
                </a>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-4">Contact us for a free consultation:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    📞 +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    ✉️ kleber@ziontechgroup.com
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  📍 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default MicroSaasPage;