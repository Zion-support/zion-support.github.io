import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are transforming businesses worldwide, from automation to predictive analytics.",
      content: "Artificial Intelligence continues to revolutionize how businesses operate, offering unprecedented opportunities for growth and efficiency...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Technology", "Future"],
      image: "/images/blog/ai-business-trends.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your organization from evolving digital threats.",
      content: "In today's digital landscape, cybersecurity is not just an IT concern but a business imperative...",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Cybersecurity",
      tags: ["Security", "Enterprise", "Best Practices", "Protection"],
      image: "/images/blog/cybersecurity-best-practices.jpg",
      featured: false
    },
    {
      id: 3,
      title: "5G Technology: Transforming Industries and Connectivity",
      excerpt: "Discover how 5G networks are enabling new possibilities across various industries and applications.",
      content: "5G technology represents a quantum leap in wireless communication, offering speeds and capabilities...",
      author: "Dr. Alex Thompson",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "5G & Connectivity",
      tags: ["5G", "Connectivity", "Innovation", "Technology"],
      image: "/images/blog/5g-technology-transformation.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "How micro SAAS platforms are revolutionizing business software with specialized, focused solutions.",
      content: "The software industry is witnessing a paradigm shift towards micro SAAS solutions...",
      author: "Jennifer Liu",
      date: "2024-01-08",
      readTime: "5 min read",
      category: "Software Development",
      tags: ["SAAS", "Software", "Business", "Innovation"],
      image: "/images/blog/micro-saas-solutions.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Infrastructure: Building Scalable and Secure Systems",
      excerpt: "Essential strategies for designing and implementing robust cloud infrastructure solutions.",
      content: "Cloud infrastructure has become the backbone of modern digital businesses...",
      author: "David Park",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Infrastructure", "Scalability", "Security"],
      image: "/images/blog/cloud-infrastructure-systems.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation: A Complete Guide for Enterprises",
      excerpt: "Comprehensive guide to digital transformation strategies that drive business success.",
      content: "Digital transformation is no longer optional for businesses seeking to remain competitive...",
      author: "Maria Garcia",
      date: "2024-01-03",
      readTime: "10 min read",
      category: "Digital Transformation",
      tags: ["Digital Transformation", "Enterprise", "Strategy", "Innovation"],
      image: "/images/blog/digital-transformation-guide.jpg",
      featured: true
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "5G & Connectivity",
    "Software Development",
    "Cloud Computing",
    "Digital Transformation"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights and Trends"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and digital transformation strategies from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity trends, 5G technology, cloud computing, digital transformation, tech news, business technology"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Stay ahead with expert insights on AI, cybersecurity, 5G technology, and digital transformation. 
            Discover the latest trends and best practices shaping the future of technology.
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
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Featured Articles
            </h2>
            <ResponsiveGrid className="gap-8">
              {featuredPosts.map((post) => (
                <FuturisticCard
                  key={post.id}
                  className="group cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <FuturisticCard
                key={post.id}
                className="group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-cyan-500 group-hover:text-white transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <FuturisticButton
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                variant="primary"
              >
                Clear Filters
              </FuturisticButton>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest technology trends, AI insights, and cybersecurity updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <FuturisticButton variant="primary">
              Subscribe
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
}