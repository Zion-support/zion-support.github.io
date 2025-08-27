<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
=======
import React from 'react';
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
<<<<<<< HEAD
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

export default function Blog() {
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

=======
  Search,
  Filter
} from "lucide-react";
export default function Blog() {
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.",
      author: "Kleber",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Technology", "Trends"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures that every small business should implement to protect against cyber threats.",
      author: "Zion Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      tags: ["Security", "Small Business", "Best Practices", "Cyber Threats"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step approach to migrating your business to the cloud while minimizing downtime and risks.",
      author: "Zion Team",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud & DevOps",
      tags: ["Cloud", "Migration", "DevOps", "Strategy"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 4,
<<<<<<< HEAD
      title: 'Cloud-Native Development: Building Scalable Applications for the Future',
      excerpt: 'Master the principles of cloud-native development and learn how to build applications that scale effortlessly in modern cloud environments.',
      author: 'Alex Rodriguez',
      authorRole: 'Lead Cloud Architect',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud Native', 'Microservices', 'Scalability', 'DevOps'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1432,
      likes: 65,
      comments: 12
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'Explore how edge computing is revolutionizing data processing and enabling real-time applications across industries.',
      author: 'Dr. Lisa Park',
      authorRole: 'Senior Research Engineer',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      category: 'emerging-tech',
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Data Processing'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1287,
      likes: 58,
      comments: 9
    },
    {
      id: 6,
      title: 'Modern Web Development: From Monoliths to Micro-Frontends',
      excerpt: 'Learn about the evolution of web architecture and how micro-frontends are changing the way we build large-scale applications.',
      author: 'Michael Chen',
      authorRole: 'Frontend Engineering Lead',
      publishDate: '2025-01-03',
      readTime: '6 min read',
      category: 'development',
      tags: ['Web Development', 'Micro-frontends', 'Architecture', 'React'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1156,
      likes: 52,
      comments: 8
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

=======
      title: "Digital Transformation: Why It's Critical for Business Survival",
      excerpt: "Understanding the importance of digital transformation and how it can give your business a competitive edge.",
      author: "Kleber",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Digital Transformation",
      tags: ["Digital Transformation", "Innovation", "Business Strategy", "Technology"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 5,
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn how to design and implement microservices that can scale with your business growth.",
      author: "Zion Team",
      date: "2023-12-20",
      readTime: "8 min read",
      category: "Software Development",
      tags: ["Microservices", "Architecture", "Scalability", "Development"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Exploring how edge computing is revolutionizing IoT and enabling real-time data processing.",
      author: "Zion Team",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Emerging Tech",
      tags: ["Edge Computing", "IoT", "Real-time", "Innovation"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=400"
    }
  ];
  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud & DevOps",
    "Digital Transformation",
    "Software Development",
    "Emerging Tech"
  ];
  const popularTags = [
    "AI", "Security", "Cloud", "Innovation", "Technology", "Business", "Development", "Strategy"
  ];
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Zion Tech <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Insights, innovations, and expert perspectives on the future of AI, cybersecurity, 
              cloud computing, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="futuristic-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-zion-slate-dark text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
=======
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zion Tech Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights, trends, and expert knowledge on AI, cybersecurity, cloud computing, and digital transformation.
            </motion.p>
          </div>
        </div>
      {/* Search and Filter Section */}
      <section className="py-8 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-zion-slate-light" />
              <select className="px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="futuristic-card p-8 group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-zion-slate-light">Featured Article</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-zion-slate-light text-sm">Featured</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-zion-slate-light mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{featuredPost.publishDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{featuredPost.views}</span>
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          <span>{featuredPost.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          <span>{featuredPost.comments}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zion-slate-dark border border-zion-slate rounded-full text-sm text-zion-slate-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="futuristic-button inline-flex items-center"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Latest Articles
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Stay updated with the latest insights and innovations in technology
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="futuristic-card group hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-2">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-zion-slate-light text-sm">Blog Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-zion-slate-light">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-2">
                          <User className="w-4 h-4 text-zion-cyan" />
                        </div>
                        <span className="text-sm text-white">{post.author}</span>
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        {post.publishDate}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-zion-cyan hover:text-zion-purple transition-colors font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-zion-slate-light mb-6 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="futuristic-button-outline inline-flex items-center"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
                Stay Updated
              </h2>
              <p className="futuristic-text text-lg mb-8 max-w-2xl mx-auto">
                Get the latest insights and innovations delivered directly to your inbox. 
                Join thousands of tech professionals staying ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-zion-slate-dark border border-zion-slate rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                />
                <button className="futuristic-button px-8 py-3">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
=======
      {/* Featured Posts Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Latest insights and expert analysis on technology trends and business innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-purple/80 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Popular Tags Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Topics</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore articles by topic and discover insights that matter to your business
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                className="px-6 py-3 bg-zion-blue-light/10 border border-zion-purple/30 rounded-lg text-zion-slate-light hover:bg-zion-purple/20 hover:border-zion-purple/50 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Tag className="inline h-4 w-4 mr-2" />
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, industry trends, and expert analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="px-8 py-3 bg-white text-zion-purple font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-zion-slate-light text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help drive your digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-purple/30 text-white hover:bg-zion-purple/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
        </div>
      </section>
    </div>
  );
}
