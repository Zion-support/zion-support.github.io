import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  readTime: string;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",
      content: "Full content here...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "ai",
      featured: true,
      image: "/images/blog/ai-business-trends.jpg",
      readTime: "8 min read"
    },
    {
      id: "2",
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud with minimal downtime.",
      content: "Full content here...",
      author: "Mike Rodriguez",
      date: "2024-01-12",
      category: "technology",
      featured: false,
      image: "/images/blog/cloud-migration.jpg",
      readTime: "12 min read"
    },
    {
      id: "3",
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures every remote team should implement to protect sensitive data.",
      content: "Full content here...",
      author: "Alex Thompson",
      date: "2024-01-10",
      category: "technology",
      featured: true,
      image: "/images/blog/cybersecurity-remote.jpg",
      readTime: "6 min read"
    },
    {
      id: "4",
      title: "Digital Transformation: Where to Start",
      excerpt: "A step-by-step guide to beginning your organization's digital transformation journey.",
      content: "Full content here...",
      author: "Lisa Wang",
      date: "2024-01-08",
      category: "business",
      featured: false,
      image: "/images/blog/digital-transformation.jpg",
      readTime: "10 min read"
    },
    {
      id: "5",
      title: "Machine Learning in Healthcare: Real-World Applications",
      excerpt: "Discover how ML is revolutionizing patient care and medical research.",
      content: "Full content here...",
      author: "Dr. James Wilson",
      date: "2024-01-05",
      category: "ai",
      featured: false,
      image: "/images/blog/ml-healthcare.jpg",
      readTime: "15 min read"
    },
    {
      id: "6",
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Best practices for creating web apps that can handle millions of users.",
      content: "Full content here...",
      author: "David Kim",
      date: "2024-01-03",
      category: "technology",
      featured: false,
      image: "/images/blog/scalable-web-apps.jpg",
      readTime: "9 min read"
    }
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
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business solutions from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business solutions, IT trends, artificial intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tech Insights
              </span>
              <br />
              <span className="text-white">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, technology, and business solutions from our expert team.
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
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(post.date).toLocaleDateString()}
                          <Clock className="w-4 h-4 ml-4 mr-2" />
                          {post.readTime}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-400">
                            <User className="w-4 h-4 mr-2" />
                            {post.author}
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
              All Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
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
        </section>
      </div>
    </>
  );
}