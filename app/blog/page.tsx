'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag, TrendingUp } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping the business landscape in 2024 and beyond.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Trends', 'Future'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration.',
      content: 'Cloud migration is a critical step in digital transformation...',
      author: 'Mike Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats.',
      content: 'With cyber threats becoming more sophisticated...',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Threats', 'Protection', 'Compliance'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Micro SAAS Solutions: The Future of Business Tools',
      excerpt: 'Discover how micro SAAS solutions are transforming business operations.',
      content: 'Micro SAAS solutions are revolutionizing how businesses...',
      author: 'Jennifer Lee',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Micro SAAS',
      tags: ['SAAS', 'Tools', 'Productivity', 'Automation'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to leverage data analytics for better business decisions.',
      content: 'Data is the new oil, but only if you know how to refine it...',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      tags: ['Analytics', 'Data', 'Insights', 'BI'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Quantum Computing: The Next Frontier',
      excerpt: 'Exploring the potential of quantum computing in solving complex problems.',
      content: 'Quantum computing represents a paradigm shift...',
      author: 'Dr. Maria Garcia',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Emerging Tech',
      tags: ['Quantum', 'Computing', 'Future', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Micro SAAS', 'Data Analytics', 'Emerging Tech'];

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
        <title>Blog | Zion Tech Group - AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, business automation, cloud computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Blog">
              Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-text">
              Insights, trends, and expert analysis on AI, IT solutions, and emerging technologies.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="lg:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {searchTerm === '' && selectedCategory === 'All' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group">
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
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-colors duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
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
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'All Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group">
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
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights on AI, IT solutions, and technology trends.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="cyber-button text-center py-3 px-6 group-hover:scale-105 transition-all duration-300">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform inline" />
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