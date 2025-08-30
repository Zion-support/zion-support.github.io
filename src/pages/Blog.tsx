import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  TrendingUp,
  Lightbulb,
  Shield,
  Cloud,
  Brain,
  Rocket
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: TrendingUp, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb, count: 3 },
    { id: 'transformation', name: 'Digital Transformation', icon: Rocket, count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: 'December 15, 2024',
      readTime: '8 min read',
      image: '/images/blog/ai-future-2024.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Zero Trust Security: Why Traditional Security Models Are Failing',
      excerpt: 'Learn about the Zero Trust security framework and how it\'s becoming essential in today\'s threat landscape.',
      category: 'security',
      author: 'Michael Rodriguez',
      date: 'December 12, 2024',
      readTime: '6 min read',
      image: '/images/blog/zero-trust-security.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud-Native Development: Best Practices for Modern Applications',
      excerpt: 'Explore the principles and practices of cloud-native development for scalable and resilient applications.',
      category: 'cloud',
      author: 'Jennifer Kim',
      date: 'December 10, 2024',
      readTime: '10 min read',
      image: '/images/blog/cloud-native-dev.jpg',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Revolutionizing Patient Care',
      excerpt: 'How AI and ML are transforming healthcare delivery and improving patient outcomes.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: 'December 8, 2024',
      readTime: '7 min read',
      image: '/images/blog/ml-healthcare.jpg'
    },
    {
      id: 5,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Practical strategies for implementing DevOps automation to accelerate your development process.',
      category: 'cloud',
      author: 'Jennifer Kim',
      date: 'December 5, 2024',
      readTime: '9 min read',
      image: '/images/blog/devops-automation.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Processing Data Closer to Users',
      excerpt: 'Understanding edge computing and its impact on modern technology infrastructure.',
      category: 'innovation',
      author: 'Alex Thompson',
      date: 'December 3, 2024',
      readTime: '5 min read',
      image: '/images/blog/edge-computing.jpg'
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];
  
  const filteredPosts = selectedCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  const searchResults = searchQuery 
    ? allPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog | Zion Tech Group - AI & Technology Insights"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from our expert team."
        keywords="AI blog, technology insights, cloud computing, cybersecurity, digital transformation, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Insights, analysis, and expert perspectives on the latest trends in AI, technology, and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and insightful articles on cutting-edge technology topics
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden h-full">
                  <div className="h-40 bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                    <div className="text-4xl">📄</div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-slate-400 text-sm">•</span>
                      <span className="text-slate-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">{post.author}</p>
                          <p className="text-xs text-slate-400">{post.date}</p>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Recent Articles'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {searchQuery 
                ? `Found ${searchResults.length} articles matching your search`
                : 'Stay updated with our latest insights and analysis'
              }
            </p>
          </motion.div>
          
          {searchQuery && searchResults.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
              <p className="text-slate-300 mb-6">Try adjusting your search terms or browse our categories</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300"
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery ? searchResults : filteredPosts).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden h-full">
                    <div className="h-40 bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                      <div className="text-4xl">📄</div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-sm text-white font-medium">{post.author}</p>
                            <p className="text-xs text-slate-400">{post.date}</p>
                          </div>
                        </div>
                        
                        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated with Zion Tech Group
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest insights on AI, technology, and digital transformation delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Subscribe to Newsletter
              </a>
              <a
                href="https://ziontechgroup.com/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}