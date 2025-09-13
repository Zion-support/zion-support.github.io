'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Rocket, 
  Brain, 
  Zap, 
  Star, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  Play,
  BookOpen,
  Code,
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'video' | 'article' | 'tutorial' | 'case-study' | 'tool' | 'guide';
  featured: boolean;
  readTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  image: string;
  url: string;
  views?: number;
  likes?: number;
  publishedAt: string;
}

const UltimateContentShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: Globe, count: 156 },
    { id: 'ai-innovation', name: 'AI Innovation', icon: Brain, count: 42 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 38 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, count: 24 },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: Target, count: 18 },
    { id: 'future-tech', name: 'Future Tech', icon: TrendingUp, count: 34 }
  ];

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Revolutionary AI Consciousness Breakthrough 2026',
      description: 'Discover the latest advances in artificial consciousness and how they\'re reshaping the future of human-AI interaction.',
      category: 'ai-innovation',
      type: 'video',
      featured: true,
      readTime: '45 min',
      difficulty: 'Advanced',
      tags: ['AI', 'Consciousness', 'Breakthrough', '2026'],
      image: '/api/placeholder/600/400',
      url: '/ai-2026-consciousness-breakthrough',
      views: 125000,
      likes: 8900,
      publishedAt: '2026-01-15'
    },
    {
      id: '2',
      title: 'Quantum Neural Fusion: The Next Frontier',
      description: 'Explore how quantum computing and neural networks are merging to create unprecedented computational power.',
      category: 'quantum-computing',
      type: 'article',
      featured: true,
      readTime: '12 min',
      difficulty: 'Intermediate',
      tags: ['Quantum', 'Neural Networks', 'Fusion', 'Computing'],
      image: '/api/placeholder/600/400',
      url: '/quantum-neural-fusion-2026',
      views: 89000,
      likes: 5600,
      publishedAt: '2026-01-12'
    },
    {
      id: '3',
      title: 'Complete Automation Mastery Guide 2026',
      description: 'Master the art of business automation with our comprehensive guide covering the latest tools and strategies.',
      category: 'automation',
      type: 'guide',
      featured: false,
      readTime: '25 min',
      difficulty: 'Beginner',
      tags: ['Automation', 'Business', 'Guide', 'Mastery'],
      image: '/api/placeholder/600/400',
      url: '/automation-mastery-guide-2026',
      views: 67000,
      likes: 4200,
      publishedAt: '2026-01-10'
    },
    {
      id: '4',
      title: 'Neural Interface Revolution: Direct Brain-Computer Communication',
      description: 'Learn about the latest developments in neural interface technology and its implications for human enhancement.',
      category: 'neural-interfaces',
      type: 'case-study',
      featured: true,
      readTime: '18 min',
      difficulty: 'Advanced',
      tags: ['Neural Interface', 'Brain-Computer', 'Revolution', 'Enhancement'],
      image: '/api/placeholder/600/400',
      url: '/neural-interface-revolution-2026',
      views: 98000,
      likes: 7200,
      publishedAt: '2026-01-08'
    },
    {
      id: '5',
      title: 'Future Technology Predictions 2030-2035',
      description: 'Get insights into the technological landscape of the next decade and prepare for the coming changes.',
      category: 'future-tech',
      type: 'article',
      featured: false,
      readTime: '15 min',
      difficulty: 'Intermediate',
      tags: ['Future Tech', 'Predictions', '2030', 'Innovation'],
      image: '/api/placeholder/600/400',
      url: '/future-tech-predictions-2030-2035',
      views: 145000,
      likes: 9800,
      publishedAt: '2026-01-05'
    },
    {
      id: '6',
      title: 'AI-Powered Development Tools Suite',
      description: 'Discover the most advanced AI-powered development tools that are revolutionizing software creation.',
      category: 'ai-innovation',
      type: 'tool',
      featured: false,
      readTime: '8 min',
      difficulty: 'Beginner',
      tags: ['AI Tools', 'Development', 'Software', 'Productivity'],
      image: '/api/placeholder/600/400',
      url: '/ai-development-tools-2026',
      views: 78000,
      likes: 5100,
      publishedAt: '2026-01-03'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'article': return BookOpen;
      case 'tutorial': return Code;
      case 'case-study': return Target;
      case 'tool': return Zap;
      case 'guide': return Lightbulb;
      default: return BookOpen;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Ultimate Content Showcase
              </h1>
              <Sparkles className="h-8 w-8 text-yellow-400 ml-3" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the most revolutionary content, breakthrough innovations, and cutting-edge technologies 
              that are shaping the future of AI, automation, and human potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>2.5M+ Views</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1" />
                <span>500+ Articles</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>98% Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedContent(item)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <TypeIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">{item.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty || 'Beginner')}`}>
                        {item.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {item.views?.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          {item.likes?.toLocaleString()}
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  <span>{category.name}</span>
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedContent(item)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <TypeIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {item.category}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(item.difficulty || 'Beginner')}`}>
                        {item.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{item.publishedAt}</span>
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {item.views?.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          {item.likes?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Content Detail Modal */}
      <AnimatePresence>
        {selectedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedContent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedContent.image}
                  alt={selectedContent.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedContent(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 uppercase tracking-wide">
                    {selectedContent.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedContent.difficulty || 'Beginner')}`}>
                    {selectedContent.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedContent.title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedContent.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedContent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {selectedContent.views?.toLocaleString()} views
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {selectedContent.likes?.toLocaleString()} likes
                    </span>
                    <span>{selectedContent.readTime} read</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Full Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UltimateContentShowcase2026;