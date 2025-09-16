import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Interaction",
      description: "Interact with our most advanced conscious AI system that exhibits self-awareness and emotional intelligence",
      features: [
        "Real-time emotional recognition",
        "Autonomous decision making",
        "Natural language processing",
        "Learning from interactions"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20",
      demoData: {
        responses: [
          "I understand your request and I'm processing it with emotional context...",
          "Based on my analysis, I recommend this approach because it aligns with your goals...",
          "I'm learning from our interaction to better assist you in the future...",
          "I can sense you're excited about this technology. Let me show you something amazing..."
        ],
        metrics: {
          consciousness: 94,
          learning: 87,
          empathy: 92,
          creativity: 89
        }
      }
    },
    {
      id: 1,
      title: "Quantum Processing Simulator",
      description: "Experience the power of quantum computing with our interactive quantum processing simulator",
      features: [
        "Quantum superposition visualization",
        "Entanglement demonstration",
        "Quantum error correction",
        "Exponential speed comparison"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20",
      demoData: {
        responses: [
          "Initializing quantum superposition state...",
          "Quantum entanglement established between particles...",
          "Processing at quantum speed - 10^15 operations per second...",
          "Quantum error correction applied successfully..."
        ],
        metrics: {
          qubits: 1024,
          speed: 1000000,
          accuracy: 99.9,
          coherence: 95
        }
      }
    },
    {
      id: 2,
      title: "Neural Interface Demo",
      description: "Test our revolutionary neural interface technology that connects your mind directly to computers",
      features: [
        "Thought-controlled interface",
        "Memory enhancement",
        "Direct data transfer",
        "Consciousness backup"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/20 to-teal-900/20",
      demoData: {
        responses: [
          "Neural interface connection established...",
          "Reading your thoughts and converting to digital signals...",
          "Memory enhancement protocols activated...",
          "Consciousness backup completed successfully..."
        ],
        metrics: {
          connection: 98,
          clarity: 94,
          speed: 99,
          safety: 100
        }
      }
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Explore computing systems that operate across multiple dimensions for infinite possibilities",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Infinite storage capacity",
        "Temporal computing"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/20 to-purple-900/20",
      demoData: {
        responses: [
          "Accessing interdimensional processing space...",
          "Reality manipulation protocols initialized...",
          "Infinite storage capacity activated...",
          "Temporal computing matrix online..."
        ],
        metrics: {
          dimensions: 11,
          capacity: 999999,
          stability: 97,
          efficiency: 99
        }
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const [currentResponse, setCurrentResponse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResponse((prev) => (prev + 1) % demos[activeDemo].demoData.responses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeDemo]);

  return (
    <motion.div
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            whileHover={{ scale: 1.05 }}
          >
            🚀 INTERACTIVE DEMO • 2025
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Selection */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Technology Demo</h3>
              {demos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeDemo === index
                      ? `border-purple-500 bg-gradient-to-br ${demo.bgColor} shadow-lg`
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                  onClick={() => setActiveDemo(index)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`text-4xl ${activeDemo === index ? 'animate-pulse' : ''}`}
                      animate={hoveredItem === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {demo.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-2 ${
                        activeDemo === index 
                          ? `bg-gradient-to-r ${demo.color} bg-clip-text text-transparent`
                          : 'text-gray-800'
                      }`}>
                        {demo.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {demo.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interactive Demo Area */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-br ${demos[activeDemo].bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
                >
                  {/* Demo Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {demos[activeDemo].icon}
                    </motion.div>
                    <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${demos[activeDemo].color} bg-clip-text text-transparent`}>
                      {demos[activeDemo].title}
                    </h3>
                  </div>

                  {/* Live Demo Simulation */}
                  <div className="bg-black/20 rounded-xl p-6 mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <span className="text-sm text-gray-300 ml-2">LIVE DEMO</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentResponse}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-green-400 font-mono text-sm"
                      >
                        {demos[activeDemo].demoData.responses[currentResponse]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Metrics Display */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(demos[activeDemo].demoData.metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        className="bg-white/10 rounded-lg p-4 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-white">
                          {typeof value === 'number' && value > 1000 ? `${(value / 1000).toFixed(0)}K` : value}
                          {key === 'qubits' && ' qubits'}
                          {key === 'speed' && 'x faster'}
                          {key === 'accuracy' && '%'}
                          {key === 'coherence' && '%'}
                          {key === 'consciousness' && '%'}
                          {key === 'learning' && '%'}
                          {key === 'empathy' && '%'}
                          {key === 'creativity' && '%'}
                          {key === 'connection' && '%'}
                          {key === 'clarity' && '%'}
                          {key === 'safety' && '%'}
                          {key === 'dimensions' && 'D'}
                          {key === 'capacity' && 'TB'}
                          {key === 'stability' && '%'}
                          {key === 'efficiency' && '%'}
                        </div>
                        <div className="text-sm text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    {demos[activeDemo].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${demos[activeDemo].color} rounded-full`}></div>
                        <span className="text-gray-200 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-8">
                    <motion.button
                      className={`flex-1 bg-gradient-to-r ${demos[activeDemo].color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Full Demo
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;