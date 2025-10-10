'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Shield, 
  Cloud, 
  Mail, 
  CheckSquare, 
  ShoppingCart, 
  UserPlus, 
  FileText, 
  Home, 
  GraduationCap, 
  Truck, 
  Scale, 
  BookOpen, 
  Zap, 
  Sparkles,
  Phone,
  Mail as MailIcon,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Globe,
  Lock,
  Brain,
  Cpu,
  Database,
  Smartphone,
  Code,
  Target,
  Settings
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Analytics
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time AI insights, predictive analytics, and automated reporting for data-driven decisions.',
      features: ['Real-time dashboards', 'AI-powered insights', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Data visualization', 'Automated alerts'],
      price: '$199/month',
      users: 'Up to 100 users',
      category: 'AI & Analytics',
      popular: true,
      marketPrice: '$299/month',
      savings: '33% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    },
    {
      icon: Brain,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'AI insights', 'Pipeline management', 'Contact enrichment', 'Performance analytics'],
      price: '$149/month',
      users: 'Up to 200 users',
      category: 'AI & Analytics',
      popular: true,
      marketPrice: '$249/month',
      savings: '40% off',
      trial: '30-day free trial',
      setup: '1-day setup'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI-driven campaigns, personalization, and ROI optimization.',
      features: ['Campaign automation', 'AI personalization', 'A/B testing', 'ROI optimization', 'Multi-channel', 'Lead scoring', 'Email sequences', 'Social media automation'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'AI & Analytics',
      marketPrice: '$499/month',
      savings: '40% off',
      trial: '14-day free trial',
      setup: '2-day setup'
    },
    {
      icon: BarChart3,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced analytics for online stores with conversion tracking, customer behavior analysis, and revenue optimization.',
      features: ['Conversion tracking', 'Customer analytics', 'Revenue optimization', 'A/B testing', 'Inventory insights', 'Marketing attribution', 'Sales forecasting', 'Custom dashboards'],
      price: '$179/month',
      users: 'Unlimited',
      category: 'AI & Analytics',
      marketPrice: '$299/month',
      savings: '40% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    },

    // Security & Compliance
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring with AI threat detection, vulnerability scanning, and compliance reporting.',
      features: ['AI threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security audits', 'Risk assessment', 'Automated remediation'],
      price: '$199/month',
      users: 'Up to 500 users',
      category: 'Security & Compliance',
      popular: true,
      marketPrice: '$399/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '1-day setup'
    },
    {
      icon: Lock,
      title: 'GDPR Compliance Manager',
      description: 'Automated GDPR compliance management with data mapping, consent tracking, and privacy impact assessments.',
      features: ['Data mapping', 'Consent tracking', 'Privacy assessments', 'Breach notification', 'Documentation', 'Audit trails', 'Training modules', 'Legal updates'],
      price: '$149/month',
      users: 'Unlimited',
      category: 'Security & Compliance',
      marketPrice: '$299/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '3-day setup'
    },
    {
      icon: FileText,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and automated workflows.',
      features: ['Contract analysis', 'Compliance tracking', 'Automated workflows', 'Document templates', 'Version control', 'E-signature integration', 'Legal research', 'Deadline management'],
      price: '$249/month',
      users: 'Up to 50 users',
      category: 'Security & Compliance',
      marketPrice: '$499/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '2-day setup'
    },

    // Cloud & Infrastructure
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management with cost optimization, auto-scaling, and multi-cloud support.',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Performance monitoring', 'Backup management', 'Security compliance', 'Cost forecasting'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'Cloud & Infrastructure',
      popular: true,
      marketPrice: '$599/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '1-day setup'
    },
    {
      icon: Database,
      title: 'Database Performance Optimizer',
      description: 'AI-powered database optimization with performance monitoring, query analysis, and automated tuning.',
      features: ['Performance monitoring', 'Query analysis', 'Automated tuning', 'Index optimization', 'Capacity planning', 'Backup optimization', 'Security scanning', 'Cost analysis'],
      price: '$199/month',
      users: 'Unlimited',
      category: 'Cloud & Infrastructure',
      marketPrice: '$399/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    },
    {
      icon: Settings,
      title: 'DevOps Automation Platform',
      description: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and deployment monitoring.',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Deployment monitoring', 'Container orchestration', 'Testing automation', 'Security scanning', 'Performance monitoring', 'Rollback management'],
      price: '$249/month',
      users: 'Unlimited',
      category: 'Cloud & Infrastructure',
      marketPrice: '$499/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '2-day setup'
    },

    // Business Operations
    {
      icon: CheckSquare,
      title: 'Project Management Pro',
      description: 'Advanced project management with AI-powered resource allocation, risk assessment, and progress tracking.',
      features: ['Resource allocation', 'Risk assessment', 'Progress tracking', 'Team collaboration', 'Time tracking', 'Budget management', 'Gantt charts', 'Reporting'],
      price: '$99/month',
      users: 'Up to 100 users',
      category: 'Business Operations',
      popular: true,
      marketPrice: '$199/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: 'Instant setup'
    },
    {
      icon: UserPlus,
      title: 'AI Recruitment Assistant',
      description: 'Intelligent recruitment platform with resume screening, candidate matching, and interview scheduling.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Onboarding automation', 'Performance tracking', 'Analytics'],
      price: '$179/month',
      users: 'Up to 50 users',
      category: 'Business Operations',
      marketPrice: '$349/month',
      savings: '49% off',
      trial: '14-day free trial',
      setup: '1-day setup'
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing with AI personalization, segmentation, and campaign optimization.',
      features: ['AI personalization', 'Advanced segmentation', 'Campaign optimization', 'A/B testing', 'Automation workflows', 'Analytics', 'Template library', 'Integration APIs'],
      price: '$79/month',
      users: 'Up to 10,000 contacts',
      category: 'Business Operations',
      marketPrice: '$149/month',
      savings: '47% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    },
    {
      icon: Truck,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain management with demand forecasting, inventory optimization, and logistics tracking.',
      features: ['Demand forecasting', 'Inventory optimization', 'Logistics tracking', 'Supplier management', 'Risk assessment', 'Cost optimization', 'Performance analytics', 'Integration APIs'],
      price: '$399/month',
      users: 'Unlimited',
      category: 'Business Operations',
      marketPrice: '$799/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '3-day setup'
    },

    // Industry-Specific
    {
      icon: FileText,
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered insights and patient data analytics.',
      features: ['HIPAA compliance', 'Patient data analytics', 'AI insights', 'Document management', 'Appointment scheduling', 'Billing integration', 'Telemedicine support', 'Reporting'],
      price: '$299/month',
      users: 'Up to 100 users',
      category: 'Healthcare',
      marketPrice: '$599/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '5-day setup'
    },
    {
      icon: BarChart3,
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting software with automated bookkeeping, tax preparation, and financial insights.',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial insights', 'Invoice management', 'Expense tracking', 'Payroll integration', 'Compliance reporting', 'Audit trails'],
      price: '$149/month',
      users: 'Up to 25 users',
      category: 'Finance',
      marketPrice: '$299/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '2-day setup'
    },
    {
      icon: Home,
      title: 'Property Management AI',
      description: 'Smart property management with tenant screening, maintenance scheduling, and financial tracking.',
      features: ['Tenant screening', 'Maintenance scheduling', 'Financial tracking', 'Lease management', 'Payment processing', 'Communication tools', 'Reporting', 'Mobile app'],
      price: '$199/month',
      users: 'Up to 500 properties',
      category: 'Real Estate',
      marketPrice: '$399/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: '2-day setup'
    },
    {
      icon: GraduationCap,
      title: 'Online Learning Platform',
      description: 'Comprehensive e-learning platform with AI-powered content recommendations and progress tracking.',
      features: ['Course creation', 'AI recommendations', 'Progress tracking', 'Assessment tools', 'Certification', 'Mobile app', 'Analytics', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 1,000 students',
      category: 'Education',
      marketPrice: '$299/month',
      savings: '50% off',
      trial: '30-day free trial',
      setup: '1-day setup'
    },

    // Content & Design
    {
      icon: Code,
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI writing tool with content generation, editing, and SEO optimization capabilities.',
      features: ['Content generation', 'AI editing', 'SEO optimization', 'Multi-language', 'Tone adjustment', 'Plagiarism check', 'Grammar correction', 'Brand voice'],
      price: '$79/month',
      users: 'Up to 10 users',
      category: 'Content & Design',
      popular: true,
      marketPrice: '$149/month',
      savings: '47% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    },
    {
      icon: Sparkles,
      title: 'AI Design Studio',
      description: 'Complete design suite with AI-powered logo creation, brand identity, and marketing materials.',
      features: ['Logo creation', 'Brand identity', 'Marketing materials', 'Template library', 'AI suggestions', 'Collaboration tools', 'Export options', 'Brand guidelines'],
      price: '$99/month',
      users: 'Up to 20 users',
      category: 'Content & Design',
      marketPrice: '$199/month',
      savings: '50% off',
      trial: '14-day free trial',
      setup: 'Instant setup'
    }
  ];

  const categories = ['All', 'AI & Analytics', 'Security & Compliance', 'Cloud & Infrastructure', 'Business Operations', 'Healthcare', 'Finance', 'Real Estate', 'Education', 'Content & Design'];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations. From AI analytics to project management, we have the tools you need." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, project management, analytics, automation, Zion Tech Group" />
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
              Powerful, affordable business tools designed to streamline your operations and drive growth. 
              Choose from our comprehensive collection of AI-powered micro SAAS solutions.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                <MailIcon className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
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
                    <BarChart3 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                    <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
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
                      <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400 font-medium">{product.savings}</span>
                      <span className="text-gray-300">{product.users}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                      <span>{product.trial}</span>
                      <span>{product.setup}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <Link
                      to="/contact"
                      className="flex-1 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                    >
                      Contact Sales
                    </Link>
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
