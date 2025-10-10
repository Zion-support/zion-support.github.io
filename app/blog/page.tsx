'use client';
import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and driving innovation across industries.',
      author: 'Zion Tech Team',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'AI Solutions',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking New Grounds',
      excerpt: 'Understanding the revolutionary potential of quantum computing and its applications in solving complex problems.',
      author: 'Dr. Sarah Chen',
      date: 'Dec 12, 2024',
      readTime: '7 min read',
      category: 'Quantum Computing',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Micro SAAS: The New Era of Business Tools',
      excerpt: 'How micro SAAS solutions are democratizing access to powerful business tools and driving digital transformation.',
      author: 'Mike Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '4 min read',
      category: 'Micro SAAS',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Protecting your digital assets with AI-powered security solutions and best practices for modern businesses.',
      author: 'Alex Thompson',
      date: 'Dec 8, 2024',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Cloud Migration: A Complete Guide',
      excerpt: 'Step-by-step guide to migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      author: 'Jennifer Lee',
      date: 'Dec 5, 2024',
      readTime: '8 min read',
      category: 'Cloud Services',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Autonomous Systems',
      excerpt: 'How autonomous systems are reshaping industries and creating new opportunities for innovation and growth.',
      author: 'David Park',
      date: 'Dec 3, 2024',
      readTime: '5 min read',
      category: 'Autonomous Systems',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Tech Insights & Innovation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead with the latest insights on AI, quantum computing, and emerging technologies.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Featured Article</h2>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-gray-400 text-sm">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{filteredPosts[0].title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{filteredPosts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-400">Featured Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-gray-700 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
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
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
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
  );
};

export default BlogPage;