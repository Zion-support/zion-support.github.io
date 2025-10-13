import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Transforming Operations with Intelligent Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and efficiency.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/images/blog/ai-business.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024: Protecting Your Digital Assets",
      excerpt: "Essential cybersecurity strategies and best practices to protect your business from evolving threats and ensure data security.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      image: "/images/blog/cybersecurity.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide for Modern Businesses",
      excerpt: "Learn the best practices and strategies for successfully migrating your infrastructure to the cloud while minimizing risks.",
      author: "Emily Watson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Web Applications: Modern Development Practices",
      excerpt: "Explore modern web development practices and technologies for building scalable, maintainable applications.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "development",
      image: "/images/blog/web-development.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Micro SAAS: How Small Solutions Are Making Big Impact",
      excerpt: "Understanding the micro SAAS revolution and how specialized software solutions are transforming business operations.",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "ai",
      image: "/images/blog/micro-saas.jpg",
      featured: false
    },
    {
      id: 6,
      title: "5G Technology: Unlocking New Possibilities for Business Innovation",
      excerpt: "Discover how 5G technology is enabling new business models and creating opportunities for innovation across industries.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "cloud",
      image: "/images/blog/5g-technology.jpg",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and industry news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, web development, tech news, industry trends" />
        <meta property="og:title" content="Blog - Zion Tech Group | Technology Insights" />
        <meta property="og:description" content="Stay updated with the latest technology trends and insights from our expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <BookOpen className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">Technology Insights</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Blog
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest technology trends, insights, and best practices from our expert team. 
                Discover how emerging technologies can transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">
                        {categories.find(cat => cat.id === filteredPosts[0].category)?.name}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(filteredPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${filteredPosts[0].id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and get the latest technology trends, insights, and best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}