'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Search, 
  Filter,
  DollarSign,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Settings,
  Target,
  Brain,
  Mail,
  Calendar,
  Lock,
  Headphones,
  Code,
  Palette,
  Cpu,
  Server,
  Monitor,
  Box,
  Layers,
  Workflow,
  Sparkles,
  Heart,
  Award,
  Rocket,
  Phone,
  MapPin
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice: string;
  benefits: string[];
  setupTime: string;
  freeTrial: boolean;
  demoUrl?: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // Analytics & Business Intelligence
    {
      id: '1',
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive forecasting',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$200-500/month',
      benefits: ['Increase data insights by 300%', 'Reduce reporting time by 80%', 'Real-time decision making', 'Custom dashboards'],
      setupTime: '5 minutes',
      freeTrial: true,
      demoUrl: 'https://ziontechgroup.com/demo/analytics'
    },
    {
      id: '2',
      icon: Brain,
      title: 'Zion AI Insights',
      description: 'AI-powered business intelligence with natural language queries and automated insights generation',
      features: [
        'Natural language data queries',
        'Automated insight generation',
        'Anomaly detection and alerts',
        'Custom AI model training',
        'Integration with 100+ data sources',
        'Advanced machine learning algorithms',
        'Real-time data processing',
        'Custom visualization templates'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Analytics',
      marketPrice: '$400-1000/month',
      benefits: ['Ask questions in plain English', 'Automated insights discovery', 'Predictive analytics', 'Custom AI models'],
      setupTime: '10 minutes',
      freeTrial: true
    },

    // Communication & Customer Support
    {
      id: '3',
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication',
      marketPrice: '$300-800/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Multi-language support'],
      setupTime: '15 minutes',
      freeTrial: true
    },
    {
      id: '4',
      icon: Headphones,
      title: 'Zion Support Hub',
      description: 'Comprehensive customer support management with AI-powered ticket routing and knowledge base',
      features: [
        'Intelligent ticket routing and prioritization',
        'AI-powered knowledge base suggestions',
        'Customer satisfaction tracking',
        'Multi-channel ticket management',
        'Automated follow-up and escalation',
        'Performance analytics and reporting',
        'Integration with popular CRMs',
        'Custom workflow automation'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Communication',
      marketPrice: '$150-400/month',
      benefits: ['Faster ticket resolution', 'Improved customer satisfaction', 'Automated workflows', 'Performance insights'],
      setupTime: '10 minutes',
      freeTrial: true
    },

    // Security & Compliance
    {
      id: '5',
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Security',
      marketPrice: '$600-2000/month',
      benefits: ['Proactive threat detection', 'Automated incident response', 'Compliance assurance', '24/7 monitoring'],
      setupTime: '30 minutes',
      freeTrial: true
    },
    {
      id: '6',
      icon: Lock,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management for GDPR, SOC2, HIPAA, and other regulatory requirements',
      features: [
        'Automated compliance monitoring and reporting',
        'Policy management and enforcement',
        'Audit trail and documentation',
        'Risk assessment and mitigation',
        'Employee training and certification tracking',
        'Vendor compliance monitoring',
        'Custom compliance frameworks',
        'Real-time compliance dashboards'
      ],
      price: '$199/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      marketPrice: '$400-1200/month',
      benefits: ['Automated compliance reporting', 'Reduced audit preparation time', 'Risk mitigation', 'Policy enforcement'],
      setupTime: '20 minutes',
      freeTrial: true
    },

    // Cloud & Infrastructure
    {
      id: '7',
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage',
      marketPrice: '$150-500/month',
      benefits: ['Instant disaster recovery', 'AI-optimized backups', 'Cross-cloud redundancy', 'Zero-knowledge encryption'],
      setupTime: '5 minutes',
      freeTrial: true
    },
    {
      id: '8',
      icon: Server,
      title: 'Zion Infrastructure Monitor',
      description: 'Comprehensive infrastructure monitoring with AI-powered optimization recommendations',
      features: [
        'Real-time server and application monitoring',
        'AI-powered performance optimization recommendations',
        'Automated scaling and resource management',
        'Predictive failure detection and prevention',
        'Cost optimization and resource utilization',
        'Multi-cloud and hybrid infrastructure support',
        'Custom alerting and notification rules',
        'Integration with popular DevOps tools'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Infrastructure',
      marketPrice: '$250-800/month',
      benefits: ['Proactive issue detection', 'Cost optimization', 'Automated scaling', 'Performance insights'],
      setupTime: '15 minutes',
      freeTrial: true
    },

    // Marketing & Sales
    {
      id: '9',
      icon: Target,
      title: 'Zion Marketing AI',
      description: 'AI-powered marketing automation with personalized campaigns and intelligent optimization',
      features: [
        'AI-powered campaign personalization',
        'Multi-channel marketing automation',
        'Advanced customer segmentation',
        'Predictive analytics and lead scoring',
        'A/B testing and optimization',
        'Email, SMS, and social media integration',
        'ROI tracking and attribution modeling',
        'Custom marketing workflows'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Marketing',
      marketPrice: '$400-1500/month',
      benefits: ['Increase conversion rates by 40%', 'Automated personalization', 'Advanced segmentation', 'ROI optimization'],
      setupTime: '20 minutes',
      freeTrial: true
    },
    {
      id: '10',
      icon: TrendingUp,
      title: 'Zion Sales Optimizer',
      description: 'AI-powered sales enablement with predictive analytics and automated lead qualification',
      features: [
        'AI-powered lead scoring and qualification',
        'Sales forecasting and pipeline analytics',
        'Automated follow-up and nurturing',
        'CRM integration and data synchronization',
        'Sales performance tracking and coaching',
        'Custom sales workflows and automation',
        'Integration with popular sales tools',
        'Advanced reporting and dashboards'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Sales',
      marketPrice: '$300-1000/month',
      benefits: ['Increase sales by 35%', 'Automated lead qualification', 'Predictive forecasting', 'Performance insights'],
      setupTime: '15 minutes',
      freeTrial: true
    },

    // Content & Design
    {
      id: '11',
      icon: FileText,
      title: 'Zion Content AI',
      description: 'AI-powered content creation and management with brand voice consistency and SEO optimization',
      features: [
        'AI-powered content generation for blogs, social media, and marketing',
        'Brand voice training and consistency',
        'SEO optimization and keyword research',
        'Content calendar and scheduling',
        'Multi-language content creation',
        'Plagiarism detection and originality checking',
        'Content performance analytics',
        'Integration with popular CMS platforms'
      ],
      price: '$99/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Content',
      marketPrice: '$200-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-language support'],
      setupTime: '10 minutes',
      freeTrial: true
    },
    {
      id: '12',
      icon: Palette,
      title: 'Zion Design Studio',
      description: 'AI-powered design platform with automated branding and creative asset generation',
      features: [
        'AI-powered logo and brand asset generation',
        'Automated design templates and variations',
        'Brand consistency checking and enforcement',
        'A/B testing for design elements',
        'Integration with design tools (Figma, Adobe)',
        'Custom design workflows and automation',
        'Asset management and version control',
        'White-label design solutions'
      ],
      price: '$129/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Design',
      marketPrice: '$250-800/month',
      benefits: ['Faster design creation', 'Brand consistency', 'Automated variations', 'A/B testing'],
      setupTime: '15 minutes',
      freeTrial: true
    },

    // Finance & Accounting
    {
      id: '13',
      icon: DollarSign,
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Automated invoice processing and approval workflows',
        'Real-time financial reporting and forecasting',
        'Tax compliance and preparation assistance',
        'Multi-currency support and exchange rate tracking',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs'
      ],
      price: '$179/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$400-1200/month',
      benefits: ['Automated accounting', 'Real-time financial insights', 'Tax compliance', 'Fraud prevention'],
      setupTime: '20 minutes',
      freeTrial: true
    },

    // HR & People Management
    {
      id: '14',
      icon: Users,
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting'
      ],
      price: '$159/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR',
      marketPrice: '$300-1000/month',
      benefits: ['Streamlined HR processes', 'AI-powered recruitment', 'Employee engagement', 'Compliance tracking'],
      setupTime: '25 minutes',
      freeTrial: true
    },

    // E-commerce & Retail
    {
      id: '15',
      icon: Globe,
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization and optimization',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways'
      ],
      price: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$500-2000/month',
      benefits: ['Increase sales by 45%', 'Personalized shopping experience', 'Inventory optimization', 'Multi-channel selling'],
      setupTime: '30 minutes',
      freeTrial: true
    },

    // Development & DevOps
    {
      id: '16',
      icon: Code,
      title: 'Zion Dev Tools',
      description: 'AI-powered development tools with automated code review and optimization',
      features: [
        'AI-powered code review and suggestions',
        'Automated testing and quality assurance',
        'Code optimization and performance analysis',
        'Security vulnerability scanning',
        'Automated documentation generation',
        'Integration with popular IDEs and Git',
        'Custom development workflows',
        'Team collaboration and code sharing'
      ],
      price: '$199/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Development',
      marketPrice: '$400-1200/month',
      benefits: ['Faster development cycles', 'Improved code quality', 'Automated testing', 'Security scanning'],
      setupTime: '20 minutes',
      freeTrial: true
    },

    // Project Management
    {
      id: '17',
      icon: Workflow,
      title: 'Zion Project AI',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking',
      features: [
        'AI-powered task allocation and scheduling',
        'Predictive project timeline and risk analysis',
        'Resource optimization and capacity planning',
        'Automated progress tracking and reporting',
        'Team collaboration and communication tools',
        'Integration with popular project management tools',
        'Custom project templates and workflows',
        'Advanced analytics and performance insights'
      ],
      price: '$149/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'Management',
      marketPrice: '$300-800/month',
      benefits: ['Increase project success rate by 40%', 'AI-powered scheduling', 'Risk prediction', 'Resource optimization'],
      setupTime: '15 minutes',
      freeTrial: true
    },

    // SEO & Digital Marketing
    {
      id: '18',
      icon: Search,
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console'
      ],
      price: '$119/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'SEO',
      marketPrice: '$250-800/month',
      benefits: ['Increase organic traffic by 60%', 'AI-powered optimization', 'Competitor analysis', 'Ranking tracking'],
      setupTime: '10 minutes',
      freeTrial: true
    },

    // Mobile & App Development
    {
      id: '19',
      icon: Smartphone,
      title: 'Zion Mobile Builder',
      description: 'No-code mobile app development platform with AI-powered design and optimization',
      features: [
        'Drag-and-drop app builder with AI assistance',
        'Cross-platform development (iOS, Android)',
        'AI-powered UI/UX design recommendations',
        'Real-time preview and testing',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API management',
        'White-label app development'
      ],
      price: '$189/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      marketPrice: '$400-1500/month',
      benefits: ['Faster app development', 'No-code solution', 'Cross-platform compatibility', 'AI-powered design'],
      setupTime: '25 minutes',
      freeTrial: true
    },

    // Research & Data Analysis
    {
      id: '20',
      icon: Database,
      title: 'Zion Research AI',
      description: 'AI-powered research and data analysis platform with automated insights generation',
      features: [
        'AI-powered data collection and analysis',
        'Automated research report generation',
        'Trend analysis and forecasting',
        'Competitive intelligence gathering',
        'Custom research workflows',
        'Integration with research databases',
        'Collaborative research tools',
        'Advanced data visualization'
      ],
      price: '$169/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Research',
      marketPrice: '$350-1000/month',
      benefits: ['Automated research', 'AI-powered insights', 'Trend analysis', 'Competitive intelligence'],
      setupTime: '20 minutes',
      freeTrial: true
    }
  ];

  const categories = [
    'All', 'Analytics', 'Communication', 'Security', 'Storage', 'Infrastructure', 
    'Marketing', 'Sales', 'Content', 'Design', 'Finance', 'HR', 'E-commerce', 
    'Development', 'Management', 'SEO', 'Research'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Secure' },
    { icon: Zap, value: '5min', label: 'Setup Time' }
  ];

  const benefits = [
    'Quick setup and deployment',
    'Scalable pricing plans',
    '24/7 customer support',
    'Regular feature updates',
    'Secure and reliable',
    'Easy integration',
    'AI-powered automation',
    'White-label solutions available'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 20+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 20+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Free trials available." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, customer support, marketing automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">SaaS</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of 20+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Quick setup, affordable pricing, powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>View All Plans</span>
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
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
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative cyber-card hologram-card p-8 border ${
                    product.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group hover:scale-105`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      </div>
                      <div className="text-sm text-gray-400">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {product.setupTime}
                      </div>
                      {product.freeTrial && (
                        <div className="flex items-center text-green-400">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Free Trial
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full cyber-button text-center py-3 flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border border-white/20 text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center block"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="cyber-card hologram-card p-8 border border-cyan-500/20">
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center group"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MicroSaasPage;