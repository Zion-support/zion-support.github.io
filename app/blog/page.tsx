'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchResults, setSearchResults] = useState([]);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['AI', 'Enterprise', 'Trends'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs Reality',
      excerpt: 'A comprehensive look at quantum computing capabilities, current limitations, and practical applications for businesses.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Quantum',
      tags: ['Quantum Computing', 'Technology', 'Analysis'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding how AI is both creating new security challenges and providing innovative solutions for modern businesses.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'AI', 'Security'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Microservices with AI Integration',
      excerpt: 'Learn how to design and implement microservices architecture that seamlessly integrates with AI capabilities.',
      content: 'Full article content...',
      author: 'Jennifer Liu',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Development',
      tags: ['Microservices', 'AI', 'Architecture'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'The ROI of AI Implementation: Measuring Success',
      excerpt: 'A data-driven approach to measuring the return on investment for AI implementations in enterprise environments.',
      content: 'Full article content...',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Business',
      tags: ['ROI', 'AI', 'Business'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'Edge Computing and AI: Bringing Intelligence to the Edge',
      excerpt: 'Explore how edge computing is revolutionizing AI deployment and enabling real-time intelligent applications.',
      content: 'Full article content...',
      author: 'Maria Garcia',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Technology',
      tags: ['Edge Computing', 'AI', 'IoT'],
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['all', 'AI', 'Quantum', 'Security', 'Development', 'Business', 'Technology'];

  useEffect(() => {
    let filtered = blogPosts;

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setSearchResults(filtered);
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = searchResults.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, enterprise AI, tech trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, quantum computing, cybersecurity, and the latest technology trends.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="capitalize">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center neon-text">Featured Article</h2>
              <div className="max-w-6xl mx-auto">
                <article className="cyber-card hologram-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-medium">{featuredPost.category}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="cyber-button inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    <div className="lg:order-first">
                      <div className="w-full h-64 lg:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-6xl">📰</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          )}

          {/* Articles Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center neon-text">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-4">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-medium text-sm">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
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
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </article>
                ))}
              </div>
              
              {searchResults.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

