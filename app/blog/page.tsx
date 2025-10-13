import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: A Comprehensive Guide',
      excerpt: 'Explore how artificial intelligence is transforming business operations and what it means for your organization.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      title: 'Cloud Security Best Practices for Enterprise',
      excerpt: 'Learn essential security measures for protecting your cloud infrastructure and data.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Security',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: '5G Technology and Its Impact on IoT',
      excerpt: 'Understanding how 5G networks will revolutionize Internet of Things applications.',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Technology',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Digital Transformation: A Step-by-Step Guide',
      excerpt: 'Navigate your digital transformation journey with our comprehensive guide and best practices.',
      author: 'Emily Rodriguez',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', 'Security', 'Technology', 'Digital Transformation', 'Business'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights"
        description="Stay updated with the latest insights on AI, technology, cybersecurity, and digital transformation. Expert articles and industry analysis from Zion Tech Group."
        keywords="blog, technology blog, AI insights, cybersecurity, digital transformation, tech news, industry analysis"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest insights on AI, technology, cybersecurity, and digital transformation from our expert team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      Featured
                    </span>
                    <span className="text-cyan-400 font-medium">{post.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h2>
                  <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex items-center text-gray-400 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-6">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-6">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <FuturisticButton
                    variant="primary"
                    size="lg"
                    to="/contact"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Featured Article</h4>
                    <p className="text-gray-300">Click "Read Article" to access the full content and detailed insights.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest insights and analysis on technology trends and industry developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  to="/contact"
                  className="w-full"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <FuturisticButton
              variant="primary"
              size="lg"
              to="/contact"
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