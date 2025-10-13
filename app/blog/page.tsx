import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in 2024.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/images/blog/ai-business-trends.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data and operations.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-small-business.jpg",
      featured: false
    },
    {
      id: 3,
      title: "5G Technology: Revolutionizing Connectivity",
      excerpt: "Explore how 5G technology is changing the way we connect and communicate in the digital age.",
      author: "Tech Innovation Team",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/images/blog/5g-technology.jpg",
      featured: false
    }
  ];

  return (
    <>
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, tech news, industry trends, business technology"
        canonical="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen pt-16">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, AI insights, and industry news from our expert team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-lg font-semibold">Featured Image</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-cyan-400 text-sm font-semibold">Article Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;