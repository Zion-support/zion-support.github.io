'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain,
  Settings,
  BarChart3,
  Network,
  X,
  Sparkles
} from 'lucide-react';

const InteractiveAIToolsDemo2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentTool, setCurrentTool] = useState(0);

  const tools = [
    { name: 'Quantum-Neural Fusion AI', icon: Brain, color: 'text-purple-400' },
    { name: 'Automation Engine', icon: Settings, color: 'text-green-400' },
    { name: 'Analytics Platform', icon: BarChart3, color: 'text-orange-400' },
    { name: 'Neural Interface', icon: Network, color: 'text-pink-400' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool(prev => (prev + 1) % tools.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isDismissed) return null;

  const currentToolData = tools[currentTool];
  const Icon = currentToolData.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 border-b border-blue-500/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-2 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-4 right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                <Play className="w-4 h-4" />
                INTERACTIVE DEMO
              </div>
              <div className="flex items-center gap-1 text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🎮 Interactive AI Tools Demo 2026
            </h2>
            
            <p className="text-lg text-blue-200 mb-4 max-w-2xl">
              Experience our revolutionary AI tools in action! Test, interact, and see 
              <span className="text-cyan-400 font-bold"> real-time results</span> with our interactive demonstrations
            </p>

            {/* Rotating Tool Display */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <motion.div
                key={currentTool}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
              >
                <Icon className={`w-5 h-5 ${currentToolData.color}`} />
                <span className="text-white font-medium">{currentToolData.name}</span>
              </motion.div>
              <div className="text-blue-300 text-sm">
                +3 more tools
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Real-time Testing</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>AI-Powered Results</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Interactive Experience</span>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/interactive-ai-tools-demo-2026"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-6 py-3 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Try Interactive Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <Settings className="w-5 h-5" />
              View All Tools
            </Link>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-pulse" />
    </motion.div>
  );
};

export default InteractiveAIToolsDemo2026PromotionBanner;