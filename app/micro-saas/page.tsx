'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3, Target, Rocket, Brain, Code, Mail, Search, Calendar, CheckSquare, FileText, Settings, Globe, Smartphone, Lock, TrendingUp, Database, Cpu, Sparkles, DollarSign, Clock, Award, Headphones } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice?: string;
  savings?: string;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and custom reporting for data-driven decisions.',
      features: ['Real-time dashboards', 'AI-powered insights', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Data visualization', 'Automated alerts'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$399/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Contact management', 'Email integration', 'Pipeline tracking', 'Custom fields', 'Mobile access'],
      price: '$149/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'CRM',
      marketPrice: '$299/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-crm'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring with AI threat detection, vulnerability scanning, and 24/7 security operations center.',
      features: ['AI threat detection', 'Vulnerability scanning', '24/7 monitoring', 'Incident response', 'Compliance reporting', 'Security alerts', 'Penetration testing', 'Risk assessment'],
      price: '$299/month',
      users: 'Up to 500 users',
      popular: false,
      category: 'Security',
      marketPrice: '$599/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/security-monitoring-suite'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management with cost optimization, auto-scaling, and multi-cloud support for enterprise environments.',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management', 'Performance monitoring', 'Security compliance', 'Disaster recovery'],
      price: '$399/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure',
      marketPrice: '$799/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/cloud-infrastructure-manager'
    },
    {
      id: '5',
      icon: Mail,
      title: 'AI Email Marketing Pro',
      description: 'AI-driven email campaigns with advanced segmentation, personalization, A/B testing, and comprehensive analytics for maximum ROI.',
      features: ['AI optimization', 'Advanced segmentation', 'A/B testing', 'Personalization', 'Analytics dashboard', 'Automation workflows', 'Template library', 'Deliverability optimization'],
      price: '$99/month',
      users: 'Up to 50,000 contacts',
      popular: true,
      category: 'Marketing',
      marketPrice: '$199/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      id: '6',
      icon: Brain,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution with natural language processing, multi-channel support, and seamless human handoff for 24/7 customer service.',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base integration', 'Human handoff', 'Analytics dashboard', 'Custom training', 'API integration', 'Multi-language support'],
      price: '$179/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support',
      marketPrice: '$349/month',
      savings: '49% off',
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    {
      id: '7',
      icon: Code,
      title: 'AI Content Studio Pro',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation for all platforms.',
      features: ['AI writing assistant', 'Image generation', 'Video editing', 'Social media automation', 'SEO optimization', 'Brand voice training', 'Content calendar', 'Performance analytics'],
      price: '$249/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Content',
      marketPrice: '$499/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-content-studio'
    },
    {
      id: '8',
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, instant deployment, and app store publishing support.',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform support', 'App store publishing', 'Push notifications', 'Analytics integration', 'Custom branding'],
      price: '$399/month',
      users: 'Up to 5 apps',
      popular: false,
      category: 'Development',
      marketPrice: '$799/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-mobile-app-builder'
    },
    {
      id: '9',
      icon: Search,
      title: 'AI SEO Optimizer Pro',
      description: 'Comprehensive SEO analysis with AI-powered keyword research, content optimization, ranking tracking, and competitor analysis.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO audits', 'Link building', 'Local SEO', 'Performance reports'],
      price: '$129/month',
      users: 'Up to 25 websites',
      popular: true,
      category: 'SEO',
      marketPrice: '$259/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: '10',
      icon: BarChart3,
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered payment tracking, financial reporting, tax calculations, and client portal management.',
      features: ['Automated invoicing', 'Payment tracking', 'Financial reports', 'Tax calculations', 'Client portal', 'Recurring billing', 'Multi-currency', 'Integration APIs'],
      price: '$79/month',
      users: 'Up to 1,000 invoices/month',
      popular: false,
      category: 'Finance',
      marketPrice: '$159/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-invoice-generator'
    },
    {
      id: '11',
      icon: Code,
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI writing tool with 100+ templates, multi-language support, plagiarism checking, and SEO optimization for all content types.',
      features: ['100+ templates', 'Multi-language support', 'Plagiarism checking', 'SEO optimization', 'Tone adjustment', 'Brand voice training', 'Content planning', 'Collaboration tools'],
      price: '$49/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Writing',
      marketPrice: '$99/month',
      savings: '51% off',
      link: 'https://ziontechgroup.com/ai-writing-assistant'
    },
    {
      id: '12',
      icon: BarChart3,
      title: 'Smart Analytics Platform',
      description: 'Real-time business analytics with AI insights, automated reports, predictive forecasting, and custom metrics for data-driven decisions.',
      features: ['Real-time analytics', 'Predictive forecasting', 'Automated reports', 'Custom metrics', 'Data integration', 'Interactive dashboards', 'Mobile app', 'API access'],
      price: '$89/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Analytics',
      marketPrice: '$179/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/smart-analytics'
    },
    {
      id: '13',
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, time management, and automated booking for maximum efficiency.',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs', 'Time zone handling', 'Buffer time', 'Recurring meetings'],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Productivity',
      marketPrice: '$79/month',
      savings: '51% off',
      link: 'https://ziontechgroup.com/ai-scheduler'
    },
    {
      id: '14',
      icon: BarChart3,
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, auto-categorization, budget insights, and tax preparation for small businesses.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget insights', 'Tax preparation', 'Multi-currency', 'Expense reports', 'Integration APIs', 'Mobile app'],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$59/month',
      savings: '51% off',
      link: 'https://ziontechgroup.com/expense-tracker-ai'
    },
    {
      id: '15',
      icon: CheckSquare,
      title: 'Task Manager Pro AI',
      description: 'Advanced task management with AI prioritization, team collaboration, progress tracking, and project templates for maximum productivity.',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Project templates', 'Gantt charts', 'Integration APIs', 'Mobile app'],
      price: '$59/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Productivity',
      marketPrice: '$119/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/task-manager-pro'
    },
    {
      id: '16',
      icon: Users,
      title: 'CRM Lite AI',
      description: 'Lightweight CRM with AI lead scoring, contact management, sales pipeline automation, and email integration for growing businesses.',
      features: ['AI lead scoring', 'Contact management', 'Sales pipeline', 'Email integration', 'Mobile app', 'Custom fields', 'Reporting', 'API access'],
      price: '$79/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM',
      marketPrice: '$159/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/crm-lite'
    },
    {
      id: '17',
      icon: Mail,
      title: 'Email Optimizer Pro',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, A/B testing, and deliverability improvement.',
      features: ['Subject line AI', 'Send time optimization', 'A/B testing', 'Open rate tracking', 'Spam analysis', 'Deliverability tools', 'Template library', 'Performance analytics'],
      price: '$49/month',
      users: 'Up to 100,000 emails/month',
      popular: true,
      category: 'Marketing',
      marketPrice: '$99/month',
      savings: '51% off',
      link: 'https://ziontechgroup.com/email-optimizer'
    },
    {
      id: '18',
      icon: Globe,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, auto-scheduling, performance analytics, and multi-platform posting.',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Multi-platform', 'Engagement tracking', 'Hashtag optimization', 'Competitor analysis', 'Influencer outreach'],
      price: '$69/month',
      users: 'Up to 10 social accounts',
      popular: false,
      category: 'Social Media',
      marketPrice: '$139/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/social-media-manager'
    },
    {
      id: '19',
      icon: Sparkles,
      title: 'AI Design Studio Pro',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools, brand kit, and template library.',
      features: ['AI design tools', 'Logo generation', 'Marketing materials', 'Brand kit', 'Template library', 'Vector graphics', 'Photo editing', 'Collaboration tools'],
      price: '$59/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Design',
      marketPrice: '$119/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-design-studio'
    },
    {
      id: '20',
      icon: Globe,
      title: 'Landing Page Builder AI',
      description: 'Build high-converting landing pages with AI optimization, A/B testing, conversion tracking, and mobile-responsive design.',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'Template library', 'Analytics integration', 'Lead capture'],
      price: '$49/month',
      users: 'Up to 25 pages',
      popular: false,
      category: 'Web Development',
      marketPrice: '$99/month',
      savings: '51% off',
      link: 'https://ziontechgroup.com/landing-page-builder'
    },
    {
      id: '21',
      icon: Search,
      title: 'SEO Optimizer AI',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, ranking tracking, and technical audits.',
      features: ['SEO analysis', 'Keyword research', 'Content suggestions', 'Ranking tracking', 'Technical audits', 'Backlink analysis', 'Local SEO', 'Competitor tracking'],
      price: '$79/month',
      users: 'Up to 15 websites',
      popular: true,
      category: 'SEO',
      marketPrice: '$159/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/seo-optimizer'
    },
    {
      id: '22',
      icon: BarChart3,
      title: 'Ad Campaign Manager AI',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms for maximum ROI.',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'Auto-bidding', 'Audience targeting', 'Creative testing', 'ROI optimization'],
      price: '$99/month',
      users: 'Up to $10,000 ad spend',
      popular: false,
      category: 'Advertising',
      marketPrice: '$199/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ad-campaign-manager'
    },
    {
      id: '23',
      icon: Code,
      title: 'Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages with documentation and best practices.',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation', 'Best practices', 'Code review', 'Refactoring suggestions'],
      price: '$59/month',
      users: 'Up to 10 developers',
      popular: true,
      category: 'Development',
      marketPrice: '$119/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/code-assistant'
    },
    {
      id: '24',
      icon: Settings,
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, testing tools, and version control for seamless integration.',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting', 'Authentication', 'Monitoring', 'Analytics'],
      price: '$89/month',
      users: 'Up to 50 APIs',
      popular: false,
      category: 'Development',
      marketPrice: '$179/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/api-builder'
    },
    {
      id: '25',
      icon: Shield,
      title: 'Bug Tracker Pro AI',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, resolution suggestions, and team collaboration tools.',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration APIs', 'Automated testing', 'Performance monitoring', 'Release management'],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Development',
      marketPrice: '$79/month',
      savings: '51% off',
      link: 'https://ziontechgroup.com/bug-tracker-pro'
    },
    {
      id: '26',
      icon: FileText,
      title: 'Doc Generator AI',
      description: 'Automatically generate technical documentation, API docs, and user guides from code with AI-powered content creation.',
      features: ['Auto documentation', 'API docs', 'User guides', 'Code comments', 'Multiple formats', 'Version control', 'Collaboration', 'Templates'],
      price: '$29/month',
      users: 'Up to 10 projects',
      popular: false,
      category: 'Documentation',
      marketPrice: '$59/month',
      savings: '51% off',
      link: 'https://ziontechgroup.com/doc-generator'
    },
    {
      id: '27',
      icon: Users,
      title: 'AI Recruitment Assistant Pro',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, interview scheduling, and skills assessment tools.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Job posting', 'Applicant tracking', 'Analytics'],
      price: '$199/month',
      users: 'Up to 100 job postings',
      popular: true,
      category: 'HR',
      marketPrice: '$399/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-recruitment-assistant'
    },
    {
      id: '28',
      icon: Shield,
      title: 'Medical Records Manager AI',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction, analysis, and patient portal integration.',
      features: ['HIPAA compliance', 'Data extraction', 'Medical analysis', 'Patient portal', 'Integration APIs', 'Security encryption', 'Audit trails', 'Backup systems'],
      price: '$399/month',
      users: 'Up to 1,000 patients',
      popular: false,
      category: 'Healthcare',
      marketPrice: '$799/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/medical-records-manager'
    },
    {
      id: '29',
      icon: BarChart3,
      title: 'AI Accounting Assistant Pro',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, financial reporting, and compliance management.',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial reports', 'Expense tracking', 'Compliance', 'Invoice management', 'Bank reconciliation', 'Audit support'],
      price: '$149/month',
      users: 'Up to 5 accountants',
      popular: true,
      category: 'Finance',
      marketPrice: '$299/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/ai-accounting-assistant'
    },
    {
      id: '30',
      icon: BarChart3,
      title: 'Property Management AI Pro',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, rent optimization, and property analytics.',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Payment processing', 'Lease management', 'Financial reporting'],
      price: '$199/month',
      users: 'Up to 100 properties',
      popular: false,
      category: 'Real Estate',
      marketPrice: '$399/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/property-management-ai'
    },
    {
      id: '31',
      icon: Shield,
      title: 'Legal Document Manager AI',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, risk assessment, and legal research.',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document templates', 'Legal research', 'Case management', 'Client portal', 'Billing integration'],
      price: '$299/month',
      users: 'Up to 10 lawyers',
      popular: true,
      category: 'Legal',
      marketPrice: '$599/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/legal-document-manager'
    },
    {
      id: '32',
      icon: Users,
      title: 'Online Learning Platform AI',
      description: 'AI-powered educational platform with personalized learning paths, progress tracking, course creation, and assessment tools.',
      features: ['Personalized learning', 'Progress tracking', 'Course creation', 'Assessment tools', 'Certification', 'Video streaming', 'Discussion forums', 'Mobile app'],
      price: '$129/month',
      users: 'Up to 1,000 students',
      popular: false,
      category: 'Education',
      marketPrice: '$259/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/online-learning-platform'
    },
    {
      id: '33',
      icon: BarChart3,
      title: 'Supply Chain Optimizer AI',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, supplier analytics, and risk assessment.',
      features: ['Demand forecasting', 'Inventory management', 'Supplier analytics', 'Risk assessment', 'Cost optimization', 'Route planning', 'Quality control', 'Compliance tracking'],
      price: '$499/month',
      users: 'Up to 500 suppliers',
      popular: true,
      category: 'Manufacturing',
      marketPrice: '$999/month',
      savings: '50% off',
      link: 'https://ziontechgroup.com/supply-chain-optimizer'
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

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Content', 'Development', 'SEO', 'Finance', 'Writing', 'Productivity', 'Social Media', 'Design', 'Web Development', 'Advertising', 'Documentation', 'HR', 'Healthcare', 'Real Estate', 'Legal', 'Education', 'Manufacturing'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Focused AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - focused, affordable AI and IT tools designed for specific business needs. Quick deployment, scalable, and cost-effective." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, CRM, analytics, security monitoring, cloud management" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Focused AI and IT tools for specific business needs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
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
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Micro SaaS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                      {product.marketPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.marketPrice}</span>
                      )}
                    </div>
                    {product.savings && (
                      <div className="text-green-400 text-sm font-semibold mb-2">{product.savings}</div>
                    )}
                    <div className="text-gray-400 text-sm">{product.users}</div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mt-2">
                      {product.category}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                        product.popular
                          ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                          : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                      }`}
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:+13024640950`}
                      className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Call for Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits of Micro SaaS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
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
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Email: kleber@ziontechgroup.com | Phone: +1 (302) 464-0950</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;