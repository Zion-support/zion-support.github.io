'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool' | 'webinar';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  rating: number;
  views: number;
  likes: number;
  tags: string[];
  url: string;
  image?: string;
  featured: boolean;
  trending: boolean;
  new: boolean;
  aiRecommended: boolean;
  relevanceScore: number;
}

interface UserProfile {
  interests: string[];
  skillLevel: string;
  preferredContentTypes: string[];
  readingHistory: string[];
  timeAvailable: string;
}

const RevolutionaryContentRecommendationEngine2026: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    interests: [],
    skillLevel: 'Intermediate',
    preferredContentTypes: [],
    readingHistory: [],
    timeAvailable: '15-30 min'
  });
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    difficulty: 'all',
    timeRange: 'all'
  });

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2026: Neural Architecture Revolution',
      description: 'Comprehensive guide to next-generation AI systems with quantum-enhanced processing and autonomous agent orchestration.',
      type: 'blog',
      category: 'AI Architecture',
      difficulty: 'Advanced',
      readTime: '15 min',
      rating: 4.9,
      views: 12543,
      likes: 892,
      tags: ['AI', 'Neural Networks', 'Quantum Computing', 'Architecture'],
      url: '/blog/ai-2026-neural-architecture-revolution',
      featured: true,
      trending: true,
      new: true,
      aiRecommended: true,
      relevanceScore: 0.95
    },
    {
      id: '2',
      title: 'Quantum Machine Learning Implementation',
      description: 'Step-by-step guide to implementing quantum machine learning algorithms with real-world examples.',
      type: 'resource',
      category: 'Quantum AI',
      difficulty: 'Advanced',
      readTime: '25 min',
      rating: 4.8,
      views: 8932,
      likes: 567,
      tags: ['Quantum Computing', 'Machine Learning', 'Implementation'],
      url: '/resources/quantum-machine-learning-guide',
      featured: true,
      trending: false,
      new: true,
      aiRecommended: true,
      relevanceScore: 0.88
    },
    {
      id: '3',
      title: 'Fortune 500 AI Transformation Success',
      description: 'How a global manufacturer achieved $2.3B revenue impact through comprehensive AI implementation.',
      type: 'case-study',
      category: 'Case Studies',
      difficulty: 'Intermediate',
      readTime: '12 min',
      rating: 4.7,
      views: 15678,
      likes: 1234,
      tags: ['Case Study', 'Enterprise AI', 'ROI', 'Transformation'],
      url: '/case-studies/fortune-500-ai-transformation',
      featured: true,
      trending: true,
      new: false,
      aiRecommended: true,
      relevanceScore: 0.92
    },
    {
      id: '4',
      title: 'AI ROI Calculator 2026',
      description: 'Interactive tool to calculate AI implementation ROI with real-time projections and scenario analysis.',
      type: 'tool',
      category: 'Tools',
      difficulty: 'Beginner',
      readTime: '5 min',
      rating: 4.6,
      views: 23456,
      likes: 1789,
      tags: ['ROI Calculator', 'Tools', 'Analysis', 'Projections'],
      url: '/tools/ai-roi-calculator-2026',
      featured: false,
      trending: true,
      new: true,
      aiRecommended: false,
      relevanceScore: 0.75
    },
    {
      id: '5',
      title: 'Neural Interface Breakthrough 2026',
      description: 'Direct brain-computer interfaces enabling thought-controlled AI systems with 99.7% accuracy.',
      type: 'blog',
      category: 'Neural Interfaces',
      difficulty: 'Advanced',
      readTime: '18 min',
      rating: 4.9,
      views: 9876,
      likes: 654,
      tags: ['Neural Interfaces', 'BCI', 'AI Control', 'Breakthrough'],
      url: '/blog/ai-2026-neural-interface-breakthrough',
      featured: false,
      trending: false,
      new: true,
      aiRecommended: true,
      relevanceScore: 0.82
    },
    {
      id: '6',
      title: 'AI Masterclass: Future Predictions 2026',
      description: 'Comprehensive webinar covering AI predictions, trends, and future opportunities for 2026 and beyond.',
      type: 'webinar',
      category: 'Predictions',
      difficulty: 'Intermediate',
      readTime: '60 min',
      rating: 4.8,
      views: 5432,
      likes: 432,
      tags: ['Webinar', 'Predictions', 'Future Trends', 'AI'],
      url: '/webinars/ai-2026-future-masterclass',
      featured: true,
      trending: false,
      new: false,
      aiRecommended: true,
      relevanceScore: 0.78
    }
  ];

  const interestOptions = [
    'AI Architecture', 'Quantum Computing', 'Machine Learning', 'Neural Networks',
    'Automation', 'Data Science', 'Cloud Computing', 'Security', 'IoT',
    'Blockchain', 'Robotics', 'Natural Language Processing'
  ];

  const contentTypes = ['blog', 'case-study', 'resource', 'tool', 'webinar'];
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];
  const timeRanges = ['5-15 min', '15-30 min', '30-60 min', '60+ min'];

  useEffect(() => {
    generateRecommendations();
  }, [userProfile, selectedFilters]);

  const generateRecommendations = () => {
    setIsLoading(true);
    
    // Simulate AI recommendation algorithm
    setTimeout(() => {
      let filtered = contentItems.filter(item => {
        const matchesType = selectedFilters.type === 'all' || item.type === selectedFilters.type;
        const matchesDifficulty = selectedFilters.difficulty === 'all' || item.difficulty === selectedFilters.difficulty;
        
        // AI recommendation logic based on user profile
        const interestMatch = userProfile.interests.length === 0 || 
          userProfile.interests.some(interest => 
            item.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase())) ||
            item.category.toLowerCase().includes(interest.toLowerCase())
          );
        
        const skillMatch = userProfile.skillLevel === 'All' || item.difficulty === userProfile.skillLevel;
        
        return matchesType && matchesDifficulty && interestMatch && skillMatch;
      });

      // Sort by AI relevance score and other factors
      filtered = filtered.sort((a, b) => {
        let scoreA = a.relevanceScore;
        let scoreB = b.relevanceScore;
        
        // Boost trending and new content
        if (a.trending) scoreA += 0.1;
        if (a.new) scoreA += 0.05;
        if (a.aiRecommended) scoreA += 0.15;
        
        if (b.trending) scoreB += 0.1;
        if (b.new) scoreB += 0.05;
        if (b.aiRecommended) scoreB += 0.15;
        
        return scoreB - scoreA;
      });

      setRecommendations(filtered.slice(0, 6));
      setIsLoading(false);
    }, 800);
  };

  const updateUserProfile = (field: keyof UserProfile, value: any) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setUserProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      case 'tool': return '🛠️';
      case 'webinar': return '🎥';
      default: return '📄';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            🧠 REVOLUTIONARY AI RECOMMENDATION ENGINE 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Personalized Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI recommendation engine learns from your preferences and behavior 
            to deliver the most relevant content tailored specifically for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* User Profile & Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Personalize Your Experience</h3>
              
              {/* Interests */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Your Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        userProfile.interests.includes(interest)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skill Level */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Skill Level</h4>
                <select
                  value={userProfile.skillLevel}
                  onChange={(e) => updateUserProfile('skillLevel', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {skillLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Time Available */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Time Available</h4>
                <select
                  value={userProfile.timeAvailable}
                  onChange={(e) => updateUserProfile('timeAvailable', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {timeRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Content Type Filters */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Content Type</h4>
                <select
                  value={selectedFilters.type}
                  onChange={(e) => setSelectedFilters(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  {contentTypes.map(type => (
                    <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Difficulty</h4>
                <select
                  value={selectedFilters.difficulty}
                  onChange={(e) => setSelectedFilters(prev => ({ ...prev, difficulty: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="all">All Levels</option>
                  {skillLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">🤖 AI Insights</h4>
                <p className="text-xs text-gray-600">
                  Based on your profile, I'm recommending content that matches your interests 
                  and skill level for optimal learning outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {isLoading ? 'Generating Recommendations...' : 'Recommended for You'}
              </h3>
              <div className="text-sm text-gray-500">
                {recommendations.length} personalized recommendations
              </div>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getTypeIcon(item.type)}</span>
                        <div>
                          <span className="text-xs font-medium text-gray-500">{item.category}</span>
                          <div className="flex items-center space-x-2 mt-1">
                            {item.aiRecommended && (
                              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                                AI Recommended
                              </span>
                            )}
                            {item.trending && (
                              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                                Trending
                              </span>
                            )}
                            {item.new && (
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                New
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-purple-600">
                          {Math.round(item.relevanceScore * 100)}% match
                        </div>
                        <div className="text-xs text-gray-500">{item.rating}⭐</div>
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{item.readTime}</span>
                        <span>{item.views.toLocaleString()} views</span>
                        <span>{item.likes} likes</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!isLoading && recommendations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No recommendations found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your preferences or interests to get personalized recommendations.
                </p>
                <button
                  onClick={() => {
                    setUserProfile({
                      interests: [],
                      skillLevel: 'Intermediate',
                      preferredContentTypes: [],
                      readingHistory: [],
                      timeAvailable: '15-30 min'
                    });
                    setSelectedFilters({
                      type: 'all',
                      difficulty: 'all',
                      timeRange: 'all'
                    });
                  }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Reset Preferences
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentRecommendationEngine2026;