import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Platform',
      excerpt: 'Our new AI platform revolutionizes enterprise automation with cutting-edge machine learning capabilities.',
      date: '2024-01-15',
      author: 'Zion Tech Team',
      category: 'Product Launch',
      image: '🤖'
    },
    {
      title: 'Quantum Computing Breakthrough in Financial Services',
      excerpt: 'We announce a major breakthrough in quantum computing applications for financial risk analysis.',
      date: '2024-01-10',
      author: 'Dr. Sarah Johnson',
      category: 'Research',
      image: '⚛️'
    },
    {
      title: 'Partnership with Leading Cloud Provider',
      excerpt: 'Strategic partnership announced to accelerate cloud migration and AI deployment services.',
      date: '2024-01-05',
      author: 'Business Development',
      category: 'Partnership',
      image: '☁️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Latest News</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments in AI, technology, and our company news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">{article.image}</div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                  {article.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{article.excerpt}</p>
              
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{article.date}</span>
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Informed</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on AI technology, industry insights, and company news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
