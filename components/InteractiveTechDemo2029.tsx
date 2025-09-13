'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Zap, 
  Brain, 
  Rocket, 
  Users,
  Eye,
  Cpu,
  Network,
  Shield,
  Activity,
  BarChart3,
  Globe,
  Star,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const InteractiveTechDemo2029 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            setCurrentDemo((prev) => (prev + 1) % demos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const demos = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Experience quantum-enhanced AI processing in real-time',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Quantum superposition processing',
        'Parallel universe calculations',
        'Instantaneous problem solving',
        'Unbreakable quantum encryption'
      ],
      metrics: [
        { label: 'Processing Speed', value: '1000x', status: 'success' },
        { label: 'Accuracy', value: '99.9%', status: 'success' },
        { label: 'Energy Efficiency', value: '95%', status: 'success' }
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Direct brain-computer interaction simulation',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Thought-to-text conversion',
        'Emotional state analysis',
        'Memory enhancement',
        'Cognitive augmentation'
      ],
      metrics: [
        { label: 'Response Time', value: '0.1ms', status: 'success' },
        { label: 'Accuracy', value: '98.5%', status: 'success' },
        { label: 'Safety Rating', value: 'A+', status: 'success' }
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      description: 'Mars colonization and space manufacturing',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      features: [
        'Zero-gravity manufacturing',
        'Mars habitat construction',
        'Interplanetary communication',
        'Space resource extraction'
      ],
      metrics: [
        { label: 'Mission Success', value: '100%', status: 'success' },
        { label: 'Resource Efficiency', value: '85%', status: 'warning' },
        { label: 'Safety Score', value: 'A', status: 'success' }
      ]
    },
    {
      id: 'consciousness-ai',
      title: 'Conscious AI Systems',
      description: 'AI with self-awareness and emotional intelligence',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Self-awareness protocols',
        'Emotional intelligence',
        'Creative problem solving',
        'Ethical decision making'
      ],
      metrics: [
        { label: 'Consciousness Level', value: 'Level 5', status: 'success' },
        { label: 'Empathy Score', value: '92%', status: 'success' },
        { label: 'Creativity Index', value: 'A+', status: 'success' }
      ]
    }
  ];

  const currentDemoData = demos[currentDemo];

  const handleStart = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setProgress(0);
    setCurrentDemo(0);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))',
              'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
              'linear-gradient(225deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
              'linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            Interactive Technology Demo 2029
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with cutting-edge technologies through our immersive demo platform
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Demo Selection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Select Demo</h3>
              <div className="grid grid-cols-2 gap-4">
                {demos.map((demo, index) => (
                  <button
                    key={demo.id}
                    onClick={() => setCurrentDemo(index)}
                    className={`p-4 rounded-2xl border transition-all duration-300 ${
                      currentDemo === index
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-400 text-white'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <demo.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">{demo.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control Panel */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Demo Controls</h3>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  {isRunning ? 'Running...' : 'Start Demo'}
                </button>
                <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Pause className="w-5 h-5" />
                  Stop
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gradient-to-r from-gray-600 to-slate-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-gray-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>

              {/* Demo Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentDemoData.color}`}>
                    <currentDemoData.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{currentDemoData.title}</h4>
                    <p className="text-gray-300 text-sm">{currentDemoData.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Features</h3>
              <div className="space-y-3">
                {currentDemoData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 min-h-[600px]">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">{currentDemoData.title}</h3>
                <p className="text-gray-300">{currentDemoData.description}</p>
              </div>

              {/* Demo Visualization */}
              <div className="relative h-80 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center"
                    animate={isRunning ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    } : {}}
                    transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }}
                  >
                    <currentDemoData.icon className="w-16 h-16 text-white" />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                {isRunning && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                        style={{
                          top: `${20 + (i * 10)}%`,
                          left: `${20 + (i * 15)}%`
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentDemoData.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-2xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-gray-300 text-sm mb-2">{metric.label}</div>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      metric.status === 'success' ? 'bg-green-500/20 text-green-400' :
                      metric.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {metric.status === 'success' ? <CheckCircle className="w-3 h-3" /> :
                       metric.status === 'warning' ? <AlertCircle className="w-3 h-3" /> :
                       <Info className="w-3 h-3" />}
                      {metric.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of innovators exploring tomorrow's technologies today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Start Full Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Customize Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2029;