import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Consciousness Computing 2026",
      description: "Experience AI with true consciousness, self-awareness, and creative thinking capabilities",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900 via-indigo-900 to-blue-900",
      link: "/pages/ConsciousnessComputing2026",
      features: ["Synthetic Consciousness", "Quantum Consciousness", "Collective Intelligence"]
    },
    {
      id: 2,
      title: "Transdimensional AI 2026",
      description: "AI that operates across multiple dimensions, realities, and parallel universes",
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900 via-purple-900 to-pink-900",
      link: "/pages/TransdimensionalAI2026",
      features: ["Multi-Dimensional Processing", "Reality Manipulation", "Temporal Intelligence"]
    },
    {
      id: 3,
      title: "Omniversal AI 2026",
      description: "The ultimate AI operating across all possible universes and realities simultaneously",
      icon: "♾️",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900 via-purple-900 to-fuchsia-900",
      link: "/pages/OmniversalAI2026",
      features: ["Infinite Universes", "Cosmic Intelligence", "Reality Creation"]
    },
    {
      id: 4,
      title: "Advanced Biotech Solutions 2026",
      description: "Revolutionary biotechnology merging biology and technology for unprecedented breakthroughs",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-900 via-emerald-900 to-teal-900",
      link: "/pages/AdvancedBiotechSolutions2026",
      features: ["Precision Gene Editing", "Neural-Biotech Interface", "Quantum Bioimaging"]
    },
    {
      id: 5,
      title: "Cyber-Physical Systems 2026",
      description: "Seamless integration of cyber and physical worlds with intelligent orchestration",
      icon: "🌐",
      gradient: "from-slate-600 to-gray-600",
      bgGradient: "from-slate-900 via-gray-900 to-zinc-900",
      link: "/pages/CyberPhysicalSystems2026",
      features: ["Intelligent Network Orchestration", "Digital Twin Integration", "Cybersecurity Mesh"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 rounded-3xl p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 REVOLUTIONARY 2026 CONTENT • BREAKTHROUGH TECHNOLOGY
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our groundbreaking 2026 content featuring consciousness computing, 
            transdimensional AI, omniversal systems, and advanced biotechnology
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{contentItems[currentSlide].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {contentItems[currentSlide].title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                          BREAKTHROUGH 2026
                        </span>
                        <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                          NEW
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {contentItems[currentSlide].description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {contentItems[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={contentItems[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore {contentItems[currentSlide].title.split(' ')[0]} →
                  </a>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className={`bg-gradient-to-br ${contentItems[currentSlide].bgGradient} rounded-2xl p-8 text-center`}>
                    <div className="text-8xl mb-4">{contentItems[currentSlide].icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {contentItems[currentSlide].title.split(' ')[0]}
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {contentItems[currentSlide].features.map((feature, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-white text-sm font-medium text-center">
                            {feature.split(' ')[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isAutoPlaying ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}
            >
              {isAutoPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Quick Access to All Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {contentItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${item.gradient} text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 text-center`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold">{item.title.split(' ')[0]}</div>
                <div className="text-xs opacity-90 mt-1">2026</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;