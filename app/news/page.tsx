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
      readTime: '5 min read',
      image: '/images/news/ai-platform-launch.jpg'
    },
    {
      id: 2,
      title: 'Partnership with Microsoft Azure Expands Cloud Services Portfolio',
      excerpt: 'Strategic partnership brings advanced cloud solutions and enhanced security features to our clients.',
      date: '2024-10-05',
      category: 'Partnership',
      readTime: '3 min read',
      image: '/images/news/microsoft-partnership.jpg'
    },
    {
      id: 3,
      title: 'Zion Tech Group Achieves SOC 2 Type II Certification',
      excerpt: 'We are proud to announce our SOC 2 Type II certification, demonstrating our commitment to security and compliance.',
      date: '2024-10-01',
      category: 'Certification',
      readTime: '4 min read',
      image: '/images/news/soc2-certification.jpg'
    },
    {
      id: 4,
      title: 'New Quantum Computing Research Initiative Announced',
      excerpt: 'We are investing $10M in quantum computing research to develop next-generation solutions for our clients.',
      date: '2024-09-28',
      category: 'Research',
      readTime: '6 min read',
      image: '/images/news/quantum-research.jpg'
    },
    {
      id: 5,
      title: 'AI-Powered Cybersecurity Solutions Show 95% Threat Detection Rate',
      excerpt: 'Our latest cybersecurity AI models demonstrate unprecedented accuracy in threat detection and prevention.',
      date: '2024-09-25',
      category: 'Technology',
      readTime: '4 min read',
      image: '/images/news/cybersecurity-ai.jpg'
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands to European Market',
      excerpt: 'We are excited to announce our expansion into the European market with new offices in London and Berlin.',
      date: '2024-09-20',
      category: 'Business',
      readTime: '3 min read',
      image: '/images/news/europe-expansion.jpg'
    }
  ];

  const categories = [...new Set(newsArticles.map(article => article.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest news, product launches, partnerships, and insights from Zion Tech Group.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium">
              All News
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
          <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full mr-4">
                    {newsArticles[0].category}
                  </span>
                  <span className="text-gray-400 text-sm">{newsArticles[0].readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{newsArticles[0].title}</h3>
                <p className="text-gray-300 mb-6">{newsArticles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {new Date(newsArticles[0].date).toLocaleDateString()}
                  </span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <article key={article.id} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-colors group">
                <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 bg-cyan-600 text-white text-xs rounded-full mr-3">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-cyan-100 mb-6">
              Subscribe to our newsletter to get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Press Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Press Releases</h3>
              <p className="text-gray-300 text-sm mb-4">Download our latest press releases and announcements.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                Download
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Media Kit</h3>
              <p className="text-gray-300 text-sm mb-4">Logos, images, and brand assets for media use.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                Download
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Contact Press</h3>
              <p className="text-gray-300 text-sm mb-4">Get in touch with our press team for media inquiries.</p>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;