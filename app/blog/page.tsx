<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
=======
'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Innovation'],
      image: '/images/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Best Practices'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Trends', 'Protection'],
      image: '/images/blog/cybersecurity.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn the principles and techniques for creating applications that can handle millions of users.',
      content: 'Full article content...',
      author: 'Emma Wilson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
      tags: ['Web Development', 'Scalability', 'Architecture'],
      image: '/images/blog/scalable-apps.jpg',
      featured: false
    }
  ];

  const categories = ['all', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Development'];

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);
>>>>>>> cursor/fix-errors-and-merge-to-main-0ca7
=======
import { ArrowRight, Calendar, User, Clock, Tag, Search, Filter, TrendingUp, BookOpen, Zap, Brain, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
>>>>>>> cursor/website-audit-and-update-with-deployment-6e33

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in 2024. From automation to predictive analytics, explore the latest AI innovations.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["AI", "Business", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "5G Implementation: Revolutionizing Enterprise Connectivity",
      excerpt: "Learn how 5G technology is changing the game for businesses. From ultra-low latency to massive IoT connectivity, discover the benefits of 5G implementation.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["5G", "Connectivity", "Enterprise", "IoT"]
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Protect your business from cyber threats with our comprehensive guide to cybersecurity best practices. Learn about the latest security measures and compliance requirements.",
      author: "David Martinez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cybersecurity", "Security", "Compliance", "Best Practices"]
    },
    {
      id: 4,
      title: "How AI Analytics Can Transform Your Data Strategy",
      excerpt: "Unlock the power of your data with AI analytics. Learn how to implement intelligent data analysis and gain actionable insights for your business growth.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI Analytics", "Data", "Business Intelligence", "Insights"]
    },
    {
      id: 5,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Navigate your cloud migration journey with confidence. Our comprehensive guide covers planning, execution, and best practices for successful cloud adoption.",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cloud", "Migration", "Enterprise", "Infrastructure"]
    },
    {
      id: 6,
      title: "The Rise of Micro SAAS: Building Scalable Solutions",
      excerpt: "Explore the micro SAAS revolution and learn how to build scalable, focused software solutions that solve specific business problems effectively.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Micro SAAS", "Software", "Scalability", "Business"]
    },
    {
      id: 7,
      title: "AI-Powered Customer Support: The Future is Here",
      excerpt: "Discover how AI is revolutionizing customer support with intelligent chatbots, automated responses, and personalized customer experiences.",
      author: "Jennifer Adams",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI", "Customer Support", "Automation", "Chatbots"]
    },
    {
      id: 8,
      title: "Data Privacy in the Age of AI: What You Need to Know",
      excerpt: "Understand the critical importance of data privacy in AI applications. Learn about regulations, best practices, and how to protect user data.",
      author: "Robert Kim",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Data Privacy", "AI", "Compliance", "Security"]
    },
    {
      id: 9,
      title: "Building Resilient IT Infrastructure for Modern Businesses",
      excerpt: "Learn how to design and implement resilient IT infrastructure that can withstand challenges and support your business growth in the digital age.",
      author: "Maria Garcia",
      date: "2023-12-25",
      readTime: "11 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["IT Infrastructure", "Resilience", "Business", "Technology"]
    },
    {
      id: 10,
      title: "The Business Case for AI Investment: ROI and Beyond",
      excerpt: "Calculate the real return on investment for AI initiatives. Learn how to measure success and justify AI investments to stakeholders.",
      author: "Alex Turner",
      date: "2023-12-22",
      readTime: "7 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI Investment", "ROI", "Business Case", "Strategy"]
    },
    {
      id: 11,
      title: "Edge Computing: Bringing AI Closer to Your Data",
      excerpt: "Explore the benefits of edge computing for AI applications. Learn how to reduce latency and improve performance with edge-based solutions.",
      author: "Sophie Lee",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Edge Computing", "AI", "Performance", "Latency"]
    },
    {
      id: 12,
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Navigate your digital transformation journey with a strategic approach. Learn how to align technology initiatives with business objectives.",
      author: "Kevin Brown",
      date: "2023-12-18",
      readTime: "10 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Digital Transformation", "Strategy", "Business", "Technology"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Blog - Zion Tech Group</title>
=======
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
>>>>>>> cursor/website-audit-and-update-with-deployment-6e33
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology, and business innovation. Expert articles, case studies, and industry trends from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, technology insights, business innovation, artificial intelligence articles, tech trends, digital transformation, cybersecurity, cloud computing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Tech
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Insights
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on AI, technology, and business innovation. 
              Discover the latest trends, best practices, and real-world applications.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
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
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Featured Article
                  </span>
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-300">{featuredPost.author}</span>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl h-64 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Latest Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our collection of expert insights, tutorials, and industry analysis.
              </p>
            </div>
            
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-4">
                      <BookOpen className="w-12 h-12 text-cyan-400" />
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights delivered to your inbox. Join our newsletter for exclusive content and updates.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                  Subscribe
                  <Zap className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and IT solutions from our expert team." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, software development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with expert insights on AI, cloud computing, cybersecurity, and the latest technology trends.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(post => post.featured).map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500"></div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 text-sm font-semibold">{post.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-4xl">📝</div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-0ca7
