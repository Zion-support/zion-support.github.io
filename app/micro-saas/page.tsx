'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Mail, 
  DollarSign, 
  Box, 
  Target, 
  Globe, 
  Settings, 
  Smartphone, 
  Cloud, 
  Lock, 
  Code, 
  Palette, 
  Headphones, 
  MapPin, 
  Phone,
  Brain,
  Cpu,
  Database,
  Server,
  Network,
  Workflow,
  Calendar,
  CreditCard,
  ShoppingCart,
  Search,
  Filter,
  Eye,
  Download,
  Upload,
  Share2,
  Bell,
  Heart,
  ThumbsUp,
  Award,
  Rocket,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  benefits: string[];
  marketPrice: string;
  setupTime: string;
  freeTrial: string;
  support: string;
  integrations: string[];
  useCases: string[];
}

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive forecasting',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available',
        'Advanced filtering and segmentation',
        'Mobile-responsive dashboards'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics',
      benefits: ['Save 15 hours/week on reporting', 'Increase data accuracy by 95%', 'Reduce decision time by 60%', 'ROI tracking and optimization'],
      marketPrice: '$200-500/month',
      setupTime: '5 minutes',
      freeTrial: '14 days',
      support: '24/7 chat & email',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify', 'Zapier', 'Slack', 'Microsoft Teams'],
      useCases: ['E-commerce analytics', 'Marketing performance', 'Sales forecasting', 'Financial reporting', 'Customer insights']
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification',
        'Custom knowledge base management',
        'Voice and video call integration'
      ],
      price: '$149/month',
      originalPrice: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant response time', 'Improve customer satisfaction by 40%'],
      marketPrice: '$300-800/month',
      setupTime: '10 minutes',
      freeTrial: '30 days',
      support: '24/7 phone & chat',
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger', 'Telegram'],
      useCases: ['Customer support', 'Lead qualification', 'FAQ automation', 'Order tracking', 'Technical support']
    },
    {
      id: '3',
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, and compliance management',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support',
        'Advanced firewall management',
        'Encrypted data storage and transmission'
      ],
      price: '$299/month',
      originalPrice: '$499/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security',
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce security incidents by 85%', 'Compliance assurance', '24/7 protection'],
      marketPrice: '$500-2000/month',
      setupTime: '30 minutes',
      freeTrial: '7 days',
      support: '24/7 phone & email',
      integrations: ['Active Directory', 'Okta', 'Google Workspace', 'Microsoft 365', 'AWS', 'Azure', 'Slack', 'Jira'],
      useCases: ['Threat monitoring', 'Compliance management', 'Incident response', 'Security training', 'Risk assessment']
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization and cross-cloud synchronization',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access',
        'Real-time sync across devices',
        'Advanced search and file organization'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage',
      benefits: ['99.99% data availability', 'Reduce storage costs by 40%', 'Instant recovery', 'Zero data loss guarantee'],
      marketPrice: '$150-400/month',
      setupTime: '5 minutes',
      freeTrial: '30 days',
      support: '24/7 email & chat',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'OneDrive', 'Dropbox', 'Box', 'Slack', 'Microsoft Teams'],
      useCases: ['Data backup', 'Disaster recovery', 'File sharing', 'Compliance storage', 'Team collaboration']
    },
    {
      id: '5',
      icon: TrendingUp,
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations and real-time insights',
      features: [
        'Real-time APM with distributed tracing',
        'AI-powered performance anomaly detection',
        'Automated optimization recommendations',
        'Error tracking and crash reporting',
        'Uptime monitoring with global checkpoints',
        'Performance budget tracking and alerts',
        'Custom metrics and business KPIs',
        'Integration with CI/CD pipelines',
        'Advanced alerting and notification system',
        'Performance regression detection'
      ],
      price: '$129/month',
      originalPrice: '$199/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring',
      benefits: ['Improve performance by 50%', 'Reduce downtime by 80%', 'Faster issue resolution', 'Better user experience'],
      marketPrice: '$200-600/month',
      setupTime: '10 minutes',
      freeTrial: '14 days',
      support: '24/7 chat & email',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub', 'GitLab'],
      useCases: ['Web app monitoring', 'API performance', 'Database optimization', 'Infrastructure monitoring', 'User experience tracking']
    },
    {
      id: '6',
      icon: Workflow,
      title: 'Zion Workflow AI',
      description: 'Intelligent process automation with AI-powered workflow optimization and smart task management',
      features: [
        'AI-powered workflow design and optimization',
        'Smart task assignment and prioritization',
        'Automated approval processes',
        'Integration with 500+ business tools',
        'Custom workflow templates and library',
        'Advanced analytics and performance metrics',
        'Mobile app for workflow management',
        'Role-based access control',
        'Automated notifications and reminders',
        'Workflow testing and validation tools'
      ],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Automation',
      benefits: ['Increase productivity by 70%', 'Reduce manual work by 80%', 'Faster process completion', 'Better team coordination'],
      marketPrice: '$300-1000/month',
      setupTime: '15 minutes',
      freeTrial: '21 days',
      support: '24/7 chat & email',
      integrations: ['Slack', 'Microsoft Teams', 'Salesforce', 'HubSpot', 'Zapier', 'Jira', 'Trello', 'Asana'],
      useCases: ['HR processes', 'Sales workflows', 'Marketing automation', 'Customer onboarding', 'Project management']
    },
    {
      id: '7',
      icon: Mail,
      title: 'Zion Email Pro',
      description: 'Advanced email marketing automation with AI-powered personalization and advanced analytics',
      features: [
        'AI-powered email content generation',
        'Advanced segmentation and targeting',
        'A/B testing with statistical significance',
        'Automated drip campaigns and sequences',
        'Advanced analytics and ROI tracking',
        'Email template builder with AI assistance',
        'Deliverability optimization',
        'Advanced personalization engine',
        'Integration with major e-commerce platforms',
        'Compliance and GDPR management'
      ],
      price: '$69/month',
      originalPrice: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing',
      benefits: ['Increase open rates by 35%', 'Boost click-through rates by 50%', 'Reduce unsubscribe rates', 'Better ROI tracking'],
      marketPrice: '$100-300/month',
      setupTime: '10 minutes',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Zapier', 'Stripe', 'PayPal', 'Facebook Ads'],
      useCases: ['Email marketing', 'Newsletter campaigns', 'Customer retention', 'Lead nurturing', 'E-commerce automation']
    },
    {
      id: '8',
      icon: Globe,
      title: 'Zion Social Manager',
      description: 'Complete social media management with AI content generation, scheduling, and advanced analytics',
      features: [
        'AI-powered content generation for all platforms',
        'Multi-platform posting (Facebook, Instagram, Twitter, LinkedIn)',
        'Advanced scheduling and automation',
        'Social media analytics and insights',
        'Hashtag optimization and research',
        'Engagement tracking and response management',
        'Team collaboration and approval workflows',
        'Brand monitoring and reputation management',
        'Influencer collaboration tools',
        'Social listening and sentiment analysis'
      ],
      price: '$59/month',
      originalPrice: '$89/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Social Media',
      benefits: ['Save 10 hours/week on social media', 'Increase engagement by 60%', 'Better brand consistency', 'Improved reach'],
      marketPrice: '$100-400/month',
      setupTime: '5 minutes',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest', 'Hootsuite'],
      useCases: ['Social media marketing', 'Brand management', 'Content creation', 'Community management', 'Influencer marketing']
    },
    {
      id: '9',
      icon: DollarSign,
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform with AI-powered insights',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Automated invoice processing and approval workflows',
        'Real-time financial reporting and forecasting',
        'Tax compliance and preparation assistance',
        'Multi-currency support and exchange rate tracking',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs',
        'Automated budget tracking and alerts',
        'Advanced financial analytics and insights'
      ],
      price: '$179/month',
      originalPrice: '$249/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Finance',
      benefits: ['Reduce accounting time by 70%', 'Improve accuracy by 95%', 'Faster financial reporting', 'Better cash flow management'],
      marketPrice: '$300-800/month',
      setupTime: '20 minutes',
      freeTrial: '30 days',
      support: '24/7 phone & email',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Bank APIs', 'Tax software', 'Excel', 'Google Sheets'],
      useCases: ['Accounting automation', 'Expense management', 'Financial reporting', 'Tax preparation', 'Budget planning']
    },
    {
      id: '10',
      icon: Users,
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting',
        'Advanced HR analytics and insights',
        'Mobile app for employees and managers'
      ],
      price: '$159/month',
      originalPrice: '$199/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR',
      benefits: ['Reduce HR admin time by 60%', 'Improve employee satisfaction', 'Better compliance management', 'Streamlined processes'],
      marketPrice: '$250-600/month',
      setupTime: '30 minutes',
      freeTrial: '30 days',
      support: '24/7 phone & email',
      integrations: ['ADP', 'Workday', 'BambooHR', 'Slack', 'Microsoft Teams', 'Zoom', 'Google Workspace', 'Office 365'],
      useCases: ['Recruitment', 'Employee management', 'Performance reviews', 'Time tracking', 'Benefits administration']
    },
    {
      id: '11',
      icon: ShoppingCart,
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization and optimization features',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways',
        'AI-powered customer service',
        'Advanced SEO optimization'
      ],
      price: '$249/month',
      originalPrice: '$349/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'E-commerce',
      benefits: ['Increase sales by 40%', 'Reduce cart abandonment by 30%', 'Better customer experience', 'Optimized pricing'],
      marketPrice: '$400-1200/month',
      setupTime: '45 minutes',
      freeTrial: '30 days',
      support: '24/7 phone & chat',
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Square', 'Amazon', 'eBay'],
      useCases: ['Online store management', 'Product recommendations', 'Inventory optimization', 'Customer analytics', 'Marketing automation']
    },
    {
      id: '12',
      icon: Smartphone,
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and optimization',
      features: [
        'Drag-and-drop app builder with AI assistance',
        'Cross-platform development (iOS, Android)',
        'AI-powered UI/UX design recommendations',
        'Real-time preview and testing',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API management',
        'White-label app development',
        'Advanced app analytics',
        'Custom branding and theming'
      ],
      price: '$189/month',
      originalPrice: '$299/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      benefits: ['Build apps 10x faster', 'No coding required', 'Professional results', 'Cost-effective development'],
      marketPrice: '$300-2000/month',
      setupTime: '60 minutes',
      freeTrial: '14 days',
      support: '24/7 chat & email',
      integrations: ['REST APIs', 'GraphQL', 'Firebase', 'AWS', 'Stripe', 'PayPal', 'Google Maps', 'Facebook SDK'],
      useCases: ['Business apps', 'E-commerce apps', 'Customer portals', 'Internal tools', 'Marketing apps']
    },
    {
      id: '13',
      icon: Search,
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console',
        'Advanced SEO analytics and insights',
        'Automated SEO reporting'
      ],
      price: '$119/month',
      originalPrice: '$179/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'SEO',
      benefits: ['Increase organic traffic by 50%', 'Improve search rankings', 'Better content optimization', 'Competitive advantage'],
      marketPrice: '$200-500/month',
      setupTime: '10 minutes',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify', 'WooCommerce', 'Squarespace', 'Wix'],
      useCases: ['Website optimization', 'Content marketing', 'Local SEO', 'E-commerce SEO', 'Competitive analysis']
    },
    {
      id: '14',
      icon: Calendar,
      title: 'Zion Scheduling Pro',
      description: 'Advanced appointment scheduling with AI-powered optimization and multi-calendar management',
      features: [
        'AI-powered scheduling optimization',
        'Multi-calendar integration and sync',
        'Automated appointment reminders',
        'Custom booking forms and workflows',
        'Payment processing integration',
        'Video conferencing integration',
        'Team scheduling and resource management',
        'Advanced analytics and reporting',
        'Mobile app for clients and staff',
        'Custom branding and white-labeling'
      ],
      price: '$79/month',
      originalPrice: '$119/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Scheduling',
      benefits: ['Reduce no-shows by 40%', 'Save 5 hours/week on scheduling', 'Better client experience', 'Automated reminders'],
      marketPrice: '$100-300/month',
      setupTime: '5 minutes',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams', 'Stripe', 'PayPal', 'Slack', 'WhatsApp'],
      useCases: ['Appointment booking', 'Service scheduling', 'Team meetings', 'Client consultations', 'Resource booking']
    },
    {
      id: '15',
      icon: FileText,
      title: 'Zion Document AI',
      description: 'AI-powered document processing and management with advanced OCR and workflow automation',
      features: [
        'Advanced OCR and document recognition',
        'AI-powered document classification',
        'Automated data extraction and validation',
        'Document workflow automation',
        'Advanced search and indexing',
        'Version control and collaboration',
        'Compliance and audit trails',
        'Integration with business systems',
        'Mobile document capture',
        'Advanced security and encryption'
      ],
      price: '$149/month',
      originalPrice: '$199/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Document Management',
      benefits: ['Process documents 80% faster', 'Reduce errors by 90%', 'Better organization', 'Automated workflows'],
      marketPrice: '$200-600/month',
      setupTime: '15 minutes',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      integrations: ['Google Drive', 'Dropbox', 'OneDrive', 'Salesforce', 'HubSpot', 'Zapier', 'Slack', 'Microsoft Teams'],
      useCases: ['Invoice processing', 'Contract management', 'Document digitization', 'Compliance management', 'Knowledge management']
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'Automation', 'Marketing', 'Finance', 'HR', 'E-commerce', 'Development', 'SEO', 'Scheduling', 'Document Management', 'Social Media'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace('/month', '')) - parseInt(b.price.replace('$', '').replace('/month', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace('/month', '')) - parseInt(a.price.replace('$', '').replace('/month', ''));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-500" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  const benefits = [
    'Quick setup and deployment',
    'Scalable pricing plans',
    '24/7 customer support',
    'Regular feature updates',
    'Secure and reliable',
    'Easy integration',
    'Free trials available',
    'No long-term contracts'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Free trials available." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, email marketing, social media management" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">SaaS</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Quick setup, affordable pricing, powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    <option value="popular" className="bg-slate-800">Most Popular</option>
                    <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                    <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                    <option value="name" className="bg-slate-800">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative cyber-card group hover:scale-105 transition-all duration-300 ${
                    product.popular ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25' : 'border-white/20'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div>
                          <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through ml-2">{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-400">
                          <Users className="w-4 h-4 inline mr-1" />
                          {product.users}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-cyan-400 font-medium">{product.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Free Trial:</span>
                        <span className="text-green-400 font-medium">{product.freeTrial}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Support:</span>
                        <span className="text-cyan-400 font-medium">{product.support}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {product.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 5 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{product.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    <div className="space-y-3">
                      <Link
                        to="/contact"
                        className="w-full cyber-button text-center py-3 block"
                      >
                        Start Free Trial
                      </Link>
                      <Link
                        to={`/micro-saas/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  View All Plans
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📞 Call: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
                </p>
                <p className="text-gray-300 text-sm">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </React.Fragment>
  );
};

export default MicroSaasPage;