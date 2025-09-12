import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, Zap, Brain, Atom, Cog } from 'lucide-react';

const InteractiveContentDiscoveryWidget = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: Search },
    { id: 'ai-2027', name: 'AI 2027 Breakthroughs', icon: Brain, color: 'purple' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'cyan' },
    { id: 'automation', name: 'Enterprise Automation', icon: Cog, color: 'blue' },
    { id: 'neural', name: 'Neural Interfaces', icon: Zap, color: 'green' }
  ];

  const contentItems = [
    {
      id: 'ai-2027-neural-synthesis',
      title: 'AI 2027 Neural Synthesis Breakthrough',
      description: 'Revolutionary neural network synthesis achieving 99.7% accuracy',
      category: 'ai-2027',
      readTime: '12 min',
      difficulty: 'Advanced',
      roi: '5000%',
      trending: true,
      featured: true,
      tags: ['Neural Networks', 'Breakthrough', 'AI 2027']
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Revolution',
      description: 'First successful integration of quantum computing with AI',
      category: 'quantum',
      readTime: '15 min',
      difficulty: 'Expert',
      roi: '8000%',
      trending: true,
      featured: true,
      tags: ['Quantum Computing', 'AI Integration', 'Revolution']
    },
    {
      id: 'enterprise-automation-mastery',
      title: 'Enterprise Automation Mastery 2027',
      description: 'Complete framework for automating 90% of enterprise processes',
      category: 'automation',
      readTime: '25 min',
      difficulty: 'Advanced',
      roi: '5000%',
      trending: true,
      featured: true,
      tags: ['Enterprise AI', 'Process Automation', 'ROI']
    },
    {
      id: 'neural-interface-breakthrough',
      title: 'Neural Interface Breakthrough 2026',
      description: 'Direct brain-computer interfaces achieving 95% accuracy',
      category: 'neural',
      readTime: '18 min',
      difficulty: 'Expert',
      roi: '6000%',
      trending: false,
      featured: true,
      tags: ['Neural Interfaces', 'BCI', 'Breakthrough']
    },
    {
      id: 'ai-2027-quantum-optimization',
      title: 'Quantum-AI Optimization Breakthrough',
      description: 'Revolutionary quantum algorithms achieving 10,000x speedup',
      category: 'quantum',
      readTime: '18 min',
      difficulty: 'Expert',
      roi: '15000%',
      trending: true,
      featured: false,
      tags: ['Quantum Algorithms', 'Optimization', 'Speedup']
    },
    {
      id: 'enterprise-ai-governance',
      title: 'Enterprise AI Governance Framework',
      description: 'Comprehensive governance system for AI compliance and ethics',
      category: 'automation',
      readTime: '22 min',
      difficulty: 'Expert',
      roi: '4000%',
      trending: false,
      featured: false,
      tags: ['AI Governance', 'Compliance', 'Ethics']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending - a.trending;
      case 'roi':
        return parseInt(b.roi) - parseInt(a.roi);
      case 'recent':
        return b.featured - a.featured;
      default:
        return 0;
    }
  });

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.color || 'gray';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Expert': return 'text-red-600 bg-red-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, quantum computing solutions, 
            and enterprise automation mastery content.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search breakthrough content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-${category.color}-500 text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="trending">Trending</option>
                <option value="roi">Highest ROI</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sortedContent.slice(0, isExpanded ? sortedContent.length : 6).map((item) => (
            <div key={item.id} className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-${getCategoryColor(item.category)}-500`}></div>
                    <span className="text-sm font-medium text-gray-600">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.trending && (
                      <div className="flex items-center text-orange-500 text-xs font-semibold">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    )}
                    {item.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center text-green-600 font-semibold">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {item.roi}
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </div>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    to={`/content/${item.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Explore Content
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {sortedContent.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              {isExpanded ? 'Show Less' : `Show All ${sortedContent.length} Results`}
              <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* No Results */}
        {sortedContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget;