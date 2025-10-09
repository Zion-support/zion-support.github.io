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
      date: '2024-01-15',
      category: 'Product Launch',
      readTime: '5 min read',
      image: '/images/news/ai-platform-launch.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Group Partners with Leading Research Institutions',
      excerpt: 'We are excited to announce our partnership with top research institutions to advance quantum computing capabilities.',
      date: '2024-01-10',
      category: 'Partnership',
      readTime: '4 min read',
      image: '/images/news/quantum-partnership.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Excellence: Zion Tech Group Receives Industry Recognition',
      excerpt: 'Our cybersecurity solutions have been recognized by leading industry organizations for their innovation and effectiveness.',
      date: '2024-01-05',
      category: 'Awards',
      readTime: '3 min read',
      image: '/images/news/cybersecurity-award.jpg'
    },
    {
      id: 4,
      title: 'Digital Transformation Success: Client Case Study',
      excerpt: 'Learn how we helped a Fortune 500 company achieve 300% ROI through our digital transformation services.',
      date: '2024-01-01',
      category: 'Case Study',
      readTime: '6 min read',
      image: '/images/news/case-study.jpg'
    },
    {
      id: 5,
      title: 'AI Healthcare Solutions: Improving Patient Outcomes',
      excerpt: 'Our AI-powered healthcare solutions are helping medical professionals make better decisions and improve patient care.',
      date: '2023-12-28',
      category: 'Healthcare',
      readTime: '5 min read',
      image: '/images/news/ai-healthcare.jpg'
    },
    {
      id: 6,
      title: 'Cloud Migration Success: 99.9% Uptime Achieved',
      excerpt: 'We successfully migrated a major client to the cloud, achieving 99.9% uptime and significant cost savings.',
      date: '2023-12-20',
      category: 'Infrastructure',
      readTime: '4 min read',
      image: '/images/news/cloud-migration.jpg'
    }
  ];

  const categories = [...new Set(newsArticles.map(article => article.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Stay informed about our latest developments and industry insights
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Discover the latest news, product launches, partnerships, and success stories 
              from Zion Tech Group. Stay ahead of the curve with our industry insights and updates.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-medium">
                All Categories
              </button>
              {categories.map((category, index) => (
                <button key={index} className="px-6 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-lg font-medium transition-colors">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <article key={article.id} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
                    <div className="text-4xl">📰</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-sm rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        {article.readTime}
                      </span>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;