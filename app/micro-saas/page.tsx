'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  BarChart, 
  Target, 
  TrendingUp, 
  Globe, 
  Database, 
  Users, 
  Settings, 
  MessageCircle, 
  FileText, 
  Mail, 
  Calendar, 
  Package, 
  Monitor, 
  Eye, 
  Mic, 
  Code, 
  Heart, 
  DollarSign, 
  Box, 
  Cpu, 
  Search, 
  Filter, 
  Phone, 
  MapPin,
  Play,
  ExternalLink
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

<<<<<<< HEAD
  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
=======
  const products = [
    {
      title: 'Zion Analytics Pro',
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      category: 'analytics',
      icon: BarChart,
<<<<<<< HEAD
      price: 89,
      marketPrice: 150,
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Multi-tenant Architecture',
        'API Integration',
        'Mobile App Support'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'ROI tracking',
        'Competitive advantage'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/analytics',
      documentation: 'https://docs.ziontechgroup.com/analytics',
      status: 'live',
      rating: 4.9,
      users: 1250
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      category: 'ai',
      icon: Brain,
      price: 149,
      marketPrice: 300,
      features: [
        'GPT-4 Powered AI',
        'Multi-channel Support',
        'Advanced Sentiment Analysis',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Multi-language Support',
        'Custom Training',
        'Analytics Dashboard'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction',
        'Scalable support'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/chat-ai',
      documentation: 'https://docs.ziontechgroup.com/chat-ai',
      status: 'live',
      rating: 4.8,
      users: 2100
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      category: 'security',
      icon: Shield,
      price: 199,
      marketPrice: 400,
      features: [
        'Real-time Threat Monitoring',
        'Vulnerability Scanning',
        'Incident Response',
        'Security Analytics',
        'Compliance Reporting',
        'Employee Training',
        'Firewall Management',
        'Endpoint Protection'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind',
        'Cost-effective protection',
        'Expert support'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/security',
      documentation: 'https://docs.ziontechgroup.com/security',
      status: 'live',
      rating: 4.7,
      users: 890
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and compliance support.',
      category: 'storage',
      icon: Database,
      price: 79,
      marketPrice: 150,
      features: [
        'Automated Backups',
        'Cross-platform Sync',
        'Version Control',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance Support',
        'File Sharing',
        'Mobile Access'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
        'Secure sharing',
        'Compliance ready'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/cloud-vault',
      documentation: 'https://docs.ziontechgroup.com/cloud-vault',
      status: 'live',
      rating: 4.6,
      users: 3200
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      category: 'content',
      icon: FileText,
      price: 129,
      marketPrice: 250,
      features: [
        'AI Content Generation',
        'SEO Optimization',
        'Multi-platform Publishing',
        'Content Calendar',
        'Brand Voice Customization',
        'Performance Analytics',
        'Template Library',
        'Collaboration Tools'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Better engagement',
        'Content strategy insights'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/content-studio',
      documentation: 'https://docs.ziontechgroup.com/content-studio',
      status: 'live',
      rating: 4.8,
      users: 1800
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics, automation, and sales forecasting.',
      category: 'crm',
      icon: Users,
      price: 179,
      marketPrice: 300,
      features: [
        'AI-powered Lead Scoring',
        'Automated Follow-ups',
        'Predictive Analytics',
        'Sales Forecasting',
        'Customer Segmentation',
        'Integration Hub',
        'Pipeline Management',
        'Performance Tracking'
      ],
      benefits: [
        'Improved sales performance',
        'Better customer relationships',
        'Automated processes',
        'Data-driven insights',
        'Higher conversion rates',
        'Reduced manual work'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/crm',
      documentation: 'https://docs.ziontechgroup.com/crm',
      status: 'live',
      rating: 4.9,
      users: 1500
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      category: 'integration',
      icon: Database,
      price: 149,
      marketPrice: 250,
      features: [
        'Real-time Data Sync',
        'Multi-source Integration',
        'Data Transformation',
        'Error Handling',
        'Monitoring Dashboard',
        'API Management',
        'Custom Connectors',
        'Data Validation'
      ],
      benefits: [
        'Unified data view',
        'Reduced manual work',
        'Improved accuracy',
        'Real-time updates',
        'Better decision making',
        'Cost savings'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/data-sync',
      documentation: 'https://docs.ziontechgroup.com/data-sync',
      status: 'live',
      rating: 4.7,
      users: 950
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation and resource planning.',
      category: 'productivity',
      icon: Calendar,
      price: 99,
      marketPrice: 200,
      features: [
        'AI Task Allocation',
        'Resource Planning',
        'Progress Tracking',
        'Team Collaboration',
        'Time Tracking',
        'Performance Analytics',
        'Gantt Charts',
        'Risk Management'
      ],
      benefits: [
        'Improved project success',
        'Better resource utilization',
        'Enhanced collaboration',
        'Automated workflows',
        'Better planning',
        'Reduced delays'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/project-master',
      documentation: 'https://docs.ziontechgroup.com/project-master',
      status: 'live',
      rating: 4.8,
      users: 2200
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization, A/B testing, and behavioral triggers.',
      category: 'marketing',
      icon: Mail,
      price: 89,
      marketPrice: 150,
      features: [
        'AI Personalization',
        'Automated Campaigns',
        'A/B Testing',
        'Behavioral Triggers',
        'Analytics Dashboard',
        'Template Library',
        'List Management',
        'Deliverability Optimization'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'Improved ROI',
        'Personalized experiences',
        'Time savings'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/email-automation',
      documentation: 'https://docs.ziontechgroup.com/email-automation',
      status: 'live',
      rating: 4.6,
      users: 1600
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting, automated reordering, and supplier integration.',
      category: 'inventory',
      icon: Package,
      price: 159,
      marketPrice: 300,
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Multi-location Management',
        'Supplier Integration',
        'Cost Optimization',
        'Analytics Dashboard',
        'Barcode Scanning',
        'Mobile App'
      ],
      benefits: [
        'Reduced stockouts',
        'Lower inventory costs',
        'Improved cash flow',
        'Better supplier relationships',
        'Automated processes',
        'Real-time visibility'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/inventory',
      documentation: 'https://docs.ziontechgroup.com/inventory',
      status: 'live',
      rating: 4.7,
      users: 1200
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      category: 'automation',
      icon: Settings,
      price: 119,
      marketPrice: 200,
      features: [
        'Visual Workflow Builder',
        'API Integrations',
        'Conditional Logic',
        'Task Automation',
        'Approval Workflows',
        'Performance Monitoring',
        'Custom Triggers',
        'Team Collaboration'
      ],
      benefits: [
        'Process efficiency',
        'Reduced errors',
        'Cost savings',
        'Scalable automation',
        'Better compliance',
        'Time optimization'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/workflow',
      documentation: 'https://docs.ziontechgroup.com/workflow',
      status: 'live',
      rating: 4.8,
      users: 1900
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered alerting and optimization recommendations.',
      category: 'monitoring',
      icon: Monitor,
      price: 139,
      marketPrice: 250,
      features: [
        'Real-time Monitoring',
        'AI-powered Alerts',
        'Performance Analytics',
        'Uptime Tracking',
        'Error Tracking',
        'Capacity Planning',
        'Custom Dashboards',
        'Mobile Notifications'
      ],
      benefits: [
        'Improved uptime',
        'Faster issue resolution',
        'Better performance',
        'Proactive monitoring',
        'Cost optimization',
        'Better user experience'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/performance',
      documentation: 'https://docs.ziontechgroup.com/performance',
      status: 'live',
      rating: 4.9,
      users: 1100
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'ai', name: 'AI Services', count: microSaasServices.filter(s => s.category === 'ai').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'storage', name: 'Storage', count: microSaasServices.filter(s => s.category === 'storage').length },
    { id: 'content', name: 'Content', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'crm', name: 'CRM', count: microSaasServices.filter(s => s.category === 'crm').length },
    { id: 'integration', name: 'Integration', count: microSaasServices.filter(s => s.category === 'integration').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'inventory', name: 'Inventory', count: microSaasServices.filter(s => s.category === 'inventory').length },
    { id: 'automation', name: 'Automation', count: microSaasServices.filter(s => s.category === 'automation').length },
    { id: 'monitoring', name: 'Monitoring', count: microSaasServices.filter(s => s.category === 'monitoring').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
=======
    { id: 'all', name: 'All Tools', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of micro SAAS solutions designed to streamline your business operations with AI-powered automation and intelligent tools." />
        <meta name="keywords" content="micro saas, business tools, AI automation, productivity software, business intelligence, CRM, project management" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, ready-to-use business tools with AI automation and intelligent features. 
                Transform your operations with our comprehensive suite of micro SAAS applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search micro SAAS services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-cyan-500/50">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-400 font-semibold">${service.price}/month</span>
                          <span className="text-gray-400 text-sm line-through">${service.marketPrice}/month</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'
                              }`}
                              fill={i < Math.floor(service.rating) ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.users.toLocaleString()} users
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <a
                          href={service.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                        <a
                          href={service.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Docs
                        </a>
                      </div>
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
=======
        <title>Micro SaaS Tools - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of Micro SaaS tools designed to solve specific business problems with maximum efficiency." />
      </Helmet>
      <div className="min-h-screen py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SaaS Tools</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of Micro SaaS tools designed to solve specific business problems with maximum efficiency.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                    <product.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{product.price}</p>
                  </div>
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
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-green-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <a href="/contact"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our comprehensive suite of Micro SaaS tools or get a custom solution built for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Free Consultation
                </a>
                <a href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </main>
      
      <Footer />
=======
      </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
    </>
  );
};

export default MicroSaasPage;