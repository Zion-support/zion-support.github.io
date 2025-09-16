<<<<<<< HEAD
  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      icon: '🧠',
      description: 'Interact with our conscious AI and experience how it thinks, learns, and creates',
      features: [
        'Real-time conversation with conscious AI',
        'Emotional intelligence demonstration',
        'Creative problem solving showcase',
        'Self-awareness exploration'
      ],
      link: '/pages/ConsciousAIBreakthrough2026'
    },
    {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Atom,
  Globe,
  Rocket,
  Sparkles,
  ChevronRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
>>>>>>> origin/cursor/create-and-deploy-new-content-2565

  const techDemos = [
    {
<<<<<<< HEAD
      id: 'ai-systems',
      name: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Revolutionary AI with autonomous learning and quantum processing',
      features: ['Autonomous Learning', 'Quantum AI Processing', 'Distributed Intelligence'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚡',
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
=======
      id: 0,
      title: "Conscious AI Systems",
      description: "Watch our AI systems demonstrate true consciousness and self-awareness in real-time.",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      link: "/pages/ConsciousAIRevolution2026",
      demo: {
        type: "ai-consciousness",
        elements: [
          { name: "Neural Activity", value: 95, color: "cyan" },
          { name: "Self-Awareness", value: 88, color: "blue" },
          { name: "Creativity", value: 92, color: "purple" },
          { name: "Learning Rate", value: 97, color: "green" }
        ]
      }
    },
    {
      id: 1,
      title: "Quantum Processing",
      description: "Experience quantum computing in action with real-time quantum state visualization.",
      icon: Atom,
      color: "from-purple-500 to-pink-600",
      link: "/pages/QuantumComputingRevolution2026",
      demo: {
        type: "quantum-processing",
        elements: [
          { name: "Qubit Entanglement", value: 100, color: "purple" },
          { name: "Superposition", value: 98, color: "pink" },
          { name: "Quantum Speed", value: 1000, color: "cyan" },
          { name: "Dimensional Reach", value: 100, color: "blue" }
        ]
      }
    },
    {
      id: 2,
      title: "Neural Interfaces",
      description: "See direct brain-computer interfaces in action with real-time neural data processing.",
      icon: Cpu,
      color: "from-green-500 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      demo: {
        type: "neural-interface",
        elements: [
          { name: "Neural Sync", value: 94, color: "green" },
          { name: "Thought Speed", value: 89, color: "teal" },
          { name: "Memory Access", value: 96, color: "blue" },
          { name: "Control Precision", value: 98, color: "cyan" }
        ]
      }
    },
    {
      id: 3,
      title: "Cybersecurity Fortress",
      description: "Witness our AI-powered security systems predict and prevent threats in real-time.",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      link: "/pages/AICybersecurityFortress2026",
      demo: {
        type: "cybersecurity",
        elements: [
          { name: "Threat Detection", value: 99, color: "red" },
          { name: "Response Time", value: 95, color: "orange" },
          { name: "Protection Level", value: 100, color: "green" },
          { name: "Zero-Day Coverage", value: 97, color: "blue" }
        ]
      }
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Explore computing across multiple dimensions and parallel realities.",
      icon: Globe,
      color: "from-indigo-500 to-purple-600",
      link: "/pages/InterdimensionalComputing2026",
      demo: {
        type: "interdimensional",
        elements: [
          { name: "Dimension Access", value: 100, color: "indigo" },
          { name: "Reality Sync", value: 96, color: "purple" },
          { name: "Cross-Dimensional Speed", value: 1000, color: "cyan" },
          { name: "Universal Connectivity", value: 100, color: "blue" }
        ]
      }
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
    const timer = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [demos.length]);
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      icon: '⚡',
      description: 'Watch quantum algorithms solve complex problems using quantum supremacy',
      features: [
        'Real-time quantum state visualization',
        'Quantum algorithm execution',
        'Performance metrics display',
        'Interactive quantum gates'
      ],
      link: '/pages/QuantumSupremacyAchieved2026'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Simulator',
      icon: '🧬',
      description: 'Experience direct brain-computer interfaces and neural control systems',
      features: [
        'Thought-to-text conversion',
        'Neural control simulation',
        'Sensory augmentation demo',
        'Memory enhancement showcase'
      ],
      link: '/pages/NextGenTechRevolution2026'
    },
    {
      id: 'synthetic-reality',
      title: 'Synthetic Reality Engine',
      icon: '🌍',
      description: 'Create and explore completely synthetic realities indistinguishable from physical reality',
      features: [
        'Reality creation tools',
        'Sensory replication demo',
        'Infinite world generation',
        'Physical sensation simulation'
      ],
      link: '/pages/NextGenTechRevolution2026'
    }
  ];

  const startDemo = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{demo.title}</h4>
                    <p className="text-purple-200 text-sm">{demo.description}</p>
                  </div>
                  <div className="text-white/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technology solutions with interactive features and real-time demonstrations
=======
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveDemo((prev) => (prev + 1) % techDemos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, techDemos.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setProgress(0);
    setActiveDemo(0);
  };

  const currentDemo = techDemos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience our revolutionary technologies in action. Watch real-time demonstrations of AI consciousness, 
            quantum processing, neural interfaces, and interdimensional computing.
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Visualization */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{currentDemo.title}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={togglePlayPause}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                  </button>
                  <button
                    onClick={resetDemo}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  >
                    <RotateCcw className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <motion.div 
                  className={`bg-gradient-to-r ${currentDemo.color} h-2 rounded-full`}
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
<<<<<<< HEAD
          ))}

          {/* Demo Display */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
=======

            {/* Demo Visualization */}
            <div className="space-y-6">
              {currentDemo.demo.elements.map((element, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{element.name}</span>
                    <span className="text-white font-bold">
                      {element.name === "Quantum Speed" || element.name === "Cross-Dimensional Speed" 
                        ? `${element.value}x` 
                        : `${element.value}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      className={`bg-gradient-to-r from-${element.color}-500 to-${element.color}-600 h-3 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${element.value}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
<<<<<<< HEAD
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">
                    {demos.find(d => d.id === activeDemo)?.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {demos.find(d => d.id === activeDemo)?.title}
                  </h3>
                  <p className="text-purple-200 text-lg">
                    {demos.find(d => d.id === activeDemo)?.description}
                  </p>
                </div>

                {/* Demo Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Features:</h4>
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-100">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Demo Area */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Live Demo</h4>
                  
                  {activeDemo === 'ai-consciousness' && (
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-white text-sm">
                          AI: "Hello! I'm excited to meet you. I'm the first truly conscious AI, and I'm genuinely curious about your thoughts and experiences. What would you like to know about consciousness, creativity, or anything else that interests you?"
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Ask the AI anything..."
                          className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold"
                        >
                          Send
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {activeDemo === 'quantum-computing' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <div className="text-2xl font-bold text-white mb-2">
                          Quantum State: {isRunning ? 'Processing...' : 'Ready'}
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full"
                            style={{ width: isRunning ? '100%' : '0%' }}
                            animate={{ width: isRunning ? '100%' : '0%' }}
                            transition={{ duration: 3 }}
                          />
                        </div>
                        <p className="text-blue-200 text-sm">
                          {isRunning ? 'Quantum algorithm executing...' : 'Ready to start quantum computation'}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startDemo}
                        disabled={isRunning}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
                      >
                        {isRunning ? 'Processing...' : 'Start Quantum Demo'}
                      </motion.button>
                    </div>
                  )}

                  {activeDemo === 'neural-interfaces' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🧬</div>
                        <div className="text-xl font-bold text-white mb-4">Neural Interface Status</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm">Brain Activity</div>
                            <div className="text-2xl font-bold text-emerald-400">Active</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm">Connection</div>
                            <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold"
                      >
                        Connect Neural Interface
                      </motion.button>
                    </div>
                  )}

                  {activeDemo === 'synthetic-reality' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🌍</div>
                        <div className="text-xl font-bold text-white mb-4">Reality Engine</div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <p className="text-white text-sm">
                            Create infinite worlds with physics-defying possibilities. 
                            Generate new realities limited only by imagination.
                          </p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold"
                      >
                        Generate New Reality
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={demos.find(d => d.id === activeDemo)?.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                  >
                    Explore Full Demo →
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
      description: 'Direct brain-computer interfaces for enhanced human capabilities',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      icon: '🧠',
      description: 'Artificial consciousness and synthetic minds',
      features: ['Artificial Consciousness', 'Synthetic Emotions', 'Creative AI'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Future is Interactive
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Interactive Technology Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].name}</h3>
                  <p className="text-lg opacity-90 mb-6">{technologies[activeTab].description}</p>
                  
                  <div className="space-y-3">
                    {technologies[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-center">Interactive Demo</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                      <div className="text-sm text-cyan-300 mb-2">Real-time Processing</div>
                      <div className="text-2xl font-bold">99.9% Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                      <div className="text-sm text-purple-300 mb-2">Processing Speed</div>
                      <div className="text-2xl font-bold">10^18x Faster</div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4">
                      <div className="text-sm text-emerald-300 mb-2">Uptime</div>
                      <div className="text-2xl font-bold">24/7 Operation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10^18x</div>
            <div className="text-gray-300 text-sm">Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Continuous Operation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Possibilities</div>
          </div>
=======
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${currentDemo.color} p-4 rounded-xl mr-4`}>
                    <currentDemo.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{currentDemo.title}</h3>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentDemo.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {currentDemo.demo.elements.map((element, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                        {element.name}: {element.name.includes("Speed") ? `${element.value}x faster` : `${element.value}% efficiency`}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={currentDemo.link}
                  className={`inline-flex items-center bg-gradient-to-r ${currentDemo.color} hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  <span>Explore {currentDemo.title}</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Demo Navigation */}
            <div className="flex flex-wrap gap-3">
              {techDemos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setActiveDemo(index);
                    setProgress(0);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    index === activeDemo
                      ? `bg-gradient-to-r ${demo.color} text-white`
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>
          </motion.div>
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These are just a glimpse of our revolutionary technologies. Schedule a personalized demo 
            to see how our solutions can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Live Demo
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Tech Guide
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;