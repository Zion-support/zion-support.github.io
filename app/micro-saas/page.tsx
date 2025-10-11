'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  MessageCircle, 
  Shield, 
  Cloud, 
  FileText, 
  Users, 
  Database, 
  Target, 
  Calendar, 
  Mail, 
  Package, 
  DollarSign, 
  Settings, 
  Monitor, 
  CheckSquare, 
  Globe, 
  Eye, 
  Code, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  TrendingUp,
  Brain,
  Cpu,
  Smartphone,
  Search,
  Filter,
  Phone,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence platform with AI-powered insights, custom dashboards, and automated reporting.',
      category: 'analytics',
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
        '50+ data source integrations',
        'White-label options available'
      ],
      popular: true,
      icon: BarChart,
      rating: 4.9,
      users: '2,500+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      category: 'customer-service',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 Powered AI',
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
        'Reduce response time by 80%',
        'Improve customer satisfaction',
        'Lead generation automation',
        'Multi-language support',
        'Seamless CRM integration'
      ],
      popular: true,
      icon: MessageCircle,
      rating: 4.8,
      users: '1,800+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection with AI-powered security analytics.',
      category: 'security',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time threat detection',
        'AI-powered security analytics',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance monitoring',
        'Security dashboard',
        'Email security',
        'Network monitoring'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduce security incidents by 90%',
        'Automated threat response',
        'Compliance assurance',
        'Expert security team',
        'Custom security policies'
      ],
      popular: true,
      icon: Shield,
      rating: 4.9,
      users: '1,200+',
      freeTrial: '30 days'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Enterprise-grade cloud backup and disaster recovery solution with AI-powered data management.',
      category: 'cloud',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated cloud backup',
        'Disaster recovery planning',
        'Data encryption',
        'Version control',
        'Cross-platform sync',
        'AI-powered data deduplication',
        'Compliance reporting',
        'Mobile access'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Automated backup scheduling',
        'Data encryption at rest',
        'Quick disaster recovery',
        'Cost-effective storage',
        'Compliance ready'
      ],
      popular: false,
      icon: Cloud,
      rating: 4.7,
      users: '3,200+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'Complete AI-powered content creation suite with writing, image generation, video editing, and social media automation.',
      category: 'content',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'AI content writing',
        'Image generation',
        'Video editing tools',
        'Social media automation',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar',
        'Analytics dashboard'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Professional quality output',
        'Team collaboration tools'
      ],
      popular: true,
      icon: FileText,
      rating: 4.8,
      users: '2,100+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics, lead scoring, and automated workflows.',
      category: 'crm',
      price: '$179/month',
      marketPrice: '$300-800/month',
      features: [
        'AI lead scoring',
        'Predictive analytics',
        'Automated workflows',
        'Contact management',
        'Sales pipeline tracking',
        'Email integration',
        'Custom fields',
        'Mobile app'
      ],
      benefits: [
        'Increase sales by 40%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Seamless integrations',
        'Advanced analytics'
      ],
      popular: true,
      icon: Users,
      rating: 4.9,
      users: '1,500+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Advanced data integration platform with AI-powered data cleaning, transformation, and real-time synchronization.',
      category: 'data',
      price: '$129/month',
      marketPrice: '$250-600/month',
      features: [
        'Real-time data sync',
        'AI data cleaning',
        'Data transformation',
        '100+ integrations',
        'Data quality monitoring',
        'Custom connectors',
        'API management',
        'Data visualization'
      ],
      benefits: [
        'Eliminate data silos',
        'Real-time synchronization',
        'Data quality assurance',
        'Easy integrations',
        'Cost-effective solution',
        'Scalable architecture'
      ],
      popular: false,
      icon: Database,
      rating: 4.6,
      users: '2,800+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated follow-ups.',
      category: 'marketing',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI lead scoring',
        'Multi-channel capture',
        'Automated nurturing',
        'CRM integration',
        'Advanced analytics',
        'A/B testing',
        'Email sequences',
        'Landing page builder'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Advanced targeting',
        'Comprehensive analytics'
      ],
      popular: true,
      icon: Target,
      rating: 4.8,
      users: '1,900+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management with intelligent task prioritization, resource allocation, and progress tracking.',
      category: 'productivity',
      price: '$89/month',
      marketPrice: '$150-400/month',
      features: [
        'AI task prioritization',
        'Resource allocation',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Gantt charts',
        'Mobile app'
      ],
      benefits: [
        'Increase productivity by 50%',
        'Better resource utilization',
        'Improved project delivery',
        'Team collaboration',
        'Real-time insights',
        'Cost optimization'
      ],
      popular: false,
      icon: Calendar,
      rating: 4.7,
      users: '2,300+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI optimization, personalization, and comprehensive analytics.',
      category: 'marketing',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI email optimization',
        'Personalization engine',
        'Automated sequences',
        'A/B testing',
        'Advanced analytics',
        'List segmentation',
        'Template library',
        'Integration hub'
      ],
      benefits: [
        'Increase open rates by 60%',
        'Automated personalization',
        'Better deliverability',
        'Advanced analytics',
        'Easy campaign management',
        'ROI optimization'
      ],
      popular: true,
      icon: Mail,
      rating: 4.8,
      users: '3,500+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management with AI-powered demand forecasting, automated reordering, and real-time tracking.',
      category: 'inventory',
      price: '$149/month',
      marketPrice: '$250-700/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Real-time tracking',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Analytics dashboard',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Optimize inventory levels',
        'Automated reordering',
        'Cost reduction',
        'Real-time visibility',
        'Better supplier relationships'
      ],
      popular: false,
      icon: Package,
      rating: 4.6,
      users: '1,700+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial reporting.',
      category: 'finance',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI invoice generation',
        'Automated recurring billing',
        'Multi-currency support',
        'Payment tracking',
        'Tax calculation',
        'Client portal',
        'Financial reporting',
        'Mobile app'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices',
        'Financial insights',
        'Easy client management'
      ],
      popular: true,
      icon: DollarSign,
      rating: 4.9,
      users: '4,200+',
      freeTrial: '30 days'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and exception handling.',
      category: 'automation',
      price: '$199/month',
      marketPrice: '$400-1000/month',
      features: [
        'AI workflow optimization',
        'Process mining',
        'Exception handling',
        'Custom workflows',
        'Integration hub',
        'Performance monitoring',
        'User management',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase efficiency by 80%',
        'Reduce manual errors',
        'Process optimization',
        'Cost savings',
        'Scalable automation',
        'Real-time monitoring'
      ],
      popular: true,
      icon: Settings,
      rating: 4.8,
      users: '1,600+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights and automated alerting.',
      category: 'monitoring',
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: [
        'Real-time monitoring',
        'AI-powered insights',
        'Automated alerting',
        'Performance analytics',
        'Uptime tracking',
        'Custom dashboards',
        'API monitoring',
        'Mobile alerts'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Proactive issue detection',
        'Performance optimization',
        'Cost reduction',
        'Real-time insights',
        'Automated responses'
      ],
      popular: false,
      icon: Monitor,
      rating: 4.7,
      users: '2,100+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance management with AI-powered risk assessment and regulatory reporting.',
      category: 'compliance',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'AI risk assessment',
        'Regulatory reporting',
        'Policy management',
        'Audit trails',
        'Compliance monitoring',
        'Document management',
        'Training modules',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce compliance costs by 60%',
        'Automated reporting',
        'Risk mitigation',
        'Audit readiness',
        'Policy enforcement',
        'Regulatory updates'
      ],
      popular: false,
      icon: CheckSquare,
      rating: 4.8,
      users: '800+',
      freeTrial: '30 days'
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content creation, scheduling, and performance analytics.',
      category: 'social-media',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI content creation',
        'Multi-platform scheduling',
        'Performance analytics',
        'Hashtag optimization',
        'Engagement tracking',
        'Content calendar',
        'Team collaboration',
        'Mobile app'
      ],
      benefits: [
        'Increase engagement by 50%',
        'Save 70% content creation time',
        'Better posting times',
        'Performance insights',
        'Multi-platform management',
        'Team collaboration'
      ],
      popular: true,
      icon: Globe,
      rating: 4.7,
      users: '3,800+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-ai-video-editor',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing with automated cutting, effects, and optimization for multiple platforms.',
      category: 'video',
      price: '$199/month',
      marketPrice: '$300-800/month',
      features: [
        'AI video editing',
        'Automated cutting',
        'Smart effects',
        'Multi-format export',
        'Cloud processing',
        'Collaboration tools',
        'Template library',
        'Analytics dashboard'
      ],
      benefits: [
        'Save 80% editing time',
        'Professional quality output',
        'Automated optimization',
        'Multi-platform ready',
        'Cloud-based processing',
        'Easy collaboration'
      ],
      popular: false,
      icon: Eye,
      rating: 4.6,
      users: '1,400+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-ai-translator-pro',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation with context awareness, industry-specific terminology, and real-time translation.',
      category: 'translation',
      price: '$89/month',
      marketPrice: '$150-400/month',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Industry terminology',
        'Real-time translation',
        'Document translation',
        'Voice translation',
        'API integration',
        'Quality assurance'
      ],
      benefits: [
        '99% translation accuracy',
        'Industry-specific terms',
        'Real-time processing',
        'Cost-effective solution',
        'Easy integration',
        'Quality assurance'
      ],
      popular: false,
      icon: Globe,
      rating: 4.8,
      users: '2,600+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review with AI-powered analysis, security scanning, and performance optimization suggestions.',
      category: 'development',
      price: '$149/month',
      marketPrice: '$250-600/month',
      features: [
        'AI code analysis',
        'Security scanning',
        'Performance optimization',
        'Code quality metrics',
        'Automated reviews',
        'Integration support',
        'Team collaboration',
        'Custom rules'
      ],
      benefits: [
        'Improve code quality by 60%',
        'Reduce security vulnerabilities',
        'Automated code reviews',
        'Performance optimization',
        'Team collaboration',
        'Customizable rules'
      ],
      popular: true,
      icon: Code,
      rating: 4.9,
      users: '1,800+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-customer-insights',
      name: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics with AI-powered insights, sentiment analysis, and predictive customer behavior.',
      category: 'analytics',
      price: '$179/month',
      marketPrice: '$300-800/month',
      features: [
        'Customer segmentation',
        'Sentiment analysis',
        'Predictive analytics',
        'Churn prediction',
        'Lifetime value analysis',
        'Behavioral insights',
        'Custom dashboards',
        'API integration'
      ],
      benefits: [
        'Increase customer retention by 40%',
        'Predict customer behavior',
        'Optimize customer experience',
        'Data-driven insights',
        'Automated reporting',
        'ROI optimization'
      ],
      popular: true,
      icon: Users,
      rating: 4.8,
      users: '1,300+',
      freeTrial: '14 days'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'customer-service').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'cloud', name: 'Cloud', count: microSaasServices.filter(s => s.category === 'cloud').length },
    { id: 'content', name: 'Content', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'crm', name: 'CRM', count: microSaasServices.filter(s => s.category === 'crm').length },
    { id: 'data', name: 'Data', count: microSaasServices.filter(s => s.category === 'data').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'inventory', name: 'Inventory', count: microSaasServices.filter(s => s.category === 'inventory').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'automation', name: 'Automation', count: microSaasServices.filter(s => s.category === 'automation').length },
    { id: 'monitoring', name: 'Monitoring', count: microSaasServices.filter(s => s.category === 'monitoring').length },
    { id: 'compliance', name: 'Compliance', count: microSaasServices.filter(s => s.category === 'compliance').length },
    { id: 'social-media', name: 'Social Media', count: microSaasServices.filter(s => s.category === 'social-media').length },
    { id: 'video', name: 'Video', count: microSaasServices.filter(s => s.category === 'video').length },
    { id: 'translation', name: 'Translation', count: microSaasServices.filter(s => s.category === 'translation').length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace('/month', '')) - parseInt(b.price.replace('$', '').replace('/month', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace('/month', '')) - parseInt(a.price.replace('$', '').replace('/month', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return parseInt(b.users.replace(',', '').replace('+', '')) - parseInt(a.users.replace(',', '').replace('+', ''));
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI-powered micro SAAS solutions designed to transform your business operations with affordable, scalable tools." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, productivity, analytics, CRM, marketing automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS <span className="text-cyan-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Powerful, affordable AI-driven tools for modern businesses. 20+ ready-to-use applications 
              that transform your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm">Micro SAAS Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">4.8/5</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="users">Most Users</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <div key={service.id} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-sm text-gray-300">{service.users} users</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">{service.freeTrial} free trial</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">+{service.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-green-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 50,000+ businesses that have already transformed their operations with our micro SAAS solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ No obligation • ✓ 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;