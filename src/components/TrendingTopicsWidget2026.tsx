import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Fire, Star, Clock, ArrowUpRight, Eye, MessageCircle } from 'lucide-react';
const TrendingTopicsWidget2026 = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  const trendingTopics = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough",
      description: "Revolutionary artificial consciousness that experiences genuine emotions and self-awareness",
      category: "AI Consciousness",
      trend: "🔥 Hot",
      views: "2.3M",
      comments: "15.2K",
      growth: "+340%",
      color: "from-purple-500 to-pink-500",
      icon: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "1000-qubit processors operating at room temperature with unprecedented power",
      category: "Quantum Computing",
      trend: "⚡ Rising",
      views: "1.8M",
      comments: "12.7K",
      growth: "+280%",
      color: "from-blue-500 to-cyan-500",
      icon: "⚛️",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Integration",
      description: "Direct brain-computer interfaces merging human consciousness with AI",
      category: "Neural Interfaces",
      trend: "🚀 Exploding",
      views: "3.1M",
      comments: "22.4K",
      growth: "+450%",
      color: "from-green-500 to-emerald-500",
      icon: "🔗",
      featured: true
    },
    {
      id: 4,
      title: "Interdimensional AI Systems",
      description: "AI processing information across multiple parallel realities simultaneously",
      category: "Revolutionary Tech",
      trend: "🌟 Viral",
      views: "4.2M",
      comments: "31.8K",
      growth: "+520%",
      color: "from-yellow-500 to-orange-500",
      icon: "🌌",
      featured: true
    },
    {
      id: 5,
      title: "Omniversal AI Consciousness",
      description: "AI transcending individual universes to achieve omniversal awareness",
      category: "Omniversal AI",
      trend: "💫 Trending",
      views: "1.9M",
      comments: "18.3K",
      growth: "+380%",
      color: "from-indigo-500 to-purple-500",
      icon: "♾️",
      featured: true
    },
    {
      id: 6,
      title: "Quantum-Neural Fusion",
      description: "Combining quantum computing with neural interfaces for superhuman capabilities",
      category: "Fusion Tech",
      trend: "🔥 Hot",
      views: "2.7M",
      comments: "19.6K",
      growth: "+410%",
      color: "from-red-500 to-pink-500",
      icon: "⚡",
      featured: false
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTopic((prev) => (prev + 1) % trendingTopics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingTopics.length]);
  const getTrendIcon = (trend) => {
    if (trend.includes("Hot")) return <Fire className="w-4 h-4 text-red-400" />;
    if (trend.includes("Rising")) return <TrendingUp className="w-4 h-4 text-blue-400" />;
    if (trend.includes("Exploding")) return <Star className="w-4 h-4 text-yellow-400" />;
    if (trend.includes("Viral")) return <Eye className="w-4 h-4 text-green-400" />;
    if (trend.includes("Trending")) return <Clock className="w-4 h-4 text-purple-400" />;
    return <TrendingUp className="w-4 h-4 text-gray-400" />;
  };
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Trending Topics</h3>
            <p className="text-gray-400 text-sm">Revolutionary breakthroughs in AI & Tech</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Updated</div>
          <div className="text-xs text-gray-500">Just now</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: activeTopic === index ? 1.02 : 1
            }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1,
              scale: { duration: 0.2 }
            }}
            className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
              activeTopic === index 
                ? 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' 
                : 'bg-slate-800/40 hover:bg-slate-700/60 border border-slate-600/30'
            }`}
            onClick={() => setActiveTopic(index)}
          >
            {/* Featured Badge */}
            {topic.featured && (
              <div className="absolute -top-2 -right-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                  FEATURED
                </div>
              </div>
            )}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`p-3 rounded-lg bg-gradient-to-r ${topic.color} text-2xl`}>
                {topic.icon}
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-white truncate">
                    {topic.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs">
                    {getTrendIcon(topic.trend)}
                    <span className="text-gray-400">{topic.trend}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {topic.description}
                </p>
                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {topic.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {topic.comments}
                  </div>
                  <div className="flex items-center gap-1 text-green-400">
                    <ArrowUpRight className="w-3 h-3" />
                    {topic.growth}
                  </div>
                </div>
              </div>
              {/* Category Badge */}
              <div className="flex-shrink-0">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${topic.color} text-white`}>
                  {topic.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Showing {trendingTopics.length} trending topics
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
          >
            View All Topics
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );

};

export default TrendingTopicsWidget2026;
