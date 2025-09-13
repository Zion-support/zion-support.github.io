'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Clock, 
  Star, 
  Eye, 
  Heart, 
  Bookmark,
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
  Rocket,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ContentRecommendationEngine = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    interests: ['ai-breakthroughs', 'quantum-computing', 'neural-interfaces'],
    readingTime: 'medium',
    difficulty: 'intermediate',
    contentType: 'all'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simulate AI-powered recommendations
  useEffect(() => {
    const generateRecommendations = () => {
      const allContent = [
        {
          id: 1,
          title: 'Neural Architecture Revolution 2025',
          description: 'Breakthrough in neural network architectures achieving human-level reasoning',
          category: 'ai-breakthroughs',
          type: 'research',
          difficulty: 'advanced',
          readTime: '15 min',
          views: 25420,
          likes: 1892,
          score: 0.95,
          tags: ['AI', 'Neural Networks', 'Architecture', 'Breakthrough'],
          image: '🧠',
          author: 'Dr. Sarah Chen',
          publishedAt: '2025-01-20',
          isTrending: true,
          isNew: true,
          reason: 'Based on your interest in AI breakthroughs and advanced content'
        },
        {
          id: 2,
          title: 'Quantum Neural Fusion Implementation',
          description: 'Practical guide to implementing quantum-enhanced neural networks',
          category: 'quantum-computing',
          type: 'tutorial',
          difficulty: 'intermediate',
          readTime: '12 min',
          views: 18340,
          likes: 756,
          score: 0.88,
          tags: ['Quantum', 'Neural Networks', 'Implementation', 'Tutorial'],
          image: '⚛️',
          author: 'Prof. Marcus Rodriguez',
          publishedAt: '2025-01-18',
          isTrending: true,
          isNew: false,
          reason: 'Matches your quantum computing interest and intermediate level'
        },
        {
          id: 3,
          title: 'Brain-Computer Interface Design Patterns',
          description: 'Comprehensive patterns for building effective BCI systems',
          category: 'neural-interfaces',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '18 min',
          views: 12340,
          likes: 634,
          score: 0.82,
          tags: ['BCI', 'Neural Interface', 'Design Patterns', 'Guide'],
          image: '🔗',
          author: 'Dr. Emily Watson',
          publishedAt: '2025-01-15',
          isTrending: false,
          isNew: true,
          reason: 'Perfect match for your neural interfaces interest'
        },
        {
          id: 4,
          title: 'AI Consciousness: The Next Frontier',
          description: 'Exploring the emergence of consciousness in artificial systems',
          category: 'ai-breakthroughs',
          type: 'article',
          difficulty: 'advanced',
          readTime: '22 min',
          views: 31200,
          likes: 2156,
          score: 0.91,
          tags: ['AI', 'Consciousness', 'Philosophy', 'Advanced'],
          image: '🌟',
          author: 'Dr. James Liu',
          publishedAt: '2025-01-12',
          isTrending: true,
          isNew: false,
          reason: 'High engagement content in your preferred AI breakthroughs category'
        },
        {
          id: 5,
          title: 'Quantum Error Correction Algorithms',
          description: 'Advanced algorithms for maintaining quantum coherence',
          category: 'quantum-computing',
          type: 'research',
          difficulty: 'advanced',
          readTime: '25 min',
          views: 8760,
          likes: 423,
          score: 0.79,
          tags: ['Quantum', 'Error Correction', 'Algorithms', 'Research'],
          image: '🔬',
          author: 'Dr. Maria Garcia',
          publishedAt: '2025-01-10',
          isTrending: false,
          isNew: true,
          reason: 'Advanced quantum content matching your expertise level'
        },
        {
          id: 6,
          title: 'Neural Signal Processing Fundamentals',
          description: 'Core concepts in processing neural signals for BCI applications',
          category: 'neural-interfaces',
          type: 'tutorial',
          difficulty: 'beginner',
          readTime: '8 min',
          views: 15670,
          likes: 892,
          score: 0.85,
          tags: ['Neural Signals', 'BCI', 'Fundamentals', 'Tutorial'],
          image: '📡',
          author: 'Dr. Alex Thompson',
          publishedAt: '2025-01-08',
          isTrending: true,
          isNew: false,
          reason: 'Foundational content in your neural interfaces interest area'
        }
      ];

      // Simulate AI recommendation scoring
      const scoredContent = allContent.map(item => {
        let score = 0;
        
        // Interest matching
        if (userPreferences.interests.includes(item.category)) {
          score += 0.4;
        }
        
        // Difficulty matching
        if (userPreferences.difficulty === item.difficulty) {
          score += 0.3;
        }
        
        // Content type matching
        if (userPreferences.contentType === 'all' || userPreferences.contentType === item.type) {
          score += 0.2;
        }
        
        // Engagement factors
        if (item.isTrending) score += 0.1;
        if (item.isNew) score += 0.1;
        
        return { ...item, score };
      });

      // Sort by score and return top recommendations
      return scoredContent
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);
    };

    setTimeout(() => {
      setRecommendations(generateRecommendations());
      setIsLoading(false);
    }, 1500);
  }, [userPreferences]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(recommendations.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(recommendations.length / 3)) % Math.ceil(recommendations.length / 3));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-500 bg-green-100';
      case 'intermediate': return 'text-yellow-500 bg-yellow-100';
      case 'advanced': return 'text-red-500 bg-red-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'research': return '🔬';
      case 'tutorial': return '📖';
      case 'guide': return '📋';
      case 'article': return '📄';
      case 'video': return '🎥';
      default: return '📄';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4 animate-pulse" />
              AI-Powered Recommendations
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Personalized Content Discovery
            </h2>
            <p className="text-xl text-gray-600">
              Our AI is analyzing your preferences to find the perfect content for you...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-gray-200 rounded"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4"
          >
            <Brain className="w-4 h-4" />
            AI-Powered Recommendations
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Personalized Content Discovery
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the most relevant content tailored to your interests, skill level, and reading preferences using our advanced AI recommendation engine.
          </motion.p>
        </div>

        {/* Recommendation Cards */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {recommendations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{item.image}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{getTypeIcon(item.type)}</span>
                        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.isNew && (
                          <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {item.isTrending && (
                          <TrendingUp className="w-4 h-4 text-orange-500" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">
                        {Math.round(item.score * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {item.likes}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </div>

                {/* AI Recommendation Reason */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-purple-800 mb-1">Why we recommend this:</p>
                      <p className="text-xs text-purple-700">{item.reason}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2">
                    Read Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <button className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Recommendations
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentRecommendationEngine;