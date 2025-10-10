'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they will transform business operations in the coming year.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read',
      image: '/blog/ai-trends-2024.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Cloud',
      readTime: '8 min read',
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is changing the cybersecurity landscape and what it means for your business.',
      author: 'Michael Chen',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read',
      image: '/blog/ai-cybersecurity.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Applications with Modern Architecture',
      excerpt: 'A comprehensive guide to designing and building applications that can grow with your business.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Development',
      readTime: '10 min read',
      image: '/blog/scalable-apps.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to leverage data analytics to make better business decisions and drive growth.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      category: 'Analytics',
      readTime: '7 min read',
      image: '/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: What It Means for Your Business',
      excerpt: 'Explore the benefits and challenges of edge computing and how it can improve your operations.',
      author: 'Alex Rodriguez',
      date: '2023-12-25',
      category: 'Technology',
      readTime: '6 min read',
      image: '/blog/edge-computing.jpg',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'AI', name: 'AI' },
    { id: 'Cloud', name: 'Cloud' },
    { id: 'Security', name: 'Security' },
    { id: 'Development', name: 'Development' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Technology', name: 'Technology' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology blog, cloud computing, cybersecurity, software development, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI, cloud computing, cybersecurity, 
            and technology trends from our expert team.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📝</div>
                      <p className="text-lg">Featured Article</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div>{featuredPost.readTime}</div>
                    </div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-slate-700 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest insights on AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
