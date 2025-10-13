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
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends and how they're transforming business operations across industries.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "ai",
      readTime: "8 min read",
      image: "/images/blog/ai-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work",
      excerpt: "Essential security measures to protect your business data when working remotely.",
      author: "Mike Rodriguez",
      date: "2024-01-12",
      category: "cybersecurity",
      readTime: "6 min read",
      image: "/images/blog/cybersecurity-remote.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step guide to migrating your infrastructure to the cloud successfully.",
      author: "Jennifer Liu",
      date: "2024-01-10",
      category: "cloud",
      readTime: "10 min read",
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn how to design and implement microservices that can scale with your business.",
      author: "Alex Thompson",
      date: "2024-01-08",
      category: "development",
      readTime: "12 min read",
      image: "/images/blog/microservices.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Real-World Applications",
      excerpt: "Discover how ML is revolutionizing healthcare and improving patient outcomes.",
      author: "Dr. Maria Garcia",
      date: "2024-01-05",
      category: "ai",
      readTime: "9 min read",
      image: "/images/blog/ml-healthcare.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Zero Trust Security Model: Implementation Guide",
      excerpt: "Implement zero trust architecture to enhance your organization's security posture.",
      author: "David Kim",
      date: "2024-01-03",
      category: "cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/zero-trust.jpg",
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
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="AI blog, cybersecurity insights, cloud computing, technology trends, business innovation, digital transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Tech Insights
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}& Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead with expert insights on AI, cybersecurity, cloud computing, and the latest technology trends.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
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
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === "all" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-semibold">Featured Article</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The Future of AI in Business: Trends and Predictions for 2024
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Explore the latest AI trends and how they're transforming business operations across industries. 
                From machine learning to natural language processing, discover what's next in AI innovation.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Dr. Sarah Chen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <Link
                to="/blog/ai-future-business-2024"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Read Article
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-purple-600 to-pink-600">
                  <div className="w-full h-48 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}