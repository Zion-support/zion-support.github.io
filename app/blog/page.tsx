import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Clock, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI Trends 2025: The Future of Artificial Intelligence",
      excerpt: "Explore the latest trends and breakthroughs in AI technology that will shape 2025 and beyond.",
      author: "Zion Tech Team",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "5G Implementation: A Complete Guide for Businesses",
      excerpt: "Everything you need to know about implementing 5G technology in your business operations.",
      author: "Sarah Johnson",
      date: "2024-12-10",
      readTime: "8 min read",
      category: "5G Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for 2025",
      excerpt: "Essential cybersecurity measures every business should implement to protect against emerging threats.",
      author: "Michael Chen",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Migration Strategies: A Step-by-Step Guide",
      excerpt: "Learn how to successfully migrate your infrastructure to the cloud with minimal disruption.",
      author: "Emily Rodriguez",
      date: "2024-11-28",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Micro SaaS: The Future of Business Software",
      excerpt: "Discover how micro SaaS solutions are revolutionizing the way businesses operate.",
      author: "David Wilson",
      date: "2024-11-20",
      readTime: "7 min read",
      category: "Micro SaaS",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "How to leverage data analytics to drive business growth and make informed decisions.",
      author: "Lisa Anderson",
      date: "2024-11-15",
      readTime: "9 min read",
      category: "Data Analytics",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "5G Technology",
    "Cybersecurity",
    "Cloud Computing",
    "Micro SaaS",
    "Data Analytics"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI, IT & 5G Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, 5G technology, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, 5G technology, cybersecurity, cloud computing, digital transformation" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, IT, and 5G technology" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Stay ahead with the latest insights on AI, IT solutions, 5G technology, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        category === "All"
                          ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                          : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-6xl">🤖</div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="text-sm text-gray-400">Featured</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${featuredPost.id}`}
                          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-4xl">📊</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-400">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-3">
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
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mt-4"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest insights on AI, IT, and 5G technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
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