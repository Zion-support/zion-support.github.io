import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Network,
  Atom,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe,
  Database,
  Server,
  Cpu,
  Lock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, count: 3 },
    { id: 'development', name: 'Development', icon: Code, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Breaking New Grounds in 2025',
      excerpt: 'Explore the latest breakthroughs in AI consciousness research and how Zion Tech Group is pioneering new approaches to understanding artificial intelligence.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI Consciousness', 'Research', 'Innovation', '2025'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 2847,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Protecting Enterprises in the Digital Age',
      excerpt: 'Learn about implementing zero-trust security principles to protect your organization from modern cyber threats and data breaches.',
      author: 'Emily Watson',
      authorRole: 'Chief Security Officer',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Zero-Trust', 'Security', 'Enterprise', 'Cybersecurity'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1923,
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      title: 'Quantum Computing Revolution: What Businesses Need to Know',
      excerpt: 'Discover how quantum computing is transforming industries and what steps your business should take to prepare for the quantum future.',
      author: 'Dr. James Kim',
      authorRole: 'Chief Research Officer',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'emerging-tech',
      tags: ['Quantum Computing', 'Business Strategy', 'Innovation', 'Technology'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1654,
      likes: 72,
      comments: 18
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Building Scalable Applications for the Future',
      excerpt: 'Master the principles of cloud-native development and learn how to build applications that scale automatically and handle modern workloads.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud-Native', 'Development', 'Scalability', 'Microservices'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1432,
      likes: 65,
      comments: 12
    },
    {
      id: 5,
      title: 'AI-Powered Business Intelligence: Transforming Data into Actionable Insights',
      excerpt: 'See how artificial intelligence is revolutionizing business intelligence and helping companies make data-driven decisions faster than ever.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      category: 'ai',
      tags: ['Business Intelligence', 'AI', 'Analytics', 'Data Science'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1876,
      likes: 94,
      comments: 21
    },
    {
      id: 6,
      title: 'DevOps Best Practices: Accelerating Software Delivery in 2025',
      excerpt: 'Learn the latest DevOps practices and tools that are helping development teams deliver software faster and more reliably.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-03',
      readTime: '6 min read',
      category: 'cloud',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Software Delivery'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1234,
      likes: 58,
      comments: 9
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
<<<<<<< HEAD
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
=======
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-48d7
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
=======
<<<<<<< HEAD
      const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-48d7
    });
  };
=======
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
>>>>>>> cursor/website-audit-and-enhancement-96e5

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Insights, trends, and expert analysis on AI, technology, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-light/10 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
=======
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zion Tech <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights, updates, and thought leadership from our team of technology experts. 
              Stay ahead of the curve with the latest in AI, cybersecurity, and emerging tech.
            </motion.p>

            {/* Search and Filter */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-zion-cyan" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-48d7
          </div>
        </div>
      </section>

      {/* Featured Post */}
<<<<<<< HEAD
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <p className="text-xl text-zion-slate-light">Our latest insights and analysis</p>
            </div>
            
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full uppercase font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full uppercase font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tag className="w-12 h-12 text-zion-cyan" />
                      </div>
                      <p className="text-zion-slate-light text-sm">Featured Content</p>
                    </div>
=======
      {featuredPost && (
        <section className="py-20 bg-zion-slate-dark/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Featured</span> Article
              </h2>
            </motion.div>

            <motion.div
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                      <p className="text-zion-slate-light">Featured Image</p>
                    </div>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-48d7
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="text-zion-cyan text-sm font-medium">{featuredPost.category.toUpperCase()}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Heart className="w-4 h-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

<<<<<<< HEAD
      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-zion-slate-light">Explore our collection of insights and analysis</p>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full uppercase font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full uppercase font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-zion-slate-light">+{post.tags.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      
                      <div className="flex items-center gap-3">
                        <button className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
=======
      {/* Regular Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover insights and updates from our technology experts
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-zion-cyan mx-auto mb-2" />
                        <p className="text-zion-slate-light text-sm">Blog Image</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-semibold rounded-full">
                        {post.category.toUpperCase()}
                      </span>
                      <span className="text-zion-slate-light text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-xs text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-xs text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-48d7
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-cyan text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300 font-medium text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
<<<<<<< HEAD
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light">Try adjusting your search terms or browse all categories above.</p>
            </div>
=======
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </motion.div>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-48d7
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
<<<<<<< HEAD
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and technology trends delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-zion-slate-light mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
=======
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get the latest insights, updates, and exclusive content delivered to your inbox
            </p>
            
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-zion-slate-light text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-48d7
        </div>
      </section>
    </div>
  );
};

export default Blog;
