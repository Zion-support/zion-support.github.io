'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Brain,
  Shield,
  BarChart3,
  Smartphone,
  Mail,
  Code,
  Users,
  Calendar,
  FileText,
  Settings,
  Globe,
  CreditCard,
  Target,
  TrendingUp,
  Lock,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Machine Learning Tools
    {
      icon: Brain,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and custom dashboards for data-driven decisions.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', '100+ integrations', 'AI insights'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'AI & ML',
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'AI scoring', 'Pipeline management'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'AI & ML',
      popular: true,
      link: 'https://ziontechgroup.com/ai-crm'
    },
    {
      icon: Code,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      features: ['AI Writing', 'Image Generation', 'Video Editing', 'Social Media Automation', 'SEO Optimization', '50+ Templates'],
      price: '$299/month',
      users: 'Up to 25 users',
      category: 'AI & ML',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-studio'
    },
    {
      icon: Users,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      features: ['No-code Builder', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training', 'Live Chat'],
      price: '$99/month',
      users: 'Unlimited',
      category: 'AI & ML',
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: ['AI Optimization', 'Personalization', 'A/B Testing', 'Advanced Analytics', 'Automation Workflows', 'Template Library'],
      price: '$179/month',
      users: 'Up to 10,000 contacts',
      category: 'AI & ML',
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.',
      features: ['Drag-and-drop Builder', 'AI Code Generation', 'Instant Deployment', 'Cross-platform', 'App Store Publishing', 'Push Notifications'],
      price: '$399/month',
      users: 'Unlimited',
      category: 'AI & ML',
      link: 'https://ziontechgroup.com/ai-mobile-builder'
    },
    {
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'AI Recommendations'],
      price: '$129/month',
      users: 'Up to 5 websites',
      category: 'AI & ML',
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      icon: BarChart3,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.',
      features: ['Automated Invoicing', 'Payment Tracking', 'Financial Reports', 'Tax Calculations', 'Client Portal', 'Recurring Billing'],
      price: '$79/month',
      users: 'Unlimited',
      category: 'AI & ML',
      link: 'https://ziontechgroup.com/ai-invoice-generator'
    },
    {
      icon: Code,
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.',
      features: ['50+ Templates', 'Multi-language Support', 'Plagiarism Check', 'SEO Optimization', 'Tone Adjustment', 'Grammar Check'],
      price: '$29/month',
      users: 'Up to 5 users',
      category: 'AI & ML',
      link: 'https://ziontechgroup.com/ai-writing-assistant'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting.',
      features: ['Real-time Analytics', 'Predictive Forecasting', 'Automated Reports', 'Custom Metrics', 'Data Integration', 'Alert System'],
      price: '$49/month',
      users: 'Up to 20 users',
      category: 'AI & ML',
      link: 'https://ziontechgroup.com/smart-analytics'
    },

    // Productivity & Business Tools
    {
      icon: Calendar,
      title: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management.',
      features: ['Calendar Optimization', 'Meeting Coordination', 'Time Management', 'Auto-scheduling', 'Integration APIs', 'Time Zone Support'],
      price: '$19/month',
      users: 'Up to 10 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/ai-scheduler'
    },
    {
      icon: BarChart3,
      title: 'Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Insights', 'Tax Preparation', 'Multi-currency', 'Mobile App'],
      price: '$15/month',
      users: 'Up to 5 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/expense-tracker'
    },
    {
      icon: CheckCircle,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking.',
      features: ['AI Prioritization', 'Team Collaboration', 'Progress Tracking', 'Time Tracking', 'Project Templates', 'Gantt Charts'],
      price: '$39/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/task-manager-pro'
    },
    {
      icon: Users,
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.',
      features: ['AI Lead Scoring', 'Contact Management', 'Sales Pipeline', 'Email Integration', 'Mobile App', 'Custom Fields'],
      price: '$59/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/crm-lite'
    },
    {
      icon: Mail,
      title: 'Email Optimizer',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.',
      features: ['Subject Line AI', 'Send Time Optimization', 'A/B Testing', 'Open Rate Tracking', 'Spam Analysis', 'Template Library'],
      price: '$25/month',
      users: 'Up to 3 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/email-optimizer'
    },
    {
      icon: Globe,
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics.',
      features: ['Content Creation', 'Auto-scheduling', 'Performance Analytics', 'Multi-platform', 'Engagement Tracking', 'Hashtag Research'],
      price: '$45/month',
      users: 'Up to 5 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/social-media-manager'
    },

    // Marketing & Sales Tools
    {
      icon: Code,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools.',
      features: ['AI Design Tools', 'Logo Generation', 'Marketing Materials', 'Brand Kit', 'Template Library', 'Vector Graphics'],
      price: '$35/month',
      users: 'Up to 10 users',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ai-design-studio'
    },
    {
      icon: Globe,
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities.',
      features: ['Drag-and-drop Builder', 'AI Optimization', 'A/B Testing', 'Conversion Tracking', 'Mobile Responsive', 'Template Library'],
      price: '$29/month',
      users: 'Up to 5 websites',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/landing-page-builder'
    },
    {
      icon: Search,
      title: 'SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions.',
      features: ['SEO Analysis', 'Keyword Research', 'Content Suggestions', 'Ranking Tracking', 'Technical Audits', 'Competitor Analysis'],
      price: '$49/month',
      users: 'Up to 3 websites',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/seo-optimizer'
    },
    {
      icon: BarChart3,
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.',
      features: ['Multi-platform Ads', 'AI Optimization', 'Budget Management', 'Performance Tracking', 'Auto-bidding', 'A/B Testing'],
      price: '$79/month',
      users: 'Up to 5 campaigns',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ad-campaign-manager'
    },
    {
      icon: Target,
      title: 'Lead Generation Pro',
      description: 'AI-powered lead generation with prospecting, email sequences, and automated follow-ups.',
      features: ['AI Prospecting', 'Email Sequences', 'Automated Follow-ups', 'Lead Scoring', 'CRM Integration', 'Data Enrichment'],
      price: '$199/month',
      users: 'Up to 10,000 leads',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/lead-generation-pro'
    },

    // Developer Tools
    {
      icon: Code,
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: ['Code Completion', 'Debugging Help', 'Code Optimization', 'Multi-language Support', 'Documentation', 'Code Review'],
      price: '$39/month',
      users: 'Up to 10 developers',
      category: 'Developer',
      link: 'https://ziontechgroup.com/code-assistant'
    },
    {
      icon: Settings,
      title: 'API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools.',
      features: ['API Creation', 'Documentation Generation', 'Testing Tools', 'Version Control', 'Rate Limiting', 'Authentication'],
      price: '$59/month',
      users: 'Up to 5 APIs',
      category: 'Developer',
      link: 'https://ziontechgroup.com/api-builder'
    },
    {
      icon: Shield,
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      features: ['AI Issue Detection', 'Priority Scoring', 'Resolution Suggestions', 'Team Collaboration', 'Integration APIs', 'Custom Workflows'],
      price: '$25/month',
      users: 'Up to 15 users',
      category: 'Developer',
      link: 'https://ziontechgroup.com/bug-tracker-pro'
    },
    {
      icon: FileText,
      title: 'Doc Generator',
      description: 'Automatically generate technical documentation, API docs, and user guides from code.',
      features: ['Auto Documentation', 'API Docs', 'User Guides', 'Code Comments', 'Multiple Formats', 'Version Control'],
      price: '$19/month',
      users: 'Up to 10 projects',
      category: 'Developer',
      link: 'https://ziontechgroup.com/doc-generator'
    },

    // Specialized Industry Tools
    {
      icon: Users,
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling.',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Background Checks', 'ATS Integration'],
      price: '$199/month',
      users: 'Up to 50 positions',
      category: 'HR & Recruitment',
      link: 'https://ziontechgroup.com/ai-recruitment-assistant'
    },
    {
      icon: Shield,
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis.',
      features: ['HIPAA Compliance', 'Data Extraction', 'Medical Analysis', 'Patient Portal', 'Integration APIs', 'Secure Storage'],
      price: '$299/month',
      users: 'Up to 100 patients',
      category: 'Healthcare',
      link: 'https://ziontechgroup.com/medical-records-manager'
    },
    {
      icon: BarChart3,
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting.',
      features: ['Automated Bookkeeping', 'Tax Preparation', 'Financial Reports', 'Expense Tracking', 'Compliance', 'Bank Integration'],
      price: '$149/month',
      users: 'Up to 5 accountants',
      category: 'Finance',
      link: 'https://ziontechgroup.com/ai-accounting-assistant'
    },
    {
      icon: BarChart3,
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization.',
      features: ['Tenant Screening', 'Maintenance Scheduling', 'Rent Optimization', 'Property Analytics', 'Tenant Portal', 'Payment Processing'],
      price: '$179/month',
      users: 'Up to 100 properties',
      category: 'Real Estate',
      link: 'https://ziontechgroup.com/property-management-ai'
    },
    {
      icon: Shield,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment.',
      features: ['Contract Analysis', 'Compliance Tracking', 'Risk Assessment', 'Document Templates', 'Legal Research', 'Version Control'],
      price: '$249/month',
      users: 'Up to 10 lawyers',
      category: 'Legal',
      link: 'https://ziontechgroup.com/legal-document-manager'
    },
    {
      icon: Users,
      title: 'Online Learning Platform',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking.',
      features: ['Personalized Learning', 'Progress Tracking', 'Course Creation', 'Assessment Tools', 'Certification', 'Video Streaming'],
      price: '$99/month',
      users: 'Up to 500 students',
      category: 'Education',
      link: 'https://ziontechgroup.com/online-learning-platform'
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management.',
      features: ['Demand Forecasting', 'Inventory Management', 'Supplier Analytics', 'Risk Assessment', 'Cost Optimization', 'Real-time Tracking'],
      price: '$399/month',
      users: 'Up to 50 suppliers',
      category: 'Supply Chain',
      link: 'https://ziontechgroup.com/supply-chain-optimizer'
    },

    // Security & Compliance
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses.',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Reporting', '24/7 Monitoring', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      link: 'https://ziontechgroup.com/security-monitoring-suite'
    },
    {
      icon: Lock,
      title: 'Compliance Manager',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Trails', 'Risk Assessment', 'Documentation'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'Security',
      link: 'https://ziontechgroup.com/compliance-manager'
    },
    {
      icon: Shield,
      title: 'Data Privacy Manager',
      description: 'Comprehensive data privacy management with consent tracking and data subject rights automation.',
      features: ['Consent Tracking', 'Data Subject Rights', 'Privacy Impact Assessment', 'Data Mapping', 'Breach Notification', 'Cookie Management'],
      price: '$179/month',
      users: 'Up to 100,000 records',
      category: 'Security',
      link: 'https://ziontechgroup.com/data-privacy-manager'
    },

    // Cloud & Infrastructure
    {
      icon: Globe,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments.',
      features: ['Resource Optimization', 'Cost Tracking', 'Auto-scaling', 'Multi-cloud Support', 'Security Management', 'Backup & Recovery'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'Cloud & Infrastructure',
      link: 'https://ziontechgroup.com/cloud-infrastructure-manager'
    },
    {
      icon: Settings,
      title: 'DevOps Automation',
      description: 'Automated CI/CD pipelines, infrastructure as code, and deployment management.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Deployment Management', 'Monitoring', 'Rollback Capability', 'Multi-environment'],
      price: '$199/month',
      users: 'Up to 20 developers',
      category: 'Cloud & Infrastructure',
      link: 'https://ziontechgroup.com/devops-automation'
    },
    {
      icon: BarChart3,
      title: 'Performance Monitor',
      description: 'Real-time application and infrastructure performance monitoring with AI-powered insights.',
      features: ['Real-time Monitoring', 'Performance Alerts', 'AI Insights', 'Capacity Planning', 'Trend Analysis', 'Custom Dashboards'],
      price: '$149/month',
      users: 'Up to 50 applications',
      category: 'Cloud & Infrastructure',
      link: 'https://ziontechgroup.com/performance-monitor'
    },

    // E-commerce & Retail
    {
      icon: CreditCard,
      title: 'E-commerce AI Suite',
      description: 'Complete AI-powered e-commerce solution with personalization, inventory management, and analytics.',
      features: ['Product Recommendations', 'Inventory Management', 'Price Optimization', 'Customer Analytics', 'Fraud Detection', 'Multi-channel'],
      price: '$399/month',
      users: 'Up to 10,000 products',
      category: 'E-commerce',
      link: 'https://ziontechgroup.com/ecommerce-ai-suite'
    },
    {
      icon: Target,
      title: 'Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Supplier Management', 'Cost Analysis', 'Multi-location'],
      price: '$199/month',
      users: 'Up to 1,000 SKUs',
      category: 'E-commerce',
      link: 'https://ziontechgroup.com/inventory-optimizer'
    },
    {
      icon: Users,
      title: 'Customer Service AI',
      description: 'AI-powered customer service with chatbots, ticket routing, and sentiment analysis.',
      features: ['AI Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Knowledge Base', 'Multi-language', 'Integration APIs'],
      price: '$149/month',
      users: 'Unlimited tickets',
      category: 'E-commerce',
      link: 'https://ziontechgroup.com/customer-service-ai'
    }
  ];

  const categories = [
    'All',
    'AI & ML',
    'Productivity',
    'Marketing',
    'Developer',
    'HR & Recruitment',
    'Healthcare',
    'Finance',
    'Real Estate',
    'Legal',
    'Education',
    'Supply Chain',
    'Security',
    'Cloud & Infrastructure',
    'E-commerce'
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration',
    'Free trials available',
    'Cancel anytime',
    'Enterprise security',
    'API access included'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover 50+ powerful micro SAAS solutions powered by AI. From productivity tools to marketing automation, find the perfect business solution for your needs." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, productivity software, marketing automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto font-medium cyber-glow neon-text">
              50+ AI-Powered Business Tools for Modern Entrepreneurs
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of micro SAAS solutions. 
              From AI-powered analytics to automated marketing tools, we have everything you need to scale your business efficiently.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Micro SAAS Tools</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Free</div>
                <div className="text-sm text-gray-300">Trial Period</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative cyber-card hologram-card">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Try Free
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center cyber-card hologram-card p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse" />
              <div className="relative">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Choose the micro SaaS solution that fits your business needs. 
                  Start with a free trial and scale as you grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Start Free Trial</span>
                  </Link>
                  <Link
                    to="/pricing"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                  >
                    View All Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
