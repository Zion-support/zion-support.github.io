import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ExternalLink, Tag } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Announces $50M Series A Funding Round',
      date: '2024-12-15',
      category: 'Company News',
      excerpt: 'Leading AI solutions provider secures major investment to accelerate product development and market expansion.',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      title: 'New AI-Powered Healthcare Solutions Launch',
      date: '2024-12-10',
      category: 'Product Updates',
      excerpt: 'Revolutionary AI healthcare platform now available for medical institutions and healthcare providers.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'Partnership with Fortune 500 Company Announced',
      date: '2024-12-05',
      category: 'Partnerships',
      excerpt: 'Strategic partnership to deliver enterprise AI solutions to major global corporation.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'Zion Tech Group Wins Industry Innovation Award',
      date: '2024-11-28',
      category: 'Awards',
      excerpt: 'Recognized for excellence in AI innovation and enterprise digital transformation.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'New Office Opening in Silicon Valley',
      date: '2024-11-20',
      category: 'Company News',
      excerpt: 'Expanding our presence on the West Coast to better serve our growing client base.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'AI Ethics and Responsible AI Initiative Launched',
      date: '2024-11-15',
      category: 'Responsibility',
      excerpt: 'Committed to developing AI solutions that are ethical, transparent, and beneficial to society.',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = ['All', 'Company News', 'Product Updates', 'Partnerships', 'Awards', 'Responsibility'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Latest News
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest developments, announcements, and insights from Zion Tech Group.
          </p>
        </div>

        {/* Featured Article */}
        <section className="mb-16">
          {newsArticles.filter(article => article.featured).map((article, index) => (
            <div key={index} className="cyber-card p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-400 text-black text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{article.title}</h2>
                  <p className="text-gray-300 mb-6 text-lg">{article.excerpt}</p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="cyber-button inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-400">Featured Image</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-cyan-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Article Image</span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <Tag className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about our latest news, product updates, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default NewsPage;