import React from 'react';
import { Helmet } from 'react-helmet-async';
import React from 'react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
  const categories = [
    { id: "all", name: "All Posts", count: 12 },"
    { id: "ai", name: "AI & Machine Learning", count: 5 },"
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },"
    { id: "cloud", name: "Cloud Computing", count: 2 },"
    { id: "development", name: "Development", count: 2 }"
  ];

  const posts = [
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import ContentPreviewCard from '../components/ContentPreviewCard';
interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
}
export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const blogPosts: BlogPost[] = useMemo(() => [
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/images/blog/ai-business-2024.jpg",
      views: 1250,
      likes: 89,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data and operations.",
      content: "Small businesses are increasingly targeted by cybercriminals...",
      author: "Michael Chen",
      date: "2024-01-12",
      title: "5G Technology: Revolutionizing Connectivity",
      excerpt: "Explore how 5G technology is changing the way we connect and do business. From IoT to edge computing, discover the potential of next-generation networks.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is transforming modern business operations and driving unprecedented growth.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-trends.jpg',
      readTime: "8 min read",
      category: "ai",
      readTime: "5 min read",
      image: "/images/blog/ai-business-2024.jpg",
      featured: true;
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats. Comprehensive guide covering everything from basic hygiene to advanced threat detection.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "security",
      image: "/api/placeholder/600/400",
      featured: true;
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Everything you need to know about migrating to the cloud. From planning to execution, discover proven strategies for a successful cloud transformation.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/api/placeholder/600/400",
      title: 'Building Scalable Micro SaaS Applications: A Complete Guide',
      excerpt: 'Learn how to build and scale micro SaaS applications that generate recurring revenue while serving specific market needs.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Development',
      image: '/images/blog/micro-saas.jpg',
      featured: false;
    },
    {
      id: 3,
      title: 'Cloud Migration: A Complete Guide',
      excerpt: 'Everything you need to know about migrating your infrastructure to the cloud successfully and securely.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/images/blog/cloud-security.jpg',
      featured: false;
    },
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'Discover how machine learning is revolutionizing healthcare through predictive analytics, diagnosis assistance, and personalized treatment.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'AI & Technology',
      image: '/images/blog/ml-healthcare.jpg',
      featured: false;
    },
    {
      id: 5,
      title: "Zero-Trust Security Architecture: A Complete Implementation Guide",
      excerpt: "Learn how to implement zero-trust security principles to protect your organization from modern cyber threats.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "cybersecurity",
      image: "/api/placeholder/600/300",
      featured: true;
    },
    {
      id: 6,
      title: "Cloud Migration Strategies: From On-Premises to Multi-Cloud",
      excerpt: "Discover the best practices for migrating your infrastructure to the cloud while maintaining security and performance.",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/api/placeholder/600/300",
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Navigate the complexities of digital transformation with our comprehensive guide. Learn how to create a roadmap that delivers real business value.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "transformation",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const filteredPosts = posts.filter(post => {
  const featuredPosts = posts.filter(post => post.featured);
    }
  ];

  return (
    <div>
  )
    </div>
  );
  );
  )
    <>
      <Helmet>
        <title>Tech Insights & Innovation Blog | Zion Tech Group</title>
        <meta name="description" content="Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation." />"
        <meta name="keywords" content="tech blog, AI insights, cybersecurity, cloud computing, technology trends, innovation" />"
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Tech Insights & Innovation</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, 
              and digital transformation from our expert team.
            </p>
          </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">"
          <div className="max-w-7xl mx-auto px-4">"
            <div className="text-center">"
              <h1 className="text-5xl font-bold mb-6">Tech Insights & Innovation</h1>"
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "5G Technology",
    "Micro SAAS",
    "Cloud Computing",
    "Digital Transformation"
  ]
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with insights, trends, and expert analysis from our technology experts.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
  );
  );
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest insights and updates on AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>"
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">"
            <TrendingUp className="w-4 h-4 text-cyan-400 mr-2" />"
            <span className="text-cyan-400 text-sm font-medium">Latest Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog;
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest insights on AI, technology, and digital transformation. 
            Expert analysis and industry trends from our team of specialists.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">"
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">"
                <div className="relative h-64 lg:h-auto">
                  <img;
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">"
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured;
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">"
                  <div className="flex items-center space-x-4 mb-4">"
                    <span className="text-cyan-400 text-sm font-medium">{featuredPost.category}</span>"
                    <span className="text-gray-400">•</span>"
                    <span className="text-gray-400 text-sm">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">"
                    <div className="flex items-center space-x-4">"
                      <div className="flex items-center text-gray-400 text-sm">"
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">"
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">"
                      <div className="flex items-center text-gray-400 text-sm">"
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">"
                        <Heart className="w-4 h-4 mr-1" />
                        {featuredPost.likes}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center">"
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Trends;
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and emerging technologies.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">"
                <div className="relative">"
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-cyan-500/20"
                  }`}
                >
                  {category.name} ({category.count})
        </section>

        {/* Featured Posts */}
        {selectedCategory === "all" && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">"
            <div className="max-w-7xl mx-auto">"
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article;
                    key={post.id}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="p-6">"
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">"
                        <span className="flex items-center">"
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">"
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">"
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>"
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <h2 className="text-3xl font-bold text-white mb-8 text-center">"
              {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article;
                  key={post.id}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
                    <BookOpen className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="p-6">"
                    <div className="flex items-center justify-between mb-3">"
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      {post.featured && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-medium flex items-center">"
                          <Zap className="w-3 h-3 mr-1" />
                          Featured;
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">"
                      <span className="flex items-center">"
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">"
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">"
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>"
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Tech Trends
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights delivered to your inbox. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button;
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article;
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              >
                <div className="relative h-48">
                  <img;
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">"
                    <span className="bg-slate-900/80 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">"
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">"
                    <div className="flex items-center">"
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">"
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">"
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">"
                    <div className="flex items-center space-x-4 text-sm text-gray-400">"
                      <div className="flex items-center">"
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">"
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">"
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
              Load More Posts
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">"
        <div className="max-w-4xl mx-auto text-center">"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights;
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights and industry news delivered to your inbox.
          </p>
          
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
    </div>
  );
};

export default BlogPage;
      </div>
    </>
  );
}
          )}

          {/* Newsletter Signup */}
          <div className="mt-20">"
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">"
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>"
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest insights on AI, IT solutions, 
                and technology trends delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                  Subscribe;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
