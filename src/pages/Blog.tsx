import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag, Share2, BookmarkPlus } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  const categories = [
    'All',
    'Artificial Intelligence',
    'Quantum Computing',
    'Cloud Solutions',
    'Digital Transformation',
    'Cybersecurity',
    'Industry Insights',
    'Technology Trends',
    'Case Studies'
  ];

  const tags = [
    'AI', 'Machine Learning', 'Quantum', 'Cloud', 'Security', 'Innovation',
    'Automation', 'Data Science', 'IoT', 'Blockchain', 'Edge Computing'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Quantum Computing in Enterprise Applications',
      excerpt: 'Exploring how quantum computing is revolutionizing enterprise solutions and what businesses need to know to prepare for the quantum advantage.',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Innovation', 'Enterprise'],
      author: 'Dr. Sarah Chen',
      authorRole: 'Quantum Research Director',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: '/images/blog/quantum-computing.jpg',
      featured: true,
      content: `Quantum computing represents one of the most significant technological breakthroughs of our time...`
    },
    {
      id: 2,
      title: 'AI-Driven Digital Transformation: A Comprehensive Guide',
      excerpt: 'Learn how artificial intelligence is accelerating digital transformation initiatives and best practices for implementation.',
      category: 'Digital Transformation',
      tags: ['AI', 'Digital Transformation', 'Automation'],
      author: 'Michael Rodriguez',
      authorRole: 'AI Solutions Architect',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      image: '/images/blog/ai-transformation.jpg',
      featured: true,
      content: `Digital transformation powered by AI is reshaping industries...`
    },
    {
      id: 3,
      title: 'Securing the Cloud: Advanced Cybersecurity Strategies',
      excerpt: 'Essential cybersecurity measures for protecting cloud infrastructure and data in an increasingly connected world.',
      category: 'Cybersecurity',
      tags: ['Security', 'Cloud', 'Data Protection'],
      author: 'Jennifer Park',
      authorRole: 'Security Consultant',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      image: '/images/blog/cloud-security.jpg',
      featured: false,
      content: `As organizations migrate to cloud platforms, security becomes paramount...`
    },
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'How machine learning algorithms are improving diagnosis accuracy and personalizing treatment plans in healthcare.',
      category: 'Artificial Intelligence',
      tags: ['AI', 'Machine Learning', 'Healthcare'],
      author: 'Dr. David Kim',
      authorRole: 'Healthcare AI Specialist',
      publishDate: '2024-01-08',
      readTime: '10 min read',
      image: '/images/blog/ai-healthcare.jpg',
      featured: false,
      content: `Machine learning is revolutionizing healthcare delivery...`
    },
    {
      id: 5,
      title: 'Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'Understanding the benefits of edge computing and how it complements cloud infrastructure for real-time applications.',
      category: 'Technology Trends',
      tags: ['Edge Computing', 'IoT', 'Real-time'],
      author: 'Alex Thompson',
      authorRole: 'Edge Solutions Engineer',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      image: '/images/blog/edge-computing.jpg',
      featured: false,
      content: `Edge computing is bringing processing power closer to data sources...`
    },
    {
      id: 6,
      title: 'Sustainable Technology: Green IT Initiatives for Modern Businesses',
      excerpt: 'Implementing environmentally conscious technology solutions while maintaining performance and efficiency.',
      category: 'Industry Insights',
      tags: ['Sustainability', 'Green IT', 'Innovation'],
      author: 'Emma Wilson',
      authorRole: 'Sustainability Consultant',
      publishDate: '2024-01-03',
      readTime: '9 min read',
      image: '/images/blog/green-tech.jpg',
      featured: false,
      content: `Sustainable technology practices are becoming essential...`
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, quantum computing, cloud solutions, and technology trends from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, quantum computing, cloud solutions, digital transformation, cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Explore the latest trends in technology, AI, quantum computing, and digital transformation.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 mr-2">Tags:</span>
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                      selectedTag === tag
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-6xl opacity-50">📰</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm font-semibold text-white">{post.author}</div>
                            <div className="text-xs text-gray-400">{post.authorRole}</div>
                          </div>
                        </div>
                        <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-400">{post.author}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <BookmarkPlus className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                        </button>
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or browse all articles.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedTag('');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}