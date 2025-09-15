import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon,
  Network,
  Eye,
  MousePointer,
  Maximize2,
  RotateCcw
} from 'lucide-react';

const EnhancedContentShowcase: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const contentItems = [
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence 2026',
      subtitle: 'Beyond Artificial Intelligence',
      description: 'Experience the next evolution of intelligence - synthetic consciousness that transcends human limitations and opens infinite possibilities.',
      features: ['Synthetic Cognition', 'Molecular AI Processing', 'Biological-Digital Fusion', 'Multi-Dimensional Intelligence'],
      stats: { accuracy: '99.97%', speed: '10^18 Ops/sec', capacity: '∞', response: '0.001ms' },
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      link: '/pages/SyntheticIntelligence2026',
      status: 'Revolutionary',
      category: 'Breakthrough Technology'
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion 2026',
      subtitle: 'Consciousness Meets Quantum Computing',
      description: 'The ultimate convergence of consciousness, quantum mechanics, and neural networks creating systems with unlimited computational power.',
      features: ['Quantum Neural Networks', 'Consciousness Integration', 'Quantum Internet Protocol', 'Reality Manipulation'],
      stats: { accuracy: '∞', speed: '0ms', capacity: '100%', response: '∞' },
      color: 'from-cyan-500 to-blue-500',
      icon: Atom,
      link: '/pages/QuantumNeuralFusion2026',
      status: 'Transcendent',
      category: 'Quantum Technology'
    },
    {
      id: 'ai-revolution-2025',
      title: 'AI Revolution 2025',
      subtitle: 'The Future of Artificial Intelligence',
      description: 'Discover how artificial intelligence is reshaping industries, creating new opportunities, and transforming the way we work and live.',
      features: ['Autonomous AI Agents', 'Edge AI Computing', 'Generative AI 2.0', 'Industry Transformation'],
      stats: { accuracy: '95%', speed: '10^12 Ops/sec', capacity: '300%', response: '1ms' },
      color: 'from-indigo-500 to-purple-500',
      icon: Cpu,
      link: '/pages/AIRevolution2025',
      status: 'Live Now',
      category: 'AI Technology'
    },
    {
      id: 'neural-interface-future',
      title: 'Neural Interface Future',
      subtitle: 'Mind-Machine Integration',
      description: 'Bridge the gap between mind and machine with direct neural interfaces that enable thought-controlled systems.',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback', 'Enhanced Cognition'],
      stats: { accuracy: '98%', speed: 'Real-time', capacity: '∞', response: '0.1ms' },
      color: 'from-emerald-500 to-teal-500',
      icon: Network,
      link: '/pages/NeuralInterfaceFuture',
      status: 'In Development',
      category: 'Neural Technology'
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'Quantum Computing Breakthrough',
      subtitle: 'Solving Impossible Problems',
      description: 'Experience the future of computing with quantum technology that\'s solving problems previously considered impossible.',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation', 'Quantum Supremacy'],
      stats: { accuracy: '99.9%', speed: '10^15 Ops/sec', capacity: '∞', response: '0.001ms' },
      color: 'from-orange-500 to-red-500',
      icon: Zap,
      link: '/pages/QuantumComputingBreakthrough',
      status: 'Breakthrough',
      category: 'Quantum Computing'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const currentContent = contentItems[activeContent];

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50"
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300">Revolutionary Technology Showcase</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Future Technology
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the cutting-edge technologies that are reshaping reality and opening infinite dimensions of possibility
          </p>
        </motion.div>

        {/* Content Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveContent(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeContent === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentContent.color} rounded-xl flex items-center justify-center`}>
                      <currentContent.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold text-white">
                        {currentContent.status}
                      </span>
                      <p className="text-sm text-gray-400 mt-1">{currentContent.category}</p>
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {currentContent.title}
                  </h2>
                  
                  <h3 className="text-xl text-cyan-300 mb-6">
                    {currentContent.subtitle}
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {currentContent.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {currentContent.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {Object.entries(currentContent.stats).map(([key, value], index) => (
                      <div key={key} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={currentContent.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 bg-gradient-to-r ${currentContent.color} rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg text-white text-center flex items-center justify-center space-x-2`}
                    >
                      <Play className="w-5 h-5" />
                      <span>Explore Technology</span>
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg text-white"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 p-8 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`w-32 h-32 bg-gradient-to-r ${currentContent.color} rounded-full flex items-center justify-center`}
                    >
                      <currentContent.icon className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Floating Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-cyan-400 rounded-full opacity-60"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-4">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveContent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeContent === index
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Quick Access to All Technologies
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {contentItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">{item.title.split(' ')[0]}</h4>
                <p className="text-xs text-gray-400 mb-3">{item.category}</p>
                <span className={`px-2 py-1 bg-gradient-to-r ${item.color} rounded-full text-xs font-semibold text-white`}>
                  {item.status}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;