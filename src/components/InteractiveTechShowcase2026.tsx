"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play
  Code
  Brain
  Zap
  Shield
  Globe
  ArrowRight,
  Download,
  ExternalLink,
  CheckCircle,
  Star,
  Lightbulb,
  Target,
  BarChart3,
  Settings,
  Monitor,
  Smartphone,
  Laptop
} from 'lucide-react';

<<<<<<< HEAD
const InteractiveTechShowcase2026 = () => {
  const [activeDemosetActiveDemo] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);
  const [isPlayingsetIsPlaying] = useState(false);
=======
const InteractiveTechShowcase2026: React.FC = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 'ai-systems',
      name: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Revolutionary AI with autonomous learning and quantum processing',
      features: ['Autonomous Learning', 'Quantum AI Processing', 'Distributed Intelligence'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      icon: '🚀',
      description: 'Interplanetary travel and space colonization technology',
      features: ['Advanced Propulsion', 'Space Habitats', 'Satellite Networks'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'biotech',
      name: 'Biotechnology',
      icon: '🧬',
      description: 'Gene editing and synthetic biology solutions',
      features: ['Gene Editing', 'Synthetic Biology', 'Personalized Medicine'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: '⚡',
      description: 'Next-generation quantum processing with exponential power',
      features: ['1000+ Qubits', 'Quantum Supremacy', 'Molecular Simulation'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
=======
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
>>>>>>> cursor/create-and-deploy-new-content-7857

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const demos = [
    {
      id: 'ai-assistant',
      title: 'AI Assistant Demo',
      description: 'Experience our advanced AI assistant in action',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Natural language processing',
        'Real-time responses',
        'Context awareness',
        'Multi-language support'
      ],
      demoUrl: '/demos/ai-assistant',
      duration: '2 min',
      difficulty: 'Beginner'
    },
    {
      id: 'automation-workflow',
      title: 'Automation Workflow',
      description: 'See how complex processes are automated',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Visual workflow builder',
        'Drag-and-drop interface',
        'Real-time monitoring',
        'Error handling'
      ],
      demoUrl: '/demos/automation',
      duration: '3 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'security-dashboard',
      title: 'Security Dashboard',
      description: 'Monitor threats and security in real-time',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Threat detection',
        'Real-time alerts',
        'Security analytics',
        'Compliance monitoring'
      ],
      demoUrl: '/demos/security',
      duration: '4 min',
      difficulty: 'Advanced'
    },
    {
<<<<<<< HEAD
      id: 'global-analytics',
      title: 'Global Analytics',
      description: 'Comprehensive business intelligence platform',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboards',
        'Export capabilities'
      ],
      demoUrl: '/demos/analytics',
      duration: '5 min',
      difficulty: 'Intermediate'
    }
  ];

  const tools = [
    {
      name: 'ROI Calculator',
      description: 'Calculate your potential return on investment',
      icon: BarChart3,
      category: 'Business Tools',
      popularity: 95
    },
    {
      name: 'AI Code Generator',
      description: 'Generate code with AI assistance',
      icon: Code,
      category: 'Development',
      popularity: 88
    },
    {
      name: 'Security Scanner',
      description: 'Scan your systems for vulnerabilities',
      icon: Shield,
      category: 'Security',
      popularity: 92
    },
    {
      name: 'Performance Monitor',
      description: 'Monitor system performance in real-time',
      icon: Monitor,
      category: 'Monitoring',
      popularity: 87
=======
      id: 'tech-trends',
      name: 'Tech Trends 2026',
      icon: '📰',
      description: 'Comprehensive analysis of cutting-edge technology trends',
      features: ['AI Revolution', 'Quantum Computing', 'Neural Interfaces'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/20 to-red-600/20',
>>>>>>> cursor/create-and-deploy-new-content-f175
      borderColor: 'border-orange-400/30'
    }
  ];

<<<<<<< HEAD
  return (
    <div className={`bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE 2026 TECHNOLOGY SHOWCASE
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2026 technologies with interactive features and immersive experiences
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Interactive Content Display */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="text-8xl mb-6 text-center animate-bounce">
                {technologies[activeTab].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center">
                {technologies[activeTab].name}
              </h3>
              <p className="text-xl opacity-90 text-center mb-6">
                {technologies[activeTab].description}
              </p>
            </div>
            
            <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-xl p-6 border ${technologies[activeTab].borderColor}`}>
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 bg-gradient-to-r ${technologies[activeTab].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore {technologies[activeTab].name} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
            <div className="text-sm text-gray-300">Quantum Qubits</div>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">AI Accuracy</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-sm text-gray-300">Space Missions</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-orange-400 mb-2">1000x</div>
            <div className="text-sm text-gray-300">Processing Speed</div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-4">🎮 Interactive Demo</h3>
            <p className="text-xl opacity-90">
              Experience our technologies in action with interactive demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-lg font-semibold mb-2">AI Brain Simulation</h4>
              <p className="text-sm text-gray-300 mb-4">Watch AI learn and adapt in real-time</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Start Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold mb-2">Space Mission Simulator</h4>
              <p className="text-sm text-gray-300 mb-4">Plan and execute space missions</p>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Launch Mission
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-lg font-semibold mb-2">Gene Editor</h4>
              <p className="text-sm text-gray-300 mb-4">Design and edit genetic sequences</p>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Edit Genes
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-6">
              Join thousands of innovators already using our revolutionary 2026 technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
=======
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
>>>>>>> cursor/create-and-deploy-new-content-7857
    }
  ];

  const platforms = [
    { name: ''Web', 'icon: Laptopstatus: 'Available' },
    { name: ''Mobile', 'icon: Smartphonestatus: 'Available' },
    { name: ''Desktop', 'icon: Monitorstatus: 'Coming Soon' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366F1" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Play className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-200 font-medium">Interactive Tech Showcase 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Try Before You
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience our cutting-edge AI and automation solutions through interactive demos. 
            See the power of our technology in action before making any commitments.
          </p>
        </motion.div>

        {/* Demo Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <demo.icon className="w-5 h-5" />
                  <span>{demo.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0x: 20 }}
              animate={{ opacity: 1x: 0 }}
              exit={{ opacity: 0x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Demo Info */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${demos[activeDemo].color} rounded-full flex items-center justify-center`}>
                      <demos[activeDemo].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{demos[activeDemo].title}</h3>
                      <p className="text-indigo-300">{demos[activeDemo].description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {demos[activeDemo].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Duration</div>
                        <div className="text-white font-semibold">{demos[activeDemo].duration}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Difficulty</div>
                        <div className="text-white font-semibold">{demos[activeDemo].difficulty}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Demo Player */}
                <div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-white/10">
                    <div className="aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      {isPlaying ? (
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-white">Demo Playing...</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <button
                            onClick={() => setIsPlaying(true)}
                            className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </button>
                          <p className="text-white mt-4">Click to start demo</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                        <div className="flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2" />
                          <span>Start Demo</span>
                        </div>
                      </button>
                      <button className="px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Interactive Tools & Utilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{tool.category}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-sm text-white">{tool.popularity}%</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>
                
                <button className="w-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 font-medium py-2 px-4 rounded-lg hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 border border-indigo-500/30">
                  Try Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Available on All Platforms
          </h2>
          
          <div className="flex justify-center space-x-8">
            {platforms.map((platform, index) => (
              <div key={platform.name} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  platform.status === 'Available' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : 'bg-gradient-to-r from-gray-500 to-gray-600'
                }`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold">{platform.name}</div>
                <div className={`text-sm ${
                  platform.status === 'Available' ? 'text-green-400' : 'text-gray-400'
                }`}>
                  {platform.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Try our interactive demos and tools today. No commitment required. 
              See for yourself why thousands of companies trust our solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  <span>Start Free Demo</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  <span>Download Tools</span>
                </div>
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>
=======
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
>>>>>>> cursor/create-and-deploy-new-content-f175
        </div>
>>>>>>> cursor/create-and-deploy-new-content-7857
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;