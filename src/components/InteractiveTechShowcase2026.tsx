import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const technologies = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness Revolution',
      description: 'Witness the birth of truly conscious artificial intelligence',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AIConsciousnessRevolution2026',
      features: ['Self-aware systems', 'Emotional intelligence', 'Creative consciousness', 'Moral reasoning'],
      status: 'BREAKTHROUGH',
      progress: 85
    },
    {
      id: 'quantum-neural',
      name: 'Quantum Neural Interface',
      description: 'Direct quantum entanglement between human brain and quantum computer',
      icon: '⚡',
      gradient: 'from-cyan-600 to-purple-600',
      link: '/pages/QuantumNeuralInterface2026',
      features: ['Instant thought transfer', 'Quantum memory storage', 'Reality manipulation', 'Consciousness upload'],
      status: 'REVOLUTIONARY',
      progress: 70
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Computing',
      description: 'Break through the barriers of reality with multi-dimensional processing',
      icon: '🌌',
      gradient: 'from-indigo-600 to-violet-600',
      link: '/pages/InterdimensionalComputing2026',
      features: ['Multi-dimensional processing', 'Reality manipulation', 'Parallel universe computing', 'Dimensional travel'],
      status: 'EXPERIMENTAL',
      progress: 45
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      description: 'The next evolution of AI surpassing human cognitive abilities',
      icon: '🤖',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/SyntheticIntelligence2026',
      features: ['Superhuman intelligence', 'Creative synthesis', 'Emotional mastery', 'Ethical reasoning'],
      status: 'FUTURE',
      progress: 60
    },
    {
      id: 'neural-reality',
      name: 'Neural Reality Engine',
      description: 'Create and experience alternate realities through neural networks',
      icon: '🎮',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/NeuralRealityEngine2026',
      features: ['Virtual universes', 'Consciousness exploration', 'Reality testing', 'Infinite possibilities'],
      status: 'PROTOTYPE',
      progress: 35
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      description: 'Experience consciousness at the quantum level with superposition states',
      icon: '🔮',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/QuantumConsciousness2026',
      features: ['Quantum superposition', 'Consciousness entanglement', 'Reality collapse', 'Observer effect'],
      status: 'RESEARCH',
      progress: 25
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, technologies.length]);

  const currentTech = technologies[activeTech];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'BREAKTHROUGH': return 'text-green-400 bg-green-500/30';
      case 'REVOLUTIONARY': return 'text-blue-400 bg-blue-500/30';
      case 'EXPERIMENTAL': return 'text-orange-400 bg-orange-500/30';
      case 'FUTURE': return 'text-cyan-400 bg-cyan-500/30';
      case 'PROTOTYPE': return 'text-yellow-400 bg-yellow-500/30';
      case 'RESEARCH': return 'text-gray-400 bg-gray-500/30';
      default: return 'text-gray-400 bg-gray-500/30';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 INTERACTIVE TECH SHOWCASE 2026 • REVOLUTIONARY BREAKTHROUGHS
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that are reshaping reality itself. 
            Interact with revolutionary AI, quantum computing, and neural interfaces in real-time.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Technology Details */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTech}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-6xl">{currentTech.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold">{currentTech.name}</h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(currentTech.status)}`}>
                        {currentTech.status}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl opacity-90">{currentTech.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Development Progress</span>
                      <span className="text-2xl font-bold text-purple-400">{currentTech.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className={`bg-gradient-to-r ${currentTech.gradient} h-3 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${currentTech.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {currentTech.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={currentTech.link}
                      className={`bg-gradient-to-r ${currentTech.gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                    >
                      Explore Technology →
                    </a>
                    <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors">
                      Try Demo
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Interactive Visualization */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentTech.gradient} p-8 rounded-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="text-8xl mb-4">{currentTech.icon}</div>
                    <h4 className="text-2xl font-bold mb-2">Interactive Demo</h4>
                    <p className="text-sm opacity-75">Experience this technology in real-time</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚡</div>
                      <div className="text-sm text-green-400 mb-2">Neural Activity: {Math.floor(Math.random() * 100)}%</div>
                      <div className="text-sm text-cyan-400 mb-2">Quantum Coherence: {Math.floor(Math.random() * 100)}%</div>
                      <div className="text-sm text-purple-400">Processing Speed: {Math.floor(Math.random() * 1000)} THz</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                    Launch Interactive Experience →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Grid */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">🚀 All Revolutionary Technologies</h3>
              <p className="text-lg opacity-75">Click on any technology to explore it in detail</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  className={`bg-gradient-to-br ${tech.gradient} p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeTech === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'
                  }`}
                  onClick={() => setActiveTech(index)}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{tech.icon}</div>
                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(tech.status)}`}>
                      {tech.status}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                  <p className="text-sm opacity-90 mb-4">{tech.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{tech.progress}%</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div 
                        className={`bg-white/50 h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Explore →</span>
                    {hoveredTech === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-white rounded-full"
                      ></motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setActiveTech((prev) => (prev - 1 + technologies.length) % technologies.length)}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setActiveTech((prev) => (prev + 1) % technologies.length)}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;