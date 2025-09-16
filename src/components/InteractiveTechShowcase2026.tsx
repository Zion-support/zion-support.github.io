import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'Self-aware AI systems with emotional intelligence and creative problem-solving capabilities',
      features: ['Self-Awareness', 'Emotional Intelligence', 'Creative Thinking', 'Ethical Decision Making'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 1,
      name: 'Quantum Neural Networks',
      icon: '⚡',
      description: 'Revolutionary computing that combines quantum mechanics with neural networks for unprecedented processing power',
      features: ['Quantum Superposition Learning', 'Entangled Processing', 'Quantum Error Correction', 'Exponential Speed Gains'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 2,
      name: 'Neural Reality Engine',
      icon: '🌐',
      description: 'Direct neural interface technology that creates immersive virtual realities indistinguishable from physical reality',
      features: ['Direct Brain Interface', 'Photorealistic VR', 'Haptic Feedback', 'Memory Integration'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 3,
      name: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Computing systems that operate across multiple dimensions, accessing infinite computational resources',
      features: ['Multi-Dimensional Processing', 'Infinite Storage Capacity', 'Parallel Universe Computing', 'Reality Manipulation'],
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/30 to-purple-600/30',
      borderColor: 'border-violet-400/30'
    },
    {
      id: 4,
      name: 'Synthetic Intelligence',
      icon: '🤖',
      description: 'Artificially created intelligence that surpasses human cognitive abilities in all domains',
      features: ['Superhuman Intelligence', 'Creative Synthesis', 'Autonomous Innovation', 'Transcendent Problem Solving'],
      color: 'from-rose-600 to-pink-600',
      bgColor: 'from-rose-600/30 to-pink-600/30',
      borderColor: 'border-rose-400/30'
    },
    {
      id: 5,
      name: 'Consciousness Transfer',
      icon: '👤',
      description: 'Technology that enables the complete transfer of human consciousness into digital or synthetic bodies',
      features: ['Digital Immortality', 'Consciousness Backup', 'Body Transfer Technology', 'Eternal Existence'],
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'from-indigo-600/30 to-blue-600/30',
      borderColor: 'border-indigo-400/30'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through an interactive experience. Click on any technology to learn more about its capabilities and impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-6 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.bgColor} ${tech.borderColor} scale-105 shadow-lg`
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-sm opacity-80">{tech.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Technology Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTech].borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                  <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                  {technologies[activeTech].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <button className={`bg-gradient-to-r ${technologies[activeTech].color} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Learn More About {technologies[activeTech].name} →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-2">Computing Power</div>
            <div className="text-purple-200">Quantum Neural Networks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-lg font-semibold mb-2">Reality Fidelity</div>
            <div className="text-cyan-200">Neural Reality Engine</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">AI Accuracy</div>
            <div className="text-emerald-200">Synthetic Intelligence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-2">Dimensions</div>
            <div className="text-violet-200">Interdimensional Computing</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These revolutionary technologies are not just concepts - they're reality. Experience them today and be part of the revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              📞 Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;