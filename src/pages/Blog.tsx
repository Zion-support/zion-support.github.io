import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Tag, Search, Filter, BookOpen } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest developments in artificial intelligence and how they\'re reshaping enterprise technology landscapes.',
      author: 'Sarah Chen',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['Artificial Intelligence', 'Enterprise', 'Trends', '2024'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Implementing Zero Trust Architecture: A Comprehensive Guide',
      excerpt: 'Learn the essential steps and best practices for implementing zero trust security in your organization.',
      author: 'Michael Rodriguez',
      date: 'December 12, 2024',
      readTime: '12 min read',
      category: 'Cybersecurity',
      tags: ['Zero Trust', 'Security', 'Architecture', 'Best Practices'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Separate fact from fiction in the quantum computing landscape and understand what\'s actually achievable today.',
      author: 'Dr. Alex Thompson',
      date: 'December 10, 2024',
      readTime: '10 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Research'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Building Scalable IoT Solutions: Lessons from Real-World Deployments',
      excerpt: 'Discover key insights and lessons learned from successful IoT implementations across various industries.',
      author: 'Emily Watson',
      date: 'December 8, 2024',
      readTime: '15 min read',
      category: 'IoT',
      tags: ['IoT', 'Scalability', 'Deployment', 'Case Studies'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Business Operations',
      excerpt: 'How AI-powered automation is transforming business processes and creating new opportunities for growth.',
      author: 'Kleber Oliveira',
      date: 'December 5, 2024',
      readTime: '9 min read',
      category: 'Business Automation',
      tags: ['Automation', 'AI', 'Business Operations', 'Digital Transformation'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Explore real-world enterprise applications of blockchain technology beyond the financial sector.',
      author: 'David Kim',
      date: 'December 3, 2024',
      readTime: '11 min read',
      category: 'Blockchain',
      tags: ['Blockchain', 'Enterprise', 'Applications', 'Innovation'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 45, active: true },
    { name: 'AI & Technology', count: 18, active: false },
    { name: 'Cybersecurity', count: 12, active: false },
    { name: 'Quantum Computing', count: 8, active: false },
    { name: 'IoT', count: 10, active: false },
    { name: 'Blockchain', count: 6, active: false },
    { name: 'Business Automation', count: 9, active: false }
  ];

  const popularTags = [
    'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Machine Learning',
    'Digital Transformation', 'Innovation', 'Enterprise', 'Technology Trends'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Insights, analysis, and thought leadership on AI, cybersecurity, quantum computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Analysis
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, cybersecurity, 
              quantum computing, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Article
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our latest insights and analysis on emerging technologies.
            </p>
          </motion.div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-400">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-slate-300">Featured Article</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of insights and analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 h-48 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-cyan-400" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full px-4 py-2 border border-cyan-400/30 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group-hover:border-cyan-400">
                    Read More
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore articles by topic and stay updated on your areas of interest.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-400/30 border border-transparent transition-all duration-300"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Get the latest insights and analysis delivered directly to your inbox. 
              Never miss an important technology trend or development.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
