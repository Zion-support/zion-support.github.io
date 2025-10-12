'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Calendar, User, Clock, Globe } from 'lucide-react'

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Platform',
      excerpt: 'Our new AI platform revolutionizes business operations with advanced machine learning capabilities.',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'Product Launch',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Partnership with Leading Cloud Provider Announced',
      excerpt: 'Strategic partnership brings enhanced cloud infrastructure solutions to our clients.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Partnership',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Company Receives Industry Recognition Award',
      excerpt: 'Zion Tech Group recognized for excellence in AI innovation and customer service.',
      author: 'Mike Chen',
      date: '2024-01-05',
      category: 'Awards',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'New Office Opens in European Market',
      excerpt: 'Expansion into European market brings our services closer to international clients.',
      author: 'Emma Wilson',
      date: '2023-12-28',
      category: 'Expansion',
      readTime: '6 min read'
    }
  ]

  const categories = ['All', 'Product Launch', 'Partnership', 'Awards', 'Expansion', 'Technology']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>News - Zion Tech Group</title>
        <meta name="description" content="Latest news and updates from Zion Tech Group. Stay informed about our latest products, partnerships, and company developments." />
        <meta name="keywords" content="news, updates, Zion Tech Group, AI solutions, technology news" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Latest News
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Stay updated with the latest news, product launches, and company developments from Zion Tech Group.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage
