import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react'

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Announces New AI-Powered Solutions for Enterprise Clients',
      excerpt: 'We\'re excited to announce the launch of our latest AI-powered solutions designed specifically for enterprise clients.',
      date: '2024-01-20',
      category: 'Company News',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Partnership with Leading Cloud Provider Expands Our 5G Capabilities',
      excerpt: 'Our new partnership enables us to deliver enhanced 5G solutions to clients worldwide.',
      date: '2024-01-18',
      category: 'Partnerships',
      readTime: '2 min read'
    },
    {
      id: 3,
      title: 'Zion Tech Group Recognized as Top AI Solutions Provider',
      excerpt: 'Industry recognition for our innovative AI solutions and exceptional client service.',
      date: '2024-01-15',
      category: 'Awards',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'New Office Opening in Delaware to Support Growing Client Base',
      excerpt: 'Expanding our presence to better serve our growing client base in the region.',
      date: '2024-01-10',
      category: 'Company News',
      readTime: '2 min read'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>News - Zion Tech Group | Latest Company News and Updates</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and updates from Zion Tech Group." />
        <meta name="keywords" content="Zion Tech Group news, company updates, technology announcements, AI solutions news" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, announcements, and updates from Zion Tech Group.
            </p>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-2 lg:mb-0">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-300 transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {item.excerpt}
                </p>
                
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Follow us on social media and subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
              >
                Follow on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}