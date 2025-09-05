import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  Star,
  TrendingUp
} from 'lucide-react';
import Layout from '../components/Layout';

const helpCategories = [
  {
    name: 'Getting Started',
    icon: BookOpen,
    articles: [
      { title: 'Quick Start Guide', description: 'Get up and running in minutes', views: '2.5k' },
      { title: 'Account Setup', description: 'Configure your account settings', views: '1.8k' },
      { title: 'First Project', description: 'Create your first project', views: '3.2k' }
    ]
  },
  {
    name: 'API Documentation',
    icon: FileText,
    articles: [
      { title: 'Authentication', description: 'Learn how to authenticate with our API', views: '1.5k' },
      { title: 'Rate Limits', description: 'Understanding API rate limits', views: '1.2k' },
      { title: 'Error Handling', description: 'Common error codes and solutions', views: '980' }
    ]
  },
  {
    name: 'Troubleshooting',
    icon: MessageCircle,
    articles: [
      { title: 'Common Issues', description: 'Solutions to frequently encountered problems', views: '2.1k' },
      { title: 'Performance Issues', description: 'Optimizing your application performance', views: '1.7k' },
      { title: 'Integration Problems', description: 'Fixing integration issues', views: '1.3k' }
    ]
  }
];

const popularArticles = [
  { title: 'Quick Start Guide', description: 'Get started with our platform in minutes', category: 'Getting Started', views: '2.5k' },
  { title: 'API Authentication', description: 'Learn how to authenticate with our API', category: 'API Documentation', views: '1.8k' },
  { title: 'Common Issues', description: 'Solutions to frequently encountered problems', category: 'Troubleshooting', views: '2.1k' },
  { title: 'Performance Optimization', description: 'Optimize your application performance', category: 'Troubleshooting', views: '1.7k' }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? popularArticles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : popularArticles.filter(article => 
        article.category === selectedCategory &&
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         article.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <Layout 
      title="Help Center - Zion Tech Group"
      description="Find answers, documentation, and support resources to help you get the most out of our services. Get help when you need it."
      keywords="help center, support, documentation, FAQ, troubleshooting, guides"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
                Find answers, documentation, and support resources to help you get the most out of our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the information you need organized by topic and category.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.articles.length} articles available
                      </p>
                      <div className="space-y-2">
                        {category.articles.map((article, idx) => (
                          <div key={idx} className="text-sm text-gray-500">
                            {article.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Articles
              </button>
              {helpCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Articles List */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {article.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {article.views} views
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try searching with different keywords or browse our categories.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}