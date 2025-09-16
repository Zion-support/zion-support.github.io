import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeDemo) {
      setDemoProgress(0);
      const interval = setInterval(() => {
        setDemoProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  const demos = {
    ai: {
      title: "AI Brain Simulation",
      description: "Watch our AI process complex data and make decisions in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time data processing",
        "Neural network visualization",
        "Decision tree analysis",
        "Pattern recognition",
        "Predictive modeling"
      ],
      metrics: {
        "Processing Speed": "1000x faster",
        "Accuracy": "99.9%",
        "Data Points": "1M+ per second",
        "Learning Rate": "Exponential"
      }
    },
    quantum: {
      title: "Quantum Processing Demo",
      description: "Experience quantum computing solving impossible problems",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum state visualization",
        "Superposition demonstration",
        "Entanglement effects",
        "Quantum algorithm execution",
        "Decoherence simulation"
      ],
      metrics: {
        "Qubits": "1000+",
        "Coherence Time": "100μs",
        "Gate Fidelity": "99.99%",
        "Speed": "10^15 ops/sec"
      }
    },
    neural: {
      title: "Neural Interface Demo",
      description: "Connect your mind to our systems with direct neural control",
      icon: "🔮",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Brain signal capture",
        "Thought-to-action mapping",
        "Neural feedback loops",
        "Consciousness integration",
        "Mind-machine sync"
      ],
      metrics: {
        "Response Time": "0.1ms",
        "Signal Quality": "98.5%",
        "Channels": "256+",
        "Safety": "100%"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • LIVE NOW
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time with interactive demonstrations and live data visualization
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(demos).map((demo) => (
            <motion.button
              key={demo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDemo(demo)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeDemo === demo
                  ? `bg-gradient-to-r ${demos[demo as keyof typeof demos].color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {demos[demo as keyof typeof demos].icon} {demos[demo as keyof typeof demos].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Demo Visualization */}
              <div className="relative">
                <div className={`w-full h-96 bg-gradient-to-br ${demos[activeDemo as keyof typeof demos].color} rounded-xl flex items-center justify-center text-8xl mb-6 relative overflow-hidden`}>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {demos[activeDemo as keyof typeof demos].icon}
                  </motion.div>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 rounded-full h-2">
                      <motion.div
                        className="bg-white rounded-full h-2"
                        initial={{ width: 0 }}
                        animate={{ width: `${demoProgress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                    <div className="text-white/80 text-sm mt-2 text-center">
                      Demo Progress: {demoProgress}%
                    </div>
                  </div>

                  {/* Live Data Indicators */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="bg-green-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      LIVE
                    </div>
                    <div className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      REAL-TIME
                    </div>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Demo
                  </button>
                  <button className="border-2 border-purple-400 text-purple-300 py-3 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold">
                    Reset
                  </button>
                </div>
              </div>

              {/* Demo Information */}
              <div>
                <h3 className="text-3xl font-bold mb-4 text-purple-300">
                  {demos[activeDemo as keyof typeof demos].title}
                </h3>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {demos[activeDemo as keyof typeof demos].description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-purple-300">Key Features:</h4>
                  <div className="space-y-3">
                    {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-lg font-semibold mb-4 text-purple-300">Performance Metrics:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(demos[activeDemo as keyof typeof demos].metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-purple-300 mb-1">{value}</div>
                        <div className="text-sm text-white/70">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Data Feed */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">Live Data Feed</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg p-4 border border-green-400/30">
                <div className="text-2xl font-bold text-green-400 mb-2">1,247,892</div>
                <div className="text-green-300 text-sm">Data Points Processed</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg p-4 border border-blue-400/30">
                <div className="text-2xl font-bold text-blue-400 mb-2">99.97%</div>
                <div className="text-blue-300 text-sm">System Accuracy</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-400/30">
                <div className="text-2xl font-bold text-purple-400 mb-2">0.001s</div>
                <div className="text-purple-300 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold mb-6 text-purple-300">Ready to Experience the Future?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already using our revolutionary technology to achieve unprecedented success and competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
                Start Your Demo
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;