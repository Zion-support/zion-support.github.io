import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "5g", name: "5G Technology", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Transform Your Operations",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and creating new opportunities for growth.",
      content: "Artificial intelligence is no longer a futuristic concept but a present reality that's transforming how businesses operate. From automating routine tasks to providing deep insights through data analysis, AI is becoming an essential tool for competitive advantage...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/600/300",
      tags: ["AI", "Business", "Automation", "Innovation"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats and ensure data security.",
      content: "As cyber threats become more sophisticated, businesses must adopt comprehensive security strategies. This guide covers the latest best practices for protecting your digital assets...",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      image: "/api/placeholder/600/300",
      tags: ["Security", "Cybersecurity", "Best Practices", "Data Protection"]
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Step-by-step guide to successfully migrating your infrastructure to the cloud while minimizing risks.",
      content: "Cloud migration is a complex process that requires careful planning and execution. This comprehensive guide walks you through every step of the migration journey...",
      author: "Jennifer Liu",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/api/placeholder/600/300",
      tags: ["Cloud", "Migration", "Enterprise", "Infrastructure"]
    },
    {
      id: 4,
      title: "5G Networks: Revolutionizing Connectivity",
      excerpt: "Explore how 5G technology is transforming industries and enabling new possibilities for innovation.",
      content: "5G networks are not just faster internet connections; they're the foundation for a new era of connectivity that will enable autonomous vehicles, smart cities, and IoT applications...",
      author: "David Park",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "5g",
      image: "/api/placeholder/600/300",
      tags: ["5G", "Connectivity", "IoT", "Innovation"]
    },
    {
      id: 5,
      title: "AI-Powered Analytics: Unlocking Business Insights",
      excerpt: "Learn how AI-driven analytics can help you make better business decisions and identify new opportunities.",
      content: "Traditional analytics can only take you so far. AI-powered analytics can process vast amounts of data to uncover patterns and insights that would be impossible to find manually...",
      author: "Dr. Sarah Chen",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "ai",
      image: "/api/placeholder/600/300",
      tags: ["AI", "Analytics", "Data Science", "Business Intelligence"]
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture: The New Standard",
      excerpt: "Implementing zero trust security principles to protect your organization from modern cyber threats.",
      content: "Zero trust security is based on the principle of 'never trust, always verify.' This approach provides better security than traditional perimeter-based models...",
      author: "Michael Rodriguez",
      date: "2024-01-03",
      readTime: "8 min read",
      category: "cybersecurity",
      image: "/api/placeholder/600/300",
      tags: ["Zero Trust", "Security", "Architecture", "Best Practices"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry news, and expert analysis from Zion Tech Group's blog." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity news, cloud computing, 5G technology, tech trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with expert analysis, industry trends, and cutting-edge technology insights
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-cyan-500 text-white"
                        : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400/50" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest technology insights, industry trends, and expert analysis delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;