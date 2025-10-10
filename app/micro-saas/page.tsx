'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain, Clock, DollarSign, Globe, Settings } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');
  const microSaasProducts = [
    // Analytics & Business Intelligence
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive modeling, and automated insights for data-driven decision making',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integrations', 'White-label options'],
      price: '$199/month',
      users: 'Up to 100 users',
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'AI-Powered CRM Suite',
      description: 'Complete customer relationship management with AI-driven lead scoring, automated follow-ups, and advanced customer insights',
      features: ['Lead management', 'Automated follow-ups', 'Customer insights', 'Integration APIs', 'Sales forecasting', 'Email automation'],
      price: '$299/month',
      users: 'Up to 200 users',
      category: 'CRM',
      popular: true,
      link: 'https://ziontechgroup.com/ai-crm'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security Monitor',
      description: 'Comprehensive cybersecurity monitoring with AI threat detection, vulnerability assessment, and automated incident response',
      features: ['AI threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security training'],
      price: '$399/month',
      users: 'Unlimited',
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/security-monitoring-suite'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure Manager',
      description: 'Complete cloud management solution with automated backups, disaster recovery, and cost optimization across AWS, Azure, and GCP',
      features: ['Multi-cloud backup', 'Disaster recovery', 'Cost optimization', 'Auto-scaling', 'Security compliance', 'Performance monitoring'],
      price: '$249/month',
      users: 'Unlimited',
      category: 'Cloud',
      link: 'https://ziontechgroup.com/cloud-infrastructure-manager'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'AI Data Management Platform',
      description: 'Advanced data management with AI-powered insights, automated workflows, and real-time data visualization for enterprise use',
      features: ['Data integration', 'AI insights', 'Automated workflows', 'Data visualization', 'Data quality monitoring', 'GDPR compliance'],
      price: '$349/month',
      users: 'Up to 500 users',
      category: 'Data',
      link: 'https://ziontechgroup.com/data-management-platform'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Content Studio Pro',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation for marketing teams',
      features: ['Content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Video creation', 'Social media automation'],
      price: '$199/month',
      users: 'Up to 50 users',
      category: 'AI',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-studio'
    },
    // Marketing & Sales Tools
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI optimization, personalization, and advanced analytics for maximum ROI',
      features: ['AI optimization', 'Personalization', 'A/B testing', 'Advanced analytics', 'List segmentation', 'Deliverability optimization'],
      price: '$149/month',
      users: 'Up to 100,000 contacts',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ai-email-marketing-automation'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Project Management Pro',
      description: 'Advanced project management with AI task prioritization, resource allocation, and automated reporting for teams',
      features: ['AI task prioritization', 'Resource allocation', 'Automated reporting', 'Team collaboration', 'Time tracking', 'Budget management'],
      price: '$99/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/project-management-pro'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'AI Invoice Generator Plus',
      description: 'Smart invoicing solution with automated invoice creation, payment tracking, and financial reporting with AI insights',
      features: ['Automated invoicing', 'Payment tracking', 'Financial reporting', 'Tax calculations', 'Multi-currency support', 'Client portal'],
      price: '$79/month',
      users: 'Unlimited',
      category: 'Finance',
      link: 'https://ziontechgroup.com/ai-invoice-generator'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'AI Recruitment Assistant',
      description: 'Intelligent recruitment platform with AI resume screening, candidate matching, and automated interview scheduling',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Onboarding automation'],
      price: '$199/month',
      users: 'Up to 50 HR users',
      category: 'HR',
      link: 'https://ziontechgroup.com/ai-recruitment-assistant'
    },
    // Healthcare & Legal
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered insights, patient scheduling, and automated documentation',
      features: ['HIPAA compliance', 'Patient records', 'AI insights', 'Appointment scheduling', 'Billing integration', 'Telemedicine support'],
      price: '$299/month',
      users: 'Up to 100 medical staff',
      category: 'Healthcare',
      link: 'https://ziontechgroup.com/medical-records-manager'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance monitoring, and automated legal research',
      features: ['Contract analysis', 'Compliance monitoring', 'Legal research', 'Document automation', 'Case management', 'Client portal'],
      price: '$399/month',
      users: 'Up to 25 lawyers',
      category: 'Legal',
      link: 'https://ziontechgroup.com/legal-document-manager'
    },
    // E-commerce & Retail
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced e-commerce analytics with AI-powered insights, inventory optimization, and customer behavior analysis',
      features: ['Sales analytics', 'Inventory optimization', 'Customer insights', 'Conversion tracking', 'A/B testing', 'Revenue forecasting'],
      price: '$179/month',
      users: 'Unlimited',
      category: 'E-commerce',
      link: 'https://ziontechgroup.com/ecommerce-analytics-pro'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain management with demand forecasting, inventory optimization, and logistics automation',
      features: ['Demand forecasting', 'Inventory optimization', 'Logistics automation', 'Supplier management', 'Cost optimization', 'Risk assessment'],
      price: '$249/month',
      users: 'Up to 200 users',
      category: 'Supply Chain',
      link: 'https://ziontechgroup.com/supply-chain-optimizer'
    },
    // Real Estate & Property
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Property Management AI',
      description: 'Complete property management solution with tenant screening, rent collection, maintenance tracking, and financial reporting',
      features: ['Tenant screening', 'Rent collection', 'Maintenance tracking', 'Financial reporting', 'Lease management', 'Tenant portal'],
      price: '$199/month',
      users: 'Up to 100 properties',
      category: 'Real Estate',
      link: 'https://ziontechgroup.com/property-management-ai'
    },
    // Education & Training
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Online Learning Platform',
      description: 'Comprehensive e-learning platform with AI-powered course creation, student analytics, and automated assessments',
      features: ['Course creation', 'Student analytics', 'Automated assessments', 'Video streaming', 'Certification management', 'Mobile learning'],
      price: '$149/month',
      users: 'Up to 1,000 students',
      category: 'Education',
      link: 'https://ziontechgroup.com/online-learning-platform'
    },
    // Developer Tools
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with code completion, debugging, testing, and documentation generation',
      features: ['Code completion', 'Debugging assistance', 'Test generation', 'Documentation', 'Code review', 'Refactoring suggestions'],
      price: '$99/month',
      users: 'Up to 50 developers',
      category: 'Development',
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'API Management Suite',
      description: 'Complete API management platform with monitoring, security, documentation, and developer portal management',
      features: ['API monitoring', 'Security management', 'Documentation', 'Developer portal', 'Rate limiting', 'Analytics'],
      price: '$199/month',
      users: 'Unlimited',
      category: 'Development',
      link: 'https://ziontechgroup.com/ai-api-management'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Cloud', 'Data', 'AI', 'Marketing', 'Productivity', 'Finance', 'HR', 'Healthcare', 'Legal', 'E-commerce', 'Supply Chain', 'Real Estate', 'Education', 'Development'];

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
                      placeholder="Search micro SaaS products..."
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
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 relative group">
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
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
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

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:scale-105 transform"
                    >
                      <span>Try Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button className="flex-1 border border-cyan-600 text-cyan-400 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200">
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
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;