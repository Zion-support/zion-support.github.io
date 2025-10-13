import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 4 },
    { id: "cloud", name: "Cloud Computing", count: 3 },
    { id: "security", name: "Cybersecurity", count: 3 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and what to expect in 2024.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "ai",
      featured: true,
      image: "/images/blog/ai-business.jpg",
      readTime: "8 min read",
      tags: ["AI", "Business", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "Cloud Migration Strategies: A Complete Guide for Enterprises",
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "cloud",
      featured: true,
      image: "/images/blog/cloud-migration.jpg",
      readTime: "12 min read",
      tags: ["Cloud", "Migration", "Enterprise", "Strategy"]
    },
    {
      id: 3,
      title: "Cybersecurity in 2024: Emerging Threats and Defense Strategies",
      excerpt: "Stay ahead of cyber threats with the latest security trends and proven defense mechanisms.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "security",
      featured: false,
      image: "/images/blog/cybersecurity.jpg",
      readTime: "10 min read",
      tags: ["Security", "Threats", "Defense", "2024"]
    },
    {
      id: 4,
      title: "Microservices Architecture: Building Scalable Applications",
      excerpt: "Explore how microservices can help you build more scalable, maintainable, and resilient applications.",
      author: "David Kim",
      date: "2024-01-08",
      category: "development",
      featured: false,
      image: "/images/blog/microservices.jpg",
      readTime: "15 min read",
      tags: ["Microservices", "Architecture", "Scalability", "Development"]
    },
    {
      id: 5,
      title: "AI-Powered Data Analytics: Transforming Business Intelligence",
      excerpt: "Learn how AI is revolutionizing data analytics and helping businesses make better decisions.",
      author: "Lisa Wang",
      date: "2024-01-05",
      category: "ai",
      featured: false,
      image: "/images/blog/ai-analytics.jpg",
      readTime: "7 min read",
      tags: ["AI", "Analytics", "Data", "Business Intelligence"]
    },
    {
      id: 6,
      title: "DevOps Best Practices: Streamlining Your Development Pipeline",
      excerpt: "Discover proven DevOps strategies that can accelerate your development process and improve team collaboration.",
      author: "Alex Thompson",
      date: "2024-01-03",
      category: "development",
      featured: false,
      image: "/images/blog/devops.jpg",
      readTime: "9 min read",
      tags: ["DevOps", "CI/CD", "Automation", "Collaboration"]
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Technology Insights and Trends</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, cloud computing strategies, and cybersecurity best practices from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, software development, tech trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Stay ahead of the curve with insights from our technology experts. 
            Discover the latest trends in AI, cloud computing, cybersecurity, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <Zap className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            {selectedCategory === "all" ? "All Articles" : `${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology trends and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}