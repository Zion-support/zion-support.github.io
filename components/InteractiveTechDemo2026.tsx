'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Zap, 
  Brain, 
  Cpu, 
  Database,
  Cloud,
  Shield,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Rocket,
  Users,
  Globe,
  Lock
} from 'lucide-react';

const InteractiveTechDemo2026 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentDemo(prev => (prev + 1) % demos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const demos = [
    {
      id: 1,
      title: "Neural Interface Demo",
      description: "Experience direct brain-computer communication in real-time",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time thought processing",
        "Emotion recognition",
        "Cognitive enhancement",
        "Memory augmentation"
      ],
      stats: "99.7% accuracy",
      simulation: "Neural data flowing through quantum processors..."
    },
    {
      id: 2,
      title: "Quantum AI Processing",
      description: "Witness quantum computing solving complex problems instantly",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      features: [
        "Exponential speed increase",
        "Parallel processing",
        "Quantum entanglement",
        "Optimization algorithms"
      ],
      stats: "10,000x faster",
      simulation: "Quantum states collapsing and reforming in perfect harmony..."
    },
    {
      id: 3,
      title: "Autonomous Operations",
      description: "Watch AI systems manage complex operations independently",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      features: [
        "Self-healing systems",
        "Predictive maintenance",
        "Dynamic optimization",
        "Intelligent routing"
      ],
      stats: "95% efficiency",
      simulation: "Autonomous systems adapting and optimizing in real-time..."
    },
    {
      id: 4,
      title: "Global Analytics",
      description: "See worldwide data processing and insights generation",
      icon: BarChart3,
      color: "from-orange-600 to-red-600",
      features: [
        "Real-time monitoring",
        "Predictive analytics",
        "Cross-platform integration",
        "Automated reporting"
      ],
      stats: "50+ countries",
      simulation: "Global data streams converging into actionable insights..."
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Interactive Tech Demo 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Experience the
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Future
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with cutting-edge AI technologies and see the future of artificial intelligence in action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Demo Controls */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Demo Controls</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-2">
                      {isPlaying ? 'Playing' : 'Paused'}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentDemo(0)}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setProgress(0)}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    Restart
                  </button>
                </div>
              </div>
            </div>

            {/* Demo Selection */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Select Demo</h3>
              {demos.map((demo, index) => (
                <motion.button
                  key={demo.id}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 ${
                    currentDemo === index
                      ? 'bg-white/20 border-blue-400'
                      : 'bg-white/5 border-white/20 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center`}>
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">{demo.title}</div>
                      <div className="text-gray-300 text-sm">{demo.description}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Demo Display */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${demos[currentDemo].color} flex items-center justify-center`}>
                    <demos[currentDemo].icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{demos[currentDemo].title}</h2>
                    <p className="text-gray-300">{demos[currentDemo].description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{demos[currentDemo].stats}</div>
                  <div className="text-gray-400">Performance</div>
                </div>
              </div>

              {/* Simulation Display */}
              <div className="bg-black/50 rounded-2xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                <motion.div
                  className="text-center"
                  key={currentDemo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-4">
                    {isPlaying ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <demos[currentDemo].icon className="w-16 h-16 text-blue-400 mx-auto" />
                      </motion.div>
                    ) : (
                      <demos[currentDemo].icon className="w-16 h-16 text-blue-400 mx-auto" />
                    )}
                  </div>
                  <div className="text-xl text-gray-300 mb-4">
                    {demos[currentDemo].simulation}
                  </div>
                  {isPlaying && (
                    <motion.div
                      className="flex justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {demos[currentDemo].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Live Demo
              </motion.button>
              <motion.button
                className="p-6 border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our AI technologies to transform their businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InteractiveTechDemo2026;