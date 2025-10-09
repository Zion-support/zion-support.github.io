import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Code, Download, ExternalLink, Search, Filter, ChevronRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: BookOpen,
      color: 'text-blue-400',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', type: 'Guide' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', type: 'Guide' },
        { title: 'First Project', description: 'Create your first AI project', type: 'Tutorial' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'text-green-400',
      docs: [
        { title: 'REST API', description: 'Complete REST API reference', type: 'Reference' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', type: 'Reference' },
        { title: 'Webhooks', description: 'Event-driven integrations', type: 'Guide' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for various languages',
      icon: Download,
      color: 'text-purple-400',
      docs: [
        { title: 'Python SDK', description: 'Python client library', type: 'SDK' },
        { title: 'JavaScript SDK', description: 'Node.js and browser library', type: 'SDK' },
        { title: 'Java SDK', description: 'Java client library', type: 'SDK' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Authentication', href: '#', description: 'Learn how to authenticate with our APIs' },
    { title: 'Rate Limits', href: '#', description: 'Understanding API rate limits and quotas' },
    { title: 'Error Handling', href: '#', description: 'Common errors and how to handle them' },
    { title: 'Webhooks', href: '#', description: 'Setting up and managing webhooks' },
    { title: 'Best Practices', href: '#', description: 'Recommended practices for optimal performance' },
    { title: 'Troubleshooting', href: '#', description: 'Common issues and their solutions' }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group AI services. Find guides, API references, SDKs, and tutorials to help you integrate our solutions." />
        <meta name="keywords" content="documentation, API docs, SDK, guides, tutorials, integration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to integrate and use our AI services effectively. 
              From quick start guides to comprehensive API references.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{link.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Documentation Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Browse Documentation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.docs.map((doc, docIndex) => (
                      <a
                        key={docIndex}
                        href="#"
                        className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">
                              {doc.title}
                            </h4>
                            <p className="text-gray-300 text-sm">{doc.description}</p>
                          </div>
                          <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                            {doc.type}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4"
                  >
                    View All {category.title}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* API Status */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Our APIs are running smoothly with 99.9% uptime. Check our status page for real-time updates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">&lt; 100ms</div>
                  <div className="text-gray-300 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Help */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Need More Help?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Support
              </a>
              <a
                href="/api-docs"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                API Reference
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DocsPage;