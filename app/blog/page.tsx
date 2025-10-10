'use client';

import React, { useState, useMemo } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['Artificial Intelligence', 'Business', 'Technology', 'Future'],
      image: '/images/blog-1.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'How to Implement AI Solutions in Your Organization',
      excerpt: 'A comprehensive guide to successfully integrating AI technologies into your business processes.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Implementation',
      tags: ['AI Implementation', 'Business Strategy', 'Digital Transformation'],
      image: '/images/blog-2.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI: Best Practices',
      excerpt: 'Learn how to protect your organization from AI-powered threats while leveraging AI for security.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'AI Security', 'Best Practices'],
      image: '/images/blog-3.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'Machine Learning vs Deep Learning: What\'s the Difference?',
      excerpt: 'Understanding the key differences between machine learning and deep learning approaches.',
      content: 'Full article content...',
      author: 'Dr. Emily Watson',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'AI',
      tags: ['Machine Learning', 'Deep Learning', 'Education'],
      image: '/images/blog-4.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Cloud Computing Trends for 2024',
      excerpt: 'Discover the latest cloud computing trends and how they impact modern businesses.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Cloud',
      tags: ['Cloud Computing', 'Technology', 'Business'],
      image: '/images/blog-5.jpg',
      featured: false
    },
    {
      id: '6',
      title: 'The Role of Data Analytics in Business Decision Making',
      excerpt: 'How data analytics is transforming business decision-making processes across industries.',
      content: 'Full article content...',
      author: 'Lisa Park',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making'],
      image: '/images/blog-6.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'AI', 'Implementation', 'Security', 'Cloud', 'Analytics'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights and News</title>
        <meta name="description" content="Stay updated with the latest AI and IT insights, trends, and best practices from our expert team." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, AI news, business technology" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest AI and IT insights and trends" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest AI and IT insights, trends, and best practices 
              from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-cyan-400">📰</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-cyan-400 text-sm">{featuredPost.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-4xl text-cyan-400">📝</div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-400 mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI and IT insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300">Have questions about our articles or want to contribute?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Tag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your inquiry"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;