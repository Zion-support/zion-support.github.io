import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Book, Code, Zap, Brain, Shield, ChevronRight, Download, ExternalLink } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const docCategories = [
    { id: 'all', name: 'All Documentation', icon: Book },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Quick Start Guide',
      description: 'Get up and running with Zion Tech Group services in minutes',
      category: 'getting-started',
      difficulty: 'Beginner',
      timeToRead: '5 min',
      lastUpdated: '2024-01-15',
      popular: true
    },
    {
      id: 2,
      title: 'API Authentication',
      description: 'Learn how to authenticate with our API using various methods',
      category: 'api',
      difficulty: 'Intermediate',
      timeToRead: '10 min',
      lastUpdated: '2024-01-14',
      popular: true
    },
    {
      id: 3,
      title: 'AI Model Training',
      description: 'Complete guide to training custom AI models with our platform',
      category: 'ai',
      difficulty: 'Advanced',
      timeToRead: '30 min',
      lastUpdated: '2024-01-13',
      popular: false
    },
    {
      id: 4,
      title: 'Security Best Practices',
      description: 'Essential security guidelines for protecting your data and applications',
      category: 'security',
      difficulty: 'Intermediate',
      timeToRead: '15 min',
      lastUpdated: '2024-01-12',
      popular: true
    },
    {
      id: 5,
      title: 'SDK Installation',
      description: 'Install and configure our SDKs for Python, JavaScript, and other languages',
      category: 'getting-started',
      difficulty: 'Beginner',
      timeToRead: '8 min',
      lastUpdated: '2024-01-11',
      popular: false
    },
    {
      id: 6,
      title: 'Webhook Configuration',
      description: 'Set up webhooks to receive real-time notifications from our services',
      category: 'api',
      difficulty: 'Intermediate',
      timeToRead: '12 min',
      lastUpdated: '2024-01-10',
      popular: false
    }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

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
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you build amazing applications with our AI and technology services.
          </p>
        </div>

        {/* Search */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/docs/quick-start"
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              <Zap className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
              <p className="text-purple-100 text-sm">Get started in 5 minutes</p>
            </Link>
            <Link
              to="/docs/api-reference"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all"
            >
              <Code className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">API Reference</h3>
              <p className="text-gray-300 text-sm">Complete API documentation</p>
            </Link>
            <Link
              to="/docs/ai-services"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all"
            >
              <Brain className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Services</h3>
              <p className="text-gray-300 text-sm">AI and ML guides</p>
            </Link>
            <Link
              to="/docs/security"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all"
            >
              <Shield className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-gray-300 text-sm">Security best practices</p>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            {docCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Documentation List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Documentation</h2>
          <div className="space-y-6">
            {filteredDocs.map((doc) => (
              <div key={doc.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{doc.title}</h3>
                      {doc.popular && (
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{doc.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className={`px-2 py-1 rounded ${getDifficultyColor(doc.difficulty)}`}>
                        {doc.difficulty}
                      </span>
                      <span>{doc.timeToRead} read</span>
                      <span>Updated {doc.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Status */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">API Status</h2>
                <p className="text-green-200">All systems operational</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-green-200 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Support
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </section>
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

export default DocsPage;