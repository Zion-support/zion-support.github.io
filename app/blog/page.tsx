'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology'
    },
    {
      title: 'Cloud Infrastructure Best Practices for Modern Enterprises',
      excerpt: 'Learn how to optimize your cloud infrastructure for better performance, security, and cost efficiency.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'IT Solutions'
    },
    {
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI-powered security solutions can help protect your business from evolving threats.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security'
    },
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'A comprehensive guide to designing and implementing microservices that can grow with your business.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development'
    },
    {
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
      author: 'Zion Tech Group',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Analytics'
    },
    {
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'Explore how edge computing is revolutionizing IoT applications and what it means for your business.',
      author: 'Zion Tech Group',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Technology'
    }
  ];

  const categories = ['All', 'AI & Technology', 'IT Solutions', 'Security', 'Development', 'Analytics', 'Technology'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in AI and IT solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights, tips, and updates in AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;