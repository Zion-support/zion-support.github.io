'use client';

import React, { useState } from 'react';
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
      title: 'Company Achieves 300% Growth in Q3 2024',
      excerpt: 'Zion Tech Group reports record-breaking growth with expanded client base and new service offerings.',
      date: '2024-10-05',
      category: 'Company News',
      image: '📈',
      featured: false
    },
    {
      id: 3,
      title: 'New Partnership with Leading Cloud Provider',
      excerpt: 'Strategic partnership enables enhanced cloud solutions and improved service delivery for our clients.',
      date: '2024-10-02',
      category: 'Partnerships',
      image: '🤝',
      featured: false
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Product Launch', 'Company News', 'Partnerships', 'Technology'];

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and developments from Zion Tech Group.
            </p>
          </header>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{article.image}</div>
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{article.title}</h2>
                <p className="text-gray-300 mb-4 text-sm">{article.excerpt}</p>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try selecting a different category or check back later for new content.</p>
            </div>
          )}

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-gray-200 mb-8 text-lg">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe to Newsletter
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;