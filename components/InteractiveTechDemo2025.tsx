'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Settings, 
  Code, 
  Cpu, 
  Database, 
  Network,
  Zap,
  Brain,
  Shield,
  Globe,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev + 1) % 101);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const demos = [
    {
      id: 'ai-processing',
      title: 'AI Neural Processing',
      description: 'Watch our AI system process complex data in real-time',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Real-time Data Processing',
        'Neural Network Visualization',
        'Pattern Recognition',
        'Predictive Analytics'
      ],
      metrics: [
        { label: 'Processing Speed', value: '2.5M ops/sec', status: 'excellent' },
        { label: 'Accuracy', value: '99.7%', status: 'excellent' },
        { label: 'Latency', value: '0.3ms', status: 'excellent' },
        { label: 'Memory Usage', value: '45%', status: 'good' }
      ]
    },
    {
      id: 'automation-workflow',
      title: 'Smart Automation Workflow',
      description: 'See how our automation system handles complex business processes',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Workflow Orchestration',
        'Task Automation',
        'Error Handling',
        'Performance Monitoring'
      ],
      metrics: [
        { label: 'Tasks Completed', value: '1,247', status: 'excellent' },
        { label: 'Success Rate', value: '98.9%', status: 'excellent' },
        { label: 'Time Saved', value: '340 hrs', status: 'excellent' },
        { label: 'Error Rate', value: '0.1%', status: 'excellent' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Simulation',
      description: 'Experience quantum algorithms solving complex optimization problems',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Quantum Algorithm Execution',
        'Superposition Visualization',
        'Entanglement Simulation',
        'Optimization Results'
      ],
      metrics: [
        { label: 'Qubits', value: '128', status: 'excellent' },
        { label: 'Coherence Time', value: '50μs', status: 'good' },
        { label: 'Gate Fidelity', value: '99.5%', status: 'excellent' },
        { label: 'Speedup', value: '1000x', status: 'excellent' }
      ]
    },
    {
      id: 'edge-computing',
      title: 'Edge AI Processing',
      description: 'Distributed AI processing across edge devices and sensors',
      icon: Network,
      color: 'from-orange-500 to-red-500',
      features: [
        'Distributed Processing',
        'Real-time Inference',
        'Device Synchronization',
        'Bandwidth Optimization'
      ],
      metrics: [
        { label: 'Devices Connected', value: '2,847', status: 'excellent' },
        { label: 'Data Processed', value: '15.2 TB', status: 'excellent' },
        { label: 'Response Time', value: '12ms', status: 'excellent' },
        { label: 'Uptime', value: '99.9%', status: 'excellent' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-500';
      case 'good': return 'text-yellow-500';
      case 'warning': return 'text-orange-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return CheckCircle;
      case 'good': return CheckCircle;
      case 'warning': return AlertCircle;
      case 'error': return AlertCircle;
      default: return Info;
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            INTERACTIVE TECH DEMO
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Technology in
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Interact with our cutting-edge AI and automation technologies through live demonstrations and real-time performance metrics.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <demo.icon className="w-5 h-5 mr-2" />
              {demo.title}
            </button>
          ))}
        </motion.div>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side - Demo Visualization */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{demos[activeDemo].title}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>

                {/* Demo Visualization */}
                <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {demos[activeDemo].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-cyan-400 mb-1">
                          {Math.floor(Math.random() * 1000) + 100}
                        </div>
                        <div className="text-sm text-gray-300">{feature}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {demos[activeDemo].description}
                </p>
              </div>
            </div>

            {/* Right Side - Metrics */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-6">Real-Time Metrics</h4>
              
              {demos[activeDemo].metrics.map((metric, index) => {
                const StatusIcon = getStatusIcon(metric.status);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-300 font-medium">{metric.label}</span>
                      <StatusIcon className={`w-5 h-5 ${getStatusColor(metric.status)}`} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${
                          metric.status === 'excellent' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          metric.status === 'good' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          metric.status === 'warning' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                          'bg-gradient-to-r from-red-500 to-pink-500'
                        }`}
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group"
              >
                Try Interactive Demo
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a personalized demo with our technology experts and see how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Code className="w-5 h-5 mr-2" />
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;