'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 'ai-transforming-business',
      title: 'How AI is Transforming Business Operations in 2024',
      excerpt: 'Discover the latest AI trends and how they\'re revolutionizing business operations across industries.',
      content: 'Full article content...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Automation', 'Technology'],
      image: '/images/blog/ai-business.jpg',
      featured: true
    },
    {
      id: 'cybersecurity-best-practices',
      title: 'Essential Cybersecurity Best Practices for 2024',
      excerpt: 'Learn the most important cybersecurity practices to protect your business from evolving threats.',
      content: 'Full article content...',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Best Practices', 'Protection', 'IT'],
      image: '/images/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: 'cloud-migration-guide',
      title: 'Complete Guide to Cloud Migration: Strategies and Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Strategy', 'Infrastructure'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 'ai-ethics-responsible-development',
      title: 'The Ethics of AI: Building Responsible AI Systems',
      excerpt: 'Exploring the ethical considerations in AI development and deployment.',
      content: 'Full article content...',
      author: 'Dr. James Wilson',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI Ethics', 'Responsible AI', 'Ethics', 'Development'],
      image: '/images/blog/ai-ethics.jpg',
      featured: true
    },
    {
      id: 'data-analytics-business-insights',
      title: 'Leveraging Data Analytics for Better Business Insights',
      excerpt: 'How to use data analytics to drive better business decisions and improve performance.',
      content: 'Full article content...',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Data Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Insights', 'Data'],
      image: '/images/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: 'future-of-work-remote-collaboration',
      title: 'The Future of Work: Remote Collaboration and Digital Tools',
      excerpt: 'Exploring how digital tools and AI are shaping the future of remote work.',
      content: 'Full article content...',
      author: 'David Park',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Digital Transformation',
      tags: ['Remote Work', 'Collaboration', 'Digital Tools', 'Future'],
      image: '/images/blog/future-work.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Data Analytics', 'Digital Transformation'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and digital transformation. Expert articles and industry trends." />
        <meta name="keywords" content="AI blog, IT insights, technology articles, cybersecurity news, cloud computing trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  & Articles
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest insights on AI, cybersecurity, cloud computing, and digital transformation from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter and get the latest AI and IT insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;