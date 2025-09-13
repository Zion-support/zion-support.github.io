import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, X } from 'lucide-react';

const UltimateContentDiscovery2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', count: 580 },
    { id: 'ai-research', name: 'AI Research', count: 150 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 75 },
    { id: 'autonomous-systems', name: 'Autonomous Systems', count: 120 },
    { id: 'edge-computing', name: 'Edge Computing', count: 90 },
    { id: 'ethics', name: 'AI Ethics', count: 60 },
    { id: 'predictions', name: 'Future Predictions', count: 85 }
  ];

  const trendingContent = [
    {
      id: 1,
      title: "Neural Synthesis Breakthroughs 2025",
      description: "Latest advances in neural network architectures enabling human-level understanding",
      category: "AI Research",
      readTime: "15 min",
      views: "45.2K",
      rating: 4.9,
      trending: true,
      href: "/neural-synthesis-breakthroughs-2025"
    },
    {
      id: 2,
      title: "Quantum Supremacy in Business",
      description: "How quantum computing is solving previously impossible optimization problems",
      category: "Quantum Computing",
      readTime: "20 min",
      views: "38.7K",
      rating: 4.8,
      trending: true,
      href: "/quantum-supremacy-business"
    },
    {
      id: 3,
      title: "Autonomous AI Implementation Guide",
      description: "Complete guide to building self-managing AI systems",
      category: "Autonomous Systems",
      readTime: "25 min",
      views: "52.1K",
      rating: 4.9,
      trending: true,
      href: "/autonomous-ai-implementation"
    },
    {
      id: 4,
      title: "Edge AI Deployment Strategies",
      description: "Deploy AI models at the edge for maximum performance and minimal latency",
      category: "Edge Computing",
      readTime: "18 min",
      views: "29.3K",
      rating: 4.7,
      trending: false,
      href: "/edge-ai-deployment"
    },
    {
      id: 5,
      title: "AI Ethics Framework 2025",
      description: "Comprehensive framework for developing ethical AI systems",
      category: "AI Ethics",
      readTime: "22 min",
      views: "24.8K",
      rating: 4.8,
      trending: false,
      href: "/ai-ethics-framework-2025"
    },
    {
      id: 6,
      title: "Future of AI: 2025-2030 Predictions",
      description: "Expert predictions on AI trends and technological breakthroughs",
      category: "Future Predictions",
      readTime: "30 min",
      views: "67.5K",
      rating: 4.9,
      trending: true,
      href: "/future-ai-predictions-2025-2030"
    }
  ];

  const filteredContent = trendingContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           content.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the perfect AI and technology content tailored to your needs with our advanced discovery engine
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI content, technologies, and insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Advanced Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Read Time</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option>Any Length</option>
                    <option>Under 10 min</option>
                    <option>10-20 min</option>
                    <option>20-30 min</option>
                    <option>Over 30 min</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option>Any Rating</option>
                    <option>4.5+ Stars</option>
                    <option>4.0+ Stars</option>
                    <option>3.5+ Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option>Most Popular</option>
                    <option>Latest</option>
                    <option>Highest Rated</option>
                    <option>Most Viewed</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div key={content.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full">
                    {content.category}
                  </span>
                  {content.trending && (
                    <div className="flex items-center text-orange-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{content.rating}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{content.views} views</span>
                </div>

                {/* CTA */}
                <Link 
                  to={content.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Load More Content
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UltimateContentDiscovery2025;