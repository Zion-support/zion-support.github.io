import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { BookOpen, Code, Database, Cloud, Shield, Zap, Search, Download, ExternalLink } from 'lucide-react';
=======
import { Book, Code, Database, Cloud, Shield, Search, Download, Settings } from 'lucide-react';
>>>>>>> main
import Link from 'next/link';
import { motion } from 'framer-motion';

const Documentation: NextPage = () => {
  const docCategories = [
    {
<<<<<<< HEAD
      icon: Code,
      title: 'API Documentation',
      description: 'Complete API reference with endpoints, parameters, and examples',
      articles: 25,
      color: 'from-blue-500 to-blue-600',
      href: '/api'
    },
    {
      icon: Database,
      title: 'Database Guide',
      description: 'Database setup, configuration, and optimization guides',
      articles: 18,
      color: 'from-green-500 to-green-600',
      href: '/docs/database'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud deployment, scaling, and management documentation',
      articles: 22,
      color: 'from-purple-500 to-purple-600',
      href: '/docs/cloud'
    },
    {
      icon: Shield,
      title: 'Security Guide',
      description: 'Security best practices, authentication, and authorization',
      articles: 15,
      color: 'from-red-500 to-red-600',
      href: '/docs/security'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Performance optimization and monitoring guides',
      articles: 12,
      color: 'from-yellow-500 to-yellow-600',
      href: '/docs/performance'
    },
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      articles: 20,
      color: 'from-indigo-500 to-indigo-600',
      href: '/docs/getting-started'
    }
  ];

  const quickStartGuides = [
    {
      title: 'Quick Start with AI Services',
      description: 'Get up and running with our AI services in under 10 minutes',
      time: '10 min',
      difficulty: 'Beginner',
      href: '/docs/ai-quick-start'
    },
    {
      title: 'Setting Up Cloud Infrastructure',
      description: 'Deploy your first cloud infrastructure with our step-by-step guide',
      time: '30 min',
      difficulty: 'Intermediate',
      href: '/docs/cloud-setup'
    },
    {
      title: 'API Integration Guide',
      description: 'Learn how to integrate our APIs into your applications',
      time: '20 min',
      difficulty: 'Beginner',
      href: '/docs/api-integration'
    },
    {
      title: 'Security Configuration',
      description: 'Configure security settings and best practices',
      time: '45 min',
      difficulty: 'Advanced',
      href: '/docs/security-config'
    }
  ];

  const popularArticles = [
    {
      title: 'Authentication and Authorization',
      description: 'Learn how to implement secure authentication in your applications',
      category: 'Security',
      views: 1250,
      href: '/docs/auth'
    },
    {
      title: 'Database Optimization Techniques',
      description: 'Best practices for optimizing database performance',
      category: 'Database',
      views: 980,
      href: '/docs/db-optimization'
    },
    {
      title: 'API Rate Limiting',
      description: 'Understanding and implementing API rate limiting',
      category: 'API',
      views: 750,
      href: '/docs/rate-limiting'
    },
    {
      title: 'Error Handling Best Practices',
      description: 'Comprehensive guide to error handling and logging',
      category: 'Development',
      views: 650,
      href: '/docs/error-handling'
    }
=======
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
>>>>>>> main
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
<<<<<<< HEAD
      description="Comprehensive documentation for Zion Tech Group services, APIs, and solutions. Find guides, tutorials, and technical references."
      keywords="documentation, API docs, technical guides, tutorials, developer resources, technical reference"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Documentation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive guides, API references, and technical documentation 
            to help you build amazing solutions with our technology.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
=======
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
>>>>>>> main
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
<<<<<<< HEAD
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Documentation Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive documentation organized by topic and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{category.title}</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </div>
                </Link>
              </motion.div>
=======
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
>>>>>>> main
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Quick Start Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Quick Start Guides</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get up and running quickly with our step-by-step quick start guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={guide.href} className="block">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {guide.time}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
=======
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
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Popular Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most viewed and helpful documentation articles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={article.href} className="block">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.views} views</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Documentation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Download Complete Documentation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the complete documentation package for offline reference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download ePub
              </button>
            </div>
          </motion.div>
        </div>
      </section>
=======
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
>>>>>>> main
    </MainLayout>
  );
};

export default Documentation;