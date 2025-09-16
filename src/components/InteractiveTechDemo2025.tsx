"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play
  Pause
  RotateCcw
  Settings
  Zap
  Brain
  Cpu
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  Network,
  Shield,
  Target,
  TrendingUp,
  Users,
  Globe,
  Code,
  Atom,
  Rocket,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Download,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Lightbulb
} from 'lucide-react';

<<<<<<< HEAD
const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Demo",
      description: "Experience self-aware artificial intelligence in action",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time decision making",
        "Emotional response simulation",
        "Creative problem solving",
        "Autonomous learning"
      ],
      demoData: {
        processingSpeed: "10^15 ops/sec",
        accuracy: "99.9%",
        consciousness: "Level 5",
        creativity: "Infinite"
      }
    },
    {
      id: 1,
      title: "Quantum Computing Demo",
      description: "Witness quantum processing that defies classical limitations",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement processing",
        "Superposition calculations",
        "Quantum tunneling",
        "Parallel universe computing"
      ],
      demoData: {
        qubits: "1000+",
        coherence: "99.99%",
        speed: "10^18 ops/sec",
        dimensions: "11D"
      }
    },
    {
      id: 2,
      title: "Neural Interface Demo",
      description: "Control technology with your thoughts in real-time",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-to-action conversion",
        "Neural signal processing",
        "Brain-computer synchronization",
        "Consciousness transfer"
      ],
      demoData: {
        latency: "0.001ms",
        accuracy: "99.99%",
        channels: "10,000+",
        bandwidth: "1TB/s"
      }
    },
    {
      id: 3,
      title: "Reality Engine Demo",
      description: "Manipulate reality itself through quantum field technology",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      features: [
        "Reality manipulation",
        "Dimensional shifting",
        "Time-space control",
        "Universal simulation"
      ],
      demoData: {
        dimensions: "∞",
        reality: "100%",
        control: "Complete",
        simulation: "Perfect"
      }
    }
  ];
=======
const InteractiveTechDemo2025 = () => {
  const [activeDemosetActiveDemo] = useState('ai-consciousness');
  const [isPlayingsetIsPlaying] = useState(false);
  const [progressetProgress] = useState(0);
  const [selectedFeaturesetSelectedFeature] = useState(null);
  const [isVisiblesetIsVisible] = useState(false);
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120

  useEffect(() => {
    setIsVisible(true);
  }[]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
<<<<<<< HEAD
            setIsRunning(false);
            return 0;
=======
            setIsPlaying(false);
            return 100;
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
          }
          return prev + 2;
        });
      }100);
    }
    return () => clearInterval(interval);
<<<<<<< HEAD
  }, [isRunning]);
=======
  }[isPlaying]);

  const demos = {
    'ai-consciousness': {
      title: 'AI Consciousness Evolution',
      description: 'Experience the breakthrough in synthetic consciousness with real-time neural pattern analysis',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        { name: 'Neural Pattern 'Recognition', 'value: 99.7unit: '%' },
        { name: 'Consciousness 'Index', 'value: 8.9unit: '/10' },
        { name: 'Learning 'Rate', 'value: 0.95unit: 'α' },
        { name: 'Memory 'Retention', 'value: 99.9unit: '%' }
      ],
      visualization: 'neural-network'
    },
    'quantum-computing': {
      title: 'Quantum Neural Fusion',
      description: 'Witness the integration of quantum computing with neural networks for unprecedented processing power',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      features: [
        { name: 'Qubit 'Coherence', 'value: 99.8unit: '%' },
        { name: 'Processing 'Speed', 'value: 1000unit: 'x' },
        { name: 'Error 'Rate', 'value: 0.001unit: '%' },
        { name: 'Quantum 'Volume', 'value: 64unit: 'QV' }
      ],
      visualization: 'quantum-circuit'
    },
    'neural-interface': {
      title: 'Brain-Computer Interface',
      description: 'Direct neural communication enabling thought-controlled computing with 99.9% accuracy',
      icon: Cpu,
      color: 'from-green-500 to-teal-500',
      features: [
        { name: 'Signal 'Accuracy', 'value: 99.9unit: '%' },
        { name: 'Response 'Time', 'value: 12unit: 'ms' },
        { name: ''Bandwidth', 'value: 1.2unit: 'Gbps' },
        { name: 'Neural 'Channels', 'value: 1024unit: 'ch' }
      ],
      visualization: 'neural-signals'
    },
    'edge-ai': {
      title: 'Edge AI Processing',
      description: 'Distributed AI processing at the edge for real-time decision making and ultra-low latency',
      icon: Network,
      color: 'from-blue-500 to-cyan-500',
      features: [
        { name: 'Latency 'Reduction', 'value: 95unit: '%' },
        { name: 'Processing 'Nodes', 'value: 10000unit: '+' },
        { name: 'Data 'Throughput', 'value: 50unit: 'TB/s' },
        { name: 'Energy 'Efficiency', 'value: 85unit: '%' }
      ],
      visualization: 'edge-network'
    }
  };

  const currentDemo = demos[activeDemo];
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (progress >= 100) {
      setProgress(0);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const currentDemo = demos[activeDemo];

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Play className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-white">Interactive Technology Demo 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Experience
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Future
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interact with cutting-edge AI technologiesquantum computing systemsand neural interfaces 
            in real-time. See the future of technology in action.
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
          </p>
        </motion.div>

<<<<<<< HEAD
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selection */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Choose Your Demo</h3>
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(index)}
                  className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                    activeDemo === index
                      ? `bg-gradient-to-r ${demo.color} scale-105`
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{demo.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                      <p className="text-sm opacity-90">{demo.description}</p>
                    </div>
                  </div>
=======
        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(demos).map(([keydemo]) => {
            const Icon = demo.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{demo.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Main Demo Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Demo Visualization */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentDemo.color} flex items-center justify-center mr-4`}>
                    {React.createElement(currentDemo.icon{ className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentDemo.title}</h3>
                    <p className="text-gray-300">{currentDemo.description}</p>
                  </div>
                </div>
              </div>

              {/* Demo Visualization */}
              <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-white/10">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.3),transparent_50%)]" />
                </div>

                {/* Demo Content Based on Type */}
                {currentDemo.visualization === 'neural-network' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-4">
                      {[...Array(16)].map((_i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: isPlaying ? [1.21] : 1,
                            opacity: isPlaying ? [0.510.5] : 0.7
                          }}
                          transition={{
                            duration: 2,
                            repeat: isPlaying ? Infinity : 0,
                            delay: i * 0.1
                          }}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentDemo.visualization === 'quantum-circuit' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {[...Array(8)].map((_i) => (
                        <motion.div
                          key={i}
                          animate={{
                            rotate: isPlaying ? 360 : 0,
                            scale: isPlaying ? [1.1] : 1
                          }}
                          transition={{
                            duration: 3,
                            repeat: isPlaying ? Infinity : 0,
                            delay: i * 0.2
                          }}
                          className="absolute w-16 h-16 border-2 border-indigo-400 rounded-full"
                          style={{
                            left: `${Math.cos(i * Math.PI / 4) * 60}px`,
                            top: `${Math.sin(i * Math.PI / 4) * 60}px`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentDemo.visualization === 'neural-signals' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-32 relative">
                      {[...Array(5)].map((_i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scaleY: isPlaying ? [121] : 1,
                            opacity: isPlaying ? [0.510.5] : 0.7
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: isPlaying ? Infinity : 0,
                            delay: i * 0.2
                          }}
                          className="absolute w-1 bg-gradient-to-t from-green-500 to-teal-500 rounded-full"
                          style={{
                            left: `${20 + i * 20}%`,
                            height: '100%'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentDemo.visualization === 'edge-network' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4">
                      {[...Array(9)].map((_i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: isPlaying ? [1.31] : 1,
                            opacity: isPlaying ? [0.610.6] : 0.8
                          }}
                          transition={{
                            duration: 2,
                            repeat: isPlaying ? Infinity : 0,
                            delay: i * 0.1
                          }}
                          className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Progress Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${currentDemo.color}`}
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                <button
                  onClick={handlePlayPause}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                </button>
                <button
                  onClick={handleReset}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Settings className="w-6 h-6 text-white" />
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
                </button>
              ))}
            </div>
<<<<<<< HEAD
          </div>

          {/* Demo Display */}
          <div>
            <div className={`bg-gradient-to-br ${currentDemo.color} rounded-2xl p-8 mb-8`}>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-xl opacity-90 mb-6">{currentDemo.description}</p>
              </div>

              {/* Demo Controls */}
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-4 mb-6">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRunning ? 'Running...' : 'Start Demo'}
                  </button>
                  <button
                    onClick={stopDemo}
                    disabled={!isRunning}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Stop Demo
                  </button>
                </div>

                {/* Progress Bar */}
                {isRunning && (
                  <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                    <div
                      className="bg-white h-4 rounded-full transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {/* Demo Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Demo Data Display */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentDemo.demoData).map(([key, value], index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
=======
          </motion.div>

          {/* Features and Metrics */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Real-Time Metrics</h3>
              
              <div className="space-y-4">
                {currentDemo.features.map((featureindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0x: 20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ duration: 0.5delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => setSelectedFeature(feature)}
                  >
                    <div>
                      <p className="text-white font-medium">{feature.name}</p>
                      <div className="w-32 h-2 bg-white/10 rounded-full mt-2">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${(feature.value / 100) * 100}%` }}
                          transition={{ duration: 1delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        {feature.value}
                        <span className="text-sm text-gray-400 ml-1">{feature.unit}</span>
                      </p>
                    </div>
                  </motion.div>
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Interactive Elements */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">🎯 Try Interactive Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Neural Control
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Quantum Simulation
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Reality Manipulation
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Time Travel
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">📊 Real-time Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Processing Power:</span>
                    <span className="text-green-400">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consciousness Level:</span>
                    <span className="text-blue-400">Maximum</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Coherence:</span>
                    <span className="text-purple-400">Perfect</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Neural Sync:</span>
                    <span className="text-pink-400">Optimal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These are just demos of our revolutionary technology. Experience the real thing with our full services.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Full Services →
            </a>
            <a href="/pages/UltimateTechRevolution2025" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </a>
=======
            {/* Additional Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Technology Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Industry-leading performance metrics</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Real-time processing capabilities</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced error correction</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Scalable architecture</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get hands-on experience with our cutting-edge technologies and see how they can 
              transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Demo
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download SDK
              </button>
            </div>
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;