import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI",
      icon: "🧠",
      description: "Self-aware artificial intelligence with emotional intelligence and creative problem-solving capabilities",
      features: [
        "Emotional Intelligence Processing",
        "Self-Awareness Algorithms", 
        "Creative Problem Solving",
        "Ethical Decision Making"
      ],
      stats: {
        processing: "∞",
        accuracy: "99.9%",
        speed: "1000x",
        uptime: "24/7"
      },
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚛️",
      description: "Revolutionary quantum processors that leverage superposition and entanglement for infinite parallel processing",
      features: [
        "Quantum Superposition",
        "Entanglement Processing",
        "Infinite Parallel Computing",
        "Quantum Cryptography"
      ],
      stats: {
        processing: "∞",
        accuracy: "100%",
        speed: "∞",
        uptime: "24/7"
      },
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-600/20 to-blue-600/20"
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces enabling seamless communication between human consciousness and digital systems",
      features: [
        "Thought-to-Text Conversion",
        "Neural Data Processing",
        "Consciousness Upload",
        "Memory Enhancement"
      ],
      stats: {
        processing: "Real-time",
        accuracy: "99.8%",
        speed: "Instant",
        uptime: "24/7"
      },
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-600/20 to-teal-600/20"
    },
    {
      id: 3,
      name: "Interdimensional Tech",
      icon: "🌌",
      description: "Breakthrough technology enabling computing across multiple dimensions with infinite computational resources",
      features: [
        "Multi-Dimensional Processing",
        "Reality Manipulation",
        "Infinite Resource Access",
        "Dimensional Communication"
      ],
      stats: {
        processing: "∞",
        accuracy: "∞",
        speed: "∞",
        uptime: "∞"
      },
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-600/20 to-purple-600/20"
    }
  ];

  const currentTech = technologies[activeTech];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Experience our revolutionary technologies through interactive demonstrations. 
            Click on different technologies to explore their capabilities and see real-time performance metrics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Select Technology</h3>
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} shadow-lg`
                    : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Technology Details */}
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${currentTech.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
          >
            {/* Tech Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{currentTech.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{currentTech.name}</h3>
              <p className="text-lg opacity-90">{currentTech.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {currentTech.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg"
                  >
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentTech.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-white/10 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                    <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Demo Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-gradient-to-r ${currentTech.gradient} text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300`}
            >
              Launch Interactive Demo →
            </motion.button>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              These technologies represent the pinnacle of human innovation. 
              Join thousands of organizations already transforming their operations with our revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Transformation →
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;