'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
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

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      content: 'Exploring how AI is transforming enterprise solutions and what businesses need to know...',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['AI', 'Enterprise', 'Technology'],
      image: '/images/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for 2024',
      content: 'Essential cybersecurity measures every business should implement to protect their data...',
      author: 'Security Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'Best Practices', 'Data Protection'],
      image: '/images/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies',
      content: 'A comprehensive guide to migrating your infrastructure to the cloud successfully...',
      author: 'Cloud Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Infrastructure'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    }
  ];

  const categories = ['all', 'AI', 'Security', 'Cloud', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, cybersecurity, and technology trends" />
        <meta name="keywords" content="AI blog, technology insights, cybersecurity, cloud computing" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, cybersecurity, and technology trends" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Stay updated with the latest trends, insights, and best practices in AI, cybersecurity, and technology.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category === 'all' ? 'All Posts' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-400/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="w-6 h-6 text-cyan-400" />
                      </div>
                      <p className="text-gray-300 text-sm">Blog Image</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.content}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter for the latest tech insights and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
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