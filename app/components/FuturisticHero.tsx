'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  Play, 
  Star, 
  TrendingUp,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const FuturisticHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  const floatingElements = [
    { icon: Brain, delay: 0, x: -100, y: -50 },
    { icon: Zap, delay: 0.5, x: 100, y: -30 },
    { icon: Shield, delay: 1, x: -80, y: 50 },
    { icon: Globe, delay: 1.5, x: 120, y: 40 },
  ];

  const stats = [
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Expert Support', icon: Users },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
        
        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400/20"
            initial={{ opacity: 0, x: element.x, y: element.y }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              x: [element.x, element.x + 20, element.x],
              y: [element.y, element.y - 20, element.y],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <element.icon className="w-16 h-16" />
          </motion.div>
        ))}

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#00ff00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-2" />
              Leading AI & IT Solutions Provider
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="holographic-text">Transform</span>
              <br />
              <span className="text-white">Your Business</span>
              <br />
              <span className="neon-text">With AI</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Unlock the power of artificial intelligence and cutting-edge technology. 
              We deliver innovative solutions that drive growth, efficiency, and competitive advantage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg flex items-center justify-center group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white neon-glow">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central AI Brain */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center energy-pulse">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {[
                { icon: Zap, color: 'from-yellow-500 to-orange-600', delay: 0 },
                { icon: Shield, color: 'from-green-500 to-emerald-600', delay: 0.5 },
                { icon: Globe, color: 'from-blue-500 to-cyan-600', delay: 1 },
                { icon: Users, color: 'from-pink-500 to-rose-600', delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    transformOrigin: '0 0',
                    transform: 'translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg)'
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center energy-pulse`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              ))}

              {/* Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {[...Array(8)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx="50%"
                    cy="50%"
                    r="120"
                    fill="none"
                    stroke="url(#dataGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                ))}
                <defs>
                  <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#ff00ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-2 text-purple-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">300% ROI</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FuturisticHero;