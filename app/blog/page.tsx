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
  featured: boolean}
;
const BlogPage: React.FC = () => {
return (;
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('all');
const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>
);
}([]);
;
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
;
const categories = ['all', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Development'];

  useEffect(() => {;
let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    setFilteredPosts(filtered)}, [searchTerm, selectedCategory]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, blockchain, cloud computing, and IT solutions from Zion Tech Group experts." />
        <meta name="keywords" content="tech blog, AI insights, blockchain news, cloud computing, IT solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech Insights & News
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends in AI, blockchain, cloud computing, and IT solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value);
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                </div>
              </div>
            ));
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
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
                      {new Date(post.date).toLocaleDateString();
                    </span>
                    <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ));
            </div>
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
                </article>
              ));
            </div>
            
            {searchResults.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>);
          </div>
        </section>
      </div>
    </React.Fragment>)
export default BlogPage;

