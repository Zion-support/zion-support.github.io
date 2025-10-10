'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are transforming businesses worldwide and what to expect in 2024.',
      content: 'Artificial Intelligence continues to revolutionize the business landscape...',
      author: 'Dr. Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-trends-2024.jpg',
      tags: ['AI', 'Business', 'Technology', 'Trends']
    },
    {
      id: 2,
      title: 'How Micro SAAS Solutions Are Changing the Game for Small Businesses',
      excerpt: 'Discover how affordable micro SAAS tools are empowering small businesses to compete with enterprise solutions.',
      content: 'Small businesses are no longer limited by budget constraints when it comes to powerful software solutions...',
      author: 'Mike Chen',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'Micro SAAS',
      image: '/images/blog/micro-saas-small-business.jpg',
      tags: ['Micro SAAS', 'Small Business', 'Productivity', 'Tools']
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures every remote team should implement to protect sensitive data and systems.',
      content: 'With remote work becoming the new norm, cybersecurity has never been more critical...',
      author: 'Alex Rodriguez',
      date: 'December 10, 2024',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '/images/blog/remote-work-security.jpg',
      tags: ['Cybersecurity', 'Remote Work', 'Data Protection', 'Best Practices']
    },
    {
      id: 4,
      title: 'Cloud Migration: A Step-by-Step Guide for Enterprise Success',
      excerpt: 'Learn the proven strategies for successful cloud migration without disrupting business operations.',
      content: 'Cloud migration is a complex process that requires careful planning and execution...',
      author: 'Jennifer Lee',
      date: 'December 8, 2024',
      readTime: '12 min read',
      category: 'Cloud Services',
      image: '/images/blog/cloud-migration-guide.jpg',
      tags: ['Cloud Migration', 'Enterprise', 'Strategy', 'Best Practices']
    },
    {
      id: 5,
      title: 'AI-Powered Customer Support: Revolutionizing Customer Experience',
      excerpt: 'How AI chatbots and automation are transforming customer support and improving satisfaction rates.',
      content: 'Customer support has evolved dramatically with the integration of AI technologies...',
      author: 'David Kim',
      date: 'December 5, 2024',
      readTime: '7 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-customer-support.jpg',
      tags: ['AI', 'Customer Support', 'Automation', 'Customer Experience']
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing AI Closer to the Source',
      excerpt: 'Understanding edge computing and its role in enabling real-time AI applications and IoT solutions.',
      content: 'Edge computing is revolutionizing how we process data and run AI applications...',
      author: 'Maria Garcia',
      date: 'December 3, 2024',
      readTime: '9 min read',
      category: 'Emerging Tech',
      image: '/images/blog/edge-computing-ai.jpg',
      tags: ['Edge Computing', 'AI', 'IoT', 'Real-time Processing']
    }
  ];

  const categories = ['All', 'AI & Technology', 'Micro SAAS', 'Cybersecurity', 'Cloud Services', 'Emerging Tech'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, AI news, tech articles" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert analysis on AI, IT solutions, and emerging technologies.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
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

        {/* Blog Posts Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
              <span className="text-gray-300">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📝</div>
                  </div>
                  
                  <div className="p-6">
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
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="flex items-center text-xs text-gray-400">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;