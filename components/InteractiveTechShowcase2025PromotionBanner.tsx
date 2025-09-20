"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play
  ArrowRight
  Star
  Zap
  TrendingUp,
  Users,
  Award,
  Rocket,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Eye,
  MousePointer,
  Settings,
  Code,
  Database,
  Cpu,
  Network
} from 'lucide-react';

const InteractiveTechShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const features = [
    { icon: Braintext: 'AI 'Automation', 'color: 'from-blue-500 to-purple-500' },
    { icon: Shieldtext: ''Cybersecurity', 'color: 'from-red-500 to-orange-500' },
    { icon: Cloudtext: 'Cloud 'Solutions', 'color: 'from-green-500 to-teal-500' },
    { icon: BarChart3text: 'Data 'Analytics', 'color: 'from-purple-500 to-pink-500' }
  ];

  const stats = [
    { value: '10'x', 'label: 'Performance Gain' },
    { value: '99.7%'label: 'Accuracy Rate' },
    { value: '<2's', 'label: 'Response Time' },
    { value: '500+'label: 'Live Demos' }
  ];

  const demoSteps = [
    'Real-time Process Analysis',
    'AI-Powered Optimization',
    'Live Performance Metrics',
    'Instant Results Display'
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
          >
            <Play className="w-4 h-4" />
            🎮 NEW: Interactive Technology Demo 2025
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Watch Our Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work in Real-Time
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Experience our revolutionary AI systems live in action. See how our technology 
            processes dataoptimizes processesand delivers results in real-time.
          </motion.p>

          {/* Interactive Demo Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8delay: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Live Demo Preview</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Live Streaming</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="text-green-400 font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>System: Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      <span>Processing: 1.2M records/sec</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4" />
                      <span>Latency: 12ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>Efficiency: 99.7%</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Demo Features:</h4>
                <div className="space-y-3">
                  {demoSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{feature.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Interactive Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2 group">
              <Eye className="w-5 h-5" />
              Watch Live Stream
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025PromotionBanner;
