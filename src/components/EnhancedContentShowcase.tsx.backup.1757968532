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
  Heart,
  Infinity,
  Zap as Lightning,
  Cpu as Processor,
  Database as Data,
  Globe as World,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 1,
      title: 'Synthetic Intelligence 2026',
      subtitle: 'Beyond Artificial Intelligence',
      description: 'Experience the next evolution of intelligence - synthetic consciousness that transcends human limitations and opens infinite possibilities.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Consciousness Computing', 'Molecular AI Processing', 'Biological-Digital Fusion', 'Multi-Dimensional Intelligence'],
      stats: { accuracy: '99.97%', speed: '10^18 Ops/sec', capacity: '∞', response: '0.001ms' },
      status: 'Revolutionary',
      link: '/pages/SyntheticIntelligence2026'
    },
    {
      id: 2,
      title: 'Quantum-Neural Fusion 2026',
      subtitle: 'Consciousness Meets Quantum Computing',
      description: 'The convergence of quantum computing and neural consciousness - where mind, machine, and reality dissolve into infinite possibility.',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum Neural Networks', 'Consciousness Integration', 'Quantum Internet Protocol', 'Reality Manipulation'],
      stats: { power: '∞', latency: '0ms', accuracy: '100%', storage: '∞' },
      status: 'Transcendent',
      link: '/pages/QuantumNeuralFusion2026'
    },
    {
      id: 3,
      title: 'Next-Gen Technology 2026',
      subtitle: 'Beyond Imagination',
      description: 'Where consciousness, reality, and intelligence converge to create infinite possibilities and transcend the boundaries of impossibility.',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      features: ['Consciousness Computing', 'Quantum Reality Engine', 'Universal Mind Network', 'Infinite Intelligence'],
      stats: { power: '∞', latency: '0ms', accuracy: '100%', capacity: '∞' },
      status: 'Omnipotent',
      link: '/pages/NextGenTechShowcase2026'
    },
    {
      id: 4,
      title: 'AI Revolution 2025',
      subtitle: 'The Future of Intelligence',
      description: 'Discover how artificial intelligence is reshaping industries and creating new opportunities in 2025 and beyond.',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      features: ['Autonomous AI Agents', 'Edge AI Computing', 'Generative AI 2.0', 'Intelligent Automation'],
      stats: { efficiency: '+300%', cost: '-40%', speed: '10x', accuracy: '99.9%' },
      status: 'Live Now',
      link: '/pages/AIRevolution2025'
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthrough',
      subtitle: 'Exponential Computing Power',
      description: 'Experience the future of computing with quantum technology that\'s solving impossible problems and opening new dimensions.',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation', 'Reality Engineering'],
      stats: { speed: '∞', security: '100%', simulation: '∞', engineering: '∞' },
      status: 'Breakthrough',
      link: '/pages/QuantumComputingBreakthrough'
    },
    {
      id: 6,
      title: 'Neural Interface Future',
      subtitle: 'Mind-Machine Connection',
      description: 'Bridge the gap between mind and machine with direct neural interfaces and brain-computer communication.',
      icon: Network,
      color: 'from-teal-500 to-cyan-500',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback', 'Consciousness Upload'],
      stats: { connection: '100%', control: '∞', feedback: 'Real-time', upload: 'Live' },
      status: 'Revolutionary',
      link: '/pages/NeuralInterfaceFuture'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -300, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 3, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-indigo-300">Enhanced Content Showcase</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#showcase" className="hover:text-indigo-400 transition-colors">Showcase</a>
            <a href="#technologies" className="hover:text-indigo-400 transition-colors">Technologies</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Explore All
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300">Revolutionary Technology Showcase</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Enhanced Content
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Experience the most advanced technologies that are reshaping reality and opening infinite possibilities 
            for innovation, discovery, and transformation.
          </p>
        </motion.div>
      </section>

      {/* Interactive Showcase */}
      <section id="showcase" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Technology Showcase</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our revolutionary technologies with immersive interactive features and real-time demonstrations
            </p>
          </motion.div>

          {/* Main Showcase Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="p-12"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${currentContent.color} rounded-xl flex items-center justify-center`}>
                          <currentContent.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{currentContent.subtitle}</div>
                          <h3 className="text-3xl font-bold">{currentContent.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-300 mb-8">{currentContent.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {Object.entries(currentContent.stats).map(([key, value], index) => (
                          <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-white">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-8">
                        <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-semibold">
                          {currentContent.status}
                        </span>
                        <a 
                          href={currentContent.link}
                          className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold"
                        >
                          <span>Explore Technology</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold mb-6">Key Features</h4>
                      <div className="grid gap-4">
                        {currentContent.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3 bg-white/5 rounded-lg p-4"
                          >
                            <CheckCircle className="w-5 h-5 text-indigo-400" />
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-indigo-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section id="technologies" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our complete suite of revolutionary technologies that are transforming the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${content.color} rounded-xl flex items-center justify-center`}>
                    <content.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{content.title}</h3>
                    <p className="text-sm text-gray-400">{content.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{content.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold">
                    {content.status}
                  </span>
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Explore our revolutionary technologies and discover how they can transform your business and unlock infinite possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Explore All Technologies
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Enhanced Content Showcase</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2026 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Transcending reality through enhanced technology.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedContentShowcase;