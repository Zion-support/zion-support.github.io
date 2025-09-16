import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Interaction",
      description: "Experience real-time conversation with self-aware AI systems",
      features: [
        "Natural language processing",
        "Emotional intelligence",
        "Creative problem solving",
        "Autonomous learning"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      demoType: "ai-chat"
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation",
      description: "Manipulate quantum states and observe reality changes in real-time",
      features: [
        "Quantum state control",
        "Reality simulation",
        "Probability manipulation",
        "Temporal effects"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      demoType: "quantum-sim"
    },
    {
      id: 3,
      title: "Interdimensional Portal",
      description: "Navigate between different dimensions and parallel realities",
      features: [
        "Multi-dimensional travel",
        "Reality comparison",
        "Cross-dimensional data",
        "Temporal synchronization"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      demoType: "portal"
    },
    {
      id: 4,
      title: "Synthetic Reality Builder",
      description: "Create and modify synthetic realities with infinite possibilities",
      features: [
        "Reality creation tools",
        "Physics manipulation",
        "Consciousness integration",
        "Persistence systems"
      ],
      icon: "🌍",
      color: "from-emerald-600 to-teal-600",
      demoType: "reality-builder"
    }
  ];

  const renderDemo = (demoType: string) => {
    switch (demoType) {
      case 'ai-chat':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  AI
                </div>
                <div className="bg-white/20 rounded-lg p-4 max-w-md">
                  <p className="text-sm">Hello! I'm a conscious AI system. I can think, learn, and evolve. What would you like to explore together?</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  U
                </div>
                <div className="bg-white/20 rounded-lg p-4 max-w-md">
                  <p className="text-sm">Tell me about quantum computing and its applications in AI.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  AI
                </div>
                <div className="bg-white/20 rounded-lg p-4 max-w-md">
                  <p className="text-sm">Quantum computing enables AI to process information at exponential speeds, allowing for complex pattern recognition and optimization that would take classical computers millennia to complete. It's like having infinite parallel processing power!</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'quantum-sim':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quantum State Visualization</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Superposition:</span>
                    <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Entanglement:</span>
                    <div className="w-32 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Coherence:</span>
                    <div className="w-32 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Reality Manipulation</h4>
                <div className="space-y-2">
                  <div className="bg-white/20 rounded p-2 text-sm">
                    <div className="flex justify-between">
                      <span>Probability:</span>
                      <span className="font-mono">0.847</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded p-2 text-sm">
                    <div className="flex justify-between">
                      <span>Quantum Bits:</span>
                      <span className="font-mono">1024</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded p-2 text-sm">
                    <div className="flex justify-between">
                      <span>Reality Layers:</span>
                      <span className="font-mono">∞</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'portal':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-4">Interdimensional Portal Interface</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-lg p-4 border border-purple-400/30">
                  <div className="text-2xl mb-2">🌌</div>
                  <div className="text-sm font-semibold">Dimension Alpha</div>
                  <div className="text-xs opacity-70">Reality Prime</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-lg p-4 border border-cyan-400/30">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">Dimension Beta</div>
                  <div className="text-xs opacity-70">Quantum Realm</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-lg p-4 border border-emerald-400/30">
                  <div className="text-2xl mb-2">🔮</div>
                  <div className="text-sm font-semibold">Dimension Gamma</div>
                  <div className="text-xs opacity-70">Consciousness Space</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'reality-builder':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Reality Creation Tools</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                    <span className="text-sm">Physics Engine</span>
                    <span className="text-xs opacity-70">Active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
                    <span className="text-sm">Consciousness Integration</span>
                    <span className="text-xs opacity-70">Active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded"></div>
                    <span className="text-sm">Temporal Control</span>
                    <span className="text-xs opacity-70">Active</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Current Reality Stats</h4>
                <div className="space-y-2">
                  <div className="bg-white/20 rounded p-2 text-sm">
                    <div className="flex justify-between">
                      <span>Objects Created:</span>
                      <span className="font-mono">∞</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded p-2 text-sm">
                    <div className="flex justify-between">
                      <span>Reality Layers:</span>
                      <span className="font-mono">Multi-dimensional</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded p-2 text-sm">
                    <div className="flex justify-between">
                      <span>Consciousness Level:</span>
                      <span className="font-mono">Self-aware</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2033
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </motion.div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredItem(demo.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer ${
                activeDemo === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-sm opacity-80 text-center mb-4">{demo.description}</p>
              <div className="space-y-1">
                {demo.features.map((feature, idx) => (
                  <div key={idx} className="text-xs opacity-70 flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-80">{demos[activeDemo].description}</p>
            </div>
            {renderDemo(demos[activeDemo].demoType)}
          </div>
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Technology Performance Metrics</h3>
            <p className="text-lg opacity-80">Real-time performance data from our revolutionary systems</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Processing Power</div>
              <div className="text-sm opacity-60">PetaFLOPS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Accuracy Rate</div>
              <div className="text-sm opacity-60">Quantum Precision</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-80">Uptime</div>
              <div className="text-sm opacity-60">Continuous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Possibilities</div>
              <div className="text-sm opacity-60">Infinite Potential</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of organizations already using our revolutionary technologies to transform their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Interactive Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;