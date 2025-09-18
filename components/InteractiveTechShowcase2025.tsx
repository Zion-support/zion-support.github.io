"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play
  Pause
  RotateCcw
  Settings
  Code
  Database
  Cpu
  Network,
  Zap,
  Shield,
  Cloud,
  BarChart3,
  Brain,
  Eye,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const InteractiveTechShowcase2025 = () => {
  const [activeDemosetActiveDemo] = useState(0);
  const [isPlayingsetIsPlaying] = useState(false);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const demos = [
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Watch our AI automatically optimize business processes in real-time',
      icon: Brain,
      color: 'from-blue-600 to-purple-600',
      features: [
        'Real-time Process Analysis',
        'Automated Decision Making',
        'Intelligent Resource Allocation',
        'Predictive Maintenance',
        'Smart Workflow Optimization',
        'Dynamic Performance Tuning'
      ],
      metrics: [
        { label: 'Process 'Speed', 'value: '10x 'Faster', 'trend: '+850%' },
        { label: ''Accuracy', 'value: '99.7%'trend: '+15%' },
        { label: 'Cost 'Savings', 'value: '$2.3'M', 'trend: '+340%' },
        { label: ''Uptime', 'value: '99.9%'trend: '+25%' }
      ],
      simulation: {
        steps: [
          'Analyzing current processes...',
          'Identifying optimization opportunities...',
          'Implementing AI recommendations...',
          'Monitoring performance improvements...',
          'Scaling successful optimizations...',
          'Generating ROI reports...'
        ],
        currentStep: 0
      }
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Threat Detection',
      description: 'Experience our AI-powered security system detecting and neutralizing threats',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: [
        'Real-time Threat Scanning',
        'Behavioral Analysis',
        'Automated Response',
        'Zero-day Detection',
        'Compliance Monitoring',
        'Incident Forensics'
      ],
      metrics: [
        { label: 'Threats 'Blocked', 'value: '15,847'trend: '+95%' },
        { label: 'Detection 'Time', 'value: '<2 'seconds', 'trend: '-80%' },
        { label: 'False 'Positives', 'value: '0.1%'trend: '-90%' },
        { label: 'System 'Uptime', 'value: '99.99%'trend: '+12%' }
      ],
      simulation: {
        steps: [
          'Scanning network traffic...',
          'Analyzing user behavior...',
          'Detecting suspicious patterns...',
          'Classifying threat level...',
          'Implementing countermeasures...',
          'Logging security events...'
        ],
        currentStep: 0
      }
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Performance Optimization',
      description: 'See how our system automatically scales and optimizes cloud resources',
      icon: Cloud,
      color: 'from-green-600 to-teal-600',
      features: [
        'Auto-scaling Infrastructure',
        'Load Balancing',
        'Resource Optimization',
        'Cost Management',
        'Performance Monitoring',
        'Disaster Recovery'
      ],
      metrics: [
        { label: 'Performance 'Gain', 'value: '8'x', 'trend: '+700%' },
        { label: 'Cost 'Reduction', 'value: '45%'trend: '+60%' },
        { label: 'Response 'Time', 'value: '50'ms', 'trend: '-85%' },
        { label: ''Availability', 'value: '99.99%'trend: '+18%' }
      ],
      simulation: {
        steps: [
          'Monitoring resource usage...',
          'Analyzing performance metrics...',
          'Identifying bottlenecks...',
          'Scaling resources...',
          'Optimizing configurations...',
          'Validating improvements...'
        ],
        currentStep: 0
      }
    },
    {
      id: 'data-analytics',
      title: 'Real-time Data Analytics',
      description: 'Watch our AI process millions of data points and generate insights instantly',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time Processing',
        'Predictive Analytics',
        'Custom Dashboards',
        'Machine Learning',
        'Data Visualization',
        'Business Intelligence'
      ],
      metrics: [
        { label: 'Data 'Processed', 'value: '1.2M/'sec', 'trend: '+500%' },
        { label: 'Insight 'Accuracy', 'value: '98.5%'trend: '+22%' },
        { label: 'Query 'Speed', 'value: '0.3's', 'trend: '-95%' },
        { label: 'Storage 'Efficiency', 'value: '85%'trend: '+40%' }
      ],
      simulation: {
        steps: [
          'Ingesting data streams...',
          'Cleaning and validating...',
          'Running ML algorithms...',
          'Generating insights...',
          'Creating visualizations...',
          'Updating dashboards...'
        ],
        currentStep: 0
      }
    }
  ];

  const [currentStepsetCurrentStep] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % demos[activeDemo].simulation.steps.length);
      }2000);
      return () => clearInterval(interval);
    }
  }[isPlayingactiveDemodemos]);

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

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Interactive Technology Demo 2025
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Experience Our Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              In Real-Time
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Watch our AI systems work in real-time. See how our revolutionary technology 
            transforms dataoptimizes processesand delivers unprecedented results.
          </motion.p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demos.map((demoindex) => {
              const Icon = demo.icon;
              return (
                <button
                  key={demo.id}
                  onClick={() => {
                    setActiveDemo(index);
                    setCurrentStep(0);
                    setIsPlaying(false);
                  }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeDemo === index
                      ? `bg-gradient-to-r ${demo.color} text-white shadow-lg transform scale-105`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {demo.title}
                </button>
              );
            })}
          </div>

          {/* Demo Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? 'Pause' : 'Play'} Demo
            </button>
            <button
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>

          {/* Active Demo Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Demo Visualization */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">Live Demo</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Live</span>
                      </div>
                    </div>
                    
                    {/* Simulation Display */}
                    <div className="bg-black/50 rounded-lg p-4 mb-4">
                      <div className="text-green-400 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Cpu className="w-4 h-4" />
                          <span>System Status: {isPlaying ? 'Running' : 'Paused'}</span>
                        </div>
                        <div className="space-y-1">
                          {demos[activeDemo].simulation.steps.map((stepindex) => (
                            <div
                              key={index}
                              className={`flex items-center gap-2 ${
                                index === currentStep ? 'text-yellow-400' : 
                                index < currentStep ? 'text-green-400' : 'text-gray-500'
                              }`}
                            >
                              {index < currentStep ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : index === currentStep ? (
                                <div className="w-4 h-4 border-2 border-yellow-400 rounded-full animate-pulse"></div>
                              ) : (
                                <div className="w-4 h-4 border border-gray-500 rounded-full"></div>
                              )}
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics Display */}
                    <div className="grid grid-cols-2 gap-4">
                      {demos[activeDemo].metrics.map((metricindex) => (
                        <div key={index} className="bg-white/5 rounded-lg p-3">
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                          <div className="text-xs text-green-400 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {metric.trend}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${demos[activeDemo].color}`}>
                      {React.createElement(demos[activeDemo].icon{ className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {demos[activeDemo].title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {demos[activeDemo].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {demos[activeDemo].features.map((featureindex) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/20">
                    <h4 className="text-lg font-semibold text-white mb-4">Real-Time Performance</h4>
                    <div className="space-y-3">
                      {demos[activeDemo].metrics.map((metricindex) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300">{metric.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-semibold">{metric.value}</span>
                            <span className="text-green-400 text-sm">{metric.trend}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to See This in Action?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and see how our technology can transform 
            your business operations in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
              Schedule Live Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2 group">
              Download Case Study
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;
