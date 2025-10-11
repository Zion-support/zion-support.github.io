import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      featured: true,
      image: '/blog/ai-enterprise-2024.jpg'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure: Best Practices',
      excerpt: 'Learn how to design and implement cloud infrastructure that can scale with your business growth and handle increasing demands.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      featured: false,
      image: '/blog/cloud-infrastructure.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both creating new threats and providing innovative solutions.',
      author: 'Dr. Priya Patel',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'security',
      featured: false,
      image: '/blog/cybersecurity-ai.jpg'
    },
    {
      id: 4,
      title: 'The Rise of Edge Computing: What It Means for Your Business',
      excerpt: 'Discover how edge computing is transforming data processing and what it means for the future of business technology.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'cloud',
      featured: false,
      image: '/blog/edge-computing.jpg'
    },
    {
      id: 5,
      title: 'Building Modern Web Applications with React and Next.js',
      excerpt: 'A comprehensive guide to building fast, scalable web applications using modern React patterns and Next.js framework.',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'development',
      featured: false,
      image: '/blog/react-nextjs.jpg'
    },
    {
      id: 6,
      title: 'Digital Transformation: A Complete Guide for Business Leaders',
      excerpt: 'Everything you need to know about digital transformation, from strategy to implementation, to drive business growth.',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '15 min read',
      category: 'business',
      featured: false,
      image: '/blog/digital-transformation.jpg'
    }
  ]
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
<meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, IT trends, digital transformation, technology news" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, IT solutions, and digital transformation trends.
            </p>
          </div>
        </section>
        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
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
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
{/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default BlogPage;
