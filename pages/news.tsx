import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink
} from 'lucide-react';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'Zion App Launches Revolutionary AI-Powered Automation Platform',
      excerpt: 'Our latest platform introduces cutting-edge artificial intelligence capabilities that transform how businesses approach automation and workflow optimization.',
      category: 'product',
      date: '2025-01-17',
      author: 'Zion Team',
      readTime: '3 min read',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Partnership Announcement: Zion App Joins Forces with Tech Giants',
      excerpt: 'Strategic collaboration brings together industry leaders to accelerate innovation in cloud-native solutions and enterprise automation.',
      category: 'partnership',
      date: '2025-01-15',
      author: 'Sarah Johnson',
      readTime: '2 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Q4 2024 Results: Record Growth and Customer Success',
      excerpt: 'Zion App reports exceptional quarterly performance with 150% year-over-year growth and expanding customer base across industries.',
      category: 'business',
      date: '2025-01-12',
      author: 'Michael Chen',
      readTime: '4 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'New Data Center Expansion in Asia-Pacific Region',
      excerpt: 'Strategic infrastructure investment enhances performance and reliability for customers in the rapidly growing APAC market.',
      category: 'infrastructure',
      date: '2025-01-10',
      author: 'David Kim',
      readTime: '2 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Security Update: Enhanced Protection Against Emerging Threats',
      excerpt: 'Latest security enhancements provide advanced protection for enterprise customers while maintaining seamless user experience.',
      category: 'security',
      date: '2025-01-08',
      author: 'Lisa Rodriguez',
      readTime: '3 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Customer Spotlight: How Company X Achieved 300% ROI',
      excerpt: 'Real-world case study demonstrates the transformative impact of Zion App\'s automation solutions on business operations.',
      category: 'customer',
      date: '2025-01-05',
      author: 'Alex Thompson',
      readTime: '5 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 7,
      title: 'Developer Community Milestone: 10,000+ Active Contributors',
      excerpt: 'Our open-source ecosystem reaches a significant milestone, fostering innovation and collaboration across the developer community.',
      category: 'community',
      date: '2025-01-03',
      author: 'Zion Team',
      readTime: '2 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 8,
      title: 'Industry Recognition: Zion App Named Top Innovator 2024',
      excerpt: 'Prestigious industry award recognizes our commitment to innovation and excellence in enterprise automation solutions.',
      category: 'awards',
      date: '2024-12-30',
      author: 'Zion Team',
      readTime: '1 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    { id: 'all', label: 'All News', count: newsItems.length },
    { id: 'product', label: 'Product Updates', count: newsItems.filter(item => item.category === 'product').length },
    { id: 'business', label: 'Business', count: newsItems.filter(item => item.category === 'business').length },
    { id: 'partnership', label: 'Partnerships', count: newsItems.filter(item => item.category === 'partnership').length },
    { id: 'infrastructure', label: 'Infrastructure', count: newsItems.filter(item => item.category === 'infrastructure').length },
    { id: 'security', label: 'Security', count: newsItems.filter(item => item.category === 'security').length },
    { id: 'customer', label: 'Customer Stories', count: newsItems.filter(item => item.category === 'customer').length },
    { id: 'community', label: 'Community', count: newsItems.filter(item => item.category === 'community').length },
    { id: 'awards', label: 'Awards', count: newsItems.filter(item => item.category === 'awards').length }
  ];

  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and industry insights from Zion Tech Group. Discover breakthroughs in AI, quantum computing, and technology innovation." />
        <meta name="keywords" content="news, updates, AI news, quantum computing, technology news, company updates, industry insights" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Latest Updates
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                News & Updates
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Stay informed about our latest breakthroughs, product launches, and industry insights. 
                Discover how Zion Tech Group is shaping the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              
              {newsArticles.filter(article => article.featured).map((article, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{article.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{article.excerpt}</p>
                      
                      <Link 
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                          <Star className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-gray-400 text-sm">Featured Article</p>
                      </div>
                      <Link 
                        href={`/news/${featuredItem.id}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

        {/* News Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.filter(article => !article.featured).map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <Link 
                      href={`/news/${item.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest news, product updates, and industry insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-blue-200 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
                <p className="text-gray-600">In-depth articles and insights from our team</p>
              </Link>
              <Link href="/case-studies" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-gray-600">Real-world examples of customer success</p>
              </Link>
              <Link href="/contact" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Get in touch with our team</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;