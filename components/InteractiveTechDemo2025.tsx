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
  Target,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentDemo(prev => (prev + 1) % demos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const demos = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Watch how our AI systems automatically optimize business processes in real-time',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time process optimization',
        'Predictive maintenance alerts',
        'Automated decision making',
        '99.9% accuracy rate'
      ],
      metrics: [
        { label: 'Process Speed', value: '300%', improvement: '+200%' },
        { label: 'Error Rate', value: '0.1%', improvement: '-95%' },
        { label: 'Cost Savings', value: '$2.5M', improvement: '+150%' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Experience the power of quantum algorithms solving complex problems instantly',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Quantum supremacy achieved',
        'Exponential speed improvements',
        'Unbreakable encryption',
        'Revolutionary problem solving'
      ],
      metrics: [
        { label: 'Processing Speed', value: '1000x', improvement: '+999x' },
        { label: 'Security Level', value: '100%', improvement: '+100%' },
        { label: 'Problem Complexity', value: 'Infinite', improvement: '∞' }
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Technology',
      description: 'See how direct brain-computer interfaces are revolutionizing human-computer interaction',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Thought-controlled applications',
        'Neural pattern recognition',
        'Real-time brain monitoring',
        'Seamless human-AI integration'
      ],
      metrics: [
        { label: 'Response Time', value: '0.1ms', improvement: '-99.9%' },
        { label: 'Accuracy', value: '99.9%', improvement: '+50%' },
        { label: 'User Satisfaction', value: '98%', improvement: '+40%' }
      ]
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion',
      description: 'Witness the convergence of quantum computing and artificial intelligence',
      icon: Sparkles,
      color: 'from-orange-600 to-red-600',
      features: [
        'Quantum machine learning',
        'Hybrid processing systems',
        'Advanced pattern recognition',
        'Breakthrough insights generation'
      ],
      metrics: [
        { label: 'Learning Speed', value: '10x', improvement: '+900%' },
        { label: 'Pattern Recognition', value: '99.9%', improvement: '+30%' },
        { label: 'Insight Generation', value: '1000x', improvement: '+999x' }
      ]
    }
  ];

  const currentDemoData = demos[currentDemo];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Interactive Demo
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the Future
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technology in Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch live demonstrations of our revolutionary technologies. See how AI, quantum computing, 
            and neural interfaces are transforming the world in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Demo Selector */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Your Demo</h3>
              <div className="grid grid-cols-2 gap-3">
                {demos.map((demo, index) => (
                  <button
                    key={demo.id}
                    onClick={() => {
                      setCurrentDemo(index);
                      setProgress(0);
                    }}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      currentDemo === index
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <demo.icon className={`w-6 h-6 mb-2 ${
                      currentDemo === index ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                    <div className={`text-sm font-medium ${
                      currentDemo === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {demo.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Playback Controls */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? 'Pause' : 'Play'} Demo
                </button>
                <button
                  onClick={() => {
                    setProgress(0);
                    setIsPlaying(false);
                  }}
                  className="flex items-center gap-2 bg-white/10 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Key Features</h4>
              {currentDemoData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-lg">
              {/* Demo Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentDemoData.color}`}>
                  <currentDemoData.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentDemoData.title}</h3>
                  <p className="text-gray-300">{currentDemoData.description}</p>
                </div>
              </div>

              {/* Animated Demo Area */}
              <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                {/* Animated Elements */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDemo}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Central Hub */}
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                        className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <currentDemoData.icon className="w-12 h-12 text-white" />
                      </motion.div>
                      
                      {/* Orbiting Elements */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-purple-400 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: '0 0',
                          }}
                          animate={{
                            rotate: isPlaying ? 360 : 0,
                            x: Math.cos((i * 60) * Math.PI / 180) * 60,
                            y: Math.sin((i * 60) * Math.PI / 180) * 60,
                          }}
                          transition={{
                            duration: 3,
                            repeat: isPlaying ? Infinity : 0,
                            ease: "linear",
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating Particles */}
                {isPlaying && [...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {currentDemoData.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                    <div className="text-xs text-green-400">{metric.improvement}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience These Technologies?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              These aren't just demos - they're real technologies powering businesses worldwide. 
              Get hands-on access to the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <Play className="w-5 h-5" />
                Start Your Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Star className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTechDemo2025;