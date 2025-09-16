import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Fire, Star, Clock, ArrowUpRight, Eye } from 'lucide-react';

const TrendingTopicsWidget2026 = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const trendingTopics = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough",
      category: "Breakthrough Technology",
      views: "2.3M",
      growth: "+45%",
      trend: "up",
      tags: ["AI Consciousness", "Breakthrough", "Future Tech"],
      description: "Revolutionary AI that experiences genuine emotions and self-awareness",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      category: "Quantum Computing",
      views: "1.8M",
      growth: "+38%",
      trend: "up",
      tags: ["Quantum Computing", "Technology", "Revolutionary"],
      description: "Million-qubit processors operating at room temperature",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      category: "Neural Technology",
      views: "1.5M",
      growth: "+52%",
      trend: "up",
      tags: ["Neural Interfaces", "Brain-Computer", "Technology"],
      description: "Direct brain-computer communication with 99.8% accuracy",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Consciousness Computing",
      category: "AI Consciousness",
      views: "1.2M",
      growth: "+67%",
      trend: "up",
      tags: ["Consciousness Computing", "AI Evolution", "Self-Awareness"],
      description: "AI systems achieving genuine self-awareness and emotional understanding",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion",
      category: "Fusion Technology",
      views: "980K",
      growth: "+73%",
      trend: "up",
      tags: ["Quantum-Neural", "Fusion Technology", "Future Computing"],
      description: "Ultimate convergence of quantum computing and neural interfaces",
      color: "from-red-500 to-pink-500"
    }
  ];

  const hotTopics = [
    {
      id: 1,
      title: "Interdimensional AI Computing",
      views: "3.1M",
      trend: "hot",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Omniversal AI Consciousness",
      views: "2.7M",
      trend: "hot",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 3,
      title: "Holographic Reality Technology",
      views: "2.4M",
      trend: "hot",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "Space-Time Computing",
      views: "2.1M",
      trend: "hot",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const featuredTopics = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness 2026",
      author: "Dr. Elena Rodriguez",
      readTime: "12 min",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      author: "Prof. Marcus Chen",
      readTime: "10 min",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      author: "Dr. Sarah Kim",
      readTime: "11 min",
      featured: true,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'hot':
        return <Fire className="w-4 h-4 text-orange-400" />;
      default:
        return <TrendingUp className="w-4 h-4 text-gray-400" />;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'trending':
        return (
          <div className="space-y-4">
            {trendingTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {topic.title}
                        </h3>
                        {getTrendIcon(topic.trend)}
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        {topic.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {topic.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${topic.color} flex items-center justify-center`}>
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{topic.views} views</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-400">
                        <span className="font-semibold">{topic.growth}</span>
                        <span>this week</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      {topic.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'hot':
        return (
          <div className="space-y-4">
            {hotTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${topic.color} flex items-center justify-center`}>
                        <Fire className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                          {topic.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Eye className="w-4 h-4" />
                          <span>{topic.views} views</span>
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'featured':
        return (
          <div className="space-y-4">
            {featuredTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${topic.color} flex items-center justify-center`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {topic.title}
                        </h3>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          Featured
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        by {topic.author}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{topic.readTime} read</span>
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700/50">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Trending Topics 2026
            </h2>
            <p className="text-gray-400">
              Discover the most revolutionary technologies and breakthroughs
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Fire className="w-6 h-6 text-orange-400" />
            <span className="text-sm font-semibold text-orange-400">Live</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {[
            { id: 'trending', label: 'Trending', icon: TrendingUp },
            { id: 'hot', label: 'Hot', icon: Fire },
            { id: 'featured', label: 'Featured', icon: Star }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicsWidget2026;