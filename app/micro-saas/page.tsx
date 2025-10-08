import React, { useState, useEffect } from 'react';

interface MicroService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: 'AI' | 'IT' | 'Productivity' | 'Analytics' | 'Security' | 'Development';
  icon: string;
  link: string;
  popular?: boolean;
}

const microServices: MicroService[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation tool that generates high-quality articles, blog posts, and marketing copy in seconds.',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization suggestions',
      'Multiple content formats (articles, social media, emails)',
      'Brand voice customization',
      'Plagiarism detection',
      'Multi-language support'
    ],
    pricing: {
      monthly: 49,
      yearly: 490,
      setup: 0
    },
    category: 'AI',
    icon: '🤖',
    link: 'https://ziontechgroup.com/ai-content-generator',
    popular: true
  },
  {
    id: 'smart-analytics-dashboard',
    name: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with AI-powered insights and predictive analytics.',
    features: [
      'Real-time data visualization',
      'AI-powered insights and recommendations',
      'Custom dashboard builder',
      'Automated reporting',
      'Data export capabilities',
      'Team collaboration tools'
    ],
    pricing: {
      monthly: 79,
      yearly: 790,
      setup: 199
    },
    category: 'Analytics',
    icon: '📊',
    link: 'https://ziontechgroup.com/smart-analytics',
    popular: true
  },
  {
    id: 'cyber-security-monitor',
    name: 'Cyber Security Monitor',
    description: '24/7 automated security monitoring and threat detection for your digital assets.',
    features: [
      'Real-time threat detection',
      'Automated incident response',
      'Vulnerability scanning',
      'Compliance reporting',
      'Security audit trails',
      'Expert security consultation'
    ],
    pricing: {
      monthly: 129,
      yearly: 1290,
      setup: 299
    },
    category: 'Security',
    icon: '🔒',
    link: 'https://ziontechgroup.com/cyber-security-monitor'
  },
  {
    id: 'code-optimizer-ai',
    name: 'Code Optimizer AI',
    description: 'AI-powered code analysis and optimization tool that improves performance and security.',
    features: [
      'Automated code review',
      'Performance optimization suggestions',
      'Security vulnerability detection',
      'Code quality metrics',
      'Refactoring recommendations',
      'Multi-language support'
    ],
    pricing: {
      monthly: 89,
      yearly: 890,
      setup: 149
    },
    category: 'Development',
    icon: '⚡',
    link: 'https://ziontechgroup.com/code-optimizer'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation Suite',
    description: 'No-code automation platform that streamlines business processes and eliminates manual tasks.',
    features: [
      'Drag-and-drop workflow builder',
      '500+ app integrations',
      'Custom automation triggers',
      'Team collaboration features',
      'Analytics and reporting',
      'Mobile app access'
    ],
    pricing: {
      monthly: 59,
      yearly: 590,
      setup: 99
    },
    category: 'Productivity',
    icon: '🔄',
    link: 'https://ziontechgroup.com/workflow-automation'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Bot',
    description: 'Intelligent chatbot that provides 24/7 customer support with human-like interactions.',
    features: [
      'Natural language processing',
      'Multi-channel support (web, email, chat)',
      'Sentiment analysis',
      'Escalation to human agents',
      'Knowledge base integration',
      'Custom branding options'
    ],
    pricing: {
      monthly: 99,
      yearly: 990,
      setup: 199
    },
    category: 'AI',
    icon: '💬',
    link: 'https://ziontechgroup.com/ai-customer-support'
  },
  {
    id: 'cloud-infrastructure-manager',
    name: 'Cloud Infrastructure Manager',
    description: 'Comprehensive cloud management platform for AWS, Azure, and Google Cloud.',
    features: [
      'Multi-cloud management',
      'Cost optimization recommendations',
      'Automated scaling',
      'Security compliance monitoring',
      'Resource usage analytics',
      'Expert cloud consultation'
    ],
    pricing: {
      monthly: 149,
      yearly: 1490,
      setup: 399
    },
    category: 'IT',
    icon: '☁️',
    link: 'https://ziontechgroup.com/cloud-manager'
  },
  {
    id: 'data-visualization-studio',
    name: 'Data Visualization Studio',
    description: 'Advanced data visualization tool that transforms complex data into interactive charts and dashboards.',
    features: [
      'Interactive chart builder',
      'Real-time data connections',
      'Custom visualization templates',
      'Collaborative editing',
      'Export to multiple formats',
      'API integration'
    ],
    pricing: {
      monthly: 69,
      yearly: 690,
      setup: 149
    },
    category: 'Analytics',
    icon: '📈',
    link: 'https://ziontechgroup.com/data-visualization'
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Platform',
    description: 'Intelligent email marketing platform with AI-powered personalization and optimization.',
    features: [
      'AI-powered subject line optimization',
      'Personalized content recommendations',
      'Send time optimization',
      'A/B testing automation',
      'Advanced segmentation',
      'Deliverability monitoring'
    ],
    pricing: {
      monthly: 79,
      yearly: 790,
      setup: 99
    },
    category: 'AI',
    icon: '📧',
    link: 'https://ziontechgroup.com/ai-email-marketing'
  },
  {
    id: 'api-management-gateway',
    name: 'API Management Gateway',
    description: 'Enterprise-grade API management platform with security, monitoring, and analytics.',
    features: [
      'API gateway and proxy',
      'Rate limiting and throttling',
      'Authentication and authorization',
      'API analytics and monitoring',
      'Developer portal',
      'API versioning'
    ],
    pricing: {
      monthly: 119,
      yearly: 1190,
      setup: 299
    },
    category: 'Development',
    icon: '🔌',
    link: 'https://ziontechgroup.com/api-management'
  },
  {
    id: 'ai-document-processor',
    name: 'AI Document Processor',
    description: 'Intelligent document processing and data extraction using advanced OCR and AI.',
    features: [
      'OCR and text extraction',
      'Document classification',
      'Data validation and verification',
      'Batch processing capabilities',
      'Custom field extraction',
      'Integration with business systems'
    ],
    pricing: {
      monthly: 89,
      yearly: 890,
      setup: 199
    },
    category: 'AI',
    icon: '📄',
    link: 'https://ziontechgroup.com/document-processor'
  },
  {
    id: 'network-performance-monitor',
    name: 'Network Performance Monitor',
    description: 'Comprehensive network monitoring and optimization tool for enterprise networks.',
    features: [
      'Real-time network monitoring',
      'Performance analytics',
      'Alert management',
      'Network topology mapping',
      'Bandwidth usage tracking',
      'Historical reporting'
    ],
    pricing: {
      monthly: 109,
      yearly: 1090,
      setup: 249
    },
    category: 'IT',
    icon: '🌐',
    link: 'https://ziontechgroup.com/network-monitor'
  }
];

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI', 'IT', 'Productivity', 'Analytics', 'Security', 'Development'];

  const filteredServices = microServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactClick = (service: MicroService) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_inquiry', {
        event_category: 'engagement',
        event_label: service.name,
        value: service.pricing.monthly
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated Background */}
      <div className="cyber-grid fixed inset-0 opacity-20"></div>
      
      {/* Header Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 holographic">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of micro SAAS solutions designed to accelerate your business growth and digital transformation.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`futuristic-card p-8 ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-indigo-600 font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${service.pricing.monthly}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="line-through">${service.pricing.monthly * 12}</span>
                    <span className="ml-2 text-green-600 font-medium">
                      ${service.pricing.yearly}/year (Save ${service.pricing.monthly * 12 - service.pricing.yearly})
                    </span>
                  </div>
                  {service.pricing.setup && (
                    <div className="text-sm text-gray-500 mt-1">
                      Setup fee: ${service.pricing.setup}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300"
                    onClick={() => handleContactClick(service)}
                  >
                    Learn More
                  </a>
                  <a
                    href={`tel:+13024640950`}
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-center font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a customized solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: (302) 464-0950
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>✓ Free consultation and demo</p>
            <p>✓ Custom pricing for enterprise clients</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ 24/7 technical support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;