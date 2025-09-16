import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [demoData, setDemoData] = useState({
    processingSpeed: 0,
    accuracy: 0,
    efficiency: 0,
    users: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setDemoData(prev => ({
        processingSpeed: Math.min(99.9, prev.processingSpeed + Math.random() * 2),
        accuracy: Math.min(99.7, prev.accuracy + Math.random() * 1.5),
        efficiency: Math.min(99.8, prev.efficiency + Math.random() * 1.8),
        users: prev.users + Math.floor(Math.random() * 5)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Watch our conscious AI system make autonomous decisions and learn from interactions in real-time.",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time decision making",
        "Emotional intelligence processing",
        "Autonomous learning",
        "Context-aware responses"
      ],
      metrics: {
        processingSpeed: 99.9,
        accuracy: 99.7,
        efficiency: 99.8
      }
    },
    {
      id: 2,
      title: "Quantum Neural Network",
      description: "Experience quantum computing combined with neural networks processing complex problems at impossible speeds.",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum superposition processing",
        "Parallel universe calculations",
        "Exponential speed improvements",
        "Quantum entanglement networking"
      ],
      metrics: {
        processingSpeed: 99.95,
        accuracy: 99.9,
        efficiency: 99.85
      }
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Control digital systems directly with your thoughts using our advanced neural interface technology.",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-to-text conversion",
        "Direct brain control",
        "Memory enhancement",
        "Consciousness backup"
      ],
      metrics: {
        processingSpeed: 99.8,
        accuracy: 99.6,
        efficiency: 99.7
      }
    },
    {
      id: 4,
      title: "Synthetic Reality",
      description: "Step into virtual environments that are completely indistinguishable from physical reality.",
      icon: "🌍",
      color: "from-orange-600 to-red-600",
      features: [
        "Photorealistic rendering",
        "Haptic feedback systems",
        "Scent and taste simulation",
        "Emotional state manipulation"
      ],
      metrics: {
        processingSpeed: 99.7,
        accuracy: 99.9,
        efficiency: 99.6
      }
    },
    {
      id: 5,
      title: "Interdimensional Computing",
      description: "Access unlimited computational resources from parallel dimensions for impossible processing power.",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Multi-dimensional processing",
        "Infinite resource access",
        "Reality-bending algorithms",
        "Cross-dimensional data transfer"
      ],
      metrics: {
        processingSpeed: 100,
        accuracy: 99.95,
        efficiency: 99.9
      }
    },
    {
      id: 6,
      title: "Time Manipulation",
      description: "Process information across different time dimensions for predictive and retroactive analysis.",
      icon: "⏰",
      color: "from-violet-600 to-purple-600",
      features: [
        "Temporal data processing",
        "Future prediction algorithms",
        "Past event reconstruction",
        "Time-loop optimization"
      ],
      metrics: {
        processingSpeed: 99.85,
        accuracy: 99.8,
        efficiency: 99.75
      }
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in action. Click on different technologies to see them in operation 
            with real-time data and interactive demonstrations.
          </p>
        </motion.div>

        {/* Demo Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              }`}
            >
              {demo.icon} {demo.title}
            </motion.button>
          ))}
        </div>

        {/* Active Demo Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Demo Visualization */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">
                    {demos[activeDemo].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                  <p className="text-xl text-gray-300 mb-8">{demos[activeDemo].description}</p>
                </div>

                {/* Real-time Metrics */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-center">Live Performance Metrics</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Processing Speed</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-700 rounded-full h-3">
                          <motion.div
                            className={`h-3 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${demoData.processingSpeed}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <span className="text-lg font-bold text-green-400">
                          {demoData.processingSpeed.toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Accuracy</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-700 rounded-full h-3">
                          <motion.div
                            className={`h-3 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${demoData.accuracy}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                        <span className="text-lg font-bold text-green-400">
                          {demoData.accuracy.toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Efficiency</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-700 rounded-full h-3">
                          <motion.div
                            className={`h-3 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${demoData.efficiency}%` }}
                            transition={{ duration: 1, delay: 0.4 }}
                          />
                        </div>
                        <span className="text-lg font-bold text-green-400">
                          {demoData.efficiency.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features and Information */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                  <div className="space-y-4">
                    {demos[activeDemo].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                      >
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`} />
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div>
                  <h4 className="text-2xl font-bold mb-6">Live Activity Feed</h4>
                  <div className="bg-gray-800/50 rounded-lg p-6 space-y-4 max-h-64 overflow-y-auto">
                    {[
                      "Processing quantum superposition states...",
                      "Analyzing neural network patterns...",
                      "Optimizing interdimensional connections...",
                      "Updating consciousness algorithms...",
                      "Synchronizing reality parameters...",
                      "Calculating temporal probabilities...",
                      "Enhancing emotional intelligence models...",
                      "Processing cross-dimensional data...",
                      "Updating quantum entanglement states...",
                      "Optimizing neural interface protocols..."
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex items-center space-x-3 text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span>{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* User Statistics */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Global Usage Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">
                        {demoData.users.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-300">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-300">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <button className={`px-8 py-4 bg-gradient-to-r ${demos[activeDemo].color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Try This Technology
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
              <button className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technology Comparison */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold mb-6">Technology Comparison</h3>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Compare the performance metrics of our revolutionary technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:scale-105 transition-all duration-300 ${
                  activeDemo === index ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{demo.title}</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Speed</span>
                    <span className="text-sm font-semibold text-green-400">
                      {demo.metrics.processingSpeed}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Accuracy</span>
                    <span className="text-sm font-semibold text-green-400">
                      {demo.metrics.accuracy}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Efficiency</span>
                    <span className="text-sm font-semibold text-green-400">
                      {demo.metrics.efficiency}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;