import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Transform Your Operations",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and what it means for your company's future success.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Solutions",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "5G Technology: Unlocking New Possibilities",
      excerpt: "Explore the transformative power of 5G technology and how it's enabling new innovations across industries.",
      author: "Tech Innovation Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "5G Solutions",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Micro SAAS: The Future of Software Distribution",
      excerpt: "Learn about the growing trend of micro SAAS solutions and how they're changing the software landscape.",
      author: "Product Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in the digital age.",
      author: "Security Team",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Cloud Migration: A Complete Guide",
      excerpt: "Everything you need to know about migrating your infrastructure to the cloud successfully.",
      author: "Cloud Solutions Team",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Cloud Services",
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Digital Transformation: Where to Start",
      excerpt: "A practical guide to beginning your digital transformation journey with proven strategies and tools.",
      author: "Digital Strategy Team",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "Digital Transformation",
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = [
    "All Posts",
    "AI Solutions",
    "5G Solutions",
    "Micro SAAS",
    "Cybersecurity",
    "Cloud Services",
    "Digital Transformation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights"
        description="Stay updated with the latest technology trends, AI innovations, and business insights from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, 5G technology, cybersecurity, cloud computing, digital transformation, business technology"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest insights, trends, and innovations in AI, 5G, cybersecurity, and digital transformation.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <FuturisticCard
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-cyan-400">📝</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <FuturisticCard
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-4xl text-cyan-400">📝</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-3 h-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest technology insights and updates delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-r-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;