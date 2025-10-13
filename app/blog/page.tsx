import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250',
      slug: 'future-of-ai-in-business-2024'
    },
    {
      title: 'Cybersecurity Best Practices for Small and Medium Businesses',
      excerpt: 'Learn essential cybersecurity strategies to protect your business from evolving digital threats.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-best-practices-smb'
    },
    {
      title: '5G Technology: Revolutionizing Connectivity and IoT',
      excerpt: 'Discover how 5G networks are enabling new possibilities in IoT, edge computing, and smart city solutions.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: '5G & Connectivity',
      image: '/api/placeholder/400/250',
      slug: '5g-technology-revolutionizing-connectivity'
    },
    {
      title: 'Micro SAAS Solutions: The Future of Business Software',
      excerpt: 'How micro SAAS platforms are changing the way businesses approach software solutions and digital transformation.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Business Solutions',
      image: '/api/placeholder/400/250',
      slug: 'micro-saas-solutions-future-business-software'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cybersecurity', '5G & Connectivity', 'Business Solutions'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest insights on AI, cybersecurity, 5G technology, and business solutions from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity news, 5G technology, business solutions, tech trends"
        canonical="https://ziontechgroup.com/blog"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest insights on AI, cybersecurity, 5G technology, 
            and business solutions from our team of experts.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-cyan-400 text-sm font-medium">{post.category}</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <FuturisticButton
                  href={`/blog/${post.slug}`}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
              </article>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest technology trends and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <FuturisticButton
              href="#"
              variant="primary"
              size="lg"
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
