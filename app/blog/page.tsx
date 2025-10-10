'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Technology'],
      featured: true,
      image: '/images/blog/ai-enterprise.jpg'
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking New Grounds',
      excerpt: 'Understanding the revolutionary potential of quantum computing and its practical applications in modern technology.',
      content: 'Full article content...',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Computing', 'Innovation'],
      featured: true,
      image: '/images/blog/quantum-computing.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity in the Digital Age',
      excerpt: 'Essential strategies for protecting your digital assets in an increasingly connected world.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Digital', 'Protection'],
      featured: false,
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: '4',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Jennifer Lee',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Cloud Services',
      tags: ['Cloud', 'Migration', 'Infrastructure'],
      featured: false,
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: '5',
      title: 'The Rise of Edge Computing',
      excerpt: 'How edge computing is revolutionizing data processing and reducing latency.',
      content: 'Full article content...',
      author: 'David Park',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'Edge Computing',
      tags: ['Edge', 'Computing', 'Performance'],
      featured: false,
      image: '/images/blog/edge-computing.jpg'
    },
    {
      id: '6',
      title: 'Digital Transformation Strategies',
      excerpt: 'Key strategies for successful digital transformation in modern enterprises.',
      content: 'Full article content...',
      author: 'Maria Garcia',
      date: '2023-12-25',
      readTime: '8 min read',
      category: 'Digital Transformation',
      tags: ['Digital', 'Transformation', 'Strategy'],
      featured: true,
      image: '/images/blog/digital-transformation.jpg'
    }
  ];

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, quantum computing, cybersecurity, digital transformation, technology insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech Insights & <span className="text-cyan-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, quantum computing, cybersecurity, and the latest technological breakthroughs.
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
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="flex items-center gap-1 bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest tech insights and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors">
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