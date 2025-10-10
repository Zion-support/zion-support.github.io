'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain, Clock, DollarSign, Globe, Settings } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');
  const microSaasProducts = [
    // AI & Analytics Services
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time AI insights, predictive analytics, and automated reporting for data-driven decisions',
      features: ['Real-time dashboards', 'AI-powered insights', 'Predictive analytics', 'Custom reports', 'Mobile app', '100+ integrations'],
      price: '$199/month',
      users: 'Up to 100 users',
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'AI CRM Enterprise',
      description: 'Next-generation CRM with AI lead scoring, automated follow-ups, customer journey mapping, and revenue forecasting',
      features: ['AI lead scoring', 'Automated follow-ups', 'Customer insights', 'Revenue forecasting', 'Integration APIs', 'Custom workflows'],
      price: '$299/month',
      users: 'Up to 500 users',
      category: 'CRM',
      popular: true,
      link: 'https://ziontechgroup.com/ai-crm-enterprise'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Content Studio Pro',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and multi-platform publishing',
      features: ['AI writing assistant', 'Image generation', 'Video creation', 'SEO optimization', 'Multi-language', 'Brand voice training'],
      price: '$149/month',
      users: 'Up to 50 users',
      category: 'AI',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-studio-pro'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI Security Guardian',
      description: 'Advanced cybersecurity suite with AI threat detection, automated response, and compliance management',
      features: ['AI threat detection', 'Automated response', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident management'],
      price: '$399/month',
      users: 'Unlimited',
      category: 'Security',
      link: 'https://ziontechgroup.com/ai-security-guardian'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Smart Cloud Manager',
      description: 'Intelligent cloud infrastructure management with automated scaling, cost optimization, and disaster recovery',
      features: ['Auto-scaling', 'Cost optimization', 'Disaster recovery', 'Multi-cloud support', 'Performance monitoring', 'Security compliance'],
      price: '$179/month',
      users: 'Unlimited',
      category: 'Cloud',
      link: 'https://ziontechgroup.com/smart-cloud-manager'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'AI Data Platform',
      description: 'Enterprise data management with AI-powered insights, automated ETL, and real-time analytics',
      features: ['AI data insights', 'Automated ETL', 'Real-time analytics', 'Data visualization', 'Data governance', 'API management'],
      price: '$249/month',
      users: 'Up to 1000 users',
      category: 'Data',
      link: 'https://ziontechgroup.com/ai-data-platform'
    },
    // Marketing & Sales Tools
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Marketing Automation',
      description: 'Complete marketing automation platform with AI optimization, multi-channel campaigns, and advanced analytics',
      features: ['Campaign automation', 'AI optimization', 'Multi-channel', 'A/B testing', 'Lead nurturing', 'ROI tracking'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Marketing',
      popular: true,
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO platform with AI keyword research, content optimization, and ranking tracking',
      features: ['AI keyword research', 'Content optimization', 'Ranking tracking', 'Technical SEO', 'Competitor analysis', 'Local SEO'],
      price: '$99/month',
      users: 'Up to 100 websites',
      category: 'SEO',
      link: 'https://ziontechgroup.com/ai-seo-optimizer-pro'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI personalization, send time optimization, and advanced segmentation',
      features: ['AI personalization', 'Send time optimization', 'Advanced segmentation', 'A/B testing', 'Deliverability tools', 'Analytics'],
      price: '$79/month',
      users: 'Up to 50,000 contacts',
      category: 'Email',
      link: 'https://ziontechgroup.com/ai-email-marketing-suite'
    },
    // Productivity & Business Tools
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'AI Project Manager',
      description: 'Smart project management with AI task prioritization, resource optimization, and predictive analytics',
      features: ['AI task prioritization', 'Resource optimization', 'Predictive analytics', 'Team collaboration', 'Time tracking', 'Reporting'],
      price: '$129/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'AI Financial Tracker',
      description: 'Comprehensive financial management with AI insights, automated categorization, and predictive budgeting',
      features: ['AI categorization', 'Predictive budgeting', 'Expense tracking', 'Financial insights', 'Tax preparation', 'Reporting'],
      price: '$59/month',
      users: 'Up to 25 users',
      category: 'Finance',
      link: 'https://ziontechgroup.com/ai-financial-tracker'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support with AI chatbots, sentiment analysis, and automated ticket routing',
      features: ['AI chatbots', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Multi-language', 'Analytics'],
      price: '$149/month',
      users: 'Unlimited',
      category: 'Support',
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    // Developer & Technical Tools
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'AI Code Assistant Pro',
      description: 'Advanced code completion, debugging, and optimization with AI-powered suggestions and automated testing',
      features: ['Code completion', 'AI debugging', 'Code optimization', 'Automated testing', 'Documentation', 'Multi-language'],
      price: '$89/month',
      users: 'Up to 50 developers',
      category: 'Development',
      link: 'https://ziontechgroup.com/ai-code-assistant-pro'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'AI API Manager',
      description: 'Intelligent API management with automated documentation, testing, monitoring, and security',
      features: ['API documentation', 'Automated testing', 'Performance monitoring', 'Security scanning', 'Rate limiting', 'Analytics'],
      price: '$199/month',
      users: 'Unlimited APIs',
      category: 'API',
      link: 'https://ziontechgroup.com/ai-api-manager'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI Security Scanner',
      description: 'Automated security scanning with AI vulnerability detection, compliance checking, and remediation suggestions',
      features: ['Vulnerability scanning', 'Compliance checking', 'Remediation suggestions', 'Security reports', 'Continuous monitoring', 'Integration'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'Security',
      link: 'https://ziontechgroup.com/ai-security-scanner'
    },
    // Industry-Specific Solutions
    {
      icon: <Users className="w-8 h-8" />,
      title: 'AI HR Assistant',
      description: 'Comprehensive HR management with AI recruitment, employee analytics, and automated workflows',
      features: ['AI recruitment', 'Employee analytics', 'Performance tracking', 'Automated workflows', 'Compliance', 'Reporting'],
      price: '$179/month',
      users: 'Up to 500 employees',
      category: 'HR',
      link: 'https://ziontechgroup.com/ai-hr-assistant'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'AI Sales Predictor',
      description: 'Advanced sales forecasting with AI predictions, lead scoring, and revenue optimization',
      features: ['Sales forecasting', 'Lead scoring', 'Revenue optimization', 'Pipeline analysis', 'Predictive insights', 'Reporting'],
      price: '$249/month',
      users: 'Up to 200 users',
      category: 'Sales',
      link: 'https://ziontechgroup.com/ai-sales-predictor'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AI E-commerce Optimizer',
      description: 'Complete e-commerce optimization with AI pricing, inventory management, and customer personalization',
      features: ['AI pricing', 'Inventory optimization', 'Customer personalization', 'Recommendation engine', 'Analytics', 'A/B testing'],
      price: '$199/month',
      users: 'Up to 1000 products',
      category: 'E-commerce',
      link: 'https://ziontechgroup.com/ai-ecommerce-optimizer'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Document Processor',
      description: 'Intelligent document processing with AI OCR, data extraction, and automated classification',
      features: ['AI OCR', 'Data extraction', 'Document classification', 'Automated workflows', 'Integration', 'Analytics'],
      price: '$129/month',
      users: 'Up to 10,000 documents/month',
      category: 'Document',
      link: 'https://ziontechgroup.com/ai-document-processor'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Workflow Automator',
      description: 'Powerful workflow automation with AI decision-making, custom triggers, and 500+ integrations',
      features: ['AI decision-making', 'Custom triggers', '500+ integrations', 'Visual builder', 'Analytics', 'Monitoring'],
      price: '$99/month',
      users: 'Up to 100 workflows',
      category: 'Automation',
      link: 'https://ziontechgroup.com/ai-workflow-automator'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with AI demand forecasting, automated reordering, and optimization',
      features: ['Demand forecasting', 'Automated reordering', 'Inventory optimization', 'Supplier management', 'Analytics', 'Alerts'],
      price: '$179/month',
      users: 'Up to 10,000 SKUs',
      category: 'Inventory',
      link: 'https://ziontechgroup.com/ai-inventory-manager'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Cloud', 'Data', 'AI', 'Marketing', 'SEO', 'Email', 'Productivity', 'Finance', 'Support', 'Development', 'API', 'HR', 'Sales', 'E-commerce', 'Document', 'Automation', 'Inventory'];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Customizable',
      description: 'Tailor the solution to your specific business needs'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Scalable',
      description: 'Grow with your business with flexible pricing plans'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Small Business Software</title>
        <meta name="description" content="Discover our micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, small business software, AI tools, business analytics, CRM, security monitoring, cloud backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Powerful, affordable software solutions designed specifically for small to medium businesses.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-4 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our range of specialized business solutions
              </p>
              <div className="mt-4 text-gray-400">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4 group-hover:bg-cyan-500/30 transition-colors">
                      <div className="text-cyan-400">
                        {product.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold text-cyan-400">{product.price}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{product.users}</span>
                      </div>
                    </div>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:scale-105"
                    >
                      <span>Try Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button className="w-full border border-cyan-600 text-cyan-400 py-2 px-6 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Built for small businesses, powered by enterprise-grade technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how our micro SaaS solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Call: (302) 464-0950</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>364 E Main St STE 1008, Middletown, DE 19709</p>
              <p className="mt-2">Visit us at: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;