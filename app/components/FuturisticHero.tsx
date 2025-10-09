'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe, ArrowRight, Star, TrendingUp, Users, CheckCircle } from 'lucide-react';

const FuturisticHero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const animatedTexts = [
    "Advanced AI Solutions",
    "Quantum Computing",
    "Autonomous Systems", 
    "Digital Transformation",
    "Enterprise Intelligence"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 1000">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Main Title */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="holographic-text-enhanced cyber-text glitch">
              ZION
            </span>
            <br />
            <span className="holographic-text-enhanced cyber-text glitch">
              TECH
            </span>
            <br />
            <span className="holographic-text-enhanced cyber-text glitch">
              GROUP
            </span>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="text-2xl md:text-4xl text-cyan-400 font-medium mb-4"
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {animatedTexts[currentText]}
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
            and digital transformation services. Transform your business with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Users, value: "500+", label: "Clients Served" },
            { icon: TrendingUp, value: "300%", label: "Average ROI" },
            { icon: Star, value: "99.9%", label: "Satisfaction Rate" },
            { icon: Globe, value: "50+", label: "Countries" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="cyber-card-advanced p-6 text-center hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="tel:+13024640950"
            className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Brain className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Call: (302) 464-0950
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: Brain, x: 10, y: 20, delay: 0 },
            { icon: Zap, x: 85, y: 15, delay: 0.5 },
            { icon: Shield, x: 15, y: 80, delay: 1 },
            { icon: Globe, x: 80, y: 85, delay: 1.5 }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute w-12 h-12 text-cyan-400 opacity-20"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <item.icon className="w-full h-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FuturisticHero;