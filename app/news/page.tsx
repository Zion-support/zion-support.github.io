import React from 'react';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Platform',
      date: '2024-10-08',
      author: 'Sarah Johnson',
      excerpt: 'Our new AI platform revolutionizes enterprise automation with advanced machine learning capabilities.',
      category: 'Product Launch',
      featured: true
    },
    {
      title: 'Partnership with Leading Cloud Provider Announced',
      date: '2024-10-05',
      author: 'Michael Chen',
      excerpt: 'Strategic partnership enables enhanced cloud infrastructure solutions for our clients.',
      category: 'Partnership',
      featured: false
    },
    {
      title: 'AI Healthcare Solutions Show 95% Accuracy Improvement',
      date: '2024-10-03',
      author: 'Dr. Emily Rodriguez',
      excerpt: 'Our AI-powered healthcare diagnostics achieve unprecedented accuracy rates.',
      category: 'Research',
      featured: false
    },
    {
      title: 'Company Expands to European Markets',
      date: '2024-09-28',
      author: 'James Wilson',
      excerpt: 'Zion Tech Group opens new offices in London and Berlin to serve European clients.',
      category: 'Company News',
      featured: false
    }
  ];

  const categories = ['All', 'Product Launch', 'Partnership', 'Research', 'Company News'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Latest News
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments, announcements, and insights from Zion Tech Group.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                category === 'All'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="cyber-card hologram-card p-8 mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
            <span className="text-cyan-400 text-sm font-medium">
              {newsArticles[0].category}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{newsArticles[0].title}</h2>
          <p className="text-gray-300 mb-6 text-lg">{newsArticles[0].excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(newsArticles[0].date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{newsArticles[0].author}</span>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
              <p className="text-gray-300 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="cyber-card hologram-card p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">Get the latest news and updates delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
