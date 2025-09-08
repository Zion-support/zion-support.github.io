import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Zap,
  Brain,
  Cloud,
  Shield
} from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb },
    { id: 'technology', name: 'Technology Trends', icon: TrendingUp }
  ];

  const blogPosts = [
    {
      id: 'ai-future-business',
      title: 'The Future of AI in Business: 2024 and Beyond',
      excerpt: 'Explore how artificial intelligence is reshaping business operations and what to expect in the coming years.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Business', 'Future', 'Innovation'],
      image: '/blog/ai-future-business.jpg',
      featured: true
    },
    {
      id: 'cloud-migration-guide',
      title: 'Complete Guide to Cloud Migration: Best Practices and Strategies',
      excerpt: 'A comprehensive guide to successfully migrating your business to the cloud with minimal disruption.',
      author: 'Marcus Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'cloud',
      tags: ['Cloud', 'Migration', 'DevOps', 'Strategy'],
      image: '/blog/cloud-migration-guide.jpg',
      featured: false
    },
    {
      id: 'cybersecurity-trends',
      title: 'Top Cybersecurity Trends for 2024: What You Need to Know',
      excerpt: 'Stay ahead of the curve with the latest cybersecurity trends and threats facing businesses today.',
      author: 'David Kim',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'security',
      tags: ['Cybersecurity', 'Security', 'Threats', 'Trends'],
      image: '/blog/cybersecurity-trends.jpg',
      featured: false
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation: A Roadmap for Success',
      excerpt: 'Learn the essential steps to successfully transform your business for the digital age.',
      author: 'Emily Watson',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'innovation',
      tags: ['Digital Transformation', 'Innovation', 'Strategy', 'Business'],
      image: '/blog/digital-transformation.jpg',
      featured: false
    },
    {
      id: 'machine-learning-basics',
      title: 'Machine Learning Basics: Understanding the Fundamentals',
      excerpt: 'A beginner-friendly introduction to machine learning concepts and applications.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-05',
      readTime: '14 min read',
      category: 'ai',
      tags: ['Machine Learning', 'AI', 'Basics', 'Education'],
      image: '/blog/machine-learning-basics.jpg',
      featured: false
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Discover how automation can revolutionize your DevOps practices and improve team productivity.',
      author: 'Marcus Rodriguez',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'cloud',
      tags: ['DevOps', 'Automation', 'CI/CD', 'Productivity'],
      image: '/blog/devops-automation.jpg',
      featured: false
    },
    {
      id: 'ai-ethics-business',
      title: 'AI Ethics in Business: Balancing Innovation with Responsibility',
      excerpt: 'Explore the ethical considerations businesses must address when implementing AI solutions.',
      author: 'Emily Watson',
      date: '2024-01-01',
      readTime: '9 min read',
      category: 'ai',
      tags: ['AI Ethics', 'Responsibility', 'Innovation', 'Business'],
      image: '/blog/ai-ethics-business.jpg',
      featured: false
    },
    {
      id: 'blockchain-applications',
      title: 'Blockchain Applications Beyond Cryptocurrency',
      excerpt: 'Discover innovative blockchain applications that are transforming various industries.',
      author: 'David Kim',
      date: '2023-12-28',
      readTime: '13 min read',
      category: 'technology',
      tags: ['Blockchain', 'Innovation', 'Technology', 'Applications'],
      image: '/blog/blockchain-applications.jpg',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
      <SEO 
        title="Blog - Zion Tech Group"
        description="Insights, trends, and expert analysis on AI, cloud computing, cybersecurity, and technology innovation. Stay ahead with Zion Tech Group's blog."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expert analysis on the latest in technology, AI, and business innovation. 
              Stay ahead of the curve with our thought leadership content.
            </p>
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
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
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

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-xl border border-slate-600/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-gray-400 text-sm">{formatDate(post.date)}</span>
                        <span className="mx-2 text-gray-600">•</span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-400">
                          <User className="w-4 h-4 mr-2" />
                          <span className="text-sm">{post.author}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-600/50 rounded text-xs text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights, trends, and expert analysis delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}