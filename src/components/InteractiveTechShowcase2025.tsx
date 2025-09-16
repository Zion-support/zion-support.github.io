import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setDemoProgress((prev) => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const demos = {
    ai: {
      title: "AI Assistant Demo",
      description: "Experience our advanced AI assistant with real-time processing",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      features: [
        "Natural language understanding",
        "Real-time response generation",
        "Context awareness",
        "Multi-language support"
      ],
      metrics: {
        "Response Time": "< 100ms",
        "Accuracy": "99.2%",
        "Languages": "50+",
        "Uptime": "99.9%"
      }
    },
    quantum: {
      title: "Quantum Simulator",
      description: "Explore quantum computing power with our interactive simulator",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum algorithm execution",
        "Real-time quantum state visualization",
        "Optimization problem solving",
        "Quantum entanglement simulation"
      ],
      metrics: {
        "Qubits": "1024",
        "Speed": "10^15 ops/sec",
        "Accuracy": "99.8%",
        "Problems Solved": "1000+"
      }
    },
    neural: {
      title: "Neural Interface",
      description: "Connect your mind to digital systems with our neural interface",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-to-text conversion",
        "Neural pattern recognition",
        "Real-time feedback",
        "Consciousness mapping"
      ],
      metrics: {
        "Latency": "< 1ms",
        "Accuracy": "98.5%",
        "Channels": "1024",
        "Safety": "100%"
      }
    },
    blockchain: {
      title: "Blockchain Explorer",
      description: "Experience ultra-fast blockchain transactions and smart contracts",
      icon: "🔗",
      color: "from-orange-600 to-red-600",
      features: [
        "100,000 TPS capacity",
        "Smart contract execution",
        "Real-time transaction tracking",
        "Decentralized governance"
      ],
      metrics: {
        "TPS": "100,000",
        "Latency": "< 1s",
        "Security": "Military-grade",
        "Energy": "99% efficient"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY SHOWCASE • JANUARY 2025
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Demos
          </h2>
          
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time. 
            Click, interact, and discover the future of technology.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(demos).map(([key, demo]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDemo(key)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 ${
                activeDemo === key
                  ? `bg-gradient-to-r ${demo.color} shadow-lg shadow-purple-500/50`
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <span className="text-2xl">{demo.icon}</span>
              <span>{demo.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div
          variants={itemVariants}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Demo Interface */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo as keyof typeof demos].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
              <p className="text-lg opacity-90">{demos[activeDemo as keyof typeof demos].description}</p>
            </div>

            {/* Interactive Demo Box */}
            <div className="bg-gradient-to-br from-black/20 to-black/10 rounded-xl p-8 mb-8 border border-white/10">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-xl font-semibold mb-4">Live Demo Interface</div>
                <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full mb-4">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${demoProgress}%` }}
                  ></div>
                </div>
                <div className="text-sm opacity-80">
                  Processing: {demoProgress}% • Status: Active
                </div>
              </div>
            </div>

            {/* Demo Controls */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Demo
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Reset
              </button>
            </div>
          </div>

          {/* Demo Information */}
          <div className="space-y-8">
            {/* Features */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Key Features:</h4>
              <div className="space-y-4">
                {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Performance Metrics:</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(demos[activeDemo as keyof typeof demos].metrics).map(([metric, value], index) => (
                  <motion.div
                    key={metric}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${demos[activeDemo as keyof typeof demos].color} bg-opacity-20 rounded-xl p-4 text-center border border-white/20`}
                  >
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm opacity-80">{metric}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real-time Stats */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Real-time System Statistics</h3>
            <p className="text-lg opacity-90">Live data from our global technology infrastructure</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm opacity-80">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1.2M+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50TB</div>
              <div className="text-sm opacity-80">Data Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;