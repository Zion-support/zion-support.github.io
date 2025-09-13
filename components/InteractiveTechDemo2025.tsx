'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Code, 
  Brain, 
  Zap,
  Globe,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 'ai-assistant',
      title: 'AI Assistant Demo',
      description: 'Experience our advanced AI assistant in action',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Natural language processing',
        'Context-aware responses',
        'Multi-language support',
        'Real-time learning'
      ],
      demoData: {
        input: "How can I optimize my business processes?",
        output: "Based on your business profile, I recommend implementing AI-powered workflow automation. This could reduce manual tasks by 70% and increase efficiency by 85%. Would you like me to create a customized automation plan?",
        metrics: {
          responseTime: '0.3s',
          accuracy: '98.5%',
          confidence: '95%'
        }
      }
    },
    {
      id: 'quantum-sim',
      title: 'Quantum Computing Simulation',
      description: 'Explore quantum algorithms and their applications',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      features: [
        'Quantum algorithm visualization',
        'Entanglement demonstration',
        'Superposition modeling',
        'Quantum error correction'
      ],
      demoData: {
        input: "Factorize large numbers using Shor's algorithm",
        output: "Quantum factorization complete. Input: 15, Factors: 3 × 5. Quantum advantage: 10^6x faster than classical methods.",
        metrics: {
          qubits: '12',
          coherence: '99.2%',
          fidelity: '97.8%'
        }
      }
    },
    {
      id: 'neural-network',
      title: 'Neural Network Visualization',
      description: 'Watch AI learn and adapt in real-time',
      icon: Globe,
      color: 'from-pink-600 to-rose-600',
      features: [
        'Real-time learning visualization',
        'Neural pathway mapping',
        'Pattern recognition',
        'Adaptive optimization'
      ],
      demoData: {
        input: "Classify images of handwritten digits",
        output: "Neural network successfully classified 9,847/10,000 test images with 98.47% accuracy. Learning rate optimized automatically.",
        metrics: {
          layers: '8',
          neurons: '1,024',
          accuracy: '98.47%'
        }
      }
    },
    {
      id: 'security-scan',
      title: 'AI Security Scanner',
      description: 'Advanced threat detection and prevention',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Anomaly identification',
        'Automated response'
      ],
      demoData: {
        input: "Scan network for security vulnerabilities",
        output: "Security scan complete. Found 3 potential threats, 0 critical issues. All threats automatically quarantined. System security: 99.8%",
        metrics: {
          threats: '3',
          critical: '0',
          security: '99.8%'
        }
      }
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
    visible: { opacity: 1, y: 0 }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentDemo(0);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366F1" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Play className="w-4 h-4" />
            INTERACTIVE TECH DEMO 2025
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Experience the Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Interact with cutting-edge AI, quantum computing, and neural network technologies 
            in real-time demonstrations.
          </p>
        </motion.div>

        {/* Demo Controls */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <motion.button
                key={demo.id}
                onClick={() => setCurrentDemo(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  currentDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {demo.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Demo Area */}
        <motion.div 
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8"
          variants={itemVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Interface */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${demos[currentDemo].color}`}>
                    {React.createElement(demos[currentDemo].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {demos[currentDemo].title}
                    </h2>
                    <p className="text-gray-300">
                      {demos[currentDemo].description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={handlePlayPause}
                    className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </motion.button>
                  <motion.button
                    onClick={handleReset}
                    className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Demo Output */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-400 mb-2 block">Input:</label>
                    <div className="bg-slate-700/50 rounded-lg p-4 text-gray-300 font-mono text-sm">
                      {demos[currentDemo].demoData.input}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-gray-400 mb-2 block">Output:</label>
                    <motion.div 
                      className="bg-slate-700/50 rounded-lg p-4 text-gray-300 font-mono text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isPlaying ? 1 : 0.7 }}
                      transition={{ duration: 0.5 }}
                    >
                      {isPlaying ? demos[currentDemo].demoData.output : "Click play to see the demo..."}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Metrics */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <div className="space-y-3">
                  {demos[currentDemo].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(demos[currentDemo].demoData.metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-white font-bold text-lg">
                          {value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Try our interactive demos and see how our cutting-edge technologies 
              can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="group flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 mx-auto sm:mx-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Start Interactive Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Live Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InteractiveTechDemo2025;