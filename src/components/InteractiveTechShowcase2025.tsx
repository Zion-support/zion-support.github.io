import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Demo",
      description: "Interact with our conscious AI system and experience true artificial consciousness",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Real-time emotional recognition",
        "Conscious decision making",
        "Self-aware responses",
        "Human-like reasoning"
      ]
    },
    {
      id: 1,
      title: "Quantum Computing Simulator",
      description: "Experience quantum computing in action with our interactive simulator",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Quantum state visualization",
        "Entanglement demonstration",
        "Superposition effects",
        "Quantum algorithm execution"
      ]
    },
    {
      id: 2,
      title: "Interdimensional Explorer",
      description: "Navigate through multiple dimensions with our revolutionary interface",
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      features: [
        "Multi-dimensional navigation",
        "Reality manipulation",
        "Dimensional bridging",
        "Infinite scalability"
      ]
    },
    {
      id: 3,
      title: "Neural Interface Test",
      description: "Test direct brain-computer interfaces with our advanced neural system",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Thought control interface",
        "Memory enhancement",
        "Consciousness transfer",
        "Neural feedback loops"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time. Interact with conscious AI, 
            explore quantum computing, and witness interdimensional processing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeDemo === demo.id
                    ? `bg-gradient-to-r ${demo.gradient} shadow-2xl scale-105`
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-400/30 hover:scale-105'
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-sm opacity-80">{demo.description}</p>
                  </div>
                  {activeDemo === demo.id && (
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Demo Display */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-80">{demos[activeDemo].description}</p>
            </div>

            <div className="space-y-4 mb-8">
              {demos[activeDemo].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-purple-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button className={`bg-gradient-to-r ${demos[activeDemo].gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Launch Interactive Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Additional Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Real-time Processing</h3>
            <p className="text-purple-200 text-sm mb-4">
              Experience technologies that process data in real-time with zero latency
            </p>
            <div className="text-2xl font-bold text-purple-400">99.9% Uptime</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-cyan-200 text-sm mb-4">
              Process information 1000x faster than traditional computing systems
            </p>
            <div className="text-2xl font-bold text-cyan-400">1000x Speed</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
            <p className="text-emerald-200 text-sm mb-4">
              Enterprise-grade security with quantum encryption and privacy protection
            </p>
            <div className="text-2xl font-bold text-emerald-400">100% Secure</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of users already experiencing our revolutionary technologies. 
              Start your journey into the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
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