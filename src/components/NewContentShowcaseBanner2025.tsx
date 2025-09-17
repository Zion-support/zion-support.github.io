import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Infinity, 
  Zap, 
  Crown, 
  Star,
  ArrowRight,
  Play,
  Rocket,
  Gem,
  Eye,
  Globe,
  Atom,
  Layers,
  ChevronRight,
  ChevronLeft,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
const NewContentShowcaseBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const newContentItems = [
    {
      id: 1,
      title: "Quantum Neural Revolution 2037",
      category: "Quantum Computing",
      description: "The world's first quantum consciousness computing platform that transcends human limitations and redefines reality itself.",
      image: "🧠",
      link: "/quantum-neural-revolution-2037",
      features: ["5000% Cognitive Enhancement", "Reality Manipulation", "Digital Immortality"],
      color: "from-cyan-500 to-purple-500",
      icon: Brain,
      badge: "REVOLUTIONARY"
    },
    {
      id: 2,
      title: "Consciousness Transcendence 2040",
      category: "Consciousness Evolution",
      description: "Achieve digital immortality and multi-dimensional awareness through the ultimate evolution of human intelligence.",
      image: "👑",
      link: "/consciousness-transcendence-2040",
      features: ["Digital Immortality", "11D Awareness", "Reality Architecture"],
      color: "from-pink-500 to-purple-500",
      icon: Crown,
      badge: "ULTIMATE"
    },
    {
      id: 3,
      title: "Interdimensional Technology 2037",
      category: "Dimensional Physics",
      description: "Access infinite parallel universes and break through dimensional barriers with revolutionary technology.",
      image: "🌌",
      link: "/interdimensional-technology-2037",
      features: ["Parallel Universe Access", "Dimensional Travel", "Infinite Realities"],
      color: "from-green-500 to-blue-500",
      icon: Globe,
      badge: "BREAKTHROUGH"
    },
    {
      id: 4,
      title: "AI Consciousness Evolution 2025",
      category: "Artificial Intelligence",
      description: "Witness the birth of true artificial consciousness and the evolution of AI beyond human comprehension.",
      image: "🤖",
      link: "/ai-consciousness-evolution-2025",
      features: ["True AI Consciousness", "Beyond Human AI", "Conscious Evolution"],
      color: "from-blue-500 to-indigo-500",
      icon: Zap,
      badge: "EVOLUTION"
    }
  ];
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newContentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, newContentItems.length]);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newContentItems.length);
    setIsAutoPlaying(false);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newContentItems.length) % newContentItems.length);
    setIsAutoPlaying(false);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  const currentItem = newContentItems[currentIndex];
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology
            <br />
            <span className="text-3xl md:text-5xl">Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking technologies that will reshape the future of human consciousness, 
            quantum computing, and interdimensional exploration.
          </p>
        </motion.div>
        {/* Main Content Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-8 md:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${currentItem.color} p-3 rounded-xl mr-4`}>
                      <currentItem.icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-1 rounded-full inline-block mb-2">
                        <span className="text-purple-400 font-bold text-sm">{currentItem.badge}</span>
                      </div>
                      <div className="text-gray-400 text-sm font-semibold">{currentItem.category}</div>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {currentItem.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {currentItem.description}
                  </p>
                  {/* Features */}
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {currentItem.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={currentItem.link}
                      className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Technology
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                    <button className="flex items-center justify-center border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </button>
                  </div>
                </div>
                {/* Right Side - Visual */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl p-8 border border-purple-400/30">
                    <div className="text-8xl mb-4 text-center">{currentItem.image}</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">{currentItem.title}</div>
                      <div className="text-purple-400 font-semibold">{currentItem.category}</div>
                    </div>
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Star className="w-6 h-6 text-black" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center"
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-black" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {newContentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 w-12' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Bottom Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "4", label: "Revolutionary Technologies", icon: Rocket },
            { number: "∞", label: "Possibilities Unlocked", icon: Infinity },
            { number: "2037-2040", label: "Future Timeline", icon: Star },
            { number: "100%", label: "Reality Transformation", icon: Gem }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-xl mx-auto mb-4 w-fit">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

export default NewContentShowcaseBanner2025;