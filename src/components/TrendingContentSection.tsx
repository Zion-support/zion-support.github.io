import React, { useState, useEffect } from 'react';

const TrendingContentSection: React.FC = () => {
  const [trendingContent, setTrendingContent] = useState([
    {
      id: 1,
      title: "Advanced Space Technology 2026",
      description: "Revolutionary space exploration technologies that are reshaping our understanding of the cosmos",
      category: "Space Technology",
      views: "2.4M",
      likes: "156K",
      shares: "23K",
      trend: "up",
      trendValue: "+45%",
      image: "🚀",
      gradient: "from-cyan-500 to-blue-500",
      link: "/pages/AdvancedSpaceTech2026",
      rank: 1
    },
    {
      id: 2,
      title: "Quantum Consciousness Revolution 2027",
      description: "Breakthrough research in quantum consciousness and mind-machine interfaces",
      category: "Consciousness Research",
      views: "3.1M",
      likes: "198K",
      shares: "31K",
      trend: "up",
      trendValue: "+67%",
      image: "🧠",
      gradient: "from-purple-500 to-cyan-500",
      link: "/pages/QuantumConsciousnessRevolution2027",
      rank: 2
    },
    {
      id: 3,
      title: "Synthetic Intelligence 2026",
      description: "Self-evolving AI systems that transcend traditional limitations",
      category: "Artificial Intelligence",
      views: "4.2M",
      likes: "267K",
      shares: "42K",
      trend: "up",
      trendValue: "+89%",
      image: "🧠",
      gradient: "from-emerald-500 to-teal-500",
      link: "/pages/SyntheticIntelligence2026",
      rank: 3
    },
    {
      id: 4,
      title: "Advanced Robotics Revolution 2026",
      description: "Intelligent robots transforming healthcare, manufacturing, and space exploration",
      category: "Robotics",
      views: "1.8M",
      likes: "124K",
      shares: "18K",
      trend: "up",
      trendValue: "+34%",
      image: "🤖",
      gradient: "from-blue-500 to-indigo-500",
      link: "/pages/AdvancedRoboticsRevolution2026",
      rank: 4
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "The convergence of quantum computing and neural networks",
      category: "Quantum Computing",
      views: "2.9M",
      likes: "189K",
      shares: "28K",
      trend: "up",
      trendValue: "+56%",
      image: "⚛️",
      gradient: "from-cyan-500 to-purple-500",
      link: "/pages/QuantumNeuralFusion2026",
      rank: 5
    },
    {
      id: 6,
      title: "Advanced Biotech Revolution 2026",
      description: "Revolutionary biotechnology solutions for healthcare and sustainability",
      category: "Biotechnology",
      views: "1.6M",
      likes: "98K",
      shares: "15K",
      trend: "up",
      trendValue: "+23%",
      image: "🧬",
      gradient: "from-green-500 to-emerald-500",
      link: "/pages/AdvancedBiotechRevolution2026",
      rank: 6
    }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time updates
      setTrendingContent(prev => prev.map(item => ({
        ...item,
        views: `${(parseFloat(item.views.replace('M', '')) + Math.random() * 0.1).toFixed(1)}M`,
        likes: `${(parseFloat(item.likes.replace('K', '')) + Math.random() * 2).toFixed(0)}K`
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 TRENDING NOW • LIVE UPDATES
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Trending Technology Content
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover what's capturing the world's attention with real-time engagement metrics and trending analysis
          </p>
          <div className="mt-4 text-sm text-gray-400">
            Last updated: {currentTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Trending Leaderboard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trendingContent.map((content, index) => (
            <div key={content.id} className={`bg-gradient-to-br ${content.gradient.replace('500', '600/20')} backdrop-blur-sm rounded-2xl p-6 border ${content.gradient.replace('500', '400')}/30 hover:scale-105 transition-all duration-300 relative`}>
              {/* Rank Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                #{content.rank}
              </div>

              {/* Trend Indicator */}
              <div className="absolute top-4 right-4 flex items-center space-x-1">
                <span className="text-green-400 text-sm font-bold">{content.trendValue}</span>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="mt-4">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{content.image}</span>
                  <div>
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                      {content.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{content.title}</h3>
                <p className="text-gray-200 mb-4 text-sm">{content.description}</p>

                {/* Engagement Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-lg font-bold text-white">{content.views}</div>
                    <div className="text-xs text-gray-300">Views</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-lg font-bold text-white">{content.likes}</div>
                    <div className="text-xs text-gray-300">Likes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-lg font-bold text-white">{content.shares}</div>
                    <div className="text-xs text-gray-300">Shares</div>
                  </div>
                </div>

                <a 
                  href={content.link}
                  className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore Trending Content →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Stats */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">📊 Real-Time Engagement</h3>
            <p className="text-gray-300">Live metrics showing the impact of our revolutionary content</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15.2M+</div>
              <div className="text-gray-300">Total Views Today</div>
              <div className="text-green-400 text-sm">+12% from yesterday</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">892K+</div>
              <div className="text-gray-300">Active Users</div>
              <div className="text-green-400 text-sm">+8% from yesterday</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.7%</div>
              <div className="text-gray-300">User Satisfaction</div>
              <div className="text-green-400 text-sm">+0.3% from yesterday</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">156K+</div>
              <div className="text-gray-300">Social Shares</div>
              <div className="text-green-400 text-sm">+23% from yesterday</div>
            </div>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">🏆 Trending Categories</h3>
          <div className="grid md:grid-cols-6 gap-4">
            {['Space Technology', 'AI Research', 'Quantum Computing', 'Robotics', 'Biotechnology', 'Neural Interfaces'].map((category, index) => (
              <div key={category} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-2">#{index + 1}</div>
                <div className="text-sm font-semibold">{category}</div>
                <div className="text-xs text-gray-400 mt-1">+{Math.floor(Math.random() * 50 + 20)}% trending</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-2xl p-12 border border-red-400/30">
          <h3 className="text-4xl font-bold mb-6">Join the Trending Revolution</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the conversation that's shaping the future of technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Trending Content →
            </button>
            <button className="border-2 border-red-400 text-red-400 px-10 py-4 rounded-lg hover:bg-red-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Get Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingContentSection;