import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Clock, Eye, ThumbsUp, ArrowRight, ChevronDown, X } from 'lucide-react';

const UltimateContentDiscoveryWidget2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', label: 'All Content', count: 156 },
    { id: 'ai-predictions', label: 'AI Predictions', count: 45 },
    { id: 'quantum-computing', label: 'Quantum Computing', count: 32 },
    { id: 'automation', label: 'Automation Solutions', count: 28 },
    { id: 'neural-interfaces', label: 'Neural Interfaces', count: 18 },
    { id: 'space-tech', label: 'Space Technology', count: 15 },
    { id: 'case-studies', label: 'Case Studies', count: 18 }
  ];

  const sortOptions = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'newest', label: 'Newest First' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'trending', label: 'Trending' },
    { id: 'rating', label: 'Highest Rated' }
  ];

  const contentData = [
    {
      id: 1,
      title: "AI 2025: The Ultimate Breakthrough Revolution",
      description: "Comprehensive analysis of AI breakthroughs that will reshape industries in 2025, including autonomous systems and intelligent automation.",
      category: "ai-predictions",
      readTime: "15 min read",
      views: "25.3k",
      likes: 1.2e3,
      rating: 4.9,
      date: "2025-01-15",
      author: "Dr. Sarah Chen",
      tags: ["AI 2025", "Breakthrough", "Revolution"],
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Quantum Computing Supremacy: 2025 Achievements",
      description: "Revolutionary quantum computing breakthroughs achieving practical quantum supremacy and error-corrected quantum systems.",
      category: "quantum-computing",
      readTime: "18 min read",
      views: "31.7k",
      likes: 1.8e3,
      rating: 4.8,
      date: "2025-01-14",
      author: "Prof. Michael Rodriguez",
      tags: ["Quantum Computing", "Supremacy", "2025"],
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Autonomous Business Systems: 2025 Implementation",
      description: "Complete guide to implementing autonomous business systems that can self-manage, adapt, and optimize operations.",
      category: "automation",
      readTime: "22 min read",
      views: "19.8k",
      likes: 945,
      rating: 4.7,
      date: "2025-01-13",
      author: "Dr. Emily Watson",
      tags: ["Autonomous Systems", "Business", "2025"],
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Neural Interface Revolution: Brain-Computer Integration",
      description: "Revolutionary developments in neural interfaces enabling direct brain-computer communication and cognitive enhancement.",
      category: "neural-interfaces",
      readTime: "20 min read",
      views: "28.4k",
      likes: 1.5e3,
      rating: 4.9,
      date: "2025-01-12",
      author: "Dr. Alex Kim",
      tags: ["Neural Interfaces", "BCI", "Revolution"],
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Space Technology Solutions: Interplanetary Communication",
      description: "Advanced space technology solutions including satellite networks, space manufacturing, and interplanetary communication systems.",
      category: "space-tech",
      readTime: "25 min read",
      views: "22.1k",
      likes: 1.1e3,
      rating: 4.6,
      date: "2025-01-11",
      author: "Dr. Maria Santos",
      tags: ["Space Technology", "Communication", "Satellites"],
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "AI Implementation Success: Fortune 500 Case Study",
      description: "Detailed case study of AI implementation in Fortune 500 companies, showing 500% productivity gains and ROI metrics.",
      category: "case-studies",
      readTime: "16 min read",
      views: "35.2k",
      likes: 2.1e3,
      rating: 4.8,
      date: "2025-01-10",
      author: "Dr. James Wilson",
      tags: ["Case Study", "Fortune 500", "ROI"],
      featured: true,
      image: "/api/placeholder/400/250"
    }
  ];

  useEffect(() => {
    let filtered = contentData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000')));
        break;
      case 'trending':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Widget 2025
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover, explore, and access the most comprehensive collection of AI predictions, 
            quantum computing breakthroughs, and automation solutions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[200px]"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[150px]"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300">
            Showing {filteredContent.length} of {contentData.length} results
          </p>
          <div className="text-sm text-gray-400">
            Sorted by {sortOptions.find(opt => opt.id === sortBy)?.label}
          </div>
        </div>

        {/* Content Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 ${
                item.featured 
                  ? 'border-purple-400/50 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700 hover:border-gray-600'
              } ${viewMode === 'list' ? 'flex' : ''}`}
            >
              {/* Image */}
              <div className={`relative bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden ${
                viewMode === 'list' ? 'w-64 h-48 flex-shrink-0' : 'h-48'
              }`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/80 text-white text-sm font-medium rounded-full">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                </div>
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {item.views}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {item.likes}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {item.rating}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                      {item.author.split(' ').map(n => n[0]).join('')}
                    </span>
                    {item.author}
                  </div>
                  <div>
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to={`/content/${item.id}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-12">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Load More Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSortBy('relevance');
              }}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryWidget2025;