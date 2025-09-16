import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Fire, Star, Zap, ArrowRight, Clock, Users } from 'lucide-react';

interface TrendingTopic {
  id: string;
  title: string;
  category: string;
  trend: 'rising' | 'hot' | 'viral' | 'stable';
  growth: number;
  posts: number;
  lastUpdated: string;
  tags: string[];
}

const TrendingTopicsWidget2026: React.FC = () => {
  const [trendingTopics, setTrendingTopics] = useState<TrendingTopic[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Simulate fetching trending topics
    const topics: TrendingTopic[] = [
      {
        id: 'ai-consciousness',
        title: 'AI Consciousness & Self-Awareness',
        category: 'AI Research',
        trend: 'viral',
        growth: 340,
        posts: 156,
        lastUpdated: '2 hours ago',
        tags: ['AI', 'Consciousness', 'Self-Awareness', 'Machine Learning']
      },
      {
        id: 'quantum-computing',
        title: 'Quantum Computing Applications',
        category: 'Quantum Computing',
        trend: 'hot',
        growth: 280,
        posts: 89,
        lastUpdated: '4 hours ago',
        tags: ['Quantum', 'Computing', 'Applications', 'Breakthrough']
      },
      {
        id: 'neural-interfaces',
        title: 'Brain-Computer Interfaces',
        category: 'Emerging Technology',
        trend: 'rising',
        growth: 195,
        posts: 67,
        lastUpdated: '6 hours ago',
        tags: ['BCI', 'Neural', 'Interface', 'Human-Computer']
      },
      {
        id: 'synthetic-data',
        title: 'Synthetic Data Generation',
        category: 'Data Science',
        trend: 'hot',
        growth: 245,
        posts: 78,
        lastUpdated: '3 hours ago',
        tags: ['Synthetic Data', 'Privacy', 'AI Training', 'Generation']
      },
      {
        id: 'edge-ai',
        title: 'Edge AI & IoT Intelligence',
        category: 'Edge Computing',
        trend: 'rising',
        growth: 180,
        posts: 92,
        lastUpdated: '5 hours ago',
        tags: ['Edge AI', 'IoT', 'Real-time', 'Intelligence']
      },
      {
        id: 'ai-teams',
        title: 'Autonomous AI Teams',
        category: 'Future of Work',
        trend: 'viral',
        growth: 320,
        posts: 134,
        lastUpdated: '1 hour ago',
        tags: ['AI Teams', 'Autonomous', 'Work', 'Collaboration']
      },
      {
        id: 'drug-discovery',
        title: 'AI-Powered Drug Discovery',
        category: 'Healthcare AI',
        trend: 'hot',
        growth: 220,
        posts: 45,
        lastUpdated: '7 hours ago',
        tags: ['Drug Discovery', 'Healthcare', 'AI', 'Medicine']
      },
      {
        id: 'synthetic-intelligence',
        title: 'Synthetic Intelligence Evolution',
        category: 'AI Research',
        trend: 'rising',
        growth: 165,
        posts: 38,
        lastUpdated: '8 hours ago',
        tags: ['Synthetic Intelligence', 'Evolution', 'AI', 'Future']
      }
    ];

    setTrendingTopics(topics);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'viral': return <Zap className="w-4 h-4" />;
      case 'hot': return <Fire className="w-4 h-4" />;
      case 'rising': return <TrendingUp className="w-4 h-4" />;
      case 'stable': return <Star className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'viral': return 'from-purple-500 to-pink-500';
      case 'hot': return 'from-red-500 to-orange-500';
      case 'rising': return 'from-green-500 to-emerald-500';
      case 'stable': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const categories = ['all', 'AI Research', 'Quantum Computing', 'Emerging Technology', 'Data Science', 'Edge Computing', 'Future of Work', 'Healthcare AI'];

  const filteredTopics = selectedCategory === 'all' 
    ? trendingTopics 
    : trendingTopics.filter(topic => topic.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-2xl border border-gray-700/50 p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Trending Topics</h3>
            <p className="text-gray-400 text-sm">What's hot in tech right now</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Clock className="w-4 h-4" />
          <span>Live</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category === 'all' ? 'All Topics' : category}
          </button>
        ))}
      </div>

      {/* Trending Topics List */}
      <div className="space-y-4">
        {filteredTopics.slice(0, 6).map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getTrendColor(topic.trend)} text-white text-xs font-medium`}>
                    {getTrendIcon(topic.trend)}
                    {topic.trend.toUpperCase()}
                  </div>
                  <span className="text-gray-400 text-sm">{topic.category}</span>
                </div>
                
                <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {topic.title}
                </h4>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {topic.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+{topic.growth}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{topic.posts} posts</span>
                  </div>
                  <span>{topic.lastUpdated}</span>
                </div>
              </div>
              
              <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 font-semibold rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-500/30">
          View All Trending Topics
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TrendingTopicsWidget2026;