import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Platform',
      excerpt: 'Our new AI platform combines machine learning, natural language processing, and computer vision to deliver unprecedented business insights.',
      date: '2024-10-08',
      author: 'Kleber Santos',
      category: 'Product Launch',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      title: 'Quantum Computing Breakthrough Achieved',
      excerpt: 'Our quantum computing team has successfully developed a new algorithm that solves complex optimization problems 1000x faster than classical methods.',
      date: '2024-10-05',
      author: 'Dr. Sarah Chen',
      category: 'Research',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Partnership with Leading Cloud Provider',
      excerpt: 'We\'ve announced a strategic partnership with a major cloud provider to expand our AI services globally.',
      date: '2024-10-03',
      author: 'Marketing Team',
      category: 'Partnership',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'AI Ethics Framework Released',
      excerpt: 'Our comprehensive AI ethics framework ensures responsible AI development and deployment across all our solutions.',
      date: '2024-10-01',
      author: 'Ethics Committee',
      category: 'Responsibility',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Customer Success Story: 300% ROI Achieved',
      excerpt: 'A Fortune 500 client achieved 300% ROI within 6 months using our AI-powered automation solutions.',
      date: '2024-09-28',
      author: 'Customer Success Team',
      category: 'Success Story',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'New Office Opening in Silicon Valley',
      excerpt: 'We\'re excited to announce the opening of our new Silicon Valley office to better serve our West Coast clients.',
      date: '2024-09-25',
      author: 'Operations Team',
      category: 'Company News',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: newsArticles.length },
    { name: 'Product Launch', count: newsArticles.filter(article => article.category === 'Product Launch').length },
    { name: 'Research', count: newsArticles.filter(article => article.category === 'Research').length },
    { name: 'Partnership', count: newsArticles.filter(article => article.category === 'Partnership').length },
    { name: 'Responsibility', count: newsArticles.filter(article => article.category === 'Responsibility').length },
    { name: 'Success Story', count: newsArticles.filter(article => article.category === 'Success Story').length },
    { name: 'Company News', count: newsArticles.filter(article => article.category === 'Company News').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest developments, partnerships, and innovations in AI and technology.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          {newsArticles.filter(article => article.featured).map((article, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-4">
                <Tag className="w-4 h-4 text-purple-200 mr-2" />
                <span className="text-purple-200 text-sm font-medium">{article.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{article.title}</h2>
              <p className="text-purple-100 mb-6 text-lg">{article.excerpt}</p>
              <div className="flex items-center text-purple-200 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-6">{new Date(article.date).toLocaleDateString()}</span>
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.filter(article => !article.featured).map((article, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-sm">Image Placeholder</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{article.excerpt}</p>
                <div className="flex items-center text-gray-400 text-xs mb-4">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="mr-4">{new Date(article.date).toLocaleDateString()}</span>
                  <User className="w-3 h-3 mr-1" />
                  <span>{article.author}</span>
                </div>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-purple-100 mb-6">
            Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;