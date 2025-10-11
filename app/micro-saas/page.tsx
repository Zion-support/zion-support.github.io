'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3,
  Clock,
  Award,
  Rocket,
  Search,
  Filter
} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Analytics', 'Marketing', 'Productivity', 'Communication', 'Security', 'Finance', 'Development', 'Content', 'Automation']

  const microSaasProducts = [
    {
      id: 'analytics-dashboard',
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling',
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Multi-tenant Architecture',
        'API Integration',
        'Mobile App Access'
      ],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting'
      ],
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/analytics-pro',
      savings: '70% off market rate'
    },
    {
      id: 'ai-chatbot',
      icon: Users,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support',
      features: [
        'GPT-4 Powered AI',
        'Multi-channel Support',
        'Advanced Sentiment Analysis',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Multi-language Support',
        'CRM Integration',
        'Analytics Dashboard'
      ],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      category: 'Communication',
      popular: true,
      link: 'https://ziontechgroup.com/chat-ai',
      savings: '60% off market rate'
    },
    {
      id: 'security-shield',
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring and threat detection with automated incident response',
      features: [
        'Real-time Threat Detection',
        'Automated Incident Response',
        'Compliance Monitoring',
        'Vulnerability Scanning',
        'Security Analytics',
        '24/7 SOC Support',
        'Penetration Testing',
        'Security Training'
      ],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: [
        'Proactive threat protection',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/security-shield',
      savings: '70% off market rate'
    },
    {
      id: 'content-studio',
      icon: Star,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content',
      features: [
        'AI Content Generation',
        'Multi-platform Publishing',
        'SEO Optimization',
        'Brand Voice Training',
        'Content Calendar',
        'Performance Analytics',
        'Image Generation',
        'Video Creation'
      ],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      link: 'https://ziontechgroup.com/content-studio',
      savings: '65% off market rate'
    },
    {
      id: 'crm-intelligence',
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflows',
      features: [
        'AI Lead Scoring',
        'Predictive Analytics',
        'Automated Workflows',
        'Customer Segmentation',
        'Sales Forecasting',
        'Integration Hub',
        'Email Automation',
        'Pipeline Management'
      ],
      price: '$129/month',
      marketPrice: '$200-600/month',
      benefits: [
        'Increase sales by 35%',
        'Better lead qualification',
        'Automated follow-ups',
        'Data-driven insights'
      ],
      category: 'Marketing',
      popular: true,
      link: 'https://ziontechgroup.com/crm-intelligence',
      savings: '60% off market rate'
    },
    {
      id: 'lead-magnet',
      icon: Zap,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing',
      features: [
        'AI-powered Lead Scoring',
        'Multi-channel Lead Capture',
        'Automated Lead Nurturing',
        'CRM Integration',
        'Advanced Analytics',
        'A/B Testing',
        'Email Sequences',
        'Landing Page Builder'
      ],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization'
      ],
      category: 'Marketing',
      popular: true,
      link: 'https://ziontechgroup.com/lead-magnet',
      savings: '70% off market rate'
    },
    {
      id: 'project-master',
      icon: Clock,
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and automated reporting',
      features: [
        'AI Resource Allocation',
        'Predictive Timeline Management',
        'Risk Assessment',
        'Team Collaboration',
        'Progress Tracking',
        'Automated Reporting',
        'Budget Management',
        'Time Tracking'
      ],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: [
        'Improved project success rate',
        'Better resource utilization',
        'Reduced project delays',
        'Automated reporting'
      ],
      category: 'Productivity',
      popular: false,
      link: 'https://ziontechgroup.com/project-master',
      savings: '65% off market rate'
    },
    {
      id: 'email-automation',
      icon: Zap,
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automated campaigns',
      features: [
        'AI Personalization',
        'Automated Campaigns',
        'A/B Testing',
        'Advanced Segmentation',
        'Deliverability Optimization',
        'Performance Analytics',
        'Template Builder',
        'List Management'
      ],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Increase open rates by 40%',
        'Automated campaigns',
        'Better personalization',
        'ROI optimization'
      ],
      category: 'Marketing',
      popular: false,
      link: 'https://ziontechgroup.com/email-automation',
      savings: '70% off market rate'
    },
    {
      id: 'invoice-genius',
      icon: Shield,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking',
      features: [
        'AI-powered Invoice Generation',
        'Automated Recurring Billing',
        'Multi-currency Support',
        'Payment Tracking',
        'Tax Calculation',
        'Client Portal',
        'Expense Tracking',
        'Financial Reporting'
      ],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices'
      ],
      category: 'Finance',
      popular: true,
      link: 'https://ziontechgroup.com/invoice-genius',
      savings: '70% off market rate'
    },
    {
      id: 'workflow-automation',
      icon: Clock,
      title: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and monitoring',
      features: [
        'Process Mining',
        'Workflow Optimization',
        'Task Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Custom Integrations',
        'API Connectors',
        'Analytics Dashboard'
      ],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: false,
      link: 'https://ziontechgroup.com/workflow-automation',
      savings: '70% off market rate'
    },
    {
      id: 'social-scheduler',
      icon: Star,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and automated posting',
      features: [
        'AI Content Optimization',
        'Multi-platform Scheduling',
        'Hashtag Research',
        'Engagement Analytics',
        'Competitor Analysis',
        'Content Calendar',
        'Team Collaboration',
        'Performance Tracking'
      ],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: [
        'Increase engagement by 60%',
        'Automated posting',
        'Better content strategy',
        'Time savings'
      ],
      category: 'Marketing',
      popular: false,
      link: 'https://ziontechgroup.com/social-scheduler',
      savings: '70% off market rate'
    },
    {
      id: 'ai-video-editor',
      icon: Zap,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and optimization',
      features: [
        'AI Auto-editing',
        'Smart Cut Detection',
        'Automated Subtitles',
        'Color Correction',
        'Audio Enhancement',
        'Multi-format Export',
        'Template Library',
        'Cloud Storage'
      ],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Save 70% editing time',
        'Professional quality',
        'Automated features',
        'Easy to use'
      ],
      category: 'Content',
      popular: false,
      link: 'https://ziontechgroup.com/ai-video-editor',
      savings: '70% off market rate'
    },
    {
      id: 'ai-translator',
      icon: Shield,
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with context-aware translations and real-time language processing',
      features: [
        '100+ Languages',
        'Context-aware Translation',
        'Real-time Processing',
        'Document Translation',
        'Voice Translation',
        'API Integration',
        'Batch Processing',
        'Quality Assurance'
      ],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Accurate translations',
        'Real-time processing',
        'Multiple formats',
        'API integration'
      ],
      category: 'Communication',
      popular: false,
      link: 'https://ziontechgroup.com/ai-translator',
      savings: '70% off market rate'
    },
    {
      id: 'ai-code-reviewer',
      icon: Clock,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection and security analysis',
      features: [
        'Automated Code Review',
        'Security Vulnerability Detection',
        'Performance Analysis',
        'Code Quality Metrics',
        'Best Practice Suggestions',
        'Team Collaboration',
        'Integration Support',
        'Custom Rules'
      ],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: [
        'Reduce bugs by 50%',
        'Improve code quality',
        'Security enhancement',
        'Team learning'
      ],
      category: 'Development',
      popular: false,
      link: 'https://ziontechgroup.com/ai-code-reviewer',
      savings: '70% off market rate'
    },
    {
      id: 'customer-insights',
      icon: Star,
      title: 'Zion Customer Insights Pro',
      description: 'AI-powered customer analytics platform with sentiment analysis and behavioral insights',
      features: [
        'Sentiment Analysis',
        'Behavioral Tracking',
        'Customer Segmentation',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Real-time Dashboards',
        'Custom Reports',
        'Integration APIs'
      ],
      price: '$119/month',
      marketPrice: '$250-600/month',
      benefits: [
        'Better customer understanding',
        'Churn prevention',
        'Personalized experiences',
        'Data-driven decisions'
      ],
      category: 'Analytics',
      popular: false,
      link: 'https://ziontechgroup.com/customer-insights',
      savings: '70% off market rate'
    },
    {
      id: 'ai-email-assistant',
      icon: Zap,
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered sorting, drafting, and response suggestions',
      features: [
        'Smart Email Sorting',
        'AI Draft Suggestions',
        'Priority Classification',
        'Auto-responses',
        'Email Analytics',
        'Calendar Integration',
        'Spam Protection',
        'Team Collaboration'
      ],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: [
        'Save 2 hours daily',
        'Better email organization',
        'Faster responses',
        'Reduced email stress'
      ],
      category: 'Productivity',
      popular: false,
      link: 'https://ziontechgroup.com/ai-email-assistant',
      savings: '70% off market rate'
    },
    {
      id: 'ai-meeting-assistant',
      icon: Shield,
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated transcription, action items, and follow-ups',
      features: [
        'Automated Transcription',
        'Action Item Extraction',
        'Meeting Summaries',
        'Calendar Integration',
        'Follow-up Automation',
        'Team Collaboration',
        'Voice Recognition',
        'Note Sharing'
      ],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: [
        'Better meeting efficiency',
        'Automated follow-ups',
        'Improved accountability',
        'Time savings'
      ],
      category: 'Productivity',
      popular: false,
      link: 'https://ziontechgroup.com/ai-meeting-assistant',
      savings: '70% off market rate'
    },
    {
      id: 'ai-seo-optimizer',
      icon: Clock,
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research and content optimization',
      features: [
        'Keyword Research',
        'Content Optimization',
        'Competitor Analysis',
        'Rank Tracking',
        'Technical SEO Audit',
        'Performance Monitoring',
        'Content Suggestions',
        'Link Building'
      ],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Increase organic traffic',
        'Better search rankings',
        'Automated optimization',
        'Competitive advantage'
      ],
      category: 'Marketing',
      popular: false,
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      savings: '70% off market rate'
    },
    {
      id: 'ai-data-cleaner',
      icon: Star,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated data quality management',
      features: [
        'Automated Data Cleaning',
        'Duplicate Detection',
        'Data Validation',
        'Format Standardization',
        'Quality Scoring',
        'Error Reporting',
        'Batch Processing',
        'API Integration'
      ],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Improve data quality',
        'Reduce errors',
        'Automated cleaning',
        'Better analytics'
      ],
      category: 'Analytics',
      popular: false,
      link: 'https://ziontechgroup.com/ai-data-cleaner',
      savings: '70% off market rate'
    },
    {
      id: 'ai-contract-analyzer',
      icon: Zap,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment with automated legal document processing',
      features: [
        'Contract Analysis',
        'Risk Assessment',
        'Clause Extraction',
        'Compliance Checking',
        'Automated Summaries',
        'Legal Database Integration',
        'Version Control',
        'Team Collaboration'
      ],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: [
        'Faster contract review',
        'Risk reduction',
        'Compliance assurance',
        'Time savings'
      ],
      category: 'Productivity',
      popular: false,
      link: 'https://ziontechgroup.com/ai-contract-analyzer',
      savings: '70% off market rate'
    }
  ]

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our pre-built solutions and easy integration.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all our services.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our cloud-based infrastructure.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: 'Scalable',
      description: 'Grow with your business - easily upgrade or add more features as needed.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Affordable AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - affordable, scalable AI and IT tools designed for growing businesses. Start with low monthly costs." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business tools, AI tools, affordable software, subscription software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Affordable, scalable AI and IT tools designed for growing businesses. Start with low monthly costs and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <span>Call: (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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
                      placeholder="Search micro SaaS tools..."
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

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need powerful tools without the complexity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Tools' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} tool{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
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
                      {product.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      )}
                    </div>
                    {product.savings && (
                      <div className="text-sm text-green-400 font-medium">{product.savings}</div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={product.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Call Now
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
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of our micro SaaS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-white/80">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default MicroSaasPage
