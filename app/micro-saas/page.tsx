'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    // Productivity & Business Tools
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Productivity'
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'AI insights'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Productivity'
    },
    {
      icon: '📝',
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates',
      features: ['Content generation', 'Grammar checking', 'Tone optimization', 'SEO optimization', 'Multi-language'],
      price: '$29/month',
      users: 'Up to 10 users',
      category: 'Productivity'
    },
    {
      icon: '📅',
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management',
      features: ['Smart scheduling', 'Calendar sync', 'Meeting optimization', 'Time tracking', 'Team coordination'],
      price: '$19/month',
      users: 'Up to 25 users',
      category: 'Productivity'
    },
    {
      icon: '💰',
      title: 'AI Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Expense reports', 'Tax preparation'],
      price: '$15/month',
      users: 'Up to 20 users',
      category: 'Productivity'
    },
    {
      icon: '🎯',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time estimation', 'Project templates'],
      price: '$39/month',
      users: 'Up to 50 users',
      category: 'Productivity'
    },
    {
      icon: '📧',
      title: 'Email Optimizer',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing',
      features: ['Subject optimization', 'Send time optimization', 'A/B testing', 'Open rate tracking', 'Template library'],
      price: '$25/month',
      users: 'Up to 30 users',
      category: 'Productivity'
    },
    {
      icon: '🔍',
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Hashtag optimization', 'Multi-platform'],
      price: '$45/month',
      users: 'Up to 15 users',
      category: 'Marketing'
    },
    {
      icon: '🎨',
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools',
      features: ['Logo generation', 'Graphic design', 'Template library', 'Brand consistency', 'Export options'],
      price: '$35/month',
      users: 'Up to 20 users',
      category: 'Marketing'
    },
    {
      icon: '📱',
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Mobile responsive', 'Analytics integration'],
      price: '$29/month',
      users: 'Up to 25 users',
      category: 'Marketing'
    },
    {
      icon: '📊',
      title: 'SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO'],
      price: '$49/month',
      users: 'Up to 10 users',
      category: 'Marketing'
    },
    {
      icon: '📈',
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'ROI analysis'],
      price: '$79/month',
      users: 'Up to 20 users',
      category: 'Marketing'
    },
    {
      icon: '💻',
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code completion', 'Bug detection', 'Performance optimization', 'Multi-language support', 'IDE integration'],
      price: '$39/month',
      users: 'Up to 15 users',
      category: 'Developer'
    },
    {
      icon: '🔧',
      title: 'API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: ['API design', 'Documentation generation', 'Testing tools', 'Version control', 'Monitoring'],
      price: '$59/month',
      users: 'Up to 25 users',
      category: 'Developer'
    },
    {
      icon: '🐛',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration'],
      price: '$25/month',
      users: 'Up to 30 users',
      category: 'Developer'
    },
    {
      icon: '📚',
      title: 'Doc Generator',
      description: 'Automatically generate technical documentation, API docs, and user guides from code',
      features: ['Auto-documentation', 'API docs', 'User guides', 'Code comments', 'Version control'],
      price: '$19/month',
      users: 'Up to 20 users',
      category: 'Developer'
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security'
    },
    {
      icon: '🛡️',
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with AI-powered security recommendations and team sharing',
      features: ['Password generation', 'Security scoring', 'Team sharing', 'Breach monitoring', '2FA integration'],
      price: '$12/month',
      users: 'Up to 100 users',
      category: 'Security'
    },
    {
      icon: '🔐',
      title: 'VPN Manager',
      description: 'Secure VPN management with AI-optimized routing and performance monitoring',
      features: ['AI routing', 'Performance monitoring', 'Multi-location', 'Team management', 'Usage analytics'],
      price: '$35/month',
      users: 'Up to 50 users',
      category: 'Security'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Performance monitoring'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Infrastructure'
    },
    {
      icon: '📊',
      title: 'Server Monitor',
      description: 'Real-time server monitoring with AI-powered alerting and performance optimization',
      features: ['Real-time monitoring', 'AI alerting', 'Performance optimization', 'Capacity planning', 'Custom dashboards'],
      price: '$49/month',
      users: 'Up to 25 servers',
      category: 'Infrastructure'
    },
    {
      icon: '🗄️',
      title: 'Database Optimizer',
      description: 'AI-powered database optimization with query analysis and performance tuning',
      features: ['Query optimization', 'Performance tuning', 'Index recommendations', 'Capacity planning', 'Monitoring'],
      price: '$89/month',
      users: 'Up to 10 databases',
      category: 'Infrastructure'
    },
    {
      icon: '🏥',
      title: 'Health Analytics',
      description: 'AI-powered health data analysis with personalized insights and wellness recommendations',
      features: ['Health tracking', 'AI insights', 'Wellness recommendations', 'Goal setting', 'Progress monitoring'],
      price: '$24/month',
      users: 'Individual',
      category: 'Health'
    },
    {
      icon: '💊',
      title: 'Medication Tracker',
      description: 'Smart medication management with AI reminders and interaction checking',
      features: ['Medication reminders', 'Interaction checking', 'Dosage tracking', 'Refill alerts', 'Health reports'],
      price: '$18/month',
      users: 'Individual',
      category: 'Health'
    },
    {
      icon: '🏠',
      title: 'Smart Home Manager',
      description: 'AI-powered smart home automation with energy optimization and security monitoring',
      features: ['Device automation', 'Energy optimization', 'Security monitoring', 'Voice control', 'Mobile app'],
      price: '$32/month',
      users: 'Up to 50 devices',
      category: 'IoT'
    },
    {
      icon: '🚗',
      title: 'Fleet Tracker',
      description: 'AI-powered fleet management with route optimization and driver behavior analysis',
      features: ['Route optimization', 'Driver analytics', 'Fuel tracking', 'Maintenance alerts', 'GPS tracking'],
      price: '$45/month',
      users: 'Up to 25 vehicles',
      category: 'IoT'
    },
    {
      icon: '🎓',
      title: 'Learning Management System',
      description: 'AI-powered learning platform with personalized content and progress tracking',
      features: ['Personalized learning', 'Progress tracking', 'Content creation', 'Assessment tools', 'Certification'],
      price: '$69/month',
      users: 'Up to 100 students',
      category: 'Education'
    },
    {
      icon: '📚',
      title: 'Knowledge Base Builder',
      description: 'AI-powered knowledge management with search optimization and content suggestions',
      features: ['Content management', 'AI search', 'Content suggestions', 'Version control', 'Analytics'],
      price: '$39/month',
      users: 'Up to 75 users',
      category: 'Education'
    },
    {
      icon: '🏢',
      title: 'Property Manager',
      description: 'AI-powered property management with tenant screening and maintenance optimization',
      features: ['Tenant screening', 'Maintenance tracking', 'Rent collection', 'Financial reporting', 'Communication'],
      price: '$89/month',
      users: 'Up to 50 properties',
      category: 'Real Estate'
    },
    {
      icon: '📋',
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis and compliance tracking',
      features: ['Contract analysis', 'Compliance tracking', 'Document templates', 'Version control', 'E-signature'],
      price: '$129/month',
      users: 'Up to 30 users',
      category: 'Legal'
    },
    {
      icon: '🏭',
      title: 'Manufacturing Optimizer',
      description: 'AI-powered manufacturing optimization with predictive maintenance and quality control',
      features: ['Predictive maintenance', 'Quality control', 'Production optimization', 'Inventory management', 'Analytics'],
      price: '$199/month',
      users: 'Up to 100 machines',
      category: 'Manufacturing'
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  const categories = ['All', 'Productivity', 'Marketing', 'Developer', 'Security', 'Infrastructure', 'Health', 'IoT', 'Education', 'Real Estate', 'Legal', 'Manufacturing'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 50+ micro SAAS solutions. AI-powered tools for productivity, marketing, development, security, and more. Start free trials today." />
        <meta name="keywords" content="micro saas, ai tools, productivity software, business tools, saas solutions, zion tech group" />
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
              50+ AI-powered tools designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <span key={index} className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                  {benefit}
                </span>
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
                  <input
                    type="text"
                    placeholder="Search micro SAAS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
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
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SAAS Tools' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} tool{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group relative">
                  <div className="text-4xl mb-4 text-center">{product.icon}</div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {product.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-gray-400 text-xs">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                      Start Free Trial
                    </button>
                    <button className="w-full border border-white/20 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm">
                      Learn More
                    </button>
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
