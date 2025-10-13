import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "ai", name: "AI & Machine Learning", count: 8 },
    { id: "cybersecurity", name: "Cybersecurity", count: 6 },
    { id: "cloud", name: "Cloud Computing", count: 5 },
    { id: "development", name: "Development", count: 3 },
    { id: "business", name: "Business", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Essential security measures to protect your remote workforce and sensitive business data.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step approach to migrating your infrastructure to the cloud safely and efficiently.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "cloud",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn how to design and implement microservices that can grow with your business needs.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Digital Transformation: Where to Start",
      excerpt: "A practical guide for businesses looking to begin their digital transformation journey.",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "business",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "5G Technology: Revolutionizing Connectivity",
      excerpt: "How 5G networks are enabling new possibilities for IoT, edge computing, and smart cities.",
      author: "Alex Thompson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "ai",
      image: "/api/placeholder/400/250"
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
        <title>Blog - Zion Tech Group | Technology Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and digital transformation strategies from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, digital transformation, tech trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest technology trends, expert insights, and practical guides 
              from our team of industry professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === "all" && (
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
              {(() => {
                const featuredPost = blogPosts.find(post => post.featured);
                return featuredPost ? (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="relative">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <Link
                          to={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="text-gray-400">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-cyan-500/80 to-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest technology insights and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;