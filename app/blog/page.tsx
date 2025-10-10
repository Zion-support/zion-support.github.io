'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
  image: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

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
      image: '/images/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Strategies for Modern Businesses',
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud while maintaining security and performance.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Infrastructure'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every business should implement to protect against evolving cyber threats.',
      content: 'Full article content...',
      author: 'Emily Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Best Practices', 'Threats'],
      image: '/images/blog/cybersecurity.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to make informed business decisions and drive growth.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Data Analytics',
      tags: ['Analytics', 'Data', 'Insights'],
      image: '/images/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding edge computing and its impact on modern IT infrastructure and applications.',
      content: 'Full article content...',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['Edge Computing', 'Infrastructure', 'Performance'],
      image: '/images/blog/edge-computing.jpg',
      featured: false
    },
    {
      id: '6',
      title: 'Building Scalable Web Applications',
      excerpt: 'Best practices for creating web applications that can handle growth and high traffic loads.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Web Development',
      tags: ['Web Development', 'Scalability', 'Performance'],
      image: '/images/blog/web-applications.jpg',
      featured: false
    }
  ];

  const categories = [
    'all',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Data Analytics',
    'Technology',
    'Web Development'
  ];

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, data analytics, tech news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest technology trends, AI insights, and industry news from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                    <div className="h-64 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Tag className="w-8 h-8" />
                        </div>
                        <p className="text-sm opacity-80">Featured Article</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              {featuredPosts.length > 0 ? 'All Articles' : 'Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="w-6 h-6" />
                      </div>
                      <p className="text-xs opacity-80">Article</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Subscribe to our newsletter for the latest technology insights and industry news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default BlogPage;