import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  TrendingUp, 
  Eye, 
  Heart,
  BookOpen,
  Zap,
  Brain,
  Rocket,
  Sparkles
} from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts } from '../data/blog-posts';
const ContentRecommendationSystem: React.FC = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('trending');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    loadRecommendations();
  }, []);
  const loadRecommendations = () => {
    const featured = getFeaturedBlogPosts();
    const recent = getRecentBlogPosts(6);
    // Mix featured and recent content
    const mixed = [...featured.slice(0, 3), ...recent.slice(0, 3)];
    setRecommendations(mixed);
  };
  const categories = [
    { key: 'trending', label: 'Trending', icon: TrendingUp, color: 'from-red-500 to-pink-500' },
    { key: 'featured', label: 'Featured', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { key: 'recent', label: 'Recent', icon: Clock, color: 'from-blue-500 to-cyan-500' },
    { key: 'ai', label: 'AI & ML', icon: Brain, color: 'from-purple-500 to-indigo-500' },
    { key: 'quantum', label: 'Quantum', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { key: 'space', label: 'Space Tech', icon: Rocket, color: 'from-indigo-500 to-purple-500' }
  ];
  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: any } = {
      'AI Consciousness': Brain,
      'Quantum Computing': Zap,
      'Neural Technology': Brain,
      'Space Technology': Rocket,
      'Metaverse Technology': Sparkles,
      'Consciousness Technology': Star,
      'Technology Showcase': Sparkles,
      'Biotech AI': Brain,
      'Digital Twin Technology': Eye,
      'Autonomous Systems': Rocket
    };
    return categoryMap[category] || BookOpen;
  };
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Consciousness': 'from-purple-500 to-pink-500',
      'Quantum Computing': 'from-blue-500 to-cyan-500',
      'Neural Technology': 'from-green-500 to-emerald-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Metaverse Technology': 'from-orange-500 to-red-500',
      'Consciousness Technology': 'from-pink-500 to-rose-500',
      'Technology Showcase': 'from-yellow-500 to-orange-500',
      'Biotech AI': 'from-green-500 to-teal-500',
      'Digital Twin Technology': 'from-cyan-500 to-blue-500',
      'Autonomous Systems': 'from-purple-500 to-indigo-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };
  const filteredRecommendations = recommendations.filter(post => {
    if (activeCategory === 'trending') return post.featured;
    if (activeCategory === 'featured') return post.featured;
    if (activeCategory === 'recent') return true;
    if (activeCategory === 'ai') return post.category.includes('AI') || post.tags.some((tag: string) => tag.includes('AI'));
    if (activeCategory === 'quantum') return post.category.includes('Quantum') || post.tags.some((tag: string) => tag.includes('Quantum'));
    if (activeCategory === 'space') return post.category.includes('Space') || post.tags.some((tag: string) => tag.includes('Space'));
    return true;
  });
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Personalized Recommendations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered recommendation system learns from your interests to surface the most relevant 
            and engaging content tailored just for you.
          </p>
        </motion.div>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.label}
              </button>
            );
};
          })}
        </motion.div>
        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredRecommendations.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              const categoryColor = getCategoryColor(post.category);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer group"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor} mr-3`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {Math.floor(Math.random() * 1000) + 100} views
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                    <div className="flex items-center space-x-3">
                      <button className="p-2 rounded-lg bg-gray-700/50 text-gray-400 hover:text-red-400 hover:bg-red-500/20 transition-all duration-300">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-gray-700/50 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
                        <BookOpen className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
        {/* Personalization Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Personalized for You
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI recommendation engine analyzes your reading patterns, interests, and engagement 
              to continuously improve your content discovery experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Relevance Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">2.5x</div>
                <div className="text-gray-300">Higher Engagement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Learning & Adaptation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );



export default ContentRecommendationSystem;
