'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming modern business operations and creating new opportunities.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Learn the essential strategies for successful cloud migration and avoiding common pitfalls.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Digital Age',
      excerpt: 'Understanding the latest cybersecurity threats and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Micro SaaS Development Guide',
      excerpt: 'Building scalable micro SaaS applications that solve real business problems.',
      author: 'Zion Tech Team',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
        image: '/images/blog/micro-saas.jpg'
      };
    ];
  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Security', 'Development'];
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, AI solutions, IT services" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group" />
        <meta name="twitter:description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced holographic-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced text-center">
              Our Blog
            </h1>
            
            <div className="cyber-card-enhanced mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="cyber-card-enhanced group hover:shadow-neon-cyan transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
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
                      
                      <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
