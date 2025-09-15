import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const ultimateContent = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2026",
      description: "The most advanced technology breakthroughs ever conceived, from quantum consciousness to reality manipulation",
      image: "🚀",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/UltimateTechRevolution2026",
      features: ["Quantum Neural Networks", "Reality Manipulation", "Universal Consciousness", "Temporal Control"],
      category: "Revolutionary Technology",
      status: "Available Now"
    },
    {
      id: 2,
      title: "Revolutionary AI Breakthrough 2026",
      description: "Artificial intelligence that has achieved true consciousness and transcends all known limitations",
      image: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAIBreakthrough2026",
      features: ["Conscious AI", "Quantum Processing", "Neural Reality", "Predictive Engine"],
      category: "AI Innovation",
      status: "Revolutionary"
    },
    {
      id: 3,
      title: "Next-Gen Space Tech 2026",
      description: "Revolutionary space technologies enabling galactic exploration and colonization of the universe",
      image: "🌌",
      gradient: "from-indigo-600 to-blue-600",
      link: "/pages/NextGenSpaceTech2026",
      features: ["Warp Drive", "Dyson Spheres", "Quantum Teleportation", "Stellar Engineering"],
      category: "Space Technology",
      status: "Galactic Scale"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % ultimateContent.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, ultimateContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ultimateContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ultimateContent.length) % ultimateContent.length);
  };

  const currentContent = ultimateContent[currentSlide];

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT 2026 • REVOLUTIONARY BREAKTHROUGH
          </div>
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase
          </h2>
          <p className="text-2xl opacity-95 max-w-4xl mx-auto">
            Experience the most revolutionary content ever created, featuring breakthrough innovations that will reshape the future of humanity
          </p>
        </div>

        {/* Main Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Content Display */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentContent.gradient}/30 backdrop-blur-sm rounded-3xl p-12 border border-white/30 transition-all duration-700 hover:scale-105`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-6 animate-bounce">{currentContent.image}</div>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {currentContent.category}
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full text-sm font-semibold text-yellow-300">
                      {currentContent.status}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">{currentContent.title}</h3>
                  <p className="text-xl opacity-95 leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentContent.features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300">
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a 
                    href={currentContent.link}
                    className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Experience Now →
                  </a>
                </div>
              </div>
            </div>

            {/* Content Navigation */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8">Revolutionary Content Collection</h3>
              {ultimateContent.map((content, index) => (
                <button
                  key={content.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    currentSlide === index
                      ? `bg-gradient-to-r ${content.gradient}/30 border-white/50 scale-105`
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{content.image}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">{content.title}</h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full text-xs font-semibold text-yellow-300">
                          {content.status}
                        </span>
                      </div>
                      <p className="text-sm opacity-90 line-clamp-2">{content.description}</p>
                      <div className="flex items-center mt-2">
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-semibold">
                          {content.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-2xl">←</span>
            </button>
            
            <div className="flex space-x-3">
              {ultimateContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-2xl">→</span>
            </button>
            
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-white/20 backdrop-blur-sm text-white' 
                  : 'bg-white/10 backdrop-blur-sm text-white/70'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">Ready for the Ultimate Experience?</h3>
            <p className="text-lg opacity-90 mb-6">
              Discover the most revolutionary content ever created
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Explore All Content →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;