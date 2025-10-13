import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock, Tag, Search } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Discover the latest AI trends that are reshaping how businesses operate and compete in the digital age.",
      author: "Kleber Santos",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/600/400",
      slug: "future-ai-business-trends-2024"
    },
    {
      title: "How Micro SAAS Solutions Are Transforming Small Businesses",
      excerpt: "Learn how small businesses are leveraging micro SAAS tools to compete with larger enterprises.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "4 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/400",
      slug: "micro-saas-transforming-small-businesses"
    },
    {
      title: "5G Technology: Revolutionizing IoT and Edge Computing",
      excerpt: "Explore how 5G networks are enabling new possibilities in IoT and edge computing applications.",
      author: "Michael Chen",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "5G & IoT",
      image: "/api/placeholder/600/400",
      slug: "5g-technology-iot-edge-computing"
    },
    {
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential security measures every business should implement to protect their digital assets.",
      author: "Emily Rodriguez",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400",
      slug: "cybersecurity-best-practices-modern-businesses"
    },
    {
      title: "The Rise of AI-Powered Customer Service",
      excerpt: "How AI is transforming customer service and what it means for businesses and customers.",
      author: "David Kim",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "AI & Customer Experience",
      image: "/api/placeholder/600/400",
      slug: "ai-powered-customer-service-rise"
    },
    {
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Everything you need to know about migrating your infrastructure to the cloud successfully.",
      author: "Lisa Wang",
      date: "November 15, 2024",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/400",
      slug: "cloud-migration-complete-guide-enterprises"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Micro SAAS",
    "5G & IoT",
    "Cybersecurity",
    "Cloud Computing",
    "Business Insights"
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Blog - AI, Technology, and Business Insights | Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, business trends, and digital transformation from Zion Tech Group experts."
        keywords="technology blog, AI insights, business technology, digital transformation, tech trends, industry news"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest insights on AI, technology, business trends, 
            and digital transformation from our team of experts.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">Featured</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Post {index + 2}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center group"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest insights on AI, 
            technology, and business trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
              Subscribe
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;