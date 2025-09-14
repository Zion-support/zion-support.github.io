"use client";
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
  Shield,
  BarChart3,
  Code,
  Database,
  Cloud,
  Cpu,
  Wifi,
  Lock,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp
} from 'lucide-react';

const InteractiveTechDemo2027 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('ai-processing');
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = {
    'ai-processing': {
      title: 'AI Quantum Processing',
      description: 'Experience real-time quantum-enhanced AI processing',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      steps: [
        { title: 'Initializing Quantum Core', status: 'completed' },
        { title: 'Loading Neural Networks', status: 'completed' },
        { title: 'Processing Data Stream', status: 'in-progress' },
        { title: 'Generating Insights', status: 'pending' },
        { title: 'Optimizing Results', status: 'pending' }
      ],
      metrics: [
        { label: 'Processing Speed', value: '1.2M ops/sec', trend: '+15%' },
        { label: 'Accuracy', value: '99.97%', trend: '+0.3%' },
        { label: 'Efficiency', value: '94.2%', trend: '+8.1%' },
        { label: 'Power Usage', value: '2.3kW', trend: '-12%' }
      ]
    },
    'automation': {
      title: 'Autonomous Automation',
      description: 'Watch intelligent systems manage complex workflows',
      icon: Zap,
      color: 'from-green-600 to-teal-600',
      steps: [
        { title: 'Analyzing Workflow', status: 'completed' },
        { title: 'Identifying Bottlenecks', status: 'completed' },
        { title: 'Optimizing Processes', status: 'in-progress' },
        { title: 'Implementing Changes', status: 'pending' },
        { title: 'Monitoring Results', status: 'pending' }
      ],
      metrics: [
        { label: 'Tasks Automated', value: '847', trend: '+23%' },
        { label: 'Time Saved', value: '2.3k hours', trend: '+45%' },
        { label: 'Error Rate', value: '0.02%', trend: '-67%' },
        { label: 'Cost Reduction', value: '$1.2M', trend: '+34%' }
      ]
    },
    'neural-interface': {
      title: 'Neural Interface',
      description: 'Direct brain-computer interaction simulation',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      steps: [
        { title: 'Neural Signal Detection', status: 'completed' },
        { title: 'Signal Processing', status: 'completed' },
        { title: 'AI Interpretation', status: 'in-progress' },
        { title: 'Response Generation', status: 'pending' },
        { title: 'Feedback Loop', status: 'pending' }
      ],
      metrics: [
        { label: 'Signal Strength', value: '98.4%', trend: '+5.2%' },
        { label: 'Response Time', value: '12ms', trend: '-23%' },
        { label: 'Accuracy', value: '99.1%', trend: '+2.1%' },
        { label: 'User Comfort', value: '94%', trend: '+8%' }
      ]
    }
  };

  const currentDemoData = demos[currentDemo];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const resetDemo = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-400 animate-spin" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 mb-6">
            <Play className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Interactive Demo 2027</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Interactive Tech
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Demo 2027
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience our cutting-edge technology in action. Watch real-time demonstrations 
            of AI processing, automation, and neural interfaces that are revolutionizing industries.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => {
                setCurrentDemo(key);
                resetDemo();
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                currentDemo === key
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <demo.icon className="w-5 h-5" />
              {demo.title}
            </button>
          ))}
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
        >
          {/* Demo Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 lg:mb-0">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${currentDemoData.color}`}>
                <currentDemoData.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{currentDemoData.title}</h3>
                <p className="text-gray-300">{currentDemoData.description}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isPlaying ? 'Pause' : 'Start'} Demo
              </button>
              <button
                onClick={resetDemo}
                className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Demo Progress</span>
              <span className="text-sm text-white font-semibold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${currentDemoData.color}`}
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Demo Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Process Steps</h4>
              <div className="space-y-3">
                {currentDemoData.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      step.status === 'completed' 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : step.status === 'in-progress'
                        ? 'bg-yellow-500/20 border border-yellow-500/30'
                        : 'bg-gray-700/50 border border-gray-600/30'
                    }`}
                  >
                    {getStatusIcon(step.status)}
                    <span className={`text-sm ${
                      step.status === 'completed' 
                        ? 'text-green-300' 
                        : step.status === 'in-progress'
                        ? 'text-yellow-300'
                        : 'text-gray-400'
                    }`}>
                      {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Real-time Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {currentDemoData.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">{metric.label}</span>
                      <div className="flex items-center gap-1 text-green-400 text-xs">
                        <TrendingUp className="w-3 h-3" />
                        {metric.trend}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo to see how our technology can transform your business. 
              Our experts will guide you through a customized demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Schedule Demo
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
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