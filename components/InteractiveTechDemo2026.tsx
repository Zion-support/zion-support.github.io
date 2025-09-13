'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Code, 
  Cpu, 
  Brain, 
  Zap,
  Database,
  Cloud,
  Shield,
  Target,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  BarChart3
} from 'lucide-react';

const InteractiveTechDemo2026 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTech, setSelectedTech] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techCategories = {
    ai: {
      name: 'Artificial Intelligence',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      demos: [
        {
          title: 'Neural Network Training',
          description: 'Watch AI learn in real-time',
          steps: [
            'Initializing neural network...',
            'Loading training data...',
            'Training epoch 1/100...',
            'Accuracy: 45%',
            'Training epoch 25/100...',
            'Accuracy: 78%',
            'Training epoch 50/100...',
            'Accuracy: 89%',
            'Training epoch 75/100...',
            'Accuracy: 94%',
            'Training epoch 100/100...',
            'Final Accuracy: 97.3%',
            'Model ready for deployment!'
          ]
        },
        {
          title: 'Natural Language Processing',
          description: 'AI understanding human language',
          steps: [
            'Processing input text...',
            'Tokenizing words...',
            'Analyzing sentiment...',
            'Sentiment: Positive (85%)',
            'Extracting entities...',
            'Entities: [Person, Location, Organization]',
            'Generating response...',
            'Response generated successfully!'
          ]
        }
      ]
    },
    automation: {
      name: 'Automation',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      demos: [
        {
          title: 'Workflow Automation',
          description: 'Automating business processes',
          steps: [
            'Trigger: New customer order',
            'Validating order data...',
            'Checking inventory...',
            'Inventory available',
            'Processing payment...',
            'Payment successful',
            'Generating invoice...',
            'Sending confirmation email...',
            'Updating inventory...',
            'Order processed successfully!'
          ]
        },
        {
          title: 'Smart Monitoring',
          description: 'AI-powered system monitoring',
          steps: [
            'Scanning system health...',
            'CPU usage: 45%',
            'Memory usage: 67%',
            'Network latency: 12ms',
            'All systems normal',
            'Predictive analysis...',
            'No issues detected',
            'System optimized'
          ]
        }
      ]
    },
    quantum: {
      name: 'Quantum Computing',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      demos: [
        {
          title: 'Quantum Algorithm',
          description: 'Solving complex problems with quantum computing',
          steps: [
            'Initializing quantum circuit...',
            'Preparing qubits...',
            'Applying quantum gates...',
            'Entangling qubits...',
            'Running quantum algorithm...',
            'Measuring quantum state...',
            'Result: 42 (quantum solution)',
            'Classical equivalent: 2^20 operations',
            'Quantum speedup: 1,048,576x faster!'
          ]
        }
      ]
    }
  };

  const currentDemo = techCategories[selectedTech as keyof typeof techCategories].demos[0];

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startDemo();
    }
  };

  const startDemo = () => {
    if (currentStep < currentDemo.steps.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        startDemo();
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Play className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Interactive Demo</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Technology
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Demonstration 2026
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technologies in action. Watch real-time demonstrations 
            of AI, automation, and quantum computing solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Technology Selection */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Select Technology</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.entries(techCategories).map(([key, tech]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedTech(key);
                      resetDemo();
                    }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedTech === key
                        ? `border-transparent bg-gradient-to-r ${tech.color} text-white`
                        : 'border-white/20 bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {tech.icon}
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">{currentDemo.title}</h4>
              <p className="text-gray-300 mb-4">{currentDemo.description}</p>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayPause}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? 'Pause' : 'Play'} Demo
                </button>
                
                <button
                  onClick={resetDemo}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-300">Progress</span>
                <span className="text-sm text-gray-400">
                  {currentStep + 1} / {currentDemo.steps.length}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / currentDemo.steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Demo Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400 ml-4">Terminal</span>
            </div>
            
            <div className="font-mono text-sm space-y-2 min-h-[400px]">
              <AnimatePresence>
                {currentDemo.steps.slice(0, currentStep + 1).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center gap-2 ${
                      index === currentStep ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    <span className="text-green-400">$</span>
                    <span>{step}</span>
                    {index === currentStep && isPlaying && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-blue-400"
                      >
                        _
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Demos</h3>
            <p className="text-gray-300">Watch technologies work in real-time with interactive demonstrations</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Customizable</h3>
            <p className="text-gray-300">Adjust parameters and see how different settings affect performance</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Code Examples</h3>
            <p className="text-gray-300">Get hands-on with actual code implementations and examples</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026;