'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Filter, Search } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content 10x faster with advanced AI. Blog posts, social media, emails, and more.',
      icon: '✍️',
      link: '/ai-content-generation',
      features: ['50+ Content Templates', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Plagiarism Check', 'Real-time Collaboration'],
      price: 'Starting at $29/month',
      popular: true,
      category: 'Micro SAAS'
    },
    {
      title: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support that never sleeps. Reduce response time by 90% and increase satisfaction.',
      icon: '💬',
      link: '/ai-customer-support',
      features: ['24/7 Availability', '90% Faster Response', 'Multi-language Support', 'Human Handoff', 'Sentiment Analysis', 'Knowledge Base Integration'],
      price: 'Starting at $199/month',
      popular: true,
      category: 'Micro SAAS'
    },
    {
      title: 'AI Sales Automation Suite',
      description: 'Automate your entire sales process with AI-powered lead scoring, follow-ups, and closing assistance.',
      icon: '📈',
      link: '/ai-sales-automation',
      features: ['Lead Scoring AI', 'Auto Follow-ups', 'Predictive Analytics', 'CRM Integration', 'Email Sequences', 'Performance Optimization'],
      price: 'Starting at $299/month',
      popular: true,
      category: 'Micro SAAS'
    },
    {
      title: 'AI Data Visualization Dashboard',
      description: 'Transform your data into stunning visual insights with interactive dashboards and real-time analytics.',
      icon: '📊',
      link: '/ai-data-visualization',
      features: ['Interactive Dashboards', '50+ Chart Types', 'Real-time Updates', 'AI Insights', 'Custom Branding', 'Export Options'],
      price: 'Starting at $149/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Email Marketing Platform',
      description: 'Revolutionary email marketing with AI-powered personalization, A/B testing, and automated campaigns.',
      icon: '📧',
      link: '/ai-email-marketing',
      features: ['AI Personalization', 'Smart Segmentation', 'A/B Testing', 'Automated Workflows', 'Analytics & Reporting', 'Deliverability Optimization'],
      price: 'Starting at $99/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-generated posts, optimal timing, and engagement optimization.',
      icon: '📱',
      link: '/ai-social-media',
      features: ['Auto Posting', 'Content Generation', 'Optimal Timing', 'Hashtag Research', 'Engagement Analysis', 'Multi-platform Support'],
      price: 'Starting at $79/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Project Management Tool',
      description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and deadline prediction.',
      icon: '📋',
      link: '/ai-project-management',
      features: ['Smart Task Prioritization', 'Resource Optimization', 'Deadline Prediction', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking'],
      price: 'Starting at $199/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Inventory Management',
      description: 'Optimize your inventory with AI-powered demand forecasting, automated reordering, and waste reduction.',
      icon: '📦',
      link: '/ai-inventory-management',
      features: ['Demand Forecasting', 'Auto Reordering', 'Waste Reduction', 'Multi-location Support', 'Supplier Integration', 'Cost Optimization'],
      price: 'Starting at $249/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI HR & Recruitment',
      description: 'Streamline HR processes with AI-powered resume screening, candidate matching, and employee analytics.',
      icon: '👥',
      link: '/ai-hr-recruitment',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Employee Analytics', 'Performance Tracking', 'Compliance Management'],
      price: 'Starting at $399/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Financial Analytics',
      description: 'Advanced financial analytics with AI-powered forecasting, risk assessment, and investment recommendations.',
      icon: '💰',
      link: '/ai-financial-analytics',
      features: ['Financial Forecasting', 'Risk Assessment', 'Investment Analysis', 'Budget Optimization', 'Fraud Detection', 'Compliance Reporting'],
      price: 'Starting at $499/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Website Builder',
      description: 'Build professional websites in minutes with AI-powered design, content generation, and optimization.',
      icon: '🌐',
      link: '/ai-website-builder',
      features: ['AI Design Generation', 'Content Creation', 'SEO Optimization', 'Mobile Responsive', 'E-commerce Integration', 'Analytics Dashboard'],
      price: 'Starting at $49/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Document Processing',
      description: 'Automate document processing with AI-powered extraction, classification, and intelligent data capture.',
      icon: '📄',
      link: '/ai-document-processing',
      features: ['Document Extraction', 'Smart Classification', 'Data Validation', 'OCR Technology', 'Workflow Automation', 'Integration APIs'],
      price: 'Starting at $179/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including ML, NLP, and computer vision.',
      icon: '🤖',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Deep Learning', 'Neural Networks'],
      price: 'Starting at $1,500/month',
      category: 'AI Services'
    },
    {
      title: 'AI Marketing Solutions',
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation.',
      icon: '📢',
      link: '/ai-marketing',
      features: ['Ad Optimization', 'Content Generation', 'Social Media AI', 'Email Marketing AI', 'Campaign Automation', 'ROI Optimization'],
      price: 'Starting at $199/month',
      popular: true,
      category: 'AI Services'
    },
    {
      title: 'AI Business Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      icon: '⚙️',
      link: '/ai-automation',
      features: ['Workflow Automation', 'Process Intelligence', 'Decision Automation', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      icon: '🏥',
      link: '/ai-healthcare',
      features: ['Medical Imaging AI', 'Drug Discovery', 'Personalized Medicine', 'Clinical Decision Support', 'Patient Monitoring', 'Diagnostic Assistance'],
      price: 'Starting at $1,999/month',
      category: 'AI Services'
    },
    {
      title: 'AI Fintech Solutions',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      icon: '💰',
      link: '/ai-fintech',
      features: ['Algorithmic Trading', 'Fraud Detection', 'Credit Scoring', 'Wealth Management', 'Risk Assessment', 'Regulatory Compliance'],
      price: 'Starting at $1,499/month',
      category: 'AI Services'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions with threat detection, SOC services, and compliance management.',
      icon: '🔒',
      link: '/ai-cybersecurity',
      features: ['AI Threat Detection', 'SOC Services', 'Vulnerability Assessment', 'Compliance Automation', 'Incident Response', 'Security Analytics'],
      price: 'Starting at $2,499/month',
      category: 'AI Services'
    },
    {
      title: 'AI Cloud Infrastructure',
      description: 'AI-powered cloud services including migration, optimization, security, and monitoring.',
      icon: '☁️',
      link: '/ai-cloud-infrastructure',
      features: ['Cloud Migration', 'Cost Optimization', 'DevOps Automation', 'Security Management', 'Auto-scaling', 'Performance Monitoring'],
      price: 'Starting at $2,999/month',
      category: 'AI Services'
    },
    {
      title: 'AI E-commerce Solutions',
      description: 'Revolutionary AI-powered e-commerce platform with personalization, inventory management, and automated customer service.',
      icon: '🛒',
      link: '/ai-ecommerce-solutions',
      features: ['AI Personalization', 'Inventory Management', 'Payment Processing', 'Marketing Automation', 'Recommendation Engine', 'Price Optimization'],
      price: 'Starting at $1,999/month',
      category: 'AI Services'
    },
    {
      title: 'AI Mobile App Development',
      description: 'Complete mobile app development with AI integration, machine learning capabilities, and intelligent features.',
      icon: '📱',
      link: '/ai-mobile-app-development',
      features: ['Native Development', 'AI Integration', 'Cross-platform', 'Analytics', 'Push Notifications', 'Offline Capabilities'],
      price: 'Starting at $4,999/project',
      category: 'AI Services'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent automation platform that streamlines business processes with AI-powered workflows.',
      icon: '🤖',
      link: '/ai-workflow-automation',
      features: ['Process Automation', 'RPA Solutions', 'Workflow Optimization', 'Exception Handling', 'Integration APIs', 'Performance Analytics'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced AI-powered analytics platform providing real-time insights and predictive modeling.',
      icon: '📊',
      link: '/ai-data-analytics',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Business Intelligence', 'Data Visualization', 'Machine Learning', 'Data Mining'],
      price: 'Starting at $1,299/month',
      category: 'AI Services'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform your data into stunning visual insights with AI-powered analytics.',
      icon: '📊',
      link: '/ai-data-visualization',
      features: ['Interactive Dashboards', 'AI Insights', '50+ Chart Types', 'Real-time Updates', 'Custom Branding', 'Export Options'],
      price: 'Starting at $149/month',
      category: 'AI Services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud, security, DevOps, and infrastructure.',
      icon: '⚙️',
      link: '/it-services',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'DevOps & CI/CD', 'Database Administration', 'Network Management', 'System Integration'],
      price: 'Starting at $1,200/month',
      category: 'IT Services'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing capabilities for complex problem solving.',
      icon: '⚛️',
      link: '/quantum-computing',
      features: ['Quantum Algorithms', 'Quantum Security', 'Optimization', 'Simulation', 'Quantum Machine Learning', 'Cryptography'],
      price: 'Custom Pricing',
      category: 'IT Services'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations.',
      icon: '🔄',
      link: '/autonomous-systems',
      features: ['Self-Healing Infrastructure', 'Automated Operations', 'Intelligent Monitoring', 'Adaptive Learning', 'Predictive Maintenance', 'Auto-scaling'],
      price: 'Starting at $2,500/month',
      category: 'IT Services'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics for strategic decision making.',
      icon: '📊',
      link: '/business-intelligence',
      features: ['Real-time Analytics', 'Data Visualization', 'Reporting', 'Dashboard Creation', 'KPI Tracking', 'Performance Metrics'],
      price: 'Starting at $1,800/month',
      category: 'IT Services'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and Web3 solutions.',
      icon: '🔗',
      link: '/blockchain',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'Web3 Applications', 'Token Development', 'DApp Creation'],
      price: 'Starting at $8,000/project',
      category: 'IT Services'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices, edge analytics, and industrial IoT solutions.',
      icon: '📱',
      link: '/iot-edge',
      features: ['Device Management', 'Edge Analytics', 'Industrial IoT', 'Smart Cities', 'Sensor Networks', 'Real-time Processing'],
      price: 'Starting at $2,500/month',
      category: 'IT Services'
    },
    {
      title: 'Robotics & Automation',
      description: 'Intelligent robots, RPA, and advanced automation solutions.',
      icon: '🤖',
      link: '/robotics',
      features: ['RPA Solutions', 'Industrial Robots', 'Service Robots', 'AI-Powered Automation', 'Machine Vision', 'Collaborative Robots'],
      price: 'Starting at $2,500/month',
      category: 'IT Services'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection and compliance.',
      icon: '🛡️',
      link: '/cybersecurity',
      features: ['Threat Detection', 'Penetration Testing', 'Zero Trust Security', 'SOC Services', 'Vulnerability Assessment', 'Incident Response'],
      price: 'Starting at $2,500/month',
      category: 'IT Services'
    },
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(serviceCategories.map(service => service.category)))];
  
  // Filter services based on category and search term
  const filteredServices = useMemo(() => {
    return serviceCategories.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const additionalServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud transformation with zero downtime and cost optimization.',
      icon: '☁️',
      features: ['Zero Downtime', 'Cost Optimization', 'Security Enhancement', 'Scalability'],
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection and incident response.',
      icon: '🔒',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management']
    },
    {
      title: 'DevOps & Automation',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      icon: '🔄',
      features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring & Alerting', 'Testing Automation']
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions.',
      icon: '📈',
      features: ['Data Warehouse Design', 'ETL Development', 'Dashboard Creation', 'Predictive Modeling']
    },
    {
      title: 'API Development',
      description: 'Custom API development and third-party integration services.',
      icon: '🔌',
      features: ['RESTful APIs', 'GraphQL Development', 'Third-party Integrations', 'API Documentation']
    },
    {
      title: 'Consulting',
      description: 'Expert guidance and strategic planning for digital transformation.',
      icon: '💡',
      features: [
        'Strategic Planning',
        'Technology Assessment',
        'Implementation Support',
        'Training',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive AI, IT, and micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of technology solutions
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.link}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for specific business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom solution recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">🌐 https://ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
