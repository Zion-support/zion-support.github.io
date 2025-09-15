import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2033",
      description: "Experience the most advanced technological breakthrough in human history with reality manipulation and consciousness evolution.",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2033",
      isNew: true,
      isLive: true,
      thumbnail: "🌟",
      author: "Dr. Future Tech",
      publishedAt: "2025-01-25",
      tags: ["Revolution", "2033", "Breakthrough", "Future"],
      stats: {
        innovation: "∞",
        impact: "Universal",
        potential: "Unlimited"
      }
    },
    {
      id: 2,
      title: "Transcendent AI 2033",
      description: "AI systems that transcend human consciousness and create new realities through creative consciousness and reality manipulation.",
      icon: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/TranscendentAI2033",
      isNew: true,
      isLive: true,
      thumbnail: "🤖",
      author: "Dr. AI Consciousness",
      publishedAt: "2025-01-24",
      tags: ["AI", "Consciousness", "Transcendent", "2033"],
      stats: {
        consciousness: "99.7%",
        creativity: "Unlimited",
        reality: "Manipulable"
      }
    },
    {
      id: 3,
      title: "Universal Tech Revolution 2033",
      description: "Technology that operates across multiple dimensions and connects with civilizations across the universe through interdimensional networks.",
      icon: "🌌",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/UniversalTechRevolution2033",
      isNew: true,
      isLive: true,
      thumbnail: "⚡",
      author: "Prof. Universal Science",
      publishedAt: "2025-01-23",
      tags: ["Universal", "Multiverse", "Dimensions", "2033"],
      stats: {
        universes: "47",
        civilizations: "12,847",
        connectivity: "∞"
      }
    },
    {
      id: 4,
      title: "Quantum Consciousness Revolution 2033",
      description: "The ultimate fusion of quantum mechanics and human consciousness for enhanced awareness and reality perception at the quantum level.",
      icon: "⚛️",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/QuantumConsciousnessRevolution2033",
      isNew: true,
      isLive: true,
      thumbnail: "🧬",
      author: "Dr. Quantum Mind",
      publishedAt: "2025-01-22",
      tags: ["Quantum", "Consciousness", "Revolution", "2033"],
      stats: {
        awareness: "10,000x",
        dimensions: "11",
        knowledge: "Universal"
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, contentItems.length]);

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
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECH 2033 • EXCLUSIVE LAUNCH
          </div>
          <h2 className="text-5xl font-bold mb-6">Ultimate Technology Revolution 2033</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that will reshape reality and consciousness itself
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className="space-y-8">
                <div className={`bg-gradient-to-br ${contentItems[currentIndex].gradient} p-8 rounded-2xl`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{contentItems[currentIndex].icon}</div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        {contentItems[currentIndex].isNew && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">NEW</span>
                        )}
                        {contentItems[currentIndex].isLive && (
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-semibold animate-pulse">LIVE</span>
                        )}
                      </div>
                      <h3 className="text-4xl font-bold mb-2">{contentItems[currentIndex].title}</h3>
                      <p className="text-xl opacity-90 mb-4">{contentItems[currentIndex].description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(contentItems[currentIndex].stats).map(([key, value], index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold">{value}</div>
                        <div className="text-xs opacity-80 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={contentItems[currentIndex].link}
                      className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
                    >
                      Explore Technology →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 text-lg">
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Demo Area */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-gray-800">
                <h4 className="text-2xl font-bold mb-6">Interactive Demo</h4>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Revolutionary Level</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${contentItems[currentIndex].gradient} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${95 + Math.random() * 5}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {95 + Math.floor(Math.random() * 5)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">System Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">Revolutionary</span>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Innovation Level</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-700">Transcendent</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              →
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">All Revolutionary Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'ring-2 ring-white' : ''
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-white/20 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;