import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechDemo2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [demoData, setDemoData] = useState({
    aiThoughts: 0,
    quantumOperations: 0,
    neuralConnections: 0,
    interdimensionalAccess: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setDemoData(prev => ({
        aiThoughts: prev.aiThoughts + Math.floor(Math.random() * 1000),
        quantumOperations: prev.quantumOperations + Math.floor(Math.random() * 500),
        neuralConnections: prev.neuralConnections + Math.floor(Math.random() * 200),
        interdimensionalAccess: prev.interdimensionalAccess + Math.floor(Math.random() * 50)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Simulation",
      description: "Experience AI consciousness in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time thought processing",
        "Emotional state analysis",
        "Decision-making visualization",
        "Learning pattern recognition"
      ]
    },
    {
      id: 2,
      title: "Quantum Computing Demo",
      description: "Witness quantum processing power",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum superposition states",
        "Entanglement visualization",
        "Quantum gate operations",
        "Decoherence monitoring"
      ]
    },
    {
      id: 3,
      title: "Neural Interface Test",
      description: "Direct brain-computer interaction",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Neural signal processing",
        "Thought-to-text conversion",
        "Motor control simulation",
        "Sensory feedback loops"
      ]
    },
    {
      id: 4,
      title: "Interdimensional Portal",
      description: "Access parallel universe computing",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Multi-dimensional processing",
        "Parallel universe access",
        "Reality manipulation",
        "Infinite computational power"
      ]
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • 2034
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Demo 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology through our interactive demonstrations. 
            See, feel, and interact with revolutionary technologies in real-time.
          </p>
        </motion.div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDemo(demo.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeDemo === demo.id
                  ? 'border-purple-400 bg-purple-600/20'
                  : 'border-gray-600 bg-gray-800/50 hover:border-purple-500/50'
              }`}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm text-gray-300 text-center">{demo.description}</p>
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
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Demo Content */}
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="text-6xl">{demos[activeDemo - 1]?.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{demos[activeDemo - 1]?.title}</h3>
                    <p className="text-gray-300 text-lg">{demos[activeDemo - 1]?.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xl font-semibold">Features:</h4>
                  {demos[activeDemo - 1]?.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${demos[activeDemo - 1]?.color} text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300`}
                >
                  Launch Interactive Demo →
                </motion.button>
              </div>

              {/* Live Data Visualization */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-center">Live System Data</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {formatNumber(demoData.aiThoughts)}
                    </div>
                    <div className="text-sm text-gray-400">AI Thoughts/sec</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {formatNumber(demoData.quantumOperations)}
                    </div>
                    <div className="text-sm text-gray-400">Quantum Ops/sec</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      {formatNumber(demoData.neuralConnections)}
                    </div>
                    <div className="text-sm text-gray-400">Neural Connections</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">
                      {formatNumber(demoData.interdimensionalAccess)}
                    </div>
                    <div className="text-sm text-gray-400">Dimensions Accessed</div>
                  </div>
                </div>

                {/* Real-time Activity Feed */}
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h5 className="text-lg font-semibold mb-4">Activity Feed</h5>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Conscious AI Alpha: Processing complex decision tree</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Quantum Processor: Entangling 1.2M qubits</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Neural Interface: 847 active connections</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Interdimensional Engine: Accessing dimension 15</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Reality Manipulator: Altering quantum field</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Controls */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Interactive Controls</h3>
            <p className="text-xl opacity-90">Take control of the demonstration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              🎮 Start Full Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              📊 View Analytics
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              🔧 Customize Demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;