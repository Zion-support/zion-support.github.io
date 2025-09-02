import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Search, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Documentation: NextPage = () => {
  const docCategories = [
    {
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
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
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
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
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
            ))}
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
    </MainLayout>
  );
};

export default Documentation;