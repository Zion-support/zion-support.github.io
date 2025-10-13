import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: "all", name: "All Posts", count: 8 },
    { id: "ai", name: "Artificial Intelligence", count: 3 },
    { id: "cybersecurity", name: "Cybersecurity", count: 2 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in 2024.",
      content: "Artificial intelligence continues to revolutionize the business landscape...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "ai",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data and operations.",
      content: "Small businesses are increasingly becoming targets for cyber attacks...",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "cybersecurity",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Step-by-step guide to successfully migrating your business to the cloud.",
      content: "Cloud migration has become essential for modern businesses...",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "cloud",
      readTime: "10 min read",
      featured: true
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Learn how to create web applications that can handle millions of users.",
      content: "Scalability is crucial for modern web applications...",
      author: "David Kim",
      date: "2024-01-01",
      category: "development",
      readTime: "8 min read",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group Insights & News</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and news in AI, cybersecurity, cloud computing, and technology from Zion Tech Group experts." />
        <meta name="keywords" content="tech blog, AI insights, cybersecurity news, cloud computing, technology trends, IT solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Tech Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and practical guides 
              from our team of technology professionals.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">Featured Article</span>
                </div>
                {(() => {
                  const featuredPost = filteredPosts.find(post => post.featured);
                  return featuredPost ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                        <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                        <div className="flex items-center text-gray-400 text-sm mb-6">
                          <User className="w-4 h-4 mr-2" />
                          <span className="mr-4">{featuredPost.author}</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <Link
                          to={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                      <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 rounded-lg p-8 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Tag className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">Featured Content</h3>
                          <p className="text-gray-300 text-sm">
                            In-depth analysis and expert insights on the latest technology trends.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-gray-400 text-xs mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
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
