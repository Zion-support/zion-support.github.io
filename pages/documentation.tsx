import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Book, Code, Database, Cloud, Shield, Search, Download, Settings } from 'lucide-react';
import Link from 'next/link';

const Documentation: NextPage = () => {
  const docCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics and set up your development environment',
      articles: [
        'Quick Start Guide',
        'Installation & Setup',
        'Configuration',
        'First Steps'
      ]
    },
    {
      icon: Code,
      title: 'Development Guides',
      description: 'Comprehensive guides for developers',
      articles: [
        'API Integration',
        'SDK Documentation',
        'Code Examples',
        'Best Practices'
      ]
    },
    {
      icon: Settings,
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      articles: [
        'Authentication',
        'Endpoints',
        'Rate Limits',
        'Error Codes'
      ]
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Working with data and databases',
      articles: [
        'Database Schema',
        'Data Models',
        'Migrations',
        'Backup & Recovery'
      ]
    },
    {
      icon: Cloud,
      title: 'Deployment',
      description: 'Deploying and managing your applications',
      articles: [
        'Cloud Deployment',
        'Container Orchestration',
        'Monitoring',
        'Scaling'
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security best practices and guidelines',
      articles: [
        'Authentication',
        'Authorization',
        'Data Protection',
        'Compliance'
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', href: '/docs/api', description: 'Complete API documentation' },
    { title: 'SDK Downloads', href: '/docs/sdk', description: 'Download our SDKs' },
    { title: 'Code Examples', href: '/docs/examples', description: 'Sample code and tutorials' },
    { title: 'Changelog', href: '/docs/changelog', description: 'Latest updates and changes' },
    { title: 'Migration Guide', href: '/docs/migration', description: 'Upgrade your integration' },
    { title: 'Troubleshooting', href: '/docs/troubleshooting', description: 'Common issues and solutions' }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services, APIs, and development tools. Get started with our detailed guides and references."
      keywords="documentation, API docs, developer guides, technical documentation, SDK, integration guides"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Documentation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive guides, API references, and resources to help you build amazing solutions with our platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse Documentation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the information you need organized by topic and skill level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={category.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <category.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link href="#" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                        <span>{article}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most viewed and helpful documentation articles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Getting Started with Our API</h3>
              <p className="text-gray-600 mb-4">
                Learn how to authenticate and make your first API call in just a few minutes.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read Article →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentication Best Practices</h3>
              <p className="text-gray-600 mb-4">
                Secure your application with proper authentication and authorization patterns.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read Article →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Error Handling Guide</h3>
              <p className="text-gray-600 mb-4">
                Understand our error codes and implement proper error handling in your application.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read Article →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rate Limiting</h3>
              <p className="text-gray-600 mb-4">
                Learn about our rate limits and how to handle them gracefully in your application.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Download Resources</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get our SDKs, sample code, and other resources to accelerate your development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">SDKs</h3>
              <p className="text-gray-600 mb-4">Download our official SDKs for popular programming languages.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Download SDKs
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Code className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Code</h3>
              <p className="text-gray-600 mb-4">Get started quickly with our sample code and examples.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                View Examples
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Book className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">PDF Guides</h3>
              <p className="text-gray-600 mb-4">Download comprehensive PDF guides for offline reference.</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Download PDFs
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Documentation;