'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, CheckCircle, ArrowRight, BarChart3, MessageSquare, DollarSign, TrendingUp, Cloud, FileText, Users, Calendar, Mail, Code, Globe, Shield, Zap, Database, Settings, Monitor, Smartphone, Workflow, Eye, Wifi, ShoppingCart, Clock, Award, Heart, Box, Package, Mic, Headphones, Phone, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

<<<<<<< HEAD
  const products = [
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Comprehensive business analytics platform with real-time insights and reporting.',
      category: 'Analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integration', 'Automated Alerts', 'Team Collaboration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Data-driven decisions', 'Time savings', 'Better insights', 'Competitive advantage'],
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support and engagement platform with intelligent automation.',
      category: 'Customer Service',
      features: ['AI Chatbots', 'Live Chat', 'Knowledge Base', 'Multi-channel Support', 'Analytics', 'Integration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved customer service', 'Reduced support costs', '24/7 availability', 'Better engagement'],
      popular: true
    },
    {
      icon: DollarSign,
      title: 'Zion Invoice Genius',
      description: 'Smart invoicing and financial management platform with AI-powered automation.',
      category: 'Finance',
      features: ['Automated Invoicing', 'Payment Processing', 'Expense Tracking', 'Financial Reports', 'Tax Management', 'Client Portal'],
      price: 'Starting at $59/month',
      marketPrice: '$120-300/month',
      benefits: ['Streamlined billing', 'Faster payments', 'Better cash flow', 'Reduced errors'],
      popular: true
    },
    {
      icon: TrendingUp,
      title: 'Zion Lead Magnet',
      description: 'AI-powered lead generation and marketing automation platform.',
      category: 'Marketing',
      features: ['Lead Scoring', 'Email Automation', 'Landing Pages', 'A/B Testing', 'Analytics', 'CRM Integration'],
      price: 'Starting at $89/month',
      marketPrice: '$180-450/month',
      benefits: ['More qualified leads', 'Higher conversion rates', 'Automated marketing', 'Better ROI'],
      popular: true
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'Storage',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      popular: false
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing.',
      category: 'Content',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar', 'Brand Voice Customization', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      popular: true
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'CRM',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved sales performance', 'Better customer relationships', 'Automated processes', 'Data-driven insights'],
      popular: false
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      category: 'Data',
      features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved accuracy', 'Real-time updates'],
      popular: false
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation.',
      category: 'Project Management',
      features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Performance Analytics'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Enhanced collaboration', 'Automated workflows'],
      popular: false
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and optimization.',
      category: 'Email Marketing',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard', 'Template Library'],
      price: 'Starting at $89/month',
      marketPrice: '$180-450/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Personalized content'],
      popular: false
    },
    {
      icon: Code,
      title: 'Zion API Manager',
      description: 'Comprehensive API management and development platform with monitoring and analytics.',
      category: 'Development',
      features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Monitoring', 'Documentation', 'Testing Tools'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Simplified API management', 'Better security', 'Improved performance', 'Developer-friendly'],
      popular: false
    },
    {
      icon: Globe,
      title: 'Zion Website Builder',
      description: 'AI-powered website builder with drag-and-drop interface and intelligent design suggestions.',
      category: 'Web Development',
      features: ['Drag & Drop Builder', 'AI Design Suggestions', 'Mobile Optimization', 'SEO Tools', 'E-commerce Integration', 'Analytics'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['No coding required', 'Professional designs', 'Mobile responsive', 'SEO optimized'],
      popular: true
=======
  const services = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
        'API integration',
        'Mobile app access'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'ROI tracking'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      link: 'https://analytics.ziontechgroup.com'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 powered AI',
        'Multi-channel support',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support',
        'CRM integration',
        'Analytics dashboard'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      link: 'https://chat.ziontechgroup.com'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered invoice generation',
        'Automated recurring billing',
        'Multi-currency support',
        'Payment tracking',
        'Tax calculation',
        'Client portal',
        'Expense tracking',
        'Financial reporting'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices',
        'Better cash flow'
      ],
      category: 'Finance',
      popular: true,
      icon: FileText,
      link: 'https://invoices.ziontechgroup.com'
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'CRM integration',
        'Advanced analytics',
        'A/B testing',
        'Email marketing',
        'Social media integration'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Time savings'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      link: 'https://leads.ziontechgroup.com'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time threat monitoring',
        'Vulnerability scanning',
        'Incident response',
        'Security analytics',
        'Compliance reporting',
        'Employee training',
        'Firewall management',
        'Backup monitoring'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind',
        'Cost-effective protection'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      link: 'https://security.ziontechgroup.com'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and version control.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Data encryption',
        'Compliance support',
        'File sharing',
        'Mobile access'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
        'Secure sharing'
      ],
      category: 'Storage',
      popular: false,
      icon: Cloud,
      link: 'https://vault.ziontechgroup.com'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation platform that streamlines operations and reduces manual work.',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'Visual workflow builder',
        'AI-powered optimization',
        'Integration capabilities',
        'Task automation',
        'Approval workflows',
        'Performance analytics',
        'Custom triggers',
        'Team collaboration'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Team productivity'
      ],
      category: 'Automation',
      popular: true,
      icon: Workflow,
      link: 'https://workflow.ziontechgroup.com'
    },
    {
      id: 'zion-project-manager',
      name: 'Zion Project Manager',
      description: 'AI-powered project management platform with intelligent resource allocation and progress tracking.',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI project planning',
        'Resource optimization',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Risk assessment',
        'Reporting dashboard'
      ],
      benefits: [
        'Better project outcomes',
        'Resource optimization',
        'Timeline accuracy',
        'Team coordination',
        'Cost control'
      ],
      category: 'Project Management',
      popular: false,
      icon: Calendar,
      link: 'https://projects.ziontechgroup.com'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar',
        'Performance analytics',
        'Team collaboration',
        'Template library'
      ],
      benefits: [
        'Save 80% content time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform reach',
        'Content performance'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      link: 'https://content.ziontechgroup.com'
    },
    {
      id: 'zion-crm-assistant',
      name: 'Zion CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights and automated follow-ups.',
      price: '$119/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Customer segmentation',
        'Pipeline management',
        'Email integration',
        'Mobile app',
        'Advanced analytics'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better lead management',
        'Automated nurturing',
        'Sales insights',
        'Customer retention'
      ],
      category: 'CRM',
      popular: true,
      icon: Users,
      link: 'https://crm.ziontechgroup.com'
    },
    {
      id: 'zion-email-marketing',
      name: 'Zion Email Marketing',
      description: 'Advanced email marketing platform with AI-powered personalization and automated campaigns.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'List segmentation',
        'Email templates',
        'Analytics dashboard',
        'Integration capabilities',
        'Compliance tools'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'Personalized content',
        'ROI tracking'
      ],
      category: 'Marketing',
      popular: false,
      icon: Mail,
      link: 'https://email.ziontechgroup.com'
    },
    {
      id: 'zion-inventory-manager',
      name: 'Zion Inventory Manager',
      description: 'Smart inventory management system with AI-powered demand forecasting and automated reordering.',
      price: '$89/month',
      marketPrice: '$200-600/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost tracking',
        'Reporting dashboard',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Optimize inventory levels',
        'Cost reduction',
        'Automated processes',
        'Better forecasting'
      ],
      category: 'Inventory',
      popular: false,
      icon: Package,
      link: 'https://inventory.ziontechgroup.com'
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length },
    { id: 'Data', name: 'Data', count: products.filter(p => p.category === 'Data').length },
    { id: 'Project Management', name: 'Project Management', count: products.filter(p => p.category === 'Project Management').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: products.filter(p => p.category === 'Email Marketing').length },
    { id: 'Development', name: 'Development', count: products.filter(p => p.category === 'Development').length },
    { id: 'Web Development', name: 'Web Development', count: products.filter(p => p.category === 'Web Development').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
=======
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: services.filter(s => s.category === 'Storage').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Project Management', name: 'Project Management', count: services.filter(s => s.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: services.filter(s => s.category === 'CRM').length },
    { id: 'Inventory', name: 'Inventory', count: services.filter(s => s.category === 'Inventory').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
  });

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS - Zion Tech Group | Business Software Solutions</title>
        <meta name="description" content="Comprehensive suite of Micro SaaS tools for business productivity and growth. Analytics, CRM, project management, and more - all in one platform." />
        <meta name="keywords" content="micro saas, business software, productivity tools, analytics, CRM, project management, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
=======
        <title>Micro SaaS Solutions - Zion Tech Group | Business Software Tools</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including analytics, CRM, project management, and automation tools for small to medium businesses." />
        <meta name="keywords" content="micro saas, business software, analytics, CRM, project management, automation, small business tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS tools to grow your business" />
        <meta property="og:type" content="website" />
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
<<<<<<< HEAD
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Box className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white neon-text-enhanced">
                  Micro <span className="text-cyan-400">SaaS</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused software solutions designed to solve specific business problems. 
                Our Micro SaaS tools help you work smarter, not harder.
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search Micro SaaS products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 relative ${
                    product.popular ? 'border-cyan-400/50' : 'border-white/10 hover:border-cyan-400/30'
                  }`}>
                    {product.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
=======
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful Business Tools for Modern Companies
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SaaS solutions designed to streamline operations, 
              boost productivity, and drive growth for small to medium businesses. Each tool is built with 
              cutting-edge technology and user-friendly interfaces.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{product.title}</h3>
                        <span className="text-cyan-400 text-sm font-medium">{product.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {product.features.length > 4 && (
                          <div className="text-cyan-400 text-sm">
                            +{product.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        Save up to 50% compared to market rates
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <div className="space-y-1">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                        Try Free
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
<<<<<<< HEAD
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Boost Your Productivity?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start your free trial today and experience the power of our Micro SaaS tools. 
                  No credit card required, cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="/pricing"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    View Pricing
                  </a>
                </div>
=======
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions or get a custom solution 
                built specifically for your business needs. Contact our experts for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;