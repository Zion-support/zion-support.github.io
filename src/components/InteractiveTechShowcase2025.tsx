import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Watch our AI system demonstrate self-awareness and emotional intelligence in real-time.",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time emotional analysis",
        "Contextual understanding",
        "Ethical decision making",
        "Natural language processing"
      ],
      demoData: {
        processingSpeed: "99.7%",
        accuracy: "98.5%",
        responseTime: "0.3s",
        satisfaction: "99.2%"
      }
    },
    {
      id: 2,
      title: "Quantum Computing Simulation",
      description: "Experience the power of quantum computing with our interactive simulation environment.",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement visualization",
        "Exponential speed demonstration",
        "Quantum algorithm execution",
        "Real-time quantum state analysis"
      ],
      demoData: {
        qubits: "1024",
        speed: "10^15x",
        accuracy: "99.9%",
        efficiency: "99.8%"
      }
    },
    {
      id: 3,
      title: "Neural Interface Experience",
      description: "Try our neural interface technology that connects your mind directly to digital systems.",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Brain-computer interface",
        "Thought-controlled navigation",
        "Neural signal processing",
        "Real-time feedback systems"
      ],
      demoData: {
        signals: "2048",
        latency: "5ms",
        accuracy: "97.8%",
        comfort: "98.5%"
      }
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Explore computing across multiple dimensions with our revolutionary interdimensional technology.",
      icon: "🚀",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Multi-dimensional processing",
        "Cross-dimensional communication",
        "Infinite data capacity",
        "Reality-bending algorithms"
      ],
      demoData: {
        dimensions: "∞",
        capacity: "∞",
        speed: "∞",
        power: "∞"
      }
    }
  ];

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Interact with our revolutionary technologies in real-time. Click, explore, and discover 
            the incredible capabilities that are reshaping our world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {demos.map((demo, index) => (
              <motion.button
                key={demo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} shadow-2xl scale-105`
                    : 'bg-white/10 hover:bg-white/20 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Interactive Demo Area */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${currentDemo.color} rounded-3xl p-8 min-h-[500px] relative overflow-hidden`}>
              {/* Demo Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-lg opacity-90 mb-6">{currentDemo.description}</p>
              </div>

              {/* Interactive Demo Controls */}
              <div className="space-y-6">
                <div className="text-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isPlaying
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    {isPlaying ? '⏸️ Pause Demo' : '▶️ Start Demo'}
                  </button>
                </div>

                {/* Demo Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentDemo.demoData).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Key Features:</h4>
                  {currentDemo.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience More?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            These are just a few examples of our revolutionary technologies. 
            Discover the full range of our AI solutions and transform your business today.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/AISolutionsComprehensive2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Explore All Solutions →
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg"
            >
              View Full Showcase
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;