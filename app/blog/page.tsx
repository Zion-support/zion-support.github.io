<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { ArrowRight, Search, Calendar, Clock, User, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
=======
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and what businesses need to know to stay competitive.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential cybersecurity strategies and tools that every business should implement to protect against evolving threats.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'technology',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '3',
      title: 'Cloud Migration: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your business infrastructure to the cloud with minimal downtime.',
      author: 'Jennifer Liu',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'technology',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '4',
      title: 'Building Scalable Web Applications',
      excerpt: 'Modern approaches to building web applications that can handle growth and maintain performance.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'technology',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '5',
      title: 'AI-Powered Business Intelligence',
      excerpt: 'How AI is revolutionizing business intelligence and helping companies make data-driven decisions.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '6',
      title: 'Digital Transformation Strategies',
      excerpt: 'Key strategies for successful digital transformation in traditional businesses.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'business',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business solutions from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business solutions, enterprise AI, cloud computing" />
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-6f9f
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Insights, Innovation, and Industry Trends
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
=======
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, technology, and business solutions from our expert team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                  className="w-full px-4 py-3 pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-6f9f
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
            </div>
          </div>
        </section>

        {/* Featured Post */}
<<<<<<< HEAD
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
=======
        {filteredPosts.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8 mb-16">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Featured Article</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{filteredPosts[0].author}</span>
                  </div>
<<<<<<< HEAD
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
=======
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{filteredPosts[0].readTime}</span>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                  </div>
                </div>
                <Link
                  to={`/blog/${filteredPosts[0].id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
<<<<<<< HEAD

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
=======
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts.filter(post => post.featured).map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-blue-400" />
>>>>>>> cursor/analyze-improve-and-deploy-application-6f9f
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
=======
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
<<<<<<< HEAD
            </div>
=======
            )}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
          </div>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

export default BlogPage;

=======
}
>>>>>>> cursor/analyze-improve-and-deploy-application-6f9f
=======
}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
