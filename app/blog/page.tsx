'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read'
    },
    {
      title: 'Cybersecurity Best Practices',
      excerpt: 'Essential security measures every organization should implement.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Security',
      readTime: '7 min read'
    },
    {
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to successful cloud migration.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Cloud',
      readTime: '6 min read'
    },
    {
      title: 'Data Analytics Trends 2024',
      excerpt: 'Latest trends in data analytics and business intelligence.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Analytics',
      readTime: '4 min read'
    },
    {
      title: 'Micro SAAS Development',
      excerpt: 'Building successful micro SAAS applications for modern businesses.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      category: 'Development',
      readTime: '8 min read'
    },
    {
      title: 'AI Customer Support Solutions',
      excerpt: 'How AI is revolutionizing customer service and support.',
      author: 'James Rodriguez',
      date: '2023-12-25',
      category: 'AI',
      readTime: '5 min read'
    }
  ]

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
              Stay updated with the latest insights, trends, and best practices in AI and IT.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="cyber-card hover:bg-white/20 transition-all duration-300 group">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-1 max-w-md"
            />
            <button className="cyber-button">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
