"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Cpu
  Zap
  Eye
  Mic
  MessageSquare,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Camera,
  Globe,
  Shield,
  Rocket
} from 'lucide-react';

const NextGenAIShowcase2026 = () => {
  const [activeDemosetActiveDemo] = useState(0);
  const [isPlayingsetIsPlaying] = useState(true);
  const [aiThinkingsetAiThinking] = useState(false);

  const demos = [
    {
      id: 0,
      title: "Neural Language Processing",
      description: "Advanced AI that understands contextemotionand intent",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      features: [
        "Real-time language translation",
        "Emotion detection and response",
        "Context-aware conversations",
        "Multi-modal communication"
      ],
      demo: "🧠💬",
      stats: { accuracy: "99.7%"languages: "247"speed: "0.1ms" }
    },
    {
      id: 1,
      title: "Computer Vision AI",
      description: "Revolutionary visual intelligence with human-level perception",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      features: [
        "Object recognition & tracking",
        "Facial emotion analysis",
        "Scene understanding",
        "Augmented reality integration"
      ],
      demo: "👁️📷",
      stats: { accuracy: "99.9%"objects: "10M+"fps: "240" }
    },
    {
      id: 2,
      title: "Quantum Processing Core",
      description: "Quantum-enhanced AI for exponential performance gains",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      features: [
        "Quantum algorithm optimization",
        "Parallel universe computation",
        "Instantaneous pattern recognition",
        "Unlimited scalability"
      ],
      demo: "⚛️💎",
      stats: { speed: "1000x"qubits: "1024"efficiency: "99.99%" }
    },
    {
      id: 3,
      title: "Voice Intelligence",
      description: "Natural voice interaction with emotional understanding",
      icon: <Mic className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      features: [
        "Natural speech synthesis",
        "Voice cloning technology",
        "Accent adaptation",
        "Emotional tone matching"
      ],
      demo: "🎤🔊",
      stats: { clarity: "98.8%"voices: "500K"latency: "50ms" }
    }
  ];

  const aiCapabilities = [
    { icon: <Brain className="w-6 h-6" />title: "Deep Learning"desc: "Neural networks with billions of parameters" },
    { icon: <Zap className="w-6 h-6" />title: "Real-time Processing"desc: "Lightning-fast AI responses" },
    { icon: <Shield className="w-6 h-6" />title: "Secure & Private"desc: "Enterprise-grade security" },
    { icon: <Globe className="w-6 h-6" />title: "Global Scale"desc: "Worldwide deployment ready" }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
      }4000);
      return () => clearInterval(interval);
    }
  }[isPlayingdemos.length]);

  useEffect(() => {
    // Simulate AI thinking animation
    const thinkingInterval = setInterval(() => {
      setAiThinking(prev => !prev);
    }2000);
    return () => clearInterval(thinkingInterval);
  }[]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ 
                scale: aiThinking ? 1.1 : 1,
                rotate: aiThinking ? 5 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <Brain className="w-12 h-12 text-cyan-400 mr-4" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Next-Gen AI Showcase 2026
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the future of artificial intelligence with our cutting-edge AI demonstrations. 
            Witness revolutionary capabilities that will transform how we interact with technology.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause Demo' : 'Play Demo'}
            </button>
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white">
              <div className={`w-2 h-2 rounded-full mr-2 ${aiThinking ? 'bg-green-400' : 'bg-gray-400'}`} />
              AI Status: {aiThinking ? 'Thinking' : 'Ready'}
            </div>
          </motion.div>
        </motion.div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Demo Showcase */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0x: -50 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 50 }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${demos[activeDemo].color} shadow-2xl relative overflow-hidden`}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div
                    animate={{ 
                      scale: [1.1],
                      rotate: [050]
                    }}
                    transition={{ 
                      duration: 3
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-9xl font-bold text-white/30 absolute top-4 right-4"
                  >
                    {demos[activeDemo].demo}
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-4 bg-white/20 rounded-full mr-6"
                      whileHover={{ scale: 1.1rotate: 10 }}
                    >
                      {demos[activeDemo].icon}
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {demos[activeDemo].title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {demos[activeDemo].description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {demos[activeDemo].features.map((featureindex) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-white/90 bg-white/10 p-3 rounded-lg"
                      >
                        <Sparkles className="w-4 h-4 mr-3 text-yellow-300" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(demos[activeDemo].stats).map(([keyvalue]index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0scale: 0.8 }}
                        animate={{ opacity: 1scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 bg-white/10 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-white/70 text-xs uppercase tracking-wider">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Demo Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              {demos.map((demoindex) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveDemo(index);
                    setIsPlaying(false);
                  }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    activeDemo === index 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg scale-110' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                  whileHover={{ scale: activeDemo === index ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {demo.icon}
                </motion.button>
              ))}
            </div>
          </div>

          {/* AI Capabilities Panel */}
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-cyan-400" />
                AI Capabilities
              </h4>
              
              <div className="space-y-4">
                {aiCapabilities.map((capabilityindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="flex items-start">
                      <div className="text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                        {capability.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">{capability.title}</div>
                        <div className="text-gray-300 text-sm">{capability.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Interactive Controls</h4>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Voice Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Vision Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat Demo
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Join thousands of businesses already leveraging next-generation AI technology. 
              Get early access to our revolutionary AI platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 flex items-center mx-auto"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextGenAIShowcase2026;
