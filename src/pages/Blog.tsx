import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Search, Filter } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: 2025 Trends and Predictions',
    excerpt: 'Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.',
    author: 'Zion Tech Team',
    date: '2025-01-15',
    category: 'AI & Analytics',
    readTime: '5 min read',
    image: '/api/placeholder/400/250',
    tags: ['AI', 'Enterprise', 'Trends', '2025']
  },
  {
    id: 2,
    title: 'Digital Twin Technology: Revolutionizing Industrial Operations',
    excerpt: 'Learn how digital twin technology is transforming manufacturing, healthcare, and urban planning.',
    author: 'Dr. Sarah Chen',
    date: '2025-01-10',
    category: 'Digital Twin',
    readTime: '7 min read',
    image: '/api/placeholder/400/250',
    tags: ['Digital Twin', 'IoT', 'Manufacturing', 'Innovation']
  },
  {
    id: 3,
    title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
    excerpt: 'Separate fact from fiction in the quantum computing landscape and understand its real-world applications.',
    author: 'Prof. Michael Rodriguez',
    date: '2025-01-05',
    category: 'Quantum Computing',
    readTime: '6 min read',
    image: '/api/placeholder/400/250',
    tags: ['Quantum Computing', 'Technology', 'Research', 'Future']
  },
  {
    id: 4,
    title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
    excerpt: 'Explore how AI is both creating new security challenges and providing innovative defense mechanisms.',
    author: 'Alex Thompson',
    date: '2024-12-28',
    category: 'Cybersecurity',
    readTime: '8 min read',
    image: '/api/placeholder/400/250',
    tags: ['Cybersecurity', 'AI', 'Security', 'Threats']
  },
  {
    id: 5,
    title: 'Sustainable Technology: Green IT Solutions for Modern Businesses',
    excerpt: 'How companies can reduce their carbon footprint while improving operational efficiency.',
    author: 'Elena Green',
    date: '2024-12-20',
    category: 'Sustainability',
    readTime: '4 min read',
    image: '/api/placeholder/400/250',
    tags: ['Sustainability', 'Green IT', 'Business', 'Environment']
  },
  {
    id: 6,
    title: 'Micro SaaS: The Future of Software Distribution',
    excerpt: 'Understanding the rise of micro SaaS solutions and their impact on enterprise software.',
    author: 'David Kim',
    date: '2024-12-15',
    category: 'Micro SaaS',
    readTime: '5 min read',
    image: '/api/placeholder/400/250',
    tags: ['Micro SaaS', 'Software', 'Enterprise', 'Innovation']
  }
];

const categories = [
  'All Posts',
  'AI & Analytics',
  'Digital Twin',
  'Quantum Computing',
  'Cybersecurity',
  'Sustainability',
  'Micro SaaS',
  'Cloud & DevOps',
  'IoT & Edge',
  'Blockchain'
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Latest insights, trends, and innovations in AI, digital twin technology, quantum computing, and enterprise solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Blog
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest insights in AI, digital transformation, and cutting-edge technology solutions
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All Posts'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-600 hover:border-cyan-400/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                {/* Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{post.readTime}</span>
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/30"
            >
              Load More Articles
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Zion Tech
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get the latest insights delivered to your inbox. No spam, just valuable content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-slate-700/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
