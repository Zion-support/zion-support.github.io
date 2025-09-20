import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Globe, TrendingUp } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/backgrounds/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticNavigation from '../components/layout/UltraAdvancedFuturisticNavigation';
import UltraAdvancedFuturisticFooter from '../components/layout/UltraAdvancedFuturisticFooter';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Achieves Breakthrough in AI Consciousness Research",
      excerpt: "Revolutionary advances in artificial consciousness bring us closer to true AI sentience.",
      content: "Our research team has made significant progress in developing artificial consciousness, bringing us closer to creating truly sentient AI systems that can understand, feel, and create at levels previously thought impossible.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      category: "Research",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Milestone: 1000-Qubit Processor Goes Live",
      excerpt: "Our latest quantum processor represents a quantum leap in computational power and capability.",
      content: "The new 1000-qubit quantum processor represents a major milestone in quantum computing, enabling us to solve problems that would take classical computers thousands of years to complete.",
      author: "Prof. Michael Rodriguez",
      date: "2025-01-12",
      category: "Technology",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 3,
      title: "Space Mining Operations Begin on Asteroid Belt",
      excerpt: "First successful extraction of rare earth minerals from deep space opens new frontiers.",
      content: "Our space mining operations have successfully begun extracting valuable minerals from the asteroid belt, marking a new era in space-based resource acquisition and utilization.",
      author: "Commander Alex Thompson",
      date: "2025-01-10",
      category: "Space Technology",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Biotechnology Breakthrough: Age Reversal Technology Advances",
      excerpt: "New research shows promising results in cellular age reversal and longevity enhancement.",
      content: "Our biotechnology division has made significant advances in age reversal technology, potentially extending healthy human lifespan by decades while maintaining quality of life.",
      author: "Dr. Elena Vasquez",
      date: "2025-01-08",
      category: "Biotechnology",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Global Partnership with Leading Tech Companies Announced",
      excerpt: "Strategic alliances formed to accelerate innovation across multiple technology sectors.",
      content: "We're excited to announce new partnerships with leading technology companies worldwide, creating a collaborative ecosystem to accelerate innovation and bring breakthrough technologies to market faster.",
      author: "CEO John Smith",
      date: "2025-01-05",
      category: "Partnerships",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable Energy Solutions for Mars Colonies",
      excerpt: "Revolutionary energy systems designed for off-world human settlements.",
      content: "Our engineering team has developed cutting-edge sustainable energy solutions specifically designed for Mars colonies, ensuring reliable power generation in the harsh Martian environment.",
      author: "Engineer Maria Santos",
      date: "2025-01-03",
      category: "Sustainability",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = ["All", "Research", "Technology", "Space Technology", "Biotechnology", "Partnerships", "Sustainability"];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>News & Press | Zion Tech Group</title>
        <meta name="description" content="Latest news, research breakthroughs, and press releases from Zion Tech Group" />
        <meta name="keywords" content="news, press, AI research, quantum computing, space technology, biotechnology" />
      </Head>

      <UltraAdvancedFuturisticNavigation />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6">
                <Globe className="w-5 h-5 mr-2" />
                NEWS & PRESS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Latest News & Breakthroughs
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with the latest developments in AI consciousness, quantum computing, space technology, and revolutionary innovations from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-gray-400">
                Our most important breakthroughs and announcements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {newsArticles.filter(article => article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="ml-auto text-sm text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      <span>{article.author}</span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                All Articles
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                      category === "All"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="ml-auto text-xs text-gray-400 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Press Inquiries
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                For press inquiries, media interviews, or additional information, 
                please contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Contact Press Team
                </a>
                <a
                  href="/press-kit"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Download Press Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraAdvancedFuturisticFooter />
    </UltraAdvancedFuturisticBackground>
  );
};

export default NewsPage;