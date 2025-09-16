import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      title: "Conscious AI Demo",
      description: "Experience our revolutionary AI system with emotional intelligence",
      features: [
        "Real-time emotional analysis",
        "Natural language understanding",
        "Predictive decision making",
        "Multi-modal processing"
      ],
      stats: {
        "Processing Speed": "1000x faster than traditional AI",
        "Accuracy": "99.9% in emotional recognition",
        "Learning Rate": "10x improvement over previous models",
        "Energy Efficiency": "90% reduction in power consumption"
      },
      icon: "🤖",
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Computing Demo",
      description: "Explore the power of quantum mechanics in computing",
      features: [
        "Quantum supremacy demonstration",
        "Cryptographic security showcase",
        "Optimization problem solving",
        "Molecular simulation"
      ],
      stats: {
        "Qubits": "1000+ stable qubits",
        "Coherence Time": "100+ seconds",
        "Error Rate": "< 0.1%",
        "Speed": "Exponential processing power"
      },
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interface Demo",
      description: "Connect your mind directly to our technology",
      features: [
        "Non-invasive brain-computer interface",
        "Thought-to-text conversion",
        "Neural feedback systems",
        "Consciousness transfer protocols"
      ],
      stats: {
        "Accuracy": "95%+ in thought recognition",
        "Response Time": "< 50ms",
        "Safety": "100% non-invasive",
        "Compatibility": "Universal neural compatibility"
      },
      icon: "🧠",
      color: "from-emerald-600 to-teal-600"
    }
  };

  const currentDemo = demos[activeDemo as keyof typeof demos];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(demos).map((demo) => (
            <button
              key={demo}
              onClick={() => setActiveDemo(demo)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo
                  ? 'bg-white text-purple-600 shadow-lg scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {demos[demo as keyof typeof demos].icon} {demos[demo as keyof typeof demos].title}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Info */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${currentDemo.color} bg-clip-text text-transparent`}>
                {currentDemo.title}
              </h3>
              <p className="text-xl opacity-90 mb-6">{currentDemo.description}</p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Key Features</h4>
              <div className="space-y-3">
                {currentDemo.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${currentDemo.color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentDemo.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${currentDemo.color}/30 rounded-xl p-4 border border-white/20`}
                  >
                    <div className="text-2xl font-bold text-purple-300 mb-1">{value}</div>
                    <div className="text-sm opacity-80">{key}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Demo Area */}
          <motion.div
            key={`demo-${activeDemo}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${currentDemo.color}/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{currentDemo.icon}</div>
                <h4 className="text-2xl font-bold mb-2">Live Demo</h4>
                <p className="opacity-90">Interactive demonstration in progress</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span>Demo Progress</span>
                  <span>{demoProgress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <motion.div
                    className={`h-3 bg-gradient-to-r ${currentDemo.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${demoProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Demo Visualization */}
              <div className="space-y-6">
                {activeDemo === 'ai' && (
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">AI Processing</div>
                      <div className="flex space-x-2">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.1
                            }}
                            className="w-3 h-3 bg-purple-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">Emotional Analysis</div>
                      <div className="text-lg">😊 Happy (95%) | 😮 Surprised (3%) | 😔 Sad (2%)</div>
                    </div>
                  </div>
                )}

                {activeDemo === 'quantum' && (
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">Quantum State</div>
                      <div className="flex space-x-2">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                            className="w-4 h-4 bg-cyan-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">Qubit Entanglement</div>
                      <div className="text-lg">Entangled Pairs: 512 | Coherence: 98.7%</div>
                    </div>
                  </div>
                )}

                {activeDemo === 'neural' && (
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">Neural Activity</div>
                      <div className="flex space-x-1">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              height: [10, Math.random() * 30 + 10, 10],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{ 
                              duration: 0.5,
                              repeat: Infinity,
                              delay: i * 0.05
                            }}
                            className="w-2 bg-emerald-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">Thought Recognition</div>
                      <div className="text-lg">"Hello, how can I help you today?"</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 text-center">
                <button className={`bg-gradient-to-r ${currentDemo.color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">Join thousands of innovators already using our revolutionary technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;