'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Star,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Smartphone,
  Globe,
  Database,
  BarChart3,
  Mail,
  Calendar,
  FileText,
  Settings,
  Code,
  Palette,
  Target,
  Headphones,
  Award,
  Lock,
  RefreshCw,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const servicesPerPage = 12;

  const microSaasProducts = [
    // AI & Machine Learning Services
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time AI insights, predictive analytics, and automated reporting for data-driven decisions.',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Mobile app access',
        'API integrations',
        'White-label options'
      ],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 100 users',
      category: 'AI & ML',
      popular: true,
      rating: 4.9,
      reviews: 1247,
      freeTrial: '14 days',
      setupTime: '5 minutes'
    },
    {
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: [
        'AI lead scoring & qualification',
        'Automated email sequences',
        'Sales pipeline management',
        'Customer segmentation',
        'Predictive analytics',
        'Integration with 500+ tools',
        'Mobile CRM app',
        'Custom workflows'
      ],
      price: '$149/month',
      originalPrice: '$199/month',
      users: 'Up to 200 users',
      category: 'AI & ML',
      popular: true,
      rating: 4.8,
      reviews: 892,
      freeTrial: '30 days',
      setupTime: '10 minutes'
    },
    {
      icon: Shield,
      title: 'AI Security Monitoring',
      description: 'Comprehensive cybersecurity monitoring with AI threat detection, vulnerability scanning, and automated incident response.',
      features: [
        'AI threat detection',
        'Vulnerability scanning',
        'Compliance monitoring',
        '24/7 security operations',
        'Incident response automation',
        'Security reporting',
        'Multi-cloud support',
        'SOC integration'
      ],
      price: '$299/month',
      originalPrice: '$399/month',
      users: 'Unlimited',
      category: 'Security',
      popular: true,
      rating: 4.9,
      reviews: 567,
      freeTrial: '7 days',
      setupTime: '15 minutes'
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management with cost optimization, auto-scaling, and multi-cloud orchestration.',
      features: [
        'Resource optimization',
        'Cost tracking & alerts',
        'Auto-scaling policies',
        'Multi-cloud management',
        'Performance monitoring',
        'Disaster recovery',
        'Compliance reporting',
        'API management'
      ],
      price: '$399/month',
      originalPrice: '$499/month',
      users: 'Unlimited',
      category: 'Cloud',
      popular: false,
      rating: 4.7,
      reviews: 423,
      freeTrial: '14 days',
      setupTime: '20 minutes'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing Pro',
      description: 'Intelligent email marketing with AI optimization, personalization, A/B testing, and advanced analytics.',
      features: [
        'AI content optimization',
        'Personalized campaigns',
        'Advanced A/B testing',
        'Behavioral triggers',
        'Deliverability optimization',
        'Advanced analytics',
        'Template library',
        'Integration APIs'
      ],
      price: '$79/month',
      originalPrice: '$99/month',
      users: 'Up to 50,000 contacts',
      category: 'Marketing',
      popular: true,
      rating: 4.6,
      reviews: 1234,
      freeTrial: '30 days',
      setupTime: '5 minutes'
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment capabilities.',
      features: [
        'Drag-and-drop builder',
        'AI code generation',
        'Native app creation',
        'Instant deployment',
        'Cross-platform support',
        'App store publishing',
        'Push notifications',
        'Analytics integration'
      ],
      price: '$199/month',
      originalPrice: '$249/month',
      users: 'Unlimited apps',
      category: 'Development',
      popular: true,
      rating: 4.5,
      reviews: 678,
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.',
      features: [
        'Keyword research & analysis',
        'Content optimization',
        'Ranking tracking',
        'Competitor analysis',
        'Technical SEO audits',
        'Local SEO tools',
        'Backlink analysis',
        'Performance reports'
      ],
      price: '$89/month',
      originalPrice: '$119/month',
      users: 'Up to 5 websites',
      category: 'Marketing',
      popular: true,
      rating: 4.7,
      reviews: 945,
      freeTrial: '14 days',
      setupTime: '5 minutes'
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data extraction',
        'Form processing',
        'Batch processing',
        'API integration',
        'Custom templates',
        'Compliance features'
      ],
      price: '$129/month',
      originalPrice: '$159/month',
      users: 'Up to 10,000 documents',
      category: 'Productivity',
      popular: false,
      rating: 4.4,
      reviews: 234,
      freeTrial: '7 days',
      setupTime: '10 minutes'
    },
    {
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and automated time management.',
      features: [
        'Smart scheduling',
        'Calendar optimization',
        'Meeting coordination',
        'Time zone handling',
        'Buffer time management',
        'Integration APIs',
        'Mobile app',
        'Team scheduling'
      ],
      price: '$39/month',
      originalPrice: '$49/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      popular: true,
      rating: 4.6,
      reviews: 567,
      freeTrial: '30 days',
      setupTime: '2 minutes'
    },
    {
      icon: Database,
      title: 'AI Database Optimizer',
      description: 'Automated database performance tuning, query optimization, and intelligent monitoring for optimal performance.',
      features: [
        'Query optimization',
        'Performance monitoring',
        'Index recommendations',
        'Automated tuning',
        'Alert system',
        'Multi-database support',
        'Performance reports',
        'API integration'
      ],
      price: '$179/month',
      originalPrice: '$229/month',
      users: 'Up to 10 databases',
      category: 'Development',
      popular: false,
      rating: 4.5,
      reviews: 189,
      freeTrial: '14 days',
      setupTime: '15 minutes'
    },
    {
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools and templates.',
      features: [
        'AI design generation',
        'Logo creation',
        'Marketing materials',
        'Brand kit management',
        'Template library',
        'Collaboration tools',
        'Export options',
        'White-label options'
      ],
      price: '$59/month',
      originalPrice: '$79/month',
      users: 'Up to 10 designers',
      category: 'Design',
      popular: true,
      rating: 4.3,
      reviews: 456,
      freeTrial: '14 days',
      setupTime: '5 minutes'
    },
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.',
      features: [
        'AI lead scoring',
        'Email prospecting',
        'LinkedIn automation',
        'Lead enrichment',
        'Follow-up sequences',
        'CRM integration',
        'Analytics dashboard',
        'A/B testing'
      ],
      price: '$149/month',
      originalPrice: '$199/month',
      users: 'Up to 5,000 leads',
      category: 'Sales',
      popular: true,
      rating: 4.7,
      reviews: 789,
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      icon: Headphones,
      title: 'AI Customer Support',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: [
        'AI chatbots',
        'Sentiment analysis',
        'Ticket routing',
        'Knowledge base',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training'
      ],
      price: '$99/month',
      originalPrice: '$129/month',
      users: 'Up to 1,000 tickets',
      category: 'Support',
      popular: true,
      rating: 4.6,
      reviews: 623,
      freeTrial: '30 days',
      setupTime: '15 minutes'
    },
    {
      icon: Award,
      title: 'AI Performance Monitor',
      description: 'Monitor and optimize business performance with AI insights, KPI tracking, and automated recommendations.',
      features: [
        'KPI monitoring',
        'Performance analytics',
        'Automated alerts',
        'Custom dashboards',
        'Trend analysis',
        'Goal tracking',
        'Team performance',
        'Reporting tools'
      ],
      price: '$119/month',
      originalPrice: '$149/month',
      users: 'Up to 100 users',
      category: 'Analytics',
      popular: false,
      rating: 4.4,
      reviews: 234,
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      icon: Lock,
      title: 'AI Compliance Manager',
      description: 'Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulatory requirements.',
      features: [
        'Regulatory compliance',
        'Automated monitoring',
        'Audit trails',
        'Risk assessment',
        'Documentation',
        'Reporting tools',
        'Alert system',
        'Integration APIs'
      ],
      price: '$249/month',
      originalPrice: '$299/month',
      users: 'Unlimited',
      category: 'Compliance',
      popular: false,
      rating: 4.8,
      reviews: 156,
      freeTrial: '7 days',
      setupTime: '20 minutes'
    },
    {
      icon: RefreshCw,
      title: 'AI Workflow Automation',
      description: 'Automate business processes with intelligent workflows, decision-making capabilities, and exception handling.',
      features: [
        'Process automation',
        'Decision trees',
        'Exception handling',
        'Integration APIs',
        'Custom workflows',
        'Monitoring dashboard',
        'Error handling',
        'Scalable architecture'
      ],
      price: '$179/month',
      originalPrice: '$229/month',
      users: 'Up to 50 workflows',
      category: 'Automation',
      popular: true,
      rating: 4.5,
      reviews: 345,
      freeTrial: '14 days',
      setupTime: '15 minutes'
    },
    {
      icon: Download,
      title: 'AI Data Migration',
      description: 'Seamless data migration between systems with AI-powered mapping, validation, and error handling.',
      features: [
        'AI data mapping',
        'Validation tools',
        'Error handling',
        'Progress tracking',
        'Rollback capability',
        'Multi-format support',
        'Scheduling options',
        'Monitoring dashboard'
      ],
      price: '$299/month',
      originalPrice: '$399/month',
      users: 'Unlimited data',
      category: 'Data',
      popular: false,
      rating: 4.6,
      reviews: 123,
      freeTrial: '7 days',
      setupTime: '30 minutes'
    },
    {
      icon: Upload,
      title: 'AI Backup Manager',
      description: 'Intelligent backup solutions with automated scheduling, versioning, and disaster recovery capabilities.',
      features: [
        'Automated backups',
        'Version control',
        'Disaster recovery',
        'Encryption',
        'Scheduling options',
        'Monitoring alerts',
        'Multi-cloud support',
        'Restore tools'
      ],
      price: '$89/month',
      originalPrice: '$119/month',
      users: 'Up to 1TB storage',
      category: 'Data',
      popular: false,
      rating: 4.3,
      reviews: 267,
      freeTrial: '30 days',
      setupTime: '10 minutes'
    },
    {
      icon: Eye,
      title: 'AI Content Moderator',
      description: 'Automated content moderation with AI-powered detection of inappropriate content, spam, and policy violations.',
      features: [
        'Content detection',
        'Spam filtering',
        'Policy enforcement',
        'Real-time monitoring',
        'Custom rules',
        'API integration',
        'Analytics dashboard',
        'Moderation queue'
      ],
      price: '$79/month',
      originalPrice: '$99/month',
      users: 'Up to 100,000 posts',
      category: 'Moderation',
      popular: false,
      rating: 4.2,
      reviews: 189,
      freeTrial: '14 days',
      setupTime: '5 minutes'
    },
    {
      icon: Edit,
      title: 'AI Content Writer',
      description: 'Advanced AI writing assistant for blogs, emails, reports, and content creation with 100+ templates.',
      features: [
        '100+ templates',
        'Multi-language support',
        'Plagiarism check',
        'SEO optimization',
        'Tone adjustment',
        'Brand voice training',
        'Collaboration tools',
        'Export options'
      ],
      price: '$49/month',
      originalPrice: '$69/month',
      users: 'Up to 5 writers',
      category: 'Content',
      popular: true,
      rating: 4.7,
      reviews: 1456,
      freeTrial: '30 days',
      setupTime: '2 minutes'
    },
    {
      icon: Trash2,
      title: 'AI Data Cleaner',
      description: 'Automated data cleaning and deduplication with AI-powered quality assessment and standardization.',
      features: [
        'Data deduplication',
        'Quality assessment',
        'Standardization',
        'Error detection',
        'Batch processing',
        'API integration',
        'Quality reports',
        'Custom rules'
      ],
      price: '$99/month',
      originalPrice: '$129/month',
      users: 'Up to 1M records',
      category: 'Data',
      popular: false,
      rating: 4.4,
      reviews: 178,
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      icon: Plus,
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and optimization.',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Inventory optimization',
        'Multi-location support',
        'Supplier management',
        'Analytics dashboard',
        'Integration APIs',
        'Mobile app'
      ],
      price: '$159/month',
      originalPrice: '$199/month',
      users: 'Up to 10 locations',
      category: 'Inventory',
      popular: true,
      rating: 4.6,
      reviews: 234,
      freeTrial: '14 days',
      setupTime: '15 minutes'
    },
    {
      icon: Minus,
      title: 'AI Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights.',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Mobile app',
        'Integration APIs',
        'Reporting tools'
      ],
      price: '$29/month',
      originalPrice: '$39/month',
      users: 'Up to 25 users',
      category: 'Finance',
      popular: true,
      rating: 4.5,
      reviews: 567,
      freeTrial: '30 days',
      setupTime: '5 minutes'
    },
    {
      icon: ChevronDown,
      title: 'AI Project Manager',
      description: 'Intelligent project management with AI prioritization, resource allocation, and progress tracking.',
      features: [
        'AI task prioritization',
        'Resource allocation',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Gantt charts',
        'Integration APIs',
        'Mobile app'
      ],
      price: '$89/month',
      originalPrice: '$119/month',
      users: 'Up to 50 users',
      category: 'Project Management',
      popular: true,
      rating: 4.4,
      reviews: 345,
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      icon: ChevronUp,
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance management.',
      features: [
        'Resume screening',
        'Candidate matching',
        'Performance analytics',
        'Employee engagement',
        'Retention analysis',
        'Integration APIs',
        'Compliance tools',
        'Reporting dashboard'
      ],
      price: '$199/month',
      originalPrice: '$249/month',
      users: 'Up to 500 employees',
      category: 'HR',
      popular: true,
      rating: 4.6,
      reviews: 189,
      freeTrial: '14 days',
      setupTime: '20 minutes'
    }
  ];

  const categories = [
    'All',
    'AI & ML',
    'Security',
    'Cloud',
    'Marketing',
    'Development',
    'Productivity',
    'Design',
    'Sales',
    'Support',
    'Analytics',
    'Compliance',
    'Automation',
    'Data',
    'Moderation',
    'Content',
    'Inventory',
    'Finance',
    'Project Management',
    'HR'
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration',
    'Free trials available',
    'Cancel anytime',
    'White-label options',
    'API integrations'
  ];

  const filteredServices = microSaasProducts.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover 25+ powerful micro SAAS solutions powered by AI. From CRM and analytics to security and automation - transform your business with our intelligent tools." />
        <meta name="keywords" content="micro saas, AI tools, business software, CRM, analytics, automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-driven tools for modern businesses. 25+ ready-to-use applications designed to streamline your operations and boost productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.slice(0, 6).map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  {benefit}
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

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} solution{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative quantum-field">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {service.rating}
                        </div>
                        <span>({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, expandedCard === index ? service.features.length : 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          {expandedCard === index ? (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="flex items-center hover:text-cyan-400 transition-colors"
                            >
                              <ChevronUp className="w-4 h-4 mr-1" />
                              Show less
                            </button>
                          ) : (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="flex items-center hover:text-cyan-400 transition-colors"
                            >
                              <ChevronDown className="w-4 h-4 mr-1" />
                              +{service.features.length - 4} more features
                            </button>
                          )}
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.originalPrice && (
                        <div className="text-lg text-gray-400 line-through">{service.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-300 mb-2">{service.users}</div>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>🕒 {service.setupTime} setup</span>
                      <span>🆓 {service.freeTrial} free trial</span>
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
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
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
