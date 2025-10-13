'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User, Clock, Tag, Search, Filter } from 'lucide-react';
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.",
      content: "Artificial Intelligence continues to revolutionize business operations across industries. From predictive analytics to automated customer service, AI is becoming an essential tool for competitive advantage...",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Technology", "Innovation"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Blockchain Technology: Beyond Cryptocurrency",
      excerpt: "Discover how blockchain is transforming industries beyond finance, from supply chain to healthcare.",
      content: "While blockchain technology gained fame through cryptocurrencies, its applications extend far beyond digital money. Supply chain management, healthcare records, and even voting systems are being revolutionized...",
      author: "Michael Rodriguez",
      authorRole: "Blockchain Specialist",
      publishDate: "2024-01-12",
      readTime: "6 min read",
      category: "Blockchain",
      tags: ["Blockchain", "Supply Chain", "Healthcare", "Innovation"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Remote Work",
      excerpt: "Essential security measures to protect your business in the era of remote and hybrid work.",
      content: "The shift to remote work has created new security challenges for businesses. From endpoint protection to secure communication channels, organizations must adapt their security strategies...",
      author: "Emily Johnson",
      authorRole: "Cybersecurity Expert",
      publishDate: "2024-01-10",
      readTime: "5 min read",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "Remote Work", "Best Practices", "Security"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step guide to successfully migrating your infrastructure to the cloud.",
      content: "Cloud migration is no longer optional for modern businesses. However, the process requires careful planning and execution to avoid common pitfalls and ensure a smooth transition...",
      author: "David Kim",
      authorRole: "Cloud Solutions Architect",
      publishDate: "2024-01-08",
      readTime: "10 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "AWS", "Azure", "Strategy"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: What It Means for Your Business",
      excerpt: "Understanding edge computing and its potential to transform data processing and application performance.",
      content: "Edge computing is bringing data processing closer to where it's needed, reducing latency and improving performance. This technology is particularly important for IoT applications and real-time analytics...",
      author: "Lisa Thompson",
      authorRole: "Edge Computing Specialist",
      publishDate: "2024-01-05",
      readTime: "7 min read",
      category: "Edge Computing",
      tags: ["Edge Computing", "IoT", "Performance", "Data Processing"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable Technology: Building a Greener Future",
      excerpt: "How technology companies are embracing sustainability and reducing their environmental impact.",
      content: "Sustainability is becoming a key focus for technology companies. From green data centers to energy-efficient algorithms, the tech industry is finding innovative ways to reduce its carbon footprint...",
      author: "Alex Chen",
      authorRole: "Sustainability Director",
      publishDate: "2024-01-03",
      readTime: "6 min read",
      category: "Sustainability",
      tags: ["Sustainability", "Green Tech", "Environment", "Innovation"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Blockchain",
    "Cybersecurity",
    "Cloud Computing",
    "Edge Computing",
    "Sustainability"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Technology Insights & Industry News | Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest technology trends, AI insights, blockchain developments, and cybersecurity best practices from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, blockchain news, cybersecurity tips, cloud computing, edge computing, sustainability, tech trends"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, blockchain, cybersecurity, 
              and the latest technology trends shaping our digital future.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="bg-white/10 border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option value="">All Categories</option>
                  {categories.slice(1).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Article
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-400 mb-6">
                      <div className="flex items-center mr-6">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center mr-6">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredPost.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Featured Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our collection of expert insights and industry analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-400">Article Image</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest technology insights and industry updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;