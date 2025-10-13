import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock, Search, Filter } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence to drive innovation and growth.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Micro SAAS Solutions: A Complete Guide",
      excerpt: "Learn how to design, develop, and deploy micro SAAS applications that can scale with your business needs and customer demands.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Development",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies and practices every business should implement to protect their data and systems from evolving threats.",
      author: "Alex Thompson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Security",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Discover how 5G technology is revolutionizing various industries and creating new opportunities for businesses and consumers alike.",
      author: "Lisa Wang",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "5G & Connectivity",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Infrastructure Optimization: Cost and Performance Strategies",
      excerpt: "Learn how to optimize your cloud infrastructure for better performance and cost efficiency while maintaining security and reliability.",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Bringing Intelligence Closer to Data",
      excerpt: "Explore how edge computing is changing the way we process data and the benefits it brings to IoT, AI, and real-time applications.",
      author: "Emily Johnson",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Technology",
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Development",
    "Security",
    "5G & Connectivity",
    "Cloud Computing",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Insights on AI, Technology, and Innovation"
        description="Stay updated with the latest insights on AI, technology, cybersecurity, and digital transformation. Expert articles from Zion Tech Group's team of specialists."
        keywords="AI blog, technology insights, cybersecurity articles, digital transformation, cloud computing, 5G technology, business innovation"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Search className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, 
            and the latest technology trends shaping the future of business.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {blogPosts.filter(post => post.featured).map((post) => (
            <FuturisticCard key={post.id} className="p-8 mb-12 group hover:scale-105 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <FuturisticButton
                    href={`/blog/${post.id}`}
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Read Article
                  </FuturisticButton>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-300">Featured Article</p>
                    </div>
                  </div>
                </div>
              </div>
            </FuturisticCard>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <FuturisticCard key={post.id} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <FuturisticButton
                    href={`/blog/${post.id}`}
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Read More
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights, AI trends, and business innovation tips delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <FuturisticButton
              href="#"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
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