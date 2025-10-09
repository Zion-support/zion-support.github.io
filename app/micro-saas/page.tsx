'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSAASService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup: number;
  };
  category: string;
  icon: string;
  demoUrl?: string;
  apiDocumentation?: string;
  status: 'active' | 'beta' | 'coming-soon';
}

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const microSAASServices: MicroSAASService[] = [
    // AI-Powered Services
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, emails, and marketing materials with 50+ templates.',
      features: [
        '50+ Content Templates',
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Plagiarism Detection',
        'Content Calendar Integration',
        'Team Collaboration',
        'Analytics Dashboard'
      ],
      pricing: { monthly: 199, yearly: 1990, setup: 0 },
      category: 'ai-content',
      icon: '✍️',
      demoUrl: 'https://demo.ziontechgroup.com/ai-content-generator',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/ai-content',
      status: 'active'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and 24/7 availability.',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Sentiment Analysis',
        'Escalation Management',
        'Knowledge Base Integration',
        'Custom Training',
        'Analytics & Reporting',
        'API Integration'
      ],
      pricing: { monthly: 299, yearly: 2990, setup: 500 },
      category: 'ai-support',
      icon: '🤖',
      demoUrl: 'https://demo.ziontechgroup.com/ai-support-bot',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/ai-support',
      status: 'active'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Suite',
      description: 'Comprehensive data analysis and visualization with predictive analytics and automated insights.',
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Automated Insights',
        'Data Visualization',
        'Custom Reports',
        'API Integration',
        'Data Export',
        'Team Collaboration'
      ],
      pricing: { monthly: 399, yearly: 3990, setup: 1000 },
      category: 'ai-analytics',
      icon: '📊',
      demoUrl: 'https://demo.ziontechgroup.com/ai-analytics',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/ai-analytics',
      status: 'active'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Automation',
      description: 'Smart email marketing with AI-powered personalization, A/B testing, and advanced segmentation.',
      features: [
        'AI Personalization',
        'A/B Testing',
        'Advanced Segmentation',
        'Behavioral Triggers',
        'Template Library',
        'Deliverability Optimization',
        'Analytics Dashboard',
        'CRM Integration'
      ],
      pricing: { monthly: 149, yearly: 1490, setup: 0 },
      category: 'ai-marketing',
      icon: '📧',
      demoUrl: 'https://demo.ziontechgroup.com/ai-email',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/ai-email',
      status: 'active'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with content scheduling, engagement tracking, and performance analytics.',
      features: [
        'Content Scheduling',
        'Multi-platform Support',
        'Engagement Tracking',
        'Hashtag Optimization',
        'Competitor Analysis',
        'Influencer Discovery',
        'Analytics Dashboard',
        'Team Collaboration'
      ],
      pricing: { monthly: 179, yearly: 1790, setup: 0 },
      category: 'ai-marketing',
      icon: '📱',
      demoUrl: 'https://demo.ziontechgroup.com/ai-social',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/ai-social',
      status: 'active'
    },

    // Business Tools
    {
      id: 'invoice-generator',
      name: 'Smart Invoice Generator',
      description: 'Automated invoice generation with payment tracking, tax calculations, and client management.',
      features: [
        'Automated Invoicing',
        'Payment Tracking',
        'Tax Calculations',
        'Client Management',
        'Recurring Billing',
        'Payment Gateway Integration',
        'Custom Templates',
        'Multi-currency Support'
      ],
      pricing: { monthly: 79, yearly: 790, setup: 0 },
      category: 'business-tools',
      icon: '🧾',
      demoUrl: 'https://demo.ziontechgroup.com/invoice-generator',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/invoice',
      status: 'active'
    },
    {
      id: 'project-management',
      name: 'AI Project Management Suite',
      description: 'Intelligent project management with task automation, resource optimization, and predictive analytics.',
      features: [
        'Task Automation',
        'Resource Optimization',
        'Predictive Analytics',
        'Team Collaboration',
        'Time Tracking',
        'Budget Management',
        'Risk Assessment',
        'Reporting Dashboard'
      ],
      pricing: { monthly: 249, yearly: 2490, setup: 500 },
      category: 'business-tools',
      icon: '📋',
      demoUrl: 'https://demo.ziontechgroup.com/project-management',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/project-management',
      status: 'active'
    },
    {
      id: 'crm-automation',
      name: 'AI CRM Automation',
      description: 'Customer relationship management with AI-powered lead scoring, automated follow-ups, and sales forecasting.',
      features: [
        'Lead Scoring',
        'Automated Follow-ups',
        'Sales Forecasting',
        'Contact Management',
        'Pipeline Tracking',
        'Email Integration',
        'Analytics Dashboard',
        'Custom Workflows'
      ],
      pricing: { monthly: 199, yearly: 1990, setup: 300 },
      category: 'business-tools',
      icon: '👥',
      demoUrl: 'https://demo.ziontechgroup.com/crm-automation',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/crm',
      status: 'active'
    },

    // Developer Tools
    {
      id: 'api-testing-suite',
      name: 'API Testing & Documentation Suite',
      description: 'Comprehensive API testing, documentation, and monitoring with automated test generation.',
      features: [
        'Automated Testing',
        'API Documentation',
        'Performance Monitoring',
        'Mock Server',
        'Test Data Generation',
        'CI/CD Integration',
        'Team Collaboration',
        'Analytics Dashboard'
      ],
      pricing: { monthly: 129, yearly: 1290, setup: 0 },
      category: 'developer-tools',
      icon: '🔧',
      demoUrl: 'https://demo.ziontechgroup.com/api-testing',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/api-testing',
      status: 'active'
    },
    {
      id: 'code-review-ai',
      name: 'AI Code Review Assistant',
      description: 'Automated code review with security analysis, performance optimization, and best practice recommendations.',
      features: [
        'Automated Code Review',
        'Security Analysis',
        'Performance Optimization',
        'Best Practice Recommendations',
        'Multi-language Support',
        'Team Collaboration',
        'Custom Rules',
        'Integration Support'
      ],
      pricing: { monthly: 159, yearly: 1590, setup: 0 },
      category: 'developer-tools',
      icon: '👨‍💻',
      demoUrl: 'https://demo.ziontechgroup.com/code-review',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/code-review',
      status: 'active'
    },
    {
      id: 'database-optimizer',
      name: 'AI Database Optimizer',
      description: 'Intelligent database performance optimization with query analysis and automated tuning recommendations.',
      features: [
        'Query Analysis',
        'Performance Optimization',
        'Automated Tuning',
        'Index Recommendations',
        'Multi-database Support',
        'Real-time Monitoring',
        'Alert System',
        'Custom Reports'
      ],
      pricing: { monthly: 199, yearly: 1990, setup: 500 },
      category: 'developer-tools',
      icon: '🗄️',
      demoUrl: 'https://demo.ziontechgroup.com/database-optimizer',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/database-optimizer',
      status: 'active'
    },

    // E-commerce Solutions
    {
      id: 'inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting, automated reordering, and supplier integration.',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Supplier Integration',
        'Multi-location Support',
        'Barcode Scanning',
        'Analytics Dashboard',
        'Alert System',
        'API Integration'
      ],
      pricing: { monthly: 179, yearly: 1790, setup: 300 },
      category: 'ecommerce',
      icon: '📦',
      demoUrl: 'https://demo.ziontechgroup.com/inventory-manager',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/inventory',
      status: 'active'
    },
    {
      id: 'price-optimizer',
      name: 'AI Price Optimization Engine',
      description: 'Dynamic pricing optimization based on market conditions, competitor analysis, and demand patterns.',
      features: [
        'Dynamic Pricing',
        'Competitor Analysis',
        'Demand Pattern Analysis',
        'A/B Testing',
        'Multi-channel Support',
        'Real-time Updates',
        'Analytics Dashboard',
        'Custom Rules'
      ],
      pricing: { monthly: 299, yearly: 2990, setup: 500 },
      category: 'ecommerce',
      icon: '💰',
      demoUrl: 'https://demo.ziontechgroup.com/price-optimizer',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/price-optimizer',
      status: 'active'
    },

    // Security & Compliance
    {
      id: 'security-scanner',
      name: 'AI Security Scanner',
      description: 'Comprehensive security scanning with vulnerability detection, compliance checking, and threat monitoring.',
      features: [
        'Vulnerability Detection',
        'Compliance Checking',
        'Threat Monitoring',
        'Automated Scanning',
        'Custom Rules',
        'Real-time Alerts',
        'Detailed Reports',
        'API Integration'
      ],
      pricing: { monthly: 199, yearly: 1990, setup: 300 },
      category: 'security',
      icon: '🔒',
      demoUrl: 'https://demo.ziontechgroup.com/security-scanner',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/security-scanner',
      status: 'active'
    },
    {
      id: 'compliance-manager',
      name: 'AI Compliance Manager',
      description: 'Automated compliance management with GDPR, HIPAA, SOX, and other regulatory framework support.',
      features: [
        'Multi-framework Support',
        'Automated Compliance Checking',
        'Document Management',
        'Audit Trail',
        'Risk Assessment',
        'Custom Policies',
        'Reporting Dashboard',
        'Integration Support'
      ],
      pricing: { monthly: 249, yearly: 2490, setup: 500 },
      category: 'security',
      icon: '📋',
      demoUrl: 'https://demo.ziontechgroup.com/compliance-manager',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/compliance',
      status: 'active'
    },

    // Analytics & Reporting
    {
      id: 'business-intelligence',
      name: 'AI Business Intelligence Suite',
      description: 'Advanced business intelligence with predictive analytics, automated reporting, and data visualization.',
      features: [
        'Predictive Analytics',
        'Automated Reporting',
        'Data Visualization',
        'Custom Dashboards',
        'Real-time Monitoring',
        'Multi-source Integration',
        'Team Collaboration',
        'Mobile Access'
      ],
      pricing: { monthly: 349, yearly: 3490, setup: 1000 },
      category: 'analytics',
      icon: '📈',
      demoUrl: 'https://demo.ziontechgroup.com/business-intelligence',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/business-intelligence',
      status: 'active'
    },
    {
      id: 'website-analyzer',
      name: 'AI Website Analyzer',
      description: 'Comprehensive website analysis with performance optimization, SEO insights, and user behavior tracking.',
      features: [
        'Performance Analysis',
        'SEO Insights',
        'User Behavior Tracking',
        'Competitor Analysis',
        'Conversion Optimization',
        'Real-time Monitoring',
        'Custom Reports',
        'API Integration'
      ],
      pricing: { monthly: 99, yearly: 990, setup: 0 },
      category: 'analytics',
      icon: '🌐',
      demoUrl: 'https://demo.ziontechgroup.com/website-analyzer',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/website-analyzer',
      status: 'active'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'ai-content', name: 'AI Content', icon: '✍️' },
    { id: 'ai-support', name: 'AI Support', icon: '🤖' },
    { id: 'ai-analytics', name: 'AI Analytics', icon: '📊' },
    { id: 'ai-marketing', name: 'AI Marketing', icon: '📧' },
    { id: 'business-tools', name: 'Business Tools', icon: '💼' },
    { id: 'developer-tools', name: 'Developer Tools', icon: '🔧' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'analytics', name: 'Analytics', icon: '📈' }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactClick = (service: MicroSAASService) => {
    const message = `Hi! I'm interested in the ${service.name} service. Can you provide more information about pricing and implementation?`;
    const whatsappUrl = `https://wa.me/13024640950?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from 20+ ready-to-use micro SAAS applications. Each service is designed to solve specific business challenges with AI-powered automation and intelligence.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                🔍
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900 cyber-glow'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-cyan-400/30'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div key={service.id} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 cyber-scan-line">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                  service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {service.status === 'active' ? '✅ Active' : service.status === 'beta' ? '🧪 Beta' : '🚀 Coming Soon'}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    ${service.pricing.monthly}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    or ${service.pricing.yearly}/year (save ${(service.pricing.monthly * 12) - service.pricing.yearly})
                  </div>
                  {service.pricing.setup > 0 && (
                    <div className="text-sm text-yellow-400 mt-1">
                      +${service.pricing.setup} setup fee
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick(service)}
                  className="w-full cyber-button text-center py-3"
                >
                  Get Started Now
                </button>
                
                {service.demoUrl && (
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    View Demo
                  </a>
                )}
                
                {service.apiDocumentation && (
                  <a
                    href={service.apiDocumentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 px-4 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
                  >
                    API Documentation
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="text-center bg-white/5 rounded-2xl p-12 cyber-glow">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can create a custom micro SAAS solution tailored to your specific business needs. 
            We specialize in AI-powered automation, data analytics, and business process optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center py-3 px-8"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center py-3 px-8"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 https://ziontechgroup.com</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;