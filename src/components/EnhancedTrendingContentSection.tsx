import React, { useState, useEffect } from 'react';

const EnhancedTrendingContentSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingContent = [
    {
      id: 1,
      title: "Advanced Tech Breakthrough 2025",
      description: "Discover the most revolutionary technological advances reshaping our world",
      image: "🧠",
      category: "AI & Technology",
      views: "2.3M",
      date: "January 20, 2025",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/AdvancedTechBreakthrough2025"
    },
    {
      id: 2,
      title: "Revolutionary AI Transformation",
      description: "Experience advanced AI systems that are fundamentally changing how we work and live",
      image: "🤖",
      category: "Artificial Intelligence",
      views: "1.8M",
      date: "January 18, 2025",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAITransformation2025"
    },
    {
      id: 3,
      title: "Next-Gen Space Exploration",
      description: "Journey to the stars with revolutionary space technologies and Mars colonization",
      image: "🚀",
      category: "Space Technology",
      views: "3.1M",
      date: "January 22, 2025",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenSpaceExploration2025"
    },
    {
      id: 4,
      title: "Quantum Computing Revolution",
      description: "Witness quantum computers solving previously impossible problems",
      image: "⚛️",
      category: "Quantum Computing",
      views: "2.7M",
      date: "January 19, 2025",
      gradient: "from-green-600 to-teal-600",
      link: "/pages/QuantumComputingRevolution2025"
    },
    {
      id: 5,
      title: "Neural Interface Future",
      description: "Direct brain-computer interfaces enabling seamless human-AI communication",
      image: "🧬",
      category: "Neural Technology",
      views: "1.9M",
      date: "January 21, 2025",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NeuralInterfaceRevolution2025"
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
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🔥 TRENDING NOW • LIVE UPDATES
        </div>
        <h2 className="text-4xl font-bold text-white mb-6">🌟 Trending Technology Content</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the most popular and cutting-edge technology content that's capturing the world's attention
        </p>
      </div>

      {/* Featured Content Carousel */}
      <div className="relative mb-12">
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-6xl">{currentContent.image}</div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold text-white">
                    {currentContent.category}
                  </span>
                  <span className="text-gray-400 text-sm">{currentContent.date}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{currentContent.title}</h3>
                <p className="text-gray-300 text-lg">{currentContent.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">{currentContent.views}</div>
              <div className="text-gray-400 text-sm">Views</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <a 
              href={currentContent.link}
              className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              Explore Now →
            </a>
            <div className="flex space-x-2">
              {trendingContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trending Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingContent.slice(0, 6).map((content, index) => (
          <div 
            key={content.id}
            className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
              index === currentIndex ? 'ring-2 ring-white/50' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{content.image}</div>
              <div className="text-right">
                <div className="text-sm text-white/80">{content.views}</div>
                <div className="text-xs text-white/60">views</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{content.title}</h3>
            <p className="text-white/80 text-sm mb-4 line-clamp-2">{content.description}</p>
            <div className="flex items-center justify-between">
              <span className="px-2 py-1 bg-white/20 rounded text-xs font-semibold text-white">
                {content.category}
              </span>
              <a 
                href={content.link}
                className="text-white hover:text-white/80 text-sm font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <a 
          href="/pages/NextGenTechShowcase2026"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          View All Trending Content →
        </a>
      </div>
    </div>
  );
};

export default EnhancedTrendingContentSection;