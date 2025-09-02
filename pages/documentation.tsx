import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Book, Code, Database, Shield, Zap, Search, Download, Globe } from 'lucide-react';

const Documentation: NextPage = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions for our services',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      items: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', href: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', href: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', href: '/docs/configuration' },
        { title: 'First Project', description: 'Create your first project', href: '/docs/first-project' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and endpoints',
      icon: <Globe className="w-6 h-6 text-green-600" />,
      items: [
        { title: 'Authentication', description: 'API authentication methods', href: '/docs/api/auth' },
        { title: 'Endpoints', description: 'Complete endpoint reference', href: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Software development kits', href: '/docs/api/sdks' },
        { title: 'Rate Limits', description: 'API rate limiting information', href: '/docs/api/rate-limits' }
      ]
    },
    {
      title: 'Development',
      description: 'Development guides and best practices',
      icon: <Code className="w-6 h-6 text-purple-600" />,
      items: [
        { title: 'Development Setup', description: 'Set up your development environment', href: '/docs/dev/setup' },
        { title: 'Code Examples', description: 'Sample code and examples', href: '/docs/dev/examples' },
        { title: 'Testing', description: 'Testing strategies and tools', href: '/docs/dev/testing' },
        { title: 'Deployment', description: 'Deployment guides and strategies', href: '/docs/dev/deployment' }
      ]
    },
    {
      title: 'Security',
      description: 'Security best practices and guidelines',
      icon: <Shield className="w-6 h-6 text-red-600" />,
      items: [
        { title: 'Security Overview', description: 'Security features and capabilities', href: '/docs/security/overview' },
        { title: 'Authentication', description: 'Authentication and authorization', href: '/docs/security/auth' },
        { title: 'Data Protection', description: 'Data encryption and protection', href: '/docs/security/data' },
        { title: 'Compliance', description: 'Compliance and certifications', href: '/docs/security/compliance' }
      ]
    },
    {
      title: 'Database',
      description: 'Database setup, configuration, and management',
      icon: <Database className="w-6 h-6 text-orange-600" />,
      items: [
        { title: 'Database Setup', description: 'Database installation and configuration', href: '/docs/database/setup' },
        { title: 'Schema Design', description: 'Database schema and design patterns', href: '/docs/database/schema' },
        { title: 'Migrations', description: 'Database migration strategies', href: '/docs/database/migrations' },
        { title: 'Backup & Recovery', description: 'Backup and recovery procedures', href: '/docs/database/backup' }
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: <Book className="w-6 h-6 text-gray-600" />,
      items: [
        { title: 'Common Issues', description: 'Frequently encountered problems', href: '/docs/troubleshooting/common' },
        { title: 'Error Codes', description: 'Error code reference', href: '/docs/troubleshooting/errors' },
        { title: 'Performance', description: 'Performance optimization tips', href: '/docs/troubleshooting/performance' },
        { title: 'Support', description: 'Getting help and support', href: '/docs/troubleshooting/support' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Playground', description: 'Test our APIs interactively', href: '/api-playground', icon: <Code className="w-5 h-5" /> },
    { title: 'Status Page', description: 'Check system status and uptime', href: '/system-status', icon: <Zap className="w-5 h-5" /> },
    { title: 'Changelog', description: 'Latest updates and changes', href: '/changelog', icon: <Book className="w-5 h-5" /> },
    { title: 'Community', description: 'Join our developer community', href: '/community', icon: <Shield className="w-5 h-5" /> }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group's services, APIs, and development tools. Get started quickly with our guides and examples."
      keywords="documentation, API docs, developer guide, technical documentation, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
              <Book className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive guides, API references, and resources to help you build amazing solutions 
              with Zion Tech Group's services and tools.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      {link.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{link.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Documentation Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      {section.icon}
                      <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    </div>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={item.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Help */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the most out of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Download Resources */}
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Download Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Download className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Reference</h3>
                <p className="text-gray-600 mb-4">Download our complete API reference in PDF format</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download PDF
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Download className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SDK Libraries</h3>
                <p className="text-gray-600 mb-4">Get our SDKs for popular programming languages</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Download SDKs
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Download className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Examples</h3>
                <p className="text-gray-600 mb-4">Download sample code and implementation examples</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Download Examples
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Documentation;