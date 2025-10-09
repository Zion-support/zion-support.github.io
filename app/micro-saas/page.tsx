'use client';
import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  CheckSquare, 
  TrendingUp, 
  Globe, 
  Sparkles, 
  Target, 
  Code, 
  Settings, 
  FileText, 
  Shield, 
  Star,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Clock,
  Award
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasServices = [
    {
      id: 'ai-writing-assistant',
      name: 'AI Writing Assistant Pro',
      category: 'content',
      description: 'Advanced AI-powered writing tool with grammar checking, style suggestions, and content optimization.',
      features: ['Grammar & Style Check', 'Content Optimization', 'Tone Analysis', 'Plagiarism Detection', 'Multi-language Support'],
      price: '$29/month',
      priceYearly: '$290/year',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      rating: 4.9,
      users: '50K+',
      demo: 'https://demo.ziontechgroup.com/ai-writing',
      docs: 'https://docs.ziontechgroup.com/ai-writing'
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics Dashboard',
      category: 'analytics',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization', 'API Integration'],
      price: '$49/month',
      priceYearly: '$490/year',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      rating: 4.8,
      users: '25K+',
      demo: 'https://demo.ziontechgroup.com/analytics',
      docs: 'https://docs.ziontechgroup.com/analytics'
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      category: 'productivity',
      description: 'Intelligent scheduling system that optimizes meetings and manages calendars automatically.',
      features: ['Auto-scheduling', 'Conflict Resolution', 'Time Zone Management', 'Meeting Optimization', 'Calendar Sync'],
      price: '$19/month',
      priceYearly: '$190/year',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      rating: 4.7,
      users: '15K+',
      demo: 'https://demo.ziontechgroup.com/scheduler',
      docs: 'https://docs.ziontechgroup.com/scheduler'
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker Pro',
      category: 'finance',
      description: 'AI-powered expense tracking with receipt scanning and automated categorization.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Expense Reports', 'Budget Tracking', 'Tax Preparation'],
      price: '$15/month',
      priceYearly: '$150/year',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      popular: false,
      rating: 4.6,
      users: '30K+',
      demo: 'https://demo.ziontechgroup.com/expense',
      docs: 'https://docs.ziontechgroup.com/expense'
    },
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      category: 'productivity',
      description: 'Advanced task management with AI-powered prioritization and team collaboration.',
      features: ['AI Prioritization', 'Team Collaboration', 'Project Tracking', 'Time Tracking', 'Progress Analytics'],
      price: '$25/month',
      priceYearly: '$250/year',
      icon: CheckSquare,
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      rating: 4.8,
      users: '40K+',
      demo: 'https://demo.ziontechgroup.com/tasks',
      docs: 'https://docs.ziontechgroup.com/tasks'
    },
    {
      id: 'crm-lite',
      name: 'CRM Lite',
      category: 'sales',
      description: 'Lightweight CRM with AI-powered lead scoring and customer insights.',
      features: ['Lead Scoring', 'Contact Management', 'Sales Pipeline', 'Email Integration', 'Analytics'],
      price: '$35/month',
      priceYearly: '$350/year',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      rating: 4.7,
      users: '20K+',
      demo: 'https://demo.ziontechgroup.com/crm',
      docs: 'https://docs.ziontechgroup.com/crm'
    },
    {
      id: 'email-optimizer',
      name: 'Email Optimizer Pro',
      category: 'marketing',
      description: 'AI-powered email marketing tool with A/B testing and performance optimization.',
      features: ['A/B Testing', 'Subject Line Optimization', 'Send Time Optimization', 'Content Analysis', 'Performance Tracking'],
      price: '$39/month',
      priceYearly: '$390/year',
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      rating: 4.5,
      users: '18K+',
      demo: 'https://demo.ziontechgroup.com/email',
      docs: 'https://docs.ziontechgroup.com/email'
    },
    {
      id: 'social-media-manager',
      name: 'Social Media Manager',
      category: 'marketing',
      description: 'Automated social media management with AI content generation and scheduling.',
      features: ['Content Generation', 'Auto-scheduling', 'Hashtag Optimization', 'Performance Analytics', 'Multi-platform'],
      price: '$45/month',
      priceYearly: '$450/year',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500',
      popular: true,
      rating: 4.6,
      users: '22K+',
      demo: 'https://demo.ziontechgroup.com/social',
      docs: 'https://docs.ziontechgroup.com/social'
    },
    {
      id: 'ai-design-studio',
      name: 'AI Design Studio',
      category: 'design',
      description: 'AI-powered design tool for creating logos, graphics, and marketing materials.',
      features: ['Logo Generation', 'Graphic Design', 'Template Library', 'Brand Kit', 'Export Options'],
      price: '$55/month',
      priceYearly: '$550/year',
      icon: Sparkles,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      rating: 4.7,
      users: '12K+',
      demo: 'https://demo.ziontechgroup.com/design',
      docs: 'https://docs.ziontechgroup.com/design'
    },
    {
      id: 'landing-page-builder',
      name: 'Landing Page Builder',
      category: 'web',
      description: 'AI-powered landing page builder with conversion optimization and A/B testing.',
      features: ['Drag & Drop Builder', 'AI Optimization', 'A/B Testing', 'Analytics', 'Mobile Responsive'],
      price: '$29/month',
      priceYearly: '$290/year',
      icon: Globe,
      color: 'from-emerald-500 to-green-500',
      popular: false,
      rating: 4.4,
      users: '16K+',
      demo: 'https://demo.ziontechgroup.com/landing',
      docs: 'https://docs.ziontechgroup.com/landing'
    },
    {
      id: 'seo-optimizer',
      name: 'SEO Optimizer Pro',
      category: 'seo',
      description: 'AI-powered SEO tool for keyword research, content optimization, and rank tracking.',
      features: ['Keyword Research', 'Content Analysis', 'Rank Tracking', 'Competitor Analysis', 'Technical SEO'],
      price: '$49/month',
      priceYearly: '$490/year',
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      rating: 4.8,
      users: '35K+',
      demo: 'https://demo.ziontechgroup.com/seo',
      docs: 'https://docs.ziontechgroup.com/seo'
    },
    {
      id: 'ad-campaign-manager',
      name: 'Ad Campaign Manager',
      category: 'marketing',
      description: 'AI-powered ad campaign management across multiple platforms with optimization.',
      features: ['Multi-platform Ads', 'AI Optimization', 'Budget Management', 'Performance Tracking', 'A/B Testing'],
      price: '$65/month',
      priceYearly: '$650/year',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500',
      popular: false,
      rating: 4.5,
      users: '14K+',
      demo: 'https://demo.ziontechgroup.com/ads',
      docs: 'https://docs.ziontechgroup.com/ads'
    },
    {
      id: 'code-assistant',
      name: 'AI Code Assistant',
      category: 'development',
      description: 'AI-powered coding assistant with code generation, debugging, and documentation.',
      features: ['Code Generation', 'Debugging Help', 'Code Review', 'Documentation', 'Multi-language'],
      price: '$39/month',
      priceYearly: '$390/year',
      icon: Code,
      color: 'from-gray-500 to-slate-500',
      popular: true,
      rating: 4.9,
      users: '45K+',
      demo: 'https://demo.ziontechgroup.com/code',
      docs: 'https://docs.ziontechgroup.com/code'
    },
    {
      id: 'api-builder',
      name: 'API Builder Pro',
      category: 'development',
      description: 'Visual API builder with AI-powered endpoint generation and testing.',
      features: ['Visual Builder', 'Auto-documentation', 'Testing Suite', 'Rate Limiting', 'Analytics'],
      price: '$59/month',
      priceYearly: '$590/year',
      icon: Settings,
      color: 'from-blue-500 to-indigo-500',
      popular: false,
      rating: 4.6,
      users: '8K+',
      demo: 'https://demo.ziontechgroup.com/api',
      docs: 'https://docs.ziontechgroup.com/api'
    },
    {
      id: 'bug-tracker-pro',
      name: 'Bug Tracker Pro',
      category: 'development',
      description: 'AI-powered bug tracking and issue management with automated prioritization.',
      features: ['Auto-prioritization', 'Issue Tracking', 'Team Collaboration', 'Integration', 'Reports'],
      price: '$25/month',
      priceYearly: '$250/year',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      popular: false,
      rating: 4.4,
      users: '11K+',
      demo: 'https://demo.ziontechgroup.com/bugs',
      docs: 'https://docs.ziontechgroup.com/bugs'
    },
    {
      id: 'doc-generator',
      name: 'AI Doc Generator',
      category: 'productivity',
      description: 'AI-powered documentation generator for code, APIs, and technical content.',
      features: ['Auto-generation', 'Multiple Formats', 'Code Analysis', 'Templates', 'Collaboration'],
      price: '$19/month',
      priceYearly: '$190/year',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      popular: false,
      rating: 4.3,
      users: '7K+',
      demo: 'https://demo.ziontechgroup.com/docs',
      docs: 'https://docs.ziontechgroup.com/docs'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasServices.length },
    { id: 'content', name: 'Content & Writing', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'sales', name: 'Sales & CRM', count: microSaasServices.filter(s => s.category === 'sales').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'design', name: 'Design', count: microSaasServices.filter(s => s.category === 'design').length },
    { id: 'web', name: 'Web Development', count: microSaasServices.filter(s => s.category === 'web').length },
    { id: 'seo', name: 'SEO', count: microSaasServices.filter(s => s.category === 'seo').length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of 50+ AI-powered micro SAAS tools designed to boost productivity, 
            streamline workflows, and accelerate business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-all">
              <Play className="w-5 h-5 mr-2 inline" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search micro SAAS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-700 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded">
                        POPULAR
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">or {service.priceYearly}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">{service.users} users</div>
                    <div className="text-xs text-gray-500">Active</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 cyber-button text-sm py-2">
                    <Play className="w-4 h-4 mr-1" />
                    Try Demo
                  </button>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                  <a
                    href={service.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-400 text-gray-400 rounded-lg hover:bg-gray-400/10 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS tools to boost productivity and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                <Award className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                <Users className="w-5 h-5 mr-2 inline" />
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <Clock className="w-4 h-4 inline mr-1" />
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
