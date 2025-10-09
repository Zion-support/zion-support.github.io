import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Book, Code, FileText, Download, ExternalLink, Search } from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: Book,
      color: 'text-blue-400',
      items: [
        { name: 'Installation Guide', href: '/docs/installation', status: 'Available' },
        { name: 'Quick Start Tutorial', href: '/docs/quick-start', status: 'Available' },
        { name: 'Configuration', href: '/docs/configuration', status: 'Available' },
        { name: 'First Project', href: '/docs/first-project', status: 'Available' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      icon: Code,
      color: 'text-green-400',
      items: [
        { name: 'Authentication', href: '/docs/api/auth', status: 'Available' },
        { name: 'AI Services API', href: '/docs/api/ai-services', status: 'Available' },
        { name: 'Data Analytics API', href: '/docs/api/analytics', status: 'Available' },
        { name: 'Webhooks', href: '/docs/api/webhooks', status: 'Available' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for various languages',
      icon: FileText,
      color: 'text-purple-400',
      items: [
        { name: 'Python SDK', href: '/docs/sdk/python', status: 'Available' },
        { name: 'JavaScript SDK', href: '/docs/sdk/javascript', status: 'Available' },
        { name: 'Java SDK', href: '/docs/sdk/java', status: 'Coming Soon' },
        { name: 'Go SDK', href: '/docs/sdk/go', status: 'Coming Soon' }
      ]
    },
    {
      title: 'Guides & Tutorials',
      description: 'Step-by-step guides and best practices',
      icon: Book,
      color: 'text-orange-400',
      items: [
        { name: 'AI Model Training', href: '/docs/guides/model-training', status: 'Available' },
        { name: 'Data Preprocessing', href: '/docs/guides/data-prep', status: 'Available' },
        { name: 'Deployment Guide', href: '/docs/guides/deployment', status: 'Available' },
        { name: 'Performance Optimization', href: '/docs/guides/optimization', status: 'Available' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'API Status', href: '/api/status', icon: ExternalLink },
    { name: 'Changelog', href: '/docs/changelog', icon: FileText },
    { name: 'Migration Guide', href: '/docs/migration', icon: Download },
    { name: 'Support', href: '/contact', icon: ExternalLink }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, API references, and tutorials to help you build amazing AI-powered applications
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="cyber-card p-4 text-center hover:bg-gray-800 transition-colors group"
                >
                  <link.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:text-cyan-300" />
                  <span className="text-gray-300 text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {documentationSections.map((section, index) => (
              <div key={index} className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <section.icon className={`w-8 h-8 ${section.color} mr-4`} />
                  <div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-gray-300 group-hover:text-white">{item.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Available' 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-yellow-900 text-yellow-300'
                      }`}>
                        {item.status}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Popular Topics */}
          <div className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Popular Topics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Authentication</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Learn how to authenticate with our APIs using API keys, OAuth, and JWT tokens.
                </p>
                <a href="/docs/api/auth" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  Read More →
                </a>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">AI Model Training</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Complete guide to training custom AI models using our platform and tools.
                </p>
                <a href="/docs/guides/model-training" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  Read More →
                </a>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Deployment</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Deploy your AI models to production with our scalable infrastructure.
                </p>
                <a href="/docs/guides/deployment" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  Read More →
                </a>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Data Processing</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Process and prepare your data for AI model training and inference.
                </p>
                <a href="/docs/guides/data-prep" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  Read More →
                </a>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Error Handling</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Best practices for handling errors and exceptions in your applications.
                </p>
                <a href="/docs/guides/error-handling" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  Read More →
                </a>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Rate Limits</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Understand our rate limiting policies and how to handle them gracefully.
                </p>
                <a href="/docs/api/rate-limits" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Need Help?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the most out of our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
