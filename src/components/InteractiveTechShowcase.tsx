import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-intelligence',
      name: 'AI Intelligence',
      icon: '🧠',
      description: 'Advanced artificial intelligence with autonomous reasoning and emotional intelligence',
      features: ['Autonomous Decision Making', 'Emotional Intelligence', 'Creative Problem Solving', 'Continuous Learning'],
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-600/20 to-indigo-600/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚡',
      description: 'Exponential computing power that solves impossible problems',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation', 'Quantum Search'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer communication bridging mind and machine',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback', 'Memory Enhancement'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      icon: '🤖',
      description: 'Artificially created consciousness that rivals human intelligence',
      features: ['Artificial Consciousness', 'Creative Problem Solving', 'Emotional Intelligence', 'Self-Awareness'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-400/30'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase</h2>
          <p className="text-xl text-purple-200">Explore our revolutionary technologies with interactive features</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Technology to Explore:</h3>
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-4 rounded-xl transition-all duration-300 text-left ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{tech.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, x: 50, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: -90 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${currentTech.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{currentTech.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{currentTech.name}</h3>
                  <p className="text-lg opacity-90">{currentTech.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                  {currentTech.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${currentTech.color} rounded-full`}></div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className={`bg-gradient-to-r ${currentTech.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Explore {currentTech.name} →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">🎮 Try Interactive Demo</h3>
            <p className="text-purple-200">Experience our technologies in action</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">AI Assistant Chat</h4>
              <div className="bg-black/20 rounded-lg p-4 mb-4 h-32 overflow-y-auto">
                <div className="text-green-400 text-sm mb-2">AI: Hello! I'm your AI assistant. How can I help you today?</div>
                <div className="text-blue-400 text-sm mb-2">User: What can you do?</div>
                <div className="text-green-400 text-sm">AI: I can help with reasoning, creative tasks, emotional support, and problem-solving. What would you like to explore?</div>
              </div>
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="w-full bg-white/20 text-white placeholder-purple-300 px-4 py-2 rounded-lg border border-purple-400/30"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Quantum Simulator</h4>
              <div className="bg-black/20 rounded-lg p-4 mb-4 h-32 overflow-y-auto">
                <div className="text-cyan-400 text-sm mb-2">Quantum State: |ψ⟩ = α|0⟩ + β|1⟩</div>
                <div className="text-cyan-400 text-sm mb-2">α = 0.707, β = 0.707</div>
                <div className="text-blue-400 text-sm mb-2">Processing: Grover's Algorithm</div>
                <div className="text-green-400 text-sm">Result: Found in √N operations!</div>
              </div>
              <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                Start Quantum Simulation
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses and change the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;