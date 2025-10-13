import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in 2024.",
      content: "Artificial intelligence continues to revolutionize the business landscape...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "ai",
      readTime: "5 min read",
      image: "/images/blog/ai-business-2024.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data and operations.",
      content: "Small businesses are increasingly targeted by cybercriminals...",
      author: "Mike Chen",
      date: "2024-01-10",
      category: "cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-small-business.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Learn the best practices for migrating your business to the cloud successfully.",
      content: "Cloud migration is a complex process that requires careful planning...",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "cloud",
      readTime: "8 min read",
      image: "/images/blog/cloud-migration-guide.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Modern Web Development: React vs Vue vs Angular",
      excerpt: "A comprehensive comparison of the most popular frontend frameworks in 2024.",
      content: "Choosing the right frontend framework is crucial for project success...",
      author: "David Kim",
      date: "2024-01-01",
      category: "development",
      readTime: "6 min read",
      image: "/images/blog/frontend-frameworks-2024.jpg",
      featured: false
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI, IT Solutions & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity tips, cloud computing, web development, IT solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, cybersecurity, cloud computing, and the latest technology trends.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
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
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "all" && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-cyan-500/20">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {featuredPost.category.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-slate-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {post.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8">
                Get the latest technology insights and industry news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;