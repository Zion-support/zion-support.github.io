'use client'
import React, { useState, useEffect, useMemo } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, Calendar, User, Clock, ArrowRight, Tag, Filter } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['AI', 'Enterprise', 'Technology'],
      image: '/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every business should implement to protect against evolving cyber threats.',
      content: 'Full article content...',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'Best Practices', 'Security'],
      image: '/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies That Work',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud without downtime.',
      content: 'Full article content...',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Infrastructure'],
      image: '/blog/cloud-migration.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Micro SAAS: The Future of Software',
      excerpt: 'How small, focused software solutions are revolutionizing the way businesses operate.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'SAAS',
      tags: ['SAAS', 'Software', 'Business'],
      image: '/blog/micro-saas.jpg',
      featured: false
    }
  ]

  const categories = ['all', 'AI', 'Security', 'Cloud', 'SAAS', 'Development']

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Calendar className="w-4 h-4 mr-2" />
              Our Blog
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Latest <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and best practices in AI, IT solutions, 
              and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-400" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 group-hover:translate-x-1 transition-all duration-300">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 flex items-center space-x-1 group-hover:translate-x-1 transition-all duration-300">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Stay <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights on AI, IT solutions, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage