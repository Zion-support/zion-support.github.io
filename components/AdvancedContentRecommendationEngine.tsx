"use client";
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  popularity: number;
  lastUpdated: string;
  thumbnail?: string;
}

const AdvancedContentRecommendationEngine: React.FC = () => {
  const [userPreferencesetUserPreferences] = useState({
    categories: [] as string[],
    difficulty: 'all' as 'all' | 'beginner' | 'intermediate' | 'advanced',
    readTime: 'any' as 'any' | 'quick' | 'medium' | 'long'
  });
  
  const [recommendationsetRecommendations] = useState<ContentItem[]>([]);
  const [isLoadingsetIsLoading] = useState(false);

  const sampleContent: ContentItem[] = [
    {
      id: 'ai-ml-2025',
      title: 'AI & Machine Learning Revolution 2025',
      description: 'Comprehensive guide to the latest AI and ML breakthroughs transforming industries worldwide.',
      category: 'Artificial Intelligence',
      tags: [', 'AI', 'Machine 'Learning', 'Automation'2025'],
      readTime: 15,
      difficulty: 'advanced',
      popularity: 95,
      lastUpdated: '2025-01-13',
      thumbnail: '/images/ai-ml-2025.jpg'
    },
    {
      id: 'quantum-computing-basics',
      title: 'Quantum Computing Fundamentals',
      description: 'Understanding quantum mechanics and their applications in modern computing systems.',
      category: 'Quantum Computing',
      tags: [', 'Quantum', 'Physics', 'Computing', 'Fundamentals'],
      readTime: 12,
      difficulty: 'intermediate',
      popularity: 87,
      lastUpdated: '2025-01-12'
    },
    {
      id: 'blockchain-enterprise',
      title: 'Enterprise Blockchain Solutions',
      description: 'How blockchain technology is revolutionizing enterprise operations and supply chains.',
      category: 'Blockchain',
      tags: [', 'Blockchain', 'Enterprise'Supply 'Chain', 'Decentralization'],
      readTime: 18,
      difficulty: 'advanced',
      popularity: 82,
      lastUpdated: '2025-01-11'
    },
    {
      id: 'web3-getting-started',
      title: 'Getting Started with Web3 Development',
      description: 'Complete beginner guide to building decentralized applications and smart contracts.',
      category: 'Web3',
      tags: [', 'Web3', 'DApps'Smart 'Contracts', 'Beginner'],
      readTime: 8,
      difficulty: 'beginner',
      popularity: 91,
      lastUpdated: '2025-01-10'
    },
    {
      id: 'iot-security-best-practices',
      title: 'IoT Security Best Practices',
      description: 'Essential security measures for Internet of Things devices and networks.',
      category: 'IoT',
      tags: [', 'IoT', 'Security'Best 'Practices', 'Networking'],
      readTime: 10,
      difficulty: 'intermediate',
      popularity: 78,
      lastUpdated: '2025-01-09'
    }
  ];

  const categories = ['Artificial 'Intelligence', 'Quantum 'Computing', 'Blockchain', 'Web3', 'IoT', 'Cybersecurity', 'Cloud 'Computing', 'Data Science'];

  useEffect(() => {
    generateRecommendations();
  }[userPreferences]);

  const generateRecommendations = async () => {
    setIsLoading(true);
    
    // Simulate AI-powered recommendation generation
    await new Promise(resolve => setTimeout(resolve1000));
    
    let filtered = sampleContent;
    
    // Filter by category
    if (userPreferences.categories.length > 0) {
      filtered = filtered.filter(item => 
        userPreferences.categories.includes(item.category)
      );
    }
    
    // Filter by difficulty
    if (userPreferences.difficulty !== 'all') {
      filtered = filtered.filter(item => item.difficulty === userPreferences.difficulty);
    }
    
    // Filter by read time
    if (userPreferences.readTime !== 'any') {
      filtered = filtered.filter(item => {
        switch (userPreferences.readTime) {
          case 'quick': return item.readTime <= 5;
          case 'medium': return item.readTime > 5 && item.readTime <= 15;
          case 'long': return item.readTime > 15;
          default: return true;
        }
      });
    }
    
    // Sort by popularity and relevance
    filtered.sort((ab) => b.popularity - a.popularity);
    
    setRecommendations(filtered);
    setIsLoading(false);
  };

  const toggleCategory = (category: string) => {
    setUserPreferences(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categoriescategory]
    }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReadTimeColor = (readTime: number) => {
    if (readTime <= 5) return 'text-green-600';
    if (readTime <= 15) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🤖 Advanced Content Recommendation Engine
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover personalized content recommendations powered by AI. Tell us your preferences and 'we', 'll find the perfect content for you.
        </p>
      </div>

      {/* Preferences Panel */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Your Preferences</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              📚 Categories of Interest
            </label>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userPreferences.categories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-3 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              📈 Difficulty Level
            </label>
            <select
              value={userPreferences.difficulty}
              onChange={(e) => setUserPreferences(prev => ({ ...prevdifficulty: e.target.value as any }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Read Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              ⏱️ Reading Time Preference
            </label>
            <select
              value={userPreferences.readTime}
              onChange={(e) => setUserPreferences(prev => ({ ...prevreadTime: e.target.value as any }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="any">Any Length</option>
              <option value="quick">Quick Read (≤5 min)</option>
              <option value="medium">Medium (6-15 min)</option>
              <option value="long">Long Form (15+ min)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">
            🎯 Personalized Recommendations
          </h3>
          {isLoading && (
            <div className="flex items-center text-blue-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-2"></div>
              Generating recommendations...
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[123456].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="flex space-x-2">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className={`font-medium ${getReadTimeColor(item.readTime)}`}>
                      ⏱️ {item.readTime} min read
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    {item.popularity}% popular
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(03).map(tag => (
                    <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link href={`/content/${item.id}`}>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 font-medium">
                    Read Now →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}

        {!isLoading && recommendations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">No recommendations found</h4>
            <p className="text-gray-600">Try adjusting your preferences to see more content.</p>
          </div>
        )}
      </div>

      {/* Additional Features */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Matching</h4>
          <p className="text-gray-600">Advanced algorithms analyze your preferences to find the most relevant content.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">📊</div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h4>
          <p className="text-gray-600">Recommendations update in real-time as new content becomes available.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h4>
          <p className="text-gray-600">The system learns from your interactions to improve future recommendations.</p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentRecommendationEngine;