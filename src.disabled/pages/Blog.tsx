import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag, Share2, BookmarkPlus } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for the future of work.",
      content: "Artificial intelligence is transforming the way businesses operate...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Automation", "Business"],
      image: "/images/blog/ai-business.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential cybersecurity strategies to protect your organization from evolving digital threats.",
      content: "As cyber threats become more sophisticated...",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Cybersecurity",
      tags: ["Security", "Best Practices", "2024"],
      image: "/images/blog/cybersecurity.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies for Enterprise",
      excerpt: "A comprehensive guide to successfully migrating your enterprise infrastructure to the cloud.",
      content: "Cloud migration is a critical step for modern enterprises...",
      author: "Alex Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "Enterprise"],
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Quantum Computing: The Next Frontier",
      excerpt: "Understanding the potential of quantum computing and its implications for various industries.",
      content: "Quantum computing represents a paradigm shift...",
      author: "Dr. Emma Wilson",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Quantum Computing",
      tags: ["Quantum", "Computing", "Innovation"],
      image: "/images/blog/quantum-computing.jpg",
      featured: true

    }
  ];

  const categories = ["all", "AI & Machine Learning", "Cybersecurity", "Cloud Computing", "Quantum Computing"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, trends, and expert analysis on the latest in technology and innovation
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />

          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800">
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-white/70 text-sm">Featured</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <BookmarkPlus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            {selectedCategory === 'all' ? 'All Articles' : selectedCategory}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Tag className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Blog;