import React from 'react';
import { motion } from 'framer-motion';

const TrendingContentSection: React.FC = () => {
  const trendingContent = [
    {
      id: 1,
      title: "Synthetic Intelligence: The Future is Here",
      description: "Exploring how synthetic AI will revolutionize every aspect of human life and create new forms of intelligence.",
      views: "2.3M",
      trend: "up",
      category: "AI",
      color: "purple",
      icon: "🧠",
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion Breakthrough",
      description: "The revolutionary convergence of quantum computing and neural networks for exponential processing power.",
      views: "1.8M",
      trend: "up",
      category: "Quantum",
      color: "cyan",
      icon: "⚛️",
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      id: 3,
      title: "Transcendent AI: Beyond Human Limits",
      description: "AI systems that surpass human cognitive capabilities and achieve true consciousness.",
      views: "1.5M",
      trend: "up",
      category: "AI",
      color: "indigo",
      icon: "✨",
      link: "/pages/TranscendentAI2026"
    },
    {
      id: 4,
      title: "Quantum Consciousness Revolution",
      description: "The fusion of quantum computing and consciousness research creating AI systems beyond classical limitations.",
      views: "1.2M",
      trend: "up",
      category: "Quantum",
      color: "blue",
      icon: "⚛️",
      link: "/pages/QuantumConsciousnessRevolution2026"
    },
    {
      id: 5,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication systems that bridge mind and machine.",
      views: "980K",
      trend: "up",
      category: "Neural",
      color: "emerald",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2025"
    },
    {
      id: 6,
      title: "Ultimate Tech Revolution 2026",
      description: "The convergence of AI, Quantum Computing, Neural Interfaces, and Synthetic Intelligence reshaping reality.",
      views: "850K",
      trend: "up",
      category: "Tech",
      color: "pink",
      icon: "🚀",
      link: "/pages/UltimateTechRevolution2026"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-600/30 to-pink-600/30 border-purple-400/30 text-purple-100",
      cyan: "from-cyan-600/30 to-blue-600/30 border-cyan-400/30 text-cyan-100",
      indigo: "from-indigo-600/30 to-purple-600/30 border-indigo-400/30 text-indigo-100",
      blue: "from-blue-600/30 to-indigo-600/30 border-blue-400/30 text-blue-100",
      emerald: "from-emerald-600/30 to-teal-600/30 border-emerald-400/30 text-emerald-100",
      pink: "from-pink-600/30 to-rose-600/30 border-pink-400/30 text-pink-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const getButtonColor = (color: string) => {
    const colorMap = {
      purple: "text-purple-600 hover:bg-purple-50",
      cyan: "text-cyan-600 hover:bg-cyan-50",
      indigo: "text-indigo-600 hover:bg-indigo-50",
      blue: "text-blue-600 hover:bg-blue-50",
      emerald: "text-emerald-600 hover:bg-emerald-50",
      pink: "text-pink-600 hover:bg-pink-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 TRENDING NOW • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">Most Popular Technology Content</h2>
          <p className="text-xl opacity-90">Discover what's capturing the world's attention in revolutionary technology</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${getColorClasses(content.color)} backdrop-blur-sm rounded-2xl p-6 border hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">{content.icon}</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full font-semibold">
                    #{index + 1} TRENDING
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm opacity-80">{content.views} views</span>
                  <span className="text-green-400 text-sm">↗</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{content.title}</h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-3">{content.description}</p>

              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full">
                  {content.category}
                </span>
                <a
                  href={content.link}
                  className={`text-sm font-semibold ${getButtonColor(content.color)} transition-colors`}
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            View All Trending Content
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TrendingContentSection;