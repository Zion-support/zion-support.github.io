import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250',
      slug: 'future-ai-business-2024'
    },
    {
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Learn essential cybersecurity strategies to protect your business from evolving threats.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-best-practices'
    },
    {
      title: 'Micro SAAS: The Future of Software Solutions',
      excerpt: 'Discover how micro SAAS solutions are revolutionizing the software industry.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      category: 'Micro SAAS',
      image: '/api/placeholder/400/250',
      slug: 'micro-saas-future-software'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, tech news, industry trends, software development"
        canonical="https://ziontechgroup.com/blog"
      />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, AI insights, cybersecurity tips, 
              and industry news from our team of experts.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
                  <div className="w-full h-48 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-white text-sm">Blog Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for the latest technology insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
