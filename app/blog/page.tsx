'use client';
import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping enterprise operations and driving digital transformation across industries.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Through Traditional Limitations",
      excerpt: "How quantum computing is revolutionizing data processing and what it means for your business infrastructure.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution.",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Step-by-step guide to successful cloud migration with real-world case studies and lessons learned.",
      author: "Jennifer Liu",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Automation ROI: Measuring Success in Digital Transformation",
      excerpt: "How to calculate and maximize ROI from your automation investments with practical frameworks.",
      author: "David Park",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Automation",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "Building Scalable AI Infrastructure: Lessons from the Field",
      excerpt: "Real-world insights on building and maintaining AI infrastructure that can scale with your business.",
      author: "Rachel Green",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Infrastructure",
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud Computing",
    "Automation",
    "Infrastructure"
  ];

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group | AI and IT Insights"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and digital transformation from Zion Tech Group's expert team."
        keywords={['ai blog', 'it insights', 'technology trends', 'digital transformation', 'quantum computing', 'cybersecurity']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Tech Insights & News
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on AI, quantum computing, 
              cybersecurity, and the latest technology trends shaping our digital future.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        category === "All Posts"
                          ? "bg-cyan-600 text-white"
                          : "bg-slate-700 text-gray-300 hover:bg-cyan-600 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 neon-text">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Featured Image</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                      <a
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Blog Posts Grid */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 neon-text">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Article Image</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 neon-text line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded">
                      {post.category}
                    </span>
                    <a
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI, quantum computing, and digital transformation 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="cyber-button px-6 py-3 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;