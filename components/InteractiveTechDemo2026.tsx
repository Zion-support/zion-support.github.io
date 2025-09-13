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
  TrendingUp,
  Users,
  Globe,
  Code,
  BarChart3,
  Lightbulb,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Eye,
  MousePointer,
  Keyboard,
  Monitor
} from 'lucide-react';

const InteractiveTechDemo2026 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [userInteractions, setUserInteractions] = useState(0);
  const [performance, setPerformance] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate performance metrics
    const interval = setInterval(() => {
      setPerformance(prev => Math.min(100, prev + Math.random() * 5));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Experience direct brain-computer interaction',
      icon: Brain,
      color: 'from-purple-500 to-blue-500',
      features: [
        'Real-time thought processing',
        'Enhanced cognitive abilities',
        'Seamless AI integration',
        '95% efficiency boost'
      ],
      simulation: {
        type: 'neural',
        data: 'Processing neural signals...',
        metrics: { speed: '1000x', accuracy: '99.9%', latency: '<1ms' }
      }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Witness quantum supremacy in action',
      icon: Zap,
      color: 'from-cyan-500 to-teal-500',
      features: [
        'Quantum error correction',
        'Exponential processing power',
        'Breakthrough algorithms',
        '10^15 operations/second'
      ],
      simulation: {
        type: 'quantum',
        data: 'Quantum entanglement active...',
        metrics: { qubits: '1M+', coherence: '99.9%', fidelity: '99.99%' }
      }
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Demo',
      description: 'See autonomous business systems in action',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      features: [
        'Self-healing infrastructure',
        'Predictive maintenance',
        'Autonomous decision making',
        '99.9% uptime guarantee'
      ],
      simulation: {
        type: 'automation',
        data: 'Autonomous systems running...',
        metrics: { uptime: '99.9%', efficiency: '300%', errors: '0.01%' }
      }
    }
  ];

  const techSpecs = [
    { label: 'Processing Power', value: '10^18 FLOPS', icon: Cpu },
    { label: 'Memory Capacity', value: '1 Exabyte', icon: Database },
    { label: 'Network Speed', value: '1 Petabit/s', icon: Cloud },
    { label: 'Security Level', value: 'Quantum-Proof', icon: Shield }
  ];

  const handleInteraction = () => {
    setUserInteractions(prev => prev + 1);
  };

  const currentDemoData = demos[currentDemo];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Play className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Interactive Technology Demo 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Experience the
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Interact with cutting-edge AI, quantum computing, and neural interface technologies 
              in real-time. See the future of technology in action.
            </p>
          </motion.div>
        </div>

        {/* Demo Selector */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {demos.map((demo, index) => (
              <motion.button
                key={demo.id}
                onClick={() => setCurrentDemo(index)}
                className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  currentDemo === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <demo.icon className="w-5 h-5 mr-3" />
                {demo.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Demo Area */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Interface */}
            <motion.div
              key={currentDemo}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${currentDemoData.color} flex items-center justify-center mr-4`}>
                    <currentDemoData.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentDemoData.title}</h2>
                    <p className="text-gray-300">{currentDemoData.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setUserInteractions(0)}
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Simulation Display */}
              <div className="bg-black/50 rounded-2xl p-6 mb-6 min-h-[300px] flex flex-col justify-center">
                <div className="text-center">
                  <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                  >
                    <currentDemoData.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {currentDemoData.simulation.data}
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {Object.entries(currentDemoData.simulation.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">User Interactions:</span>
                  <span className="text-white font-semibold">{userInteractions}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Performance:</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-700 rounded-full h-2 mr-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${performance}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <span className="text-white font-semibold">{Math.round(performance)}%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features and Specs */}
            <motion.div
              key={`features-${currentDemo}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Features */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <div className="space-y-3">
                  {currentDemoData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                <div className="space-y-4">
                  {techSpecs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                    >
                      <div className="flex items-center">
                        <spec.icon className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-gray-300">{spec.label}</span>
                      </div>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30"
              >
                <h3 className="text-xl font-bold text-white mb-3">Ready to Experience This?</h3>
                <p className="text-gray-300 mb-4">
                  Get hands-on access to these revolutionary technologies and transform your business.
                </p>
                
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleInteraction}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Interactive Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Schedule Full Demo
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Active Demos', value: '1,000+', icon: Play },
              { label: 'User Interactions', value: '50M+', icon: MousePointer },
              { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
              { label: 'Global Users', value: '10M+', icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026;