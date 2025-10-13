import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock,
  Tag,
  TrendingUp,
  Eye,
  Heart
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest trends in artificial intelligence and how they're reshaping the business landscape. From automation to predictive analytics, discover what's next.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/api/placeholder/600/400",
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS Solutions: The New Era of Business Software",
      excerpt: "Learn how micro SAAS solutions are revolutionizing the way businesses operate. Discover the benefits and implementation strategies.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Business",
      image: "/api/placeholder/600/400",
      views: 980,
      likes: 67,
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Protect your business from cyber threats with these essential security practices. Learn about the latest threats and how to defend against them.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Security",
      image: "/api/placeholder/600/400",
      views: 1450,
      likes: 112,
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating Opportunities",
      excerpt: "Discover how 5G technology is creating new opportunities across industries. From healthcare to manufacturing, see what's possible.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Technology",
      image: "/api/placeholder/600/400",
      views: 890,
      likes: 54,
      featured: false
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Learn how to transform raw data into actionable business insights. Discover the tools and techniques that drive data-driven decisions.",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Analytics",
      image: "/api/placeholder/600/400",
      views: 1100,
      likes: 78,
      featured: false
    },
    {
      id: 6,
      title: "Cloud Computing: The Foundation of Digital Transformation",
      excerpt: "Understand how cloud computing is enabling digital transformation across industries. Learn about migration strategies and best practices.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "Cloud",
      image: "/api/placeholder/600/400",
      views: 1350,
      likes: 95,
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: 24, active: true },
    { name: "AI & Technology", count: 8, active: false },
    { name: "Business", count: 6, active: false },
    { name: "Security", count: 4, active: false },
    { name: "Analytics", count: 3, active: false },
    { name: "Cloud", count: 3, active: false }
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest insights on AI, technology, business, and digital transformation. Expert articles and industry analysis from Zion Tech Group."
        keywords="technology blog, AI insights, business technology, digital transformation, cybersecurity, cloud computing, data analytics"
        canonical="https://ziontechgroup.com/blog"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <TrendingUp className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest insights on AI, technology, and digital transformation. 
            Expert analysis and industry trends from our team of specialists.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-cyan-400 text-sm font-medium">{featuredPost.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400 text-sm">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Heart className="w-4 h-4 mr-1" />
                        {featuredPost.likes}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
              Load More Posts
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights and industry news delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
