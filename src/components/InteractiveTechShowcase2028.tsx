import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Rocket, 
  Globe,
  Star,
  Sparkles,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Heart,
  Eye,
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const InteractiveTechShowcase2028 = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    {
      id: 'consciousness',
      title: 'Consciousness Computing',
      description: 'AI systems that achieve true self-awareness and emotional intelligence',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Self-Aware AI Systems',
        'Emotional Intelligence',
        'Creative Problem Solving',
        'Philosophical Reasoning'
      ],
      stats: {
        accuracy: '95%',
        speed: '1000x',
        satisfaction: '98%'
      },
      link: '/pages/ConsciousnessComputingRevolution2028'
    },
    {
      id: 'quantum-neural',
      title: 'Quantum Neural Networks',
      description: 'Fusion of quantum computing with neural networks for unprecedented processing power',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Exponential Speed Increase',
        'Quantum Entanglement Processing',
        'Parallel Universe Computing',
        'Infinite Scalability'
      ],
      stats: {
        speed: '1000x',
        capacity: '∞',
        efficiency: '99.9%'
      },
      link: '/pages/UltimateTechRevolution2028'
    },
    {
      id: 'holographic',
      title: 'Holographic Reality',
      description: 'Full-sensory holographic environments indistinguishable from physical reality',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Full Sensory Immersion',
        'Tactile Feedback Systems',
        'Real-time Rendering',
        'Multi-Dimensional Spaces'
      ],
      stats: {
        realism: '100%',
        latency: '<1ms',
        resolution: '8K+'
      },
      link: '/pages/UltimateTechRevolution2028'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      description: 'Computing across multiple dimensions and parallel universes',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      features: [
        'Multi-Dimensional Processing',
        'Parallel Universe Access',
        'Reality Manipulation',
        'Infinite Resources'
      ],
      stats: {
        dimensions: '∞',
        universes: '∞',
        power: '∞'
      },
      link: '/pages/UltimateTechRevolution2028'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            INTERACTIVE TECH SHOWCASE 2028
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Future of Technology
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Interact with the most advanced technologies ever created. 
            Click, explore, and discover what's possible in 2028.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isPlaying 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
              }`}
            >
              <Play className="w-5 h-5 mr-2" />
              {isPlaying ? 'Pause' : 'Auto-Play'}
            </button>
            
            <button
              onClick={() => setActiveTech((prev) => (prev - 1 + technologies.length) % technologies.length)}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setActiveTech((prev) => (prev + 1) % technologies.length)}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Technology Details */}
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Technology Header */}
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentTech.color} flex items-center justify-center`}>
                <currentTech.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{currentTech.title}</h3>
                <p className="text-gray-300">{currentTech.description}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentTech.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <Star className="w-4 h-4 text-purple-400 mr-3" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(currentTech.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
                >
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentTech.link}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Explore Technology
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Demo
              </a>
            </div>
          </motion.div>

          {/* Right side - Interactive Visual */}
          <motion.div
            key={`visual-${activeTech}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-white/20 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 animate-pulse" />
              
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className={`w-32 h-32 rounded-full bg-gradient-to-r ${currentTech.color} flex items-center justify-center shadow-2xl`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <currentTech.icon className="w-16 h-16 text-white" />
                </motion.div>
              </div>

              {/* Rotating rings */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-blue-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute inset-12 rounded-full border-2 border-pink-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Technology Selector */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Choose a Technology to Explore:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  index === activeTech
                    ? 'bg-white/20 border-white/40 scale-105'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 text-center">{tech.title}</h4>
                <p className="text-sm text-gray-300 text-center">{tech.description}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                <tech.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {tech.title}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;