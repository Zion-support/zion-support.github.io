import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for growth.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      category: "AI Technology",
      readTime: "5 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Micro SAAS Solutions: The New Era of Business Software",
      excerpt: "Discover how micro SAAS solutions are revolutionizing business operations and providing cost-effective alternatives to traditional software.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      category: "Micro SAAS",
      readTime: "7 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Learn about the impact of 5G technology on various industries and the opportunities it creates for businesses.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      category: "5G Technology",
      readTime: "6 min read",
      image: "/api/placeholder/600/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights and News"
        description="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, tech news, business technology, innovation"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest technology trends, AI insights, and industry news from our expert team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-cyan-400 text-4xl font-bold">ZT</div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest technology insights and updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;