'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, CheckCircle, ArrowRight, BarChart3, MessageSquare, DollarSign, TrendingUp, Cloud, FileText, Users, Calendar, Mail, Code, Globe, Shield, Zap, Database, Settings, Monitor, Smartphone, Workflow, Eye, Wifi, ShoppingCart, Clock, Award, Heart, Box, Package, Mic, Headphones, Phone, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      icon: DollarSign,
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
      icon: TrendingUp,
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
    },
    {
      id: 'zion-social-media-manager',
      name: 'Zion Social Media Manager',
      description: 'AI-powered social media management platform with automated posting, engagement, and analytics.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Engagement automation',
        'Analytics dashboard',
        'Hashtag optimization',
        'Competitor analysis',
        'Scheduling tools',
        'Team collaboration'
      ],
      benefits: [
        'Save 70% social media time',
        'Better engagement rates',
        'Consistent posting',
        'Data-driven insights',
        'Brand growth'
      ],
      category: 'Social Media',
      popular: true,
      icon: Globe,
      link: 'https://social.ziontechgroup.com'
    },
    {
      id: 'zion-hr-assistant',
      name: 'Zion HR Assistant',
      description: 'Comprehensive HR management platform with AI-powered recruitment, employee management, and analytics.',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'AI resume screening',
        'Employee onboarding',
        'Performance tracking',
        'Payroll management',
        'Time tracking',
        'Benefits administration',
        'Compliance monitoring',
        'Analytics dashboard'
      ],
      benefits: [
        'Streamlined HR processes',
        'Better candidate matching',
        'Reduced administrative work',
        'Compliance assurance',
        'Employee satisfaction'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users,
      link: 'https://hr.ziontechgroup.com'
    },
    {
      id: 'zion-expense-tracker',
      name: 'Zion Expense Tracker',
      description: 'Smart expense management with AI-powered categorization, receipt scanning, and automated reporting.',
      price: '$39/month',
      marketPrice: '$80-200/month',
      features: [
        'Receipt scanning',
        'AI categorization',
        'Expense approval workflows',
        'Policy compliance',
        'Tax preparation',
        'Mobile app',
        'Team management',
        'Reporting tools'
      ],
      benefits: [
        'Save 90% expense entry time',
        'Better compliance',
        'Automated categorization',
        'Tax-ready reports',
        'Cost control'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign,
      link: 'https://expenses.ziontechgroup.com'
    },
    {
      id: 'zion-customer-feedback',
      name: 'Zion Customer Feedback',
      description: 'Advanced customer feedback collection and analysis platform with sentiment analysis and action insights.',
      price: '$59/month',
      marketPrice: '$120-350/month',
      features: [
        'Multi-channel feedback collection',
        'AI sentiment analysis',
        'Automated surveys',
        'Real-time dashboards',
        'Action item tracking',
        'Team notifications',
        'Integration capabilities',
        'Custom reporting'
      ],
      benefits: [
        'Better customer insights',
        'Improved satisfaction',
        'Automated analysis',
        'Actionable feedback',
        'Customer retention'
      ],
      category: 'Customer Service',
      popular: false,
      icon: MessageSquare,
      link: 'https://feedback.ziontechgroup.com'
    },
    {
      id: 'zion-time-tracker',
      name: 'Zion Time Tracker',
      description: 'Intelligent time tracking with AI-powered productivity insights and automated project billing.',
      price: '$29/month',
      marketPrice: '$60-150/month',
      features: [
        'Automatic time tracking',
        'AI productivity insights',
        'Project time allocation',
        'Billing automation',
        'Team monitoring',
        'Mobile app',
        'Integration capabilities',
        'Reporting dashboard'
      ],
      benefits: [
        'Accurate time tracking',
        'Productivity insights',
        'Automated billing',
        'Better project management',
        'Cost optimization'
      ],
      category: 'Productivity',
      popular: true,
      icon: Clock,
      link: 'https://time.ziontechgroup.com'
    },
    {
      id: 'zion-document-manager',
      name: 'Zion Document Manager',
      description: 'AI-powered document management with intelligent organization, search, and collaboration features.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI document classification',
        'Advanced search capabilities',
        'Version control',
        'Collaboration tools',
        'Access control',
        'OCR text extraction',
        'Integration capabilities',
        'Mobile access'
      ],
      benefits: [
        'Organized document storage',
        'Quick document retrieval',
        'Better collaboration',
        'Version control',
        'Secure access'
      ],
      category: 'Document Management',
      popular: false,
      icon: FileText,
      link: 'https://documents.ziontechgroup.com'
    },
    {
      id: 'zion-task-automation',
      name: 'Zion Task Automation',
      description: 'Intelligent task automation platform that learns from your workflows and automates repetitive processes.',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'AI workflow learning',
        'Task automation',
        'Integration capabilities',
        'Custom triggers',
        'Performance monitoring',
        'Team collaboration',
        'Error handling',
        'Analytics dashboard'
      ],
      benefits: [
        'Eliminate repetitive tasks',
        'Improved efficiency',
        'Error reduction',
        'Time savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Settings,
      link: 'https://automation.ziontechgroup.com'
    },
    {
      id: 'zion-team-collaboration',
      name: 'Zion Team Collaboration',
      description: 'Advanced team collaboration platform with AI-powered insights, project management, and communication tools.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'Real-time collaboration',
        'AI productivity insights',
        'Project management',
        'Video conferencing',
        'File sharing',
        'Team analytics',
        'Integration capabilities',
        'Mobile app'
      ],
      benefits: [
        'Better team coordination',
        'Improved productivity',
        'Seamless communication',
        'Project visibility',
        'Team insights'
      ],
      category: 'Collaboration',
      popular: true,
      icon: Users,
      link: 'https://collaboration.ziontechgroup.com'
    },
    {
      id: 'zion-api-builder',
      name: 'Zion API Builder',
      description: 'No-code API development platform with AI-powered code generation and automated testing.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Visual API builder',
        'AI code generation',
        'Automated testing',
        'API documentation',
        'Rate limiting',
        'Authentication',
        'Monitoring tools',
        'Integration capabilities'
      ],
      benefits: [
        'Faster API development',
        'No coding required',
        'Automated testing',
        'Better documentation',
        'Scalable APIs'
      ],
      category: 'Development',
      popular: false,
      icon: Code,
      link: 'https://api.ziontechgroup.com'
    }
  ];

  const categories = [
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
    { id: 'Inventory', name: 'Inventory', count: services.filter(s => s.category === 'Inventory').length },
    { id: 'Social Media', name: 'Social Media', count: services.filter(s => s.category === 'Social Media').length },
    { id: 'Human Resources', name: 'Human Resources', count: services.filter(s => s.category === 'Human Resources').length },
    { id: 'Productivity', name: 'Productivity', count: services.filter(s => s.category === 'Productivity').length },
    { id: 'Document Management', name: 'Document Management', count: services.filter(s => s.category === 'Document Management').length },
    { id: 'Collaboration', name: 'Collaboration', count: services.filter(s => s.category === 'Collaboration').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Business Software Tools</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including analytics, CRM, project management, and automation tools for small to medium businesses." />
        <meta name="keywords" content="micro saas, business software, analytics, CRM, project management, automation, small business tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS tools to grow your business" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
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

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search micro SaaS services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
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
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                    >
                      Try Free
                    </a>
                    <a
                      href="/contact"
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
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
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions or get a custom solution 
                built specifically for your business needs. Contact our experts for a free consultation.
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