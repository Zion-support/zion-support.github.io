import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
      content: "Artificial Intelligence continues to revolutionize the business landscape...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Business", "Innovation", "Technology"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "5G Technology: Transforming Connectivity and IoT",
      excerpt: "Learn how 5G networks are enabling new possibilities in IoT, edge computing, and real-time applications across various industries.",
      content: "The rollout of 5G technology is creating unprecedented opportunities...",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "technology",
      tags: ["5G", "IoT", "Connectivity", "Edge Computing"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Essential cybersecurity strategies and practices that every organization should implement to protect against evolving threats.",
      content: "In today's digital landscape, cybersecurity is more critical than ever...",
      author: "Alex Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "technology",
      tags: ["Cybersecurity", "Enterprise", "Security", "Best Practices"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Digital Transformation: A Strategic Guide for CTOs",
      excerpt: "A comprehensive guide to digital transformation strategies that drive business growth and operational efficiency.",
      content: "Digital transformation is no longer optional for businesses...",
      author: "Emily Watson",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "business",
      tags: ["Digital Transformation", "Strategy", "CTO", "Innovation"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Current Applications and Future Potential",
      excerpt: "Discover how machine learning is revolutionizing healthcare delivery and improving patient outcomes.",
      content: "Machine learning is transforming healthcare in unprecedented ways...",
      author: "Dr. James Wilson",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "ai",
      tags: ["Machine Learning", "Healthcare", "AI", "Medical Technology"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Cloud Computing Trends: What to Expect in 2024",
      excerpt: "An in-depth look at emerging cloud computing trends and how they're shaping the future of enterprise technology.",
      content: "Cloud computing continues to evolve at a rapid pace...",
      author: "Lisa Park",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "technology",
      tags: ["Cloud Computing", "Enterprise", "Technology Trends", "Infrastructure"],
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI, Technology & Business Insights</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology, and business innovation. Expert articles, case studies, and industry trends from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, technology insights, business innovation, artificial intelligence, digital transformation, cybersecurity, 5G technology"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Latest Insights & Trends</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                Our Blog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, technology, and business innovation. 
              Expert articles, case studies, and industry trends from our team of specialists.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles, topics, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="lg:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Featured Article
                  </span>
                </h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white/50" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === featuredPost.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-300">{featuredPost.author}</span>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Latest Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover insights, trends, and expert analysis on the latest in technology and business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white/50" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Subscribe
                  <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}