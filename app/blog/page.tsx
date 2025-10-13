import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
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
      title: "The Future of AI in Business: A Comprehensive Guide",
      excerpt: "Explore how artificial intelligence is transforming modern business operations and what it means for your organization.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/images/blog/ai-business.jpg",
      featured: true
    },
    {
      id: 2,
      title: "5G Technology: Revolutionizing Connectivity",
      excerpt: "Discover how 5G networks are changing the way we connect and communicate in the digital age.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "5G & Connectivity",
      image: "/images/blog/5g-technology.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Security",
      image: "/images/blog/cybersecurity.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Navigate the complexities of cloud migration with our comprehensive guide and best practices.",
      author: "Zion Tech Group",
      date: "2024-01-01",
      readTime: "12 min read",
      category: "Cloud Computing",
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, 5G technology, cybersecurity, cloud computing, tech news"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Stay ahead of the curve with expert insights, industry trends, and cutting-edge technology discussions from our team of specialists.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
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

      {/* Featured Post */}
      {filteredPosts.find(post => post.featured) && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Featured Article</h2>
            </div>
            {filteredPosts
              .filter(post => post.featured)
              .map((post) => (
                <FuturisticCard key={post.id} className="mb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <FuturisticButton
                          href={`/blog/${post.id}`}
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
              ))}
          </ResponsiveContainer>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 'All Articles'}
            </h2>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search terms or browse all articles.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter(post => !post.featured)
                .map((post) => (
                  <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-cyan-400" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-gray-400">{post.author}</span>
                          <FuturisticButton
                            href={`/blog/${post.id}`}
                            variant="outline"
                            size="sm"
                            icon={<ArrowRight className="w-3 h-3" />}
                          >
                            Read
                          </FuturisticButton>
                        </div>
                      </div>
                    </div>
                  </FuturisticCard>
                ))}
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest technology insights and industry news delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <FuturisticButton
                href="#"
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Subscribe
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;