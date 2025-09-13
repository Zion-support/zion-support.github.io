'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Zap, 
  Brain, 
  Cpu, 
  Network, 
  Database,
  Shield,
  Globe,
  Rocket,
  Star,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('ai-processing');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<any[]>([]);

  const demos = {
    'ai-processing': {
      title: 'AI Neural Processing',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Real-time AI neural network processing simulation',
      steps: [
        'Initializing neural networks...',
        'Loading training data...',
        'Processing input patterns...',
        'Generating predictions...',
        'Optimizing weights...',
        'Analysis complete!'
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Quantum algorithm execution simulation',
      steps: [
        'Preparing quantum state...',
        'Applying quantum gates...',
        'Entangling qubits...',
        'Measuring quantum state...',
        'Decoherence analysis...',
        'Quantum computation complete!'
      ]
    },
    'automation': {
      title: 'Smart Automation',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      description: 'Intelligent workflow automation system',
      steps: [
        'Analyzing workflow patterns...',
        'Identifying optimization opportunities...',
        'Deploying automation scripts...',
        'Monitoring performance...',
        'Adjusting parameters...',
        'Automation deployed successfully!'
      ]
    },
    'security': {
      title: 'Advanced Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'AI-powered security threat detection',
      steps: [
        'Scanning network traffic...',
        'Analyzing behavioral patterns...',
        'Detecting anomalies...',
        'Classifying threats...',
        'Implementing countermeasures...',
        'Security scan complete!'
      ]
    }
  };

  const demoOptions = Object.entries(demos).map(([key, demo]) => ({
    key,
    ...demo
  }));

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 200);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, progress]);

  const startDemo = () => {
    setProgress(0);
    setResults([]);
    setIsRunning(true);
  };

  const stopDemo = () => {
    setIsRunning(false);
  };

  const resetDemo = () => {
    setProgress(0);
    setResults([]);
    setIsRunning(false);
  };

  const currentDemoData = demos[currentDemo as keyof typeof demos];
  const currentStep = Math.floor((progress / 100) * currentDemoData.steps.length);
  const currentStepText = currentDemoData.steps[currentStep] || currentDemoData.steps[currentDemoData.steps.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Interactive Tech Demo 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge technologies in real-time with our interactive demonstrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Select Demo</h3>
              <div className="space-y-3">
                {demoOptions.map((demo) => {
                  const Icon = demo.icon;
                  return (
                    <button
                      key={demo.key}
                      onClick={() => setCurrentDemo(demo.key)}
                      className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 ${
                        currentDemo === demo.key
                          ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6 mr-3" />
                      <div className="text-left">
                        <div className="font-semibold">{demo.title}</div>
                        <div className="text-sm opacity-80">{demo.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Demo Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentDemoData.color} mr-4`}>
                    <currentDemoData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentDemoData.title}</h3>
                    <p className="text-gray-300">{currentDemoData.description}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isRunning ? stopDemo : startDemo}
                    className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      isRunning
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isRunning ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                    {isRunning ? 'Stop' : 'Start'}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetDemo}
                    className="flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-full font-semibold transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Reset
                  </motion.button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Progress</span>
                  <span className="text-sm font-medium text-gray-300">{progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 bg-gradient-to-r ${currentDemoData.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Current Step */}
              <div className="mb-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {isRunning ? (
                      <Loader className="w-6 h-6 text-blue-400 animate-spin mr-3" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    )}
                    <span className="text-lg font-semibold text-white">Current Step</span>
                  </div>
                  <p className="text-gray-300 text-lg">{currentStepText}</p>
                </div>
              </div>

              {/* Demo Visualization */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Brain, label: 'Neural Networks', value: Math.floor(Math.random() * 100) },
                  { icon: Cpu, label: 'Processing Power', value: Math.floor(Math.random() * 100) },
                  { icon: Network, label: 'Network Load', value: Math.floor(Math.random() * 100) },
                  { icon: Database, label: 'Data Throughput', value: Math.floor(Math.random() * 100) }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 text-center border border-white/10"
                    >
                      <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}%</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Results */}
              {progress > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">Demo Results</h4>
                  <div className="space-y-2">
                    {currentDemoData.steps.slice(0, currentStep + 1).map((step, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                    {progress < 100 && (
                      <div className="flex items-center text-gray-400">
                        <Loader className="w-4 h-4 text-blue-400 mr-3 animate-spin" />
                        <span className="text-sm">Processing...</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Call to Action */}
              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 text-center"
                >
                  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-green-500/30">
                    <h4 className="text-2xl font-bold text-white mb-4">Demo Complete! 🎉</h4>
                    <p className="text-gray-300 mb-6">
                      You've successfully completed the {currentDemoData.title} demonstration. 
                      Ready to implement this technology in your business?
                    </p>
                    <button className="flex items-center justify-center mx-auto px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                      <Rocket className="w-5 h-5 mr-2" />
                      Get Started Now
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;