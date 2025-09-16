import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that can think, feel, and create",
      icon: "🧠",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning",
        "Autonomous learning"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      id: 1,
      title: "Quantum Neural Networks",
      description: "Revolutionary quantum computing combined with neural networks for infinite processing power",
      icon: "⚛️",
      features: [
        "Quantum superposition processing",
        "Neural network optimization",
        "Parallel reality computing",
        "Infinite scalability",
        "Consciousness transfer"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions for unprecedented capabilities",
      icon: "🌌",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Parallel universe access",
        "Infinite data storage",
        "Temporal computing"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20"
    },
    {
      id: 3,
      title: "Neural Reality Engine",
      description: "Direct neural interface technology that creates immersive virtual realities",
      icon: "🧬",
      features: [
        "Direct brain-computer interface",
        "Immersive virtual reality",
        "Neural feedback systems",
        "Consciousness transfer",
        "Reality simulation"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time demos
          </p>
        </motion.div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <motion.button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.title}
            </motion.button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Info */}
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].title}</h3>
            <p className="text-xl opacity-90 mb-8">{technologies[activeTech].description}</p>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {technologies[activeTech].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4 pt-6">
              <button className={`bg-gradient-to-r ${technologies[activeTech].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Try Demo →
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Interactive Demo Area */}
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
          >
            <h4 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h4>
            
            <div className="space-y-6">
              {/* Demo Visualization */}
              <div className="bg-black/20 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
                <p className="text-lg opacity-90 mb-4">Real-time Technology Demo</p>
                <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                  <div className={`bg-gradient-to-r ${technologies[activeTech].color} h-2 rounded-full animate-pulse`} style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm opacity-70">Processing: 75% Complete</p>
              </div>

              {/* Interactive Controls */}
              <div className="space-y-4">
                <h5 className="text-lg font-semibold">Interactive Controls:</h5>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors">
                    Start Process
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors">
                    Pause Demo
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors">
                    Reset
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors">
                    Settings
                  </button>
                </div>
              </div>

              {/* Live Data */}
              <div className="bg-black/20 rounded-lg p-4">
                <h5 className="text-lg font-semibold mb-3">Live Data Stream:</h5>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span>Processing Power:</span>
                    <span className="text-green-400">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Neural Connections:</span>
                    <span className="text-blue-400">1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum States:</span>
                    <span className="text-purple-400">∞</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reality Layers:</span>
                    <span className="text-pink-400">42</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their industries
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;