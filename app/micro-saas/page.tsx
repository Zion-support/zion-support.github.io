'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, BarChart, MessageSquare, FileText, Users, Database, Target, Calendar, Mail, DollarSign, Settings, Monitor, CheckSquare, Globe, Eye, Code, Box, Phone } from 'lucide-react'
const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const microSaasTools = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence platform with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'Multi-source integration', 'Mobile app', 'API access'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase ROI by 40%', 'Real-time insights', 'Automated reporting', 'Data-driven decisions'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 powered', 'Multi-channel support', 'Sentiment analysis', 'Live handoff', 'Multi-language', 'CRM integration'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Higher satisfaction'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for applications and infrastructure.',
      features: ['Real-time monitoring', 'Threat detection', 'Automated response', 'Compliance reporting', 'Vulnerability scanning', 'Incident management'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce security incidents by 85%', '24/7 protection', 'Automated response', 'Compliance ready'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      features: ['Multi-format content', 'Brand voice training', 'SEO optimization', 'Content calendar', 'Team collaboration', 'Performance analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 80% content time', 'Consistent brand voice', 'SEO optimized', 'Higher engagement'],
      icon: FileText,
      category: 'Content',
      popular: true
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive analytics, lead scoring, and automated workflows.',
      features: ['Lead scoring AI', 'Predictive analytics', 'Automated follow-ups', 'Pipeline management', 'Email integration', 'Custom fields'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase conversions by 300%', 'Automated lead nurturing', 'Better forecasting', 'Improved sales'],
      icon: Users,
      category: 'CRM',
      popular: true
    },
    {
      title: 'Zion Data Sync',
      description: 'Intelligent data integration platform connecting all your business systems seamlessly.',
      features: ['Real-time sync', 'Data transformation', 'Error handling', 'API management', 'Custom connectors', 'Data validation'],
      price: '$129/month',
      marketPrice: '$250-800/month',
      benefits: ['Eliminate data silos', 'Real-time accuracy', 'Automated workflows', 'Better insights'],
      icon: Database,
      category: 'Integration',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation platform with AI-powered prospect scoring and nurturing.',
      features: ['AI lead scoring', 'Multi-channel capture', 'Automated nurturing', 'A/B testing', 'CRM integration', 'Analytics dashboard'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Increase qualified leads by 300%', 'Automated nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and timeline optimization.',
      features: ['AI scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration', 'Time tracking', 'Progress analytics'],
      price: '$69/month',
      marketPrice: '$120-400/month',
      benefits: ['Complete projects 25% faster', 'Better resource utilization', 'Risk mitigation', 'Team productivity'],
      icon: Calendar,
      category: 'Project Management',
      popular: true
    },
    {
      title: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automation.',
      features: ['AI personalization', 'Behavioral triggers', 'A/B testing', 'Template builder', 'Analytics', 'List management'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase open rates by 150%', 'Automated campaigns', 'Personalized content', 'Better deliverability'],
      icon: Mail,
      category: 'Email Marketing',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI invoice generation', 'Automated billing', 'Payment tracking', 'Multi-currency', 'Tax calculation', 'Client portal'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      icon: DollarSign,
      category: 'Finance',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered decision making.',
      features: ['Process automation', 'AI decision making', 'Exception handling', 'Integration capabilities', 'Custom workflows', 'Analytics'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduce manual work by 90%', 'Improve accuracy', 'Faster processing', 'Cost savings'],
      icon: Settings,
      category: 'Automation',
      popular: true
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure performance monitoring with AI insights.',
      features: ['Real-time monitoring', 'AI anomaly detection', 'Performance analytics', 'Alert management', 'Custom dashboards', 'API monitoring'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Prevent downtime', 'Optimize performance', 'Proactive alerts', 'Better user experience'],
      icon: Monitor,
      category: 'Monitoring',
      popular: false
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance monitoring and reporting for various regulatory frameworks.',
      features: ['Automated monitoring', 'Regulatory reporting', 'Policy management', 'Audit trails', 'Risk assessment', 'Alert system'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce compliance costs', 'Automated reporting', 'Risk mitigation', 'Audit readiness'],
      icon: CheckSquare,
      category: 'Compliance',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and scheduling.',
      features: ['AI content optimization', 'Multi-platform posting', 'Engagement analytics', 'Hashtag research', 'Content calendar', 'Team collaboration'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase engagement by 200%', 'Optimized posting times', 'Content insights', 'Time savings'],
      icon: Globe,
      category: 'Social Media',
      popular: true
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing and optimization.',
      features: ['AI auto-editing', 'Smart cropping', 'Auto-subtitles', 'Color correction', 'Template library', 'Export options'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Save 70% editing time', 'Professional quality', 'Automated features', 'Easy to use'],
      icon: Eye,
      category: 'Video',
      popular: true
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language processing and context understanding.',
      features: ['100+ languages', 'Context awareness', 'Document translation', 'API integration', 'Quality scoring', 'Custom models'],
      price: '$69/month',
      marketPrice: '$120-400/month',
      benefits: ['Accurate translations', 'Context understanding', 'Bulk processing', 'API integration'],
      icon: Globe,
      category: 'Translation',
      popular: false
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis and improvement suggestions.',
      features: ['Automated code review', 'Security analysis', 'Performance optimization', 'Best practices', 'Team collaboration', 'Integration tools'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Improve code quality', 'Catch bugs early', 'Security compliance', 'Team learning'],
      icon: Code,
      category: 'Development',
      popular: true
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavioral insights and prediction models.',
      features: ['Behavioral analysis', 'Churn prediction', 'Customer segmentation', 'Lifetime value', 'Engagement scoring', 'Custom dashboards'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduce churn by 40%', 'Increase LTV', 'Better segmentation', 'Predictive insights'],
      icon: Users,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered organization, responses, and scheduling.',
      features: ['Smart organization', 'AI responses', 'Meeting scheduling', 'Priority scoring', 'Template suggestions', 'Integration tools'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 60% email time', 'Better organization', 'Automated responses', 'Improved productivity'],
      icon: Mail,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with transcription, summaries, and action item tracking.',
      features: ['Live transcription', 'AI summaries', 'Action items', 'Meeting insights', 'Calendar integration', 'Team collaboration'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Never miss details', 'Automated follow-ups', 'Meeting insights', 'Better productivity'],
      icon: Calendar,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with content analysis and ranking improvements.',
      features: ['Content optimization', 'Keyword research', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Performance monitoring'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Increase organic traffic by 200%', 'Better rankings', 'Content optimization', 'Competitive advantage'],
      icon: Target,
      category: 'SEO',
      popular: true
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      features: ['Automated cleaning', 'Data validation', 'Duplicate detection', 'Format standardization', 'Quality scoring', 'API integration'],
      price: '$69/month',
      marketPrice: '$120-400/month',
      benefits: ['Improve data quality', 'Reduce errors', 'Automated processing', 'Better insights'],
      icon: Database,
      category: 'Data',
      popular: false
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis with risk assessment and compliance checking.',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Clause extraction', 'Version comparison', 'Alert system'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce contract risks', 'Faster review process', 'Compliance assurance', 'Better negotiations'],
      icon: FileText,
      category: 'Legal',
      popular: false
    },
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question optimization and analysis.',
      features: ['AI question optimization', 'Smart branching', 'Response analysis', 'Sentiment analysis', 'Custom themes', 'Integration tools'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Higher response rates', 'Better insights', 'Automated analysis', 'Professional surveys'],
      icon: CheckSquare,
      category: 'Research',
      popular: true
    },
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial insights.',
      features: ['Automated bookkeeping', 'Expense categorization', 'Financial reporting', 'Tax preparation', 'Invoice processing', 'Bank reconciliation'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Save 80% accounting time', 'Automated processes', 'Better accuracy', 'Financial insights'],
      icon: DollarSign,
      category: 'Accounting',
      popular: true
    },
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      features: ['AI screening', 'Candidate matching', 'Interview scheduling', 'Skill assessment', 'Background checks', 'Analytics dashboard'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduce hiring time by 50%', 'Better candidate matches', 'Automated screening', 'Quality hires'],
      icon: Users,
      category: 'HR',
      popular: true
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering and compliance monitoring.',
      features: ['AI content filtering', 'Real-time monitoring', 'Custom rules', 'Human review queue', 'Analytics dashboard', 'API integration'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Maintain platform safety', 'Reduce manual moderation', 'Consistent enforcement', 'Real-time protection'],
      icon: Shield,
      category: 'Moderation',
      popular: false
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance platform with failure prediction and optimization.',
      features: ['Failure prediction', 'Maintenance scheduling', 'IoT integration', 'Cost optimization', 'Alert system', 'Analytics dashboard'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce downtime by 70%', 'Extend equipment life', 'Optimize costs', 'Prevent failures'],
      icon: Settings,
      category: 'Maintenance',
      popular: false
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with AI-powered optimization and cost reduction.',
      features: ['Energy monitoring', 'Usage optimization', 'Cost analysis', 'Renewable integration', 'Predictive modeling', 'Automated controls'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduce energy costs by 25%', 'Optimize usage', 'Environmental impact', 'Cost savings'],
      icon: Zap,
      category: 'Energy',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting and inventory optimization.',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier management', 'Risk assessment', 'Cost analysis', 'Performance tracking'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce inventory costs by 30%', 'Improve delivery times', 'Minimize stockouts', 'Better supplier relations'],
      icon: Box,
      category: 'Supply Chain',
      popular: false
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and prevention.',
      features: ['Real-time detection', 'Behavioral analysis', 'Risk scoring', 'Automated alerts', 'Machine learning', 'Integration tools'],
      price: '$179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered support and analytics.',
      features: ['AI chatbots', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Performance analytics', 'Integration tools'],
      price: '$139/month',
      marketPrice: '$280-700/month',
      benefits: ['Improve satisfaction by 200%', 'Reduce response time', '24/7 support', 'Better insights'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered campaigns and optimization.',
      features: ['Campaign automation', 'Lead nurturing', 'Personalization', 'A/B testing', 'Analytics', 'Integration tools'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Increase conversions by 150%', 'Automated campaigns', 'Better targeting', 'ROI optimization'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with OCR, extraction, and analysis.',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Version control', 'Search capabilities', 'API integration'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Process documents 10x faster', 'Automated extraction', 'Better organization', 'Search capabilities'],
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
    { id: 'Marketing', name: 'Marketing', count: microSaasTools.filter(t => t.category === 'Marketing').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasTools.filter(t => t.category === 'Project Management').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: microSaasTools.filter(t => t.category === 'Email Marketing').length },
    { id: 'Finance', name: 'Finance', count: microSaasTools.filter(t => t.category === 'Finance').length },
    { id: 'Automation', name: 'Automation', count: microSaasTools.filter(t => t.category === 'Automation').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasTools.filter(t => t.category === 'Productivity').length },
    { id: 'Development', name: 'Development', count: microSaasTools.filter(t => t.category === 'Development').length },
    { id: 'HR', name: 'HR', count: microSaasTools.filter(t => t.category === 'HR').length },
    { id: 'Accounting', name: 'Accounting', count: microSaasTools.filter(t => t.category === 'Accounting').length }
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-enhanced matrix-rain-enhanced floating-elements">
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
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                <div key={index} className="cyber-card-enhanced group">
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
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
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

            <div className="holographic-card-enhanced text-center">
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
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-300 mb-4">Contact us for a free consultation:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    kleber@ziontechgroup.com
                  </a>
                </div>
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