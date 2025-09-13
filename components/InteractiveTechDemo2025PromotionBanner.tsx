'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Code, 
  Cpu, 
  BarChart3, 
  ArrowRight, 
  Sparkles,
  Zap,
  Target,
  CheckCircle,
  Lightbulb,
  Settings,
  Eye
} from 'lucide-react';

export default function InteractiveTechDemo2025PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Real-time Processing",
      description: "Watch AI algorithms work in real-time with live data visualization",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interactive Controls",
      description: "Control playback speed, pause, and explore different scenarios",
      icon: Settings,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Live Metrics",
      description: "Monitor performance metrics and system health in real-time",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Step-by-Step Analysis",
      description: "Understand each processing step with detailed explanations",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];

  const demoSteps = [
    { name: "Data Input", progress: 100, color: "bg-blue-500" },
    { name: "Neural Processing", progress: 85, color: "bg-purple-500" },
    { name: "Network Optimization", progress: 70, color: "bg-green-500" },
    { name: "Result Generation", progress: 45, color: "bg-orange-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <Play className="h-6 w-6 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  Interactive Demo
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Experience AI Technology
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  In Real-Time
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Watch our AI systems process data, make decisions, and generate results in real-time. 
                Control the demo, explore different scenarios, and see the technology in action.
              </p>
            </motion.div>

            {/* Features Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Demo Features</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: currentFeature === index ? 1 : 0.6,
                      x: currentFeature === index ? 0 : -20,
                      scale: currentFeature === index ? 1.02 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      currentFeature === index ? 'bg-white/10' : 'bg-white/5'
                    }`}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{feature.title}</div>
                      <div className="text-gray-400 text-sm">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Start Interactive Demo
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <span className="flex items-center justify-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Watch Preview
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-sm text-gray-400">Demo Steps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Real-time</div>
                <div className="text-sm text-gray-400">Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Interactive</div>
                <div className="text-sm text-gray-400">Controls</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              {/* Demo Header */}
              <div className="bg-white/10 backdrop-blur-sm border-b border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-white font-semibold text-sm">AI Demo Console</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Live</span>
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                <div className="space-y-6">
                  {/* Processing Steps */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Processing Pipeline</h4>
                    <div className="space-y-3">
                      {demoSteps.map((step, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">{step.name}</span>
                            <span className="text-white text-sm font-medium">{step.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${step.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${step.progress}%` }}
                              transition={{ duration: 2, delay: index * 0.5 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Processing Speed</div>
                      <div className="text-white text-xl font-bold">2.5GB/s</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Accuracy</div>
                      <div className="text-white text-xl font-bold">98.7%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Latency</div>
                      <div className="text-white text-xl font-bold">12ms</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Throughput</div>
                      <div className="text-white text-xl font-bold">99.2%</div>
                    </div>
                  </div>

                  {/* Control Panel */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold">Demo Controls</span>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded text-white">
                          <Play className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded text-white">
                          <Settings className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded text-sm font-medium">
                        Start Demo
                      </button>
                      <button className="flex-1 bg-white/10 text-white px-4 py-2 rounded text-sm font-medium">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-slate-900">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </motion.div>
  );
}