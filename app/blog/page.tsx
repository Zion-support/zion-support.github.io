import { ArrowRight, Calendar, User, Clock, Tag, Search, Filter, TrendingUp, BookOpen, Zap, Brain, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

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
      featured: true,
      tags: ["AI", "Business", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "5G Implementation: Revolutionizing Enterprise Connectivity",
      excerpt: "Learn how 5G technology is changing the game for businesses. From ultra-low latency to massive IoT connectivity, discover the benefits of 5G implementation.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["5G", "Connectivity", "Enterprise", "IoT"]
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Protect your business from cyber threats with our comprehensive guide to cybersecurity best practices. Learn about the latest security measures and compliance requirements.",
      author: "David Martinez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cybersecurity", "Security", "Compliance", "Best Practices"]
    },
    {
      id: 4,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Navigate the complexities of cloud migration with our comprehensive guide. Learn about different strategies, best practices, and common pitfalls to avoid.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cloud", "Migration", "Strategy", "AWS", "Azure"]
    },
    {
      id: 5,
      title: "The Rise of Edge Computing in Enterprise",
      excerpt: "Explore how edge computing is revolutionizing enterprise IT infrastructure. Learn about the benefits, challenges, and implementation strategies.",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Edge Computing", "Enterprise", "Infrastructure", "IoT"]
    },
    {
      id: 6,
      title: "AI-Powered Customer Service: The Future is Here",
      excerpt: "Discover how AI is transforming customer service operations. From chatbots to predictive analytics, learn about the latest AI customer service innovations.",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI", "Customer Service", "Chatbots", "Automation"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and IT solutions from our expert team." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, software development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with expert insights on AI, cloud computing, cybersecurity, and the latest technology trends.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl h-64 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our collection of in-depth articles covering the latest trends and technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 h-48 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights delivered to your inbox. Join our newsletter for exclusive content and updates.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                    Subscribe
                    <Zap className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}