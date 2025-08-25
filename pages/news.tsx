import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, Calendar, User, Tag, ArrowRight, 
  TrendingUp, Star, Zap, Brain, Atom, Shield
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
    excerpt: 'We are excited to announce the launch of our groundbreaking AI Consciousness Evolution Pro platform, marking a new era in artificial intelligence development.',
    category: 'AI & Technology',
    author: 'Zion Tech Team',
    date: '2025-01-15',
    readTime: '5 min read',
    featured: true,
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'Quantum Computing Breakthrough: New Security Standards',
    excerpt: 'Our quantum internet security platform has achieved unprecedented levels of encryption, setting new industry standards for data protection.',
    category: 'Quantum Computing',
    author: 'Dr. Sarah Chen',
    date: '2025-01-12',
    readTime: '7 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'Enterprise IT Solutions: Zero Trust Security Implementation',
    excerpt: 'Learn how our zero trust security platform is helping Fortune 500 companies protect their digital assets in an increasingly complex threat landscape.',
    category: 'Enterprise Security',
    author: 'Michael Rodriguez',
    date: '2025-01-10',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: 'Micro SAAS Revolution: AI-Powered Business Automation',
    excerpt: 'Discover how our micro SAAS solutions are transforming small and medium businesses through intelligent automation and AI-driven insights.',
    category: 'Business Solutions',
    author: 'Lisa Thompson',
    date: '2025-01-08',
    readTime: '4 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 5,
    title: 'Space Mining Platform: The Future of Resource Extraction',
    excerpt: 'Our space mining platform represents the next frontier in autonomous resource extraction, combining quantum computing with advanced robotics.',
    category: 'Space Technology',
    author: 'Dr. James Wilson',
    date: '2025-01-05',
    readTime: '8 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 6,
    title: 'AI Ethics & Governance: Building Responsible AI Systems',
    excerpt: 'Explore our comprehensive framework for developing ethical AI systems that prioritize human values and societal well-being.',
    category: 'AI Ethics',
    author: 'Dr. Emily Zhang',
    date: '2025-01-03',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  }
];

const categories = [
  { name: 'All News', count: 6, active: true },
  { name: 'AI & Technology', count: 2, active: false },
  { name: 'Quantum Computing', count: 1, active: false },
  { name: 'Enterprise Security', count: 1, active: false },
  { name: 'Business Solutions', count: 1, active: false },
  { name: 'Space Technology', count: 1, active: false }
];

export default function News() {
  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group. AI breakthroughs, quantum computing advances, and technology innovations." />
        <meta name="keywords" content="news, updates, AI technology, quantum computing, enterprise IT, space technology" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <FileText className="w-12 h-12 text-blue-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  News & Updates
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Stay updated with the latest news, announcements, and insights from Zion Tech Group. 
                Discover breakthroughs in AI, quantum computing, and emerging technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
                >
                  Subscribe to Updates
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest News & Insights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay informed about the latest developments in technology and innovation
              </p>
            </motion.div>

            {/* Featured Article */}
            {newsArticles.filter(article => article.featured).map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                          {article.category}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-24 h-24 text-blue-400/50 mx-auto mb-4" />
                          <p className="text-blue-400/50">Featured Article</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      category.active
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105">
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