'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Settings, Zap, Brain, Cpu, Database, Network, Shield } from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Watch our AI automatically optimize business processes in real-time',
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-500 to-cyan-500',
      steps: [
        'Analyzing current workflow patterns...',
        'Identifying optimization opportunities...',
        'Implementing AI-driven improvements...',
        'Monitoring performance metrics...',
        'Achieving 90% efficiency boost!'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Processing',
      description: 'Experience the power of quantum computing for complex calculations',
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      color: 'from-purple-500 to-pink-500',
      steps: [
        'Initializing quantum processors...',
        'Loading complex datasets...',
        'Executing quantum algorithms...',
        'Processing 10,000x faster than classical...',
        'Results delivered in milliseconds!'
      ]
    },
    {
      id: 'neural-networks',
      title: 'Neural Network Training',
      description: 'See how our neural networks learn and adapt in real-time',
      icon: <Network className="w-8 h-8 text-green-600" />,
      color: 'from-green-500 to-emerald-500',
      steps: [
        'Training deep learning models...',
        'Processing millions of data points...',
        'Optimizing neural connections...',
        'Achieving 98% accuracy...',
        'Model ready for deployment!'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Real-time Analytics',
      description: 'Watch live data processing and insights generation',
      icon: <Database className="w-8 h-8 text-orange-600" />,
      color: 'from-orange-500 to-red-500',
      steps: [
        'Streaming live data feeds...',
        'Applying machine learning models...',
        'Generating predictive insights...',
        'Creating interactive dashboards...',
        'Delivering actionable intelligence!'
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handleNextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setProgress(0);
    setIsPlaying(false);
  };

  const currentStep = Math.floor((progress / 100) * demos[currentDemo].steps.length);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Interactive Tech Demo 2025
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experience our cutting-edge technologies in action. Watch live demonstrations 
            of AI automation, quantum computing, and neural network processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Demo Selector */}
            <div className="grid grid-cols-2 gap-4">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setCurrentDemo(index);
                    setProgress(0);
                    setIsPlaying(false);
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    currentDemo === index
                      ? `border-blue-400 bg-blue-500/20`
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {demo.icon}
                    <div className="text-left">
                      <h3 className="font-semibold text-sm">{demo.title}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Current Demo Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                {demos[currentDemo].icon}
                <div>
                  <h3 className="text-2xl font-bold">{demos[currentDemo].title}</h3>
                  <p className="text-blue-200">{demos[currentDemo].description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${demos[currentDemo].color}`}
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex space-x-4">
                <button
                  onClick={handlePlay}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={handleNextDemo}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>Next</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 min-h-[400px]">
              {/* Demo Content */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${demos[currentDemo].color} mb-4`}>
                  {demos[currentDemo].icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{demos[currentDemo].title}</h3>
                <p className="text-blue-200">Live Demonstration</p>
              </div>

              {/* Animated Steps */}
              <div className="space-y-4">
                <AnimatePresence>
                  {demos[currentDemo].steps.slice(0, currentStep + 1).map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        index === currentStep ? 'bg-blue-500/20 border border-blue-400' : 'bg-white/5'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        index < currentStep ? 'bg-green-400' : 'bg-blue-400'
                      }`} />
                      <span className="text-sm">{step}</span>
                      {index < currentStep && (
                        <Zap className="w-4 h-4 text-green-400 ml-auto" />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">10x</div>
                  <div className="text-sm text-gray-300">Faster</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to See These Technologies in Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Schedule a personalized demo and discover how our solutions can transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;