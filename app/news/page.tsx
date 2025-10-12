'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Newspaper, Users, Clock, Star, Zap, Globe, Database, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      title: 'Zion Tech Group Launches New AI Platform',
      excerpt: 'We are excited to announce the launch of our new AI-powered platform for business automation.',
      date: '2024-01-15',
      category: 'Company News'
    },
    {
      title: 'Partnership with Leading Cloud Provider',
      excerpt: 'Zion Tech Group partners with major cloud provider to expand our service offerings.',
      date: '2024-01-10',
      category: 'Partnerships'
    },
    {
      title: 'Industry Recognition for Innovation',
      excerpt: 'Our team receives recognition for innovative solutions in the technology sector.',
      date: '2024-01-05',
      category: 'Awards'
    }
  ]

  return (
    <>
      <Helmet>
        <title>News - Zion Tech Group | Company News & Updates</title>
        <meta name="description" content="Stay updated with the latest news and announcements from Zion Tech Group." />
        <meta name="keywords" content="company news, technology updates, Zion Tech Group news, industry announcements" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                News & Updates
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Stay informed with the latest news, announcements, and updates from Zion Tech Group.
              </p>
            </div>
          </div>
        </section>

        {/* News Items Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Latest News</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Recent announcements and updates from our team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{item.date}</span>
                    <Link 
                      to={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Connected
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Follow us for the latest news and updates from Zion Tech Group.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default NewsPage