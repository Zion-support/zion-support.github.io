import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import ResponsiveContainer from "../components/ResponsiveContainer";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Discover the latest trends in artificial intelligence and how they're transforming modern businesses.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/images/blog/ai-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS Solutions: The Key to Rapid Business Growth",
      excerpt: "Learn how micro SAAS solutions can accelerate your business growth and improve operational efficiency.",
      author: "Sarah Johnson",
      date: "2024-01-12",
      readTime: "4 min read",
      category: "Business",
      image: "/images/blog/micro-saas.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Small to Medium Businesses",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving digital threats.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Security",
      image: "/images/blog/cybersecurity.jpg"
    },
    {
      id: 4,
      title: "5G Technology: Revolutionizing Connectivity and IoT",
      excerpt: "Explore how 5G technology is transforming connectivity and enabling new IoT applications.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Technology",
      image: "/images/blog/5g-technology.jpg"
    },
    {
      id: 5,
      title: "Cloud Migration: A Step-by-Step Guide for Businesses",
      excerpt: "Complete guide to migrating your business to the cloud safely and efficiently.",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth.",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Analytics",
      image: "/images/blog/data-analytics.jpg"
    }
  ];

  const categories = ["All", "AI & Technology", "Business", "Security", "Technology", "Cloud Computing", "Analytics"];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, business solutions, and digital transformation. Expert articles from Zion Tech Group."
        keywords="technology blog, AI insights, business technology, digital transformation, cybersecurity, cloud computing, data analytics"
        canonical="/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Stay ahead of the curve with expert insights on AI, technology, and digital transformation. 
            Discover the latest trends and best practices from our team of experts.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          {filteredPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </ResponsiveContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on technology and business innovation.
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;
