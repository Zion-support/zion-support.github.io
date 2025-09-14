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
  Database,
  Network,
  Shield,
  Zap,
  Brain,
  Rocket,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDemo, setSelectedDemo] = useState('ai-processing');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = {
    'ai-processing': {
      title: 'AI Processing Pipeline',
      description: 'Real-time AI model inference and processing',
      steps: [
        { id: 1, name: 'Data Input', status: 'completed', icon: Database },
        { id: 2, name: 'Preprocessing', status: 'completed', icon: Settings },
        { id: 3, name: 'AI Inference', status: 'running', icon: Brain },
        { id: 4, name: 'Post-processing', status: 'pending', icon: Code },
        { id: 5, name: 'Output', status: 'pending', icon: CheckCircle }
      ],
      metrics: [
        { label: 'Processing Time', value: '2.3ms', trend: '+15%' },
        { label: 'Accuracy', value: '99.2%', trend: '+2.1%' },
        { label: 'Throughput', value: '1.2K req/s', trend: '+8.3%' }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Simulation',
      description: 'Quantum algorithm execution and optimization',
      steps: [
        { id: 1, name: 'Qubit Initialization', status: 'completed', icon: Cpu },
        { id: 2, name: 'Quantum Gates', status: 'running', icon: Network },
        { id: 3, name: 'Entanglement', status: 'pending', icon: Zap },
        { id: 4, name: 'Measurement', status: 'pending', icon: CheckCircle }
      ],
      metrics: [
        { label: 'Qubits', value: '128', trend: '+50%' },
        { label: 'Coherence Time', value: '100μs', trend: '+25%' },
        { label: 'Gate Fidelity', value: '99.9%', trend: '+0.1%' }
      ]
    },
    'neural-networks': {
      title: 'Neural Network Training',
      description: 'Deep learning model training and optimization',
      steps: [
        { id: 1, name: 'Data Loading', status: 'completed', icon: Database },
        { id: 2, name: 'Forward Pass', status: 'running', icon: Brain },
        { id: 3, name: 'Loss Calculation', status: 'pending', icon: AlertCircle },
        { id: 4, name: 'Backpropagation', status: 'pending', icon: RotateCcw },
        { id: 5, name: 'Weight Update', status: 'pending', icon: Settings }
      ],
      metrics: [
        { label: 'Epoch', value: '45/100', trend: '+5' },
        { label: 'Loss', value: '0.023', trend: '-12%' },
        { label: 'Accuracy', value: '94.7%', trend: '+3.2%' }
      ]
    }
  };

  const currentDemo = demos[selectedDemo as keyof typeof demos];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500 bg-green-100';
      case 'running': return 'text-blue-500 bg-blue-100';
      case 'pending': return 'text-gray-400 bg-gray-100';
      default: return 'text-gray-400 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'running': return Play;
      case 'pending': return AlertCircle;
      default: return AlertCircle;
    }
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Interactive Tech Demo 2025
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Technology in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with cutting-edge technologies through live demonstrations and real-time simulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-6">Select Demo</h3>
              <div className="space-y-3">
                {Object.entries(demos).map(([key, demo]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDemo(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedDemo === key
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedDemo === key ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{demo.title}</div>
                        <div className="text-sm opacity-80">{demo.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Demo Area */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{currentDemo.title}</h3>
                  <p className="text-gray-300">{currentDemo.description}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePlayPause}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <RotateCcw className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Process Flow</h4>
                <div className="space-y-3">
                  {currentDemo.steps.map((step, index) => {
                    const StatusIcon = getStatusIcon(step.status);
                    return (
                      <motion.div
                        key={step.id}
                        className={`flex items-center p-4 rounded-xl border ${
                          step.status === 'running' 
                            ? 'border-blue-500/50 bg-blue-500/10' 
                            : 'border-white/20 bg-white/5'
                        }`}
                        animate={step.status === 'running' ? {
                          boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.5)', '0 0 0 10px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0)'],
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: step.status === 'running' ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${getStatusColor(step.status)}`}>
                          <StatusIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{step.name}</div>
                          <div className="text-sm text-gray-400 capitalize">{step.status}</div>
                        </div>
                        {step.status === 'running' && (
                          <motion.div
                            className="w-2 h-2 bg-blue-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Live Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentDemo.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
                      <div className="text-xs text-green-400 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {metric.trend}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build the Future?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Start implementing these technologies in your projects today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Code className="w-5 h-5 mr-2" />
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteractiveTechDemo2025;