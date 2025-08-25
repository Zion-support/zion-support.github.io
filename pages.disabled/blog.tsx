import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  Search, Filter, Tag
} from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Evolution of AI Consciousness: From Logic to Emotion',
      excerpt: 'Exploring the groundbreaking journey from rule-based AI systems to genuinely conscious artificial intelligence with emotional intelligence and self-awareness.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-20',
      category: 'AI & Consciousness',
      readTime: '8 min read',
      tags: ['AI Consciousness', 'Emotional Intelligence', 'Machine Learning'],
      featured: true,
      slug: 'evolution-ai-consciousness-logic-emotion'
    },
    {
      title: 'Quantum Computing: Breaking the Classical Barrier',
      excerpt: 'How quantum computing is revolutionizing problem-solving by leveraging quantum mechanics to process information in ways impossible for classical computers.',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-18',
      category: 'Quantum Technology',
      readTime: '6 min read',
      tags: ['Quantum Computing', 'Quantum Mechanics', 'Computational Power'],
      featured: false,
      slug: 'quantum-computing-breaking-classical-barrier'
    },
    {
      title: 'Autonomous Business Operations: The Future of Enterprise',
      excerpt: 'Discover how AI-powered autonomous systems are transforming business operations, from decision-making to process optimization.',
      author: 'Alexandra Thompson',
      date: '2025-01-15',
      category: 'Business Automation',
      readTime: '7 min read',
      tags: ['Business Automation', 'AI Operations', 'Enterprise Technology'],
      featured: false,
      slug: 'autonomous-business-operations-future-enterprise'
    },
    {
      title: 'Neural Networks Meet Quantum Computing: A New Paradigm',
      excerpt: 'The convergence of neural networks and quantum computing is creating unprecedented AI capabilities that could solve humanity\'s most complex challenges.',
      author: 'Dr. James Wilson',
      date: '2025-01-12',
      category: 'Quantum AI',
      readTime: '9 min read',
      tags: ['Quantum AI', 'Neural Networks', 'Hybrid Computing'],
      featured: false,
      slug: 'neural-networks-quantum-computing-new-paradigm'
    },
    {
      title: 'AI-Powered Cybersecurity: Defending Against Tomorrow\'s Threats',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity by providing real-time threat detection and automated response capabilities.',
      author: 'Maria Santos',
      date: '2025-01-10',
      category: 'Cybersecurity',
      readTime: '5 min read',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection'],
      featured: false,
      slug: 'ai-powered-cybersecurity-defending-tomorrow-threats'
    },
    {
      title: 'The Future of IT Asset Management: AI-Driven Optimization',
      excerpt: 'Exploring how AI is transforming IT infrastructure management through intelligent asset tracking, predictive maintenance, and automated optimization.',
      author: 'David Kim',
      date: '2025-01-08',
      category: 'IT Management',
      readTime: '6 min read',
      tags: ['IT Management', 'Asset Management', 'AI Optimization'],
      featured: false,
      slug: 'future-it-asset-management-ai-driven-optimization'
    },
    {
      title: 'Ethical AI: Balancing Innovation with Responsibility',
      excerpt: 'The critical importance of ethical considerations in AI development and how to ensure responsible innovation in artificial intelligence.',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      category: 'AI Ethics',
      readTime: '7 min read',
      tags: ['AI Ethics', 'Responsible AI', 'Ethical Development'],
      featured: false,
      slug: 'ethical-ai-balancing-innovation-responsibility'
    },
    {
      title: 'Quantum Internet: The Next Generation of Secure Communication',
      excerpt: 'How quantum internet technology is enabling unhackable communication and revolutionizing data security across the globe.',
      author: 'Dr. Robert Chen',
      date: '2025-01-03',
      category: 'Quantum Technology',
      readTime: '8 min read',
      tags: ['Quantum Internet', 'Secure Communication', 'Data Security'],
      featured: false,
      slug: 'quantum-internet-next-generation-secure-communication'
    }
  ];

  const categories = [
    { name: 'All Posts', count: blogPosts.length, active: true },
    { name: 'AI & Consciousness', count: 1, active: false },
    { name: 'Quantum Technology', count: 2, active: false },
    { name: 'Business Automation', count: 1, active: false },
    { name: 'Quantum AI', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'IT Management', count: 1, active: false },
    { name: 'AI Ethics', count: 1, active: false }
  ];

  const popularTags = [
    'AI Consciousness', 'Quantum Computing', 'Machine Learning', 'Business Automation',
    'Cybersecurity', 'IT Management', 'Neural Networks', 'Ethical AI'
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay informed with the latest insights on AI, quantum computing, and technology innovation from Zion Tech Group's expert team." />
        <meta name="keywords" content="blog, AI blog, quantum computing blog, technology insights, industry analysis, AI consciousness, quantum technology" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Industry Insights
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
                Blog & Insights
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Stay informed with the latest insights on AI, quantum computing, and technology innovation 
                from our expert team of researchers and industry professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      category.active
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex items-center space-x-6 mb-6 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
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

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
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

        {/* Popular Tags */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Popular Topics</h2>
              
              <div className="flex flex-wrap justify-center gap-3">
                {popularTags.map((tag, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
                  >
                    {tag}
                  </motion.button>
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
                Subscribe to our newsletter for the latest blog posts, industry insights, 
                and technology updates delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
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