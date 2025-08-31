import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Calendar,
  User,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Brain,
  Shield,
  Cloud,
  Database,
  Zap,
  ExternalLink,
  ChevronRight,
  Tag,
  Eye,
  Heart
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 24, icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 5, icon: Cloud },
    { id: 'quantum', name: 'Quantum Computing', count: 3, icon: Zap },
    { id: 'blockchain', name: 'Blockchain', count: 2, icon: Database }
  ];

  const tags = [
    { id: 'all', name: 'All Tags', count: 24 },
    { id: 'artificial-intelligence', name: 'Artificial Intelligence', count: 8 },
    { id: 'machine-learning', name: 'Machine Learning', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud-computing', name: 'Cloud Computing', count: 5 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 3 },
    { id: 'blockchain', name: 'Blockchain', count: 2 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 4 },
    { id: 'enterprise-solutions', name: 'Enterprise Solutions', count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Transformative Trends in 2025',
      excerpt: 'Explore the cutting-edge developments in artificial intelligence that are reshaping industries and creating new opportunities for businesses worldwide.',
      content: 'Artificial Intelligence continues to evolve at an unprecedented pace, with 2025 marking a significant milestone in the technology\'s maturity. From advanced language models to autonomous systems, AI is becoming more integrated into our daily lives and business operations...',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      authorAvatar: '/avatars/sarah-chen.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['artificial-intelligence', 'machine-learning', 'trends-2025'],
      featured: true,
      views: 15420,
      likes: 892,
      image: '/blog/ai-future-2025.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Classical Limitations',
      excerpt: 'Discover how quantum computing is solving previously intractable problems and opening new frontiers in cryptography, optimization, and scientific research.',
      content: 'Quantum computing represents one of the most significant technological breakthroughs of our time. By harnessing the principles of quantum mechanics, these powerful machines can process information in ways that classical computers simply cannot...',
      author: 'Dr. Michael Rodriguez',
      authorRole: 'Quantum Computing Lead',
      authorAvatar: '/avatars/michael-rodriguez.jpg',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['quantum-computing', 'cryptography', 'scientific-research'],
      featured: true,
      views: 12850,
      likes: 756,
      image: '/blog/quantum-computing-breakthrough.jpg'
    },
    {
      id: 3,
      title: 'Zero-Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Learn why traditional security models are failing and how zero-trust architecture provides comprehensive protection against modern cyber threats.',
      content: 'In today\'s interconnected digital landscape, traditional perimeter-based security models are no longer sufficient. The zero-trust security model represents a paradigm shift that assumes no entity, whether inside or outside the network, should be trusted by default...',
      author: 'Alex Thompson',
      authorRole: 'Cybersecurity Specialist',
      authorAvatar: '/avatars/alex-thompson.jpg',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'cybersecurity',
      tags: ['cybersecurity', 'zero-trust', 'enterprise-security'],
      featured: false,
      views: 9870,
      likes: 634,
      image: '/blog/zero-trust-security.jpg'
    },
    {
      id: 4,
      title: 'Microservices Architecture: Scaling for the Digital Age',
      excerpt: 'Explore how microservices architecture enables organizations to build scalable, maintainable, and resilient applications that can evolve with business needs.',
      content: 'As organizations continue their digital transformation journeys, the need for scalable and flexible application architectures has never been greater. Microservices architecture offers a compelling solution by breaking down monolithic applications into smaller, independently deployable services...',
      author: 'Jennifer Lee',
      authorRole: 'Software Architecture Lead',
      authorAvatar: '/avatars/jennifer-lee.jpg',
      publishDate: '2025-01-08',
      readTime: '15 min read',
      category: 'cloud',
      tags: ['cloud-computing', 'microservices', 'software-architecture'],
      featured: false,
      views: 7650,
      likes: 445,
      image: '/blog/microservices-architecture.jpg'
    },
    {
      id: 5,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Discover how blockchain technology is revolutionizing supply chain management, digital identity, and cross-border transactions.',
      content: 'While blockchain technology first gained prominence through cryptocurrencies like Bitcoin, its potential extends far beyond digital money. Enterprises are now leveraging blockchain for a wide range of applications that require transparency, immutability, and decentralized trust...',
      author: 'David Kim',
      authorRole: 'Blockchain Solutions Architect',
      authorAvatar: '/avatars/david-kim.jpg',
      publishDate: '2025-01-05',
      readTime: '11 min read',
      category: 'blockchain',
      tags: ['blockchain', 'supply-chain', 'digital-identity'],
      featured: false,
      views: 6540,
      likes: 389,
      image: '/blog/blockchain-enterprise.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'Understand how edge computing is reducing latency, improving performance, and enabling real-time applications across various industries.',
      content: 'As the Internet of Things (IoT) continues to expand and real-time applications become more critical, traditional cloud computing models are facing new challenges. Edge computing emerges as a solution that brings computation and data storage closer to the data source...',
      author: 'Rachel Green',
      authorRole: 'IoT Solutions Engineer',
      authorAvatar: '/avatars/rachel-green.jpg',
      publishDate: '2025-01-03',
      readTime: '9 min read',
      category: 'cloud',
      tags: ['cloud-computing', 'edge-computing', 'iot'],
      featured: false,
      views: 5430,
      likes: 312,
      image: '/blog/edge-computing-rise.jpg'
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || categoryId;
  };

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.icon || BookOpen;
  };

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
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
                <BookOpen className="w-4 h-4 mr-2" />
                Insights & Analysis
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Technology
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}Insights
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead of the curve with expert analysis, industry trends, and deep dives into the latest technologies shaping the future of business and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#featured-posts"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group"
                >
                  Read Latest Articles
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                >
                  Subscribe to Newsletter
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {tags.map((tag) => (
                      <option key={tag.id} value={tag.id} className="bg-slate-800 text-white">
                        {tag.name} ({tag.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured-posts" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and insightful articles on cutting-edge technology trends and innovations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-blue-400 text-sm">Featured Article</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    {/* Category and Tags */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                        {getCategoryName(post.category)}
                      </span>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive collection of technology insights, tutorials, and industry analysis.
            </p>
          </motion.div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                        <p className="text-blue-400 text-xs">Article</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                          {getCategoryName(post.category)}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      {/* Read More Button */}
                      <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
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
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">
                Try adjusting your search terms or filters to find relevant articles.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Stay Updated with Our Insights
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get the latest technology trends, industry insights, and expert analysis delivered directly to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-blue-200 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}