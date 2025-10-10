'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, BarChart, MessageSquare, Cloud, FileText, Users, Target, Calendar, Mail, DollarSign, Settings, Monitor, Globe, Eye, Code, Database, Box } from 'lucide-react';

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
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel support', 'Advanced sentiment analysis', 'Automated ticket routing', 'Live agent handoff', 'Multi-language support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform with automated incident response.',
      features: ['Real-time threat monitoring', 'Automated incident response', 'Vulnerability scanning', 'Compliance reporting', 'Security analytics', '24/7 SOC monitoring'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Proactive threat protection', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Enterprise-grade cloud backup and disaster recovery solution with automated data protection.',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Version control', 'Cross-platform sync', 'Compliance ready'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      category: 'Cloud Storage',
      popular: false,
      icon: Cloud
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform with multi-format support and brand consistency tools.',
      features: ['Multi-format content generation', 'Brand voice customization', 'SEO optimization', 'Content planning', 'Plagiarism detection', 'Performance analytics'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Scale content production', 'Maintain brand consistency', 'Improve SEO performance', 'Reduce content costs'],
      category: 'Content Creation',
      popular: true,
      icon: FileText
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM platform with predictive analytics, lead scoring, and automated workflows.',
      features: ['AI lead scoring', 'Predictive analytics', 'Automated workflows', 'Sales forecasting', 'Customer insights', 'Integration capabilities'],
      price: '$129/month',
      marketPrice: '$250-800/month',
      benefits: ['Increase sales by 40%', 'Better lead qualification', 'Automated follow-ups', 'Improved customer relationships'],
      category: 'CRM',
      popular: true,
      icon: Users
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: ['AI lead scoring', 'Multi-channel capture', 'Automated nurturing', 'CRM integration', 'Advanced analytics', 'A/B testing'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      category: 'Lead Generation',
      popular: true,
      icon: Target
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent resource allocation and risk prediction.',
      features: ['AI resource allocation', 'Risk prediction', 'Task automation', 'Team collaboration', 'Progress tracking', 'Budget management'],
      price: '$69/month',
      marketPrice: '$120-400/month',
      benefits: ['Improve project success rate', 'Reduce project delays', 'Better resource utilization', 'Automated reporting'],
      category: 'Project Management',
      popular: false,
      icon: Calendar
    },
    {
      title: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automated campaign management.',
      features: ['AI personalization', 'Automated campaigns', 'A/B testing', 'Advanced segmentation', 'Deliverability optimization', 'Analytics dashboard'],
      price: '$79/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase email engagement', 'Automated campaign management', 'Better deliverability', 'Higher conversion rates'],
      category: 'Email Marketing',
      popular: true,
      icon: Mail
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI invoice generation', 'Automated recurring billing', 'Multi-currency support', 'Payment tracking', 'Tax calculation', 'Client portal'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      category: 'Billing',
      popular: true,
      icon: DollarSign
    },
    {
      title: 'Zion Workflow Automation',
      description: 'Intelligent business process automation platform with AI-powered workflow optimization.',
      features: ['Process automation', 'AI optimization', 'Integration capabilities', 'Custom workflows', 'Performance monitoring', 'Error handling'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduce manual work by 80%', 'Improve process efficiency', 'Better accuracy', 'Cost savings'],
      category: 'Automation',
      popular: true,
      icon: Settings
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Real-time application and infrastructure monitoring with AI-powered alerting and optimization.',
      features: ['Real-time monitoring', 'AI-powered alerting', 'Performance optimization', 'Uptime tracking', 'Custom dashboards', 'API monitoring'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Prevent downtime', 'Improve performance', 'Automated alerting', 'Better visibility'],
      category: 'Monitoring',
      popular: false,
      icon: Monitor
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance monitoring and reporting platform for various regulatory frameworks.',
      features: ['Automated compliance monitoring', 'Regulatory reporting', 'Policy management', 'Audit trails', 'Risk assessment', 'Alert systems'],
      price: '$159/month',
      marketPrice: '$300-900/month',
      benefits: ['Reduce compliance costs', 'Automated reporting', 'Better risk management', 'Audit readiness'],
      category: 'Compliance',
      popular: false,
      icon: CheckSquare
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content optimization and automated posting.',
      features: ['AI content optimization', 'Automated posting', 'Multi-platform support', 'Engagement analytics', 'Content calendar', 'Hashtag optimization'],
      price: '$79/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase social engagement', 'Save time on posting', 'Better content performance', 'Automated scheduling'],
      category: 'Social Media',
      popular: true,
      icon: Globe
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and optimization.',
      features: ['AI video editing', 'Automated effects', 'Video optimization', 'Multi-format support', 'Cloud processing', 'Collaboration tools'],
      price: '$129/month',
      marketPrice: '$250-800/month',
      benefits: ['Professional video creation', 'Save editing time', 'Automated optimization', 'Easy collaboration'],
      category: 'Video Editing',
      popular: true,
      icon: Eye
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translation.',
      features: ['100+ languages', 'Context-aware translation', 'Document translation', 'Real-time translation', 'API integration', 'Quality assurance'],
      price: '$59/month',
      marketPrice: '$120-400/month',
      benefits: ['Accurate translations', 'Support global business', 'Real-time communication', 'Document processing'],
      category: 'Translation',
      popular: false,
      icon: Globe
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, security scanning, and quality assessment.',
      features: ['Automated code analysis', 'Security scanning', 'Quality metrics', 'Best practices checking', 'Integration with Git', 'Team collaboration'],
      price: '$89/month',
      marketPrice: '$180-600/month',
      benefits: ['Improve code quality', 'Catch bugs early', 'Security vulnerability detection', 'Team learning'],
      category: 'Development',
      popular: true,
      icon: Code
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavioral analysis and predictive insights.',
      features: ['Customer journey mapping', 'Behavioral analysis', 'Predictive insights', 'Segmentation', 'Churn prediction', 'Personalization'],
      price: '$149/month',
      marketPrice: '$300-900/month',
      benefits: ['Better customer understanding', 'Increase retention', 'Predictive insights', 'Personalized experiences'],
      category: 'Customer Analytics',
      popular: true,
      icon: Users
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Smart email management platform with AI-powered organization, prioritization, and response suggestions.',
      features: ['Smart email organization', 'Priority scoring', 'Response suggestions', 'Email templates', 'Scheduling', 'Follow-up automation'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save email time', 'Better organization', 'Improved response quality', 'Automated follow-ups'],
      category: 'Email Management',
      popular: false,
      icon: Mail
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting platform with automated transcription, action items, and follow-up management.',
      features: ['Automated transcription', 'Action item extraction', 'Meeting summaries', 'Calendar integration', 'Follow-up automation', 'Team collaboration'],
      price: '$79/month',
      marketPrice: '$150-500/month',
      benefits: ['Better meeting efficiency', 'Automated documentation', 'Improved follow-ups', 'Time savings'],
      category: 'Meeting Management',
      popular: true,
      icon: Calendar
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research, content analysis, and ranking tracking.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Performance monitoring'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Improve search rankings', 'Better content optimization', 'Competitive advantage', 'Increased organic traffic'],
      category: 'SEO',
      popular: true,
      icon: Target
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance and deduplication.',
      features: ['Automated data cleaning', 'Quality validation', 'Deduplication', 'Data standardization', 'Error detection', 'API integration'],
      price: '$69/month',
      marketPrice: '$140-400/month',
      benefits: ['Improve data quality', 'Reduce manual work', 'Better analytics', 'Compliance ready'],
      category: 'Data Management',
      popular: false,
      icon: Database
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment, clause extraction, and compliance checking.',
      features: ['Contract analysis', 'Risk assessment', 'Clause extraction', 'Compliance checking', 'Version comparison', 'Automated alerts'],
      price: '$159/month',
      marketPrice: '$300-900/month',
      benefits: ['Reduce contract risks', 'Save review time', 'Better compliance', 'Automated analysis'],
      category: 'Legal Tech',
      popular: false,
      icon: FileText
    },
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey platform with AI-powered question generation and advanced analytics.',
      features: ['AI question generation', 'Advanced analytics', 'Multi-channel distribution', 'Response analysis', 'Custom themes', 'Integration capabilities'],
      price: '$59/month',
      marketPrice: '$120-400/month',
      benefits: ['Better survey design', 'Higher response rates', 'Advanced insights', 'Easy distribution'],
      category: 'Survey Tools',
      popular: false,
      icon: CheckSquare
    },
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping, expense tracking, and financial reporting.',
      features: ['Automated bookkeeping', 'Expense tracking', 'Financial reporting', 'Tax preparation', 'Invoice management', 'Compliance monitoring'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Automated accounting', 'Reduce errors', 'Better financial insights', 'Tax compliance'],
      category: 'Accounting',
      popular: true,
      icon: DollarSign
    },
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and interview automation.',
      features: ['AI candidate screening', 'Interview automation', 'Skill assessment', 'Resume parsing', 'Candidate matching', 'Analytics dashboard'],
      price: '$179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Faster hiring process', 'Better candidate matching', 'Reduced bias', 'Improved quality'],
      category: 'HR Tech',
      popular: true,
      icon: Users
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering and community management.',
      features: ['AI content filtering', 'Real-time moderation', 'Custom rules', 'User reporting', 'Analytics dashboard', 'API integration'],
      price: '$89/month',
      marketPrice: '$180-600/month',
      benefits: ['Maintain platform safety', 'Reduce manual moderation', 'Consistent enforcement', 'Real-time protection'],
      category: 'Content Moderation',
      popular: false,
      icon: Shield
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'IoT-powered predictive maintenance platform with AI-driven equipment monitoring and failure prediction.',
      features: ['IoT sensor integration', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization', 'Real-time monitoring', 'Custom alerts'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce downtime by 70%', 'Extend equipment life', 'Optimize maintenance costs', 'Prevent failures'],
      category: 'IoT & Maintenance',
      popular: false,
      icon: Settings
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with AI-powered optimization and cost reduction.',
      features: ['Energy consumption analysis', 'Cost optimization', 'Predictive modeling', 'Renewable integration', 'Real-time monitoring', 'Automated controls'],
      price: '$139/month',
      marketPrice: '$280-800/month',
      benefits: ['Reduce energy costs by 25%', 'Improve efficiency', 'Optimize renewable usage', 'Environmental sustainability'],
      category: 'Energy Management',
      popular: false,
      icon: Zap
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain optimization platform with demand forecasting and inventory management.',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier management', 'Cost analysis', 'Risk assessment', 'Performance tracking'],
      price: '$229/month',
      marketPrice: '$450-1500/month',
      benefits: ['Reduce supply chain costs by 30%', 'Improve efficiency', 'Minimize waste', 'Better supplier management'],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and automated prevention.',
      features: ['Real-time monitoring', 'Behavioral analysis', 'Risk scoring', 'Automated prevention', 'Machine learning', 'Custom rules'],
      price: '$179/month',
      marketPrice: '$350-1200/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      category: 'Fraud Prevention',
      popular: true,
      icon: Shield
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered support and omnichannel management.',
      features: ['Omnichannel support', 'AI-powered responses', 'Ticket management', 'Customer insights', 'Performance analytics', 'Integration capabilities'],
      price: '$149/month',
      marketPrice: '$300-900/month',
      benefits: ['Improve customer satisfaction', 'Reduce response time', 'Better support quality', 'Omnichannel experience'],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization and personalization.',
      features: ['Campaign automation', 'AI personalization', 'Multi-channel marketing', 'Lead nurturing', 'Analytics dashboard', 'A/B testing'],
      price: '$129/month',
      marketPrice: '$250-800/month',
      benefits: ['Increase marketing ROI', 'Automated campaigns', 'Better personalization', 'Improved conversion rates'],
      category: 'Marketing Automation',
      popular: true,
      icon: Target
    },
    {
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with OCR, data extraction, and automated classification.',
      features: ['Advanced OCR', 'Data extraction', 'Document classification', 'Automated workflows', 'Integration capabilities', 'Quality assurance'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Process documents 10x faster', 'Automated data extraction', 'Reduce manual errors', 'Better document insights'],
      category: 'Document Processing',
      popular: true,
      icon: FileText
    }
  ]

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasTools.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasTools.filter(t => t.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasTools.filter(t => t.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: microSaasTools.filter(t => t.category === 'Security').length },
    { id: 'Cloud Storage', name: 'Cloud Storage', count: microSaasTools.filter(t => t.category === 'Cloud Storage').length },
    { id: 'Content Creation', name: 'Content Creation', count: microSaasTools.filter(t => t.category === 'Content Creation').length },
    { id: 'CRM', name: 'CRM', count: microSaasTools.filter(t => t.category === 'CRM').length },
    { id: 'Lead Generation', name: 'Lead Generation', count: microSaasTools.filter(t => t.category === 'Lead Generation').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasTools.filter(t => t.category === 'Project Management').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: microSaasTools.filter(t => t.category === 'Email Marketing').length },
    { id: 'Billing', name: 'Billing', count: microSaasTools.filter(t => t.category === 'Billing').length },
    { id: 'Automation', name: 'Automation', count: microSaasTools.filter(t => t.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: microSaasTools.filter(t => t.category === 'Monitoring').length },
    { id: 'Compliance', name: 'Compliance', count: microSaasTools.filter(t => t.category === 'Compliance').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasTools.filter(t => t.category === 'Social Media').length },
    { id: 'Video Editing', name: 'Video Editing', count: microSaasTools.filter(t => t.category === 'Video Editing').length },
    { id: 'Translation', name: 'Translation', count: microSaasTools.filter(t => t.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasTools.filter(t => t.category === 'Development').length },
    { id: 'Customer Analytics', name: 'Customer Analytics', count: microSaasTools.filter(t => t.category === 'Customer Analytics').length },
    { id: 'Email Management', name: 'Email Management', count: microSaasTools.filter(t => t.category === 'Email Management').length },
    { id: 'Meeting Management', name: 'Meeting Management', count: microSaasTools.filter(t => t.category === 'Meeting Management').length },
    { id: 'SEO', name: 'SEO', count: microSaasTools.filter(t => t.category === 'SEO').length },
    { id: 'Data Management', name: 'Data Management', count: microSaasTools.filter(t => t.category === 'Data Management').length },
    { id: 'Legal Tech', name: 'Legal Tech', count: microSaasTools.filter(t => t.category === 'Legal Tech').length },
    { id: 'Survey Tools', name: 'Survey Tools', count: microSaasTools.filter(t => t.category === 'Survey Tools').length },
    { id: 'Accounting', name: 'Accounting', count: microSaasTools.filter(t => t.category === 'Accounting').length },
    { id: 'HR Tech', name: 'HR Tech', count: microSaasTools.filter(t => t.category === 'HR Tech').length },
    { id: 'Content Moderation', name: 'Content Moderation', count: microSaasTools.filter(t => t.category === 'Content Moderation').length },
    { id: 'IoT & Maintenance', name: 'IoT & Maintenance', count: microSaasTools.filter(t => t.category === 'IoT & Maintenance').length },
    { id: 'Energy Management', name: 'Energy Management', count: microSaasTools.filter(t => t.category === 'Energy Management').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: microSaasTools.filter(t => t.category === 'Supply Chain').length },
    { id: 'Fraud Prevention', name: 'Fraud Prevention', count: microSaasTools.filter(t => t.category === 'Fraud Prevention').length },
    { id: 'Marketing Automation', name: 'Marketing Automation', count: microSaasTools.filter(t => t.category === 'Marketing Automation').length },
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
                    className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                    </div>
                    {tool.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{tool.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                      {tool.marketPrice && (
                        <span className="text-gray-400 text-sm ml-2 line-through">{tool.marketPrice}</span>
                      )}
                    </div>
                    <span className="text-gray-400 text-sm">{tool.category}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
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
                      Get Quote
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

            <div className="bg-slate-800/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business with Micro SaaS?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs. 
                Get started with a free consultation today.
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
              <div className="mt-6 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
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