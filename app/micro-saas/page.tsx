'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  Code, 
  Camera, 
  ShoppingCart, 
  Shield, 
  Globe, 
  Smartphone, 
  Database, 
  Settings, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Download,
  ExternalLink,
  DollarSign,
  Clock,
  Target,
  Lightbulb,
  Wrench,
  Palette,
  Search,
  MessageSquare,
  BookOpen,
  PieChart,
  Layers,
  Cpu,
  Cloud,
  Lock,
  Eye,
  Edit3,
  Send,
  Filter,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Mic,
  Share2,
  Bug,
  Activity,
  Grid
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Tools', icon: Grid, count: 50 },
    { id: 'ai', name: 'AI Tools', icon: Brain, count: 15 },
    { id: 'productivity', name: 'Productivity', icon: Zap, count: 12 },
    { id: 'marketing', name: 'Marketing', icon: Target, count: 10 },
    { id: 'development', name: 'Development', icon: Code, count: 8 },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: 5 }
  ];

  const microSaasTools = [
    // AI Tools
    {
      id: 'ai-writing-assistant',
      name: 'AI Writing Assistant',
      description: 'Advanced AI-powered writing tool that helps create compelling content, emails, articles, and marketing copy with natural language processing.',
      category: 'ai',
      price: 29,
      priceType: 'month',
      features: ['Content Generation', 'Grammar Check', 'Tone Adjustment', 'SEO Optimization', 'Multi-language Support'],
      icon: Edit3,
      color: 'from-purple-500 to-pink-500',
      popularity: 95,
      rating: 4.8,
      users: 12500,
      launchDate: '2024-01-15',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-writing-assistant',
      apiUrl: 'https://api.ziontechgroup.com/ai-writing',
      tags: ['AI', 'Content', 'Writing', 'SEO', 'Marketing']
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for websites and applications with no coding required. Supports multiple platforms and languages.',
      category: 'ai',
      price: 49,
      priceType: 'month',
      features: ['Visual Builder', 'Multi-platform', 'Analytics', 'Custom Training', 'API Integration'],
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      popularity: 92,
      rating: 4.7,
      users: 8900,
      launchDate: '2024-02-01',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-chatbot-builder',
      apiUrl: 'https://api.ziontechgroup.com/chatbot',
      tags: ['AI', 'Chatbot', 'Customer Service', 'Automation']
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator',
      description: 'Generate stunning images, logos, and graphics using advanced AI models. Perfect for marketing, social media, and design projects.',
      category: 'ai',
      price: 39,
      priceType: 'month',
      features: ['Multiple AI Models', 'High Resolution', 'Style Transfer', 'Batch Processing', 'Commercial License'],
      icon: Camera,
      color: 'from-green-500 to-emerald-500',
      popularity: 88,
      rating: 4.6,
      users: 15600,
      launchDate: '2024-01-20',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-image-generator',
      apiUrl: 'https://api.ziontechgroup.com/image-gen',
      tags: ['AI', 'Design', 'Images', 'Graphics', 'Marketing']
    },
    {
      id: 'ai-voice-cloner',
      name: 'AI Voice Cloner',
      description: 'Clone voices with just 30 seconds of audio. Create realistic voiceovers, audiobooks, and personalized audio content.',
      category: 'ai',
      price: 59,
      priceType: 'month',
      features: ['Voice Cloning', 'Multiple Languages', 'Emotion Control', 'High Quality', 'API Access'],
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      popularity: 85,
      rating: 4.5,
      users: 7200,
      launchDate: '2024-02-15',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-voice-cloner',
      apiUrl: 'https://api.ziontechgroup.com/voice-clone',
      tags: ['AI', 'Voice', 'Audio', 'Content Creation']
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      description: 'Intelligent coding assistant that helps developers write, debug, and optimize code across multiple programming languages.',
      category: 'ai',
      price: 79,
      priceType: 'month',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation', 'Multi-language'],
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      popularity: 90,
      rating: 4.7,
      users: 18200,
      launchDate: '2024-01-10',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ai-code-assistant',
      apiUrl: 'https://api.ziontechgroup.com/code-assistant',
      tags: ['AI', 'Development', 'Coding', 'Programming']
    },

    // Productivity Tools
    {
      id: 'smart-scheduler',
      name: 'Smart Scheduler',
      description: 'AI-powered scheduling tool that automatically finds the best meeting times, manages calendars, and sends intelligent reminders.',
      category: 'productivity',
      price: 19,
      priceType: 'month',
      features: ['Auto Scheduling', 'Calendar Sync', 'Smart Reminders', 'Time Zone Handling', 'Team Coordination'],
      icon: Calendar,
      color: 'from-teal-500 to-blue-500',
      popularity: 87,
      rating: 4.6,
      users: 11200,
      launchDate: '2024-01-25',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/smart-scheduler',
      apiUrl: 'https://api.ziontechgroup.com/scheduler',
      tags: ['Productivity', 'Scheduling', 'Calendar', 'AI']
    },
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization, time tracking, and team collaboration features.',
      category: 'productivity',
      price: 24,
      priceType: 'month',
      features: ['AI Prioritization', 'Time Tracking', 'Team Collaboration', 'Progress Analytics', 'Mobile App'],
      icon: CheckCircle,
      color: 'from-emerald-500 to-green-500',
      popularity: 89,
      rating: 4.5,
      users: 9800,
      launchDate: '2024-02-05',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/task-manager-pro',
      apiUrl: 'https://api.ziontechgroup.com/tasks',
      tags: ['Productivity', 'Tasks', 'Project Management', 'AI']
    },
    {
      id: 'expense-tracker-ai',
      name: 'Expense Tracker AI',
      description: 'Intelligent expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      category: 'productivity',
      price: 15,
      priceType: 'month',
      features: ['Receipt Scanning', 'Auto Categorization', 'Financial Insights', 'Budget Tracking', 'Tax Reports'],
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      popularity: 82,
      rating: 4.4,
      users: 7400,
      launchDate: '2024-02-10',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/expense-tracker-ai',
      apiUrl: 'https://api.ziontechgroup.com/expenses',
      tags: ['Productivity', 'Finance', 'Expenses', 'AI']
    },
    {
      id: 'email-optimizer',
      name: 'Email Optimizer',
      description: 'AI-powered email tool that optimizes subject lines, content, and send times for maximum engagement and deliverability.',
      category: 'productivity',
      price: 34,
      priceType: 'month',
      features: ['Subject Optimization', 'Content Analysis', 'Send Time Optimization', 'A/B Testing', 'Analytics'],
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      popularity: 84,
      rating: 4.5,
      users: 13600,
      launchDate: '2024-01-30',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/email-optimizer',
      apiUrl: 'https://api.ziontechgroup.com/email-opt',
      tags: ['Productivity', 'Email', 'Marketing', 'AI']
    },
    {
      id: 'note-taking-ai',
      name: 'Note Taking AI',
      description: 'Intelligent note-taking app with voice-to-text, automatic summarization, and smart organization features.',
      category: 'productivity',
      price: 22,
      priceType: 'month',
      features: ['Voice Notes', 'Auto Summarization', 'Smart Organization', 'Search', 'Sync'],
      icon: BookOpen,
      color: 'from-violet-500 to-purple-500',
      popularity: 80,
      rating: 4.3,
      users: 9200,
      launchDate: '2024-02-20',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/note-taking-ai',
      apiUrl: 'https://api.ziontechgroup.com/notes',
      tags: ['Productivity', 'Notes', 'Voice', 'AI']
    },

    // Marketing Tools
    {
      id: 'social-media-manager',
      name: 'Social Media Manager',
      description: 'Comprehensive social media management tool with AI-powered content creation, scheduling, and analytics.',
      category: 'marketing',
      price: 45,
      priceType: 'month',
      features: ['Content Creation', 'Auto Scheduling', 'Analytics', 'Multi-platform', 'Engagement Tracking'],
      icon: Share2,
      color: 'from-cyan-500 to-blue-500',
      popularity: 91,
      rating: 4.6,
      users: 16800,
      launchDate: '2024-01-12',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/social-media-manager',
      apiUrl: 'https://api.ziontechgroup.com/social',
      tags: ['Marketing', 'Social Media', 'Content', 'AI']
    },
    {
      id: 'seo-optimizer',
      name: 'SEO Optimizer',
      description: 'AI-powered SEO tool that analyzes websites, suggests improvements, and tracks rankings across search engines.',
      category: 'marketing',
      price: 39,
      priceType: 'month',
      features: ['Site Analysis', 'Keyword Research', 'Rank Tracking', 'Content Suggestions', 'Competitor Analysis'],
      icon: Search,
      color: 'from-lime-500 to-green-500',
      popularity: 88,
      rating: 4.5,
      users: 14200,
      launchDate: '2024-01-18',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/seo-optimizer',
      apiUrl: 'https://api.ziontechgroup.com/seo',
      tags: ['Marketing', 'SEO', 'Analytics', 'AI']
    },
    {
      id: 'ad-campaign-manager',
      name: 'Ad Campaign Manager',
      description: 'Intelligent ad campaign management across Google, Facebook, and other platforms with AI optimization.',
      category: 'marketing',
      price: 69,
      priceType: 'month',
      features: ['Multi-platform', 'AI Optimization', 'Budget Management', 'A/B Testing', 'Performance Analytics'],
      icon: Target,
      color: 'from-red-500 to-pink-500',
      popularity: 86,
      rating: 4.4,
      users: 11500,
      launchDate: '2024-02-08',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/ad-campaign-manager',
      apiUrl: 'https://api.ziontechgroup.com/ads',
      tags: ['Marketing', 'Advertising', 'Campaigns', 'AI']
    },
    {
      id: 'content-calendar',
      name: 'Content Calendar',
      description: 'AI-powered content planning and scheduling tool with trend analysis and performance predictions.',
      category: 'marketing',
      price: 29,
      priceType: 'month',
      features: ['Content Planning', 'Trend Analysis', 'Performance Prediction', 'Team Collaboration', 'Templates'],
      icon: Calendar,
      color: 'from-amber-500 to-yellow-500',
      popularity: 83,
      rating: 4.3,
      users: 8700,
      launchDate: '2024-02-12',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/content-calendar',
      apiUrl: 'https://api.ziontechgroup.com/content',
      tags: ['Marketing', 'Content', 'Planning', 'AI']
    },
    {
      id: 'influencer-finder',
      name: 'Influencer Finder',
      description: 'AI-powered tool to discover and analyze influencers across social media platforms for marketing campaigns.',
      category: 'marketing',
      price: 49,
      priceType: 'month',
      features: ['Influencer Discovery', 'Audience Analysis', 'Engagement Metrics', 'Campaign Tracking', 'ROI Analysis'],
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      popularity: 79,
      rating: 4.2,
      users: 6400,
      launchDate: '2024-02-18',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/influencer-finder',
      apiUrl: 'https://api.ziontechgroup.com/influencers',
      tags: ['Marketing', 'Influencers', 'Social Media', 'AI']
    },

    // Development Tools
    {
      id: 'api-builder',
      name: 'API Builder',
      description: 'Visual API builder that creates RESTful APIs from database schemas with automatic documentation and testing.',
      category: 'development',
      price: 59,
      priceType: 'month',
      features: ['Visual Builder', 'Auto Documentation', 'Testing Suite', 'Database Integration', 'Deployment'],
      icon: Layers,
      color: 'from-slate-500 to-gray-500',
      popularity: 87,
      rating: 4.6,
      users: 10800,
      launchDate: '2024-01-22',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/api-builder',
      apiUrl: 'https://api.ziontechgroup.com/api-builder',
      tags: ['Development', 'API', 'Backend', 'Database']
    },
    {
      id: 'code-reviewer',
      name: 'Code Reviewer',
      description: 'Automated code review tool that analyzes code quality, security vulnerabilities, and performance issues.',
      category: 'development',
      price: 44,
      priceType: 'month',
      features: ['Code Analysis', 'Security Scanning', 'Performance Check', 'Style Guide', 'Team Reports'],
      icon: Eye,
      color: 'from-emerald-500 to-teal-500',
      popularity: 85,
      rating: 4.5,
      users: 9600,
      launchDate: '2024-02-03',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/code-reviewer',
      apiUrl: 'https://api.ziontechgroup.com/code-review',
      tags: ['Development', 'Code Review', 'Security', 'Quality']
    },
    {
      id: 'bug-tracker-pro',
      name: 'Bug Tracker Pro',
      description: 'Advanced bug tracking and issue management system with AI-powered prioritization and resolution suggestions.',
      category: 'development',
      price: 34,
      priceType: 'month',
      features: ['Issue Tracking', 'AI Prioritization', 'Resolution Suggestions', 'Team Collaboration', 'Analytics'],
      icon: Bug,
      color: 'from-red-500 to-orange-500',
      popularity: 82,
      rating: 4.4,
      users: 7800,
      launchDate: '2024-02-14',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/bug-tracker-pro',
      apiUrl: 'https://api.ziontechgroup.com/bugs',
      tags: ['Development', 'Bug Tracking', 'Project Management', 'AI']
    },
    {
      id: 'database-manager',
      name: 'Database Manager',
      description: 'Visual database management tool with query builder, performance monitoring, and automated backups.',
      category: 'development',
      price: 49,
      priceType: 'month',
      features: ['Visual Query Builder', 'Performance Monitor', 'Auto Backups', 'Schema Designer', 'Multi-DB Support'],
      icon: Database,
      color: 'from-blue-500 to-indigo-500',
      popularity: 84,
      rating: 4.5,
      users: 11200,
      launchDate: '2024-01-28',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/database-manager',
      apiUrl: 'https://api.ziontechgroup.com/database',
      tags: ['Development', 'Database', 'Management', 'Performance']
    },
    {
      id: 'deployment-automator',
      name: 'Deployment Automator',
      description: 'Automated deployment pipeline with CI/CD, testing, and rollback capabilities for multiple environments.',
      category: 'development',
      price: 69,
      priceType: 'month',
      features: ['CI/CD Pipeline', 'Auto Testing', 'Rollback System', 'Multi-Environment', 'Monitoring'],
      icon: RefreshCw,
      color: 'from-green-500 to-emerald-500',
      popularity: 89,
      rating: 4.7,
      users: 13400,
      launchDate: '2024-01-08',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/deployment-automator',
      apiUrl: 'https://api.ziontechgroup.com/deploy',
      tags: ['Development', 'DevOps', 'CI/CD', 'Automation']
    },

    // Analytics Tools
    {
      id: 'business-intelligence',
      name: 'Business Intelligence',
      description: 'AI-powered business intelligence platform with advanced analytics, reporting, and predictive insights.',
      category: 'analytics',
      price: 79,
      priceType: 'month',
      features: ['Advanced Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization', 'Real-time Reports'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      popularity: 92,
      rating: 4.7,
      users: 15600,
      launchDate: '2024-01-05',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/business-intelligence',
      apiUrl: 'https://api.ziontechgroup.com/bi',
      tags: ['Analytics', 'Business Intelligence', 'Data', 'AI']
    },
    {
      id: 'user-analytics',
      name: 'User Analytics',
      description: 'Comprehensive user behavior analytics with heatmaps, session recordings, and conversion tracking.',
      category: 'analytics',
      price: 39,
      priceType: 'month',
      features: ['Heatmaps', 'Session Recordings', 'Conversion Tracking', 'Funnel Analysis', 'A/B Testing'],
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      popularity: 86,
      rating: 4.5,
      users: 12800,
      launchDate: '2024-01-15',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/user-analytics',
      apiUrl: 'https://api.ziontechgroup.com/user-analytics',
      tags: ['Analytics', 'User Behavior', 'Conversion', 'UX']
    },
    {
      id: 'performance-monitor',
      name: 'Performance Monitor',
      description: 'Real-time application performance monitoring with alerts, diagnostics, and optimization recommendations.',
      category: 'analytics',
      price: 54,
      priceType: 'month',
      features: ['Real-time Monitoring', 'Alert System', 'Performance Diagnostics', 'Optimization Tips', 'Historical Data'],
      icon: Activity,
      color: 'from-green-500 to-teal-500',
      popularity: 88,
      rating: 4.6,
      users: 10200,
      launchDate: '2024-01-20',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/performance-monitor',
      apiUrl: 'https://api.ziontechgroup.com/performance',
      tags: ['Analytics', 'Performance', 'Monitoring', 'DevOps']
    },
    {
      id: 'conversion-optimizer',
      name: 'Conversion Optimizer',
      description: 'AI-powered conversion rate optimization tool with A/B testing, user journey analysis, and improvement suggestions.',
      category: 'analytics',
      price: 64,
      priceType: 'month',
      features: ['A/B Testing', 'Journey Analysis', 'AI Suggestions', 'Multivariate Testing', 'ROI Tracking'],
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      popularity: 84,
      rating: 4.4,
      users: 8900,
      launchDate: '2024-02-01',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/conversion-optimizer',
      apiUrl: 'https://api.ziontechgroup.com/conversion',
      tags: ['Analytics', 'Conversion', 'A/B Testing', 'AI']
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization',
      description: 'Advanced data visualization tool with interactive charts, dashboards, and automated report generation.',
      category: 'analytics',
      price: 44,
      priceType: 'month',
      features: ['Interactive Charts', 'Custom Dashboards', 'Auto Reports', 'Data Import', 'Sharing'],
      icon: PieChart,
      color: 'from-indigo-500 to-purple-500',
      popularity: 81,
      rating: 4.3,
      users: 7600,
      launchDate: '2024-02-06',
      status: 'live',
      demoUrl: 'https://ziontechgroup.com/data-visualization',
      apiUrl: 'https://api.ziontechgroup.com/visualization',
      tags: ['Analytics', 'Visualization', 'Charts', 'Reports']
    }
  ];

  const filteredTools = microSaasTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return b.users - a.users;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.popularity - a.popularity;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover 50+ powerful, AI-powered micro SAAS tools designed to boost productivity, 
              streamline workflows, and drive business growth. Each tool is built with cutting-edge 
              technology and real-world applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                50+ Tools Available
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                AI-Powered Features
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                API Access Included
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-slate-800/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-purple-500/20">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tools by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="users">Most Users</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTools.map((tool) => (
            <div key={tool.id} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              {/* Tool Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300 ml-1">{tool.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({tool.users.toLocaleString()})</span>
                </div>
              </div>

              {/* Tool Info */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {tool.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {tool.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                  {tool.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">
                      +{tool.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-white">${tool.price}</span>
                  <span className="text-gray-400 text-sm">/{tool.priceType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Popularity</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                      style={{ width: `${tool.popularity}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {tool.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <a
                  href={tool.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Demo
                </a>
                <a
                  href={tool.apiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Status */}
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${tool.status === 'live' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                  <span className="text-gray-400 capitalize">{tool.status}</span>
                </div>
                <span className="text-gray-500">Launched {new Date(tool.launchDate).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Showing {sortedTools.length} of {microSaasTools.length} tools
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our micro SAAS tools today and experience the power of AI-driven productivity. 
              All tools come with free trials and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Free
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-500 text-purple-400 py-3 px-8 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;