import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming enterprise operations and what to expect in the coming year.",
      author: "Zion Tech Team",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Enterprise", "Trends", "2025"]
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Quantum Computing",
      excerpt: "How quantum computing is reshaping cybersecurity and what organizations need to prepare for.",
      author: "Security Team",
      date: "2025-01-12",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      tags: ["Cybersecurity", "Quantum Computing", "Security"]
    },
    {
      id: 3,
      title: "Cloud-Native Architecture: Best Practices for 2025",
      excerpt: "Essential strategies and patterns for building scalable, resilient cloud-native applications.",
      author: "Cloud Team",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Cloud & DevOps",
      image: "/api/placeholder/400/250",
      tags: ["Cloud", "DevOps", "Architecture", "Best Practices"]
    },
    {
      id: 4,
      title: "Digital Transformation Success Stories: Real-World Examples",
      excerpt: "Learn from organizations that have successfully navigated their digital transformation journey.",
      author: "Digital Team",
      date: "2025-01-08",
      readTime: "8 min read",
      category: "Digital Transformation",
      image: "/api/placeholder/400/250",
      tags: ["Digital Transformation", "Success Stories", "Case Studies"]
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: IoT and Beyond",
      excerpt: "Exploring how edge computing is revolutionizing IoT deployments and real-time data processing.",
      author: "IoT Team",
      date: "2025-01-05",
      readTime: "4 min read",
      category: "IoT & Edge Computing",
      image: "/api/placeholder/400/250",
      tags: ["IoT", "Edge Computing", "Real-time", "Data Processing"]
    },
    {
      id: 6,
      title: "Blockchain in Enterprise: Beyond Cryptocurrency",
      excerpt: "Practical applications of blockchain technology in enterprise environments and supply chain management.",
      author: "Blockchain Team",
      date: "2025-01-03",
      readTime: "6 min read",
      category: "Blockchain",
      image: "/api/placeholder/400/250",
      tags: ["Blockchain", "Enterprise", "Supply Chain", "Applications"]
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Digital Transformation",
    "IoT & Edge Computing",
    "Blockchain",
    "Data Analytics",
    "Quantum Computing"
  ];

  const popularTags = [
    "AI", "Cloud", "Security", "DevOps", "Digital Transformation",
    "IoT", "Blockchain", "Data", "Quantum", "Enterprise"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Zion Tech
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Blog
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Insights, trends, and expert analysis on the latest technology developments
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
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Filter by:</span>
                </div>
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      category === "All"
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3">
                        <div className="h-48 lg:h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                          <div className="text-cyan-400 text-sm">Featured Image</div>
                        </div>
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        page === 1
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Popular Tags */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Tag className="w-5 h-5 text-cyan-400 mr-2" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Stay Updated</h3>
                <p className="text-gray-300 mb-4">
                  Get the latest insights delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  />
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;