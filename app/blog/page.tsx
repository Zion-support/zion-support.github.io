import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in the coming year.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      image: "/images/blog/ai-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats in the digital landscape.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/images/blog/cybersecurity.jpg",
      featured: false
    },
    {
      id: 3,
      title: "5G Technology: Revolutionizing Connectivity and IoT",
      excerpt: "Explore how 5G networks are enabling new possibilities for IoT devices and smart city implementations.",
      author: "5G Solutions Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "5G Technology",
      image: "/images/blog/5g-technology.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step guide to migrating your business infrastructure to the cloud safely and efficiently.",
      author: "Cloud Team",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "How micro SAAS applications are changing the way businesses approach software solutions and automation.",
      author: "Product Team",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Micro SAAS",
      image: "/images/blog/micro-saas.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth.",
      author: "Analytics Team",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "/images/blog/data-analytics.jpg",
      featured: false
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cybersecurity", "5G Technology", "Cloud Computing", "Micro SAAS", "Data Analytics"];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights and News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, 5G technology, cloud computing, micro SAAS, data analytics"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Stay ahead with the latest technology insights, industry trends, and expert advice from our team of professionals.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              {(() => {
                const featuredPost = filteredPosts.find(post => post.featured);
                if (!featuredPost) return null;
                
                return (
                  <FuturisticCard className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400" />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                            {featuredPost.category}
                          </span>
                          <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <FuturisticButton
                            href={`/blog/${featuredPost.id}`}
                            variant="outline"
                            size="sm"
                            icon={<ArrowRight className="w-4 h-4" />}
                          >
                            Read More
                          </FuturisticButton>
                        </div>
                      </div>
                    </div>
                  </FuturisticCard>
                );
              })()}
            </div>
          </ResponsiveContainer>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <FuturisticCard key={post.id} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <FuturisticButton
                      href={`/blog/${post.id}`}
                      variant="ghost"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Read
                    </FuturisticButton>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest technology insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <FuturisticButton
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Subscribe
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
