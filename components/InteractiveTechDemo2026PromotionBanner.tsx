'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  ArrowRight, 
  Star, 
  Sparkles,
  Brain,
  Cpu,
  Rocket,
  BarChart3,
  CheckCircle,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';

const InteractiveTechDemo2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      title: "Neural Interface Demo",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      description: "Direct brain-computer communication"
    },
    {
      title: "Quantum AI Processing",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      description: "10,000x faster processing"
    },
    {
      title: "Autonomous Operations",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      description: "95% efficiency gain"
    },
    {
      title: "Global Analytics",
      icon: BarChart3,
      color: "from-orange-600 to-red-600",
      description: "Real-time worldwide insights"
    }
  ];

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-indigo-600/10" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-3000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4" />
              Interactive Tech Demo 2026
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Experience the
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Future
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300">
                of AI Technology
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Interact with cutting-edge AI technologies and see the future of artificial intelligence in action. 
              Experience neural interfaces, quantum computing, and autonomous systems like never before.
            </p>

            <div className="space-y-4">
              {[
                "Real-time AI demonstrations",
                "Interactive neural interfaces",
                "Quantum computing simulations",
                "Autonomous system controls"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause Demo
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start Demo
                  </>
                )}
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            <div className="flex items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>95% Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Demo Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Demo Display */}
              <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
                <div className="text-center">
                  <motion.div
                    className="text-6xl mb-6"
                    animate={isPlaying ? { rotate: 360 } : {}}
                    transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                  >
                    <Brain className="w-16 h-16 text-blue-400 mx-auto" />
                  </motion.div>
                  <div className="text-2xl text-white mb-4">
                    {isPlaying ? "Neural Interface Active" : "Ready to Demo"}
                  </div>
                  <div className="text-gray-300 mb-6">
                    {isPlaying 
                      ? "Processing neural data in real-time..." 
                      : "Click play to start the interactive demo"
                    }
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
                </div>
              </div>

              {/* Demo Options */}
              <div className="grid grid-cols-2 gap-4">
                {demos.map((demo, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center mb-3`}>
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{demo.title}</div>
                    <div className="text-gray-300 text-xs">{demo.description}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-60"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-60"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Brain, label: "Neural Interfaces", value: "99.7%" },
            { icon: Cpu, label: "Quantum Processing", value: "10,000x" },
            { icon: Rocket, label: "Autonomous Systems", value: "95%" },
            { icon: BarChart3, label: "Global Analytics", value: "50+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechDemo2026PromotionBanner;