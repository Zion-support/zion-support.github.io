'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react'

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches New AI-Powered Analytics Platform',
      excerpt: 'Our latest AI analytics platform helps businesses make data-driven decisions with unprecedented accuracy.',
      author: 'Press Team',
      date: '2024-01-20',
      category: 'Product Launch',
      readTime: '3 min read',
      external: false
    },
    {
      id: 2,
      title: 'Zion Tech Group Partners with Leading Cloud Providers',
      excerpt: 'Strategic partnerships with AWS, Azure, and Google Cloud to enhance our service offerings.',
      author: 'Business Team',
      date: '2024-01-18',
      category: 'Partnership',
      readTime: '4 min read',
      external: false
    },
    {
      id: 3,
      title: 'Industry Recognition: Zion Tech Group Wins Innovation Award',
      excerpt: 'We are proud to announce that Zion Tech Group has been recognized for our innovative AI solutions.',
      author: 'Awards Team',
      date: '2024-01-15',
      category: 'Awards',
      readTime: '2 min read',
      external: false
    }
  ]

  const categories = ['All', 'Product Launch', 'Partnership', 'Awards', 'Company News', 'Industry News']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>News - Zion Tech Group | Latest Updates & Announcements</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and updates from Zion Tech Group." />
        <meta name="keywords" content="news, announcements, updates, Zion Tech Group, company news" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Latest News
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Stay informed with the latest news, announcements, and updates 
              from Zion Tech Group.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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

      {/* News Items */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-cyan-400/10 text-cyan-400 text-xs font-medium px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h2>
                
                <p className="text-gray-300 mb-4">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                    <span>{item.readTime}</span>
                  </div>
                  
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm">
                    {item.external ? (
                      <>
                        Read More
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest news and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage