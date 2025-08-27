
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

// Memoized stats data for better performance
const STATS_DATA = [
  { value: "500+", label: "Projects Delivered", icon: Star, description: "Successful implementations" },
  { value: "50+", label: "Expert Team", icon: Users, description: "Certified professionals" },
  { value: "99.9%", label: "Uptime", icon: Zap, description: "Reliable infrastructure" },
  { value: "24/7", label: "Support", icon: Shield, description: "Always available" }
] as const;

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Memoized scroll handler for better performance
  const handleScrollToContent = useCallback(() => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Memoized floating elements for better performance
  const floatingElements = useMemo(() => [
    {
      className: "absolute top-20 left-10",
      animation: { y: [0, -20, 0] },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      size: "w-4 h-4",
      color: "bg-cyan-400"
    },
    {
      className: "absolute top-40 right-20",
      animation: { y: [0, 20, 0] },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
      size: "w-3 h-3",
      color: "bg-blue-400"
    },
    {
      className: "absolute bottom-40 left-20",
      animation: { y: [0, -15, 0] },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
      size: "w-2 h-2",
      color: "bg-purple-400"
    }
  ], []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-700/20"></div>
      </motion.div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={element.className}
          animate={element.animation}
          transition={element.transition}
          aria-hidden="true"
        >
          <div className={`${element.size} ${element.color} rounded-full opacity-60`}></div>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
            role="status"
            aria-label="Leading AI & Technology Solutions"
          >
            <Zap className="w-4 h-4 mr-2" aria-hidden="true" />
            Leading AI & Technology Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
            Transform your business with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Explore our services"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            
            <button
              onClick={handleScrollToContent}
              className="group inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Learn more about Zion Tech Group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              Learn More
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            role="region"
            aria-label="Company statistics"
          >
            {STATS_DATA.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                  <stat.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
