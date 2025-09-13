'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Network, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const InteractiveAIDemo2025 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [progress, setProgress] = useState(0);
  const [demoResults, setDemoResults] = useState([]);

  const demos = [
    {
      id: 'quantum-processing',
      title: 'Quantum-AI Processing',
      description: 'Watch as quantum algorithms process complex data 1000x faster than traditional methods',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      duration: 8000,
      steps: [
        'Initializing quantum circuits...',
        'Loading neural network parameters...',
        'Executing quantum algorithms...',
        'Processing 10M data points...',
        'Optimizing results...',
        'Quantum processing complete!'
      ],
      result: {
        speed: '1000x faster',
        accuracy: '99.97%',
        efficiency: '95% energy reduction'
      }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Communication',
      description: 'Experience direct brain-computer interface communication in real-time',
      icon: Network,
      color: 'from-blue-600 to-cyan-600',
      duration: 6000,
      steps: [
        'Establishing neural connection...',
        'Calibrating brain signals...',
        'Processing thought patterns...',
        'Translating to digital commands...',
        'Executing actions...',
        'Neural interface active!'
      ],
      result: {
        speed: 'Real-time',
        accuracy: '99.9%',
        efficiency: 'Seamless integration'
      }
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous System Management',
      description: 'Observe AI systems managing complex operations without human intervention',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      duration: 7000,
      steps: [
        'Analyzing system requirements...',
        'Optimizing resource allocation...',
        'Implementing self-healing protocols...',
        'Monitoring performance metrics...',
        'Adapting to new conditions...',
        'Autonomous operation achieved!'
      ],
      result: {
        speed: 'Instant response',
        accuracy: '99.99% uptime',
        efficiency: 'Self-optimizing'
      }
    },
    {
      id: 'conscious-ai',
      title: 'Conscious AI Decision Making',
      description: 'Witness AI systems making complex ethical and contextual decisions',
      icon: Sparkles,
      color: 'from-orange-600 to-red-600',
      duration: 9000,
      steps: [
        'Analyzing contextual information...',
        'Evaluating ethical implications...',
        'Considering multiple perspectives...',
        'Weighing pros and cons...',
        'Making informed decision...',
        'Conscious decision complete!'
      ],
      result: {
        speed: 'Human-like reasoning',
        accuracy: 'Ethically sound',
        efficiency: 'Context-aware'
      }
    }
  ];

  useEffect(() => {
    let interval;
    if (isRunning) {
      const currentDemoData = demos[currentDemo];
      const stepDuration = currentDemoData.duration / currentDemoData.steps.length;
      let stepIndex = 0;
      
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / currentDemoData.steps.length);
          if (newProgress >= 100) {
            setIsRunning(false);
            setDemoResults(prev => [...prev, {
              demo: currentDemoData.title,
              result: currentDemoData.result,
              timestamp: new Date().toLocaleTimeString()
            }]);
            return 100;
          }
          return newProgress;
        });
        
        stepIndex++;
        if (stepIndex >= currentDemoData.steps.length) {
          setIsRunning(false);
        }
      }, stepDuration);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, currentDemo]);

  const startDemo = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const nextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setProgress(0);
    setIsRunning(false);
  };

  const currentDemoData = demos[currentDemo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Play className="w-4 h-4 mr-2" />
            Interactive AI Demo 2025
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Experience the Future
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              of AI Technology
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with cutting-edge AI systems and witness revolutionary capabilities in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Choose Your Demo</h2>
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <motion.button
                  key={demo.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                    currentDemo === index
                      ? `bg-gradient-to-r ${demo.color} border-transparent shadow-lg`
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <demo.icon className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">{demo.title}</div>
                      <div className="text-sm opacity-75">{demo.description}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Demo Area */}
          <div className="lg:col-span-2">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentDemoData.color}`}>
                    <currentDemoData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentDemoData.title}</h3>
                    <p className="text-gray-300">{currentDemoData.description}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isRunning ? () => setIsRunning(false) : startDemo}
                    className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 ${
                      isRunning
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isRunning ? 'Pause' : 'Start'} Demo
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetDemo}
                    className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm font-semibold">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${currentDemoData.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Demo Steps */}
              <div className="space-y-4 mb-8">
                {currentDemoData.steps.map((step, index) => {
                  const stepProgress = (index + 1) * (100 / currentDemoData.steps.length);
                  const isActive = progress >= stepProgress - (100 / currentDemoData.steps.length) && progress < stepProgress;
                  const isCompleted = progress >= stepProgress;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: isActive || isCompleted ? 1 : 0.5,
                        x: isActive ? 10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                        isActive ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50' :
                        isCompleted ? 'bg-green-600/20 border border-green-500/50' :
                        'bg-white/5'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : isActive ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap className="w-5 h-5 text-blue-400" />
                        </motion.div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-white/30" />
                      )}
                      <span className={isActive ? 'font-semibold' : ''}>{step}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Results */}
              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/50 rounded-xl p-6"
                >
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Demo Results
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(currentDemoData.result).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-green-400">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Demo Results History */}
        {demoResults.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Demo History</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {demoResults.slice(-6).map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{result.demo}</h4>
                    <span className="text-xs text-gray-400">{result.timestamp}</span>
                  </div>
                  <div className="space-y-1">
                    {Object.entries(result.result).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-400 capitalize">{key}:</span>
                        <span className="text-blue-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Next Demo Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextDemo}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all duration-300"
          >
            Next Demo
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIDemo2025;