import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "devops", name: "DevOps", count: 3 },
    { id: "security", name: "Cybersecurity", count: 2 },
    { id: "cloud", name: "Cloud Computing", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping business operations and driving innovation across industries.",
      content: "Artificial Intelligence continues to revolutionize how businesses operate, from automating routine tasks to providing deep insights through advanced analytics...",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Machine Learning", "Business Intelligence", "Automation"],
      image: "/images/blog/ai-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "DevOps Best Practices: Building a Culture of Continuous Improvement",
      excerpt: "Learn how to implement DevOps practices that enhance collaboration, accelerate delivery, and improve software quality.",
      content: "DevOps is more than just a set of tools and practices—it's a cultural shift that brings development and operations teams together...",
      author: "Michael Rodriguez",
      authorRole: "DevOps Engineer",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      category: "devops",
      tags: ["DevOps", "CI/CD", "Automation", "Culture"],
      image: "/images/blog/devops-practices.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity in the Cloud: Protecting Your Digital Assets",
      excerpt: "Essential security strategies for cloud environments and how to implement a comprehensive security framework.",
      content: "As businesses migrate to the cloud, security becomes a critical concern. This comprehensive guide covers the essential strategies...",
      author: "Emily Johnson",
      authorRole: "Security Architect",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      category: "security",
      tags: ["Cybersecurity", "Cloud Security", "Data Protection", "Compliance"],
      image: "/images/blog/cloud-security.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Microservices Architecture: Scaling Your Applications Effectively",
      excerpt: "Discover how microservices can help you build scalable, maintainable applications that grow with your business.",
      content: "Microservices architecture has become the go-to approach for building large-scale applications. This article explores...",
      author: "David Kim",
      authorRole: "Software Architect",
      publishDate: "2024-01-01",
      readTime: "7 min read",
      category: "cloud",
      tags: ["Microservices", "Architecture", "Scalability", "Cloud Native"],
      image: "/images/blog/microservices.jpg",
      featured: false
    },
    {
      id: 5,
      title: "AI-Powered Analytics: Transforming Data into Business Insights",
      excerpt: "How artificial intelligence is revolutionizing data analytics and helping businesses make better decisions.",
      content: "The combination of AI and analytics is creating unprecedented opportunities for businesses to gain insights from their data...",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      publishDate: "2023-12-28",
      readTime: "9 min read",
      category: "ai",
      tags: ["AI", "Analytics", "Data Science", "Business Intelligence"],
      image: "/images/blog/ai-analytics.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Cloud Migration Strategies: A Step-by-Step Guide",
      excerpt: "Everything you need to know about migrating your applications to the cloud successfully and efficiently.",
      content: "Cloud migration can be complex, but with the right strategy, you can minimize risks and maximize benefits...",
      author: "Lisa Thompson",
      authorRole: "Cloud Solutions Architect",
      publishDate: "2023-12-20",
      readTime: "12 min read",
      category: "cloud",
      tags: ["Cloud Migration", "AWS", "Azure", "Strategy"],
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Technology Insights & Industry News | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, DevOps best practices, and cybersecurity news from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, DevOps, cybersecurity, cloud computing, software development, tech trends" />
        <meta property="og:title" content="Blog - Technology Insights & Industry News | Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest technology trends, AI insights, DevOps best practices, and cybersecurity news." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta property="og:image" content="https://ziontechgroup.com/og-blog.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Technology Insights & Industry News | Zion Tech Group" />
        <meta name="twitter:description" content="Stay updated with the latest technology trends, AI insights, DevOps best practices, and cybersecurity news." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-blog.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Blog - Technology Insights & Industry News | Zion Tech Group"
          description="Stay updated with the latest technology trends, AI insights, DevOps best practices, and cybersecurity news from our expert team."
          keywords="technology blog, AI insights, DevOps, cybersecurity, cloud computing, software development, tech trends, industry news"
          canonical="https://ziontechgroup.com/blog"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden quantum-field holographic-grid">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Latest Technology Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-cyberpunk neon-advanced">
                Technology Blog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with insights from our expert team. 
              Discover the latest trends in AI, DevOps, cybersecurity, and cloud computing.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="holographic-card p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-cyberpunk">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="holographic-card hover-quantum p-6 group"
                  >
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 text-xs rounded-full"
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
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-cyberpunk">
              All Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="holographic-card hover-quantum p-6 group"
                >
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 holographic-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-cyberpunk">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter and never miss the latest technology insights and industry updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="btn-quantum hover-quantum px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}