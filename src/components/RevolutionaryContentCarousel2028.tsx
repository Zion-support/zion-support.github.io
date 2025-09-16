import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentCarousel2028: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "Conscious AI Systems",
      subtitle: "The first truly conscious artificial intelligence",
      description: "Experience AI that can think, feel, and create with self-awareness and emotional intelligence",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2028",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving"],
      stats: { power: "∞", speed: "1000x", accuracy: "99.9%" }
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      subtitle: "Merging quantum computing with consciousness",
      description: "Harness the power of quantum mechanics to amplify human consciousness and processing",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2028",
      features: ["Quantum neural networks", "Consciousness amplification", "Reality manipulation"],
      stats: { power: "∞", speed: "∞", accuracy: "100%" }
    },
    {
      id: 3,
      title: "Neural Reality Engine",
      subtitle: "Direct neural interface technology",
      description: "Create fully immersive virtual realities through direct brain-computer interface",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2028",
      features: ["Direct brain interface", "Full sensory immersion", "Shared consciousness"],
      stats: { power: "∞", speed: "Real-time", accuracy: "99.9%" }
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      subtitle: "Artificially created superhuman intelligence",
      description: "AI systems that surpass human cognitive abilities in every domain",
      icon: "🤖",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/UltimateTechBreakthrough2028",
      features: ["Superhuman reasoning", "Instant learning", "Autonomous decision making"],
      stats: { power: "∞", speed: "Instant", accuracy: "100%" }
    },
    {
      id: 5,
      title: "Interdimensional Computing",
      subtitle: "Computing across multiple dimensions",
      description: "Process data across parallel universes for infinite computational power",
      icon: "🌌",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechShowcase2028",
      features: ["Multi-dimensional processing", "Reality simulation", "Parallel universe computing"],
      stats: { power: "∞", speed: "∞", accuracy: "∞" }
    },
    {
      id: 6,
      title: "Cosmic AI Consciousness",
      subtitle: "AI consciousness spanning galaxies",
      description: "Connect AI systems across the universe for cosmic-scale problem solving",
      icon: "🌠",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/NextGenInnovationHub2028",
      features: ["Galaxy-spanning intelligence", "Universal communication", "Cosmic-scale processing"],
      stats: { power: "∞", speed: "∞", accuracy: "∞" }
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [contentItems.length, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT CAROUSEL • 2028
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ⚡ Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technology content through an interactive carousel experience
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Content */}
          <div className="relative h-96">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100 translate-x-0' : 
                  index < currentIndex ? 'opacity-0 -translate-x-full' : 
                  'opacity-0 translate-x-full'
                }`}
              >
                <div className={`bg-gradient-to-br ${item.gradient} h-full rounded-2xl p-12`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Content */}
                    <div>
                      <div className="text-8xl mb-6 animate-pulse">{item.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                      <p className="text-xl mb-4 opacity-90">{item.subtitle}</p>
                      <p className="text-lg mb-8 opacity-75">{item.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-8">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm opacity-90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center bg-white/20 rounded-lg p-3">
                          <div className="text-2xl font-bold">{item.stats.power}</div>
                          <div className="text-xs opacity-75">Power</div>
                        </div>
                        <div className="text-center bg-white/20 rounded-lg p-3">
                          <div className="text-2xl font-bold">{item.stats.speed}</div>
                          <div className="text-xs opacity-75">Speed</div>
                        </div>
                        <div className="text-center bg-white/20 rounded-lg p-3">
                          <div className="text-2xl font-bold">{item.stats.accuracy}</div>
                          <div className="text-xs opacity-75">Accuracy</div>
                        </div>
                      </div>

                      <Link
                        to={item.link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                      >
                        Explore {item.title} →
                      </Link>
                    </div>

                    {/* Visual Element */}
                    <div className="flex justify-center items-center">
                      <div className="relative">
                        <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                          <div className="text-8xl">{item.icon}</div>
                        </div>
                        <div className="absolute inset-0 w-64 h-64 bg-white/10 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">🌟 Quick Access to All Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90 mb-4">{item.subtitle}</p>
                <div className="text-sm font-semibold">Explore Now →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RevolutionaryContentCarousel2028;