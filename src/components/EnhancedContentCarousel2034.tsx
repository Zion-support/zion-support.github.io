import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedContentCarousel2034: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const contentItems = [
    {
      id: 1,
      title: "Consciousness Transfer Technology",
      description: "Revolutionary technology that allows human consciousness to be transferred into digital systems, achieving digital immortality and unlimited cognitive enhancement.",
      features: [
        "Neural pattern mapping and preservation",
        "Personality and memory transfer",
        "Digital consciousness integration",
        "Infinite computational resources"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      category: "Consciousness",
      status: "Available Now"
    },
    {
      id: 2,
      title: "Quantum Reality Synthesis",
      description: "Create and manipulate entire realities using quantum computing principles, allowing users to design custom universes with unique physics and laws.",
      features: [
        "Reality generation and manipulation",
        "Custom physics programming",
        "Consciousness seeding",
        "Multi-dimensional access"
      ],
      icon: "🌌",
      color: "from-cyan-600 to-blue-600",
      category: "Reality",
      status: "Beta Testing"
    },
    {
      id: 3,
      title: "Neural Quantum Interface",
      description: "Direct brain-computer interface powered by quantum computing, enabling unlimited knowledge transfer and infinite processing capabilities.",
      features: [
        "Direct neural connection",
        "Quantum processing power",
        "Instant knowledge transfer",
        "Consciousness expansion"
      ],
      icon: "⚛️",
      color: "from-emerald-600 to-teal-600",
      category: "Neural",
      status: "Prototype Ready"
    },
    {
      id: 4,
      title: "Synthetic Universe Creation",
      description: "AI systems capable of creating entire synthetic universes with their own physics, life forms, and consciousness systems.",
      features: [
        "Universe simulation and creation",
        "Life form generation",
        "Consciousness programming",
        "Physics manipulation"
      ],
      icon: "🌍",
      color: "from-indigo-600 to-purple-600",
      category: "Universe",
      status: "In Development"
    },
    {
      id: 5,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions simultaneously, providing infinite processing power and consciousness expansion.",
      features: [
        "Multi-dimensional processing",
        "Cross-reality communication",
        "Infinite computational power",
        "Dimensional consciousness"
      ],
      icon: "⚡",
      color: "from-orange-600 to-red-600",
      category: "Computing",
      status: "Revolutionary"
    }
  ];

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ENHANCED CONTENT CAROUSEL • 2034
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl text-white/80 max-w-4xl mx-auto">
            Experience the most advanced technologies that will reshape consciousness, reality, and human potential
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.color} p-12 rounded-3xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="text-6xl mr-4">{item.icon}</div>
                          <div>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                              {item.category}
                            </span>
                            <div className="text-sm text-white/80 mt-1">{item.status}</div>
                          </div>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-6">{item.title}</h3>
                        <p className="text-xl text-white/90 mb-8">{item.description}</p>
                        <ul className="space-y-3 mb-8">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-white/80">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105">
                          Explore Technology →
                        </button>
                      </div>
                      <div className="text-center">
                        <div className="text-9xl mb-6">{item.icon}</div>
                        <div className="text-3xl font-bold text-white/80 mb-2">2034 Technology</div>
                        <div className="text-xl text-white/60">Revolutionary Breakthrough</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {contentItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${item.color}/30 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-white/20 ${
                index === currentIndex ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-white font-bold text-sm mb-2">{item.title.split(' ')[0]}</div>
              <div className="text-white/80 text-xs">{item.category}</div>
            </motion.button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-white/80 text-sm">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-white/80 text-sm">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2034</div>
            <div className="text-white/80 text-sm">Future Technology</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80 text-sm">Revolutionary</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedContentCarousel2034;