'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Platform for Enterprise Automation',
      excerpt: 'Our new AI platform promises to revolutionize how enterprises approach automation and digital transformation.',
      date: '2024-10-08',
      category: 'Product Launch',
      image: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Leading Cloud Providers Expands Global Reach',
      excerpt: 'Strategic partnerships enable faster deployment and better support for international clients.',
      date: '2024-10-05',
      category: 'Partnership',
      image: '🤝',
      featured: false
    },
    {
      id: 3,
      title: 'AI Security Framework Receives Industry Recognition',
      excerpt: 'Our comprehensive AI security approach has been recognized by leading industry organizations.',
      date: '2024-10-01',
      category: 'Awards',
      image: '🏆',
      featured: false
    },
    {
      id: 4,
      title: 'New Data Center Opens in Europe to Serve International Clients',
      excerpt: 'Expanded infrastructure ensures better performance and compliance for European customers.',
      date: '2024-09-28',
      category: 'Infrastructure',
      image: '🌍',
      featured: false
    },
    {
      id: 5,
      title: 'Zion Tech Group Achieves SOC 2 Type II Certification',
      excerpt: 'Enhanced security measures and compliance standards for enterprise clients.',
      date: '2024-09-25',
      category: 'Security',
      image: '🔒',
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Analytics Platform Reduces Client Costs by 40%',
      excerpt: 'Real-world results demonstrate the value of our AI solutions for enterprise clients.',
      date: '2024-09-20',
      category: 'Success Story',
      image: '📊',
      featured: false
    }
  ];

  const categories = [...new Set(newsArticles.map(article => article.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and insights from Zion Tech Group.
            </p>
          </div>

          {/* Featured Article */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            {newsArticles.filter(article => article.featured).map((article) => (
              <article key={article.id} className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">{article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {article.excerpt}
                    </p>
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* All Articles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{article.image}</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors flex items-center">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center bg-gray-800/50 rounded-xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, updates, and insights from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;