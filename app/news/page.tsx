'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Platform for Enterprise Automation',
      excerpt: 'Our new AI platform promises to revolutionize how enterprises approach automation and digital transformation.',
      date: '2025-03-10',
      category: 'Product Launch',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Partnership with Leading Cloud Provider Expands Our Global Reach',
      excerpt: 'Strategic partnership enables us to deliver AI solutions to customers worldwide with enhanced scalability.',
      date: '2025-03-08',
      category: 'Partnership',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Industry Recognition: Zion Tech Group Named Top AI Solutions Provider',
      excerpt: 'We are proud to be recognized as a leading provider of AI solutions in the enterprise market.',
      date: '2025-03-05',
      category: 'Awards',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest News
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments, announcements, and insights from Zion Tech Group.
            </p>
          </header>

          {/* News Articles */}
          <div className="space-y-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-cyan-500 text-cyan-900 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`/news/${article.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Subscribe Now
                </Link>
                <Link
                  href="/blog"
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;