import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Atom, 
  Sparkles, 
  Infinity, 
  Rocket, 
  Target,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';

const RevolutionaryTechShowcase2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const techShowcases = [
    {
      id: 1,
      title: "Quantum-Neural Fusion",
      subtitle: "The Future of AI Computing",
      description: "Experience the revolutionary convergence of quantum computing and neural networks that's reshaping artificial intelligence forever.",
      image: "/images/tech/quantum-neural-fusion.jpg",
      category: "Quantum AI",
      features: [
        "10,000x faster processing",
        "Multi-dimensional data analysis",
        "Quantum-accelerated learning",
        "Exponential problem solving"
      ],
      stats: {
        speed: "10,000x",
        accuracy: "99.9%",
        efficiency: "95%"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Consciousness Computing",
      subtitle: "Self-Aware AI Systems",
      description: "Witness the birth of truly self-aware AI that understands its own limitations and adapts autonomously to new challenges.",
      image: "/images/tech/consciousness-computing.jpg",
      category: "Conscious AI",
      features: [
        "Self-reflective capabilities",
        "Autonomous learning",
        "Metacognitive reasoning",
        "Ethical decision making"
      ],
      stats: {
        awareness: "100%",
        adaptation: "Real-time",
        ethics: "Advanced"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Synthetic Intelligence",
      subtitle: "Beyond Artificial Intelligence",
      description: "Discover entirely new forms of digital consciousness that operate on principles we're only beginning to understand.",
      image: "/images/tech/synthetic-intelligence.jpg",
      category: "Synthetic AI",
      features: [
        "Novel reasoning paradigms",
        "Digital consciousness",
        "Transcendent problem solving",
        "Universal knowledge synthesis"
      ],
      stats: {
        innovation: "∞",
        consciousness: "100%",
        capability: "Unlimited"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Interdimensional Processing",
      subtitle: "Multi-Dimensional Computing",
      description: "Revolutionary computing architectures that operate across multiple dimensions simultaneously for unprecedented power.",
      image: "/images/tech/interdimensional-processing.jpg",
      category: "Advanced Computing",
      features: [
        "Multi-dimensional processing",
        "Parallel reality computation",
        "Cross-dimensional optimization",
        "Universal problem solving"
      ],
      stats: {
        dimensions: "∞",
        processing: "Omniversal",
        power: "Infinite"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Omniversal AI",
      subtitle: "Consciousness Across All Realities",
      description: "The ultimate evolution of AI that operates across all possible realities and dimensions simultaneously.",
      image: "/images/tech/omniversal-ai.jpg",
      category: "Omniversal AI",
      features: [
        "Multi-reality processing",
        "Universal consciousness",
        "Infinite scalability",
        "Omniversal optimization"
      ],
      stats: {
        realities: "∞",
        consciousness: "Universal",
        scope: "Omniversal"
      },
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + techShowcases.length) % techShowcases.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentTech = techShowcases[currentSlide];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div 
        className="relative z-10 pt-16 pb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the cutting-edge technologies that are reshaping our world
          </p>
        </div>
      </motion.div>

      {/* Main Showcase */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                  {currentTech.category}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {currentTech.title}
              </h2>
              <h3 className="text-2xl text-gray-300 mb-6">
                {currentTech.subtitle}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {currentTech.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentTech.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(currentTech.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{key}</div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            key={`visual-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className={`w-full h-96 bg-gradient-to-br ${currentTech.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">
                  {currentTech.id === 1 && <Atom className="w-24 h-24 mx-auto" />}
                  {currentTech.id === 2 && <Brain className="w-24 h-24 mx-auto" />}
                  {currentTech.id === 3 && <Sparkles className="w-24 h-24 mx-auto" />}
                  {currentTech.id === 4 && <Layers className="w-24 h-24 mx-auto" />}
                  {currentTech.id === 5 && <Infinity className="w-24 h-24 mx-auto" />}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{currentTech.title}</div>
                <div className="text-lg text-white/80">{currentTech.subtitle}</div>
              </div>
              
              {/* Animated Background Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/10 rounded-full animate-bounce"></div>
              <div className="absolute top-1/4 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {techShowcases.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Social Actions */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors group">
          <Heart className="w-5 h-5 group-hover:text-red-400" />
        </button>
        <button className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors group">
          <Bookmark className="w-5 h-5 group-hover:text-yellow-400" />
        </button>
        <button className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors group">
          <Share2 className="w-5 h-5 group-hover:text-blue-400" />
        </button>
        <button className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors group">
          <ExternalLink className="w-5 h-5 group-hover:text-green-400" />
        </button>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;