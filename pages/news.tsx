import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink
} from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Fusion Platform',
      excerpt: 'Breakthrough platform combines quantum computing with artificial intelligence, creating unprecedented processing capabilities for solving humanity\'s most complex challenges.',
      date: '2025-01-15',
      category: 'Product Launch',
      readTime: '5 min read',
      image: '/images/news/quantum-ai-launch.jpg',
      featured: true,
      slug: 'quantum-ai-fusion-platform-launch'
    },
    {
      title: 'AI Consciousness Evolution Pro: The Future of Emotional Intelligence',
      excerpt: 'Our latest AI platform achieves genuine emotional intelligence and self-awareness, marking a new era in artificial consciousness development.',
      date: '2025-01-10',
      category: 'Technology',
      readTime: '4 min read',
      image: '/images/news/ai-consciousness.jpg',
      featured: false,
      slug: 'ai-consciousness-evolution-pro'
    },
    {
      title: 'Autonomous Business Operations: Transforming Enterprise Management',
      excerpt: 'Discover how our autonomous operations platform is revolutionizing business processes across industries with AI-powered decision making.',
      date: '2025-01-05',
      category: 'Business',
      readTime: '6 min read',
      image: '/images/news/autonomous-business.jpg',
      featured: false,
      slug: 'autonomous-business-operations'
    },
    {
      title: 'Quantum Neural Networks: The Next Evolution in AI',
      excerpt: 'Exploring the convergence of quantum computing and neural networks, and how it\'s reshaping the future of artificial intelligence.',
      date: '2024-12-28',
      category: 'Research',
      readTime: '7 min read',
      image: '/images/news/quantum-neural.jpg',
      featured: false,
      slug: 'quantum-neural-networks-evolution'
    },
    {
      title: 'Zion Tech Group Named Top AI Innovation Company 2024',
      excerpt: 'Recognition of our groundbreaking work in AI consciousness, quantum computing, and autonomous business operations.',
      date: '2024-12-20',
      category: 'Company',
      readTime: '3 min read',
      image: '/images/news/award-2024.jpg',
      featured: false,
      slug: 'top-ai-innovation-company-2024'
    },
    {
      title: 'The Future of IT Asset Management: AI-Powered Solutions',
      excerpt: 'How artificial intelligence is revolutionizing IT infrastructure management and asset optimization for modern enterprises.',
      date: '2024-12-15',
      category: 'Technology',
      readTime: '5 min read',
      image: '/images/news/it-asset-management.jpg',
      featured: false,
      slug: 'future-it-asset-management-ai'
    }
  ];

  const categories = [
    { name: 'All', count: newsArticles.length, active: true },
    { name: 'Product Launch', count: 1, active: false },
    { name: 'Technology', count: 2, active: false },
    { name: 'Business', count: 1, active: false },
    { name: 'Research', count: 1, active: false },
    { name: 'Company', count: 1, active: false }
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
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

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
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}