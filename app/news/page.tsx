import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Zap, Brain, Code, Shield } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Announces $50M Series B Funding Round',
      excerpt: 'Leading AI solutions provider secures significant investment to accelerate product development and global expansion.',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      category: 'Company News',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      title: 'Revolutionary AI Model Achieves 99.9% Accuracy in Medical Diagnosis',
      excerpt: 'Our latest healthcare AI solution demonstrates unprecedented performance in medical imaging analysis.',
      date: '2024-01-10',
      author: 'Dr. Michael Chen',
      category: 'AI Innovation',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'Zion Tech Group Partners with Fortune 500 Companies for Digital Transformation',
      excerpt: 'Strategic partnerships announced with major corporations to implement enterprise AI solutions.',
      date: '2024-01-08',
      author: 'Emily Rodriguez',
      category: 'Partnerships',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'New Quantum Computing Research Lab Opens in Delaware',
      excerpt: 'State-of-the-art facility dedicated to advancing quantum computing capabilities for commercial applications.',
      date: '2024-01-05',
      author: 'Dr. James Wilson',
      category: 'Research',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'AI-Powered Cybersecurity Solution Prevents 99.8% of Threats',
      excerpt: 'Our advanced security AI successfully blocks sophisticated cyber attacks in real-time.',
      date: '2024-01-03',
      author: 'Alex Thompson',
      category: 'Security',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      excerpt: 'Industry recognition for our innovative approach to artificial intelligence and machine learning.',
      date: '2024-01-01',
      author: 'Lisa Park',
      category: 'Awards',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = [
    { name: 'All News', count: 24, icon: Zap },
    { name: 'Company News', count: 8, icon: Brain },
    { name: 'AI Innovation', count: 6, icon: Code },
    { name: 'Partnerships', count: 4, icon: Shield },
    { name: 'Research', count: 3, icon: Brain },
    { name: 'Awards', count: 3, icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed about our latest innovations, partnerships, and breakthroughs in AI and technology.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white hover:bg-white/20 transition-all"
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-gray-400">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {newsArticles.filter(article => article.featured).map((article, index) => (
          <div key={index} className="mb-16">
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-purple-300">{article.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{article.title}</h2>
              <p className="text-xl text-gray-300 mb-6">{article.excerpt}</p>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.filter(article => !article.featured).map((article, index) => (
            <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest news, insights, and updates from Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;