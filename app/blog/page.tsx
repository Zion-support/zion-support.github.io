import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy software applications.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      featured: true,
      image: '/blog/ai-software-development.jpg'
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
      featured: true,
      image: '/blog/ai-cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Discover how modern data analytics tools and techniques can help businesses make better decisions and drive growth.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'analytics',
      featured: false,
      image: '/blog/data-analytics.jpg'
    },
    {
      id: 5,
      title: 'Mobile App Development Trends for 2024',
      excerpt: 'Stay ahead of the curve with the latest trends in mobile app development, from AI integration to cross-platform solutions.',
      author: 'Emma Wilson',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'mobile',
      featured: false,
      image: '/blog/mobile-trends.jpg'
    },
    {
      id: 6,
      title: 'DevOps Best Practices for Modern Teams',
      excerpt: 'Learn how to implement effective DevOps practices that improve collaboration, reduce deployment risks, and accelerate delivery.',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'devops',
      featured: false,
      image: '/blog/devops-practices.jpg'
    }
  ]

  const categories = ['all', 'ai', 'cloud', 'security', 'analytics', 'mobile', 'devops']

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
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cloud computing, cybersecurity, software development, IT trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
            {/* Hero Section */}
          </div>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
            </h1>
            <p Stay ahead with the latest insights on AI, cloud computing, cybersecurity, and emerging technologies>
                  $2
                </p>
            </p>
          </div>
        </section>
            {/* Search and Filter */}
          </div>
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
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div $1>
            {categories.map((category) => (
                  <button {category.charAt(0).toUpperCase() + category.slice(1)}>
                  $2>
                  $2
                </button>
                </button>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */},
    {featuredPost && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img $1 />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                      <span {featuredPost.category}>
                  $2
                </span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <button Read More
                        >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )},
    {/* Articles Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
            <div $1>
            {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <img $1 />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                      <span {post.category}>
                  $2
                </span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <button Read More
                        >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
            {/* Newsletter Signup */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 2>
                  Stay Updated
                </h2>
            </h2>
            <p Get the latest tech insights and industry updates delivered to your inbox>
                  $2
                </p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input $1 />
              <button $2>
                  $2
                </button>
                </button>
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