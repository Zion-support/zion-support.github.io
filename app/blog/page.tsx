'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  Tag,
  TrendingUp
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Development',
    'Business',
    'Technology Trends'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are transforming businesses in 2024, from generative AI to autonomous systems.',
      content: 'Artificial Intelligence continues to revolutionize the business landscape...',
      author: 'Dr. Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Business', 'Trends', '2024'],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration with real-world examples.',
      content: 'Cloud migration is a critical step for modern businesses...',
      author: 'Mike Chen',
      date: 'March 12, 2024',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Discover the latest cybersecurity threats and how to protect your organization with advanced security measures.',
      content: 'Cybersecurity threats are evolving rapidly...',
      author: 'Alex Rodriguez',
      date: 'March 10, 2024',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      tags: ['Security', 'Threats', 'Protection', '2024'],
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Microservices with Modern Architecture',
      excerpt: 'Learn how to design and implement microservices that can scale with your business growth.',
      content: 'Microservices architecture has become the standard...',
      author: 'Jennifer Lee',
      date: 'March 8, 2024',
      readTime: '15 min read',
      category: 'Development',
      image: '/api/placeholder/600/400',
      tags: ['Microservices', 'Architecture', 'Scalability', 'Development'],
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Quantum Computing: What It Means for Businesses',
      excerpt: 'Understand how quantum computing will impact various industries and what businesses need to prepare for.',
      content: 'Quantum computing represents a paradigm shift...',
      author: 'Dr. Robert Kim',
      date: 'March 5, 2024',
      readTime: '11 min read',
      category: 'Technology Trends',
      image: '/api/placeholder/600/400',
      tags: ['Quantum', 'Computing', 'Future', 'Technology'],
      featured: true
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Business Value',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
      content: 'Data is the new oil, but only if you know how to refine it...',
      author: 'Maria Garcia',
      date: 'March 3, 2024',
      readTime: '9 min read',
      category: 'Business',
      image: '/api/placeholder/600/400',
      tags: ['Analytics', 'Data', 'Business', 'Insights'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team." />
        <meta name="keywords" content="AI blog, technology blog, cloud computing, cybersecurity, machine learning, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cloud computing, cybersecurity, 
              and technology trends from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'All' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-cyan-400" />
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
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
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-400">{post.category}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
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
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400">{post.category}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest technology insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
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