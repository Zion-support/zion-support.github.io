'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they will transform business operations in the coming year.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['AI', 'Business', 'Technology'],
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Micro SAAS: The New Era of Business Software',
      excerpt: 'Discover how micro SAAS solutions are revolutionizing the way small businesses operate.',
      author: 'Kleber Santos',
      date: '2024-01-10',
      readTime: '4 min read',
      tags: ['Micro SAAS', 'Business', 'Software'],
      image: '/images/blog/micro-saas.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats.',
      author: 'Michael Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['Cybersecurity', 'Security', 'Business'],
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Cloud Migration: A Complete Guide for Enterprises',
      excerpt: 'Step-by-step guide to successfully migrating your business to the cloud.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-01',
      readTime: '8 min read',
      tags: ['Cloud', 'Migration', 'Enterprise'],
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 5,
      title: 'The Power of Data Analytics in Decision Making',
      excerpt: 'How data analytics can transform your business decision-making process.',
      author: 'Kleber Santos',
      date: '2023-12-28',
      readTime: '5 min read',
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making'],
      image: '/images/blog/data-analytics.jpg'
    },
    {
      id: 6,
      title: 'Building Scalable Web Applications: Best Practices',
      excerpt: 'Learn the essential practices for creating web applications that can grow with your business.',
      author: 'Michael Rodriguez',
      date: '2023-12-25',
      readTime: '7 min read',
      tags: ['Web Development', 'Scalability', 'Best Practices'],
      image: '/images/blog/web-development.jpg'
    }
  ];

  const categories = ['All', 'AI', 'Micro SAAS', 'Cybersecurity', 'Cloud', 'Data Analytics', 'Web Development'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, technology trends, IT solutions, business technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Our <span className="text-white">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">ZT</div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
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
                    <span>{post.readTime}</span>
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
