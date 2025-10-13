import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping business operations and driving innovation across industries.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Discover how 5G networks are revolutionizing connectivity and enabling new business models.",
      author: "Sarah Johnson",
      date: "2024-01-12",
      category: "5G",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Micro SAAS Solutions: The New Era of Business Software",
      excerpt: "Learn about the growing trend of micro SAAS applications and how they're changing the software landscape.",
      author: "Mike Chen",
      date: "2024-01-10",
      category: "SAAS",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential security measures every business should implement to protect against evolving threats.",
      author: "Alex Rodriguez",
      date: "2024-01-08",
      category: "Security",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step guide to successfully migrating your business to the cloud.",
      author: "Emily Davis",
      date: "2024-01-05",
      category: "Cloud",
      readTime: "10 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "How to leverage data analytics to make better business decisions and drive growth.",
      author: "David Kim",
      date: "2024-01-03",
      category: "Analytics",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["all", "AI", "5G", "SAAS", "Security", "Cloud", "Analytics"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, 5G, micro SAAS, and technology trends from Zion Tech Group." />
        <meta name="keywords" content="technology blog, AI insights, 5G technology, micro SAAS, business technology" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Technology Insights</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Blog
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead of the curve with insights, trends, and expert analysis on AI, 5G, micro SAAS, and emerging technologies.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Posts' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="text-blue-400 font-medium">{featuredPost.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <BookOpen className="w-12 h-12 text-blue-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest technology insights and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                Subscribe
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;