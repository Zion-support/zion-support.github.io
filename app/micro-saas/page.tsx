'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Search, Filter, BarChart, MessageSquare, FileText, Users, Database, Target, Calendar, Mail, DollarSign, Settings, Monitor, CheckSquare, Globe, Eye, Code, Box } from 'lucide-react'
const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const microSaasTools = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence platform with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'AI-powered predictions', 'Custom KPI tracking', 'Automated reporting', 'Multi-source data integration', 'Mobile app'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase decision speed by 300%', 'Reduce reporting time by 90%', 'Predict trends 6 months ahead', 'ROI tracking'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 powered responses', 'Multi-channel support', 'Sentiment analysis', 'Live agent handoff', 'Custom knowledge base', 'Analytics dashboard'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce support costs by 70%', '24/7 availability', '95% customer satisfaction', 'Instant responses'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI-powered threat detection and automated response.',
      features: ['Real-time threat monitoring', 'AI threat detection', 'Automated incident response', 'Compliance reporting', 'Vulnerability scanning', 'Security training'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce security incidents by 85%', 'Automated compliance', '24/7 monitoring'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform with brand voice customization and multi-platform publishing.',
      features: ['AI content generation', 'Brand voice training', 'SEO optimization', 'Multi-platform publishing', 'Content calendar', 'Performance analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Create content 10x faster', 'Maintain brand consistency', 'Improve SEO rankings', 'Scale content production'],
      icon: FileText,
      category: 'Content',
      popular: true
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive analytics, lead scoring, and automated follow-ups.',
      features: ['AI lead scoring', 'Predictive analytics', 'Automated follow-ups', 'Pipeline forecasting', 'Customer insights', 'Integration hub'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Increase sales by 40%', 'Improve lead quality by 60%', 'Automate follow-ups', 'Better customer insights'],
      icon: Users,
      category: 'CRM',
      popular: true
    },
    {
      title: 'Zion Data Sync',
      description: 'Intelligent data integration platform that connects and synchronizes all your business systems.',
      features: ['Real-time data sync', 'API integrations', 'Data transformation', 'Error handling', 'Monitoring dashboard', 'Custom connectors'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Eliminate data silos', 'Reduce manual data entry', 'Improve data accuracy', 'Real-time insights'],
      icon: Database,
      category: 'Integration',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation platform with AI-powered prospect scoring and automated nurturing.',
      features: ['AI lead scoring', 'Multi-channel capture', 'Automated nurturing', 'A/B testing', 'Analytics dashboard', 'CRM integration'],
      price: '$89/month',
      marketPrice: '$180-450/month',
      benefits: ['Increase qualified leads by 300%', 'Automate lead nurturing', 'Improve conversion rates', 'Better lead quality'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and risk prediction.',
      features: ['AI resource optimization', 'Risk prediction', 'Automated scheduling', 'Team collaboration', 'Progress tracking', 'Budget management'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Complete projects 25% faster', 'Reduce project risks', 'Optimize resource allocation', 'Improve team productivity'],
      icon: Calendar,
      category: 'Project Management',
      popular: false
    },
    {
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and send-time optimization.',
      features: ['AI personalization', 'Send-time optimization', 'A/B testing', 'Behavioral triggers', 'Analytics dashboard', 'Template library'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase open rates by 40%', 'Improve click-through rates', 'Automate email campaigns', 'Better engagement'],
      icon: Mail,
      category: 'Email Marketing',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI invoice generation', 'Automated recurring billing', 'Payment tracking', 'Multi-currency support', 'Client portal', 'Tax calculation'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      icon: DollarSign,
      category: 'Finance',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'Visual workflow automation platform that streamlines business processes with AI-powered optimization.',
      features: ['Visual workflow builder', 'AI process optimization', 'Integration connectors', 'Conditional logic', 'Analytics dashboard', 'Custom triggers'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Automate repetitive tasks', 'Reduce errors by 95%', 'Improve process efficiency', 'Scale operations'],
      icon: Settings,
      category: 'Automation',
      popular: true
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered anomaly detection.',
      features: ['Real-time monitoring', 'AI anomaly detection', 'Performance optimization', 'Alert management', 'Custom dashboards', 'Historical analysis'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Prevent 99% of downtime', 'Improve performance by 50%', 'Reduce monitoring costs', 'Proactive issue resolution'],
      icon: Monitor,
      category: 'Monitoring',
      popular: false
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform with real-time monitoring and reporting.',
      features: ['Compliance monitoring', 'Automated reporting', 'Policy management', 'Risk assessment', 'Audit trails', 'Regulatory updates'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Ensure 100% compliance', 'Reduce audit time by 80%', 'Automated reporting', 'Risk mitigation'],
      icon: CheckSquare,
      category: 'Compliance',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with optimal posting times and content suggestions.',
      features: ['AI posting optimization', 'Content suggestions', 'Multi-platform posting', 'Analytics dashboard', 'Hashtag optimization', 'Engagement tracking'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Increase engagement by 60%', 'Save 5 hours per week', 'Optimize posting times', 'Better content performance'],
      icon: Globe,
      category: 'Social Media',
      popular: true
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing and content optimization.',
      features: ['AI video editing', 'Auto-captioning', 'Thumbnail generation', 'Content optimization', 'Multi-format export', 'Template library'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Create videos 10x faster', 'Professional quality output', 'Automated editing', 'Better engagement'],
      icon: Eye,
      category: 'Video',
      popular: true
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translations.',
      features: ['100+ languages', 'AI context detection', 'Real-time translation', 'Document translation', 'API integration', 'Quality assurance'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['99% translation accuracy', 'Support global expansion', 'Real-time communication', 'Professional quality'],
      icon: Globe,
      category: 'Translation',
      popular: false
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection and security analysis.',
      features: ['AI code analysis', 'Security scanning', 'Performance optimization', 'Style checking', 'Integration support', 'Learning recommendations'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduce bugs by 80%', 'Improve code quality', 'Faster development cycles', 'Better security'],
      icon: Code,
      category: 'Development',
      popular: true
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavior prediction.',
      features: ['Customer segmentation', 'Behavior prediction', 'Churn analysis', 'Lifetime value calculation', 'Personalization engine', 'ROI tracking'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Increase customer retention by 35%', 'Improve personalization', 'Predict customer behavior', 'Better marketing ROI'],
      icon: Users,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, and priority management.',
      features: ['AI email responses', 'Smart scheduling', 'Priority management', 'Template suggestions', 'Sentiment analysis', 'Follow-up automation'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 3 hours per day', 'Improve response quality', 'Never miss important emails', 'Better time management'],
      icon: Mail,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated transcription, action items, and follow-ups.',
      features: ['Live transcription', 'Action item extraction', 'Meeting summaries', 'Calendar integration', 'Follow-up automation', 'Analytics dashboard'],
      price: '$89/month',
      marketPrice: '$180-450/month',
      benefits: ['Never miss action items', 'Save 2 hours per meeting', 'Improve meeting efficiency', 'Better follow-through'],
      icon: Calendar,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO platform with automated optimization and content suggestions.',
      features: ['AI keyword research', 'Content optimization', 'Technical SEO audit', 'Competitor analysis', 'Rank tracking', 'Performance monitoring'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Automated optimization', 'Better content strategy'],
      icon: Target,
      category: 'SEO',
      popular: true
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      features: ['AI data validation', 'Duplicate detection', 'Format standardization', 'Quality scoring', 'Automated cleaning', 'Data profiling'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improve data quality by 95%', 'Reduce manual work', 'Better data insights', 'Compliance ready'],
      icon: Database,
      category: 'Data Management',
      popular: false
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis with risk assessment and automated clause extraction.',
      features: ['Contract analysis', 'Risk assessment', 'Clause extraction', 'Compliance checking', 'Version comparison', 'Automated summaries'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce contract review time by 90%', 'Identify risks early', 'Improve compliance', 'Better contract management'],
      icon: FileText,
      category: 'Legal',
      popular: false
    },
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey platform with AI-powered question generation and response analysis.',
      features: ['AI question generation', 'Response analysis', 'Sentiment analysis', 'Automated insights', 'Custom themes', 'Multi-channel distribution'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Create better surveys', 'Get actionable insights', 'Improve response rates', 'Automated analysis'],
      icon: CheckSquare,
      category: 'Research',
      popular: false
    },
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial insights.',
      features: ['Automated bookkeeping', 'Expense categorization', 'Financial reporting', 'Tax preparation', 'Invoice processing', 'Cash flow analysis'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 10 hours per week', 'Improve accuracy', 'Better financial insights', 'Tax compliance'],
      icon: DollarSign,
      category: 'Accounting',
      popular: true
    },
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      features: ['AI candidate screening', 'Skill matching', 'Interview scheduling', 'Background checks', 'Performance analytics', 'Integration support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Automate screening', 'Better cultural fit'],
      icon: Users,
      category: 'HR',
      popular: true
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering and compliance monitoring.',
      features: ['AI content filtering', 'Real-time moderation', 'Custom rules engine', 'Compliance monitoring', 'Analytics dashboard', 'API integration'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Maintain platform safety', 'Reduce manual moderation', 'Consistent enforcement', 'Real-time protection'],
      icon: Shield,
      category: 'Moderation',
      popular: false
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance platform with failure prediction and optimization.',
      features: ['Failure prediction', 'Maintenance scheduling', 'Performance monitoring', 'Cost optimization', 'Alert system', 'Analytics dashboard'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce downtime by 70%', 'Extend equipment life', 'Optimize maintenance costs', 'Prevent failures'],
      icon: Settings,
      category: 'Maintenance',
      popular: false
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with AI-powered optimization and cost reduction.',
      features: ['Energy monitoring', 'Usage optimization', 'Cost analysis', 'Predictive modeling', 'Automated controls', 'Sustainability tracking'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce energy costs by 25%', 'Improve efficiency', 'Environmental impact', 'Automated optimization'],
      icon: Zap,
      category: 'Energy',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with AI-powered optimization and risk prediction.',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier analysis', 'Risk assessment', 'Cost optimization', 'Performance tracking'],
      price: '$299/month',
      marketPrice: '$600-1500/month',
      benefits: ['Reduce costs by 30%', 'Improve efficiency', 'Minimize risks', 'Better planning'],
      icon: Box,
      category: 'Supply Chain',
      popular: false
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with AI-powered risk assessment and real-time monitoring.',
      features: ['Real-time monitoring', 'Risk scoring', 'Pattern detection', 'Automated alerts', 'Case management', 'Compliance reporting'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Prevent 99% of fraud', 'Reduce false positives', 'Real-time protection', 'Compliance ready'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered automation and human handoff.',
      features: ['AI automation', 'Human handoff', 'Knowledge base', 'Ticket management', 'Performance analytics', 'Multi-channel support'],
      price: '$179/month',
      marketPrice: '$350-900/month',
      benefits: ['Improve satisfaction by 40%', 'Reduce response time', 'Scale support operations', 'Better customer experience'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization.',
      features: ['Campaign automation', 'AI personalization', 'Lead nurturing', 'A/B testing', 'Analytics dashboard', 'Integration hub'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Increase conversions by 60%', 'Improve personalization', 'Automate campaigns', 'Better ROI'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      features: ['Document extraction', 'Data validation', 'Format conversion', 'Search and retrieval', 'Workflow automation', 'API integration'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Process documents 10x faster', 'Improve accuracy', 'Automate workflows', 'Better insights'],
      icon: FileText,
      category: 'Document Processing',
      popular: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasTools.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasTools.filter(t => t.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasTools.filter(t => t.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: microSaasTools.filter(t => t.category === 'Security').length },
    { id: 'Content', name: 'Content', count: microSaasTools.filter(t => t.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: microSaasTools.filter(t => t.category === 'CRM').length },
    { id: 'Integration', name: 'Integration', count: microSaasTools.filter(t => t.category === 'Integration').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasTools.filter(t => t.category === 'Marketing').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasTools.filter(t => t.category === 'Project Management').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: microSaasTools.filter(t => t.category === 'Email Marketing').length },
    { id: 'Finance', name: 'Finance', count: microSaasTools.filter(t => t.category === 'Finance').length },
    { id: 'Automation', name: 'Automation', count: microSaasTools.filter(t => t.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: microSaasTools.filter(t => t.category === 'Monitoring').length },
    { id: 'Compliance', name: 'Compliance', count: microSaasTools.filter(t => t.category === 'Compliance').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasTools.filter(t => t.category === 'Social Media').length },
    { id: 'Video', name: 'Video', count: microSaasTools.filter(t => t.category === 'Video').length },
    { id: 'Translation', name: 'Translation', count: microSaasTools.filter(t => t.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasTools.filter(t => t.category === 'Development').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasTools.filter(t => t.category === 'Productivity').length },
    { id: 'SEO', name: 'SEO', count: microSaasTools.filter(t => t.category === 'SEO').length },
    { id: 'Data Management', name: 'Data Management', count: microSaasTools.filter(t => t.category === 'Data Management').length },
    { id: 'Legal', name: 'Legal', count: microSaasTools.filter(t => t.category === 'Legal').length },
    { id: 'Research', name: 'Research', count: microSaasTools.filter(t => t.category === 'Research').length },
    { id: 'Accounting', name: 'Accounting', count: microSaasTools.filter(t => t.category === 'Accounting').length },
    { id: 'HR', name: 'HR', count: microSaasTools.filter(t => t.category === 'HR').length },
    { id: 'Moderation', name: 'Moderation', count: microSaasTools.filter(t => t.category === 'Moderation').length },
    { id: 'Maintenance', name: 'Maintenance', count: microSaasTools.filter(t => t.category === 'Maintenance').length },
    { id: 'Energy', name: 'Energy', count: microSaasTools.filter(t => t.category === 'Energy').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: microSaasTools.filter(t => t.category === 'Supply Chain').length },
    { id: 'Document Processing', name: 'Document Processing', count: microSaasTools.filter(t => t.category === 'Document Processing').length }
  ]

  const filteredTools = microSaasTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
    return matchesSearch && matchesCategory
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
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {filteredTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    {tool.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
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
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
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
                    <span className="text-gray-400 text-sm">{tool.category}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
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
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Browse Solutions
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Custom Development
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default MicroSaasPage