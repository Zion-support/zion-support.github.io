import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, Zap, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample blog data
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
      title: "The Future of AI in Business: A Comprehensive Guide",
      excerpt: "Discover how artificial intelligence is transforming business operations and what it means for your organization.",
      content: "Artificial intelligence is no longer a futuristic concept but a present reality that's reshaping how businesses operate...",
      author: "Dr. Sarah Johnson",
      authorRole: "AI Research Director",
      authorAvatar: "/images/team/sarah-johnson.jpg",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      featured: true,
      image: "/images/blog/ai-business-future.jpg",
      tags: ["AI", "Business", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in the digital landscape.",
      content: "As cyber threats become more sophisticated, businesses must adopt comprehensive security measures...",
      author: "Michael Chen",
      authorRole: "Chief Security Officer",
      authorAvatar: "/images/team/michael-chen.jpg",
      publishedAt: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      featured: true,
      image: "/images/blog/cybersecurity-2024.jpg",
      tags: ["Cybersecurity", "Security", "Best Practices", "2024"]
    },
    {
      id: 3,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Learn how to successfully migrate your infrastructure to the cloud with our comprehensive migration guide.",
      content: "Cloud migration is a critical step in digital transformation that requires careful planning and execution...",
      author: "Emily Rodriguez",
      authorRole: "Cloud Solutions Architect",
      authorAvatar: "/images/team/emily-rodriguez.jpg",
      publishedAt: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      featured: false,
      image: "/images/blog/cloud-migration-guide.jpg",
      tags: ["Cloud", "Migration", "Infrastructure", "Guide"]
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Explore the latest web development frameworks and best practices for creating scalable applications.",
      content: "Modern web development requires choosing the right frameworks and following best practices...",
      author: "David Kim",
      authorRole: "Lead Developer",
      authorAvatar: "/images/team/david-kim.jpg",
      publishedAt: "2024-01-08",
      readTime: "7 min read",
      category: "development",
      featured: false,
      image: "/images/blog/web-development-frameworks.jpg",
      tags: ["Web Development", "Frameworks", "Scalability", "Best Practices"]
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "Discover how machine learning is revolutionizing healthcare and improving patient outcomes.",
      content: "Machine learning applications in healthcare are transforming how we diagnose, treat, and prevent diseases...",
      author: "Dr. Lisa Wang",
      authorRole: "Healthcare AI Specialist",
      authorAvatar: "/images/team/lisa-wang.jpg",
      publishedAt: "2024-01-05",
      readTime: "9 min read",
      category: "ai",
      featured: false,
      image: "/images/blog/ml-healthcare.jpg",
      tags: ["Machine Learning", "Healthcare", "AI", "Patient Care"]
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture: Implementation Guide",
      excerpt: "Implement zero trust security principles to enhance your organization's security posture.",
      content: "Zero trust security is a paradigm shift that assumes no implicit trust based on network location...",
      author: "Alex Thompson",
      authorRole: "Security Architect",
      authorAvatar: "/images/team/alex-thompson.jpg",
      publishedAt: "2024-01-03",
      readTime: "11 min read",
      category: "cybersecurity",
      featured: false,
      image: "/images/blog/zero-trust-security.jpg",
      tags: ["Zero Trust", "Security", "Architecture", "Implementation"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI developments, cybersecurity trends, and industry news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity news, cloud computing, web development, tech trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead with expert insights on AI, cybersecurity, cloud computing, and the latest technology trends shaping our digital future.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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

      {/* Featured Posts */}
      {selectedCategory === "all" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
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
            {selectedCategory === "all" ? "All Articles" : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all"
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
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights and industry news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;