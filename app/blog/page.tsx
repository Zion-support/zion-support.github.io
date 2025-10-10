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
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and driving innovation.',
      content: 'Full article content here...',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['AI', 'Enterprise', 'Innovation']
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successful cloud migration strategies for modern businesses.',
      content: 'Full article content here...',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Best Practices']
    },
    {
      id: '3',
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest cybersecurity trends and how to protect your business from emerging threats.',
      content: 'Full article content here...',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'Trends', 'Protection']
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'IT'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, and technology trends.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;