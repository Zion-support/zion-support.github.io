import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [simulationData, setSimulationData] = useState({
    aiConsciousness: 0,
    quantumProcessing: 0,
    neuralConnections: 0,
    realityManipulation: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setSimulationData(prev => ({
        aiConsciousness: Math.min(100, prev.aiConsciousness + Math.random() * 5),
        quantumProcessing: Math.min(100, prev.quantumProcessing + Math.random() * 3),
        neuralConnections: Math.min(100, prev.neuralConnections + Math.random() * 4),
        realityManipulation: Math.min(100, prev.realityManipulation + Math.random() * 2)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 0,
      title: "AI Consciousness Simulator",
      description: "Experience real-time AI consciousness development",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      data: simulationData.aiConsciousness,
      unit: "%"
    },
    {
      id: 1,
      title: "Quantum Processing Engine",
      description: "Witness quantum computing in action",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      data: simulationData.quantumProcessing,
      unit: "%"
    },
    {
      id: 2,
      title: "Neural Network Visualization",
      description: "See neural connections forming in real-time",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      data: simulationData.neuralConnections,
      unit: "%"
    },
    {
      id: 3,
      title: "Reality Manipulation Interface",
      description: "Control the fabric of digital reality",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      data: simulationData.realityManipulation,
      unit: "%"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </motion.div>

        {/* Demo Selection */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </motion.div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-xl opacity-90 mb-6">{demos[activeDemo].description}</p>
                
                {/* Real-time Data Display */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold">Processing Level</span>
                      <span className="text-2xl font-bold">{Math.round(demos[activeDemo].data)}{demos[activeDemo].unit}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className={`h-3 bg-gradient-to-r ${demos[activeDemo].color} rounded-full`}
                        style={{ width: `${demos[activeDemo].data}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-400">99.9%</div>
                      <div className="text-sm opacity-80">Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">∞</div>
                      <div className="text-sm opacity-80">Capacity</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className={`w-full h-80 bg-gradient-to-br ${demos[activeDemo].color} rounded-xl flex items-center justify-center text-8xl opacity-20 relative overflow-hidden`}>
                  {demos[activeDemo].icon}
                  
                  {/* Animated background elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                {/* Floating data points */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Controls */}
        <motion.div className="max-w-4xl mx-auto mb-16" variants={itemVariants}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Interactive Controls</h3>
            <p className="text-lg opacity-90">Take control of the simulation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Simulation Parameters</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Consciousness Level</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={simulationData.aiConsciousness}
                    onChange={(e) => setSimulationData(prev => ({
                      ...prev,
                      aiConsciousness: parseInt(e.target.value)
                    }))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Processing Speed</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={simulationData.quantumProcessing}
                    onChange={(e) => setSimulationData(prev => ({
                      ...prev,
                      quantumProcessing: parseInt(e.target.value)
                    }))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Real-time Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Neural Connections:</span>
                  <span className="font-bold">{Math.round(simulationData.neuralConnections)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality Stability:</span>
                  <span className="font-bold">{Math.round(simulationData.realityManipulation)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>System Status:</span>
                  <span className="font-bold text-green-400">Optimal</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center" variants={itemVariants}>
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deeper into these revolutionary technologies and discover how they can transform your world
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Full Demo
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;