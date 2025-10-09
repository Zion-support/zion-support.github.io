import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ExternalLink, TrendingUp, Award, Zap } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Platform',
      excerpt: 'Our new quantum-enhanced AI platform delivers unprecedented processing power for enterprise applications.',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
      category: 'Product Launch',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Fortune 500 Company Drives $50M in Cost Savings',
      excerpt: 'Our AI automation solutions helped a major corporation achieve record-breaking efficiency improvements.',
      date: '2024-01-10',
      author: 'Michael Rodriguez',
      category: 'Case Study',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Zion Tech Group Receives ISO 27001 Security Certification',
      excerpt: 'We\'ve achieved the highest international standard for information security management systems.',
      date: '2024-01-05',
      author: 'Jennifer Walsh',
      category: 'Awards',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'New Research Paper Published on Autonomous Business Systems',
      excerpt: 'Our latest research demonstrates breakthrough advances in self-managing business processes.',
      date: '2023-12-28',
      author: 'Dr. Alex Thompson',
      category: 'Research',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands to European Markets',
      excerpt: 'We\'re bringing our cutting-edge AI solutions to businesses across Europe with new regional offices.',
      date: '2023-12-20',
      author: 'Emma Johnson',
      category: 'Company News',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Cybersecurity Solution Prevents 99.9% of Threats',
      excerpt: 'Our advanced threat detection system has achieved industry-leading security performance.',
      date: '2023-12-15',
      author: 'David Kim',
      category: 'Technology',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'Product Launch', 'Case Study', 'Awards', 'Research', 'Company News', 'Technology'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/news" className="text-cyan-400 font-semibold">News</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest <span className="text-cyan-400">News</span> & Updates
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed about our latest innovations, partnerships, and breakthroughs in AI and technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'All' && (
          <section className="mb-16">
            <div className="bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                  </div>
                  <Link
                    to={`/news/${featuredArticle.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                    <p>Featured Article Image</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured || selectedCategory !== 'All').map((article) => (
              <article key={article.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-200">
                <div className="bg-slate-700 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Award className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <Link
                      to={`/news/${article.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsPage;