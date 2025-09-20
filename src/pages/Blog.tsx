<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, Search, Filter, 
  ArrowRight, BookOpen, TrendingUp, Star, Eye
} from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', count: 18 },
    { id: 'quantum', name: 'Quantum Computing', count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 7 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: 1247,
      featured: true,
      tags: ['AI', 'Business', 'Trends', '2025'],
      image: '/images/blog/ai-business-trends.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s New in 2025',
      excerpt: 'Explore the latest developments in quantum computing and their implications for the tech industry.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      views: 892,
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Innovation'],
      image: '/images/blog/quantum-breakthroughs.jpg'
    },
    {
      id: 3,
      title: 'Building Secure Cloud Infrastructure: Best Practices',
      excerpt: 'Learn the essential security practices for building and maintaining robust cloud infrastructure.',
      category: 'cloud',
      author: 'Alex Thompson',
      date: '2025-01-10',
      readTime: '6 min read',
      views: 567,
      featured: false,
      tags: ['Cloud Security', 'Infrastructure', 'Best Practices'],
      image: '/images/blog/cloud-security.jpg'
    },
    {
      id: 4,
      title: 'AI-Powered Cybersecurity: The Next Generation of Protection',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity and threat detection.',
      category: 'cybersecurity',
      author: 'Dr. Emily Watson',
      date: '2025-01-08',
      readTime: '10 min read',
      views: 734,
      featured: false,
      tags: ['AI', 'Cybersecurity', 'Threat Detection'],
      image: '/images/blog/ai-cybersecurity.jpg'
    },
    {
      id: 5,
      title: 'Micro SaaS Success Stories: Lessons from the Field',
      excerpt: 'Real-world examples of successful micro SaaS businesses and the strategies that made them thrive.',
      category: 'ai',
      author: 'David Kim',
      date: '2025-01-05',
      readTime: '7 min read',
      views: 445,
      featured: false,
      tags: ['Micro SaaS', 'Success Stories', 'Business Strategy'],
      image: '/images/blog/micro-saas-success.jpg'
    },
    {
      id: 6,
      title: 'The Impact of Edge Computing on IoT Applications',
      excerpt: 'Understanding how edge computing is transforming IoT deployments and improving performance.',
      category: 'cloud',
      author: 'Lisa Chen',
      date: '2025-01-03',
      readTime: '9 min read',
      views: 389,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Performance'],
      image: '/images/blog/edge-computing-iot.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights, trends, and expert analysis on AI, quantum computing, cybersecurity, 
              and the latest technology innovations shaping the future of business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
=======
import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary technology solutions and insights for the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Advanced Technology</h3>
            <p className="text-gray-300 mb-4">
              Cutting-edge solutions that push the boundaries of what's possible
            </p>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Featured Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-blue-400 opacity-60" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Latest Articles
          </motion.h2>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-600/20 to-slate-700/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-slate-400 opacity-60" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-slate-400 text-sm">•</span>
                      <span className="text-slate-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest articles, research updates, and technology insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-slate-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Featured Post */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Featured Post</h2>
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-zion-blue p-8 flex items-center">
                    <div>
                      <div className="text-zion-cyan text-sm font-medium mb-2">AI & Technology</div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        The Future of AI in Enterprise: 2024 Trends and Predictions
                      </h3>
                      <p className="text-zion-slate-light mb-4">
                        Discover how artificial intelligence is reshaping business operations and what 
                        companies need to know to stay competitive in the evolving tech landscape.
                      </p>
                      <div className="flex items-center text-zion-slate-light text-sm mb-4">
                        <span>January 15, 2024</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                      </div>
                      <a
                        href="#"
                        className="inline-block bg-zion-cyan text-zion-blue-dark px-6 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-zion-blue-light p-8 flex items-center justify-center">
                    <div className="text-center text-zion-blue-dark">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <p className="text-lg font-semibold">AI Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue p-6 text-center">
                    <svg className="w-16 h-16 text-zion-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="text-zion-cyan text-sm font-medium mb-2">Cybersecurity</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Essential Cybersecurity Practices for Small Businesses
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      Learn the fundamental security measures every small business should implement 
                      to protect against cyber threats.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">January 12, 2024</span>
                      <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue p-6 text-center">
                    <svg className="w-16 h-16 text-zion-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="text-zion-cyan text-sm font-medium mb-2">Performance</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Optimizing Web Application Performance
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      Discover proven techniques to improve your web application's speed and user experience.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">January 10, 2024</span>
                      <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue p-6 text-center">
                    <svg className="w-16 h-16 text-zion-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="text-zion-cyan text-sm font-medium mb-2">Digital Transformation</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Digital Transformation Success Stories
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      Real-world examples of companies that successfully transformed their operations 
                      through technology.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">January 8, 2024</span>
                      <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            {/* Categories */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">AI & ML</h3>
                  <p className="text-zion-slate-light text-sm">12 articles</p>
                </a>

                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Security</h3>
                  <p className="text-zion-slate-light text-sm">8 articles</p>
                </a>

                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Performance</h3>
                  <p className="text-zion-slate-light text-sm">6 articles</p>
                </a>

                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Transformation</h3>
                  <p className="text-zion-slate-light text-sm">10 articles</p>
                </a>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="text-center">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
                <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
                  Get the latest tech insights and company updates delivered to your inbox
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-l-lg focus:outline-none focus:border-zion-cyan"
                    />
                    <button className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-r-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-zion-slate-light text-sm mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
