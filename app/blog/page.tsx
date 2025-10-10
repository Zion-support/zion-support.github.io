'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { User, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is transforming modern business operations and creating new opportunities for growth.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Learn the essential strategies and considerations for successfully migrating your business to the cloud.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and trends that will shape the digital landscape this year.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Digital Transformation Strategies',
      excerpt: 'Explore proven strategies for digital transformation that drive business growth and innovation.',
      author: 'Zion Tech Team',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare',
      excerpt: 'Discover how machine learning is revolutionizing healthcare and improving patient outcomes.',
      author: 'Zion Tech Team',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Healthcare IT',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Blockchain Technology Applications',
      excerpt: 'Learn about real-world applications of blockchain technology across various industries.',
      author: 'Zion Tech Team',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Blockchain',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and IT solutions. Expert articles, tutorials, and industry trends from Zion Tech Group." />
        <meta name="keywords" content="AI blog, technology insights, IT solutions, artificial intelligence, cloud computing, cybersecurity, digital transformation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, technology, and IT solutions. Expert articles, tutorials, and industry trends.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-gradient-to-r from-amber-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <button className="flex items-center text-amber-400 hover:text-amber-300 font-semibold group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates on AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;