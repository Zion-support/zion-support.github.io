'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Code, 
  Database, 
  Cpu, 
  Network,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Eye,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Download,
  Share2,
  Bookmark
} from 'lucide-react';

const InteractiveTechDemo2026 = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => (prev + 1) % 101);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const demos = [
    {
      id: 'ai-processing',
      title: 'AI Processing Demo',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      description: 'Watch AI algorithms process complex data in real-time',
      features: [
        'Real-time Data Processing',
        'Machine Learning Inference',
        'Pattern Recognition',
        'Predictive Analytics',
        'Natural Language Understanding',
        'Computer Vision Analysis'
      ],
      metrics: [
        { label: 'Processing Speed', value: '2.5ms', trend: '+15%' },
        { label: 'Accuracy', value: '99.7%', trend: '+2.1%' },
        { label: 'Throughput', value: '10K req/s', trend: '+25%' }
      ]
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation',
      icon: Cpu,
      color: 'from-cyan-600 to-teal-600',
      description: 'Experience quantum computing power through interactive simulations',
      features: [
        'Quantum State Visualization',
        'Qubit Manipulation',
        'Quantum Entanglement',
        'Quantum Error Correction',
        'Quantum Algorithms',
        'Quantum Optimization'
      ],
      metrics: [
        { label: 'Qubits', value: '1024', trend: '+100%' },
        { label: 'Coherence Time', value: '50μs', trend: '+40%' },
        { label: 'Gate Fidelity', value: '99.9%', trend: '+5%' }
      ]
    },
    {
      id: 'automation-workflow',
      title: 'Smart Automation',
      icon: Zap,
      color: 'from-orange-600 to-red-600',
      description: 'See intelligent automation workflows in action',
      features: [
        'Workflow Orchestration',
        'Intelligent Routing',
        'Adaptive Learning',
        'Error Handling',
        'Resource Optimization',
        'Performance Monitoring'
      ],
      metrics: [
        { label: 'Efficiency', value: '95%', trend: '+12%' },
        { label: 'Uptime', value: '99.9%', trend: '+0.5%' },
        { label: 'Cost Savings', value: '60%', trend: '+8%' }
      ]
    },
    {
      id: 'data-analytics',
      title: 'Advanced Analytics',
      icon: BarChart3,
      color: 'from-green-600 to-emerald-600',
      description: 'Explore real-time data analytics and insights',
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Anomaly Detection',
        'Trend Analysis',
        'Custom Visualizations',
        'Automated Reporting'
      ],
      metrics: [
        { label: 'Data Points', value: '1M+', trend: '+50%' },
        { label: 'Insights Generated', value: '500/hr', trend: '+30%' },
        { label: 'Response Time', value: '0.1s', trend: '+20%' }
      ]
    }
  ];

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping" />
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Interactive Demo
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Experience Technology in Action
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Interact with cutting-edge technologies and see real-time performance metrics as they process data and execute complex operations.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <Icon className="w-5 h-5" />
                {demo.title}
              </button>
            );
          })}
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Demo Controls */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{demos[activeDemo].title}</h3>
                <p className="text-blue-100 mb-6">{demos[activeDemo].description}</p>
              </div>

              {/* Control Panel */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-4">Demo Controls</h4>
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={handlePlayPause}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      isRunning
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    {isRunning ? 'Pause' : 'Play'}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gray-500 hover:bg-gray-600 text-white transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reset
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-blue-100 mb-2">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Active Features</h4>
                  <div className="space-y-2">
                    {demos[activeDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Visualization */}
            <div className="relative">
              <div className={`h-96 rounded-2xl bg-gradient-to-br ${demos[activeDemo].color} p-8 relative overflow-hidden`}>
                {/* Animated Background */}
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                
                {/* Demo Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      {React.createElement(demos[activeDemo].icon, { className: "w-10 h-10" })}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{demos[activeDemo].title}</h4>
                    <p className="text-white/80">Interactive Demo</p>
                  </div>

                  {/* Real-time Metrics */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {demos[activeDemo].metrics.map((metric, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold">{metric.value}</div>
                        <div className="text-xs text-white/70 mb-1">{metric.label}</div>
                        <div className="text-xs text-green-300 flex items-center justify-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {metric.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Elements */}
                {isRunning && (
                  <>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping" />
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Demo
                </button>
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-full transition-all duration-300">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Get hands-on access to these revolutionary technologies and transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026;