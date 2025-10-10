'use client';
import React from 'react';
'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest trends and threats in cybersecurity and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = ['All Posts', 'AI', 'Cloud', 'Security', 'Development'];

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const searchResults = searchQuery 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredPosts;

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Insights, trends, and expert perspectives on AI, technology, and business transformation.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((post) => (
                <article key={post.id} className="cyber-card p-6">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">{post.title.charAt(0)}</span>
                    </div>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {searchResults.length === 0 && (
              <div className="text-center py-16">
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