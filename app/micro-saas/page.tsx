'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Award,
  DollarSign,
  Calendar,
  Download,
  Play,
  Code,
  Cloud,
  Settings,
  Database,
  Lock,
  Smartphone,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  ShoppingCart,
  CreditCard,
  PieChart,
  Activity,
  Layers,
  RefreshCw,
  Monitor,
  Wifi,
  Server,
  HardDrive,
  Key,
  AlertTriangle,
  CheckSquare
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const microSaasServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      category: 'productivity',
      description: 'Intelligent project management with AI-powered planning, resource allocation, and risk prediction',
      features: [
        'AI-powered project planning and scheduling',
        'Smart resource allocation and optimization',
        'Risk prediction and mitigation strategies',
        'Real-time progress tracking and analytics',
        'Team collaboration and communication tools',
        'Automated reporting and insights'
      ],
      benefits: [
        'Complete projects 25% faster',
        'Reduce project risks by 60%',
        'Improve team productivity by 40%',
        'Make data-driven decisions'
      ],
      pricing: {
        starter: '$29/month',
        professional: '$79/month',
        enterprise: '$199/month'
      },
      icon: Target,
      popular: true,
      rating: 4.9,
      reviews: 234,
      implementation: '1-2 weeks',
      support: '24/7',
      freeTrial: '14 days',
      users: '1000+',
      category: 'productivity'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      category: 'marketing',
      description: 'Complete social media management platform with AI-powered content creation and scheduling',
      features: [
        'AI-generated social media content',
        'Multi-platform posting and scheduling',
        'Hashtag research and optimization',
        'Engagement analytics and insights',
        'Competitor analysis and monitoring',
        'Automated response management'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Increase engagement by 150%',
        'Grow followers by 200%',
        'Maintain consistent brand voice'
      ],
      pricing: {
        starter: '$19/month',
        professional: '$49/month',
        enterprise: '$129/month'
      },
      icon: MessageSquare,
      popular: true,
      rating: 4.8,
      reviews: 189,
      implementation: '1 week',
      support: '24/7',
      freeTrial: '7 days',
      users: '500+',
      category: 'marketing'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      description: 'Advanced business intelligence platform with AI-powered insights and automated reporting',
      features: [
        'Real-time data visualization',
        'AI-powered insights and recommendations',
        'Custom dashboard creation',
        'Automated report generation',
        'Multi-source data integration',
        'Predictive analytics and forecasting'
      ],
      benefits: [
        'Make decisions 3x faster',
        'Identify trends before competitors',
        'Reduce reporting time by 80%',
        'Increase revenue by 25%'
      ],
      pricing: {
        starter: '$39/month',
        professional: '$99/month',
        enterprise: '$249/month'
      },
      icon: BarChart,
      popular: true,
      rating: 4.7,
      reviews: 156,
      implementation: '2-3 weeks',
      support: '24/7',
      freeTrial: '14 days',
      users: '800+',
      category: 'analytics'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      category: 'marketing',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      features: [
        'AI-powered email content generation',
        'Advanced segmentation and targeting',
        'Automated drip campaigns',
        'A/B testing and optimization',
        'Deliverability monitoring',
        'ROI tracking and analytics'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Generate 3x more revenue'
      ],
      pricing: {
        starter: '$25/month',
        professional: '$69/month',
        enterprise: '$179/month'
      },
      icon: Mail,
      popular: true,
      rating: 4.6,
      reviews: 142,
      implementation: '1-2 weeks',
      support: '24/7',
      freeTrial: '14 days',
      users: '600+',
      category: 'marketing'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      category: 'support',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Integration with popular platforms',
        'Escalation to human agents',
        'Knowledge base management',
        'Performance analytics'
      ],
      benefits: [
        'Reduce support costs by 70%',
        'Provide 24/7 customer support',
        'Resolve 80% of queries instantly',
        'Improve customer satisfaction'
      ],
      pricing: {
        starter: '$49/month',
        professional: '$129/month',
        enterprise: '$299/month'
      },
      icon: MessageSquare,
      popular: true,
      rating: 4.8,
      reviews: 178,
      implementation: '2-3 weeks',
      support: '24/7',
      freeTrial: '14 days',
      users: '400+',
      category: 'support'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'content',
      description: 'Complete AI-powered content creation platform for blogs, articles, and marketing materials',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Plagiarism detection',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar management'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent quality',
        'Improve SEO rankings',
        'Reduce content costs by 70%'
      ],
      pricing: {
        starter: '$19/month',
        professional: '$59/month',
        enterprise: '$149/month'
      },
      icon: FileText,
      popular: false,
      rating: 4.5,
      reviews: 98,
      implementation: '1 week',
      support: 'Business hours',
      freeTrial: '7 days',
      users: '300+',
      category: 'content'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'seo',
      description: 'Advanced SEO optimization tool with AI-powered keyword research and content optimization',
      features: [
        'AI-powered keyword research',
        'Content optimization suggestions',
        'Competitor analysis',
        'Technical SEO auditing',
        'Rank tracking and monitoring',
        'Local SEO optimization'
      ],
      benefits: [
        'Improve search rankings by 40%',
        'Increase organic traffic by 150%',
        'Save 15+ hours per week',
        'Stay ahead of algorithm changes'
      ],
      pricing: {
        starter: '$29/month',
        professional: '$79/month',
        enterprise: '$199/month'
      },
      icon: Target,
      popular: false,
      rating: 4.4,
      reviews: 76,
      implementation: '1-2 weeks',
      support: 'Business hours',
      freeTrial: '7 days',
      users: '250+',
      category: 'seo'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      category: 'finance',
      description: 'Intelligent invoicing platform with automated generation, payment tracking, and financial insights',
      features: [
        'Automated invoice generation',
        'Payment tracking and reminders',
        'Multi-currency support',
        'Tax calculation and compliance',
        'Financial reporting and analytics',
        'Client portal integration'
      ],
      benefits: [
        'Reduce invoicing time by 90%',
        'Improve payment collection by 50%',
        'Eliminate billing errors',
        'Streamline financial processes'
      ],
      pricing: {
        starter: '$15/month',
        professional: '$39/month',
        enterprise: '$99/month'
      },
      icon: CreditCard,
      popular: false,
      rating: 4.6,
      reviews: 134,
      implementation: '1 week',
      support: 'Business hours',
      freeTrial: '14 days',
      users: '450+',
      category: 'finance'
    },
    {
      id: 'ai-design-assistant',
      name: 'AI Design Assistant',
      category: 'design',
      description: 'AI-powered design tool for creating logos, graphics, and marketing materials',
      features: [
        'AI-generated logo designs',
        'Template library with 10,000+ designs',
        'Brand kit management',
        'Social media graphics creation',
        'Print-ready file generation',
        'Collaboration and feedback tools'
      ],
      benefits: [
        'Create professional designs instantly',
        'Reduce design costs by 80%',
        'Maintain brand consistency',
        'Scale design production'
      ],
      pricing: {
        starter: '$25/month',
        professional: '$69/month',
        enterprise: '$179/month'
      },
      icon: Palette,
      popular: false,
      rating: 4.3,
      reviews: 67,
      implementation: '1 week',
      support: 'Business hours',
      freeTrial: '7 days',
      users: '200+',
      category: 'design'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      category: 'inventory',
      description: 'Smart inventory management system with AI-powered demand forecasting and optimization',
      features: [
        'AI demand forecasting',
        'Automated reorder points',
        'Multi-location inventory tracking',
        'Supplier management',
        'Cost optimization',
        'Real-time analytics and reporting'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts and overstock',
        'Improve cash flow',
        'Optimize supplier relationships'
      ],
      pricing: {
        starter: '$39/month',
        professional: '$99/month',
        enterprise: '$249/month'
      },
      icon: ShoppingCart,
      popular: false,
      rating: 4.5,
      reviews: 89,
      implementation: '2-3 weeks',
      support: '24/7',
      freeTrial: '14 days',
      users: '350+',
      category: 'inventory'
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker Pro',
      category: 'productivity',
      description: 'Intelligent time tracking with AI-powered insights and productivity optimization',
      features: [
        'Automatic time tracking',
        'AI productivity insights',
        'Project time allocation',
        'Team performance analytics',
        'Billing and invoicing integration',
        'Mobile and desktop apps'
      ],
      benefits: [
        'Increase productivity by 25%',
        'Accurate project billing',
        'Identify time-wasting activities',
        'Optimize team performance'
      ],
      pricing: {
        starter: '$12/month',
        professional: '$29/month',
        enterprise: '$79/month'
      },
      icon: Clock,
      popular: false,
      rating: 4.4,
      reviews: 123,
      implementation: '1 week',
      support: 'Business hours',
      freeTrial: '14 days',
      users: '500+',
      category: 'productivity'
    },
    {
      id: 'ai-lead-scoring',
      name: 'AI Lead Scoring Platform',
      category: 'sales',
      description: 'Intelligent lead scoring and qualification system with AI-powered insights',
      features: [
        'AI-powered lead scoring',
        'Behavioral tracking and analysis',
        'Lead qualification automation',
        'CRM integration',
        'Sales forecasting',
        'Performance analytics'
      ],
      benefits: [
        'Improve lead quality by 60%',
        'Increase conversion rates by 40%',
        'Reduce sales cycle time',
        'Focus on high-value prospects'
      ],
      pricing: {
        starter: '$49/month',
        professional: '$129/month',
        enterprise: '$299/month'
      },
      icon: Target,
      popular: false,
      rating: 4.7,
      reviews: 95,
      implementation: '2-3 weeks',
      support: '24/7',
      freeTrial: '14 days',
      users: '300+',
      category: 'sales'
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      category: 'video',
      description: 'AI-powered video creation platform for marketing, training, and social media content',
      features: [
        'AI-generated video scripts',
        'Automated video editing',
        'Multiple video formats and sizes',
        'Voice synthesis and narration',
        'Template library',
        'Brand customization'
      ],
      benefits: [
        'Create videos 5x faster',
        'Reduce production costs by 70%',
        'Maintain consistent quality',
        'Scale video content production'
      ],
      pricing: {
        starter: '$39/month',
        professional: '$99/month',
        enterprise: '$249/month'
      },
      icon: Video,
      popular: false,
      rating: 4.2,
      reviews: 56,
      implementation: '1-2 weeks',
      support: 'Business hours',
      freeTrial: '7 days',
      users: '150+',
      category: 'video'
    },
    {
      id: 'ai-music-composer',
      name: 'AI Music Composer',
      category: 'audio',
      description: 'AI-powered music composition platform for creating original tracks and sound effects',
      features: [
        'AI-generated music compositions',
        'Multiple genres and styles',
        'Customizable tempo and mood',
        'Royalty-free licensing',
        'High-quality audio export',
        'Collaboration tools'
      ],
      benefits: [
        'Create original music instantly',
        'Reduce licensing costs',
        'Maintain consistent quality',
        'Scale audio production'
      ],
      pricing: {
        starter: '$19/month',
        professional: '$49/month',
        enterprise: '$129/month'
      },
      icon: Music,
      popular: false,
      rating: 4.1,
      reviews: 43,
      implementation: '1 week',
      support: 'Business hours',
      freeTrial: '7 days',
      users: '100+',
      category: 'audio'
    },
    {
      id: 'ai-code-reviewer',
      name: 'AI Code Reviewer',
      category: 'development',
      description: 'Intelligent code review and analysis platform with automated suggestions and security scanning',
      features: [
        'Automated code analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality scoring',
        'Integration with popular IDEs',
        'Team collaboration features'
      ],
      benefits: [
        'Improve code quality by 50%',
        'Reduce security vulnerabilities',
        'Accelerate development cycles',
        'Maintain coding standards'
      ],
      pricing: {
        starter: '$29/month',
        professional: '$79/month',
        enterprise: '$199/month'
      },
      icon: Code,
      popular: false,
      rating: 4.6,
      reviews: 78,
      implementation: '1-2 weeks',
      support: '24/7',
      freeTrial: '14 days',
      users: '250+',
      category: 'development'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'productivity', name: 'Productivity', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'seo', name: 'SEO', icon: Target },
    { id: 'finance', name: 'Finance', icon: CreditCard },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'inventory', name: 'Inventory', icon: ShoppingCart },
    { id: 'sales', name: 'Sales', icon: Target },
    { id: 'video', name: 'Video', icon: Video },
    { id: 'audio', name: 'Audio', icon: Music },
    { id: 'development', name: 'Development', icon: Code }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => {
          const aPrice = parseInt(a.pricing.starter.replace('$', ''));
          const bPrice = parseInt(b.pricing.starter.replace('$', ''));
          return aPrice - bPrice;
        });
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => {
          const aPrice = parseInt(a.pricing.starter.replace('$', ''));
          const bPrice = parseInt(b.pricing.starter.replace('$', ''));
          return bPrice - aPrice;
        });
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const popularServices = microSaasServices.filter(service => service.popular);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including AI project management, social media automation, analytics dashboards, and more. Boost productivity with intelligent business tools." />
        <meta name="keywords" content="micro SAAS, AI tools, business automation, project management, social media tools, analytics, productivity software" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Powerful AI-driven micro SAAS tools designed to streamline your business operations, 
                boost productivity, and drive growth. From project management to marketing automation, 
                we provide intelligent solutions that scale with your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white">50+ Micro SAAS Tools</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white">10,000+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search micro SAAS tools..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Most Popular Micro SAAS Tools</h2>
            <p className="text-gray-300">Our most requested and highest-rated business tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                    Popular
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.freeTrial} free trial
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">All Micro SAAS Tools</h2>
            <p className="text-gray-300">Comprehensive suite of AI-powered business tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                      Popular
                    </div>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.freeTrial} free trial
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 cyber-card text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Boost Your Productivity?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover how our micro SAAS tools can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Catalog</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">Middletown, DE</p>
              <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASPage;