import React, { useState, useEffect } from 'react';

const TrendingContentSection2032: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingContent = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2032",
      description: "Experience the most revolutionary technological breakthrough in human history",
      icon: "🌟",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2032",
      trending: true,
      views: "2.3M",
      category: "Technology"
    },
    {
      id: 2,
      title: "Revolutionary AI Breakthrough 2032",
      description: "Witness the birth of true artificial consciousness and creative AI",
      icon: "🧠",
      color: "from-pink-600 to-purple-600",
      link: "/pages/RevolutionaryAIBreakthrough2032",
      trending: true,
      views: "1.8M",
      category: "AI"
    },
    {
      id: 3,
      title: "Next-Gen Space Tech 2032",
      description: "Break free from Earth and explore the infinite cosmos",
      icon: "🚀",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenSpaceTech2032",
      trending: true,
      views: "1.5M",
      category: "Space"
    },
    {
      id: 4,
      title: "Quantum Consciousness Revolution",
      description: "Explore the intersection of quantum physics and consciousness",
      icon: "⚛️",
      color: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumConsciousnessRevolution2029",
      trending: false,
      views: "950K",
      category: "Quantum"
    },
    {
      id: 5,
      title: "Transcendent AI 2030",
      description: "AI systems that transcend human intelligence and creativity",
      icon: "🌟",
      color: "from-purple-600 to-pink-600",
      link: "/pages/TranscendentAI2030",
      trending: false,
      views: "1.2M",
      category: "AI"
    },
    {
      id: 6,
      title: "Universal Tech Revolution",
      description: "Technology that works across all dimensions and realities",
      icon: "🌌",
      color: "from-cyan-600 to-indigo-600",
      link: "/pages/UniversalTechRevolution2030",
      trending: false,
      views: "800K",
      category: "Universal"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [trendingContent.length]);

  const currentContent = trendingContent[currentIndex];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🔥 Trending Content 2032
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Discover the most popular and revolutionary content that's shaping the future of technology
        </p>
      </div>

      {/* Main Trending Showcase */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-purple-500/30">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold animate-pulse">
              🔥 TRENDING NOW
            </span>
            <span className="text-gray-400">#{currentIndex + 1} Most Popular</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">{currentContent.views} views</div>
            <div className="text-sm text-gray-400">{currentContent.category}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`text-6xl bg-gradient-to-r ${currentContent.color} rounded-2xl p-4`}>
                {currentContent.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{currentContent.title}</h3>
                <p className="text-lg text-gray-300">{currentContent.description}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={currentContent.link}
                className={`bg-gradient-to-r ${currentContent.color} px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform`}
              >
                🚀 Explore Now
              </a>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-colors">
                📺 Watch Demo
              </button>
            </div>
          </div>

          <div className="bg-black/30 rounded-2xl p-6 border border-cyan-500/30">
            <h4 className="text-xl font-bold mb-4 text-cyan-400">Live Statistics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Real-time Views</span>
                <span className="text-cyan-400 font-bold">+{Math.floor(Math.random() * 1000)}/min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Engagement Rate</span>
                <span className="text-green-400 font-bold">98.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Share Count</span>
                <span className="text-purple-400 font-bold">+{Math.floor(Math.random() * 500)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Trending Score</span>
                <span className="text-yellow-400 font-bold">9.8/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {trendingContent.slice(0, 6).map((content, index) => (
          <div 
            key={content.id}
            className={`bg-gradient-to-br ${content.color} rounded-2xl p-6 hover:scale-105 transition-transform cursor-pointer ${
              index === currentIndex ? 'ring-4 ring-cyan-400' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{content.icon}</div>
              {content.trending && (
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                  🔥 TRENDING
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{content.title}</h3>
            <p className="text-sm opacity-90 mb-4">{content.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">{content.views} views</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{content.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Categories */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
        <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Explore by Category</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Technology', 'AI', 'Space', 'Quantum', 'Universal', 'Future'].map((category) => (
            <button 
              key={category}
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors"
            >
              <div className="text-2xl mb-2">
                {category === 'Technology' && '🌟'}
                {category === 'AI' && '🧠'}
                {category === 'Space' && '🚀'}
                {category === 'Quantum' && '⚛️'}
                {category === 'Universal' && '🌌'}
                {category === 'Future' && '🔮'}
              </div>
              <div className="font-semibold">{category}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold mb-6">Stay Updated with Trending Tech</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Don't miss out on the latest revolutionary content. Subscribe to get notified 
          about new trending technologies and breakthroughs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform">
            🔔 Subscribe for Updates
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg font-bold text-xl hover:bg-cyan-400 hover:text-black transition-colors">
            📱 Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingContentSection2032;