import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
      author: "Zion Tech Team",
      date: "2025-01-15",
      category: "AI & Technology",
      readTime: "5 min read",
      image: "/images/blog/ai-enterprise-2025.jpg"
    },
    {
      id: 2,
      title: "Micro SaaS Revolution: Building Scalable Solutions for Modern Businesses",
      excerpt: "Explore the growing trend of micro SaaS solutions and how they're transforming business operations.",
      author: "Zion Tech Team",
      date: "2025-01-10",
      category: "Micro SaaS",
      readTime: "7 min read",
      image: "/images/blog/micro-saas-revolution.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "Learn about emerging cybersecurity challenges and how AI-powered solutions are protecting businesses.",
      author: "Zion Tech Team",
      date: "2025-01-05",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "/images/blog/ai-cybersecurity.jpg"
    },
    {
      id: 4,
      title: "Quantum Computing: Breaking Down the Hype and Reality",
      excerpt: "Separate fact from fiction in the world of quantum computing and its practical applications.",
      author: "Zion Tech Team",
      date: "2024-12-28",
      category: "Quantum Computing",
      readTime: "8 min read",
      image: "/images/blog/quantum-computing-reality.jpg"
    },
    {
      id: 5,
      title: "Digital Transformation: A Complete Guide for Enterprise Leaders",
      excerpt: "Navigate the complex landscape of digital transformation with our comprehensive guide.",
      author: "Zion Tech Team",
      date: "2024-12-20",
      category: "Digital Transformation",
      readTime: "10 min read",
      image: "/images/blog/digital-transformation-guide.jpg"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Bringing AI Closer to Data Sources",
      excerpt: "Understand how edge computing is revolutionizing AI deployment and data processing.",
      author: "Zion Tech Team",
      date: "2024-12-15",
      category: "Edge Computing",
      readTime: "6 min read",
      image: "/images/blog/edge-computing-ai.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-50 via-white to-zion-50 dark:from-zion-slate-900 dark:via-zion-slate-800 dark:to-zion-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-zion-slate-800 border-b border-zion-slate-200 dark:border-zion-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-zion-slate-600 dark:text-zion-slate-400 hover:text-zion-500 dark:hover:text-zion-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="h-6 w-px bg-zion-slate-300 dark:bg-zion-slate-600" />
            <h1 className="text-3xl font-bold text-zion-slate-900 dark:text-white">
              Zion Tech Blog
            </h1>
          </div>
          <p className="mt-2 text-lg text-zion-slate-600 dark:text-zion-slate-400">
            Insights, trends, and expert analysis on AI, technology, and digital transformation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-zion-slate-900 dark:text-white mb-8">
              Featured Article
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-zion-slate-800 rounded-2xl shadow-xl border border-zion-slate-200 dark:border-zion-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-zion-400 to-zion-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Calendar className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-medium">Featured Image</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-zion-100 dark:bg-zion-700 text-zion-700 dark:text-zion-300 text-sm font-medium rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-zion-slate-500 dark:text-zion-slate-400 text-sm">
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-zion-slate-900 dark:text-white mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-zion-slate-600 dark:text-zion-slate-400 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-500 dark:text-zion-slate-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-zion-500 hover:bg-zion-600 text-white rounded-lg transition-colors flex items-center space-x-2">
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-zion-slate-900 dark:text-white mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-zion-slate-800 rounded-xl shadow-lg border border-zion-slate-200 dark:border-zion-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-zion-300 to-zion-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Tag className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-medium">Blog Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-1 bg-zion-100 dark:bg-zion-700 text-zion-700 dark:text-zion-300 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-zion-slate-500 dark:text-zion-slate-400 text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zion-slate-900 dark:text-white mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-600 dark:text-zion-slate-400 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-zion-slate-500 dark:text-zion-slate-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-zion-500 hover:bg-zion-600 text-white rounded-lg transition-colors text-sm flex items-center space-x-2">
                      <span>Read</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-zion-500 to-zion-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-zion-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles, industry insights, and technology trends delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-zion-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zion-500"
            />
            <button className="px-6 py-3 bg-white text-zion-600 font-semibold rounded-lg hover:bg-zion-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;