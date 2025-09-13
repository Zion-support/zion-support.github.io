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
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Globe, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Code,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  Lock,
  RefreshCw
} from 'lucide-react';

const InteractiveTechDemo2027 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState('ai-assistant');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev + 1) % 100);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const demos = {
    'ai-assistant': {
      title: 'AI Assistant Demo',
      description: 'Experience our advanced AI assistant in action',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Natural Language Processing',
        'Context-Aware Responses',
        'Multi-Language Support',
        'Real-time Learning'
      ],
      steps: [
        { action: 'User asks question', response: 'AI processes request', time: 0 },
        { action: 'Context analysis', response: 'Understanding intent', time: 25 },
        { action: 'Knowledge retrieval', response: 'Searching database', time: 50 },
        { action: 'Response generation', response: 'Creating answer', time: 75 },
        { action: 'Response delivered', response: 'Answer provided', time: 100 }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Demo',
      description: 'See quantum algorithms solving complex problems',
      icon: Cpu,
      color: 'from-cyan-600 to-teal-600',
      features: [
        'Quantum Supremacy',
        'Exponential Speedup',
        'Parallel Processing',
        'Quantum Entanglement'
      ],
      steps: [
        { action: 'Problem initialization', response: 'Loading quantum state', time: 0 },
        { action: 'Qubit preparation', response: 'Setting up qubits', time: 20 },
        { action: 'Quantum gates', response: 'Applying operations', time: 40 },
        { action: 'Measurement', response: 'Reading results', time: 70 },
        { action: 'Solution output', response: 'Problem solved', time: 100 }
      ]
    },
    'automation': {
      title: 'Process Automation Demo',
      description: 'Watch intelligent automation in action',
      icon: Settings,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Workflow Automation',
        'Decision Making',
        'Error Handling',
        'Performance Optimization'
      ],
      steps: [
        { action: 'Process triggered', response: 'Starting automation', time: 0 },
        { action: 'Data validation', response: 'Checking inputs', time: 15 },
        { action: 'Rule execution', response: 'Running workflows', time: 35 },
        { action: 'Quality check', response: 'Validating output', time: 65 },
        { action: 'Task completed', response: 'Process finished', time: 100 }
      ]
    },
    'security': {
      title: 'Security Demo',
      description: 'Advanced security systems protecting your data',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: [
        'Threat Detection',
        'Real-time Monitoring',
        'Automated Response',
        'Zero Trust Architecture'
      ],
      steps: [
        { action: 'Threat detected', response: 'Analyzing threat', time: 0 },
        { action: 'Risk assessment', response: 'Evaluating severity', time: 20 },
        { action: 'Response triggered', response: 'Activating defenses', time: 45 },
        { action: 'Threat neutralized', response: 'Security restored', time: 80 },
        { action: 'Incident logged', response: 'Report generated', time: 100 }
      ]
    }
  };

  const currentDemo = demos[activeDemo];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Interactive Tech Demo 2027
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience our cutting-edge technologies in action. Try interactive demos and see 
            how our solutions can transform your business processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Demo</h2>
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`w-full p-6 rounded-2xl border transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/50'
                    : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${demo.color}`}>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-1">{demo.title}</h3>
                    <p className="text-gray-300 text-sm">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Demo Header */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentDemo.color}`}>
                  <currentDemo.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentDemo.title}</h3>
                  <p className="text-gray-300">{currentDemo.description}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={handlePlayPause}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Demo Visualization */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 min-h-96">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-white mb-2">Live Demo</h4>
                <p className="text-gray-300">Watch the technology in action</p>
              </div>

              {/* Animated Demo Area */}
              <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={isPlaying ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0],
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={{ 
                      duration: 2,
                      repeat: isPlaying ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentDemo.color} flex items-center justify-center`}
                  >
                    <currentDemo.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                {isPlaying && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          x: [0, 100, 0],
                          y: [0, -50, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                        className="absolute w-2 h-2 bg-purple-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              {/* Current Step Display */}
              <div className="mt-6">
                <h5 className="text-lg font-bold text-white mb-4">Process Steps</h5>
                <div className="space-y-2">
                  {currentDemo.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0.3 }}
                      animate={{ 
                        opacity: progress >= step.time ? 1 : 0.3,
                        backgroundColor: progress >= step.time ? 'rgba(147, 51, 234, 0.1)' : 'transparent'
                      }}
                      className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        progress >= step.time ? 'bg-purple-400' : 'bg-gray-500'
                      }`} />
                      <div className="flex-1">
                        <div className="text-white font-medium">{step.action}</div>
                        <div className="text-gray-400 text-sm">{step.response}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-400/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our experts and see how our technologies 
              can transform your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:transform hover:scale-105">
                <Play className="w-5 h-5" />
                Schedule Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <Code className="w-5 h-5" />
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2027;