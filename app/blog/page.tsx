'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small to Medium Businesses',
      excerpt: 'Learn essential cybersecurity strategies to protect your business from evolving digital threats.',
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cloud Migration: A Step-by-Step Guide for Enterprises',
      excerpt: 'Discover the benefits and process of migrating your infrastructure to the cloud safely and efficiently.',
      author: 'Cloud Solutions Team',
      date: '2024-01-05',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Data Analytics: Turning Raw Data into Business Insights',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
      author: 'Data Team',
      date: '2024-01-01',
      category: 'Data Analytics',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'The Rise of Micro SaaS: Building Scalable Software Solutions',
      excerpt: 'Explore how micro SaaS solutions are revolutionizing the software industry and creating new opportunities.',
      author: 'Product Team',
      date: '2023-12-28',
      category: 'Software Development',
      readTime: '9 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'Understand the key components of digital transformation and how to implement them successfully.',
      author: 'Strategy Team',
      date: '2023-12-20',
      category: 'Digital Transformation',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
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
        <title>Blog | Zion Tech Group - AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team." />
        <meta name="keywords" content="AI blog, technology insights, cloud computing, cybersecurity, data analytics, digital transformation" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Insights, trends, and expert advice on AI, cloud computing, cybersecurity, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {post.id}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    
                    <div className="mb-2">
                      <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI, cloud computing, and technology trends.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;