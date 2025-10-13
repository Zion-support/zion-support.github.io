import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock, TrendingUp, Star, Eye } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["AI", "Business", "Technology", "Future"]
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Learn essential cybersecurity measures that every small business should implement to protect their digital assets and customer data.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Security", "Small Business", "Best Practices"]
    },
    {
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Complete guide to migrating your business to the cloud, including planning, execution, and post-migration optimization strategies.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cloud", "Migration", "Guide", "Infrastructure"]
    },
    {
      title: "5G Technology: Transforming Industries",
      excerpt: "Discover how 5G technology is revolutionizing various industries and creating new opportunities for innovation and growth.",
      author: "David Kim",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "5G Technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["5G", "Technology", "Innovation", "Industry"]
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Learn how to effectively analyze your business data to make informed decisions and drive growth through data-driven strategies.",
      author: "Lisa Wang",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Data Analytics",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Data", "Analytics", "Insights", "Business Intelligence"]
    },
    {
      title: "The Rise of Micro SAAS: Opportunities and Challenges",
      excerpt: "Explore the growing micro SAAS market and learn how to build and scale successful software-as-a-service solutions.",
      author: "Alex Thompson",
      date: "2023-12-25",
      readTime: "5 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["SAAS", "Micro Services", "Startup", "Software"]
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "AI & Machine Learning", count: blogPosts.filter(p => p.category === "AI & Machine Learning").length },
    { name: "Cybersecurity", count: blogPosts.filter(p => p.category === "Cybersecurity").length },
    { name: "Cloud Computing", count: blogPosts.filter(p => p.category === "Cloud Computing").length },
    { name: "5G Technology", count: blogPosts.filter(p => p.category === "5G Technology").length },
    { name: "Data Analytics", count: blogPosts.filter(p => p.category === "Data Analytics").length },
    { name: "Micro SAAS", count: blogPosts.filter(p => p.category === "Micro SAAS").length }
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta
          name="description"
          content="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group's expert team."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and practical guides 
              from our team of technology professionals.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-3 py-1 rounded-full">
                    Featured Post
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center text-gray-300">
                        <User className="w-4 h-4 mr-2" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-300">Featured Article Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                      <p className="text-gray-300 text-sm">Article Image</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest technology insights, 
              industry trends, and expert advice.
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
    </>
  );
};

export default BlogPage;