'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, Search, Filter, ExternalLink } from 'lucide-react'
import Layout from '../layout'

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Company News', 'Product Updates', 'Industry News', 'Partnerships', 'Awards', 'Events']

  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Advanced AI Analytics Platform',
      excerpt: 'Our new AI-powered analytics platform helps businesses make data-driven decisions with unprecedented insights.',
      content: 'We are excited to announce the launch of our revolutionary AI Analytics Platform, designed to transform how businesses analyze and interpret their data...',
      author: 'Sarah Johnson',
      date: '2024-01-20',
      category: 'Product Updates',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Analytics', 'Product Launch', 'Innovation'],
      featured: true
    },
    {
      id: 2,
      title: 'Zion Tech Group Partners with Microsoft Azure',
      excerpt: 'Strategic partnership brings enhanced cloud solutions and AI capabilities to our clients.',
      content: 'We are thrilled to announce our strategic partnership with Microsoft Azure, expanding our cloud computing capabilities...',
      author: 'Michael Chen',
      date: '2024-01-18',
      category: 'Partnerships',
      readTime: '2 min read',
      image: '/api/placeholder/600/400',
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud'],
      featured: false
    },
    {
      id: 3,
      title: 'Zion Tech Group Wins Best AI Solutions Provider 2024',
      excerpt: 'Recognized for excellence in AI innovation and customer satisfaction.',
      content: 'We are honored to receive the Best AI Solutions Provider award for 2024, recognizing our commitment to innovation...',
      author: 'Emily Rodriguez',
      date: '2024-01-15',
      category: 'Awards',
      readTime: '2 min read',
      image: '/api/placeholder/600/400',
      tags: ['Award', 'Recognition', 'AI', 'Excellence'],
      featured: false
    },
    {
      id: 4,
      title: 'New Cybersecurity Solutions Now Available',
      excerpt: 'Enhanced security features and threat detection capabilities for enterprise clients.',
      content: 'Our latest cybersecurity solutions provide advanced threat detection and response capabilities...',
      author: 'David Kim',
      date: '2024-01-12',
      category: 'Product Updates',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      tags: ['Cybersecurity', 'Security', 'Enterprise', 'Updates'],
      featured: false
    },
    {
      id: 5,
      title: 'Zion Tech Group to Speak at AI Summit 2024',
      excerpt: 'Our CEO will present on the future of AI in business at the upcoming AI Summit.',
      content: 'We are excited to announce that our CEO will be speaking at the AI Summit 2024, sharing insights on the future of AI...',
      author: 'Lisa Wang',
      date: '2024-01-10',
      category: 'Events',
      readTime: '2 min read',
      image: '/api/placeholder/600/400',
      tags: ['Event', 'Speaking', 'AI Summit', 'CEO'],
      featured: false
    },
    {
      id: 6,
      title: 'Industry Report: AI Adoption Reaches New Heights',
      excerpt: 'New industry report shows significant growth in AI adoption across various sectors.',
      content: 'A recent industry report reveals that AI adoption has reached unprecedented levels across multiple sectors...',
      author: 'James Wilson',
      date: '2024-01-08',
      category: 'Industry News',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      tags: ['Industry', 'Report', 'AI Adoption', 'Trends'],
      featured: false
    }
  ]

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredNews = newsItems.filter(item => item.featured)

  return (
    <Layout 
      title="News - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and updates from Zion Tech Group."
      keywords="news, announcements, company updates, product launches, partnerships, awards"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Latest <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">News</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest news, announcements, and updates from Zion Tech Group.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
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

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Featured News</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={featuredNews[0].image}
                    alt={featuredNews[0].title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredNews[0].category}
                    </span>
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredNews[0].readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredNews[0].title}</h3>
                  <p className="text-gray-300 mb-6">{featuredNews[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredNews[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredNews[0].date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link
                      to={`/news/${featuredNews[0].id}`}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                  <span className="text-gray-400 text-sm">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {item.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-white/5 text-gray-300 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/news/${item.id}`}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our press kit, media resources, and contact information for journalists and media inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Press Kit</h3>
              <p className="text-gray-300 mb-4">Download our complete press kit with company information, logos, and high-resolution images.</p>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Download Press Kit
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Media Contact</h3>
              <p className="text-gray-300 mb-4">Get in touch with our media relations team for press inquiries and interview requests.</p>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Contact Media Team
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Company Updates</h3>
              <p className="text-gray-300 mb-4">Subscribe to our press releases and company announcements.</p>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NewsPage