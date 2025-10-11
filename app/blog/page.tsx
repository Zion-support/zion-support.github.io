import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react'
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight, Search, Filter, Clock, Tag } from 'lucide-react'
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

  const filteredPosts = blogPosts.filter(post => {const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory})

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)
readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Barriers in Data Processing',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for your business.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum Computing',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'Learn the essential steps to successfully transform your business with digital technologies.',
      author: 'Emily Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: Best Practices and Strategies',
      excerpt: 'Protect your organization with advanced cybersecurity strategies that leverage AI and machine learning.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Cloud Migration: A Step-by-Step Guide for Enterprise',
      excerpt: 'Navigate the complexities of cloud migration with our comprehensive guide for enterprise organizations.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Transforming Data Processing',
      excerpt: 'Explore how edge computing is changing the way we process data and deliver services.',
      author: 'Alex Thompson',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'Edge Computing',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop'
    }
  ]

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Digital Transformation',
    'Cybersecurity',
    'Cloud Computing',
    'Edge Computing'
  ]
return (
    <></><Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
<meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team." />
        <meta name="keywords" content="AI blog, technology insights, cloud computing, cybersecurity, development, business technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, and the latest technology trends.
</p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
</section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="flex flex-col md:flex-row gap-4 mb-8">
              </div>
<div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
<div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

{/* Featured Post */}
        {featuredPost && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            </section>
<div className="max-w-7xl mx-auto">
              </div>
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                </div>
<div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 font-semibold">Featured Article</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-gray-400 mb-6">
                  <User className="w-5 h-5 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                  </div>
<div className="flex items-center mb-4">
                    <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-semibold">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-cyan-400 hover: text-cyan-300 font-semibold flex items-center">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-300 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights and updates delivered directly to your inbox.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
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