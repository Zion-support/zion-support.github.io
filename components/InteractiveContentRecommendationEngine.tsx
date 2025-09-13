import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, TrendingUp, Eye, Heart, BookOpen } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  views: number;
  rating: number;
  isLiked: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'Article' | 'Video' | 'Tutorial' | 'Case Study' | 'Prediction';
}

const InteractiveContentRecommendationEngine: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    'all', 'AI Predictions', 'Quantum Computing', 'Automation', 'Machine Learning', 
    'Neural Networks', 'Business Intelligence', 'Future Technology'
  ];

  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const sortOptions = [
    { value: 'trending', label: 'Trending', icon: TrendingUp },
    { value: 'rating', label: 'Highest Rated', icon: Star },
    { value: 'views', label: 'Most Viewed', icon: Eye },
    { value: 'recent', label: 'Most Recent', icon: Clock }
  ];

  // Mock data - in a real app, this would come from an API
  const mockContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: The Neural Interface Revolution',
      description: 'Explore how direct brain-computer interfaces will transform human-computer interaction by 2025.',
      category: 'AI Predictions',
      tags: ['neural interfaces', 'brain-computer', '2025 predictions', 'future tech'],
      readTime: '12 min read',
      views: 25430,
      rating: 4.9,
      isLiked: false,
      difficulty: 'Advanced',
      type: 'Prediction'
    },
    {
      id: '2',
      title: 'Quantum Machine Learning: 10,000x Speed Boost',
      description: 'Discover how quantum algorithms are revolutionizing machine learning performance.',
      category: 'Quantum Computing',
      tags: ['quantum computing', 'machine learning', 'algorithms', 'performance'],
      readTime: '18 min read',
      views: 18920,
      rating: 4.8,
      isLiked: true,
      difficulty: 'Advanced',
      type: 'Tutorial'
    },
    {
      id: '3',
      title: 'Automation ROI Calculator: 2,500% Returns',
      description: 'Learn how to calculate and achieve massive ROI with intelligent process automation.',
      category: 'Automation',
      tags: ['ROI', 'automation', 'business intelligence', 'efficiency'],
      readTime: '8 min read',
      views: 32150,
      rating: 4.7,
      isLiked: false,
      difficulty: 'Intermediate',
      type: 'Case Study'
    },
    {
      id: '4',
      title: 'Neural Networks for Beginners',
      description: 'A comprehensive guide to understanding neural networks from the ground up.',
      category: 'Machine Learning',
      tags: ['neural networks', 'beginner', 'tutorial', 'deep learning'],
      readTime: '15 min read',
      views: 45670,
      rating: 4.6,
      isLiked: true,
      difficulty: 'Beginner',
      type: 'Tutorial'
    },
    {
      id: '5',
      title: 'Future of Work: AI-Powered Teams',
      description: 'How artificial intelligence will reshape team dynamics and collaboration.',
      category: 'Future Technology',
      tags: ['future of work', 'AI teams', 'collaboration', 'workplace'],
      readTime: '10 min read',
      views: 28750,
      rating: 4.8,
      isLiked: false,
      difficulty: 'Intermediate',
      type: 'Article'
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      let filtered = mockContent;

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      // Filter by difficulty
      if (selectedDifficulty !== 'all') {
        filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
      }

      // Sort
      switch (sortBy) {
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'views':
          filtered.sort((a, b) => b.views - a.views);
          break;
        case 'recent':
          // In a real app, you'd sort by date
          break;
        default:
          // Trending (default)
          filtered.sort((a, b) => b.views - a.views);
      }

      setRecommendations(filtered);
      setIsLoading(false);
    }, 500);
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  const toggleLike = (id: string) => {
    setRecommendations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the perfect content tailored to your interests and expertise level with our AI-powered recommendation engine.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty} className="bg-gray-800">
                  {difficulty === 'all' ? 'All Levels' : difficulty}
                </option>
              ))}
            </select>

            {/* Sort Options */}
            <div className="flex gap-2">
              {sortOptions.map(option => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                      sortBy === option.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="text-gray-300 mt-4">Finding the perfect content for you...</p>
          </div>
        )}

        {/* Content Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                {/* Content Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {item.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {formatViews(item.views)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {item.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    to={`/content/${item.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center group"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Now
                  </Link>
                  <button
                    onClick={() => toggleLike(item.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      item.isLiked
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        : 'bg-white/20 text-gray-400 hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${item.isLiked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && recommendations.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/content-discovery"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Content
            <BookOpen className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentRecommendationEngine;