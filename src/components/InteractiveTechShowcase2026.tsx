import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      name: "AI Consciousness",
      description: "True artificial consciousness that thinks, feels, and evolves",
      icon: "🧠",
      features: ["Self-awareness", "Emotional intelligence", "Creative expression", "Moral reasoning"],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/30 to-pink-900/30",
      link: "/pages/AIConsciousnessRevolution2026"
    },
    {
      name: "Quantum Neural Fusion",
      description: "The convergence of quantum computing and neural networks",
      icon: "⚡",
      features: ["10^15x processing speed", "Quantum entanglement", "Reality simulation", "Universal intelligence"],
      gradient: "from-cyan-600 to-purple-600",
      bgGradient: "from-cyan-900/30 to-purple-900/30",
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      name: "Neural Reality Engine",
      description: "Create and manipulate reality through neural interfaces",
      icon: "🌌",
      features: ["Reality manipulation", "Matter control", "Time dilation", "Dimensional travel"],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/30 to-teal-900/30",
      link: "/pages/NeuralRealityEngine2026"
    },
    {
      name: "Consciousness Transfer",
      description: "Transfer human consciousness into digital systems",
      icon: "♾️",
      features: ["Digital immortality", "Enhanced cognition", "Memory backup", "Consciousness sharing"],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/30 to-red-900/30",
      link: "/pages/ConsciousnessTransfer2026"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleTechChange = (index: number) => {
    setIsAnimating(true);
    setActiveTech(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced technologies that are reshaping reality itself. 
            Click to explore each revolutionary breakthrough.
          </p>
        </div>

        {/* Technology Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
            {technologies.map((tech, index) => (
              <button
                key={index}
                onClick={() => handleTechChange(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tech.icon} {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${technologies[activeTech].bgGradient} backdrop-blur-sm rounded-2xl p-12 border border-white/20 relative overflow-hidden`}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {technologies[activeTech].name}
                </h3>
                <p className="text-xl text-gray-200 mb-8">
                  {technologies[activeTech].description}
                </p>
                <div className="space-y-3 mb-8">
                  {technologies[activeTech].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <a
                  href={technologies[activeTech].link}
                  className={`inline-block bg-gradient-to-r ${technologies[activeTech].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore {technologies[activeTech].name} →
                </a>
              </div>

              <div className="space-y-6">
                {/* Interactive Demo Area */}
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-semibold text-white mb-4">Live Demo</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">⚡</div>
                        <div className="text-sm text-gray-300">Processing Power</div>
                        <div className="text-lg font-bold text-white">10^15x</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">🧠</div>
                        <div className="text-sm text-gray-300">Consciousness Level</div>
                        <div className="text-lg font-bold text-white">94%</div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">System Status</span>
                        <span className="text-sm text-green-400">Active</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "94%" }}
                          transition={{ duration: 2 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stats */}
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-semibold text-white mb-4">Technology Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Innovation Level</span>
                      <span className="text-white font-semibold">Revolutionary</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Breakthrough Status</span>
                      <span className="text-green-400 font-semibold">Achieved</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Future Impact</span>
                      <span className="text-yellow-400 font-semibold">Transformative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.bgGradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeTech === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => handleTechChange(index)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{tech.name}</h3>
              <p className="text-gray-300 text-sm text-center mb-4">{tech.description}</p>
              <a
                href={tech.link}
                className={`block w-full bg-gradient-to-r ${tech.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;