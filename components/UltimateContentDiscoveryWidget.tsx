import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Clock, 
  TrendingUp, 
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  ArrowRight,
  X,
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'guide' | 'tool' | 'case-study';
  rating: number;
  views: number;
  likes: number;
  publishDate: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  trending: boolean;
  image: string;
}

const UltimateContentDiscoveryWidget: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid },
    { id: 'ai-predictions', name: 'AI Predictions', icon: TrendingUp },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Sparkles },
    { id: 'automation', name: 'Automation', icon: BookOpen },
    { id: 'case-studies', name: 'Case Studies', icon: Play },
    { id: 'tools', name: 'Tools', icon: Download }
  ];

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025-2030 Ultimate Predictions: The Complete Guide',
      description: 'Comprehensive predictions covering neural synthesis, quantum-AI fusion, and transcendent intelligence breakthroughs.',
      category: 'ai-predictions',
      type: 'guide',
      rating: 4.9,
      views: 125000,
      likes: 8900,
      publishDate: '2025-01-15',
      readTime: '25 min',
      tags: ['AI', 'Predictions', '2025', 'Neural Synthesis'],
      featured: true,
      trending: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: '2',
      title: 'Quantum Computing Breakthrough: Error-Corrected Quantum Computers',
      description: 'Revolutionary quantum computing solutions with 1000+ logical qubits and fault-tolerant operations.',
      category: 'quantum-computing',
      type: 'article',
      rating: 4.8,
      views: 98000,
      likes: 7200,
      publishDate: '2025-01-14',
      readTime: '18 min',
      tags: ['Quantum Computing', 'Breakthrough', 'Error Correction'],
      featured: true,
      trending: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: '3',
      title: 'Advanced Automation Solutions: Implementation Guide',
      description: 'Complete guide to implementing intelligent process automation and autonomous decision systems.',
      category: 'automation',
      type: 'guide',
      rating: 4.7,
      views: 87000,
      likes: 6500,
      publishDate: '2025-01-13',
      readTime: '32 min',
      tags: ['Automation', 'Implementation', 'AI', 'Process'],
      featured: false,
      trending: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: '4',
      title: 'Case Study: Fortune 500 AI Transformation',
      description: 'How a Fortune 500 company achieved 2,500% ROI with our AI solutions and automation platform.',
      category: 'case-studies',
      type: 'case-study',
      rating: 4.9,
      views: 156000,
      likes: 11200,
      publishDate: '2025-01-12',
      readTime: '15 min',
      tags: ['Case Study', 'ROI', 'Fortune 500', 'Transformation'],
      featured: true,
      trending: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: '5',
      title: 'AI ROI Calculator: Advanced Version',
      description: 'Calculate your potential ROI from AI implementation with our comprehensive calculator tool.',
      category: 'tools',
      type: 'tool',
      rating: 4.6,
      views: 67000,
      likes: 4800,
      publishDate: '2025-01-11',
      readTime: '5 min',
      tags: ['ROI Calculator', 'AI', 'Tool', 'Business'],
      featured: false,
      trending: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: '6',
      title: 'Quantum Internet: The Future of Secure Communication',
      description: 'Exploring the revolutionary quantum internet infrastructure and its implications for global security.',
      category: 'quantum-computing',
      type: 'article',
      rating: 4.8,
      views: 92000,
      likes: 7800,
      publishDate: '2025-01-10',
      readTime: '22 min',
      tags: ['Quantum Internet', 'Security', 'Communication', 'Infrastructure'],
      featured: false,
      trending: true,
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending ? 1 : -1;
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.views - a.views;
      case 'newest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      default:
        return 0;
    }
  });

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'guide': return BookOpen;
      case 'tool': return Download;
      case 'case-study': return TrendingUp;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'text-red-400';
      case 'guide': return 'text-blue-400';
      case 'tool': return 'text-green-400';
      case 'case-study': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Discovery Hub
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover, explore, and access the most comprehensive collection of AI predictions, 
            quantum computing breakthroughs, and automation solutions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white pr-8 focus:outline-none focus:border-blue-400"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.name}
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
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white pr-8 focus:outline-none focus:border-blue-400"
              >
                <option value="trending" className="bg-gray-800">Trending</option>
                <option value="rating" className="bg-gray-800">Highest Rated</option>
                <option value="views" className="bg-gray-800">Most Viewed</option>
                <option value="newest" className="bg-gray-800">Newest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {sortedContent.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            const typeColor = getTypeColor(item.type);
            
            return (
              <div
                key={item.id}
                className={`bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 ${
                  viewMode === 'list' ? 'flex p-6' : 'p-6'
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    {/* Grid View */}
                    <div className="relative mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        )}
                        {item.trending && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Trending
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'text-red-500 fill-current' : 'text-white'}`} />
                      </button>
                    </div>

                    <div className="flex items-center mb-3">
                      <TypeIcon className={`w-5 h-5 ${typeColor} mr-2`} />
                      <span className="text-sm text-gray-400 capitalize">{item.type.replace('-', ' ')}</span>
                      <span className="text-sm text-gray-400 mx-2">•</span>
                      <span className="text-sm text-gray-400">{item.readTime}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {item.rating}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-white/10 rounded">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:bg-white/10 rounded">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* List View */}
                    <div className="w-32 h-24 bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <TypeIcon className={`w-4 h-4 ${typeColor} mr-2`} />
                          <span className="text-sm text-gray-400 capitalize">{item.type.replace('-', ' ')}</span>
                          <span className="text-sm text-gray-400 mx-2">•</span>
                          <span className="text-sm text-gray-400">{item.readTime}</span>
                        </div>
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className="p-1 hover:bg-white/10 rounded"
                        >
                          <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                        </button>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-3">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {item.rating}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {item.views.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {item.likes.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-white/10 rounded">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button className="p-1 hover:bg-white/10 rounded">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto">
            Load More Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryWidget;