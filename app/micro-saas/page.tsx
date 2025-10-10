'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mail,
  Phone,
  MapPin,
  Filter,
  Search
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI-Powered Tools
    {
      id: 1,
      title: 'Zion AI Content Studio',
      description: 'Advanced AI-powered content creation platform with multi-format support and brand voice customization',
      category: 'AI Tools',
      price: '$89/month',
      users: 'Up to 25 users',
      features: [
        'GPT-4 powered content generation',
        '50+ content templates and formats',
        'Brand voice training and customization',
        'Multi-language support (30+ languages)',
        'SEO optimization and keyword integration',
        'Plagiarism detection and originality scoring',
        'Content calendar and scheduling',
        'Team collaboration and approval workflows',
        'Analytics and performance tracking',
        'API access for custom integrations'
      ],
      icon: FileText,
      popular: true,
      rating: 4.9,
      userCount: '15K+',
      link: 'https://ziontechgroup.com/ai-content-studio'
    },
    {
      id: 2,
      title: 'Zion Analytics Pro',
      description: 'Real-time business intelligence platform with AI-powered insights and predictive analytics',
      category: 'Analytics',
      price: '$149/month',
      users: 'Up to 50 users',
      features: [
        'Real-time data visualization with 100+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'White-label solution available',
        'API access for custom integrations',
        'Mobile app for iOS and Android',
        'Advanced security and compliance'
      ],
      icon: BarChart,
      popular: true,
      rating: 4.8,
      userCount: '12K+',
      link: 'https://ziontechgroup.com/analytics-pro'
    },
    {
      id: 3,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      category: 'Communication',
      price: '$199/month',
      users: 'Up to 100 users',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification',
        'Custom bot training and knowledge base',
        '24/7 monitoring and support'
      ],
      icon: Users,
      popular: true,
      rating: 4.9,
      userCount: '18K+',
      link: 'https://ziontechgroup.com/chat-ai'
    },
    {
      id: 4,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      category: 'Security',
      price: '$299/month',
      users: 'Up to 200 users',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support',
        'Advanced threat intelligence feeds',
        'Custom security policies and rules'
      ],
      icon: Shield,
      popular: false,
      rating: 4.7,
      userCount: '8K+',
      link: 'https://ziontechgroup.com/security-shield'
    },
    {
      id: 5,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      category: 'Storage',
      price: '$79/month',
      users: 'Up to 30 users',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access',
        'Mobile app for file access and sharing',
        'Team collaboration and sharing features'
      ],
      icon: Cloud,
      popular: false,
      rating: 4.6,
      userCount: '10K+',
      link: 'https://ziontechgroup.com/cloud-vault'
    },
    {
      id: 6,
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations',
      category: 'Monitoring',
      price: '$129/month',
      users: 'Up to 40 users',
      features: [
        'Real-time APM with distributed tracing',
        'AI-powered performance anomaly detection',
        'Automated optimization recommendations',
        'Error tracking and crash reporting',
        'Uptime monitoring with global checkpoints',
        'Performance budget tracking and alerts',
        'Custom metrics and business KPIs',
        'Integration with CI/CD pipelines',
        'Mobile app performance monitoring',
        'Advanced reporting and analytics'
      ],
      icon: TrendingUp,
      popular: false,
      rating: 4.8,
      userCount: '7K+',
      link: 'https://ziontechgroup.com/performance-ai'
    },
    {
      id: 7,
      title: 'Zion Workflow AI',
      description: 'Intelligent process automation with AI-powered workflow optimization and smart routing',
      category: 'AI',
      price: '$199/month',
      users: 'Up to 100 users',
      features: [
        'AI-powered workflow design and optimization',
        'Smart task routing and resource allocation',
        'Process mining and bottleneck identification',
        'Custom automation rules and triggers',
        'Integration with 500+ business tools',
        'Advanced analytics and performance metrics',
        'Exception handling and error recovery',
        'Team collaboration and approval workflows',
        'Mobile app for workflow management',
        'Custom AI model training'
      ],
      icon: Zap,
      popular: true,
      rating: 4.9,
      userCount: '13K+',
      link: 'https://ziontechgroup.com/workflow-ai'
    },
    {
      id: 8,
      title: 'Zion Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization and optimization',
      category: 'Marketing',
      price: '$99/month',
      users: 'Up to 50 users',
      features: [
        'AI-powered email personalization and optimization',
        'Advanced segmentation and targeting',
        'A/B testing with statistical significance',
        'Email template builder with AI assistance',
        'Advanced analytics and ROI tracking',
        'Compliance tools (GDPR, CAN-SPAM)',
        'Integration with major CRMs and platforms',
        'Advanced automation workflows',
        'Mobile app for campaign management',
        'White-label solution available'
      ],
      icon: Mail,
      popular: false,
      rating: 4.7,
      userCount: '9K+',
      link: 'https://ziontechgroup.com/email-marketing-pro'
    },
    {
      id: 9,
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform',
      category: 'Finance',
      price: '$179/month',
      users: 'Up to 35 users',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Automated invoice processing and approval workflows',
        'Real-time financial reporting and forecasting',
        'Tax compliance and preparation assistance',
        'Multi-currency support and exchange rate tracking',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs',
        'Mobile app for expense tracking',
        'Advanced security and encryption'
      ],
      icon: TrendingUp,
      popular: false,
      rating: 4.8,
      userCount: '6K+',
      link: 'https://ziontechgroup.com/finance-ai'
    },
    {
      id: 10,
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      category: 'HR',
      price: '$159/month',
      users: 'Up to 100 users',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting',
        'Mobile app for employees and managers',
        'Advanced reporting and analytics'
      ],
      icon: Users,
      popular: false,
      rating: 4.6,
      userCount: '11K+',
      link: 'https://ziontechgroup.com/hr-management'
    },
    {
      id: 11,
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization and optimization',
      category: 'E-commerce',
      price: '$249/month',
      users: 'Up to 50 users',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways',
        'Mobile app for store management',
        'White-label solution available'
      ],
      icon: Globe,
      popular: true,
      rating: 4.9,
      userCount: '14K+',
      link: 'https://ziontechgroup.com/ecommerce-ai'
    },
    {
      id: 12,
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and optimization',
      category: 'Development',
      price: '$189/month',
      users: 'Up to 20 users',
      features: [
        'Drag-and-drop app builder with AI assistance',
        'Cross-platform development (iOS, Android)',
        'AI-powered UI/UX design recommendations',
        'Real-time preview and testing',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API management',
        'White-label app development',
        'Advanced customization options',
        '24/7 technical support'
      ],
      icon: Smartphone,
      popular: false,
      rating: 4.7,
      userCount: '5K+',
      link: 'https://ziontechgroup.com/mobile-app-builder'
    },
    {
      id: 13,
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      category: 'SEO',
      price: '$119/month',
      users: 'Up to 30 users',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console',
        'Mobile app for SEO management',
        'White-label solution available'
      ],
      icon: Target,
      popular: false,
      rating: 4.8,
      userCount: '8K+',
      link: 'https://ziontechgroup.com/seo-optimizer'
    },
    {
      id: 14,
      title: 'Zion Project Manager AI',
      description: 'Intelligent project management with AI-powered resource allocation and risk assessment',
      category: 'Management',
      price: '$139/month',
      users: 'Up to 75 users',
      features: [
        'AI-powered project planning and scheduling',
        'Smart resource allocation and optimization',
        'Risk assessment and mitigation strategies',
        'Team collaboration and communication tools',
        'Advanced reporting and analytics',
        'Integration with major project management tools',
        'Mobile app for project management',
        'Custom workflows and automation',
        'Time tracking and productivity metrics',
        'Advanced security and permissions'
      ],
      icon: Calendar,
      popular: true,
      rating: 4.9,
      userCount: '16K+',
      link: 'https://ziontechgroup.com/project-manager-ai'
    },
    {
      id: 15,
      title: 'Zion Data Studio',
      description: 'Advanced data visualization and analysis platform with AI-powered insights',
      category: 'Analytics',
      price: '$169/month',
      users: 'Up to 40 users',
      features: [
        'Advanced data visualization with 200+ chart types',
        'AI-powered data analysis and insights',
        'Real-time data processing and streaming',
        'Custom dashboard builder with drag-and-drop',
        'Advanced data connectors and APIs',
        'Machine learning model integration',
        'Collaborative data exploration',
        'Mobile app for data access',
        'White-label solution available',
        'Advanced security and compliance'
      ],
      icon: Database,
      popular: false,
      rating: 4.7,
      userCount: '7K+',
      link: 'https://ziontechgroup.com/data-studio'
    },
    {
      id: 16,
      title: 'Zion Social Media AI',
      description: 'AI-powered social media management with content generation and optimization',
      category: 'Marketing',
      price: '$89/month',
      users: 'Up to 25 users',
      features: [
        'AI-powered content generation and optimization',
        'Multi-platform posting and scheduling',
        'Advanced analytics and performance tracking',
        'Hashtag optimization and research',
        'Engagement tracking and sentiment analysis',
        'Team collaboration and approval workflows',
        'Integration with major social platforms',
        'Mobile app for social media management',
        'White-label solution available',
        'Advanced reporting and insights'
      ],
      icon: Globe,
      popular: false,
      rating: 4.6,
      userCount: '12K+',
      link: 'https://ziontechgroup.com/social-media-ai'
    },
    {
      id: 17,
      title: 'Zion Inventory AI',
      description: 'Intelligent inventory management with AI-powered demand forecasting and optimization',
      category: 'Management',
      price: '$149/month',
      users: 'Up to 60 users',
      features: [
        'AI-powered demand forecasting and planning',
        'Automated inventory optimization',
        'Real-time stock level monitoring',
        'Supplier management and procurement',
        'Advanced analytics and reporting',
        'Integration with major ERP systems',
        'Mobile app for inventory management',
        'Multi-location and warehouse support',
        'Advanced security and permissions',
        'Custom workflows and automation'
      ],
      icon: Database,
      popular: false,
      rating: 4.8,
      userCount: '9K+',
      link: 'https://ziontechgroup.com/inventory-ai'
    },
    {
      id: 18,
      title: 'Zion Customer Insights',
      description: 'Advanced customer analytics and insights platform with AI-powered segmentation',
      category: 'Analytics',
      price: '$199/month',
      users: 'Up to 50 users',
      features: [
        'AI-powered customer segmentation and profiling',
        'Advanced behavioral analytics and tracking',
        'Predictive customer lifetime value modeling',
        'Churn prediction and prevention strategies',
        'Customer journey mapping and optimization',
        'Integration with major CRM platforms',
        'Mobile app for customer insights',
        'White-label solution available',
        'Advanced security and compliance',
        'Custom reporting and dashboards'
      ],
      icon: Users,
      popular: true,
      rating: 4.9,
      userCount: '13K+',
      link: 'https://ziontechgroup.com/customer-insights'
    },
    {
      id: 19,
      title: 'Zion API Gateway',
      description: 'Enterprise API management platform with AI-powered monitoring and optimization',
      category: 'Development',
      price: '$179/month',
      users: 'Up to 100 users',
      features: [
        'Advanced API gateway and management',
        'AI-powered API monitoring and optimization',
        'Rate limiting and throttling controls',
        'API security and authentication',
        'Developer portal and documentation',
        'API analytics and performance metrics',
        'Integration with major cloud platforms',
        'Mobile app for API management',
        'White-label solution available',
        'Advanced security and compliance'
      ],
      icon: Code,
      popular: false,
      rating: 4.7,
      userCount: '6K+',
      link: 'https://ziontechgroup.com/api-gateway'
    },
    {
      id: 20,
      title: 'Zion Document AI',
      description: 'AI-powered document processing and management platform with intelligent extraction',
      category: 'AI Tools',
      price: '$129/month',
      users: 'Up to 40 users',
      features: [
        'AI-powered document processing and extraction',
        'Intelligent document classification and routing',
        'Advanced OCR and text recognition',
        'Document workflow automation',
        'Integration with major document management systems',
        'Mobile app for document access',
        'Advanced security and encryption',
        'Custom workflow and automation',
        'White-label solution available',
        'Advanced analytics and reporting'
      ],
      icon: FileText,
      popular: false,
      rating: 4.8,
      userCount: '10K+',
      link: 'https://ziontechgroup.com/document-ai'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'AI Tools', name: 'AI Tools' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Communication', name: 'Communication' },
    { id: 'Security', name: 'Security' },
    { id: 'Storage', name: 'Storage' },
    { id: 'Monitoring', name: 'Monitoring' },
    { id: 'AI', name: 'AI Automation' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'Finance', name: 'Finance' },
    { id: 'HR', name: 'HR Management' },
    { id: 'E-commerce', name: 'E-commerce' },
    { id: 'Development', name: 'Development' },
    { id: 'SEO', name: 'SEO' },
    { id: 'Management', name: 'Management' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and comprehensive onboarding'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and SOC2 compliance'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results and automation'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime with our global cloud infrastructure'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : microSaasProducts.filter(product => 
        product.category === selectedCategory && (
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 20+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 20+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs with competitive pricing." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-cyan-400">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused tools that solve specific business problems. 
            Our micro SaaS products are designed to deliver maximum value with minimal complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-300">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 relative ${
                product.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {product.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {product.users}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{product.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {product.features.length > 5 && (
                    <li className="text-gray-400 text-sm">
                      +{product.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={product.link}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 text-center block ${
                      product.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                    }`}
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="/contact"
                    className="w-full py-2 px-6 rounded-lg font-medium text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose any of our micro SaaS products and start your free trial today. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;