'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Settings, Zap, Brain, Cpu, Globe, Shield, TrendingUp } from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'ai',
      title: 'AI-Powered Automation',
      description: 'Watch how our AI system automates complex business processes in real-time.',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time Processing', 'Smart Decision Making', 'Adaptive Learning']
    },
    {
      id: 'quantum',
      title: 'Quantum Computing',
      description: 'Experience the power of quantum computing for complex problem solving.',
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Quantum Supremacy', 'Parallel Processing', 'Cryptographic Security']
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'See our scalable cloud solutions in action with live performance metrics.',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Global Scale', 'Auto-scaling', '99.9% Uptime']
    },
    {
      id: 'security',
      title: 'Advanced Security',
      description: 'Explore our multi-layered security approach with real-time threat detection.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      color: 'from-red-500 to-orange-500',
      features: ['Threat Detection', 'Zero Trust', 'Encryption']
    }
  ];

  const currentDemo = demos.find(demo => demo.id === activeDemo);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Demonstration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge technologies through interactive demos and see the future in action.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Choose Technology</h3>
            {demos.map((demo) => (
              <motion.button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeDemo === demo.id
                    ? 'bg-white/20 border-2 border-blue-500'
                    : 'bg-white/10 border-2 border-transparent hover:bg-white/15'
                }`}
              >
                <div className="flex items-center mb-3">
                  {demo.icon}
                  <h4 className="text-lg font-semibold text-white ml-3">{demo.title}</h4>
                </div>
                <p className="text-gray-300 text-sm">{demo.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Demo Area */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {currentDemo?.icon}
                  <h3 className="text-2xl font-bold text-white ml-3">{currentDemo?.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePlayPause}
                    className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full text-white transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full text-white transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Demo Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${currentDemo?.color}`}
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Demo Visualization */}
              <div className="bg-black/50 rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r ${currentDemo?.color} flex items-center justify-center`}>
                      {currentDemo?.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{currentDemo?.title}</h4>
                    <p className="text-gray-300 mb-4">{currentDemo?.description}</p>
                    {isPlaying && (
                      <div className="flex justify-center space-x-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-4">
                {currentDemo?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 rounded-lg p-4 text-center"
                  >
                    <div className="text-sm font-medium text-white">{feature}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience These Technologies?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Schedule a personalized demo and see how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                Schedule Demo
                <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTechDemo2025;