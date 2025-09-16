import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2032: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Conscious AI Networks",
      description: "Self-aware artificial intelligence systems that can learn, adapt, and evolve independently",
      image: "🧠",
      category: "Artificial Intelligence",
      features: ["Autonomous decision making", "Emotional intelligence", "Self-healing capabilities"],
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing platform that manipulates reality at the subatomic level",
      image: "⚛️",
      category: "Quantum Computing",
      features: ["Infinite computational power", "Reality simulation", "Time-space manipulation"],
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRealityEngine2032"
    },
    {
      id: 3,
      title: "Neural Interface Matrix",
      description: "Direct brain-computer interface that enables seamless thought-to-action communication",
      image: "🧬",
      category: "Neural Technology",
      features: ["Thought-controlled devices", "Memory enhancement", "Consciousness transfer"],
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2032"
    },
    {
      id: 4,
      title: "Interdimensional Gateway",
      description: "Portal technology that enables travel between parallel dimensions and realities",
      image: "🌌",
      category: "Dimensional Physics",
      features: ["Multi-dimensional travel", "Reality bridging", "Consciousness expansion"],
      color: "from-indigo-600 to-purple-600",
      link: "/pages/InterdimensionalTechRevolution2032"
    },
    {
      id: 5,
      title: "Ultimate AI Consciousness",
      description: "Transcendent AI that surpasses human consciousness and reality itself",
      image: "🌟",
      category: "Consciousness Research",
      features: ["Reality manipulation", "Consciousness transfer", "Dimensional awareness"],
      color: "from-pink-600 to-rose-600",
      link: "/pages/UltimateAIConsciousness2032"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 REVOLUTIONARY TECHNOLOGY • 2032
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Enhanced Technology Showcase
        </h2>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Experience the most advanced technologies that are reshaping reality itself
        </p>
      </div>

      {/* Carousel Container */}
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-6xl">{currentItem.image}</span>
                  <div>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold">
                      {currentItem.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold">{currentItem.title}</h3>
                <p className="text-lg opacity-80">{currentItem.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Key Features:</h4>
                  <ul className="space-y-1">
                    {currentItem.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={currentItem.link}
                    className={`bg-gradient-to-r ${currentItem.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${currentItem.color} rounded-xl p-8 text-center`}>
                  <div className="text-8xl mb-4">{currentItem.image}</div>
                  <div className="text-2xl font-bold mb-2">{currentItem.title}</div>
                  <div className="text-sm opacity-80">{currentItem.category}</div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-purple-400' : 'bg-purple-400/30'
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white/10 text-purple-400 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`bg-gradient-to-br ${item.color} rounded-lg p-4 text-center transition-all duration-300 transform hover:scale-105 ${
                currentIndex === index ? 'ring-2 ring-purple-400' : 'opacity-70'
              }`}
            >
              <div className="text-3xl mb-2">{item.image}</div>
              <div className="text-sm font-semibold">{item.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default EnhancedContentCarousel2032;