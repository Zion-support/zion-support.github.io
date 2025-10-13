import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, Filter, Clock, Eye } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";
import ResponsiveContainer from "../components/ResponsiveContainer";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI",
      readTime: "5 min read",
      views: 1250,
      image: "/api/placeholder/400/250",
      slug: "future-ai-business-2024-trends"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving digital threats.",
      author: "Security Team",
      date: "2024-01-10",
      category: "Security",
      readTime: "7 min read",
      views: 980,
      image: "/api/placeholder/400/250",
      slug: "cybersecurity-best-practices-enterprises"
    },
    {
      id: 3,
      title: "5G Technology: Transforming Industries and Connectivity",
      excerpt: "Discover how 5G is revolutionizing industries and enabling new possibilities for businesses.",
      author: "Tech Team",
      date: "2024-01-05",
      category: "5G",
      readTime: "6 min read",
      views: 1100,
      image: "/api/placeholder/400/250",
      slug: "5g-technology-transforming-industries"
    },
    {
      id: 4,
      title: "Micro SAAS Solutions: Scaling Your Business Efficiently",
      excerpt: "How micro SAAS solutions can help businesses scale efficiently while maintaining cost-effectiveness.",
      author: "Product Team",
      date: "2024-01-01",
      category: "SAAS",
      readTime: "4 min read",
      views: 750,
      image: "/api/placeholder/400/250",
      slug: "micro-saas-solutions-scaling-business"
    }
  ];

  const categories = ["all", "AI", "Security", "5G", "SAAS", "Technology"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights and Trends"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI trends, cybersecurity, 5G technology, micro SAAS, business technology, tech insights"
        canonical="https://ziontechgroup.com/blog"
      />

      <div className="relative z-10 pt-20 pb-16">
        <ResponsiveContainer>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest insights, trends, and innovations in AI, cybersecurity, 5G, and business technology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center text-gray-300 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {post.views}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest technology trends, AI insights, and business solutions delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BlogPage;
