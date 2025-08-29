import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Filter, Tag, BookOpen, TrendingUp, Star, Eye, Heart, Share2, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Business Intelligence in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing business intelligence and decision-making processes across industries.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI & Analytics",
      tags: ["AI", "Business Intelligence", "Machine Learning"],
      image: "/images/blog/ai-business-intelligence.jpg",
      featured: true,
      views: 1247,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Down the Next Frontier",
      excerpt: "Explore the latest developments in quantum computing and how they're reshaping the technology landscape.",
      author: "Michael Rodriguez",
      date: "2025-01-12",
      readTime: "12 min read",
      category: "Quantum Tech",
      tags: ["Quantum Computing", "Emerging Tech", "Innovation"],
      image: "/images/blog/quantum-computing.jpg",
      featured: true,
      views: 2156,
      likes: 156,
      comments: 45
    },
    {
      id: 3,
      title: "Sustainable IT: Green Solutions for Modern Enterprises",
      excerpt: "Learn about eco-friendly technology solutions that help businesses reduce their carbon footprint while improving efficiency.",
      author: "Emma Thompson",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Sustainability",
      tags: ["Green IT", "Sustainability", "Enterprise"],
      image: "/images/blog/green-it.jpg",
      featured: true,
      views: 892,
      likes: 67,
      comments: 18
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Micro SaaS: The Future of Software Distribution",
      excerpt: "How micro SaaS solutions are democratizing software access for small businesses and startups.",
      author: "Alex Johnson",
      date: "2025-01-08",
      readTime: "5 min read",
      category: "Micro SaaS",
      tags: ["SaaS", "Startups", "Software"],
      image: "/images/blog/micro-saas.jpg",
      views: 567,
      likes: 34,
      comments: 12
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "Understanding the evolving cybersecurity landscape and AI-powered defense mechanisms.",
      author: "David Kim",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "AI", "Threat Detection"],
      image: "/images/blog/ai-cybersecurity.jpg",
      views: 1234,
      likes: 78,
      comments: 31
    },
    {
      id: 6,
      title: "Digital Transformation: A Complete Guide for 2025",
      excerpt: "Comprehensive strategies for successful digital transformation in the modern business environment.",
      author: "Lisa Wang",
      date: "2025-01-03",
      readTime: "15 min read",
      category: "Digital Transformation",
      tags: ["Digital Transformation", "Strategy", "Innovation"],
      image: "/images/blog/digital-transformation.jpg",
      views: 1890,
      likes: 112,
      comments: 28
    }
  ];

  const categories = [
    { name: "AI & Analytics", count: 24, color: "from-purple-600 to-pink-600" },
    { name: "Quantum Tech", count: 18, color: "from-indigo-600 to-purple-600" },
    { name: "Cybersecurity", count: 31, color: "from-red-600 to-orange-600" },
    { name: "Cloud & DevOps", count: 27, color: "from-blue-600 to-cyan-600" },
    { name: "Digital Transformation", count: 22, color: "from-green-600 to-emerald-600" },
    { name: "Micro SaaS", count: 15, color: "from-yellow-600 to-orange-600" },
    { name: "Sustainability", count: 19, color: "from-teal-600 to-green-600" },
    { name: "IoT & Edge", count: 16, color: "from-gray-600 to-slate-600" }
  ];

  const popularTags = [
    "AI", "Machine Learning", "Quantum Computing", "Cybersecurity", "Cloud", "DevOps", 
    "Digital Transformation", "Sustainability", "IoT", "Blockchain", "Micro SaaS", "Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Discover cutting-edge insights, industry trends, and expert perspectives on the future of technology
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            
            {/* Featured Posts */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Star className="w-8 h-8 text-yellow-400 mr-3" />
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-slate-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                          </span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                Latest Articles
              </h2>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-1">
                        <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-slate-500" />
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-slate-400 text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {post.title}
                        </h3>
                        <p className="text-slate-300 text-sm mb-4">
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
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
            {/* Categories */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Filter className="w-6 h-6 text-cyan-400 mr-2" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      {category.name}
                    </span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Popular Tags */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Tag className="w-6 h-6 text-green-400 mr-2" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-slate-300 text-sm mb-4">
                Get the latest tech insights delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
