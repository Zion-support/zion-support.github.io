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
  Smartphone, 
  Code, 
  Users, 
  Mail, 
  Search,
  Calendar,
  CheckSquare,
  FileText,
  Settings,
  Globe,
  Target,
  TrendingUp,
  Lock,
  Database,
  Cpu,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Productivity', 'Marketing', 'Development', 'Analytics', 'Security', 'AI Tools', 'Business'];

  const microSaasProducts = [
    // Productivity Tools
    {
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and automated reporting for data-driven decisions.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'White-label options'],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 100 users',
      category: 'Analytics',
      popular: true,
      rating: 4.9,
      reviews: 1247,
      savings: 'Save $100/month'
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM Elite',
      description: 'Intelligent customer relationship management with advanced AI insights, automated workflows, and personalized customer experiences.',
      features: ['AI lead scoring', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Advanced analytics'],
      price: '$299/month',
      originalPrice: '$399/month',
      users: 'Up to 500 users',
      category: 'Productivity',
      popular: true,
      rating: 4.8,
      reviews: 892,
      savings: 'Save $100/month'
    },
    {
      icon: '✍️',
      title: 'AI Content Studio Pro',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      features: ['AI writing', 'Image generation', 'Video editing', 'Social media automation', 'SEO optimization', 'Brand voice training'],
      price: '$149/month',
      originalPrice: '$199/month',
      users: 'Up to 50 users',
      category: 'Marketing',
      popular: true,
      rating: 4.7,
      reviews: 2156,
      savings: 'Save $50/month'
    },
    {
      icon: '🤖',
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with advanced NLP and multi-language support.',
      features: ['No-code builder', 'Multi-language support', 'Integration APIs', 'Analytics dashboard', 'Custom training', 'Voice integration'],
      price: '$99/month',
      originalPrice: '$149/month',
      users: 'Unlimited',
      category: 'AI Tools',
      popular: true,
      rating: 4.6,
      reviews: 1834,
      savings: 'Save $50/month'
    },
    {
      icon: '📧',
      title: 'AI Email Marketing Suite',
      description: 'Advanced email marketing automation with AI optimization, personalization, and comprehensive analytics for maximum ROI.',
      features: ['AI optimization', 'Personalization', 'A/B testing', 'Advanced analytics', 'Automation workflows', 'Deliverability optimization'],
      price: '$179/month',
      originalPrice: '$249/month',
      users: 'Up to 10,000 contacts',
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      reviews: 1456,
      savings: 'Save $70/month'
    },
    {
      icon: '📱',
      title: 'AI Mobile App Builder Pro',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment to app stores.',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform', 'App store publishing', 'Push notifications'],
      price: '$399/month',
      originalPrice: '$599/month',
      users: 'Unlimited',
      category: 'Development',
      popular: true,
      rating: 4.5,
      reviews: 967,
      savings: 'Save $200/month'
    },
    {
      icon: '🔍',
      title: 'AI SEO Optimizer Pro',
      description: 'Comprehensive SEO analysis and optimization with AI-powered keyword research, content suggestions, and ranking tracking.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO'],
      price: '$129/month',
      originalPrice: '$179/month',
      users: 'Up to 25 websites',
      category: 'Marketing',
      popular: true,
      rating: 4.7,
      reviews: 1234,
      savings: 'Save $50/month'
    },
    {
      icon: '💰',
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights and tax calculations.',
      features: ['Automated invoicing', 'Payment tracking', 'Financial reports', 'Tax calculations', 'Client portal', 'Multi-currency'],
      price: '$79/month',
      originalPrice: '$119/month',
      users: 'Up to 200 clients',
      category: 'Business',
      popular: true,
      rating: 4.6,
      reviews: 892,
      savings: 'Save $40/month'
    },
    {
      icon: '💻',
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code completion, debugging, and optimization for multiple programming languages with team collaboration.',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Team collaboration', 'Documentation generation'],
      price: '$39/month',
      originalPrice: '$59/month',
      users: 'Up to 20 developers',
      category: 'Development',
      popular: true,
      rating: 4.8,
      reviews: 2156,
      savings: 'Save $20/month'
    },
    {
      icon: '🔧',
      title: 'API Builder Enterprise',
      description: 'Create and manage APIs with AI assistance, documentation generation, testing tools, and comprehensive monitoring.',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting', 'Analytics'],
      price: '$59/month',
      originalPrice: '$89/month',
      users: 'Unlimited',
      category: 'Development',
      popular: true,
      rating: 4.5,
      reviews: 743,
      savings: 'Save $30/month'
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite Pro',
      description: 'Advanced cybersecurity monitoring with AI threat detection, vulnerability scanning, and automated incident response.',
      features: ['AI threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security analytics'],
      price: '$299/month',
      originalPrice: '$399/month',
      users: 'Up to 500 devices',
      category: 'Security',
      popular: true,
      rating: 4.9,
      reviews: 1456,
      savings: 'Save $100/month'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager Pro',
      description: 'Comprehensive cloud resource management with cost optimization, auto-scaling, and multi-cloud support.',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Security management', 'Performance monitoring'],
      price: '$399/month',
      originalPrice: '$599/month',
      users: 'Unlimited',
      category: 'Analytics',
      popular: true,
      rating: 4.7,
      reviews: 1234,
      savings: 'Save $200/month'
    },
    {
      icon: '📅',
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and advanced time management features.',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs', 'Team scheduling'],
      price: '$29/month',
      originalPrice: '$49/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      popular: true,
      rating: 4.6,
      reviews: 892,
      savings: 'Save $20/month'
    },
    {
      icon: '📊',
      title: 'Smart Analytics Pro',
      description: 'Advanced business analytics with AI insights, automated reports, and predictive forecasting for data-driven decisions.',
      features: ['Real-time analytics', 'Predictive forecasting', 'Automated reports', 'Custom metrics', 'Data integration', 'Mobile dashboard'],
      price: '$99/month',
      originalPrice: '$149/month',
      users: 'Up to 200 users',
      category: 'Analytics',
      popular: true,
      rating: 4.8,
      reviews: 1678,
      savings: 'Save $50/month'
    },
    {
      icon: '💰',
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management with receipt scanning, categorization, budget insights, and tax preparation.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget insights', 'Tax preparation', 'Multi-currency', 'Team management'],
      price: '$25/month',
      originalPrice: '$39/month',
      users: 'Up to 50 users',
      category: 'Business',
      popular: true,
      rating: 4.5,
      reviews: 743,
      savings: 'Save $14/month'
    },
    {
      icon: '✅',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and comprehensive progress tracking.',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Project templates', 'Integration APIs'],
      price: '$49/month',
      originalPrice: '$79/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      popular: true,
      rating: 4.7,
      reviews: 1234,
      savings: 'Save $30/month'
    },
    {
      icon: '👥',
      title: 'CRM Lite Pro',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation for small businesses.',
      features: ['AI lead scoring', 'Contact management', 'Sales pipeline', 'Email integration', 'Mobile app', 'Custom fields'],
      price: '$79/month',
      originalPrice: '$119/month',
      users: 'Up to 200 users',
      category: 'Productivity',
      popular: true,
      rating: 4.6,
      reviews: 892,
      savings: 'Save $40/month'
    },
    {
      icon: '📧',
      title: 'Email Optimizer Pro',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and comprehensive A/B testing.',
      features: ['Subject line AI', 'Send time optimization', 'A/B testing', 'Open rate tracking', 'Spam analysis', 'Deliverability optimization'],
      price: '$39/month',
      originalPrice: '$59/month',
      users: 'Up to 5,000 emails/month',
      category: 'Marketing',
      popular: true,
      rating: 4.5,
      reviews: 743,
      savings: 'Save $20/month'
    },
    {
      icon: '🌐',
      title: 'Social Media Manager Pro',
      description: 'AI-driven social media management with content creation, scheduling, and comprehensive performance analytics.',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Multi-platform', 'Engagement tracking', 'Hashtag optimization'],
      price: '$69/month',
      originalPrice: '$99/month',
      users: 'Up to 20 accounts',
      category: 'Marketing',
      popular: true,
      rating: 4.6,
      reviews: 1234,
      savings: 'Save $30/month'
    },
    {
      icon: '🎨',
      title: 'AI Design Studio Pro',
      description: 'Professional design tools with AI-powered graphics, logos, and marketing materials creation.',
      features: ['AI design tools', 'Logo generation', 'Marketing materials', 'Brand kit', 'Template library', 'Collaboration tools'],
      price: '$49/month',
      originalPrice: '$79/month',
      users: 'Up to 100 projects',
      category: 'Marketing',
      popular: true,
      rating: 4.7,
      reviews: 892,
      savings: 'Save $30/month'
    },
    {
      icon: '🌐',
      title: 'Landing Page Builder Pro',
      description: 'High-converting landing pages with AI optimization, A/B testing, and comprehensive conversion tracking.',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'SEO optimization'],
      price: '$39/month',
      originalPrice: '$59/month',
      users: 'Up to 50 pages',
      category: 'Marketing',
      popular: true,
      rating: 4.5,
      reviews: 743,
      savings: 'Save $20/month'
    },
    {
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'Comprehensive SEO analysis and optimization with AI-powered keyword research and content suggestions.',
      features: ['SEO analysis', 'Keyword research', 'Content suggestions', 'Ranking tracking', 'Technical audits', 'Local SEO'],
      price: '$69/month',
      originalPrice: '$99/month',
      users: 'Up to 15 websites',
      category: 'Marketing',
      popular: true,
      rating: 4.6,
      reviews: 1234,
      savings: 'Save $30/month'
    },
    {
      icon: '📈',
      title: 'Ad Campaign Manager Pro',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms.',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'Auto-bidding', 'A/B testing'],
      price: '$99/month',
      originalPrice: '$149/month',
      users: 'Unlimited campaigns',
      category: 'Marketing',
      popular: true,
      rating: 4.7,
      reviews: 892,
      savings: 'Save $50/month'
    },
    {
      icon: '🐛',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration APIs', 'Custom workflows'],
      price: '$39/month',
      originalPrice: '$59/month',
      users: 'Up to 50 developers',
      category: 'Development',
      popular: true,
      rating: 4.5,
      reviews: 743,
      savings: 'Save $20/month'
    },
    {
      icon: '📚',
      title: 'Doc Generator Pro',
      description: 'Automatically generate technical documentation, API docs, and user guides from code with AI assistance.',
      features: ['Auto documentation', 'API docs', 'User guides', 'Code comments', 'Multiple formats', 'Version control'],
      price: '$29/month',
      originalPrice: '$49/month',
      users: 'Unlimited',
      category: 'Development',
      popular: true,
      rating: 4.4,
      reviews: 567,
      savings: 'Save $20/month'
    },
    {
      icon: '👥',
      title: 'AI Recruitment Assistant Pro',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Analytics'],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 100 positions',
      category: 'Business',
      popular: true,
      rating: 4.8,
      reviews: 1234,
      savings: 'Save $100/month'
    },
    {
      icon: '🏥',
      title: 'Medical Records Manager Pro',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis.',
      features: ['HIPAA compliance', 'Data extraction', 'Medical analysis', 'Patient portal', 'Integration APIs', 'Security features'],
      price: '$299/month',
      originalPrice: '$399/month',
      users: 'Up to 1,000 patients',
      category: 'Business',
      popular: true,
      rating: 4.9,
      reviews: 892,
      savings: 'Save $100/month'
    },
    {
      icon: '💰',
      title: 'AI Accounting Assistant Pro',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and comprehensive financial reporting.',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial reports', 'Expense tracking', 'Compliance', 'Multi-currency'],
      price: '$149/month',
      originalPrice: '$199/month',
      users: 'Up to 500 transactions',
      category: 'Business',
      popular: true,
      rating: 4.7,
      reviews: 1234,
      savings: 'Save $50/month'
    },
    {
      icon: '🏠',
      title: 'Property Management AI Pro',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization.',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Financial tracking'],
      price: '$179/month',
      originalPrice: '$249/month',
      users: 'Up to 500 properties',
      category: 'Business',
      popular: true,
      rating: 4.6,
      reviews: 743,
      savings: 'Save $70/month'
    },
    {
      icon: '⚖️',
      title: 'Legal Document Manager Pro',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment.',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document templates', 'Legal research', 'Team collaboration'],
      price: '$249/month',
      originalPrice: '$349/month',
      users: 'Up to 1,000 documents',
      category: 'Business',
      popular: true,
      rating: 4.8,
      reviews: 892,
      savings: 'Save $100/month'
    },
    {
      icon: '🎓',
      title: 'Online Learning Platform Pro',
      description: 'AI-powered educational platform with personalized learning paths and comprehensive progress tracking.',
      features: ['Personalized learning', 'Progress tracking', 'Course creation', 'Assessment tools', 'Certification', 'Mobile app'],
      price: '$99/month',
      originalPrice: '$149/month',
      users: 'Up to 1,000 students',
      category: 'Business',
      popular: true,
      rating: 4.7,
      reviews: 1234,
      savings: 'Save $50/month'
    },
    {
      icon: '📦',
      title: 'Supply Chain Optimizer Pro',
      description: 'AI-powered supply chain optimization with demand forecasting and comprehensive inventory management.',
      features: ['Demand forecasting', 'Inventory management', 'Supplier analytics', 'Risk assessment', 'Cost optimization', 'Integration APIs'],
      price: '$399/month',
      originalPrice: '$599/month',
      users: 'Unlimited',
      category: 'Business',
      popular: true,
      rating: 4.8,
      reviews: 743,
      savings: 'Save $200/month'
    }
  ];

  const benefits = [
    'No upfront costs - Start with free trials',
    'Quick deployment - Get started in minutes',
    'Scalable solutions - Grow with your business',
    'Regular updates - Always latest features',
    '24/7 support - Expert help when you need it',
    'Easy integration - Works with your existing tools',
    'AI-powered insights - Make data-driven decisions',
    'Enterprise security - Bank-level protection'
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 50+ micro SAAS solutions powered by AI. From productivity tools to marketing automation, boost your business efficiency with our innovative software-as-a-service offerings." />
        <meta name="keywords" content="micro saas, business tools, AI software, productivity tools, marketing automation, business intelligence, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
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
              50+ AI-powered business tools designed to streamline operations, boost productivity, and drive growth. 
              Start with free trials and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
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
                  
                  <div className="mb-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    {product.savings && (
                      <div className="text-sm text-green-400 font-medium mb-2">{product.savings}</div>
                    )}
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
              <div className="text-white/80 text-sm">
                <p className="mb-2">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
