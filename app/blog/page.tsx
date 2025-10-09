'use client';
import React from 'react';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      category: 'AI Trends',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'How Machine Learning is Revolutionizing Customer Service',
      excerpt: 'Discover how AI-powered chatbots and automation are transforming customer support operations.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      category: 'Machine Learning',
      readTime: '4 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and considerations for successful cloud migration projects.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      category: 'Cloud Computing',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI can both help and pose new challenges.',
      author: 'Zion Tech Group',
      date: '2023-12-28',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Building Scalable AI Infrastructure: A Technical Deep Dive',
      excerpt: 'Technical insights into creating robust, scalable AI infrastructure for enterprise applications.',
      author: 'Zion Tech Group',
      date: '2023-12-20',
      category: 'AI Infrastructure',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'The ROI of AI Implementation: Measuring Success',
      excerpt: 'How to measure and maximize the return on investment for your AI initiatives.',
      author: 'Zion Tech Group',
      date: '2023-12-15',
      category: 'Business Strategy',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'AI Trends', 'Machine Learning', 'Cloud Computing', 'Cybersecurity', 'AI Infrastructure', 'Business Strategy'];

  return (
    <>
      <SEOEnhancer
        title="Blog - Zion Tech Group | AI and IT Insights"
        description="Stay updated with the latest insights on AI, machine learning, cloud computing, and digital transformation from Zion Tech Group experts."
        keywords={['AI blog', 'machine learning insights', 'cloud computing', 'cybersecurity', 'digital transformation', 'tech blog']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Tech Insights & AI Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay ahead of the curve with expert insights on AI, machine learning, cloud computing, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-10 pr-4 bg-slate-800 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-800 text-gray-300 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 neon-text">Featured Article</h2>
            <div className="cyber-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                    <span className="bg-purple-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{blogPosts[0].title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 neon-text">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-4">
                    <div className="text-4xl">📊</div>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-purple-400 text-slate-900 px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
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
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI and tech insights delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
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