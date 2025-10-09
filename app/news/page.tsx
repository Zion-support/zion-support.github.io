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
      date: '2024-10-08',
      category: 'Product Launch',
      image: '🚀',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Group Achieves 99.9% Qubit Stability',
      excerpt: 'A major milestone in quantum computing that opens new possibilities for complex problem solving.',
      date: '2024-10-05',
      category: 'Research',
      image: '⚛️',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Partnership with Major Cloud Providers Expands Global Reach',
      excerpt: 'Strategic partnerships with AWS, Azure, and Google Cloud to deliver services worldwide.',
      date: '2024-10-03',
      category: 'Partnership',
      image: '☁️',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'AI-Powered Cybersecurity Solutions Reduce Threats by 95%',
      excerpt: 'Our advanced AI security systems demonstrate unprecedented effectiveness in threat detection and prevention.',
      date: '2024-10-01',
      category: 'Security',
      image: '🔒',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Zion Tech Group Recognized as Top AI Company by Industry Leaders',
      excerpt: 'Industry recognition for our innovative AI solutions and commitment to technological advancement.',
      date: '2024-09-28',
      category: 'Awards',
      image: '🏆',
      readTime: '3 min read'
    },
    {
      id: 6,
      title: 'New Micro SAAS Solutions Launch with 50+ Ready-to-Use Applications',
      excerpt: 'Comprehensive suite of micro SAAS solutions designed to accelerate business digital transformation.',
      date: '2024-09-25',
      category: 'Product Launch',
      image: '💻',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'Product Launch', 'Research', 'Partnership', 'Security', 'Awards'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Latest from Zion Tech Group
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Stay updated with the latest news, announcements, and insights from Zion Tech Group.
            </p>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Latest News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <article key={article.id} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{article.image}</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Subscribe to our newsletter for the latest news, updates, and insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Media Inquiries
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              For media inquiries, press releases, or interview requests, please contact our communications team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Press Contact</h3>
                <p className="text-gray-300 mb-4">Media and press inquiries</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">General Inquiries</h3>
                <p className="text-gray-300 mb-4">General news and updates</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;