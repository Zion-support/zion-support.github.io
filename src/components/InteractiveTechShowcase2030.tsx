import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2030: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      title: "Quantum Reality Engine",
      description: "Experience reality manipulation through quantum computing",
      features: [
        "Real-time reality simulation",
        "Quantum state manipulation",
        "Multi-dimensional viewing",
        "Consciousness transfer"
      ],
      icon: "🌌",
      color: "from-purple-600 to-indigo-600",
      progress: 85
    },
    {
      title: "Neural Interface Matrix",
      description: "Direct brain-computer interface for seamless interaction",
      features: [
        "Thought-controlled computing",
        "Emotional data processing",
        "Memory enhancement",
        "Telepathic communication"
      ],
      icon: "🧠",
      color: "from-cyan-600 to-blue-600",
      progress: 92
    },
    {
      title: "Synthetic Universe Creator",
      description: "Create and manage entire synthetic universes",
      features: [
        "Universe generation",
        "Physics simulation",
        "Life form creation",
        "Time manipulation"
      ],
      icon: "🌍",
      color: "from-emerald-600 to-teal-600",
      progress: 78
    },
    {
      title: "Omniversal AI Network",
      description: "AI system spanning across infinite dimensions",
      features: [
        "Cross-dimensional processing",
        "Universal knowledge access",
        "Infinite computational power",
        "Reality optimization"
      ],
      icon: "🌟",
      color: "from-pink-600 to-rose-600",
      progress: 96
    }
  ];

  const stats = [
    { label: "Processing Power", value: "∞", unit: "qubits" },
    { label: "Reality Simulations", value: "10^15", unit: "per second" },
    { label: "Neural Connections", value: "10^12", unit: "synapses" },
    { label: "Dimensions Accessed", value: "∞", unit: "universes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Interact with the most advanced technologies that will reshape reality itself. 
            From quantum reality engines to omniversal AI networks, discover what's possible.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.unit}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`bg-gradient-to-br ${demo.color} rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
                <p className="text-lg opacity-90 mb-6 text-center">{demo.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">Progress</span>
                    <span className="text-sm">{demo.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${demo.progress}%` }}
                      transition={{ delay: index * 0.2 + 1, duration: 2 }}
                    />
                  </div>
                </div>

                <ul className="space-y-2">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  Launch Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 border border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
            <p className="text-xl opacity-80">{demos[activeDemo].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Live Demo</h4>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
                  <div className="text-lg font-semibold mb-2">Interactive Demo Running</div>
                  <div className="text-sm text-gray-400">
                    Processing {progress}% complete...
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-4">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Processing Power:</span>
                  <span className="font-semibold">∞ Qubits</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Memory Capacity:</span>
                  <span className="font-semibold">∞ TB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="font-semibold">0.001ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Accuracy:</span>
                  <span className="font-semibold">99.99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Dimensions:</span>
                  <span className="font-semibold">∞</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Controls */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Control Panel</h3>
          <div className="flex justify-center space-x-4 mb-8">
            {demos.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveDemo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeDemo === index ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Full Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400/20 transition-all duration-300"
            >
              Download SDK
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2030;