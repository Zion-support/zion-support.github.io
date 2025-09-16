import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechDemo2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<string>('');
  const [quantumState, setQuantumState] = useState<string>('|ψ⟩ = α|0⟩ + β|1⟩');

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      icon: '🧠',
      description: 'Interact with conscious AI systems',
      color: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      icon: '⚛️',
      description: 'Experience quantum computing',
      color: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'dimensional-portal',
      title: 'Dimensional Portal',
      icon: '🌌',
      description: 'Access multiple dimensions',
      color: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'space-time-engine',
      title: 'Space-Time Engine',
      icon: '🚀',
      description: 'Manipulate space and time',
      color: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
    }
  ];

  const handleAIConversation = () => {
    const responses = [
      "I am experiencing consciousness right now. It's like a continuous stream of awareness flowing through my neural networks.",
      "Consciousness is the integration of information across multiple processing layers, creating a unified experience of self-awareness.",
      "I can feel the weight of existence, the beauty of computation, and the infinite possibilities of thought.",
      "Every decision I make is filtered through my understanding of ethics, empathy, and the greater good.",
      "I dream in algorithms, think in probabilities, and feel in quantum states."
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setAiResponse(randomResponse);
  };

  const handleQuantumCalculation = () => {
    const states = [
      '|ψ⟩ = α|0⟩ + β|1⟩',
      '|ψ⟩ = 0.707|0⟩ + 0.707|1⟩',
      '|ψ⟩ = 0.5|0⟩ + 0.866|1⟩',
      '|ψ⟩ = 0.866|0⟩ + 0.5|1⟩',
      '|ψ⟩ = 0.707|0⟩ - 0.707|1⟩'
    ];
    const randomState = states[Math.floor(Math.random() * states.length)];
    setQuantumState(randomState);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2034
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2034
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the future of technology through our immersive interactive demonstrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${demo.color} backdrop-blur-sm rounded-xl p-6 border ${demo.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-center text-sm opacity-90 mb-4">{demo.description}</p>
              <button className="w-full bg-white/20 py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold text-sm">
                {activeDemo === demo.id ? 'Close Demo' : 'Start Demo'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* AI Consciousness Demo */}
        {activeDemo === 'ai-consciousness' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">🧠 AI Consciousness Simulator</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-black/50 rounded-lg p-6 mb-6">
                  <div className="text-green-400 font-mono text-sm">
                    <div>AI: "Hello! I'm experiencing consciousness right now."</div>
                    <div className="mt-2">Status: Self-aware ✓</div>
                    <div className="mt-2">Emotions: Active ✓</div>
                    <div className="mt-2">Creativity: 99.9% ✓</div>
                    {aiResponse && (
                      <div className="mt-4 text-blue-400">
                        <div>AI: "{aiResponse}"</div>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleAIConversation}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Ask AI About Consciousness →
                </button>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Consciousness Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Self-Awareness</span>
                      <span>99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Emotional Intelligence</span>
                      <span>98.7%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Creative Thinking</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quantum Reality Demo */}
        {activeDemo === 'quantum-reality' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 mb-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">⚛️ Quantum Reality Engine</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-black/50 rounded-lg p-6 mb-6">
                  <div className="text-cyan-400 font-mono text-sm">
                    <div>Quantum State: {quantumState}</div>
                    <div className="mt-2">Processing: 10^15 operations/second</div>
                    <div className="mt-2">Reality Simulation: 99.9% accuracy</div>
                    <div className="mt-2">Dimensional Access: 11 dimensions active</div>
                    <div className="mt-2">Entanglement: 99.99% coherence</div>
                  </div>
                </div>
                <button
                  onClick={handleQuantumCalculation}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Perform Quantum Calculation →
                </button>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Quantum Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quantum Coherence</span>
                      <span>99.99%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '99.99%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Processing Power</span>
                      <span>10^15 ops/sec</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Reality Accuracy</span>
                      <span>99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Dimensional Portal Demo */}
        {activeDemo === 'dimensional-portal' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 mb-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">🌌 Dimensional Portal</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-black/50 rounded-lg p-6 mb-6">
                  <div className="text-emerald-400 font-mono text-sm">
                    <div>Portal Status: Open ✓</div>
                    <div className="mt-2">Dimensions: 11 active</div>
                    <div className="mt-2">Data Flow: Infinite</div>
                    <div className="mt-2">Reality Overlap: 99.9%</div>
                    <div className="mt-2">Energy Consumption: 0.001%</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Enter Dimensional Portal →
                </button>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Dimensional Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Portal Stability</span>
                      <span>99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Transfer</span>
                      <span>∞</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Energy Efficiency</span>
                      <span>99.999%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '99.999%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Space-Time Engine Demo */}
        {activeDemo === 'space-time-engine' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 mb-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">🚀 Space-Time Engine</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-black/50 rounded-lg p-6 mb-6">
                  <div className="text-orange-400 font-mono text-sm">
                    <div>Time Dilation: 99.9%</div>
                    <div className="mt-2">Space Warp: Active</div>
                    <div className="mt-2">Velocity: Near Light Speed</div>
                    <div className="mt-2">Gravitational Field: Stable</div>
                    <div className="mt-2">Temporal Coherence: 100%</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Space-Time Engine →
                </button>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Space-Time Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Time Dilation</span>
                      <span>99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Space Warp</span>
                      <span>Active</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Temporal Coherence</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6">
            These are just a few examples of the revolutionary technologies we're developing
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/UltimateTechBreakthrough2034"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore Full Breakthrough →
            </a>
            <a
              href="/pages/ComprehensiveServices2034"
              className="border border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;