
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock, Tag } from 'lucide-react';

// Mock blog data
const MOCK_BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2025 and Beyond",
    excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in the coming years.",
    content: "Full article content would go here...",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/images/avatar-1.jpg"
    },
    publishedDate: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    tags: ["AI", "Enterprise", "Innovation", "Future Tech"],
    featuredImage: "/images/blog-ai-enterprise.jpg",
    slug: "future-ai-enterprise-2025",
    isFeatured: true
  },
  {
    id: 2,
    title: "Cybersecurity Trends: Protecting Your Digital Assets",
    excerpt: "Learn about the latest cybersecurity threats and how to safeguard your organization's digital infrastructure.",
    content: "Full article content would go here...",
    author: {
      name: "Michael Rodriguez",
      avatar: "/images/avatar-2.jpg"
    },
    publishedDate: "2025-01-12",
    readTime: "6 min read",
    category: "Cybersecurity",
    tags: ["Security", "Cybersecurity", "Digital Protection", "Threats"],
    featuredImage: "/images/blog-cybersecurity.jpg",
    slug: "cybersecurity-trends-2025",
    isFeatured: false
  },
  {
    id: 3,
    title: "Green IT: Sustainable Technology Solutions",
    excerpt: "Explore how organizations are implementing eco-friendly technology solutions to reduce their carbon footprint.",
    content: "Full article content would go here...",
    author: {
      name: "Emily Watson",
      avatar: "/images/avatar-3.jpg"
    },
    publishedDate: "2025-01-10",
    readTime: "5 min read",
    category: "Sustainability",
    tags: ["Green IT", "Sustainability", "Eco-friendly", "Technology"],
    featuredImage: "/images/blog-green-it.jpg",
    slug: "green-it-sustainable-solutions",
    isFeatured: false
  },
  {
    id: 4,
    title: "Quantum Computing: Breaking New Grounds",
    excerpt: "Understanding the revolutionary potential of quantum computing and its applications in various industries.",
    content: "Full article content would go here...",
    author: {
      name: "Dr. James Kim",
      avatar: "/images/avatar-4.jpg"
    },
    publishedDate: "2025-01-08",
    readTime: "10 min read",
    category: "Quantum Technology",
    tags: ["Quantum Computing", "Innovation", "Technology", "Research"],
    featuredImage: "/images/blog-quantum.jpg",
    slug: "quantum-computing-breakthroughs",
    isFeatured: false
  }
];

const CATEGORIES = [
  "All Categories",
  "AI & Technology",
  "Cybersecurity",
  "Sustainability",
  "Quantum Technology",
  "Cloud Services",
  "Digital Transformation"
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [posts, setPosts] = useState(MOCK_BLOG_POSTS);

  // Filter blog posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI & Tech Insights
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Expert perspectives on artificial intelligence, tech innovation, and digital transformation
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan/40 focus:outline-none transition-colors"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Featured Post Section */}
        {featuredPosts.length > 0 && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={featuredPosts[0].featuredImage}
                    alt={featuredPosts[0].title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "https://via.placeholder.com/600x400/1f2937/6b7280?text=Blog+Image";
                    }}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-sm text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full inline-block mb-4 w-fit">
                    {featuredPosts[0].category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 text-lg">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <img
                      src={featuredPosts[0].author.avatar}
                      alt={featuredPosts[0].author.name}
                      className="w-10 h-10 rounded-full mr-3"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = "https://via.placeholder.com/40x40/374151/9ca3af?text=U";
                      }}
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPosts[0].author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}
                      </p>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${featuredPosts[0].slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform w-fit"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "https://via.placeholder.com/400x300/1f2937/6b7280?text=Blog+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="text-zion-slate-light">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-zion-slate-light">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm text-zion-slate-light">{post.publishedDate}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-zion-cyan hover:text-white transition-colors font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, technology, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
