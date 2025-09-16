import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Star, 
  Sparkles,
  Brain,
  Atom,
  Network,
  Infinity,
  Eye,
  Heart,
=======
  Zap,
  Rocket,
  Globe,
  Cpu,
  Database,
  Shield,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
  Gauge,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon
} from 'lucide-react';

const RevolutionaryContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Tech Insights 2026",
      subtitle: "Consciousness Computing & Quantum Reality",
      description: "Discover the revolutionary technology insights that are reshaping our understanding of consciousness, reality, and intelligence in ways never before imagined.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900 to-pink-900",
      features: [
        "Consciousness Computing Revolution",
        "Quantum Reality Engineering", 
        "Universal Mind Network",
        "Infinite Intelligence Systems"
      ],
      link: "/pages/RevolutionaryTechInsights2026",
      status: "Revolutionary",
      impact: "Transcendent"
    },
    {
      id: 2,
      title: "Future Tech Breakthrough 2026",
      subtitle: "Consciousness Transfer & Quantum Intelligence",
      description: "Explore future technology breakthroughs including consciousness transfer, quantum consciousness engines, and universal knowledge networks shaping tomorrow.",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-900 to-blue-900",
      features: [
        "Consciousness Transfer Technology",
        "Quantum Consciousness Engine",
        "Universal Knowledge Network",
        "Infinite Processing Power"
      ],
      link: "/pages/FutureTechBreakthrough2026",
      status: "Breakthrough",
      impact: "Revolutionary"
=======
      impact: "Revolutionary"
    },
    {
      id: 3,
      title: "Next-Gen Tech Showcase 2026",
      subtitle: "Advanced AI & Quantum Computing",
      description: "Experience the most revolutionary technologies that are reshaping our world and defining the future of human progress.",
      icon: Network,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900 to-emerald-900",
      features: [
        "Consciousness Computing",
        "Quantum Reality Engine",
        "Universal Mind Network",
        "Infinite Intelligence"
      ],
      link: "/pages/NextGenTechShowcase2026",
      status: "Live Now",
      impact: "Unprecedented"
=======
      impact: "Unprecedented"
    },
    {
      id: 4,
      title: "Advanced AI Transformation 2026",
      subtitle: "Synthetic Intelligence & Autonomous Systems",
      description: "Revolutionary AI transformation solutions that are reshaping industries and creating new possibilities for the future.",
      icon: Infinity,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900 to-red-900",
      features: [
        "Synthetic Intelligence",
        "Autonomous Decision Making",
        "Creative Problem Solving",
        "Emotional Intelligence"
      ],
      link: "/pages/AdvancedAITransformation2026",
      status: "Transcendent",
      impact: "Omnipotent"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      subtitle: "Reality Perception & Neural Interfaces",
      description: "Experience the convergence of quantum computing and neural interfaces that can perceive reality beyond human limitations.",
=======
      subtitle: "Reality Perception & Neural Interfaces",
      description: "Experience the convergence of quantum computing and neural interfaces that can perceive reality beyond human limitations.",
      icon: Eye,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-900 to-purple-900",
      features: [
=======
        "Reality Perception AI",
        "Quantum Field Visualization",
        "Higher Dimensional Sight",
        "Universal Perception"
      ],
      link: "/pages/QuantumNeuralFusion2026",
      status: "Advanced",
      impact: "Groundbreaking"
    },
    {
      id: 6,
      title: "Empathetic Intelligence 2026",
      subtitle: "Human-AI Emotional Connection",
      description: "AI systems that can truly understand, feel, and respond to human emotions with genuine empathy and therapeutic support.",
=======
      title: "Empathetic Intelligence 2026",
      subtitle: "Human-AI Emotional Connection",
      description: "AI systems that can truly understand, feel, and respond to human emotions with genuine empathy and therapeutic support.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-900 to-rose-900",
      features: [
=======
        "Genuine Emotional Understanding",
        "Empathetic Response Systems",
        "Human-AI Connection",
        "Therapeutic Support"
      ],
      link: "/pages/EmpatheticIntelligence2026",
      status: "Live Now",
      impact: "Transformative"
    }
  ];

=======
  const stats = [
    { number: '∞', label: 'Computational Power', icon: Zap },
    { number: '0ms', label: 'Processing Latency', icon: Gauge },
    { number: '100%', label: 'Accuracy Rate', icon: Target },
    { number: '∞', label: 'Learning Capacity', icon: Brain },
    { number: '∞', label: 'Storage Capacity', icon: Database },
    { number: '∞', label: 'Reality Simulations', icon: Globe }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl">
      {/* Background with animated particles */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentContent.bgColor} opacity-90`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
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
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">{currentContent.status}</span>
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {currentContent.title}
              </h2>
              
              <h3 className="text-xl md:text-2xl text-gray-200 mb-6">
                {currentContent.subtitle}
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {currentContent.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentContent.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={currentContent.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${currentContent.color} text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                >
                  <Play className="w-5 h-5" />
                  <span>Explore Content</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              key={`visual-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-r ${currentContent.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                >
                  <currentContent.icon className="w-16 h-16 text-white" />
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${10 + (index * 20)}%`,
                        transform: `rotate(${index * 15}deg)`,
                      }}
                    >
                      <stat.icon className="w-6 h-6 text-white mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex space-x-2">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-3 rounded-full transition-all duration-300 ${
            isAutoPlaying ? 'bg-green-500/20 text-green-400' : 'bg-white/20 text-white'
          }`}
        >
          <Play className={`w-5 h-5 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
        </button>
      </div>
=======
  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl">
      {/* Background with animated particles */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentContent.bgColor} opacity-90`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
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
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">{currentContent.status}</span>
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {currentContent.title}
              </h2>
              
              <h3 className="text-xl md:text-2xl text-gray-200 mb-6">
                {currentContent.subtitle}
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {currentContent.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentContent.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={currentContent.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${currentContent.color} text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                >
                  <Play className="w-5 h-5" />
                  <span>Explore Content</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              key={`visual-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-r ${currentContent.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                >
                  <currentContent.icon className="w-16 h-16 text-white" />
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${10 + (index * 20)}%`,
                        transform: `rotate(${index * 15}deg)`,
                      }}
                    >
                      <stat.icon className="w-6 h-6 text-white mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex space-x-2">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-3 rounded-full transition-all duration-300 ${
            isAutoPlaying ? 'bg-green-500/20 text-green-400' : 'bg-white/20 text-white'
          }`}
        >
          <Play className={`w-5 h-5 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel;