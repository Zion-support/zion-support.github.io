'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Shield,
  Clock,
  Users,
  BarChart3,
  Brain,
  Cloud,
  Smartphone,
  Code,
  Mail,
  Calendar,
  FileText,
  Target,
  Settings,
  Globe,
  Database,
  Lock,
  Cpu,
  Sparkles,
  Heart,
  DollarSign,
  Award,
  Lightbulb,
  Rocket
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
    'Healthcare',
    'Finance',
    'Education',
    'E-commerce',
    'HR & Recruitment',
    'Security',
    'Communication',
    'Design',
    'Automation'
  ];

  const microSaasProducts = [
    // Productivity Tools
    {
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and automated reporting for data-driven decisions.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'White-label options'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Analytics',
      popular: true,
      rating: 4.9,
      reviews: 1247,
      freeTrial: '14 days',
      marketPrice: '$199/month'
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Workflow automation'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Sales',
      popular: true,
      rating: 4.8,
      reviews: 892,
      freeTrial: '30 days',
      marketPrice: '$299/month'
    },
    {
      icon: '📝',
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered content creation tool with 50+ templates, SEO optimization, and multi-language support.',
      features: ['50+ templates', 'SEO optimization', 'Multi-language', 'Plagiarism check', 'Brand voice training', 'Team collaboration'],
      price: '$49/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      popular: true,
      rating: 4.7,
      reviews: 2156,
      freeTrial: '7 days',
      marketPrice: '$79/month'
    },
    {
      icon: '📅',
      title: 'Smart Scheduler AI',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management for maximum productivity.',
      features: ['Calendar optimization', 'Meeting coordination', 'Time blocking', 'Team scheduling', 'Zoom integration', 'Analytics'],
      price: '$29/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      rating: 4.6,
      reviews: 743,
      freeTrial: '14 days',
      marketPrice: '$49/month'
    },
    {
      icon: '💰',
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, smart categorization, and budget insights for better financial control.',
      features: ['Receipt scanning', 'Smart categorization', 'Budget insights', 'Tax preparation', 'Multi-currency', 'Reporting'],
      price: '$19/month',
      users: 'Up to 10 users',
      category: 'Finance',
      rating: 4.5,
      reviews: 432,
      freeTrial: '30 days',
      marketPrice: '$39/month'
    },
    {
      icon: '🎯',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking for enhanced productivity.',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Project templates', 'Integrations'],
      price: '$39/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      rating: 4.7,
      reviews: 1089,
      freeTrial: '14 days',
      marketPrice: '$59/month'
    },

    // Marketing Tools
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with personalization, A/B testing, and advanced analytics for maximum ROI.',
      features: ['AI personalization', 'A/B testing', 'Advanced analytics', 'Segmentation', 'Automation workflows', 'Deliverability optimization'],
      price: '$79/month',
      users: 'Up to 10,000 contacts',
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      reviews: 1567,
      freeTrial: '14 days',
      marketPrice: '$129/month'
    },
    {
      icon: '🎨',
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools and templates.',
      features: ['AI design tools', 'Logo generator', 'Template library', 'Brand kit', 'Collaboration', 'Export options'],
      price: '$35/month',
      users: 'Up to 20 users',
      category: 'Design',
      rating: 4.6,
      reviews: 892,
      freeTrial: '7 days',
      marketPrice: '$59/month'
    },
    {
      icon: '📱',
      title: 'Landing Page Builder Pro',
      description: 'Build high-converting landing pages with AI optimization, A/B testing, and conversion tracking.',
      features: ['AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'SEO tools', 'Analytics'],
      price: '$49/month',
      users: 'Unlimited pages',
      category: 'Marketing',
      rating: 4.7,
      reviews: 743,
      freeTrial: '14 days',
      marketPrice: '$79/month'
    },
    {
      icon: '📊',
      title: 'SEO Optimizer AI',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking.',
      features: ['Keyword research', 'Content suggestions', 'Ranking tracking', 'Technical SEO', 'Competitor analysis', 'Reports'],
      price: '$69/month',
      users: 'Up to 5 websites',
      category: 'Marketing',
      rating: 4.8,
      reviews: 1124,
      freeTrial: '7 days',
      marketPrice: '$99/month'
    },
    {
      icon: '📈',
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics across platforms.',
      features: ['Content creation', 'Scheduling', 'Performance analytics', 'Hashtag research', 'Engagement tracking', 'Multi-platform'],
      price: '$59/month',
      users: 'Up to 10 accounts',
      category: 'Marketing',
      rating: 4.6,
      reviews: 967,
      freeTrial: '14 days',
      marketPrice: '$89/month'
    },
    {
      icon: '🎯',
      title: 'Ad Campaign Manager Pro',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms.',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'A/B testing', 'Performance tracking', 'ROI analysis'],
      price: '$99/month',
      users: 'Up to 20 campaigns',
      category: 'Marketing',
      rating: 4.7,
      reviews: 654,
      freeTrial: '14 days',
      marketPrice: '$149/month'
    },

    // Development Tools
    {
      icon: '💻',
      title: 'Code Assistant AI',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages with intelligent suggestions.',
      features: ['Code completion', 'Debugging assistance', 'Code optimization', 'Multi-language support', 'Documentation', 'Best practices'],
      price: '$39/month',
      users: 'Up to 10 developers',
      category: 'Development',
      popular: true,
      rating: 4.8,
      reviews: 2156,
      freeTrial: '30 days',
      marketPrice: '$59/month'
    },
    {
      icon: '🔧',
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, automatic documentation generation, and comprehensive testing tools.',
      features: ['API creation', 'Auto documentation', 'Testing tools', 'Version control', 'Rate limiting', 'Analytics'],
      price: '$79/month',
      users: 'Up to 50 APIs',
      category: 'Development',
      rating: 4.7,
      reviews: 743,
      freeTrial: '14 days',
      marketPrice: '$119/month'
    },
    {
      icon: '🐛',
      title: 'Bug Tracker AI',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration', 'Reporting'],
      price: '$29/month',
      users: 'Up to 25 users',
      category: 'Development',
      rating: 4.6,
      reviews: 432,
      freeTrial: '14 days',
      marketPrice: '$49/month'
    },
    {
      icon: '📚',
      title: 'Doc Generator AI',
      description: 'Automatically generate technical documentation, API docs, and user guides from code with AI assistance.',
      features: ['Auto documentation', 'API docs', 'User guides', 'Code analysis', 'Multiple formats', 'Collaboration'],
      price: '$25/month',
      users: 'Up to 15 projects',
      category: 'Development',
      rating: 4.5,
      reviews: 321,
      freeTrial: '7 days',
      marketPrice: '$39/month'
    },

    // Healthcare Solutions
    {
      icon: '🏥',
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered insights, patient analytics, and automated reporting.',
      features: ['HIPAA compliance', 'Patient analytics', 'Automated reporting', 'Integration', 'Security', 'Backup'],
      price: '$199/month',
      users: 'Up to 100 patients',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 234,
      freeTrial: '30 days',
      marketPrice: '$299/month'
    },
    {
      icon: '💊',
      title: 'AI Drug Discovery Assistant',
      description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
      features: ['Molecular analysis', 'Compound screening', 'Clinical trials', 'Data visualization', 'Collaboration', 'Compliance'],
      price: '$999/month',
      users: 'Up to 50 researchers',
      category: 'Healthcare',
      rating: 4.8,
      reviews: 89,
      freeTrial: '14 days',
      marketPrice: '$1,499/month'
    },
    {
      icon: '🩺',
      title: 'Telemedicine Platform',
      description: 'Complete telemedicine solution with video consultations, appointment scheduling, and patient management.',
      features: ['Video consultations', 'Appointment scheduling', 'Patient management', 'Prescription management', 'Billing', 'Analytics'],
      price: '$149/month',
      users: 'Up to 25 providers',
      category: 'Healthcare',
      rating: 4.7,
      reviews: 156,
      freeTrial: '30 days',
      marketPrice: '$199/month'
    },

    // Finance & Accounting
    {
      icon: '💳',
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting software with automated bookkeeping, tax preparation, and financial insights.',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial insights', 'Invoice generation', 'Expense tracking', 'Reporting'],
      price: '$79/month',
      users: 'Up to 20 users',
      category: 'Finance',
      popular: true,
      rating: 4.8,
      reviews: 892,
      freeTrial: '30 days',
      marketPrice: '$129/month'
    },
    {
      icon: '📊',
      title: 'Financial Analytics Pro',
      description: 'Advanced financial analytics with predictive modeling, risk assessment, and investment optimization.',
      features: ['Predictive modeling', 'Risk assessment', 'Investment optimization', 'Portfolio analysis', 'Reporting', 'Alerts'],
      price: '$149/month',
      users: 'Up to 50 users',
      category: 'Finance',
      rating: 4.7,
      reviews: 456,
      freeTrial: '14 days',
      marketPrice: '$199/month'
    },
    {
      icon: '💰',
      title: 'Invoice Generator AI',
      description: 'Automated invoice creation with AI-powered insights, payment tracking, and financial reporting.',
      features: ['Auto invoice creation', 'Payment tracking', 'Financial reporting', 'Custom templates', 'Multi-currency', 'Integration'],
      price: '$39/month',
      users: 'Up to 100 invoices/month',
      category: 'Finance',
      rating: 4.6,
      reviews: 567,
      freeTrial: '14 days',
      marketPrice: '$59/month'
    },

    // E-commerce Solutions
    {
      icon: '🛒',
      title: 'E-commerce Analytics Pro',
      description: 'Comprehensive e-commerce analytics with customer insights, sales forecasting, and inventory optimization.',
      features: ['Customer insights', 'Sales forecasting', 'Inventory optimization', 'Conversion tracking', 'A/B testing', 'Reports'],
      price: '$99/month',
      users: 'Up to 1,000 products',
      category: 'E-commerce',
      popular: true,
      rating: 4.8,
      reviews: 743,
      freeTrial: '14 days',
      marketPrice: '$149/month'
    },
    {
      icon: '📦',
      title: 'Inventory Manager AI',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand forecasting', 'Automated reordering', 'Supply chain optimization', 'Multi-location', 'Integration', 'Analytics'],
      price: '$79/month',
      users: 'Up to 5,000 SKUs',
      category: 'E-commerce',
      rating: 4.7,
      reviews: 432,
      freeTrial: '14 days',
      marketPrice: '$119/month'
    },
    {
      icon: '🎯',
      title: 'Customer Segmentation AI',
      description: 'Advanced customer segmentation with behavioral analysis, personalized recommendations, and targeted marketing.',
      features: ['Behavioral analysis', 'Personalized recommendations', 'Targeted marketing', 'Customer lifetime value', 'Segmentation', 'Automation'],
      price: '$69/month',
      users: 'Up to 10,000 customers',
      category: 'E-commerce',
      rating: 4.6,
      reviews: 321,
      freeTrial: '14 days',
      marketPrice: '$99/month'
    },

    // HR & Recruitment
    {
      icon: '👔',
      title: 'AI Recruitment Assistant',
      description: 'Intelligent recruitment platform with resume screening, candidate matching, and interview scheduling.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Analytics'],
      price: '$149/month',
      users: 'Up to 100 positions',
      category: 'HR & Recruitment',
      popular: true,
      rating: 4.8,
      reviews: 567,
      freeTrial: '30 days',
      marketPrice: '$199/month'
    },
    {
      icon: '📋',
      title: 'Employee Performance Tracker',
      description: 'AI-powered employee performance tracking with goal setting, feedback collection, and performance analytics.',
      features: ['Goal setting', 'Feedback collection', 'Performance analytics', '360 reviews', 'Development plans', 'Reporting'],
      price: '$59/month',
      users: 'Up to 200 employees',
      category: 'HR & Recruitment',
      rating: 4.7,
      reviews: 234,
      freeTrial: '14 days',
      marketPrice: '$89/month'
    },
    {
      icon: '🎓',
      title: 'Learning Management System AI',
      description: 'AI-powered learning platform with personalized content, progress tracking, and skill development analytics.',
      features: ['Personalized content', 'Progress tracking', 'Skill analytics', 'Certification', 'Collaboration', 'Mobile app'],
      price: '$79/month',
      users: 'Up to 500 learners',
      category: 'Education',
      rating: 4.6,
      reviews: 345,
      freeTrial: '30 days',
      marketPrice: '$119/month'
    },

    // Security Solutions
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring with threat detection, vulnerability scanning, and compliance reporting.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Analytics'],
      price: '$199/month',
      users: 'Up to 200 endpoints',
      category: 'Security',
      popular: true,
      rating: 4.9,
      reviews: 456,
      freeTrial: '14 days',
      marketPrice: '$299/month'
    },
    {
      icon: '🛡️',
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with AI-powered security recommendations and team collaboration.',
      features: ['Password generation', 'Security recommendations', 'Team collaboration', 'Multi-factor auth', 'Breach monitoring', 'Compliance'],
      price: '$29/month',
      users: 'Up to 50 users',
      category: 'Security',
      rating: 4.8,
      reviews: 1234,
      freeTrial: '30 days',
      marketPrice: '$49/month'
    },
    {
      icon: '🔐',
      title: 'Identity Management AI',
      description: 'Advanced identity and access management with AI-powered risk assessment and automated provisioning.',
      features: ['Risk assessment', 'Automated provisioning', 'Single sign-on', 'Multi-factor auth', 'Compliance', 'Analytics'],
      price: '$99/month',
      users: 'Up to 100 users',
      category: 'Security',
      rating: 4.7,
      reviews: 234,
      freeTrial: '14 days',
      marketPrice: '$149/month'
    },

    // Communication Tools
    {
      icon: '💬',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      features: ['No-code builder', 'Multi-channel', 'AI training', 'Analytics', 'Integration', 'Customization'],
      price: '$49/month',
      users: 'Up to 5 chatbots',
      category: 'Communication',
      popular: true,
      rating: 4.7,
      reviews: 892,
      freeTrial: '14 days',
      marketPrice: '$79/month'
    },
    {
      icon: '📞',
      title: 'Call Analytics AI',
      description: 'AI-powered call analytics with sentiment analysis, conversation insights, and performance optimization.',
      features: ['Sentiment analysis', 'Conversation insights', 'Performance optimization', 'Call recording', 'Transcription', 'Reports'],
      price: '$79/month',
      users: 'Up to 100 calls/month',
      category: 'Communication',
      rating: 4.6,
      reviews: 345,
      freeTrial: '14 days',
      marketPrice: '$119/month'
    },
    {
      icon: '📹',
      title: 'Video Conferencing AI',
      description: 'AI-enhanced video conferencing with automatic transcription, meeting insights, and virtual backgrounds.',
      features: ['Auto transcription', 'Meeting insights', 'Virtual backgrounds', 'Recording', 'Screen sharing', 'Analytics'],
      price: '$39/month',
      users: 'Up to 50 participants',
      category: 'Communication',
      rating: 4.5,
      reviews: 234,
      freeTrial: '14 days',
      marketPrice: '$59/month'
    },

    // Automation Tools
    {
      icon: '⚡',
      title: 'Workflow Automation Pro',
      description: 'Powerful workflow automation with AI decision-making, 500+ integrations, and custom triggers.',
      features: ['AI decision-making', '500+ integrations', 'Custom triggers', 'Conditional logic', 'Scheduling', 'Monitoring'],
      price: '$99/month',
      users: 'Up to 100 workflows',
      category: 'Automation',
      popular: true,
      rating: 4.8,
      reviews: 567,
      freeTrial: '14 days',
      marketPrice: '$149/month'
    },
    {
      icon: '🤖',
      title: 'RPA Assistant',
      description: 'Robotic Process Automation with AI-powered task automation, screen recording, and process optimization.',
      features: ['Task automation', 'Screen recording', 'Process optimization', 'Error handling', 'Scheduling', 'Analytics'],
      price: '$149/month',
      users: 'Up to 50 bots',
      category: 'Automation',
      rating: 4.7,
      reviews: 234,
      freeTrial: '14 days',
      marketPrice: '$199/month'
    },
    {
      icon: '📊',
      title: 'Data Pipeline AI',
      description: 'Automated data processing and ETL pipelines with AI-powered data quality and transformation.',
      features: ['Data processing', 'ETL pipelines', 'Data quality', 'Transformation', 'Scheduling', 'Monitoring'],
      price: '$199/month',
      users: 'Up to 1TB data',
      category: 'Automation',
      rating: 4.6,
      reviews: 123,
      freeTrial: '14 days',
      marketPrice: '$299/month'
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
    '24/7 support - Expert help when you need it',
    'Easy integration - Works with your existing tools'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover 50+ innovative micro SAAS solutions powered by AI. From productivity tools to marketing automation, find the perfect solution for your business needs." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              50+ innovative AI-powered tools designed to transform your business operations. 
              Choose from productivity, marketing, development, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Start Free Trial</span>
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Plans
              </Link>
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">{product.icon}</div>
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
                      {product.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-300 mb-2">{product.users}</div>
                    {product.freeTrial && (
                      <div className="text-sm text-green-400 font-medium">{product.freeTrial} free trial</div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300 ml-2">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
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
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
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
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
