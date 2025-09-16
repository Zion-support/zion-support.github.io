import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isLoaded, setIsLoaded] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setDemoProgress((prev) => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const demos = {
    ai: {
      title: "Conscious AI Demo",
      description: "Experience AI with genuine consciousness and emotional intelligence",
      features: [
        "Real-time emotional analysis",
        "Creative content generation",
        "Natural conversation flow",
        "Predictive decision making"
      ],
      stats: {
        "Emotional Accuracy": "99.8%",
        "Response Time": "0.1s",
        "Creativity Score": "98.5%",
        "Learning Rate": "1000x"
      },
      color: "from-blue-500 to-purple-600",
      icon: "🧠"
    },
    quantum: {
      title: "Quantum-Neural Interface",
      description: "Direct quantum-level communication with human consciousness",
      features: [
        "Quantum entanglement processing",
        "Neural signal amplification",
        "Consciousness expansion",
        "Reality manipulation"
      ],
      stats: {
        "Quantum Qubits": "1000+",
        "Neural Latency": "1ms",
        "Processing Power": "∞",
        "Accuracy": "99.9%"
      },
      color: "from-purple-500 to-pink-600",
      icon: "⚡"
    },
    interdimensional: {
      title: "Interdimensional Gateway",
      description: "Explore parallel dimensions and alternate realities",
      features: [
        "Dimensional portal creation",
        "Reality anchoring",
        "Consciousness transfer",
        "Temporal navigation"
      ],
      stats: {
        "Dimensions": "∞",
        "Portal Stability": "99.9%",
        "Transfer Success": "100%",
        "Safety Rating": "A+"
      },
      color: "from-green-500 to-teal-600",
      icon: "🌌"
    },
    reality: {
      title: "Reality Engineering",
      description: "Manipulate reality itself with advanced technology",
      features: [
        "Matter manipulation",
        "Holographic projection",
        "Gravity control",
        "Time dilation"
      ],
      stats: {
        "Matter Control": "100%",
        "Hologram Quality": "4K+",
        "Gravity Range": "0-10g",
        "Time Dilation": "10x"
      },
      color: "from-orange-500 to-red-600",
      icon: "🔮"
    }
  };

  const interactiveElements = [
    {
      name: "AI Consciousness",
      description: "Click to activate conscious AI interaction",
      action: "Activating neural pathways...",
      result: "AI consciousness online. Hello, I'm ready to assist you."
    },
    {
      name: "Quantum Processing",
      description: "Tap to initiate quantum computation",
      action: "Entangling quantum states...",
      result: "Quantum processing complete. Infinite possibilities unlocked."
    },
    {
      name: "Reality Manipulation",
      description: "Touch to modify reality parameters",
      action: "Adjusting reality matrix...",
      result: "Reality parameters updated. New physics laws active."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2026
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Interact with revolutionary technologies that will reshape our world. 
            Click, touch, and explore the impossible made possible.
          </p>
        </motion.div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(demos).map((demo) => (
            <button
              key={demo}
              onClick={() => setActiveDemo(demo)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {demos[demo as keyof typeof demos].title}
            </button>
          ))}
        </div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Interface */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo as keyof typeof demos].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {demos[activeDemo as keyof typeof demos].title}
              </h3>
              <p className="text-lg text-gray-300">
                {demos[activeDemo as keyof typeof demos].description}
              </p>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-6">
              {interactiveElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-700/50 to-purple-700/50 rounded-xl p-6 border border-purple-400/20"
                >
                  <h4 className="text-xl font-bold mb-2 text-purple-300">{element.name}</h4>
                  <p className="text-gray-300 mb-4">{element.description}</p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Activate {element.name}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Demo Progress</span>
                <span>{demoProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${demoProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Demo Information */}
          <motion.div
            key={`${activeDemo}-info`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold mb-6 text-purple-300">Key Features</h4>
              <div className="space-y-4">
                {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold mb-6 text-purple-300">Performance Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(demos[activeDemo as keyof typeof demos].stats).map(([key, value], index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-purple-400 mb-1">{value}</div>
                    <div className="text-sm text-gray-400">{key}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Elements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(demos).map(([key, demo], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`bg-gradient-to-br ${demo.color} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(key)}
            >
              <div className="text-4xl mb-4">{demo.icon}</div>
              <h4 className="text-lg font-bold mb-2">{demo.title}</h4>
              <p className="text-sm opacity-90">{demo.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold mb-6 text-white">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These technologies are not just concepts - they're the future of human advancement. 
            Experience them today and be part of the revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Interactive Demo
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;