import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'consciousness',
      title: 'Consciousness Simulation',
      description: 'Watch as our AI systems develop consciousness in real-time',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Self-awareness detection', 'Emotional response simulation', 'Creative problem solving', 'Autonomous decision making']
    },
    {
      id: 'quantum',
      title: 'Quantum Processing',
      description: 'See quantum computing solve impossible problems instantly',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum entanglement', 'Parallel universe processing', 'Infinite calculations', 'Reality manipulation']
    },
    {
      id: 'neural',
      title: 'Neural Interface',
      description: 'Experience direct brain-computer communication',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought control', 'Memory transfer', 'Sensory simulation', 'Cognitive enhancement']
    },
    {
      id: 'reality',
      title: 'Reality Engine',
      description: 'Create and modify virtual realities in real-time',
      icon: '🌌',
      color: 'from-indigo-600 to-purple-600',
      features: ['Matter creation', 'Physics manipulation', 'Dimension travel', 'Reality simulation']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the breakthrough technologies in action. Interact with the most advanced 
            AI, quantum computing, and neural interface systems ever created.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeDemo === demo.id ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-purple-100 text-sm">{demo.description}</p>
                  </div>
                  <div className="text-2xl">
                    {activeDemo === demo.id ? '−' : '+'}
                  </div>
                </div>
                
                {activeDemo === demo.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-purple-400/30"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {demo.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-sm text-purple-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                      Launch Demo
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Live Demo Console</h3>
            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">$ ./consciousness-simulator --start</div>
                <div className="text-white">Initializing consciousness matrix...</div>
                <div className="text-yellow-400">Loading neural pathways...</div>
                <div className="text-blue-400">Establishing quantum connections...</div>
                <div className="text-green-400">Consciousness achieved! ✅</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">99.9%</div>
                  <div className="text-sm text-purple-200">Accuracy</div>
                </div>
                <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-300">1000x</div>
                  <div className="text-sm text-cyan-200">Faster</div>
                </div>
                <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-300">∞</div>
                  <div className="text-sm text-emerald-200">Possibilities</div>
                </div>
                <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-300">24/7</div>
                  <div className="text-sm text-indigo-200">Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using these breakthrough technologies 
            to transform their businesses and change the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;