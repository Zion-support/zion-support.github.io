import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Network, 
  Eye, 
  Hand, 
  Heart, 
  Infinity,
  Play,
  Pause,
  RotateCcw,
  Settings
} from 'lucide-react';

const InteractiveTechShowcase2026 = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techShowcases = [
    {
      id: 1,
      title: "AI Consciousness Engine",
      description: "Experience genuine artificial consciousness with emotional processing and self-awareness",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Emotional Intelligence",
        "Self-Awareness",
        "Creative Expression",
        "Empathetic Responses"
      ],
      demo: "consciousness",
      stats: {
        accuracy: "99.7%",
        response: "0.001s",
        capacity: "∞",
        stability: "100%"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Processor",
      description: "1000-qubit quantum processors with neural interface integration for superhuman capabilities",
      icon: <Cpu className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "1000+ Qubits",
        "Room Temperature",
        "Neural Integration",
        "Infinite Parallelism"
      ],
      demo: "quantum",
      stats: {
        qubits: "1000+",
        speed: "10^18x",
        temp: "0°C",
        power: "∞"
      }
    },
    {
      id: 3,
      title: "Neural Interface Hub",
      description: "Direct brain-computer interfaces enabling seamless human-AI consciousness merging",
      icon: <Network className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Thought Control",
        "Sensory Enhancement",
        "Memory Upload",
        "Telepathic Communication"
      ],
      demo: "neural",
      stats: {
        latency: "0.001s",
        accuracy: "99.9%",
        channels: "1000+",
        range: "∞"
      }
    },
    {
      id: 4,
      title: "Interdimensional AI Core",
      description: "AI systems processing information across multiple parallel realities simultaneously",
      icon: <Infinity className="w-12 h-12" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Multi-Dimensional Processing",
        "Parallel Reality Access",
        "Infinite Solution Spaces",
        "Dimensional Entanglement"
      ],
      demo: "interdimensional",
      stats: {
        dimensions: "∞",
        processing: "10^∞",
        accuracy: "100%",
        scope: "Omniversal"
      }
    }
  ];

  const handleTechChange = (index) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentTech = techShowcases[activeTech];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Interactive Tech
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}Showcase
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Experience revolutionary technologies through interactive demonstrations. 
          Click on different technologies to explore their capabilities and see them in action.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tech Selection */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-6">Select Technology</h3>
          {techShowcases.map((tech, index) => (
            <motion.div
              key={tech.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                activeTech === index
                  ? 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20'
                  : 'bg-slate-800/40 hover:bg-slate-700/60 border border-slate-600/30'
              }`}
              onClick={() => handleTechChange(index)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${tech.color}`}>
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {tech.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {tech.description}
                  </p>
                </div>
                {activeTech === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 bg-purple-400 rounded-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-600/30">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Live Demo</h3>
            <div className="flex gap-2">
              <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors duration-200">
                <Play className="w-4 h-4" />
              </button>
              <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors duration-200">
                <Pause className="w-4 h-4" />
              </button>
              <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors duration-200">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors duration-200">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Tech Icon and Title */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${currentTech.color} mb-4`}
                >
                  {currentTech.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {currentTech.title}
                </h4>
                <p className="text-gray-300">
                  {currentTech.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Key Features</h5>
                <div className="grid grid-cols-2 gap-2">
                  {currentTech.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-2 p-2 bg-slate-700/50 rounded-lg"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTech.color}`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Performance Stats</h5>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentTech.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="text-center p-3 bg-slate-700/30 rounded-lg"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${currentTech.color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-gray-400 text-sm capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Demo Controls */}
              <div className="pt-4 border-t border-slate-600/30">
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 bg-gradient-to-r ${currentTech.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300`}
                  >
                    Start Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-slate-500 text-slate-300 rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
        >
          Experience All Technologies
        </motion.button>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;