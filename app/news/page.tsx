import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Healthcare Platform',
      excerpt: 'Our new AI-powered healthcare platform is transforming patient care with advanced machine learning algorithms.',
      date: '2024-01-15',
      category: 'AI Healthcare',
      image: '/images/news/ai-healthcare.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough in Financial Services',
      excerpt: 'We\'ve achieved a major milestone in quantum computing applications for financial risk analysis.',
      date: '2024-01-10',
      category: 'Quantum Computing',
      image: '/images/news/quantum-finance.jpg',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'New Partnership with Leading Enterprise Clients',
      excerpt: 'Zion Tech Group announces strategic partnerships with Fortune 500 companies for AI transformation.',
      date: '2024-01-05',
      category: 'Partnerships',
      image: '/images/news/partnerships.jpg',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Cybersecurity Innovation: AI-Powered Threat Detection',
      excerpt: 'Our latest cybersecurity solution uses AI to detect and prevent advanced persistent threats.',
      date: '2024-01-01',
      category: 'Cybersecurity',
      image: '/images/news/cybersecurity.jpg',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest innovations, partnerships, and breakthroughs in AI and technology.
          </p>
        </div>

        {/* News Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl text-cyan-400/50">📰</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                    <Tag className="w-3 h-3 mr-1" />
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
