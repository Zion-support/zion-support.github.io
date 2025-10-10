'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, BarChart, MessageSquare, FileText, Target, Users, Database, Calendar, Mail, Package, Settings, Monitor, CheckSquare, Globe, Eye, Code, DollarSign, Box, Search, Filter, Phone, MapPin } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const microSaasTools = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive analytics.',
      features: ['Real-time data visualization', 'AI-powered predictive analytics', 'Custom dashboard builder', 'Advanced data connectors', 'Automated report generation', 'Multi-tenant architecture'],
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
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform with real-time alerts and compliance reporting.',
      features: ['Real-time threat monitoring', 'Automated vulnerability scanning', 'Compliance reporting', 'Incident response automation', 'Security analytics', 'Multi-cloud support'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Automated threat response'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform with multi-format support, brand voice customization, and SEO optimization.',
      features: ['Multi-format content generation', 'Brand voice customization', 'SEO optimization', 'Content planning', 'Plagiarism detection', 'Performance analytics'],
      price: '$59/month',
      marketPrice: '$120-350/month',
      benefits: ['Scale content production', 'Maintain brand consistency', 'Improve SEO performance', 'Reduce content costs'],
      icon: FileText,
      category: 'Content',
      popular: true
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM platform with predictive analytics, automated workflows, and intelligent customer insights.',
      features: ['AI-powered customer insights', 'Automated workflow management', 'Predictive analytics', 'Lead scoring', 'Email automation', 'Sales forecasting'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Improve sales efficiency', 'Better customer relationships', 'Automated processes', 'Data-driven insights'],
      icon: Users,
      category: 'CRM',
      popular: true
    },
    {
      title: 'Zion Data Sync',
      description: 'Advanced data integration platform with real-time synchronization, ETL processes, and data quality management.',
      features: ['Real-time data synchronization', 'ETL/ELT processes', 'Data quality management', 'API integrations', 'Data transformation', 'Monitoring & alerts'],
      price: '$69/month',
      marketPrice: '$140-400/month',
      benefits: ['Eliminate data silos', 'Improve data quality', 'Automated data processes', 'Real-time insights'],
      icon: Database,
      category: 'Data Integration',
      popular: false
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent resource allocation, risk assessment, and automated reporting.',
      features: ['AI resource optimization', 'Risk assessment & mitigation', 'Automated reporting', 'Team collaboration', 'Time tracking', 'Budget management'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Improve project success rates', 'Better resource utilization', 'Automated project insights', 'Enhanced team collaboration'],
      icon: Calendar,
      category: 'Project Management',
      popular: true
    },
    {
      title: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI-powered personalization, A/B testing, and behavioral triggers.',
      features: ['AI personalization', 'Behavioral triggers', 'A/B testing automation', 'Email templates', 'Analytics & reporting', 'List management'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase email engagement', 'Automated personalization', 'Better deliverability', 'Improved ROI'],
      icon: Mail,
      category: 'Email Marketing',
      popular: true
    },
    {
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand forecasting', 'Automated reordering', 'Supply chain optimization', 'Multi-location support', 'Barcode scanning', 'Analytics dashboard'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Reduce stockouts by 70%', 'Optimize inventory costs', 'Automated reordering', 'Better demand planning'],
      icon: Package,
      category: 'Inventory Management',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'Business process automation platform with intelligent workflow design, exception handling, and performance monitoring.',
      features: ['Visual workflow designer', 'Exception handling', 'Performance monitoring', 'Integration capabilities', 'Custom triggers', 'Analytics dashboard'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Reduce manual work by 80%', 'Improve process efficiency', 'Better error handling', 'Cost savings'],
      icon: Settings,
      category: 'Automation',
      popular: true
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Application performance monitoring platform with real-time alerts, root cause analysis, and automated optimization.',
      features: ['Real-time monitoring', 'Root cause analysis', 'Automated alerts', 'Performance optimization', 'User experience tracking', 'Custom dashboards'],
      price: '$69/month',
      marketPrice: '$140-400/month',
      benefits: ['Improve application performance', 'Reduce downtime', 'Better user experience', 'Proactive issue detection'],
      icon: Monitor,
      category: 'Performance Monitoring',
      popular: true
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform with regulatory monitoring, audit trails, and automated reporting.',
      features: ['Regulatory monitoring', 'Audit trail automation', 'Compliance reporting', 'Risk assessment', 'Policy management', 'Training modules'],
      price: '$119/month',
      marketPrice: '$240-700/month',
      benefits: ['Ensure regulatory compliance', 'Automated audit processes', 'Reduce compliance costs', 'Better risk management'],
      icon: CheckSquare,
      category: 'Compliance',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content optimization, scheduling, and performance analytics.',
      features: ['AI content optimization', 'Multi-platform scheduling', 'Performance analytics', 'Hashtag research', 'Competitor analysis', 'Engagement tracking'],
      price: '$59/month',
      marketPrice: '$120-350/month',
      benefits: ['Increase social engagement', 'Optimize posting times', 'Better content performance', 'Automated scheduling'],
      icon: Globe,
      category: 'Social Media',
      popular: true
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, voice synthesis, and intelligent content optimization.',
      features: ['Automated video editing', 'AI voice synthesis', 'Content optimization', 'Multi-format export', 'Template library', 'Brand customization'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Reduce video production time', 'Professional quality output', 'Automated editing', 'Cost-effective video creation'],
      icon: Eye,
      category: 'Video Production',
      popular: true
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with real-time translation, context understanding, and multi-language support.',
      features: ['Real-time translation', 'Context understanding', 'Multi-language support', 'Document translation', 'Voice translation', 'API integration'],
      price: '$39/month',
      marketPrice: '$80-250/month',
      benefits: ['Break language barriers', 'Accurate translations', 'Real-time communication', 'Global reach'],
      icon: Globe,
      category: 'Translation',
      popular: true
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, security scanning, and performance optimization suggestions.',
      features: ['Automated code analysis', 'Security vulnerability scanning', 'Performance optimization', 'Code quality metrics', 'Integration with IDEs', 'Team collaboration'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Improve code quality', 'Reduce security vulnerabilities', 'Faster development cycles', 'Better team collaboration'],
      icon: Code,
      category: 'Development',
      popular: true
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavioral analysis, churn prediction, and personalized recommendations.',
      features: ['Behavioral analysis', 'Churn prediction', 'Personalized recommendations', 'Customer segmentation', 'Sentiment analysis', 'Predictive modeling'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Improve customer retention', 'Increase customer lifetime value', 'Better personalization', 'Data-driven insights'],
      icon: Users,
      category: 'Customer Analytics',
      popular: true
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with smart categorization, automated responses, and productivity optimization.',
      features: ['Smart email categorization', 'Automated responses', 'Priority scoring', 'Email templates', 'Calendar integration', 'Productivity analytics'],
      price: '$29/month',
      marketPrice: '$60-180/month',
      benefits: ['Increase email productivity', 'Automated email management', 'Better organization', 'Time savings'],
      icon: Mail,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting platform with automated transcription, action item extraction, and intelligent scheduling.',
      features: ['Automated transcription', 'Action item extraction', 'Intelligent scheduling', 'Meeting analytics', 'Integration with calendars', 'Voice recognition'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Improve meeting efficiency', 'Automated note-taking', 'Better follow-up', 'Enhanced collaboration'],
      icon: Calendar,
      category: 'Meeting Management',
      popular: true
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'Advanced SEO optimization platform with keyword research, content analysis, and automated optimization suggestions.',
      features: ['Keyword research', 'Content analysis', 'SEO optimization suggestions', 'Competitor analysis', 'Ranking tracking', 'Technical SEO audit'],
      price: '$69/month',
      marketPrice: '$140-400/month',
      benefits: ['Improve search rankings', 'Increase organic traffic', 'Automated SEO optimization', 'Better content performance'],
      icon: Target,
      category: 'SEO',
      popular: true
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated data quality checks and standardization.',
      features: ['Automated data cleaning', 'Data validation', 'Duplicate detection', 'Data standardization', 'Quality scoring', 'Error reporting'],
      price: '$59/month',
      marketPrice: '$120-350/month',
      benefits: ['Improve data quality', 'Reduce data errors', 'Automated cleaning', 'Better data insights'],
      icon: Database,
      category: 'Data Quality',
      popular: false
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment, clause extraction, and automated compliance checking.',
      features: ['Contract analysis', 'Risk assessment', 'Clause extraction', 'Compliance checking', 'Automated summaries', 'Version comparison'],
      price: '$119/month',
      marketPrice: '$240-700/month',
      benefits: ['Reduce contract risks', 'Faster contract review', 'Better compliance', 'Automated analysis'],
      icon: FileText,
      category: 'Legal Tech',
      popular: false
    },
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question generation, response analysis, and insights extraction.',
      features: ['AI question generation', 'Response analysis', 'Insights extraction', 'Survey templates', 'Multi-channel distribution', 'Advanced analytics'],
      price: '$39/month',
      marketPrice: '$80-250/month',
      benefits: ['Create better surveys', 'Automated insights', 'Higher response rates', 'Better data quality'],
      icon: CheckSquare,
      category: 'Survey Tools',
      popular: true
    },
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping, expense categorization, and financial reporting.',
      features: ['Automated bookkeeping', 'Expense categorization', 'Financial reporting', 'Tax preparation', 'Invoice processing', 'Bank reconciliation'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Automate accounting tasks', 'Reduce errors', 'Better financial insights', 'Time savings'],
      icon: DollarSign,
      category: 'Accounting',
      popular: true
    },
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with resume screening, candidate matching, and interview scheduling automation.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Analytics dashboard'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Faster hiring process', 'Better candidate matching', 'Reduced bias', 'Improved efficiency'],
      icon: Users,
      category: 'HR Tech',
      popular: true
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering, policy enforcement, and real-time monitoring.',
      features: ['AI content filtering', 'Policy enforcement', 'Real-time monitoring', 'Multi-language support', 'Custom rules', 'Analytics dashboard'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Maintain platform safety', 'Reduce manual moderation', 'Consistent enforcement', 'Real-time protection'],
      icon: Shield,
      category: 'Content Moderation',
      popular: false
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'IoT-powered predictive maintenance platform with equipment monitoring, failure prediction, and automated scheduling.',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'IoT integration', 'Cost optimization', 'Alert system'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce downtime by 70%', 'Extend equipment life', 'Optimize maintenance costs', 'Prevent failures'],
      icon: Settings,
      category: 'IoT & Maintenance',
      popular: false
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with consumption monitoring, optimization recommendations, and cost analysis.',
      features: ['Energy monitoring', 'Optimization recommendations', 'Cost analysis', 'Renewable integration', 'Demand forecasting', 'Sustainability reporting'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Reduce energy costs by 25%', 'Improve efficiency', 'Sustainability insights', 'Automated optimization'],
      icon: Zap,
      category: 'Energy Management',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain optimization platform with demand forecasting, inventory optimization, and risk management.',
      features: ['Demand forecasting', 'Inventory optimization', 'Risk management', 'Supplier analysis', 'Route optimization', 'Cost optimization'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce supply chain costs', 'Improve efficiency', 'Better risk management', 'Optimized operations'],
      icon: Box,
      category: 'Supply Chain',
      popular: false
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring, behavioral analysis, and automated prevention.',
      features: ['Real-time monitoring', 'Behavioral analysis', 'Pattern recognition', 'Risk scoring', 'Automated prevention', 'Compliance reporting'],
      price: '$129/month',
      marketPrice: '$260-750/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'Automated detection', 'Better risk management'],
      icon: Shield,
      category: 'Fraud Prevention',
      popular: true
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with omnichannel support, AI-powered routing, and sentiment analysis.',
      features: ['Omnichannel support', 'AI routing', 'Sentiment analysis', 'Knowledge base', 'Escalation management', 'Performance analytics'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Improve customer satisfaction', 'Reduce response times', 'Better agent efficiency', 'Omnichannel experience'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with campaign optimization, lead nurturing, and ROI tracking.',
      features: ['Campaign optimization', 'Lead nurturing', 'ROI tracking', 'A/B testing', 'Customer journey mapping', 'Attribution analysis'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase marketing ROI', 'Automated campaigns', 'Better lead nurturing', 'Data-driven marketing'],
      icon: Target,
      category: 'Marketing Automation',
      popular: true
    },
    {
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with OCR, data extraction, and automated workflow management.',
      features: ['Advanced OCR', 'Data extraction', 'Workflow automation', 'Document classification', 'Version control', 'Integration APIs'],
      price: '$79/month',
      marketPrice: '$160-450/month',
      benefits: ['Process documents 10x faster', 'Automated data extraction', 'Reduce manual work', 'Better accuracy'],
      icon: FileText,
      category: 'Document Processing',
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasTools.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasTools.filter(t => t.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasTools.filter(t => t.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: microSaasTools.filter(t => t.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasTools.filter(t => t.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: microSaasTools.filter(t => t.category === 'Security').length },
    { id: 'Content', name: 'Content', count: microSaasTools.filter(t => t.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: microSaasTools.filter(t => t.category === 'CRM').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasTools.filter(t => t.category === 'Project Management').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: microSaasTools.filter(t => t.category === 'Email Marketing').length },
    { id: 'Inventory Management', name: 'Inventory Management', count: microSaasTools.filter(t => t.category === 'Inventory Management').length },
    { id: 'Automation', name: 'Automation', count: microSaasTools.filter(t => t.category === 'Automation').length },
    { id: 'Performance Monitoring', name: 'Performance Monitoring', count: microSaasTools.filter(t => t.category === 'Performance Monitoring').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasTools.filter(t => t.category === 'Social Media').length },
    { id: 'Video Production', name: 'Video Production', count: microSaasTools.filter(t => t.category === 'Video Production').length },
    { id: 'Translation', name: 'Translation', count: microSaasTools.filter(t => t.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasTools.filter(t => t.category === 'Development').length },
    { id: 'Customer Analytics', name: 'Customer Analytics', count: microSaasTools.filter(t => t.category === 'Customer Analytics').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasTools.filter(t => t.category === 'Productivity').length },
    { id: 'Meeting Management', name: 'Meeting Management', count: microSaasTools.filter(t => t.category === 'Meeting Management').length },
    { id: 'SEO', name: 'SEO', count: microSaasTools.filter(t => t.category === 'SEO').length },
    { id: 'Accounting', name: 'Accounting', count: microSaasTools.filter(t => t.category === 'Accounting').length },
    { id: 'HR Tech', name: 'HR Tech', count: microSaasTools.filter(t => t.category === 'HR Tech').length },
    { id: 'Fraud Prevention', name: 'Fraud Prevention', count: microSaasTools.filter(t => t.category === 'Fraud Prevention').length },
    { id: 'Marketing Automation', name: 'Marketing Automation', count: microSaasTools.filter(t => t.category === 'Marketing Automation').length },
    { id: 'Document Processing', name: 'Document Processing', count: microSaasTools.filter(t => t.category === 'Document Processing').length }
  ];

  const filteredTools = microSaasTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
  ];

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
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    {tool.popular && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{tool.price}</span>
                      {tool.marketPrice && (
                        <span className="text-gray-400 text-sm line-through">{tool.marketPrice}</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{tool.category}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
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
                        {tool.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
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
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center space-x-2 hover:text-green-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MicroSaasPage;