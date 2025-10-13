import React from "react";
import { ArrowRight, Calendar, User, Tag, Search, Filter, Clock, Eye, Heart, Share, BookOpen, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2024 and how companies can leverage these technologies for growth.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["AI", "Business", "Technology", "Future"]
    },
    {
      id: 2,
      title: "Micro SAAS: The Future of Software Distribution",
      excerpt: "Discover how micro SAAS solutions are revolutionizing the software industry and creating new opportunities for businesses.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      category: "Micro SAAS",
      readTime: "7 min read",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Micro SAAS", "Software", "Business", "Innovation"]
    },
    {
      id: 3,
      title: "5G Technology: Transforming Industries and Creating New Possibilities",
      excerpt: "Learn how 5G technology is reshaping industries and enabling new applications across various sectors.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      category: "5G Technology",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["5G", "Technology", "Innovation", "Connectivity"]
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies and best practices to protect your business from evolving threats.",
      author: "Zion Tech Group",
      date: "2024-01-01",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cybersecurity", "Security", "Business", "Protection"]
    },
    {
      id: 5,
      title: "Cloud Migration: A Complete Guide for Businesses",
      excerpt: "Everything you need to know about migrating to the cloud, including strategies, benefits, and common pitfalls.",
      author: "Zion Tech Group",
      date: "2023-12-28",
      category: "Cloud Computing",
      readTime: "10 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cloud", "Migration", "Business", "Technology"]
    },
    {
      id: 6,
      title: "The Rise of AI-Powered Customer Support",
      excerpt: "How AI is transforming customer support and improving customer experiences across industries.",
      author: "Zion Tech Group",
      date: "2023-12-25",
      category: "AI & Machine Learning",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI", "Customer Support", "Automation", "Business"]
    }
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    { id: "ai", name: "AI & Machine Learning", count: blogPosts.filter(post => post.category === "AI & Machine Learning").length },
    { id: "micro-saas", name: "Micro SAAS", count: blogPosts.filter(post => post.category === "Micro SAAS").length },
    { id: "5g", name: "5G Technology", count: blogPosts.filter(post => post.category === "5G Technology").length },
    { id: "cybersecurity", name: "Cybersecurity", count: blogPosts.filter(post => post.category === "Cybersecurity").length },
    { id: "cloud", name: "Cloud Computing", count: blogPosts.filter(post => post.category === "Cloud Computing").length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, business innovation, and industry trends from Zion Tech Group experts."
        keywords="technology blog, AI insights, business innovation, tech trends, micro SAAS, 5G technology, cybersecurity"
        canonical="/blog"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Insights & Trends</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Blog
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with insights, trends, and expert analysis on AI, technology, 
            and business innovation from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and trending articles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-cyan-400" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete collection of articles and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-cyan-400" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest trends, insights, and innovations in technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
