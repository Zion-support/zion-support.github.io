'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Users, 
  Mail, 
  Smartphone, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Settings,
  Target,
  FileText,
  TrendingUp,
  Lock,
  Search,
  Filter,
  Sparkles,
  Cpu,
  Palette,
  MessageSquare,
  Calendar,
  CreditCard,
  Building,
  GraduationCap,
  Home,
  Scale,
  Truck,
  Stethoscope,
  Briefcase,
  Camera,
  Music,
  Gamepad2,
  Heart,
  ShoppingCart,
  Wrench,
  Lightbulb,
  PieChart,
  Layers,
  Activity,
  Zap as Lightning
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Productivity',
    'Marketing',
    'Sales',
    'Analytics',
    'Development',
    'Design',
    'Communication',
    'Finance',
    'Healthcare',
    'Education',
    'E-commerce',
    'Real Estate',
    'Legal',
    'Manufacturing',
    'Entertainment',
    'Lifestyle',
    'Utilities'
  ];

  const microSaasProducts = [
    // Productivity Tools
    {
      icon: Brain,
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered writing tool with 50+ templates, grammar checking, and content optimization for blogs, emails, and documents.',
      features: ['50+ Writing Templates', 'Grammar & Style Check', 'SEO Optimization', 'Multi-language Support', 'Plagiarism Detection', 'Team Collaboration'],
      price: '$29/month',
      users: 'Up to 5 users',
      category: 'Productivity',
      popular: true,
      rating: 4.9,
      reviews: 1247,
      freeTrial: '14 days',
      integrations: ['Google Docs', 'WordPress', 'Slack', 'Notion']
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with AI insights, custom dashboards, and automated reporting for data-driven decisions.',
      features: ['Real-time Dashboards', 'AI Insights', 'Custom Reports', 'Data Visualization', 'Mobile App', 'API Access'],
      price: '$49/month',
      users: 'Up to 10 users',
      category: 'Analytics',
      popular: true,
      rating: 4.8,
      reviews: 892,
      freeTrial: '30 days',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe']
    },
    {
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management for maximum productivity.',
      features: ['Smart Scheduling', 'Calendar Sync', 'Meeting Optimization', 'Time Tracking', 'Team Coordination', 'Mobile App'],
      price: '$19/month',
      users: 'Up to 20 users',
      category: 'Productivity',
      rating: 4.7,
      reviews: 654,
      freeTrial: '14 days',
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams']
    },
    {
      icon: CheckSquare,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking for project success.',
      features: ['AI Prioritization', 'Team Collaboration', 'Progress Tracking', 'Time Estimation', 'Gantt Charts', 'Mobile Sync'],
      price: '$39/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      rating: 4.6,
      reviews: 523,
      freeTrial: '14 days',
      integrations: ['Slack', 'Trello', 'Asana', 'Jira']
    },
    {
      icon: CreditCard,
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights for financial control.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Tracking', 'Expense Reports', 'Tax Preparation', 'Multi-currency'],
      price: '$15/month',
      users: 'Up to 10 users',
      category: 'Finance',
      rating: 4.5,
      reviews: 387,
      freeTrial: '30 days',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal']
    },

    // Marketing Tools
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Complete marketing automation with AI-powered campaigns, personalization, and multi-channel optimization.',
      features: ['Email Campaigns', 'Social Media', 'Lead Scoring', 'A/B Testing', 'Analytics', 'CRM Integration'],
      price: '$79/month',
      users: 'Up to 50 users',
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      reviews: 1123,
      freeTrial: '14 days',
      integrations: ['Mailchimp', 'HubSpot', 'Facebook', 'Google Ads']
    },
    {
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools and templates.',
      features: ['Logo Generator', 'Social Media Graphics', 'Brand Kit', 'Templates', 'AI Suggestions', 'Team Collaboration'],
      price: '$35/month',
      users: 'Up to 15 users',
      category: 'Design',
      rating: 4.7,
      reviews: 756,
      freeTrial: '7 days',
      integrations: ['Canva', 'Figma', 'Adobe', 'Unsplash']
    },
    {
      icon: Search,
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking.',
      features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Technical SEO', 'Competitor Analysis', 'Reports'],
      price: '$49/month',
      users: 'Up to 5 websites',
      category: 'Marketing',
      rating: 4.6,
      reviews: 634,
      freeTrial: '14 days',
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify']
    },
    {
      icon: MessageSquare,
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics across platforms.',
      features: ['Content Creation', 'Auto Scheduling', 'Analytics', 'Engagement Tracking', 'Hashtag Research', 'Team Management'],
      price: '$45/month',
      users: 'Up to 20 accounts',
      category: 'Marketing',
      rating: 4.5,
      reviews: 489,
      freeTrial: '14 days',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok']
    },

    // Sales Tools
    {
      icon: Users,
      title: 'AI CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation for small businesses.',
      features: ['Lead Management', 'AI Lead Scoring', 'Sales Pipeline', 'Email Integration', 'Reporting', 'Mobile App'],
      price: '$59/month',
      users: 'Up to 100 contacts',
      category: 'Sales',
      popular: true,
      rating: 4.7,
      reviews: 892,
      freeTrial: '30 days',
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier']
    },
    {
      icon: Mail,
      title: 'Email Marketing Pro',
      description: 'Advanced email marketing with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: ['Email Templates', 'AI Personalization', 'A/B Testing', 'Automation', 'Analytics', 'List Management'],
      price: '$25/month',
      users: 'Up to 10,000 subscribers',
      category: 'Marketing',
      rating: 4.6,
      reviews: 567,
      freeTrial: '14 days',
      integrations: ['Shopify', 'WooCommerce', 'Mailchimp', 'Constant Contact']
    },
    {
      icon: Phone,
      title: 'AI Call Center',
      description: 'Intelligent call center solution with AI chatbots, call routing, and customer service automation.',
      features: ['AI Chatbots', 'Call Routing', 'Call Recording', 'Analytics', 'CRM Integration', 'Multi-language'],
      price: '$99/month',
      users: 'Up to 50 agents',
      category: 'Communication',
      rating: 4.8,
      reviews: 423,
      freeTrial: '14 days',
      integrations: ['Zendesk', 'Freshdesk', 'Salesforce', 'HubSpot']
    },

    // Development Tools
    {
      icon: Code,
      title: 'Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages and frameworks.',
      features: ['Code Completion', 'Bug Detection', 'Code Review', 'Documentation', 'Multi-language', 'Team Collaboration'],
      price: '$39/month',
      users: 'Up to 10 developers',
      category: 'Development',
      rating: 4.9,
      reviews: 1156,
      freeTrial: '30 days',
      integrations: ['VS Code', 'IntelliJ', 'GitHub', 'GitLab']
    },
    {
      icon: Settings,
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools for developers.',
      features: ['API Design', 'Auto Documentation', 'Testing Tools', 'Version Control', 'Analytics', 'Security'],
      price: '$59/month',
      users: 'Up to 25 APIs',
      category: 'Development',
      rating: 4.7,
      reviews: 678,
      freeTrial: '14 days',
      integrations: ['Postman', 'Swagger', 'GitHub', 'AWS']
    },
    {
      icon: Database,
      title: 'Database Manager AI',
      description: 'Intelligent database management with optimization, monitoring, and automated maintenance for better performance.',
      features: ['Performance Monitoring', 'Query Optimization', 'Backup Management', 'Security Scanning', 'Analytics', 'Alerts'],
      price: '$79/month',
      users: 'Up to 10 databases',
      category: 'Development',
      rating: 4.6,
      reviews: 445,
      freeTrial: '14 days',
      integrations: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },

    // Healthcare
    {
      icon: Stethoscope,
      title: 'Medical Records AI',
      description: 'HIPAA-compliant medical records management with AI-powered insights and patient data analytics.',
      features: ['Patient Records', 'AI Insights', 'HIPAA Compliance', 'Appointment Scheduling', 'Billing Integration', 'Telemedicine'],
      price: '$199/month',
      users: 'Up to 100 patients',
      category: 'Healthcare',
      rating: 4.8,
      reviews: 234,
      freeTrial: '30 days',
      integrations: ['Epic', 'Cerner', 'Allscripts', 'Practice Fusion']
    },
    {
      icon: Heart,
      title: 'Health Analytics Pro',
      description: 'AI-powered health analytics and patient monitoring with predictive insights and treatment recommendations.',
      features: ['Patient Monitoring', 'Predictive Analytics', 'Treatment Recommendations', 'Risk Assessment', 'Reports', 'Mobile App'],
      price: '$149/month',
      users: 'Up to 50 patients',
      category: 'Healthcare',
      rating: 4.7,
      reviews: 189,
      freeTrial: '30 days',
      integrations: ['Fitbit', 'Apple Health', 'Google Fit', 'MyFitnessPal']
    },

    // Education
    {
      icon: GraduationCap,
      title: 'Online Learning Platform',
      description: 'AI-powered learning management system with personalized courses, progress tracking, and automated assessments.',
      features: ['Course Creation', 'AI Personalization', 'Progress Tracking', 'Assessments', 'Certificates', 'Mobile Learning'],
      price: '$89/month',
      users: 'Up to 500 students',
      category: 'Education',
      rating: 4.6,
      reviews: 567,
      freeTrial: '30 days',
      integrations: ['Zoom', 'Google Classroom', 'Moodle', 'Canvas']
    },
    {
      icon: BookOpen,
      title: 'AI Tutoring Assistant',
      description: 'Intelligent tutoring system with personalized learning paths and real-time feedback for students.',
      features: ['Personalized Learning', 'Real-time Feedback', 'Progress Tracking', 'Adaptive Testing', 'Multi-subject', 'Parent Dashboard'],
      price: '$29/month',
      users: 'Up to 20 students',
      category: 'Education',
      rating: 4.5,
      reviews: 345,
      freeTrial: '14 days',
      integrations: ['Google Classroom', 'Khan Academy', 'Coursera', 'Udemy']
    },

    // E-commerce
    {
      icon: ShoppingCart,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced e-commerce analytics with AI insights, conversion optimization, and customer behavior analysis.',
      features: ['Sales Analytics', 'Customer Insights', 'Conversion Tracking', 'Inventory Management', 'A/B Testing', 'Reports'],
      price: '$69/month',
      users: 'Up to 1 store',
      category: 'E-commerce',
      rating: 4.7,
      reviews: 678,
      freeTrial: '14 days',
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce']
    },
    {
      icon: Package,
      title: 'Inventory Manager AI',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand Forecasting', 'Auto Reordering', 'Supply Chain', 'Cost Optimization', 'Analytics', 'Mobile App'],
      price: '$79/month',
      users: 'Up to 10,000 SKUs',
      category: 'E-commerce',
      rating: 4.6,
      reviews: 456,
      freeTrial: '14 days',
      integrations: ['Shopify', 'Amazon', 'eBay', 'Walmart']
    },

    // Real Estate
    {
      icon: Home,
      title: 'Property Management AI',
      description: 'Comprehensive property management with AI-powered tenant screening, rent optimization, and maintenance scheduling.',
      features: ['Tenant Screening', 'Rent Optimization', 'Maintenance Scheduling', 'Financial Tracking', 'Document Management', 'Mobile App'],
      price: '$99/month',
      users: 'Up to 100 properties',
      category: 'Real Estate',
      rating: 4.7,
      reviews: 234,
      freeTrial: '30 days',
      integrations: ['Zillow', 'Apartments.com', 'RentSpree', 'Buildium']
    },

    // Legal
    {
      icon: Scale,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and automated workflows.',
      features: ['Contract Analysis', 'Compliance Tracking', 'Document Templates', 'Workflow Automation', 'Version Control', 'E-signatures'],
      price: '$149/month',
      users: 'Up to 25 users',
      category: 'Legal',
      rating: 4.8,
      reviews: 123,
      freeTrial: '14 days',
      integrations: ['DocuSign', 'Adobe Sign', 'Microsoft Word', 'Google Docs']
    },

    // Manufacturing
    {
      icon: Truck,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, logistics management, and cost reduction.',
      features: ['Demand Forecasting', 'Logistics Optimization', 'Cost Analysis', 'Risk Management', 'Supplier Management', 'Analytics'],
      price: '$199/month',
      users: 'Up to 50 users',
      category: 'Manufacturing',
      rating: 4.6,
      reviews: 89,
      freeTrial: '30 days',
      integrations: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Sage']
    },

    // Entertainment
    {
      icon: Music,
      title: 'AI Music Producer',
      description: 'AI-powered music creation and production tool with beat generation, melody composition, and mixing capabilities.',
      features: ['Beat Generation', 'Melody Composition', 'Mixing Tools', 'Genre Styles', 'Collaboration', 'Export Options'],
      price: '$39/month',
      users: 'Up to 5 users',
      category: 'Entertainment',
      rating: 4.5,
      reviews: 456,
      freeTrial: '7 days',
      integrations: ['Spotify', 'SoundCloud', 'YouTube Music', 'Apple Music']
    },
    {
      icon: Camera,
      title: 'AI Video Editor',
      description: 'Intelligent video editing with AI-powered features, auto-cropping, and automated video creation.',
      features: ['Auto Editing', 'Smart Cropping', 'Video Templates', 'Effects Library', 'Audio Sync', 'Export Options'],
      price: '$49/month',
      users: 'Up to 10 users',
      category: 'Entertainment',
      rating: 4.4,
      reviews: 234,
      freeTrial: '7 days',
      integrations: ['YouTube', 'Vimeo', 'TikTok', 'Instagram']
    },

    // Lifestyle
    {
      icon: Gamepad2,
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans, nutrition tracking, and progress monitoring.',
      features: ['Workout Plans', 'Nutrition Tracking', 'Progress Monitoring', 'Goal Setting', 'Community', 'Wearable Integration'],
      price: '$19/month',
      users: 'Up to 5 users',
      category: 'Lifestyle',
      rating: 4.6,
      reviews: 789,
      freeTrial: '14 days',
      integrations: ['Apple Health', 'Google Fit', 'MyFitnessPal', 'Strava']
    },
    {
      icon: Lightbulb,
      title: 'AI Personal Assistant',
      description: 'Intelligent personal assistant with task management, calendar optimization, and smart reminders.',
      features: ['Task Management', 'Calendar Sync', 'Smart Reminders', 'Email Organization', 'Voice Commands', 'Mobile App'],
      price: '$15/month',
      users: 'Up to 3 users',
      category: 'Lifestyle',
      rating: 4.5,
      reviews: 567,
      freeTrial: '30 days',
      integrations: ['Google Assistant', 'Siri', 'Alexa', 'Cortana']
    }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const benefits = [
    'No upfront costs - Start with free trials',
    'Quick deployment - Get started in minutes',
    'Scalable solutions - Grow with your business',
    'Regular updates - Always latest features',
    '24/7 support - We\'re here to help',
    'Easy integration - Works with your tools',
    'AI-powered - Intelligent automation',
    'Mobile-first - Access anywhere, anytime'
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 50+ micro SAAS solutions powered by AI. From productivity tools to marketing automation, find the perfect solution for your business needs." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity tools, marketing automation, analytics, crm, project management" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS Solutions">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              50+ AI-powered micro SAAS tools designed to transform your business operations. 
              Start with free trials and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call: (302) 464-0950
              </a>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card hologram-card p-6">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
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
              <h2 className="text-3xl font-bold text-white neon-text">
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {product.rating} ({product.reviews} reviews)
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 mb-2">{product.users}</div>
                    <div className="text-sm text-green-400 font-medium">
                      {product.freeTrial} free trial
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 cyber-button text-center">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  <Zap className="w-5 h-5 mr-2 inline" />
                  Start Free Trial
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
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
