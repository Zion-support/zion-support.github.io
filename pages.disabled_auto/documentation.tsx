import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, Book, Code, Settings, Database, Shield, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Documentation: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      description: 'Learn the basics and set up your first project',
      articles: [
        { title: 'Quick Start Guide', href: '/docs/quick-start', description: 'Get up and running in minutes' },
        { title: 'Installation Guide', href: '/docs/installation', description: 'Step-by-step installation instructions' },
        { title: 'Configuration', href: '/docs/configuration', description: 'Configure your environment' },
        { title: 'First Project', href: '/docs/first-project', description: 'Create your first project' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'Authentication', href: '/docs/api/auth', description: 'API authentication methods' },
        { title: 'Endpoints', href: '/docs/api/endpoints', description: 'All available API endpoints' },
        { title: 'Rate Limits', href: '/docs/api/rate-limits', description: 'API rate limiting information' },
        { title: 'Error Codes', href: '/docs/api/errors', description: 'Common error codes and solutions' }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Settings,
      description: 'Connect with third-party services and tools',
      articles: [
        { title: 'Webhook Setup', href: '/docs/integrations/webhooks', description: 'Configure webhooks for real-time updates' },
        { title: 'Database Integration', href: '/docs/integrations/database', description: 'Connect to various databases' },
        { title: 'Cloud Services', href: '/docs/integrations/cloud', description: 'Integrate with cloud platforms' },
        { title: 'Third-party APIs', href: '/docs/integrations/apis', description: 'Connect to external APIs' }
      ]
    },
    {
      id: 'data-management',
      title: 'Data Management',
      icon: Database,
      description: 'Handle data storage, processing, and analytics',
      articles: [
        { title: 'Data Models', href: '/docs/data/models', description: 'Understanding data structures' },
        { title: 'Data Import/Export', href: '/docs/data/import-export', description: 'Moving data in and out' },
        { title: 'Data Processing', href: '/docs/data/processing', description: 'Transform and analyze data' },
        { title: 'Backup & Recovery', href: '/docs/data/backup', description: 'Protect your data' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      description: 'Security best practices and compliance',
      articles: [
        { title: 'Security Overview', href: '/docs/security/overview', description: 'Security features and measures' },
        { title: 'Access Control', href: '/docs/security/access', description: 'Manage user permissions' },
        { title: 'Data Encryption', href: '/docs/security/encryption', description: 'Encrypt sensitive data' },
        { title: 'Compliance', href: '/docs/security/compliance', description: 'Meet regulatory requirements' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', href: '/status', description: 'Check system status' },
    { title: 'Release Notes', href: '/docs/releases', description: 'Latest updates and changes' },
    { title: 'Community Forum', href: '/community', description: 'Get help from the community' },
    { title: 'Support Tickets', href: '/support', description: 'Submit a support request' }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services. Find guides, API references, tutorials, and best practices."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive guides, API references, and tutorials to help you get the most out of our services.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Sections</h2>
            <p className="text-gray-600">Browse our comprehensive documentation organized by topic</p>
          </div>

          <div className="space-y-6">
            {documentationSections.map((section) => {
              const IconComponent = section.icon;
              const isExpanded = expandedSection === section.id;
              
              return (
                <div key={section.id} className="bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  >
                    <div className="flex items-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-4">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                        <p className="text-gray-600">{section.description}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.articles.map((article, articleIndex) => (
                          <Link
                            key={articleIndex}
                            href={article.href}
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                            <p className="text-sm text-gray-600">{article.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New to Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our getting started guide to learn the fundamentals and set up your first project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Quick Start Guide</h3>
                  <p className="text-gray-600">Get up and running in minutes</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  This guide will walk you through the essential steps to get started with Zion Tech Group services. 
                  You'll learn how to set up your account, configure your environment, and create your first project.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sign Up</h4>
                    <p className="text-sm text-gray-600">Create your account and verify your email</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Configure</h4>
                    <p className="text-sm text-gray-600">Set up your project settings and preferences</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deploy</h4>
                    <p className="text-sm text-gray-600">Launch your first project and start building</p>
                  </div>
                </div>
                
                <Link
                  href="/docs/quick-start"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start the Guide
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need More Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/help"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Visit Help Center
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Documentation;