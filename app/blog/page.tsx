'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'tech', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive growth.',
      content: 'Full article content...',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Enterprise', 'Trends', '2024']
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure: A Complete Guide',
      excerpt: 'Learn how to design and implement cloud infrastructure that can scale with your business needs.',
      content: 'Full article content...',
      author: 'Tech Team',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'tech',
      image: '/api/placeholder/400/250',
      tags: ['Cloud', 'Infrastructure', 'Scalability', 'AWS']
    },
    {
      id: 3,
      title: 'How AI is Transforming Customer Service',
      excerpt: 'Discover how AI-powered customer service solutions are revolutionizing the way businesses interact with customers.',
      content: 'Full article content...',
      author: 'AI Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Customer Service', 'Automation', 'CX']
    },
    {
      id: 4,
      title: 'Digital Transformation: A Step-by-Step Guide',
      excerpt: 'A comprehensive guide to digital transformation for modern businesses looking to stay competitive.',
      content: 'Full article content...',
      author: 'Business Team',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'business',
      image: '/api/placeholder/400/250',
      tags: ['Digital Transformation', 'Business', 'Strategy', 'Innovation']
    },
    {
      id: 5,
      title: 'Getting Started with Machine Learning: A Beginner\'s Tutorial',
      excerpt: 'Learn the fundamentals of machine learning with practical examples and hands-on exercises.',
      content: 'Full article content...',
      author: 'ML Team',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'tutorials',
      image: '/api/placeholder/400/250',
      tags: ['Machine Learning', 'Tutorial', 'Beginner', 'Python']
    },
    {
      id: 6,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential cybersecurity practices every business should implement to protect their digital assets.',
      content: 'Full article content...',
      author: 'Security Team',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'tech',
      image: '/api/placeholder/400/250',
      tags: ['Cybersecurity', 'Security', 'Best Practices', '2024']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation. Expert articles, tutorials, and industry trends." />
        <meta name="keywords" content="AI blog, technology insights, machine learning articles, business innovation, tech tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Tech Insights & AI Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, technology trends, and business innovation from our expert team.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="max-w-6xl mx-auto mb-16">
              <div className="cyber-card hologram-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">
                        {filteredPosts[0].category.toUpperCase()}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
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
                    <Link
                      to={`/blog/${filteredPosts[0].id}`}
                      className="cyber-button inline-flex items-center"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <div className="bg-gray-800 rounded-lg h-64 lg:h-80 flex items-center justify-center">
                    <span className="text-gray-400">Featured Image</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Post Image</span>
                  </div>
                  
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

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="cyber-card hologram-card p-8 max-w-md mx-auto">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Articles Found</h3>
                  <p className="text-gray-400">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest AI and technology insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="cyber-button px-6 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;