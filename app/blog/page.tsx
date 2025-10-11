'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business' }
  ]

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
      title: 'Cybersecurity in the Age of Remote Work: Essential Strategies',
      excerpt: 'Discover essential cybersecurity strategies to protect your organization in the era of remote and hybrid work environments.',
      author: 'Emily Johnson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'security',
      featured: false,
      image: '/blog/cybersecurity-remote.jpg'
    },
    {
      id: 4,
      title: 'Modern Web Development: React vs Vue vs Angular in 2024',
      excerpt: 'A comprehensive comparison of the top JavaScript frameworks and which one to choose for your next project.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'development',
      featured: false,
      image: '/blog/web-development-2024.jpg'
    },
    {
      id: 5,
      title: 'Digital Transformation: How AI is Reshaping Business Operations',
      excerpt: 'Learn how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'business',
      featured: false,
      image: '/blog/digital-transformation.jpg'
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'Explore how advanced data analytics can help businesses make better decisions and gain competitive advantages.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'ai',
      featured: false,
      image: '/blog/data-analytics.jpg'
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
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, web development, business technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">Featured Article</h3>
                        <p className="text-cyan-100">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 text-cyan-600 mr-2" />
                      <span className="text-sm text-cyan-600 font-medium uppercase tracking-wide">
                        {categories.find(cat => cat.id === featuredPost.category)?.name}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-bold mb-2">Blog Post</h3>
                      <p className="text-cyan-100">Coming Soon</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-cyan-600 mr-2" />
                      <span className="text-sm text-cyan-600 font-medium uppercase tracking-wide">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights and updates.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

export default BlogPage