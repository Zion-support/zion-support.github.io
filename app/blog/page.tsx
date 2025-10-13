import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in 2024.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      image: "/images/blog/ai-business-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their digital assets.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/images/blog/cybersecurity-small-business.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Step-by-step guide to migrating your business to the cloud safely and efficiently.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/images/blog/cloud-migration-guide.jpg",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights & News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and business transformation strategies from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, cloud computing, business transformation, tech news"
        canonical="https://ziontechgroup.com/blog"
      />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with the latest technology trends, expert insights, and practical guides from our team of specialists.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="mt-4 flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest technology trends, AI insights, and business transformation tips delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;