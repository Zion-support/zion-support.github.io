import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, ExternalLink, Search } from 'lucide-react';
import Layout from '../components/Layout';

const newsArticles = [
  {
    id: 1,
    title: "Zion Tech Group Launches Revolutionary AI Platform",
    excerpt: "Our new AI platform combines machine learning and natural language processing to deliver unprecedented business insights.",
    content: "Zion Tech Group has announced the launch of its revolutionary AI platform that combines advanced machine learning algorithms with natural language processing capabilities. This platform is designed to help businesses of all sizes leverage artificial intelligence to gain unprecedented insights into their operations, customer behavior, and market trends.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Technology",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "New Micro SAAS Solutions Now Available",
    excerpt: "We've expanded our micro SAAS portfolio with 20+ new solutions designed for modern businesses.",
    content: "Zion Tech Group has expanded its micro SAAS portfolio with over 20 new solutions designed specifically for modern businesses. These solutions cover everything from project management and customer relationship management to advanced analytics and automation tools.",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Product Updates",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Learn about the latest cybersecurity trends and best practices to protect your business in 2024.",
    content: "As we enter 2024, cybersecurity remains a top priority for businesses worldwide. This article explores the latest cybersecurity trends, emerging threats, and best practices that organizations should implement to protect their digital assets and maintain customer trust.",
    author: "David Rodriguez",
    date: "2024-01-05",
    category: "Security",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 4,
    title: "Cloud Migration Success Stories",
    excerpt: "Discover how our clients have successfully migrated to the cloud and transformed their operations.",
    content: "Cloud migration has become a critical component of digital transformation for businesses across all industries. This article showcases several success stories from our clients who have successfully migrated their operations to the cloud, highlighting the benefits they've achieved and the challenges they've overcome.",
    author: "Emily Watson",
    date: "2024-01-01",
    category: "Case Studies",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 5,
    title: "The Future of IT Services",
    excerpt: "Exploring emerging trends and technologies that will shape the future of IT services.",
    content: "The IT services industry is constantly evolving, driven by technological advancements and changing business needs. This article explores the emerging trends and technologies that are expected to shape the future of IT services, including artificial intelligence, edge computing, and quantum computing.",
    author: "Alex Thompson",
    date: "2023-12-28",
    category: "Industry Insights",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 6,
    title: "Digital Transformation: A Complete Guide",
    excerpt: "A comprehensive guide to digital transformation and how it can benefit your business.",
    content: "Digital transformation is more than just adopting new technologies; it's about fundamentally changing how your business operates and delivers value to customers. This comprehensive guide covers everything you need to know about digital transformation, from planning and implementation to measuring success.",
    author: "Lisa Park",
    date: "2023-12-20",
    category: "Guides",
    image: "/api/placeholder/600/400",
    featured: false
  }
];

const categories = [
  'All',
  'AI & Technology',
  'Product Updates',
  'Security',
  'Case Studies',
  'Industry Insights',
  'Guides'
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <Layout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, insights, and updates from Zion Tech Group."
      keywords="news, updates, technology, AI, cybersecurity, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updates</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest news, insights, and updates from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Articles
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our most important and impactful news articles and updates.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our complete collection of news articles, insights, and updates.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest news, insights, and updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Subscribe Now
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}