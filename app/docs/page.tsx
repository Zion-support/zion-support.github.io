import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Book, Search, Download, ExternalLink, Code, Database, Shield, Zap, Users, Globe } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      items: [
        { title: 'Installation Guide', description: 'Step-by-step setup instructions', link: '/docs/installation' },
        { title: 'Quick Start', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' },
        { title: 'First Project', description: 'Create your first AI project', link: '/docs/first-project' }
      ]
    },
    {
      title: 'AI Services',
      description: 'Comprehensive guides for all AI services',
      icon: Code,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      items: [
        { title: 'Machine Learning API', description: 'ML model training and inference', link: '/docs/ml-api' },
        { title: 'Natural Language Processing', description: 'Text analysis and processing', link: '/docs/nlp' },
        { title: 'Computer Vision', description: 'Image and video analysis', link: '/docs/computer-vision' },
        { title: 'Predictive Analytics', description: 'Data forecasting and insights', link: '/docs/analytics' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Database,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      items: [
        { title: 'REST API', description: 'RESTful API endpoints', link: '/docs/api/rest' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', link: '/docs/api/graphql' },
        { title: 'WebSocket API', description: 'Real-time communication', link: '/docs/api/websocket' },
        { title: 'SDK Libraries', description: 'Client libraries and SDKs', link: '/docs/sdk' }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guides',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      items: [
        { title: 'Authentication', description: 'API authentication and authorization', link: '/docs/auth' },
        { title: 'Data Privacy', description: 'GDPR and privacy compliance', link: '/docs/privacy' },
        { title: 'Security Best Practices', description: 'Secure implementation guidelines', link: '/docs/security' },
        { title: 'Compliance', description: 'SOC 2, ISO 27001 compliance', link: '/docs/compliance' }
      ]
    },
    {
      title: 'Deployment',
      description: 'Deployment guides and infrastructure',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      items: [
        { title: 'Cloud Deployment', description: 'AWS, Azure, GCP deployment', link: '/docs/deployment/cloud' },
        { title: 'Docker & Kubernetes', description: 'Container deployment', link: '/docs/deployment/docker' },
        { title: 'Edge Deployment', description: 'Edge computing setup', link: '/docs/deployment/edge' },
        { title: 'Monitoring', description: 'Application monitoring and logging', link: '/docs/monitoring' }
      ]
    },
    {
      title: 'Support & Community',
      description: 'Help resources and community support',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      items: [
        { title: 'FAQ', description: 'Frequently asked questions', link: '/docs/faq' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/troubleshooting' },
        { title: 'Community Forum', description: 'Developer community discussions', link: '/docs/community' },
        { title: 'Contact Support', description: 'Get help from our team', link: '/docs/support' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Keys', description: 'Manage your API keys', link: '/docs/api-keys' },
    { title: 'Rate Limits', description: 'API rate limiting information', link: '/docs/rate-limits' },
    { title: 'Error Codes', description: 'API error codes and meanings', link: '/docs/error-codes' },
    { title: 'Changelog', description: 'API version history', link: '/docs/changelog' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI services, APIs, and development tools." />
        <meta name="keywords" content="documentation, API docs, developer guides, AI services, technical documentation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you build amazing AI-powered applications.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">API Endpoints</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Code Examples</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documentation Sections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <section.icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.link}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-purple-600">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">
                  {link.title}
                </h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Download Resources
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get offline access to our documentation and development resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Book className="w-5 h-5 mr-2" />
              View Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;