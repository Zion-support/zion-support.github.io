import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Brain, 
  Server, 
  Zap,
  Shield,
  BarChart3,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Target,
  Rocket,
  Users,
  Settings,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Server },
    { id: 'saas', name: 'Micro SAAS', icon: Zap }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard Pro',
      category: 'ai',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics',
      price: '$299/month',
      marketPrice: '$599/month',
      savings: '50% off',
      features: [
        'Real-time Data Visualization',
        'AI-Powered Predictions',
        'Custom Dashboard Builder',
        'API Integration',
        'Mobile App Access',
        '24/7 Support'
      ],
      benefits: [
        'Increase decision speed by 40%',
        'Reduce manual reporting by 80%',
        'Improve forecast accuracy by 60%'
      ],
      popular: true,
      rating: 4.9,
      clients: 150,
      serviceCategory: 'Analytics',
      useCases: ['Sales tracking', 'Marketing ROI', 'Customer behavior', 'Performance metrics'],
      integrations: ['Google Analytics', 'Salesforce', 'Stripe', 'Shopify']
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Studio',
      category: 'ai',
      description: 'Automated content creation platform with multi-language support and brand voice customization',
      price: '$199/month',
      features: [
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Bulk Content Generation',
        'Plagiarism Detection',
        'Content Calendar Integration'
      ],
      benefits: [
        'Save 70% content creation time',
        'Increase SEO rankings by 50%',
        'Maintain consistent brand voice'
      ],
      popular: false,
      rating: 4.8,
      clients: 120
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      category: 'ai',
      description: 'Intelligent customer service automation with natural language processing and sentiment analysis',
      price: '$399/month',
      features: [
        'Natural Language Processing',
        'Sentiment Analysis',
        'Multi-channel Support',
        'Knowledge Base Integration',
        'Escalation Management',
        'Performance Analytics'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Increase customer satisfaction by 35%',
        'Handle 80% queries automatically'
      ],
      popular: true,
      rating: 4.9,
      clients: 200
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      category: 'ai',
      description: 'Advanced code generation and review platform with intelligent debugging and optimization suggestions',
      price: '$249/month',
      features: [
        'Code Generation',
        'Bug Detection & Fixes',
        'Code Review Automation',
        'Performance Optimization',
        'Security Scanning',
        'Documentation Generation'
      ],
      benefits: [
        'Increase development speed by 50%',
        'Reduce bugs by 70%',
        'Improve code quality significantly'
      ],
      popular: false,
      rating: 4.7,
      clients: 80
    },

    // IT Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      category: 'it',
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance',
      price: '$199/month',
      features: [
        'Auto-scaling Infrastructure',
        '99.9% Uptime Guarantee',
        '24/7 Monitoring',
        'Security Compliance',
        'Backup & Recovery',
        'Cost Optimization'
      ],
      benefits: [
        'Reduce infrastructure costs by 30%',
        'Improve system reliability',
        'Scale automatically with demand'
      ],
      popular: true,
      rating: 4.8,
      clients: 180
    },
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      category: 'it',
      description: 'Enterprise-grade security monitoring and protection with real-time threat detection',
      price: '$499/month',
      features: [
        'Threat Detection & Response',
        'Real-time Security Monitoring',
        'Compliance Reporting',
        'Incident Response',
        'Security Training',
        'Penetration Testing'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Meet compliance requirements',
        'Reduce security incidents by 95%'
      ],
      popular: true,
      rating: 4.9,
      clients: 100
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation Platform',
      category: 'it',
      description: 'Complete CI/CD pipeline automation with monitoring, testing, and deployment management',
      price: '$349/month',
      features: [
        'CI/CD Pipeline Automation',
        'Automated Testing',
        'Deployment Management',
        'Performance Monitoring',
        'Rollback Capabilities',
        'Team Collaboration Tools'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity by 60%'
      ],
      popular: false,
      rating: 4.7,
      clients: 90
    },
    {
      id: 'database-solutions',
      name: 'Database Management Solutions',
      category: 'it',
      description: 'Advanced database administration with optimization, backup, and performance monitoring',
      price: '$279/month',
      features: [
        'Database Optimization',
        'Automated Backups',
        'Performance Monitoring',
        'Query Optimization',
        'Security Hardening',
        'Disaster Recovery'
      ],
      benefits: [
        'Improve query performance by 80%',
        'Ensure data integrity',
        'Reduce downtime by 95%'
      ],
      popular: false,
      rating: 4.6,
      clients: 70
    },

    // Micro SAAS Services
    {
      id: 'project-management-pro',
      name: 'Project Management Pro',
      category: 'saas',
      description: 'Comprehensive project management platform with AI-powered insights and team collaboration',
      price: '$149/month',
      features: [
        'Task Management',
        'Team Collaboration',
        'AI Progress Insights',
        'Resource Planning',
        'Time Tracking',
        'Reporting & Analytics'
      ],
      benefits: [
        'Increase project success rate by 40%',
        'Improve team productivity by 50%',
        'Reduce project delays by 60%'
      ],
      popular: true,
      rating: 4.8,
      clients: 250
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      category: 'saas',
      description: 'Complete API lifecycle management with monitoring, security, and developer portal',
      price: '$179/month',
      features: [
        'API Gateway',
        'Rate Limiting',
        'Authentication & Authorization',
        'API Documentation',
        'Developer Portal',
        'Analytics & Monitoring'
      ],
      benefits: [
        'Secure API access',
        'Improve API performance',
        'Simplify API management'
      ],
      popular: false,
      rating: 4.7,
      clients: 60
    },
    {
      id: 'monitoring-suite',
      name: 'Application Monitoring Suite',
      category: 'saas',
      description: 'Real-time application performance monitoring with alerting and root cause analysis',
      price: '$129/month',
      features: [
        'Real-time Monitoring',
        'Performance Metrics',
        'Error Tracking',
        'Alert Management',
        'Root Cause Analysis',
        'Custom Dashboards'
      ],
      benefits: [
        'Prevent 90% of outages',
        'Improve application performance',
        'Reduce mean time to resolution'
      ],
      popular: false,
      rating: 4.6,
      clients: 110
    },
    {
      id: 'automation-tools',
      name: 'Business Automation Tools',
      category: 'saas',
      description: 'Workflow automation platform with drag-and-drop builder and integration capabilities',
      price: '$99/month',
      marketPrice: '$199/month',
      savings: '50% off',
      features: [
        'Workflow Builder',
        'Integration Hub',
        'Trigger Management',
        'Data Processing',
        'Notification System',
        'Analytics Dashboard'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce manual errors by 95%',
        'Save 20+ hours per week'
      ],
      popular: true,
      rating: 4.8,
      clients: 180,
      serviceCategory: 'Automation',
      useCases: ['Process automation', 'Data processing', 'Notification management', 'Workflow optimization'],
      integrations: ['Zapier', 'Microsoft Power Automate', 'Salesforce', 'HubSpot']
    },

    // Additional AI Services
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor Pro',
      category: 'ai',
      description: 'Intelligent document processing and management system with OCR, data extraction, and automated workflows',
      price: '$199/month',
      marketPrice: '$399/month',
      savings: '50% off',
      features: [
        'OCR Processing',
        'Data Extraction',
        'Document Classification',
        'Automated Workflows',
        'Version Control',
        'Search & Retrieval'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce data entry errors by 95%',
        'Save 30+ hours per week'
      ],
      popular: false,
      rating: 4.7,
      clients: 90,
      serviceCategory: 'Document Management',
      useCases: ['Invoice processing', 'Contract management', 'Data entry automation', 'Compliance'],
      integrations: ['Google Drive', 'Dropbox', 'SharePoint', 'Box']
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager Pro',
      category: 'ai',
      description: 'Comprehensive social media management platform with AI-powered content scheduling and engagement analysis',
      price: '$149/month',
      marketPrice: '$299/month',
      savings: '50% off',
      features: [
        'Content Scheduling',
        'Engagement Analysis',
        'Hashtag Optimization',
        'Competitor Tracking',
        'Performance Metrics',
        'Auto-posting'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Save 15+ hours per week',
        'Improve content performance by 40%'
      ],
      popular: false,
      rating: 4.6,
      clients: 120,
      serviceCategory: 'Social Media',
      useCases: ['Content planning', 'Engagement tracking', 'Growth optimization', 'Brand monitoring'],
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']
    },
    {
      id: 'ai-lead-generator',
      name: 'AI Lead Generator Pro',
      category: 'ai',
      description: 'Intelligent lead generation and qualification system with AI-powered prospecting and scoring',
      price: '$179/month',
      marketPrice: '$359/month',
      savings: '50% off',
      features: [
        'Lead Scoring',
        'Prospect Identification',
        'Email Sequences',
        'CRM Integration',
        'Conversion Tracking',
        'ROI Analysis'
      ],
      benefits: [
        'Increase qualified leads by 70%',
        'Reduce cost per lead by 50%',
        'Improve conversion rates by 35%'
      ],
      popular: true,
      rating: 4.8,
      clients: 200,
      serviceCategory: 'Sales & Marketing',
      useCases: ['Lead generation', 'Prospect qualification', 'Sales automation', 'Conversion optimization'],
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM']
    },

    // Additional IT Services
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Development Solutions',
      category: 'it',
      description: 'Comprehensive blockchain development services including smart contracts, DeFi, and NFT platforms',
      price: '$799/month',
      marketPrice: '$1599/month',
      savings: '50% off',
      features: [
        'Smart Contract Development',
        'DeFi Platform Creation',
        'NFT Marketplace',
        'Blockchain Integration',
        'Security Auditing',
        'Token Development'
      ],
      benefits: [
        'Secure and transparent transactions',
        'Reduce transaction costs by 80%',
        'Enable new business models'
      ],
      popular: false,
      rating: 4.9,
      clients: 25,
      serviceCategory: 'Blockchain',
      useCases: ['DeFi platforms', 'NFT marketplaces', 'Supply chain tracking', 'Digital identity'],
      integrations: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'Solana']
    },
    {
      id: 'iot-solutions',
      name: 'IoT Development Solutions',
      category: 'it',
      description: 'End-to-end IoT development services for connected devices and smart systems',
      price: '$599/month',
      marketPrice: '$1199/month',
      savings: '50% off',
      features: [
        'Device Development',
        'Sensor Integration',
        'Data Analytics',
        'Cloud Connectivity',
        'Mobile Apps',
        'Dashboard Creation'
      ],
      benefits: [
        'Monitor and control devices remotely',
        'Collect valuable data insights',
        'Improve operational efficiency'
      ],
      popular: false,
      rating: 4.7,
      clients: 40,
      serviceCategory: 'IoT',
      useCases: ['Smart homes', 'Industrial monitoring', 'Asset tracking', 'Environmental sensing'],
      integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Arduino']
    },
    {
      id: 'ar-vr-solutions',
      name: 'AR/VR Development Solutions',
      category: 'it',
      description: 'Immersive AR/VR applications for training, marketing, and entertainment',
      price: '$999/month',
      marketPrice: '$1999/month',
      savings: '50% off',
      features: [
        'AR Application Development',
        'VR Experience Creation',
        '3D Modeling',
        'Interactive Design',
        'Cross-platform Support',
        'Performance Optimization'
      ],
      benefits: [
        'Enhance user engagement',
        'Create immersive experiences',
        'Reduce training costs by 60%'
      ],
      popular: false,
      rating: 4.8,
      clients: 15,
      serviceCategory: 'AR/VR',
      useCases: ['Training simulations', 'Marketing experiences', 'Virtual tours', 'Gaming'],
      integrations: ['Unity', 'Unreal Engine', 'WebXR', 'Oculus']
    },

    // Additional Micro SAAS Services
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager Pro',
      category: 'saas',
      description: 'Smart inventory management system with AI-powered demand forecasting and automated reordering',
      price: '$199/month',
      marketPrice: '$399/month',
      savings: '50% off',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Supply Chain Optimization',
        'Real-time Tracking',
        'Cost Analysis',
        'Vendor Management'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Prevent stockouts by 90%',
        'Optimize supply chain efficiency'
      ],
      popular: false,
      rating: 4.6,
      clients: 80,
      serviceCategory: 'Inventory Management',
      useCases: ['Stock optimization', 'Demand planning', 'Cost reduction', 'Supply chain'],
      integrations: ['QuickBooks', 'SAP', 'Oracle', 'NetSuite']
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant Pro',
      category: 'saas',
      description: 'Intelligent human resources management platform with AI-powered recruitment and employee analytics',
      price: '$149/month',
      marketPrice: '$299/month',
      savings: '50% off',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Performance Analytics',
        'Employee Engagement',
        'Payroll Integration',
        'Compliance Tracking'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve employee satisfaction by 40%',
        'Ensure compliance with regulations'
      ],
      popular: false,
      rating: 4.7,
      clients: 60,
      serviceCategory: 'Human Resources',
      useCases: ['Recruitment', 'Performance management', 'Employee engagement', 'Compliance'],
      integrations: ['Workday', 'BambooHR', 'ADP', 'Paychex']
    },
    {
      id: 'ai-financial-advisor',
      name: 'AI Financial Advisor Pro',
      category: 'saas',
      description: 'Advanced financial planning and analysis tool with AI-powered insights and investment recommendations',
      price: '$249/month',
      marketPrice: '$499/month',
      savings: '50% off',
      features: [
        'Financial Planning',
        'Budget Optimization',
        'Investment Analysis',
        'Risk Assessment',
        'Tax Optimization',
        'Reporting'
      ],
      benefits: [
        'Improve financial decision making',
        'Optimize investment returns by 25%',
        'Reduce financial risks'
      ],
      popular: true,
      rating: 4.8,
      clients: 100,
      serviceCategory: 'Finance',
      useCases: ['Financial planning', 'Investment analysis', 'Budget management', 'Tax optimization'],
      integrations: ['QuickBooks', 'Xero', 'Mint', 'Personal Capital']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SAAS services. From AI analytics to cloud infrastructure, we have solutions for every business need." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud computing, cybersecurity, project management, API management" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive AI, IT, and Micro SAAS solutions designed to accelerate your business growth. 
              Choose from our range of services tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                service.popular 
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      {service.marketPrice && (
                        <>
                          <div className="text-lg text-gray-400 line-through">{service.marketPrice}</div>
                          <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">{service.savings}</div>
                        </>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">{service.clients} clients</div>
                  </div>
                  
                  {service.serviceCategory && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                        {service.serviceCategory}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/service/${service.id}`}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't see exactly what you need? Our team can create custom solutions tailored to your specific requirements. 
            Contact us for a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
              <Rocket className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;