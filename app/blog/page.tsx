import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "automation", name: "Automation", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest trends in artificial intelligence and how they're transforming business operations across industries.",
      content: "Artificial intelligence continues to revolutionize the business landscape, with new technologies and applications emerging at an unprecedented pace. In 2024, we're seeing significant advancements in machine learning, natural language processing, and computer vision that are reshaping how companies operate and compete.",
      author: "Dr. Sarah Chen",
      authorRole: "Chief AI Officer",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/images/blog/ai-future.jpg",
      tags: ["AI", "Machine Learning", "Business", "Technology"],
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Learn essential cybersecurity measures to protect your remote workforce and sensitive business data.",
      content: "With the rise of remote work, cybersecurity has become more critical than ever. Organizations must implement comprehensive security measures to protect their distributed workforce and sensitive data from evolving threats.",
      author: "Michael Rodriguez",
      authorRole: "Cybersecurity Expert",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      image: "/images/blog/cybersecurity-remote.jpg",
      tags: ["Cybersecurity", "Remote Work", "Data Protection", "Best Practices"],
      featured: true
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover proven strategies for migrating your business to the cloud successfully and efficiently.",
      content: "Cloud migration is a complex process that requires careful planning and execution. This comprehensive guide covers everything you need to know about migrating your infrastructure, applications, and data to the cloud.",
      author: "Jennifer Martinez",
      authorRole: "Cloud Solutions Architect",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/images/blog/cloud-migration.jpg",
      tags: ["Cloud Computing", "Migration", "Strategy", "Infrastructure"],
      featured: false
    },
    {
      id: 4,
      title: "Automating Business Processes with AI: A Practical Approach",
      excerpt: "Learn how to implement AI-powered automation in your business processes for improved efficiency and cost savings.",
      content: "Business process automation with AI can significantly improve efficiency, reduce costs, and enhance accuracy. This article provides practical insights into implementing AI automation in various business functions.",
      author: "David Kim",
      authorRole: "Automation Specialist",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "automation",
      image: "/images/blog/ai-automation.jpg",
      tags: ["AI", "Automation", "Business Processes", "Efficiency"],
      featured: false
    },
    {
      id: 5,
      title: "The Role of Machine Learning in Data Analytics",
      excerpt: "Explore how machine learning is transforming data analytics and enabling more accurate predictions and insights.",
      content: "Machine learning is revolutionizing data analytics by enabling more sophisticated analysis and prediction capabilities. Learn how to leverage ML techniques for better business insights.",
      author: "Dr. Emily Watson",
      authorRole: "Data Science Director",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "ai",
      image: "/images/blog/ml-analytics.jpg",
      tags: ["Machine Learning", "Data Analytics", "Predictions", "Insights"],
      featured: false
    },
    {
      id: 6,
      title: "Building Secure APIs: Best Practices and Common Pitfalls",
      excerpt: "Learn essential security practices for API development and how to avoid common security vulnerabilities.",
      content: "API security is crucial for protecting your applications and data. This guide covers best practices for building secure APIs and common security pitfalls to avoid.",
      author: "Alex Thompson",
      authorRole: "Security Engineer",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "cybersecurity",
      image: "/images/blog/api-security.jpg",
      tags: ["API Security", "Development", "Best Practices", "Vulnerabilities"],
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
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Blog | AI, Technology & Business Insights | Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, cybersecurity, cloud computing, and business automation. Expert articles and industry trends."
        keywords="AI blog, technology blog, cybersecurity insights, cloud computing, business automation, machine learning, data analytics"
        canonical="https://ziontechgroup.com/blog"
        author="Zion Tech Group"
        section="Blog"
        tags={["AI", "Technology", "Cybersecurity", "Cloud Computing", "Automation"]}
        readingTime={5}
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
            <span className="text-cyan-400 text-sm font-medium">Technology Insights & News</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Stay updated with the latest insights on AI, technology, cybersecurity, cloud computing, 
            and business automation. Expert articles and industry trends from our team.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <FuturisticCard key={post.id} className="group cursor-pointer">
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {selectedCategory === "all" ? "All Articles" : categories.find(cat => cat.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <FuturisticCard key={post.id} className="group cursor-pointer">
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-xs">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on AI, technology, 
              and business automation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <FuturisticButton
                href="#"
                variant="primary"
                size="md"
                icon={<Zap className="w-4 h-4" />}
              >
                Subscribe
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
}