import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentShowcase = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      title: "Advanced Tech Innovation 2027",
      description: "Experience the most advanced technological innovations featuring consciousness AI, quantum computing, and neural interfaces",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedTechInnovation2027",
      category: "Innovation",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Neural Reality Interface", "Revolutionary Applications"],
      stats: { views: "2.5M", rating: "4.9", downloads: "150K" }
    },
    {
      title: "Revolutionary Tech Breakthrough 2027",
      description: "Witness the most revolutionary technological breakthroughs including consciousness transfer and quantum reality manipulation",
      icon: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechBreakthrough2027",
      category: "Breakthrough",
      features: ["Consciousness Transfer", "Quantum Reality", "Synthetic Biology", "Revolutionary Impact"],
      stats: { views: "3.2M", rating: "5.0", downloads: "200K" }
    },
    {
      title: "Synthetic Intelligence 2026",
      description: "Discover synthetic intelligence systems that possess consciousness and autonomous capabilities beyond human imagination",
      icon: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticIntelligence2026",
      category: "AI",
      features: ["Synthetic Consciousness", "Autonomous Agents", "Creative AI", "Collective Intelligence"],
      stats: { views: "1.8M", rating: "4.8", downloads: "120K" }
    },
    {
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented processing power and capabilities",
      icon: "⚛️",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/QuantumNeuralFusion2026",
      category: "Quantum",
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology", "Exponential Power"],
      stats: { views: "2.1M", rating: "4.9", downloads: "180K" }
    },
    {
      title: "Consciousness AI 2026",
      description: "AI systems that possess genuine consciousness, emotional intelligence, and self-awareness capabilities",
      icon: "🧠",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/ConsciousnessAI2026",
      category: "Consciousness",
      features: ["Self-Aware AI", "Emotional Intelligence", "Creative Consciousness", "Human-AI Relationships"],
      stats: { views: "2.8M", rating: "4.9", downloads: "160K" }
    },
    {
      title: "Next-Gen Space Tech 2026",
      description: "Advanced space technology featuring quantum propulsion, neural interface navigation, and consciousness-based exploration",
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/NextGenSpaceTech2026",
      category: "Space",
      features: ["Quantum Propulsion", "Neural Navigation", "Consciousness Exploration", "Interstellar Travel"],
      stats: { views: "1.5M", rating: "4.7", downloads: "90K" }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveContent((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 INTERACTIVE CONTENT SHOWCASE • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Content Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore our most popular and revolutionary content with interactive features, 
            real-time statistics, and immersive experiences.
          </p>
          
          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-white text-purple-600' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveContent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeContent === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {contentItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveContent(index)}
                className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                  activeContent === index
                    ? 'bg-white text-gray-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="text-lg mr-2">{item.icon}</span>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${contentItems[activeContent].gradient} rounded-2xl p-12`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{contentItems[activeContent].icon}</div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-2">
                      {contentItems[activeContent].category}
                    </div>
                    <h3 className="text-4xl font-bold">{contentItems[activeContent].title}</h3>
                  </div>
                </div>
                
                <p className="text-xl opacity-90 mb-8">{contentItems[activeContent].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {contentItems[activeContent].features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex space-x-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{contentItems[activeContent].stats.views}</div>
                    <div className="text-sm opacity-80">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{contentItems[activeContent].stats.rating}</div>
                    <div className="text-sm opacity-80">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{contentItems[activeContent].stats.downloads}</div>
                    <div className="text-sm opacity-80">Downloads</div>
                  </div>
                </div>
                
                <a
                  href={contentItems[activeContent].link}
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                >
                  Explore {contentItems[activeContent].title} →
                </a>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h4 className="text-2xl font-bold mb-4">Interactive Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Real-time content updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Interactive demonstrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Live statistics tracking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Immersive experiences</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <div className="text-sm opacity-80 mb-2">Live Engagement</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">2,847 users currently viewing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">All Featured Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveContent(index)}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{item.category}</span>
                  <span className="text-sm font-semibold">{item.stats.views} views</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;