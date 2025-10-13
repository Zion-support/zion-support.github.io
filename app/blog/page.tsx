import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      author: "Zion Tech Group Team",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      image: "/images/blog/ai-business-trends.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their digital assets.",
      author: "Security Team",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/images/blog/cybersecurity-small-business.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration: A Step-by-Step Guide for Enterprises",
      excerpt: "Learn how to successfully migrate your business to the cloud with our comprehensive guide.",
      author: "Cloud Solutions Team",
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/images/blog/cloud-migration-guide.jpg",
      featured: true
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating Opportunities",
      excerpt: "Discover how 5G technology is revolutionizing various industries and creating new business opportunities.",
      author: "5G Solutions Team",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "5G Technology",
      image: "/images/blog/5g-transformation.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Explore how micro SAAS solutions are changing the way businesses approach software and automation.",
      author: "Product Team",
      date: "November 20, 2024",
      readTime: "4 min read",
      category: "Software Solutions",
      image: "/images/blog/micro-saas-future.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation: Key Strategies for Modern Businesses",
      excerpt: "Essential strategies for successful digital transformation in today's competitive market.",
      author: "Digital Transformation Team",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Digital Transformation",
      image: "/images/blog/digital-transformation.jpg",
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights & Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, cloud computing, 5G technology, digital transformation, business technology"
        canonical="https://ziontechgroup.com/blog"
      />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead with the latest insights, trends, and expert analysis on AI, cybersecurity, cloud computing, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <ResponsiveContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl text-cyan-400">📝</div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-2">
                      <span className="bg-cyan-500/20 px-2 py-1 rounded-full">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </ResponsiveContainer>
          </section>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <ResponsiveContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl text-purple-400">📰</div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-purple-400 mb-2">
                      <span className="bg-purple-500/20 px-2 py-1 rounded-full">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </ResponsiveContainer>
          </section>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <ResponsiveContainer>
              <div className="text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-white mb-4">No articles found</h2>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or browse our featured articles above.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Search
                </button>
              </div>
            </ResponsiveContainer>
          </section>
        )}
      </main>
    </div>
  );
};

export default BlogPage;