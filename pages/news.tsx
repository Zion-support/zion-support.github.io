import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  FileText, User, Tag, Zap
} from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Fusion Platform',
      excerpt: 'Breakthrough platform combines quantum computing with artificial intelligence, creating unprecedented processing capabilities for solving humanity\'s most complex challenges.',
      date: '2025-01-15',
      category: 'Product Launch',
      author: 'Zion Tech Team',
      readTime: '5 min read',
      image: '/images/news/quantum-ai-launch.jpg',
      featured: true,
      slug: 'quantum-ai-fusion-platform-launch'
    },
    {
      id: 2,
      title: 'AI Consciousness Evolution Pro: The Future of Emotional Intelligence',
      excerpt: 'Our latest AI platform achieves genuine emotional intelligence and self-awareness, marking a new era in artificial consciousness development.',
      date: '2025-01-10',
      category: 'Technology',
      author: 'Zion Tech Team',
      readTime: '4 min read',
      image: '/images/news/ai-consciousness.jpg',
      featured: false,
      slug: 'ai-consciousness-evolution-pro'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations: Transforming Enterprise Management',
      excerpt: 'Discover how our autonomous operations platform is revolutionizing business processes across industries with AI-powered decision making.',
      date: '2025-01-05',
      category: 'Business',
      author: 'Zion Tech Team',
      readTime: '6 min read',
      image: '/images/news/autonomous-business.jpg',
      featured: false,
      slug: 'autonomous-business-operations'
    }
  ];

  const categories = [
    { name: 'All', count: newsArticles.length, active: true },
    { name: 'Product Launch', count: 1, active: false },
    { name: 'Technology', count: 1, active: false },
    { name: 'Business', count: 1, active: false }
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
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Latest News & Updates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Stay informed about the latest breakthroughs in AI, quantum computing, and cutting-edge technology from Zion Tech Group.
            </motion.p>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-300 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        {article.category}
                      </span>
                      <Link 
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}