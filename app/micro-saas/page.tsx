'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Mail, 
  Calendar, 
  Target, 
  DollarSign, 
  Search, 
  Filter,
  Clock,
  Globe,
  Smartphone,
  Database,
  Settings,
  Code,
  Palette,
  Headphones,
  Monitor,
  Lock,
  Cpu,
  Brain,
  Cloud,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
  marketPrice?: string;
  benefits: string[];
  demoUrl?: string;
  trialDays: number;
}

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and automated reporting for data-driven decisions.',
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Custom report generation',
        'Email alerts and notifications',
        'Multi-platform integration (100+ sources)',
        'Advanced filtering and segmentation',
        'White-label reporting',
        'API access & webhooks',
        'Mobile app included',
        'Team collaboration tools'
      ],
      price: '$49/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$199/month',
      benefits: ['Save 20+ hours/week on reporting', 'Increase data accuracy by 95%', 'Reduce decision time by 60%'],
      demoUrl: 'https://demo.ziontechgroup.com/analytics',
      trialDays: 14
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with AI chatbot, live chat, ticket management, and sentiment analysis.',
      features: [
        'AI chatbot with NLP (50+ languages)',
        'Live chat support',
        'Ticket management system',
        'Sentiment analysis',
        'Knowledge base integration',
        'Analytics and reporting',
        'CRM integration (Salesforce, HubSpot)',
        'Multi-channel support',
        'Automated responses',
        'Escalation management'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Communication',
      marketPrice: '$299/month',
      benefits: ['Reduce support costs by 70%', 'Improve response time by 90%', 'Increase customer satisfaction by 40%'],
      demoUrl: 'https://demo.ziontechgroup.com/support',
      trialDays: 14
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Security Monitor Pro',
      description: 'Enterprise-grade security monitoring with threat detection, compliance reporting, and automated incident response.',
      features: [
        'Real-time threat detection',
        'Automated security scans',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Incident response automation',
        'Security dashboard',
        'Vulnerability assessment',
        'Penetration testing',
        '24/7 monitoring',
        'Threat intelligence feeds',
        'Security training modules'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      marketPrice: '$599/month',
      benefits: ['Prevent 99.9% of security breaches', 'Reduce compliance costs by 50%', 'Automate 80% of security tasks'],
      demoUrl: 'https://demo.ziontechgroup.com/security',
      trialDays: 7
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Backup Enterprise',
      description: 'Comprehensive cloud backup with disaster recovery, version control, and automated compliance for enterprise data protection.',
      features: [
        'Automated daily backups',
        'Cross-platform sync',
        'Version control & history',
        'Disaster recovery',
        'Encrypted storage (AES-256)',
        'Incremental backups',
        'Point-in-time recovery',
        'Compliance features (GDPR, HIPAA)',
        'Multi-cloud support',
        'Bandwidth optimization'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Storage',
      marketPrice: '$299/month',
      benefits: ['99.99% data recovery guarantee', 'Reduce backup costs by 60%', 'Automate 100% of backup processes'],
      demoUrl: 'https://demo.ziontechgroup.com/backup',
      trialDays: 14
    },
    {
      id: '5',
      icon: '📈',
      title: 'Performance Tracker Plus',
      description: 'Advanced application performance monitoring with AI-powered insights, error tracking, and automated optimization recommendations.',
      features: [
        'Performance monitoring',
        'Error tracking and alerting',
        'Uptime monitoring (99.9% SLA)',
        'AI-powered insights',
        'Alert management',
        'Custom dashboards',
        'API monitoring',
        'Mobile app monitoring',
        'Database performance',
        'Load testing integration'
      ],
      price: '$99/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring',
      marketPrice: '$399/month',
      benefits: ['Improve app performance by 40%', 'Reduce downtime by 95%', 'Save 15+ hours/week on monitoring'],
      demoUrl: 'https://demo.ziontechgroup.com/performance',
      trialDays: 14
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with AI-powered workflow optimization, custom AI models, and 500+ integrations.',
      features: [
        'Workflow automation',
        'AI-powered insights',
        'Task scheduling',
        '500+ integrations',
        'Custom AI models',
        'Process mining',
        'Exception handling',
        'Performance analytics',
        'Visual workflow builder',
        'API automation'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      marketPrice: '$799/month',
      benefits: ['Automate 80% of repetitive tasks', 'Increase efficiency by 300%', 'Reduce errors by 95%'],
      demoUrl: 'https://demo.ziontechgroup.com/automation',
      trialDays: 14
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization, A/B testing, and advanced segmentation.',
      features: [
        'Email automation workflows',
        'AI-powered personalization',
        'A/B testing',
        'Advanced segmentation',
        'Email templates (1000+)',
        'Analytics and reporting',
        'CRM integration',
        'Compliance tools (CAN-SPAM, GDPR)',
        'Landing page builder',
        'Social media integration'
      ],
      price: '$69/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$299/month',
      benefits: ['Increase open rates by 45%', 'Boost click-through rates by 60%', 'Save 25+ hours/week on campaigns'],
      demoUrl: 'https://demo.ziontechgroup.com/email',
      trialDays: 14
    },
    {
      id: '8',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Complete social media management with AI content generation, scheduling, analytics, and brand monitoring.',
      features: [
        'Multi-platform posting (15+ networks)',
        'AI content generation',
        'Post scheduling',
        'Analytics and insights',
        'Hashtag optimization',
        'Engagement tracking',
        'Team collaboration',
        'Brand monitoring',
        'Influencer management',
        'Social listening'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$199/month',
      benefits: ['Increase engagement by 80%', 'Save 30+ hours/week on social media', 'Grow followers by 200%'],
      demoUrl: 'https://demo.ziontechgroup.com/social',
      trialDays: 14
    },
    {
      id: '9',
      icon: '💰',
      title: 'Expense Tracker Pro',
      description: 'Advanced expense management with AI-powered categorization, receipt scanning, and automated reporting.',
      features: [
        'Receipt scanning (OCR)',
        'AI categorization',
        'Expense reporting',
        'Budget tracking',
        'Approval workflows',
        'Integration with accounting software',
        'Mobile app',
        'Compliance features',
        'Multi-currency support',
        'Tax preparation tools'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$149/month',
      benefits: ['Reduce expense processing time by 90%', 'Improve accuracy by 95%', 'Save 20+ hours/month on bookkeeping'],
      demoUrl: 'https://demo.ziontechgroup.com/expenses',
      trialDays: 14
    },
    {
      id: '10',
      icon: '📅',
      title: 'Appointment Scheduler Plus',
      description: 'Smart appointment scheduling with AI optimization, automated reminders, and payment processing.',
      features: [
        'Calendar integration (Google, Outlook, Apple)',
        'AI scheduling optimization',
        'Automated reminders',
        'Payment processing',
        'Video conferencing integration',
        'Multi-timezone support',
        'Custom booking forms',
        'Analytics dashboard',
        'Client management',
        'Recurring appointments'
      ],
      price: '$49/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Scheduling',
      marketPrice: '$199/month',
      benefits: ['Reduce no-shows by 70%', 'Increase bookings by 150%', 'Save 15+ hours/week on scheduling'],
      demoUrl: 'https://demo.ziontechgroup.com/scheduler',
      trialDays: 14
    },
    {
      id: '11',
      icon: '📝',
      title: 'Content Generator AI',
      description: 'AI-powered content creation for blogs, social media, marketing materials, and SEO-optimized content.',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar',
        'Plagiarism checking',
        'Multi-language support (50+ languages)',
        'Image generation',
        'Video script writing'
      ],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Content',
      marketPrice: '$299/month',
      benefits: ['Create content 10x faster', 'Improve SEO rankings by 200%', 'Save 40+ hours/week on content creation'],
      demoUrl: 'https://demo.ziontechgroup.com/content',
      trialDays: 14
    },
    {
      id: '12',
      icon: '🎯',
      title: 'Lead Generation Suite',
      description: 'Complete lead generation and management system with AI-powered scoring, email sequences, and CRM integration.',
      features: [
        'Lead capture forms',
        'AI lead scoring',
        'Email sequences',
        'CRM integration',
        'Lead tracking',
        'Conversion analytics',
        'A/B testing',
        'Automated follow-ups',
        'Social media lead generation',
        'LinkedIn automation'
      ],
      price: '$129/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Sales',
      marketPrice: '$499/month',
      benefits: ['Increase lead quality by 300%', 'Boost conversion rates by 150%', 'Generate 5x more qualified leads'],
      demoUrl: 'https://demo.ziontechgroup.com/leads',
      trialDays: 14
    },
    {
      id: '13',
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'Advanced SEO analysis and optimization with AI-powered recommendations, keyword research, and rank tracking.',
      features: [
        'Keyword research',
        'Site audit',
        'Competitor analysis',
        'AI content optimization',
        'Rank tracking',
        'Technical SEO',
        'Link building tools',
        'Performance monitoring',
        'Local SEO',
        'Schema markup generator'
      ],
      price: '$89/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'SEO',
      marketPrice: '$399/month',
      benefits: ['Improve search rankings by 300%', 'Increase organic traffic by 250%', 'Save 30+ hours/week on SEO'],
      demoUrl: 'https://demo.ziontechgroup.com/seo',
      trialDays: 14
    },
    {
      id: '14',
      icon: '📊',
      title: 'Survey Builder Pro',
      description: 'Advanced survey creation and analysis with AI-powered insights, custom themes, and multi-channel distribution.',
      features: [
        'Drag-and-drop builder',
        'AI question suggestions',
        'Advanced analytics',
        'Custom themes',
        'Multi-channel distribution',
        'Response tracking',
        'Data export',
        'Integration capabilities',
        'Conditional logic',
        'Real-time results'
      ],
      price: '$59/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Research',
      marketPrice: '$199/month',
      benefits: ['Increase response rates by 180%', 'Get insights 5x faster', 'Save 25+ hours/week on surveys'],
      demoUrl: 'https://demo.ziontechgroup.com/surveys',
      trialDays: 14
    },
    {
      id: '15',
      icon: '🏢',
      title: 'Project Management AI',
      description: 'Intelligent project management with AI-powered task optimization, team collaboration, and resource planning.',
      features: [
        'Task management',
        'AI task prioritization',
        'Team collaboration',
        'Time tracking',
        'Resource planning',
        'Progress analytics',
        'Integration capabilities',
        'Mobile app',
        'Gantt charts',
        'Risk management'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Management',
      marketPrice: '$399/month',
      benefits: ['Complete projects 40% faster', 'Improve team productivity by 60%', 'Reduce project overruns by 80%'],
      demoUrl: 'https://demo.ziontechgroup.com/projects',
      trialDays: 14
    },
    {
      id: '16',
      icon: '💻',
      title: 'Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages with real-time suggestions.',
      features: [
        'Code completion (20+ languages)',
        'AI debugging assistance',
        'Code optimization suggestions',
        'Security vulnerability detection',
        'Documentation generation',
        'Code review automation',
        'Refactoring suggestions',
        'Performance analysis',
        'Testing assistance',
        'Git integration'
      ],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Development',
      marketPrice: '$299/month',
      benefits: ['Write code 3x faster', 'Reduce bugs by 70%', 'Improve code quality by 80%'],
      demoUrl: 'https://demo.ziontechgroup.com/code',
      trialDays: 14
    },
    {
      id: '17',
      icon: '🎨',
      title: 'Design Studio AI',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation with brand consistency.',
      features: [
        'AI design generation',
        'Brand consistency tools',
        'A/B testing optimization',
        'Color and layout suggestions',
        'Template customization',
        'Logo generation',
        'Social media graphics',
        'Print design tools',
        'Collaboration features',
        'Asset management'
      ],
      price: '$69/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Design',
      marketPrice: '$249/month',
      benefits: ['Create designs 5x faster', 'Maintain brand consistency', 'Reduce design costs by 60%'],
      demoUrl: 'https://demo.ziontechgroup.com/design',
      trialDays: 14
    },
    {
      id: '18',
      icon: '📞',
      title: 'Call Center AI',
      description: 'AI-powered call center solution with intelligent routing, sentiment analysis, and automated call summaries.',
      features: [
        'Intelligent call routing',
        'Sentiment analysis',
        'Automated call summaries',
        'Real-time transcription',
        'Call analytics',
        'Quality assurance',
        'Agent training tools',
        'CRM integration',
        'Multi-language support',
        'Performance metrics'
      ],
      price: '$149/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Communication',
      marketPrice: '$599/month',
      benefits: ['Improve call resolution by 50%', 'Reduce wait times by 70%', 'Increase customer satisfaction by 40%'],
      demoUrl: 'https://demo.ziontechgroup.com/calls',
      trialDays: 7
    },
    {
      id: '19',
      icon: '📚',
      title: 'Learning Management AI',
      description: 'AI-powered learning management system with personalized content, progress tracking, and automated assessments.',
      features: [
        'Personalized learning paths',
        'Progress tracking',
        'Automated assessments',
        'Content creation tools',
        'Gamification',
        'Certification management',
        'Mobile learning',
        'Analytics and reporting',
        'Integration capabilities',
        'Multi-language support'
      ],
      price: '$89/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Education',
      marketPrice: '$399/month',
      benefits: ['Improve learning outcomes by 60%', 'Reduce training costs by 50%', 'Increase completion rates by 80%'],
      demoUrl: 'https://demo.ziontechgroup.com/learning',
      trialDays: 14
    },
    {
      id: '20',
      icon: '🏥',
      title: 'Healthcare AI Assistant',
      description: 'AI-powered healthcare management with patient scheduling, medical records, and compliance monitoring.',
      features: [
        'Patient scheduling',
        'Medical records management',
        'Compliance monitoring (HIPAA)',
        'Appointment reminders',
        'Billing integration',
        'Telemedicine support',
        'Prescription management',
        'Insurance verification',
        'Analytics and reporting',
        'Mobile app'
      ],
      price: '$199/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Healthcare',
      marketPrice: '$799/month',
      benefits: ['Improve patient care by 40%', 'Reduce administrative costs by 60%', 'Ensure 100% compliance'],
      demoUrl: 'https://demo.ziontechgroup.com/healthcare',
      trialDays: 7
    }
  ];

  const categories = [
    'all', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 
    'AI', 'Marketing', 'Finance', 'Scheduling', 'Content', 'Sales', 'SEO', 
    'Research', 'Management', 'Development', 'Design', 'Education', 'Healthcare'
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of 50+ micro SaaS solutions designed to solve specific business problems. AI-powered tools for analytics, marketing, automation, and more. Start free trials today." />
        <meta name="keywords" content="micro SaaS, business tools, AI solutions, analytics dashboard, customer support, security monitoring, cloud backup, performance tracking, workflow automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SaaS Solutions">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Quick setup, affordable pricing, powerful features that deliver real results.
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
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <div className="relative md:w-64">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                    <option value="all" className="bg-slate-800">All Categories</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative md:w-48">
                  <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                    <option value="popular" className="bg-slate-800">Most Popular</option>
                    <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                    <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                    <option value="name" className="bg-slate-800">Name A-Z</option>
                  </select>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                {selectedCategory === 'all' ? 'All Micro SaaS Products' : `${selectedCategory} Products`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {sortedProducts.length} solution{sortedProducts.length !== 1 ? 's' : ''} found. Choose the perfect tool for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative cyber-card hologram-card p-8 ${
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
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                        {product.marketPrice && (
                          <span className="text-lg text-gray-400 line-through ml-2">{product.marketPrice}</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {product.users}
                      </div>
                    </div>
                    <div className="text-sm text-cyan-400 font-medium">
                      {product.trialDays}-day free trial
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 6 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 6} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-4 mb-6">
                    <div className="text-sm">
                      <div className="text-gray-400 mb-2">Key Benefits:</div>
                      <div className="space-y-1">
                        {product.benefits.map((benefit, index) => (
                          <div key={index} className="text-cyan-400 text-sm">• {benefit}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 text-center"
                    >
                      <Zap className="w-5 h-5 mr-2 inline" />
                      Start Free Trial
                    </Link>
                    <div className="flex gap-2">
                      <Link
                        to={product.demoUrl || '/demo'}
                        className="flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center text-sm"
                      >
                        <Monitor className="w-4 h-4 mr-1 inline" />
                        Live Demo
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center text-sm"
                      >
                        <MessageSquare className="w-4 h-4 mr-1 inline" />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Get started in minutes with our intuitive setup process. No complex configurations required.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Affordable Pricing</h3>
                <p className="text-gray-300">Transparent, scalable pricing that grows with your business. No hidden fees or surprises.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with 99.9% uptime guarantee and 24/7 monitoring.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Expert support team available around the clock to help you succeed.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
                <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows with our APIs.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">Leverage cutting-edge AI technology to automate and optimize your workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
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
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;