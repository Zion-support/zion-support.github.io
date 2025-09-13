import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight,
  Brain,
  Cpu,
  Zap,
  Sparkles,
  BookOpen,
  Video,
  FileText,
  BarChart3,
  X,
  ChevronDown
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'guide' | 'case-study' | 'whitepaper';
  readTime: string;
  rating: number;
  trending: boolean;
  featured: boolean;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastUpdated: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Neural Synthesis: Complete Implementation Guide',
    description: 'Master the art of neural synthesis with our comprehensive guide covering everything from basics to advanced implementations.',
    category: 'AI Implementation',
    type: 'guide',
    readTime: '45 min',
    rating: 4.9,
    trending: true,
    featured: true,
    tags: ['AI 2025', 'Neural Networks', 'Implementation', 'ROI'],
    difficulty: 'advanced',
    lastUpdated: '2025-01-15'
  },
  {
    id: '2',
    title: 'Quantum Computing Breakthroughs: Error-Corrected Systems',
    description: 'Explore the latest quantum computing innovations that are revolutionizing cryptography and optimization.',
    category: 'Quantum Computing',
    type: 'whitepaper',
    readTime: '32 min',
    rating: 4.8,
    trending: true,
    featured: false,
    tags: ['Quantum Computing', 'Cryptography', 'Optimization'],
    difficulty: 'intermediate',
    lastUpdated: '2025-01-14'
  },
  {
    id: '3',
    title: 'Autonomous Business Systems: 2,500% ROI Case Study',
    description: 'Real-world implementation achieving unprecedented ROI with autonomous AI systems.',
    category: 'Case Study',
    type: 'case-study',
    readTime: '28 min',
    rating: 4.9,
    trending: false,
    featured: true,
    tags: ['ROI', 'Automation', 'Business Systems'],
    difficulty: 'intermediate',
    lastUpdated: '2025-01-13'
  },
  {
    id: '4',
    title: 'Future Technology Predictions 2025-2030',
    description: 'Expert predictions and analysis of emerging technologies shaping the next decade.',
    category: 'Future Tech',
    type: 'article',
    readTime: '38 min',
    rating: 4.7,
    trending: true,
    featured: false,
    tags: ['Predictions', 'Future Tech', 'Innovation'],
    difficulty: 'beginner',
    lastUpdated: '2025-01-12'
  },
  {
    id: '5',
    title: 'Neural Interface Solutions: Human-AI Interaction',
    description: 'Cutting-edge neural interface technologies for seamless human-AI communication.',
    category: 'Neural Interfaces',
    type: 'video',
    readTime: '41 min',
    rating: 4.8,
    trending: false,
    featured: false,
    tags: ['Neural Interfaces', 'Human-AI', 'Interaction'],
    difficulty: 'advanced',
    lastUpdated: '2025-01-11'
  },
  {
    id: '6',
    title: 'Space Technology Solutions: AI-Powered Exploration',
    description: 'Revolutionary AI applications in space technology and autonomous mission planning.',
    category: 'Space Tech',
    type: 'article',
    readTime: '35 min',
    rating: 4.6,
    trending: true,
    featured: false,
    tags: ['Space Technology', 'AI Applications', 'Exploration'],
    difficulty: 'intermediate',
    lastUpdated: '2025-01-10'
  }
];

const categories = [
  { id: 'all', name: 'All Categories', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'AI Implementation', name: 'AI Implementation', icon: <Brain className="w-4 h-4" /> },
  { id: 'Quantum Computing', name: 'Quantum Computing', icon: <Cpu className="w-4 h-4" /> },
  { id: 'Case Study', name: 'Case Study', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'Future Tech', name: 'Future Tech', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'Neural Interfaces', name: 'Neural Interfaces', icon: <Zap className="w-4 h-4" /> },
  { id: 'Space Tech', name: 'Space Tech', icon: <Sparkles className="w-4 h-4" /> }
];

const types = [
  { id: 'all', name: 'All Types', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'article', name: 'Articles', icon: <FileText className="w-4 h-4" /> },
  { id: 'video', name: 'Videos', icon: <Video className="w-4 h-4" /> },
  { id: 'guide', name: 'Guides', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'case-study', name: 'Case Studies', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'whitepaper', name: 'Whitepapers', icon: <FileText className="w-4 h-4" /> }
];

const difficulties = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' }
];

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState(contentItems);

  useEffect(() => {
    let filtered = contentItems;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedType, selectedDifficulty]);

  const getTypeIcon = (type: string) => {
    const typeConfig = types.find(t => t.id === type);
    return typeConfig ? typeConfig.icon : <BookOpen className="w-4 h-4" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedDifficulty('all');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Content Discovery
            <span className="block text-blue-400">2025</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the perfect content for your needs with our intelligent discovery system. 
            Filter by category, type, difficulty, and more.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, tags, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">
                {filteredContent.length} results found
              </span>
              {(searchQuery || selectedCategory !== 'all' || selectedType !== 'all' || selectedDifficulty !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-white font-medium mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-white font-medium mb-3">Content Type</label>
                <div className="space-y-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors ${
                        selectedType === type.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {type.icon}
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-white font-medium mb-3">Difficulty Level</label>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty.id}
                      onClick={() => setSelectedDifficulty(difficulty.id)}
                      className={`w-full px-4 py-2 rounded-lg text-left transition-colors ${
                        selectedDifficulty === difficulty.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {difficulty.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getTypeIcon(item.type)}
                  <span className="text-sm text-gray-300 capitalize">{item.type}</span>
                </div>
                <div className="flex gap-2">
                  {item.featured && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  {item.trending && (
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
              </div>

              {/* Action Button */}
              <Link
                to={`/content/${item.id}`}
                className="group/link flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No content found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Our AI-powered recommendation system can suggest personalized content based on your interests.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Get Personalized Recommendations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;