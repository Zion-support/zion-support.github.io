'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is transforming modern business operations.',
      author: 'John Doe',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read'
    },
    {
      title: 'Quantum Computing: Next Frontier',
      excerpt: 'Exploring the potential of quantum computing in solving complex problems.',
      author: 'Jane Smith',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '7 min read'
    },
    {
      title: 'Digital Transformation Strategies',
      excerpt: 'Best practices for successful digital transformation in enterprises.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Digital',
      readTime: '6 min read'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion AI | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and digital transformation." />
        <meta name="keywords" content="blog, AI insights, technology news, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Blog
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Insights & Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest trends, insights, and updates in AI, technology, 
              and digital transformation.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <button className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:translate-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
