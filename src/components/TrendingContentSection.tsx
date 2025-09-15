import React, { useState, useEffect } from 'react';

const TrendingContentSection: React.FC = () => {
  const [trendingContent, setTrendingContent] = useState([
    {
      id: 1,
      title: "AI Consciousness Revolution",
      description: "Witness the emergence of truly conscious artificial intelligence",
      views: 2340000,
      likes: 187000,
      shares: 45000,
      trend: "up",
      category: "AI",
      emoji: "🧠",
      color: "purple",
      link: "/pages/AIConsciousnessRevolution2026"
    },
    {
      id: 2,
      title: "Space Tech Revolution",
      description: "Pioneering the future of space exploration and colonization",
      views: 1890000,
      likes: 156000,
      shares: 32000,
      trend: "up",
      category: "Space",
      emoji: "🚀",
      color: "cyan",
      link: "/pages/SpaceTechRevolution2026"
    },
    {
      id: 3,
      title: "Biotech Revolution",
      description: "Revolutionizing healthcare through cutting-edge biotechnology",
      views: 1650000,
      likes: 134000,
      shares: 28000,
      trend: "up",
      category: "Biotech",
      emoji: "🧬",
      color: "emerald",
      link: "/pages/BiotechRevolution2026"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Self-evolving AI systems that transcend traditional limitations",
      views: 2100000,
      likes: 178000,
      shares: 41000,
      trend: "up",
      category: "AI",
      emoji: "🤖",
      color: "pink",
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion",
      description: "The convergence of quantum computing and neural networks",
      views: 1980000,
      likes: 162000,
      shares: 35000,
      trend: "up",
      category: "Quantum",
      emoji: "⚛️",
      color: "blue",
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      id: 6,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication systems",
      views: 1720000,
      likes: 145000,
      shares: 29000,
      trend: "up",
      category: "Neural",
      emoji: "🧬",
      color: "teal",
      link: "/pages/NeuralInterfaceRevolution2025"
    }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time updates
      setTrendingContent(prev => prev.map(item => ({
        ...item,
        views: item.views + Math.floor(Math.random() * 100),
        likes: item.likes + Math.floor(Math.random() * 10),
        shares: item.shares + Math.floor(Math.random() * 5)
      })));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-500 to-pink-500",
      cyan: "from-cyan-500 to-blue-500",
      emerald: "from-emerald-500 to-teal-500",
      pink: "from-pink-500 to-rose-500",
      blue: "from-blue-500 to-indigo-500",
      teal: "from-teal-500 to-cyan-500"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-12 mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
          🔥 TRENDING NOW • LIVE UPDATES
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Most Popular Technology Content</h2>
        <p className="text-2xl text-gray-600 mb-4">Real-time engagement metrics and trending topics</p>
        <div className="text-sm text-gray-500">
          Last updated: {currentTime.toLocaleTimeString()}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingContent.map((item, index) => (
          <div key={item.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-gradient-to-b from-red-500 to-pink-500 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${getColorClasses(item.color)} text-white text-xs rounded-full font-semibold`}>
                    #{index + 1} TRENDING
                  </span>
                  <div className="text-sm text-gray-500 mt-1">{item.category}</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-green-500">
                <span className="text-lg">↗</span>
                <span className="text-sm font-semibold">+{Math.floor(Math.random() * 5) + 1}%</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 mb-6 text-sm">{item.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{formatNumber(item.views)}</div>
                <div className="text-xs text-gray-500">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{formatNumber(item.likes)}</div>
                <div className="text-xs text-gray-500">Likes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{formatNumber(item.shares)}</div>
                <div className="text-xs text-gray-500">Shares</div>
              </div>
            </div>

            <a 
              href={item.link} 
              className={`block w-full bg-gradient-to-r ${getColorClasses(item.color)} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              Explore Content →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Join the Conversation</h3>
          <p className="text-xl mb-6">Be part of the most exciting technology discussions happening right now</p>
          <div className="flex justify-center space-x-4">
            <a href="/enhanced-showcase" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              View All Content
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
              Get Updates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingContentSection;