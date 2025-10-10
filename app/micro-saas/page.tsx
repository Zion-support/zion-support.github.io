'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Shield, 
  Cloud, 
  Zap, 
  Brain, 
  Mail, 
  Smartphone, 
  Search, 
  Code, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Settings, 
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Filter,
  Search as SearchIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // Productivity & Business Tools
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'Data visualization', 'Automated insights'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      popular: true,
      trial: '14-day free trial'
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Pipeline management', 'Customer insights'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      popular: true,
      trial: '14-day free trial'
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security analytics'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      popular: true,
      trial: '7-day free trial'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Performance monitoring', 'Cost alerts'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Infrastructure',
      trial: '14-day free trial'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization and optimization',
      features: ['AI personalization', 'A/B testing', 'Automated campaigns', 'Analytics dashboard', 'List management', 'Template library'],
      price: '$79/month',
      users: 'Up to 10,000 contacts',
      category: 'Marketing',
      trial: '14-day free trial'
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform', 'App store publishing', 'Push notifications'],
      price: '$199/month',
      users: 'Unlimited apps',
      category: 'Development',
      trial: '14-day free trial'
    },
    {
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO'],
      price: '$89/month',
      users: 'Up to 5 websites',
      category: 'Marketing',
      trial: '7-day free trial'
    },
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation', 'Code review'],
      price: '$49/month',
      users: 'Up to 10 developers',
      category: 'Development',
      trial: '30-day free trial'
    },
    {
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs', 'Time zone handling'],
      price: '$29/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      trial: '14-day free trial'
    },
    {
      icon: CheckSquare,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Project templates', 'Gantt charts'],
      price: '$39/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      trial: '14-day free trial'
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automated document processing with AI-powered data extraction and analysis',
      features: ['Document scanning', 'Data extraction', 'OCR technology', 'Form processing', 'Document classification', 'Batch processing'],
      price: '$69/month',
      users: 'Up to 1,000 documents/month',
      category: 'Productivity',
      trial: '7-day free trial'
    },
    {
      icon: Settings,
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting', 'Analytics'],
      price: '$99/month',
      users: 'Up to 100 APIs',
      category: 'Development',
      trial: '14-day free trial'
    },
    {
      icon: Globe,
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'Template library'],
      price: '$59/month',
      users: 'Up to 20 pages',
      category: 'Marketing',
      trial: '14-day free trial'
    },
    {
      icon: Brain,
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates',
      features: ['50+ templates', 'Multi-language support', 'Plagiarism check', 'SEO optimization', 'Tone adjustment', 'Content planning'],
      price: '$39/month',
      users: 'Unlimited content',
      category: 'Content',
      trial: '14-day free trial'
    },
    {
      icon: BarChart3,
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget insights', 'Tax preparation', 'Multi-currency', 'Expense reports'],
      price: '$25/month',
      users: 'Up to 5 users',
      category: 'Finance',
      trial: '14-day free trial'
    },
    {
      icon: Users,
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Onboarding'],
      price: '$149/month',
      users: 'Up to 100 positions',
      category: 'HR',
      trial: '14-day free trial'
    },
    {
      icon: Shield,
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis',
      features: ['HIPAA compliance', 'Data extraction', 'Medical analysis', 'Patient portal', 'Integration APIs', 'Audit trails'],
      price: '$199/month',
      users: 'Up to 1,000 patients',
      category: 'Healthcare',
      trial: '7-day free trial'
    },
    {
      icon: BarChart3,
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial reports', 'Expense tracking', 'Compliance', 'Audit support'],
      price: '$89/month',
      users: 'Up to 3 companies',
      category: 'Finance',
      trial: '14-day free trial'
    },
    {
      icon: BarChart3,
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Lease management'],
      price: '$129/month',
      users: 'Up to 50 properties',
      category: 'Real Estate',
      trial: '14-day free trial'
    },
    {
      icon: Shield,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document templates', 'Legal research', 'Case management'],
      price: '$179/month',
      users: 'Up to 5 lawyers',
      category: 'Legal',
      trial: '7-day free trial'
    },
    {
      icon: Users,
      title: 'Online Learning Platform',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking',
      features: ['Personalized learning', 'Progress tracking', 'Course creation', 'Assessment tools', 'Certification', 'Video streaming'],
      price: '$79/month',
      users: 'Up to 500 students',
      category: 'Education',
      trial: '14-day free trial'
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management',
      features: ['Demand forecasting', 'Inventory management', 'Supplier analytics', 'Risk assessment', 'Cost optimization', 'Logistics tracking'],
      price: '$299/month',
      users: 'Up to 10 warehouses',
      category: 'Logistics',
      trial: '14-day free trial'
    },
    {
      icon: Globe,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Multi-platform', 'Engagement tracking', 'Hashtag optimization'],
      price: '$69/month',
      users: 'Up to 10 social accounts',
      category: 'Marketing',
      trial: '14-day free trial'
    },
    {
      icon: Code,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools',
      features: ['AI design tools', 'Logo generation', 'Marketing materials', 'Brand kit', 'Template library', 'Image editing'],
      price: '$49/month',
      users: 'Unlimited designs',
      category: 'Design',
      trial: '14-day free trial'
    },
    {
      icon: BarChart3,
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'Auto-bidding', 'A/B testing'],
      price: '$99/month',
      users: 'Up to $10k ad spend',
      category: 'Marketing',
      trial: '14-day free trial'
    },
    {
      icon: Shield,
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration APIs', 'SLA tracking'],
      price: '$39/month',
      users: 'Up to 25 developers',
      category: 'Development',
      trial: '14-day free trial'
    },
    {
      icon: FileText,
      title: 'Doc Generator AI',
      description: 'Automatically generate technical documentation, API docs, and user guides from code',
      features: ['Auto documentation', 'API docs', 'User guides', 'Code comments', 'Multiple formats', 'Version control'],
      price: '$29/month',
      users: 'Unlimited projects',
      category: 'Development',
      trial: '14-day free trial'
    }
  ];

  const categories = ['All', 'Productivity', 'Marketing', 'Development', 'Security', 'Infrastructure', 'Content', 'Finance', 'HR', 'Healthcare', 'Real Estate', 'Legal', 'Education', 'Logistics', 'Design'];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration',
    'Free trials available',
    'Cancel anytime'
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
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions. 25+ ready-to-use business tools with free trials and instant deployment." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, Zion Tech Group" />
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
              Discover our comprehensive collection of AI-powered micro SAAS solutions. 
              25+ ready-to-use business tools with free trials and instant deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
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

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
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
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-300 mb-1">{product.users}</div>
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
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
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
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
