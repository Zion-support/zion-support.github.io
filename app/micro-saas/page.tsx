'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  Search,
  Filter,
  Brain,
  Cloud,
  Code,
  BarChart,
  Smartphone,
  Mail,
  FileText,
  Target,
  Settings,
  Globe,
  Database,
  Lock,
  Calendar,
  DollarSign,
  Award,
  Headphones,
  Download,
  Play
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // Productivity & Business Tools
    {
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and automated reporting for data-driven decisions',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'White-label options'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      popular: true,
      trial: '14-day free trial',
      rating: 4.9,
      reviews: 1247
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Pipeline management', 'Team collaboration'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      popular: true,
      trial: '30-day free trial',
      rating: 4.8,
      reviews: 892
    },
    {
      icon: '📝',
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates and multi-language support',
      features: ['50+ templates', 'Multi-language', 'SEO optimization', 'Plagiarism check', 'Brand voice training', 'Team collaboration'],
      price: '$29/month',
      users: 'Up to 10 users',
      category: 'Productivity',
      trial: '7-day free trial',
      rating: 4.7,
      reviews: 2156
    },
    {
      icon: '📅',
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management for maximum productivity',
      features: ['Smart scheduling', 'Calendar sync', 'Meeting optimization', 'Time tracking', 'Team coordination', 'Mobile app'],
      price: '$19/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      trial: '14-day free trial',
      rating: 4.6,
      reviews: 743
    },
    {
      icon: '💰',
      title: 'AI Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights for better financial control',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Expense reports', 'Tax preparation', 'Multi-currency'],
      price: '$15/month',
      users: 'Up to 20 users',
      category: 'Productivity',
      trial: '14-day free trial',
      rating: 4.5,
      reviews: 567
    },
    {
      icon: '🎯',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking for project success',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time estimation', 'Resource planning', 'Integration APIs'],
      price: '$39/month',
      users: 'Up to 30 users',
      category: 'Productivity',
      trial: '14-day free trial',
      rating: 4.8,
      reviews: 1098
    },

    // Marketing & Sales Tools
    {
      icon: '🎨',
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools and brand consistency',
      features: ['Logo generation', 'Graphic design', 'Brand templates', 'Social media posts', 'Print materials', 'Vector graphics'],
      price: '$35/month',
      users: 'Up to 15 users',
      category: 'Marketing',
      popular: true,
      trial: '7-day free trial',
      rating: 4.9,
      reviews: 1834
    },
    {
      icon: '📱',
      title: 'Landing Page Builder Pro',
      description: 'Build high-converting landing pages with AI optimization, A/B testing capabilities, and conversion tracking',
      features: ['Drag & drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'SEO tools'],
      price: '$29/month',
      users: 'Up to 20 users',
      category: 'Marketing',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 1456
    },
    {
      icon: '📊',
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Technical SEO', 'Competitor analysis', 'Local SEO'],
      price: '$49/month',
      users: 'Up to 25 users',
      category: 'Marketing',
      trial: '14-day free trial',
      rating: 4.6,
      reviews: 923
    },
    {
      icon: '📈',
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'A/B testing', 'ROI analysis'],
      price: '$79/month',
      users: 'Up to 30 users',
      category: 'Marketing',
      trial: '14-day free trial',
      rating: 4.8,
      reviews: 1123
    },
    {
      icon: '📧',
      title: 'Email Marketing Pro',
      description: 'Advanced email marketing automation with AI personalization, segmentation, and performance analytics',
      features: ['Email automation', 'AI personalization', 'Advanced segmentation', 'A/B testing', 'Analytics dashboard', 'Template library'],
      price: '$45/month',
      users: 'Up to 50 users',
      category: 'Marketing',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 1876
    },
    {
      icon: '🔍',
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics across platforms',
      features: ['Content creation', 'Auto-scheduling', 'Multi-platform', 'Analytics dashboard', 'Hashtag optimization', 'Engagement tracking'],
      price: '$45/month',
      users: 'Up to 20 users',
      category: 'Marketing',
      trial: '14-day free trial',
      rating: 4.6,
      reviews: 1345
    },

    // Developer Tools
    {
      icon: '💻',
      title: 'Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages with team collaboration',
      features: ['Code completion', 'Bug detection', 'Code review', 'Multi-language', 'Team collaboration', 'Git integration'],
      price: '$39/month',
      users: 'Up to 25 users',
      category: 'Developer',
      popular: true,
      trial: '30-day free trial',
      rating: 4.9,
      reviews: 2567
    },
    {
      icon: '🔧',
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools for seamless integration',
      features: ['API creation', 'Auto-documentation', 'Testing tools', 'Version control', 'Rate limiting', 'Analytics'],
      price: '$59/month',
      users: 'Up to 40 users',
      category: 'Developer',
      trial: '14-day free trial',
      rating: 4.8,
      reviews: 987
    },
    {
      icon: '🐛',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: ['AI bug detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration APIs', 'Custom workflows'],
      price: '$25/month',
      users: 'Up to 30 users',
      category: 'Developer',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 756
    },
    {
      icon: '📚',
      title: 'Doc Generator Pro',
      description: 'Automatically generate technical documentation, API docs, and user guides from code with AI assistance',
      features: ['Auto-generation', 'Multiple formats', 'Version control', 'Team collaboration', 'Custom templates', 'Integration APIs'],
      price: '$19/month',
      users: 'Up to 20 users',
      category: 'Developer',
      trial: '14-day free trial',
      rating: 4.6,
      reviews: 634
    },

    // Security & Compliance
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses with automated response',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security alerts'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      popular: true,
      trial: '30-day free trial',
      rating: 4.9,
      reviews: 1456
    },
    {
      icon: '🛡️',
      title: 'Compliance Manager Pro',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulations with audit trails and reporting',
      features: ['Multi-regulation', 'Audit trails', 'Automated reporting', 'Risk assessment', 'Policy management', 'Training modules'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Security',
      trial: '14-day free trial',
      rating: 4.8,
      reviews: 823
    },
    {
      icon: '🔐',
      title: 'Identity & Access Manager',
      description: 'Secure identity and access management with multi-factor authentication, single sign-on, and role-based access',
      features: ['SSO integration', 'MFA support', 'Role management', 'Access reviews', 'Audit logging', 'API security'],
      price: '$89/month',
      users: 'Up to 150 users',
      category: 'Security',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 692
    },

    // Cloud & Infrastructure
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments with real-time monitoring',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Performance monitoring', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Cloud',
      popular: true,
      trial: '30-day free trial',
      rating: 4.9,
      reviews: 1876
    },
    {
      icon: '🚀',
      title: 'DevOps Automation Suite',
      description: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and deployment monitoring',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Deployment automation', 'Monitoring', 'Rollback capabilities', 'Team collaboration'],
      price: '$179/month',
      users: 'Up to 50 users',
      category: 'Cloud',
      trial: '14-day free trial',
      rating: 4.8,
      reviews: 1123
    },
    {
      icon: '📊',
      title: 'Performance Monitor Pro',
      description: 'Real-time application and infrastructure performance monitoring with AI-powered insights and alerting',
      features: ['Real-time monitoring', 'AI insights', 'Custom alerts', 'Performance analytics', 'Root cause analysis', 'Capacity planning'],
      price: '$129/month',
      users: 'Up to 100 users',
      category: 'Cloud',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 945
    },

    // Industry-Specific Solutions
    {
      icon: '🏥',
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered insights, patient tracking, and automated reporting',
      features: ['HIPAA compliance', 'Patient records', 'AI insights', 'Automated reporting', 'Integration APIs', 'Audit trails'],
      price: '$249/month',
      users: 'Up to 100 users',
      category: 'Healthcare',
      trial: '30-day free trial',
      rating: 4.9,
      reviews: 567
    },
    {
      icon: '💰',
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting software with automated bookkeeping, tax preparation, and financial insights',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial insights', 'Invoice management', 'Expense tracking', 'Compliance reporting'],
      price: '$89/month',
      users: 'Up to 25 users',
      category: 'Finance',
      trial: '14-day free trial',
      rating: 4.8,
      reviews: 1234
    },
    {
      icon: '🏠',
      title: 'Property Management AI',
      description: 'Complete property management solution with tenant screening, rent collection, and maintenance tracking',
      features: ['Tenant screening', 'Rent collection', 'Maintenance tracking', 'Financial reporting', 'Document management', 'Communication tools'],
      price: '$79/month',
      users: 'Up to 50 users',
      category: 'Real Estate',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 789
    },
    {
      icon: '⚖️',
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and automated workflows',
      features: ['Contract analysis', 'Compliance tracking', 'Document automation', 'Version control', 'Team collaboration', 'Audit trails'],
      price: '$199/month',
      users: 'Up to 75 users',
      category: 'Legal',
      trial: '14-day free trial',
      rating: 4.8,
      reviews: 456
    },
    {
      icon: '🎓',
      title: 'Online Learning Platform',
      description: 'Comprehensive e-learning platform with AI-powered content creation, student tracking, and automated assessments',
      features: ['Content creation', 'Student tracking', 'Automated assessments', 'Progress analytics', 'Certification management', 'Mobile learning'],
      price: '$149/month',
      users: 'Up to 500 students',
      category: 'Education',
      trial: '30-day free trial',
      rating: 4.9,
      reviews: 1876
    },
    {
      icon: '🏭',
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics tracking',
      features: ['Demand forecasting', 'Inventory optimization', 'Logistics tracking', 'Supplier management', 'Risk assessment', 'Cost optimization'],
      price: '$299/month',
      users: 'Up to 100 users',
      category: 'Manufacturing',
      trial: '30-day free trial',
      rating: 4.8,
      reviews: 634
    }
  ];

  const categories = [
    'All',
    'Productivity',
    'Marketing',
    'Developer',
    'Security',
    'Cloud',
    'Healthcare',
    'Finance',
    'Real Estate',
    'Legal',
    'Education',
    'Manufacturing'
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
    'Data security guaranteed',
    'Mobile apps included'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SAAS solutions. AI-powered productivity, marketing, developer, and industry-specific tools for modern businesses." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, productivity software, marketing automation, developer tools, cloud services" />
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
              50+ AI-powered business tools designed to streamline operations, boost productivity, and drive growth for modern businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-cyan-400 font-medium">
                <Users className="w-4 h-4 inline mr-2" />
                50+ Tools Available
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-green-400 font-medium">
                <Clock className="w-4 h-4 inline mr-2" />
                Free Trials
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-purple-400 font-medium">
                <Shield className="w-4 h-4 inline mr-2" />
                Enterprise Security
              </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                      <div className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {product.rating} ({product.reviews} reviews)
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 mb-2">{product.users}</div>
                    <div className="text-sm text-green-400 font-medium">{product.trial}</div>
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
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-3 py-2 bg-cyan-500 text-white rounded-lg">1</button>
                <button className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">2</button>
                <button className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">3</button>
                <span className="px-3 py-2 text-gray-400">...</span>
                <button className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">8</button>
                <button className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{benefit}</h3>
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
