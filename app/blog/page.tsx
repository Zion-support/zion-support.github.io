'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'How to Implement AI-Powered Customer Support',
      excerpt: 'A comprehensive guide to implementing AI chatbots and virtual assistants for better customer experience.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Customer Service',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices for Enterprise',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration in enterprise environments.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cloud',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 4,
      title: 'Micro SAAS: The Future of Business Software',
      excerpt: 'Discover how micro SAAS solutions are revolutionizing the way businesses operate and scale.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Micro SAAS',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Understanding the evolving landscape of cybersecurity threats and how AI can help protect your business.',
      author: 'Zion Tech Group',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Security',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 6,
      title: 'Building Scalable IT Infrastructure',
      excerpt: 'Essential strategies for creating robust, scalable IT infrastructure that grows with your business.',
      author: 'Zion Tech Group',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Infrastructure',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = ['All', 'AI', 'Customer Service', 'Cloud', 'Micro SAAS', 'Security', 'Infrastructure'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, and technology trends 
              from our team of experts.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                        <span>Featured Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="bg-gray-800 h-48 flex items-center justify-center">
                    <span className="text-gray-400">Blog Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on AI, IT solutions, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;