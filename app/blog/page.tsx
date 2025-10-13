import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, Zap, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import EnhancedSEO from "../components/EnhancedSEO";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 4 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are transforming businesses worldwide and what to expect in 2024.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "ai",
      image: "/blog/ai-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successful cloud migration projects.",
      author: "Zion Tech Team",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "cloud",
      image: "/blog/cloud-migration.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Discover the tools and techniques for creating applications that grow with your business.",
      author: "Zion Tech Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "development",
      image: "/blog/scalable-apps.jpg",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights"
        description="Stay updated with the latest insights on AI, cloud computing, and technology trends from Zion Tech Group experts."
        keywords="technology blog, AI insights, cloud computing, software development, tech trends"
        canonical="/blog"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Insights & News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with the latest insights on AI, cloud computing, and emerging technologies from our expert team.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-cyan-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">
                      {filteredPosts[0].category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{filteredPosts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs font-medium">
                    {post.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 text-center border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-gray-300 mb-6">
            Get the latest technology insights and updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600 transition-colors flex items-center space-x-2">
              <span>Subscribe</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
