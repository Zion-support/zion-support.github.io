'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud while maintaining security and performance.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Cloud',
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn about emerging security technologies and strategies.',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Security',
      image: '/images/blog/cybersecurity.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="tech blog, AI insights, cloud computing, cybersecurity, technology trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Latest insights on AI, cloud computing, cybersecurity, and technology trends
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
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
                  
                  <h2 className="text-xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {post.category}
                    </span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
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
      
      <Footer />
    </>
  );
};

export default BlogPage;