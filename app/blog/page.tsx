import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI",
      featured: true,
      readTime: "5 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      excerpt: "A comprehensive guide to successfully migrating your business to the cloud with minimal downtime.",
      author: "Zion Tech Team",
      date: "2024-01-10",
      category: "Cloud",
      featured: true,
      readTime: "7 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Cybersecurity Trends for 2024",
      excerpt: "Stay ahead of the latest cybersecurity threats and learn how to protect your business.",
      author: "Zion Tech Team",
      date: "2024-01-05",
      category: "Security",
      featured: false,
      readTime: "6 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "5G Implementation Strategies",
      excerpt: "How to leverage 5G technology to enhance your business operations and customer experience.",
      author: "Zion Tech Team",
      date: "2024-01-01",
      category: "5G",
      featured: false,
      readTime: "8 min read",
      image: "/api/placeholder/600/300"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Blog - Technology Insights & Industry News | Zion Tech Group"
        description="Stay updated with the latest technology trends, AI insights, cloud strategies, and cybersecurity news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cloud computing, cybersecurity, 5G, business technology, tech trends"
      />
      
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, insights, and industry news from our experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest technology insights and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;