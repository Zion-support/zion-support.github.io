import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Eye,
  MessageCircle,
  Share2,
  BookOpen,
  TrendingUp
} from 'lucide-react';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends for 2025',
      excerpt: 'Explore how artificial intelligence is reshaping enterprise operations and what businesses need to know to stay competitive.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/400/250',
      views: 1250,
      comments: 24,
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: From Theory to Business Applications',
      excerpt: 'Understanding how quantum computing is moving from research labs to real-world business solutions.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'Quantum Technology',
      image: '/api/placeholder/400/250',
      views: 980,
      comments: 18
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of Remote Work',
      excerpt: 'Best practices for securing distributed teams and protecting against evolving cyber threats.',
      author: 'Alex Thompson',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      views: 1540,
      comments: 32
    },
    {
      id: 4,
      title: 'Blockchain Beyond Cryptocurrency: Real-World Use Cases',
      excerpt: 'Discover how blockchain technology is revolutionizing supply chains, healthcare, and more.',
      author: 'Emma Wilson',
      date: '2024-11-28',
      readTime: '10 min read',
      category: 'Blockchain',
      image: '/api/placeholder/400/250',
      views: 875,
      comments: 15
    },
    {
      id: 5,
      title: 'Cloud-Native Architecture: Building for Scale',
      excerpt: 'Learn the principles of cloud-native design and how to build scalable, resilient applications.',
      author: 'David Kim',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250',
      views: 1120,
      comments: 21
    },
    {
      id: 6,
      title: 'The Rise of No-Code/Low-Code Platforms',
      excerpt: 'How citizen developers are transforming software development with no-code solutions.',
      author: 'Lisa Parker',
      date: '2024-11-15',
      readTime: '7 min read',
      category: 'Development',
      image: '/api/placeholder/400/250',
      views: 690,
      comments: 12
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Quantum Technology', 'Cybersecurity', 'Blockchain', 'Cloud Computing', 'Development'];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blog &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies shaping the future of business.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <motion.div
            key={post.id}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Category Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Post Image */}
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm">{post.category}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center text-xs text-gray-400 mb-4">
                  <User className="w-3 h-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      {post.comments}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                  >
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
            <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on technology, AI, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPage;