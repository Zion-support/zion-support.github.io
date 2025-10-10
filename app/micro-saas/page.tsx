'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Search, Filter, Brain, Code, Mail, Calendar, FileText, Settings, Globe, Smartphone, CreditCard, Database, Lock, Target, PieChart, Activity, Zap as ZapIcon, Award, Clock, DollarSign } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice: string;
  benefits: string[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 
    'Support', 'Productivity', 'Finance', 'Development', 'Design', 'E-commerce'
  ];

  const microSaasProducts: MicroSaasProduct[] = [
    // Analytics & Business Intelligence
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Business Intelligence Suite',
      description: 'Advanced AI-powered business intelligence with predictive analytics, real-time dashboards, and automated insights for data-driven decision making.',
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Mobile app with push notifications',
        'API for custom integrations',
        'White-label options available'
      ],
      price: '$299/month',
      originalPrice: '$499/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics',
      link: '/ai-business-intelligence',
      marketPrice: '$800-1200/month',
      benefits: ['40% cost savings vs competitors', 'ROI within 30 days', '24/7 support included']
    },
    {
      id: '2',
      icon: Activity,
      title: 'Real-Time Analytics Dashboard',
      description: 'Live business metrics and KPI tracking with instant alerts and automated insights for immediate action.',
      features: [
        'Live data streaming',
        'Custom KPI tracking',
        'Instant alert system',
        'Historical data analysis',
        'Export to multiple formats',
        'Team collaboration tools',
        'Scheduled reports',
        'Integration with 100+ tools'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Analytics',
      link: '/real-time-analytics',
      marketPrice: '$300-500/month',
      benefits: ['50% faster insights', 'Real-time monitoring', 'Easy setup in 5 minutes']
    },
    {
      id: '3',
      icon: PieChart,
      title: 'Advanced Data Visualization',
      description: 'Create stunning, interactive data visualizations with AI-powered chart recommendations and automated design optimization.',
      features: [
        '50+ chart types',
        'AI chart recommendations',
        'Interactive dashboards',
        'Custom color schemes',
        'Animation effects',
        'Export to presentations',
        'Collaborative editing',
        'Template library'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Analytics',
      link: '/data-visualization',
      marketPrice: '$400-600/month',
      benefits: ['Professional presentations', 'Time-saving templates', 'Client-ready outputs']
    },

    // CRM & Sales
    {
      id: '4',
      icon: Users,
      title: 'AI-Powered CRM Pro',
      description: 'Intelligent customer relationship management with AI lead scoring, automated follow-ups, and predictive sales analytics.',
      features: [
        'AI lead scoring & prioritization',
        'Automated email sequences',
        'Sales pipeline management',
        'Contact & company profiles',
        'Deal tracking & forecasting',
        'Integration with 200+ tools',
        'Mobile app for sales teams',
        'Custom fields & workflows'
      ],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'CRM',
      link: '/ai-crm-pro',
      marketPrice: '$500-800/month',
      benefits: ['35% increase in sales', 'Automated follow-ups', 'Predictive insights']
    },
    {
      id: '5',
      icon: Target,
      title: 'Lead Generation Engine',
      description: 'AI-powered lead generation with automated prospecting, email outreach, and lead qualification for maximum conversion.',
      features: [
        'Automated lead discovery',
        'Email sequence automation',
        'Lead scoring & qualification',
        'LinkedIn & social prospecting',
        'A/B testing for campaigns',
        'CRM integration',
        'Performance analytics',
        'Compliance & deliverability'
      ],
      price: '$299/month',
      users: 'Up to 25,000 leads/month',
      popular: false,
      category: 'CRM',
      link: '/lead-generation-engine',
      marketPrice: '$600-1000/month',
      benefits: ['3x more qualified leads', 'Automated prospecting', 'Higher conversion rates']
    },
    {
      id: '6',
      icon: MessageSquare,
      title: 'Customer Support Hub',
      description: 'Omnichannel customer support platform with AI chatbots, ticket management, and customer satisfaction tracking.',
      features: [
        'Multi-channel support (email, chat, phone)',
        'AI-powered chatbots',
        'Ticket routing & prioritization',
        'Knowledge base management',
        'Customer satisfaction surveys',
        'Team performance analytics',
        'Integration with popular tools',
        'White-label customization'
      ],
      price: '$179/month',
      users: 'Up to 50 agents',
      popular: false,
      category: 'Support',
      link: '/customer-support-hub',
      marketPrice: '$400-700/month',
      benefits: ['50% faster response times', 'AI-powered assistance', 'Improved customer satisfaction']
    },

    // Security & Compliance
    {
      id: '7',
      icon: Shield,
      title: 'Enterprise Security Suite',
      description: 'Comprehensive cybersecurity solution with threat detection, vulnerability scanning, and compliance management.',
      features: [
        '24/7 threat monitoring',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance reporting (SOC2, GDPR)',
        'Security awareness training',
        'Penetration testing',
        'Risk assessment tools',
        'Integration with SIEM systems'
      ],
      price: '$499/month',
      originalPrice: '$799/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'Security',
      link: '/enterprise-security-suite',
      marketPrice: '$1200-2000/month',
      benefits: ['Enterprise-grade security', 'Compliance automation', '24/7 monitoring']
    },
    {
      id: '8',
      icon: Lock,
      title: 'Password & Access Manager',
      description: 'Secure password management with team sharing, access controls, and automated password rotation.',
      features: [
        'Secure password storage',
        'Team password sharing',
        'Access control & permissions',
        'Automated password rotation',
        'Two-factor authentication',
        'Password strength analysis',
        'Breach monitoring',
        'SSO integration'
      ],
      price: '$99/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security',
      link: '/password-access-manager',
      marketPrice: '$200-400/month',
      benefits: ['Enhanced security', 'Team collaboration', 'Automated management']
    },

    // Infrastructure & Cloud
    {
      id: '9',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management with cost optimization, monitoring, and multi-cloud support.',
      features: [
        'Multi-cloud support (AWS, Azure, GCP)',
        'Automated cost optimization',
        'Resource monitoring & alerting',
        'Auto-scaling configuration',
        'Backup & disaster recovery',
        'Security compliance checks',
        'Cost forecasting',
        'Integration with DevOps tools'
      ],
      price: '$399/month',
      users: 'Unlimited resources',
      popular: false,
      category: 'Infrastructure',
      link: '/cloud-infrastructure-manager',
      marketPrice: '$800-1500/month',
      benefits: ['30% cost reduction', 'Automated management', 'Multi-cloud support']
    },
    {
      id: '10',
      icon: Database,
      title: 'Database Performance Optimizer',
      description: 'AI-powered database optimization with performance monitoring, query analysis, and automated tuning.',
      features: [
        'Performance monitoring',
        'Query optimization suggestions',
        'Automated index recommendations',
        'Capacity planning',
        'Backup optimization',
        'Security vulnerability scanning',
        'Multi-database support',
        'Real-time alerts'
      ],
      price: '$249/month',
      users: 'Up to 10 databases',
      popular: false,
      category: 'Infrastructure',
      link: '/database-optimizer',
      marketPrice: '$500-800/month',
      benefits: ['50% performance improvement', 'Automated optimization', 'Cost savings']
    },

    // Marketing & Growth
    {
      id: '11',
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI personalization, A/B testing, and behavioral triggers.',
      features: [
        'AI-powered personalization',
        'Advanced segmentation',
        'A/B testing automation',
        'Behavioral trigger campaigns',
        'Email template builder',
        'Deliverability optimization',
        'Advanced analytics',
        'Integration with 100+ tools'
      ],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 50,000 subscribers',
      popular: true,
      category: 'Marketing',
      link: '/email-marketing-automation',
      marketPrice: '$400-700/month',
      benefits: ['40% higher open rates', 'AI personalization', 'Advanced automation']
    },
    {
      id: '12',
      icon: Globe,
      title: 'Social Media Management Suite',
      description: 'Comprehensive social media management with AI content creation, scheduling, and performance analytics.',
      features: [
        'AI content generation',
        'Multi-platform scheduling',
        'Hashtag optimization',
        'Engagement analytics',
        'Competitor analysis',
        'Influencer collaboration tools',
        'Content calendar',
        'Team collaboration features'
      ],
      price: '$149/month',
      users: 'Up to 10 social accounts',
      popular: false,
      category: 'Marketing',
      link: '/social-media-suite',
      marketPrice: '$300-500/month',
      benefits: ['3x more engagement', 'AI content creation', 'Time-saving automation']
    },
    {
      id: '13',
      icon: Target,
      title: 'SEO & Content Optimizer',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking tracking.',
      features: [
        'AI keyword research',
        'Content optimization suggestions',
        'Ranking tracking & monitoring',
        'Technical SEO audits',
        'Competitor analysis',
        'Content calendar planning',
        'Link building tools',
        'Performance reporting'
      ],
      price: '$179/month',
      users: 'Up to 25 websites',
      popular: false,
      category: 'Marketing',
      link: '/seo-content-optimizer',
      marketPrice: '$400-600/month',
      benefits: ['50% better rankings', 'AI-powered insights', 'Comprehensive tracking']
    },

    // Productivity & Collaboration
    {
      id: '14',
      icon: Calendar,
      title: 'Smart Calendar & Scheduling',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and team coordination.',
      features: [
        'AI meeting scheduling',
        'Calendar optimization',
        'Team availability tracking',
        'Meeting room booking',
        'Time zone management',
        'Integration with video conferencing',
        'Meeting analytics',
        'Custom scheduling rules'
      ],
      price: '$79/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Productivity',
      link: '/smart-calendar-scheduling',
      marketPrice: '$150-300/month',
      benefits: ['30% time savings', 'AI optimization', 'Better coordination']
    },
    {
      id: '15',
      icon: FileText,
      title: 'Document Management System',
      description: 'Advanced document management with AI organization, version control, and collaborative editing.',
      features: [
        'AI document categorization',
        'Version control & history',
        'Collaborative editing',
        'Advanced search capabilities',
        'Document templates',
        'Approval workflows',
        'Integration with cloud storage',
        'Mobile document access'
      ],
      price: '$129/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Productivity',
      link: '/document-management-system',
      marketPrice: '$300-500/month',
      benefits: ['Organized document storage', 'AI categorization', 'Team collaboration']
    },
    {
      id: '16',
      icon: Settings,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation, progress tracking, and resource optimization.',
      features: [
        'AI task prioritization',
        'Resource allocation optimization',
        'Progress tracking & analytics',
        'Team collaboration tools',
        'Gantt charts & timelines',
        'Budget tracking',
        'Integration with 100+ tools',
        'Mobile project management'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Productivity',
      link: '/project-management-pro',
      marketPrice: '$400-700/month',
      benefits: ['25% faster delivery', 'AI optimization', 'Better resource management']
    },

    // Finance & Accounting
    {
      id: '17',
      icon: CreditCard,
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI bookkeeping, expense tracking, and financial reporting.',
      features: [
        'Automated bookkeeping',
        'Expense categorization',
        'Invoice generation & tracking',
        'Tax preparation assistance',
        'Financial reporting',
        'Bank reconciliation',
        'Multi-currency support',
        'Integration with banks'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Finance',
      link: '/ai-accounting-assistant',
      marketPrice: '$300-600/month',
      benefits: ['90% time savings', 'Automated bookkeeping', 'Accurate financials']
    },
    {
      id: '18',
      icon: DollarSign,
      title: 'Expense Management System',
      description: 'Comprehensive expense management with receipt scanning, approval workflows, and budget tracking.',
      features: [
        'Receipt scanning & OCR',
        'Expense categorization',
        'Approval workflows',
        'Budget tracking & alerts',
        'Policy compliance checking',
        'Integration with accounting software',
        'Mobile expense reporting',
        'Advanced analytics'
      ],
      price: '$99/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Finance',
      link: '/expense-management-system',
      marketPrice: '$200-400/month',
      benefits: ['Streamlined expense process', 'Policy compliance', 'Cost control']
    },

    // Development & DevOps
    {
      id: '19',
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with code completion, debugging, and optimization suggestions.',
      features: [
        'AI code completion',
        'Intelligent debugging',
        'Code optimization suggestions',
        'Multi-language support',
        'Code review automation',
        'Documentation generation',
        'Integration with IDEs',
        'Team collaboration features'
      ],
      price: '$199/month',
      users: 'Up to 50 developers',
      popular: false,
      category: 'Development',
      link: '/ai-code-assistant-pro',
      marketPrice: '$400-800/month',
      benefits: ['40% faster coding', 'AI-powered assistance', 'Better code quality']
    },
    {
      id: '20',
      icon: ZapIcon,
      title: 'DevOps Automation Platform',
      description: 'Comprehensive DevOps automation with CI/CD pipelines, monitoring, and deployment management.',
      features: [
        'Automated CI/CD pipelines',
        'Infrastructure as code',
        'Monitoring & alerting',
        'Deployment automation',
        'Security scanning',
        'Performance optimization',
        'Multi-environment support',
        'Integration with cloud platforms'
      ],
      price: '$299/month',
      users: 'Unlimited projects',
      popular: false,
      category: 'Development',
      link: '/devops-automation-platform',
      marketPrice: '$600-1200/month',
      benefits: ['50% faster deployments', 'Automated processes', 'Better reliability']
    },

    // Design & Creative
    {
      id: '21',
      icon: Award,
      title: 'AI Design Studio',
      description: 'AI-powered design platform with automated logo creation, brand assets, and marketing materials.',
      features: [
        'AI logo generation',
        'Brand asset creation',
        'Marketing material templates',
        'Color palette optimization',
        'Typography suggestions',
        'Social media graphics',
        'Print design tools',
        'Team collaboration'
      ],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Design',
      link: '/ai-design-studio',
      marketPrice: '$300-600/month',
      benefits: ['Professional designs', 'AI-powered creation', 'Brand consistency']
    },

    // E-commerce & Retail
    {
      id: '22',
      icon: Smartphone,
      title: 'E-commerce Analytics Suite',
      description: 'Advanced e-commerce analytics with conversion tracking, customer insights, and sales optimization.',
      features: [
        'Conversion funnel analysis',
        'Customer behavior tracking',
        'Sales performance metrics',
        'Inventory optimization',
        'Pricing analysis',
        'A/B testing tools',
        'Integration with e-commerce platforms',
        'Custom reporting'
      ],
      price: '$199/month',
      users: 'Up to 5 stores',
      popular: false,
      category: 'E-commerce',
      link: '/ecommerce-analytics-suite',
      marketPrice: '$400-800/month',
      benefits: ['25% increase in sales', 'Data-driven insights', 'Optimized conversions']
    }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      description: 'Growing community worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by customers'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Always here to help'
    }
  ];

  const benefits = [
    'No setup fees or hidden costs',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support included',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts',
    'White-label options available',
    'API access for custom integrations'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to CRM, security to marketing - find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, CRM, security monitoring, email marketing, project management, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SaaS Solutions">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              No complex setup, no long-term commitments - just powerful solutions that work.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card hologram-card p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-white/20">
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                {selectedCategory === 'All' ? 'All Micro SaaS Products' : `${selectedCategory} Solutions`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
              <div className="mt-4 text-cyan-400 font-medium">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative cyber-card hologram-card p-8 border ${
                    product.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
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
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 text-sm line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-cyan-400 text-sm font-medium mb-2">{product.users}</div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 5 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 5} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="text-sm text-gray-300 mb-2">Market Price: <span className="text-gray-400 line-through">{product.marketPrice}</span></div>
                    <div className="text-sm text-green-400 font-medium">You Save: {product.benefits[0]}</div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={product.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      to={product.link}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="cyber-card hologram-card p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
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
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center cyber-card hologram-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center cyber-card hologram-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center cyber-card hologram-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
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
            <div className="cyber-card hologram-card p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 cyber-button"
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