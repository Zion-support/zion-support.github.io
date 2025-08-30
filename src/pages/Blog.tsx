import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { Search, 
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
 } from 'lucide-react.ts';

export default function Blog(...args: any[]): any {
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
    },
    {
      id: 7,
      title: 'Cybersecurity Compliance: Navigating Regulatory Requirements',
      excerpt: 'A comprehensive guide to meeting cybersecurity compliance standards in various industries.',
      category: 'security',
      author: 'Michael Rodriguez',
      date: 'November 30, 2024',
      readTime: '11 min read',
      image: '/images/blog/cybersecurity-compliance.jpg'
    },
    {
      id: 8,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world examples of successful digital transformation initiatives and key learnings.',
      category: 'transformation',
      author: 'Dr. Sarah Chen',
      date: 'November 28, 2024',
      readTime: '8 min read',
      image: '/images/blog/digital-transformation.jpg'
    },
    {
      id: 9,
      title: 'AI Ethics in Business: Balancing Innovation with Responsibility',
      excerpt: 'Exploring the ethical considerations of implementing AI solutions in business environments.',
      category: 'ai',
      author: 'Jennifer Kim',
      date: 'November 25, 2024',
      readTime: '6 min read',
      image: '/images/blog/ai-ethics.jpg'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? recentPosts: anyrecentPosts.filter(post  => post.category === selectedCategory);

  const searchResults = searchQuery 
    ? [...featuredPosts, ...recentPosts].filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from Zion Tech Group experts."
        keywords="technology blog, AI insights, cloud computing, cybersecurity, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, trends, and expert perspectives on technology innovation
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: any0.8 }}
          >
            {categories.map((category)  => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-slate-800/50 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {!searchQuery && (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
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
                Our most popular and insightful content on technology trends and innovations
              </p>
            </motion.div>
            
            <div className="grid lg: anygrid-cols-3 gap-8">
              {featuredPosts.map((post, index)  => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-6xl">📱</div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
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
      )}

      {/* Search Results or Recent Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
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
            <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery ? searchResults : filteredPosts).map((post, index)  => (
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Get the latest technology insights, trends, and expert analysis delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-slate-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our expertise can help you achieve your technology goals
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="/services-overview" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
