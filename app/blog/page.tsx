'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Barriers in 2024',
      excerpt: 'Discover how quantum computing is revolutionizing industries and what it means for the future of technology.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Quantum Computing',
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable AI Infrastructure',
      excerpt: 'Learn best practices for creating robust AI infrastructure that can handle enterprise-scale workloads.',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Infrastructure',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in AI, quantum computing, and enterprise technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map(post => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl h-64 flex items-center justify-center">
                    <span className="text-gray-400">Featured Image</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;