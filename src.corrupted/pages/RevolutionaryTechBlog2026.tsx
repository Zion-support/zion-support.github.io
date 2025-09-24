import { motion } from 'framer-motion';
import React from 'react';

const RevolutionaryTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Synthetic Intelligence: What It Means for Humanity",
      excerpt: "Exploring the revolutionary implications of AI systems that possess genuine consciousness and creativity.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion: The Next Computing Revolution",
      excerpt: "How the combination of quantum computing and neural networks is creating unprecedented processing power.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2026",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging Mind and Machine",
      excerpt: "The latest breakthroughs in brain-computer interfaces and their potential to enhance human capabilities.",
      author: "Dr. Elena Volkov",
      date: "January 21, 2026",
      category: "Neural Technology",
      readTime: "7 min read",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Climate Restoration Through Advanced Technology",
      excerpt: "How cutting-edge technology is being used to reverse climate change and restore our planet.",
      author: "Dr. James Park",
      date: "January 19, 2026",
      category: "Environmental Tech",
      readTime: "9 min read",
      image: "🌍",
      featured: false
    },
    {
      id: 5,
      title: "The Future of Space Exploration with AI",
      excerpt: "How artificial intelligence is revolutionizing space exploration and colonization efforts.",
      author: "Dr. Maria Santos",
      date: "January 17, 2026",
      category: "Space Technology",
      readTime: "5 min read",
      image: "🚀",
      featured: false
    },
    {
      id: 6,
      title: "Biotechnology Breakthroughs: Enhancing Human Potential",
      excerpt: "Latest advances in genetic engineering and biotechnology that are enhancing human capabilities.",
      author: "Dr. Alex Thompson",
      date: "January 15, 2026",
      category: "Biotechnology",
      readTime: "6 min read",
      image: "🧬",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Artificial Intelligence",
    "Quantum Computing",
    "Neural Technology",
    "Environmental Tech",
    "Space Technology",
    "Biotechnology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 REVOLUTIONARY TECH BLOG 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead of the curve with insights into the most groundbreaking technologies 
              that are reshaping our world and defining the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Latest Posts →
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">🌟 Featured Articles</h2>
          <p className="text-xl text-gray-300">Our most popular and groundbreaking tech insights</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{post.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                Read Full Article →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* All Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">📖 All Articles</h2>
          <p className="text-xl text-gray-300">Complete collection of our revolutionary tech insights</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{post.image}</div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  <div>By {post.author}</div>
                  <div>{post.date}</div>
                </div>
                <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Revolutionary Tech</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get the latest insights on breakthrough technologies delivered directly to your inbox. 
              Join thousands of tech enthusiasts and industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-white/80 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive deeper into revolutionary technologies and discover how they can transform your business and life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2026;