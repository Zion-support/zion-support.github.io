import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming businesses across industries.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI Technology',
      image: '/blog/ai-future-2024.jpg',
      slug: 'future-ai-business-2024'
    },
    {
      title: '5G Technology: Revolutionizing Connectivity and IoT Solutions',
      excerpt: 'Discover how 5G is enabling new possibilities in IoT, edge computing, and smart city implementations.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: '5G Solutions',
      image: '/blog/5g-revolution.jpg',
      slug: '5g-technology-revolutionizing-connectivity'
    },
    {
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats and attacks.',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-best-practices.jpg',
      slug: 'cybersecurity-best-practices-modern-businesses'
    },
    {
      title: 'Micro SAAS: The Future of Software Distribution',
      excerpt: 'How micro SAAS solutions are changing the way businesses access and use software.',
      author: 'Emily Rodriguez',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Micro SAAS',
      image: '/blog/micro-saas-future.jpg',
      slug: 'micro-saas-future-software-distribution'
    },
    {
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your business to the cloud.',
      author: 'David Kim',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration-guide.jpg',
      slug: 'cloud-migration-strategies-complete-guide'
    },
    {
      title: 'AI-Powered Analytics: Transforming Data into Insights',
      excerpt: 'Learn how AI-powered analytics can help your business make better data-driven decisions.',
      author: 'Lisa Wang',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'Data Analytics',
      image: '/blog/ai-powered-analytics.jpg',
      slug: 'ai-powered-analytics-transforming-data-insights'
    }
  ];

  const categories = [
    'All Posts',
    'AI Technology',
    '5G Solutions',
    'Cybersecurity',
    'Micro SAAS',
    'Cloud Computing',
    'Data Analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group. Expert articles on AI, 5G, cybersecurity, and more."
        keywords="technology blog, AI insights, 5G technology, cybersecurity, cloud computing, data analytics, tech news"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Stay updated with the latest technology trends, AI insights, and industry news. 
            Expert articles to help you navigate the digital transformation landscape.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FuturisticCard key={index} className="overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Featured Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">{post.author}</p>
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and never miss the latest technology insights and industry updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;