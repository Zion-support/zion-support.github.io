import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { BookOpen, Search, Code, Database, Cloud, Shield, Brain, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Documentation: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const documentationSections = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Quick start guides and setup instructions',
      articles: [
        { title: 'Welcome to Zion Tech Group', url: '/docs/getting-started/welcome' },
        { title: 'Account Setup', url: '/docs/getting-started/account-setup' },
        { title: 'First Project', url: '/docs/getting-started/first-project' },
        { title: 'API Keys', url: '/docs/getting-started/api-keys' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'Authentication', url: '/docs/api/authentication' },
        { title: 'Endpoints', url: '/docs/api/endpoints' },
        { title: 'Rate Limits', url: '/docs/api/rate-limits' },
        { title: 'Error Handling', url: '/docs/api/error-handling' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning service guides',
      articles: [
        { title: 'AI Development', url: '/docs/ai/development' },
        { title: 'Model Training', url: '/docs/ai/model-training' },
        { title: 'Deployment', url: '/docs/ai/deployment' },
        { title: 'Best Practices', url: '/docs/ai/best-practices' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      description: 'Cloud infrastructure and deployment guides',
      articles: [
        { title: 'Cloud Setup', url: '/docs/cloud/setup' },
        { title: 'Deployment', url: '/docs/cloud/deployment' },
        { title: 'Scaling', url: '/docs/cloud/scaling' },
        { title: 'Monitoring', url: '/docs/cloud/monitoring' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Security best practices and implementation',
      articles: [
        { title: 'Security Overview', url: '/docs/security/overview' },
        { title: 'Authentication', url: '/docs/security/authentication' },
        { title: 'Data Protection', url: '/docs/security/data-protection' },
        { title: 'Compliance', url: '/docs/security/compliance' }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      description: 'Database setup and management guides',
      articles: [
        { title: 'Database Setup', url: '/docs/database/setup' },
        { title: 'Migrations', url: '/docs/database/migrations' },
        { title: 'Backup & Recovery', url: '/docs/database/backup-recovery' },
        { title: 'Performance', url: '/docs/database/performance' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', url: '/status', icon: ExternalLink },
    { title: 'SDK Downloads', url: '/downloads', icon: ExternalLink },
    { title: 'Community Forum', url: '/community', icon: ExternalLink },
    { title: 'Support Tickets', url: '/support', icon: ExternalLink }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services including API references, guides, and best practices."
      keywords="documentation, API reference, guides, tutorials, technical documentation, developer resources"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Comprehensive guides, API references, and best practices to help you 
              build amazing solutions with our technology services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300 flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <link.icon className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-800">{link.title}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Documentation Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link
                        href={article.url}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 mr-2" />
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Follow our getting started guide to begin building with our technology services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/docs/getting-started/welcome"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Building
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* API Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">API Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">API Services</h3>
                <p className="text-gray-600">All systems operational</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600">99.9% uptime</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Support Services</h3>
                <p className="text-gray-600">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Documentation;