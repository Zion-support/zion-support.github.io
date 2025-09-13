import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'tutorial' | 'case-study' | 'demo' | 'resource' | 'webinar';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  rating: number;
  views: number;
  tags: string[];
  url: string;
  featured: boolean;
  new: boolean;
  thumbnail: string;
}

export default function ContentDiscoveryEngine() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendedContent, setRecommendedContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Interactive Learning Hub',
      description: 'Master AI through hands-on, interactive experiences with real-time feedback and personalized learning paths',
      type: 'tutorial',
      category: 'AI Fundamentals',
      difficulty: 'beginner',
      duration: '45 min',
      rating: 4.9,
      views: 15420,
      tags: ['interactive', 'hands-on', 'real-time feedback', 'personalized'],
      url: '/ai-interactive-learning-hub',
      featured: true,
      new: true,
      thumbnail: '/images/content/ai-learning-hub.jpg'
    },
    {
      id: '2',
      title: 'Fortune 500 Manufacturing AI Success',
      description: 'How a global manufacturer achieved 60% cost reduction and 85% efficiency gains with AI',
      type: 'case-study',
      category: 'Manufacturing',
      difficulty: 'intermediate',
      duration: '15 min',
      rating: 4.8,
      views: 8930,
      tags: ['manufacturing', 'cost reduction', 'efficiency', 'ROI'],
      url: '/ai-success-stories-showcase/1',
      featured: true,
      new: false,
      thumbnail: '/images/content/manufacturing-success.jpg'
    },
    {
      id: '3',
      title: 'Machine Learning Playground',
      description: 'Build and test ML models with our interactive sandbox environment',
      type: 'demo',
      category: 'Machine Learning',
      difficulty: 'intermediate',
      duration: '90 min',
      rating: 4.7,
      views: 12350,
      tags: ['machine learning', 'sandbox', 'interactive', 'models'],
      url: '/ai-interactive-learning-hub/ml-playground',
      featured: false,
      new: true,
      thumbnail: '/images/content/ml-playground.jpg'
    },
    {
      id: '4',
      title: 'Healthcare AI Breakthrough Case Study',
      description: 'Metro Health System achieves 300% faster diagnosis with AI-powered diagnostic assistance',
      type: 'case-study',
      category: 'Healthcare',
      difficulty: 'advanced',
      duration: '20 min',
      rating: 4.9,
      views: 6780,
      tags: ['healthcare', 'diagnosis', 'AI assistance', 'medical'],
      url: '/ai-success-stories-showcase/2',
      featured: true,
      new: false,
      thumbnail: '/images/content/healthcare-ai.jpg'
    },
    {
      id: '5',
      title: 'AI Implementation Master Guide 2026',
      description: 'Complete enterprise playbook with 250+ pages of frameworks, templates, and case studies',
      type: 'resource',
      category: 'Implementation',
      difficulty: 'advanced',
      duration: '4 hours',
      rating: 4.8,
      views: 4560,
      tags: ['implementation', 'enterprise', 'playbook', 'frameworks'],
      url: '/resources/ai-implementation-master-guide-2026',
      featured: false,
      new: true,
      thumbnail: '/images/content/implementation-guide.jpg'
    },
    {
      id: '6',
      title: 'Neural Network Simulator',
      description: 'Visualize and experiment with neural network architectures in 3D',
      type: 'demo',
      category: 'Deep Learning',
      difficulty: 'advanced',
      duration: '60 min',
      rating: 4.6,
      views: 7890,
      tags: ['neural networks', '3D visualization', 'experimentation', 'deep learning'],
      url: '/ai-interactive-learning-hub/neural-simulator',
      featured: false,
      new: true,
      thumbnail: '/images/content/neural-simulator.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🌐' },
    { id: 'AI Fundamentals', name: 'AI Fundamentals', icon: '🧠' },
    { id: 'Machine Learning', name: 'Machine Learning', icon: '🤖' },
    { id: 'Deep Learning', name: 'Deep Learning', icon: '🕸️' },
    { id: 'Manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'Healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'Implementation', name: 'Implementation', icon: '⚙️' }
  ];

  const types = [
    { id: 'all', name: 'All Types', icon: '📚' },
    { id: 'tutorial', name: 'Tutorials', icon: '🎓' },
    { id: 'case-study', name: 'Case Studies', icon: '📊' },
    { id: 'demo', name: 'Demos', icon: '🎮' },
    { id: 'resource', name: 'Resources', icon: '📋' },
    { id: 'webinar', name: 'Webinars', icon: '🎥' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels', icon: '🌟' },
    { id: 'beginner', name: 'Beginner', icon: '🟢' },
    { id: 'intermediate', name: 'Intermediate', icon: '🟡' },
    { id: 'advanced', name: 'Advanced', icon: '🔴' }
  ];

  useEffect(() => {
    // Simulate AI-powered recommendations
    const recommended = contentItems
      .filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesType = selectedType === 'all' || item.type === selectedType;
        const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
        const matchesSearch = searchQuery === '' || 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return matchesCategory && matchesType && matchesDifficulty && matchesSearch;
      })
      .sort((a, b) => {
        // Prioritize featured and new content
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.new && !b.new) return -1;
        if (!a.new && b.new) return 1;
        return b.rating - a.rating;
      });
    
    setRecommendedContent(recommended);
  }, [selectedCategory, selectedType, selectedDifficulty, searchQuery]);

  const getTypeIcon = (type: string) => {
    const typeMap: { [key: string]: string } = {
      'tutorial': '🎓',
      'case-study': '📊',
      'demo': '🎮',
      'resource': '📋',
      'webinar': '🎥'
    };
    return typeMap[type] || '📚';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colorMap: { [key: string]: string } = {
      'beginner': 'bg-green-100 text-green-800',
      'intermediate': 'bg-yellow-100 text-yellow-800',
      'advanced': 'bg-red-100 text-red-800'
    };
    return colorMap[difficulty] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔍 AI-Powered Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover personalized content recommendations tailored to your interests and skill level
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for content, topics, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Type and Difficulty Filters */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Type</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedType === type.id
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-1">{type.icon}</span>
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Difficulty Level</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty.id}
                      onClick={() => setSelectedDifficulty(difficulty.id)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedDifficulty === difficulty.id
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-1">{difficulty.icon}</span>
                      {difficulty.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              Recommended Content ({recommendedContent.length})
            </h3>
            <div className="text-sm text-gray-600">
              Powered by AI recommendations
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedContent.map((item) => (
            <Link key={item.id} to={item.url} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Thumbnail */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.featured && (
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        ⭐ Featured
                      </span>
                    )}
                    {item.new && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        🆕 New
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <div>
                        <div className="text-sm opacity-90 capitalize">{item.type.replace('-', ' ')}</div>
                        <div className="font-bold text-lg">{item.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-gray-400 text-xs">+{item.tags.length - 3} more</span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👁️</span>
                      <span>{item.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {recommendedContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
                setSelectedDifficulty('all');
                setSearchQuery('');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}