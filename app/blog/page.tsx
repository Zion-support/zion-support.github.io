'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
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
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-enterprise.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Barriers in Data Processing',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for your business.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum Computing',
      image: '/images/blog/quantum-computing.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Learn about emerging cybersecurity threats and how AI-powered solutions are helping organizations stay secure.',
      author: 'Emily Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cybersecurity-ai.jpg'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide for 2024',
      excerpt: 'Everything you need to know about migrating to the cloud, from planning to execution and optimization.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Bringing Power to the Edge',
      excerpt: 'Understanding edge computing and its impact on IoT, real-time applications, and data processing.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Edge Computing',
      image: '/images/blog/edge-computing.jpg'
    },
    {
      id: 6,
      title: 'Building Scalable Microservices: Best Practices and Patterns',
      excerpt: 'Learn the essential patterns and practices for building robust, scalable microservices architectures.',
      author: 'Alex Thompson',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Software Architecture',
      image: '/images/blog/microservices.jpg'
    }
  ]

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Computing',
    'Edge Computing',
    'Software Architecture'
  ]

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights and Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry news from our expert team at Zion Tech Group." />
        <meta name="keywords" content="technology blog, AI insights, quantum computing, cybersecurity, cloud computing, tech trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with our expert insights on AI, quantum computing, 
              cybersecurity, and the latest technology trends.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
                      <span className="text-white/50 text-sm">Featured Image</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest technology insights and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
  )
}

export default BlogPage