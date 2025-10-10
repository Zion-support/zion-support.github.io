'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server, Search, Filter, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    // Analytics & Business Intelligence
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral analysis.',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Analytics', 'Churn Prediction', 'Personalization Engine', 'ROI Tracking'],
      price: '$189/month',
      marketPrice: '$350-800/month',
      benefits: ['Better customer understanding', 'Improved retention', 'Personalized experiences', 'Data-driven decisions'],
      icon: Users,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Quality Scoring', 'Error Correction', 'Data Enrichment'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings'],
      icon: Database,
      category: 'Analytics',
      popular: false
    },
    {
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: '$149/month',
      marketPrice: '$250-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved accuracy', 'Real-time updates'],
      icon: Database,
      category: 'Analytics',
      popular: false
    },

    // Customer Service & Support
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      icon: MessageCircle,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered automation and human handoff.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Live Agent Handoff', 'Performance Analytics'],
      price: '$189/month',
      marketPrice: '$350-800/month',
      benefits: ['Improved customer satisfaction', 'Reduced response times', '24/7 availability', 'Cost savings'],
      icon: MessageCircle,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with AI-powered sorting, responses, and scheduling.',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Email Scheduling', 'Priority Detection', 'Spam Filtering', 'Analytics Dashboard'],
      price: '$59/month',
      marketPrice: '$100-250/month',
      benefits: ['Improved productivity', 'Better email management', 'Time savings', 'Reduced email stress'],
      icon: Mail,
      category: 'Customer Service',
      popular: false
    },

    // Security & Compliance
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics', 'Compliance Reporting', 'Employee Training'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Peace of mind'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and prevention capabilities.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts', 'Machine Learning', 'Compliance Support'],
      price: '$249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduced fraud losses', 'Real-time protection', 'Better accuracy', 'Compliance ready'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      features: ['Automated Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Real-time Monitoring', 'Custom Rules', 'Analytics Dashboard'],
      price: '$159/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced moderation costs', 'Consistent enforcement', 'Better user experience', 'Compliance assurance'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for various industry standards and regulations.',
      features: ['Compliance Tracking', 'Automated Reporting', 'Document Management', 'Audit Trail', 'Risk Assessment', 'Training Management'],
      price: '$199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced compliance risk', 'Automated reporting', 'Better documentation', 'Cost savings'],
      icon: CheckCircle,
      category: 'Security',
      popular: false
    },

    // Marketing & Sales
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and optimization.',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard', 'Template Library'],
      price: '$89/month',
      marketPrice: '$150-400/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Improved ROI'],
      icon: Mail,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization.',
      features: ['Campaign Automation', 'Personalization Engine', 'Lead Scoring', 'A/B Testing', 'Analytics Dashboard', 'Multi-channel Support'],
      price: '$159/month',
      marketPrice: '$300-700/month',
      benefits: ['Higher conversion rates', 'Better personalization', 'Automated optimization', 'Improved ROI'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and performance analytics.',
      features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Performance Analytics', 'Engagement Tracking', 'Hashtag Optimization', 'Competitor Analysis'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increased engagement', 'Time savings', 'Better content strategy', 'Improved reach'],
      icon: Globe,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking improvements.',
      features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Monitoring'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved search rankings', 'Better organic traffic', 'Content optimization', 'Competitive advantage'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },

    // CRM & Sales
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation capabilities.',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: '$179/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved sales performance', 'Better customer relationships', 'Automated processes', 'Data-driven insights'],
      icon: Users,
      category: 'CRM',
      popular: true
    },

    // Content & Creative
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar', 'Brand Voice Customization', 'Performance Analytics'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      icon: FileText,
      category: 'Content',
      popular: true
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, transcription, and optimization.',
      features: ['AI Auto-editing', 'Voice Transcription', 'Subtitle Generation', 'Thumbnail Creation', 'Multi-format Export', 'Cloud Storage'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Faster video production', 'Professional quality', 'Automated processes', 'Cost-effective editing'],
      icon: Eye,
      category: 'Content',
      popular: false
    },

    // Project Management & Productivity
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation.',
      features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Performance Analytics'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Enhanced collaboration', 'Automated workflows'],
      icon: Calendar,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and follow-up automation.',
      features: ['Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Meeting Analytics', 'Integration Support', 'Voice Recognition'],
      price: '$89/month',
      marketPrice: '$150-400/month',
      benefits: ['Better meeting outcomes', 'Automated follow-ups', 'Improved productivity', 'Better documentation'],
      icon: Calendar,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Monitoring'],
      price: '$119/month',
      marketPrice: '$200-600/month',
      benefits: ['Process efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation'],
      icon: Settings,
      category: 'Productivity',
      popular: true
    },

    // Development & Technical
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, suggestions, and security scanning.',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions', 'Team Collaboration', 'Integration Support'],
      price: '$149/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved code quality', 'Faster reviews', 'Better security', 'Team learning'],
      icon: Code,
      category: 'Development',
      popular: true
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered alerting and optimization.',
      features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking', 'Error Tracking', 'Capacity Planning'],
      price: '$139/month',
      marketPrice: '$250-700/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Better performance', 'Proactive monitoring'],
      icon: Monitor,
      category: 'Development',
      popular: false
    },

    // Storage & Data
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and cross-platform sync.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      icon: Database,
      category: 'Storage',
      popular: false
    },

    // Inventory & Operations
    {
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration', 'Cost Optimization', 'Analytics Dashboard'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relationships'],
      icon: Package,
      category: 'Operations',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with AI-powered optimization and forecasting.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking'],
      price: '$219/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation'],
      icon: Box,
      category: 'Operations',
      popular: false
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'Intelligent maintenance platform with AI-powered equipment monitoring and failure prediction.',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System'],
      price: '$199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Better planning'],
      icon: Settings,
      category: 'Operations',
      popular: false
    },

    // Financial & Accounting
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation', 'Invoice Processing', 'Compliance Reporting'],
      price: '$149/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced accounting costs', 'Improved accuracy', 'Better financial insights', 'Time savings'],
      icon: DollarSign,
      category: 'Finance',
      popular: true
    },

    // HR & Recruitment
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Analytics Dashboard'],
      price: '$179/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster hiring process', 'Better candidate matches', 'Reduced bias', 'Improved efficiency'],
      icon: Users,
      category: 'HR',
      popular: true
    },

    // Legal & Compliance
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment and compliance checking.',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Automated Summaries', 'Version Comparison'],
      price: '$199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Faster contract review', 'Reduced risk', 'Better compliance', 'Time savings'],
      icon: FileText,
      category: 'Legal',
      popular: false
    },

    // Research & Surveys
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions and analytics.',
      features: ['AI Question Suggestions', 'Multi-format Surveys', 'Real-time Analytics', 'Response Analysis', 'Automated Reports', 'Integration Support'],
      price: '$69/month',
      marketPrice: '$120-300/month',
      benefits: ['Better survey design', 'Improved response rates', 'Automated analysis', 'Actionable insights'],
      icon: CheckCircle,
      category: 'Research',
      popular: false
    },

    // Translation & Communication
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translation.',
      features: ['Real-time Translation', 'Document Translation', 'Voice Translation', 'Context Awareness', 'Quality Scoring', 'API Integration'],
      price: '$69/month',
      marketPrice: '$120-300/month',
      benefits: ['Global communication', 'Accurate translations', 'Time savings', 'Cost-effective solution'],
      icon: Globe,
      category: 'Communication',
      popular: false
    },

    // Document Processing
    {
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification', 'Search & Retrieval', 'Integration APIs'],
      price: '$139/month',
      marketPrice: '$250-600/month',
      benefits: ['Faster document processing', 'Reduced manual work', 'Better accuracy', 'Cost savings'],
      icon: FileText,
      category: 'Document Processing',
      popular: false
    },

    // Energy & Sustainability
    {
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimizing consumption and reducing costs.',
      features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact'],
      icon: Zap,
      category: 'Sustainability',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'Development', name: 'Development', count: products.filter(p => p.category === 'Development').length },
    { id: 'Operations', name: 'Operations', count: products.filter(p => p.category === 'Operations').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'HR', name: 'HR', count: products.filter(p => p.category === 'HR').length },
    { id: 'Legal', name: 'Legal', count: products.filter(p => p.category === 'Legal').length },
    { id: 'Research', name: 'Research', count: products.filter(p => p.category === 'Research').length },
    { id: 'Communication', name: 'Communication', count: products.filter(p => p.category === 'Communication').length },
    { id: 'Document Processing', name: 'Document Processing', count: products.filter(p => p.category === 'Document Processing').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length },
    { id: 'Sustainability', name: 'Sustainability', count: products.filter(p => p.category === 'Sustainability').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use AI-powered business tools. 50+ Micro SaaS solutions for analytics, automation, marketing, and more." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Micro <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SaaS</span> Tools
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Ready-to-use AI-powered business tools that solve real problems. 
                No coding required, instant setup, and immediate value for your business.
              </p>
              
              {/* Contact Info Banner */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-cyan-500/30">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Middletown, DE 19709</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-lg"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-lg"
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group cyber-card-enhanced holographic-card-enhanced hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{product.title}</h3>
                        <span className="text-sm text-gray-400">{product.category}</span>
                      </div>
                    </div>
                    {product.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                  Choose from our comprehensive suite of Micro SaaS tools or get a custom solution built for your specific needs.
                  Contact us today for a free consultation and discover how our AI-powered solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Call: (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Email Us
                  </a>
                </div>
                
                {/* Additional Contact Info */}
                <div className="mt-8 pt-6 border-t border-cyan-500/20">
                  <p className="text-gray-300 text-sm mb-2">
                    📍 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                  <p className="text-gray-300 text-sm">
                    ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;