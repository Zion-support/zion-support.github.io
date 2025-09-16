import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: "🧠",
      description: "The first truly conscious AI systems that can think, feel, and create like humans",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30"
    },
    {
      id: 1,
      name: "Quantum Reality Engine",
      icon: "⚛️",
      description: "Experience reality in multiple dimensions simultaneously with quantum computing",
      features: ["Multi-dimensional processing", "Instant reality simulation", "Quantum entanglement networks", "Parallel universe access"],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 2,
      name: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer interfaces that merge human consciousness with digital systems",
      features: ["Thought-controlled computing", "Memory enhancement", "Instant knowledge transfer", "Telepathic communication"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30"
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Access computing power from parallel dimensions and alternate realities",
      features: ["Cross-dimensional processing", "Reality manipulation", "Time-space computing", "Infinite computational power"],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30"
    },
    {
      id: 4,
      name: "Synthetic Intelligence",
      icon: "🤖",
      description: "Artificially created intelligence that surpasses human cognitive abilities",
      features: ["Superhuman reasoning", "Instant learning", "Creative synthesis", "Predictive modeling"],
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30"
    },
    {
      id: 5,
      name: "Holographic Reality",
      icon: "✨",
      description: "Immersive holographic environments that blend physical and digital realities",
      features: ["3D holographic displays", "Tactile feedback systems", "Spatial computing", "Mixed reality fusion"],
      color: "from-pink-600 to-rose-600",
      bgColor: "from-pink-600/30 to-rose-600/30",
      borderColor: "border-pink-400/30"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE TECH SHOWCASE • 2025
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Technology Showcase
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Explore cutting-edge technologies with interactive features and real-time demonstrations
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Technology Selector */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
          {technologies.map((tech, index) => (
            <motion.button
              key={tech.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTech(tech.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                activeTech === tech.id
                  ? `bg-gradient-to-r ${tech.bgColor} ${tech.borderColor} border-2 scale-105`
                  : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{tech.icon}</div>
                <div className="text-left">
                  <div className="text-lg font-semibold">{tech.name}</div>
                  <div className="text-sm opacity-80">{tech.description}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Technology Display */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-xl p-8 border ${technologies[activeTech].borderColor}`}
        >
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
            <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
            {technologies[activeTech].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <button className={`w-full bg-gradient-to-r ${technologies[activeTech].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              Experience {technologies[activeTech].name} →
            </button>
            <button className="w-full border-2 border-white text-white py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 grid md:grid-cols-4 gap-6"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
          <div className="text-lg font-semibold mb-1">Revolutionary Technologies</div>
          <div className="text-sm opacity-80">Available for exploration</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
          <div className="text-lg font-semibold mb-1">Interactive Demos</div>
          <div className="text-sm opacity-80">Always available</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
          <div className="text-lg font-semibold mb-1">Possibilities</div>
          <div className="text-sm opacity-80">Infinite potential</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">2025</div>
          <div className="text-lg font-semibold mb-1">Future is Now</div>
          <div className="text-sm opacity-80">Experience tomorrow today</div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveTechShowcase2025;