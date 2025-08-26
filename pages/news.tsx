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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
            >
              Latest News & Updates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Stay informed about our latest innovations, breakthroughs, and industry insights in AI, quantum computing, and technology.
            </motion.p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            {newsArticles.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-gray-700 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Star className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm">Featured Article</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white leading-tight hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </span>
                      <Link 
                        href={`/news/${article.slug}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Zion Tech Group
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest news, insights, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
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