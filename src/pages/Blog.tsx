import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  TrendingUp,
  Star,
  Eye,
  BookOpen
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  category: string;
  featured: boolean;
  views: number;
  likes: number;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-transformation-2025',
    title: 'AI Transformation in 2025: The Future is Here',
    excerpt: 'Discover how businesses worldwide are experiencing unprecedented transformation through AI-powered solutions that were mere science fiction just a few years ago.',
    content: '',
    author: 'Zion Tech Group AI Research Team',
    publishDate: '2025-01-15',
    readTime: '12 min read',
    tags: ['AI', 'Artificial Intelligence', 'Business Transformation', 'Machine Learning', 'Automation'],
    category: 'Artificial Intelligence',
    featured: true,
    views: 15420,
    likes: 892
  },
  {
    id: 'quantum-computing-business-applications',
    title: 'Quantum Computing: The Next Frontier in Business Innovation',
    excerpt: 'Quantum computing represents one of the most significant technological breakthroughs of our time. Learn how quantum computers are transforming industries.',
    content: '',
    author: 'Zion Tech Group Quantum Research Team',
    publishDate: '2025-01-20',
    readTime: '15 min read',
    tags: ['Quantum Computing', 'Business Innovation', 'Optimization', 'AI', 'Future Technology'],
    category: 'Emerging Technology',
    featured: true,
    views: 12850,
    likes: 756
  },
  {
    id: 'cybersecurity-trends-2025',
    title: 'Cybersecurity Trends That Will Shape 2025',
    excerpt: 'Explore the latest cybersecurity threats and defense strategies that businesses need to implement to protect their digital assets in 2025.',
    content: '',
    author: 'Zion Tech Group Security Team',
    publishDate: '2025-01-10',
    readTime: '8 min read',
    tags: ['Cybersecurity', 'Security', 'Threats', 'Protection', '2025'],
    category: 'Cybersecurity',
    featured: false,
    views: 9850,
    likes: 534
  },
  {
    id: 'cloud-native-architecture',
    title: 'Building Cloud-Native Applications: A Complete Guide',
    excerpt: 'Learn how to design and implement cloud-native applications that scale seamlessly and provide exceptional user experiences.',
    content: '',
    author: 'Zion Tech Group Cloud Team',
    publishDate: '2025-01-05',
    readTime: '10 min read',
    tags: ['Cloud Computing', 'Architecture', 'Scalability', 'Microservices', 'DevOps'],
    category: 'Cloud Computing',
    featured: false,
    views: 11200,
    likes: 623
  },
  {
    id: 'digital-transformation-roadmap',
    title: 'The Ultimate Digital Transformation Roadmap for 2025',
    excerpt: 'A comprehensive guide to planning and executing digital transformation initiatives that drive real business value and competitive advantage.',
    content: '',
    author: 'Zion Tech Group Strategy Team',
    publishDate: '2025-01-01',
    readTime: '14 min read',
    tags: ['Digital Transformation', 'Strategy', 'Business', 'Innovation', 'Roadmap'],
    category: 'Digital Transformation',
    featured: false,
    views: 18750,
    likes: 987
  },
  {
    id: 'iot-edge-computing',
    title: 'IoT and Edge Computing: Revolutionizing Industry 4.0',
    excerpt: 'Discover how the combination of IoT and edge computing is creating new opportunities for smart manufacturing and industrial automation.',
    content: '',
    author: 'Zion Tech Group IoT Team',
    publishDate: '2024-12-28',
    readTime: '11 min read',
    tags: ['IoT', 'Edge Computing', 'Industry 4.0', 'Smart Manufacturing', 'Automation'],
    category: 'IoT & Edge Computing',
    featured: false,
    views: 8750,
    likes: 445
  }
];

const categories = ['All', 'Artificial Intelligence', 'Emerging Technology', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'IoT & Edge Computing'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'popular':
          return b.views - a.views;
        case 'trending':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies. Expert analysis and industry trends from Zion Tech Group."
        keywords="technology blog, AI insights, quantum computing, cybersecurity trends, digital transformation, tech news"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Technology Insights & 
                <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"> Innovation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and the latest technological breakthroughs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-zion-cyan text-slate-900'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="trending">Most Liked</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Star className="w-8 h-8 text-yellow-400 mr-3" />
                  Featured Articles
                </h2>
                <p className="text-gray-300">Handpicked articles showcasing the latest in technology and innovation</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.id}`}>
                      <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-start justify-between mb-4">
                          <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-200">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="px-2 py-1 bg-slate-600/50 text-gray-500 text-xs rounded-full">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-200" />
                        </div>

                        <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-slate-700/50">
                          <div className="flex items-center space-x-1 text-gray-400">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-400">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <BookOpen className="w-8 h-8 text-zion-cyan mr-3" />
                All Articles
              </h2>
              <p className="text-gray-300">Explore our complete collection of technology insights and industry analysis</p>
            </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.id}`}>
                      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-200">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-200" />
                        </div>

                        <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-slate-700/50 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Latest Tech Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get weekly insights on AI, quantum computing, and emerging technologies delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-slate-900 font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-200">
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