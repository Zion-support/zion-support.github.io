<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play
  Pause
  RotateCcw
  Settings
  Zap
  Brain
  Cpu
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  Network,
  Shield,
  Target,
  TrendingUp,
  Users,
  Globe,
  Code,
  Atom,
  Rocket,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Download,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Lightbulb,
  X,
  Eye,
  MousePointer,
  Monitor
} from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [isPlayingsetIsPlaying] = useState(false);
  const [currentDemosetCurrentDemo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance demos
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % 4);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const demos = [
    {
      title: "AI Consciousness Evolution",
      subtitle: "Experience Synthetic Intelligence",
      description: "Interact with breakthrough AI systems achieving 99.7% consciousness accuracy in real-time neural pattern analysis.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      metrics: "99.7% Accuracy • 8.9/10 Consciousness Index"
    },
    {
      title: "Quantum Neural Fusion",
      subtitle: "Witness Quantum Computing Power",
      description: "See the first successful integration of quantum computing with neural networksachieving 1000x processing speed.",
      icon: Atom,
      color: "from-indigo-500 to-purple-500",
      metrics: "1000x Speed • 99.8% Qubit Coherence"
    },
    {
      title: "Brain-Computer Interface",
      subtitle: "Direct Neural Communication",
      description: "Control computing systems with your thoughts through our advanced BCI technology with 99.9% accuracy.",
      icon: Cpu,
      color: "from-green-500 to-teal-500",
      metrics: "99.9% Accuracy • 12ms Response Time"
    },
    {
      title: "Edge AI Processing",
      subtitle: "Real-Time Distributed Intelligence",
      description: "Experience ultra-low latency AI processing at the edge with 95% latency reduction and 10,000+ processing nodes.",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      metrics: "95% Latency Reduction • 10K+ Nodes"
    }
  ];

  const features = [
    { icon: Playtext: "Interactive Demos" },
    { icon: Braintext: "AI Technologies" },
    { icon: Atomtext: "Quantum Computing" },
    { icon: Cputext: "Neural Interfaces" },
    { icon: Networktext: "Edge Processing" },
    { icon: Rocketext: "Future Tech" }
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 border-b border-indigo-500/20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1 pr-8">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0x: 20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                    <Play className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-sm font-medium text-white">Interactive Demo Available</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {demos[currentDemo].title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg text-indigo-200 font-medium">
                    {demos[currentDemo].subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-base max-w-2xl">
                    {demos[currentDemo].description}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center text-sm text-gray-400">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>{demos[currentDemo].metrics}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {features.slice(0, 3).map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                          <Icon className="w-4 h-4 mr-2" />
                          {feature.text}
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                      {isPlaying ? 'Pause Demo' : 'Start Demo'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download SDK
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Interactive Demo Preview */}
              <div className="hidden lg:block flex-shrink-0">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-80 h-48"
                >
                  {/* Demo Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demos[currentDemo].color} flex items-center justify-center`}>
                        {React.createElement(demos[currentDemo].icon{ className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white font-bold text-lg">Live Demo</h3>
                        <p className="text-gray-300 text-sm">Interactive Experience</p>
                      </div>
                    </div>
                    
                    {/* Demo Visualization */}
                    <div className="relative h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-white/10 mb-4">
                      {/* Animated Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {demos[currentDemo].title.includes('AI Consciousness') && (
                          <div className="grid grid-cols-4 gap-2">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scale: isPlaying ? [1.21] : 1,
                                  opacity: isPlaying ? [0.510.5] : 0.7
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: isPlaying ? Infinity : 0,
                                  delay: i * 0.1
                                }}
                                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                              />
                            ))}
                          </div>
                        )}
                        
                        {demos[currentDemo].title.includes('Quantum') && (
                          <div className="relative">
                            {[...Array(4)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  rotate: isPlaying ? 360 : 0,
                                  scale: isPlaying ? [1.1] : 1
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: isPlaying ? Infinity : 0,
                                  delay: i * 0.2
                                }}
                                className="absolute w-8 h-8 border-2 border-indigo-400 rounded-full"
                                style={{
                                  left: `${Math.cos(i * Math.PI / 2) * 20}px`,
                                  top: `${Math.sin(i * Math.PI / 2) * 20}px`
                                }}
                              />
                            ))}
                          </div>
                        )}
                        
                        {demos[currentDemo].title.includes('Brain-Computer') && (
                          <div className="w-full h-16 relative">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scaleY: isPlaying ? [121] : 1,
                                  opacity: isPlaying ? [0.510.5] : 0.7
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: isPlaying ? Infinity : 0,
                                  delay: i * 0.2
                                }}
                                className="absolute w-1 bg-gradient-to-t from-green-500 to-teal-500 rounded-full"
                                style={{
                                  left: `${30 + i * 20}%`,
                                  height: '100%'
                                }}
                              />
                            ))}
                          </div>
                        )}
                        
                        {demos[currentDemo].title.includes('Edge AI') && (
                          <div className="grid grid-cols-3 gap-2">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scale: isPlaying ? [1.31] : 1,
                                  opacity: isPlaying ? [0.610.6] : 0.8
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: isPlaying ? Infinity : 0,
                                  delay: i * 0.1
                                }}
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Demo Controls */}
                    <div className="flex items-center justify-center space-x-2">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <RotateCcw className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Settings className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0-10] }}
                    transition={{ duration: 2repeat: Infinityease: "easeInOut" }}
                    className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [010] }}
                    transition={{ duration: 2.5repeat: Infinityease: "easeInOut" }}
                    className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center"
                  >
                    <MousePointer className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Demo Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {demos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentDemo 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2025PromotionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
