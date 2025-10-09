'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Zap, BarChart, Users, Mail, Calendar, TrendingUp, Shield, 
  Code, Globe, Smartphone, Target, FileText, Search, Bot, Palette, 
  Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, 
  Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, 
  GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, 
  BookOpen, Calculator, Clock3, Compass, Map, Navigation, PieChart, 
  TrendingDown, Activity, CheckCircle, Star, ArrowRight, Phone, 
  DollarSign, Award, Lock, Database, Cloud, Settings, Sparkles,
  Eye, MessageSquare, Cpu, Target as Crosshair, Shield as Security, 
  Users as People, Star as StarIcon, CheckCircle as Check, 
  ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, 
  MapPin as Location, DollarSign as Dollar, Award as Trophy, Grid
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSAASServices = [
    {
      id: 'ai-writing-assistant',
      name: 'AI Writing Assistant Pro',
      category: 'content',
      icon: FileText,
      price: '$29/month',
      originalPrice: '$49/month',
      description: 'Advanced AI-powered writing tool with 50+ templates, grammar checking, and style optimization.',
      features: [
        '50+ Professional Templates',
        'Real-time Grammar & Style Check',
        'Multi-language Support',
        'Plagiarism Detection',
        'SEO Optimization',
        'Team Collaboration',
        'API Integration',
        'Custom Brand Voice'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Improve content quality by 85%',
        'Increase engagement by 60%',
        'Professional-grade output'
      ],
      rating: 4.9,
      users: '15,000+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-writing-assistant',
      apiUrl: 'https://api.ziontechgroup.com/writing',
      integrations: ['WordPress', 'Notion', 'Google Docs', 'Slack', 'Microsoft Office']
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics Dashboard',
      category: 'analytics',
      icon: BarChart,
      price: '$39/month',
      originalPrice: '$79/month',
      description: 'AI-powered business intelligence with predictive analytics and automated reporting.',
      features: [
        'Real-time Data Visualization',
        'Predictive Analytics',
        'Custom Dashboard Builder',
        'Automated Reports',
        'Data Import/Export',
        'Team Collaboration',
        'Mobile App',
        'White-label Options'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends 3x faster',
        'Reduce reporting time by 90%',
        'Increase revenue by 25%'
      ],
      rating: 4.8,
      users: '8,500+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/smart-analytics',
      apiUrl: 'https://api.ziontechgroup.com/analytics',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify']
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      category: 'productivity',
      icon: Calendar,
      price: '$19/month',
      originalPrice: '$39/month',
      description: 'Intelligent scheduling assistant that optimizes meetings and manages availability automatically.',
      features: [
        'Smart Meeting Optimization',
        'Multi-calendar Sync',
        'Time Zone Management',
        'Automated Reminders',
        'Conflict Resolution',
        'Team Scheduling',
        'Mobile App',
        'API Integration'
      ],
      benefits: [
        'Save 5+ hours per week',
        'Reduce scheduling conflicts by 95%',
        'Improve meeting efficiency',
        'Better work-life balance'
      ],
      rating: 4.7,
      users: '12,000+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-scheduler',
      apiUrl: 'https://api.ziontechgroup.com/scheduler',
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams', 'Slack']
    },
    {
      id: 'expense-tracker',
      name: 'AI Expense Tracker',
      category: 'finance',
      icon: DollarSign,
      price: '$15/month',
      originalPrice: '$25/month',
      description: 'Smart expense management with receipt scanning and automated categorization.',
      features: [
        'Receipt Scanning (OCR)',
        'Auto-categorization',
        'Expense Reports',
        'Budget Tracking',
        'Tax Preparation',
        'Multi-currency Support',
        'Team Management',
        'Mobile App'
      ],
      benefits: [
        'Save 8+ hours on expense management',
        'Reduce errors by 95%',
        'Better budget control',
        'Simplified tax filing'
      ],
      rating: 4.6,
      users: '9,200+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/expense-tracker',
      apiUrl: 'https://api.ziontechgroup.com/expenses',
      integrations: ['QuickBooks', 'Xero', 'Sage', 'Bank APIs', 'PayPal']
    },
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      category: 'productivity',
      icon: CheckCircle,
      price: '$24/month',
      originalPrice: '$44/month',
      description: 'AI-enhanced project management with smart prioritization and team collaboration.',
      features: [
        'AI Task Prioritization',
        'Project Templates',
        'Team Collaboration',
        'Time Tracking',
        'Progress Analytics',
        'Gantt Charts',
        'Mobile App',
        'Integrations'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Better project visibility',
        'Improved team coordination',
        'Faster project delivery'
      ],
      rating: 4.8,
      users: '18,500+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/task-manager-pro',
      apiUrl: 'https://api.ziontechgroup.com/tasks',
      integrations: ['Jira', 'Asana', 'Trello', 'Slack', 'Microsoft Teams']
    },
    {
      id: 'ai-crm-lite',
      name: 'AI CRM Lite',
      category: 'sales',
      icon: Users,
      price: '$35/month',
      originalPrice: '$65/month',
      description: 'Lightweight CRM with AI-powered lead scoring and automated follow-ups.',
      features: [
        'AI Lead Scoring',
        'Automated Follow-ups',
        'Contact Management',
        'Sales Pipeline',
        'Email Integration',
        'Reporting Dashboard',
        'Mobile App',
        'API Access'
      ],
      benefits: [
        'Increase sales by 30%',
        'Improve lead quality',
        'Automate repetitive tasks',
        'Better customer insights'
      ],
      rating: 4.7,
      users: '6,800+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-crm-lite',
      apiUrl: 'https://api.ziontechgroup.com/crm',
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Mailchimp', 'Zapier']
    },
    {
      id: 'email-optimizer',
      name: 'AI Email Optimizer',
      category: 'marketing',
      icon: Mail,
      price: '$28/month',
      originalPrice: '$48/month',
      description: 'AI-powered email marketing with subject line optimization and send time prediction.',
      features: [
        'Subject Line Optimization',
        'Send Time Prediction',
        'A/B Testing',
        'Content Suggestions',
        'List Segmentation',
        'Performance Analytics',
        'Template Library',
        'API Integration'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Save 6+ hours per week',
        'Better email performance'
      ],
      rating: 4.6,
      users: '11,300+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/email-optimizer',
      apiUrl: 'https://api.ziontechgroup.com/email',
      integrations: ['Mailchimp', 'Constant Contact', 'SendGrid', 'HubSpot', 'ActiveCampaign']
    },
    {
      id: 'social-media-manager',
      name: 'AI Social Media Manager',
      category: 'marketing',
      icon: Globe,
      price: '$32/month',
      originalPrice: '$52/month',
      description: 'Automated social media management with content creation and optimal posting times.',
      features: [
        'Content Generation',
        'Optimal Posting Times',
        'Hashtag Optimization',
        'Multi-platform Publishing',
        'Engagement Analytics',
        'Content Calendar',
        'Team Collaboration',
        'API Access'
      ],
      benefits: [
        'Save 12+ hours per week',
        'Increase engagement by 70%',
        'Consistent posting schedule',
        'Better content performance'
      ],
      rating: 4.8,
      users: '14,200+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/social-media-manager',
      apiUrl: 'https://api.ziontechgroup.com/social',
      integrations: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'TikTok']
    },
    {
      id: 'ai-design-studio',
      name: 'AI Design Studio',
      category: 'design',
      icon: Palette,
      price: '$45/month',
      originalPrice: '$75/month',
      description: 'AI-powered design tool with automated logo creation and brand kit generation.',
      features: [
        'AI Logo Generation',
        'Brand Kit Creation',
        'Template Library',
        'Color Palette Generator',
        'Font Pairing',
        'Mockup Generator',
        'Team Collaboration',
        'Export Options'
      ],
      benefits: [
        'Create professional designs in minutes',
        'Consistent brand identity',
        'Save on design costs',
        'Faster project delivery'
      ],
      rating: 4.7,
      users: '7,600+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-design-studio',
      apiUrl: 'https://api.ziontechgroup.com/design',
      integrations: ['Figma', 'Adobe Creative Suite', 'Canva', 'Sketch', 'InVision']
    },
    {
      id: 'landing-page-builder',
      name: 'AI Landing Page Builder',
      category: 'web',
      icon: Globe,
      price: '$38/month',
      originalPrice: '$68/month',
      description: 'No-code landing page builder with AI optimization and conversion tracking.',
      features: [
        'Drag & Drop Builder',
        'AI Optimization',
        'A/B Testing',
        'Conversion Tracking',
        'Mobile Responsive',
        'SEO Optimization',
        'Analytics Integration',
        'Custom Domains'
      ],
      benefits: [
        'Create pages in minutes',
        'Increase conversions by 50%',
        'No coding required',
        'Professional results'
      ],
      rating: 4.6,
      users: '9,800+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/landing-page-builder',
      apiUrl: 'https://api.ziontechgroup.com/landing',
      integrations: ['Google Analytics', 'Facebook Pixel', 'Google Ads', 'Mailchimp', 'Zapier']
    },
    {
      id: 'seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'seo',
      icon: Search,
      price: '$42/month',
      originalPrice: '$72/month',
      description: 'Comprehensive SEO tool with keyword research and content optimization.',
      features: [
        'Keyword Research',
        'Content Optimization',
        'Technical SEO Audit',
        'Competitor Analysis',
        'Rank Tracking',
        'Backlink Analysis',
        'Site Speed Optimization',
        'Local SEO'
      ],
      benefits: [
        'Improve search rankings',
        'Increase organic traffic by 80%',
        'Save 15+ hours per week',
        'Better SEO insights'
      ],
      rating: 4.8,
      users: '13,500+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/seo-optimizer',
      apiUrl: 'https://api.ziontechgroup.com/seo',
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify', 'Squarespace']
    },
    {
      id: 'ad-campaign-manager',
      name: 'AI Ad Campaign Manager',
      category: 'advertising',
      icon: Target,
      price: '$55/month',
      originalPrice: '$95/month',
      description: 'AI-powered advertising platform with automated bidding and optimization.',
      features: [
        'Automated Bidding',
        'Ad Creative Optimization',
        'Audience Targeting',
        'Budget Management',
        'Performance Analytics',
        'Multi-platform Support',
        'A/B Testing',
        'ROI Tracking'
      ],
      benefits: [
        'Reduce ad costs by 35%',
        'Increase ROAS by 60%',
        'Automate campaign management',
        'Better targeting precision'
      ],
      rating: 4.7,
      users: '5,900+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ad-campaign-manager',
      apiUrl: 'https://api.ziontechgroup.com/ads',
      integrations: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Twitter Ads', 'TikTok Ads']
    },
    {
      id: 'code-assistant',
      name: 'AI Code Assistant',
      category: 'development',
      icon: Code,
      price: '$49/month',
      originalPrice: '$89/month',
      description: 'AI-powered coding assistant with code generation and debugging capabilities.',
      features: [
        'Code Generation',
        'Bug Detection',
        'Code Review',
        'Documentation Generation',
        'Test Case Creation',
        'Refactoring Suggestions',
        'Multi-language Support',
        'IDE Integration'
      ],
      benefits: [
        'Write code 3x faster',
        'Reduce bugs by 70%',
        'Improve code quality',
        'Learn best practices'
      ],
      rating: 4.9,
      users: '22,100+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/code-assistant',
      apiUrl: 'https://api.ziontechgroup.com/code',
      integrations: ['VS Code', 'IntelliJ', 'Sublime Text', 'Atom', 'Vim']
    },
    {
      id: 'api-builder',
      name: 'AI API Builder',
      category: 'development',
      icon: Settings,
      price: '$65/month',
      originalPrice: '$115/month',
      description: 'No-code API builder with AI-powered endpoint generation and testing.',
      features: [
        'Visual API Builder',
        'AI Endpoint Generation',
        'Auto Documentation',
        'Testing Suite',
        'Rate Limiting',
        'Authentication',
        'Monitoring',
        'Deployment'
      ],
      benefits: [
        'Build APIs in minutes',
        'Reduce development time by 80%',
        'Professional documentation',
        'Enterprise-grade security'
      ],
      rating: 4.6,
      users: '4,200+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/api-builder',
      apiUrl: 'https://api.ziontechgroup.com/builder',
      integrations: ['Postman', 'Swagger', 'AWS', 'Google Cloud', 'Azure']
    },
    {
      id: 'bug-tracker-pro',
      name: 'AI Bug Tracker Pro',
      category: 'development',
      icon: Shield,
      price: '$35/month',
      originalPrice: '$55/month',
      description: 'Intelligent bug tracking with automated prioritization and resolution suggestions.',
      features: [
        'AI Bug Prioritization',
        'Automated Triage',
        'Resolution Suggestions',
        'Team Collaboration',
        'Progress Tracking',
        'Integration Support',
        'Mobile App',
        'API Access'
      ],
      benefits: [
        'Resolve bugs 50% faster',
        'Better bug prioritization',
        'Improved team efficiency',
        'Reduced development time'
      ],
      rating: 4.7,
      users: '8,900+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/bug-tracker-pro',
      apiUrl: 'https://api.ziontechgroup.com/bugs',
      integrations: ['Jira', 'GitHub', 'GitLab', 'Slack', 'Microsoft Teams']
    },
    {
      id: 'doc-generator',
      name: 'AI Doc Generator',
      category: 'documentation',
      icon: FileText,
      price: '$25/month',
      originalPrice: '$45/month',
      description: 'Automated documentation generator with AI-powered content creation and formatting.',
      features: [
        'Auto Documentation',
        'Multiple Formats',
        'Template Library',
        'Collaborative Editing',
        'Version Control',
        'Search & Navigation',
        'Export Options',
        'API Integration'
      ],
      benefits: [
        'Save 20+ hours on documentation',
        'Consistent formatting',
        'Always up-to-date docs',
        'Professional presentation'
      ],
      rating: 4.5,
      users: '6,700+',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/doc-generator',
      apiUrl: 'https://api.ziontechgroup.com/docs',
      integrations: ['Confluence', 'Notion', 'GitBook', 'Sphinx', 'Docusaurus']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: microSAASServices.length },
    { id: 'content', name: 'Content & Writing', icon: FileText, count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'analytics', name: 'Analytics & Data', icon: BarChart, count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'productivity', name: 'Productivity', icon: CheckCircle, count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'finance', name: 'Finance & Accounting', icon: DollarSign, count: microSAASServices.filter(s => s.category === 'finance').length },
    { id: 'sales', name: 'Sales & CRM', icon: Users, count: microSAASServices.filter(s => s.category === 'sales').length },
    { id: 'marketing', name: 'Marketing', icon: Target, count: microSAASServices.filter(s => s.category === 'marketing').length },
    { id: 'design', name: 'Design & Creative', icon: Palette, count: microSAASServices.filter(s => s.category === 'design').length },
    { id: 'web', name: 'Web Development', icon: Globe, count: microSAASServices.filter(s => s.category === 'web').length },
    { id: 'seo', name: 'SEO & Optimization', icon: Search, count: microSAASServices.filter(s => s.category === 'seo').length },
    { id: 'advertising', name: 'Advertising', icon: Target, count: microSAASServices.filter(s => s.category === 'advertising').length },
    { id: 'development', name: 'Development', icon: Code, count: microSAASServices.filter(s => s.category === 'development').length },
    { id: 'documentation', name: 'Documentation', icon: FileText, count: microSAASServices.filter(s => s.category === 'documentation').length }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalUsers = microSAASServices.reduce((sum, service) => sum + parseInt(service.users.replace(/[^\d]/g, '')), 0);
  const averageRating = (microSAASServices.reduce((sum, service) => sum + service.rating, 0) / microSAASServices.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS tools for businesses. From content creation to analytics, boost productivity with our intelligent solutions. Starting at $15/month." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity tools, automation, saas solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            50+ AI-powered micro SAAS tools designed to automate your business processes and boost productivity. 
            From content creation to analytics, we have the perfect solution for every need.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">AI Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">{totalUsers.toLocaleString()}+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">{averageRating}</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">$15</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Location className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cyber-card group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{service.rating}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-400">{service.users} users</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      {service.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                    SAVE {Math.round((1 - parseInt(service.price.replace(/[^\d]/g, '')) / parseInt(service.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-300">
                        <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Integrations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.integrations.slice(0, 3).map((integration, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {integration}
                      </span>
                    ))}
                    {service.integrations.length > 3 && (
                      <span className="bg-gray-500/20 text-gray-400 px-2 py-1 rounded text-xs">
                        +{service.integrations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    Try Demo
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="flex-1 bg-transparent border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/10 transition-all text-center"
                  >
                    Get Started
                  </a>
                </div>

                {/* API Info */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>API Available</span>
                    <a
                      href={service.apiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View API Docs →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our micro SAAS solutions today and see the difference AI-powered tools can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;