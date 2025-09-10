import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: [
      {
        title: "Welcome to Zion Tech Group",
        description: "Learn the basics of our platform and services",
        type: "Guide",
        readTime: "5 min"
      },
      {
        title: "Setting Up Your Account",
        description: "Step-by-step guide to create and configure your account",
        type: "Tutorial",
        readTime: "10 min"
      }
    ]
  },
  {
    title: "Technical Support",
    icon: HelpCircle,
    articles: [
      {
        title: "Common Issues",
        description: "Solutions to frequently encountered problems",
        type: "Troubleshooting",
        readTime: "15 min"
      }
    ]
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const filteredArticles = helpCategories
    .filter(category => selectedCategory === 'all' || category.title === selectedCategory)
    .flatMap(category => category.articles)
    .filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Find answers to your questions and get the support you need"
      keywords="help, support, documentation, FAQ, troubleshooting"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Find answers to your questions and get the support you need to succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories and Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === 'all' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      All Articles
                    </button>
                    {helpCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(category.title)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.title 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center">
                          <category.icon className="w-4 h-4 mr-2" />
                          {category.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Articles List */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {article.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                              {article.type}
                            </span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedArticle(expandedArticle === article.title ? null : article.title)}
                          className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              expandedArticle === article.title ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {expandedArticle === article.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-200"
                          >
                            <p className="text-gray-600">
                              This is a detailed explanation of the article content. 
                              In a real implementation, this would contain the full article text.
                            </p>
                            <div className="mt-4 flex gap-2">
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Read More
                              </button>
                              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                <Download className="w-4 h-4 mr-2 inline" />
                                Download
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Get in touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}