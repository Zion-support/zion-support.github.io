import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Enterprise", "Trends", "2025"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What's Next for Business",
      excerpt: "Exploring the latest developments in quantum computing and their potential business applications.",
      author: "Marcus Rodriguez",
      date: "2025-01-12",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Quantum", "Computing", "Innovation", "Technology"]
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "How AI is both creating new security challenges and providing innovative defense mechanisms.",
      author: "Alex Thompson",
      date: "2025-01-10",
      category: "Cybersecurity",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      tags: ["Security", "AI", "Threats", "Defense"]
    },
    {
      id: 4,
      title: "Blockchain Revolution: Beyond Cryptocurrency",
      excerpt: "Exploring blockchain applications in supply chain, healthcare, and government sectors.",
      author: "Dr. Elena Petrova",
      date: "2025-01-08",
      category: "Blockchain",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Blockchain", "Supply Chain", "Healthcare", "Government"]
    },
    {
      id: 5,
      title: "IoT Edge Computing: The Future of Connected Devices",
      excerpt: "How edge computing is transforming IoT deployments and enabling real-time decision making.",
      author: "James Wilson",
      date: "2025-01-05",
      category: "IoT",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      tags: ["IoT", "Edge Computing", "Real-time", "Devices"]
    },
    {
      id: 6,
      title: "Space Technology: Commercial Applications on Earth",
      excerpt: "How space technology innovations are solving problems here on Earth.",
      author: "Dr. Michael Chang",
      date: "2025-01-03",
      category: "Space Tech",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      tags: ["Space", "Technology", "Innovation", "Earth Applications"]
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Quantum Computing", "Cybersecurity", "Blockchain", "IoT", "Space Tech"];
  const popularTags = ["AI", "Innovation", "Technology", "Enterprise", "Security", "Quantum", "Blockchain", "IoT"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"
            >
              Zion Tech Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Insights, trends, and innovations in technology that are shaping the future of business
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === "All" 
                      ? "bg-cyan-500 text-white" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Latest</option>
                <option>Most Popular</option>
                <option>Trending</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-cyan-400 text-4xl font-bold">{post.id}</div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.author}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-4">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Load More Articles
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Stay Updated with Latest Tech Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Get weekly insights on AI, quantum computing, cybersecurity, and emerging technologies
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;