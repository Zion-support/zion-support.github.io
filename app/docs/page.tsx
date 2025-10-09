import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Book, Code, FileText, Download, Search, ArrowRight, ExternalLink } from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions for our AI and IT solutions',
      icon: '🚀',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', duration: '5 min read' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', duration: '10 min read' },
        { title: 'First Project', description: 'Create your first AI project', duration: '15 min read' },
        { title: 'Configuration', description: 'Configure your environment', duration: '8 min read' }
      ]
    },
    {
      title: 'AI Services',
      description: 'Comprehensive documentation for all our AI services and APIs',
      icon: '🤖',
      articles: [
        { title: 'AI Services Overview', description: 'Introduction to our AI services', duration: '12 min read' },
        { title: 'Machine Learning API', description: 'ML model training and inference', duration: '20 min read' },
        { title: 'Natural Language Processing', description: 'NLP capabilities and usage', duration: '18 min read' },
        { title: 'Computer Vision API', description: 'Image and video analysis', duration: '25 min read' },
        { title: 'Predictive Analytics', description: 'Building predictive models', duration: '30 min read' }
      ]
    },
    {
      title: 'Micro SAAS Tools',
      description: 'Documentation for our micro SAAS applications and tools',
      icon: '💻',
      articles: [
        { title: 'Micro SAAS Overview', description: 'Introduction to micro SAAS tools', duration: '10 min read' },
        { title: 'AI Code Review', description: 'Automated code analysis and review', duration: '15 min read' },
        { title: 'SEO Optimizer', description: 'AI-powered SEO optimization', duration: '12 min read' },
        { title: 'Content Generator', description: 'AI content creation tools', duration: '18 min read' },
        { title: 'Analytics Dashboard', description: 'Business intelligence tools', duration: '20 min read' }
      ]
    },
    {
      title: 'IT Infrastructure',
      description: 'Cloud, security, and infrastructure management guides',
      icon: '☁️',
      articles: [
        { title: 'Cloud Setup', description: 'Setting up cloud infrastructure', duration: '25 min read' },
        { title: 'Security Configuration', description: 'Security best practices', duration: '30 min read' },
        { title: 'DevOps Pipeline', description: 'CI/CD and automation', duration: '35 min read' },
        { title: 'Monitoring & Alerting', description: 'System monitoring setup', duration: '20 min read' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and code snippets',
      icon: '🔌',
      articles: [
        { title: 'Authentication', description: 'API authentication methods', duration: '8 min read' },
        { title: 'REST API', description: 'RESTful API endpoints', duration: '45 min read' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', duration: '40 min read' },
        { title: 'Webhooks', description: 'Event-driven integrations', duration: '15 min read' },
        { title: 'Rate Limits', description: 'API rate limiting and quotas', duration: '5 min read' }
      ]
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials for common use cases and scenarios',
      icon: '📚',
      articles: [
        { title: 'Building a Chatbot', description: 'Create an AI-powered chatbot', duration: '60 min read' },
        { title: 'Image Classification', description: 'Build an image classifier', duration: '45 min read' },
        { title: 'Data Pipeline', description: 'Create a data processing pipeline', duration: '90 min read' },
        { title: 'Real-time Analytics', description: 'Implement real-time analytics', duration: '75 min read' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', description: 'Complete API documentation', icon: Code, href: '/api' },
    { title: 'SDKs & Libraries', description: 'Client libraries and SDKs', icon: Download, href: '/sdk' },
    { title: 'Code Examples', description: 'Sample code and examples', icon: FileText, href: '/examples' },
    { title: 'Support Center', description: 'Get help and support', icon: Book, href: '/support' }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI services, micro SAAS tools, and IT solutions. Get started with our detailed guides and API references." />
        <meta name="keywords" content="documentation, API docs, AI guides, micro SAAS docs, IT documentation, developer resources" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Everything you need to build with our AI and IT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  API Reference
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center mb-4">
                    <link.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Documentation Sections</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {documentationSections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{section.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h3>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {section.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{article.title}</h4>
                            <p className="text-gray-600 text-sm">{article.description}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-xs text-gray-500">{article.duration}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Search Documentation</h2>
            <p className="text-xl text-gray-600 mb-8">
              Find exactly what you're looking for in our comprehensive documentation
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">API Reference</span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Tutorials</span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Guides</span>
              <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Examples</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;