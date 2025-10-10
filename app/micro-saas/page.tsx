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
  FileText, 
  CreditCard, 
  Calendar,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Filter,
  Search as SearchIcon,
  ShoppingCart,
  Package,
  Heart,
  Stethoscope,
  DollarSign,
  GraduationCap,
  Home,
  Scale
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // Productivity & Business Tools
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and custom reporting for data-driven decisions.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integrations', 'White-label options'],
      price: '$199/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      popular: true,
      rating: 4.9,
      reviews: 1247,
      marketPrice: '$299/month',
      savings: '33% off'
    },
    {
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'AI insights', 'Pipeline optimization'],
      price: '$149/month',
      users: 'Up to 200 users',
      category: 'Productivity',
      popular: true,
      rating: 4.8,
      reviews: 892,
      marketPrice: '$249/month',
      savings: '40% off'
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automated document processing with OCR, data extraction, and intelligent categorization for streamlined workflows.',
      features: ['OCR technology', 'Data extraction', 'Auto-categorization', 'Batch processing', 'API access', 'Custom templates'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      rating: 4.7,
      reviews: 634,
      marketPrice: '$149/month',
      savings: '34% off'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduler AI',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management for maximum productivity.',
      features: ['Smart scheduling', 'Calendar sync', 'Meeting optimization', 'Time tracking', 'Team coordination', 'Mobile app'],
      price: '$79/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      rating: 4.6,
      reviews: 456,
      marketPrice: '$129/month',
      savings: '39% off'
    },
    {
      icon: CreditCard,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, budget insights, and automated reporting.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Expense reports', 'Tax preparation', 'Multi-currency'],
      price: '$49/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      rating: 4.5,
      reviews: 321,
      marketPrice: '$79/month',
      savings: '38% off'
    },
    {
      icon: Target,
      title: 'Task Manager Pro AI',
      description: 'Advanced task management with AI prioritization, team collaboration, progress tracking, and productivity insights.',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Productivity insights', 'Time estimation', 'Project templates'],
      price: '$89/month',
      users: 'Up to 75 users',
      category: 'Productivity',
      rating: 4.7,
      reviews: 567,
      marketPrice: '$139/month',
      savings: '36% off'
    },

    // Marketing & Sales Tools
    {
      icon: Mail,
      title: 'AI Email Marketing Suite',
      description: 'Advanced email marketing automation with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: ['AI optimization', 'Personalization', 'A/B testing', 'Advanced analytics', 'Template library', 'Deliverability tools'],
      price: '$179/month',
      users: 'Up to 100,000 contacts',
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      reviews: 1023,
      marketPrice: '$299/month',
      savings: '40% off'
    },
    {
      icon: Search,
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO'],
      price: '$129/month',
      users: 'Up to 50 websites',
      category: 'Marketing',
      rating: 4.6,
      reviews: 789,
      marketPrice: '$199/month',
      savings: '35% off'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, performance analytics, and engagement optimization.',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Engagement optimization', 'Multi-platform', 'Influencer tracking'],
      price: '$149/month',
      users: 'Up to 25 accounts',
      category: 'Marketing',
      rating: 4.7,
      reviews: 678,
      marketPrice: '$229/month',
      savings: '35% off'
    },
    {
      icon: Target,
      title: 'Lead Generation AI',
      description: 'Automated lead generation with AI prospecting, email sequences, and automated follow-ups for maximum conversion.',
      features: ['AI prospecting', 'Email sequences', 'Auto-follow-ups', 'Lead scoring', 'CRM integration', 'A/B testing'],
      price: '$199/month',
      users: 'Up to 5,000 leads/month',
      category: 'Marketing',
      rating: 4.8,
      reviews: 445,
      marketPrice: '$329/month',
      savings: '39% off'
    },

    // Developer Tools
    {
      icon: Brain,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: ['Code completion', 'Debugging assistance', 'Code optimization', 'Multi-language support', 'Documentation generation', 'Code review'],
      price: '$79/month',
      users: 'Up to 10 developers',
      category: 'Developer',
      popular: true,
      rating: 4.9,
      reviews: 2156,
      marketPrice: '$129/month',
      savings: '39% off'
    },
    {
      icon: Cloud,
      title: 'API Builder & Manager',
      description: 'Create and manage APIs with AI assistance, documentation generation, testing tools, and monitoring.',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Monitoring', 'Rate limiting', 'Analytics'],
      price: '$99/month',
      users: 'Up to 100 APIs',
      category: 'Developer',
      rating: 4.6,
      reviews: 534,
      marketPrice: '$159/month',
      savings: '38% off'
    },
    {
      icon: Shield,
      title: 'Security Scanner Pro',
      description: 'Automated security scanning with vulnerability detection, compliance checking, and security recommendations.',
      features: ['Vulnerability scanning', 'Compliance checking', 'Security recommendations', 'Penetration testing', 'Code analysis', 'Report generation'],
      price: '$149/month',
      users: 'Up to 20 applications',
      category: 'Developer',
      rating: 4.7,
      reviews: 423,
      marketPrice: '$229/month',
      savings: '35% off'
    },

    // E-commerce & Retail
    {
      icon: ShoppingCart,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced e-commerce analytics with customer insights, sales forecasting, and inventory optimization.',
      features: ['Customer insights', 'Sales forecasting', 'Inventory optimization', 'Conversion tracking', 'A/B testing', 'Revenue analytics'],
      price: '$199/month',
      users: 'Up to 10 stores',
      category: 'E-commerce',
      rating: 4.8,
      reviews: 567,
      marketPrice: '$299/month',
      savings: '33% off'
    },
    {
      icon: Package,
      title: 'Inventory Manager AI',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand forecasting', 'Auto-reordering', 'Supply chain optimization', 'Multi-location', 'Barcode scanning', 'Reporting'],
      price: '$179/month',
      users: 'Up to 5,000 SKUs',
      category: 'E-commerce',
      rating: 4.6,
      reviews: 389,
      marketPrice: '$269/month',
      savings: '33% off'
    },

    // Healthcare & Medical
    {
      icon: Heart,
      title: 'Medical Records AI',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and patient insights.',
      features: ['HIPAA compliance', 'Data extraction', 'Patient insights', 'Appointment scheduling', 'Billing integration', 'Telemedicine'],
      price: '$299/month',
      users: 'Up to 100 patients',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 234,
      marketPrice: '$449/month',
      savings: '33% off'
    },
    {
      icon: Stethoscope,
      title: 'Health Analytics Dashboard',
      description: 'Comprehensive health analytics with patient monitoring, treatment insights, and outcome predictions.',
      features: ['Patient monitoring', 'Treatment insights', 'Outcome predictions', 'Clinical reports', 'Alert system', 'Integration APIs'],
      price: '$399/month',
      users: 'Up to 50 practitioners',
      category: 'Healthcare',
      rating: 4.8,
      reviews: 156,
      marketPrice: '$599/month',
      savings: '33% off'
    },

    // Finance & Accounting
    {
      icon: DollarSign,
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting with automated bookkeeping, tax preparation, and financial insights.',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial insights', 'Invoice generation', 'Expense tracking', 'Compliance'],
      price: '$149/month',
      users: 'Up to 5 companies',
      category: 'Finance',
      rating: 4.7,
      reviews: 678,
      marketPrice: '$229/month',
      savings: '35% off'
    },
    {
      icon: TrendingUp,
      title: 'Investment Analyzer AI',
      description: 'AI-powered investment analysis with portfolio optimization, risk assessment, and market predictions.',
      features: ['Portfolio optimization', 'Risk assessment', 'Market predictions', 'Performance tracking', 'Alert system', 'Research tools'],
      price: '$199/month',
      users: 'Up to 10 portfolios',
      category: 'Finance',
      rating: 4.8,
      reviews: 345,
      marketPrice: '$299/month',
      savings: '33% off'
    },

    // Education & Training
    {
      icon: GraduationCap,
      title: 'Learning Management AI',
      description: 'Intelligent learning management with personalized content, progress tracking, and automated assessments.',
      features: ['Personalized content', 'Progress tracking', 'Automated assessments', 'Course creation', 'Analytics', 'Mobile app'],
      price: '$129/month',
      users: 'Up to 500 students',
      category: 'Education',
      rating: 4.6,
      reviews: 456,
      marketPrice: '$199/month',
      savings: '35% off'
    },

    // Real Estate
    {
      icon: Home,
      title: 'Property Management AI',
      description: 'Comprehensive property management with tenant screening, maintenance scheduling, and financial tracking.',
      features: ['Tenant screening', 'Maintenance scheduling', 'Financial tracking', 'Document management', 'Communication tools', 'Reporting'],
      price: '$179/month',
      users: 'Up to 100 properties',
      category: 'Real Estate',
      rating: 4.7,
      reviews: 234,
      marketPrice: '$269/month',
      savings: '33% off'
    },

    // Legal & Compliance
    {
      icon: Scale,
      title: 'Legal Document AI',
      description: 'AI-powered legal document analysis, contract review, and compliance monitoring for law firms.',
      features: ['Document analysis', 'Contract review', 'Compliance monitoring', 'Legal research', 'Case management', 'Client portal'],
      price: '$299/month',
      users: 'Up to 25 lawyers',
      category: 'Legal',
      rating: 4.8,
      reviews: 123,
      marketPrice: '$449/month',
      savings: '33% off'
    }
  ];

  const categories = [
    'All',
    'Productivity',
    'Marketing',
    'Developer',
    'E-commerce',
    'Healthcare',
    'Finance',
    'Education',
    'Real Estate',
    'Legal'
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment (24-48 hours)',
    'Scalable solutions',
    'Regular updates & new features',
    '24/7 expert support',
    'Easy integration with existing tools',
    'Free trial for all services',
    'Custom pricing for enterprise'
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
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SAAS solutions powered by AI. From productivity tools to marketing automation, healthcare to finance - transform your business with affordable, intelligent software." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, CRM, analytics, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-scan-line">
              50+ Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-driven business tools designed for modern companies. Affordable, scalable, and ready to deploy in 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button text-center"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card p-6">
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
                        ? 'bg-cyan-500 text-white cyber-glow'
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
              <h2 className="text-3xl font-bold text-white neon-text">
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300 group relative">
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
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{product.rating}</span>
                          <span className="text-xs text-gray-400">({product.reviews})</span>
                        </div>
                      </div>
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
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                      <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      <div className="text-sm text-green-400 font-medium">{product.savings}</div>
                    </div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 cyber-button text-center">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
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
            <div className="quantum-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 holographic-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from 50+ micro SaaS solutions powered by AI. Start with a free trial and scale as you grow.
                Average setup time: 24-48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Start Free Trial
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
