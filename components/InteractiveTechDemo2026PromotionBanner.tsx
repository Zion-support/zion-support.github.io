'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  Star, 
  Zap,
  Brain,
  Rocket,
  Settings,
  Code,
  Cpu,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const InteractiveTechDemo2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    'Real-time AI Demonstrations',
    'Interactive Quantum Computing',
    'Live Automation Workflows',
    'Customizable Parameters'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-6 h-6 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-200 bg-cyan-400/20 px-3 py-1 rounded-full">
                INTERACTIVE DEMO
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Interactive Technology
              <span className="block text-cyan-300">Demonstration 2026</span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-6">
              Experience cutting-edge technologies in action. Watch real-time demonstrations 
              of AI, automation, and quantum computing solutions with interactive controls.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                  <span className="text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
                <Play className="w-5 h-5" />
                Try Demo Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-all duration-300">
                <Settings className="w-5 h-5" />
                Customize
              </button>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400 ml-4">Interactive Terminal</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2 text-green-400">
                  <span>$</span>
                  <span>Initializing AI demo...</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <span>$</span>
                  <span>Loading neural network...</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <span>$</span>
                  <span>Training in progress...</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <span>$</span>
                  <span>Accuracy: 97.3%</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span>$</span>
                  <span>Demo ready!</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    _
                  </motion.span>
                </div>
              </div>
            </div>
            
            {/* Floating tech icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
            >
              <Brain className="w-6 h-6 text-blue-300" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center"
            >
              <Cpu className="w-5 h-5 text-cyan-300" />
            </motion.div>
            
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center"
            >
              <Zap className="w-4 h-4 text-purple-300" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechDemo2026PromotionBanner;