import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Building,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sparkles,
  Target,
  Users,
  Award,
  Clock,
  Eye,
  Heart,
  Share2,
  Download,
  ExternalLink
} from 'lucide-react';

export function HomeHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const heroStats = [
    { label: 'AI Solutions', value: '50+', icon: Brain, color: 'from-purple-600 to-pink-600', description: 'Cutting-edge AI services' },
    { label: 'Enterprise Clients', value: '200+', icon: Building, color: 'from-blue-600 to-cyan-600', description: 'Trusted by industry leaders' },
    { label: 'Success Rate', value: '98%', icon: CheckCircle, color: 'from-green-600 to-emerald-600', description: 'Proven track record' },
    { label: 'Years Experience', value: '15+', icon: Star, color: 'from-yellow-600 to-orange-600', description: 'Deep expertise' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Auto-rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % heroStats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroStats.length]);

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            variants={floatingVariants}
            animate="float"
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 7}%`,
              top: `${30 + i * 8}%`,
            }}
          />
        ))}
        
        {/* Larger floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-4 h-4 bg-purple-400 rounded-full opacity-15"
            variants={floatingVariants}
            animate="float"
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Interactive Video Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50"></div>
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-2">
            <button
              onClick={handleVideoToggle}
              className="p-2 bg-zion-blue-dark/80 border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-blue-dark transition-all duration-300"
            >
              {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={handleMuteToggle}
              className="p-2 bg-zion-blue-dark/80 border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-blue-dark transition-all duration-300"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={handleFullscreenToggle}
              className="p-2 bg-zion-blue-dark/80 border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-blue-dark transition-all duration-300"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              Pioneering the future with cutting-edge AI solutions, quantum computing, 
              and revolutionary technology services that transform businesses worldwide
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-400/25"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Grid with Auto-rotation */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => setCurrentStatIndex(index)}
              >
                <motion.div 
                  className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  variants={pulseVariants}
                  animate={currentStatIndex === index ? "pulse" : "initial"}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  key={currentStatIndex === index ? 'active' : 'inactive'}
                  initial={{ scale: 1 }}
                  animate={{ scale: currentStatIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-300 font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </div>
                
                {/* Active indicator */}
                {currentStatIndex === index && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-zion-cyan rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div variants={itemVariants} className="mt-16">
            <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((company, index) => (
                <motion.div
                  key={company}
                  className="text-gray-400 font-semibold hover:text-zion-cyan transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Features */}
          <motion.div variants={itemVariants} className="mt-12 flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-blue/30 transition-all duration-300"
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-blue/30 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-blue/30 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Download</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative group cursor-pointer">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <motion.p 
          className="text-cyan-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>

      {/* Floating Action Button */}
      <motion.button
        className="absolute top-8 right-8 p-3 bg-zion-blue-dark/80 border border-zion-purple/30 rounded-full text-zion-cyan hover:bg-zion-blue-dark transition-all duration-300 z-20"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <RotateCcw className="w-5 h-5" />
      </motion.button>
    </section>
  );
}