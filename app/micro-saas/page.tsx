'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 12;

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced real-time business intelligence with predictive analytics, custom dashboards, and automated insights for data-driven decision making',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Data visualization', 'Automated alerts', 'ROI tracking'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '👥',
      title: 'AI-Powered CRM Enterprise',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and advanced sales forecasting',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Pipeline management', 'Customer insights', 'Team collaboration'],
      price: '$299/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'CRM'
    },
    {
      id: '3',
      icon: '🔒',
      title: 'AI Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring with AI-powered threat detection, vulnerability assessment, and automated incident response',
      features: ['AI threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security analytics', 'Threat intelligence', 'Automated remediation'],
      price: '$399/month',
      users: 'Up to 1000 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Infrastructure Manager Pro',
      description: 'Advanced cloud resource management with AI optimization, cost tracking, and automated scaling across multiple cloud providers',
      features: ['AI resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management', 'Performance monitoring', 'Security compliance', 'Disaster recovery'],
      price: '$599/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: '📧',
      title: 'AI Email Marketing Automation Pro',
      description: 'Advanced AI-driven email campaigns with machine learning optimization, advanced segmentation, and personalized content generation',
      features: ['AI content generation', 'A/B testing', 'Advanced segmentation', 'Predictive analytics', 'Integration tools', 'Automation workflows', 'Performance optimization', 'Multi-channel campaigns'],
      price: '$179/month',
      users: 'Up to 100,000 contacts',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: '💬',
      title: 'AI Customer Support Chatbot Pro',
      description: 'Advanced intelligent chatbot solution with natural language processing, multi-channel support, and seamless human handoff',
      features: ['Advanced NLP', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training', 'Sentiment analysis', 'Human handoff', 'Voice integration'],
      price: '$249/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'
    },
    {
      id: '7',
      icon: '🤖',
      title: 'AI Content Studio Pro',
      description: 'Complete AI-powered content creation suite with writing, image generation, video editing, and social media automation',
      features: ['AI writing', 'Image generation', 'Video editing', 'Social media automation', 'SEO optimization', 'Brand voice training', 'Content calendar', 'Performance analytics'],
      price: '$399/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '8',
      icon: '📱',
      title: 'AI Mobile App Builder Pro',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment to app stores',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform', 'App store publishing', 'Push notifications', 'Analytics integration', 'Custom branding'],
      price: '$599/month',
      users: 'Unlimited apps',
      popular: false,
      category: 'Development'
    },
    {
      id: '9',
      icon: '🔍',
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO analysis with AI-powered keyword research, content optimization, and ranking tracking with competitive intelligence',
      features: ['AI keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO', 'Schema markup', 'Performance monitoring'],
      price: '$199/month',
      users: 'Up to 25 websites',
      popular: true,
      category: 'SEO'
    },
    {
      id: '10',
      icon: '💰',
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered insights, payment tracking, and comprehensive financial reporting',
      features: ['Automated invoicing', 'Payment tracking', 'Financial reports', 'Tax calculations', 'Client portal', 'Recurring billing', 'Multi-currency', 'Expense tracking'],
      price: '$149/month',
      users: 'Up to 1000 invoices/month',
      popular: false,
      category: 'Finance'
    },
    {
      id: '11',
      icon: '✍️',
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI writing tool with 100+ templates, multi-language support, and brand voice customization',
      features: ['100+ templates', 'Multi-language support', 'Plagiarism check', 'SEO optimization', 'Brand voice training', 'Content planning', 'Collaboration tools', 'Performance analytics'],
      price: '$79/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Productivity'
    },
    {
      id: '12',
      icon: '📈',
      title: 'Smart Analytics Pro',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting for data-driven decisions',
      features: ['Real-time analytics', 'Predictive forecasting', 'Automated reports', 'Custom metrics', 'Data integration', 'Alert system', 'ROI tracking', 'Benchmarking'],
      price: '$99/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: '13',
      icon: '📅',
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and automated time management',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs', 'Conflict resolution', 'Time zone handling', 'Reminder system'],
      price: '$49/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Productivity'
    },
    {
      id: '14',
      icon: '💳',
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management with receipt scanning, automatic categorization, and budget insights',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget insights', 'Tax preparation', 'Multi-currency', 'Expense approval', 'Reporting', 'Mobile app'],
      price: '$39/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '15',
      icon: '✅',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Project templates', 'Gantt charts', 'Resource management', 'Integration APIs'],
      price: '$79/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'Productivity'
    },
    {
      id: '16',
      icon: '👥',
      title: 'CRM Lite Pro',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation',
      features: ['AI lead scoring', 'Contact management', 'Sales pipeline', 'Email integration', 'Mobile app', 'Custom fields', 'Reporting', 'Integration APIs'],
      price: '$119/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '17',
      icon: '📧',
      title: 'Email Optimizer Pro',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing',
      features: ['Subject line AI', 'Send time optimization', 'A/B testing', 'Open rate tracking', 'Spam analysis', 'Content optimization', 'List segmentation', 'Performance analytics'],
      price: '$59/month',
      users: 'Up to 50,000 emails/month',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '18',
      icon: '📱',
      title: 'Social Media Manager Pro',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      features: ['AI content creation', 'Auto-scheduling', 'Performance analytics', 'Multi-platform', 'Engagement tracking', 'Hashtag optimization', 'Influencer outreach', 'Competitor analysis'],
      price: '$89/month',
      users: 'Up to 20 accounts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '19',
      icon: '🎨',
      title: 'AI Design Studio Pro',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools and brand consistency',
      features: ['AI design tools', 'Logo generation', 'Marketing materials', 'Brand kit', 'Template library', 'Color palette generator', 'Font matching', 'Export options'],
      price: '$69/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Design'
    },
    {
      id: '20',
      icon: '🌐',
      title: 'Landing Page Builder Pro',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'Template library', 'Form builder', 'Analytics integration'],
      price: '$59/month',
      users: 'Up to 50 pages',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '21',
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions',
      features: ['SEO analysis', 'Keyword research', 'Content suggestions', 'Ranking tracking', 'Technical audits', 'Local SEO', 'Schema markup', 'Competitor analysis'],
      price: '$99/month',
      users: 'Up to 10 websites',
      popular: true,
      category: 'SEO'
    },
    {
      id: '22',
      icon: '📊',
      title: 'Ad Campaign Manager Pro',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'Auto-bidding', 'Audience targeting', 'Creative testing', 'ROI optimization'],
      price: '$149/month',
      users: 'Up to $10,000 ad spend',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '23',
      icon: '💻',
      title: 'Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation', 'Code review', 'Refactoring suggestions', 'Best practices'],
      price: '$79/month',
      users: 'Up to 25 developers',
      popular: true,
      category: 'Development'
    },
    {
      id: '24',
      icon: '🔧',
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting', 'Authentication', 'Monitoring', 'Analytics'],
      price: '$119/month',
      users: 'Up to 100 APIs',
      popular: false,
      category: 'Development'
    },
    {
      id: '25',
      icon: '🐛',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration APIs', 'Workflow automation', 'Reporting', 'Mobile app'],
      price: '$49/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Development'
    },
    {
      id: '26',
      icon: '📚',
      title: 'Doc Generator Pro',
      description: 'Automatically generate technical documentation, API docs, and user guides from code',
      features: ['Auto documentation', 'API docs', 'User guides', 'Code comments', 'Multiple formats', 'Version control', 'Collaboration', 'Templates'],
      price: '$39/month',
      users: 'Up to 50 projects',
      popular: false,
      category: 'Development'
    },
    {
      id: '27',
      icon: '👥',
      title: 'AI Recruitment Assistant Pro',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Video interviews', 'Onboarding', 'Analytics'],
      price: '$399/month',
      users: 'Up to 500 candidates/month',
      popular: true,
      category: 'HR'
    },
    {
      id: '28',
      icon: '🏥',
      title: 'Medical Records Manager Pro',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis',
      features: ['HIPAA compliance', 'Data extraction', 'Medical analysis', 'Patient portal', 'Integration APIs', 'Security audit', 'Backup & recovery', 'Analytics'],
      price: '$599/month',
      users: 'Up to 1000 patients',
      popular: false,
      category: 'Healthcare'
    },
    {
      id: '29',
      icon: '💰',
      title: 'AI Accounting Assistant Pro',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial reports', 'Expense tracking', 'Compliance', 'Audit trails', 'Multi-currency', 'Integration APIs'],
      price: '$299/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Finance'
    },
    {
      id: '30',
      icon: '🏠',
      title: 'Property Management AI Pro',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Payment processing', 'Lease management', 'Reporting'],
      price: '$349/month',
      users: 'Up to 500 properties',
      popular: false,
      category: 'Real Estate'
    },
    {
      id: '31',
      icon: '⚖️',
      title: 'Legal Document Manager Pro',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document templates', 'Legal research', 'Version control', 'Collaboration', 'Analytics'],
      price: '$499/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Legal'
    },
    {
      id: '32',
      icon: '🎓',
      title: 'Online Learning Platform Pro',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking',
      features: ['Personalized learning', 'Progress tracking', 'Course creation', 'Assessment tools', 'Certification', 'Video streaming', 'Discussion forums', 'Analytics'],
      price: '$199/month',
      users: 'Up to 1000 students',
      popular: false,
      category: 'Education'
    },
    {
      id: '33',
      icon: '📦',
      title: 'Supply Chain Optimizer Pro',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management',
      features: ['Demand forecasting', 'Inventory management', 'Supplier analytics', 'Risk assessment', 'Cost optimization', 'Route planning', 'Quality control', 'Reporting'],
      price: '$799/month',
      users: 'Up to 500 suppliers',
      popular: true,
      category: 'Logistics'
    },
    {
      id: '34',
      icon: '🎯',
      title: 'Lead Generation AI Pro',
      description: 'AI-powered lead generation with prospecting, email sequences, and automated follow-ups',
      features: ['AI prospecting', 'Email sequences', 'Automated follow-ups', 'Lead scoring', 'CRM integration', 'A/B testing', 'Analytics', 'Multi-channel'],
      price: '$249/month',
      users: 'Up to 10,000 leads/month',
      popular: false,
      category: 'Sales'
    },
    {
      id: '35',
      icon: '📊',
      title: 'Business Intelligence Pro',
      description: 'Advanced business intelligence with AI insights, predictive analytics, and automated reporting',
      features: ['AI insights', 'Predictive analytics', 'Automated reporting', 'Data visualization', 'Custom dashboards', 'Real-time monitoring', 'Alert system', 'Integration APIs'],
      price: '$399/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '36',
      icon: '🔐',
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with AI-powered security recommendations and breach monitoring',
      features: ['Password generation', 'Security recommendations', 'Breach monitoring', 'Team sharing', '2FA integration', 'Audit logs', 'Compliance', 'Mobile app'],
      price: '$29/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '37',
      icon: '📞',
      title: 'AI Call Center Pro',
      description: 'AI-powered call center solution with intelligent routing, sentiment analysis, and automated responses',
      features: ['Intelligent routing', 'Sentiment analysis', 'Automated responses', 'Call recording', 'Analytics', 'Integration APIs', 'Multi-language', 'Quality monitoring'],
      price: '$199/month',
      users: 'Up to 50 agents',
      popular: true,
      category: 'Support'
    },
    {
      id: '38',
      icon: '📈',
      title: 'Sales Forecasting AI Pro',
      description: 'AI-powered sales forecasting with predictive analytics and revenue optimization',
      features: ['Predictive analytics', 'Revenue optimization', 'Pipeline analysis', 'Trend identification', 'Risk assessment', 'Scenario planning', 'Integration APIs', 'Reporting'],
      price: '$179/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: '39',
      icon: '🎨',
      title: 'Video Editor AI Pro',
      description: 'AI-powered video editing with automatic editing, voice enhancement, and smart transitions',
      features: ['Auto editing', 'Voice enhancement', 'Smart transitions', 'Color correction', 'Audio mixing', 'Text overlay', 'Export options', 'Templates'],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Media'
    },
    {
      id: '40',
      icon: '🌐',
      title: 'Website Builder AI Pro',
      description: 'AI-powered website builder with intelligent design suggestions and automated optimization',
      features: ['AI design suggestions', 'Auto optimization', 'Mobile responsive', 'SEO optimization', 'E-commerce integration', 'Analytics', 'Hosting included', 'Custom domains'],
      price: '$149/month',
      users: 'Up to 10 websites',
      popular: false,
      category: 'Development'
    },
    {
      id: '41',
      icon: '📊',
      title: 'Data Visualization Pro',
      description: 'Advanced data visualization with AI insights, interactive charts, and automated reporting',
      features: ['Interactive charts', 'AI insights', 'Automated reporting', 'Real-time data', 'Custom dashboards', 'Export options', 'Collaboration', 'Integration APIs'],
      price: '$129/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '42',
      icon: '🔍',
      title: 'Market Research AI Pro',
      description: 'AI-powered market research with competitor analysis, trend identification, and consumer insights',
      features: ['Competitor analysis', 'Trend identification', 'Consumer insights', 'Market sizing', 'Survey tools', 'Data collection', 'Analytics', 'Reporting'],
      price: '$299/month',
      users: 'Up to 25 projects',
      popular: false,
      category: 'Research'
    },
    {
      id: '43',
      icon: '📱',
      title: 'App Store Optimizer Pro',
      description: 'AI-powered app store optimization with keyword research, A/B testing, and performance tracking',
      features: ['Keyword research', 'A/B testing', 'Performance tracking', 'Competitor analysis', 'Screenshot optimization', 'Review management', 'Analytics', 'Automation'],
      price: '$79/month',
      users: 'Up to 20 apps',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '44',
      icon: '🎯',
      title: 'Conversion Optimizer Pro',
      description: 'AI-powered conversion optimization with A/B testing, heat mapping, and user behavior analysis',
      features: ['A/B testing', 'Heat mapping', 'User behavior analysis', 'Funnel optimization', 'Personalization', 'Analytics', 'Integration APIs', 'Automation'],
      price: '$199/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '45',
      icon: '📊',
      title: 'Financial Planning AI Pro',
      description: 'AI-powered financial planning with budgeting, investment analysis, and retirement planning',
      features: ['Budgeting', 'Investment analysis', 'Retirement planning', 'Risk assessment', 'Goal tracking', 'Scenario planning', 'Integration APIs', 'Reporting'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Finance'
    },
    {
      id: '46',
      icon: '🏢',
      title: 'Workplace Analytics Pro',
      description: 'AI-powered workplace analytics with productivity insights, team performance, and engagement tracking',
      features: ['Productivity insights', 'Team performance', 'Engagement tracking', 'Time analysis', 'Collaboration metrics', 'Wellness monitoring', 'Reporting', 'Integration APIs'],
      price: '$179/month',
      users: 'Up to 500 employees',
      popular: false,
      category: 'HR'
    },
    {
      id: '47',
      icon: '🎵',
      title: 'Audio Editor AI Pro',
      description: 'AI-powered audio editing with noise reduction, voice enhancement, and automatic transcription',
      features: ['Noise reduction', 'Voice enhancement', 'Auto transcription', 'Audio mixing', 'Effects library', 'Export options', 'Batch processing', 'Templates'],
      price: '$69/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Media'
    },
    {
      id: '48',
      icon: '🌍',
      title: 'Translation AI Pro',
      description: 'AI-powered translation service with 100+ languages, context understanding, and real-time translation',
      features: ['100+ languages', 'Context understanding', 'Real-time translation', 'Document translation', 'Voice translation', 'API integration', 'Quality assurance', 'Custom models'],
      price: '$199/month',
      users: 'Up to 1M characters/month',
      popular: false,
      category: 'Communication'
    },
    {
      id: '49',
      icon: '📊',
      title: 'Inventory Optimizer Pro',
      description: 'AI-powered inventory optimization with demand forecasting, stock management, and cost reduction',
      features: ['Demand forecasting', 'Stock management', 'Cost reduction', 'Reorder optimization', 'Supplier management', 'Analytics', 'Integration APIs', 'Reporting'],
      price: '$299/month',
      users: 'Up to 10,000 SKUs',
      popular: true,
      category: 'Logistics'
    },
    {
      id: '50',
      icon: '🎯',
      title: 'Customer Success AI Pro',
      description: 'AI-powered customer success platform with health scoring, churn prediction, and automated engagement',
      features: ['Health scoring', 'Churn prediction', 'Automated engagement', 'Success tracking', 'Intervention alerts', 'Analytics', 'Integration APIs', 'Reporting'],
      price: '$249/month',
      users: 'Up to 1000 customers',
      popular: false,
      category: 'Customer Success'
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Content', 'Development', 'SEO', 'Finance', 'Productivity', 'Design', 'HR', 'Healthcare', 'Real Estate', 'Legal', 'Education', 'Logistics', 'Sales', 'Media', 'Communication', 'Research', 'Customer Success'];

  // Filter products based on selected category
  const filteredProducts = microSaasProducts.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Rating',
      description: 'Highly rated by our customers'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of {filteredProducts.length} specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;