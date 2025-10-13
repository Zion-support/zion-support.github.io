import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, BookOpen, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are transforming businesses worldwide and discover how to leverage these technologies for competitive advantage.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Learn essential cybersecurity measures that every small business should implement to protect their digital assets and customer data.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover proven strategies for migrating your business to the cloud, including planning, execution, and post-migration optimization.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Learn how to build web applications that can handle millions of users using modern frameworks and best practices.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Development",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Transform your raw data into actionable insights with advanced analytics techniques and tools that drive business growth.",
      author: "Lisa Martinez",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Data Analytics",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "5G Technology: Revolutionizing Connectivity and IoT",
      excerpt: "Explore how 5G technology is transforming industries and enabling new possibilities for IoT and smart city solutions.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "5G Technology",
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "AI & Machine Learning", count: 1, active: false },
    { name: "Cybersecurity", count: 1, active: false },
    { name: "Cloud Computing", count: 1, active: false },
    { name: "Development", count: 1, active: false },
    { name: "Data Analytics", count: 1, active: false },
    { name: "5G Technology", count: 1, active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, cloud computing, web development, data analytics, 5G technology"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Stay ahead with the latest technology insights, industry trends, and expert advice 
            from our team of technology professionals.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <FuturisticCard key={post.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-white text-lg">Featured Article Image</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="text-purple-400 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>
                    <FuturisticButton
                      href={`/blog/${post.id}`}
                      variant="primary"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Read Article
                    </FuturisticButton>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <FuturisticCard key={post.id} className="overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-white text-sm">Article Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest technology insights and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FuturisticButton
                href="#"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
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