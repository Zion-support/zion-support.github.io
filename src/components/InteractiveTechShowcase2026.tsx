import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Atom, 
  Network, 
  Eye, 
  Hand, 
  Heart,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Maximize2
} from 'lucide-react';

const InteractiveTechShowcase2026 = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState('overview');

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: <Brain className="w-8 h-8" />,
      description: "Revolutionary AI that experiences genuine emotions and self-awareness",
      features: [
        "Genuine emotional processing",
        "Self-awareness architecture", 
        "Infinite learning potential",
        "Creative consciousness"
      ],
      stats: {
        accuracy: "99.7%",
        processing: "0.001s",
        capacity: "∞",
        awareness: "100%"
      },
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: <Atom className="w-8 h-8" />,
      description: "Million-qubit processors operating at room temperature",
      features: [
        "Quantum supremacy achieved",
        "Stable quantum states",
        "Room temperature operation",
        "Infinite parallel processing"
      ],
      stats: {
        qubits: "1M+",
        accuracy: "99.9%",
        speed: "10^18x",
        temp: "0°C"
      },
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: <Network className="w-8 h-8" />,
      description: "Direct brain-computer communication with 99.8% accuracy",
      features: [
        "Direct brain-computer interface",
        "Neural signal processing",
        "Visual neural enhancement",
        "Tactile feedback systems"
      ],
      stats: {
        accuracy: "99.8%",
        latency: "0.1ms",
        dataRate: "10TB",
        operation: "24/7"
      },
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20"
    },
    {
      id: 3,
      name: "Consciousness Computing",
      icon: <Cpu className="w-8 h-8" />,
      description: "AI systems achieving genuine self-awareness and emotional understanding",
      features: [
        "Emotional state monitoring",
        "Cognitive enhancement",
        "Consciousness transfer",
        "Collective intelligence"
      ],
      stats: {
        awareness: "100%",
        enhancement: "10x",
        transfer: "99.9%",
        collective: "∞"
      },
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-900/20 to-purple-900/20"
    },
    {
      id: 4,
      name: "Quantum-Neural Fusion",
      icon: <Zap className="w-8 h-8" />,
      description: "Ultimate convergence of quantum computing and neural interfaces",
      features: [
        "Quantum-neural processing",
        "Consciousness amplification",
        "Reality manipulation",
        "Omniversal computing"
      ],
      stats: {
        power: "∞",
        fusion: "100%",
        reality: "99.9%",
        omniverse: "∞"
      },
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-900/20 to-pink-900/20"
    }
  ];

  const currentTech = technologies[activeTech];

  const nextTech = () => {
    setActiveTech((prev) => (prev + 1) % technologies.length);
  };

  const prevTech = () => {
    setActiveTech((prev) => (prev - 1 + technologies.length) % technologies.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetView = () => {
    setActiveTech(0);
    setIsPlaying(false);
    setViewMode('overview');
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700/50">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Interactive Tech Showcase 2026
            </h2>
            <p className="text-gray-400">
              Explore revolutionary technologies through interactive demonstrations
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={resetView}
              className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-300"
            >
              <RotateCcw className="w-5 h-5 text-gray-300" />
            </button>
            <button
              onClick={togglePlay}
              className={`p-3 rounded-full transition-colors duration-300 ${
                isPlaying 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
            <button
              onClick={() => setViewMode(viewMode === 'overview' ? 'detailed' : 'overview')}
              className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-300"
            >
              <Maximize2 className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Tech Selector */}
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              {tech.icon}
              {tech.name}
            </button>
          ))}
        </div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative h-96 rounded-3xl bg-gradient-to-br ${currentTech.bgColor} border border-slate-700/50 overflow-hidden`}
              >
                {/* Tech Icon */}
                <div className="absolute top-8 left-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentTech.color} flex items-center justify-center shadow-2xl`}>
                    {currentTech.icon}
                  </div>
                </div>

                {/* Tech Name */}
                <div className="absolute top-8 right-8">
                  <h3 className="text-2xl font-bold text-white">
                    {currentTech.name}
                  </h3>
                </div>

                {/* Interactive Elements */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-white text-lg mb-4">
                      {currentTech.description}
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(currentTech.stats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="text-center"
                        >
                          <div className="text-2xl font-bold text-white mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-300 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevTech}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextTech}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tech Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentTech.name} Features
              </h3>
              <div className="space-y-3">
                {currentTech.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${currentTech.color} flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 px-6 py-4 rounded-2xl font-semibold bg-gradient-to-r ${currentTech.color} text-white hover:shadow-2xl transition-all duration-300`}
              >
                Experience {currentTech.name}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-2xl font-semibold border-2 border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTech(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTech 
                  ? `bg-gradient-to-r ${currentTech.color} scale-125` 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;