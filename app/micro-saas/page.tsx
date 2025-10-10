'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
<<<<<<< HEAD
;];];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products ;
    : products.filter(product => product.category === selectedCategory);
=======
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
    {
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: '$149/month',
      marketPrice: '$250-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved accuracy', 'Real-time updates'],
      icon: Database,
      category: 'Data',
      popular: false
    },
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
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation.',
      features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Performance Analytics'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Enhanced collaboration', 'Automated workflows'],
      icon: Calendar,
      category: 'Project Management',
      popular: false
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
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration', 'Cost Optimization', 'Analytics Dashboard'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relationships'],
      icon: Package,
      category: 'Inventory',
      popular: false
    },
    {
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Monitoring'],
      price: '$119/month',
      marketPrice: '$200-600/month',
      benefits: ['Process efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation'],
      icon: Settings,
      category: 'Automation',
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
      category: 'Monitoring',
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
      category: 'Compliance',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and performance analytics.',
      features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Performance Analytics', 'Engagement Tracking', 'Hashtag Optimization', 'Competitor Analysis'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increased engagement', 'Time savings', 'Better content strategy', 'Improved reach'],
      icon: Globe,
      category: 'Social Media',
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
      category: 'Video',
      popular: false
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translation.',
      features: ['Real-time Translation', 'Document Translation', 'Voice Translation', 'Context Awareness', 'Quality Scoring', 'API Integration'],
      price: '$69/month',
      marketPrice: '$120-300/month',
      benefits: ['Global communication', 'Accurate translations', 'Time savings', 'Cost-effective solution'],
      icon: Globe,
      category: 'Translation',
      popular: false
    },
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
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with AI-powered sorting, responses, and scheduling.',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Email Scheduling', 'Priority Detection', 'Spam Filtering', 'Analytics Dashboard'],
      price: '$59/month',
      marketPrice: '$100-250/month',
      benefits: ['Improved productivity', 'Better email management', 'Time savings', 'Reduced email stress'],
      icon: Mail,
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
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking improvements.',
      features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Monitoring'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved search rankings', 'Better organic traffic', 'Content optimization', 'Competitive advantage'],
      icon: Target,
      category: 'SEO',
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
      category: 'Data',
      popular: false
    },
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
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation', 'Invoice Processing', 'Compliance Reporting'],
      price: '$149/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced accounting costs', 'Improved accuracy', 'Better financial insights', 'Time savings'],
      icon: DollarSign,
      category: 'Accounting',
      popular: true
    },
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
    {
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      features: ['Automated Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Real-time Monitoring', 'Custom Rules', 'Analytics Dashboard'],
      price: '$159/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced moderation costs', 'Consistent enforcement', 'Better user experience', 'Compliance assurance'],
      icon: Shield,
      category: 'Moderation',
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
      category: 'Maintenance',
      popular: false
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimizing consumption and reducing costs.',
      features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact'],
      icon: Zap,
      category: 'Energy',
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
      category: 'Supply Chain',
      popular: false
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
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification', 'Search & Retrieval', 'Integration APIs'],
      price: '$139/month',
      marketPrice: '$250-600/month',
      benefits: ['Faster document processing', 'Reduced manual work', 'Better accuracy', 'Cost savings'],
      icon: FileText,
      category: 'Document Processing',
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
    { id: 'Data', name: 'Data', count: products.filter(p => p.category === 'Data').length },
    { id: 'Project Management', name: 'Project Management', count: products.filter(p => p.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use AI-powered business tools. 50+ Micro SaaS solutions for analytics, automation, marketing, and more." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SaaS Tools
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use AI-powered business tools that solve real problems. 
                No coding required, instant setup, and immediate value for your business.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
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

<<<<<<< HEAD
interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular: boolean;
  icon: React.ComponentType<any>;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        'Multi-platform integration',
        'Advanced filtering'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3
    },
    {
      id: '2',
      name: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      price: '$149/month',
      features: [
        '24/7 threat monitoring',
        'Automated incident response',
        'Compliance tracking',
        'Security analytics',
        'Real-time alerts',
        'Vulnerability scanning'
      ],
      category: 'Security',
      popular: false,
      icon: Shield
    },
    {
      id: '3',
      name: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      price: '$79/month',
      features: [
        'Smart task management',
        'Team collaboration',
        'Progress analytics',
        'Resource optimization',
        'Time tracking',
        'Gantt charts'
      ],
      category: 'Productivity',
      popular: false,
      icon: Target
    },
    {
      id: '4',
      name: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing assistance and optimization.',
      price: '$59/month',
      features: [
        'AI writing assistance',
        'Content optimization',
        'SEO suggestions',
        'Multi-language support',
        'Brand voice training',
        'Content scheduling'
      ],
      category: 'Content',
      popular: true,
      icon: MessageSquare
    },
    {
      id: '5',
      name: 'Cloud Infrastructure Manager',
      description: 'Streamline cloud operations with automated scaling and cost optimization.',
      price: '$199/month',
      features: [
        'Automated scaling',
        'Cost optimization',
        'Performance monitoring',
        'Resource allocation',
        'Multi-cloud support',
        'Disaster recovery'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Cloud
    },
    {
      id: '6',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer service automation with natural language processing.',
      price: '$129/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics'
      ],
      category: 'Customer Service',
      popular: false,
      icon: Users
    }
  ];

  const categories = ['all', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];];];
  const filteredProducts = microSaasProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory;
  );

  const popularProducts = microSaasProducts.filter(product => product.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to solve specific business problems. Analytics, security, productivity, and more." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, content generator, security monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Micro <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SaaS</span> Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused AI tools that solve specific business problems. 
            Each tool is designed to deliver immediate value with minimal setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Tools
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Pricing
            </button>

          </div>
        </div>
      </section>

                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
      {/* Featured Products */},
    {popularProducts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Tools</h2>
              <p className="text-xl text-gray-300">Our most popular micro SaaS solutions</p>
            </div>

=======
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
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
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Choose from our comprehensive suite of Micro SaaS tools or get a custom solution built for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
<<<<<<< HEAD
      )},
    {/* All Products */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  {product.popular && (
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-white mb-4">{product.price}</div>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Tools?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each tool is designed to solve a specific problem with maximum efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Get up and running in minutes with our intuitive setup process and comprehensive documentation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Immediate ROI</h3>
              <p className="text-gray-300">
                See results from day one with tools designed to deliver immediate business value and efficiency gains.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Start small and scale up as your business grows with flexible pricing and feature options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with any of our micro SaaS tools and see immediate improvements in your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
  );
};

export default MicroSaasPage;
