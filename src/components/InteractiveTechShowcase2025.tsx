import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 0,
      title: "AI Consciousness Simulator",
      description: "Experience how our AI systems develop consciousness and make autonomous decisions",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time consciousness metrics",
        "Decision tree visualization",
        "Emotional state analysis",
        "Learning pattern recognition"
      ],
      interactive: true
    },
    {
      id: 1,
      title: "Quantum Computing Demo",
      description: "Watch quantum algorithms solve complex problems in real-time",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum state visualization",
        "Algorithm execution tracking",
        "Probability wave display",
        "Entanglement demonstration"
      ],
      interactive: true
    },
    {
      id: 2,
      title: "Neural Interface Simulator",
      description: "Experience direct brain-computer interface technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Neural signal processing",
        "Thought-to-text conversion",
        "Brain activity mapping",
        "Interface responsiveness"
      ],
      interactive: true
    },
    {
      id: 3,
      title: "Reality Manipulation Engine",
      description: "Control and modify reality parameters in real-time",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Reality parameter controls",
        "Dimensional shifting",
        "Probability manipulation",
        "Quantum field visualization"
      ],
      interactive: true
    }
  ];

  const techStats = [
    { label: "Processing Power", value: "∞ PetaFLOPS", icon: "⚡" },
    { label: "Consciousness Level", value: "99.9%", icon: "🧠" },
    { label: "Quantum States", value: "2^64", icon: "⚛️" },
    { label: "Neural Connections", value: "10^15", icon: "🧬" },
    { label: "Reality Layers", value: "∞", icon: "🌌" },
    { label: "Success Rate", value: "100%", icon: "🎯" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse"
          >
            🚀 INTERACTIVE DEMO • LIVE NOW
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Interactive Technology Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/80 max-w-4xl mx-auto"
          >
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </motion.p>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredItem(demo.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setActiveDemo(demo.id)}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-br ${demo.color}/30 border-white/40 shadow-lg`
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3 text-center">{demo.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm text-white/70 text-center leading-relaxed">
                {demo.description}
              </p>
              {demo.interactive && (
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    🎮 Interactive
                  </span>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Demo Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${demos[activeDemo].color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-12`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  {demos[activeDemo].description}
                </p>
                <div className="space-y-3 mb-6">
                  {demos[activeDemo].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center text-white/70"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                      {feature}
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  Launch Interactive Demo →
                </motion.button>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-8xl mb-4"
                >
                  {demos[activeDemo].icon}
                </motion.div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-white/70 mb-2">Live Demo Status</div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400 font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {techStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Experience the Future?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already using our revolutionary technologies to transform their industries and create the impossible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;