import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in 2024. From automation to predictive analytics, explore the latest AI innovations.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats. Comprehensive guide covering everything from basic hygiene to advanced threat detection.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "security",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Everything you need to know about migrating to the cloud. From planning to execution, discover proven strategies for a successful cloud transformation.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Revolutionizing Connectivity",
      excerpt: "Explore how 5G technology is changing the way we connect and do business. From IoT to edge computing, discover the potential of next-generation networks.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Learn how to leverage data analytics to drive business decisions. From data collection to visualization, master the art of data-driven decision making.",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "analytics",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Navigate the complexities of digital transformation with our comprehensive guide. Learn how to create a roadmap that delivers real business value.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "transformation",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    { id: "ai", name: "AI & Machine Learning", count: blogPosts.filter(post => post.category === "ai").length },
    { id: "security", name: "Cybersecurity", count: blogPosts.filter(post => post.category === "security").length },
    { id: "cloud", name: "Cloud Computing", count: blogPosts.filter(post => post.category === "cloud").length },
    { id: "technology", name: "Technology", count: blogPosts.filter(post => post.category === "technology").length },
    { id: "analytics", name: "Data Analytics", count: blogPosts.filter(post => post.category === "analytics").length },
    { id: "transformation", name: "Digital Transformation", count: blogPosts.filter(post => post.category === "transformation").length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Trends
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and emerging technologies.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-cyan-500/20"
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
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      {post.featured && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-medium flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Tech Trends
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights delivered to your inbox. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}