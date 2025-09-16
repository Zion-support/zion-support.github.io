import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Watch our AI system make autonomous decisions in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time decision making",
        "Emotional intelligence processing",
        "Context-aware responses",
        "Autonomous problem solving"
      ],
      progress: 85,
      status: "Active"
    },
    {
      id: 2,
      title: "Quantum Processing Demo",
      description: "Experience exponential computing power with quantum technology",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum superposition",
        "Exponential speed",
        "Parallel processing",
        "Quantum entanglement"
      ],
      progress: 92,
      status: "Processing"
    },
    {
      id: 3,
      title: "Neural Interface Demo",
      description: "Direct brain-computer communication in action",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-to-text conversion",
        "Neural data transfer",
        "Consciousness integration",
        "Real-time feedback"
      ],
      progress: 78,
      status: "Connected"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Multi-dimensional processing across realities",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      features: [
        "Multi-dimensional access",
        "Infinite capacity",
        "Reality manipulation",
        "Dimensional storage"
      ],
      progress: 96,
      status: "Transcendent"
    }
  ];

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
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INTERACTIVE TECH SHOWCASE • 2025
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Interactive Tech Showcase 2025
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto text-white">
              Experience our cutting-edge technologies with interactive demos and real-time demonstrations
            </p>
          </motion.div>

          {/* Demo Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-xl">{demo.icon}</span>
                <span>{demo.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Active Demo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Demo Content */}
              <div className="text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{demos[activeDemo].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{demos[activeDemo].title}</h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${demos[activeDemo].color}`}>
                      {demos[activeDemo].status}
                    </div>
                  </div>
                </div>
                
                <p className="text-xl opacity-90 mb-8">{demos[activeDemo].description}</p>
                
                <div className="space-y-4 mb-8">
                  {demos[activeDemo].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">Performance</span>
                    <span className="text-lg font-bold">{demos[activeDemo].progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${demos[activeDemo].progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Try Interactive Demo →
                </button>
              </div>

              {/* Demo Visualization */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${demos[activeDemo].color} rounded-2xl p-8 h-96 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4 animate-pulse">
                      {demos[activeDemo].icon}
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      {demos[activeDemo].status}
                    </div>
                    <div className="text-lg opacity-80">
                      Real-time Processing
                    </div>
                    <div className="mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-2xl font-bold">{demos[activeDemo].progress}%</div>
                          <div className="text-sm opacity-80">Efficiency</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-2xl font-bold">∞</div>
                          <div className="text-sm opacity-80">Potential</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Live Performance Metrics</h3>
              <p className="text-xl opacity-80 text-white">Real-time data from our technology demonstrations</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-lg opacity-80 text-white">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-lg opacity-80 text-white">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-lg opacity-80 text-white">Scalability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-lg opacity-80 text-white">Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;