import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Right, User, Calendar } from 'lucide-react'
const BlogPage: React.FC = () => {
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "ai", name: "Artificial Intelligence" },
    { id: "blockchain", name: "Blockchain & Web3" },
    { id: "cloud", name: "Cloud Computing" },
    { id: "devops", name: "DevOps" },
    { id: "security", name: "Cybersecurity" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your organization from evolving threats in the digital age.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover proven strategies for migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.",
      author: "Cloud Team",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Learn how to architect and build web applications that can scale to millions of users using modern development practices.",
      author: "Development Team",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Development",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Machine Learning in Production: Best Practices and Pitfalls",
      excerpt: "Navigate the challenges of deploying machine learning models in production environments with these expert insights.",
      author: "AI Team",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture: Implementation Guide",
      excerpt: "Implement a zero trust security model to protect your organization's data and resources from internal and external threats.",
      author: "Security Team",
      date: "2023-12-25",
      readTime: "10 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           post.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, development, tech trends" />
      </Helmet>

      <ResponsiveContainer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Tech Blog
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Stay ahead of the curve with insights, tutorials, and industry trends from our expert team.
                </p>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <section className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredPosts.filter(post => post.featured).map((post) => (
                    <FuturisticCard key={post.id} className="p-0 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-white" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                        <p className="text-gray-300 mb-4">{post.excerpt}</p>
                        <FuturisticButton variant="primary" size="sm" className="group">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </FuturisticButton>
                      </div>
                    </FuturisticCard>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <FuturisticCard key={post.id} className="p-0 overflow-hidden h-full">
                    <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                      <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                      <FuturisticButton variant="primary" size="sm" className="group">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </FuturisticButton>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter for the latest tech insights and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <FuturisticButton variant="primary" size="lg" className="group">
                  Subscribe
                  <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default BlogPage;
