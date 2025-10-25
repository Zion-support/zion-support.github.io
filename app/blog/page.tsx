'use client';
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Posts', count: 24 },
    { name: 'ai', label: 'Artificial Intelligence', count: 8 },
    { name: 'cloud', label: 'Cloud Computing', count: 6 },
    { name: 'security', label: 'Cybersecurity', count: 4 },
    { name: 'business', label: 'Business', count: 3 },
    { name: 'technology', label: 'Technology', count: 3 }
  ];

  const posts = [
    {
      title: "The Future of AI in Enterprise: 2025 Predictions",
      excerpt: "Explore the transformative potential of AI in enterprise environments, from automated workflows to intelligent decision-making systems.",
      category: "ai",
      date: "Dec 15, 2024",
      views: "2.4k",
      comments: 18,
      readTime: "8 min"
    },
    {
      title: "Cloud Security Best Practices for 2025",
      excerpt: "Learn the essential security measures every organization should implement to protect their cloud infrastructure and data.",
      category: "security",
      date: "Dec 12, 2024",
      views: "1.8k",
      comments: 12,
      readTime: "6 min"
    },
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "Discover how to design and implement microservices that can handle massive scale while maintaining performance.",
      category: "cloud",
      date: "Dec 10, 2024",
      views: "3.2k",
      comments: 25,
      readTime: "10 min"
    },
    {
      title: "The Rise of Edge Computing in IoT",
      excerpt: "Understanding how edge computing is revolutionizing IoT deployments and enabling real-time data processing.",
      category: "technology",
      date: "Dec 8, 2024",
      views: "1.5k",
      comments: 8,
      readTime: "5 min"
    },
    {
      title: "Digital Transformation Strategies for SMBs",
      excerpt: "Practical approaches for small and medium businesses to embrace digital transformation without breaking the budget.",
      category: "business",
      date: "Dec 5, 2024",
      views: "2.1k",
      comments: 15,
      readTime: "7 min"
    },
    {
      title: "Zero Trust Security Architecture Implementation",
      excerpt: "A comprehensive guide to implementing zero trust security principles in modern enterprise environments.",
      category: "security",
      date: "Dec 3, 2024",
      views: "2.7k",
      comments: 22,
      readTime: "12 min"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'cloud': return Cloud;
      case 'security': return Shield;
      case 'business': return TrendingUp;
      case 'technology': return Code;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'text-purple-400 bg-purple-500/10';
      case 'cloud': return 'text-blue-400 bg-blue-500/10';
      case 'security': return 'text-red-400 bg-red-500/10';
      case 'business': return 'text-green-400 bg-green-500/10';
      case 'technology': return 'text-cyan-400 bg-cyan-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights, trends, and innovations in AI, cloud computing, cybersecurity, and business technology."
        keywords="blog, technology, AI, cloud computing, cybersecurity, business insights, tech trends"
      />
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Tech Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge insights, industry trends, and expert perspectives on the technologies shaping our future.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">AI</span>
                    <span className="text-gray-400 text-sm">December 15, 2024</span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">Featured</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    The Future of AI in Enterprise: 2025 Predictions
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Explore the transformative potential of AI in enterprise environments, from automated workflows to intelligent decision-making systems that are reshaping how businesses operate.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>2.4k views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>18 comments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg h-64 flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                    {post.category.toUpperCase()}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;