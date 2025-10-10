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

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping the business landscape in 2024.',
      content: 'Full article content here...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['artificial intelligence', 'business trends', 'technology'],
      featured: true,
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: '2',
      title: 'How Micro SaaS is Revolutionizing Small Business Operations',
      excerpt: 'Discover how micro SaaS solutions are empowering small businesses to compete with enterprises.',
      content: 'Full article content here...',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'SaaS',
      tags: ['micro saas', 'small business', 'automation'],
      featured: false,
      image: '/images/blog/micro-saas.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures to protect your remote workforce and sensitive data.',
      content: 'Full article content here...',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Security',
      tags: ['cybersecurity', 'remote work', 'data protection'],
      featured: true,
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: '4',
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content here...',
      author: 'Emily Watson',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Cloud',
      tags: ['cloud migration', 'infrastructure', 'strategy'],
      featured: false,
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: '5',
      title: 'The Role of Machine Learning in Customer Experience',
      excerpt: 'How ML is transforming customer interactions and improving satisfaction rates.',
      content: 'Full article content here...',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'AI',
      tags: ['machine learning', 'customer experience', 'automation'],
      featured: false,
      image: '/images/blog/ml-customer-experience.jpg'
    },
    {
      id: '6',
      title: 'Building Scalable IT Infrastructure for Growing Companies',
      excerpt: 'Key considerations for designing IT infrastructure that grows with your business.',
      content: 'Full article content here...',
      author: 'Lisa Thompson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Infrastructure',
      tags: ['infrastructure', 'scalability', 'growth'],
      featured: false,
      image: '/images/blog/scalable-infrastructure.jpg'
    }
  ];

  const categories = ['all', 'AI', 'SaaS', 'Security', 'Cloud', 'Infrastructure'];

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
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, artificial intelligence, cloud computing, cybersecurity" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tech Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, IT solutions, and emerging technologies from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
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
                        {category === 'all' ? 'All Categories' : category}
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
        {selectedCategory === 'all' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl">📝</div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-yellow-400 text-xs">⭐ Featured</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">📝</div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="text-yellow-400 text-xs">⭐ Featured</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <button className="w-full mt-4 flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Get the latest AI and IT insights delivered to your inbox. No spam, unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors">
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